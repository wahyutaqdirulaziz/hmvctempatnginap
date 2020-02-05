<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Kategori_Penginapan extends CI_Model
{
	public function getAll()
	{
		$role = $this->db->get('kategori_kamar');
		return $role->result();
	}

	public function getByid($id_kategori_kamar)
	{
		$data = $this->db->get_where('kategori_kamar', ['id_kategori_kamar' => $id_kategori_kamar])->row();
		return $data;
	}

	public function findByid($id_kategori_kamar)
	{
		$data = $this->db->get_where('kategori_kamar', ['id_kategori_kamar' => $id_kategori_kamar])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function store($data)
	{
		$data['created_at'] = date('Y-m-d H:i:s');

		/* INSERT role */
		$this->db->insert('kategori_kamar', $data);

		return true;
	}

	public function update($id_kategori_kamar, $data)
	{
		$data['updated_at'] = date('Y-m-d H:i:s');

		/* UPDATE role */
		$this->db->update('kategori_kamar', $data, ['id_kategori_kamar' => $id_kategori_kamar]);

		return true;
	}

	public function delete($id_kategori_kamar)
	{
		$this->db->delete('kategori_kamar', ['id_kategori_kamar' => $id_kategori_kamar]);
	}
}