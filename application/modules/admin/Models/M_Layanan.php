<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Layanan extends CI_Model
{
	public function getAll()
	{
		$layanan = $this->db->order_by('a.id_kos', 'desc')
							->join('users b', 'b.id = a.id_user', 'left')
							->join('member c', 'c.user_id = b.id', 'left')
							->get('tb_lengkap a');
		return $layanan->result();
	}

	public function getById($id)
	{
		$data = $this->db->get_where('tb_lengkap', ['id_kos' => $id])->row();
		return $data;
	}

	public function findById($id)
	{
		$data = $this->db->get_where('tb_lengkap', ['id_kos' => $id])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function store($data)
	{
		/* INSERT LAYANAN */
		$this->db->insert('tb_lengkap', $data);

		return true;
	}

	public function update($id, $data)
	{
		// $data['updated_at'] = date('Y-m-d H:i:s');

		/* UPDATE LAYANAN */
		$this->db->update('tb_lengkap', $data, ['id_kos' => $id]);

		return true;
	}

	public function delete($id)
	{
		$this->db->delete('tb_lengkap', ['id_kos' => $id]);
	}
}