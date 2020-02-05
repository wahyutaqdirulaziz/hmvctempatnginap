<div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Nama</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="name" name="name" minlength="3" maxlength="100" value="<?= isset($data->name) ? $data->name : set_value('name');?>" required>
    	 <?= form_error('name', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="username" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Username</label>
    <div class="col-sm-9">
        <input type="text" class="form-control" <?= isset($data->username) ? 'disabled' : 'id="username" name="username"' ?> minlength="3" maxlength="100" value="<?= isset($data->username) ? $data->username : set_value('username');?>" required>
         <?= form_error('username', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="role_id" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Hak Akses</label>
    <div class="col-sm-9">
        <select name="role_id" class="form-control">
            <option value="">-Pilih Hak Akses-</option>
            <?php
                foreach ($roles as $role) {
                    $selected = isset($data->role_id) ? $data->role_id == $role->id ? 'selected' : '' : set_select('role_id', $role->id) ;
                    echo '<option value="'.$role->id.'" '.$selected.'>'.$role->display_name.'</option>';
                }
            ?>
        </select>
        <?= form_error('role_id', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="password" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Password</label>
    <div class="col-sm-9">
        <input type="password" class="form-control" id="name" name="password" minlength="8" maxlength="100" <?= isset($data) ? '' : 'required' ?>>
         <?= form_error('password', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="confirm_password" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Ulangi Password</label>
    <div class="col-sm-9">
        <input type="password" class="form-control" id="name" name="confirm_password" minlength="8" maxlength="100" <?= isset($data) ? '' : 'required' ?>>
         <?= form_error('confirm_password', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="picture" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Foto Pengguna</label>
    <div class="col-sm-9">
        <label id="label-picture" for="picture" style="height: 100px; width: 100px; border:solid 1px #ebedf2;"><img <?= isset($data->picture) ? $data->picture != '' ? 'src="'.site_url('uploads/images/user/'.$data->picture).'"' : '' : '' ?> class="previewpicture" style="object-fit: cover; height: 100px; width: 100px" /></label>
        <input type="file" name="picture" id="picture" class="d-none" accept="image/*">
        <?= form_error('picture', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="status" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Status</label>
    <div class="col-sm-9">
        <select class="form-control" name="status" required>
            <option value="1" <?= isset($data->status) ? $data->status == 1 ? 'selected' : '' : set_select('status', '1', TRUE);?>>Aktif</option>
            <option value="0" <?= isset($data->status) ? $data->status == 0 ? 'selected' : '' : set_select('status', '0');?>>Tidak Aktif</option>
        </select>
        <?= form_error('status', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>