<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pencarian extends CI_Controller {
    function __construct(){
        parent::__construct();
        $this->load->model('M_Penginapan');
    }
    public function index()
    {
        $jumlah_data = $this->M_Penginapan->getCount();
        $this->load->library('pagination');
        $config['base_url'] = base_url('home/index/');
        $config['total_rows'] = $jumlah_data;
        $config['per_page'] = 10;
        $config['next_link'] = 'Selanjutnya';
        $config['prev_link'] = 'Sebelumnya';
        $config['first_link'] = 'Awal';
        $config['last_link'] = 'Akhir';
        $config['full_tag_open'] = '<nav aria-label="Page navigation example">
		<ul class="pagination">';
        $config['full_tag_close'] = ' </ul>
		</nav>';
        $config['num_tag_open'] = '<li class="page-item">';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="page-item active"><a class="page-link" href="#">';
        $config['cur_tag_close'] = '</a></li>';
        $config['prev_tag_open'] = '<li class="page-item">';
        $config['prev_tag_close'] = '</li>';
        $config['next_tag_open'] = '<li class="page-item">';
        $config['next_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_open'] = '<li>';
        $config['first_tag_open'] = '<li>';
        $config['first_tag_open'] = '<li>';
        $config['attributes'] = array('class' => 'page-link');
        $from = $this->uri->segment(3);
        $this->pagination->initialize($config);
        $data['penginapans'] = $this->M_Penginapan->getSearchingWithPagination($config['per_page'], $from, [], ['nama_kamar' => $this->input->get('q')]);
        $this->load->view('web/home/index', $data);
    }

}
