"use strict";
! function(c) {
    var i, o;

    function t(t, i) {
        var n;
        this.options = i, this.$element = c(t), this.didInit = !1, (n = this).$element.on("click.slickLightbox", this.options.itemSelector, function(t) {
            var i, o;
            if (t.preventDefault(), (i = c(this)).blur(), "function" != typeof n.options.shouldOpen || n.options.shouldOpen(n, i, t)) return o = n.$element.find(n.options.itemSelector), n.elementIsSlick() && (o = n.filterOutSlickClones(o), i = n.handlePossibleCloneClick(i, o)), n.init(o.index(i))
        })
    }
    t.prototype.init = function(t) {
        return this.didInit = !0, this.detectIE(), this.createModal(), this.bindEvents(), this.initSlick(t), this.open()
    }, t.prototype.createModalItems = function() {
        var t, i, s, n, l, r, o;
        return n = this.options.lazyPlaceholder || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", s = function(t, i, o) {
            return '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' + (!0 === o ? ' data-lazy="' + t + '" src="' + n + '" ' : ' src="' + t + '" ') + " />\n    " + i + "\n  </div>\n</div>"
        }, this.options.images ? c.map(this.options.images, (o = this, function(t) {
            return s(t, o.options.lazy)
        })) : (t = this.filterOutSlickClones(this.$element.find(this.options.itemSelector)), l = t.length, r = this, i = function(t, i) {
            var o, n, e;
            return n = {
                index: i,
                length: l
            }, o = r.getElementCaption(t, n), e = r.getElementSrc(t), s(e, o, r.options.lazy)
        }, c.map(t, i))
    }, t.prototype.createModal = function() {
        var t, i;
        return i = this.createModalItems(), t = '<div class="slick-lightbox slick-lightbox-hide-init' + (this.isIE ? " slick-lightbox-ie" : "") + '" style="background: ' + this.options.background + ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' + this.options.captionPosition + '">' + i.join("") + "</div>\n  <div>\n<div>", this.$modalElement = c(t), this.$parts = {}, this.$parts.closeButton = c(this.options.layouts.closeButton), this.$modalElement.find(".slick-lightbox-inner").append(this.$parts.closeButton), c("body").append(this.$modalElement)
    }, t.prototype.initSlick = function(t) {
        var i;
        return i = {
            initialSlide: t
        }, this.options.lazy && (i.lazyLoad = "ondemand"), null != this.options.slick ? "function" == typeof this.options.slick ? this.slick = this.options.slick(this.$modalElement) : this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(c.extend({}, this.options.slick, i)) : this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(i), this.$modalElement.trigger("init.slickLightbox")
    }, t.prototype.open = function() {
        var t;
        return this.options.useHistoryApi && this.writeHistory(), this.$element.trigger("show.slickLightbox"), setTimeout(function() {
            return t.$element.trigger("shown.slickLightbox")
        }, (t = this).getTransitionDuration()), this.$modalElement.removeClass("slick-lightbox-hide-init")
    }, t.prototype.close = function() {
        var t;
        return this.$element.trigger("hide.slickLightbox"), setTimeout(function() {
            return t.$element.trigger("hidden.slickLightbox")
        }, (t = this).getTransitionDuration()), this.$modalElement.addClass("slick-lightbox-hide"), this.destroy()
    }, t.prototype.bindEvents = function() {
        var t, i, o, n, e, s, l, r;
        if (i = this, t = function() {
                var t;
                return t = i.$modalElement.find(".slick-lightbox-inner").height(), i.$modalElement.find(".slick-lightbox-slick-item").height(t), i.$modalElement.find(".slick-lightbox-slick-img, .slick-lightbox-slick-item-inner").css("max-height", Math.round(i.options.imageMaxHeight * t))
            }, c(window).on("orientationchange.slickLightbox resize.slickLightbox", t), this.options.useHistoryApi && c(window).on("popstate.slickLightbox", (o = this, function() {
                return o.close()
            })), this.$modalElement.on("init.slickLightbox", t), this.$modalElement.on("destroy.slickLightbox", (n = this, function() {
                return n.destroy()
            })), this.$element.on("destroy.slickLightbox", (e = this, function() {
                return e.destroy(!0)
            })), this.$parts.closeButton.on("click.slickLightbox touchstart.slickLightbox", (s = this, function(t) {
                return t.preventDefault(), s.close()
            })), (this.options.closeOnEscape || this.options.navigateByKeyboard) && c(document).on("keydown.slickLightbox", (l = this, function(t) {
                var i;
                if (i = t.keyCode ? t.keyCode : t.which, l.options.navigateByKeyboard && (37 === i ? l.slideSlick("left") : 39 === i && l.slideSlick("right")), l.options.closeOnEscape && 27 === i) return l.close()
            })), this.options.closeOnBackdropClick) return this.$modalElement.on("click.slickLightbox touchstart.slickLightbox", ".slick-lightbox-slick-img", function(t) {
            return t.stopPropagation()
        }), this.$modalElement.on("click.slickLightbox", ".slick-lightbox-slick-item", (r = this, function(t) {
            return t.preventDefault(), r.close()
        }))
    }, t.prototype.slideSlick = function(t) {
        return "left" === t ? this.slick.slick("slickPrev") : this.slick.slick("slickNext")
    }, t.prototype.detectIE = function() {
        if (this.isIE = !1, /MSIE (\d+\.\d+);/.test(navigator.userAgent) && new Number(RegExp.$1) < 9) return this.isIE = !0
    }, t.prototype.getElementCaption = function(t, i) {
        return this.options.caption ? '<span class="slick-lightbox-slick-caption">' + function() {
            switch (typeof this.options.caption) {
                case "function":
                    return this.options.caption(t, i);
                case "string":
                    return c(t).data(this.options.caption)
            }
        }.call(this) + "</span>" : ""
    }, t.prototype.getElementSrc = function(t) {
        switch (typeof this.options.src) {
            case "function":
                return this.options.src(t);
            case "string":
                return c(t).attr(this.options.src);
            default:
                return t.href
        }
    }, t.prototype.unbindEvents = function() {
        return c(window).off(".slickLightbox"), c(document).off(".slickLightbox"), this.$modalElement.off(".slickLightbox")
    }, t.prototype.destroy = function(t) {
        var i;
        if (null == t && (t = !1), this.didInit && (this.unbindEvents(), setTimeout(function() {
                return i.$modalElement.remove()
            }, (i = this).options.destroyTimeout)), t) return this.$element.off(".slickLightbox"), this.$element.off(".slickLightbox", this.options.itemSelector)
    }, t.prototype.destroyPrevious = function() {
        return c("body").children(".slick-lightbox").trigger("destroy.slickLightbox")
    }, t.prototype.getTransitionDuration = function() {
        var t;
        return this.transitionDuration ? this.transitionDuration : (t = this.$modalElement.css("transition-duration"), this.transitionDuration = void 0 === t ? 500 : -1 < t.indexOf("ms") ? parseFloat(t) : 1e3 * parseFloat(t))
    }, t.prototype.writeHistory = function() {
        return "undefined" != typeof history && null !== history && "function" == typeof history.pushState ? history.pushState(null, null, "") : void 0
    }, t.prototype.filterOutSlickClones = function(t) {
        return this.elementIsSlick() ? t.filter(function() {
            var t;
            return !(t = c(this)).hasClass("slick-cloned") && 0 === t.parents(".slick-cloned").length
        }) : t
    }, t.prototype.handlePossibleCloneClick = function(t, i) {
        var o;
        return this.elementIsSlick() && t.closest(".slick-slide").hasClass("slick-cloned") ? (o = t.attr("href"), i.filter(function() {
            return c(this).attr("href") === o
        }).first()) : t
    }, t.prototype.elementIsSlick = function() {
        return this.$element.hasClass("slick-slider")
    }, i = t, o = {
        background: "rgba(0,0,0,.8)",
        closeOnEscape: !0,
        closeOnBackdropClick: !0,
        destroyTimeout: 500,
        itemSelector: "a",
        navigateByKeyboard: !0,
        src: !1,
        caption: !1,
        captionPosition: "dynamic",
        images: !1,
        slick: {},
        useHistoryApi: !1,
        layouts: {
            closeButton: '<button type="button" class="slick-lightbox-close"></button>'
        },
        shouldOpen: null,
        imageMaxHeight: .9,
        lazy: !1
    }, c.fn.slickLightbox = function(t) {
        return t = c.extend({}, o, t), c(this).each(function() {
            return this.slickLightbox = new i(this, t)
        }), this
    }, c.fn.unslickLightbox = function() {
        return c(this).trigger("destroy.slickLightbox").each(function() {
            return this.slickLightbox = null
        })
    }
}(jQuery);