<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">

					<div class="col-md-6">
                    <?php foreach($motor as $mhs):?><!-- Billing Details -->
						<div class="billing-details">
							<div class="section-title">
								<h3 class="title">Tampak kos</h3>
							</div>
							<div class="form-group">
							<div>
						<div id="product-main-img">
							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar?>"  alt="...">
							</div>

							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar1?>"  alt="...">
							</div>

							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar2?>"  alt="...">
							</div>

							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar3?>"  alt="...">
							</div>
						</div>
					</div>
					<!-- /Product main img -->

					<!-- Product thumb imgs -->
					<div class="col-md-2  col-md-pull-5">
						<div id="product-imgs">
							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar?>"  alt="...">
							</div>

							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar1?>"  alt="...">
							</div>

							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar2?>"  alt="...">
							</div>

							<div class="product-preview">
							<img src="<?= base_url().'/uploads/'.$mhs->gambar3?>"  alt="...">
							</div>
						</div>
					</div>
                          
							
							</div>
							
							
							<div class="form-group">
								<div class="input-checkbox">
									<input type="checkbox" id="create-account">
									<label for="create-account">
										<span></span>
										Create Account?
									</label>
									<div class="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input class="input" type="password" name="password" placeholder="Enter Your Password">
									</div>
								</div>
							</div>
						</div>
						<!-- /Billing Details -->

						<!-- Shiping Details -->
						<div class="shiping-details">
							<div class="section-title">
								<h3 class="title">informasi</h3>
							</div>
							<div class="input-checkbox">
								<input type="checkbox" id="shiping-address">
								<label for="shiping-address">
									<span></span>
									jika ibu kos tidak menjawab whatsapp anda bisa menggunakan telpon langsung
									terimakasi semoga nyaman dengan aplikasi kami dan untuk kekurangan kami akan 
									segera memperbaiki nya 
								</label>
								<div class="caption">
									<div class="form-group">
										<input class="input" type="text" name="first-name" placeholder="First Name">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="last-name" placeholder="Last Name">
									</div>
									<div class="form-group">
										<input class="input" type="email" name="email" placeholder="Email">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="address" placeholder="Address">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="city" placeholder="City">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="country" placeholder="Country">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="zip-code" placeholder="ZIP Code">
									</div>
									<div class="form-group">
										<input class="input" type="tel" name="tel" placeholder="Telephone">
									</div>
								</div>
							</div>
						</div>
						<!-- /Shiping Details -->

						<!-- Order notes -->
						
						<!-- /Order notes -->
					</div>

					<!-- Order Details -->
					<div class="col-md-5 order-details">
						<div class="section-title text-center">
							<h3 class="title">Detail kos</h3>
                        </div>
                    
						<div class="order-summary">
							<div class="order-col">
								<div><strong>PRODUCT</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
							<div class="order-products">
                            <div class="order-col">
									<div>nama kos</div>
									<div><?= $mhs->nama_kos?></div>
								</div>
								<div class="order-col">
									<div>Dekat dengan kampus</div>
									<div><?= $mhs->kampus?></div>
                                </div>
                                <div class="order-col">
									<div>keterangan</div>
									<div><?= $mhs->keterangan?></div>
								</div>
								<div class="order-col">
									<div>1 bulan</div>
									<div>Rp <?= number_format($mhs->harga,0,',','.') ?>/bulan</div>
								</div>
								<div class="order-col">
									<div> 1 tahun</div>
									<div>Rp <?= number_format($mhs->harga * 12,0,',','.') ?>/tahun</div>
								</div>
							</div>
							<div class="order-col">
									<div>NO TELPON</div>
									<div><?= $mhs->no_hp?></div>
								</div>
							</div>
					
					
						<a href="https://api.whatsapp.com/send?phone=<?= $mhs->no_hp?>" class="primary-btn order-submit">BOKING KOS</a>
					</div>
                    <!-- /Order Details -->


                    <?php endforeach; ?>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->