! function(u) {
    u.fn.theiaStickySidebar = function(i) {
        function t(i, t) {
            return !0 === i.initialized || !(u("body").width() < i.minWidth) && (o = t, (y = i).initialized = !0, u("head").append(u('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), o.each(function() {
                function m() {
                    i.fixedScrollTop = 0, i.sidebar.css({
                        "min-height": "1px"
                    }), i.stickySidebar.css({
                        position: "static",
                        width: ""
                    })
                }
                var i = {};
                if (i.sidebar = u(this), i.options = y || {}, i.container = u(i.options.containerSelector), 0 == i.container.length && (i.container = i.sidebar.parent()), i.sidebar.parents().css("-webkit-transform", "none"), i.sidebar.css({
                        position: "relative",
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), i.stickySidebar = i.sidebar.find(".theiaStickySidebar"), 0 == i.stickySidebar.length) {
                    var o = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    i.sidebar.find("script").filter(function(i, t) {
                        return 0 === t.type.length || t.type.match(o)
                    }).remove(), i.stickySidebar = u("<div>").addClass("theiaStickySidebar").append(i.sidebar.children()), i.sidebar.append(i.stickySidebar)
                }
                i.marginTop = parseInt(i.sidebar.css("margin-top")), i.marginBottom = parseInt(i.sidebar.css("margin-bottom")), i.paddingTop = parseInt(i.sidebar.css("padding-top")), i.paddingBottom = parseInt(i.sidebar.css("padding-bottom"));
                var t, a, e = i.stickySidebar.offset().top,
                    d = i.stickySidebar.outerHeight();
                i.stickySidebar.css("padding-top", 1), i.stickySidebar.css("padding-bottom", 1), e -= i.stickySidebar.offset().top, d = i.stickySidebar.outerHeight() - d - e, 0 == e ? (i.stickySidebar.css("padding-top", 0), i.stickySidebarPaddingTop = 0) : i.stickySidebarPaddingTop = 1, 0 == d ? (i.stickySidebar.css("padding-bottom", 0), i.stickySidebarPaddingBottom = 0) : i.stickySidebarPaddingBottom = 1, i.previousScrollTop = null, i.fixedScrollTop = 0, m(), i.onScroll = function(i) {
                    if (i.stickySidebar.is(":visible")) {
                        if (u("body").width() < i.options.minWidth) return void m();
                        if (i.options.disableOnResponsiveLayouts)
                            if (i.sidebar.outerWidth("none" == i.sidebar.css("float")) + 50 > i.container.width()) return void m();
                        var t = u(document).scrollTop(),
                            o = "static";
                        if (t >= i.container.offset().top + (i.paddingTop + i.marginTop - i.options.additionalMarginTop)) {
                            var a, e = i.paddingTop + i.marginTop + y.additionalMarginTop,
                                d = i.paddingBottom + i.marginBottom + y.additionalMarginBottom,
                                n = i.container.offset().top,
                                s = i.container.offset().top + (f = i.container, S = f.height(), f.children().each(function() {
                                    S = Math.max(S, u(this).height())
                                }), S),
                                r = 0 + y.additionalMarginTop;
                            a = i.stickySidebar.outerHeight() + e + d < u(window).height() ? r + i.stickySidebar.outerHeight() : u(window).height() - i.marginBottom - i.paddingBottom - y.additionalMarginBottom;
                            var c = n - t + i.paddingTop + i.marginTop,
                                p = s - t - i.paddingBottom - i.marginBottom,
                                b = i.stickySidebar.offset().top - t,
                                l = i.previousScrollTop - t;
                            "fixed" == i.stickySidebar.css("position") && "modern" == i.options.sidebarBehavior && (b += l), "stick-to-top" == i.options.sidebarBehavior && (b = y.additionalMarginTop), "stick-to-bottom" == i.options.sidebarBehavior && (b = a - i.stickySidebar.outerHeight()), b = 0 < l ? Math.min(b, r) : Math.max(b, a - i.stickySidebar.outerHeight()), b = Math.max(b, c), b = Math.min(b, p - i.stickySidebar.outerHeight());
                            var g = i.container.height() == i.stickySidebar.outerHeight();
                            o = !g && b == r || !g && b == a - i.stickySidebar.outerHeight() ? "fixed" : t + b - i.sidebar.offset().top - i.paddingTop <= y.additionalMarginTop ? "static" : "absolute"
                        }
                        if ("fixed" == o) i.stickySidebar.css({
                            position: "fixed",
                            width: i.sidebar.width(),
                            top: b,
                            left: i.sidebar.offset().left + parseInt(i.sidebar.css("padding-left"))
                        });
                        else if ("absolute" == o) {
                            var h = {};
                            "absolute" != i.stickySidebar.css("position") && (h.position = "absolute", h.top = t + b - i.sidebar.offset().top - i.stickySidebarPaddingTop - i.stickySidebarPaddingBottom), h.width = i.sidebar.width(), h.left = "", i.stickySidebar.css(h)
                        } else "static" == o && m();
                        "static" != o && 1 == i.options.updateSidebarHeight && i.sidebar.css({
                            "min-height": i.stickySidebar.outerHeight() + i.stickySidebar.offset().top - i.sidebar.offset().top + i.paddingBottom
                        }), i.previousScrollTop = t
                    }
                    var f, S
                }, i.onScroll(i), u(document).scroll((a = i, function() {
                    a.onScroll(a)
                })), u(window).resize((t = i, function() {
                    t.stickySidebar.css({
                        position: "static"
                    }), t.onScroll(t)
                }))
            }), !0);
            var y, o
        }
        var o, a, e, d, n, s;
        (i = u.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern"
        }, i)).additionalMarginTop = parseInt(i.additionalMarginTop) || 0, i.additionalMarginBottom = parseInt(i.additionalMarginBottom) || 0, t(o = i, a = this) || (console.log("TST: Body width smaller than options.minWidth. Init is delayed."), u(document).scroll((n = o, s = a, function(i) {
            t(n, s) && u(this).unbind(i)
        })), u(window).resize((e = o, d = a, function(i) {
            t(e, d) && u(this).unbind(i)
        })))
    }
}(jQuery);