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
								<a href="#">Member</a>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="d-flex align-items-center">
										<h4 class="card-title">Member</h4>
										<a href="<?= base_url('member/create') ?>" class="btn btn-primary btn-round ml-auto">
											<i class="fa fa-plus"></i>
											Tambah
										</a>
									</div>
								</div>
								<div class="card-body">
									<!-- Modal -->
									<div class="modal fade" id="addRowModal" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header no-bd">
													<h5 class="modal-title">
														<span class="fw-mediumbold">
														New</span> 
														<span class="fw-light">
															Row
														</span>
													</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<p class="small">Create a new row using this form, make sure you fill them all</p>
													<form>
														<div class="row">
															<div class="col-sm-12">
																<div class="form-group form-group-default">
																	<label>Name</label>
																	<input id="addName" type="text" class="form-control" placeholder="fill name">
																</div>
															</div>
															<div class="col-md-6 pr-0">
																<div class="form-group form-group-default">
																	<label>Position</label>
																	<input id="addPosition" type="text" class="form-control" placeholder="fill position">
																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group form-group-default">
																	<label>Office</label>
																	<input id="addOffice" type="text" class="form-control" placeholder="fill office">
																</div>
															</div>
														</div>
													</form>
												</div>
												<div class="modal-footer no-bd">
													<button type="button" id="addRowButton" class="btn btn-primary">Add</button>
													<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
												</div>
											</div>
										</div>
									</div>

									<div class="table-responsive">
										<table id="member" class="display table table-striped table-hover dataTable" >
											<thead>
												<tr>
													<th>No</th>
													<th>Nama</th>
													<th>Alamat</th>
													<th>Kota</th>
													<th>Email</th>
													<th>Nomor Handphone</th>
													<th style="width: 10%">Aksi</th>
												</tr>
											</thead>
											<tbody>
												<?php
													$no = 1;
													foreach ($members as $member) {
														echo '<tr>
																<td>'.$no.'</td>
																<td>'.$member->nama.'</td>
																<td>'.$member->alamat.'</td>
																<td>'.ucwords(strtolower($member->nama_kota)).'</td>
																<td>'.$member->email.'</td>
																<td>'.$member->nomor_handphone.'</td>
																<td>
																	<form method="post" id="form-delete-'. $member->id_member. '" action="'.base_url('member/delete/'.$member->id_member).'">
																		<input type="hidden" name="id_member" value="'. $member->id_member. '"/>
																	</form>
																	<div class="btn-group" role="group" aria-label="Basic example">
																		<a href="'.base_url('member/edit/'.$member->id_member).'" type="button" data-toggle="tooltip" title="" class="btn btn-primary btn-sm" data-original-title="Edit">
																			<i class="fa fa-edit"></i>
																		</a>
																		<button type="button" data-id="'.$member->id_member.'" data-toggle="tooltip" title="" class="btn btn-danger btn-sm delete" data-original-title="Hapus">
																			<i class="fa fa-times"></i>
																		</button>
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
			$('#member').DataTable();
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