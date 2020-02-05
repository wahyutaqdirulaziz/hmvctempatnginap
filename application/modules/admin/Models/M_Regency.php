<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Regency extends CI_Model
{
	public function getAll()
	{
		$regencies = $this->db->get('regencies')
						  ->result();
		return $regencies;
	}
}