! function(f) {
    "use strict";
    var L = {};
    L.helpers = {
        extendObj: function() {
            for (var e = 1, t = arguments.length; e < t; e++)
                for (var r in arguments[e]) arguments[e].hasOwnProperty(r) && (arguments[e][r] && arguments[e][r].constructor && arguments[e][r].constructor === Object ? (arguments[0][r] = arguments[0][r] || {}, this.extendObj(arguments[0][r], arguments[e][r])) : arguments[0][r] = arguments[e][r]);
            return arguments[0]
        }
    }, L.countWords = function(e) {
        return e.split(/\s+/).length
    }, L.generateTrimmed = function(e, t) {
        return e.split(/\s+/).slice(0, t).join(" ") + "..."
    }, L.init = function(e) {
        e = L.helpers.extendObj({}, {
            target: "",
            numOfWords: 50,
            toggle: !0,
            moreLink: "read more...",
            lessLink: "read less",
            linkClass: "rm-link",
            containerClass: !1
        }, e);
        var t, r, n, i, s, o, a, l, c, d, u = f.querySelectorAll(e.target),
            h = u.length,
            m = [],
            g = [];
        for (i = 0; i < h; i++) t = u[i].innerHTML, r = L.generateTrimmed(t, e.numOfWords), n = L.countWords(t), m.push(t), g.push(r), e.numOfWords < n - 1 && (u[i].innerHTML = g[i], a = f.createElement("div"), e.containerClass && (a.className = e.containerClass), a.innerHTML = '<a id="rm-more_' + i + '" class="' + e.linkClass + '" style="cursor:pointer;" data-readmore="anchor">' + e.moreLink + "</a>", u[i].parentNode.insertBefore(a, u[i].nextSibling));
        for (s = 0, o = (l = f.querySelectorAll('[data-readmore="anchor"]')).length; s < o; s++) l[s].onclick = function() {
            c = this.getAttribute("id"), d = c.split("_")[1], "true" !== this.getAttribute("data-clicked") ? (u[d].innerHTML = m[d], !1 !== e.toggle ? (this.innerHTML = e.lessLink, this.setAttribute("data-clicked", !0)) : this.innerHTML = "") : (u[d].innerHTML = g[d], this.innerHTML = e.moreLink, this.setAttribute("data-clicked", !1))
        }
    }, window.$readMoreJS = L
}(this.document);