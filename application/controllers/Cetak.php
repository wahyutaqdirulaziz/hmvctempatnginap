<?php

class Cetak extends CI_Controller{


    public function index(){
        $this->load->view('depan/templates/header');
		$this->load->view('depan/templates/sidebar');
        $this->load->view('depan/Cetak');
        $this->load->view('depan/templates/footer');

    }

}


?>