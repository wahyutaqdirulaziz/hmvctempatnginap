<div class="page">
    <?php
    $this->load->view('layouts/desktop/header');
    ?>
    <div class="page-content pt-md-5 pt-lg-5- px-xl-5">
        <div class="container">
            <div class="row">
                <div class="d-none d-lg-block d-xl-block col-lg-3">
                    <div class="theiaStickySidebar">
                        <div class="filter">
                            <div class="accordion-custom with-border mb-4">
                                <div class="accordion-header" id="headSort">
                                    <div data-toggle="collapse" data-target="#contentSort" aria-expanded="true" aria-controls="contentSort">
                                        <div class="row row-10">
                                            <div class="col-10 align-self-end">
                                                <div class="title font-12">Urutkan</div>
                                            </div>
                                            <div class="col-2 text-right align-self-center"> <i class="fs icon-chevron-down color-body font-12"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="contentSort" class="collapse show" aria-labelledby="headSort">
                                    <div class="accordion-body pt-0 pb-0">
                                        <div class="list-filter">
                                            <div class="for-filter">
                                                <a class="label-text js-sort" data-type="newest" href="promo8676.html?sort=newest"> <i class="fs icon-check-circle mr-0"></i> <span class="inline-block">Terbaru</span> </a>
                                            </div>
                                        </div>
                                        <div class="list-filter">
                                            <div class="for-filter">
                                                <a class="label-text js-sort" data-type="popular" href="promofd57.html?sort=popular"> <i class="fs icon-check-circle mr-0"></i> <span class="inline-block">Terpopuler</span> </a>
                                            </div>
                                        </div>
                                        <div class="list-filter">
                                            <div class="for-filter">
                                                <a class="label-text js-sort" data-type="lowest" href="promob192.html?sort=lowest"> <i class="fs icon-check-circle mr-0"></i> <span class="inline-block">Harga Terendah</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-custom with-border" id="filter">
                                <div class="accordion-header">
                                    <div class="row row-10">
                                        <div class="col-6">
                                            <div class="title inline-block font-12">Filter</div>
                                        </div>
                                        <div class="col-6 text-right"> <a href="promo.html" class="color-body font-12">Reset</a> </div>
                                    </div>
                                </div>
                                <div class="pb-3">
                                    <form action="<? ?>" method="GET">
                                        <div class="accordion-custom no-shadow js-searchFilter">
                                            <div class="accordion-header" id="headLocation">
                                                <div data-toggle="collapse" data-target="#contentLocation" aria-expanded="true" aria-controls="contentLocation">
                                                    <div class="row row-10">
                                                        <div class="col-10 align-self-end">
                                                            <div class="title font-12">Lokasi Penginapan</div>
                                                        </div>
                                                        <div class="col-2 text-right align-self-center"> <i class="fs icon-chevron-down color-body font-12"></i> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="contentLocation" class="collapse show" data-parent="#filter" aria-labelledby="headLocation">
                                                <div class="pl-3 pr-3 mb-3">
                                                    <div class="main-search-wrapper">
                                                        <div class="row row-5 h-100">
                                                            <div class="col-auto align-self-center">
                                                                <div class="search-toggle cursor-default"> <img class="logo" src="<?= site_url('assets/tempatnginap/img/logo-icon.png') ?>" alt="Logo TempatNginap" width="20"> </div>
                                                            </div>
                                                            <div class="col align-self-center col-center">
                                                                <div>
                                                                    <input type="text" class="js-searchInput" placeholder="Cari Lokasi Penginapan">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-body with-scroll pt-0 pb-0 mr-3 js-listData">
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text active" href="promo.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Semua</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/jakarta-selatan.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Jakarta Selatan</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/jakarta-pusat.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Jakarta Pusat</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/bogor.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Bogor</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/jakarta-barat.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Jakarta Barat</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/jakarta-timur.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Jakarta Timur</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/depok.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Depok</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/tangerang.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Tangerang</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/jakarta-utara.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Jakarta Utara</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/karawang.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Karawang</span> </a>
                                                        </div>
                                                    </div>
                                                    <div class="list-filter js-list">
                                                        <div class="animated-checkbox for-filter font-12">
                                                            <a class="label-text" href="promo/bekasi.html"> <i class="fs icon-check-circle mr-0"></i> <span class="label-text js-text">Bekasi</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <br>
                        <br> </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div class="theiaStickySidebar">
                        <div class="content">
                            <h1 class="font-20 mb-3 opensans-semibold">Daftar Iklan </h1>
                            <div class="section-box mb-4 mb-md-5 mb-lg-5 mb-xl-5">
                                <div class="box-title">
                                    <h2 class="txt m-0">Iklan Eksklusif TempatNginap</h2>
                                </div>
                                <div class="box-body mt-3 mt-sm-4">
                                    <div class="row row-10">
                                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-dermapen.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578571427.jpg" alt="Promo Dermapen" title="Promo Dermapen" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">62 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-dermapen.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Dermapen</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 900.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-diskon-20-20-consultation-rehabilitation-package.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578846402.jpg" alt="Promo Diskon 20% + 20% “Consultation &amp; Rehabilitation Package”" title="Promo Diskon 20% + 20% “Consultation &amp; Rehabilitation Package”" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/lainnya.html">
                                                            <div class="tag position-static mr-1">Lainnya</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">24 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-diskon-20-20-consultation-rehabilitation-package.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Diskon 20% + 20% “Consultation &amp; Rehabilitation Package”</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Medifit</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 1.180.000</span> <span class="selling-price">Rp. 775.200</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-laser-biaxis-pigmentasi-rejuvenasi-jerawat.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578571815.jpg" alt="Promo Laser Biaxis &quot;Pigmentasi, Rejuvenasi, Jerawat&quot;" title="Promo Laser Biaxis &quot;Pigmentasi, Rejuvenasi, Jerawat&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">36 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-laser-biaxis-pigmentasi-rejuvenasi-jerawat.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Laser Biaxis &quot;Pigmentasi, Rejuvenasi, Jerawat&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 1.250.000</span> <span class="selling-price">Rp. 800.000</span> <span class="selling-price">Hemat 36%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-bleaching-gigi-gratis-scaling.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578457195.jpg" alt="Promo Bleaching Gigi + Gratis Scaling" title="Promo Bleaching Gigi + Gratis Scaling" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">152 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-bleaching-gigi-gratis-scaling.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Bleaching Gigi + Gratis Scaling</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Natura Dental Center</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 1.999.000</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-box mb-4 mb-md-5 mb-lg-5 mb-xl-5">
                                <div class="result-total js-resultTotal"> <div class="box-title"> <div class="container-fluid"> <h2 class="txt info mb-0"> Menampilkan <strong>1-24</strong> dari <strong>74</strong> promo yang ditemukan </h2> </div> </div> </div>
                                <div class="box-body mt-3 mt-sm-4">
                                    <div class="row row-10">
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-vitamin-infusion-therapy.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578854412.jpg" alt="Promo Vitamin Infusion Therapy" title="Promo Vitamin Infusion Therapy" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">38 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-vitamin-infusion-therapy.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Vitamin Infusion Therapy</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Universal Care</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 1.200.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-sehat-ceria.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578847978.jpg" alt="Promo Sehat Ceria" title="Promo Sehat Ceria" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">31 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-sehat-ceria.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Sehat Ceria</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">FDC Dental Clinic Fatmawati</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 350.000</span> <span class="selling-price">Rp. 262.500</span> <span class="selling-price">Hemat 25%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-janworry.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578846962.jpg" alt="Promo Janworry" title="Promo Janworry" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">34 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-janworry.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Janworry</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">FDC Dental Clinic Fatmawati</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 400.000</span> <span class="selling-price">Rp. 123.000</span> <span class="selling-price">Hemat 69%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-diskon-20-20-consultation-rehabilitation-package.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578846402.jpg" alt="Promo Diskon 20% + 20% “Consultation &amp; Rehabilitation Package”" title="Promo Diskon 20% + 20% “Consultation &amp; Rehabilitation Package”" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/lainnya.html">
                                                            <div class="tag position-static mr-1">Lainnya</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">24 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-diskon-20-20-consultation-rehabilitation-package.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Diskon 20% + 20% “Consultation &amp; Rehabilitation Package”</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Medifit</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 1.180.000</span> <span class="selling-price">Rp. 775.200</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-vaksin-hepatitis-a-anak.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578649977.jpg" alt="Promo Vaksin Hepatitis A Anak" title="Promo Vaksin Hepatitis A Anak" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/vaksinasi-imunisasi.html">
                                                            <div class="tag position-static mr-1">Vaksinasi &amp; Imunisasi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">46 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-vaksin-hepatitis-a-anak.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Vaksin Hepatitis A Anak</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Rumah Vaksinasi Pusat</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 450.000</span> <span class="selling-price">Rp. 400.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-instabrite-laser-id-fluzh-reverse.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578648583.jpg" alt="Promo Instabrite Laser &amp; ID Fluzh Reverse" title="Promo Instabrite Laser &amp; ID Fluzh Reverse" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">40 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-instabrite-laser-id-fluzh-reverse.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Instabrite Laser &amp; ID Fluzh Reverse</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">ID Beauty Clinic Jakarta</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 2.000.000</span> <span class="selling-price">Rp. 1.400.000</span> <span class="selling-price">Hemat 30%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-korean-acne-silky-facial-oxy-facial.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578648098.jpg" alt="Promo Korean Acne Silky Facial &amp; Oxy Facial" title="Promo Korean Acne Silky Facial &amp; Oxy Facial" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">47 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-korean-acne-silky-facial-oxy-facial.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Korean Acne Silky Facial &amp; Oxy Facial</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">ID Beauty Clinic Jakarta</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 425.000</span> <span class="selling-price">Rp. 297.500</span> <span class="selling-price">Hemat 30%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-smooth-peeling-micro-facial.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578645821.jpg" alt="Promo Smooth Peeling &amp; Micro Facial" title="Promo Smooth Peeling &amp; Micro Facial" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">56 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-smooth-peeling-micro-facial.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Smooth Peeling &amp; Micro Facial</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">ID Beauty Clinic Jakarta</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 500.000</span> <span class="selling-price">Rp. 350.000</span> <span class="selling-price">Hemat 30%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-ok-scaling-gigi.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578594571.jpg" alt="Promo OK &quot;Scaling Gigi&quot;" title="Promo OK &quot;Scaling Gigi&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">96 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-ok-scaling-gigi.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo OK &quot;Scaling Gigi&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Gigi OK Dental</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 500.000</span> <span class="selling-price">Rp. 250.000</span> <span class="selling-price">Hemat 50%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-ok-cabut-gigi-anak.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578593629.jpg" alt="Promo OK &quot;Cabut Gigi Anak&quot;" title="Promo OK &quot;Cabut Gigi Anak&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">72 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-ok-cabut-gigi-anak.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo OK &quot;Cabut Gigi Anak&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Gigi OK Dental</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 320.000</span> <span class="selling-price">Rp. 280.000</span> <span class="selling-price">Hemat 20%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-venner-porcelain.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578592399.jpg" alt="Promo venner Porcelain" title="Promo venner Porcelain" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">48 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-venner-porcelain.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo venner Porcelain</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Happy Dental Clinic - Ciputra Mall</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 25.000.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-paket-thermalift.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578591508.jpg" alt="Promo Paket ThermaLift" title="Promo Paket ThermaLift" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">53 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-paket-thermalift.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Paket ThermaLift</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Kulit dan Kecantikan Nibelth Medical Center</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 315.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-ok-topical-application-fluor-untuk-anak.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578589579.jpg" alt="Promo OK &quot;Topical Application Fluor&quot; untuk Anak" title="Promo OK &quot;Topical Application Fluor&quot; untuk Anak" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">54 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-ok-topical-application-fluor-untuk-anak.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo OK &quot;Topical Application Fluor&quot; untuk Anak</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Gigi OK Dental</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 400.000</span> <span class="selling-price">Rp. 320.000</span> <span class="selling-price">Hemat 20%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/paket-laser-biaxis-tattoo-removal.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578581897.jpg" alt="Paket Laser Biaxis &quot;Tattoo Removal&quot;" title="Paket Laser Biaxis &quot;Tattoo Removal&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">52 melihat</span> </div>
                                                </div>
                                                <a href="promo/paket-laser-biaxis-tattoo-removal.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Paket Laser Biaxis &quot;Tattoo Removal&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 1.250.000</span> <span class="selling-price">Rp. 1.000.000</span> <span class="selling-price">Hemat 20%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-mikrodermabrasi.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578581655.jpg" alt="Promo Mikrodermabrasi" title="Promo Mikrodermabrasi" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">63 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-mikrodermabrasi.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Mikrodermabrasi</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 325.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-ok-dental-sealant-untuk-anak.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578581489.jpg" alt="Promo Ok &quot;Dental Sealant untuk Anak&quot;" title="Promo Ok &quot;Dental Sealant untuk Anak&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">59 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-ok-dental-sealant-untuk-anak.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Ok &quot;Dental Sealant untuk Anak&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Gigi OK Dental</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 300.000</span> <span class="selling-price">Rp. 240.000</span> <span class="selling-price">Hemat 20%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-laser-biaxis-pigmentasi-rejuvenasi-jerawat.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578571815.jpg" alt="Promo Laser Biaxis &quot;Pigmentasi, Rejuvenasi, Jerawat&quot;" title="Promo Laser Biaxis &quot;Pigmentasi, Rejuvenasi, Jerawat&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">36 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-laser-biaxis-pigmentasi-rejuvenasi-jerawat.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Laser Biaxis &quot;Pigmentasi, Rejuvenasi, Jerawat&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 1.250.000</span> <span class="selling-price">Rp. 800.000</span> <span class="selling-price">Hemat 36%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-dermapen.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578571427.jpg" alt="Promo Dermapen" title="Promo Dermapen" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">62 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-dermapen.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Dermapen</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 900.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-chemical-peel.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578571055.jpg" alt="Promo Chemical Peel" title="Promo Chemical Peel" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">58 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-chemical-peel.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Chemical Peel</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS Azra</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 300.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-instant-eye-lift-magic-slim-face.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578566245.jpg" alt="Promo Instant Eye Lift &amp; Magic Slim Face" title="Promo Instant Eye Lift &amp; Magic Slim Face" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-kulit-dan-kecantikan.html">
                                                            <div class="tag position-static mr-1">Kulit &amp; Kecantikan</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">60 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-instant-eye-lift-magic-slim-face.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Instant Eye Lift &amp; Magic Slim Face</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">ID Beauty Clinic Jakarta</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 450.000</span> <span class="selling-price">Rp. 315.000</span> <span class="selling-price">Hemat 30%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-happy-hours-weekend.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578563924.jpg" alt="Promo Happy Hours Weekend" title="Promo Happy Hours Weekend" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">63 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-happy-hours-weekend.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Happy Hours Weekend</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">FDC Dental Clinic Fatmawati</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 750.000</span> <span class="selling-price">Rp. 270.000</span> <span class="selling-price">Hemat 64%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-kawat-gigi.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578562616.jpg" alt="Promo Kawat Gigi" title="Promo Kawat Gigi" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/perawatan-gigi.html">
                                                            <div class="tag position-static mr-1">Gigi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">72 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-kawat-gigi.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Kawat Gigi</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Happy Dental Clinic - Ciputra Mall</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 5.999.000</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/promo-medical-check-up-10.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578561989.jpg" alt="Promo Medical Check Up" title="Promo Medical Check Up" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/medical-check-up.html">
                                                            <div class="tag position-static mr-1">Pencegahan &amp; MCU</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">71 melihat</span> </div>
                                                </div>
                                                <a href="promo/promo-medical-check-up-10.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Promo Medical Check Up</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">Klinik Utama Geriatri Wijayakusuma</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="regular-price">Rp. 475.000</span> <span class="selling-price">Rp. 375.000</span> <span class="selling-price">Hemat 21%</span> </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5">
                                            <div class="content-item">
                                                <div class="">
                                                    <a href="promo/body-booster-paket-powerful.html">
                                                        <div class="square">
                                                            <div class="square-content">
                                                                <img class="img-banner js-imgLazy" src="public/assets/img/no-imagebd5b.jpg?v=0120203" data-src="https://cms.sehatq.com/public/img/promotions_img/1578483956.jpg" alt="Body Booster &quot;Paket Powerful&quot;" title="Body Booster &quot;Paket Powerful&quot;" onerror="this.onerror=null;this.src='public/assets/img/no-imagebd5b.jpg?v=0120203';" /> </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="mt-3">
                                                    <div class="inline-block">
                                                        <a href="promo/vaksinasi-imunisasi.html">
                                                            <div class="tag position-static mr-1">Vaksinasi &amp; Imunisasi</div>
                                                        </a>
                                                    </div>
                                                    <div class="author inline-block"> <span class="font-10 inline-block">77 melihat</span> </div>
                                                </div>
                                                <a href="promo/body-booster-paket-powerful.html">
                                                    <h3 class="title m-0 mt-2 mt-sm-3 js-cropText">Body Booster &quot;Paket Powerful&quot;</h3> </a>
                                                <div class="place mt-1 location"> <i class="fs icon-location mr-1"></i> <span class="txt">RS St. Carolus Summarecon Serpong</span> </div>
                                                <div class="price mt-1"> <span class="start-from">Mulai dari</span> <span class="selling-price">Rp. 475.000</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pagination-custom text-center mt-5">
                                        <div class="inline-block">
                                            <ul class="pagination" role="navigation">
                                                <li class="page-item disabled" aria-disabled="true" aria-label="prev"> <span class="page-link" aria-hidden="true"> <i class="fs icon-chevron-left"></i> </span> </li>
                                                <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                                <li class="page-item"> <a class="page-link" href="promo4658.html?page=2">2</a> </li>
                                                <li class="page-item"> <a class="page-link" href="promo9ba9.html?page=3">3</a> </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="promo4658.html?page=2" rel="next" aria-label="next"> <i class="fs icon-chevron-right"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-md-5 mt-lg-5 mt-xl-5">
                            <?php
                            $this->load->view('layouts/desktop/footer');
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="mobile-main-menu">
    <div class="mobile-max-width">
        <div class="row row-0">
            <div class="col text-center">
                <a href="javascript:void(0);" class="menu-item" data-toggle="modal" data-target="#modalPromoSort"><i class="fs icon-sort"></i> <span class="txt">Sort</span> </a>
            </div>
            <div class="col text-center">
                <a href="javascript:void(0);" class="menu-item" data-toggle="modal" data-target="#modalPromoCategory"><i class="fs icon-category"></i> <span class="txt">Kategori</span> </a>
            </div>
            <div class="col text-center">
                <a href="javascript:void(0);" class="menu-item" data-toggle="modal" data-target="#modalPromoFilter"><i class="fs icon-filter"></i> <span class="txt">Filter</span> </a>
            </div>
        </div>
    </div>
