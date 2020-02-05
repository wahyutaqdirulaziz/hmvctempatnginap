<?php

class Access_denied extends CI_Controller{

    public function __construct()
	{
		parent::__construct();
        $this->load->library('auth');
	}
   
    public function index(){
        $data['title'] = 'Hak Akses';
        $this->load->view('errors/access_denied', $data);
    }
}

?>