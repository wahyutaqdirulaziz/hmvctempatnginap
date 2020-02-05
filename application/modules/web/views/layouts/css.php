<link rel="shortcut icon" href="<?= site_url('assets/tempatnginap/img/favicon.png') ?>" type="image/x-icon" />
<link rel="stylesheet" type="text/css" href="<?= site_url('assets/tempatnginap/css/core/core.css') ?>">
<?php
	if($this->agent->is_mobile())
	{
		echo '<link rel="stylesheet" type="text/css" href="'.site_url('assets/tempatnginap/css/core/main-mobile.css') .'">';
	} else {
		echo '<link rel="stylesheet" type="text/css" href="'.site_url('assets/tempatnginap/css/core/main-desktop.css') .'">';
	}
?>

<script type="application/ld+json"> { "@context": "http://schema.org", "@type": "Organization", "name": "SehatQ – Asisten Kesehatan Keluarga Anda", "url": "https://www.sehatq.com", "logo": "https://www.sehatq.com/public/assets/img/logo.png", "sameAs": [ "https://www.facebook.com/SehatQIndonesia/", "https://twitter.com/sehatq", "https://www.instagram.com/sehatq_id/", "https://www.linkedin.com/company/sehatq/" ] }</script>
<script type="application/ld+json"> { "@context": "https://schema.org", "@type": "WebSite", "url": "https://www.sehatq.com", "potentialAction": { "@type": "SearchAction", "target": "https://www.sehatq.com/cari?q={search_term_string}", "query-input": "required name=search_term_string" } } </script>
<script type="application/ld+json"> { "@context": "https://schema.org", "@type": "ItemList", "itemListElement": [ { "@type": "ListItem", "position": 1, "url": "https://www.sehatq.com/penyakit/protanopia" } , { "@type": "ListItem", "position": 2, "url": "https://www.sehatq.com/artikel/manfaat-daun-tapak-kuda-untuk-kesehatan-dan-kecantikan" } , { "@type": "ListItem", "position": 3, "url": "https://www.sehatq.com/penyakit/mers" } , { "@type": "ListItem", "position": 4, "url": "https://www.sehatq.com/artikel/manfaat-daun-suruhan-yang-mencengangkan" } , { "@type": "ListItem", "position": 5, "url": "https://www.sehatq.com/artikel/rekomendasi-5-game-anak-perempuan-yang-aman-dimainkan" } , { "@type": "ListItem", "position": 6, "url": "https://www.sehatq.com/artikel/menakjubkan-ini-manfaat-gerakan-shalat-bagi-kesehatan" } ] } </script>
<link rel="apple-touch-icon" type="png" sizes="152x152" href="public/assets/img/sehatq-icon-152x152.png">
<link rel="apple-touch-icon" type="png" sizes="167x167" href="public/assets/img/sehatq-icon-167x167.png">
<link rel="apple-touch-icon" type="png" sizes="180x180" href="public/assets/img/sehatq-icon-180x180.png">
<style>
	.text-ellipsis {
		overflow: hidden;
	   	text-overflow: ellipsis;
	   	display: -webkit-box;
	   	-webkit-box-orient: vertical;
	}

	.ads-title, .ads-location {
	   	-webkit-line-clamp: 2; /* number of lines to show */
	}
</style>
    