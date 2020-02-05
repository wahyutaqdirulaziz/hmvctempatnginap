<div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nama Kategori</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="name" name="nama_kategori_kamar" minlength="3" maxlength="100" value="<?= isset($data->nama_kategori_kamar) ? $data->nama_kategori_kamar : set_value('nama_kategori_kamar');?>" required>
    	 <?= form_error('nama_kategori_kamar', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="status" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Status</label>
    <div class="col-sm-9">
        <select class="form-control" name="status" required>
            <option value="0" <?= isset($data->status) ? $data->status == 0 ? 'selected' : '' : set_select('status', '0', TRUE);?>>Tidak Aktif</option>
            <option value="1" <?= isset($data->status) ? $data->status == 1 ? 'selected' : '' : set_select('status', '1', TRUE);?>>Aktif</option>
        </select>
        <?= form_error('status', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>