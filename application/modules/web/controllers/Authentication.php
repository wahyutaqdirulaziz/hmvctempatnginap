<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Authentication extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->library('auth');
	}

    public function logout(){
    	$this->auth->logout();
    	return redirect(web_url('login'));
    }
}


?>