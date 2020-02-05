<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_User extends CI_Model
{
	public function getAll()
	{
		$role = $this->db->select('a.*, c.display_name as role_name')
						 ->join('roles_users b', 'b.user_id = a.id', 'left')
						 ->join('roles c', 'c.id = b.role_id')
						 ->get_where('users a', ['a.deleted_at' => null]);
		return $role->result();
	}

	public function getByid($user_id)
	{
		$data = $this->db->join('roles_users b', 'b.user_id = a.id', 'left')
						 ->get_where('users a', ['a.id' => $user_id, 'a.deleted_at' => null])->row();
		return $data;
	}

	public function findByid($user_id)
	{
		$data = $this->db->get_where('users', ['id' => $user_id, 'deleted_at' => null])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function store($data)
	{
		$user_data['name'] = $data['name'];
		$user_data['username'] = $data['username'];
		$user_data['picture'] = $data['picture'];
		$user_data['status'] = $data['status'];
		$user_data['is_admin'] = 1;
		$user_data['password'] =  password_hash($data["password"], PASSWORD_BCRYPT);
		$user_data['created_at'] = date('Y-m-d H:i:s');


		$this->db->trans_begin();

		/* INSERT USER */
		$this->db->insert('users', $user_data);
		$user_id = $this->db->insert_id();
		$input_role_user['user_id'] = $user_id;
		$input_role_user['role_id'] = $data['role_id'];

		/* INSERT ROLE USER */
		$this->db->insert('roles_users', $input_role_user);

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}

	public function update($user_id, $data)
	{
		// $user_data['name'] = $data['name'];
		// $user_data['username'] = $data['username'];
		// $user_data['picture'] = $data['picture'];
		// $user_data['status'] = $data['status'];
		// $user_data['password'] =  password_hash($data["password"], PASSWORD_BCRYPT);

		foreach($data as $e=>$f)
		{
			if($e!='confirm_password' && $e!='role_id'){
				if(!empty($f)){
					if($e == 'password'){
						$user_data[$e] =  password_hash($data[$e], PASSWORD_BCRYPT);
					} else {
						$user_data[$e] = $data[$e];
					}
				}
			}
		}

		$user_data['updated_at'] = date('Y-m-d H:i:s');

		// echo json_encode($user_data);
		// die();

		$this->db->trans_begin();

		/* UPDATE USER */
		$this->db->update('users', $user_data, ['id' => $user_id]);

		/* INSERT ROLE USER */
		$input_role_user['role_id'] = $data['role_id'];
		$this->db->update('roles_users', $input_role_user, ['user_id' => $user_id]);

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}

	public function delete($user_id)
	{
		// $this->db->delete('users', ['id' => $user_id, 'deleted_at' => null]);
		$this->db->update('users', ['deleted_at' => date('Y-m-d H:i:s')], ['id' => $user_id]);
	}
}