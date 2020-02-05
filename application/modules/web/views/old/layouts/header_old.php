<!DOCTYPE html>
<html lang="id">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <?php
        	if(isset($penginapan)){
        ?>
				<title>TempatNginap.com - <?= $penginapan->nama_kamar ?></title>
		        <meta name="title" content="TempatNginap.com - <?= $penginapan->nama_kamar ?>" />
		        <meta name="description" content="<?= $penginapan->nama_kamar ?> harga mulai dari Rp. <?= number_format($penginapan->harga[0]->harga). ' ' . $penginapan->harga[0]->durasi ?>" />
                <meta property="og:url" content="<?= base_url($penginapan->jenis_kamar.'/'.$penginapan->slug) ?>" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="TempatNginap.com - <?= $penginapan->nama_kamar ?>" />
				<meta property="og:description" content="<?= $penginapan->nama_kamar ?> harga mulai dari Rp. <?= number_format($penginapan->harga[0]->harga). ' ' . $penginapan->harga[0]->durasi ?>" />
				<meta property="og:image" content="<?= site_url('uploads/images/penginapan/'.$penginapan->gambar_utama) ?>" />
        <?php
            }else if($this->input->get('q')){
        ?>
                <title>Hasil Pencarian "<?= $this->input->get('q') ?>" di TempatNginap.com</title>
                <meta name="title" content="Hasil Pencarian <?= $this->input->get('q') ?> di TempatNginap.com" />
                <meta name="description" content="Solusi cepat cari penginapan" />
                <meta property="og:url" content="<?= base_url('pencarian?q='.$this->input->get('q')) ?>" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TempatNginap.com - Hasil Pencarian <?= $this->input->get('q') ?>"" />
                <meta property="og:description" content="Solusi cepat cari penginapan" />
                <meta property="og:image" content="<?= site_url('assets/tempatnginap/img/tempatnginap-230.png') ?>" />
        <?php
        	}else{
    	?>
				<title>TempatNginap.com</title>
		        <meta name="title" content="TempatNginap.com" />
		        <meta name="description" content="Solusi cepat tempat cari penginapan" />
		        <meta property="og:url" content="<?= base_url() ?>" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="TempatNginap.com" />
				<meta property="og:description" content="Solusi cepat tempat cari penginapan" />
				<meta property="og:image" content="<?= site_url('assets/tempatnginap/img/tempatnginap-230.png') ?>" />
    	<?php
    		}
    	?>
        <link rel="icon" href="<?= site_url('assets/tempatnginap/img/tempatnginap-32.ico') ?>" type="image/x-icon"/>
        <link rel="canonical" href="<?= base_url() ?>" />
 		<!-- Google font -->
 		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">
 		<!-- Bootstrap -->
 		<link type="text/css" rel="stylesheet" href="<?= base_url('assets/vendor/bootstrap/css/bootstrap.min.css') ?>"/>
 		<!-- Slick -->
 		<link type="text/css" rel="stylesheet" href="<?php echo base_url('assets/baru/');?>css/slick.css"/>
 		<link type="text/css" rel="stylesheet" href="<?php echo base_url('assets/baru/');?>css/slick-theme.css"/>
 		<!-- nouislider -->
 		<link type="text/css" rel="stylesheet" href="<?php echo base_url('assets/baru/');?>css/nouislider.min.css"/>
 		<!-- Font Awesome Icon -->
 		<link rel="stylesheet" href="<?= base_url('assets/vendor/font-awesome-5.10.2/css/all.min.css') ?>">
        <link rel="stylesheet" href="<?= base_url('assets/baru/css/font-awesome.min.css') ?>">
 		<!-- Custom stlylesheet -->
 		<link type="text/css" rel="stylesheet" href="<?= base_url('assets/css/style.css') ?>"/>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
	
		<style>
			#map {
				width:100%;
				height: 350px;
			}

			.select2.select2-container {
				width: 100% !important;
			}
			.select2-container .select2-selection--single {
				height: 40px;
			}
			.select2-container--default .select2-selection--single .select2-selection__rendered {
				color: #6e707e;
				line-height: 40px;
			}
			.select2-container--default .select2-selection--single .select2-selection__arrow {
				height: 38px;
			}
			.select2-container--default .select2-selection--single {
				border: 1px solid #ebedf2;
			}
			.select2-container .select2-selection--single .select2-selection__rendered {
				padding-left: 14px;
				padding-right: 26px;
			}
			.thumbnail-img-product {
				object-fit: cover;
				height: 200px;
			}
            .search form:after {
                content: "\f002" !important;
                font-family: FontAwesome;
                position: absolute;
                font-size: 160px;
                color: #E4E7ED;
                top: 15px;
                -webkit-transform: translateY(-50%) rotate(90deg) !important;
                -ms-transform: translateY(-50%) rotate(90deg) !important;
                transform: translateY(-50%) rotate(90deg) !important;
                z-index: -1;
                left: -90px;
            }
            .navbar {
                margin-bottom: unset;
            }
            button, input {
                outline: unset;
            }
        </style>
 		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
 		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
 		<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
 		<![endif]-->
    </head>
	<body itemscope itemtype="http://schema.org/LocalBusiness">
		<!-- HEADER -->
        <header>
			<!-- TOP HEADER -->
			<div id="top-header">
				<div class="container">
					<ul class="header-links pull-left hidden-xs">
						<li><a href="#"><i class="fa fa-phone"></i> <span itemprop="telephone">087763305916</span></a></li>
						<li><a href="#"><i class="fa fa-envelope-o"></i> <span itemprop="email">wahyudipe6@gmail.com</span></a></li>
						<li><a href="#" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">							<i class="fa fa-map-marker"></i> <span itemprop="email"><span itemprop="addressLocality">lombok</span> - 							<span itemprop="addressCountry">indonesia</span></a>						</li>
					</ul>
					<ul class="header-links pull-right">
						<li><a href="<?php echo base_url('register')?>"><i class="fa fa-user"></i>Daftar</a></li>
						<li><a href="<?php echo base_url('login')?>"><i class="fa fa-lock"></i>Masuk</a></li>
					</ul>
				</div>
			</div>
			<!-- /TOP HEADER -->
			<div id="header">
				<div class="container">
					<div class="row">
						<nav class="navbar">
						<div class="container-fluid">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span class="icon-bar"><i class="fas fa-list-ul"></i></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								</button>
								<a class="navbar-brand logo" href="<?= base_url() ?>">
								<img itemprop="image" src="https://tempatnginap.com/assets/tempatnginap/img/logo.png" alt="TempatNginap.com" style="display: none;" />
								<img src="<?= base_url('assets/tempatnginap/img/logo.png');?>" alt="TempatNginap.com">
								</a>							
							</div>							
							<div class="collapse navbar-collapse" id="myNavbar">
								<ul class="nav navbar-nav navbar-right">
									<li><a href="<?= base_url();?>" style="color:#fff">Beranda</a></li>
									<li><a href="<?= base_url('lodging');?>" style="color:#fff">Penginapan</a></li>
									<li><a href="<?= base_url('vila');?>" style="color:#fff">Vila</a></li>
									<li><a href="<?= base_url('rumahan');?>" style="color:#fff">Rumahan</a></li>
									<li><a href="<?= base_url('kos');?>" style="color:#fff">Kos</a></li>
									<li><a href="<?= base_url('hotel');?>" style="color:#fff">Hotel</a></li>
								</ul>
							</div>
						</div>
						</nav>
					</div>
				</div>
			</div>
			
		</header>
		<!-- /HEADER -->
		
		<!-- SEARCH BAR -->
		<div class="newsletter search">
			<form method="get" action="<?= base_url('pencarian') ?>">
			<input class="input" placeholder="Cari penginapan" name="q">
			<button class="newsletter-btn">Cari</button>
			<?=form_close()?>
		</div>
		<!-- /SEARCH BAR -->

		<!-- BREADCRUMB -->
		<div id="breadcrumb" class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-12">
						<h1 class="breadcrumb-header" style="display: none;">TEMPATNGINAP.COM - SOLUSI CEPAT TEMPAT CARI PENGINAPAN</h1>
						<h2 class="breadcrumb-header" style="font-size: 24px">tempatnginap.com</h2>
						<ul class="breadcrumb-tree">
							<li><a class="active" href="#">SOLUSI CEPAT TEMPAT CARI PENGINAPAN</a></li>
						</ul>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /BREADCRUMB -->