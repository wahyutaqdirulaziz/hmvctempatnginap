<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Role extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Role');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Hak Akses';
        $data['roles'] = $this->M_Role->getAll();
		$this->load->view('admin/role/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Hak Akses';

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('name', 'Nama hak akses', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('display_name', 'Nama Tampilan', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$store_role = $this->M_Role->store($input_data);

				if($store_role){
					$this->session->set_flashdata('message', 'Hak akses berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan Hak akses');
				}

				redirect(admin_url('role'));
			}
		}

		$this->load->view('admin/role/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Hak Akses';
		$role_id = admin_uri_segment(3);
		$data['data'] = $this->M_Role->getById($role_id);

		if(!$this->M_Role->findById($role_id)){
			$this->session->set_flashdata('error_message', 'Hak akses tidak ditemukan');
			redirect(admin_url('role'));
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('name', 'Nama hak akses', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('display_name', 'Nama Tampilan', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$update_role = $this->M_Role->update($role_id, $input_data);

				if($update_role){
					$this->session->set_flashdata('message', 'Hak akses berhasil diupdate');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengupdate Hak akses');
				}

				redirect(admin_url('role'));
			}
		}

		$this->load->view('admin/role/edit', $data);
	}

	public function delete()
	{
		if($this->input->post())
		{
			$role_id = admin_uri_segment(3);

			if(!$this->M_Role->findById($role_id)){
				$this->session->set_flashdata('error_message', 'Hak akses tidak ditemukan');
				redirect(admin_url('role'));
			}

			if($this->M_Role->getById($role_id)->lock == 1){
				$this->session->set_flashdata('error_message', 'Hak akses tidak bisa dihapus');
				redirect(admin_url('role'));
			}

			$this->M_Role->delete($role_id);
			$this->session->set_flashdata('message', 'Hak akses berhasil dihapus');
			redirect(admin_url('role'));

		}

		show_404();
	}
	
}

?>