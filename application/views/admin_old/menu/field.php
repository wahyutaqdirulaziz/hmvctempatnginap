<div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Menu</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="name" name="name" minlength="3" maxlength="100" value="<?= isset($data->name) ? $data->name : set_value('name');?>" required>
    	<?= form_error('name', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="url" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Url</label>
    <div class="col-sm-9">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="url-addon"><?= site_url() ?></span>
            </div>
            <input type="text" class="form-control" id="url" aria-describedby="url-addon" minlength="3" maxlength="100" name="url" value="<?= isset($data->url) ? $data->url : set_value('url');?>">
        </div>
      	<?= form_error('url', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="icon" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Ikon</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" id="icon" name="icon" minlength="3" maxlength="100" value="<?= isset($data->icon) ? $data->icon : set_value('icon');?>">
      	<?= form_error('icon', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="parent_id" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Menu Induk</label>
    <div class="col-sm-9">
      	<select name="parent_id" class="form-control">
            <option value="">-Pilih Menu-</option>
            <?php
                foreach ($menus as $menu) {
                    $selected_menu = isset($data->parent_id) ? $data->parent_id == $menu->id ? 'selected' : '' : set_select('parent_id', $menu->id);
                    echo '<option value="'.$menu->id.'" '.$selected_menu.'>'.$menu->name.'</option>';
                }
            ?>
        </select>
      	<?= form_error('parent_id', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="sequence" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Urutan</label>
    <div class="col-sm-9">
        <input type="text" class="form-control" id="sequence" name="sequence" maxlength="100" value="<?= isset($data->sequence) ? $data->sequence : set_value('sequence');?>">
        <?= form_error('sequence', '<small class="text-danger" >','</small>');  ?>
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
            <option value="0" <?= isset($data->status) ? $data->status == 0 ? 'selected' : '' : set_select('status', '0');?>>Tidak Aktif</option>
        </select>
        <?= form_error('status', '<small class="text-danger" >','</small>');  ?>
    </div>
</div>
<div class="form-group row">
    <label for="status" class="col-sm-2 col-form-label text-sm-right text-md-right text-lg-right text-xl-right">Permission</label>
    <div class="col-sm-9">
        <div class="row">
            <div class="col-lg-4 col-xl-4 col-10">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="input-permission" aria-describedby="url-addon1">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="url-addon1"><?= isset($data->url) ? '-'.$data->url : '' ?></span>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <span class="btn btn-primary btn-add-permission">Tambah</span>
            </div>
        </div>
        <table class="table table-bordered permission-table">
            <thead>
                <tr>
                    <th>Permission Name</th>
                    <th width="1%">Action</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if(isset($permissions))
                    {
                        foreach ($permissions as $permission) {
                            echo '<tr>
                                    <td>'.$permission->name.' <input type="hidden" name="permission_name[]" value="'.$permission->name.'" /> <input type="hidden" name="permission_display_name[]" value="'.$permission->display_name.'" /></td>
                                    <td class="text-center"><button type="button" class="btn btn-icon btn-link btn-delete-permission"><i class="fas fa-times text-danger"></i></button></td>
                                 </tr>';
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>
</div>