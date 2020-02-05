! function(n) {
    n(function() {
        n(document).ready(function() {
            helper.init(), helper.initTooltip(), n(".js-removeSearchRecent").on("click", function() {
                var e = n(this).data("search");
                helper.deleteSearchCookies(e), n(this).closest("li").slideUp(300, function() {
                    n(this).remove(), n(".tooltip").remove(), n(".js-recentSearch > li").length < 1 && (n('[data-type="recent"]').remove(), n("#search-tab-1").addClass("active"), n("#searchTab1").addClass("show active"))
                })
            }), n("#formNewsletter").submit(function(e) {
                var t = n(this);
                e.preventDefault(e), t.valid() && n.ajax({
                    type: "POST",
                    url: t.attr("action"),
                    data: {
                        _token: n('meta[name="csrf-token"]').attr("content"),
                        auth: !1,
                        email: t.find("input[name='news_email']").val(),
                        gender: t.find("input[name='news_gender']:checked").val()
                    },
                    cache: !1,
                    beforeSend: function() {},
                    success: function(e) {
                        helper.showNotification({
                            message: e.message,
                            type: e.status ? "success" : "danger"
                        }), helper.buttonLoading(n('[type="submit"]', t), "reset")
                    },
                    error: function(e) {
                        helper.showNotification({
                            message: helper.t("There is something wrong"),
                            type: "danger"
                        }), helper.buttonLoading(n('[type="submit"]', t), "reset")
                    }
                })
            });
            var e = n("#notification");
            e.on("show.bs.dropdown", function() {
                setTimeout(function() {
                    n(".js-cropText", e).each(function() {
                        var e = n(this),
                            t = void 0 !== e.data("max-line") ? e.data("max-line") : 2;
                        e.trunk8({
                            lines: t
                        })
                    })
                })
            })
        })
    })
}(jQuery), window.onload = function() {
    helper.imageLazyLoad()
};