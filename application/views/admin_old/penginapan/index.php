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
						<h4 class="page-title">Penginapan</h4>
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
								<a href="#">Penginapan</a>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="d-flex align-items-center">
										<h4 class="card-title">Penginapan</h4>
										<a href="<?= base_url('penginapan/create') ?>" class="btn btn-primary btn-round ml-auto">
											<i class="fa fa-plus"></i>
											Tambah
										</a>
									</div>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table id="table-penginapan" class="display table table-striped table-hover dataTable" >
											<thead>
												<tr>
													<th width="1%">No</th>
													<th width="2%">Gambar</th>
													<th>Penginapan</th>
													<?php
														if($this->auth->roles()[0] != 2){
															echo '<th>Pemilik</th>';
														}
													?>
													<th style="width: 10%">Aksi</th>
												</tr>
											</thead>
											<tbody>
												<?php
													$no = 1;
													foreach ($penginapans as $penginapan) {
														$gambar = $penginapan->gambar != null ? '<img src="'.site_url('uploads/images/penginapan/'.$penginapan->gambar).'" height="50" />' : '';
														if($this->auth->roles()[0] == 2){
															echo '<tr>
																<td>'.$no.'</td>
																<td>'.$gambar.'</td>
																<td>'.$penginapan->nama_kamar.'</td>
																<td>
																	<form method="post" id="form-delete-'. $penginapan->id_kamar. '" action="'.base_url('penginapan/delete/'.$penginapan->id_kamar).'">
																		<input type="hidden" name="id_kamar" value="'. $penginapan->id_kamar. '"/>
																	</form>
																	<div class="btn-group" role="group" aria-label="Basic example">
																		<a href="'.base_url('penginapan/edit/'.$penginapan->id_kamar).'" type="button" data-toggle="tooltip" title="" class="btn btn-primary btn-sm" data-original-title="Edit">
																			<i class="fa fa-edit"></i>
																		</a>
																		<button type="button" data-id="'.$penginapan->id_kamar.'" data-toggle="tooltip" title="" class="btn btn-danger btn-sm delete" data-original-title="Hapus">
																			<i class="fa fa-times"></i>
																		</button>
																	</div>
																</td>
															  </tr>';
														} else {
															echo '<tr>
																<td>'.$no.'</td>
																<td>'.$gambar.'</td>
																<td>'.$penginapan->nama_kamar.'</td>
																<td>'.$penginapan->name.'</td>
																<td>
																	<form method="post" id="form-delete-'. $penginapan->id_kamar. '" action="'.base_url('penginapan/delete/'.$penginapan->id_kamar).'">
																		<input type="hidden" name="id_kamar" value="'. $penginapan->id_kamar. '"/>
																	</form>
																	<div class="btn-group" role="group" aria-label="Basic example">
																		<a href="'.base_url('penginapan/edit/'.$penginapan->id_kamar).'" type="button" data-toggle="tooltip" title="" class="btn btn-primary btn-sm" data-original-title="Edit">
																			<i class="fa fa-edit"></i>
																		</a>
																		<button type="button" data-id="'.$penginapan->id_kamar.'" data-toggle="tooltip" title="" class="btn btn-danger btn-sm delete" data-original-title="Hapus">
																			<i class="fa fa-times"></i>
																		</button>
																	</div>
																</td>
															  </tr>';
														}
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
			$('#table-penginapan').DataTable();
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