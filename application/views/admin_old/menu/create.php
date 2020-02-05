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
						<h4 class="page-title">Menu</h4>
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
								<a href="<?= base_url('menu') ?>">Menu</a>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<a href="#">Tambah</a>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<form method="post">
								<div class="card">
									<div class="card-header">
										<div class="d-flex align-items-center">
											<h4 class="card-title">Tambah menu</h4>
										</div>
									</div>
									<div class="card-body">
										<?php
											$this->load->view('admin/menu/field');
										?>
									</div>
									<div class="card-action text-right">
										<a href="<?= base_url('menu') ?>" class="btn btn-danger">Batal</a>
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
			if($('#name').val().length > 0){
				generateUrl($('#name').val());
			}
		});

		$('#name').on('keyup', function(){
			generateUrl($(this).val());
		});

		$('#url').on('change', function(){
			generateUrl($(this).val());
		});

		$('.btn-add-permission').on('click', function(){
			var permission = $('#input-permission').val() + '-' + $('#url').val();
			var permission_row = '<tr>'+
									'<td>'+permission+' <input type="hidden" name="permission_name[]" value="'+permission+'" /> <input type="hidden" name="permission_display_name[]" value="' + $('#input-permission').val() + ' ' + $('#name').val() + '" style="text-transform: capitalize" /></td>'+
									'<td class="text-center"><button type="button" class="btn btn-icon btn-link btn-delete-permission"><i class="fas fa-times text-danger"></i></button></td>'+
								  '</tr>';
			if($('#input-permission').val() !== '' && $('#url').val() !== '')
			{
				$('.permission-table tbody').append(permission_row);
				$('#input-permission').val('')
			}
		});

		$('.permission-table tbody').on('click', 'tr td .btn-delete-permission', function(){
			$(this).closest('tr').remove();
		});

		function generateUrl(str)
		{
			var url = fixUrl(str);
			generatePermission(url);

			$('#url').val(url);
			if(url !== ''){
				$('#url-addon1').text('-'+url);
			} else {
				$('#url-addon1').text('');
			}
		}

		function fixUrl(str)
		{
			if(str !== ''){
				return str.replace(/ /g, '-').toLowerCase();
			} else {
				return '';
			}
		}

		function generatePermission(strMenu)
		{
			var permission_row;

			if(strMenu !== ''){
				permission_row = '<tr>'+
									'<td>index-'+strMenu+' <input type="hidden" name="permission_name[]" value="index-'+strMenu+'" /> <input type="hidden" name="permission_display_name[]" value="'+$('#name').val()+'" /></td>'+
									'<td class="text-center"><button type="button" class="btn btn-icon btn-link btn-delete-permission"><i class="fas fa-times text-danger"></i></button></td>'+
								 '</tr>'+
								 '<tr>'+
									'<td>create-'+strMenu+' <input type="hidden" name="permission_name[]" value="create-'+strMenu+'" /> <input type="hidden" name="permission_display_name[]" value="Create '+$('#name').val()+'" /></td>'+'<td class="text-center"><button type="button" class="btn btn-icon btn-link btn-delete-permission"><i class="fas fa-times text-danger"></i></button></td>'+
								 '</tr>'+
								 '<tr>'+
									'<td>edit-'+strMenu+' <input type="hidden" name="permission_name[]" value="edit-'+strMenu+'" /> <input type="hidden" name="permission_display_name[]" value="Edit '+$('#name').val()+'" /></td>'+'<td class="text-center"><button type="button" class="btn btn-icon btn-link btn-delete-permission"><i class="fas fa-times text-danger"></i></button></td>'+
								 '</tr>'+
								 '<tr>'+
									'<td>delete-'+strMenu+' <input type="hidden" name="permission_name[]" value="delete-'+strMenu+'" /> <input type="hidden" name="permission_display_name[]" value="Delete '+$('#name').val()+'" /></td>'+'<td class="text-center"><button type="button" class="btn btn-icon btn-link btn-delete-permission"><i class="fas fa-times text-danger"></i></button></td>'+
								 '</tr>'
			} else {
				permission_row = '';
			}

			$('.permission-table tbody').html(permission_row);
		}
	</script>
</body>
</html>