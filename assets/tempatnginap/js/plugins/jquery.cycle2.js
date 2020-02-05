! function(r) {
    "use strict";

    function a(e) {
        return (e || "").toLowerCase()
    }
    r.fn.cycle = function(l) {
        var e;
        return 0 !== this.length || r.isReady ? this.each(function() {
            var e, i, t, n, s = r(this),
                o = r.fn.cycle.log;
            if (!s.data("cycle.opts")) {
                for (var c in (!1 === s.data("cycle-log") || l && !1 === l.log || i && !1 === i.log) && (o = r.noop), o("--c2 init--"), e = s.data()) e.hasOwnProperty(c) && /^cycle[A-Z]+/.test(c) && (n = e[c], o((t = c.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, a)) + ":", n, "(" + typeof n + ")"), e[t] = n);
                (i = r.extend({}, r.fn.cycle.defaults, e, l || {})).timeoutId = 0, i.paused = i.paused || !1, i.container = s, i._maxZ = i.maxZ, i.API = r.extend({
                    _container: s
                }, r.fn.cycle.API), i.API.log = o, i.API.trigger = function(e, t) {
                    return i.container.trigger(e, t), i.API
                }, s.data("cycle.opts", i), s.data("cycle.API", i.API), i.API.trigger("cycle-bootstrap", [i, i.API]), i.API.addInitialSlides(), i.API.preInitSlideshow(), i.slides.length && i.API.initSlideshow()
            }
        }) : (e = {
            s: this.selector,
            c: this.context
        }, r.fn.cycle.log("requeuing slideshow (dom not ready)"), r(function() {
            r(e.s, e.c).cycle(l)
        }), this)
    }, r.fn.cycle.API = {
        opts: function() {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function() {
            var e = this.opts(),
                t = e.slides;
            e.slideCount = 0, e.slides = r(), t = t.jquery ? t : e.container.find(t), e.random && t.sort(function() {
                return Math.random() - .5
            }), e.API.add(t)
        },
        preInitSlideshow: function() {
            var e = this.opts();
            e.API.trigger("cycle-pre-initialize", [e]);
            var t = r.fn.cycle.transitions[e.fx];
            t && r.isFunction(t.preInit) && t.preInit(e), e._preInitialized = !0
        },
        postInitSlideshow: function() {
            var e = this.opts();
            e.API.trigger("cycle-post-initialize", [e]);
            var t = r.fn.cycle.transitions[e.fx];
            t && r.isFunction(t.postInit) && t.postInit(e)
        },
        initSlideshow: function() {
            var e, t = this.opts(),
                i = t.container;
            t.API.calcFirstSlide(), "static" == t.container.css("position") && t.container.css("position", "relative"), r(t.slides[t.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            }), t.API.stackSlides(t.slides[t.currSlide], t.slides[t.nextSlide], !t.reverse), t.pauseOnHover && (!0 !== t.pauseOnHover && (i = r(t.pauseOnHover)), i.hover(function() {
                t.API.pause(!0)
            }, function() {
                t.API.resume(!0)
            })), t.timeout && (e = t.API.getSlideOpts(t.currSlide), t.API.queueTransition(e, e.timeout + t.delay)), t._initialized = !0, t.API.updateView(!0), t.API.trigger("cycle-initialized", [t]), t.API.postInitSlideshow()
        },
        pause: function(e) {
            var t = this.opts(),
                i = t.API.getSlideOpts(),
                n = t.hoverPaused || t.paused;
            e ? t.hoverPaused = !0 : t.paused = !0, n || (t.container.addClass("cycle-paused"), t.API.trigger("cycle-paused", [t]).log("cycle-paused"), i.timeout && (clearTimeout(t.timeoutId), t.timeoutId = 0, t._remainingTimeout -= r.now() - t._lastQueue, (t._remainingTimeout < 0 || isNaN(t._remainingTimeout)) && (t._remainingTimeout = void 0)))
        },
        resume: function(e) {
            var t = this.opts(),
                i = !t.hoverPaused && !t.paused;
            e ? t.hoverPaused = !1 : t.paused = !1, i || (t.container.removeClass("cycle-paused"), 0 === t.slides.filter(":animated").length && t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
        },
        add: function(e, n) {
            var t, s = this.opts(),
                i = s.slideCount;
            "string" == r.type(e) && (e = r.trim(e)), r(e).each(function(e) {
                var t, i = r(this);
                n ? s.container.prepend(i) : s.container.append(i), s.slideCount++, t = s.API.buildSlideOpts(i), s.slides = n ? r(i).add(s.slides) : s.slides.add(i), s.API.initSlide(t, i, --s._maxZ), i.data("cycle.opts", t), s.API.trigger("cycle-slide-added", [s, t, i])
            }), s.API.updateView(!0), s._preInitialized && i < 2 && 1 <= s.slideCount && (s._initialized ? s.timeout && (t = s.slides.length, s.nextSlide = s.reverse ? t - 1 : 1, s.timeoutId || s.API.queueTransition(s)) : s.API.initSlideshow())
        },
        calcFirstSlide: function() {
            var e, t = this.opts();
            ((e = parseInt(t.startingSlide || 0, 10)) >= t.slides.length || e < 0) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, t.nextSlide < 0 && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
        },
        calcNextSlide: function() {
            var e, t = this.opts();
            t.reverse ? (e = t.nextSlide - 1 < 0, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
        },
        calcTx: function(e, t) {
            var i, n = e;
            return n._tempFx ? i = r.fn.cycle.transitions[n._tempFx] : t && n.manualFx && (i = r.fn.cycle.transitions[n.manualFx]), i = i || r.fn.cycle.transitions[n.fx], n._tempFx = null, this.opts()._tempFx = null, i || (i = r.fn.cycle.transitions.fade, n.API.log('Transition "' + n.fx + '" not found.  Using fade.')), i
        },
        prepareTx: function(e, t) {
            var i, n, s, o, c, l = this.opts();
            l.slideCount < 2 ? l.timeoutId = 0 : (!e || l.busy && !l.manualTrump || (l.API.stopTransition(), l.busy = !1, clearTimeout(l.timeoutId), l.timeoutId = 0), l.busy || 0 === l.timeoutId && !e || (n = l.slides[l.currSlide], s = l.slides[l.nextSlide], o = l.API.getSlideOpts(l.nextSlide), c = l.API.calcTx(o, e), l._tx = c, e && void 0 !== o.manualSpeed && (o.speed = o.manualSpeed), l.nextSlide != l.currSlide && (e || !l.paused && !l.hoverPaused && l.timeout) ? (l.API.trigger("cycle-before", [o, n, s, t]), c.before && c.before(o, n, s, t), i = function() {
                l.busy = !1, l.container.data("cycle.opts") && (c.after && c.after(o, n, s, t), l.API.trigger("cycle-after", [o, n, s, t]), l.API.queueTransition(o), l.API.updateView(!0))
            }, l.busy = !0, c.transition ? c.transition(o, n, s, t, i) : l.API.doTransition(o, n, s, t, i), l.API.calcNextSlide(), l.API.updateView()) : l.API.queueTransition(o)))
        },
        doTransition: function(e, t, i, n, s) {
            function o() {
                a.animate(c.animIn || {
                    opacity: 1
                }, c.speed, c.easeIn || c.easing, s)
            }
            var c = e,
                l = r(t),
                a = r(i);
            a.css(c.cssBefore || {}), l.animate(c.animOut || {}, c.speed, c.easeOut || c.easing, function() {
                l.css(c.cssAfter || {}), c.sync || o()
            }), c.sync && o()
        },
        queueTransition: function(e, t) {
            var i = this.opts(),
                n = void 0 !== t ? t : e.timeout;
            return 0 === i.nextSlide && 0 == --i.loop ? (i.API.log("terminating; loop=0"), i.timeout = 0, n ? setTimeout(function() {
                i.API.trigger("cycle-finished", [i])
            }, n) : i.API.trigger("cycle-finished", [i]), void(i.nextSlide = i.currSlide)) : void 0 !== i.continueAuto && (!1 === i.continueAuto || r.isFunction(i.continueAuto) && !1 === i.continueAuto()) ? (i.API.log("terminating automatic transitions"), i.timeout = 0, void(i.timeoutId && clearTimeout(i.timeoutId))) : void(n && (i._lastQueue = r.now(), void 0 === t && (i._remainingTimeout = e.timeout), i.paused || i.hoverPaused || (i.timeoutId = setTimeout(function() {
                i.API.prepareTx(!1, !i.reverse)
            }, n))))
        },
        stopTransition: function() {
            var e = this.opts();
            e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
        },
        advanceSlide: function(e) {
            var t = this.opts();
            return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, t.nextSlide < 0 ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, 0 <= e), !1
        },
        buildSlideOpts: function(e) {
            var t, i, n = this.opts(),
                s = e.data() || {};
            for (var o in s) s.hasOwnProperty(o) && /^cycle[A-Z]+/.test(o) && (t = s[o], i = o.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, a), n.API.log("[" + (n.slideCount - 1) + "]", i + ":", t, "(" + typeof t + ")"), s[i] = t);
            (s = r.extend({}, r.fn.cycle.defaults, n, s)).slideNum = n.slideCount;
            try {
                delete s.API, delete s.slideCount, delete s.currSlide, delete s.nextSlide, delete s.slides
            } catch (e) {}
            return s
        },
        getSlideOpts: function(e) {
            var t = this.opts();
            void 0 === e && (e = t.currSlide);
            var i = t.slides[e],
                n = r(i).data("cycle.opts");
            return r.extend({}, t, n)
        },
        initSlide: function(e, t, i) {
            var n = this.opts();
            t.css(e.slideCss || {}), 0 < i && t.css("zIndex", i), isNaN(e.speed) && (e.speed = r.fx.speeds[e.speed] || r.fx.speeds._default), e.sync || (e.speed = e.speed / 2), t.addClass(n.slideClass)
        },
        updateView: function(e, t, i) {
            var n = this.opts();
            if (n._initialized) {
                var s = n.API.getSlideOpts(),
                    o = n.slides[n.currSlide];
                !e && !0 !== t && (n.API.trigger("cycle-update-view-before", [n, s, o]), n.updateView < 0) || (n.slideActiveClass && n.slides.removeClass(n.slideActiveClass).eq(n.currSlide).addClass(n.slideActiveClass), e && n.hideNonActive && n.slides.filter(":not(." + n.slideActiveClass + ")").css("visibility", "hidden"), 0 === n.updateView && setTimeout(function() {
                    n.API.trigger("cycle-update-view", [n, s, o, e])
                }, s.speed / (n.sync ? 2 : 1)), 0 !== n.updateView && n.API.trigger("cycle-update-view", [n, s, o, e]), e && n.API.trigger("cycle-update-view-after", [n, s, o]))
            }
        },
        getComponent: function(e) {
            var t = this.opts(),
                i = t[e];
            return "string" == typeof i ? /^\s*[\>|\+|~]/.test(i) ? t.container.find(i) : r(i) : i.jquery ? i : r(i)
        },
        stackSlides: function(e, t, i) {
            var n, s = this.opts();
            e || (e = s.slides[s.currSlide], t = s.slides[s.nextSlide], i = !s.reverse), r(e).css("zIndex", s.maxZ);
            var o = s.maxZ - 2,
                c = s.slideCount;
            if (i) {
                for (n = s.currSlide + 1; n < c; n++) r(s.slides[n]).css("zIndex", o--);
                for (n = 0; n < s.currSlide; n++) r(s.slides[n]).css("zIndex", o--)
            } else {
                for (n = s.currSlide - 1; 0 <= n; n--) r(s.slides[n]).css("zIndex", o--);
                for (n = c - 1; n > s.currSlide; n--) r(s.slides[n]).css("zIndex", o--)
            }
            r(t).css("zIndex", s.maxZ - 1)
        },
        getSlideIndex: function(e) {
            return this.opts().slides.index(e)
        }
    }, r.fn.cycle.log = function() {
        window.console && console.log
    }, r.fn.cycle.version = function() {
        return "Cycle2: 2.1.6"
    }, r.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function(e, t, i, n) {
                e.API.stackSlides(i, t, n), e.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function(e, t, i, n) {
                var s = e.API.getSlideOpts(e.nextSlide).slideCss || {};
                e.API.stackSlides(t, i, n), e.cssBefore = r.extend(s, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), e.animIn = {
                    opacity: 1
                }, e.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function(e, t, i, n) {
                var s = e.API.getSlideOpts(e.nextSlide).slideCss || {};
                e.API.stackSlides(t, i, n), e.cssBefore = r.extend(s, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), e.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function(e, t, i, n) {
                e.API.stackSlides(t, i, n);
                var s = e.container.css("overflow", "hidden").width();
                e.cssBefore = {
                    left: n ? s : -s,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }, e.cssAfter = {
                    zIndex: e._maxZ - 2,
                    left: 0
                }, e.animIn = {
                    left: 0
                }, e.animOut = {
                    left: n ? -s : s
                }
            }
        }
    }, r.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: 0
    }, r(document).ready(function() {
        r(r.fn.cycle.defaults.autoSelector).cycle()
    })
}(jQuery),
function(a) {
    "use strict";

    function l(e, t) {
        var i, n, s, o, c, l = t.autoHeight;
        if ("container" == l) n = a(t.slides[t.currSlide]).outerHeight(), t.container.height(n);
        else if (t._autoHeightRatio) t.container.height(t.container.width() / t._autoHeightRatio);
        else if ("calc" === l || "number" == a.type(l) && 0 <= l) {
            if ((s = "calc" === l ? (o = 0, c = -1, t.slides.each(function(e) {
                    var t = a(this).height();
                    c < t && (c = t, o = e)
                }), o) : l >= t.slides.length ? 0 : l) == t._sentinelIndex) return;
            t._sentinelIndex = s, t._sentinel && t._sentinel.remove(), (i = a(t.slides[s].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), i.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(t.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), i.find("*").css("visibility", "hidden"), t._sentinel = i
        }
    }

    function r(e, t, i, n, s) {
        var o = a(n).outerHeight();
        t.container.animate({
            height: o
        }, t.autoHeightSpeed, t.autoHeightEasing)
    }

    function d(e, t) {
        t._autoHeightOnResize && (a(window).off("resize orientationchange", t._autoHeightOnResize), t._autoHeightOnResize = null), t.container.off("cycle-slide-added cycle-slide-removed", l), t.container.off("cycle-destroyed", d), t.container.off("cycle-before", r), t._sentinel && (t._sentinel.remove(), t._sentinel = null)
    }
    a.extend(a.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    }), a(document).on("cycle-initialized", function(e, t) {
        var i, n = t.autoHeight,
            s = a.type(n),
            o = null;

        function c() {
            l(e, t)
        }
        "string" !== s && "number" !== s || (t.container.on("cycle-slide-added cycle-slide-removed", l), t.container.on("cycle-destroyed", d), "container" == n ? t.container.on("cycle-before", r) : "string" === s && /\d+\:\d+/.test(n) && (i = (i = n.match(/(\d+)\:(\d+)/))[1] / i[2], t._autoHeightRatio = i), "number" !== s && (t._autoHeightOnResize = function() {
            clearTimeout(o), o = setTimeout(c, 50)
        }, a(window).on("resize orientationchange", t._autoHeightOnResize)), setTimeout(c, 30))
    })
}(jQuery),
function(o) {
    "use strict";
    o.extend(o.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), o(document).on("cycle-update-view", function(e, i, n, s) {
        "caption" === i.captionModule && o.each(["caption", "overlay"], function() {
            var e = n[this + "Template"],
                t = i.API.getComponent(this);
            t.length && e ? (t.html(i.API.tmpl(e, n, i, s)), t.show()) : t.hide()
        })
    }), o(document).on("cycle-destroyed", function(e, t) {
        o.each(["caption", "overlay"], function() {
            var e = t[this + "Template"];
            t[this] && e && t.API.getComponent("caption").empty()
        })
    })
}(jQuery),
function(l) {
    "use strict";
    var c = l.fn.cycle;
    l.fn.cycle = function(t) {
        var i, n, s, o = l.makeArray(arguments);
        return "number" == l.type(t) ? this.cycle("goto", t) : "string" == l.type(t) ? this.each(function() {
            var e;
            if (i = t, void 0 !== (s = l(this).data("cycle.opts"))) return i = "goto" == i ? "jump" : i, n = s.API[i], l.isFunction(n) ? ((e = l.makeArray(o)).shift(), n.apply(s.API, e)) : void c.log("unknown command: ", i);
            c.log('slideshow must be initialized before sending commands; "' + i + '" ignored')
        }) : c.apply(this, arguments)
    }, l.extend(l.fn.cycle, c), l.extend(c.API, {
        next: function() {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? -1 : 1;
                !1 === e.allowWrap && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
            }
        },
        prev: function() {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? 1 : -1;
                !1 === e.allowWrap && e.currSlide + t < 0 || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
            }
        },
        destroy: function() {
            this.stop();
            var t = this.opts(),
                i = l.isFunction(l._data) ? l._data : l.noop;
            clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), i(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass(t.slideActiveClass)), t.slides.each(function() {
                var e = l(this);
                e.removeData(), e.removeClass(t.slideClass), i(this, "parsedAttrs", !1)
            })
        },
        jump: function(e, t) {
            var i, n = this.opts();
            if (!n.busy || n.manualTrump) {
                var s = parseInt(e, 10);
                isNaN(s) || s < 0 || s >= n.slides.length ? n.API.log("goto: invalid slide index: " + s) : s != n.currSlide ? (n.nextSlide = s, clearTimeout(n.timeoutId), n.timeoutId = 0, n.API.log("goto: ", s, " (zero-index)"), i = n.currSlide < n.nextSlide, n._tempFx = t, n.API.prepareTx(!0, i)) : n.API.log("goto: skipping, already on slide", s)
            }
        },
        stop: function() {
            var e = this.opts(),
                t = e.container;
            clearTimeout(e.timeoutId), e.timeoutId = 0, e.API.stopTransition(), e.pauseOnHover && (!0 !== e.pauseOnHover && (t = l(e.pauseOnHover)), t.off("mouseenter mouseleave")), e.API.trigger("cycle-stopped", [e]).log("cycle-stopped")
        },
        reinit: function() {
            var e = this.opts();
            e.API.destroy(), e.container.cycle()
        },
        remove: function(e) {
            for (var t, i, n = this.opts(), s = [], o = 1, c = 0; c < n.slides.length; c++) t = n.slides[c], c == e ? i = t : (s.push(t), l(t).data("cycle.opts").slideNum = o, o++);
            i && (n.slides = l(s), n.slideCount--, l(i).remove(), e == n.currSlide ? n.API.advanceSlide(1) : e < n.currSlide ? n.currSlide-- : n.currSlide++, n.API.trigger("cycle-slide-removed", [n, e, i]).log("cycle-slide-removed"), n.API.updateView())
        }
    }), l(document).on("click.cycle", "[data-cycle-cmd]", function(e) {
        e.preventDefault();
        var t = l(this),
            i = t.data("cycle-cmd"),
            n = t.data("cycle-context") || ".cycle-slideshow";
        l(n).cycle(i, t.data("cycle-arg"))
    })
}(jQuery),
function(o) {
    "use strict";

    function i(i, n) {
        var s;
        i._hashFence ? i._hashFence = !1 : (s = window.location.hash.substring(1), i.slides.each(function(e) {
            if (o(this).data("cycle-hash") == s) {
                if (!0 === n) i.startingSlide = e;
                else {
                    var t = i.currSlide < e;
                    i.nextSlide = e, i.API.prepareTx(!0, t)
                }
                return !1
            }
        }))
    }
    o(document).on("cycle-pre-initialize", function(e, t) {
        i(t, !0), t._onHashChange = function() {
            i(t, !1)
        }, o(window).on("hashchange", t._onHashChange)
    }), o(document).on("cycle-update-view", function(e, t, i) {
        i.hash && "#" + i.hash != window.location.hash && (t._hashFence = !0, window.location.hash = i.hash)
    }), o(document).on("cycle-destroyed", function(e, t) {
        t._onHashChange && o(window).off("hashchange", t._onHashChange)
    })
}(jQuery),
function(u) {
    "use strict";
    u.extend(u.fn.cycle.defaults, {
        loader: !1
    }), u(document).on("cycle-bootstrap", function(e, r) {
        var d;
        r.loader && (d = r.API.add, r.API.add = function(e, o) {
            var c = [];
            if ("string" == u.type(e)) e = u.trim(e);
            else if ("array" === u.type(e))
                for (var t = 0; t < e.length; t++) e[t] = u(e[t])[0];
            var l = (e = u(e)).length;
            if (!l) return;
            e.css("visibility", "hidden").appendTo("body").each(function(e) {
                var i = 0,
                    n = u(this),
                    t = n.is("img") ? n : n.find("img");
                if (n.data("index", e), !(t = t.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length) return --l, void c.push(n);

                function s() {
                    var e, t;
                    0 == --i && (--l, e = n, "wait" == r.loader ? (c.push(e), 0 === l && (c.sort(a), d.apply(r.API, [c, o]), r.container.removeClass("cycle-loading"))) : (t = u(r.slides[r.currSlide]), d.apply(r.API, [e, o]), t.show(), r.container.removeClass("cycle-loading")))
                }
                i = t.length, t.each(function() {
                    this.complete ? s() : u(this).load(function() {
                        s()
                    }).on("error", function() {
                        0 == --i && (r.API.log("slide skipped; img not loaded:", this.src), 0 == --l && "wait" == r.loader && d.apply(r.API, [c, o]))
                    })
                })
            }), l && r.container.addClass("cycle-loading");

            function a(e, t) {
                return e.data("index") - t.data("index")
            }
        })
    })
}(jQuery),
function(c) {
    "use strict";

    function n(i, n, s) {
        var o;
        i.API.getComponent("pager").each(function() {
            var t = c(this);
            if (n.pagerTemplate) {
                var e = i.API.tmpl(n.pagerTemplate, n, i, s[0]);
                o = c(e).appendTo(t)
            } else o = t.children().eq(i.slideCount - 1);
            o.on(i.pagerEvent, function(e) {
                i.pagerEventBubble || e.preventDefault(), i.API.page(t, e.currentTarget)
            })
        })
    }

    function s(e, t) {
        var i = this.opts();
        if (!i.busy || i.manualTrump) {
            var n = e.children().index(t),
                s = i.currSlide < n;
            i.currSlide != n && (i.nextSlide = n, i._tempFx = i.pagerFx, i.API.prepareTx(!0, s), i.API.trigger("cycle-pager-activated", [i, e, t]))
        }
    }
    c.extend(c.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: void 0,
        pagerTemplate: "<span>&bull;</span>"
    }), c(document).on("cycle-bootstrap", function(e, t, i) {
        i.buildPagerLink = n
    }), c(document).on("cycle-slide-added", function(e, t, i, n) {
        t.pager && (t.API.buildPagerLink(t, i, n), t.API.page = s)
    }), c(document).on("cycle-slide-removed", function(e, t, i, n) {
        t.pager && t.API.getComponent("pager").each(function() {
            var e = c(this);
            c(e.children()[i]).remove()
        })
    }), c(document).on("cycle-update-view", function(e, t, i) {
        t.pager && t.API.getComponent("pager").each(function() {
            c(this).children().removeClass(t.pagerActiveClass).eq(t.currSlide).addClass(t.pagerActiveClass)
        })
    }), c(document).on("cycle-destroyed", function(e, t) {
        var i = t.API.getComponent("pager");
        i && (i.children().off(t.pagerEvent), t.pagerTemplate && i.empty())
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), e(document).on("cycle-initialized", function(e, t) {
        if (t.API.getComponent("next").on(t.nextEvent, function(e) {
                e.preventDefault(), t.API.next()
            }), t.API.getComponent("prev").on(t.prevEvent, function(e) {
                e.preventDefault(), t.API.prev()
            }), t.swipe) {
            var i = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
                n = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            t.container.on(i, function(e) {
                t._tempFx = t.swipeFx, t.API.next()
            }), t.container.on(n, function() {
                t._tempFx = t.swipeFx, t.API.prev()
            })
        }
    }), e(document).on("cycle-update-view", function(e, t, i, n) {
        if (!t.allowWrap) {
            var s = t.disabledClass,
                o = t.API.getComponent("next"),
                c = t.API.getComponent("prev"),
                l = t._prevBoundry || 0,
                a = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
            t.currSlide == a ? o.addClass(s).prop("disabled", !0) : o.removeClass(s).prop("disabled", !1), t.currSlide === l ? c.addClass(s).prop("disabled", !0) : c.removeClass(s).prop("disabled", !1)
        }
    }), e(document).on("cycle-destroyed", function(e, t) {
        t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery),
function(r) {
    "use strict";
    r.extend(r.fn.cycle.defaults, {
        progressive: !1
    }), r(document).on("cycle-pre-initialize", function(e, s) {
        if (s.progressive) {
            var o, t, i = s.API,
                n = i.next,
                c = i.prev,
                l = i.prepareTx,
                a = r.type(s.progressive);
            if ("array" == a) o = s.progressive;
            else if (r.isFunction(s.progressive)) o = s.progressive(s);
            else if ("string" == a) {
                if (t = r(s.progressive), !(o = r.trim(t.html()))) return;
                if (/^(\[)/.test(o)) try {
                    o = r.parseJSON(o)
                } catch (e) {
                    return void i.log("error parsing progressive slides", e)
                } else(o = o.split(new RegExp(t.data("cycle-split") || "\n")))[o.length - 1] || o.pop()
            }
            l && (i.prepareTx = function(e, t) {
                var i, n;
                e || 0 === o.length ? l.apply(s.API, [e, t]) : t && s.currSlide == s.slideCount - 1 ? (n = o[0], o = o.slice(1), s.container.one("cycle-slide-added", function(e, t) {
                    setTimeout(function() {
                        t.API.advanceSlide(1)
                    }, 50)
                }), s.API.add(n)) : t || 0 !== s.currSlide ? l.apply(s.API, [e, t]) : (i = o.length - 1, n = o[i], o = o.slice(0, i), s.container.one("cycle-slide-added", function(e, t) {
                    setTimeout(function() {
                        t.currSlide = 1, t.API.advanceSlide(-1)
                    }, 50)
                }), s.API.add(n, !0))
            }), n && (i.next = function() {
                var e = this.opts();
                if (o.length && e.currSlide == e.slideCount - 1) {
                    var t = o[0];
                    o = o.slice(1), e.container.one("cycle-slide-added", function(e, t) {
                        n.apply(t.API), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(t)
                } else n.apply(e.API)
            }), c && (i.prev = function() {
                var e = this.opts();
                if (o.length && 0 === e.currSlide) {
                    var t = o.length - 1,
                        i = o[t];
                    o = o.slice(0, t), e.container.one("cycle-slide-added", function(e, t) {
                        t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(i, !0)
                } else c.apply(e.API)
            })
        }
    })
}(jQuery),
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    }), a.extend(a.fn.cycle.API, {
        tmpl: function(e, t) {
            var i = new RegExp(t.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
                l = a.makeArray(arguments);
            return l.shift(), e.replace(i, function(e, t) {
                var i, n, s, o, c = t.split(".");
                for (i = 0; i < l.length; i++)
                    if (s = l[i]) {
                        if (1 < c.length)
                            for (o = s, n = 0; n < c.length; n++) o = (s = o)[c[n]] || t;
                        else o = s[t];
                        if (a.isFunction(o)) return o.apply(s, l);
                        if (null != o && o != t) return o
                    }
                return t
            })
        }
    })
}(jQuery);