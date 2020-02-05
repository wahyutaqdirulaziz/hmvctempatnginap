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
						<h4 class="page-title">Hak Akses Pengguna</h4>
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
								<a href="#">Hak Akses Pengguna</a>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="d-flex align-items-center">
										<h4 class="card-title">Hak Akses Pengguna</h4>
									</div>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table id="role" class="display table table-striped table-hover dataTable" >
											<thead>
												<tr>
													<th>No</th>
													<th>Hak Akses</th>
													<th style="width: 10%">Aksi</th>
												</tr>
											</thead>
											<tbody>
												<?php
													$no = 1;
													foreach ($roles as $role) {
														echo '<tr>
																<td width="1%">'.$no.'</td>
																<td>'.$role->display_name.'</td>
																<td>
																	<form method="post" id="form-delete-'. $role->id. '" action="'.base_url('role/delete/'.$role->id).'">
																		<input type="hidden" name="id" value="'. $role->id. '"/>
																	</form>
																	<div class="btn-group" role="group" aria-label="Basic example">
																		<a href="'.base_url('role-permission/edit/'.$role->id).'" type="button" data-toggle="tooltip" title="" class="btn btn-primary btn-sm" data-original-title="Edit">
																			<i class="fa fa-edit"></i>
																		</a>
																	</div>
																</td>
															  </tr>';
														$no++;
													}
												?>
											</tbody>
										</table>
									</div>
								</div>
							</div>
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

	<!-- Sweet Alert -->
	<script src="<?= site_url('assets/vendor/sweetalert/sweetalert.min.js') ?>"></script>

	<!-- Datatables -->
	<script src="<?= site_url('assets/vendor/datatables/datatables.min.js') ?>"></script>
	<script>
		$(function(){
			$('#role').DataTable();
			$('.dataTable').on('click', 'tbody tr td .delete', function(e){
	            e.preventDefault();
	            var id = $(this).data('id');
	            var form = $(this).parents('td').find('#form-delete-' + id);
	            swal({
	                title: "Apakah anda yakin?",
	                text: "Setelah dihapus, Anda tidak akan dapat memulihkannya!",
	                icon: "warning",
	                buttons: true,
	                dangerMode: true,
	            })
				.then((willDelete) => {
					if (willDelete) {
						form.submit();
					}
				});
	        })
		});
	</script>
</body>
</html>