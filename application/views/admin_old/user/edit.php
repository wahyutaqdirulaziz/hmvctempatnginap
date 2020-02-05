<!DOCTYPE html>
<html lang="en">
<head>
	<?php
		$this->load->view('admin/layouts/meta');
		$this->load->view('admin/layouts/css');
	?>
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
						<h4 class="page-title">Pengguna</h4>
						<ul class="breadcrumbs">
							<li class="nav-home">
								<a href="<?= base_url('dashboard') ?>">
									<i class="flaticon-home"></i>
								</a>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<a href="<?= base_url('user') ?>">Pengguna</a>
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
							<?= form_open_multipart();?>
								<div class="card">
									<div class="card-header">
										<div class="d-flex align-items-center">
											<h4 class="card-title">Edit Pengguna</h4>
										</div>
									</div>
									<div class="card-body">
										<?php
											$this->load->view('admin/user/field');
										?>
									</div>
									<div class="card-action text-right">
										<a href="<?= base_url('user') ?>" class="btn btn-danger">Batal</a>
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
	<script>
		$(function(){
			$('#picture').on('change', function(){
				readURL(this);
			});
		});

		function readURL(input) {
			var url = input.value;
			var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
			if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('.previewpicture').attr('src', e.target.result);
				}

				reader.readAsDataURL(input.files[0]);
			}

			// else if(!url)
			// {
			// 	$('.imagepreview').attr('src', '<?= base_url('assets/admin-template/images/add-image.jpg') ?>');
			// }

			else {
				alert('File not supported')
				$('.imagepreview').attr('src', '<?= base_url('assets/admin-template/images/add-image.jpg') ?>');
			}
		}
	</script>
</body>
</html>