
 <link href="<?php echo base_url('assets/admin/'); ?>vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<body class=" bg-gradient-danger">

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top ">
  <div class="container">
    <a class="navbar-brand" href="#">ekos</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarResponsive">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 active" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-info my-2 my-sm-0 active" type="submit">Search</button>
    </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="<?php echo base_url('Pertama')?>"> Home
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="<?php echo base_url('Login/registrasi')?>">Registrasi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="<?php echo base_url('Login')?>"> </i>Login</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="<?php echo base_url('Cetak')?>">cetak online</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Page Content -->
<div class="container">

  
    <!-- /.col-lg-3 -->

    <div>

      <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="<?= base_url('uploads/icon putih 2.png')?>" alt="iklan">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="<?= base_url('uploads/slide3.png')?>" alt="harus bayar">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="<?= base_url('uploads/slide3.png')?>" alt="cuyy">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>