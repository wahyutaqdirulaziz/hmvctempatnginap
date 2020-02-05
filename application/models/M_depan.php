<?php 

class M_depan extends CI_Model{
	function data($number,$offset){
		return $query = $this->db->get('tb_lengkap',$number,$offset)->result();		
	}
 
	function jumlah_data(){
		return $this->db->get('tb_lengkap')->num_rows();
	}
}