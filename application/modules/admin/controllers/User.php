<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class user extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Role');
		$this->load->model('M_User');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Pengguna';
        $data['penggunas'] = $this->M_User->getAll();
		$this->load->view('admin/user/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Pengguna';
		$data['roles'] = $this->M_Role->getAll();

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('name', 'Nama pengguna', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('username', 'Nama pengguna', 'required|is_unique[users.username]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'is_unique' => '%s sudah digunakan.']
                );
			$this->form_validation->set_rules('role_id', 'Hak akses', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('password', 'Kata sandi', 'required|min_length[8]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'min_length' => '%s minimal 8 karakter.']
                );
			$this->form_validation->set_rules('confirm_password', 'Konfirmasi kata sandi', 'required|matches[password]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'matches' =>  '%s salah']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$upload_path = 'uploads/images/user';

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

				if(!empty($_FILES['picture']['name'])){
	                if($this->upload->do_upload('picture')){
	                	$uploadData = $this->upload->data();
	                	$filename = $uploadData['file_name'];
	                	$input_data['picture'] = $filename;
	                }
	            }

				$store_user = $this->M_User->store($input_data);

				if($store_user){
					$this->session->set_flashdata('message', 'Pengguna berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan Pengguna');
				}

				redirect(admin_url('user'));
			}
		}

		$this->load->view('admin/user/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Pengguna';
		$data['roles'] = $this->M_Role->getAll();
		$user_id = admin_uri_segment(3);
		$data['data'] = $this->M_User->getById($user_id);
		$user_picture = $data['data']->picture;

		if(!$this->M_User->findById($user_id)){
			$this->session->set_flashdata('error_message', 'Pengguna tidak ditemukan');
			redirect(admin_url('user'));
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('name', 'Nama pengguna', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('role_id', 'Hak akses', 'required',
                        					 ['required' => '%s belum dipilih.']
                );

			if(!empty($this->input->post('password'))){
				$this->form_validation->set_rules('password', 'Kata sandi', 'min_length[8]',
	                        					 ['required' => '%s tidak boleh kosong.',
	                        					  'min_length' => '%s minimal 8 karakter.']
	                );
				$this->form_validation->set_rules('confirm_password', 'Konfirmasi kata sandi', 'matches[password]',
	                        					 ['required' => '%s tidak boleh kosong.',
	                        					  'matches' => '%s salah']
	                );
			}

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create' && !empty($this->input->post($e))){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$upload_path = 'uploads/images/user';

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

				if(!empty($_FILES['picture']['name'])){
	                if($this->upload->do_upload('picture')){
	                	$uploadData = $this->upload->data();
	                	$filename = $uploadData['file_name'];
	                	$input_data['picture'] = $filename;
	                }
	            }

				$update_user = $this->M_User->update($user_id, $input_data);

				if($update_user){
					if(isset($input_data['picture'])){
						if(file_exists($upload_path.'/'.$data['data']->picture)){
							unlink($upload_path.'/'.$data['data']->picture);
						}
					}

					$this->session->set_flashdata('message', 'Pengguna berhasil diubah');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengubah pengguna');
				}

				redirect(admin_url('user'));
			}
		}

		$this->load->view('admin/user/edit', $data);
	}

	public function delete()
	{
		if($this->input->post())
		{
			$user_id = admin_uri_segment(3);

			if(!$this->M_User->findById($user_id)){
				$this->session->set_flashdata('error_message', 'Pengguna tidak ditemukan');
				redirect(admin_url('user'));
			}

			if($this->M_User->getById($user_id)->lock == 1){
				$this->session->set_flashdata('error_message', 'Pengguna tidak bisa dihapus');
				redirect(admin_url('user'));
			}

			$this->M_User->delete($user_id);
			$this->session->set_flashdata('message', 'Pengguna berhasil dihapus');
			redirect(admin_url('user'));

		}

		show_404();
	}
	
}

?>