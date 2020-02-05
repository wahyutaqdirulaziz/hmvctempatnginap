<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">

					<!-- section title -->
					<div class="col-md-12">
						<div class="section-title">
						
							<div class="section-nav ">
								<ul class="section-tab-nav tab-nav">
									<li class="active"><a data-toggle="tab" href="#tab2">KOS</a></li>
									<li><a data-toggle="tab" href="#tab2">RUMAHAN</a></li>
									<li><a data-toggle="tab" href="#tab2">VILLA</a></li>
									<li><a data-toggle="tab" href="#tab2">HOTEL</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /section title -->

					<!-- Products tab & slick -->
					<div class="col-md-12">
						<div class="row">
							<div class="products-tabs">
								<!-- tab -->
								<div id="tab2" class="tab-pane fade in active">
									<div class="products-slick" data-nav="#slick-nav-2">
									<?php $no=$this->uri->segment('3') + 1;; foreach($motor as $mhs) : ?>
										<!-- product -->
										<div class="product">
											<div class="product-img">
												<img src="<?php echo base_url().'/uploads/'.$mhs->gambar ?>" alt="">
												<div class="product-label">
													<span class="sale"><?php echo $mhs->status ?></span>
													<span class="new">NEW</span>
												</div>
											</div>
											<div class="product-body">
												<p class="product-category">Category</p>
												<h3 class="product-name"><a href="#"><?php echo $mhs->nama_kos ?></a></h3>
												<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
												<div class="product-rating">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
												<div class="product-btns">
													<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
													<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
													<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
												</div>
											</div>
											<div class="add-to-cart">
											<?= anchor('Baru/cek/'.$mhs->id_kos,' <button class="add-to-cart-btn"><i class="fa fa-click"></i>CEK KOS</button>')?>
											</div>
										</div>
										<!-- /product -->
										<?php endforeach; ?>

									
									
									</div>
									<div id="slick-nav-2" class="products-slick-nav"></div>
								</div>
								<!-- /tab -->
							</div>
						</div>
					</div>
					<!-- /Products tab & slick -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>