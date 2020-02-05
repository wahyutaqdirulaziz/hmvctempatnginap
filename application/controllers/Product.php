<?php
	class Product extends CI_Controller{
		public function index(){
			$data['product']=$this->product_m->get_all();
			$this->load->view('product',$data);
		}
 
		public function search(){
			$keyword = $this->input->post('keyword');
			$data['products']=$this->product_m->get_product_keyword($keyword);
			$this->load->view('search',$data);
		}
	}