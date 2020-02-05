

  <div class="container-fluid mt-5 ml-3  text-gray-500">

<div class="row">
    <div class="col-lg-6">

    <table class="table table-hover">

    <thead class="container">
       <h4 >MENU EDIT</h4>
        

    </thead>

     <?= form_error(

     'menu','<div class="alert alert-info" role="alert">','
   </div>');?>
    <div class="card-header py-3">
      <button class="btn btn-sm btn-primary mb-3 " data-toggle="modal" data-target="#menu"><i class="fas fa-plus fa-sm "></i> tambah Menu</button>
      </div>
    <?php $no=1;foreach($menu as $m):?>
    <tbody>

    
    <th scope="row"><?= $no++;?></th>
        <td><?= $m['menu'];?></td>
       <th> <td><div class="btn btn-success btn-sm"><i class="fas fa-edit"></i></div></td>    
        <td><div class="btn btn-success btn-sm"><i class="fas fa-trash"></i></div></td></th>
       
     
    



    </tbody>
    <?php endforeach;?>
</table>


    </div>


</div>

<!-- Page Heading -->


</div>
<!-- /.container-fluid -->

</div>

<div class="modal" id="menu"tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Tambah Menu</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form action="<?php echo base_url('Menu')?>" method="post" enctype="multipart/form-data">

             <div class="form-grub">
               <label for="">Nama</label>
               <input type="text" name="menu" class="form-control">
             </div>
             

      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Tambah kos</button>
      </div>