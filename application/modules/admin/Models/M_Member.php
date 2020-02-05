<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Member extends CI_Model
{
	public function getAll()
	{
		$member = $this->db->select('a.*, b.name as nama_kota')
						   ->join('regencies b', 'b.id = a.regency_id', 'left')
						   ->get('member a');
		return $member->result();
	}

	public function getActiveMember()
	{
		$member = $this->db->get_where('member', ['status' => 1]);
		return $member->result();
	}

	public function getById($id)
	{
		$data = $this->db->get_where('member', ['id_member' => $id])->row();
		return $data;
	}

	public function findById($id)
	{
		$data = $this->db->get_where('member', ['id_member' => $id])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function store($data)
	{
		$member_data['nama'] = $data['nama'];
		$member_data['alamat'] = $data['alamat'];
		$member_data['regency_id'] = $data['regency_id'];
		$member_data['nomor_handphone'] = $data['nomor_handphone'];
		$member_data['email'] = $data['email'];
		$member_data['status'] = 1;

		$user_data['name'] = $data['nama'];
		$user_data['username'] = $data['email'];
		$user_data['password'] =  password_hash($data["password"], PASSWORD_BCRYPT);
		$user_data['status'] = 1;
		$user_data['created_at'] = date('Y-m-d H:i:s');

		$role_user_data['role_id'] = 2;

		$this->db->trans_begin();

		/* INSERT USER */
		$this->db->insert('users', $user_data);
		$role_user_data['user_id'] = $this->db->insert_id();
		$member_data['user_id'] = $this->db->insert_id();

		/* INSERT MEMBER */
		$this->db->insert('member', $member_data);

		/* INSERT ROLE USER */
		$this->db->insert('roles_users', $role_user_data);

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}

	public function update($id, $data)
	{
		$member_data['nama'] = $data['nama'];
		$member_data['alamat'] = $data['alamat'];
		$member_data['regency_id'] = $data['regency_id'];
		$member_data['nomor_handphone'] = $data['nomor_handphone'];
		$member_data['email'] = $data['email'];
		$member_data['updated_at'] = date('Y-m-d H:i:s');

		$user_data['name'] = $data['nama'];

		$this->db->trans_begin();

		/* UPDATE MEMBER */
		$this->db->update('member', $member_data, ['id_member' => $id]);

		/* UPDATE USER */
		$this->db->update('users', $user_data, ['id' => $data['user_id']]);

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}

	public function delete($id)
	{
		$this->db->delete('member', ['id_member' => $id]);
	}
}