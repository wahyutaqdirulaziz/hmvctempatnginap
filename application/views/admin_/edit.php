<div class="container-fluid mt-5 ml-3  text-gray-500">
<h3> <i class="fas fa-edit"></i> Edit Kos</h3>

<?php foreach($motor as $mhs): ?>
    <form action="<?php echo base_url().'Data_barang/update' ?>" method="post">
<div class="for-group">

<label>nama</label>
<input type="text" name="nama_kos" class="form-control" value="<?= $mhs->nama_kos?>">


</div>
<div class="for-group">

<label>keterngan</label>
<input type="hidden" name="id_kos" class="form-control" value="<?= $mhs->id_kos?>">
<input type="text" name="keterangan" class="form-control" value="<?= $mhs->keterangan?>">


</div>
<div class="for-group">

<label>katagori</label>
<input type="text" name="katagori" class="form-control" value="<?= $mhs->katagori?>">


</div>
<div class="for-group">

<label>status</label>
<select name="status" class="form-control" >
               <option>full</option>
               <option>kosong</option>
               
             </select>


</div>
<div class="for-group">

<label>harga</label>
<input type="text" name="harga" class="form-control" value="<?= $mhs->harga?>">


</div>
<div class="for-group">

<label>stok</label>
<input type="text" name="stok" class="form-control" value="<?= $mhs->stok?>">


</div>


<button type="submit" class="btn btn-primary btn-sm mt-3" >SIMPAN</button>



</form>



<?php endforeach; ?>



</div>