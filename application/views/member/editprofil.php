<div class="page-holder w-100 d-flex flex-wrap">
        <div class="container-fluid ml-5 mt-5">
          
<h3> <i class="fas fa-edit"></i> edit profil</h3>

<div class="row">
    <div class="col-lg-8">

        <?= form_open_multipart('Member/edit');?>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" id="email" name="email" value="<?php echo $user['email'] ?>">
           
        </div>
        <div class="form-group">
            <label for="name">Full name</label>
            <input type="text" class="form-control" id="name" name="name" value="<?php echo $user['nama'] ?>">
            <?= form_error('name', '<small class="text-danger" >','</small>');  ?>
        </div>
        <div class="form-group row">
            <div class="col-sm-2">gambar</div>
            <div class="col-sm-10">
                <div class="row">
                    <div class="col-sm-3">
                        <img src="<?php echo base_url('/uploads/profil/').$user['gambar_user'] ?>" class="img-thumbnail">
                        
                    </div>
                    <div class="col-sm-9">
                        <div class="custom-file">
                                <input type="file" class="custom-file-input" id="gambar" name="gambar">
                                <label class="custom-file-label" for="gambar">Choose </label>
                            </div>
                        </div>
                </div>
            </div>
           
        </div>

        <div class="form-group row">
            <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">simpan</button>
            </div>
        </div>
    
    
        </form>
    
    </div>






</div>





</div>

</div>

</div>

</div>