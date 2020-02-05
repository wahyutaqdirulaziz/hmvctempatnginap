<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';


class Kamar extends REST_Controller{
    public function index_get(){
        $id = $this->get('id_kamar');
        if ($id == '') {
            $kamar = $this->db->get('kamar')->result();
        } else {
            $this->db->where('id_kamar', $id);
            $kamar = $this->db->get('kamar')->result();
        }
        $this->response($kamar, 200);
    }
    function index_post() {
        $data = array(
                    'id_kamar'           => $this->post('id_kamar'),
                    'id_kategori_kamar'          => $this->post('id_kategori_kamar'),
                    'jenis_kamar'          => $this->post('jenis_kamar'),
                    'nama_kamar'    => $this->post('nama_kamar'),
                    'slug'          => $this->post('slug'),
                    'keterangan'          => $this->post('keterangan'),
                    'alamat'          => $this->post('alamat'),
                    'nomor_handphone'          => $this->post('nomor_handphone'),
                    'regency_id'          => $this->post('regency_id'),
                    'latitude'          => $this->post('latitude'),
                    'longitude'          => $this->post('longitude'),
                    'stok'          => $this->post('stok'),
                    'user_id'          => $this->post('user_id'),
                    'status'          => $this->post('status'),
                    'created_at'          => $this->post('created_at'),
                    'updated_at'          => $this->post('updated_at'),
                );
        $insert = $this->db->insert('kamar', $data);
        if ($insert) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }
      //Memperbarui data kontak yang telah ada
      function index_put() {
        $id = $this->put('id_kamar');
        $data = array(
                    'id_kamar'       => $this->put('id_kamar'),
                    'id_kategori_kamar'          => $this->put('id_kategori_kamar'),
                    'jenis_kamar'    => $this->put('jenis_kamar'),
                    'nama_kamar'    => $this->put('nama_kamar'),
                    'slug'    => $this->put('slug'),
                    'keterangan'    => $this->put('keterangan'),
                    'alamat'    => $this->put('alamat'),
                    'nomor_handphone'    => $this->put('nomor_handphone'),
                    'regency_id'    => $this->put('regency_id'),
                    'latitude'    => $this->put('latitude'),
                    'longitude'    => $this->put('longitude'),
                    'stok'    => $this->put('stok'),
                    'user_id'    => $this->put('user_id'),
                    'status'    => $this->put('status'),
                    'created_at'    => $this->put('created_at'),
                    'updated_at'    => $this->put('updated_at'),

                );
        $this->db->where('id_kamar', $id);
        $update = $this->db->update('kamar', $data);
        if ($update) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }


    }
    




?>