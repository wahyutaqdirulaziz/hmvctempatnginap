<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Menu extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Menu');
		$this->load->model('M_Permission');
		$this->load->library('auth');
		$this->auth->route_access();
	}

	public function index()
	{
		$data['title'] = 'Menu';
        $data['menus'] = $this->M_Menu->getAll();

        $this->load->view('admin/menu/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Menu';
        $data['menus'] = $this->M_Menu->getAll();

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('name', 'Menu', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$store_menu = $this->M_Menu->store($input_data);

				if($store_menu){
					$this->session->set_flashdata('message', 'Menu berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan menu');
				}

				redirect(admin_url('menu'));
			}
		}

		$this->load->view('admin/menu/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Menu';
		$menu_id = admin_uri_segment(3);
		$menu = $this->M_Menu->getById($menu_id);
		$data['data'] = $menu;
        $data['menus'] = $this->M_Menu->getAll();
        $data['permissions'] = $this->M_Permission->findWhere(['menu_id' => $menu_id]);

		if(!$this->M_Menu->findById($menu_id)){
			$this->session->set_flashdata('error_message', 'Menu tidak ditemukan');
			redirect(admin_url('menu'));
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('name', 'Menu', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$update_menu = $this->M_Menu->update($menu_id, $input_data);

				if($update_menu){
					$this->session->set_flashdata('message', 'Menu berhasil diupdate');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengupdate menu');
				}

				redirect(admin_url('menu'));
			}
		}

		$this->load->view('admin/menu/edit', $data);
	}

	public function adjust()
	{

	}

	public function delete()
	{
		if($this->input->post())
		{
			$menu_id = admin_uri_segment(3);

			if(!$this->M_Menu->findById($menu_id)){
				$this->session->set_flashdata('error_message', 'Menu tidak ditemukan');
				redirect(admin_url('menu'));
			}

			$this->M_Menu->delete($menu_id);
			$this->session->set_flashdata('message', 'Menu berhasil dihapus');
			redirect(admin_url('menu'));

		}

		show_404();
	}
}
