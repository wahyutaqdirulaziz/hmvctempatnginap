<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Role extends CI_Model
{
	public function getAll()
	{
		$role = $this->db->get('roles');
		return $role->result();
	}

	public function getById($id)
	{
		$data = $this->db->get_where('roles', ['id' => $id])->row();
		return $data;
	}

	public function getWhereArray($array = null)
	{
		$array['status'] = 1;
		$role = $this->db->get_where('roles', $array);
		return $role->result();
	}

	public function findById($id)
	{
		$data = $this->db->get_where('roles', ['id' => $id])->num_rows();
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
		$this->db->insert('roles', $data);

		return true;
	}

	public function update($id, $data)
	{
		$data['updated_at'] = date('Y-m-d H:i:s');

		/* UPDATE role */
		$this->db->update('roles', $data, ['id' => $id]);

		return true;
	}

	public function delete($id)
	{
		$this->db->delete('roles', ['id' => $id]);
	}
}