<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Role_Permission extends CI_Model
{
	public function getAll()
	{
		$role = $this->db->get('roles');
		return $role->result();
	}

	public function getMenu()
	{
		$menus = $this->db->get_where('menus', ['status' => 1])->result();

		$i = 0;
		foreach ($menus as $menu) {
			$menus[$i]->permission = $this->getPermissionByMenuId($menu->id);
			$i++;
		}

		return $menus;
	}

	public function getPermissionByMenuId($menu_id)
	{
		$permissions = $this->db->get_where('permissions', ['menu_id' => $menu_id])->result();

		return $permissions;
	}

	public function getRoleMenu($role_id)
	{
		$role_menu = $this->db->get_where('roles_menus', ['role_id' => $role_id])->result();

		return $role_menu;
	}

	public function getPermissionRole($role_id)
	{
		$role_menu = $this->db->get_where('permission_roles', ['role_id' => $role_id])->result();

		return $role_menu;
	}

	public function update($id, $data)
	{
		$this->db->trans_begin();
		$this->db->delete('roles_menus', ['role_id' => $data['role_id']]);
		for($i = 0; $i < count($data['menu_id']); $i++) {
			$role_menu_data[$i]['role_id'] = $data['role_id'];
			$role_menu_data[$i]['menu_id'] = $data['menu_id'][$i];
			$role_menu_data[$i]['created_at'] = date('Y-m-d H:i:s');
			$role_menu_data[$i]['updated_at'] = date('Y-m-d H:i:s');
			$this->db->insert('roles_menus', $role_menu_data[$i]);
		}

		$this->db->delete('permission_roles', ['role_id' => $data['role_id']]);
		for($i = 0; $i < count($data['permission_id']); $i++) {
			$permission_data[$i]['role_id'] = $data['role_id'];
			$permission_data[$i]['permission_id'] = $data['permission_id'][$i];
			$this->db->insert('permission_roles', $permission_data[$i]);
		}

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}
}