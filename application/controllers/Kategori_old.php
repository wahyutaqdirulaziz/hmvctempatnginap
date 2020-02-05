<?php
class Kategori extends CI_Controller{
    public function index()
	{
		$this->load->database();
		$jumlah_data = $this->Model_sorum->jumlah_data();
		$this->load->library('pagination');
		$config['base_url'] = base_url().'index.php/Baru/index/';
		$config['total_rows'] = $jumlah_data;
		$config['per_page'] = 4;
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
        $this->load->view('Baru/header', $data);
        $this->load->view('Baru/Baru', $data);
        $this->load->view('Baru/footer', $data);
	}

    public function Kos_cewek(){
        $data['Kategori']= $this->M_Kategori->kos_cewek()->result();
        $this->load->view('Baru/header', $data);
		$this->load->view('Baru/cewek', $data);
		$this->load->view('Baru/footer', $data);

    }
    public function Kos_campur(){
        $data['Kategori']= $this->M_Kategori->kos_campur()->result();
        $this->load->view('Baru/header', $data);
		$this->load->view('Baru/Kategori', $data);
		$this->load->view('Baru/footer', $data);
    }
    public function Kos_cowok(){
        $data['Kategori']= $this->M_Kategori->kos_cowok()->result();
        $this->load->view('Baru/header', $data);
		$this->load->view('Baru/Kategori', $data);
		$this->load->view('Baru/footer', $data);
    }
    public function unham(){
        $data['Kategori']= $this->M_Kategori->unham()->result();
        $this->load->view('Baru/header', $data);
		$this->load->view('Baru/kampus', $data);
		$this->load->view('Baru/footer', $data);
    }
    public function ugr(){
        $data['Kategori']= $this->M_Kategori->ugr()->result();
        $this->load->view('Baru/header', $data);
		$this->load->view('Baru/kampus', $data);
		$this->load->view('Baru/footer', $data);
    }




}




?>