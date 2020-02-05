<!DOCTYPE html>
<html lang="en">
<head>
	<?php
		$this->load->view('admin/layouts/meta');
		$this->load->view('admin/layouts/css');
	?>
    <link href="<?= base_url('assets/vendor/select2/css/select2.min.css'); ?>" rel="stylesheet">
    <style>
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
						<h4 class="page-title">Member</h4>
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
								<a href="<?= base_url('member') ?>">Member</a>
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
											<h4 class="card-title">Edit Member</h4>
										</div>
									</div>
									<div class="card-body">
										<?php
											$this->load->view('admin/member/field');
										?>
									</div>
									<div class="card-action text-right">
										<a href="<?= base_url('member') ?>" class="btn btn-danger">Batal</a>
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
  	<script src="<?= site_url('assets/vendor/select2/js/select2.full.min.js') ?>"></script>
  	<script>
	    $(function(){
	    	var regency_id = '<?= isset($data->regency_id) ? $data->regency_id : set_value('regency_id'); ?>'
	        $('.select2').select2();
	        $('.regency').val(regency_id).trigger('change');
	    });
	</script>
</body>
</html>