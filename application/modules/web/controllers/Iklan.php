<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Penginapan extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Penginapan');
		$this->load->model('M_Kategori_Penginapan');
		$this->load->model('M_Member');
		$this->load->model('M_Regency');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Penginapan';
        $data['penginapans'] = $this->auth->roles()[0] == 2 ? $this->M_Penginapan->getKamarByUser($this->auth->userID()) : $this->M_Penginapan->getAll();
		$this->load->view('admin/penginapan/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Penginapan';
		$data['members'] = $this->M_Member->getActiveMember();
        $data['kategori_penginapans'] = $this->M_Kategori_Penginapan->getAll();
        $data['regencies'] = $this->M_Regency->getAll();

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->load->helper('slug');
			$this->form_validation->set_rules('nama_kamar', 'Nama penginapan', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('jenis_kamar', 'Jenis penginapan', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('alamat', 'Alamat', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('regency_id', 'Kota', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('nomor_handphone', 'Nomor Handphone', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('stok', 'Kamar Kosong', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('latitude', 'Lokasi', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('longitude', 'Lokasi', 'required',
                        					 ['required' => '%s belum dipilih.']
                );

			if($this->auth->roles()[0] != 2)
			{
				$this->form_validation->set_rules('user_id', 'Pemilik', 'required',
	                        					 ['required' => '%s harus dipilih.']
	                );
			}


			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				if($this->auth->roles()[0] == 2)
				{
					$input_data['user_id'] = $this->auth->userID();
				}

				$input_data['slug'] = generateSlug($input_data['nama_kamar'], 'kamar', 'slug');

				/* LOOPING UPLOAD GAMBAR */

				$upload_path = 'uploads/images/penginapan';

				/* buat folder baru */
				if (!is_dir($upload_path)) {
				    mkdir($upload_path, 0777, TRUE);
				}

				$config['encrypt_name'] = TRUE;
				$config['upload_path'] = $upload_path;
				$config['allowed_types'] = 'gif|jpg|jpeg|png';
				$config['max_size']	= '3000000000';
				$config['max_width']  = '5000000000';
				$config['max_height']  = '3000000000';
				$this->load->library('upload', $config);

				for ($i=0; $i < 4; $i++) {
					$_FILES['file']['name'] = $_FILES['gambar']['name'][$i];
		          	$_FILES['file']['type'] = $_FILES['gambar']['type'][$i];
			        $_FILES['file']['tmp_name'] = $_FILES['gambar']['tmp_name'][$i];
			        $_FILES['file']['error'] = $_FILES['gambar']['error'][$i];
			        $_FILES['file']['size'] = $_FILES['gambar']['size'][$i];
					
					if(!empty($_FILES['file']['name'])){
		                if($this->upload->do_upload('file')){
		                	$uploadData = $this->upload->data();
		                	$filename = $uploadData['file_name'];
		                	$input_data['gambar'][$i] = $filename;
		                	$input_data['gambar_utama'][$i] = isset($this->input->post('gambar_utama')[$i]) ? $this->input->post('gambar_utama')[$i] : null;
		                }
		            }
				}

				/* END LOOPING GAMBAR */

				$store_Penginapan = $this->M_Penginapan->store($input_data);

				if($store_Penginapan){
					$this->session->set_flashdata('message', 'Penginapan berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan penginapan');
				}

				redirect('penginapan');
			}
		}

		$this->load->view('admin/penginapan/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Penginapan';
		$id_penginapan = $this->uri->segment(3);
		$data['data'] = $this->M_Penginapan->getById($id_penginapan);
		$data['members'] = $this->M_Member->getActiveMember();
        $data['kategori_penginapans'] = $this->M_Kategori_Penginapan->getAll();
        $data['regencies'] = $this->M_Regency->getAll();

        if($this->auth->roles()[0] == 2)
		{
			if(!$this->M_Penginapan->findByIdUserId($id_penginapan, $this->auth->userID())){
				$this->session->set_flashdata('error_message', 'Penginapan tidak ditemukan');
				redirect('penginapan');
			}
		} else {
			if(!$this->M_Penginapan->findById($id_penginapan)){
				$this->session->set_flashdata('error_message', 'Penginapan tidak ditemukan');
				redirect('penginapan');
			}
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama_kamar', 'Nama penginapan', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('jenis_kamar', 'Jenis penginapan', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('alamat', 'Alamat', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('regency_id', 'Kota', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('nomor_handphone', 'Nomor Handphone', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('stok', 'Kamar Kosong', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka']
                );
			$this->form_validation->set_rules('latitude', 'Lokasi', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('longitude', 'Lokasi', 'required',
                        					 ['required' => '%s belum dipilih.']
                );

			if($this->auth->roles()[0] != 2)
			{
				$this->form_validation->set_rules('user_id', 'Pemilik', 'required',
	                        					 ['required' => '%s harus dipilih.']
	                );
			}

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$update_Penginapan = $this->M_Penginapan->update($id_penginapan, $input_data);

				if($update_Penginapan){
					$this->session->set_flashdata('message', 'Penginapan berhasil diupdate');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengupdate penginapan');
				}

				redirect('penginapan');
			}
		}

		$this->load->view('admin/penginapan/edit', $data);
	}

	public function delete()
	{
		if($this->input->post())
		{
			$id_penginapan = $this->uri->segment(3);
			if($this->auth->roles()[0] == 2)
			{
				if(!$this->M_Penginapan->findByIdUserId($id_penginapan, $this->auth->userID())){
					$this->session->set_flashdata('error_message', 'Penginapan tidak ditemukan');
					redirect('penginapan');
				}
			} else {
				if(!$this->M_Penginapan->findById($id_penginapan)){
					$this->session->set_flashdata('error_message', 'Penginapan tidak ditemukan');
					redirect('penginapan');
				}
			}

			$this->M_Penginapan->delete($id_penginapan);
			$this->session->set_flashdata('message', 'Penginapan berhasil dihapus');
			redirect('penginapan');

		}

		show_404();
	}
	
}

?>