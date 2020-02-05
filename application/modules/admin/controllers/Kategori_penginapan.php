<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kategori_penginapan extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Kategori_Penginapan');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Kategori Penginapan';
        $data['kategori_penginapans'] = $this->M_Kategori_Penginapan->getAll();
		$this->load->view('admin/kategori-penginapan/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Kategori Penginapan';

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama_kategori_kamar', 'Nama kategori penginapan', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$store_kategori_penginapan = $this->M_Kategori_Penginapan->store($input_data);

				if($store_kategori_penginapan){
					$this->session->set_flashdata('message', 'Kategori Penginapan berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan Kategori Penginapan');
				}

				redirect(admin_url('kategori-penginapan'));
			}
		}

		$this->load->view('admin/kategori-penginapan/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Kategori Penginapan';
		$kategori_penginapan_id = admin_uri_segment(3);
		$data['data'] = $this->M_Kategori_Penginapan->getById($kategori_penginapan_id);

		if(!$this->M_Kategori_Penginapan->findById($kategori_penginapan_id)){
			$this->session->set_flashdata('error_message', 'Kategori Penginapan tidak ditemukan');

			redirect(admin_url('kategori-penginapan'));
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama_kategori_kamar', 'Nama kategori penginapan', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$update_kategori_penginapan = $this->M_Kategori_Penginapan->update($kategori_penginapan_id, $input_data);

				if($update_kategori_penginapan){
					$this->session->set_flashdata('message', 'Kategori Penginapan berhasil diupdate');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengupdate Kategori Penginapan');
				}

				redirect(admin_url('kategori-penginapan'));
			}
		}

		$this->load->view('admin/kategori-penginapan/edit', $data);
	}

	public function delete()
	{
		if($this->input->post())
		{
			$kategori_penginapan_id = admin_uri_segment(3);

			if(!$this->M_Kategori_Penginapan->findById($kategori_penginapan_id)){
				$this->session->set_flashdata('error_message', 'Kategori Penginapan tidak ditemukan');
				redirect(admin_url('kategori-penginapan'));
			}

			// if($this->M_Kategori_Penginapan->getById($kategori_penginapan_id)->lock == 1){
			// 	$this->session->set_flashdata('error_message', 'Kategori Penginapan tidak bisa dihapus');
			// 	redirect(admin_url('kategori-penginapan'));
			// }

			$this->M_Kategori_Penginapan->delete($kategori_penginapan_id);
			$this->session->set_flashdata('message', 'Kategori Penginapan berhasil dihapus');
			redirect(admin_url('kategori-penginapan'));

		}

		show_404();
	}
	
}

?>