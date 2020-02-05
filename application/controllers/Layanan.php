<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Layanan extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Layanan');
		$this->load->model('M_Member');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Kost & Penginapan';
        $data['layanans'] = $this->M_Layanan->getAll();
		$this->load->view('admin/layanan/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Kost & Penginapan';
		$data['members'] = $this->M_Member->getActiveMember();

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama_kos', 'Nama kos', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('alamat', 'Alamat', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('kota', 'Kota', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('no_hp', 'Nomor whatsapp', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('harga', 'Harga', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('stok', 'Kamar Kosong', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('id_user', 'Pemilik', 'required',
                        					 ['required' => '%s harus dipilih.']
                );
			$this->form_validation->set_rules('katagori', 'Kategori', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$store_layanan = $this->M_Layanan->store($input_data);

				if($store_layanan){
					$this->session->set_flashdata('message', 'Kos & penginapan berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan Kos & penginapan');
				}

				redirect('layanan');
			}
		}

		$this->load->view('admin/layanan/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Kost & Penginapan';
		$layanan_id = $this->uri->segment(3);
		$data['data'] = $this->M_Layanan->getById($layanan_id);
		$data['members'] = $this->M_Member->getActiveMember();

		if(!$this->M_Layanan->findById($layanan_id)){
			$this->session->set_flashdata('error_message', 'Kost & penginapan tidak ditemukan');
			redirect('layanan');
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama_kos', 'Nama kos', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('alamat', 'Alamat', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('kota', 'Kota', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('no_hp', 'Nomor whatsapp', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('harga', 'Harga', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('stok', 'Kamar Kosong', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('id_user', 'Pemilik', 'required',
                        					 ['required' => '%s harus dipilih.']
                );
			$this->form_validation->set_rules('katagori', 'Kategori', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$update_layanan = $this->M_Layanan->update($layanan_id, $input_data);

				if($update_layanan){
					$this->session->set_flashdata('message', 'Kos & penginapan berhasil diupdate');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengupdate kos & penginapan');
				}

				redirect('layanan');
			}
		}

		$this->load->view('admin/layanan/edit', $data);
	}

	public function delete()
	{
		if($this->input->post())
		{
			$layanan_id = $this->uri->segment(3);

			if(!$this->M_Layanan->findById($layanan_id)){
				$this->session->set_flashdata('error_message', 'layanan tidak ditemukan');
				redirect('layanan');
			}

			$this->M_Layanan->delete($layanan_id);
			$this->session->set_flashdata('message', 'layanan berhasil dihapus');
			redirect('layanan');

		}

		show_404();
	}
	
}

?>