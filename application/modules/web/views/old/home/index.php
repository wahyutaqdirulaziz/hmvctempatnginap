<!DOCTYPE html>
<html lang="id">
    <head>
        <?php 
            $this->load->view('web/layouts/meta');
            $this->load->view('web/layouts/css');
        ?>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
    </head>
    <body itemscope itemtype="http://schema.org/LocalBusiness">
        <?php
            $this->load->view('web/layouts/header');
        ?>

        <div class="section">
            <!-- container -->
            <div class="container">
                <!-- row -->
                <div class="row">
                    <!-- section title -->
        			<div class="col-md-10">
        				<div class="head-section">
                            <?php
                                $search_badge = '';
                                if($this->input->get('q')){
                                    $search_badge = '<label class="badge" style="margin-top:10px; background: #D10024; font-weight: unset; padding: 5px 10px;">"'.$this->input->get('q').'"</label>';
                                    echo 'Pencarian';
                                } else {
                                    echo 'Unggulan';
                                }
                            ?>
        				</div>
        			</div>
                    <span class="col-md-2 atribut">
                        <button class="btn btn-light btn-sm text-muted"><i class="fas fa-filter"></i> Filter</button>
                        <button class="btn btn-light btn-sm text-muted"><i class="fas fa-sort-amount-down"></i> Urutkan</button>
                    </span>
                    <!-- /section title -->

                    <div class="col-md-12">
                        <?= $search_badge ?>
                    </div>

                    <!-- Products -->
                    <div class="col-md-12">
                        <div class="row">
                            <?php
                                if(count($penginapans) == 0){
                                    echo '<div class="text-center" style="margin:50px 0;"><h3 style="color: #E4E7ED"><img src="'.site_url('assets/tempatnginap/img/hotel.png').'" width="256px"><br>Tidak ada penginapan</h3></div>';
                                } else {
                                    $no = $this->uri->segment('3') + 1;
                                    foreach ($penginapans as $penginapan) : ?>
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="product">
                                                <div class="product-img">
                                                    <img class="thumbnail-img-product lazy"
                                                         data-src="<?= $penginapan->gambar != null ? base_url('uploads/images/penginapan/' . $penginapan->gambar) : base_url('assets/tempatnginap/img/no-image.jpg') ?>"
                                                         src="<?= base_url('assets/tempatnginap/img/hotel-1.png') ?>"
                                                         alt="<?= $penginapan->nama_kamar ?>" data-type="<?= $penginapan->jenis_kamar ?>" data-slug="<?= $penginapan->slug ?>">
                                                    <div class="product-label">
                                                        <span class="new">
                                                            <a href="<?= base_url($penginapan->jenis_kamar); ?>" style="color: #fff;"><?= $penginapan->jenis_kamar == 'lodging' ? 'Penginapan' : $penginapan->jenis_kamar ?></a>
                                                        </span> 
                                                        <?php if ($penginapan->nama_kategori_kamar != null) { ?>
                                                            <span class="new" style="margin-left:5px">
                                                                <a href="<?= base_url('kategori/'.$penginapan->slug_kategori_kamar); ?>" style="color: #fff;"><?= $penginapan->nama_kategori_kamar ?></a>
                                                            </span>
                                                        <?php } else {

                                                        }; ?>
                                                    </div>
                                                    <div class="product-name">
                                                        <a href="<?= base_url($penginapan->jenis_kamar . '/' . $penginapan->slug) ?>"
                                                           style="color: #fff;"><?= $penginapan->nama_kamar ?></a>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <div class="product-price">
                                                        Rp. <?= isset($penginapan->harga[0]->harga) ? number_format($penginapan->harga[0]->harga) : '0' ?>
                                                        <span class="product-old-price"><?= isset($penginapan->harga[0]->durasi) ? $penginapan->harga[0]->durasi : '' ?> </span>
                                                    </div>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star" style="color: orange"></i>
                                                        <i class="fa fa-star" style="color: orange"></i>
                                                        <i class="fa fa-star" style="color: orange"></i>
                                                        <i class="fa fa-star" style="color: orange"></i>
                                                        <i class="fa fa-star" style="color: orange"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fas fa-tv"
                                                                                           style="color: #70b2e0"></i><span
                                                                    class="tooltipp">Televisi</span></button>
                                                        <button class="add-to-compare"><i class="fas fa-bed"
                                                                                          style="color: #70b2e0"></i><span
                                                                    class="tooltipp">Tempat Tidur</span></button>
                                                        <button class="quick-view"><i class="fas fa-server"
                                                                                      style="color: #70b2e0"></i><span
                                                                    class="tooltipp">Lemari</span></button>
                                                        <button class="quick-view"><i class="fas fa-wifi"
                                                                                      style="color: #70b2e0"></i><span
                                                                    class="tooltipp">Wifi</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php
                                    endforeach;
                                }
                            ?>
                        </div>
                    </div>
                    <!-- /Products -->
                </div>
                <!-- /row -->
            </div>

            <div class="container"><?php echo $this->pagination->create_links(); ?></div>
            <!-- /container -->
        </div>

        <div id="newsletter" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="newsletter">
                            <p>cari penginapan deal hanya di <strong>tempatnginap.com</strong></p>
                            <form>
                                <input class="input" type="email" placeholder="Enter Your Email">
                                <button class="newsletter-btn"><i class="fa fa-envelope"></i> Subscribe</button>
                            </form>
                            <br>
                            <ul class="newsletter-follow">
                                <li>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php
            $this->load->view('web/layouts/footer');
            $this->load->view('web/layouts/scripts');
        ?>
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
        <script src="<?= base_url('assets/vendor/yall-js/yall.min.js') ?>"></script>
        <script src="<?= base_url('assets/js/lazyload.js') ?>"></script>
    </body>
</html>
