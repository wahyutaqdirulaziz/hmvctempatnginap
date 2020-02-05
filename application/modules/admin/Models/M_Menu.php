<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Menu extends CI_Model
{
	public function getAll()
	{
		$menus = $this->db->order_by('sequence', 'asc')
						  ->get('menus')
						  ->result();
		$i = 0;
		foreach ($menus as $menu) {
			$menus[$i]->parent_name = $this->getParentMenu($menu->parent_id);
			$i++;
		}

		return $menus;
	}

	public function getParentMenu($parent_id)
	{
		$menu = $this->db->get_where('menus', ['id' => $parent_id]);

		if($menu->num_rows() > 0){
			return $menu->row()->name;
		} else {
			return '';
		}
	}

	public function getMenu()
	{
		$menus = $this->db->order_by('sequence', 'asc')
						  ->get_where('menus', ['parent_id' => null])
						  ->result();
		$i = 0;

		foreach ($menus as $mn) {
			$menus[$i]->child = $this->getChildMenu($mn->id);
			$i++;
		}

		return $menus;
	}

	public function getChildMenu($parent_id)
	{
		$menus = $this->db->order_by('sequence', 'asc')
						  ->get_where('menus', ['parent_id' => $parent_id])
						  ->result();
		$i = 0;

		foreach ($menus as $mn) {
			$menus[$i]->child = $this->getChildMenu($mn->id);
			$i++;
		}

		return $menus;
	}

	public function getById($id)
	{
		$data = $this->db->get_where('menus', ['id' => $id])->row();
		return $data;
	}

	public function findById($id)
	{
		$data = $this->db->get_where('menus', ['id' => $id])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function store($data)
	{
		$menu_data['name'] = $data['name'];
		$menu_data['icon'] = $data['icon'];
		$menu_data['url'] = $data['url'];
		$menu_data['parent_id'] = $data['parent_id'];
		$menu_data['sequence'] = $data['sequence'];
		$menu_data['description'] = $data['description'];
		$menu_data['status'] = $data['status'];
		$menu_data['created_at'] = date('Y-m-d H:i:s');

		$this->db->trans_begin();

		/* INSERT MENU */
		$this->db->insert('menus', $menu_data);
		$menu_id = $this->db->insert_id();

		/* INSERT PERMISSION */

		for($i = 0; $i < count($data['permission_name']); $i++)
		{
			$permission_data[$i]['name'] = $data['permission_name'][$i];
			$permission_data[$i]['display_name'] = $data['permission_display_name'][$i];
			$permission_data[$i]['menu_id'] = $menu_id;
			$permission_data[$i]['created_at'] = date('Y-m-d H:i:s');
			$this->db->insert('permissions', $permission_data[$i]);
		}

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
		$menu_data['name'] = $data['name'];
		$menu_data['icon'] = $data['icon'];
		$menu_data['url'] = $data['url'];
		$menu_data['parent_id'] = $data['parent_id'];
		$menu_data['sequence'] = $data['sequence'];
		$menu_data['description'] = $data['description'];
		$menu_data['status'] = $data['status'];
		$menu_data['updated_at'] = date('Y-m-d H:i:s');

		$this->db->trans_begin();

		/* UPDATE MENU */
		$this->db->update('menus', $menu_data, ['id' => $id]);

		/* INSERT PERMISSION */
		$this->db->delete('permissions', ['menu_id' => $id]);
		for($i = 0; $i < count($data['permission_name']); $i++)
		{
			$permission_data[$i]['name'] = $data['permission_name'][$i];
			$permission_data[$i]['display_name'] = $data['permission_display_name'][$i];
			$permission_data[$i]['menu_id'] = $id;
			$permission_data[$i]['updated_at'] = date('Y-m-d H:i:s');
			$this->db->insert('permissions', $permission_data[$i]);
		}

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
		$this->db->delete('menus', ['id' => $id]);
		$this->db->delete('permissions', ['menu_id' => $id]);
	}
}