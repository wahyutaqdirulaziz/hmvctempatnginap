<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Member_data extends CI_Controller{
    public function __construct()
	{
		parent::__construct();
		cek_login();
	}
    public function index(){
        $data['user'] = $this->db->get_where('user', ['id_user'=> $this->session->userdata('id_user')])->row_array();   
        $data['tes'] = $this->db->get_where('tb_lengkap', ['id_user'=> $this->session->userdata('id_user')])->row_array();          
        $data['motor'] =$this->Model_sorum->tampil_data()->result();
        $this->load->view('adminbaru/menu/template/header',$data);
        $this->load->view('adminbaru/menu/template/sidebar',$data);
		$this->load->view('member/Data_barang' ,$data);
        $this->load->view('adminbaru/menu/template/footer');
    }
    public function tambah_aksi(){
        $id_user =$this->input->post('id_user');
        $nama_kos   =$this->input->post('nama_kos');
        $keterangan   =$this->input->post('keterangan');
        $katagori   =$this->input->post('katagori');
        $harga   =$this->input->post('harga');
        $stok   =$this->input->post('stok');
        $status =$this->input->post('status');
        $no_hp =$this->input->post('no_hp');
        $alamat =$this->input->post('alamat');
        $kota =$this->input->post('kota');
        $kampus =$this->input->post('kampus');
       
        $gambar =$_FILES['gambar']['name'];
        
       
        
        
        if($gambar = ''){}else{
            $config['upload_path']= './uploads';
            $config['allowed_types']= 'jpg|jpeg|png|gif';

            $this->load->library('upload', $config);

            if(!$this->upload->do_upload('gambar')){
                echo "gambar gagal di upload";
            }else{
                $gambar=$this->upload->data('file_name');
            }
        }
        $gambar1 =$_FILES['gambar1']['name'];
        if($gambar1 = ''){}else{
            $config['upload_path']= './uploads';
            $config['allowed_types']= 'jpg|jpeg|png|gif';

            $this->load->library('upload', $config);

            if(!$this->upload->do_upload('gambar1')){
                echo "gambar gagal di upload";
            }else{
                $gambar1=$this->upload->data('file_name');
            }
        }
        $gambar2 =$_FILES['gambar2']['name'];
        if($gambar2 = ''){}else{
            $config['upload_path']= './uploads';
            $config['allowed_types']= 'jpg|jpeg|png|gif';

            $this->load->library('upload', $config);

            if(!$this->upload->do_upload('gambar2')){
                echo "gambar gagal di upload";
            }else{
                $gambar2=$this->upload->data('file_name');
            }
        }
        $gambar3 =$_FILES['gambar3']['name'];
        if($gambar3 = ''){}else{
            $config['upload_path']= './uploads';
            $config['allowed_types']= 'jpg|jpeg|png|gif';

            $this->load->library('upload', $config);

            if(!$this->upload->do_upload('gambar3')){
                echo "gambar gagal di upload";
            }else{
                $gambar3=$this->upload->data('file_name');
            }
        }
        $data = array(
            'id_user'=>$id_user,
            'nama_kos' => $nama_kos,
            'keterangan' => $keterangan,
            'katagori' => $katagori,
            'harga' => $harga,
            'stok' => $stok,
            'status' => $status,
            'no_hp'=> $no_hp,
            'alamat'=>$alamat,
            'kota'=>$kota,
            'kampus'=>$kampus,
            'gambar' => $gambar,
            'gambar1' => $gambar1,
            'gambar2' => $gambar2,
            'gambar3' => $gambar3,
           
        );
        $this->Model_sorum->tambah_kos($data, 'tb_lengkap');
        redirect('Member_data');
    }
    public function edit($id){

        $where = array(
            'id_kos' =>$id);
        $data['motor'] =$this->Model_sorum->edit($where , 'tb_lengkap')->result();
        $data['user'] = $this->db->get_where('user', ['email'=> $this->session->userdata('email')])->row_array();       
        $this->load->view('adminbaru/menu/template/header',$data);
        $this->load->view('adminbaru/menu/template/sidebar',$data);
		$this->load->view('member/edit' ,$data);
        $this->load->view('adminbaru/menu/template/footer');

    }
    public function update(){
        $id             = $this->input->post('id_kos');
        $nama_kos             = $this->input->post('nama_kos');
        $keterangan             = $this->input->post('keterangan');
        $katagori             = $this->input->post('katagori');
        $harga             = $this->input->post('harga');
        $stok             = $this->input->post('stok');
        $no_hp =$this->input->post('no_hp');
        $alamat =$this->input->post('alamat');
        $kota =$this->input->post('kota');
        $kampus =$this->input->post('kampus');
        $status =$this->input->post('status');
        $data = array(
            'nama_kos' => $nama_kos,
            'keterangan' => $keterangan,
            'katagori' => $katagori,
            'no_hp'=> $no_hp,
            'alamat'=>$alamat,
            'kota'=>$kota,
            'kampus'=>$kampus,
            'harga' => $harga,
            'stok' => $stok,
            'status' => $status,
           
        );
        $where = array('id_kos' => $id);

        $this->Model_sorum->update($where,$data ,'tb_lengkap');
        redirect('Member_data');
    }
    public function hapus($id){
        $where = array('id_kos' =>$id);
        $this->Model_sorum->hapus($where, 'tb_lengkap');
        redirect('Member_data');
    }
}

?>