<!DOCTYPE html>
<html lang="id">
<head>
    <title>Solusi Cepat Tempat Cari Penginapan | TempatNginap.com</title>
    <?php
    $this->load->view('layouts/meta.php');
    $this->load->view('layouts/css.php');
    ?>
    <link rel="stylesheet" type="text/css" href="<?= site_url('assets/vendor/slick/css/slick.css') ?>">
    <link rel="stylesheet" type="text/css" href="<?= site_url('assets/tempatnginap/css/page/page-home.css') ?>">
    <link rel="canonical" href="<?= base_url() ?>" />
</head>

<body <?= $this->agent->is_mobile() ? 'class="mobile"' : '' ?>>
    <noscript>
        <!-- <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WH7XKQX" height="0" width="0" style="display:none;visibility:hidden"></iframe> -->
    </noscript>

    <?php
    if($this->agent->is_mobile()){
        $this->load->view('home/index-mobile');
    } else {
        $this->load->view('home/index-desktop');
    }

    $this->load->view('layouts/scripts');
    ?>

    <script type="text/javascript" src="<?= site_url('assets/vendor/slick/js/slick.js') ?>"></script>
    <script type="text/javascript" src="<?= site_url('assets/tempatnginap/js/page/page-home.js') ?>"></script>
</body>
</html>