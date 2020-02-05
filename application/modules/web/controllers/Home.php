<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
    function __construct(){
        parent::__construct();
        $this->load->model('M_Penginapan');
    }
    public function index()
    {
        $data['top_penginapans'] = $this->M_Penginapan->getTopKamar(8);
        $data['new_penginapans'] = $this->M_Penginapan->getWithPagination(8);
        $this->load->view('web/home/index', $data);
    }
}
