<?php



class M_Kategori extends CI_Model{

    public function kos_campur(){

       return $this->db->get_where("tb_lengkap",array("katagori"=> "kos cewek cowok"));
    }
    public function kos_cewek(){

        return $this->db->get_where("tb_lengkap",array("katagori"=> "kos cewek"));
     }

     public function kos_cowok(){

      return $this->db->get_where("tb_lengkap",array("katagori"=> "kos cowok"));
   }
   public function unham(){

      return $this->db->get_where("tb_lengkap",array("kampus"=> "universitas hamzanwadi"));
   }
   public function ugr(){

      return $this->db->get_where("tb_lengkap",array("kampus"=> "universitas gunung rinjani"));
   }





}