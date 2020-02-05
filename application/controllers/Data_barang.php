<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Data_barang extends CI_Controller{

    public function __construct()
	{
		parent::__construct();
        cek_login();
        $this->load->helper(array('url'));
		
	}
    
    public function index(){
        $this->load->database();
		$jumlah_data = $this->Model_sorum->jumlah_data();
		$this->load->library('pagination');
		$config['base_url'] = base_url().'index.php/Data_barang/index/';
		$config['total_rows'] = $jumlah_data;
		$config['per_page'] = 4;
		$config['next_link'] = 'Selanjutnya';
		$config['prev_link'] = 'Sebelumnya';
		$config['first_link'] = 'Awal';
		$config['last_link'] = 'Akhir';
		$config['full_tag_open'] = '<nav aria-label="Page navigation example">
		<ul class="pagination">';
		$config['full_tag_close'] = ' </ul>
		</nav>';
		$config['num_tag_open'] = '<li class="page-item">';
		$config['num_tag_close'] = '</li>';
		$config['cur_tag_open'] = '<li class="page-item active"><a class="page-link" href="#">';
		$config['cur_tag_close'] = '</a></li>';
		$config['prev_tag_open'] = '<li class="page-item">';
		$config['prev_tag_close'] = '</li>';
		$config['next_tag_open'] = '<li class="page-item">';
		$config['next_tag_close'] = '</li>';
		$config['last_tag_open'] = '<li>';
		$config['last_tag_open'] = '<li>';
		$config['first_tag_open'] = '<li>';
		$config['first_tag_open'] = '<li>';
		$config['attributes'] = array('class' => 'page-link');
		$from = $this->uri->segment(3);
		$this->pagination->initialize($config);		
		$data['motor'] = $this->Model_sorum->data($config['per_page'],$from);
        
        $data['user'] = $this->db->get_where('user', ['email'=> $this->session->userdata('email')])->row_array();       
       
       
        $this->load->view('adminbaru/menu/template/header',$data);
        $this->load->view('adminbaru/menu/template/sidebar',$data);
		$this->load->view('admin/Data_barang' ,$data);
        $this->load->view('adminbaru/menu/template/footer');

    }
    public function tambah_aksi(){
        $nama_kos   =$this->input->post('nama_kos');
        $keterangan   =$this->input->post('keterangan');
        $katagori   =$this->input->post('katagori');
        $harga   =$this->input->post('harga');
        $stok   =$this->input->post('stok');
        $no_hp =$this->input->post('no_hp');
        $alamat =$this->input->post('alamat');
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
            'nama_kos' => $nama_kos,
            'keterangan' => $keterangan,
            'katagori' => $katagori,
            'harga' => $harga,
            'stok' => $stok,
            'no_hp'=> $no_hp,
            'alamat'=>$alamat,
            'gambar' => $gambar,
            'gambar1' => $gambar1,
            'gambar2' => $gambar2,
            'gambar3' => $gambar3,
        );
        $this->Model_sorum->tambah_kos($data, 'tb_lengkap');
        redirect('Data_barang');
    }
    public function edit($id){

        $where = array(
            'id_kos' =>$id);
        $data['motor'] =$this->Model_sorum->edit($where , 'tb_lengkap')->result();
        $data['user'] = $this->db->get_where('user', ['email'=> $this->session->userdata('email')])->row_array();       
        $this->load->view('adminbaru/menu/template/header',$data);
        $this->load->view('adminbaru/menu/template/sidebar',$data);
		$this->load->view('admin/edit' ,$data);
        $this->load->view('adminbaru/menu/template/footer');


    }
    public function update(){
        $id             = $this->input->post('id_kos');
        $nama_kos             = $this->input->post('nama_kos');
        $keterangan             = $this->input->post('keterangan');
        $katagori             = $this->input->post('katagori');
        $harga             = $this->input->post('harga');
        $stok             = $this->input->post('stok');
        $status             = $this->input->post('status');
        $no_hp =$this->input->post('no_hp');
        $alamat =$this->input->post('alamat');
        $data = array(
            'nama_kos' => $nama_kos,
            'keterangan' => $keterangan,
            'katagori' => $katagori,
            'no_hp'=> $no_hp,
            'alamat'=>$alamat,
            'harga' => $harga,
            'stok' => $stok,
            'status' => $status,
           
        );
        $where = array('id_kos' => $id);

        $this->Model_sorum->update($where,$data ,'tb_lengkap');
        redirect('Data_barang');
    }
    public function hapus($id){
        $where = array('id_kos' =>$id);
        $this->Model_sorum->hapus($where, 'tb_lengkap');
        redirect('Data_barang');
    }
}

?>