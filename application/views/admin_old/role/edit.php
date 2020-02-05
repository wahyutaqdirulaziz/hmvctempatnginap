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
						<h4 class="page-title">Hak Akses</h4>
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
								<a href="<?= base_url('role') ?>">Hak Akses</a>
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
							<form method="post">
								<div class="card">
									<div class="card-header">
										<div class="d-flex align-items-center">
											<h4 class="card-title">Edit Hak Akses</h4>
										</div>
									</div>
									<div class="card-body">
										<?php
											$this->load->view('admin/role/field');
										?>
									</div>
									<div class="card-action text-right">
										<a href="<?= base_url('role') ?>" class="btn btn-danger">Batal</a>
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
</body>
</html>