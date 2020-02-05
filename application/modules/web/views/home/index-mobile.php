
<div class="page page-home">
    <?php
    $this->load->view('layouts/desktop/header');
    ?>
    <div class="page-content">
        <div class="container-fluid">
            <!-- <div class="section-banner-top mb-4">
                <a href="javascript:void(0);" class="js-telemed"> <img class="w-100" src="https://sehatqcontent.s3.amazonaws.com/content/banner/top/telemed-4.png" alt=""> </a>
            </div> -->
            <div class="section-menu mb-4">
                <div class="row row-10">
                    <div class="col text-center">
                        <a class="menu-item" href="https://www.sehatq.com/obat">
                            <picture>
                                <source srcset="<?= site_url('assets/tempatnginap/img/icon/png/bedtime.png') ?>"> <img src="<?= site_url('assets/tempatnginap/img/icon/png/bedtime.png') ?>" alt="Penginapan Menu">
                            </picture>
                            <span class="txt">Penginapan</span>
                        </a>
                    </div>
                    <div class="col text-center">
                        <a class="menu-item" href="https://www.sehatq.com/artikel">
                            <picture>
                                <source srcset="<?= site_url('assets/tempatnginap/img/icon/png/rent-1.png') ?>"> <img src="<?= site_url('assets/tempatnginap/img/icon/png/rent-1.png') ?>" alt="Vila Menu">
                            </picture>
                            <span class="txt">Vila</span>
                        </a>
                    </div>
                    <div class="col text-center">
                        <a class="menu-item" href="https://www.sehatq.com/dokter">
                            <picture>
                                <source srcset="<?= site_url('assets/tempatnginap/img/icon/png/rental.png') ?>"> <img src="<?= site_url('assets/tempatnginap/img/icon/png/rental.png') ?>" alt="Kos Menu">
                            </picture>
                            <span class="txt">Kos</span>
                        </a>
                    </div>
                    <div class="col text-center">
                        <a class="menu-item" data-toggle="modal" data-target="#modalAllMenu">
                            <picture>
                                <source srcset="<?= site_url('assets/tempatnginap/img/icon/png/menu.png') ?>"> <img src="<?= site_url('assets/tempatnginap/img/icon/png/menu.png') ?>" alt="Semua" onerror="this.onerror=null;this.src='https://www.sehatq.com/public/assets/img/no-image.jpg?v=0120203';">
                            </picture>
                            <span class="txt">Lainnya</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="section-hero-banner mb-4">
                <ul class="list-unstyled list-box-data">
                    <li>
                        <div class="content-item">
                            <a href="https://www.sehatq.com/forum">
                                <div class="square hero-banner-mobile">
                                    <div class="square-content"> <img class="img-banner" src="https://sehatqcontent.s3.amazonaws.com/content/banner/hero/mobile/m-hero-chat-polusi-6.jpg" alt="Chat dengan Dokter"> </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="content-item">
                            <a href="https://www.sehatq.com/forum">
                                <div class="square hero-banner-mobile">
                                    <div class="square-content"> <img class="img-banner" src="https://sehatqcontent.s3.amazonaws.com/content/banner/hero/mobile/m-hero-chat-kantor-6.jpg" alt="Chat dengan Dokter"> </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="content-item">
                            <a href="https://www.sehatq.com/layanan-kesehatan">
                                <div class="square hero-banner-mobile">
                                    <div class="square-content"> <img class="img-banner js-imgLazy" src="https://www.sehatq.com/public/assets/img/no-image-landscape.jpg?v=0120203" data-src="https://sehatqcontent.s3.amazonaws.com/content/banner/hero/mobile/m-hero-booking-6.jpg" alt="Booking sekarang" onerror="this.onerror=null;this.src='https://www.sehatq.com/public/assets/img/no-image-landscape.jpg?v=0120203';"> </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="section-box mb-4">
                <div class="box-title">
                    <a href="https://www.sehatq.com/info-kesehatan">
                        <h2 class="txt m-0">Penginapan Teratas</h2>
                        <i class="fs icon-chevron-circle-right ml-1"></i>
                    </a>
                </div>
                <div class="box-body mt-3 mt-sm-4">
                    <ul class="list-unstyled list-box-data">
                        <?php foreach ($top_penginapans as $penginapan) : ?>
                            <li class="half">
                                <div class="content-item">
                                    <a href="<?= base_url($penginapan->jenis_kamar); ?>">
                                        <div class="tag"><?= ucwords($penginapan->jenis_kamar) ?></div>
                                    </a>
                                    <a href="<?= base_url($penginapan->jenis_kamar . '/' . $penginapan->slug) ?>">
                                        <div class="square">
                                            <div class="square-content"> <img class="img-banner" src="<?= $penginapan->gambar != null ? base_url('uploads/images/penginapan/' . $penginapan->gambar) : base_url('assets/tempatnginap/img/no-image.png') ?>" alt="<?= $penginapan->nama_kamar ?>"></div>
                                        </div>
                                        <h3 class="title ads-title text-ellipsis m-0 mt-2 mt-sm-3 js-cropText" style="float: none; position: static;" title="<?= $penginapan->nama_kamar ?>"><?= $penginapan->nama_kamar ?></h3>
                                    </a>
                                </div>
                                <div class="place mt-1 location ads-location text-ellipsis"> <i class="fs icon-location mr-1"></i> <span class="txt" title="<?= $penginapan->kota ?>"><?= $penginapan->kota ?></span> </div>
                                <div class="price mt-1"><span class="selling-price">Rp. <?= isset($penginapan->harga[0]->harga) ? number_format($penginapan->harga[0]->harga) : '0' ?></span> <span class="start-from">/<?= isset($penginapan->harga[0]->durasi) ? $penginapan->harga[0]->durasi : '' ?></span></div>
                            </li>
                        <?php endforeach ?>
                        <li class="half">
                            <div class="content-item">
                                <a href="https://www.sehatq.com/info-kesehatan">
                                    <div class="square">
                                        <div class="square-content">
                                            <div class="view-all">
                                                <div> <i class="fs icon-chevron-circle-right"></i>
                                                    <div class="title"> Lainnya </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section-box mb-4">
                <div class="box-title">
                    <a href="https://www.sehatq.com/faskes">
                        <h2 class="txt m-0">Terbaru</h2> <i class="fs icon-chevron-circle-right ml-1"></i>
                    </a>
                </div>
                <div class="box-body mt-3 mt-sm-4">
                    <ul class="list-unstyled list-box-data">

                        <?php foreach ($new_penginapans as $penginapan) : ?>
                            <li>
                                <div class="content-item">
                                    <a href="<?= base_url($penginapan->jenis_kamar); ?>">
                                        <div class="tag"><?= ucwords($penginapan->jenis_kamar) ?></div>
                                    </a>
                                    <div class="">
                                        <a href="https://www.sehatq.com/faskes/lab-kimia-farma-serang">
                                            <div class="square landscape">
                                                <div class="square-content"> <img class="img-banner js-imgLazy" src="<?= site_url('assets/tempatnginap/img/no-image.png') ?>" data-src="<?= $penginapan->gambar != null ? base_url('uploads/images/penginapan/' . $penginapan->gambar) : base_url('assets/tempatnginap/img/no-image.png') ?>" alt="<?= $penginapan->nama_kamar ?>" title="<?= $penginapan->nama_kamar ?>" onerror="this.onerror=null;this.src='<?= site_url('assets/tempatnginap/img/no-image-landscape.png') ?>';"> </div>
                                            </div>
                                            <div class="mt-2 mt-sm-3">
                                                <h3 class="title m-0 js-cropText " style="float: none; position: static;">Laboratorium Klinik Kimia Farma Serang</h3>
                                            </div>
                                            <div class="place mt-1 location ads-location text-ellipsis"> <i class="fs icon-location mr-1"></i> <span class="txt" title="<?= $penginapan->kota ?>"><?= $penginapan->kota ?></span> </div>
                                            <div class="price mt-1"><span class="selling-price">Rp. <?= isset($penginapan->harga[0]->harga) ? number_format($penginapan->harga[0]->harga) : '0' ?></span> <span class="start-from">/<?= isset($penginapan->harga[0]->durasi) ? $penginapan->harga[0]->durasi : '' ?></span></div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach ?>
                        <li>
                            <div class="content-item">
                                <a href="https://www.sehatq.com/info-kesehatan">
                                    <div class="square landscape">
                                        <div class="square-content">
                                            <div class="view-all">
                                                <div> <i class="fs icon-chevron-circle-right"></i>
                                                    <div class="title"> Lainnya </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section-box mb-4">
                <div class="box-body">
                    <ul class="list-unstyled list-box-data">
                        <li>
                            <div class="list-item">
                                <div class="list-head">
                                    <a href="https://www.sehatq.com/dokter/ortopedi">
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
                        </li>
                        <li>
                            <div class="list-item">
                                <div class="list-head">
                                    <a href="https://www.sehatq.com/dokter/endokrin">
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
                        </li>
                        <li>
                            <div class="list-item">
                                <div class="list-head">
                                    <a href="https://www.sehatq.com/dokter/bedah">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="page-footer">
        <div class="footer pt-4 pb-2">
            <div class="container-fluid">
                <ul class="footer-menu list-unstyled pt-4 mb-4">
                    <li class="font-14 mb-2"><a href="https://www.sehatq.com/tentang-kami">Tentang Kami</a></li>
                    <li class="font-14 mb-2"><a href="https://www.sehatq.com/syarat">Syarat dan Ketentuan</a></li>
                    <li class="font-14 mb-2"><a href="https://www.sehatq.com/karir">Karir</a></li>
                    <li class="font-14 mb-2"><a href="https://www.sehatq.com/kontak">Kontak Kami</a></li>
                    <li class="font-14 mb-2"><a href="https://www.sehatq.com/kebijakan-privasi">Privacy Policy</a></li>
                    <li class="font-14 mb-2"><a href="https://www.sehatq.com/kebijakan-editorial">Kebijakan Editorial</a></li>
                </ul>
                <div class="copy font-14 pb-2 mt-4 color-grey-dark"> © TempatNginap, 2020. All Rights Reserved </div>
            </div>
        </div>
    </div>
</div>
<!-- <ins class="adsbygoogle adsbygoogle-noablate" style="display: none !important;" data-adsbygoogle-status="done"><ins id="aswift_0_expand" style="display:inline-table;border:none;height:0px;margin:0;padding:0;position:relative;visibility:visible;width:0px;background-color:transparent;"><ins id="aswift_0_anchor" style="display:block;border:none;height:0px;margin:0;padding:0;position:relative;visibility:visible;width:0px;background-color:transparent;"><iframe frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_0" name="aswift_0" style="left:0;position:absolute;top:0;border:0px;width:0px;height:0px;" __idm_frm__="3315"></iframe></ins></ins></ins> -->
<?php
    $this->load->view('layouts/mobile/mobile-main-menu');
?>
<div class="back-to-top js-backToTop"> <i class="fs icon-up" aria-hidden="true"></i></div>
<?php
    $this->load->view('layouts/mobile/mobile-modal-all-menu');
    $this->load->view('layouts/mobile/mobile-modal-search');
?>

<div class="notification-wrapper" id="notification-wrapper"></div>