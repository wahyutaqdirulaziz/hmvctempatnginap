

		<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">


                <div class="col-md-12">
						<div class="section-title text-center">
							<h3 class="title">TERDEKAT DENGAN KAMPUS</h3>
						</div>
					</div>
                    <?php $no=$this->uri->segment('3') + 1;; foreach($Kategori as $mhs) : ?>
					<!-- product -->
					<div class="col-md-3 col-xs-6">
						<div class="product">
							<div class="product-img">
								<img src="<?php echo base_url().'/uploads/'.$mhs->gambar ?>" alt="">
								<div class="product-label">
									<span class="sale"><?php echo $mhs->status ?></span>
								</div>
							</div>
							<div class="product-body">
								<p class="product-category">Category</p>
								<h3 class="product-name"><a href="#"><?php echo $mhs->nama_kos ?></a></h3>
								<h4 class="product-price">Rp .<?= number_format($mhs->harga,0,',','.') ?> /bulan<del class="product-old-price">Rp .<?= number_format($mhs->harga,0,',','.') ?> /bulan</del></h4>
								<div class="product-rating">
								</div>
								<div class="product-btns">
									<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
									<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
									<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
								</div>
							</div>
							<div class="add-to-cart">

                                <?= anchor('Baru/cek/'.$mhs->id_kos,' <button class="add-to-cart-btn"><i class="fa fa-click"></i>Bokking kos</button>')?>
							</div>
						</div>
					</div>
					<!-- /pr                  
                    <?php endforeach; ?>
                    
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
        <!-- /SECTION -->
        <div class="container"><?php echo $this->pagination->create_links(); ?></div>
        
		<!-- NEWSLETTER -->
