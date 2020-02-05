var $ = jQuery.noConflict(),
    is_mobile = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/webOS/i),
    helper = {
        digitOnly: function() {
            $(".js-digitOnly").on("keypress", function(e) {
                if (8 !== e.which && 0 !== e.which && (e.which < 48 || 57 < e.which)) return !1
            })
        },
        extend: function(e, t) {
            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            return e
        },
        cookieSet: function(e, t, a) {
            var n = new Date;
            n.setTime(n.getTime() + 3600 * a * 1e3);
            var o = escape(t) + (null == a ? "" : "; expires=" + n.toUTCString());
            document.cookie = e + "=" + o + ";path=/"
        },
        cookieGet: function(e) {
            var t, a, n, o = document.cookie.split(";");
            for (t = 0; t < o.length; t++)
                if (a = o[t].substr(0, o[t].indexOf("=")), n = o[t].substr(o[t].indexOf("=") + 1), (a = a.replace(/^\s+|\s+$/g, "")) === e) return unescape(n)
        },
        cookieCheck: function(e) {
            var t = this.cookieGet(e);
            return null != t && "" !== t
        },
        cookieDelete: function(e) {
            document.cookie = encodeURIComponent(e) + "=deleted; expires=" + new Date(0).toUTCString()
        },
        buttonLoading: function(t, a) {
            var n = '<i class="fs icon-spinner animate-spin"></i>';
            setTimeout(function() {
                var e = t.data("type");
                "submit" === e || "reset" === e || "button" === e ? "reset" !== a ? (t.attr("disabled", !0), t.hasClass("btn-loading") || (t.attr("data-html", t.val()), t.val(n), t.addClass("btn-loading"))) : (t.removeAttr("disabled"), t.val(t.data("html")), t.removeAttr("data-html"), t.removeClass("btn-loading")) : "reset" !== a ? (t.attr("disabled", !0), t.hasClass("btn-loading") || (t.attr("data-html", t.html()), t.html(n), t.addClass("btn-loading"))) : (t.removeAttr("disabled"), t.html(t.data("html")), t.removeAttr("data-html"), t.removeClass("btn-loading"))
            }, 100)
        },
        t: function(e) {
            return "undefined" != typeof js_locale && void 0 !== js_locale[e] ? js_locale[e] : e
        },
        initTooltip: function() {
            $('[data-toggle="tooltip"]').tooltip()
        },
        initSelect2: function() {
            $(".js-select2").each(function() {
                $(this).select2()
            })
        },
        showNotification: function(e) {
            if (void 0 !== e) {
                e.title = void 0 !== e.title ? e.title : "", e.message = void 0 !== e.message ? e.message : "", e.type = void 0 === e.type || "success" !== e.type && "info" !== e.type && "warning" !== e.type && "danger" !== e.type ? "info" : e.type, e.delay = void 0 !== e.delay ? e.delay : 3e3;
                var t = "fs icon-exclamation-circle";
                switch (e.type) {
                    case "success":
                        t = "fs icon-check-circle";
                        break;
                    case "info":
                        t = "fs icon-exclamation-circle";
                        break;
                    case "warning":
                        t = "fs icon-exclamation-triangle";
                        break;
                    case "danger":
                        t = "fs icon-times-circle"
                }
                $.notify({
                    title: e.title,
                    icon: t,
                    message: e.message
                }, {
                    type: e.type,
                    placement: {
                        from: "top",
                        align: "right"
                    },
                    newest_on_top: !0,
                    delay: parseInt(e.delay),
                    timer: 1e3
                })
            }
        },
        showDialogModal: function(e, t, a) {
            swal({
                title: void 0 !== e.title ? e.title : "",
                text: void 0 !== e.text ? e.text : "",
                type: void 0 !== e.type ? e.type : "",
                confirmButtonClass: void 0 !== e.confirmButtonClass ? e.confirmButtonClass : "btn-primary rounded",
                confirmButtonText: void 0 !== e.confirmButtonText ? e.confirmButtonText : this.t("Yes"),
                cancelButtonClass: void 0 !== e.cancelButtonClass ? e.cancelButtonClass : "btn-outline-primary rounded",
                cancelButtonText: void 0 !== e.cancelButtonText ? e.cancelButtonText : this.t("No"),
                showCancelButton: void 0 === e.showCancelButton || e.showCancelButton,
                closeOnConfirm: void 0 === e.closeOnConfirm || e.closeOnConfirm,
                closeOnCancel: void 0 === e.closeOnCancel || e.closeOnCancel,
                animation: void 0 !== e.animation ? e.animation : !is_mobile || "slide-from-bottom-custom"
            }, function(e) {
                e ? "function" == typeof t && t() : "function" == typeof a && a()
            })
        },
        validateForm: function(a, e) {
            var n = this;
            (void 0 === e ? $(".js-formValidate") : e).each(function() {
                var e = $(this),
                    t = {};
                void 0 !== a && (t = n.extend(t, a)), $.validator.addMethod("password-custom", function(e, t) {
                    return this.optional(t) || e.match(/[a-zA-Z]/) && e.match(/[0-9]/)
                }, n.t("Password harus diisi minimal 6 karakter Alphanumeric")), $.validator.addMethod("email-custom", function(e, t) {
                    return this.optional(t) || e.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/)
                }, n.t("Email harus diisi dengan benar")), e.validate(t)
            }), "undefined" != typeof lang && "id" === lang && $.extend(jQuery.validator.messages, {
                required: "Kolom wajib diisi",
                remote: "Harap benarkan kolom ini",
                email: "Email harus diisi dengan benar",
                url: "URL harus diisi dengan benar",
                date: "Tanggal harus diisi dengan benar",
                dateISO: "Silakan masukkan format tanggal(ISO) yang benar",
                number: "Silakan masukkan angka yang benar",
                digits: "Harap masukan angka saja",
                creditcard: "Harap masukkan format kartu kredit yang benar",
                equalTo: "Harap masukkan nilai yg sama dengan sebelumnya",
                maxlength: $.validator.format("Input dibatasi hanya {0} karakter"),
                minlength: $.validator.format("Input tidak kurang dari {0} karakter"),
                rangelength: $.validator.format("Panjang karakter yg diizinkan antara {0} dan {1} karakter"),
                range: $.validator.format("Harap masukkan nilai antara {0} dan {1}"),
                max: $.validator.format("Harap masukkan nilai lebih kecil atau sama dengan {0}"),
                min: $.validator.format("Harap masukkan nilai lebih besar atau sama dengan {0}")
            })
        },
        backToTop: function(e, t) {
            100 < e.scrollTop() ? t.fadeIn() : t.fadeOut()
        },
        cropText: function(e) {
            var t = e,
                a = void 0 !== t.data("max-line") ? t.data("max-line") : 2;
            t.trunk8({
                lines: a
            })
        },
        init: function() {
            var i = this;
            $("body").addClass(is_mobile ? "mobile" : "desktop"), $(".js-datePicker").each(function() {
                var e = $(this),
                    t = {
                        format: "DD-MM-YYYY",
                        useCurrent: !1,
                        icons: i.dateTimePickerIcon(),
                        locale: "id"
                    };
                "dob" === e.data("type") && (t = i.extend(t, {
                    maxDate: moment().endOf("d")
                })), e.datetimepicker(t)
            }), $(".js-formHardSubmit").on("submit", function() {
                var e = $(this);
                e.valid() && i.buttonLoading($('[type="submit"]', e), "loading")
            }), $(".js-formConfirmation").each(function() {
                var o = $(this);
                $('[type="submit"]', o).on("click", function() {
                    var e = $(this).closest("form"),
                        t = o.data("confirm-title"),
                        a = o.data("confirm-message");
                    if (e.valid()) {
                        var n = {
                            title: void 0 !== t ? t : "",
                            text: void 0 !== a ? a : "",
                            showCancelButton: !0,
                            confirmButtonText: "Ya",
                            cancelButtonText: "Batal"
                        };
                        return i.showDialogModal(n, function() {
                            e.submit()
                        }), !1
                    }
                })
            }), $(".js-cropText").each(function() {
                i.cropText($(this))
            }), $(document).on("click", ".js-confirmation", function(e) {
                e.preventDefault();
                var t = $(this),
                    a = {
                        title: void 0 !== t.data("title") ? t.data("title") : "",
                        confirmButtonClass: "btn-outline-primary rounded",
                        cancelButtonClass: "btn-primary rounded"
                    };
                helper.showDialogModal(a, function() {
                    window.location.href = t.attr("href")
                })
            });
            var t = $(".js-backToTop");
            i.backToTop($(window), t), t.on("click", function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 800)
            });
            var a = $(".js-headNav"),
                n = $(".js-offsetTop"),
                o = a.outerHeight();
            $(window).on("scroll", function() {
                var e = $(this);
                void 0 !== n.offset() && (o = n.offset().top + n.height()), e.scrollTop() > o ? a.addClass("scroll") : a.removeClass("scroll"), i.backToTop(e, t)
            }), $(window).scrollTop() > o ? a.addClass("scroll") : a.removeClass("scroll"), $("input[type=number]").on("focus", function(e) {
                $(this).on("mousewheel.disableScroll", function(e) {
                    e.preventDefault()
                })
            }).on("blur", function(e) {
                $(this).off("mousewheel.disableScroll")
            });
            var e = $(".js-search"),
                s = $(".js-clearSearch", e.closest("form"));
            s.on("click", function() {
                s.addClass("d-none"), s.closest("form").find('[name="q"]').val(""), $(this).closest("form").find('[name="q"]').focus()
            }), e.on("keyup", function() {
                "" !== $(this).val() ? s.removeClass("d-none") : s.addClass("d-none")
            }), $("a[href]").on("click", function(e) {
                var t = e.metaKey,
                    a = e.ctrlKey,
                    n = $(this).attr("href"),
                    o = $(this).attr("class"),
                    i = !0;
                (t || a || 1 === n.length || 0 <= n.indexOf("#") || "javascript:void(0);" === n || void 0 !== $(this).attr("target") || void 0 !== $(this).attr("data-type") || void 0 !== $(this).attr("data-toggle") || 0 < $(this).closest(".js-popUpImage").length || 0 <= n.indexOf("javascript:") || 0 <= n.indexOf("mailto:") || 0 <= n.indexOf("tel:") || void 0 !== o && 0 <= o.indexOf("js")) && (i = !1), i && "false" === is_uc_browser && ($(".modal").modal("hide"), $("body").append('<div class="loader-block position-fixed" style="z-index: 999"><i class="fs icon-spinner animate-spin font-40 color-grey-dark"></i></div>'))
            }), i.validateForm(!0), i.digitOnly()
        },
        dateTimePickerIcon: function() {
            return {
                time: "fs icon-clock",
                date: "fs icon-calendar",
                up: "fs icon-chevron-up",
                down: "fs icon-chevron-down",
                previous: "fs icon-chevron-left",
                next: "fs icon-chevron-right",
                today: "fs icon-calendar-check",
                clear: "fs icon-trash-alt",
                close: "fs icon-times-circle"
            }
        },
        searchFilter: function() {
            $(".js-searchFilter").each(function() {
                var t, e, a = $(this),
                    n = $(".js-searchInput", a),
                    o = $(".js-listData", a),
                    i = (e = $(".js-list", o)).length;
                n.on("focus", function() {
                    $(this).closest(".js-searchFilter").addClass("full-screen"), $(this).closest(".js-searchFilter").data("changed", "full-screen")
                }).on("keyup", function() {
                    n = $(this), t = $(n).val().toUpperCase(), e.each(function() {
                        var e = $(this); - 1 < $(".js-text", e).text().toUpperCase().indexOf(t) ? e.show() : e.hide(), $(".js-tmp").remove(), $('.js-list[style="display: none;"]', o).length === i && o.append('<div class="js-tmp mt-2"><strong>' + n.val() + "</strong> tidak ditemukan</div>")
                    })
                })
            })
        },
        specialityFilter: function() {
            var a = $("a[data-speciality]"),
                n = $("li[data-speciality]");
            a.on("click", function() {
                var e = $(this),
                    t = e.data("speciality");
                e.addClass("active"), a.not(e).removeClass("active"), n.addClass("d-none"), $("li[data-speciality=" + t + "]").removeClass("d-none"), "all" === t && n.removeClass("d-none"), $(".js-specialityTitle").text(e.find(".js-text").text())
            })
        },
        imageLazyLoad: function() {
            var e;
            if ("false" === is_uc_browser)
                if ("IntersectionObserver" in window) {
                    e = document.querySelectorAll("img.js-imgLazy");
                    var a = new IntersectionObserver(function(e, t) {
                        e.forEach(function(e) {
                            if (e.isIntersecting) {
                                var t = e.target;
                                t.src = t.dataset.src, a.unobserve(t), setTimeout(function() {
                                    t.classList.remove("js-imgLazy"), t.removeAttribute("data-src"), t.removeAttribute("onerror")
                                }, 300)
                            }
                        })
                    });
                    e.forEach(function(e) {
                        a.observe(e)
                    })
                } else {
                    var t;

                    function n() {
                        t && clearTimeout(t), t = setTimeout(function() {
                            var t = window.pageYOffset;
                            e.forEach(function(e) {
                                e.offsetTop < window.innerHeight + t && (e.src = e.dataset.src, setTimeout(function() {
                                    e.classList.remove("js-imgLazy"), e.removeAttribute("data-src"), e.removeAttribute("onerror")
                                }, 300))
                            }), 0 === e.length && (document.removeEventListener("scroll", n), window.removeEventListener("resize", n), window.removeEventListener("orientationChange", n))
                        }, 20)
                    }
                    e = document.querySelectorAll("img.js-imgLazy"), document.addEventListener("scroll", n), window.addEventListener("resize", n), window.addEventListener("orientationChange", n)
                } else $("img.js-imgLazy").each(function() {
                var e = $(this).data("src");
                $(this).attr("src", e).removeClass("js-imgLazy")
            })
        },
        getLocation: function(e) {
            var n = this;
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
                var t = e.coords.latitude,
                    a = e.coords.longitude;
                n.cookieSet("lat", t, 6), n.cookieSet("long", a, 6), n.cookieCheck("allowLocationAccess") || (n.cookieSet("allowLocationAccess", !0, 1), setTimeout(function() {
                    window.location.reload()
                }, 100))
            }, function() {
                n.cookieDelete("lat"), n.cookieDelete("long"), n.cookieDelete("allowLocationAccess"), n.showNotification({
                    title: "Geocoder failed",
                    message: "Silahkan aktifkan lokasi anda",
                    type: "warning"
                }), console.log("Geocoder failed")
            }) : (n.cookieDelete("lat"), n.cookieDelete("long"), n.cookieDelete("allowLocationAccess"), console.log("Geolocation is not supported by this browser"))
        },
        allowLocation: function() {
            var t = this;
            $(".js-sort").on("click", function(e) {
                "terdekat" === $(this).data("type") && (t.cookieCheck("allowLocationAccess") || (e.preventDefault(), t.getLocation()))
            })
        },
        searchAutocomplete: function() {
            var e = this,
                t = $(".js-search");
            t.closest("form").on("submit", function() {
                e.setSearchCookies(t.val())
            }), t.each(function() {
                var e = $(this);
                e.typeahead({
                    scrollBar: !0,
                    autoSelect: !1,
                    onSelect: function(e) {
                        window.location.href = e.value
                    },
                    ajax: {
                        url: e.data("url"),
                        valueField: "url",
                        displayField: "value",
                        triggerLength: 2,
                        method: "get",
                        preDispatch: function(e) {
                            return {
                                q: e
                            }
                        },
                        preProcess: function(e) {
                            if (0 < e.length) return e
                        }
                    }
                })
            })
        },
        showPassword: function() {
            $(".js-showPassword").each(function() {
                var e = $(this),
                    t = e.siblings("input");
                t.on("keyup", function() {
                    "" !== $(this).val() ? e.show() : e.hide()
                }), e.on("click", function() {
                    var e = $(this);
                    e.hasClass("show") ? (t.attr("type", "password"), e.text(e.data("show")), e.removeClass("show")) : (t.attr("type", "text"), e.text(e.data("hide")), e.addClass("show"))
                })
            })
        },
        setSearchCookies: function(e) {
            var t = this.cookieCheck("search") ? JSON.parse(this.cookieGet("search")) : [];
            if (void 0 !== e && "" !== e) {
                for (var a = !1, n = 0; n < t.length; n++) t[n] === e && (a = !0);
                a || t.push(e)
            }
            t = JSON.stringify(t), this.cookieDelete("search"), this.cookieSet("search", t, 72)
        },
        deleteSearchCookies: function(e) {
            var t = this.cookieCheck("search") ? JSON.parse(this.cookieGet("search")) : [],
                a = t.indexOf(e); - 1 !== a && t.splice(a, 1), t = JSON.stringify(t), this.cookieDelete("search"), this.cookieSet("search", t, 72)
        },
        // stickySidebar: function(e, t) {
        //     e = void 0 !== e ? e : $(".header").outerHeight() + 20, t = void 0 !== t ? t : 20, 768 < window.innerWidth && $(".js-stickySidebar").theiaStickySidebar({
        //         additionalMarginTop: e,
        //         additionalMarginBottom: t
        //     })
        // },
        copyToClipboard: function() {
            var a = this;
            $(".js-copyLink").each(function() {
                var e = $(this);
                e.append('<input type="text" value="' + e.data("copy") + '" class="copy-input"/>')
            }), $(document).on("click", ".js-copyLink", function(e) {
                e.preventDefault();
                var t = $(this).find("input[type=text]");
                t.select(), document.execCommand("copy"), t.blur(), a.showNotification({
                    message: "Link Copied",
                    type: "success"
                }), $(".modal").modal("hide")
            })
        },
        accordionParentClass: function(e, t) {
            (e = void 0 !== e ? e : $(".collapse")).on("shown.bs.collapse", function() {
                $(this).parent().addClass(void 0 !== t ? t : "")
            }).on("hidden.bs.collapse", function() {
                $(this).parent().removeClass(void 0 !== t ? t : "")
            })
        },
        checkboxSingleOption: function() {
            $(".js-checkboxSingleOption").on("click", function() {
                var e = $(this),
                    t = e.attr("name");
                e.is(":checked") && (e.prop("checked", !0), $('.js-checkboxSingleOption[name="' + t + '"]').not(e).prop("checked", !1))
            })
        },
        readMore: function() {
            $readMoreJS.init({
                target: ".js-readMore",
                numOfWords: 40,
                toggle: !0,
                moreLink: "Selengkapnya",
                lessLink: "Sembunyikan",
                linkClass: "color-primary",
                containerClass: "mt-2"
            })
        },
        bookingSelectSchedule: function() {
            var t = this,
                a = $("#formBookingSelectSchedule"),
                n = $('[type="submit"]', a),
                o = $(".js-time", a),
                i = $(".js-noSchedule", a);
            $('[name="date"]', a).on("click", function() {
                var e = $(this).val();
                o.addClass("d-none"), o.find("input").prop("checked", !1), $('.js-time[data-date="' + e + '"]', a).removeClass("d-none"), n.attr("disabled", !0), $('.js-time[data-date="' + e + '"]', a).length < 1 ? (i.removeClass("d-none"), n.attr("disabled", !0)) : i.addClass("d-none")
            }), $('[name="time"]', a).on("click", function() {
                n.removeAttr("disabled")
            }), $('[name="hcf-id"]', a).off("click.schedule").on("click.schedule", function() {
                var e = $(".js-datePickerBooking", a);
                t.bookingGetSchedule({
                    date: e.val(),
                    hcpId: $('[name="hcp-id"]', a).val(),
                    hcfId: $('[name="hcf-id"]:checked', a).val(),
                    range: 7
                })
            })
        },
        bookingGetSchedule: function(e) {
            var t = this;
            if (void 0 !== e) {
                var a = $(".js-scheduleOption");
                $.ajax({
                    type: "GET",
                    url: $(".js-scheduleUrl").val(),
                    data: e,
                    cache: !1,
                    beforeSend: function() {
                        a.find(".loader-block").remove(), a.append('<div class="loader-block"><i class="fs icon-spinner animate-spin "></i></div>')
                    },
                    success: function(e) {
                        a.html(e), t.bookingSelectSchedule(), t.scheduleActivated()
                    },
                    error: function(e) {
                        a.find(".loader-block").remove(), t.showNotification({
                            message: t.t("Failed to connect to server"),
                            type: "danger"
                        })
                    }
                })
            }
        },
        scheduleActivated: function() {
            $(".js-scheduleTimeWrapper:visible").on("click", function() {
                $(".js-submitBooking").prop("disabled", !1)
            }).first().trigger("click")
        },
        getDiseases: function(t) {
            var a = this;
            if (void 0 !== t) {
                var n = $(".js-diseaseContent");
                $.ajax({
                    type: "GET",
                    url: t.data("url"),
                    data: {
                        type: "html",
                        page: t.data("page") + 1
                    },
                    cache: !1,
                    beforeSend: function() {
                        a.buttonLoading(t, "loading")
                    },
                    success: function(e) {
                        t.closest("div").remove(), n.append(e), a.imageLazyLoad()
                    },
                    error: function(e) {
                        a.buttonLoading(t, "reset"), a.showNotification({
                            message: a.t("Failed to connect to server"),
                            type: "danger"
                        })
                    }
                })
            }
        },
        replaceContent: function() {
            $(".js-related").each(function() {
                var e = $(this),
                    t = e.data("replace"),
                    a = e.data("target"),
                    n = $(a).html(),
                    o = e.html();
                n = n.replace(t, o), $(a).html(n), e.remove()
            })
        },
        stickyResultTotal: function() {
            var e = $(".js-resultTotal"),
                t = void 0 !== e.offset() ? e.offset().top - $(".header").outerHeight() : 0;
            $(window).on("scroll", function() {
                $(this).scrollTop() > t ? e.addClass("fixed") : e.removeClass("fixed")
            }), $(window).scrollTop() > t ? e.addClass("fixed") : e.removeClass("fixed")
        },
        updateCalendarEvent: function(e) {
            var o = this,
                i = e.url,
                s = e.parent,
                r = e.container,
                c = e.calendar,
                l = e.userId,
                d = e.year,
                u = e.month,
                f = e.showEvent;
            $.ajax({
                type: "GET",
                url: i,
                data: {
                    type: "json",
                    userId: l,
                    year: d,
                    month: u
                },
                cache: !1,
                beforeSend: function() {
                    s.find(".loader-block").remove(), s.append('<div class="loader-block"><i class="fs icon-spinner animate-spin "></i></div>')
                },
                success: function(e) {
                    s.find(".loader-block").remove();
                    var t = e.data_event.data,
                        a = [];
                    if (0 < t.length) $.each(t, function(e, t) {
                        a.push(moment(t.dateTime, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY"))
                    });
                    else if (f) {
                        var n = moment(d + "-" + u, "YYYY-MM").format("MMMM YYYY");
                        is_mobile && o.showNotification({
                            message: "Anda belum memiliki event di bulan " + n,
                            type: "info"
                        })
                    }
                    o.calendarEvent(c, a, function() {
                        o.calendarMark(c, a)
                    }), f && $.ajax({
                        type: "GET",
                        url: i,
                        data: {
                            type: "html",
                            userId: l,
                            year: d,
                            month: u
                        },
                        cache: !1,
                        beforeSend: function() {},
                        success: function(e) {
                            r.html(e), $("html, body").animate({
                                scrollTop: c.offset().top - $(".header").outerHeight() - 15
                            }, 1e3)
                        },
                        error: function(e) {}
                    })
                },
                error: function(e) {
                    s.find(".loader-block").remove(), o.showNotification({
                        message: o.t("Failed to connect to server"),
                        type: "danger"
                    })
                }
            })
        },
        calendarEvent: function(i, s, e, o) {
            var r = this;
            i.datetimepicker({
                format: "DD-MM-YYYY",
                locale: "id",
                icons: r.dateTimePickerIcon(),
                useCurrent: !1,
                inline: !0,
                sideBySide: !0
            }), s && (i.on("dp.change", function(e) {
                var t = moment(e.date).format("DD/MM/YYYY");
                r.calendarMark(i, s);
                var a = $('.js-calendarEvent[data-day="' + t + '"]');
                $(".js-calendarEvent").addClass("d-none"), a.removeClass("d-none");
                var n = $(".js-calendarEventTitle"),
                    o = $(".js-calendarEventEmpty");
                a.length < 1 ? (n.hide(), t = moment(e.date).format("DD MMMM YYYY"), o.html('Anda belum memiliki event di tanggal <span class="no-wrap">' + t + "</span>")) : (n.show(), o.html(""))
            }), i.on("dp.update", function(e) {
                r.calendarMark(i, s);
                var t = e.viewDate,
                    a = moment(t).format("MM"),
                    n = moment(t).format("YYYY");
                "function" == typeof o && o(a, n)
            }), i.on("dp.hide", function(e) {
                r.calendarMark(i, s)
            }), "function" == typeof e && e())
        },
        calendarMark: function(a, e) {
            var t = this.countArray(e);
            $.each(t, function(e, t) {
                a.find('td[data-day="' + t.value + '"]').addClass("hasEvent").append('<div class="badge font-10" data-content="' + t.count + '"></div>').wrapInner("<div class='calendar-mark'></div>")
            })
        },
        countArray: function(e) {
            array_elements = e, array_elements.sort();
            for (var t = [], a = null, n = 0, o = 0; o < array_elements.length; o++) array_elements[o] != a ? (0 < n && t.push({
                value: a,
                count: n
            }), a = array_elements[o], n = 1) : n++;
            return 0 < n && t.push({
                value: a,
                count: n
            }), t
        },
        jumpLink: function(e, r) {
            if (e.on("click", "a", function(e) {
                    var t = $(this),
                        a = t.data("filter"),
                        n = r.find("> div"),
                        o = !1,
                        i = t.parent().find("a");
                    if (t.hasClass("active") && (o = !0), i.removeClass("active"), o) {
                        e.preventDefault();
                        var s = window.location.origin + window.location.pathname;
                        window.history.pushState("", "", s)
                    } else t.addClass("active");
                    n.hide(), o ? n.show() : n.each(function() {
                        $(this).data("type") == a && $(this).show()
                    })
                }), window.location.hash) {
                var t = window.location.hash,
                    a = t.substring(1, t.length).toLowerCase(),
                    n = r.find("> div"),
                    o = e.find("a");
                o.removeClass("active"), o.each(function() {
                    $(this).data("filter") == a && $(this).addClass("active")
                }), n.hide(), n.each(function() {
                    $(this).data("type") == a && $(this).show()
                })
            }
        }
    };