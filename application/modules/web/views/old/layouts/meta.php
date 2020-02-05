<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php
    if(isset($penginapan)){
?>
        <title><?= $penginapan->nama_kamar ?> | TempatNginap.com</title>
        <meta name="title" content="TempatNginap.com - <?= $penginapan->nama_kamar ?>" />
        <meta name="description" content="<?= $penginapan->nama_kamar ?> harga mulai dari Rp. <?= number_format($penginapan->harga[0]->harga). ' ' . $penginapan->harga[0]->durasi ?>" />
        <meta property="og:url" content="<?= base_url($penginapan->jenis_kamar.'/'.$penginapan->slug) ?>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TempatNginap.com - <?= $penginapan->nama_kamar ?>" />
        <meta property="og:description" content="<?= $penginapan->nama_kamar ?> harga mulai dari Rp. <?= number_format($penginapan->harga[0]->harga). ' ' . $penginapan->harga[0]->durasi ?>" />
        <meta property="og:image" content="<?= site_url('uploads/images/penginapan/'.$penginapan->gambar_utama) ?>" />
<?php
    }else if($this->input->get('q')){
?>
        <title>Hasil Pencarian "<?= $this->input->get('q') ?>" di TempatNginap.com</title>
        <meta name="title" content="Hasil Pencarian <?= $this->input->get('q') ?> di TempatNginap.com" />
        <meta name="description" content="Solusi cepat cari penginapan" />
        <meta property="og:url" content="<?= base_url('pencarian?q='.$this->input->get('q')) ?>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TempatNginap.com - Hasil Pencarian <?= $this->input->get('q') ?>"" />
        <meta property="og:description" content="Solusi cepat cari penginapan" />
        <meta property="og:image" content="<?= site_url('assets/tempatnginap/img/tempatnginap-230.png') ?>" />
<?php
    }else{
?>
        <title>Solusi Cepat Tempat Cari Penginapan | TempatNginap.com</title>
        <meta name="title" content="Solusi Cepat Tempat Cari Penginapan | TempatNginap.com" />
        <meta name="description" content="Solusi cepat tempat cari penginapan" />
        <meta property="og:url" content="<?= base_url() ?>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TempatNginap.com" />
        <meta property="og:description" content="Solusi cepat tempat cari penginapan" />
        <meta property="og:image" content="<?= site_url('assets/tempatnginap/img/tempatnginap-230.png') ?>" />
<?php
    }
?>