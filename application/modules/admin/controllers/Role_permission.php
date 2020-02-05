<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Role_permission extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Role');
		$this->load->model('M_Role_Permission');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Hak Akses Pengguna';
        $data['roles'] = $this->M_Role->getAll();
		$this->load->view('admin/role_permission/index', $data);
	}

	// public function create()
	// {
	// 	$data['title'] = 'Tambah Hak Akses Pengguna';

	// 	if($this->input->post()){
	// 		$this->load->library('form_validation');
	// 		$this->form_validation->set_rules('name', 'Nama Hak Akses Pengguna', 'required',
 //                        					 ['required' => '%s tidak boleh kosong.']
 //                );
	// 		$this->form_validation->set_rules('display_name', 'Nama Tampilan', 'required',
 //                        					 ['required' => '%s tidak boleh kosong.']
 //                );

	// 		if ($this->form_validation->run() == TRUE){
	// 			foreach($this->input->post() as $e=>$f)
	// 			{
	// 				if($e!='create'){
	// 					$input_data[$e] = $this->input->post($e);
	// 				}
	// 			}

	// 			$store_role = $this->M_Role->store($input_data);

	// 			if($store_role){
	// 				$this->session->set_flashdata('message', 'Hak Akses Pengguna berhasil ditambahkan');
	// 			} else {
	// 				$this->session->set_flashdata('error_message', 'Gagal menambahkan Hak Akses Pengguna');
	// 			}

	// 			redirect(admin_url('role-permission'));
	// 		}
	// 	}

	// 	$this->load->view('admin/role_permission/create', $data);
	// }

	public function edit()
	{
		$data['title'] = 'Edit Hak Akses Pengguna';
		$role_id = admin_uri_segment(3);
		$data['data'] = $this->M_Role->getById($role_id);
		$data['menus'] = $this->M_Role_Permission->getMenu();
		$data['role_menu'] = array();
		$data['permission_role'] = array();

		foreach ($this->M_Role_Permission->getRoleMenu($role_id) as $rm) {
			$data['role_menu'][] = $rm->menu_id;
		}

		foreach ($this->M_Role_Permission->getPermissionRole($role_id) as $rp) {
			$data['permission_role'][] = $rp->permission_id;
		}

		if(!$this->M_Role->findById($role_id)){
			$this->session->set_flashdata('error_message', 'Hak Akses tidak ditemukan');
			redirect(admin_url('role-permission'));
		}

		if($this->input->post()){
			foreach($this->input->post() as $e=>$f)
			{
				if($e!='create'){
					$input_data[$e] = $this->input->post($e);
				}
			}

			$input_data['role_id'] = $role_id;

			$update_role = $this->M_Role_Permission->update($role_id, $input_data);

			if($update_role){
				$this->session->set_flashdata('message', 'Hak Akses Pengguna berhasil diupdate');
			} else {
				$this->session->set_flashdata('error_message', 'Gagal mengupdate Hak Akses Pengguna');
			}

			redirect(admin_url('role-permission'));
		}

		$this->load->view('admin/role_permission/edit', $data);
	}

	// public function delete()
	// {
	// 	if($this->input->post())
	// 	{
	// 		$role_id = admin_uri_segment(3);

	// 		if(!$this->M_Role->findById($role_id)){
	// 			$this->session->set_flashdata('error_message', 'Hak Akses Pengguna tidak ditemukan');
	// 			redirect(admin_url('role-permission'));
	// 		}

	// 		if($this->M_Role->getById($role_id)->lock == 1){
	// 			$this->session->set_flashdata('error_message', 'Hak Akses Pengguna tidak bisa dihapus');
	// 			redirect(admin_url('role-permission'));
	// 		}

	// 		$this->M_Role->delete($role_id);
	// 		$this->session->set_flashdata('message', 'Hak Akses Pengguna berhasil dihapus');
	// 		redirect(admin_url('role-permission'));

	// 	}

	// 	show_404();
	// }
	
}

?>