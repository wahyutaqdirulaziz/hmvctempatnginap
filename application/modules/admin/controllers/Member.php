<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Member extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Member');
		$this->load->model('M_Regency');
		$this->load->library('auth');
		$this->auth->route_access();
	}

    public function index(){
		$data['title'] = 'Member';
        $data['members'] = $this->M_Member->getAll();
		$this->load->view('admin/member/index', $data);
	}

	public function create()
	{
		$data['title'] = 'Tambah Member';
        $data['regencies'] = $this->M_Regency->getAll();

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama', 'Nama member', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('alamat', 'Alamat', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('regency_id', 'Kota', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('nomor_handphone', 'Nomor handphone', 'required|numeric',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'numeric' => '%s harus berisi angka.']
                );
			$this->form_validation->set_rules('email', 'Email', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('password', 'Password', 'required|min_length[8]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'min_length' => '%s minimal 8 karakter.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$store_member = $this->M_Member->store($input_data);

				if($store_member){
					$this->session->set_flashdata('message', 'Member berhasil ditambahkan');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal menambahkan member');
				}

				redirect(admin_url('member'));
			}
		}

		$this->load->view('admin/member/create', $data);
	}

	public function edit()
	{
		$data['title'] = 'Edit Member';
        $data['regencies'] = $this->M_Regency->getAll();
		$member_id = admin_uri_segment(3);
		$member = $this->M_Member->getById($member_id);
		$data['data'] = $member;

		if(!$this->M_Member->findById($member_id)){
			$this->session->set_flashdata('error_message', 'Member tidak ditemukan');
			redirect(admin_url('member'));
		}

		if($this->input->post()){
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama', 'Nama member', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('alamat', 'Alamat', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('regency_id', 'Kota', 'required',
                        					 ['required' => '%s belum dipilih.']
                );
			$this->form_validation->set_rules('nomor_handphone', 'Nomor handphone', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );
			$this->form_validation->set_rules('email', 'Email', 'required',
                        					 ['required' => '%s tidak boleh kosong.']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$input_data['user_id'] = $member->user_id;

				$update_member = $this->M_Member->update($member_id, $input_data);

				if($update_member){
					$this->session->set_flashdata('message', 'Member berhasil diupdate');
				} else {
					$this->session->set_flashdata('error_message', 'Gagal mengupdate member');
				}

				redirect(admin_url('member'));
			}
		}

		$this->load->view('admin/member/edit', $data);
	}

	public function delete()
	{
		if($this->input->post())
		{
			$member_id = admin_uri_segment(3);

			if(!$this->M_Member->findById($member_id)){
				$this->session->set_flashdata('error_message', 'Member tidak ditemukan');
				redirect(admin_url('member'));
			}

			$this->M_Member->delete($member_id);
			$this->session->set_flashdata('message', 'Member berhasil dihapus');
			redirect(admin_url('member'));

		}

		show_404();
	}

	public function edit_old(){
		$data['user'] = $this->db->get_where('user', ['email'=> $this->session->userdata('email')])->row_array();       
		$this->form_validation->set_rules('name', 'Full name','required|trim');
		if($this->form_validation->run()== false){
			$this->load->view('adminbaru/menu/template/header',$data);
			$this->load->view('adminbaru/menu/template/sidebar',$data);
		$this->load->view('member/editprofil',$data);
		$this->load->view('adminbaru/menu/template/footer');
		}else{
			$nama = $this->input->post('name');
			$email    = $this->input->post('email');
			$upload_gambar = $_FILES['gambar']['name'];
			if($upload_gambar){
				$config['upload_path']= './uploads/profil';
					$config['allowed_types']= 'jpg|jpeg|png|gif';
					
					$this->load->library('upload', $config);

					if($this->upload->do_upload('gambar')){
						$new_gambar= $this->upload->data('file_name');
						$this->db->set('gambar_user',$new_gambar);
					
					}else{
						echo 'gambar tidak di upload';
					}


			}
			
			$this->db->set('nama',$nama);
			$this->db->where('email', $email);
			$this->db->update('user');

			redirect('Member');
		
		}
	}
	
}



?>