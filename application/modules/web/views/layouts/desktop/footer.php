<div class="footer pt-4 pb-2 pb-md-0 pb-lg-0 pb-xl-0">
    <div class="row row-10">
        <div class="col-12 col-lg-4 col-xl-4 mb-5 mb-lg-0">
            <ul class="footer-menu list-unstyled mb-4 mb-md-0 mb-lg-0 mb-xl-0 pt-4 pt-md-0 pt-lg-0 pt-xl-0">
                <li class="font-14 mb-2 mb-md-1 mb-lg-1 mb-xl-1"><a href="tentang-kami.html">Tentang Kami</a></li>
                <li class="font-14 mb-2 mb-md-1 mb-lg-1 mb-xl-1"><a href="syarat.html">Syarat dan Ketentuan</a></li>
                <li class="font-14 mb-2 mb-md-1 mb-lg-1 mb-xl-1"><a href="karir.html">Karir</a></li>
                <li class="font-14 mb-2 mb-md-1 mb-lg-1 mb-xl-1"><a href="kontak.html">Kontak Kami</a></li>
                <li class="font-14 mb-2 mb-md-1 mb-lg-1 mb-xl-1"><a href="kebijakan-privasi.html">Privacy Policy</a></li>
                <li class="font-14 mb-2 mb-md-1 mb-lg-1 mb-xl-1"><a href="kebijakan-editorial.html">Kebijakan Editorial</a></li>
            </ul>
        </div>
        <div class="d-none d-block-md d-block-lg d-block-xl col-6 col-lg-3 col-xl-3 mb-5 mb-lg-0">
            <div class="footer-apps-download text-right text-xl-center">
                <a href="https://apps.apple.com/id/app/sehatq/id1473822420" target="_blank"> <img src="<?= site_url('assets/tempatnginap/img/download-ios.png') ?>" alt="Temukan kami di Apple App Store"> </a>
                <br>
                <br>
                <a href="https://play.google.com/store/apps/details?id=com.she.sehatq" target="_blank"> <img src="<?= site_url('assets/tempatnginap/img/download-android.png') ?>" alt="Temukan kami di Google Play Store"> </a>
            </div>
        </div>
        <?php
            if($this->uri->segment(1) == ''){
        ?>
                <div class="col-lg-5 col-xl-5 mb-3">
                    <div class="footer-newsletter">
                        <h4 class="font-16">Newsletter Sign Up</h4>
                        <p class="font-13">Keep yourself updated with the latest trend in healthy lifestyle. Sign up for free!</p>
                        <form class="js-formValidate js-formHardSubmit" id="formNewsletter" action="https://www.sehatq.com/ajax/newsletter">
                            <div class="form-group mb-4">
                                <label for="news_email">Email</label>
                                <div class="form-group line-style has-ico">
                                    <input type="email" placeHolder="Type your email" name="news_email" id="news_email" class="form-control" required="required" autocomplete="off">
                                    <button type="submit" class="btn embed-button"> <i class="fs icon-send"></i> </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        <?php
            }
        ?>
    </div>
    <div class="copy font-14 pb-4 mt-4 color-grey-dark"> &copy; TempatNginap, 2020. All Rights Reserved </div>
</div>