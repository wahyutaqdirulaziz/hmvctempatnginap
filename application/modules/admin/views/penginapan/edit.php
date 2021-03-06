<!DOCTYPE html>
<html lang="en">
<head>
	<?php
		$this->load->view('admin/layouts/meta');
		$this->load->view('admin/layouts/css');
	?>
    <link href="<?= site_url('assets/vendor/select2/css/select2.min.css'); ?>" rel="stylesheet">
	<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
	<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css' type='text/css' />
	
	<style>
		#map { width:100%; height: 300px; }

        .select2.select2-container {
            width: 100% !important;
        }
        .select2-container .select2-selection--single {
            height: 40px;
        }
        .select2-container--default .select2-selection--single .select2-selection__rendered {
            color: #6e707e;
            line-height: 40px;
        }
        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 38px;
        }
        .select2-container--default .select2-selection--single {
            border: 1px solid #ebedf2;
        }
        .select2-container .select2-selection--single .select2-selection__rendered {
		    padding-left: 14px;
		    padding-right: 26px;
		}
	</style>
</head>
<body>
	<div class="wrapper">

		<?php
			$this->load->view('admin/layouts/header');
			$this->load->view('admin/layouts/sidebar');
		?>

		<div class="main-panel">
			<div class="content">
				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Penginapan</h4>
						<ul class="breadcrumbs">
							<li class="nav-home">
								<a href="<?= admin_url('dashboard') ?>">
									<i class="flaticon-home"></i>
								</a>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<a href="<?= admin_url('penginapan') ?>">Penginapan</a>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<a href="#">Edit</a>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<form method="post" enctype="multipart/form-data">
								<input type="hidden" name="<?= $this->security->get_csrf_token_name(); ?>" value="<?= $this->security->get_csrf_hash(); ?>">
								<div class="card">
									<div class="card-header">
										<div class="d-flex align-items-center">
											<h4 class="card-title">Edit Penginapan</h4>
										</div>
									</div>
									<div class="card-body">
										<?php
											$this->load->view('admin/penginapan/field');
										?>
									</div>
									<div class="card-action text-right">
										<a href="<?= admin_url('penginapan') ?>" class="btn btn-danger">Batal</a>
										<button class="btn btn-primary">Simpan</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	
			<?php
				$this->load->view('admin/layouts/footer');
			?>
		</div>
	</div>
	
	<?php
		$this->load->view('admin/layouts/scripts');
	?>
	<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
	<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js'></script>
	<script src="<?= site_url('assets/vendor/select2/js/select2.full.min.js') ?>"></script>
  	<script>
	    $(function(){
	    	var regency_id = '<?= isset($data->regency_id) ? $data->regency_id : set_value('regency_id'); ?>'
	        $('.select2').select2();
	        $('.regency').val(regency_id).trigger('change');
	    });
	</script>
	<script>
		mapboxgl.accessToken = 'pk.eyJ1IjoicHV0cmFkb25na2FsIiwiYSI6ImNrMTkxZ3BjNTBuY2UzbW8xZTN2M2pkY3cifQ.VoRd8BjGTEKYkbhrawEL7w';
		var defaultLat = <?= isset($data->latitude) ? $data->latitude != '' ? $data->latitude : '-2' : '-2'?>;
		var defaultLong = <?= isset($data->longitude) ? $data->longitude != '' ? $data->longitude : '119' : '119'?>;
		// var coordinates = document.getElementById('coordinates');
		var kamar_latitude = $('#latitude');
		var kamar_longitude = $('#longitude');

		var map = new mapboxgl.Map({
					container: 'map',
					style: 'mapbox://styles/mapbox/streets-v11',
			        center: [defaultLong, defaultLat],
			        zoom: 3.8
				});
		 
		var canvas = map.getCanvasContainer();
		 
		var geojson = {
							"type": "FeatureCollection",
							"features": [{
								"type": "Feature",
								"geometry": {
									"type": "Point",
									"coordinates": [defaultLong, defaultLat]
								}
							}]
						};

		var geocoder = new MapboxGeocoder({
							accessToken: mapboxgl.accessToken,
							zoom: 14,
							placeholder: "Cari lokasi cth: Jakarta",
							mapboxgl: mapboxgl,
							marker: {
										color: 'orange'
									},
						})
					
		map.addControl(geocoder, 'top-left');

		map.on('load', function() {
		    geocoder.on('result', function(ev) {
		        var result = ev.result;
		        var result_lat = result.geometry.coordinates[0];
		        var result_lng = result.geometry.coordinates[1];
		        // var styleSpecBox = document.getElementById('json-response');
		        // var styleSpecText = JSON.stringify(styleSpec, null, 2);
		        // var syntaxStyleSpecText = syntaxHighlight(styleSpecText);
		        // styleSpecBox.innerHTML = syntaxStyleSpecText;
				kamar_latitude.val(result_lat);
				kamar_longitude.val(result_lng);
		    });
		});
 
		var marker = new mapboxgl.Marker({
			draggable: true,
			color: 'orange'
		})
		.setLngLat([defaultLong, defaultLat])
		.addTo(map);
		 
		function onDragEnd() {
			var lngLat = marker.getLngLat();
			console.log(lngLat);
			kamar_latitude.val(lngLat.lat);
			kamar_longitude.val(lngLat.lng);
		}
		 
		marker.on('dragend', onDragEnd);
	</script>
</body>
</html>