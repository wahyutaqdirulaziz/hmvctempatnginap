! function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? e(require("jquery")) : e(t.jQuery)
}(this, function(m) {
    var e, v, l = "center",
        h = "left",
        u = "right",
        y = "auto";

    function r(t) {
        this.$element = m(t), this.original_text = m.trim(this.$element.html()), this.settings = m.extend({}, m.fn.trunk8.defaults)
    }

    function S(t) {
        var e = document.createElement("DIV");
        return e.innerHTML = t, void 0 !== e.textContent ? e.textContent : e.innerText
    }

    function x(o, t, l) {
        o = o.replace(l, "");
        var h = function(t, e) {
                var n, r, i, a, s = "";
                for (a = 0; a < t.length; a++) n = t[a], i = m.trim(o).split(" ").length, m.trim(o).length && ("string" == typeof n ? (/<br\s*\/?>/i.test(n) || (o = 1 === i && m.trim(o).length <= n.length ? (n = o, "p" !== e && "div" !== e || (n += l), "") : o.replace(n, "")), s += m.trim(n) + (a === t.length - 1 || i <= 1 ? "" : " ")) : (r = h(n.content, n.tag), n.after && (o = o.replace(n.after, "")), r && (n.after || (n.after = " "), s += "<" + n.tag + n.attribs + ">" + r + "</" + n.tag + ">" + n.after)));
                return s
            },
            e = h(t);
        return e.slice(e.length - l.length) !== l && (e += l), e
    }

    function i() {
        var t, e, n, r, i, a, s = this.data("trunk8"),
            o = s.settings,
            l = o.width,
            h = o.side,
            u = o.fill,
            c = o.parseHTML,
            f = v.getLineHeight(this) * o.lines,
            g = s.original_text,
            d = g.length,
            p = "";
        if (this.html(g), i = this.text(), c && S(g) !== g && (a = function t(e) {
                if (S(e) === e) return e.split(/\s/g);
                for (var n, r, i = [], a = /<([a-z]+)([^<]*)(?:>([\S\s]*?(?!<\1>))<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/gi, s = a.exec(e); s && n !== a.lastIndex;) n = a.lastIndex, s[5] ? i.push(s[5]) : s[1] && i.push({
                    tag: s[1],
                    attribs: s[2],
                    content: s[3],
                    after: s[4]
                }), s = a.exec(e);
                for (r = 0; r < i.length; r++) "string" != typeof i[r] && i[r].content && (i[r].content = t(i[r].content));
                return i
            }(g), d = (g = S(g)).length), l === y) {
            if (this.height() <= f) return;
            for (t = 0, e = d - 1; t <= e;) n = t + (e - t >> 1), r = v.eatStr(g, h, d - n, u), c && a && (r = x(r, a, u)), this.html(r), this.height() > f ? e = n - 1 : (t = n + 1, p = p.length > r.length ? p : r);
            this.html(""), this.html(p), o.tooltip && this.attr("title", i)
        } else {
            if (isNaN(l)) return void m.error('Invalid width "' + l + '".');
            n = d - l, r = v.eatStr(g, h, n, u), this.html(r), o.tooltip && this.attr("title", g)
        }
        o.onTruncate()
    }
    r.prototype.updateSettings = function(t) {
        this.settings = m.extend(this.settings, t)
    }, e = {
        init: function(n) {
            return this.each(function() {
                var t = m(this),
                    e = t.data("trunk8");
                e || t.data("trunk8", e = new r(this)), e.updateSettings(n), i.call(t)
            })
        },
        update: function(e) {
            return this.each(function() {
                var t = m(this);
                e && (t.data("trunk8").original_text = e), i.call(t)
            })
        },
        revert: function() {
            return this.each(function() {
                var t = m(this).data("trunk8").original_text;
                m(this).html(t)
            })
        },
        getSettings: function() {
            return m(this.get(0)).data("trunk8").settings
        }
    }, (v = {
        eatStr: function(t, e, n, r) {
            var i, a, s = t.length,
                o = v.eatStr.generateKey.apply(null, arguments);
            if (v.eatStr.cache[o]) return v.eatStr.cache[o];
            if ("string" == typeof t && 0 !== s || m.error('Invalid source string "' + t + '".'), n < 0 || s < n) m.error('Invalid bite size "' + n + '".');
            else if (0 === n) return t;
            switch ("string" != typeof(r + "") && m.error("Fill unable to be converted to a string."), e) {
                case u:
                    return v.eatStr.cache[o] = m.trim(t.substr(0, s - n)) + r;
                case h:
                    return v.eatStr.cache[o] = r + m.trim(t.substr(n));
                case l:
                    return i = s >> 1, a = n >> 1, v.eatStr.cache[o] = m.trim(v.eatStr(t.substr(0, s - i), u, n - a, "")) + r + m.trim(v.eatStr(t.substr(s - i), h, a, ""));
                default:
                    m.error('Invalid side "' + e + '".')
            }
        },
        getLineHeight: function(t) {
            var e = m(t).css("float");
            "none" !== e && m(t).css("float", "none");
            var n = m(t).css("position");
            "absolute" === n && m(t).css("position", "static");
            var r, i = m(t).html(),
                a = "line-height-test";
            return m(t).html("i").wrap('<div id="' + a + '" />'), r = m("#" + a).innerHeight(), m(t).html(i).css({
                float: e,
                position: n
            }).unwrap(), r
        }
    }).eatStr.cache = {}, v.eatStr.generateKey = function() {
        return Array.prototype.join.call(arguments, "")
    }, m.fn.trunk8 = function(t) {
        return e[t] ? e[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void m.error("Method " + t + " does not exist on jQuery.trunk8") : e.init.apply(this, arguments)
    }, m.fn.trunk8.defaults = {
        fill: "&hellip;",
        lines: 1,
        side: u,
        tooltip: !0,
        width: y,
        parseHTML: !1,
        onTruncate: function() {}
    }
});