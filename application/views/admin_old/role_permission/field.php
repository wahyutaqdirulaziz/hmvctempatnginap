<div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label text-right">Hak Akses</label>
    <div class="col-sm-9">
      	<input type="text" class="form-control" value="<?= $data->name ?>" disabled>
    </div>
</div>
<div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label text-right">Menu</label>
    <div class="col-sm-9">
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Menu</th>
                    <th>Akses</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $checked_rl = in_array(1, $permission_role) ? 'checked' : '';
                ?>
                <tr>
                    <td><input type="checkbox" checked disabled /> Dashboard</td>
                    <td>
                        <input type="checkbox" name="permission_id[]" value="1" <?= $checked_rl ?> /> index-dashboard<br>
                    </td>
                </tr>
                <?php
                    foreach ($menus as $menu) {
                        $checked = in_array($menu->id, $role_menu) ? 'checked' : '';
                        echo '<tr>
                                <td><input type="checkbox" name="menu_id[]" value="'.$menu->id.'" '.$checked.' /> '.$menu->name.'</td>
                                <td>';
                                    foreach ($menu->permission as $mp) {
                                        $checked_role = in_array($mp->id, $permission_role) ? 'checked' : '';
                                        echo '<input type="checkbox" name="permission_id[]" value="'.$mp->id.'" '.$checked_role.' /> '.$mp->name.'<br>';
                                    }
                        echo   '</td>
                              </tr>';
                    }
                ?>
            </tbody>
        </table>
    </div>
</div>