<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		$this->load->model('M_Member');
		$this->load->model('M_Regency');
	}

	public function index()
	{
		if($this->input->post())
		{
			$this->load->library('form_validation');
			$this->form_validation->set_rules('nama', 'Nama', 'required',
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
			$this->form_validation->set_rules('email', 'Email', 'required|is_unique[member.email]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'is_unique' => '%s sudah digunakan.']
                );
			$this->form_validation->set_rules('password', 'Kata sandi', 'required|min_length[8]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'min_length' => '%s minimal 8 karakter.']
                );
			$this->form_validation->set_rules('confirm_password', 'Konfirmasi kata sandi', 'required|matches[password]',
                        					 ['required' => '%s tidak boleh kosong.',
                        					  'matches' => 'Konfirmasi %s salah']
                );

			if ($this->form_validation->run() == TRUE){
				foreach($this->input->post() as $e=>$f)
				{
					if($e!='create'){
						$input_data[$e] = $this->input->post($e);
					}
				}

				$store_member = $this->M_Member->store($input_data);
				$user = $this->db->get_where('users', ['username' => $input_data['email']])->row();

				$this->session->set_userdata(array(
		            "userID" => $user->id,
		            "username" => $user->username,
		            "user_name" => $user->name,
		            "roles" => ['2'],
		            "loginStatus" => true
		        ));

				redirect('dashboard');
			}
		}

        $data['regencies'] = $this->M_Regency->getAll();
		return $this->load->view('auth/register', $data);
	}
}