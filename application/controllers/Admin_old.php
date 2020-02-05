<?php

class Admin extends CI_Controller{

    public function __construct()
	{
		parent::__construct();

		cek_login();
	}
   
    public function index(){
        $data['user'] = $this->db->get_where('user', ['email'=> $this->session->userdata('email')])->row_array();       
        $this->load->view('adminbaru/menu/template/header',$data);
        $this->load->view('adminbaru/menu/template/sidebar',$data);
        $this->load->view('adminbaru/menu/dashboard',$data);
        $this->load->view('adminbaru/menu/template/footer');
    }
}


?>