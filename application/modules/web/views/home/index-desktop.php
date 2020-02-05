<div class="page page-home" id="pageHome">
    <?php
    $this->load->view('layouts/desktop/header');
    ?>
    <div class="page-content">
        <div class="js-offsetTop">
            <div class="section section-home pt-4 mb-5">
                <div class="hero-banner-slider content-item js-sliderHome" style="display: none">
                    <div data-placeHolder="<?= site_url('assets/tempatnginap/img/banner/d-hero-chat-polusi-6.jpg') ?>" class="hero-banner-item">
                        <a href="forum.html">
                            <div class="square landscape">
                                <div class="square-content">
                                    <img class="img-banner" src="<?= site_url('assets/tempatnginap/img/banner/d-hero-chat-polusi-6.jpg') ?>" alt="Forum Tanya Jawab Online Seputar Dunia Kesehatan" onerror="this.onerror=null;this.src='<?= site_url('assets/tempatnginap/img/no-image-landscape.png') ?>';">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div data-placeHolder="<?= site_url('assets/tempatnginap/img/banner/d-hero-chat-polusi-6.jpg') ?>" class="hero-banner-item">
                        <a href="forum.html">
                            <div class="square landscape">
                                <div class="square-content">
                                    <img class="img-banner" src="<?= site_url('assets/tempatnginap/img/banner/d-hero-chat-polusi-6.jpg') ?>" alt="Forum Tanya Jawab Online Seputar Dunia Kesehatan" onerror="this.onerror=null;this.src='<?= site_url('assets/tempatnginap/img/no-image-landscape.png') ?>';">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div data-placeHolder="<?= site_url('assets/tempatnginap/img/banner/d-hero-chat-polusi-6.jpg') ?>" class="hero-banner-item">
                        <a href="layanan-kesehatan.html">
                            <div class="square landscape">
                                <div class="square-content">
                                    <img class="img-banner" src="<?= site_url('assets/tempatnginap/img/banner/d-hero-chat-polusi-6.jpg') ?>" alt="Booking sekarang" onerror="this.onerror=null;this.src='<?= site_url('assets/tempatnginap/img/no-image-landscape.png') ?>';">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="hero-banner-nav" data-total="3">
                    <a href="javascript:void(0);" class="hero-banner-prev js-heroPrev"> <i class="fs icon-chevron-left"></i> <span class="sr-only">Prev</span> </a>
                    <a href="javascript:void(0);" class="hero-banner-next js-heroNext"> <i class="fs icon-chevron-right"></i> <span class="sr-only">Next</span> </a>
                    <div class="hero-banner-dots js-heroDots"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <?php
            $this->load->view('layouts/desktop/section-main-menu-icon');
            ?>
        </div>
        <div class="separator mt-4 mb-4"></div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="theiaStickySidebar">
                        <div class="section-box mb-4">
                            <div class="box-title">
                                <a href="info-kesehatan.html">
                                    <h2 class="txt m-0">Penginapan Teratas</h2> <i class="fs icon-chevron-circle-right ml-1"></i>
                                </a>
                            </div>
                            <div class="box-body mt-3 mt-sm-4">
                                <div class="row row-10">

                                    <?php foreach ($top_penginapans as $penginapan) : ?>
                                        <div class="col-sm-6 col-lg-3 mb-3">
                                            <div class="content-item">
                                                <a href="<?= base_url($penginapan->jenis_kamar); ?>">
                                                    <div class="tag"><?= ucwords($penginapan->jenis_kamar) ?></div>
                                                </a>
                                                <a href="<?= base_url($penginapan->jenis_kamar . '/' . $penginapan->slug) ?>">
                                                    <div class="square landscape-66-percent">
                                                        <div class="square-content">
                                                            <img class="img-banner js-imgLazy" src="<?= site_url('assets/tempatnginap/img/no-image.png') ?>" data-src="<?= $penginapan->gambar != null ? base_url('uploads/images/penginapan/' . $penginapan->gambar) : base_url('assets/tempatnginap/img/no-image.png') ?>" alt="<?= $penginapan->nama_kamar ?>" onerror="this.onerror=null;this.src='<?= site_url('assets/tempatnginap/img/no-image-landscape.png') ?>';" />
                                                        </div>
                                                    </div>
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText"><?= $penginapan->nama_kamar ?></h3>
                                                </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt"><?= $penginapan->kota ?></span> </div>
                                                <div class="price mt-1"><span class="selling-price">Rp. <?= isset($penginapan->harga[0]->harga) ? number_format($penginapan->harga[0]->harga) : '0' ?></span> <span class="start-from">/<?= isset($penginapan->harga[0]->durasi) ? $penginapan->harga[0]->durasi : '' ?></span></div>
                                            </div>
                                        </div>
                                    <?php endforeach ?>
                                </div>
                            </div>
                        </div>
                        <div class="section-box mb-4">
                            <div class="box-title">
                                <a href="faskes.html">
                                    <h2 class="txt m-0">Terbaru</h2> <i class="fs icon-chevron-circle-right ml-1"></i>
                                </a>
                            </div>
                            <div class="box-body mt-3 mt-sm-4">
                                <div class="row row-10">
                                    <?php foreach ($new_penginapans as $penginapan) : ?>
                                        <div class="col-sm-6 col-lg-3 mb-3">
                                            <div class="content-item">
                                                <a href="<?= base_url($penginapan->jenis_kamar); ?>">
                                                    <div class="tag"><?= ucwords($penginapan->jenis_kamar) ?></div>
                                                </a>
                                                <a href="<?= base_url($penginapan->jenis_kamar . '/' . $penginapan->slug) ?>">
                                                    <div class="square landscape-66-percent">
                                                        <div class="square-content">
                                                            <img class="img-banner js-imgLazy" src="<?= site_url('assets/tempatnginap/img/no-image.png') ?>" data-src="<?= $penginapan->gambar != null ? base_url('uploads/images/penginapan/' . $penginapan->gambar) : base_url('assets/tempatnginap/img/no-image.png') ?>" alt="<?= $penginapan->nama_kamar ?>" onerror="this.onerror=null;this.src='<?= site_url('assets/tempatnginap/img/no-image-landscape.png') ?>';" />
                                                        </div>
                                                    </div>
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText"><?= $penginapan->nama_kamar ?></h3>
                                                </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt"><?= $penginapan->kota ?></span> </div>
                                                <div class="price mt-1"><span class="selling-price">Rp. <?= isset($penginapan->harga[0]->harga) ? number_format($penginapan->harga[0]->harga) : '0' ?></span> <span class="start-from">/<?= isset($penginapan->harga[0]->durasi) ? $penginapan->harga[0]->durasi : '' ?></span></div>
                                            </div>
                                        </div>
                                    <?php endforeach ?>
                                </div>
                            </div>
                        </div>
                        <div class="section-box mb-4">
                            <div class="box-body mt-3">
                                <div class="row row-10">
                                    <div class="col-md-4 col-lg-4 mb-3">
                                        <div class="list-item">
                                            <div class="list-head">
                                                <a href="dokter/urologi.html">
                                                    <h3 class="txt m-0">Kota</h3> <i class="fs icon-chevron-right color-primary font-13 float-right"></i> <span class="clearfix"></span>
                                                </a>
                                            </div>
                                            <div class="list-body">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-faisal-abdi-matondang-spu.html"><span class="txt font-13 js-text">Kabupaten Lombok <b>(10)</b></span></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-denny-achmad-prayoga-spu.html"><span class="txt font-13 js-text">Kota Tangerang <b>(5)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-firdianto-spu.html"> <span class="txt font-13 js-text">Kota Tangerang Selatan <b>(2)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-firdianto-spu.html"> <span class="txt font-13 js-text">Kota Jakarta <b>(1)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mb-4">
                                        <div class="list-item">
                                            <div class="list-head">
                                                <a href="dokter/umum.html">
                                                    <h3 class="txt m-0">Penginapan</h3> <i class="fs icon-chevron-right color-primary font-13 float-right"></i> <span class="clearfix"></span>
                                                </a>
                                            </div>
                                            <div class="list-body">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-yenny-vandalita.html"> <span class="txt font-13 js-text">Kos <b>(10)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-amandha-boy-timor-randita-mmeded.html"> <span class="txt font-13 js-text">Penginapan <b>(5)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-valerie-anneke.html"> <span class="txt font-13 js-text">Rumahan <b>(2)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/dr-valerie-anneke.html"> <span class="txt font-13 js-text">Vila <b>(1)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mb-4">
                                        <div class="list-item">
                                            <div class="list-head">
                                                <a href="dokter/gigi.html">
                                                    <h3 class="txt m-0">Kategori</h3> <i class="fs icon-chevron-right color-primary font-13 float-right"></i> <span class="clearfix"></span>
                                                </a>
                                            </div>
                                            <div class="list-body">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/drg-rinda-utama.html"> <span class="txt font-13 js-text">Kos Wanita <b>(10)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/drg-rosita-jusuf-sumintapura.html"> <span class="txt font-13 js-text">Kos Pria <b>(5)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row-5">
                                                            <div class="col align-self-center">
                                                                <a href="dokter/drg-irma-mutiarasari.html"> <span class="txt font-13 js-text">Kos Pria Wanita <b>(2)</b></span> </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="quick-register p-5 mb-4">
                            <div class="pr-5">
                                <h4 class="font-20 mb-3">Yuk, bergabung di <a href="<?= base_url() ?>">TempatNginap.com</a></h4>
                                <p class="font-16">Daftar gratis, cari penginapan yg nyaman dan kamu sukai.</p>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="pr-3">
                                        <div class="row py-4">
                                            <div class="col-6 mb-4"> <strong class="d-block font-24 mb-1">1.165</strong> <span class="font-14 italic color-primary-dark">Penginapan</span> </div>
                                            <div class="col-6 mb-4"> <strong class="d-block font-24 mb-1">2.196</strong> <span class="font-14 italic color-primary-dark">Kota</span> </div>
                                            <div class="col-6 mb-4"> <strong class="d-block font-24 mb-1">6.979</strong> <span class="font-14 italic color-primary-dark">Pengguna</span> </div>
                                            <div class="col-6 mb-4"> <strong class="d-block font-24 mb-1">2.127</strong> <span class="font-14 italic color-primary-dark">Mitra</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col border-separate">
                                    <div class="pl-3 pt-4">
                                        <form class="js-formValidate js-formHardSubmit" id="formRegister" action="https://www.sehatq.com/daftar/email" method="POST">
                                            <input type="hidden" name="_token" value="N8M4lqCPnx9CpYSZbrtuHsApA7tXelPAuIHC3iRV">
                                            <div class="form-group line-style has-ico left mb-4">
                                                <label for="email" class="control-label font-14">Nama Lengkap<span class="required d-none">*</span></label>
                                                <div class="position-relative">
                                                    <input class="form-control" name="name" id="name" type="text" placeholder="Type your full name" value="" autocomplete="off" required="required"> <i class="fs icon-profile"></i>
                                                </div>
                                            </div>
                                            <div class="form-group line-style has-ico left mb-4">
                                                <label for="email" class="control-label font-14">Email<span class="required d-none">*</span></label>
                                                <div class="position-relative">
                                                    <input class="form-control" name="email" id="email" type="email" placeholder="Type your email" value="" autocomplete="off" required="required" data-msg-required="Email harus diisi dengan benar"> <i class="fs icon-inbox"></i>
                                                </div>
                                            </div>
                                            <div class="form-group line-style has-ico left mb-2">
                                                <label for="password" class="control-label font-14">Password<span class="required d-none">*</span></label>
                                                <div class="show-password"> <span class="js-showPassword" data-show="show password" data-hide="hide password">show password</span>
                                                    <div class="position-relative">
                                                        <input class="form-control" name="password" id="password" type="password" placeholder="Type your password" value="" autocomplete="off" required="required" minlength="6" data-msg-required="Password harus diisi minimal 6 karakter" data-msg-minlength="Password harus diisi minimal 6 karakter"> <i class="fs icon-lock"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <div class="help-block"> Password minimal 6 karakter </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <div class="animated-checkbox">
                                                    <label>
                                                        <input type="checkbox" class="js-agreement" name="agreement" id="register_agreement" required="required"> <span class="label-text font-12"> Saya telah menyetujui TempatNginap </span> </label> <span class="label-text font-12"> <a href="syarat.html" target="_blank" class="underline no-wrap color-black">Syarat &amp; Ketentuan</a> dan <a href="kebijakan-privasi.html" target="_blank" class="underline no-wrap color-black">Privacy Policy</a> </span> </div>
                                            </div>
                                            <div class="row row-0 mt-3">
                                                <div class="col">
                                                    <button class="btn btn-lg btn-block btn-primary rounded" type="submit" disabled="disabled">Continue</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="auth-notes text-center mt-2"> We will send you an email that will instantly log you in </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                        $this->load->view('layouts/desktop/footer');
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="telemed-widget" id="telemedWidget"></div>
<div class="back-to-top js-backToTop"> <i class="fs icon-up" aria-hidden="true"></i></div>
<div class="notification-wrapper" id="notification-wrapper"></div>