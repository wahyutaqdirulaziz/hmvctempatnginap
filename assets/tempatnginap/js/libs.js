! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        x = C.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        s = n.toString,
        v = n.hasOwnProperty,
        o = v.toString,
        u = o.call(Object),
        y = {},
        _ = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var i, r, s = (n = n || x).createElement("script");
        if (s.text = e, t)
            for (i in c)(r = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, r);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[s.call(e)] || "object" : typeof e
    }
    var d = "3.4.1",
        T = function(e, t) {
            return new T.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function f(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !_(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: d,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || _(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && o !== i && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[t], s = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, o[t] = T.extend(u, s, i)) : void 0 !== i && (o[t] = i));
        return o
    }, T.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== s.call(e)) && (!(t = i(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && o.call(n) === u)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (f(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) !t(e[r], r) != o && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, s = 0,
                o = [];
            if (f(e))
                for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && o.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
            return g.apply([], o)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            S()
        }
        var e, f, b, s, o, p, h, m, w, l, u, S, C, a, x, g, c, v, y, T = "sizzle" + +new Date,
            _ = n.document,
            E = 0,
            i = 0,
            D = le(),
            k = le(),
            A = le(),
            O = le(),
            M = function(e, t) {
                return e === t && (u = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            L = t.push,
            P = t.push,
            j = t.slice,
            H = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            Y = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F = "\\[" + Y + "*(" + q + ")(?:" + Y + "*([*^$|!~]?=)" + Y + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + Y + "*\\]",
            W = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            U = new RegExp(Y + "+", "g"),
            B = new RegExp("^" + Y + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Y + "+$", "g"),
            V = new RegExp("^" + Y + "*," + Y + "*"),
            $ = new RegExp("^" + Y + "*([>+~]|" + Y + ")" + Y + "*"),
            z = new RegExp(Y + "|>"),
            G = new RegExp(W),
            Q = new RegExp("^" + q + "$"),
            K = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Y + "*(even|odd|(([+-]|)(\\d*)n|)" + Y + "*(?:([+-]|)" + Y + "*(\\d+)|))" + Y + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + Y + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Y + "*((?:-\\d)?\\d*)" + Y + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            ie = new RegExp("\\\\([\\da-f]{1,6}" + Y + "?|(" + Y + ")|.)", "ig"),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            se = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(t = j.call(_.childNodes), _.childNodes), t[_.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    L.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(t, e, n, i) {
            var r, s, o, a, l, u, c, d = e && e.ownerDocument,
                h = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((e ? e.ownerDocument || e : _) !== C && S(e), e = e || C, x)) {
                if (11 !== h && (l = te.exec(t)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(o = e.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (d && (o = d.getElementById(r)) && y(e, o) && o.id === r) return n.push(o), n
                    } else {
                        if (l[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(r)), n
                    }
                if (f.qsa && !O[t + " "] && (!g || !g.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, d = e, 1 === h && z.test(t)) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(re, se) : e.setAttribute("id", a = T), s = (u = p(t)).length; s--;) u[s] = "#" + a + " " + _e(u[s]);
                        c = u.join(","), d = ne.test(t) && ve(e.parentNode) || e
                    }
                    try {
                        return P.apply(n, d.querySelectorAll(c)), n
                    } catch (e) {
                        O(t, !0)
                    } finally {
                        a === T && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(B, "$1"), e, n, i)
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ue(e) {
            return e[T] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function me(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ge(o) {
            return ue(function(s) {
                return s = +s, ue(function(e, t) {
                    for (var n, i = o([], e.length, s), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = ae.support = {}, o = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !X.test(t || n && n.nodeName || "HTML")
            }, S = ae.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : _;
                return i !== C && 9 === i.nodeType && i.documentElement && (a = (C = i).documentElement, x = !o(C), _ !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), f.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = ee.test(C.getElementsByClassName), f.getById = ce(function(e) {
                    return a.appendChild(e).id = T, !C.getElementsByName || !C.getElementsByName(T).length
                }), f.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(ie, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && x) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(ie, d);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && x) {
                        var n, i, r, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (r = t.getElementsByName(e), i = 0; s = r[i++];)
                                if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), b.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" !== e) return s;
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, b.find.CLASS = f.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && x) return t.getElementsByClassName(e)
                }, c = [], g = [], (f.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + Y + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + Y + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + T + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + Y + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (f.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    f.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", W)
                }), g = g.length && new RegExp(g.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, M = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === _ && y(_, e) ? -1 : t === C || t.ownerDocument === _ && y(_, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        o = [e],
                        a = [t];
                    if (!r || !s) return e === C ? -1 : t === C ? 1 : r ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                    if (r === s) return he(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; o[i] === a[i];) i++;
                    return i ? he(o[i], a[i]) : o[i] === _ ? -1 : a[i] === _ ? 1 : 0
                }), C
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && S(e), f.matchesSelector && x && !O[t + " "] && (!c || !c.test(t)) && (!g || !g.test(t))) try {
                    var n = v.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    O(t, !0)
                }
                return 0 < ae(t, C, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && S(e), y(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== C && S(e);
                var n = b.attrHandle[t.toLowerCase()],
                    i = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !x) : void 0;
                return void 0 !== i ? i : f.attributes || !x ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(re, se)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (u = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(M), u) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, s = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += s(t);
                return n
            }, (b = ae.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ie, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ie, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = D[e + " "];
                        return t || (t = new RegExp("(^|" + Y + ")" + e + "(" + Y + "|$)")) && D(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(U, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, e, t, m, g) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, s, o, a, l, u = v != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = _ && e.nodeName.toLowerCase(),
                                h = !n && !_,
                                f = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (o = e; o = o[u];)
                                            if (_ ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && h) {
                                    for (f = (a = (i = (r = (s = (o = c)[T] || (o[T] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === E && i[1]) && i[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (f = a = 0) || l.pop();)
                                        if (1 === o.nodeType && ++f && o === e) {
                                            r[p] = [E, a, f];
                                            break
                                        }
                                } else if (h && (f = a = (i = (r = (s = (o = e)[T] || (o[T] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === E && i[1]), !1 === f)
                                    for (;
                                        (o = ++a && o && o[u] || (f = a = 0) || l.pop()) && ((_ ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++f || (h && ((r = (s = o[T] || (o[T] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] = [E, f]), o !== e)););
                                return (f -= g) === m || f % m == 0 && 0 <= f / m
                            }
                        }
                    },
                    PSEUDO: function(e, s) {
                        var t, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[T] ? o(s) : 1 < o.length ? (t = [e, e, "", s], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                            for (var n, i = o(e, s), r = i.length; r--;) e[n = H(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return o(e, 0, t)
                        }) : o
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var i = [],
                            r = [],
                            a = h(e.replace(B, "$1"));
                        return a[T] ? ue(function(e, t, n, i) {
                            for (var r, s = a(e, null, i, []), o = e.length; o--;)(r = s[o]) && (e[o] = !(t[o] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ue(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: ue(function(t) {
                        return t = t.replace(ie, d),
                            function(e) {
                                return -1 < (e.textContent || s(e)).indexOf(t)
                            }
                    }),
                    lang: ue(function(n) {
                        return Q.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge(function() {
                        return [0]
                    }),
                    last: ge(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ge(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ge(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ge(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ge(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: ge(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = fe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = pe(e);

        function ye() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function be(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                d = t && "parentNode" === c,
                h = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, s, o = [E, h];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (r = (s = e[T] || (e[T] = {}))[e.uniqueID] || (s[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[c]) && i[0] === E && i[1] === h) return o[2] = i[2];
                                if ((r[c] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function we(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function Se(e, t, n, i, r) {
            for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, r) || (o.push(s), u && t.push(a)));
            return o
        }

        function Ce(f, p, m, g, v, e) {
            return g && !g[T] && (g = Ce(g)), v && !v[T] && (v = Ce(v, e)), ue(function(e, t, n, i) {
                var r, s, o, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    d = !f || !e && p ? c : Se(c, a, f, n, i),
                    h = m ? v || (e ? f : u || g) ? [] : t : d;
                if (m && m(d, h, n, i), g)
                    for (r = Se(h, l), g(r, [], n, i), s = r.length; s--;)(o = r[s]) && (h[l[s]] = !(d[l[s]] = o));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (r = [], s = h.length; s--;)(o = h[s]) && r.push(d[s] = o);
                            v(null, h = [], r, i)
                        }
                        for (s = h.length; s--;)(o = h[s]) && -1 < (r = v ? H(e, o) : a[s]) && (e[r] = !(t[r] = o))
                    }
                } else h = Se(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, i) : P.apply(t, h)
            })
        }

        function xe(e) {
            for (var r, t, n, i = e.length, s = b.relative[e[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = be(function(e) {
                    return e === r
                }, o, !0), u = be(function(e) {
                    return -1 < H(r, e)
                }, o, !0), c = [function(e, t, n) {
                    var i = !s && (n || t !== w) || ((r = t).nodeType ? l : u)(e, t, n);
                    return r = null, i
                }]; a < i; a++)
                if (t = b.relative[e[a].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < i && !b.relative[e[n].type]; n++);
                        return Ce(1 < a && we(c), 1 < a && _e(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, a < n && xe(e.slice(a, n)), n < i && xe(e = e.slice(n)), n < i && _e(e))
                    }
                    c.push(t)
                }
            return we(c)
        }

        function Te(g, v) {
            function e(e, t, n, i, r) {
                var s, o, a, l = 0,
                    u = "0",
                    c = e && [],
                    d = [],
                    h = w,
                    f = e || _ && b.find.TAG("*", r),
                    p = E += null == h ? 1 : Math.random() || .1,
                    m = f.length;
                for (r && (w = t === C || t || r); u !== m && null != (s = f[u]); u++) {
                    if (_ && s) {
                        for (o = 0, t || s.ownerDocument === C || (S(s), n = !x); a = g[o++];)
                            if (a(s, t || C, n)) {
                                i.push(s);
                                break
                            }
                        r && (E = p)
                    }
                    y && ((s = !a && s) && l--, e && c.push(s))
                }
                if (l += u, y && u !== l) {
                    for (o = 0; a = v[o++];) a(c, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--;) c[u] || d[u] || (d[u] = I.call(i));
                        d = Se(d)
                    }
                    P.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && ae.uniqueSort(i)
                }
                return r && (E = p, w = h), c
            }
            var y = 0 < v.length,
                _ = 0 < g.length;
            return y ? ue(e) : e
        }
        return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, p = ae.tokenize = function(e, t) {
            var n, i, r, s, o, a, l, u = k[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, a = [], l = b.preFilter; o;) {
                for (s in n && !(i = V.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(r = [])), n = !1, (i = $.exec(o)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), o = o.slice(n.length)), b.filter) !(i = K[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: s,
                    matches: i
                }), o = o.slice(n.length));
                if (!n) break
            }
            return t ? o.length : o ? ae.error(e) : k(e, a).slice(0)
        }, h = ae.compile = function(e, t) {
            var n, i = [],
                r = [],
                s = A[e + " "];
            if (!s) {
                for (n = (t = t || p(e)).length; n--;)(s = xe(t[n]))[T] ? i.push(s) : r.push(s);
                (s = A(e, Te(r, i))).selector = e
            }
            return s
        }, m = ae.select = function(e, t, n, i) {
            var r, s, o, a, l, u = "function" == typeof e && e,
                c = !i && p(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === t.nodeType && x && b.relative[s[1].type]) {
                    if (!(t = (b.find.ID(o.matches[0].replace(ie, d), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (r = K.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
                    if ((l = b.find[a]) && (i = l(o.matches[0].replace(ie, d), ne.test(s[0].type) && ve(t.parentNode) || t))) {
                        if (s.splice(r, 1), !(e = i.length && _e(s))) return P.apply(n, i), n;
                        break
                    }
            }
            return (u || h(e, c))(i, t, !x, n, !t || ne.test(e) && ve(t.parentNode) || t), n
        }, f.sortStable = T.split("").sort(M).join("") === T, f.detectDuplicates = !!u, S(), f.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(R, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(C);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;

    function S(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && T(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function E(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var D = T.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, n, i) {
        return _(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : T.filter(n, e, i)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (T.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && D.test(e) ? T(e) : e || [], !1).length
        }
    });
    var M, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || M, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : _(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), A.test(i[1]) && T.isPlainObject(t))
                for (i in t) _(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = T.fn, M = T(x);
    var I = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof e && T(e);
            if (!D.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(1 < s.length ? T.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(T(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (k(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
        }
    }, function(i, r) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (L[i] || T.uniqueSort(n), I.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function H(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function Y(e, t, n, i) {
        var r;
        try {
            e && _(r = e.promise) ? r.call(e).done(t).fail(n) : e && _(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(j) || [], function(e, t) {
            n[t] = !0
        }), n) : T.extend({}, i);

        function r() {
            for (a = a || i.once, o = s = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
            i.memory || (t = !1), s = !1, a && (l = t ? [] : "")
        }
        var s, t, o, a, l = [],
            u = [],
            c = -1,
            d = {
                add: function() {
                    return l && (t && !s && (c = l.length - 1, u.push(t)), function n(e) {
                        T.each(e, function(e, t) {
                            _(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !s && r()), this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = u = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = u = [], t || s || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), s || r()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, T.extend({
        Deferred: function(e) {
            var s = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return T.Deferred(function(i) {
                            T.each(s, function(e, t) {
                                var n = _(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && _(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function u(r, s, o, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(r < l)) {
                                        if ((e = o.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, _(t) ? a ? t.call(e, u(l, s, H, a), u(l, s, R, a)) : (l++, t.call(e, u(l, s, H, a), u(l, s, R, a), u(l, s, H, s.notifyWith))) : (o !== H && (n = void 0, i = [e]), (a || s.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (o !== R && (n = void 0, i = [e]), s.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return T.Deferred(function(e) {
                            s[0][3].add(u(0, e, _(i) ? i : H, e.notifyWith)), s[1][3].add(u(0, e, _(t) ? t : H)), s[2][3].add(u(0, e, _(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, o) : o
                    }
                },
                a = {};
            return T.each(s, function(e, t) {
                var n = t[2],
                    i = t[5];
                o[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), o.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this, s[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(r, s)
                }
            }
            var n = arguments.length,
                i = n,
                r = Array(i),
                s = a.call(arguments),
                o = T.Deferred();
            if (n <= 1 && (Y(e, o.done(t(i)).resolve, o.reject, !n), "pending" === o.state() || _(s[i] && s[i].then))) return o.then();
            for (; i--;) Y(s[i], t(i), o.reject);
            return o.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && q.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = T.Deferred();

    function W() {
        x.removeEventListener("DOMContentLoaded", W), C.removeEventListener("load", W), T.ready()
    }
    T.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            T.readyException(e)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || F.resolveWith(x, [T])
        }
    }), T.ready.then = F.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? C.setTimeout(T.ready) : (x.addEventListener("DOMContentLoaded", W), C.addEventListener("load", W));
    var U = function(e, t, n, i, r, s, o) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === w(n))
                for (a in r = !0, n) U(e, t, a, n[a], !0, s, o);
            else if (void 0 !== i && (r = !0, _(i) || (o = !0), u && (t = o ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                    return u.call(T(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
        },
        B = /^-ms-/,
        V = /-([a-z])/g;

    function $(e, t) {
        return t.toUpperCase()
    }

    function z(e) {
        return e.replace(B, "ms-").replace(V, $)
    }

    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Q() {
        this.expando = T.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[z(t)] = n;
            else
                for (i in t) r[z(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(j) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !T.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var K = new Q,
        X = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                X.set(e, t, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return X.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), T.fn.extend({
        data: function(n, e) {
            var t, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                X.set(this, n)
            }) : U(this, function(e) {
                var t;
                if (s && void 0 === e) return void 0 !== (t = X.get(s, n)) || void 0 !== (t = ee(s, n)) ? t : void 0;
                this.each(function() {
                    X.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = X.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                for (t = o.length; t--;) o[t] && 0 === (i = o[t].name).indexOf("data-") && (i = z(i.slice(5)), ee(s, i, r[i]));
                K.set(s, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, T.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = T._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function() {
                T.dequeue(e, t)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || s.resolveWith(o, [o])
            }
            var i, r = 1,
                s = T.Deferred(),
                o = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = K.get(o[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), s.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = x.documentElement,
        se = function(e) {
            return T.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (se = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });

    function ae(e, t, n, i) {
        var r, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        for (s in r = n.apply(e, i || []), t) e.style[s] = o[s];
        return r
    }
    var le = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display")
    };

    function ue(e, t, n, i) {
        var r, s, o = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return T.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (T.cssNumber[t] || "px" !== u && +l) && ne.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; o--;) T.style(e, t, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), c /= s;
            c *= 2, T.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var ce = {};

    function de(e, t) {
        for (var n, i, r, s, o, a, l, u = [], c = 0, d = e.length; c < d; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = K.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && le(i) && (u[c] = (l = o = s = void 0, o = (r = i).ownerDocument, a = r.nodeName, (l = ce[a]) || (s = o.body.appendChild(o.createElement(a)), l = T.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), ce[a] = l)))) : "none" !== n && (u[c] = "none", K.set(i, "display", n)));
        for (c = 0; c < d; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    T.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                le(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? T.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var ye, _e, be = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (var s, o, a, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if ((s = e[f]) || 0 === s)
                if ("object" === w(s)) T.merge(h, s.nodeType ? [s] : s);
                else if (be.test(s)) {
            for (o = o || d.appendChild(t.createElement("div")), a = (fe.exec(s) || ["", ""])[1].toLowerCase(), l = me[a] || me._default, o.innerHTML = l[1] + T.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            T.merge(h, o.childNodes), (o = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (d.textContent = "", f = 0; s = h[f++];)
            if (i && -1 < T.inArray(s, i)) r && r.push(s);
            else if (u = se(s), o = ge(d.appendChild(s), "script"), u && ve(o), n)
            for (c = 0; s = o[c++];) pe.test(s.type || "") && n.push(s);
        return d
    }
    ye = x.createDocumentFragment().appendChild(x.createElement("div")), (_e = x.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), ye.appendChild(_e), y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ee() {
        return !1
    }

    function De(e, t) {
        return e === function() {
            try {
                return x.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, i, r, s) {
        var o, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee;
        else if (!r) return e;
        return 1 === s && (o = r, (r = function(e) {
            return T().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, r, i, n)
        })
    }

    function Ae(e, r, s) {
        s ? (K.set(e, r, !1), T.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = K.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length)(T.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments), K.set(this, r, i), t = s(this, r), this[r](), i !== (n = K.get(this, r)) || t ? K.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else i.length && (K.set(this, r, {
                    value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, r) && T.event.add(e, r, Te)
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, u, c, d, h, f, p, m, g = K.get(t);
            if (g)
                for (n.handler && (n = (s = n).handler, r = s.selector), r && T.find.matchesSelector(re, r), n.guid || (n.guid = T.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(j) || [""]).length; u--;) f = m = (a = xe.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = T.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = T.event.special[f] || {}, c = T.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, s), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(f, o)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), T.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var s, o, a, l, u, c, d, h, f, p, m, g = K.hasData(e) && K.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(j) || [""]).length; u--;)
                    if (f = m = (a = xe.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = T.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) c = h[s], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || T.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) T.event.remove(e, f + t[u], n, i, !0);
                T.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, s, o, a = T.event.fix(e),
                l = new Array(arguments.length),
                u = (K.get(this, "events") || {})[a.type] || [],
                c = T.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (o = T.event.handlers.call(this, a, u), t = 0;
                    (r = o[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((T.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, s, o, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? -1 < T(r, this).index(u) : T.find(r, this, null, [u]).length), o[r] && s.push(i);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: _(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && k(t, "input") && Ae(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && k(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && k(t, "input") && K.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        T.event.special[e] = {
            setup: function() {
                return Ae(this, e, De), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        T.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, i) {
            return ke(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ke(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                T.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Me = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, i, r, s, o, a, l, u;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (s = K.access(e), o = K.set(t, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) T.event.add(t, r, u[r][n]);
            X.hasData(e) && (a = X.access(e), l = T.extend({}, a), X.set(t, l))
        }
    }

    function Re(n, i, r, s) {
        i = g.apply([], i);
        var e, t, o, a, l, u, c = 0,
            d = n.length,
            h = d - 1,
            f = i[0],
            p = _(f);
        if (p || 1 < d && "string" == typeof f && !y.checkClone && Ne.test(f)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = f.call(this, e, t.html())), Re(t, i, r, s)
        });
        if (d && (t = (e = we(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
            for (a = (o = T.map(ge(e, "script"), Pe)).length; c < d; c++) l = e, c !== h && (l = T.clone(l, !0, !0), a && T.merge(o, ge(l, "script"))), r.call(n[c], l, c);
            if (a)
                for (u = o[o.length - 1].ownerDocument, T.map(o, je), c = 0; c < a; c++) l = o[c], pe.test(l.type || "") && !K.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : b(l.textContent.replace(Ie, ""), l, u))
        }
        return n
    }

    function Ye(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || T.cleanData(ge(i)), i.parentNode && (n && se(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(Oe, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, s, o, a, l, u, c = e.cloneNode(!0),
                d = se(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (o = ge(c), i = 0, r = (s = ge(e)).length; i < r; i++) a = s[i], l = o[i], "input" === (u = l.nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || ge(e), o = o || ge(c), i = 0, r = s.length; i < r; i++) He(s[i], o[i]);
                else He(e, c);
            return 0 < (o = ge(c, "script")).length && ve(o, !d && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, r = T.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (G(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(e) {
            return Ye(this, e, !0)
        },
        remove: function(e) {
            return Ye(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Me.test(e) && !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Re(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(ge(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, o) {
        T.fn[e] = function(e) {
            for (var t, n = [], i = T(e), r = i.length - 1, s = 0; s <= r; s++) t = s === r ? this : this.clone(!0), T(i[s])[o](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var qe, Fe, We, Ue, Be, Ve, $e, ze = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ge = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Qe = new RegExp(ie.join("|"), "i");

    function Ke() {
        if ($e) {
            Ve.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", $e.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(Ve).appendChild($e);
            var e = C.getComputedStyle($e);
            qe = "1%" !== e.top, Be = 12 === Xe(e.marginLeft), $e.style.right = "60%", Ue = 36 === Xe(e.right), Fe = 36 === Xe(e.width), $e.style.position = "absolute", We = 12 === Xe($e.offsetWidth / 3), re.removeChild(Ve), $e = null
        }
    }

    function Xe(e) {
        return Math.round(parseFloat(e))
    }

    function Ze(e, t, n) {
        var i, r, s, o, a = e.style;
        return (n = n || Ge(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || se(e) || (o = T.style(e, t)), !y.pixelBoxStyles() && ze.test(o) && Qe.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Je(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Ve = x.createElement("div"), ($e = x.createElement("div")).style && ($e.style.backgroundClip = "content-box", $e.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === $e.style.backgroundClip, T.extend(y, {
        boxSizingReliable: function() {
            return Ke(), Fe
        },
        pixelBoxStyles: function() {
            return Ke(), Ue
        },
        pixelPosition: function() {
            return Ke(), qe
        },
        reliableMarginLeft: function() {
            return Ke(), Be
        },
        scrollboxSize: function() {
            return Ke(), We
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = x.createElement("div").style,
        nt = {};

    function it(e) {
        var t = T.cssProps[e] || nt[e];
        return t || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }
    var rt = /^(none|table(?!-c[ea]).+)/,
        st = /^--/,
        ot = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        at = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function lt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ut(e, t, n, i, r, s) {
        var o = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === n && (l += T.css(e, n + ie[o], !0, r)), i ? ("content" === n && (l -= T.css(e, "padding" + ie[o], !0, r)), "margin" !== n && (l -= T.css(e, "border" + ie[o] + "Width", !0, r))) : (l += T.css(e, "padding" + ie[o], !0, r), "padding" !== n ? l += T.css(e, "border" + ie[o] + "Width", !0, r) : a += T.css(e, "border" + ie[o] + "Width", !0, r));
        return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l
    }

    function ct(e, t, n) {
        var i = Ge(e),
            r = (!y.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
            s = r,
            o = Ze(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return (!y.boxSizingReliable() && r || "auto" === o || !parseFloat(o) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i), (s = a in e) && (o = e[a])), (o = parseFloat(o) || 0) + ut(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function dt(e, t, n, i, r) {
        return new dt.prototype.init(e, t, n, i, r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = z(t),
                    l = st.test(t),
                    u = e.style;
                if (l || (t = it(a)), o = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : u[t];
                "string" === (s = typeof n) && (r = ne.exec(n)) && r[1] && (n = ue(e, t, r), s = "number"), null != n && n == n && ("number" !== s || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, s, o, a = z(t);
            return st.test(t) || (t = it(a)), (o = T.cssHooks[t] || T.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = Ze(e, t, i)), "normal" === r && t in at && (r = at[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }), T.each(["height", "width"], function(e, l) {
        T.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !rt.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, l, n) : ae(e, ot, function() {
                    return ct(e, l, n)
                })
            },
            set: function(e, t, n) {
                var i, r = Ge(e),
                    s = !y.scrollboxSize() && "absolute" === r.position,
                    o = (s || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                    a = n ? ut(e, l, n, o, r) : 0;
                return o && s && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - ut(e, l, "border", !1, r) - .5)), a && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = T.css(e, l)), lt(0, t, a)
            }
        }
    }), T.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, s) {
        T.cssHooks[r + s] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + s] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (T.cssHooks[r + s].set = lt)
    }), T.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, r, s = {},
                    o = 0;
                if (Array.isArray(t)) {
                    for (i = Ge(e), r = t.length; o < r; o++) s[t[o]] = T.css(e, t[o], !1, i);
                    return s
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((T.Tween = dt).prototype = {
        constructor: dt,
        init: function(e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = dt.propHooks[this.prop];
            return e && e.get ? e.get(this) : dt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = dt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : dt.propHooks._default.set(this), this
        }
    }).init.prototype = dt.prototype, (dt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = dt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = dt.prototype.init, T.fx.step = {};
    var ht, ft, pt, mt, gt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;

    function yt() {
        ft && (!1 === x.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(yt) : C.setTimeout(yt, T.fx.interval), T.fx.tick())
    }

    function _t() {
        return C.setTimeout(function() {
            ht = void 0
        }), ht = Date.now()
    }

    function bt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function wt(e, t, n) {
        for (var i, r = (St.tweeners[t] || []).concat(St.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, t, e)) return i
    }

    function St(s, e, t) {
        var n, o, i = 0,
            r = St.prefilters.length,
            a = T.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = ht || _t(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(s, [u, n, t]), n < 1 && r ? t : (r || a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u]), !1)
            },
            u = a.promise({
                elem: s,
                props: T.extend({}, e),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ht || _t(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = T.Tween(s, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, e])) : a.rejectWith(s, [u, e]), this
                }
            }),
            c = u.props;
        for (! function(e, t) {
                var n, i, r, s, o;
                for (n in e)
                    if (r = t[i = z(n)], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = T.cssHooks[i]) && "expand" in o)
                        for (n in s = o.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); i < r; i++)
            if (n = St.prefilters[i].call(u, s, c, u.opts)) return _(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return T.map(c, wt, u), _(u.opts.start) && u.opts.start.call(s, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    T.Animation = T.extend(St, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = _(e) ? (t = e, ["*"]) : e.match(j)).length; i < r; i++) n = e[i], St.tweeners[n] = St.tweeners[n] || [], St.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, s, o, a, l, u, c, d = "width" in t || "height" in t,
                h = this,
                f = {},
                p = e.style,
                m = e.nodeType && le(e),
                g = K.get(e, "fxshow");
            for (i in n.queue || (null == (o = T._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || a()
                }), o.unqueued++, h.always(function() {
                    h.always(function() {
                        o.unqueued--, T.queue(e, "fx").length || o.empty.fire()
                    })
                })), t)
                if (r = t[i], gt.test(r)) {
                    if (delete t[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    f[i] = g && g[i] || T.style(e, i)
                }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = K.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (de([e], !0), u = e.style.display || u, c = T.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (h.done(function() {
                        p.display = u
                    }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                    display: u
                }), s && (g.hidden = !m), m && de([e], !0), h.done(function() {
                    for (i in m || de([e]), K.remove(e, "fxshow"), f) T.style(e, i, f[i])
                })), l = wt(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? St.prefilters.unshift(e) : St.prefilters.push(e)
        }
    }), T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || _(e) && e,
            duration: e,
            easing: n && t || t && !_(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            _(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(le).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = St(this, T.extend({}, t), o);
                (s || K.get(this, "finish")) && e.stop(!0)
            }
            var s = T.isEmptyObject(t),
                o = T.speed(e, n, i);
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(r, e, s) {
            function o(e) {
                var t = e.stop;
                delete e.stop, t(s)
            }
            return "string" != typeof r && (s = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = T.timers,
                    i = K.get(this);
                if (t) i[t] && i[t].stop && o(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && vt.test(t) && o(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
                !e && s || T.dequeue(this, r)
            })
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"), this.each(function() {
                var e, t = K.get(this),
                    n = t[o + "queue"],
                    i = t[o + "queueHooks"],
                    r = T.timers,
                    s = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, o, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(e, i) {
        var r = T.fn[i];
        T.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(bt(i, !0), e, t, n)
        }
    }), T.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        T.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var e, t = 0,
            n = T.timers;
        for (ht = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), ht = void 0
    }, T.fx.timer = function(e) {
        T.timers.push(e), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function() {
        ft || (ft = !0, yt())
    }, T.fx.stop = function() {
        ft = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, pt = x.createElement("input"), mt = x.createElement("select").appendChild(x.createElement("option")), pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = mt.selected, (pt = x.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
    var Ct, xt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return U(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === s && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(j);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), Ct = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = xt[t] || T.find.attr;
        xt[t] = function(e, t, n) {
            var i, r, s = t.toLowerCase();
            return n || (r = xt[s], xt[s] = i, i = null != o(e, t, n) ? s : null, xt[s] = r), i
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i,
        Et = /^(?:a|area)$/i;

    function Dt(e) {
        return (e.match(j) || []).join(" ")
    }

    function kt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function At(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return U(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }), T.extend({
        prop: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (_(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, kt(this)))
            });
            if ((e = At(t)).length)
                for (; n = this[l++];)
                    if (r = kt(n), i = 1 === n.nodeType && " " + Dt(r) + " ") {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        r !== (a = Dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (_(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, kt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = At(t)).length)
                for (; n = this[l++];)
                    if (r = kt(n), i = 1 === n.nodeType && " " + Dt(r) + " ") {
                        for (o = 0; s = e[o++];)
                            for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                        r !== (a = Dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var s = typeof r,
                o = "string" == s || Array.isArray(r);
            return "boolean" == typeof t && o ? t ? this.addClass(r) : this.removeClass(r) : _(r) ? this.each(function(e) {
                T(this).toggleClass(r.call(this, e, kt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (o)
                    for (t = 0, n = T(this), i = At(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" != s || ((e = kt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + Dt(kt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var Ot = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = _(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(Ot, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : Dt(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        o = "select-one" === e.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, s = T.makeArray(t), o = r.length; o--;)((i = r[o]).selected = -1 < T.inArray(T.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        }, y.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;

    function Mt(e) {
        e.stopPropagation()
    }
    var Nt = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function(e, t, n, i) {
            var r, s, o, a, l, u, c, d, h = [n || x],
                f = v.call(e, "type") ? e.type : e,
                p = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = d = o = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), c = T.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !m(n)) {
                    for (a = c.delegateType || f, Nt.test(a + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                    o === (n.ownerDocument || x) && h.push(o.defaultView || o.parentWindow || C)
                }
                for (r = 0;
                    (s = h[r++]) && !e.isPropagationStopped();) d = s, e.type = 1 < r ? a : c.bindType || f, (u = (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) && u.apply(s, t), (u = l && s[l]) && u.apply && G(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                return e.type = f, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !G(n) || l && _(n[f]) && !m(n) && ((o = n[l]) && (n[l] = null), T.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, Mt), n[f](), e.isPropagationStopped() && d.removeEventListener(f, Mt), T.event.triggered = void 0, o && (n[l] = o)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(i, null, t)
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    }), y.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            T.event.simulate(i, e.target, T.event.fix(e))
        }
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, i);
                t || e.addEventListener(n, r, !0), K.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, i) - 1;
                t ? K.access(e, i, t) : (e.removeEventListener(n, r, !0), K.remove(e, i))
            }
        }
    });
    var It = C.location,
        Lt = Date.now(),
        Pt = /\?/;
    T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var jt = /\[\]$/,
        Ht = /\r?\n/g,
        Rt = /^(?:submit|button|image|reset|file)$/i,
        Yt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) T.each(e, function(e, t) {
            i || jt.test(n) ? r(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], i, r)
    }
    T.param = function(e, t) {
        function n(e, t) {
            var n = _(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, r = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) qt(i, e[i], t, n);
        return r.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Yt.test(this.nodeName) && !Rt.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                }
            }).get()
        }
    });
    var Ft = /%20/g,
        Wt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Vt = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        zt = {},
        Gt = {},
        Qt = "*/".concat("*"),
        Kt = x.createElement("a");

    function Xt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(j) || [];
            if (_(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }

    function Zt(t, r, s, o) {
        var a = {},
            l = t === Gt;

        function u(e) {
            var i;
            return a[e] = !0, T.each(t[e] || [], function(e, t) {
                var n = t(r, s, o);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Jt(e, t) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && T.extend(!0, e, i), e
    }
    Kt.href = It.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: It.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(It.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Jt(Jt(e, T.ajaxSettings), t) : Jt(T.ajaxSettings, e)
        },
        ajaxPrefilter: Xt(zt),
        ajaxTransport: Xt(Gt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, d, h, n, f, i, p, m, r, s, g = T.ajaxSetup({}, t),
                v = g.context || g,
                y = g.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                _ = T.Deferred(),
                b = T.Callbacks("once memory"),
                w = g.statusCode || {},
                o = {},
                a = {},
                l = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Bt.exec(h);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) S.always(e[S.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (_.promise(S), g.url = ((e || g.url || It.href) + "").replace($t, It.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(j) || [""], null == g.crossDomain) {
                i = x.createElement("a");
                try {
                    i.href = g.url, i.href = i.href, g.crossDomain = Kt.protocol + "//" + Kt.host != i.protocol + "//" + i.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), Zt(zt, g, t, S), p) return S;
            for (r in (m = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Vt.test(g.type), d = g.url.replace(Wt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ft, "+")) : (s = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (Pt.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(Ut, "$1"), s = (Pt.test(d) ? "&" : "?") + "_=" + Lt++ + s), g.url = d + s), g.ifModified && (T.lastModified[d] && S.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && S.setRequestHeader("If-None-Match", T.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && S.setRequestHeader("Content-Type", g.contentType), S.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : g.accepts["*"]), g.headers) S.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, S, g) || p)) return S.abort();
            if (l = "abort", b.add(g.complete), S.done(g.success), S.fail(g.error), c = Zt(Gt, g, t, S)) {
                if (S.readyState = 1, m && y.trigger("ajaxSend", [S, g]), p) return S;
                g.async && 0 < g.timeout && (f = C.setTimeout(function() {
                    S.abort("timeout")
                }, g.timeout));
                try {
                    p = !1, c.send(o, u)
                } catch (e) {
                    if (p) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, i) {
                var r, s, o, a, l, u = t;
                p || (p = !0, f && C.clearTimeout(f), c = void 0, h = i || "", S.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, s, o, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o = o || r
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), n[s]
                }(g, S, n)), a = function(e, t, n, i) {
                    var r, s, o, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                    for (s = c.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, S, r), r ? (g.ifModified && ((l = S.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = S.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, s = a.data, r = !(o = a.error))) : (o = u, !e && u || (u = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || u) + "", r ? _.resolveWith(v, [s, u, S]) : _.rejectWith(v, [S, u, o]), S.statusCode(w), w = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [S, g, r ? s : o]), b.fireWith(v, [S, u]), m && (y.trigger("ajaxComplete", [S, g]), --T.active || T.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function(e, r) {
        T[r] = function(e, t, n, i) {
            return _(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, T.isPlainObject(e) && e))
        }
    }), T._evalUrl = function(e, t) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                T.globalEval(e, t)
            }
        })
    }, T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (_(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return _(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = _(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var en = {
            0: 200,
            1223: 204
        },
        tn = T.ajaxSettings.xhr();
    y.cors = !!tn && "withCredentials" in tn, y.ajax = tn = !!tn, T.ajaxTransport(function(r) {
        var s, o;
        if (y.cors || tn && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (s = o = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(en[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), o = i.onerror = i.ontimeout = s("error"), void 0 !== i.onabort ? i.onabort = o : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        }
    }), T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), T.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = T("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), x.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var nn, rn = [],
        sn = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || T.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, s, o = !1 !== e.jsonp && (sn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && sn.test(e.data) && "data");
        if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = _(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(sn, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || T.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = C[i], C[i] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === r ? T(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, rn.push(i)), s && _(r) && r(s[0]), s = r = void 0
        }), "script"
    }), y.createHTMLDocument = ((nn = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(i)) : t = x), s = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, s), s && s.length && T(s).remove(), T.merge([], r.childNodes)));
        var i, r, s
    }, T.fn.load = function(e, t, n) {
        var i, r, s, o = this,
            a = e.indexOf(" ");
        return -1 < a && (i = Dt(e.slice(a)), e = e.slice(0, a)), _(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < o.length && T.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), T.expr.pseudos.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    }, T.offset = {
        setOffset: function(e, t, n) {
            var i, r, s, o, a, l, u = T.css(e, "position"),
                c = T(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), s = T.css(e, "top"), l = T.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (i = c.position()).top, i.left) : (o = parseFloat(s) || 0, parseFloat(l) || 0), _(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var s = "pageYOffset" === r;
        T.fn[t] = function(e) {
            return U(this, function(e, t, n) {
                var i;
                if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
            if (t) return t = Ze(e, n), ze.test(t) ? T(e).position()[n] + "px" : t
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        T.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(i, s) {
            T.fn[s] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return U(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === s.indexOf("outer") ? e["inner" + o] : e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), T.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), _(e)) return i = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, r
    }, T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = k, T.isFunction = _, T.isWindow = m, T.camelCase = z, T.type = w, T.now = Date.now, T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var on = C.jQuery,
        an = C.$;
    return T.noConflict = function(e) {
        return C.$ === T && (C.$ = an), e && C.jQuery === T && (C.jQuery = on), T
    }, e || (C.jQuery = C.$ = T), T
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var e, r;

    function h() {
        return e.apply(null, arguments)
    }

    function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function l(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function s(e) {
        return void 0 === e
    }

    function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function c(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
        return i
    }

    function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function d(e, t) {
        for (var n in t) f(t, n) && (e[n] = t[n]);
        return f(t, "toString") && (e.toString = t.toString), f(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function p(e, t, n, i) {
        return Dt(e, t, n, i, !0).utc()
    }

    function m(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function g(e) {
        if (null == e._isValid) {
            var t = m(e),
                n = r.call(t.parsedDateParts, function(e) {
                    return null != e
                }),
                i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
            e._isValid = i
        }
        return e._isValid
    }

    function v(e) {
        var t = p(NaN);
        return null != e ? d(m(t), e) : m(t).userInvalidated = !0, t
    }
    r = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
            if (i in t && e.call(this, t[i], i, t)) return !0;
        return !1
    };
    var y = h.momentProperties = [];

    function _(e, t) {
        var n, i, r;
        if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = m(t)), s(t._locale) || (e._locale = t._locale), 0 < y.length)
            for (n = 0; n < y.length; n++) s(r = t[i = y[n]]) || (e[i] = r);
        return e
    }
    var t = !1;

    function b(e) {
        _(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, h.updateOffset(this), t = !1)
    }

    function w(e) {
        return e instanceof b || null != e && null != e._isAMomentObject
    }

    function S(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function C(e) {
        var t = +e,
            n = 0;
        return 0 != t && isFinite(t) && (n = S(t)), n
    }

    function x(e, t, n) {
        var i, r = Math.min(e.length, t.length),
            s = Math.abs(e.length - t.length),
            o = 0;
        for (i = 0; i < r; i++)(n && e[i] !== t[i] || !n && C(e[i]) !== C(t[i])) && o++;
        return o + s
    }

    function T(e) {
        !1 === h.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function n(r, s) {
        var o = !0;
        return d(function() {
            if (null != h.deprecationHandler && h.deprecationHandler(null, r), o) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "", "object" == typeof arguments[n]) {
                        for (var i in e += "\n[" + n + "] ", arguments[0]) e += i + ": " + arguments[0][i] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[n];
                    t.push(e)
                }
                T(r + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), o = !1
            }
            return s.apply(this, arguments)
        }, s)
    }
    var i, E = {};

    function D(e, t) {
        null != h.deprecationHandler && h.deprecationHandler(e, t), E[e] || (T(t), E[e] = !0)
    }

    function k(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function A(e, t) {
        var n, i = d({}, e);
        for (n in t) f(t, n) && (l(e[n]) && l(t[n]) ? (i[n] = {}, d(i[n], e[n]), d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e) f(e, n) && !f(t, n) && l(e[n]) && (i[n] = d({}, i[n]));
        return i
    }

    function O(e) {
        null != e && this.set(e)
    }
    h.suppressDeprecationWarnings = !1, h.deprecationHandler = null, i = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) f(e, t) && n.push(t);
        return n
    };
    var M = {};

    function N(e, t) {
        var n = e.toLowerCase();
        M[n] = M[n + "s"] = M[t] = e
    }

    function I(e) {
        return "string" == typeof e ? M[e] || M[e.toLowerCase()] : void 0
    }

    function L(e) {
        var t, n, i = {};
        for (n in e) f(e, n) && (t = I(n)) && (i[t] = e[n]);
        return i
    }
    var P = {};

    function j(e, t) {
        P[e] = t
    }

    function H(e, t, n) {
        var i = "" + Math.abs(e),
            r = t - i.length;
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }
    var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Y = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        q = {},
        F = {};

    function W(e, t, n, i) {
        var r = i;
        "string" == typeof i && (r = function() {
            return this[i]()
        }), e && (F[e] = r), t && (F[t[0]] = function() {
            return H(r.apply(this, arguments), t[1], t[2])
        }), n && (F[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        })
    }

    function U(e, t) {
        return e.isValid() ? (t = B(t, e.localeData()), q[t] = q[t] || function(i) {
            var e, r, t, s = i.match(R);
            for (e = 0, r = s.length; e < r; e++) F[s[e]] ? s[e] = F[s[e]] : s[e] = (t = s[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(e) {
                var t, n = "";
                for (t = 0; t < r; t++) n += k(s[t]) ? s[t].call(e, i) : s[t];
                return n
            }
        }(t), q[t](e)) : e.localeData().invalidDate()
    }

    function B(e, t) {
        var n = 5;

        function i(e) {
            return t.longDateFormat(e) || e
        }
        for (Y.lastIndex = 0; 0 <= n && Y.test(e);) e = e.replace(Y, i), Y.lastIndex = 0, --n;
        return e
    }
    var V = /\d/,
        $ = /\d\d/,
        z = /\d{3}/,
        G = /\d{4}/,
        Q = /[+-]?\d{6}/,
        K = /\d\d?/,
        X = /\d\d\d\d?/,
        Z = /\d\d\d\d\d\d?/,
        J = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        ie = /[+-]?\d+/,
        re = /Z|[+-]\d\d:?\d\d/gi,
        se = /Z|[+-]\d\d(?::?\d\d)?/gi,
        oe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ae = {};

    function le(e, n, i) {
        ae[e] = k(n) ? n : function(e, t) {
            return e && i ? i : n
        }
    }

    function ue(e, t) {
        return f(ae, e) ? ae[e](t._strict, t._locale) : new RegExp(ce(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
            return t || n || i || r
        })))
    }

    function ce(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var de = {};

    function he(e, n) {
        var t, i = n;
        for ("string" == typeof e && (e = [e]), u(n) && (i = function(e, t) {
                t[n] = C(e)
            }), t = 0; t < e.length; t++) de[e[t]] = i
    }

    function fe(e, r) {
        he(e, function(e, t, n, i) {
            n._w = n._w || {}, r(e, n._w, n, i)
        })
    }
    var pe = 0,
        me = 1,
        ge = 2,
        ve = 3,
        ye = 4,
        _e = 5,
        be = 6,
        we = 7,
        Se = 8;

    function Ce(e) {
        return xe(e) ? 366 : 365
    }

    function xe(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    W("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), W(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), N("year", "y"), j("year", 1), le("Y", ie), le("YY", K, $), le("YYYY", ee, G), le("YYYYY", te, Q), le("YYYYYY", te, Q), he(["YYYYY", "YYYYYY"], pe), he("YYYY", function(e, t) {
        t[pe] = 2 === e.length ? h.parseTwoDigitYear(e) : C(e)
    }), he("YY", function(e, t) {
        t[pe] = h.parseTwoDigitYear(e)
    }), he("Y", function(e, t) {
        t[pe] = parseInt(e, 10)
    }), h.parseTwoDigitYear = function(e) {
        return C(e) + (68 < C(e) ? 1900 : 2e3)
    };
    var Te, Ee = De("FullYear", !0);

    function De(t, n) {
        return function(e) {
            return null != e ? (Ae(this, t, e), h.updateOffset(this, n), this) : ke(this, t)
        }
    }

    function ke(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function Ae(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }

    function Oe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, i = (t % (n = 12) + n) % n;
        return e += (t - i) / 12, 1 == i ? xe(e) ? 29 : 28 : 31 - i % 7 % 2
    }
    Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1
    }, W("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), W("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), W("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), N("month", "M"), j("month", 8), le("M", K), le("MM", K, $), le("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }), le("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }), he(["M", "MM"], function(e, t) {
        t[me] = C(e) - 1
    }), he(["MMM", "MMMM"], function(e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        null != r ? t[me] = r : m(n).invalidMonth = e
    });
    var Me = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ne = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Ie = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Le(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = C(t);
            else if (!u(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
    }

    function Pe(e) {
        return null != e ? (Le(this, e), h.updateOffset(this, !0), this) : ke(this, "Month")
    }
    var je = oe;
    var He = oe;

    function Re() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, i = [],
            r = [],
            s = [];
        for (t = 0; t < 12; t++) n = p([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
        for (i.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) i[t] = ce(i[t]), r[t] = ce(r[t]);
        for (t = 0; t < 24; t++) s[t] = ce(s[t]);
        this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function Ye(e) {
        var t;
        if (e < 100 && 0 <= e) {
            var n = Array.prototype.slice.call(arguments);
            n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t
    }

    function qe(e, t, n) {
        var i = 7 + t - n;
        return i - (7 + Ye(e, 0, i).getUTCDay() - t) % 7 - 1
    }

    function Fe(e, t, n, i, r) {
        var s, o, a = 1 + 7 * (t - 1) + (7 + n - i) % 7 + qe(e, i, r);
        return o = a <= 0 ? Ce(s = e - 1) + a : a > Ce(e) ? (s = e + 1, a - Ce(e)) : (s = e, a), {
            year: s,
            dayOfYear: o
        }
    }

    function We(e, t, n) {
        var i, r, s = qe(e.year(), t, n),
            o = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
        return o < 1 ? i = o + Ue(r = e.year() - 1, t, n) : o > Ue(e.year(), t, n) ? (i = o - Ue(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = o), {
            week: i,
            year: r
        }
    }

    function Ue(e, t, n) {
        var i = qe(e, t, n),
            r = qe(e + 1, t, n);
        return (Ce(e) - i + r) / 7
    }
    W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), N("week", "w"), N("isoWeek", "W"), j("week", 5), j("isoWeek", 5), le("w", K), le("ww", K, $), le("W", K), le("WW", K, $), fe(["w", "ww", "W", "WW"], function(e, t, n, i) {
        t[i.substr(0, 1)] = C(e)
    });

    function Be(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    W("d", 0, "do", "day"), W("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), W("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), W("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), N("day", "d"), N("weekday", "e"), N("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), le("d", K), le("e", K), le("E", K), le("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }), le("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }), le("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }), fe(["dd", "ddd", "dddd"], function(e, t, n, i) {
        var r = n._locale.weekdaysParse(e, i, n._strict);
        null != r ? t.d = r : m(n).invalidWeekday = e
    }), fe(["d", "e", "E"], function(e, t, n, i) {
        t[i] = C(e)
    });
    var Ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Ge = oe;
    var Qe = oe;
    var Ke = oe;

    function Xe() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, i, r, s, o = [],
            a = [],
            l = [],
            u = [];
        for (t = 0; t < 7; t++) n = p([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), o.push(i), a.push(r), l.push(s), u.push(i), u.push(r), u.push(s);
        for (o.sort(e), a.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++) a[t] = ce(a[t]), l[t] = ce(l[t]), u[t] = ce(u[t]);
        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
    }

    function Ze() {
        return this.hours() % 12 || 12
    }

    function Je(e, t) {
        W(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function et(e, t) {
        return t._meridiemParse
    }
    W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Ze), W("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }), W("hmm", 0, 0, function() {
        return "" + Ze.apply(this) + H(this.minutes(), 2)
    }), W("hmmss", 0, 0, function() {
        return "" + Ze.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
    }), W("Hmm", 0, 0, function() {
        return "" + this.hours() + H(this.minutes(), 2)
    }), W("Hmmss", 0, 0, function() {
        return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
    }), Je("a", !0), Je("A", !1), N("hour", "h"), j("hour", 13), le("a", et), le("A", et), le("H", K), le("h", K), le("k", K), le("HH", K, $), le("hh", K, $), le("kk", K, $), le("hmm", X), le("hmmss", Z), le("Hmm", X), le("Hmmss", Z), he(["H", "HH"], ve), he(["k", "kk"], function(e, t, n) {
        var i = C(e);
        t[ve] = 24 === i ? 0 : i
    }), he(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), he(["h", "hh"], function(e, t, n) {
        t[ve] = C(e), m(n).bigHour = !0
    }), he("hmm", function(e, t, n) {
        var i = e.length - 2;
        t[ve] = C(e.substr(0, i)), t[ye] = C(e.substr(i)), m(n).bigHour = !0
    }), he("hmmss", function(e, t, n) {
        var i = e.length - 4,
            r = e.length - 2;
        t[ve] = C(e.substr(0, i)), t[ye] = C(e.substr(i, 2)), t[_e] = C(e.substr(r)), m(n).bigHour = !0
    }), he("Hmm", function(e, t, n) {
        var i = e.length - 2;
        t[ve] = C(e.substr(0, i)), t[ye] = C(e.substr(i))
    }), he("Hmmss", function(e, t, n) {
        var i = e.length - 4,
            r = e.length - 2;
        t[ve] = C(e.substr(0, i)), t[ye] = C(e.substr(i, 2)), t[_e] = C(e.substr(r))
    });
    var tt, nt = De("Hours", !0),
        it = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Ne,
            monthsShort: Ie,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Ve,
            weekdaysMin: ze,
            weekdaysShort: $e,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        rt = {},
        st = {};

    function ot(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function at(e) {
        var t = null;
        if (!rt[e] && "undefined" != typeof module && module && module.exports) try {
            t = tt._abbr, require("./locale/" + e), lt(t)
        } catch (e) {}
        return rt[e]
    }

    function lt(e, t) {
        var n;
        return e && ((n = s(t) ? ct(e) : ut(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), tt._abbr
    }

    function ut(e, t) {
        if (null === t) return delete rt[e], null;
        var n, i = it;
        if (t.abbr = e, null != rt[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = rt[e]._config;
        else if (null != t.parentLocale)
            if (null != rt[t.parentLocale]) i = rt[t.parentLocale]._config;
            else {
                if (null == (n = at(t.parentLocale))) return st[t.parentLocale] || (st[t.parentLocale] = []), st[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                i = n._config
            }
        return rt[e] = new O(A(i, t)), st[e] && st[e].forEach(function(e) {
            ut(e.name, e.config)
        }), lt(e), rt[e]
    }

    function ct(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt;
        if (!a(e)) {
            if (t = at(e)) return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, i, r, s = 0; s < e.length;) {
                for (t = (r = ot(e[s]).split("-")).length, n = (n = ot(e[s + 1])) ? n.split("-") : null; 0 < t;) {
                    if (i = at(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && x(r, n, !0) >= t - 1) break;
                    t--
                }
                s++
            }
            return tt
        }(e)
    }

    function dt(e) {
        var t, n = e._a;
        return n && -2 === m(e).overflow && (t = n[me] < 0 || 11 < n[me] ? me : n[ge] < 1 || n[ge] > Oe(n[pe], n[me]) ? ge : n[ve] < 0 || 24 < n[ve] || 24 === n[ve] && (0 !== n[ye] || 0 !== n[_e] || 0 !== n[be]) ? ve : n[ye] < 0 || 59 < n[ye] ? ye : n[_e] < 0 || 59 < n[_e] ? _e : n[be] < 0 || 999 < n[be] ? be : -1, m(e)._overflowDayOfYear && (t < pe || ge < t) && (t = ge), m(e)._overflowWeeks && -1 === t && (t = we), m(e)._overflowWeekday && -1 === t && (t = Se), m(e).overflow = t), e
    }

    function ht(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function ft(e) {
        var t, n, i, r, s, o = [];
        if (!e._d) {
            var a, l;
            for (a = e, l = new Date(h.now()), i = a._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[ge] && null == e._a[me] && function(e) {
                    var t, n, i, r, s, o, a, l;
                    if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, o = 4, n = ht(t.GG, e._a[pe], We(kt(), 1, 4).year), i = ht(t.W, 1), ((r = ht(t.E, 1)) < 1 || 7 < r) && (l = !0);
                    else {
                        s = e._locale._week.dow, o = e._locale._week.doy;
                        var u = We(kt(), s, o);
                        n = ht(t.gg, e._a[pe], u.year), i = ht(t.w, u.week), null != t.d ? ((r = t.d) < 0 || 6 < r) && (l = !0) : null != t.e ? (r = t.e + s, (t.e < 0 || 6 < t.e) && (l = !0)) : r = s
                    }
                    i < 1 || i > Ue(n, s, o) ? m(e)._overflowWeeks = !0 : null != l ? m(e)._overflowWeekday = !0 : (a = Fe(n, i, r, s, o), e._a[pe] = a.year, e._dayOfYear = a.dayOfYear)
                }(e), null != e._dayOfYear && (s = ht(e._a[pe], i[pe]), (e._dayOfYear > Ce(s) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0), n = Ye(s, 0, e._dayOfYear), e._a[me] = n.getUTCMonth(), e._a[ge] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
            for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ve] && 0 === e._a[ye] && 0 === e._a[_e] && 0 === e._a[be] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? Ye : function(e, t, n, i, r, s, o) {
                var a;
                return e < 100 && 0 <= e ? (a = new Date(e + 400, t, n, i, r, s, o), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, i, r, s, o), a
            }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (m(e).weekdayMismatch = !0)
        }
    }
    var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        gt = /Z|[+-]\d\d(?::?\d\d)?/,
        vt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        yt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        _t = /^\/?Date\((\-?\d+)/i;

    function bt(e) {
        var t, n, i, r, s, o, a = e._i,
            l = pt.exec(a) || mt.exec(a);
        if (l) {
            for (m(e).iso = !0, t = 0, n = vt.length; t < n; t++)
                if (vt[t][1].exec(l[1])) {
                    r = vt[t][0], i = !1 !== vt[t][2];
                    break
                }
            if (null == r) return void(e._isValid = !1);
            if (l[3]) {
                for (t = 0, n = yt.length; t < n; t++)
                    if (yt[t][1].exec(l[3])) {
                        s = (l[2] || " ") + yt[t][0];
                        break
                    }
                if (null == s) return void(e._isValid = !1)
            }
            if (!i && null != s) return void(e._isValid = !1);
            if (l[4]) {
                if (!gt.exec(l[4])) return void(e._isValid = !1);
                o = "Z"
            }
            e._f = r + (s || "") + (o || ""), Tt(e)
        } else e._isValid = !1
    }
    var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function St(e, t, n, i, r, s) {
        var o = [function(e) {
            var t = parseInt(e, 10); {
                if (t <= 49) return 2e3 + t;
                if (t <= 999) return 1900 + t
            }
            return t
        }(e), Ie.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
        return s && o.push(parseInt(s, 10)), o
    }
    var Ct = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };

    function xt(e) {
        var t, n, i, r = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (r) {
            var s = St(r[4], r[3], r[2], r[5], r[6], r[7]);
            if (t = r[1], n = s, i = e, t && $e.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (m(i).weekdayMismatch = !0, !void(i._isValid = !1))) return;
            e._a = s, e._tzm = function(e, t, n) {
                if (e) return Ct[e];
                if (t) return 0;
                var i = parseInt(n, 10),
                    r = i % 100;
                return 60 * ((i - r) / 100) + r
            }(r[8], r[9], r[10]), e._d = Ye.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function Tt(e) {
        if (e._f !== h.ISO_8601)
            if (e._f !== h.RFC_2822) {
                e._a = [], m(e).empty = !0;
                var t, n, i, r, s, o, a, l, u = "" + e._i,
                    c = u.length,
                    d = 0;
                for (i = B(e._f, e._locale).match(R) || [], t = 0; t < i.length; t++) r = i[t], (n = (u.match(ue(r, e)) || [])[0]) && (0 < (s = u.substr(0, u.indexOf(n))).length && m(e).unusedInput.push(s), u = u.slice(u.indexOf(n) + n.length), d += n.length), F[r] ? (n ? m(e).empty = !1 : m(e).unusedTokens.push(r), o = r, l = e, null != (a = n) && f(de, o) && de[o](a, l._a, l, o)) : e._strict && !n && m(e).unusedTokens.push(r);
                m(e).charsLeftOver = c - d, 0 < u.length && m(e).unusedInput.push(u), e._a[ve] <= 12 && !0 === m(e).bigHour && 0 < e._a[ve] && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[ve] = function(e, t, n) {
                    var i;
                    if (null == n) return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0)), t)
                }(e._locale, e._a[ve], e._meridiem), ft(e), dt(e)
            } else xt(e);
        else bt(e)
    }

    function Et(e) {
        var t, n, i = e._i,
            r = e._f;
        return e._locale = e._locale || ct(e._l), null === i || void 0 === r && "" === i ? v({
            nullInput: !0
        }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), w(i) ? new b(dt(i)) : (o(i) ? e._d = i : a(r) ? function(e) {
            var t, n, i, r, s;
            if (0 === e._f.length) return m(e).invalidFormat = !0, e._d = new Date(NaN);
            for (r = 0; r < e._f.length; r++) s = 0, t = _({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Tt(t), g(t) && (s += m(t).charsLeftOver, s += 10 * m(t).unusedTokens.length, m(t).score = s, (null == i || s < i) && (i = s, n = t));
            d(e, n || t)
        }(e) : r ? Tt(e) : s(n = (t = e)._i) ? t._d = new Date(h.now()) : o(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function(e) {
            var t = _t.exec(e._i);
            null === t ? (bt(e), !1 === e._isValid && (delete e._isValid, xt(e), !1 === e._isValid && (delete e._isValid, h.createFromInputFallback(e)))) : e._d = new Date(+t[1])
        }(t) : a(n) ? (t._a = c(n.slice(0), function(e) {
            return parseInt(e, 10)
        }), ft(t)) : l(n) ? function(e) {
            if (!e._d) {
                var t = L(e._i);
                e._a = c([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), ft(e)
            }
        }(t) : u(n) ? t._d = new Date(n) : h.createFromInputFallback(t), g(e) || (e._d = null), e))
    }

    function Dt(e, t, n, i, r) {
        var s, o = {};
        return !0 !== n && !1 !== n || (i = n, n = void 0), (l(e) && function(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (e.hasOwnProperty(t)) return;
            return 1
        }(e) || a(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = n, o._i = e, o._f = t, o._strict = i, (s = new b(dt(Et(o))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
    }

    function kt(e, t, n, i) {
        return Dt(e, t, n, i, !1)
    }
    h.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), h.ISO_8601 = function() {}, h.RFC_2822 = function() {};
    var At = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = kt.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : v()
        }),
        Ot = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = kt.apply(null, arguments);
            return this.isValid() && e.isValid() ? this < e ? this : e : v()
        });

    function Mt(e, t) {
        var n, i;
        if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return kt();
        for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    var Nt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function It(e) {
        var t = L(e),
            n = t.year || 0,
            i = t.quarter || 0,
            r = t.month || 0,
            s = t.week || t.isoWeek || 0,
            o = t.day || 0,
            a = t.hour || 0,
            l = t.minute || 0,
            u = t.second || 0,
            c = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === Te.call(Nt, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, i = 0; i < Nt.length; ++i)
                if (e[Nt[i]]) {
                    if (n) return !1;
                    parseFloat(e[Nt[i]]) !== C(e[Nt[i]]) && (n = !0)
                }
            return !0
        }(t), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * s, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ct(), this._bubble()
    }

    function Lt(e) {
        return e instanceof It
    }

    function Pt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function jt(e, n) {
        W(e, 0, 0, function() {
            var e = this.utcOffset(),
                t = "+";
            return e < 0 && (e = -e, t = "-"), t + H(~~(e / 60), 2) + n + H(~~e % 60, 2)
        })
    }
    jt("Z", ":"), jt("ZZ", ""), le("Z", se), le("ZZ", se), he(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0, n._tzm = Rt(se, e)
    });
    var Ht = /([\+\-]|\d\d)/gi;

    function Rt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var i = ((n[n.length - 1] || []) + "").match(Ht) || ["-", 0, 0],
            r = 60 * i[1] + C(i[2]);
        return 0 === r ? 0 : "+" === i[0] ? r : -r
    }

    function Yt(e, t) {
        var n, i;
        return t._isUTC ? (n = t.clone(), i = (w(e) || o(e) ? e.valueOf() : kt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), h.updateOffset(n, !1), n) : kt(e).local()
    }

    function qt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function Ft() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    h.updateOffset = function() {};
    var Wt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ut = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Bt(e, t) {
        var n, i, r, s = e,
            o = null;
        return Lt(e) ? s = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : u(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (o = Wt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, s = {
            y: 0,
            d: C(o[ge]) * n,
            h: C(o[ve]) * n,
            m: C(o[ye]) * n,
            s: C(o[_e]) * n,
            ms: C(Pt(1e3 * o[be])) * n
        }) : (o = Ut.exec(e)) ? (n = "-" === o[1] ? -1 : 1, s = {
            y: Vt(o[2], n),
            M: Vt(o[3], n),
            w: Vt(o[4], n),
            d: Vt(o[5], n),
            h: Vt(o[6], n),
            m: Vt(o[7], n),
            s: Vt(o[8], n)
        }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            t = Yt(t, e), e.isBefore(t) ? n = $t(e, t) : ((n = $t(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(kt(s.from), kt(s.to)), (s = {}).ms = r.milliseconds, s.M = r.months), i = new It(s), Lt(e) && f(e, "_locale") && (i._locale = e._locale), i
    }

    function Vt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function $t(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = t - e.clone().add(n.months, "M"), n
    }

    function zt(i, r) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (D(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Gt(this, Bt(e = "string" == typeof e ? +e : e, t), i), this
        }
    }

    function Gt(e, t, n, i) {
        var r = t._milliseconds,
            s = Pt(t._days),
            o = Pt(t._months);
        e.isValid() && (i = null == i || i, o && Le(e, ke(e, "Month") + o * n), s && Ae(e, "Date", ke(e, "Date") + s * n), r && e._d.setTime(e._d.valueOf() + r * n), i && h.updateOffset(e, s || o))
    }
    Bt.fn = It.prototype, Bt.invalid = function() {
        return Bt(NaN)
    };
    var Qt = zt(1, "add"),
        Kt = zt(-1, "subtract");

    function Xt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(n, "months");
        return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(1 + n, "months") - i))) || 0
    }

    function Zt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ct(e)) && (this._locale = t), this)
    }
    h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Jt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function en() {
        return this._locale
    }
    var tn = 126227808e5;

    function nn(e, t) {
        return (e % t + t) % t
    }

    function rn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, n) - tn : new Date(e, t, n).valueOf()
    }

    function sn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n)
    }

    function on(e, t) {
        W(0, [e, e.length], 0, t)
    }

    function an(e, t, n, i, r) {
        var s;
        return null == e ? We(this, i, r).year : ((s = Ue(e, i, r)) < t && (t = s), function(e, t, n, i, r) {
            var s = Fe(e, t, n, i, r),
                o = Ye(s.year, 0, s.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
        }.call(this, e, t, n, i, r))
    }
    W(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), W(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), on("GGGGG", "isoWeekYear"), N("weekYear", "gg"), N("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", K, $), le("gg", K, $), le("GGGG", ee, G), le("gggg", ee, G), le("GGGGG", te, Q), le("ggggg", te, Q), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
        t[i.substr(0, 2)] = C(e)
    }), fe(["gg", "GG"], function(e, t, n, i) {
        t[i] = h.parseTwoDigitYear(e)
    }), W("Q", 0, "Qo", "quarter"), N("quarter", "Q"), j("quarter", 7), le("Q", V), he("Q", function(e, t) {
        t[me] = 3 * (C(e) - 1)
    }), W("D", ["DD", 2], "Do", "date"), N("date", "D"), j("date", 9), le("D", K), le("DD", K, $), le("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), he(["D", "DD"], ge), he("Do", function(e, t) {
        t[ge] = C(e.match(K)[0])
    });
    var ln = De("Date", !0);
    W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), N("dayOfYear", "DDD"), j("dayOfYear", 4), le("DDD", J), le("DDDD", z), he(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = C(e)
    }), W("m", ["mm", 2], 0, "minute"), N("minute", "m"), j("minute", 14), le("m", K), le("mm", K, $), he(["m", "mm"], ye);
    var un = De("Minutes", !1);
    W("s", ["ss", 2], 0, "second"), N("second", "s"), j("second", 15), le("s", K), le("ss", K, $), he(["s", "ss"], _e);
    var cn, dn = De("Seconds", !1);
    for (W("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), W(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), W(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), W(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), W(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), W(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), W(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), N("millisecond", "ms"), j("millisecond", 16), le("S", J, V), le("SS", J, $), le("SSS", J, z), cn = "SSSS"; cn.length <= 9; cn += "S") le(cn, ne);

    function hn(e, t) {
        t[be] = C(1e3 * ("0." + e))
    }
    for (cn = "S"; cn.length <= 9; cn += "S") he(cn, hn);
    var fn = De("Milliseconds", !1);
    W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
    var pn = b.prototype;

    function mn(e) {
        return e
    }
    pn.add = Qt, pn.calendar = function(e, t) {
        var n = e || kt(),
            i = Yt(n, this).startOf("day"),
            r = h.calendarFormat(this, i) || "sameElse",
            s = t && (k(t[r]) ? t[r].call(this, n) : t[r]);
        return this.format(s || this.localeData().calendar(r, this, kt(n)))
    }, pn.clone = function() {
        return new b(this)
    }, pn.diff = function(e, t, n) {
        var i, r, s;
        if (!this.isValid()) return NaN;
        if (!(i = Yt(e, this)).isValid()) return NaN;
        switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = I(t)) {
            case "year":
                s = Xt(this, i) / 12;
                break;
            case "month":
                s = Xt(this, i);
                break;
            case "quarter":
                s = Xt(this, i) / 3;
                break;
            case "second":
                s = (this - i) / 1e3;
                break;
            case "minute":
                s = (this - i) / 6e4;
                break;
            case "hour":
                s = (this - i) / 36e5;
                break;
            case "day":
                s = (this - i - r) / 864e5;
                break;
            case "week":
                s = (this - i - r) / 6048e5;
                break;
            default:
                s = this - i
        }
        return n ? s : S(s)
    }, pn.endOf = function(e) {
        var t;
        if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this;
        var n = this._isUTC ? sn : rn;
        switch (e) {
            case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                t = this._d.valueOf(), t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                break;
            case "minute":
                t = this._d.valueOf(), t += 6e4 - nn(t, 6e4) - 1;
                break;
            case "second":
                t = this._d.valueOf(), t += 1e3 - nn(t, 1e3) - 1
        }
        return this._d.setTime(t), h.updateOffset(this, !0), this
    }, pn.format = function(e) {
        e = e || (this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
        var t = U(this, e);
        return this.localeData().postformat(t)
    }, pn.from = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || kt(e).isValid()) ? Bt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, pn.fromNow = function(e) {
        return this.from(kt(), e)
    }, pn.to = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || kt(e).isValid()) ? Bt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, pn.toNow = function(e) {
        return this.to(kt(), e)
    }, pn.get = function(e) {
        return k(this[e = I(e)]) ? this[e]() : this
    }, pn.invalidAt = function() {
        return m(this).overflow
    }, pn.isAfter = function(e, t) {
        var n = w(e) ? e : kt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }, pn.isBefore = function(e, t) {
        var n = w(e) ? e : kt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }, pn.isBetween = function(e, t, n, i) {
        var r = w(e) ? e : kt(e),
            s = w(t) ? t : kt(t);
        return !!(this.isValid() && r.isValid() && s.isValid()) && (("(" === (i = i || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === i[1] ? this.isBefore(s, n) : !this.isAfter(s, n)))
    }, pn.isSame = function(e, t) {
        var n, i = w(e) ? e : kt(e);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }, pn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, pn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, pn.isValid = function() {
        return g(this)
    }, pn.lang = Jt, pn.locale = Zt, pn.localeData = en, pn.max = Ot, pn.min = At, pn.parsingFlags = function() {
        return d({}, m(this))
    }, pn.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                    var t = [];
                    for (var n in e) t.push({
                        unit: n,
                        priority: P[n]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }(e = L(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
        else if (k(this[e = I(e)])) return this[e](t);
        return this
    }, pn.startOf = function(e) {
        var t;
        if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this;
        var n = this._isUTC ? sn : rn;
        switch (e) {
            case "year":
                t = n(this.year(), 0, 1);
                break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                t = n(this.year(), this.month(), 1);
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date());
                break;
            case "hour":
                t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case "minute":
                t = this._d.valueOf(), t -= nn(t, 6e4);
                break;
            case "second":
                t = this._d.valueOf(), t -= nn(t, 1e3)
        }
        return this._d.setTime(t), h.updateOffset(this, !0), this
    }, pn.subtract = Kt, pn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, pn.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, pn.toDate = function() {
        return new Date(this.valueOf())
    }, pn.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
            n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : k(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, pn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
            i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            r = t + '[")]';
        return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r)
    }, pn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, pn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, pn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, pn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, pn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }, pn.year = Ee, pn.isLeapYear = function() {
        return xe(this.year())
    }, pn.weekYear = function(e) {
        return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, pn.isoWeekYear = function(e) {
        return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, pn.quarter = pn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, pn.month = Pe, pn.daysInMonth = function() {
        return Oe(this.year(), this.month())
    }, pn.week = pn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, pn.isoWeek = pn.isoWeeks = function(e) {
        var t = We(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, pn.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ue(this.year(), e.dow, e.doy)
    }, pn.isoWeeksInYear = function() {
        return Ue(this.year(), 1, 4)
    }, pn.date = ln, pn.day = pn.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - i, "d")) : i
    }, pn.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }, pn.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this.day() || 7;
        var t, n, i = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
        return this.day(this.day() % 7 ? i : i - 7)
    }, pn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, pn.hour = pn.hours = nt, pn.minute = pn.minutes = un, pn.second = pn.seconds = dn, pn.millisecond = pn.milliseconds = fn, pn.utcOffset = function(e, t, n) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? r : qt(this);
        if ("string" == typeof e) {
            if (null === (e = Rt(se, e))) return this
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (i = qt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Gt(this, Bt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this
    }, pn.utc = function(e) {
        return this.utcOffset(0, e)
    }, pn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(qt(this), "m")), this
    }, pn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Rt(re, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }, pn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? kt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, pn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, pn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }, pn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }, pn.isUtc = Ft, pn.isUTC = Ft, pn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }, pn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, pn.dates = n("dates accessor is deprecated. Use date instead.", ln), pn.months = n("months accessor is deprecated. Use month instead", Pe), pn.years = n("years accessor is deprecated. Use year instead", Ee), pn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }), pn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!s(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (_(e, this), (e = Et(e))._a) {
            var t = (e._isUTC ? p : kt)(e._a);
            this._isDSTShifted = this.isValid() && 0 < x(e._a, t.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var gn = O.prototype;

    function vn(e, t, n, i) {
        var r = ct(),
            s = p().set(i, t);
        return r[n](s, e)
    }

    function yn(e, t, n) {
        if (u(e) && (t = e, e = void 0), e = e || "", null != t) return vn(e, t, n, "month");
        var i, r = [];
        for (i = 0; i < 12; i++) r[i] = vn(e, i, n, "month");
        return r
    }

    function _n(e, t, n, i) {
        t = ("boolean" == typeof e ? u(t) && (n = t, t = void 0) : (t = e, e = !1, u(n = t) && (n = t, t = void 0)), t || "");
        var r, s = ct(),
            o = e ? s._week.dow : 0;
        if (null != n) return vn(t, (n + o) % 7, i, "day");
        var a = [];
        for (r = 0; r < 7; r++) a[r] = vn(t, (r + o) % 7, i, "day");
        return a
    }
    gn.calendar = function(e, t, n) {
        var i = this._calendar[e] || this._calendar.sameElse;
        return k(i) ? i.call(t, n) : i
    }, gn.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, gn.invalidDate = function() {
        return this._invalidDate
    }, gn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }, gn.preparse = mn, gn.postformat = mn, gn.relativeTime = function(e, t, n, i) {
        var r = this._relativeTime[n];
        return k(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
    }, gn.pastFuture = function(e, t) {
        var n = this._relativeTime[0 < e ? "future" : "past"];
        return k(n) ? n(t) : n.replace(/%s/i, t)
    }, gn.set = function(e) {
        var t, n;
        for (n in e) k(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, gn.months = function(e, t) {
        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Me).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
    }, gn.monthsShort = function(e, t) {
        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Me.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, gn.monthsParse = function(e, t, n) {
        var i, r, s;
        if (this._monthsParseExact) return function(e, t, n) {
            var i, r, s, o = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) s = p([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, o)) ? r : null : "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, o)) || -1 !== (r = Te.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, o)) || -1 !== (r = Te.call(this._shortMonthsParse, o)) ? r : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
            if (r = p([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
            if (!n && this._monthsParse[i].test(e)) return i
        }
    }, gn.monthsRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || Re.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = He), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, gn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || Re.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = je), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, gn.week = function(e) {
        return We(e, this._week.dow, this._week.doy).week
    }, gn.firstDayOfYear = function() {
        return this._week.doy
    }, gn.firstDayOfWeek = function() {
        return this._week.dow
    }, gn.weekdays = function(e, t) {
        var n = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? Be(n, this._week.dow) : e ? n[e.day()] : n
    }, gn.weekdaysMin = function(e) {
        return !0 === e ? Be(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, gn.weekdaysShort = function(e) {
        return !0 === e ? Be(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, gn.weekdaysParse = function(e, t, n) {
        var i, r, s;
        if (this._weekdaysParseExact) return function(e, t, n) {
            var i, r, s, o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) s = p([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, o)) || -1 !== (r = Te.call(this._shortWeekdaysParse, o)) || -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, o)) || -1 !== (r = Te.call(this._weekdaysParse, o)) || -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, o)) || -1 !== (r = Te.call(this._weekdaysParse, o)) || -1 !== (r = Te.call(this._shortWeekdaysParse, o)) ? r : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
            if (r = p([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
            if (!n && this._weekdaysParse[i].test(e)) return i
        }
    }, gn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Ge), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, gn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, gn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ke), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, gn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, gn.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, lt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === C(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }), h.lang = n("moment.lang is deprecated. Use moment.locale instead.", lt), h.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ct);
    var bn = Math.abs;

    function wn(e, t, n, i) {
        var r = Bt(t, n);
        return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
    }

    function Sn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function Cn(e) {
        return 4800 * e / 146097
    }

    function xn(e) {
        return 146097 * e / 4800
    }

    function Tn(e) {
        return function() {
            return this.as(e)
        }
    }
    var En = Tn("ms"),
        Dn = Tn("s"),
        kn = Tn("m"),
        An = Tn("h"),
        On = Tn("d"),
        Mn = Tn("w"),
        Nn = Tn("M"),
        In = Tn("Q"),
        Ln = Tn("y");

    function Pn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var jn = Pn("milliseconds"),
        Hn = Pn("seconds"),
        Rn = Pn("minutes"),
        Yn = Pn("hours"),
        qn = Pn("days"),
        Fn = Pn("months"),
        Wn = Pn("years");
    var Un = Math.round,
        Bn = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        };

    function Vn(e, t, n) {
        var i = Bt(e).abs(),
            r = Un(i.as("s")),
            s = Un(i.as("m")),
            o = Un(i.as("h")),
            a = Un(i.as("d")),
            l = Un(i.as("M")),
            u = Un(i.as("y")),
            c = (r <= Bn.ss ? ["s", r] : r < Bn.s && ["ss", r]) || s <= 1 && ["m"] || s < Bn.m && ["mm", s] || o <= 1 && ["h"] || o < Bn.h && ["hh", o] || a <= 1 && ["d"] || a < Bn.d && ["dd", a] || l <= 1 && ["M"] || l < Bn.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
        return c[2] = t, c[3] = 0 < +e, c[4] = n,
            function(e, t, n, i, r) {
                return r.relativeTime(t || 1, !!n, e, i)
            }.apply(null, c)
    }
    var $n = Math.abs;

    function zn(e) {
        return (0 < e) - (e < 0) || +e
    }

    function Gn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = $n(this._milliseconds) / 1e3,
            i = $n(this._days),
            r = $n(this._months);
        e = S(n / 60), t = S(e / 60), n %= 60, e %= 60;
        var s = S(r / 12),
            o = r %= 12,
            a = i,
            l = t,
            u = e,
            c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            d = this.asSeconds();
        if (!d) return "P0D";
        var h = d < 0 ? "-" : "",
            f = zn(this._months) !== zn(d) ? "-" : "",
            p = zn(this._days) !== zn(d) ? "-" : "",
            m = zn(this._milliseconds) !== zn(d) ? "-" : "";
        return h + "P" + (s ? f + s + "Y" : "") + (o ? f + o + "M" : "") + (a ? p + a + "D" : "") + (l || u || c ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (c ? m + c + "S" : "")
    }
    var Qn = It.prototype;
    return Qn.isValid = function() {
        return this._isValid
    }, Qn.abs = function() {
        var e = this._data;
        return this._milliseconds = bn(this._milliseconds), this._days = bn(this._days), this._months = bn(this._months), e.milliseconds = bn(e.milliseconds), e.seconds = bn(e.seconds), e.minutes = bn(e.minutes), e.hours = bn(e.hours), e.months = bn(e.months), e.years = bn(e.years), this
    }, Qn.add = function(e, t) {
        return wn(this, e, t, 1)
    }, Qn.subtract = function(e, t) {
        return wn(this, e, t, -1)
    }, Qn.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, i = this._milliseconds;
        if ("month" === (e = I(e)) || "quarter" === e || "year" === e) switch (t = this._days + i / 864e5, n = this._months + Cn(t), e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
        } else switch (t = this._days + Math.round(xn(this._months)), e) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return 24 * t + i / 36e5;
            case "minute":
                return 1440 * t + i / 6e4;
            case "second":
                return 86400 * t + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, Qn.asMilliseconds = En, Qn.asSeconds = Dn, Qn.asMinutes = kn, Qn.asHours = An, Qn.asDays = On, Qn.asWeeks = Mn, Qn.asMonths = Nn, Qn.asQuarters = In, Qn.asYears = Ln, Qn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12) : NaN
    }, Qn._bubble = function() {
        var e, t, n, i, r, s = this._milliseconds,
            o = this._days,
            a = this._months,
            l = this._data;
        return 0 <= s && 0 <= o && 0 <= a || s <= 0 && o <= 0 && a <= 0 || (s += 864e5 * Sn(xn(a) + o), a = o = 0), l.milliseconds = s % 1e3, e = S(s / 1e3), l.seconds = e % 60, t = S(e / 60), l.minutes = t % 60, n = S(t / 60), l.hours = n % 24, o += S(n / 24), a += r = S(Cn(o)), o -= Sn(xn(r)), i = S(a / 12), a %= 12, l.days = o, l.months = a, l.years = i, this
    }, Qn.clone = function() {
        return Bt(this)
    }, Qn.get = function(e) {
        return e = I(e), this.isValid() ? this[e + "s"]() : NaN
    }, Qn.milliseconds = jn, Qn.seconds = Hn, Qn.minutes = Rn, Qn.hours = Yn, Qn.days = qn, Qn.weeks = function() {
        return S(this.days() / 7)
    }, Qn.months = Fn, Qn.years = Wn, Qn.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(),
            n = Vn(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
    }, Qn.toISOString = Gn, Qn.toString = Gn, Qn.toJSON = Gn, Qn.locale = Zt, Qn.localeData = en, Qn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gn), Qn.lang = Jt, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), he("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), he("x", function(e, t, n) {
        n._d = new Date(C(e))
    }), h.version = "2.24.0", e = kt, h.fn = pn, h.min = function() {
        return Mt("isBefore", [].slice.call(arguments, 0))
    }, h.max = function() {
        return Mt("isAfter", [].slice.call(arguments, 0))
    }, h.now = function() {
        return Date.now ? Date.now() : +new Date
    }, h.utc = p, h.unix = function(e) {
        return kt(1e3 * e)
    }, h.months = function(e, t) {
        return yn(e, t, "months")
    }, h.isDate = o, h.locale = lt, h.invalid = v, h.duration = Bt, h.isMoment = w, h.weekdays = function(e, t, n) {
        return _n(e, t, n, "weekdays")
    }, h.parseZone = function() {
        return kt.apply(null, arguments).parseZone()
    }, h.localeData = ct, h.isDuration = Lt, h.monthsShort = function(e, t) {
        return yn(e, t, "monthsShort")
    }, h.weekdaysMin = function(e, t, n) {
        return _n(e, t, n, "weekdaysMin")
    }, h.defineLocale = ut, h.updateLocale = function(e, t) {
        if (null != t) {
            var n, i, r = it;
            null != (i = at(e)) && (r = i._config), (n = new O(t = A(r, t))).parentLocale = rt[e], rt[e] = n, lt(e)
        } else null != rt[e] && (null != rt[e].parentLocale ? rt[e] = rt[e].parentLocale : null != rt[e] && delete rt[e]);
        return rt[e]
    }, h.locales = function() {
        return i(rt)
    }, h.weekdaysShort = function(e, t, n) {
        return _n(e, t, n, "weekdaysShort")
    }, h.normalizeUnits = I, h.relativeTimeRounding = function(e) {
        return void 0 === e ? Un : "function" == typeof e && (Un = e, !0)
    }, h.relativeTimeThreshold = function(e, t) {
        return void 0 !== Bn[e] && (void 0 === t ? Bn[e] : (Bn[e] = t, "s" === e && (Bn.ss = t - 1), !0))
    }, h.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, h.prototype = pn, h.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, h.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? 11 <= e ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), h.locale("en"), h
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function s(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function y(e, t) {
        if (1 !== e.nodeType) return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function _(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function b(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
        var t = y(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll)/.test(n + r + i) ? e : b(_(e))
    }

    function w(e) {
        var t = e && e.offsetParent,
            n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === y(t, "position") ? w(t) : t : window.document.documentElement
    }

    function c(e) {
        return null === e.parentNode ? e : c(e.parentNode)
    }

    function S(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            s = document.createRange();
        s.setStart(i, 0), s.setEnd(r, 0);
        var o, a, l = s.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (o = l).nodeName) || "HTML" !== a && w(o.firstElementChild) !== o ? w(l) : l;
        var u = c(e);
        return u.host ? S(u.host, t) : S(e, c(t).host)
    }

    function C(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var r = window.document.documentElement;
        return (window.document.scrollingElement || r)[n]
    }

    function d(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
    }

    function i(e, t, n, i) {
        return L(t["offset" + e], n["client" + e], n["offset" + e], U() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function x() {
        var e = window.document.body,
            t = window.document.documentElement,
            n = U() && window.getComputedStyle(t);
        return {
            height: i("Height", e, t, n),
            width: i("Width", e, t, n)
        }
    }

    function T(e) {
        return V({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function E(e) {
        var t = {};
        if (U()) try {
            t = e.getBoundingClientRect();
            var n = C(e, "top"),
                i = C(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i
        } catch (e) {} else t = e.getBoundingClientRect();
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            s = "HTML" === e.nodeName ? x() : {},
            o = s.width || e.clientWidth || r.right - r.left,
            a = s.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - o,
            u = e.offsetHeight - a;
        if (l || u) {
            var c = y(e);
            l -= d(c, "x"), u -= d(c, "y"), r.width -= l, r.height -= u
        }
        return T(r)
    }

    function D(e, t) {
        var n = U(),
            i = "HTML" === t.nodeName,
            r = E(e),
            s = E(t),
            o = b(e),
            a = y(t),
            l = +a.borderTopWidth.split("px")[0],
            u = +a.borderLeftWidth.split("px")[0],
            c = T({
                top: r.top - s.top - l,
                left: r.left - s.left - u,
                width: r.width,
                height: r.height
            });
        if (c.marginTop = 0, c.marginLeft = 0, !n && i) {
            var d = +a.marginTop.split("px")[0],
                h = +a.marginLeft.split("px")[0];
            c.top -= l - d, c.bottom -= l - d, c.left -= u - h, c.right -= u - h, c.marginTop = d, c.marginLeft = h
        }
        return (n ? t.contains(o) : t === o && "BODY" !== o.nodeName) && (c = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                r = C(t, "top"),
                s = C(t, "left"),
                o = i ? -1 : 1;
            return e.top += r * o, e.bottom += r * o, e.left += s * o, e.right += s * o, e
        }(c, t)), c
    }

    function f(e, t, n, i) {
        var r, s, o, a, l, u, c, d = {
                top: 0,
                left: 0
            },
            h = S(e, t);
        if ("viewport" === i) r = h, s = window.document.documentElement, o = D(r, s), a = L(s.clientWidth, window.innerWidth || 0), l = L(s.clientHeight, window.innerHeight || 0), u = C(s), c = C(s, "left"), d = T({
            top: u - o.top + o.marginTop,
            left: c - o.left + o.marginLeft,
            width: a,
            height: l
        });
        else {
            var f;
            "scrollParent" === i ? "BODY" === (f = b(_(e))).nodeName && (f = window.document.documentElement) : f = "window" === i ? window.document.documentElement : i;
            var p = D(f, h);
            if ("HTML" !== f.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === y(t, "position") || e(_(t)))
                }(h)) d = p;
            else {
                var m = x(),
                    g = m.height,
                    v = m.width;
                d.top += p.top - p.marginTop, d.bottom = g + p.top, d.left += p.left - p.marginLeft, d.right = v + p.left
            }
        }
        return d.left += n, d.top += n, d.right -= n, d.bottom -= n, d
    }

    function a(e, t, i, n, r, s) {
        var o = 5 < arguments.length && void 0 !== s ? s : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = f(i, n, o, r),
            l = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            u = Object.keys(l).map(function(e) {
                return V({
                    key: e
                }, l[e], {
                    area: (t = l[e]).width * t.height
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = u.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            d = 0 < c.length ? c[0].key : u[0].key,
            h = e.split("-")[1];
        return d + (h ? "-" + h : "")
    }

    function l(e, t, n) {
        return D(n, S(t, n))
    }

    function p(e) {
        var t = window.getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function k(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function A(e, t, n) {
        n = n.split("-")[0];
        var i = p(e),
            r = {
                width: i.width,
                height: i.height
            },
            s = -1 !== ["right", "left"].indexOf(n),
            o = s ? "top" : "left",
            a = s ? "left" : "top",
            l = s ? "height" : "width",
            u = s ? "width" : "height";
        return r[o] = t[o] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[k(a)], r
    }

    function O(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function M(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = O(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && s(t) && (n.offsets.popper = T(n.offsets.popper), n.offsets.reference = T(n.offsets.reference), n = t(n, e))
        }), n
    }

    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var r = t[i],
                s = r ? "" + r + n : e;
            if (void 0 !== window.document.body.style[s]) return s
        }
        return null
    }

    function t(e, t, n, i) {
        n.updateBound = i, window.addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = b(e);
        return function e(t, n, i, r) {
            var s = "BODY" === t.nodeName,
                o = s ? window : t;
            o.addEventListener(n, i, {
                passive: !0
            }), s || e(b(o.parentNode), n, i, r), r.push(o)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function n() {
        var t;
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, t = this.state, window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function h(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function u(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && h(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function m(e, t, n) {
        var i = O(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var s = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return r
    }

    function r(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            i = z.indexOf(e),
            r = z.slice(i + 1).concat(z.slice(0, i));
        return n ? r.reverse() : r
    }

    function g(e, r, s, t) {
        var o = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(O(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === i ? [n] : [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))];
        return (u = u.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r, s = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +s[1],
                        a = s[2];
                    if (!o) return e;
                    if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? o : ("vh" === a ? L(document.documentElement.clientHeight, window.innerHeight || 0) : L(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    switch (a) {
                        case "%p":
                            r = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            r = i
                    }
                    return T(r)[t] / 100 * o
                }(e, n, r, s)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                h(e) && (o[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), o
    }
    for (var v = Math.min, I = Math.floor, L = Math.max, o = ["native code", "[object MutationObserverConstructor]"], P = "undefined" != typeof window, j = ["Edge", "Trident", "Firefox"], H = 0, R = 0; R < j.length; R += 1)
        if (P && 0 <= navigator.userAgent.indexOf(j[R])) {
            H = 1;
            break
        }
    function Y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var q, F, W = P && (F = window.MutationObserver, o.some(function(e) {
            return -1 < (F || "").toString().indexOf(e)
        })) ? function(e) {
            var t = !1,
                n = 0,
                i = document.createElement("span");
            return new MutationObserver(function() {
                    e(), t = !1
                }).observe(i, {
                    attributes: !0
                }),
                function() {
                    t || (t = !0, i.setAttribute("x-index", n), ++n)
                }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, H))
            }
        },
        U = function() {
            return null == q && (q = -1 !== navigator.appVersion.indexOf("MSIE 10")), q
        },
        B = function(e, t, n) {
            return t && J(e.prototype, t), n && J(e, n), e
        },
        V = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        $ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        z = $.slice(3),
        G = "flip",
        Q = "clockwise",
        K = "counterclockwise",
        X = (B(Z, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = l(this.state, this.popper, this.reference), e.placement = a(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = M(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return n.call(this)
            }
        }]), Z);

    function Z(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, Z), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }, this.update = W(this.update.bind(this)), this.options = V({}, Z.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e.jquery ? e[0] : e, this.popper = t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(V({}, Z.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = V({}, Z.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return V({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }), this.modifiers.forEach(function(e) {
            e.enabled && s(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r
    }

    function J(e, t) {
        for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
    return X.Utils = ("undefined" == typeof window ? global : window).PopperUtils, X.placements = $, X.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            s = r.reference,
                            o = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            u = a ? "width" : "height",
                            c = {
                                start: Y({}, l, s[l]),
                                end: Y({}, l, s[l] + s[u] - o[u])
                            };
                        e.offsets.popper = V({}, o, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        s = e.offsets,
                        o = s.popper,
                        a = s.reference,
                        l = r.split("-")[0];
                    return n = h(+i) ? [+i, 0] : g(i, o, a, l), "left" === l ? (o.top += n[0], o.left -= n[1]) : "right" === l ? (o.top += n[0], o.left += n[1]) : "top" === l ? (o.left += n[0], o.top -= n[1]) : "bottom" === l && (o.left += n[0], o.top += n[1]), e.popper = o, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || w(e.instance.popper);
                    e.instance.reference === t && (t = w(t));
                    var r = f(e.instance.popper, e.instance.reference, i.padding, t);
                    i.boundaries = r;
                    var n = i.priority,
                        s = e.offsets.popper,
                        o = {
                            primary: function(e) {
                                var t = s[e];
                                return s[e] < r[e] && !i.escapeWithReference && (t = L(s[e], r[e])), Y({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top",
                                    n = s[t];
                                return s[e] > r[e] && !i.escapeWithReference && (n = v(s[t], r[e] - ("right" === e ? s.width : s.height))), Y({}, t, n)
                            }
                        };
                    return n.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        s = V({}, s, o[t](e))
                    }), e.offsets.popper = s, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        s = I,
                        o = -1 !== ["top", "bottom"].indexOf(r),
                        a = o ? "right" : "bottom",
                        l = o ? "left" : "top",
                        u = o ? "width" : "height";
                    return n[a] < s(i[l]) && (e.offsets.popper[l] = s(i[l]) - n[u]), n[l] > s(i[a]) && (e.offsets.popper[l] = s(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!m(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var n = t.element;
                    if ("string" == typeof n) {
                        if (!(n = e.instance.popper.querySelector(n))) return e
                    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var i = e.placement.split("-")[0],
                        r = e.offsets,
                        s = r.popper,
                        o = r.reference,
                        a = -1 !== ["left", "right"].indexOf(i),
                        l = a ? "height" : "width",
                        u = a ? "top" : "left",
                        c = a ? "left" : "top",
                        d = a ? "bottom" : "right",
                        h = p(n)[l];
                    o[d] - h < s[u] && (e.offsets.popper[u] -= s[u] - (o[d] - h)), o[u] + h > s[d] && (e.offsets.popper[u] += o[u] + h - s[d]);
                    var f = o[u] + o[l] / 2 - h / 2 - T(e.offsets.popper)[u];
                    return f = L(v(s[l] - h, f), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[u] = Math.round(f), e.offsets.arrow[c] = "", e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(p, m) {
                    if (e(p.instance.modifiers, "inner")) return p;
                    if (p.flipped && p.placement === p.originalPlacement) return p;
                    var g = f(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement),
                        v = p.placement.split("-")[0],
                        y = k(v),
                        _ = p.placement.split("-")[1] || "",
                        b = [];
                    switch (m.behavior) {
                        case G:
                            b = [v, y];
                            break;
                        case Q:
                            b = r(v);
                            break;
                        case K:
                            b = r(v, !0);
                            break;
                        default:
                            b = m.behavior
                    }
                    return b.forEach(function(e, t) {
                        if (v !== e || b.length === t + 1) return p;
                        v = p.placement.split("-")[0], y = k(v);
                        var n, i = p.offsets.popper,
                            r = p.offsets.reference,
                            s = I,
                            o = "left" === v && s(i.right) > s(r.left) || "right" === v && s(i.left) < s(r.right) || "top" === v && s(i.bottom) > s(r.top) || "bottom" === v && s(i.top) < s(r.bottom),
                            a = s(i.left) < s(g.left),
                            l = s(i.right) > s(g.right),
                            u = s(i.top) < s(g.top),
                            c = s(i.bottom) > s(g.bottom),
                            d = "left" === v && a || "right" === v && l || "top" === v && u || "bottom" === v && c,
                            h = -1 !== ["top", "bottom"].indexOf(v),
                            f = !!m.flipVariations && (h && "start" === _ && a || h && "end" === _ && l || !h && "start" === _ && u || !h && "end" === _ && c);
                        (o || d || f) && (p.flipped = !0, (o || d) && (v = b[t + 1]), f && (_ = "end" === (n = _) ? "start" : "start" === n ? "end" : n), p.placement = v + (_ ? "-" + _ : ""), p.offsets.popper = V({}, p.offsets.popper, A(p.instance.popper, p.offsets.reference, p.placement)), p = M(p.instance.modifiers, p, "flip"))
                    }), p
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        s = i.reference,
                        o = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[o ? "left" : "top"] = s[t] - (a ? r[o ? "width" : "height"] : 0), e.placement = k(t), e.offsets.popper = T(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!m(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = O(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        s = O(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var o, a, l = void 0 === s ? t.gpuAcceleration : s,
                        u = E(w(e.instance.popper)),
                        c = {
                            position: r.position
                        },
                        d = {
                            left: I(r.left),
                            top: I(r.top),
                            bottom: I(r.bottom),
                            right: I(r.right)
                        },
                        h = "bottom" === n ? "top" : "bottom",
                        f = "right" === i ? "left" : "right",
                        p = N("transform");
                    if (a = "bottom" == h ? -u.height + d.bottom : d.top, o = "right" == f ? -u.width + d.right : d.left, l && p) c[p] = "translate3d(" + o + "px, " + a + "px, 0)", c[h] = 0, c[f] = 0, c.willChange = "transform";
                    else {
                        var m = "bottom" == h ? -1 : 1,
                            g = "right" == f ? -1 : 1;
                        c[h] = a * m, c[f] = o * g, c.willChange = h + ", " + f
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = V({}, v, e.attributes), e.styles = V({}, c, e.styles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return u(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                        !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                    }), e.offsets.arrow && u(e.arrowElement, e.offsets.arrow), e;
                    var t, n
                },
                onLoad: function(e, t, n, i, r) {
                    var s = l(0, t, e),
                        o = a(n.placement, s, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", o), u(t, {
                        position: "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, X
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(s) {
    var i = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1500,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="notify-alert alert alert-{0}" role="alert">   <button type="button" aria-hidden="true" class="close" data-notify="dismiss">       <i class="fs icon-close"></i>   </button>   <div class="row row-10">       <div class="col-2 align-self-center text-center"><span data-notify="icon"></span></div>        <div class="col-10">           <span data-notify="title">{1}</span>            <span data-notify="message">{2}</span>           <div class="progress" data-notify="progressbar">               <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>           </div>           <a href="{3}" target="{4}" data-notify="url"></a>       </div>   </div></div>'
    };

    function n(e, t, n) {
        t = {
            content: {
                message: "object" == typeof t ? t.message : t,
                title: t.title ? t.title : "",
                icon: t.icon ? t.icon : "",
                url: t.url ? t.url : "#",
                target: t.target ? t.target : "-"
            }
        };
        n = s.extend(!0, {}, t, n), this.settings = s.extend(!0, {}, i, n), this._defaults = i, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), this.init()
    }
    String.format = function() {
        for (var e = arguments[0], t = 1; t < arguments.length; t++) e = e.replace(RegExp("\\{" + (t - 1) + "\\}", "gm"), arguments[t]);
        return e
    }, s.extend(n.prototype, {
        init: function() {
            var o = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function(e, t) {
                    var n = {};
                    for (var e in "string" == typeof e ? n[e] = t : n = e, n) switch (e) {
                        case "type":
                            this.$ele.removeClass("alert-" + o.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + o.settings.type), o.settings.type = n[e], this.$ele.addClass("alert-" + n[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + n[e]);
                            break;
                        case "icon":
                            var i = this.$ele.find('[data-notify="icon"]');
                            "class" == o.settings.icon_type.toLowerCase() ? i.removeClass(o.settings.content.icon).addClass(n[e]) : (i.is("img") || i.find("img"), i.attr("src", n[e]));
                            break;
                        case "progress":
                            var r = o.settings.delay - o.settings.delay * (n[e] / 100);
                            this.$ele.data("notify-delay", r), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", n[e]).css("width", n[e] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", n[e]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", n[e]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + e + '"]').html(n[e])
                    }
                    var s = this.$ele.outerHeight() + parseInt(o.settings.spacing) + parseInt(o.settings.offset.y);
                    o.reposition(s)
                },
                close: function() {
                    o.close()
                }
            }
        },
        buildNotify: function() {
            var e = this.settings.content;
            this.$ele = s(String.format(this.settings.template, this.settings.type, e.title, e.message, e.url, e.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function() {
            "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        },
        styleURL: function() {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "100%",
                zIndex: this.settings.z_index + 1
            }), this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        },
        placement: function() {
            var n = this,
                e = this.settings.offset.y,
                t = {
                    display: "inline-block",
                    margin: "0px auto",
                    position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                    transition: "all .5s ease-in-out",
                    zIndex: this.settings.z_index
                },
                i = !1,
                r = this.settings;
            switch (s('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
                return e = Math.max(e, parseInt(s(this).css(r.placement.from)) + parseInt(s(this).outerHeight()) + parseInt(r.spacing))
            }), 1 == this.settings.newest_on_top && (e = this.settings.offset.y), t[this.settings.placement.from] = e + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    t[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case "center":
                    t.left = 0, t.right = 0
            }
            this.$ele.css(t).addClass(this.settings.animate.enter), s.each(Array("webkit", "moz", "o", "ms", ""), function(e, t) {
                n.$ele[0].style[t + "AnimationIterationCount"] = 1
            }), s(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(e)), s.isFunction(n.settings.onShow) && n.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function(e) {
                i = !0
            }).one(this.animations.end, function(e) {
                s.isFunction(n.settings.onShown) && n.settings.onShown.call(this)
            }), setTimeout(function() {
                i || s.isFunction(n.settings.onShown) && n.settings.onShown.call(this)
            }, 600)
        },
        bind: function() {
            var n = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function() {
                    n.close()
                }), this.$ele.mouseover(function(e) {
                    s(this).data("data-hover", "true")
                }).mouseout(function(e) {
                    s(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), 0 < this.settings.delay) {
                n.$ele.data("notify-delay", n.settings.delay);
                var i = setInterval(function() {
                    var e = parseInt(n.$ele.data("notify-delay")) - n.settings.timer;
                    if ("false" === n.$ele.data("data-hover") && "pause" == n.settings.mouse_over || "pause" != n.settings.mouse_over) {
                        var t = (n.settings.delay - e) / n.settings.delay * 100;
                        n.$ele.data("notify-delay", e), n.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", t).css("width", t + "%")
                    }
                    e <= -n.settings.timer && (clearInterval(i), n.close())
                }, n.settings.timer)
            }
        },
        close: function() {
            var t = this,
                e = parseInt(this.$ele.css(this.settings.placement.from)),
                n = !1;
            this.$ele.data("closing", "true").addClass(this.settings.animate.exit), t.reposition(e), s.isFunction(t.settings.onClose) && t.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function(e) {
                n = !0
            }).one(this.animations.end, function(e) {
                s(this).remove(), s.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this)
            }), setTimeout(function() {
                n || (t.$ele.remove(), t.settings.onClosed && t.settings.onClosed(t.$ele))
            }, 600)
        },
        reposition: function(e) {
            var t = this,
                n = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                i = this.$ele.nextAll(n);
            1 == this.settings.newest_on_top && (i = this.$ele.prevAll(n)), i.each(function() {
                s(this).css(t.settings.placement.from, e), e = parseInt(e) + parseInt(t.settings.spacing) + s(this).outerHeight()
            })
        }
    }), s.notify = function(e, t) {
        return new n(this, e, t).notify
    }, s.notifyDefaults = function(e) {
        return i = s.extend(!0, {}, i, e)
    }, s.notifyClose = function(e) {
        void 0 === e || "all" == e ? s("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s('[data-notify-position="' + e + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
}),
function(T, E, D) {
    "use strict";
    ! function s(o, a, l) {
        function u(n, e) {
            if (!a[n]) {
                if (!o[n]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(n, !0);
                    if (c) return c(n, !0);
                    var i = new Error("Cannot find module '" + n + "'");
                    throw i.code = "MODULE_NOT_FOUND", i
                }
                var r = a[n] = {
                    exports: {}
                };
                o[n][0].call(r.exports, function(e) {
                    var t = o[n][1][e];
                    return u(t || e)
                }, r, r.exports, s, o, a, l)
            }
            return a[n].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
        return u
    }({
        1: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.default = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonClass: "btn-primary",
                cancelButtonText: "Cancel",
                cancelButtonClass: "btn-default",
                containerClass: "",
                titleClass: "",
                textClass: "",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            }
        }, {}],
        2: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.handleCancel = n.handleConfirm = n.handleButton = D;
            e("./handle-swal-dom");
            var h = e("./handle-dom"),
                f = function(e, t) {
                    var n = !0;
                    (0, h.hasClass)(e, "show-input") && (n = (n = e.querySelector("input").value) || ""), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                },
                p = function(e, t) {
                    var n = String(t.doneFunction).replace(/\s/g, "");
                    "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10) && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                };
            n.handleButton = function(e, t, n) {
                var i, r = e || T.event,
                    s = r.target || r.srcElement,
                    o = -1 !== s.className.indexOf("confirm"),
                    a = -1 !== s.className.indexOf("sweet-overlay"),
                    l = (0, h.hasClass)(n, "visible"),
                    u = t.doneFunction && "true" === n.getAttribute("data-has-done-function");
                switch (o && t.confirmButtonColor && (i = t.confirmButtonColor, colorLuminance(i, -.04), colorLuminance(i, -.14)), r.type) {
                    case "click":
                        var c = n === s,
                            d = (0, h.isDescendant)(n, s);
                        if (!c && !d && l && !t.allowOutsideClick) break;
                        o && u && l ? f(n, t) : u && l || a ? p(n, t) : (0, h.isDescendant)(n, s) && "BUTTON" === s.tagName && sweetAlert.close()
                }
            }, n.handleConfirm = f, n.handleCancel = p
        }, {
            "./handle-dom": 3,
            "./handle-swal-dom": 5
        }],
        3: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });

            function i(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            }

            function r(e) {
                e.style.opacity = "", e.style.display = "block"
            }

            function s(e) {
                e.style.opacity = "", e.style.display = "none"
            }
            n.hasClass = i, n.addClass = function(e, t) {
                i(e, t) || (e.className += " " + t)
            }, n.removeClass = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (i(e, t)) {
                    for (; 0 <= n.indexOf(" " + t + " ");) n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            }, n.escapeHtml = function(e) {
                var t = E.createElement("div");
                return t.appendChild(E.createTextNode(e)), t.innerHTML
            }, n._show = r, n.show = function(e) {
                if (e && !e.length) return r(e);
                for (var t = 0; t < e.length; ++t) r(e[t])
            }, n._hide = s, n.hide = function(e) {
                if (e && !e.length) return s(e);
                for (var t = 0; t < e.length; ++t) s(e[t])
            }, n.isDescendant = function(e, t) {
                for (var n = t.parentNode; null !== n;) {
                    if (n === e) return !0;
                    n = n.parentNode
                }
                return !1
            }, n.getTopMargin = function(e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
            }, n.fadeIn = function(t, n) {
                if (+t.style.opacity < 1) {
                    n = n || 16, t.style.opacity = 0, t.style.display = "block";
                    var i = +new Date;
                    ! function e() {
                        t.style.opacity = +t.style.opacity + (new Date - i) / 100, i = +new Date, +t.style.opacity < 1 && setTimeout(e, n)
                    }()
                }
                t.style.display = "block"
            }, n.fadeOut = function(t, n) {
                n = n || 16, t.style.opacity = 1;
                var i = +new Date;
                ! function e() {
                    t.style.opacity = t.style.opacity - (new Date - i) / 100, i = +new Date, 0 < +t.style.opacity ? setTimeout(e, n) : t.style.display = "none"
                }()
            }, n.fireClick = function(e) {
                if ("function" == typeof MouseEvent) {
                    var t = new MouseEvent("click", {
                        view: T,
                        bubbles: !1,
                        cancelable: !0
                    });
                    e.dispatchEvent(t)
                } else if (E.createEvent) {
                    var n = E.createEvent("MouseEvents");
                    n.initEvent("click", !1, !1), e.dispatchEvent(n)
                } else E.createEventObject ? e.fireEvent("onclick") : "function" == typeof e.onclick && e.onclick()
            }, n.stopEventPropagation = function(e) {
                "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : T.event && T.event.hasOwnProperty("cancelBubble") && (T.event.cancelBubble = !0)
            }
        }, {}],
        4: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var d = e("./handle-dom"),
                h = e("./handle-swal-dom");
            n.default = function(e, t, n) {
                var i = e || T.event,
                    r = i.keyCode || i.which,
                    s = n.querySelector("button.confirm"),
                    o = n.querySelector("button.cancel"),
                    a = n.querySelectorAll("button[tabindex]");
                if (-1 !== [9, 13, 32, 27].indexOf(r)) {
                    for (var l = i.target || i.srcElement, u = -1, c = 0; c < a.length; c++)
                        if (l === a[c]) {
                            u = c;
                            break
                        }
                    9 === r ? (l = -1 === u ? s : u === a.length - 1 ? a[0] : a[u + 1], (0, d.stopEventPropagation)(i), l.focus(), t.confirmButtonColor && (0, h.setFocusStyle)(l, t.confirmButtonColor)) : 13 === r ? ("INPUT" === l.tagName && (l = s).focus(), l = -1 === u ? s : D) : 27 === r && !0 === t.allowEscapeKey ? (l = o, (0, d.fireClick)(l, i)) : l = D
                }
            }
        }, {
            "./handle-dom": 3,
            "./handle-swal-dom": 5
        }],
        5: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.fixVerticalPosition = n.resetInputError = n.resetInput = n.openModal = n.getInput = n.getOverlay = n.getModal = n.sweetAlertInitialize = D;
            var r = e("./handle-dom"),
                i = o(e("./default-params")),
                s = o(e("./injected-html"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a() {
                var e = E.createElement("div");
                for (e.innerHTML = s.default; e.firstChild;) E.body.appendChild(e.firstChild)
            }

            function l() {
                var e = E.querySelector(".sweet-alert");
                return e || (a(), e = l()), e
            }

            function u() {
                var e = l();
                if (e) return e.querySelector("input")
            }

            function c() {
                return E.querySelector(".sweet-overlay")
            }
            var d = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = l(),
                    n = t.querySelector(".sa-input-error");
                (0, r.removeClass)(n, "show");
                var i = t.querySelector(".form-group");
                (0, r.removeClass)(i, "has-error")
            };
            n.sweetAlertInitialize = a, n.getModal = l, n.getOverlay = c, n.getInput = u, n.openModal = function(e) {
                var t = l();
                (0, r.fadeIn)(c(), 10), (0, r.show)(t), (0, r.addClass)(t, "showSweetAlert"), (0, r.removeClass)(t, "hideSweetAlert"), T.previousActiveElement = E.activeElement, t.querySelector("button.confirm").focus(), setTimeout(function() {
                    (0, r.addClass)(t, "visible")
                }, 500);
                var n = t.getAttribute("data-timer");
                if ("null" !== n && "" !== n) {
                    var i = e;
                    t.timeout = setTimeout(function() {
                        (i ? "true" === t.getAttribute("data-has-done-function") : null) ? i(null): sweetAlert.close()
                    }, n)
                }
            }, n.resetInput = function() {
                var e = l(),
                    t = u();
                (0, r.removeClass)(e, "show-input"), t.value = i.default.inputValue, t.setAttribute("type", i.default.inputType), t.setAttribute("placeholder", i.default.inputPlaceholder), d()
            }, n.resetInputError = d, n.fixVerticalPosition = function() {
                l().style.marginTop = (0, r.getTopMargin)(l())
            }
        }, {
            "./default-params": 1,
            "./handle-dom": 3,
            "./injected-html": 6
        }],
        6: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.default = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h3>Title</h3>\n    <p class="lead text-muted">Text</p>\n    <div class="form-group">\n      <input type="text" class="form-control" tabIndex="3" />\n      <span class="sa-input-error help-block">\n        <span class="glyphicon glyphicon-exclamation-sign"></span> <span class="sa-help-text">Not valid</span>\n      </span>\n    </div><div class="sa-button-container">\n     <div class="sa-confirm-button-container">\n        <button class="confirm btn" tabIndex="1">OK</button><button class="cancel btn" tabIndex="2">Cancel</button>\n <div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>'
        }, {}],
        7: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                g = e("./utils"),
                v = e("./handle-swal-dom"),
                y = e("./handle-dom"),
                _ = ["error", "warning", "info", "success", "input", "prompt"];
            n.default = function(r) {
                var s = (0, v.getModal)(),
                    e = s.querySelector("h3"),
                    t = s.querySelector("p"),
                    n = s.querySelector("button.cancel"),
                    i = s.querySelector("button.confirm");
                if (e.innerHTML = r.html ? r.title : (0, y.escapeHtml)(r.title).split("\n").join("<br>"), t.innerHTML = r.html ? r.text : (0, y.escapeHtml)(r.text || "").split("\n").join("<br>"), r.text && (0, y.show)(t), r.customClass)(0, y.addClass)(s, r.customClass), s.setAttribute("data-custom-class", r.customClass);
                else {
                    var o = s.getAttribute("data-custom-class");
                    (0, y.removeClass)(s, o), s.setAttribute("data-custom-class", "")
                }
                if ((0, y.hide)(s.querySelectorAll(".sa-icon")), r.type && !(0, g.isIE8)()) {
                    var a = function() {
                        for (var e = !1, t = 0; t < _.length; t++)
                            if (r.type === _[t]) {
                                e = !0;
                                break
                            }
                        if (!e) return logStr("Unknown alert type: " + r.type), {
                            v: !1
                        };
                        var n = void 0; - 1 !== ["success", "error", "warning", "info"].indexOf(r.type) && (n = s.querySelector(".sa-icon.sa-" + r.type), (0, y.show)(n));
                        var i = (0, v.getInput)();
                        switch (r.type) {
                            case "success":
                                (0, y.addClass)(n, "animate"), (0, y.addClass)(n.querySelector(".sa-tip"), "animateSuccessTip"), (0, y.addClass)(n.querySelector(".sa-long"), "animateSuccessLong");
                                break;
                            case "error":
                                (0, y.addClass)(n, "animateErrorIcon"), (0, y.addClass)(n.querySelector(".sa-x-mark"), "animateXMark");
                                break;
                            case "warning":
                                (0, y.addClass)(n, "pulseWarning"), (0, y.addClass)(n.querySelector(".sa-body"), "pulseWarningIns"), (0, y.addClass)(n.querySelector(".sa-dot"), "pulseWarningIns");
                                break;
                            case "input":
                            case "prompt":
                                i.setAttribute("type", r.inputType), i.value = r.inputValue, i.setAttribute("placeholder", r.inputPlaceholder), (0, y.addClass)(s, "show-input"), setTimeout(function() {
                                    i.focus(), i.addEventListener("keyup", swal.resetInputError)
                                }, 400)
                        }
                    }();
                    if ("object" === (void 0 === a ? "undefined" : m(a))) return a.v
                }
                if (r.imageUrl) {
                    var l = s.querySelector(".sa-icon.sa-custom");
                    l.style.backgroundImage = "url(" + r.imageUrl + ")", (0, y.show)(l);
                    var u = 80,
                        c = 80;
                    if (r.imageSize) {
                        var d = r.imageSize.toString().split("x"),
                            h = d[0],
                            f = d[1];
                        h && f ? (u = h, c = f) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + r.imageSize)
                    }
                    l.setAttribute("style", l.getAttribute("style") + "width:" + u + "px; height:" + c + "px")
                }
                s.setAttribute("data-has-cancel-button", r.showCancelButton), r.showCancelButton ? n.style.display = "inline-block" : (0, y.hide)(n), s.setAttribute("data-has-confirm-button", r.showConfirmButton), r.showConfirmButton ? i.style.display = "inline-block" : (0, y.hide)(i), r.cancelButtonText && (n.innerHTML = (0, y.escapeHtml)(r.cancelButtonText)), r.confirmButtonText && (i.innerHTML = (0, y.escapeHtml)(r.confirmButtonText)), i.className = "confirm btn", (0, y.addClass)(s, r.containerClass), (0, y.addClass)(i, r.confirmButtonClass), (0, y.addClass)(n, r.cancelButtonClass), (0, y.addClass)(e, r.titleClass), (0, y.addClass)(t, r.textClass), s.setAttribute("data-allow-outside-click", r.allowOutsideClick);
                var p = !!r.doneFunction;
                s.setAttribute("data-has-done-function", p), r.animation ? "string" == typeof r.animation ? s.setAttribute("data-animation", r.animation) : s.setAttribute("data-animation", "pop") : s.setAttribute("data-animation", "none"), s.setAttribute("data-timer", r.timer)
            }
        }, {
            "./handle-dom": 3,
            "./handle-swal-dom": 5,
            "./utils": 8
        }],
        8: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.extend = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }, n.isIE8 = function() {
                return T.attachEvent && !T.addEventListener
            }, n.logStr = function(e) {
                T.console && T.console.log("SweetAlert: " + e)
            }
        }, {}],
        9: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var p, m, r, g, v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                y = e("./modules/handle-dom"),
                _ = e("./modules/utils"),
                b = e("./modules/handle-swal-dom"),
                w = e("./modules/handle-click"),
                S = i(e("./modules/handle-key")),
                C = i(e("./modules/default-params")),
                x = i(e("./modules/set-params"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n.default = r = g = function(e, t, n) {
                var i = e;

                function r(e) {
                    return i[e] === D ? C.default[e] : i[e]
                }
                if ((0, y.addClass)(E.body, "stop-scrolling"), (0, b.resetInput)(), i === D) return (0, _.logStr)("SweetAlert expects at least 1 attribute!"), !1;
                var s = (0, _.extend)({}, C.default);
                switch (void 0 === i ? "undefined" : v(i)) {
                    case "string":
                        s.title = i, s.text = t || "", s.type = n || "";
                        break;
                    case "object":
                        if (i.title === D) return (0, _.logStr)('Missing "title" argument!'), !1;
                        for (var o in s.title = i.title, C.default) s[o] = r(o);
                        s.confirmButtonText = s.showCancelButton ? "Confirm" : C.default.confirmButtonText, s.confirmButtonText = r("confirmButtonText"), s.doneFunction = t || null;
                        break;
                    default:
                        return (0, _.logStr)('Unexpected type of argument! Expected "string" or "object", got ' + (void 0 === i ? "undefined" : v(i))), !1
                }(0, x.default)(s), (0, b.fixVerticalPosition)(), (0, b.openModal)(t);
                for (var a = (0, b.getModal)(), l = a.querySelectorAll("button"), u = ["onclick"], c = function(e) {
                        return (0, w.handleButton)(e, s, a)
                    }, d = 0; d < l.length; d++)
                    for (var h = 0; h < u.length; h++) {
                        var f = u[h];
                        l[d][f] = c
                    }(0, b.getOverlay)().onclick = c, p = T.onkeydown;
                T.onkeydown = function(e) {
                    return (0, S.default)(e, s, a)
                }, T.onfocus = function() {
                    setTimeout(function() {
                        m !== D && (m.focus(), m = D)
                    }, 0)
                }, g.enableButtons()
            }, r.setDefaults = g.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" !== (void 0 === e ? "undefined" : v(e))) throw new Error("userParams has to be a object");
                (0, _.extend)(C.default, e)
            }, r.close = g.close = function() {
                var t = (0, b.getModal)();
                (0, y.fadeOut)((0, b.getOverlay)(), 5), (0, y.fadeOut)(t, 5), (0, y.removeClass)(t, "showSweetAlert"), (0, y.addClass)(t, "hideSweetAlert"), (0, y.removeClass)(t, "visible");
                var e = t.querySelector(".sa-icon.sa-success");
                (0, y.removeClass)(e, "animate"), (0, y.removeClass)(e.querySelector(".sa-tip"), "animateSuccessTip"), (0, y.removeClass)(e.querySelector(".sa-long"), "animateSuccessLong");
                var n = t.querySelector(".sa-icon.sa-error");
                (0, y.removeClass)(n, "animateErrorIcon"), (0, y.removeClass)(n.querySelector(".sa-x-mark"), "animateXMark");
                var i = t.querySelector(".sa-icon.sa-warning");
                return (0, y.removeClass)(i, "pulseWarning"), (0, y.removeClass)(i.querySelector(".sa-body"), "pulseWarningIns"), (0, y.removeClass)(i.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                    var e = t.getAttribute("data-custom-class");
                    (0, y.removeClass)(t, e)
                }, 300), (0, y.removeClass)(E.body, "stop-scrolling"), T.onkeydown = p, T.previousActiveElement && T.previousActiveElement.focus(), m = D, clearTimeout(t.timeout), !0
            }, r.showInputError = g.showInputError = function(e) {
                var t = (0, b.getModal)(),
                    n = t.querySelector(".sa-input-error");
                (0, y.addClass)(n, "show");
                var i = t.querySelector(".form-group");
                (0, y.addClass)(i, "has-error"), i.querySelector(".sa-help-text").innerHTML = e, setTimeout(function() {
                    r.enableButtons()
                }, 1), t.querySelector("input").focus()
            }, r.resetInputError = g.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = (0, b.getModal)(),
                    n = t.querySelector(".sa-input-error");
                (0, y.removeClass)(n, "show");
                var i = t.querySelector(".form-group");
                (0, y.removeClass)(i, "has-error")
            }, r.disableButtons = g.disableButtons = function(e) {
                var t = (0, b.getModal)(),
                    n = t.querySelector("button.confirm"),
                    i = t.querySelector("button.cancel");
                n.disabled = !0, i.disabled = !0
            }, r.enableButtons = g.enableButtons = function(e) {
                var t = (0, b.getModal)(),
                    n = t.querySelector("button.confirm"),
                    i = t.querySelector("button.cancel");
                n.disabled = !1, i.disabled = !1
            }, void 0 !== T ? T.sweetAlert = T.swal = r : (0, _.logStr)("SweetAlert is a frontend module!")
        }, {
            "./modules/default-params": 1,
            "./modules/handle-click": 2,
            "./modules/handle-dom": 3,
            "./modules/handle-key": 4,
            "./modules/handle-swal-dom": 5,
            "./modules/set-params": 7,
            "./modules/utils": 8
        }]
    }, {}, [9]), "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, p, d) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = s[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    p = p && p.hasOwnProperty("default") ? p.default : p, d = d && d.hasOwnProperty("default") ? d.default : d;
    var t = "transitionend";

    function n(e) {
        var t = this,
            n = !1;
        return p(this).one(m.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || m.triggerTransitionEnd(t)
        }, e), this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n);
            return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        s = t[i],
                        o = s && m.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(o)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert",
        s = "bs.alert",
        a = "." + s,
        u = p.fn[r],
        c = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        h = "alert",
        f = "fade",
        g = "show",
        v = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() {
                p.removeData(this._element, s), this._element = null
            }, e._getRootElement = function(e) {
                var t = m.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n = n || p(e).closest("." + h)[0]
            }, e._triggerCloseEvent = function(e) {
                var t = p.Event(c.CLOSE);
                return p(e).trigger(t), t
            }, e._removeElement = function(t) {
                var n = this;
                if (p(t).removeClass(g), p(t).hasClass(f)) {
                    var e = m.getTransitionDurationFromElement(t);
                    p(t).one(m.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function(e) {
                p(e).detach().trigger(c.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(s);
                    t || (t = new i(this), e.data(s, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    p(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), p.fn[r] = v._jQueryInterface, p.fn[r].Constructor = v, p.fn[r].noConflict = function() {
        return p.fn[r] = u, v._jQueryInterface
    };
    var y = "button",
        _ = "bs.button",
        b = "." + _,
        w = ".data-api",
        S = p.fn[y],
        C = "active",
        x = "btn",
        T = "focus",
        E = '[data-toggle^="button"]',
        D = '[data-toggle="buttons"]',
        k = 'input:not([type="hidden"])',
        A = ".active",
        O = ".btn",
        M = {
            CLICK_DATA_API: "click" + b + w,
            FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w
        },
        N = function() {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function() {
                var e = !0,
                    t = !0,
                    n = p(this._element).closest(D)[0];
                if (n) {
                    var i = this._element.querySelector(k);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(C)) e = !1;
                            else {
                                var r = n.querySelector(A);
                                r && p(r).removeClass(C)
                            }
                        if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(C), p(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(C)), e && p(this._element).toggleClass(C)
            }, e.dispose = function() {
                p.removeData(this._element, _), this._element = null
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data(_);
                    e || (e = new n(this), p(this).data(_, e)), "toggle" === t && e[t]()
                })
            }, o(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), n
        }();
    p(document).on(M.CLICK_DATA_API, E, function(e) {
        e.preventDefault();
        var t = e.target;
        p(t).hasClass(x) || (t = p(t).closest(O)), N._jQueryInterface.call(p(t), "toggle")
    }).on(M.FOCUS_BLUR_DATA_API, E, function(e) {
        var t = p(e.target).closest(O)[0];
        p(t).toggleClass(T, /^focus(in)?$/.test(e.type))
    }), p.fn[y] = N._jQueryInterface, p.fn[y].Constructor = N, p.fn[y].noConflict = function() {
        return p.fn[y] = S, N._jQueryInterface
    };
    var I = "carousel",
        L = "bs.carousel",
        P = "." + L,
        j = p.fn[I],
        H = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        R = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        Y = "next",
        q = "prev",
        F = "left",
        W = "right",
        U = {
            SLIDE: "slide" + P,
            SLID: "slid" + P,
            KEYDOWN: "keydown" + P,
            MOUSEENTER: "mouseenter" + P,
            MOUSELEAVE: "mouseleave" + P,
            TOUCHSTART: "touchstart" + P,
            TOUCHMOVE: "touchmove" + P,
            TOUCHEND: "touchend" + P,
            POINTERDOWN: "pointerdown" + P,
            POINTERUP: "pointerup" + P,
            DRAG_START: "dragstart" + P,
            LOAD_DATA_API: "load" + P + ".data-api",
            CLICK_DATA_API: "click" + P + ".data-api"
        },
        B = "carousel",
        V = "active",
        $ = "slide",
        z = "carousel-item-right",
        G = "carousel-item-left",
        Q = "carousel-item-next",
        K = "carousel-item-prev",
        X = "pointer-event",
        Z = ".active",
        J = ".active.carousel-item",
        ee = ".carousel-item",
        te = ".carousel-item img",
        ne = ".carousel-item-next, .carousel-item-prev",
        ie = ".carousel-indicators",
        re = "[data-slide], [data-slide-to]",
        se = '[data-ride="carousel"]',
        oe = {
            TOUCH: "touch",
            PEN: "pen"
        },
        ae = function() {
            function s(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(ie), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var e = s.prototype;
            return e.next = function() {
                this._isSliding || this._slide(Y)
            }, e.nextWhenVisible = function() {
                !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(q)
            }, e.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(ne) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(J);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) p(this._element).one(U.SLID, function() {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? Y : q;
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function() {
                p(this._element).off(P), p.removeData(this._element, L), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(e) {
                return e = l({}, H, e), m.typeCheckConfig(I, e, R), e
            }, e._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && p(this._element).on(U.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && p(this._element).on(U.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(U.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var t = function(e) {
                            n._pointerEvent && oe[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function(e) {
                            n._pointerEvent && oe[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                                return n.cycle(e)
                            }, 500 + n._config.interval))
                        };
                    p(this._element.querySelectorAll(te)).on(U.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (p(this._element).on(U.POINTERDOWN, function(e) {
                        return t(e)
                    }), p(this._element).on(U.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add(X)) : (p(this._element).on(U.TOUCHSTART, function(e) {
                        return t(e)
                    }), p(this._element).on(U.TOUCHMOVE, function(e) {
                        var t;
                        (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                    }), p(this._element).on(U.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ee)) : [], this._items.indexOf(e)
            }, e._getItemByDirection = function(e, t) {
                var n = e === Y,
                    i = e === q,
                    r = this._getItemIndex(t),
                    s = this._items.length - 1;
                if ((i && 0 === r || n && r === s) && !this._config.wrap) return t;
                var o = (r + (e === q ? -1 : 1)) % this._items.length;
                return -1 == o ? this._items[this._items.length - 1] : this._items[o]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(J)),
                    r = p.Event(U.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return p(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    p(t).removeClass(V);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && p(n).addClass(V)
                }
            }, e._slide = function(e, t) {
                var n, i, r, s = this,
                    o = this._element.querySelector(J),
                    a = this._getItemIndex(o),
                    l = t || o && this._getItemByDirection(e, o),
                    u = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (r = e === Y ? (n = G, i = Q, F) : (n = z, i = K, W), l && p(l).hasClass(V)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var d = p.Event(U.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: u
                    });
                    if (p(this._element).hasClass($)) {
                        p(l).addClass(i), m.reflow(l), p(o).addClass(n), p(l).addClass(n);
                        var h = parseInt(l.getAttribute("data-interval"), 10);
                        h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = h) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var f = m.getTransitionDurationFromElement(o);
                        p(o).one(m.TRANSITION_END, function() {
                            p(l).removeClass(n + " " + i).addClass(V), p(o).removeClass(V + " " + i + " " + n), s._isSliding = !1, setTimeout(function() {
                                return p(s._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(f)
                    } else p(o).removeClass(V), p(l).addClass(V), this._isSliding = !1, p(this._element).trigger(d);
                    c && this.cycle()
                }
            }, s._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = p(this).data(L),
                        t = l({}, H, p(this).data());
                    "object" == typeof i && (t = l({}, t, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new s(this, t), p(this).data(L, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && t.ride && (e.pause(), e.cycle())
                })
            }, s._dataApiClickHandler = function(e) {
                var t = m.getSelectorFromElement(this);
                if (t) {
                    var n = p(t)[0];
                    if (n && p(n).hasClass(B)) {
                        var i = l({}, p(n).data(), p(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), s._jQueryInterface.call(p(n), i), r && p(n).data(L).to(r), e.preventDefault()
                    }
                }
            }, o(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return H
                }
            }]), s
        }();
    p(document).on(U.CLICK_DATA_API, re, ae._dataApiClickHandler), p(window).on(U.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(se)), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            ae._jQueryInterface.call(i, i.data())
        }
    }), p.fn[I] = ae._jQueryInterface, p.fn[I].Constructor = ae, p.fn[I].noConflict = function() {
        return p.fn[I] = j, ae._jQueryInterface
    };
    var le = "collapse",
        ue = "bs.collapse",
        ce = "." + ue,
        de = p.fn[le],
        he = {
            toggle: !0,
            parent: ""
        },
        fe = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        pe = {
            SHOW: "show" + ce,
            SHOWN: "shown" + ce,
            HIDE: "hide" + ce,
            HIDDEN: "hidden" + ce,
            CLICK_DATA_API: "click" + ce + ".data-api"
        },
        me = "show",
        ge = "collapse",
        ve = "collapsing",
        ye = "collapsed",
        _e = "width",
        be = "height",
        we = ".show, .collapsing",
        Se = '[data-toggle="collapse"]',
        Ce = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Se)), i = 0, r = n.length; i < r; i++) {
                    var s = n[i],
                        o = m.getSelectorFromElement(s),
                        a = [].slice.call(document.querySelectorAll(o)).filter(function(e) {
                            return e === t
                        });
                    null !== o && 0 < a.length && (this._selector = o, this._triggerArray.push(s))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function() {
                p(this._element).hasClass(me) ? this.hide() : this.show()
            }, e.show = function() {
                var e, t, n = this;
                if (!this._isTransitioning && !p(this._element).hasClass(me) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(we)).filter(function(e) {
                        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ge)
                    })).length && (e = null), !(e && (t = p(e).not(this._selector).data(ue)) && t._isTransitioning))) {
                    var i = p.Event(pe.SHOW);
                    if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(ue, null));
                        var r = this._getDimension();
                        p(this._element).removeClass(ge).addClass(ve), this._element.style[r] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(ye).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            o = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() {
                            p(n._element).removeClass(ve).addClass(ge).addClass(me), n._element.style[r] = "", n.setTransitioning(!1), p(n._element).trigger(pe.SHOWN)
                        }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
                    }
                }
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && p(this._element).hasClass(me)) {
                    var t = p.Event(pe.HIDE);
                    if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(ve).removeClass(ge).removeClass(me);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var s = this._triggerArray[r],
                                    o = m.getSelectorFromElement(s);
                                if (null !== o) p([].slice.call(document.querySelectorAll(o))).hasClass(me) || p(s).addClass(ye).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() {
                            e.setTransitioning(!1), p(e._element).removeClass(ve).addClass(ge).trigger(pe.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function(e) {
                this._isTransitioning = e
            }, e.dispose = function() {
                p.removeData(this._element, ue), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(e) {
                return (e = l({}, he, e)).toggle = Boolean(e.toggle), m.typeCheckConfig(le, e, fe), e
            }, e._getDimension = function() {
                return p(this._element).hasClass(_e) ? _e : be
            }, e._getParent = function() {
                var e, n = this;
                m.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return p(i).each(function(e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                var n = p(e).hasClass(me);
                t.length && p(t).toggleClass(ye, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(e) {
                var t = m.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(ue),
                        n = l({}, he, e.data(), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ue, t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, o(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return he
                }
            }]), a
        }();
    p(document).on(pe.CLICK_DATA_API, Se, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = m.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this),
                t = e.data(ue) ? "toggle" : n.data();
            Ce._jQueryInterface.call(e, t)
        })
    }), p.fn[le] = Ce._jQueryInterface, p.fn[le].Constructor = Ce, p.fn[le].noConflict = function() {
        return p.fn[le] = de, Ce._jQueryInterface
    };
    var xe = "dropdown",
        Te = "bs.dropdown",
        Ee = "." + Te,
        De = ".data-api",
        ke = p.fn[xe],
        Ae = new RegExp("38|40|27"),
        Oe = {
            HIDE: "hide" + Ee,
            HIDDEN: "hidden" + Ee,
            SHOW: "show" + Ee,
            SHOWN: "shown" + Ee,
            CLICK: "click" + Ee,
            CLICK_DATA_API: "click" + Ee + De,
            KEYDOWN_DATA_API: "keydown" + Ee + De,
            KEYUP_DATA_API: "keyup" + Ee + De
        },
        Me = "disabled",
        Ne = "show",
        Ie = "dropup",
        Le = "dropright",
        Pe = "dropleft",
        je = "dropdown-menu-right",
        He = "position-static",
        Re = '[data-toggle="dropdown"]',
        Ye = ".dropdown form",
        qe = ".dropdown-menu",
        Fe = ".navbar-nav",
        We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Ue = "top-start",
        Be = "top-end",
        Ve = "bottom-start",
        $e = "bottom-end",
        ze = "right-start",
        Ge = "left-start",
        Qe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Ke = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Xe = function() {
            function u(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = u.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Me)) {
                    var e = u._getParentFromElement(this._element),
                        t = p(this._menu).hasClass(Ne);
                    if (u._clearMenus(), !t) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = p.Event(Oe.SHOW, n);
                        if (p(e).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === d) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : m.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(e).addClass(He), this._popper = new d(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === p(e).closest(Fe).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Ne), p(e).toggleClass(Ne).trigger(p.Event(Oe.SHOWN, n))
                        }
                    }
                }
            }, e.show = function() {
                if (!(this._element.disabled || p(this._element).hasClass(Me) || p(this._menu).hasClass(Ne))) {
                    var e = {
                            relatedTarget: this._element
                        },
                        t = p.Event(Oe.SHOW, e),
                        n = u._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Oe.SHOWN, e)))
                }
            }, e.hide = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Me) && p(this._menu).hasClass(Ne)) {
                    var e = {
                            relatedTarget: this._element
                        },
                        t = p.Event(Oe.HIDE, e),
                        n = u._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Oe.HIDDEN, e)))
                }
            }, e.dispose = function() {
                p.removeData(this._element, Te), p(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                p(this._element).on(Oe.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(e) {
                return e = l({}, this.constructor.Default, p(this._element).data(), e), m.typeCheckConfig(xe, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = u._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(qe))
                }
                return this._menu
            }, e._getPlacement = function() {
                var e = p(this._element.parentNode),
                    t = Ve;
                return e.hasClass(Ie) ? (t = Ue, p(this._menu).hasClass(je) && (t = Be)) : e.hasClass(Le) ? t = ze : e.hasClass(Pe) ? t = Ge : p(this._menu).hasClass(je) && (t = $e), t
            }, e._detectNavbar = function() {
                return 0 < p(this._element).closest(".navbar").length
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = l({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, u._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data(Te);
                    if (e || (e = new u(this, "object" == typeof t ? t : null), p(this).data(Te, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, u._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Re)), n = 0, i = t.length; n < i; n++) {
                        var r = u._getParentFromElement(t[n]),
                            s = p(t[n]).data(Te),
                            o = {
                                relatedTarget: t[n]
                            };
                        if (e && "click" === e.type && (o.clickEvent = e), s) {
                            var a = s._menu;
                            if (p(r).hasClass(Ne) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                                var l = p.Event(Oe.HIDE, o);
                                p(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Ne), p(r).removeClass(Ne).trigger(p.Event(Oe.HIDDEN, o)))
                            }
                        }
                    }
            }, u._getParentFromElement = function(e) {
                var t, n = m.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, u._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qe).length)) : Ae.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(Me))) {
                    var t = u._getParentFromElement(this),
                        n = p(t).hasClass(Ne);
                    if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(We));
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var s = t.querySelector(Re);
                            p(s).trigger("focus")
                        }
                        p(this).trigger("click")
                    }
                }
            }, o(u, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ke
                }
            }]), u
        }();
    p(document).on(Oe.KEYDOWN_DATA_API, Re, Xe._dataApiKeydownHandler).on(Oe.KEYDOWN_DATA_API, qe, Xe._dataApiKeydownHandler).on(Oe.CLICK_DATA_API + " " + Oe.KEYUP_DATA_API, Xe._clearMenus).on(Oe.CLICK_DATA_API, Re, function(e) {
        e.preventDefault(), e.stopPropagation(), Xe._jQueryInterface.call(p(this), "toggle")
    }).on(Oe.CLICK_DATA_API, Ye, function(e) {
        e.stopPropagation()
    }), p.fn[xe] = Xe._jQueryInterface, p.fn[xe].Constructor = Xe, p.fn[xe].noConflict = function() {
        return p.fn[xe] = ke, Xe._jQueryInterface
    };
    var Ze = "modal",
        Je = "bs.modal",
        et = "." + Je,
        tt = p.fn[Ze],
        nt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        it = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        rt = {
            HIDE: "hide" + et,
            HIDDEN: "hidden" + et,
            SHOW: "show" + et,
            SHOWN: "shown" + et,
            FOCUSIN: "focusin" + et,
            RESIZE: "resize" + et,
            CLICK_DISMISS: "click.dismiss" + et,
            KEYDOWN_DISMISS: "keydown.dismiss" + et,
            MOUSEUP_DISMISS: "mouseup.dismiss" + et,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + et,
            CLICK_DATA_API: "click" + et + ".data-api"
        },
        st = "modal-dialog-scrollable",
        ot = "modal-scrollbar-measure",
        at = "modal-backdrop",
        lt = "modal-open",
        ut = "fade",
        ct = "show",
        dt = ".modal-dialog",
        ht = ".modal-body",
        ft = '[data-toggle="modal"]',
        pt = '[data-dismiss="modal"]',
        mt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        gt = ".sticky-top",
        vt = function() {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var e = r.prototype;
            return e.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    p(this._element).hasClass(ut) && (this._isTransitioning = !0);
                    var n = p.Event(rt.SHOW, {
                        relatedTarget: e
                    });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(rt.CLICK_DISMISS, pt, function(e) {
                        return t.hide(e)
                    }), p(this._dialog).on(rt.MOUSEDOWN_DISMISS, function() {
                        p(t._element).one(rt.MOUSEUP_DISMISS, function(e) {
                            p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = p.Event(rt.HIDE);
                    if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = p(this._element).hasClass(ut);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(rt.FOCUSIN), p(this._element).removeClass(ct), p(this._element).off(rt.CLICK_DISMISS), p(this._dialog).off(rt.MOUSEDOWN_DISMISS), i) {
                            var r = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return p(e).off(et)
                }), p(document).off(rt.FOCUSIN), p.removeData(this._element, Je), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(e) {
                return e = l({}, nt, e), m.typeCheckConfig(Ze, e, it), e
            }, e._showElement = function(e) {
                var t = this,
                    n = p(this._element).hasClass(ut);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(st) ? this._dialog.querySelector(ht).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(ct), this._config.focus && this._enforceFocus();

                function i() {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r)
                }
                var r = p.Event(rt.SHOWN, {
                    relatedTarget: e
                });
                if (n) {
                    var s = m.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(m.TRANSITION_END, i).emulateTransitionEnd(s)
                } else i()
            }, e._enforceFocus = function() {
                var t = this;
                p(document).off(rt.FOCUSIN).on(rt.FOCUSIN, function(e) {
                    document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? p(this._element).on(rt.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || p(this._element).off(rt.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? p(window).on(rt.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : p(window).off(rt.RESIZE)
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    p(document.body).removeClass(lt), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(rt.HIDDEN)
                })
            }, e._removeBackdrop = function() {
                this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(e) {
                var t = this,
                    n = p(this._element).hasClass(ut) ? ut : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = at, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(rt.CLICK_DISMISS, function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(ct), !e) return;
                    if (!n) return void e();
                    var i = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    p(this._backdrop).removeClass(ct);
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (p(this._element).hasClass(ut)) {
                        var s = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(mt)),
                        t = [].slice.call(document.querySelectorAll(gt));
                    p(e).each(function(e, t) {
                        var n = t.style.paddingRight,
                            i = p(t).css("padding-right");
                        p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), p(t).each(function(e, t) {
                        var n = t.style.marginRight,
                            i = p(t).css("margin-right");
                        p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                p(document.body).addClass(lt)
            }, e._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(mt));
                p(e).each(function(e, t) {
                    var n = p(t).data("padding-right");
                    p(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + gt));
                p(t).each(function(e, t) {
                    var n = p(t).data("margin-right");
                    void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
                });
                var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = ot, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = p(this).data(Je),
                        t = l({}, nt, p(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), p(this).data(Je, e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, o(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return nt
                }
            }]), r
        }();
    p(document).on(rt.CLICK_DATA_API, ft, function(e) {
        var t, n = this,
            i = m.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data(Je) ? "toggle" : l({}, p(t).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = p(t).one(rt.SHOW, function(e) {
            e.isDefaultPrevented() || s.one(rt.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        vt._jQueryInterface.call(p(t), r, this)
    }), p.fn[Ze] = vt._jQueryInterface, p.fn[Ze].Constructor = vt, p.fn[Ze].noConflict = function() {
        return p.fn[Ze] = tt, vt._jQueryInterface
    };
    var yt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        _t = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        bt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        wt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function St(e, s, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(s), a = [].slice.call(n.body.querySelectorAll("*")), i = function(e) {
                var t = a[e],
                    n = t.nodeName.toLowerCase();
                if (-1 === o.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t), "continue";
                var i = [].slice.call(t.attributes),
                    r = [].concat(s["*"] || [], s[n] || []);
                i.forEach(function(e) {
                    ! function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === yt.indexOf(n) || Boolean(e.nodeValue.match(bt) || e.nodeValue.match(wt));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, s = i.length; r < s; r++)
                            if (n.match(i[r])) return 1
                    }(e, r) && t.removeAttribute(e.nodeName)
                })
            }, r = 0, l = a.length; r < l; r++) i(r);
        return n.body.innerHTML
    }
    var Ct = "tooltip",
        xt = "bs.tooltip",
        Tt = "." + xt,
        Et = p.fn[Ct],
        Dt = "bs-tooltip",
        kt = new RegExp("(^|\\s)" + Dt + "\\S+", "g"),
        At = ["sanitize", "whiteList", "sanitizeFn"],
        Ot = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Mt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Nt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: _t
        },
        It = "show",
        Lt = "out",
        Pt = {
            HIDE: "hide" + Tt,
            HIDDEN: "hidden" + Tt,
            SHOW: "show" + Tt,
            SHOWN: "shown" + Tt,
            INSERTED: "inserted" + Tt,
            CLICK: "click" + Tt,
            FOCUSIN: "focusin" + Tt,
            FOCUSOUT: "focusout" + Tt,
            MOUSEENTER: "mouseenter" + Tt,
            MOUSELEAVE: "mouseleave" + Tt
        },
        jt = "fade",
        Ht = "show",
        Rt = ".tooltip-inner",
        Yt = ".arrow",
        qt = "hover",
        Ft = "focus",
        Wt = "click",
        Ut = "manual",
        Bt = function() {
            function i(e, t) {
                if (void 0 === d) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = p(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (p(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = p.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    p(this.element).trigger(e);
                    var n = m.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(),
                        s = m.getUID(this.constructor.NAME);
                    r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && p(r).addClass(jt);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        a = this._getAttachment(o);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    p(r).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new d(this.element, r, {
                        placement: a,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Yt
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), p(r).addClass(Ht), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                    var u = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), e === Lt && t._leave(null, t)
                    };
                    if (p(this.tip).hasClass(jt)) {
                        var c = m.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(m.TRANSITION_END, u).emulateTransitionEnd(c)
                    } else u()
                }
            }, e.hide = function(e) {
                function t() {
                    n._hoverState !== It && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                }
                var n = this,
                    i = this.getTipElement(),
                    r = p.Event(this.constructor.Event.HIDE);
                if (p(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (p(i).removeClass(Ht), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Wt] = !1, this._activeTrigger[Ft] = !1, this._activeTrigger[qt] = !1, p(this.tip).hasClass(jt)) {
                        var s = m.getTransitionDurationFromElement(i);
                        p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(s)
                    } else t();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(Dt + "-" + e)
            }, e.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(p(e.querySelectorAll(Rt)), this.getTitle()), p(e).removeClass(jt + " " + Ht)
            }, e.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = St(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
            }, e.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = l({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, e._getContainer = function() {
                return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
            }, e._getAttachment = function(e) {
                return Mt[e.toUpperCase()]
            }, e._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                    else if (e !== Ut) {
                        var t = e === qt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === qt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(t, i.config.selector, function(e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function(e) {
                            return i._leave(e)
                        })
                    }
                }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
                    i.element && i.hide()
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Ft : qt] = !0), p(t.getTipElement()).hasClass(Ht) || t._hoverState === It ? t._hoverState = It : (clearTimeout(t._timeout), t._hoverState = It, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === It && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Ft : qt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Lt, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === Lt && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) {
                var t = p(this.element).data();
                return Object.keys(t).forEach(function(e) {
                    -1 !== At.indexOf(e) && delete t[e]
                }), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), m.typeCheckConfig(Ct, e, this.constructor.DefaultType), e.sanitize && (e.template = St(e.template, e.whiteList, e.sanitizeFn)), e
            }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(kt);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (p(e).removeClass(jt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data(xt),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(xt, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Nt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ct
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return xt
                }
            }, {
                key: "Event",
                get: function() {
                    return Pt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Tt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ot
                }
            }]), i
        }();
    p.fn[Ct] = Bt._jQueryInterface, p.fn[Ct].Constructor = Bt, p.fn[Ct].noConflict = function() {
        return p.fn[Ct] = Et, Bt._jQueryInterface
    };
    var Vt = "popover",
        $t = "bs.popover",
        zt = "." + $t,
        Gt = p.fn[Vt],
        Qt = "bs-popover",
        Kt = new RegExp("(^|\\s)" + Qt + "\\S+", "g"),
        Xt = l({}, Bt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Zt = l({}, Bt.DefaultType, {
            content: "(string|element|function)"
        }),
        Jt = "fade",
        en = "show",
        tn = ".popover-header",
        nn = ".popover-body",
        rn = {
            HIDE: "hide" + zt,
            HIDDEN: "hidden" + zt,
            SHOW: "show" + zt,
            SHOWN: "shown" + zt,
            INSERTED: "inserted" + zt,
            CLICK: "click" + zt,
            FOCUSIN: "focusin" + zt,
            FOCUSOUT: "focusout" + zt,
            MOUSEENTER: "mouseenter" + zt,
            MOUSELEAVE: "mouseleave" + zt
        },
        sn = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(Qt + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(tn), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(nn), t), e.removeClass(Jt + " " + en)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(Kt);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data($t),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data($t, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Xt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Vt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return $t
                }
            }, {
                key: "Event",
                get: function() {
                    return rn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return zt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zt
                }
            }]), i
        }(Bt);
    p.fn[Vt] = sn._jQueryInterface, p.fn[Vt].Constructor = sn, p.fn[Vt].noConflict = function() {
        return p.fn[Vt] = Gt, sn._jQueryInterface
    };
    var on = "scrollspy",
        an = "bs.scrollspy",
        ln = "." + an,
        un = p.fn[on],
        cn = {
            offset: 10,
            method: "auto",
            target: ""
        },
        dn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        hn = {
            ACTIVATE: "activate" + ln,
            SCROLL: "scroll" + ln,
            LOAD_DATA_API: "load" + ln + ".data-api"
        },
        fn = "dropdown-item",
        pn = "active",
        mn = '[data-spy="scroll"]',
        gn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        _n = ".list-group-item",
        bn = ".dropdown",
        wn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        Cn = "offset",
        xn = "position",
        Tn = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + _n + "," + this._config.target + " " + wn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(hn.SCROLL, function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? Cn : xn,
                    r = "auto" === this._config.method ? e : this._config.method,
                    s = r === xn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, n = m.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height) return [p(t)[r]().top + s, n]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                p.removeData(this._element, an), p(this._scrollElement).off(ln), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(e) {
                if ("string" != typeof(e = l({}, cn, "object" == typeof e && e ? e : {})).target) {
                    var t = p(e.target).attr("id");
                    t || (t = m.getUID(on), p(e.target).attr("id", t)), e.target = "#" + t
                }
                return m.typeCheckConfig(on, e, dn), e
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }),
                    n = p([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(fn) ? (n.closest(bn).find(Sn).addClass(pn), n.addClass(pn)) : (n.addClass(pn), n.parents(gn).prev(vn + ", " + _n).addClass(pn), n.parents(gn).prev(yn).children(vn).addClass(pn)), p(this._scrollElement).trigger(hn.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(pn)
                }).forEach(function(e) {
                    return e.classList.remove(pn)
                })
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data(an);
                    if (e || (e = new n(this, "object" == typeof t && t), p(this).data(an, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, o(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return cn
                }
            }]), n
        }();
    p(window).on(hn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(mn)), t = e.length; t--;) {
            var n = p(e[t]);
            Tn._jQueryInterface.call(n, n.data())
        }
    }), p.fn[on] = Tn._jQueryInterface, p.fn[on].Constructor = Tn, p.fn[on].noConflict = function() {
        return p.fn[on] = un, Tn._jQueryInterface
    };
    var En = "bs.tab",
        Dn = "." + En,
        kn = p.fn.tab,
        An = {
            HIDE: "hide" + Dn,
            HIDDEN: "hidden" + Dn,
            SHOW: "show" + Dn,
            SHOWN: "shown" + Dn,
            CLICK_DATA_API: "click.bs.tab.data-api"
        },
        On = "dropdown-menu",
        Mn = "active",
        Nn = "disabled",
        In = "fade",
        Ln = "show",
        Pn = ".dropdown",
        jn = ".nav, .list-group",
        Hn = ".active",
        Rn = "> li > .active",
        Yn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Fn = "> .dropdown-menu .active",
        Wn = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Mn) || p(this._element).hasClass(Nn))) {
                    var e, i, t = p(this._element).closest(jn)[0],
                        r = m.getSelectorFromElement(this._element);
                    if (t) {
                        var s = "UL" === t.nodeName || "OL" === t.nodeName ? Rn : Hn;
                        i = (i = p.makeArray(p(t).find(s)))[i.length - 1]
                    }
                    var o = p.Event(An.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = p.Event(An.SHOW, {
                            relatedTarget: i
                        });
                    if (i && p(i).trigger(o), p(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function() {
                            var e = p.Event(An.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                t = p.Event(An.SHOWN, {
                                    relatedTarget: i
                                });
                            p(i).trigger(e), p(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                p.removeData(this._element, En), this._element = null
            }, e._activate = function(e, t, n) {
                function i() {
                    return r._transitionComplete(e, s, n)
                }
                var r = this,
                    s = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Hn) : p(t).find(Rn))[0],
                    o = n && s && p(s).hasClass(In);
                if (s && o) {
                    var a = m.getTransitionDurationFromElement(s);
                    p(s).removeClass(Ln).one(m.TRANSITION_END, i).emulateTransitionEnd(a)
                } else i()
            }, e._transitionComplete = function(e, t, n) {
                if (t) {
                    p(t).removeClass(Mn);
                    var i = p(t.parentNode).find(Fn)[0];
                    i && p(i).removeClass(Mn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (p(e).addClass(Mn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m.reflow(e), e.classList.contains(In) && e.classList.add(Ln), e.parentNode && p(e.parentNode).hasClass(On)) {
                    var r = p(e).closest(Pn)[0];
                    if (r) {
                        var s = [].slice.call(r.querySelectorAll(qn));
                        p(s).addClass(Mn)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(En);
                    if (t || (t = new i(this), e.data(En, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    p(document).on(An.CLICK_DATA_API, Yn, function(e) {
        e.preventDefault(), Wn._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = Wn._jQueryInterface, p.fn.tab.Constructor = Wn, p.fn.tab.noConflict = function() {
        return p.fn.tab = kn, Wn._jQueryInterface
    };
    var Un = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        $n = p.fn[Un],
        zn = {
            CLICK_DISMISS: "click.dismiss" + Vn,
            HIDE: "hide" + Vn,
            HIDDEN: "hidden" + Vn,
            SHOW: "show" + Vn,
            SHOWN: "shown" + Vn
        },
        Gn = "fade",
        Qn = "hide",
        Kn = "show",
        Xn = "showing",
        Zn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Jn = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ei = '[data-dismiss="toast"]',
        ti = function() {
            function i(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var e = i.prototype;
            return e.show = function() {
                var e = this;
                p(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Gn);

                function t() {
                    e._element.classList.remove(Xn), e._element.classList.add(Kn), p(e._element).trigger(zn.SHOWN), e._config.autohide && e.hide()
                }
                if (this._element.classList.remove(Qn), this._element.classList.add(Xn), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, e.hide = function(e) {
                var t = this;
                this._element.classList.contains(Kn) && (p(this._element).trigger(zn.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    t._close()
                }, this._config.delay))
            }, e.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Kn) && this._element.classList.remove(Kn), p(this._element).off(zn.CLICK_DISMISS), p.removeData(this._element, Bn), this._element = null, this._config = null
            }, e._getConfig = function(e) {
                return e = l({}, Jn, p(this._element).data(), "object" == typeof e && e ? e : {}), m.typeCheckConfig(Un, e, this.constructor.DefaultType), e
            }, e._setListeners = function() {
                var e = this;
                p(this._element).on(zn.CLICK_DISMISS, ei, function() {
                    return e.hide(!0)
                })
            }, e._close = function() {
                function e() {
                    t._element.classList.add(Qn), p(t._element).trigger(zn.HIDDEN)
                }
                var t = this;
                if (this._element.classList.remove(Kn), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data(Bn);
                    if (t || (t = new i(this, "object" == typeof n && n), e.data(Bn, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this)
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zn
                }
            }, {
                key: "Default",
                get: function() {
                    return Jn
                }
            }]), i
        }();
    p.fn[Un] = ti._jQueryInterface, p.fn[Un].Constructor = ti, p.fn[Un].noConflict = function() {
            return p.fn[Un] = $n, ti._jQueryInterface
        },
        function() {
            if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = m, e.Alert = v, e.Button = N, e.Carousel = ae, e.Collapse = Ce, e.Dropdown = Xe, e.Modal = vt, e.Popover = sn, e.Scrollspy = Tn, e.Tab = Wn, e.Toast = ti, e.Tooltip = Bt, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    var n;
    c.extend(c.fn, {
        validate: function(e) {
            if (this.length) {
                var i = c.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new c.validator(e, this[0]), c.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.submitButton = e.currentTarget, c(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== c(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(n) {
                    function e() {
                        var e, t;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (e = c("<input type='hidden'/>").attr("name", i.submitButton.name).val(c(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (t = i.settings.submitHandler.call(i, i.currentForm, n), e && e.remove(), void 0 !== t && t)
                    }
                    return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, t, n;
            return c(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = c(this[0].form).validate(), this.each(function() {
                (e = t.element(this) && e) || (n = n.concat(t.errorList))
            }), t.errorList = n), e
        },
        rules: function(e, t) {
            var n, i, r, s, o, a, l = this[0],
                u = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != l && (!l.form && u && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                if (e) switch (i = (n = c.data(l.form, "validator").settings).rules, r = c.validator.staticRules(l), e) {
                    case "add":
                        c.extend(r, c.validator.normalizeRule(t)), delete r.messages, i[l.name] = r, t.messages && (n.messages[l.name] = c.extend(n.messages[l.name], t.messages));
                        break;
                    case "remove":
                        return t ? (a = {}, c.each(t.split(/\s/), function(e, t) {
                            a[t] = r[t], delete r[t]
                        }), a) : (delete i[l.name], r)
                }
                return (s = c.validator.normalizeRules(c.extend({}, c.validator.classRules(l), c.validator.attributeRules(l), c.validator.dataRules(l), c.validator.staticRules(l)), l)).required && (o = s.required, delete s.required, s = c.extend({
                    required: o
                }, s)), s.remote && (o = s.remote, delete s.remote, s = c.extend(s, {
                    remote: o
                })), s
            }
        }
    }), c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(e) {
            return !c.trim("" + c(e).val())
        },
        filled: function(e) {
            var t = c(e).val();
            return null !== t && !!c.trim("" + t)
        },
        unchecked: function(e) {
            return !c(e).prop("checked")
        }
    }), c.validator = function(e, t) {
        this.settings = c.extend(!0, {}, c.validator.defaults, e), this.currentForm = t, this.init()
    }, c.validator.format = function(n, e) {
        return 1 === arguments.length ? function() {
            var e = c.makeArray(arguments);
            return e.unshift(n), c.validator.format.apply(this, e)
        } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = c.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), c.each(e, function(e, t) {
            n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return t
            })
        })), n)
    }, c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                9 === t.which && "" === this.elementValue(e) || -1 !== c.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(e, t, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : c(e).addClass(t).removeClass(n)
            },
            unhighlight: function(e, t, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : c(e).removeClass(t).addClass(n)
            }
        },
        setDefaults: function(e) {
            c.extend(c.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                this.labelContainer = c(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm), this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, s = this.currentForm,
                    i = this.groups = {};

                function e(e) {
                    var t = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    if (!this.form && t && (this.form = c(this).closest("form")[0], this.name = c(this).attr("name")), s === this.form) {
                        var n = c.data(this.form, "validator"),
                            i = "on" + e.type.replace(/^validate/, ""),
                            r = n.settings;
                        r[i] && !c(this).is(r.ignore) && r[i].call(n, this, e)
                    }
                }
                c.each(this.settings.groups, function(n, e) {
                    "string" == typeof e && (e = e.split(/\s/)), c.each(e, function(e, t) {
                        i[t] = n
                    })
                }), n = this.settings.rules, c.each(n, function(e, t) {
                    n[e] = c.validator.normalizeRule(t)
                }), c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), c.extend(this.submitted, this.errorMap), this.invalid = c.extend({}, this.errorMap), this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(e) {
                var t, n, i = this.clean(e),
                    r = this.validationTargetFor(i),
                    s = this,
                    o = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = c(r), (n = this.groups[r.name]) && c.each(this.groups, function(e, t) {
                    t === n && e !== r.name && (i = s.validationTargetFor(s.clean(s.findByName(e)))) && i.name in s.invalid && (s.currentElements.push(i), o = s.check(i) && o)
                }), t = !1 !== this.check(r), o = o && t, this.invalid[r.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c(e).attr("aria-invalid", !t)), o
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    c.extend(this.errorMap, t), this.errorList = c.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    }), this.successList = c.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === c.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var n = this,
                    i = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var e = this.name || c(this).attr("name"),
                        t = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    return !e && n.settings.debug && window.console && console.error("%o has no name assigned", this), t && (this.form = c(this).closest("form")[0], this.name = e), this.form === n.currentForm && (!(e in i || !n.objectLength(c(this).rules())) && (i[e] = !0))
                })
            },
            clean: function(e) {
                return c(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = c([]), this.toHide = c([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(e) {
                var t, n, i = c(e),
                    r = e.type,
                    s = void 0 !== i.attr("contenteditable") && "false" !== i.attr("contenteditable");
                return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : i.val() : (t = s ? i.text() : i.val(), "file" === r ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) || 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e, n, i, r, s = c(t).rules(),
                    o = c.map(s, function(e, t) {
                        return t
                    }).length,
                    a = !1,
                    l = this.elementValue(t);
                for (n in "function" == typeof s.normalizer ? r = s.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (l = r.call(t, l), delete s.normalizer), s) {
                    i = {
                        method: n,
                        parameters: s[n]
                    };
                    try {
                        if ("dependency-mismatch" === (e = c.validator.methods[n].call(this, l, t, i.parameters)) && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!e) return this.formatAndAdd(t, i), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e
                    }
                }
                if (!a) return this.objectLength(s) && this.successList.push(t), !0
            },
            customDataMessage: function(e, t) {
                return c(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || c(e).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(e, t) {
                "string" == typeof t && (t = {
                    method: t
                });
                var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, c.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    i = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = c.validator.format(n.replace(i, "{$1}"), t.parameters)), n
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, t) {
                var n, i, r, s, o = this.errorsFor(e),
                    a = this.idOrName(e),
                    l = c(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(t)) : (n = o = c("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, c(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (r = o.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, c(e).attr("aria-describedby", l), (i = this.groups[e.name]) && (s = this, c.each(s.groups, function(e, t) {
                    t === i && c("[name='" + s.escapeCssMeta(e) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !t && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(e) {
                var t = this.escapeCssMeta(this.idOrName(e)),
                    n = c(e).attr("aria-describedby"),
                    i = "label[for='" + t + "'], label[for='" + t + "'] *";
                return n && (i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), c(e).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(e) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", t).length;
                    case "input":
                        if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(e, t) {
                    return !!c(e, t.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !c.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, c(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            },
            stopRequest: function(e, t) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], c(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(), this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e, t) {
                return t = "string" == typeof t && t || "remote", c.data(e, "previousValue") || c.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: t
                    })
                })
            },
            destroy: function() {
                this.resetForm(), c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : c.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var t = {},
                n = c(e).attr("class");
            return n && c.each(n.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(t, c.validator.classRuleSettings[this])
            }), t
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(e) {
            var t, n, i = {},
                r = c(e),
                s = e.getAttribute("type");
            for (t in c.validator.methods) n = "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), !!n) : r.attr(t), this.normalizeAttributeRule(i, s, t, n);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var t, n, i = {},
                r = c(e),
                s = e.getAttribute("type");
            for (t in c.validator.methods) "" === (n = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())) && (n = !0), this.normalizeAttributeRule(i, s, t, n);
            return i
        },
        staticRules: function(e) {
            var t = {},
                n = c.data(e.form, "validator");
            return n.settings.rules && (t = c.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
        },
        normalizeRules: function(i, r) {
            return c.each(i, function(e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                            case "string":
                                n = !!c(t.depends, r.form).length;
                                break;
                            case "function":
                                n = t.depends.call(r, r)
                        }
                        n ? i[e] = void 0 === t.param || t.param : (c.data(r.form, "validator").resetElements(c(r)), delete i[e])
                    }
                } else delete i[e]
            }), c.each(i, function(e, t) {
                i[e] = c.isFunction(t) && "normalizer" !== e ? t(r) : t
            }), c.each(["minlength", "maxlength"], function() {
                i[this] && (i[this] = Number(i[this]))
            }), c.each(["rangelength", "range"], function() {
                var e;
                i[this] && (c.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
            }), c.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var t = {};
                c.each(e.split(/\s/), function() {
                    t[this] = !0
                }), e = t
            }
            return e
        },
        addMethod: function(e, t, n) {
            c.validator.methods[e] = t, c.validator.messages[e] = void 0 !== n ? n : c.validator.messages[e], t.length < 3 && c.validator.addClassRules(e, c.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, t, n) {
                if (!this.depend(n, t)) return "dependency-mismatch";
                if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : null != e && 0 < e.length;
                var i = c(t).val();
                return i && 0 < i.length
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: (n = !1, function(e, t) {
                return n || (n = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(e, t, n) {
                var i = c.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n <= i
            },
            maxlength: function(e, t, n) {
                var i = c.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i <= n
            },
            rangelength: function(e, t, n) {
                var i = c.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n[0] && i <= n[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || n <= e
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(e, t, n) {
                function i(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }

                function r(e) {
                    return Math.round(e * Math.pow(10, s))
                }
                var s, o = c(t).attr("type"),
                    a = "Step attribute on input type " + o + " is not supported.",
                    l = new RegExp("\\b" + o + "\\b"),
                    u = !0;
                if (o && !l.test(["text", "number", "range"].join())) throw new Error(a);
                return s = i(n), (i(e) > s || r(e) % r(n) != 0) && (u = !1), this.optional(t) || u
            },
            equalTo: function(e, t, n) {
                var i = c(n);
                return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    c(t).valid()
                }), e === i.val()
            },
            remote: function(s, o, e, a) {
                if (this.optional(o)) return "dependency-mismatch";
                a = "string" == typeof a && a || "remote";
                var l, t, n, u = this.previousValue(o, a);
                return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[o.name][a], this.settings.messages[o.name][a] = u.message, e = "string" == typeof e ? {
                    url: e
                } : e, n = c.param(c.extend({
                    data: s
                }, e.data)), u.old === n ? u.valid : (u.old = n, (l = this).startRequest(o), (t = {})[o.name] = s, c.ajax(c.extend(!0, {
                    mode: "abort",
                    port: "validate" + o.name,
                    dataType: "json",
                    data: t,
                    context: l.currentForm,
                    success: function(e) {
                        var t, n, i, r = !0 === e || "true" === e;
                        l.settings.messages[o.name][a] = u.originalMessage, r ? (i = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(o), l.formSubmitted = i, l.successList.push(o), l.invalid[o.name] = !1, l.showErrors()) : (t = {}, n = e || l.defaultMessage(o, {
                            method: a,
                            parameters: s
                        }), t[o.name] = u.message = n, l.invalid[o.name] = !0, l.showErrors(t)), u.valid = r, l.stopRequest(o, r)
                    }
                }, e)), "pending")
            }
        }
    });
    var i, r = {};
    return c.ajaxPrefilter ? c.ajaxPrefilter(function(e, t, n) {
        var i = e.port;
        "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n)
    }) : (i = c.ajax, c.ajax = function(e) {
        var t = ("mode" in e ? e : c.ajaxSettings).mode,
            n = ("port" in e ? e : c.ajaxSettings).port;
        return "abort" === t ? (r[n] && r[n].abort(), r[n] = i.apply(this, arguments), r[n]) : i.apply(this, arguments)
    }), c
});