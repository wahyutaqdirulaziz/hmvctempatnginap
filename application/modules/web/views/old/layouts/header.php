<header>
    <div id="top-header">
        <div class="container">
            <ul class="header-links pull-left hidden-xs">
                <li><a href="#"><i class="fa fa-phone"></i> <span itemprop="telephone">087763305916</span></a></li>
                <li><a href="#"><i class="fa fa-envelope-o"></i> <span itemprop="email">wahyudipe6@gmail.com</span></a></li>
                <li><a href="#" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">                            <i class="fa fa-map-marker"></i> <span itemprop="email"><span itemprop="addressLocality">lombok</span> -                            <span itemprop="addressCountry">indonesia</span></a>                        </li>
            </ul>
            <ul class="header-links pull-right">
                <li><a href="<?php echo base_url('register')?>"><i class="fa fa-user"></i>Daftar</a></li>
                <li><a href="<?php echo base_url('login')?>"><i class="fa fa-lock"></i>Masuk</a></li>
            </ul>
        </div>
    </div>
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
                            <li><a href="<?= base_url('penginapan');?>" style="color:#fff">Penginapan</a></li>
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

<div class="newsletter search">
    <form method="get" action="<?= base_url('pencarian') ?>">
    <input class="input" placeholder="Cari penginapan" name="q">
    <button class="newsletter-btn">Cari</button>
    <?=form_close()?>
</div>

<div id="breadcrumb" class="section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="breadcrumb-header" style="display: none;">TEMPATNGINAP.COM - SOLUSI CEPAT TEMPAT CARI PENGINAPAN</h1>
                <h2 class="breadcrumb-header" style="font-size: 24px">tempatnginap.com</h2>
                <ul class="breadcrumb-tree">
                    <li><a class="active" href="#">SOLUSI CEPAT TEMPAT CARI PENGINAPAN</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>