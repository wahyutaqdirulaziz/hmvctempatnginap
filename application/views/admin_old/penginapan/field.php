<div class="form-group row">
    <label for="nama_kamar" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nama</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="nama_kamar" name="nama_kamar" minlength="3" maxlength="100" value="<?= isset($data->nama_kamar) ? $data->nama_kamar : set_value('nama_kamar');?>" required>
    	<?= form_error('nama_kamar', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="jenis_kamar" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right" >Jenis Penginapan</label>
    <div class="col-sm-9">
        <select class="form-control" name="jenis_kamar" id="jenis_kamar" required>
            <option value="">-Pilih Jenis Penginapan-</option>
            <option value="rumahan" <?= isset($data->jenis_kamar) ? $data->jenis_kamar == 'rumahan' ? 'selected' : '' : set_select('jenis_kamar', 'rumahan'); ?> >Rumahan</option>
            <option value="lodging" <?= isset($data->jenis_kamar) ? $data->jenis_kamar == 'lodging' ? 'selected' : '' : set_select('jenis_kamar', 'lodging'); ?> >Penginapan</option>
            <option value="kos" <?= isset($data->jenis_kamar) ? $data->jenis_kamar == 'kos' ? 'selected' : '' : set_select('jenis_kamar', 'kos'); ?> >Kos</option>
            <option value="hotel" <?= isset($data->jenis_kamar) ? $data->jenis_kamar == 'hotel' ? 'selected' : '' : set_select('jenis_kamar', 'hotel'); ?> >Hotel</option>
            <option value="vila" <?= isset($data->jenis_kamar) ? $data->jenis_kamar == 'vila' ? 'selected' : '' : set_select('jenis_kamar', 'vila'); ?> >Vila</option>
        </select>
        <?= form_error('jenis_kamar', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="id_kategori_kamar" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Kategori</label>
    <div class="col-sm-9">
        <select name="id_kategori_kamar" class="form-control">
            <option value="">-Pilih Kategori-</option>
            <?php
                foreach ($kategori_penginapans as $kategori_penginapan) {
                    $selected = isset($data->id_kategori_kamar) ? $data->id_kategori_kamar == $kategori_penginapan->id_kategori_kamar ? 'selected' : '' : set_select('id_kategori_kamar', $kategori_penginapan->id_kategori_kamar) ;
                    echo '<option value="'.$kategori_penginapan->id_kategori_kamar.'" '.$selected.'>'.$kategori_penginapan->nama_kategori_kamar.'</option>';
                }
            ?>
        </select>
        <?= form_error('id_kategori_kamar', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="alamat" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Alamat Lengkap</label>
    <div class="col-sm-9">
      	<textarea class="form-control" id="alamat" name="alamat" minlength="10" required><?= isset($data->alamat) ? $data->alamat : set_value('alamat');?></textarea>
      	<?= form_error('alamat', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<div class="form-group row">
    <label for="regency_id" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Kota</label>
    <div class="col-sm-9">
        <select name="regency_id" class="form-control select2 regency" required>
            <option value="">-Pilih Kota-</option>
            <?php
                foreach ($regencies as $regency) {
                    $selected = isset($data->regency_id) ? $data->regency_id == $regency->id? 'selected' : '' : set_select('regency_id', $regency->id) ;
                    echo '<option value="'.$regency->id.'" '.$selected.'>'.ucwords(strtolower($regency->name)).'</option>';
                }
            ?>
        </select>
        <?= form_error('regency_id', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<div class="form-group row">
    <label for="location" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Pilih Lokasi</label>
    <div class="col-sm-9">
        <div id="map" class="map"></div>
        <input type="hidden" name="latitude" id="latitude" value="<?= isset($data->latitude) ? $data->latitude : set_value('latitude') ?>" required>
        <input type="hidden" name="longitude" id="longitude" value="<?= isset($data->longitude) ? $data->longitude : set_value('longitude') ?>" required>
        <?= form_error('latitude', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<div class="form-group row">
    <label for="nomor_handphone" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right" required>Nomor Handphone</label>
    <div class="col-sm-9">
      	<input type="number" class="form-control" id="nomor_handphone" name="nomor_handphone" minlength="3" maxlength="15" value="<?= isset($data->nomor_handphone) ? $data->nomor_handphone : set_value('nomor_handphone');?>" required>
      	<?= form_error('nomor_handphone', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<div class="form-group row">
    <label for="keterangan" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Keterangan</label>
    <div class="col-sm-9">
        <textarea class="form-control" id="keterangan" name="keterangan" minlength="10"><?= isset($data->keterangan) ? $data->keterangan : set_value('keterangan');?></textarea>
        <?= form_error('keterangan', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<div class="form-group row">
    <label for="stok" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Kamar Tersedia</label>
    <div class="col-sm-9">
        <input type="number" class="form-control" id="stok" name="stok" value="<?= isset($data->stok) ? $data->stok : set_value('stok');?>" min="0" required>
        <?= form_error('stok', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<?php
    if($this->auth->roles()[0] != 2){
?>
        <div class="form-group row">
            <label for="user_id" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Pemilik</label>
            <div class="col-sm-9">
                <select class="form-control" name="user_id">
                    <option value="">-Pilih Pemilik-</option>
                    <?php
                        foreach ($members as $member) {
                            $selected = isset($data->user_id) ? $data->user_id == $member->user_id ? 'selected' : '' : '';
                            echo '<option value="'.$member->user_id.'" '.$selected.'>'.$member->nama.'</option>';
                        }
                    ?>
                </select>
                <?= form_error('user_id', '<small class="text-danger" >','</small>');  ?>
            </div>
        </div>
<?php
    }
?>

<div class="form-group row">
    <label for="harga" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Harga</label>
    <div class="col-sm-9">
        <?php
            if(!isset($data->harga)){
        ?>
                <div class="row">
                    <div class="col-sm-4">
                        <input type="number" class="form-control" name="harga[]" min="0">
                        <input type="hidden" name="durasi[]" value="perjam">
                    </div>
                    <label class="col-sm-3 col-form-label">Perjam</label>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <input type="number" class="form-control" name="harga[]" min="0">
                        <input type="hidden" name="durasi[]" value="perhari">
                    </div>
                    <label class="col-sm-3 col-form-label">Perhari</label>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <input type="number" class="form-control" name="harga[]" min="0">
                        <input type="hidden" name="durasi[]" value="perminggu">
                    </div>
                    <label class="col-sm-3 col-form-label">Perminggu</label>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <input type="number" class="form-control" name="harga[]" min="0">
                        <input type="hidden" name="durasi[]" value="perbulan">
                    </div>
                    <label class="col-sm-3 col-form-label">Perbulan</label>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <input type="number" class="form-control" name="harga[]" min="0">
                        <input type="hidden" name="durasi[]" value="pertahun">
                    </div>
                    <label class="col-sm-3 col-form-label">Pertahun</label>
                </div>
        <?php
            } else {
                foreach ($data->harga as $harga) {
        ?>
                    <div class="row">
                        <div class="col-sm-4">
                            <input type="text" class="form-control" value="<?= number_format($harga->harga) ?>" disabled>
                        </div>
                        <label class="col-sm-3 col-form-label"><?= ucwords($harga->durasi) ?></label>
                    </div>
        <?php
                }
            }
        ?>
    </div>
</div>
<div class="form-group row">
    <label for="gambar" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Gambar</label>
    <div class="col-sm-9">

        <?php
            if(!isset($data->gambar)){
        ?>
                <div class="row mb-2">
                    <div class="col-sm-5">
                        <input type="file" class="form-control" name="gambar[]">
                    </div>
                    <div class="col-sm-7 pt-2">
                        <input type="radio"name="gambar_utama[]" id="gambar-utama-1" checked> <label for="gambar-utama-1">Set sebagai gambar utama</label>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-sm-5">
                        <input type="file" class="form-control" name="gambar[]">
                    </div>
                    <div class="col-sm-7 pt-2">
                        <input type="radio"name="gambar_utama[]" id="gambar-utama-2"> <label for="gambar-utama-2">Set sebagai gambar utama</label>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-sm-5">
                        <input type="file" class="form-control" name="gambar[]">
                    </div>
                    <div class="col-sm-7 pt-2">
                        <input type="radio"name="gambar_utama[]" id="gambar-utama-3"> <label for="gambar-utama-3">Set sebagai gambar utama</label>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-sm-5">
                        <input type="file" class="form-control" name="gambar[]">
                    </div>
                    <div class="col-sm-7 pt-2">
                        <input type="radio"name="gambar_utama[]" id="gambar-utama-4"> <label for="gambar-utama-4">Set sebagai gambar utama</label>
                    </div>
                </div>
        <?php
            } else {
                foreach ($data->gambar as $gambar) {
        ?>
                    <div class="row mb-2">
                        <div class="col-sm-5">
                            <img src="<?= site_url('uploads/images/penginapan/'.$gambar->gambar) ?>" height="100">
                        </div>
                    </div>
        <?php
                }
            }
        ?>
    </div>
</div>