<div id="newsletter" class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
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
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /NEWSLETTER -->

		<!-- FOOTER -->
		<footer id="footer">
			<!-- top footer -->
			<div class="section">
				<!-- container -->
				<div class="container">
					<!-- row -->
					<div class="row">
						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">tentang kami</h3>
								<p>taoktindok.id aplikasi tempat untuk mencari kos-kosan dengan adanya aplikasi ini kami berharap pencarian kos semakin lebih mudah tanpa berkililing untuk mengecek satu per satu . </p>
								<ul class="footer-links">
									<li><a href="#"><i class="fa fa-map-marker"></i>lombok - indonesia</a></li>
									<li><a href="#"><i class="fa fa-phone"></i>087763305916</a></li>
									<li><a href="#"><i class="fa fa-envelope-o"></i>wahyudipe6@gmail.com</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">DEKAT DENGAN KAMPUS</h3>
								<ul class="footer-links">
									<li><a href="<?php echo base_url('Kategori/unham');?>">universitas hamzanwadi</a></li>
									<li><a href="<?php echo base_url('Kategori/ugr');?>">universitas gunung rinjani</a></li>
									<li><a href="#">universitas mataram</a></li>
									<li><a href="#">ikip Mataram </a></li>
									<li><a href="#">IAIH PANCOR</a></li>
								</ul>
							</div>
						</div>

						<div class="clearfix visible-xs"></div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">team official</h3>
								<ul class="footer-links">
									<li><a href="#">Ceo taoktindok.id</a></li>
									<li><a href="#">team taoktindok.id</a></li>
									<li><a href="#">Mitra taoktindok.id</a></li>
									
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">info lowongan kerja</h3>
								<ul class="footer-links">
									<li><a href="#">Daerah mataram</a></li>
									<li><a href="#">lombok timur</a></li>
									<li><a href="#">lombok tengah</a></li>
									<li><a href="#">lombok barat</a></li>
									<li><a href="#">lombok utara</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /row -->
				</div>
				<!-- /container -->
			</div>
			<!-- /top footer -->

			<!-- bottom footer -->
			<div id="bottom-footer" class="section">
				<div class="container">
					<!-- row -->
					<div class="row">
						<div class="col-md-12 text-center">
							<ul class="footer-payments">
								<li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i class="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
							</ul>
							<span class="copyright">
								<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
								Copyright &copy;<script>document.write(new Date().getFullYear());</script>taoktindok.id by <a href="http://berugakitlombok.rf.gd" target="_blank">Berugakitlombok</a>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
							</span>


						</div>
					</div>
						<!-- /row -->
				</div>
				<!-- /container -->
			</div>
			<!-- /bottom footer -->
		</footer>
		<!-- /FOOTER -->

		<!-- jQuery Plugins -->
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
        <script src="<?= base_url('assets/vendor/yall-js/yall.min.js') ?>"></script>
		<script src="<?= base_url('assets/vendor/jquery/jquery.min.js') ?>"></script>
		<script src="<?= base_url('assets/vendor/bootstrap/js/bootstrap.min.js') ?>"></script>
		<script src="<?= base_url('assets/baru/js/slick.min.js') ?>"></script>
		<script src="<?= base_url('assets/baru/js/nouislider.min.js') ?>"></script>
		<script src="<?= base_url('assets/baru/js/jquery.zoom.min.js') ?>"></script>
		<script src="<?= base_url('assets/js/main.js') ?>"></script>

		<?php
			if(isset($penginapan)){
		?>
				<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.js'></script>
				<script>
       				mapboxgl.accessToken = 'pk.eyJ1IjoicHV0cmFkb25na2FsIiwiYSI6ImNrMTkxZ3BjNTBuY2UzbW8xZTN2M2pkY3cifQ.VoRd8BjGTEKYkbhrawEL7w';

        			var defaultLat = <?= isset($penginapan->latitude) ? $penginapan->latitude != '' ? $penginapan->latitude : '-2' : '-2'?>;
        			var defaultLong = <?= isset($penginapan->longitude) ? $penginapan->longitude != '' ? $penginapan->longitude : '119' : '119'?>;

        			var map = new mapboxgl.Map({
            			container: 'map',
            			style: 'mapbox://styles/mapbox/streets-v11',
            			center: [defaultLong , defaultLat],
            			zoom: 14
        			});

        			var marker = new mapboxgl.Marker({
            			color: 'orange'
        			})
        			.setLngLat([defaultLong, defaultLat])
        			.addTo(map);
    			</script>
		<?php
			}
		?>

	</body>
</html>
