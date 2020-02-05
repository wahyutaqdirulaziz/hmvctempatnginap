<div class="form-group row">
    <label for="nama" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nama Lengkap</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="nama" name="nama" minlength="3" maxlength="100" value="<?= isset($data->nama) ? $data->nama : set_value('nama');?>">
    	<?= form_error('nama', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="alamat" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Alamat Lengkap</label>
    <div class="col-sm-9">
      	<textarea class="form-control" id="alamat" name="alamat" minlength="10"><?= isset($data->alamat) ? $data->alamat : set_value('alamat');?></textarea>
      	<?= form_error('alamat', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="kota" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Kota</label>
    <div class="col-sm-9">
      	<select class="form-control select2 regency" name="regency_id">
            <option value="">-Pilih Kota-</option>
            <?php
                foreach ($regencies as $regency) {
                    echo '<option value="'.$regency->id.'">'.ucwords(strtolower($regency->name)).'</option>';
                }
            ?>
        </select>
        <?= form_error('regency_id', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="nomor_handphone" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nomor Handphone</label>
    <div class="col-sm-9">
      	<input type="number" class="form-control" id="nomor_handphone" name="nomor_handphone" minlength="3" maxlength="15" value="<?= isset($data->nomor_handphone) ? $data->nomor_handphone : set_value('nomor_handphone');?>">
      	<?= form_error('nomor_handphone', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="email" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Email</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="email" name="email" minlength="5" maxlength="100" value="<?= isset($data->email) ? $data->email : set_value('email');?>">
      	<?= form_error('email', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>

<?php
    if(!isset($data->id_member)){
?>
        <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Password</label>
            <div class="col-sm-9">
              	<input type="text" class="form-control" id="password" name="password" minlength="8" maxlength="100" value="<?= set_value('password'); ?>" autocomplete="off">
              	<?= form_error('password', '<small class="text-danger" >','</small>');  ?>
            </div>
        </div>
<?php
    }
?>