</div>
<div class="telemed-widget" id="telemedWidget"></div>
<div class="back-to-top js-backToTop"> <i class="fs icon-up" aria-hidden="true"></i></div>
<div class="notification-wrapper" id="notification-wrapper"></div>
<div class="modal fade custom-modal mobile-modal" id="modalPromoSort" role="dialog" data-backdrop="static" data-keyboard="false" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="btn-close" data-dismiss="modal"> <i class="fs icon-close"></i> </div>
            <div class="modal-header pl-5 border-0">
                <div class="title">Urutkan</div>
            </div>
            <div class="modal-body pb-2">
                <div class="wrapper pt-0 pb-0">
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text js-sort" data-type="newest" href="https://www.sehatq.com/promo?sort=newest"> <i class="fs icon-check-circle mr-0"></i> <span class="inline-block">Terbaru</span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text js-sort" data-type="popular" href="https://www.sehatq.com/promo?sort=popular"> <i class="fs icon-check-circle mr-0"></i> <span class="inline-block">Terpopuler</span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text js-sort" data-type="lowest" href="https://www.sehatq.com/promo?sort=lowest"> <i class="fs icon-check-circle mr-0"></i> <span class="inline-block">Harga Terendah</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade custom-modal mobile-modal" id="modalPromoFilter" role="dialog" data-backdrop="static" data-keyboard="false" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="btn-close js-resetFilter" data-dismiss="modal"> <i class="fs icon-close"></i> </div>
            <div class="modal-header pl-5 border-0">
                <div class="row row-10">
                    <div class="col-6">
                        <div class="title">Filter</div>
                    </div>
                    <div class="col-6 text-right"> <a href="https://www.sehatq.com/promo" class="color-body font-12">Reset</a> </div>
                </div>
            </div>
            <div class="modal-body">
                <form class="js-formHardSubmit" action="https://www.sehatq.com/promo" method="GET">
                    <div class="wrapper pt-0 pb-0">
                        <div class="list-filter pt-0">
                            <a href="javascript:void(0);" class="js-switchModal" data-target="#modalPromoLocation">
                                <div class="row row-5">
                                    <div class="col-5 color-body"> Lokasi </div>
                                    <div class="col-7 text-right"> <span class="opensans-semibold mr-2 js-filterCity" data-current="Semua">Semua</span> <i class="fs icon-chevron-right"></i> </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="modal-footer p-2 pl-3 pr-3 border-0">
                        <button type="submit" class="btn btn-block btn-primary btn-lg rounded"> Terapkan </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade custom-modal mobile-modal" id="modalPromoFilter" role="dialog" data-backdrop="static" data-keyboard="false" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="btn-close js-resetFilter" data-dismiss="modal"> <i class="fs icon-close"></i> </div>
            <div class="modal-header pl-5 border-0">
                <div class="row row-10">
                    <div class="col-6">
                        <div class="title">Filter</div>
                    </div>
                    <div class="col-6 text-right"> <a href="https://www.sehatq.com/promo" class="color-body font-12">Reset</a> </div>
                </div>
            </div>
            <div class="modal-body">
                <form class="js-formHardSubmit" action="https://www.sehatq.com/promo" method="GET">
                    <div class="wrapper pt-0 pb-0">
                        <div class="list-filter pt-0">
                            <a href="javascript:void(0);" class="js-switchModal" data-target="#modalPromoLocation">
                                <div class="row row-5">
                                    <div class="col-5 color-body"> Lokasi </div>
                                    <div class="col-7 text-right"> <span class="opensans-semibold mr-2 js-filterCity" data-current="Semua">Semua</span> <i class="fs icon-chevron-right"></i> </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="modal-footer p-2 pl-3 pr-3 border-0">
                        <button type="submit" class="btn btn-block btn-primary btn-lg rounded"> Terapkan </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade custom-modal mobile-modal" id="modalPromoCategory" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="btn-close" data-dismiss="modal"> <i class="fs icon-close"></i> </div>
            <div class="modal-header pl-5 border-0">
                <div class="title">Kategori</div>
            </div>
            <div class="modal-body pb-2">
                <div class="wrapper pt-0 pb-0">
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text active" href="https://www.sehatq.com/promo"> <i class="fs icon-check-circle mr-0"></i> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://www.sehatq.com/public/assets/icons/more-grey.png?v=0120205" alt="Semua" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://www.sehatq.com/public/assets/icons/more.png?v=0120205" alt="Semua" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Semua </span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text" href="https://www.sehatq.com/promo/medical-check-up"> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_1.png" alt="Pencegahan &amp; MCU" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_1_active.png" alt="Pencegahan &amp; MCU" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Pencegahan &amp; MCU </span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text" href="https://www.sehatq.com/promo/perawatan-gigi"> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_2.png" alt="Gigi" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_2_active.png" alt="Gigi" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Gigi </span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text" href="https://www.sehatq.com/promo/perawatan-kulit-dan-kecantikan"> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_3.png" alt="Kulit &amp; Kecantikan" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_3_active.png" alt="Kulit &amp; Kecantikan" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Kulit &amp; Kecantikan </span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text" href="https://www.sehatq.com/promo/vaksinasi-imunisasi"> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_5.png" alt="Vaksinasi &amp; Imunisasi" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_5_active.png" alt="Vaksinasi &amp; Imunisasi" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Vaksinasi &amp; Imunisasi </span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text" href="https://www.sehatq.com/promo/kesehatan-wanita"> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_6.png" alt="Wanita &amp; Ibu Hamil" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_6_active.png" alt="Wanita &amp; Ibu Hamil" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Wanita &amp; Ibu Hamil </span> </a>
                        </div>
                    </div>
                    <div class="list-filter">
                        <div class="for-filter">
                            <a class="label-text" href="https://www.sehatq.com/promo/lainnya"> <span class="wrapper-text inline-block"> <img class="default-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_8.png" alt="Lainnya" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> <img class="active-icon" src="https://cms.sehatq.com/public/img/revamp_icon/promo_category_icon_8_active.png" alt="Lainnya" onerror="this.onerror=null;this.src='https://www.sehatq.com/cdn-cgi/image/f=auto/public/assets/img/no-image.jpg?v=0120205';"> Lainnya </span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>