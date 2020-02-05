<!--   Core JS Files   -->
<script src="<?= site_url('assets/vendor/jquery/jquery.min.js') ?>"></script>
<script src="<?= site_url('assets/vendor/bootstrap-4/popper.js') ?>"></script>
<script src="<?= site_url('assets/vendor/bootstrap-4/js/bootstrap.min.js') ?>"></script>

<!-- jQuery UI -->
<script src="<?= site_url('assets/vendor/jquery-ui-1.12.1.custom/jquery-ui.min.js') ?>"></script>
<script src="<?= site_url('assets/vendor/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js') ?>"></script>

<!-- jQuery Scrollbar -->
<script src="<?= site_url('assets/vendor/jquery-scrollbar/jquery.scrollbar.min.js') ?>"></script>

<!-- Atlantis JS -->
<script src="<?= site_url('assets/tempatnginap/js/tempatnginap.min.js') ?>"></script>

<!-- Bootstrap Notify -->
<script src="<?= site_url('assets/vendor/bootstrap-notify/bootstrap-notify.min.js') ?>"></script>

<script>
	$(function(){
		<?php
			if($this->session->flashdata('error_message')){
		?>
			$.notify({
				icon: 'fas fa-times',
				title: 'Gagal',
				message: '<?= $this->session->flashdata('error_message') ?>',
			},{
				type: 'danger',
				placement: {
					from: "top",
					align: "right"
				},
				time: 2000,
			});
		<?php
			}

			if($this->session->flashdata('message')){
		?>
			$.notify({
				icon: 'fas fa-check',
				title: 'Berhasil',
				message: '<?= $this->session->flashdata('message') ?>',
			},{
				type: 'success',
				placement: {
					from: "top",
					align: "right"
				},
				time: 2000,
			});
		<?php
			}
		?>
	})
</script>