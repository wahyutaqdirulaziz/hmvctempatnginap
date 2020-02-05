$(document).ready(function() {
    var e = $("#pageHome");
    $(".js-sliderHome", e).slick({
        centerMode: !0,
        slidesToShow: 1,
        dots: !0,
        draggable: !1,
        appendDots: $(".js-heroDots"),
        prevArrow: $(".js-heroPrev"),
        nextArrow: $(".js-heroNext"),
        variableWidth: !0
    }).fadeIn();
    var r = $("#formRegister"),
        s = $('[type="submit"]', r);
    $(".js-agreement", r).on("click", function() {
        $(this).is(":checked") ? s.removeAttr("disabled") : s.attr("disabled", !0)
    });
    helper.imageLazyLoad();
});