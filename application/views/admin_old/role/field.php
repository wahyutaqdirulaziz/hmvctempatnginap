<div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nama</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="name" name="name" minlength="3" maxlength="100" value="<?= isset($data->name) ? $data->name : set_value('name');?>" required>
    	 <?= form_error('name', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="display_name" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nama Tampilan</label>
    <div class="col-sm-9">
        <input type="text" class="form-control" id="display_name" name="display_name" minlength="3" maxlength="100" value="<?= isset($data->display_name) ? $data->display_name : set_value('display_name');?>" required>
        <?= form_error('display_name', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Keterangan</label>
    <div class="col-sm-9">
      	<textarea class="form-control" id="description" name="description" minlength="3"><?= isset($data->description) ? $data->description : set_value('description');?></textarea>
      	<?= form_error('description', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="status" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Status</label>
    <div class="col-sm-9">
        <select class="form-control" name="status" required>
            <option value="1" <?= isset($data->status) ? $data->status == 1 ? 'selected' : '' : set_select('status', '1', TRUE);?>>Aktif</option>
            <option value="0" <?= isset($data->status) ? $data->status == 0 ? 'selected' : '' : set_select('status', '0', TRUE);?>>Tidak Aktif</option>
        </select>
        <?= form_error('status', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>