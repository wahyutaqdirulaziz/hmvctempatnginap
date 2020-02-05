<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Penginapan extends CI_Model
{
	public function getAll()
	{
		$penginapans = $this->db->order_by('a.id_kamar', 'desc')
								->join('users b', 'b.id = a.user_id', 'left')
								->join('member c', 'c.user_id = b.id', 'left')
								->get('kamar a')
								->result();

		foreach ($penginapans as $penginapan) {
			$penginapan->gambar = $this->getPrimaryImage($penginapan->id_kamar);
		}

		return $penginapans;
	}

    public function getCount($array = null)
    {
        $array['a.status !='] = 0;
        $penginapans = $this->db->join('kategori_kamar b', 'b.id_kategori_kamar = a.id_kategori_kamar', 'left')
        						->get_where('kamar a', $array)->num_rows();
        return $penginapans;
    }

    public function getWithPagination($number = null, $offset = null, $arr = null)
    {
    	$array = is_array($arr) ? count($arr) > 0 ? $arr : [] : [];
	    $penginapans = $this->db->select('a.*, b.nama_kategori_kamar, b.slug as slug_kategori_kamar, c.name as kota')
	    						->order_by('a.id_kamar', 'desc')
                                ->join('kategori_kamar b', 'b.id_kategori_kamar = a.id_kategori_kamar', 'left')
                                ->join('regencies c', 'c.id = a.regency_id', 'left')
                                ->where('a.status !=', 0)
                                ->where($array)
                                ->get('kamar a', $number, $offset)->result();
        foreach ($penginapans as $penginapan) {
            $penginapan->gambar = $this->getPrimaryImage($penginapan->id_kamar);
            $penginapan->harga = $this->getHargaByIdKamar($penginapan->id_kamar);
        }
        return $penginapans;
    }

    public function getTopKamar($number = null, $offset = null, $arr = null)
    {
    	$array = is_array($arr) ? count($arr) > 0 ? $arr : [] : [];
	    $penginapans = $this->db->select('a.*, b.nama_kategori_kamar, b.slug as slug_kategori_kamar, c.name as kota')
	    						->order_by('a.id_kamar', 'desc')
                                ->join('kategori_kamar b', 'b.id_kategori_kamar = a.id_kategori_kamar', 'left')
                                ->join('regencies c', 'c.id = a.regency_id', 'left')
                                ->where('a.status !=', 0)
                                ->where($array)
                                ->get('kamar a', $number, $offset)->result();
        foreach ($penginapans as $penginapan) {
            $penginapan->gambar = $this->getPrimaryImage($penginapan->id_kamar);
            $penginapan->harga = $this->getHargaByIdKamar($penginapan->id_kamar);
        }
        return $penginapans;
    }

    public function getSearchingWithPagination($number, $offset, $array = null, $like = null){
        $penginapans = $this->db->select('a.*, b.nama_kategori_kamar, b.slug as slug_kategori_kamar')
        						->order_by('a.id_kamar', 'desc')
					            ->join('kategori_kamar b', 'b.id_kategori_kamar = a.id_kategori_kamar', 'left')
					            ->where('a.status !=', 0)
					            ->where($array)
					            ->like($like)
					            ->get('kamar a', $number, $offset)->result();
        foreach ($penginapans as $penginapan) {
            $penginapan->gambar = $this->getPrimaryImage($penginapan->id_kamar);
            $penginapan->harga = $this->getHargaByIdKamar($penginapan->id_kamar);
        }
        return $penginapans;
    }

	public function getKamarByUser($user_id)
	{
		$penginapans = $this->db->order_by('a.id_kamar', 'desc')
								->join('users b', 'b.id = a.user_id', 'left')
								->join('member c', 'c.user_id = b.id', 'left')
								->get_where('kamar a', ['a.user_id' => $user_id])
								->result();

		foreach ($penginapans as $penginapan) {
			$penginapan->gambar = $this->getPrimaryImage($penginapan->id_kamar);
		}

		return $penginapans;
	}

	public function getPrimaryImage($id)
	{
		$gambar = $this->db->get_where('gambar_kamar', ['id_kamar' => $id, 'gambar_utama' => 1]);
		if($gambar->num_rows() > 0){
			$r_gambar = $gambar->row();
			return $r_gambar->gambar;
		} else {
			return null;
		}
	}

	public function getById($id_kamar)
	{
		$data = $this->db->get_where('kamar', ['id_kamar' => $id_kamar])->row();
		$data->harga = $this->getHargaByIdKamar($id_kamar);
		$data->gambar = $this->getGambarByIdKamar($id_kamar);
		return $data;
	}

    public function getBySlug($slug)
    {
        $data = $this->db->get_where('kamar', ['status !=' => 0, 'slug' => $slug])->row();
        $data->harga = $this->getHargaByIdKamar($data->id_kamar);
        $data->gambar = $this->getGambarByIdKamar($data->id_kamar);
        return $data;
    }
    public function getByTypeSlug($type, $slug)
    {
        $data = $this->db->get_where('kamar', ['status !=' => 0, 'jenis_kamar' => $type, 'slug' => $slug]);
        if($data->num_rows() == 0){
            $data = false;
        } else {
            $data = $data->row();
            $data->harga = $this->getHargaByIdKamar($data->id_kamar);
            $data->gambar = $this->getGambarByIdKamar($data->id_kamar);
            $data->gambar_utama = $this->getPrimaryImage($data->id_kamar);
        }
        return $data;
    }

	public function getHargaByIdKamar($id_kamar)
	{
		$harga = $this->db->get_where('harga_kamar', ['id_kamar' => $id_kamar])->result();
		return $harga;
	}

	public function getGambarByIdKamar($id_kamar)
	{
		$gambar = $this->db->get_where('gambar_kamar', ['id_kamar' => $id_kamar])->result();
		return $gambar;
	}

	public function findById($id_kamar)
	{
		$data = $this->db->get_where('kamar', ['id_kamar' => $id_kamar])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function findByidUserId($id_kamar, $user_id)
	{
		$data = $this->db->get_where('kamar', ['id_kamar' => $id_kamar, 'user_id' => $user_id])->num_rows();
		if($data > 0){
			return true;
		} else {
			return false;
		}
	}

	public function store($data)
	{
		$data['created_at'] = date('Y-m-d H:i:s');
		$data['status'] = 1;

		foreach($data as $e=>$f)
		{
			if($e!='harga' && $e!='durasi' && $e!='gambar' && $e!='gambar_utama'){
				$input_kamar[$e] = $data[$e];
			}
		}
		$this->db->trans_begin();

		/* INSERT PENGINAPAN */
		$this->db->insert('kamar', $input_kamar);
		$id_kamar = $this->db->insert_id();

		/* INSERT HARGA */
		$harga = $data['harga'];
		$durasi = $data['durasi'];
		for ($i=0; $i < count($harga); $i++) { 
			if($harga[$i] != ''){
				$input_harga['id_kamar'] = $id_kamar;
				$input_harga['harga'] = $harga[$i];
				$input_harga['durasi'] = $durasi[$i];
				$input_harga['created_at'] = date('Y-m-d H:i:s');
				$this->db->insert('harga_kamar', $input_harga);
			}
		}

		/* INSERT GAMBAR */
		$gambar = $data['gambar'];
		$gambar_utama = $data['gambar_utama'];
		for ($i=0; $i < count($gambar); $i++) { 
			if($gambar[$i] != ''){
				$input_gambar['id_kamar'] = $id_kamar;
				$input_gambar['gambar'] = $gambar[$i];
				$input_gambar['gambar_utama'] = $gambar_utama[$i] == 'on' ? 1 : 0;
				$input_gambar['created_at'] = date('Y-m-d H:i:s');
				$this->db->insert('gambar_kamar', $input_gambar);
			}
		}

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}

	public function update($id_kamar, $data)
	{
		$data['updated_at'] = date('Y-m-d H:i:s');

		foreach($data as $e=>$f)
		{
			if($e!='harga' && $e!='durasi' && $e!='gambar' && $e!='gambar_utama'){
				$input_kamar[$e] = $data[$e];
			}
		}

		$this->db->trans_begin();

		/* UPDATE KAMAR */
		$this->db->update('kamar', $input_kamar, ['id_kamar' => $id_kamar]);

		if ($this->db->trans_status() === true)
		{
			$this->db->trans_commit();
			return true;
		} else {
			return false;
		}
	}

	public function delete($id_kamar)
	{
		$this->db->delete('kamar', ['id_kamar' => $id_kamar]);
	}

	public function cari($keyword)
	{
		$this->db->order_by('a.id_kamar', 'desc')
								->join('users b', 'b.id = a.user_id', 'left')
								->join('member c', 'c.user_id = b.id', 'left')
								->get('kamar a')
								->result();

								$this->db->or_like('nama_kamar',$keyword);
								$this->db->or_like('keterangan',$keyword);
								$this->db->or_like('slug',$keyword);
	}
}