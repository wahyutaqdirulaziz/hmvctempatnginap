<body class="py-5 bg-primary">

  <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5 col-lg-7 mx-auto">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
         
          <div class="col-lg">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4"><i class="fas fa-user"></i> Registrasi member</h1>
              </div>
            <form action="<?= base_url('Login/registrasi')?>" method="post">
              <div class="form-group">
                <input type="text" class="form-control form-control-user" id="nama" name="nama"value="<?= set_value('nama');?>" placeholder="name full">
                <?= form_error('nama', '<small class="text-danger" >','</small>');  ?>
              </div>
              
              <div class="form-group">
                <input type="text" class="form-control form-control-user" id="email" value="<?= set_value('email');?>" name="email" placeholder="Email Address">
                <?= form_error('email', '<small class="text-danger" >','</small>');  ?>
              </div>
              <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user" id="password1" name="password1" placeholder="Password">
                   <?= form_error('password1', '<small class="text-danger" >','</small>');  ?>
                  </div>
                  <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user" id="password2" name="password2" placeholder="Repeat Password">
                  </div>
                </div>
                <button  type="submit" class="btn btn-primary btn-user btn-block">
                      Daftar
                    </button>
                <hr>
            </form>
            
              
              <hr>
              <div class="text-center">
                <a class="small" href="forgot-password.html">Forgot Password?</a>
              </div>
              <div class="text-center">
                <a class="small" href="<?= base_url('Login')?>">Already have an account? Login!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
