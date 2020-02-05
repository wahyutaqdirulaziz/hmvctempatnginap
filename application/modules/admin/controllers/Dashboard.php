<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Dashboard';
        $this->load->view('admin/Dashboard', $data);
    }
}
?>