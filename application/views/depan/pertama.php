
 <link href="<?php echo base_url('assets/admin/'); ?>vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<div class="row">
<?php $no=$this->uri->segment('3') + 1;; foreach($motor as $mhs) : ?>
  
<div class="col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
    <a href="#"><img class="card-img-top" src="<?php echo base_url().'/uploads/'.$mhs->gambar ?>" alt=""></a>
    <div class="card-body">
      <h4 class="card-title">
        <a href="#"><?php echo $mhs->nama_kos ?></a>
      </h4>
      <h5><div class="btn btn-sm btn-primary">Rp .<?= number_format($mhs->harga,0,',','.') ?> /bulan</div></h5>
      <p class="card-text"><?php echo $mhs->keterangan ?></p>
      <p>Lokasi : <?php echo $mhs->katagori ?></p>
    </div>
    <div class="card-footer">
      <div class="col-md-offset-2">
      <?= anchor('Pertama/cek_kos/'.$mhs->id_kos,'<div class="btn btn-sm btn-primary  form-control ">CEK KOS</div>')?>
     
      </div>
       </div>
  </div>
</div>
<?php endforeach; ?>


                  
               

</div>
<!-- /.row -->

<?php echo $this->pagination->create_links(); ?>


</div>
<!-- /.col-lg-9 -->

</div>
<!-- /.row -->

</div>
<!-- /.container -->