<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Login</title>

    <!-- Custom fonts for this template-->
    <link href="<?= base_url('assets/vendor/font-awesome-5.10.2/css/all.min.css'); ?>" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="<?= base_url('assets/tempatnginap/css/authentication.min.css'); ?>" rel="stylesheet">

</head>

<body class="py-5 bg-primary">

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-lg-5">
        <div class="text-center mt-3">
            <img src="<?= site_url('assets/tempatnginap/img/logo.png') ?>" width="150px">
        </div>
        <div class="card o-hidden border-0 shadow-lg mt-4 mb-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Login</h1>
                    </div>
                    <?= isset($failed) && !empty($failed) ? "<p class='text-danger'>{$failed}</p>" : ""; ?>
                    <form class="form-signin" method="post" id="loginForm" action="<?= site_url('login') ?>">

                        <input type="hidden" name="<?= $this->security->get_csrf_token_name(); ?>" value="<?= $this->security->get_csrf_hash(); ?>">
                        <div class="form-group">
                            <input type="text" class="form-control form-control-user" value="<?= set_value('username');?>" id="username" name="username" placeholder="Username or email">
                            <?= form_error('username', '<small class="text-danger" >','</small>');  ?>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control form-control-user" id="password" name="password" placeholder="Password">
                            <?= form_error('password', '<small class="text-danger" >','</small>');  ?>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                    </form>
                  <hr>
                  <div class="text-center">
                   
                    <a class="small" href="forgot-password.html">Lupa Kata Sandi?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="<?php echo base_url('register') ?>">Buat Akun!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
   <!-- Bootstrap core JavaScript-->
 <script src="<?php echo base_url('assets/admin/'); ?>vendor/jquery/jquery.min.js"></script>
  <script src="<?php echo base_url('assets/admin/'); ?>vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="<?php echo base_url('assets/admin/'); ?>vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="<?php echo base_url('assets/admin/'); ?>js/sb-admin-2.min.js"></script>

</body>

</html>
