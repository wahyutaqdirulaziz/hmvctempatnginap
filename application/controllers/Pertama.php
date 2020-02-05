<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pertama extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 * 
	 */
	function __construct(){
		parent::__construct();
		$this->load->helper(array('url'));
		$this->load->model('M_depan');
	}
	public function index()
	{
		$this->load->database();
		$jumlah_data = $this->Model_sorum->jumlah_data();
		$this->load->library('pagination');
		$config['base_url'] = base_url().'index.php/Pertama/index/';
		$config['total_rows'] = $jumlah_data;
		$config['per_page'] = 9;
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
		$data['motor'] = $this->Model_sorum->data($config['per_page'],$from);

		$this->load->view('depan/templates/header');
		$this->load->view('depan/templates/sidebar');
		$this->load->view('depan/pertama', $data);
		$this->load->view('depan/templates/footer');
	}
	public function cek_kos($id_kos){
		$data['motor']=$this->Model_sorum->Cek_kos($id_kos);
		$this->load->view('depan/templates/header');
		$this->load->view('depan/templates/sidebar');
		$this->load->view('depan/cek_kos', $data);
		$this->load->view('depan/templates/footer');
	}
}
