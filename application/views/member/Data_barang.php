

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
                <th>poto</th>
                <th colspan="3">aksi</th>
               
              </tr>
              <?php

$id_user = $this->session->userdata('id_user');
    $queryMenu = "SELECT *
                  FROM `tb_lengkap` JOIN `user`
                    ON `tb_lengkap`.`id_user` = `user`.`id_user`
                   WHERE `tb_lengkap`.`id_user`= $id_user 
                
                  ORDER BY `tb_lengkap`.`id_user` ASC
                
";

    $menu=$this->db->query($queryMenu)->result_array();
   

?>




              
              <?php if($user['id_user'] == $tes['id_user']){ ?>
            </thead>
           
            <?php $no=1; foreach($menu as $mhs) : ?>
            <tbody>
            
              <tr>
                <td><?php echo $no++ ?></td>
                <td> <?= $mhs['nama_kos'] ?></td>
                <td> <?= $mhs['keterangan'] ?></td>
                <td> <?= $mhs['katagori'] ?></td>
                <td> <?= $mhs['harga'] ?></td>
                <td> <?= $mhs['stok'] ?></td>
                <td><img class="card-img-top" src="<?php echo base_url().'/uploads/'.$mhs['gambar'] ?>" alt=""></td>
                <td><?php echo anchor('Member_data/edit/' .$mhs['id_kos'],'<div class="btn btn-success btn-sm"><i class="fas fa-edit"></i></div>') ?></td>
                <td><div class="btn btn-primary btn-sm"><i class="fas fa-search-plus"></i></div></td>
                <td><?php echo anchor('Member_data/hapus/' .$mhs['id_kos'],'<div class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></div>') ?></td>
                
                

                
              </tr>
             
            </tbody>
          
            <?php endforeach; ?>
            <?php }else{

echo $tes['id_user'];
echo 'anda belum input data'; }?>
           
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
        <h5 class="modal-title">Tambah kos anda</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form action="<?php echo base_url().'Member_data/tambah_aksi' ?>" method="post" enctype="multipart/form-data">

             <div class="form-grub">
               <label for="">Nama</label>
               <input type="text" name="nama_kos" class="form-control">
               <input type="hidden" name="id_user" class="form-control" value="<?= $user['id_user']?>">
             </div>
             <div class="form-grub">
               <label for="">Keterangan / fasilitas</label>
               <input type="text" name="keterangan" class="form-control">
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
               <label for="">kategori</label>
             <select name="katagori" class="form-control" >
             <option>pilih katagori</option>
               <option>kos cowok</option>
               <option>kos cewek</option>
               <option>kos cewek cowok</option>
              
             </select>
             </div>
            
             <div class="form-grub">
               <label for="">kota</label>
             <select name="kota" class="form-control" >
             <option>pilih kabupaten kota</option>
               <option>Lombok timur</option>
               <option>lombok tengah</option>
               <option>lombok barat</option>
               <option>Mataram</option>
               <option>lombok utara</option>
              
             </select>
             </div>
             <div class="form-grub">
               <label for="">Dekat dengan kampus</label>
             <select name="kampus" class="form-control" >
             <option>pilih kampus</option>
               <option>universitas hamzanwadi</option>
               <option>universitas mataram</option>
               <option>universitas gunung rinjani</option>
               <option>bumi gora mataram</option>
               <option>amikom mataram</option>
              
             </select>
             </div>
             <div class="for-group">

                <label>status</label>
                <select name="status" class="form-control" >
                              <option>full</option>
                              <option>kosong</option>
                              
                            </select>


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
