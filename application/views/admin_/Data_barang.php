

  <!-- Begin Page Content -->
  <div class="container-fluid mt-5 ml-3  text-gray-500">
    

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
      <button class="btn btn-sm btn-primary mb-3 " data-toggle="modal" data-target="#tambah_barang"><i class="fas fa-plus fa-sm "></i> tambah kos</button>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>id</th>
                <th>nama</th>
                <th>keterangan</th>
                <th>lokasi</th>
                <th>harga</th>
                <th>kamar kosong</th>
                <th colspan="3">aksi</th>
               
              </tr>
            </thead>
            <?php $no=1; foreach($motor as $mhs) : ?>
            <tbody>
              <tr>
                <td><?php echo $no++ ?></td>
                <td><?php echo $mhs->nama_kos ?></td>
                <td><?php echo $mhs->keterangan ?></td>
                <td><?php echo $mhs->katagori ?></td>
                <td><?php echo $mhs->harga ?></td>
                <td><?php echo $mhs->stok ?></td>
                <td><?php echo anchor('Data_barang/edit/' .$mhs->id_kos,'<div class="btn btn-success btn-sm"><i class="fas fa-edit"></i></div>') ?></td>
                <td><div class="btn btn-primary btn-sm"><i class="fas fa-search-plus"></i></div></td>
                <td><?php echo anchor('Data_barang/hapus/' .$mhs->id_kos,'<div class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></div>') ?></td>
                
                

                
              </tr>
             
            </tbody>
            <?php endforeach; ?>
          </table>
        </div>
      </div>
    </div>

  </div>
  <!-- /.container-fluid -->

</div>
<div class="modal" id="tambah_barang"tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Tambah Barang</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form action="<?php echo base_url().'Data_barang/tambah_aksi' ?>" method="post" enctype="multipart/form-data">

             <div class="form-grub">
               <label for="">Nama</label>
               <input type="text" name="nama_kos" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">Keterangan</label>
               <input type="text" name="keterangan" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">kota</label>
               <input type="text" name="katagori" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">no whatsapp</label>
               <input type="text" name="no_hp" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">alamat lengkap</label>
               <input type="text" name="alamat" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">harga</label>
               <input type="text" name="harga" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">kamar kosong</label>
               <input type="text" name="stok" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">Gambar</label><br>
               <input type="file" name="gambar" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">Gambar kamar</label><br>
               <input type="file" name="gambar1" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">Gambar kamar mandi</label><br>
               <input type="file" name="gambar2" class="form-control">
             </div>
             <div class="form-grub">
               <label for="">Gambar tampak jauh</label><br>
               <input type="file" name="gambar3" class="form-control">
             </div>


      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Tambah kos</button>
      </div>
      </form>
    </div>
  </div>
</div>
<!-- End of Main Content -->
