<div class="page-header ">
    <div class="header <?= $this->uri->segment(1) == '' ? 'home' : '' ?> js-headNav d-none d-md-block d-lg-block d-xl-block">
        <div class="container">
            <div class="header-wrapper">
                <div class="row row-10">
                    <div class="col-3 align-self-center">
                        <div class="logo-container">
                            <a href="<?= base_url() ?>"> <img class="logo" src="<?= site_url('assets/tempatnginap/img/logo-1.png') ?>" alt="TempatNginap Logo"> </a>
                        </div>
                    </div>
                    <div class="col-7 align-self-center">
                        <div class="search-containerd-block">
                            <div class="search-box">
                                <div class="row row-5 h-100">
                                    <div class="col-auto align-self-center">
                                        <div class="search-left ml-1"> <i class="fs icon-search"></i> </div>
                                    </div>
                                    <div class="col align-self-center col-center position-static">
                                        <form class="search-auto" action="<?= base_url() ?>/cari" method="get">
                                            <div class="row row-5">
                                                <div class="col position-static">
                                                    <input type="text" name="q" class="js-search" data-url="" placeholder="Cari Penginapan" value="" autocomplete="off"> </div>
                                                <div class="col-auto align-self-center">
                                                    <a href="javascript:void(0);" class="js-clearSearch d-none"> <i class="fs icon-close color-grey-dark"></i> </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 align-self-center">
                        <div class="text-right pr-1">
                            <div class="inline-block v-align-m notification">
                                <div class="dropdown dropdown-custom" id="notification">
                                    <div class="dropdown-toggle" data-toggle="dropdown"> <i class="fs icon-reminder color-primary"></i> </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <ul class="list-unstyled">
                                            <li class="dropdown-item">
                                                <div class="p-2 color-grey-dark">Tidak ada notifikasi</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block v-align-m user-menu ml-4">
                                <a href="login.html">
                                    <div class="dropdown-toggle"> <i class="fs icon-profile color-primary"></i> </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-menu">
                    <?php
                    $this->load->view('layouts/desktop/section-main-menu-no-icon');
                    ?>
                </div>
            </div>
        </div>
    </div>

    <div class="header <?= $this->uri->segment(1) == '' ? 'home' : '' ?> js-headNav d-block d-md-none d-lg-none d-xl-none">
        <div class="container-fluid">
            <div class="header-wrapper">
                <div class="row row-5">
                    <div class="col-auto align-self-center col-back">
                        <a href="<?= base_url() ?>"> <i class="fs icon-back"></i> </a>
                    </div>
                    <div class="col align-self-center">
                        <div class="main-search-wrapper position-relative">
                            <div class="row row-5 h-100">
                                <div class="col-auto align-self-center">
                                    <div class="search-toggle">
                                        <a class="btn-search" data-toggle="modal" data-target="#modalSearch"> <i class="fs icon-search"></i> </a>
                                        <a href="<?= base_url() ?>"> <img class="logo" src="<?= $this->uri->segment(1) == '' ? base_url('assets/tempatnginap/img/logo-1.png') : base_url('assets/tempatnginap/img/logo-icon.png') ?>" alt="TempatNginap Logo"> </a>
                                    </div>
                                </div>
                                <div class="col align-self-center col-center position-static">
                                    <a data-toggle="modal" data-target="#modalSearch" class="d-block"> <img class="logo" src="<?= $this->uri->segment(1) == '' ? base_url('assets/tempatnginap/img/logo-1.png') : base_url('assets/tempatnginap/img/logo-icon.png') ?>" alt="TempatNginap Logo"> </a>
                                    <form class="search-auto" action="<?= base_url() ?>/cari" method="get">
                                        <div class="row row-5">
                                            <div class="col position-static">
                                                <input type="text" name="q" class="js-search" data-url="" placeholder="Cari Penginapan" value="" autocomplete="off"> </div>
                                            <div class="col-auto align-self-center">
                                                <a href="javascript:void(0);" class="js-clearSearch d-none"> <i class="fs icon-close color-grey-dark"></i> </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>