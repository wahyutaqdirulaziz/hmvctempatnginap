<div class=" container row">


<div class="container-fluid">

<div class="card">
    <div class="card-header">
    <h5 class="card-title"> KOS </h5>
        <div class="card-body">
            <?php foreach($motor as $mhs):?>
                <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="<?= base_url().'/uploads/'.$mhs->gambar?>" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>GAMBAR DEPAN KOS</h5>
         
        </div>
      </div>
      <div class="carousel-item">
        <img src="<?= base_url().'/uploads/'.$mhs->gambar1?>" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>GAMBAR KAMAR KOS</h5>
          
        </div>
      </div>
      <div class="carousel-item">
        <img src="<?= base_url().'/uploads/'.$mhs->gambar2?>" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>GAMBAR KAMAR MANDI</h5>
         
        </div>
      </div>
    </div>
    <div class="carousel-item">
        <img src="<?= base_url().'/uploads/'.$mhs->gambar3?>" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>GAMBAR KESELURUHAN</h5>
         
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
 
</div>
</div>


         

        </div>
            
    </div>
</div>
<div class="container mt-4 mb-4 ">

<button class="btn btn-info" data-toggle="modal" data-target="#tambah_barang" >Detail</button>
<a href=" https://api.whatsapp.com/send?phone=<?= $mhs->no_hp?>" class="btn btn-danger">Chat</a>  
<a href=" https://api.whatsapp.com/send?phone=<?= $mhs->no_hp?>" class="btn btn-dark">Maps</a>  
</div>

</div>
<!-- /.row -->

</div>
<!-- /.col-lg-9 -->

</div>
<!-- /.row -->

</div>

<div class="modal" id="tambah_barang"tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">detail kos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       

       <div class=" container card  mb-3" style="max-width: 30rem;">
  <div class="card-header">nama kos :<?= $mhs->nama_kos?></div>
  <div class="card-header">keterangan :<?= $mhs->keterangan?></div>
  <div class="card-header">kota :<?= $mhs->katagori?></div>
  <div class="card-header">harga : Rp <?= number_format($mhs->harga,0,',','.') ?>/bulan</div>
  <div class="card-header">kamar tersedia :<?= $mhs->stok?></div>
  <div class="card-header">nomer whatsapp :<?= $mhs->no_hp?></div>
  <div class="card-header">alamat lengkap :<?= $mhs->alamat?></div>
  
</div>

      
      </div>
     
     
      <?php endforeach; ?>
    </div>
  </div>
</div>
<!-- End of Main Content -->





