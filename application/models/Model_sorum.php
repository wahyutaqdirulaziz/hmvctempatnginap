<?php

class Model_sorum extends CI_Model {
    
   

    
    function get_cari($keyword){
        $this->db->order_by('a.id_kamar','desc');
        $this->db->join('users b','b.id=a.user.id','left');
        $this->db->join('member c', 'c.user_id = b.id', 'left');
        $this->db->or_like('nama_kamar',$keyword);
        $this->db->or_like('keterangan',$keyword);
        $this->db->or_like('slug',$keyword);
      
        return $this->db->get('kamar')->result();
    }

    
}


?>