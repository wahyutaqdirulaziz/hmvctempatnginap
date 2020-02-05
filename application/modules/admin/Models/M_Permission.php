<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_permission extends CI_Model
{
	public function getAll()
	{
		$permissions = $this->db->get('permissions');
		return $permissions->result();
	}

	public function getById($id)
	{
		$data = $this->db->get_where('permissions', ['id' => $id])->row();
		return $data;
	}

	public function findById($id)
	{
		$data = $this->db->get_where('permissions', ['id' => $id])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function findWhere($array)
	{
		$data = $this->db->get_where('permissions', $array)->result();
		return $data;
	}

	public function store($data)
	{
		
	}

	public function update($id, $data)
	{
		
	}

	public function delete($id)
	{
		$this->db->delete('permissions', ['id' => $id]);
	}
}