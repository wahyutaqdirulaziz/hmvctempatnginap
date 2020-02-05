<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Login extends CI_Controller{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
    }

    public function index(){
        $this->form_validation->set_rules('email','Email','required|trim|valid_email');
        $this->form_validation->set_rules('password','Password','required|trim');
        if($this->form_validation->run()== false)
        
        {
            $this->load->view('login/header');
            $this->load->view('Login');
            $this->load->view('login/footer');
        }else{
            $this->_Login();
        }
        
       
    }

    private function _Login(){

        $email = $this->input->post('email');
        $password = $this->input->post('password');
       

        $user = $this->db->get_where('user' , [
            'email' => $email,
          

            
        ])->row_array(); 

        //jika user ada
        if($user){
                //jika user aktif
           if($user['is_active']== 1){

            //cek password
            if(password_verify($password, $user['password'])){

                $data=[
                        'email' => $user['email'],
                        'id_user' => $user['id_user'],
                        'role_id' => $user['role_id']
            ];
                $this->session->set_userdata($data);
                // if($user['role_id'] == 1){
                //     redirect('Admin');///ini akan beralih ke halaman admin yang ada di controller Admin
                // }else{
                //     redirect('Member');///ini akan beralih ke controller member 
                // }
                redirect('dashboard');
                
            }else{
                $this->session->set_flashdata('massage','<div class="alert alert-info" role="alert">
                password salah !
              </div>');
              redirect('Login');
            }

           }else{
            $this->session->set_flashdata('massage','<div class="alert alert-info" role="alert">
            komfirmasi dulu email anda !
          </div>');
          redirect('Login');

           }
        }else{
            $this->session->set_flashdata('massage','<div class="alert alert-info" role="alert">
            akun belum terdaftar !
          </div>');
          redirect('Login');
          
        }
    }


    public function registrasi(){
        $this->form_validation->set_rules('nama' ,'Nama' ,'required|trim', [
            'required' => 'masukan nama anda'
        ]);
        $this->form_validation->set_rules('email' ,'Email' ,'required|trim|valid_email|is_unique[user.email]',[
            'valid_email' => 'email yang anda masukan salah',
            'required' => 'masukan email anda',
            'is_unique'=>'email sudah di gunakan'
        ]);
        $this->form_validation->set_rules('password1' ,'Password' ,'required|trim|min_length[3]|matches[password2],',[
            'matches' => 'password anda tidak sama',
            'required' => 'masukan password anda'
        ]);
        $this->form_validation->set_rules('password2' ,'Password' ,'required|trim|matches[password1]');
        if($this->form_validation->run()== false){
        
            $this->load->view('login/header');
             $this->load->view('registrasi');
            $this->load->view('login/footer');

        }else{

          $data=[
              'nama' => htmlspecialchars($this->input->post('nama' ,true)),
              'email' => htmlspecialchars($this->input->post('email', true)),
              'gambar2' => 'bebas.jpg',
              'password' => password_hash($this->input->post('password1'),PASSWORD_DEFAULT),
              'role_id'=>2,
              'is_active'=>1,
              'date_created'=>time()





          ];
          $this->db->insert('user',$data);
          $this->session->set_flashdata('massage','<div class="alert alert-info" role="alert">
          akun berhasil di buat !
        </div');
          redirect('Login');
         
        }

    }
    public function Logout(){
        $this->session->unset_userdata('email');
        $this->session->unset_userdata('role_id');
        $this->session->set_flashdata('massage','<div class="alert alert-info" role="alert">
        kamu sudah keluar refres untuk masuk lagi !
      </div');
        redirect('Baru');/// ketika logout lagsung akan di alihkan ke tampilan route default
    }

    public function blok(){
        
		  $this->load->view('blok');
        
    }
}



?>