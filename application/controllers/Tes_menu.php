<?php

class Tes_menu extends CI_Controller{

    public function __construct()
	{
		parent::__construct();
        $this->load->library('auth');
        $this->auth->route_access();
	}
   
    public function index(){
    }
   
    public function create(){
    }
   
    public function edit(){
    }
   
    public function delete(){
    }
}


?>