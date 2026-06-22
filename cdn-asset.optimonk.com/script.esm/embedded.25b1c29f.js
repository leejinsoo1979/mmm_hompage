var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function n(e) {
    var t = {
        exports: {}
    };
    return e(t, t.exports), t.exports
}
var i = n((function(e) {
    function t() {
        return e.exports = t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }, t.apply(this, arguments)
    }
    e.exports = t
}));
const o = window.OptiMonkEmbedded || {};

function r(e) {
    ! function() {
        function t(e, t, n) {
            return e.call.apply(e.bind, arguments)
        }

        function n(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(n, i), e.apply(t, n)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }

        function i(e, o, r) {
            return (i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t : n).apply(null, arguments)
        }
        var o = Date.now || function() {
            return +new Date
        };

        function r(e, t) {
            this.a = e, this.o = t || e, this.c = this.o.document
        }
        var a = !!e.FontFace;

        function s(e, t, n, i) {
            if (t = e.c.createElement(t), n)
                for (var o in n) n.hasOwnProperty(o) && ("style" == o ? t.style.cssText = n[o] : t.setAttribute(o, n[o]));
            return i && t.appendChild(e.c.createTextNode(i)), t
        }

        function c(e, t, n) {
            (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement), e.insertBefore(n, e.lastChild)
        }

        function l(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }

        function d(e, t, n) {
            t = t || [], n = n || [];
            for (var i = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
                for (var r = !1, a = 0; a < i.length; a += 1)
                    if (t[o] === i[a]) {
                        r = !0;
                        break
                    }
                r || i.push(t[o])
            }
            for (o = 0, t = []; o < i.length; o += 1) {
                for (a = 0, r = !1; a < n.length; a += 1)
                    if (i[o] === n[a]) {
                        r = !0;
                        break
                    }
                r || t.push(i[o])
            }
            e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function u(e, t) {
            for (var n = e.className.split(/\s+/), i = 0, o = n.length; i < o; i++)
                if (n[i] == t) return !0;
            return !1
        }

        function p(e, t, n) {
            function i() {
                d && o && r && (d(l), d = null)
            }
            t = s(e, "link", {
                rel: "stylesheet",
                href: t,
                media: "all"
            });
            var o = !1,
                r = !0,
                l = null,
                d = n || null;
            a ? (t.onload = function() {
                o = !0, i()
            }, t.onerror = function() {
                o = !0, l = Error("Stylesheet failed to load"), i()
            }) : setTimeout((function() {
                o = !0, i()
            }), 0), c(e, "head", t)
        }

        function m(e, t, n, i) {
            var o = e.c.getElementsByTagName("head")[0];
            if (o) {
                var r = s(e, "script", {
                        src: t
                    }),
                    a = !1;
                return r.onload = r.onreadystatechange = function() {
                    a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), r.onload = r.onreadystatechange = null, "HEAD" == r.parentNode.tagName && o.removeChild(r))
                }, o.appendChild(r), setTimeout((function() {
                    a || (a = !0, n && n(Error("Script load timeout")))
                }), i || 5e3), r
            }
            return null
        }

        function g() {
            this.a = 0, this.c = null
        }

        function h(e) {
            return e.a++,
                function() {
                    e.a--, w(e)
                }
        }

        function f(e, t) {
            e.c = t, w(e)
        }

        function w(e) {
            0 == e.a && e.c && (e.c(), e.c = null)
        }

        function v(e) {
            this.a = e || "-"
        }

        function y(e, t) {
            this.c = e, this.f = 4, this.a = "n";
            var n = (t || "n4").match(/^([nio])([1-9])$/i);
            n && (this.a = n[1], this.f = parseInt(n[2], 10))
        }

        function I(e) {
            var t = [];
            e = e.split(/,\s*/);
            for (var n = 0; n < e.length; n++) {
                var i = e[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
            }
            return t.join(",")
        }

        function b(e) {
            return e.a + e.f
        }

        function C(e) {
            var t = "normal";
            return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
        }

        function k(e) {
            var t = 4,
                n = "n",
                i = null;
            return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))), n + t
        }

        function S(e, t) {
            this.c = e, this.f = e.o.document.documentElement, this.h = t, this.a = new v("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
        }

        function O(e) {
            if (e.g) {
                var t = u(e.f, e.a.c("wf", "active")),
                    n = [],
                    i = [e.a.c("wf", "loading")];
                t || n.push(e.a.c("wf", "inactive")), d(e.f, n, i)
            }
            M(e, "inactive")
        }

        function M(e, t, n) {
            e.j && e.h[t] && (n ? e.h[t](n.c, b(n)) : e.h[t]())
        }

        function _() {
            this.c = {}
        }

        function P(e, t) {
            this.c = e, this.f = t, this.a = s(this.c, "span", {
                "aria-hidden": "true"
            }, this.f)
        }

        function E(e) {
            c(e.c, "body", e.a)
        }

        function A(e) {
            return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(e.c) + ";font-style:" + C(e) + ";font-weight:" + e.f + "00;"
        }

        function R(e, t, n, i, o, r) {
            this.g = e, this.j = t, this.a = i, this.c = n, this.f = o || 3e3, this.h = r || void 0
        }

        function T(e, t, n, i, o, r, a) {
            this.v = e, this.B = t, this.c = n, this.a = i, this.s = a || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = r || null, this.m = this.j = this.h = this.g = null, this.g = new P(this.c, this.s), this.h = new P(this.c, this.s), this.j = new P(this.c, this.s), this.m = new P(this.c, this.s), e = A(e = new y(this.a.c + ",serif", b(this.a))), this.g.a.style.cssText = e, e = A(e = new y(this.a.c + ",sans-serif", b(this.a))), this.h.a.style.cssText = e, e = A(e = new y("serif", b(this.a))), this.j.a.style.cssText = e, e = A(e = new y("sans-serif", b(this.a))), this.m.a.style.cssText = e, E(this.g), E(this.h), E(this.j), E(this.m)
        }
        v.prototype.c = function(e) {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.a)
        }, R.prototype.start = function() {
            var e = this.c.o.document,
                t = this,
                n = o(),
                i = new Promise((function(i, r) {
                    ! function a() {
                        var s;
                        o() - n >= t.f ? r() : e.fonts.load(C(s = t.a) + " " + s.f + "00 300px " + I(s.c), t.h).then((function(e) {
                            1 <= e.length ? i() : setTimeout(a, 25)
                        }), (function() {
                            r()
                        }))
                    }()
                })),
                r = null;
            Promise.race([new Promise((function(e, n) {
                r = setTimeout(n, t.f)
            })), i]).then((function() {
                r && (clearTimeout(r), r = null), t.g(t.a)
            }), (function() {
                t.j(t.a)
            }))
        };
        var x = {
                D: "serif",
                C: "sans-serif"
            },
            D = null;

        function N() {
            if (null === D) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                D = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
            }
            return D
        }

        function L(e, t, n) {
            for (var i in x)
                if (x.hasOwnProperty(i) && t === e.f[x[i]] && n === e.f[x[i]]) return !0;
            return !1
        }

        function U(e, t) {
            setTimeout(i((function() {
                l(this.g.a), l(this.h.a), l(this.j.a), l(this.m.a), t(this.a)
            }), e), 0)
        }

        function V(e, t, n) {
            this.c = e, this.a = t, this.f = 0, this.m = this.j = !1, this.s = n
        }
        T.prototype.start = function() {
            this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = o(),
                function e(t) {
                    var n, r = t.g.a.offsetWidth,
                        a = t.h.a.offsetWidth;
                    (n = r === t.f.serif && a === t.f["sans-serif"]) || (n = N() && L(t, r, a)), n ? o() - t.A >= t.w ? N() && L(t, r, a) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? U(t, t.v) : U(t, t.B) : setTimeout(i((function() {
                        e(this)
                    }), t), 50) : U(t, t.v)
                }(this)
        };
        var F = null;

        function j(e) {
            0 == --e.f && e.j && (e.m ? ((e = e.a).g && d(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), M(e, "active")) : O(e.a))
        }

        function B(e) {
            this.j = e, this.a = new _, this.h = 0, this.f = this.g = !0
        }

        function q(t, n, o, r, a) {
            var s = 0 == --t.h;
            (t.f || t.g) && setTimeout((function() {
                var t = a || null,
                    c = r || {};
                if (0 === o.length && s) O(n.a);
                else {
                    n.f += o.length, s && (n.j = s);
                    var l, u = [];
                    for (l = 0; l < o.length; l++) {
                        var p = o[l],
                            m = c[p.c],
                            g = n.a,
                            h = p;
                        if (g.g && d(g.f, [g.a.c("wf", h.c, b(h).toString(), "loading")]), M(g, "fontloading", h), g = null, null === F)
                            if (e.FontFace) {
                                h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                var f = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                F = h ? 42 < parseInt(h[1], 10) : !f
                            } else F = !1;
                        g = F ? new R(i(n.g, n), i(n.h, n), n.c, p, n.s, m) : new T(i(n.g, n), i(n.h, n), n.c, p, n.s, t, m), u.push(g)
                    }
                    for (l = 0; l < u.length; l++) u[l].start()
                }
            }), 0)
        }

        function H(e, t) {
            this.c = e, this.a = t
        }

        function J(e, t) {
            this.c = e, this.a = t
        }

        function G(e, t) {
            this.c = e || W, this.a = [], this.f = [], this.g = t || ""
        }
        V.prototype.g = function(e) {
            var t = this.a;
            t.g && d(t.f, [t.a.c("wf", e.c, b(e).toString(), "active")], [t.a.c("wf", e.c, b(e).toString(), "loading"), t.a.c("wf", e.c, b(e).toString(), "inactive")]), M(t, "fontactive", e), this.m = !0, j(this)
        }, V.prototype.h = function(e) {
            var t = this.a;
            if (t.g) {
                var n = u(t.f, t.a.c("wf", e.c, b(e).toString(), "active")),
                    i = [],
                    o = [t.a.c("wf", e.c, b(e).toString(), "loading")];
                n || i.push(t.a.c("wf", e.c, b(e).toString(), "inactive")), d(t.f, i, o)
            }
            M(t, "fontinactive", e), j(this)
        }, B.prototype.load = function(e) {
            this.c = new r(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes,
                function(e, t, n) {
                    var i, o = [],
                        r = n.timeout;
                    (i = t).g && d(i.f, [i.a.c("wf", "loading")]), M(i, "loading");
                    o = function(e, t, n) {
                        var i, o = [];
                        for (i in t)
                            if (t.hasOwnProperty(i)) {
                                var r = e.c[i];
                                r && o.push(r(t[i], n))
                            }
                        return o
                    }(e.a, n, e.c);
                    var a = new V(e.c, t, r);
                    for (e.h = o.length, t = 0, n = o.length; t < n; t++) o[t].load((function(t, n, i) {
                        q(e, a, t, n, i)
                    }))
                }(this, new S(this.c, e), e)
        }, H.prototype.load = function(e) {
            var t = this,
                n = t.a.projectId,
                i = t.a.version;
            if (n) {
                var o = t.c.o;
                m(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (i ? "?v=" + i : ""), (function(i) {
                    i ? e([]) : (o["__MonotypeConfiguration__" + n] = function() {
                        return t.a
                    }, function t() {
                        if (o["__mti_fntLst" + n]) {
                            var i, r = o["__mti_fntLst" + n](),
                                a = [];
                            if (r)
                                for (var s = 0; s < r.length; s++) {
                                    var c = r[s].fontfamily;
                                    null != r[s].fontStyle && null != r[s].fontWeight ? (i = r[s].fontStyle + r[s].fontWeight, a.push(new y(c, i))) : a.push(new y(c))
                                }
                            e(a)
                        } else setTimeout((function() {
                            t()
                        }), 50)
                    }())
                })).id = "__MonotypeAPIScript__" + n
            } else e([])
        }, J.prototype.load = function(e) {
            var t, n, i = this.a.urls || [],
                o = this.a.families || [],
                r = this.a.testStrings || {},
                a = new g;
            for (t = 0, n = i.length; t < n; t++) p(this.c, i[t], h(a));
            var s = [];
            for (t = 0, n = o.length; t < n; t++)
                if ((i = o[t].split(":"))[1])
                    for (var c = i[1].split(","), l = 0; l < c.length; l += 1) s.push(new y(i[0], c[l]));
                else s.push(new y(i[0]));
            f(a, (function() {
                e(s, r)
            }))
        };
        var W = OptiMonkRegistry.features.BUNNY_FONTS ? "https://fonts.bunny.net/css" : "https://fonts.googleapis.com/css";

        function z(e) {
            this.f = e, this.a = [], this.c = {}
        }
        var K = {
                latin: "BESbswy",
                "latin-ext": "çöüğş",
                cyrillic: "йяЖ",
                greek: "αβΣ",
                khmer: "កខគ",
                Hanuman: "កខគ"
            },
            X = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            },
            $ = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            },
            Y = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

        function Z(e, t) {
            this.c = e, this.a = t
        }
        var Q = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };

        function ee(e, t) {
            this.c = e, this.a = t
        }

        function te(e, t) {
            this.c = e, this.f = t, this.a = []
        }
        Z.prototype.load = function(e) {
            var t = new g,
                n = this.c,
                i = new G(this.a.api, this.a.text),
                o = this.a.families;
            ! function(e, t) {
                for (var n = t.length, i = 0; i < n; i++) {
                    var o = t[i].split(":");
                    3 == o.length && e.f.push(o.pop());
                    var r = "";
                    2 == o.length && "" != o[1] && (r = ":"), e.a.push(o.join(r))
                }
            }(i, o);
            var r = new z(o);
            (function(e) {
                for (var t = e.f.length, n = 0; n < t; n++) {
                    var i = e.f[n].split(":"),
                        o = i[0].replace(/\+/g, " "),
                        r = ["n4"];
                    if (2 <= i.length) {
                        var a, s;
                        if (a = [], c = i[1])
                            for (var c, l = (c = c.split(",")).length, d = 0; d < l; d++) {
                                if ((s = c[d]).match(/^[\w-]+$/))
                                    if (null == (u = Y.exec(s.toLowerCase()))) s = "";
                                    else {
                                        if (s = null == (s = u[2]) || "" == s ? "n" : $[s], null == (u = u[1]) || "" == u) u = "4";
                                        else var u = X[u] || (isNaN(u) ? "4" : u.substr(0, 1));
                                        s = [s, u].join("")
                                    }
                                else s = "";
                                s && a.push(s)
                            }
                        0 < a.length && (r = a), 3 == i.length && (a = [], 0 < (i = (i = i[2]) ? i.split(",") : a).length && (i = K[i[0]]) && (e.c[o] = i))
                    }
                    for (e.c[o] || (i = K[o]) && (e.c[o] = i), i = 0; i < r.length; i += 1) e.a.push(new y(o, r[i]))
                }
            })(r), p(n, function(e) {
                if (0 == e.a.length) throw Error("No fonts to load!");
                if (-1 != e.c.indexOf("kit=")) return e.c;
                for (var t = e.a.length, n = [], i = 0; i < t; i++) n.push(e.a[i].replace(/ /g, "+"));
                return t = e.c + "?family=" + n.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
            }(i), h(t)), f(t, (function() {
                e(r.a, r.c, Q)
            }))
        }, ee.prototype.load = function(e) {
            var t = this.a.id,
                n = this.c.o;
            t ? m(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", (function(t) {
                if (t) e([]);
                else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                    t = n.Typekit.config.fn;
                    for (var i = [], o = 0; o < t.length; o += 2)
                        for (var r = t[o], a = t[o + 1], s = 0; s < a.length; s++) i.push(new y(r, a[s]));
                    try {
                        n.Typekit.load({
                            events: !1,
                            classes: !1,
                            async: !0
                        })
                    } catch (e) {}
                    e(i)
                }
            }), 2e3) : e([])
        }, te.prototype.load = function(e) {
            var t, n = this.f.id,
                i = this.c.o,
                o = this;
            n ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}), i.__webfontfontdeckmodule__[n] = function(t, n) {
                for (var i = 0, r = n.fonts.length; i < r; ++i) {
                    var a = n.fonts[i];
                    o.a.push(new y(a.name, k("font-weight:" + a.weight + ";font-style:" + a.style)))
                }
                e(o.a)
            }, m(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ((t = this.c).o.location.hostname || t.a.location.hostname) + "/" + n + ".js", (function(t) {
                t && e([])
            }))) : e([])
        };
        var ne = new B(e);
        ne.a.c.custom = function(e, t) {
            return new J(t, e)
        }, ne.a.c.fontdeck = function(e, t) {
            return new te(t, e)
        }, ne.a.c.monotype = function(e, t) {
            return new H(t, e)
        }, ne.a.c.typekit = function(e, t) {
            return new ee(t, e)
        }, ne.a.c.google = function(e, t) {
            return new Z(t, e)
        };
        var ie = {
            load: i(ne.load, ne)
        };
        e.WebFont = ie, e.WebFontConfig && ne.load(e.WebFontConfig)
    }()
}
const a = "om-diag",
    s = {
        EMBEDDED: "om-embedded-diag-id",
        POPUP: "om-popup-diag-id"
    },
    c = {
        MISSING_META: "missingMetaData",
        BEFORE_INIT: "beforeInit",
        PRE_VALIDATION: "preValidation",
        LIMIT_REACHED: "limitReached",
        NO_VALID_EXPERIENCE: "noValidExperience"
    },
    l = {
        POPUP: "popup",
        EMBEDDED: "embedded"
    },
    d = function() {
        return Ce(...arguments)
    },
    u = function() {
        return ke(...arguments)
    },
    p = e => Se(e),
    m = () => OptiMonkRegistry.account,
    g = () => OptiMonkRegistry.clientId,
    h = () => OptiMonkRegistry.uuid,
    f = e => OptiMonkRegistry.uuid + "-" + e,
    w = () => OptiMonkRegistry.features,
    v = () => OptiMonkEmbedded.CookieManager,
    y = () => OptiMonkRegistry.isPreview,
    I = function(e, t) {
        return void 0 === t && (t = 10), parseInt(e, t)
    },
    b = e => "" + e,
    C = () => I(W.session.getItem("optiMonkSession")),
    k = () => Math.trunc((new Date).getTime() / 1e3),
    S = () => OptiMonkEmbedded.RequestService,
    O = () => OptiMonkEmbedded.Visitor,
    M = [],
    _ = function(e, t, n) {
        e.addEventListener ? (e.addEventListener(t, n, !1), M.push({
            obj: e,
            type: t,
            fn: n
        })) : e.attachEvent ? (e.attachEvent("on" + t, (function() {
            n.apply(e, new Array(window.event))
        })), M.push({
            obj: e,
            type: t,
            fn: n
        })) : (e["on" + t] = n, M.push({
            obj: e,
            type: t,
            fn: n
        }))
    },
    P = function(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] && delete e["on" + t]
    },
    E = function() {
        for (let e = 0; e < M.length; ++e) {
            const t = M[e];
            P(t.obj, t.type, t.fn)
        }
        M.splice(0, M.length)
    },
    A = function(e, t, n) {
        return JSON.stringify(e, t, n)
    },
    R = function(e, t) {
        return JSON.parse(e, t)
    },
    T = function(e, t) {
        return "object" != typeof t ? function(e, t) {
            if ("string" != typeof e) return decodeURIComponent(e);
            let n, i = "",
                o = 0;
            const r = e.split(/(%(?:d0|d1)%.{2})/);
            for (let e = r.length; o < e; o++) {
                try {
                    n = decodeURIComponent(r[o])
                } catch (e) {
                    n = t ? r[o].replace(/%(?!\d+)/g, "%25") : r[o]
                }
                i += n
            }
            return i
        }(t) : t
    },
    x = function(e) {
        return null === e ? "" : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    },
    D = function(e, t, n, i) {
        if (void 0 === i && (i = ""), t) {
            const o = document.createElement("script");
            !1 !== n && (o.onload = function() {
                const t = new CustomEvent(e + "Loaded", {
                    bubbles: !0,
                    cancelable: !0
                });
                document.dispatchEvent(t)
            }), OptiMonkRegistry.nonce && o.setAttribute("nonce", OptiMonkRegistry.nonce), o.src = t, o.async = !0, i && (o.id = i), document.getElementsByTagName("head")[0].appendChild(o)
        } else console.log("no src for script", e)
    },
    N = (e, t, n) => new Promise((i => {
        let o = 0;
        const r = () => {
            if (o >= 20) return OptiMonkRegistry.isDebug && console.log("wait for element retries limit reached", e), void i(!1);
            let a = document.querySelector(e);
            if (!a && n)
                for (let e = 0; e < n.length && (a = document.querySelector(n[e]), !a); e++);
            if (a) {
                const e = t(a);
                i(!0 === e)
            } else o++, window.requestAnimationFrame(r)
        };
        r()
    })),
    L = e => {
        let {
            oldItems: t,
            newItems: n,
            idFieldName: i
        } = e;
        return {
            oldProductsIds: t.map((e => "" + e[i])),
            newProductsIds: n.map((e => "" + e[i]))
        }
    },
    U = e => {
        let {
            type: t,
            oldItems: n,
            newItems: i
        } = e;
        const o = "shoprenter" === t || "unas" === t || "woocommerce" === t ? "id" : "product_id",
            {
                oldProductsIds: r,
                newProductsIds: a
            } = L({
                oldItems: n,
                newItems: i,
                idFieldName: o
            }),
            s = new Set(r),
            c = new Set(a);
        return s.size !== c.size || new Set([...s, ...c]).size !== s.size
    },
    V = e => {
        let {
            type: t,
            oldItems: n,
            newItems: i
        } = e;
        const o = "shoprenter" === t || "unas" === t || "woocommerce" === t ? "id" : "product_id",
            {
                oldProductsIds: r,
                newProductsIds: a
            } = L({
                oldItems: n,
                newItems: i,
                idFieldName: o
            });
        return n.length === i.length ? (e => {
            let {
                oldItems: t,
                newItems: n,
                oldProductsIds: i,
                newProductsIds: o,
                idFieldName: r
            } = e;
            if (!(e => {
                    let {
                        oldProductsIds: t,
                        newProductsIds: n
                    } = e;
                    return t.every((e => n.some((t => "" + t == "" + e))))
                })({
                    oldProductsIds: i,
                    newProductsIds: o
                })) return null;
            const a = (e => {
                let {
                    oldItems: t,
                    newItems: n,
                    idFieldName: i
                } = e;
                return n.find((e => {
                    var n;
                    const o = null == (n = t.find((t => t[i] === e[i]))) ? void 0 : n.quantity;
                    return e.quantity !== o && e.quantity > o
                }))
            })({
                oldItems: t,
                newItems: n,
                idFieldName: r
            });
            return a ? (e => {
                let {
                    oldItems: t,
                    idFieldName: n,
                    increasedQuantityProduct: i
                } = e;
                const {
                    price: o,
                    quantity: r,
                    [n]: a
                } = i;
                return {
                    price: o,
                    productId: a,
                    quantity: r - t.find((e => "" + e[n] == "" + i[n])).quantity
                }
            })({
                oldItems: t,
                newItems: n,
                idFieldName: r,
                increasedQuantityProduct: a
            }) : null
        })({
            oldItems: n,
            newItems: i,
            oldProductsIds: r,
            newProductsIds: a,
            idFieldName: o
        }) : n.length > i.length ? null : (e => {
            let {
                newItems: t,
                idFieldName: n,
                oldProductsIds: i
            } = e;
            const o = t.find((e => !i.includes("" + e[n])));
            if (!o) return null;
            const {
                price: r,
                quantity: a,
                [n]: s,
                sku: c
            } = o;
            return {
                sku: c,
                price: r,
                quantity: a,
                productId: s
            }
        })({
            newItems: i,
            idFieldName: o,
            oldProductsIds: r
        })
    },
    F = () => {
        let e = [];
        try {
            const {
                fonts: t
            } = document, n = t.entries(), i = [];
            let o = !1;
            for (; !o;) {
                const e = n.next();
                e.done ? o = e.done : i.push(e.value[0].family.replace(/^["']|["']$/g, ""))
            }
            e = [...new Set(i)]
        } catch (e) {
            console.error("Error while getting used fonts")
        }
        return e
    },
    j = () => !!w().FREQUENCY_RULE_V2,
    B = e => e.reduce(((e, t) => i({}, e, {
        [t.id]: t
    })), {}),
    q = function(e) {
        return "object" == typeof e && (e = A(e)), navigator.userAgent.match(/^Opera.* Version\/12.*/) ? encodeURIComponent(e) : e
    },
    H = {
        getItems(e) {
            const t = new RegExp("(" + e + "=([^;]+))", "g"),
                n = document.cookie.matchAll(t),
                i = {};
            for (const e of n) {
                const [, t] = e, [n, o] = t.split("=");
                n && o && Object.assign(i, {
                    [n]: decodeURIComponent(o)
                })
            }
            return i
        },
        getItem(e) {
            const t = document.cookie.match(new RegExp(e + "=([^;]+)"));
            return t ? decodeURIComponent(t[1]) : null
        },
        getItemSlices(e, t) {
            const n = new RegExp(e + "_" + OptiMonkRegistry.account + "_[0-9]+=([^;]+)\\;?", "gm");
            let i, o = [];
            for (; i = n.exec(document.cookie);) {
                const e = "function" == typeof t ? t(i[1]) : i[1];
                o = o.concat(JSON.parse(decodeURIComponent(e)))
            }
            return o
        },
        getItemSlicesRaw(e) {
            const t = new RegExp("(" + e + "_" + OptiMonkRegistry.account + "_[0-9]+)=([^;]+)\\;?", "gm"),
                n = [];
            let i;
            for (; i = t.exec(document.cookie);) n.push({
                key: i[1],
                value: i[2]
            });
            return n
        },
        removeItem: e => !!H.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;", !0),
        hasItem: e => !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie),
        setItem(e, t, n) {
            const i = new Date;
            let o = q(t);
            void 0 !== n ? i.setTime(i.getTime() + 1e3 * n) : i.setUTCFullYear(i.getUTCFullYear() + 1), o += "; expires=" + i.toUTCString(), document.cookie = e + "=" + o + ";path=/;"
        }
    },
    J = {
        setItem(e, t) {
            const n = q(t);
            document.cookie = e + "=" + n + ";path=/;"
        },
        getItem: e => H.getItem(e),
        getItemSlices: e => H.getItemSlices(e),
        hasItem: e => H.hasItem(e),
        removeItem: e => H.removeItem(e)
    },
    G = {},
    W = {
        local: H,
        session: J,
        CampaignCookieCollection: {
            add(e) {
                G[e.getCampaignId()] = e
            },
            getByCampaignId: e => G[e],
            getAllAsArray: () => Object.keys(G).map((e => G[e]))
        }
    };
var z = String.fromCharCode,
    K = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    X = {};
const $ = {
        compressToBase64: function(e) {
            if (null == e) return "";
            var t = $._compress(e, 6, (function(e) {
                return K.charAt(e)
            }));
            switch (t.length % 4) {
                default:
                    case 0:
                    return t;
                case 1:
                        return t + "===";
                case 2:
                        return t + "==";
                case 3:
                        return t + "="
            }
        },
        decompressFromBase64: function(e) {
            return null == e ? "" : "" == e ? null : $._decompress(e.length, 32, (function(t) {
                return function(e, t) {
                    if (!X[e]) {
                        X[e] = {};
                        for (var n = 0; n < e.length; n++) X[e][e.charAt(n)] = n
                    }
                    return X[e][t]
                }(K, e.charAt(t))
            }))
        },
        _compress: function(e, t, n) {
            if (null == e) return "";
            var i, o, r, a = {},
                s = {},
                c = "",
                l = "",
                d = "",
                u = 2,
                p = 3,
                m = 2,
                g = [],
                h = 0,
                f = 0;
            for (r = 0; r < e.length; r += 1)
                if (c = e.charAt(r), Object.prototype.hasOwnProperty.call(a, c) || (a[c] = p++, s[c] = !0), l = d + c, Object.prototype.hasOwnProperty.call(a, l)) d = l;
                else {
                    if (Object.prototype.hasOwnProperty.call(s, d)) {
                        if (d.charCodeAt(0) < 256) {
                            for (i = 0; i < m; i++) h <<= 1, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++;
                            for (o = d.charCodeAt(0), i = 0; i < 8; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1
                        } else {
                            for (o = 1, i = 0; i < m; i++) h = h << 1 | o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o = 0;
                            for (o = d.charCodeAt(0), i = 0; i < 16; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1
                        }
                        0 == --u && (u = Math.pow(2, m), m++), delete s[d]
                    } else
                        for (o = a[d], i = 0; i < m; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1;
                    0 == --u && (u = Math.pow(2, m), m++), a[l] = p++, d = String(c)
                }
            if ("" !== d) {
                if (Object.prototype.hasOwnProperty.call(s, d)) {
                    if (d.charCodeAt(0) < 256) {
                        for (i = 0; i < m; i++) h <<= 1, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++;
                        for (o = d.charCodeAt(0), i = 0; i < 8; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1
                    } else {
                        for (o = 1, i = 0; i < m; i++) h = h << 1 | o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o = 0;
                        for (o = d.charCodeAt(0), i = 0; i < 16; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1
                    }
                    0 == --u && (u = Math.pow(2, m), m++), delete s[d]
                } else
                    for (o = a[d], i = 0; i < m; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1;
                0 == --u && (u = Math.pow(2, m), m++)
            }
            for (o = 2, i = 0; i < m; i++) h = h << 1 | 1 & o, f == t - 1 ? (f = 0, g.push(n(h)), h = 0) : f++, o >>= 1;
            for (;;) {
                if (h <<= 1, f == t - 1) {
                    g.push(n(h));
                    break
                }
                f++
            }
            return g.join("")
        },
        _decompress: function(e, t, n) {
            var i, o, r, a, s, c, l, d = [],
                u = 4,
                p = 4,
                m = 3,
                g = "",
                h = [],
                f = {
                    val: n(0),
                    position: t,
                    index: 1
                };
            for (i = 0; i < 3; i += 1) d[i] = i;
            for (r = 0, s = Math.pow(2, 2), c = 1; c != s;) a = f.val & f.position, f.position >>= 1, 0 == f.position && (f.position = t, f.val = n(f.index++)), r |= (a > 0 ? 1 : 0) * c, c <<= 1;
            switch (r) {
                case 0:
                    for (r = 0, s = Math.pow(2, 8), c = 1; c != s;) a = f.val & f.position, f.position >>= 1, 0 == f.position && (f.position = t, f.val = n(f.index++)), r |= (a > 0 ? 1 : 0) * c, c <<= 1;
                    l = z(r);
                    break;
                case 1:
                    for (r = 0, s = Math.pow(2, 16), c = 1; c != s;) a = f.val & f.position, f.position >>= 1, 0 == f.position && (f.position = t, f.val = n(f.index++)), r |= (a > 0 ? 1 : 0) * c, c <<= 1;
                    l = z(r);
                    break;
                case 2:
                    return ""
            }
            for (d[3] = l, o = l, h.push(l);;) {
                if (f.index > e) return "";
                for (r = 0, s = Math.pow(2, m), c = 1; c != s;) a = f.val & f.position, f.position >>= 1, 0 == f.position && (f.position = t, f.val = n(f.index++)), r |= (a > 0 ? 1 : 0) * c, c <<= 1;
                switch (l = r) {
                    case 0:
                        for (r = 0, s = Math.pow(2, 8), c = 1; c != s;) a = f.val & f.position, f.position >>= 1, 0 == f.position && (f.position = t, f.val = n(f.index++)), r |= (a > 0 ? 1 : 0) * c, c <<= 1;
                        d[p++] = z(r), l = p - 1, u--;
                        break;
                    case 1:
                        for (r = 0, s = Math.pow(2, 16), c = 1; c != s;) a = f.val & f.position, f.position >>= 1, 0 == f.position && (f.position = t, f.val = n(f.index++)), r |= (a > 0 ? 1 : 0) * c, c <<= 1;
                        d[p++] = z(r), l = p - 1, u--;
                        break;
                    case 2:
                        return h.join("")
                }
                if (0 == u && (u = Math.pow(2, m), m++), d[l]) g = d[l];
                else {
                    if (l !== p) return null;
                    g = o + o.charAt(0)
                }
                h.push(g), d[p++] = o + g.charAt(0), o = g, 0 == --u && (u = Math.pow(2, m), m++)
            }
        }
    },
    Y = window.OptiMonk || {},
    Z = function(e, t) {
        return JSON.parse(e, t)
    },
    Q = function(e, t) {
        if ("string" != typeof e) return decodeURIComponent(e);
        var n, i, o, r = "",
            a = 0;
        for (void 0 === t && (t = 0), i = (n = e.split(/(%(?:d0|d1)%.{2})/)).length; a < i; a++) {
            try {
                o = decodeURIComponent(n[a])
            } catch (e) {
                o = t ? n[a].replace(/%(?!\d+)/g, "%25") : n[a]
            }
            r += o
        }
        return r
    },
    ee = window.setInterval;

function te(e, t) {
    const n = ee(e, t);
    return OptiMonkRegistry.intervals = OptiMonkRegistry.intervals || [], OptiMonkRegistry.intervals.push(n), n
}
const ne = window.setTimeout;

function ie(e, t) {
    const n = ne(e, t);
    return OptiMonkRegistry.timeouts = OptiMonkRegistry.timeouts || [], OptiMonkRegistry.timeouts.push(n), n
}
const oe = function(e, t) {
    let n = Object(e);
    for (let e = 1; e < arguments.length; e++) {
        let t = arguments[e];
        if (null != t)
            for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e])
    }
    return n
};

function re(e) {
    let t = [];
    return Object.keys(e).forEach((function(n) {
        Array.isArray(e[n]) ? e[n].forEach((function(e) {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
        })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]))
    })), t.join("&")
}

function ae() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    const i = t[0];
    t.splice(0, 1);
    const o = t;
    for (let e = 0; e < o.length; e += 1) {
        const n = t[e];
        if (null != n) {
            const e = Object.keys(Object(n));
            for (let t = 0, o = e.length; t < o; t += 1) {
                const o = e[t],
                    r = Object.getOwnPropertyDescriptor(n, o);
                void 0 !== r && r.enumerable && (i[o] ? Object.assign(i[o], n[o]) : i[o] = n[o])
            }
        }
    }
    return i
}

function se(e, t, n) {
    return (e = e[(t = Array.isArray(t) ? t : t.split("."))[0]]) && t.length > 1 ? se(e, t.slice(1), n) : void 0 === e ? n : e
}
var ce, le = Object.freeze({
    __proto__: null,
    stringify: function(e, t, n) {
        return JSON.stringify(e, t, n)
    },
    parse: Z,
    decodeURIComponentSafe: Q,
    parseHelper: function(e, t) {
        return "object" != typeof t ? Q(t) : t
    },
    trim: function(e) {
        return null === e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    },
    setInterval: te,
    setTimeout: ie,
    checkVariable: function(e, t, n) {
        let i = 0;
        return new Promise(((o, r) => {
            let a = te((function() {
                void 0 !== window[e] && (o(window[e]), clearInterval(a)), i++, i === t && (clearInterval(a), r(!1))
            }), n = n || 10)
        }))
    },
    assign: oe,
    debounce: function(e, t, n) {
        var i;
        return function() {
            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
            var s = this,
                c = function() {
                    i = null, n || e.apply(s, r)
                },
                l = n && !i;
            clearTimeout(i), i = ie(c, t), l && e.apply(s, r)
        }
    },
    serializeObject: re,
    isElementVisible: function(e) {
        let t = !0;
        const {
            width: n
        } = Y.elementSize(window), i = [".om-element", ".canv-col", ".canv-row"];
        for (const o of i) {
            const i = e.closest(o);
            if (i && (i.classList.contains("xs-hidden") && n <= 576 || i.classList.contains("xs-up-hidden") && n > 576)) {
                t = !1;
                break
            }
        }
        return t
    },
    merge: ae,
    getProp: se
});
const de = {
    XMLHttpRequest: window.XMLHttpRequest,
    fetch: null == (ce = window.fetch) || null == ce.bind ? void 0 : ce.bind(window),
    Promise: window.Promise,
    Date: window.Date
};

function ue() {
    return !!document.body
}
let pe, me = !1,
    ge = !1,
    he = !1;

function fe() {
    ge = !0;
    try {
        if (!ue()) return he ? (console.warn("DOM is ready but document.body is not available"), null) : ("loading" !== document.readyState && setTimeout(fe, 50), null);
        const e = document.querySelector('iframe[id="__OM_native_iframe"]');
        if (e) return pe = e, me = !0, pe;
        const t = document.createElement("iframe");
        return pe = t, pe.style.display = "none", pe.id = "__OM_native_iframe", pe.setAttribute("aria-hidden", "true"), pe.src = "about:blank", pe.onload = () => {
            me = !0
        }, ue() ? (document.body.appendChild(pe), setTimeout((() => {
            me = !0
        }), 2e3), pe) : (console.warn("Document body disappeared during iframe creation"), null)
    } catch (e) {
        return console.error("Error creating iframe:", e), null
    }
}

function we() {
    return !(!he || !ue()) && (!(!pe || !pe.parentNode || "BODY" !== pe.parentNode.nodeName) || (pe = fe(), !!pe))
}

function ve() {
    try {
        return we() && me ? pe.contentWindow : null
    } catch (e) {
        return console.error("Error accessing iframe content window:", e), null
    }
}
if ("complete" === document.readyState || "interactive" === document.readyState ? he = !0 : (document.addEventListener("DOMContentLoaded", (() => {
        he = !0, ge || fe()
    })), window.addEventListener("load", (() => {
        he = !0, ge || fe()
    }))), he) try {
    fe()
} catch (e) {
    console.error("Error during initial iframe creation:", e)
}
de.XMLHttpRequest = function() {
    if (!we()) return new window.XMLHttpRequest(...arguments);
    let e;
    try {
        const t = ve();
        e = null == t ? void 0 : t.XMLHttpRequest
    } catch (t) {
        e = null
    }
    return "function" != typeof e && (e = window.XMLHttpRequest), new e(...arguments)
}, de.fetch = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    try {
        const e = ve();
        if (e && "function" == typeof e.fetch) return e.fetch.apply(e, t)
    } catch (e) {
        console.error("Error using iframe fetch, falling back to window fetch:", e)
    }
    if ("function" == typeof window.fetch) return window.fetch.apply(window, t);
    throw new Error("No valid fetch implementation available")
};
try {
    const e = ve();
    e && (de.Promise = "function" == typeof e.Promise ? e.Promise : window.Promise, de.Date = "function" == typeof e.Date ? e.Date : window.Date)
} catch (e) {
    console.error("Error setting up Promise or Date:", e)
}
const ye = function(e, t) {
        return t.split(".").reduce((function(e, t) {
            return (e || {})[t]
        }), e)
    },
    Ie = e => $.compressToBase64(JSON.stringify(e)),
    be = (e, t) => {
        var n;
        if (null != (n = window.OptiMonkRegistry) && n.isShopifyDesignMode) {
            try {
                localStorage.setItem("optiMonkClient_designMode", JSON.stringify(t))
            } catch (e) {}
            return
        }
        const i = t[e];
        if (Object.keys(i.ca).length <= 14) W.local.setItem("optiMonkClient", Ie(t)), (e => {
            const t = W.local.getItemSlicesRaw("optiMonkClient");
            for (let n = e > 0 ? e - 1 : 0, i = t.length; n < i; n += 1) {
                const e = t[n];
                W.local.removeItem(e.key)
            }
        })();
        else {
            ((e, t, n) => {
                n.forEach((function(e, n) {
                    0 !== n && W.local.setItem("optiMonkClient_" + t + "_" + n, Ie(e))
                }));
                const i = JSON.parse(JSON.stringify(e));
                i[OptiMonkRegistry.account].ca = n[0], W.local.setItem("optiMonkClient", Ie(i))
            })(t, e, ((e, t) => {
                const n = [];
                let i = [],
                    o = 1;
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        const a = e[r];
                        a.caId = r, i.push(a), o % t == 0 && (n.push(i), i = []), o++
                    }
                return n.push(i), n
            })(i.ca, 14))
        }(() => {
            const e = W.local.getItemSlicesRaw("optiMonkClient");
            for (let t = 0, n = e.length; t < n; t += 1) {
                const n = e[t]; - 1 === n.value.indexOf("{") || W.local.removeItem(n.key)
            }
        })()
    },
    Ce = function(e, t) {
        let n;
        for (n in e) e.hasOwnProperty(n) && "length" !== n && t(n, e[n])
    },
    ke = function(e, t, n) {
        let i;
        document.createEvent ? (i = document.createEvent("HTMLEvents"), i.initEvent(t, !0, !0)) : document.createEventObject && (i = document.createEventObject(), i.eventType = t), i.eventName = t, i.parameters = n || {}, e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent ? e.fireEvent("on" + i.eventType, i) : e[t] ? e[t]() : e["on" + t] && e["on" + t]()
    },
    Se = function(e) {
        var t;
        if (e = e || OptiMonkRegistry.account, null != (t = window.OptiMonkRegistry) && t.isShopifyDesignMode) try {
            const t = localStorage.getItem("optiMonkClient_designMode"),
                n = t ? JSON.parse(t) : {};
            return n[e] || (n[e] = {}), n[e].ca || (n[e].ca = {}), n
        } catch (t) {
            return {
                [e]: {
                    ca: {}
                }
            }
        }
        let n = W.local.getItem("optiMonkClient") || "{}",
            i = -1 === n.indexOf("{");
        if (n = Z(i ? $.decompressFromBase64(n) : n), !n[e]) return Object.keys(n).forEach((function(e) {
            let t = -1 === ["133806", "44"].indexOf(e);
            try {
                const i = ((new Date).getTime() / 1e3 - new Date(n[e].lv).getTime() || null) / 86400;
                t = t && i > 30
            } catch (e) {
                console.error("[OM] Multi account cookie deletion error", e)
            }
            t && (delete n[e], console.log("delete account cookie", e))
        })), n[e] = {}, n;
        if (Array.isArray(n[e].ca)) {
            const t = W.local.getItemSlicesRaw("optiMonkClient"),
                o = n[e].ca;
            for (let e = 0, n = t.length; e < n; e += 1) {
                const n = t[e];
                i = -1 === n.value.indexOf("{");
                let r = n.value;
                i && (r = $.decompressFromBase64(r)), Array.prototype.push.apply(o, JSON.parse(decodeURIComponent(r)))
            }
            const r = {};
            return o.forEach((function(e) {
                const t = e.caId;
                delete e.caId, r[t] = e
            })), n[e].ca = r, n
        }
        return n
    },
    Oe = (e, t, n) => {
        const i = Se();
        i[e].ca || (i[e].ca = {}), i[e].ca[t] = n, be(e, i), OptiMonkRegistry.Cookie.ca[t] = n
    },
    Me = function() {
        const e = navigator.cookieEnabled;
        let t = !!e;
        return void 0 !== e || t || (document.cookie = "isCookie", t = -1 != document.cookie.indexOf("isCookie")), t
    },
    _e = function() {
        return !!document.webkitVisibilityState && "prerender" === document.webkitVisibilityState
    },
    Pe = function() {
        return Me() && !1 === _e()
    },
    Ee = (e, t) => {
        const n = document.querySelector("html");
        ke(n, "optimonk#campaign-conversion", {
            campaignId: e,
            elementDetails: t
        })
    },
    Ae = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    },
    Re = function(e, t) {
        t.frontend = !0, t.device = OptiMonkRegistry.isMobile ? "mobile" : "desktop", de.fetch(OptiMonkRegistry.baseUrl + "/metrics", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                account: OptiMonkRegistry.account,
                event: "frontend-" + e,
                properties: t
            })
        })
    },
    Te = () => {
        const e = document.querySelector('form[action^="/cart/add"][data-delm-is-primary-form="true"]') ? document.querySelectorAll('form[action*="/cart/add"][data-delm-is-primary-form="true"]') : document.querySelectorAll('form[action*="/cart/add"]'),
            t = [...e].find((e => e.getAttribute("data-product-id") || e.getAttribute("data-productid")));
        return null != t ? t : null == e ? void 0 : e[0]
    },
    xe = function() {
        if (window.ShopifyAnalytics) {
            const e = Te();
            if (e) {
                const t = e.querySelector('[name="id"], [name="variantId"][checked]');
                if (t) return t.value
            }
            if ("undefined" != typeof URLSearchParams) {
                const e = new URLSearchParams(window.location.search).get("variant");
                if (e) return e
            }
            return ye(window.ShopifyAnalytics, "meta.selectedVariantId") || null
        }
        if (window.ShopRenter) return ye(window.ShopRenter, "product.id") || null;
        if (window.mpro && window.dataLayer) {
            var e, t, n;
            const i = null == (e = window.dataLayer.find((e => "view_item" === e.event))) || null == (t = e.ecommerce) || null == (n = t.items) ? void 0 : n[0];
            return (null == i ? void 0 : i.item_variant) || (null == i ? void 0 : i.item_id) || null
        }
    },
    De = () => {
        var e;
        const t = Te(),
            n = (null == t || null == t.querySelectorAll ? void 0 : t.querySelectorAll('[name="id"] option, [name="variantId"]')) || [];
        return null == (e = Array.from(n)) || null == e.map ? void 0 : e.map((e => ({
            id: e.value
        })))
    },
    Ne = function() {
        var e, t;
        let n = null,
            i = xe();
        if (window.ShopifyAnalytics) {
            n = ye(window.ShopifyAnalytics, "meta.product.id");
            const e = De(),
                t = e.length ? e : ye(window.ShopifyAnalytics, "meta.product.variants");
            if (t) {
                t.find((function(e) {
                    return "" + e.id == "" + i
                })) || (i = null)
            }
        } else if (window.ShopRenter) i = ye(window.ShopRenter, "product.id"), n = ye(window.ShopRenter, "product.parent.id") || i;
        else if (window.UNAS) n = ye(window.UNAS, "shop.product_id"), i = n;
        else if (window.WooDataForOM) n = ye(window.WooDataForOM, "product.id"), i = n;
        else if (null != (e = window.$) && e.Gomag && null != (t = window.$.Gomag) && t.environment.Product) n = ye(window.$.Gomag.environment, "Product"), i = n;
        else if (window.mpro && window.dataLayer) {
            var o, r, a;
            const e = null == (o = window.dataLayer.find((e => "view_item" === e.event))) || null == (r = o.ecommerce) || null == (a = r.items) ? void 0 : a[0];
            e && (n = e.item_id, i = e.item_variant || n)
        }
        return n && i ? {
            productId: "" + n,
            variantId: "" + i
        } : null
    };
Y.loadScript = function(e, t) {
    "/" !== e.charAt(0) && (e = "/" + e), OptiMonkEmbedded.AssetManager.loadAsset(OptiMonkRegistry.getAssetUrlFor(e), "js", t)
};
var Le = Object.freeze({
    __proto__: null,
    each: Ce,
    triggerEvent: ke,
    getCookie: Se,
    updateCampaignCookie: Oe,
    isCookieEnabled: Me,
    isPreRender: _e,
    shouldContinueLoading: Pe,
    triggerConversion: Ee,
    uuid: Ae,
    requestIdleCallback: function(e, t) {
        if (window.requestIdleCallback) return window.requestIdleCallback(e, t);
        const n = Date.now(),
            i = t && "number" == typeof t.timeout ? t.timeout : 50;
        return setTimeout((function() {
            e({
                didTimeout: !1,
                timeRemaining: () => Math.max(0, i - (Date.now() - n))
            })
        }), 1)
    },
    cancelIdleCallback: function(e) {
        if (window.cancelIdleCallback) return window.cancelIdleCallback(e);
        clearTimeout(e)
    },
    sendMetrics: Re,
    getAddToCartForm: Te,
    getSelectedVariantId: xe,
    getShopifyVariantsFromDOM: De,
    getViewedProductIds: Ne,
    getExperimentalSetting: function(e) {
        var t;
        return null == (t = Y.experimentalSettings) ? void 0 : t[e]
    }
});
class Ue {
    isEnabled() {
        return !1
    }
    sendNonInteractionEvent(e, t, n) {}
    sendInteractionEvent(e, t, n) {}
}
const Ve = function(e, t) {
        var n;
        void 0 === t && (t = {}), null == (n = OptiMonkRegistry.JFEvents) || n.push([e, t])
    },
    Fe = () => {
        let e;
        for (; e = OptiMonkRegistry.JFEvents.shift();) {
            if (!Array.isArray(e) || "string" != typeof e[0]) return void console.warn("invalid pre-registered event: must be a tuple: [eventType, props]");
            const [t, n = {}] = e;
            window.JFClientSDK.v2.registerCustomEvent(t, n)
        }(() => {
            if (OptiMonkRegistry.JFEvents.push !== Array.prototype.push) return;
            let e;
            OptiMonkRegistry.JFEvents.push = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                n.forEach((e => {
                    if (!Array.isArray(e) || "string" != typeof e[0]) return void console.warn("invalid invocation: must be called with a tuple: [eventType, props]");
                    const [t, n = {}] = e;
                    window.JFClientSDK.v2.registerCustomEvent(t, n || {})
                })), clearTimeout(e), e = setTimeout((() => {
                    window.JFClientSDK.v2.go()
                }), 200)
            }
        })()
    },
    je = e => {
        switch (e) {
            case "shown":
                return "impression";
            case "filled":
                return "conversion";
            case "no":
                return "rejected";
            case "close(x)":
                return "closex";
            default:
                return e
        }
    },
    Be = (e, t) => {
        var n, i, o, r, a;
        const s = (null == (n = window.OptiMonkEmbedded) || null == (i = n.campaigns) ? void 0 : i[e]) || (null == (o = window.OptiMonk) || null == (r = o.campaigns) ? void 0 : r[e]);
        return (null == s || null == (a = s.experiences) ? void 0 : a.find((e => e.variants.includes(t)))) || {
            name: ""
        }
    };
class qe {
    getJF() {
        return window.JFClientSDK && window.JFClientSDK.v2
    }
    isEnabled() {
        return void 0 !== this.getJF()
    }
    reportEvent(e, t) {
        const n = je(e),
            i = qe.reportEventMap[n];
        i && Ve(i, {
            campaignId: "" + t.getId(),
            variantId: t.getCreativeId(),
            deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
        })
    }
    sendNonInteractionEvent(e, t, n, i) {
        this.isEnabled() && this.reportEvent(t, i)
    }
    sendInteractionEvent(e, t, n, i) {
        this.isEnabled() && this.reportEvent(t, i)
    }
}
qe.reportEventMap = {
    closex: "eoc"
};
var He = Object.freeze({
    __proto__: null,
    TYPE_GTAG: "gtag",
    TYPE_GA: "ga",
    TYPE_CLASSIC: "classic",
    TYPE_UNIVERSAL: "universal",
    TYPE_TAG_MANAGER: "tag-manager",
    TYPE_GA4: "ga4",
    TYPE_TAG_MANAGER_GA4: "tag-manager-ga4",
    TYPE_JF: "jf"
});
class Je {
    constructor(e) {
        var t;
        this.fnName = e;
        const n = (null == Y || null == (t = Y.config) ? void 0 : t.analytics) || {};
        n.trackerName ? this.trackerName = n.trackerName + "." : this.trackerName = ""
    }
    checkFnAvailability(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        if ("function" == typeof window[this.fnName]) return window[this.fnName](...n);
        if (!(++e <= 5)) throw new Error("ga() is not loaded.");
        setTimeout((() => {
            this.checkFnAvailability(e, ...n)
        }), 1e3)
    }
    ga() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        this.checkFnAvailability(0, ...t)
    }
    sendNonInteractionEvent(e, t, n) {
        this.ga(this.trackerName + "send", "event", e, t, n, {
            nonInteraction: 1
        })
    }
    sendInteractionEvent(e, t, n) {
        this.ga(this.trackerName + "send", "event", e, t, n)
    }
}
class Ge {
    constructor(e) {
        this.ga = e
    }
    sendNonInteractionEvent(e, t, n) {
        this.ga("event", t, {
            event_category: e,
            event_label: n,
            non_interaction: 1
        })
    }
    sendInteractionEvent(e, t, n) {
        this.ga("event", t, {
            event_category: e,
            event_label: n
        })
    }
}
class We {
    sendNonInteractionEvent(e, t, n) {}
    sendInteractionEvent(e, t, n) {}
}
const ze = {
    create(e) {
        var t;
        const n = (null == Y || null == (t = Y.config) ? void 0 : t.analytics) || {};
        switch (e) {
            case "gtag":
                return new Ge(window.gtag);
            case "ga":
                return new Je(n.varName || "ga");
            default:
                return new We
        }
    }
};
class Ke {
    constructor() {
        var e;
        const t = ((null == Y || null == (e = Y.config) ? void 0 : e.analytics) || {}).varName ? "ga" : window.gtag && Ke.hasConfigId() ? "gtag" : window.ga ? "ga" : void 0;
        this.ga = ze.create(t)
    }
    isEnabled() {
        return void 0 !== this.ga
    }
    static hasConfigId() {
        for (const e in window.dataLayer)
            if (window.dataLayer.hasOwnProperty(e) && "config" === window.dataLayer[e][0] && 0 === window.dataLayer[e][1].indexOf("UA-")) return !0;
        return !1
    }
    sendNonInteractionEvent(e, t, n) {
        this.isEnabled() && this.ga.sendNonInteractionEvent(e, t, n)
    }
    sendInteractionEvent(e, t, n) {
        this.isEnabled() && this.ga.sendInteractionEvent(e, t, n)
    }
}
class Xe {
    constructor() {
        var e;
        const t = (null == Y || null == (e = Y.config) ? void 0 : e.tagManager) || {};
        this.dataLayer = window[t.varName || "dataLayer"]
    }
    isEnabled() {
        return "object" == typeof this.dataLayer
    }
    sendNonInteractionEvent(e, t, n) {
        this.isEnabled() && this.sendTagManager(e, t, n)
    }
    sendInteractionEvent(e, t, n) {
        this.isEnabled() && this.sendTagManager(e, t, n)
    }
    sendTagManager(e, t, n) {
        this.dataLayer.push({
            "OptiMonk action": t,
            "OptiMonk label": n,
            "OptiMonk category": e,
            event: "OptiMonk " + t
        })
    }
}
const $e = (e, t) => {
    if (e()) return t(e());
    setTimeout((() => {
        $e(e, t)
    }), 500)
};
class Ye {
    isEnabled() {
        return !0
    }
    sendNonInteractionEvent(e, t, n, i) {
        this.report(t, i)
    }
    sendInteractionEvent(e, t, n, i) {
        this.report(t, i)
    }
    report(e, t) {
        $e((() => window.gtag), (n => {
            const i = je(e),
                o = Be(t.getId(), t.getVariantId());
            n("event", "optimonk_campaign_event", {
                om_campaign_name: t.getName(),
                om_campaign_action: i,
                om_campaign_id: t.getId(),
                om_campaign_variant_name: t.getCreativeName(),
                om_campaign_experience_name: o.name
            })
        }))
    }
}
class Ze {
    constructor() {
        this.items = {}
    }
    get(e) {
        if (this.has(e)) return this.items[e]
    }
    has(e) {
        return this.items.hasOwnProperty(e)
    }
    set(e, t) {
        this.items[e] = t
    }
    remove(e) {
        this.has(e) && delete this.items[e]
    }
    forAll(e) {
        d(this.items, e)
    }
}
class Qe {
    isEnabled() {
        return !0
    }
    sendNonInteractionEvent(e, t, n, i) {
        this.sendTagManager(e, t, n, i)
    }
    sendInteractionEvent(e, t, n, i) {
        this.sendTagManager(e, t, n, i)
    }
    sendTagManager(e, t, n, i) {
        $e((() => {
            var e;
            const t = (null == Y || null == (e = Y.config) ? void 0 : e.tagManager) || {};
            return window[t.varName || "dataLayer"]
        }), (e => {
            const n = je(t),
                o = Be(i.getId(), i.getVariantId());
            e.push({
                campaign_id: i.getId(),
                campaign_name: i.getName(),
                variant_name: i.getCreativeName(),
                experience_name: o.name,
                action: n,
                event: "optimonk_campaign_event"
            })
        }))
    }
}
const et = new Ze,
    tt = {
        init() {
            et.set("universal", new Ke), et.set("tag-manager", new Xe), et.set("tag-manager-ga4", new Qe), et.set("ga4", new Ye), et.set("jf", new qe), et.set("default", new Ue)
        },
        create: e => et.get(e) || et.get("default"),
        getAll() {
            tt.init();
            const e = [];
            return et.forAll(((t, n) => {
                "default" !== t && e.push(n)
            })), e
        }
    },
    nt = {
        OPERATION_FILLED: "filled",
        OPERATION_SHOWED: "showed",
        OPERATION_NO: "no",
        OPERATION_CLOSE_X: "closeX",
        report(e, t) {
            if (!nt.isEnabled(t)) return;
            nt.getEnabledAdapters().forEach((n => {
                nt.send(e, n, {
                    campaign: t
                })
            }))
        },
        reportCustomEvent(e, t) {
            const n = nt.getEnabledAdapters(),
                i = {
                    getId: () => "",
                    getName: () => "",
                    getCreativeName: () => "",
                    getVariantId: () => ""
                };
            n.forEach((n => {
                nt.send(e, n, {
                    label: t,
                    campaign: i
                })
            }))
        },
        isEnabled: e => 1 === e.getAnalytics().status,
        getEnabledAdapters: () => tt.getAll().filter((e => e.isEnabled())),
        send(e, t, n) {
            let {
                campaign: i,
                label: o = null
            } = n;
            o = o || (e => e.getName() + " - " + e.getCreativeName())(i);
            const r = OptiMonkRegistry.brand;
            let a;
            switch (e) {
                case nt.OPERATION_FILLED:
                    a = "filled", t.sendInteractionEvent(r, a, o, i);
                    break;
                case nt.OPERATION_SHOWED:
                    a = "shown", t.sendNonInteractionEvent(r, a, o, i);
                    break;
                case nt.OPERATION_NO:
                    a = "no", t.sendNonInteractionEvent(r, a, o, i);
                    break;
                case nt.OPERATION_CLOSE_X:
                    a = "close(x)", t.sendNonInteractionEvent(r, a, o, i);
                    break;
                default:
                    t.sendNonInteractionEvent(r, e, o, i)
            }
        }
    },
    it = {
        init() {
            if (!OptiMonkRegistry.experimentsInitialized) {
                let e = it.readCookie();
                e && (e = this.cleanupOldExperimentsFromCookie(e)), OptiMonkRegistry.experiments && OptiMonkRegistry.experiments.length && (this.setVisitorGroups(e), this.runJsSnippets()), this.reportToGA(), OptiMonkRegistry.experimentsInitialized = !0
            }
        },
        initSafe() {
            try {
                this.init()
            } catch (e) {
                console.error("[frontend] Experiments error", e)
            }
        },
        sendToGA(e) {
            let {
                experimentName: t,
                groupName: n
            } = e;
            window.dataLayer = window.dataLayer || [], window.dataLayer.push(function() {
                return arguments
            }("event", "visitor_in_ab_test", {
                om_ab_test_name: t,
                om_ab_test_group: n
            })), window.dataLayer.push({
                om_ab_test_name: t,
                om_ab_test_group: n,
                event: "visitor_in_ab_test"
            })
        },
        reportToGA() {
            const e = it.readCookie();
            e && e.length && e.forEach((e => {
                const t = e.split("_"),
                    n = t[1],
                    i = OptiMonkRegistry.experiments.find((e => e._id === n));
                if (i) {
                    var o;
                    const e = t[3],
                        n = null == (o = i.groups.find((t => t._id.toString() === e.toString()))) ? void 0 : o.name;
                    n && this.sendToGA({
                        experimentName: i.name,
                        groupName: n
                    })
                }
            }))
        },
        readCookie() {
            const e = W.local.getItem("optiMonkExperiments");
            return e ? JSON.parse(e) : null
        },
        cleanupOldExperimentsFromCookie(e) {
            const t = JSON.parse(JSON.stringify(e));
            return e.forEach(((e, n) => {
                const i = e.split("_")[1];
                OptiMonkRegistry.experiments.some((e => e._id === i)) || t.splice(n, 1)
            })), W.local.setItem("optiMonkExperiments", t), t
        },
        inVisitorGroupPerExperiment: (e, t) => null == e ? void 0 : e.some((e => e.startsWith("experiment_" + t._id))),
        sortToGroupByTrafficShare(e) {
            const t = Math.floor(1e3 * Math.random() * e.groups.length) + 1;
            let n = 0;
            for (const i of e.groups)
                if (n += 1e3 * i.trafficShare, t <= n) return "experiment_" + e._id + "_group_" + i._id.toString()
        },
        runJsSnippet(e, t) {
            try {
                new Function(t)(), console.log("[frontend] JS snippet run for experiment:", e)
            } catch (t) {
                console.error("[frontend] Experiment JS snippet error.", e, t)
            }
        },
        runJsSnippets() {
            const e = it.readCookie();
            null == e || e.forEach((e => {
                var t, n;
                const i = e.split("_"),
                    o = i[1],
                    r = i[3],
                    a = null == (t = OptiMonkRegistry.experiments) ? void 0 : t.find((e => e._id === o)),
                    s = null == a || null == (n = a.groups) ? void 0 : n.find((e => e._id === r));
                null != s && s.jsSnippet && this.runJsSnippet(e, s.jsSnippet)
            }))
        },
        setVisitorGroups(e) {
            const t = [];
            OptiMonkRegistry.experiments.forEach((n => {
                this.inVisitorGroupPerExperiment(e, n) || t.push(this.sortToGroupByTrafficShare(n))
            })), t.length && W.local.setItem("optiMonkExperiments", [...e || [], ...t])
        }
    },
    ot = e => {
        if (e) {
            var t;
            return null == (t = it.readCookie().find((t => t.includes(e)))) ? void 0 : t.split("_")[3]
        }
        return null
    },
    rt = () => {
        const e = it.readCookie(),
            t = [];
        return e && e.length && e.forEach((e => {
            const n = e.split("_");
            t.push({
                experimentId: n[1],
                groupId: n[3]
            })
        })), JSON.stringify(t)
    };
class at {
    constructor() {
        this.type = "custom", this._cookieNames = []
    }
    getShopId() {
        return null
    }
    hasCookie() {
        let e = !1;
        for (let t = 0; t < this._cookieNames.length; ++t) {
            if (W.local.getItem(this._cookieNames[t])) {
                e = !0;
                break
            }
        }
        return e
    }
}
class st extends at {
    constructor() {
        super(...arguments), this.type = "shopify"
    }
    check() {
        return !!window.Shopify || !!window.ShopifyAnalytics
    }
    getShopId() {
        return window.Shopify && window.Shopify.shop || null
    }
}
class ct extends at {
    constructor() {
        super(...arguments), this.type = "bigcommerce", this._cookieNames = ["bc_attribution", "bc_visitor"]
    }
    check() {
        const e = window.BCData;
        return !!e && !!e.csrf_token || this.hasCookie()
    }
}
class lt extends at {
    constructor() {
        super(...arguments), this.type = "magento", this._cookieNames = ["mage-banners-cache-storage", "mage-cache-sessid", "mage-cache-storage", "mage-cache-storage-section-invalidation", "mage-messages"]
    }
    hasTags() {
        return !!(document.querySelectorAll('[href*="Magento"]') || []).length
    }
    hasTpl() {
        const e = window.checkout;
        if (e) {
            const t = e.imageTemplate;
            return !!t && "string" == typeof t && /magento/gi.test(t)
        }
        return !1
    }
    check() {
        return this.hasTags() || this.hasTpl() || this.hasCookie() || !!window.Mage
    }
}
class dt extends at {
    constructor() {
        super(...arguments), this.type = "prestashop"
    }
    check() {
        return !!window.prestashop
    }
}
const ut = () => {
        var e, t;
        if (window.WooDataForOM) return (null == (e = window.WooDataForOM) || null == (t = e.shop) ? void 0 : t.pluginVersion) || null;
        return Array.from(document.head.querySelectorAll("script")).some((e => e.innerHTML.includes("window.OptiMonkEmbedded.Visitor.createAdapter()") && e.innerHTML.includes("pvData") && e.innerHTML.includes("post_type"))) ? "2.0.9" : null
    },
    pt = e => {
        if (!e) return e;
        let t = e.toLowerCase();
        return t = t.replace(/^https?:\/\//, ""), t.startsWith("m.") ? t = t.substring(2) : t.startsWith("www.") && (t = t.substring(4)), t
    };
class mt extends at {
    constructor() {
        super(...arguments), this.type = "woocommerce"
    }
    check() {
        var e, t;
        let n = !1;
        const i = document.querySelector("body");
        return i && (n = i.classList.contains("woocommerce")), "woocommerce" === (null == (e = window.WooDataForOM) || null == (t = e.shop) ? void 0 : t.platform) || !!window.woocommerce_params || n
    }
    getShopId() {
        const e = pt(window.location.hostname);
        return "localhost" === e ? null : e
    }
    getPluginVersion() {
        return ut()
    }
}
class gt extends at {
    constructor() {
        super(...arguments), this.type = "shoprenter"
    }
    check() {
        return !!window.ShopRenter
    }
    getShopId() {
        return window.ShopRenter && window.ShopRenter.shop && window.ShopRenter.shop.name || null
    }
}
class ht extends at {
    constructor() {
        super(...arguments), this.type = "salesforce-commerce"
    }
    check() {
        const e = Array.from(document.querySelectorAll("link"));
        for (let t = 0; t < e.length; t += 1) {
            const n = e[t];
            if (n.href) {
                if (n.href.indexOf("demandware") > -1) return !0
            }
        }
        return !1
    }
}
class ft extends at {
    constructor() {
        super(...arguments), this.type = "unas"
    }
    check() {
        return !!window.UNAS
    }
    getShopId() {
        return window.UNAS && window.UNAS.shop.id.toString() || null
    }
}
class wt extends at {
    constructor() {
        super(...arguments), this.type = "gomag"
    }
    check() {
        var e;
        return !(null == (e = window.$) || !e.Gomag)
    }
    getShopId() {
        var e;
        return null != (e = window.$) && e.Gomag.mainDomain ? pt(window.$.Gomag.mainDomain) : null
    }
}
class vt extends at {
    constructor() {
        super(...arguments), this.type = "wordpress"
    }
    check() {
        const e = Array.from(document.querySelectorAll("link"));
        for (let t = 0; t < e.length; t += 1) {
            const n = e[t];
            if (n.href) {
                const e = n.href.indexOf("/wp-content/") > -1,
                    t = n.href.indexOf("/wp-includes/") > -1;
                if (e || t) return !0
            }
        }
        return !1
    }
    getPluginVersion() {
        return ut()
    }
}
class yt extends at {
    constructor() {
        super(...arguments), this.type = "drupal"
    }
    check() {
        return !!window.Drupal
    }
}
class It extends at {
    constructor() {
        super(...arguments), this.type = "merchantpro"
    }
    check() {
        return !!window.mpro
    }
    getShopId() {
        if (Object.values(window.mpro.config.page.language_urls)[0]) {
            const e = Object.values(window.mpro.config.page.language_urls)[0];
            try {
                const t = new URL(e);
                return pt(t.hostname)
            } catch (t) {
                return pt(e)
            }
        }
        return null
    }
}
let bt = !1;
const Ct = [];

function kt() {
    if (!bt) try {
        Ct.push(new st), Ct.push(new ct), Ct.push(new lt), Ct.push(new dt), Ct.push(new mt), Ct.push(new gt), Ct.push(new ht), Ct.push(new ft), Ct.push(new vt), Ct.push(new yt), Ct.push(new wt), Ct.push(new It), bt = !0
    } catch (e) {
        console.error("[Engine] Error occurred when instantiating detectors", e)
    }
}

function St() {
    bt || kt();
    for (let e = 0; e < Ct.length; e += 1) {
        const t = Ct[e];
        if (t.check()) return t
    }
    return null
}

function Ot() {
    const e = St();
    return e ? {
        type: e.type,
        shopId: e.getShopId()
    } : {
        type: "custom",
        shopId: null
    }
}
const Mt = {
        initialize: kt,
        getInfo: Ot,
        getType: function() {
            const {
                type: e
            } = Ot();
            return e
        },
        getPluginVersion: function() {
            const e = St();
            if (!e) return null;
            const t = e.type;
            return ["woocommerce", "wordpress"].includes(t) ? e.getPluginVersion() : null
        }
    },
    _t = () => {
        var e, t;
        const n = W.local.getItem("__kla_id"),
            i = W.local.getItem("optiMonkClientId");
        return {
            account: "undefined" != typeof OptiMonkRegistry ? OptiMonkRegistry.account : null,
            isKlaviyoDetected: !!n || !(null == (e = window) || null == (t = e.klaviyo) || !t.identify),
            clientId: i,
            hostname: location.hostname
        }
    },
    Pt = {
        load: function(e, t) {
            var n, o, r;
            if ("undefined" != typeof XMLHttpRequest) n = new XMLHttpRequest,
                function(e) {
                    const t = window.OptiMonkRegistry && window.OptiMonkRegistry.baseUrl;
                    return !(!t || !e || 0 !== e.indexOf(t)) && (e.indexOf("/embedded/after-pre-init") > -1 || e.indexOf("/embedded/scraper-info-for-sppo") > -1 || e.indexOf("/lrkt/project") > -1 || e.indexOf("/creative/") > -1 && e.indexOf("/report") > -1)
                }(t) && "withCredentials" in n && (n.withCredentials = !0);
            else {
                var a = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];
                for (o = 0, r = a.length; r > o; o++) try {
                    n = new ActiveXObject(a[o]);
                    break
                } catch (e) {}
            }
            return n.onreadystatechange = function() {
                if (4 === n.readyState && e) {
                    var t;
                    const o = null == (t = n.getAllResponseHeaders()) ? void 0 : t.trim().split(/[\r\n]+/).reduce(((e, t) => {
                        const n = t.split(": "),
                            o = n.shift(),
                            r = n.join(": ");
                        return i({}, e, {
                            [o]: r
                        })
                    }), {});
                    e(n.responseText, o)
                }
            }, n
        },
        get: function(e, t) {
            var n = Pt.load(t, e);
            n.open("GET", e, !0), n.send("")
        },
        post: function(e, t, n) {
            var i = Pt.load(n, t);
            i.open("POST", t, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.send(e)
        },
        postJSON: function(e, t, n) {
            var i = Pt.load(n, t);
            i.open("POST", t, !0), i.setRequestHeader("Content-type", "application/json"), i.send(e)
        }
    };

function Et(e) {
    if (OptiMonkRegistry && OptiMonkRegistry.providerServiceIdOverrides) {
        const e = window.location.hostname,
            t = pt(e),
            n = OptiMonkRegistry.providerServiceIdOverrides[t] || OptiMonkRegistry.providerServiceIdOverrides[e];
        if (n) return n
    }
    return e
}
let At = !1;
const Rt = {
        initialize() {
            At || (Mt.initialize(), At = !0)
        },
        collect(e) {
            void 0 === e && (e = !1);
            const t = Mt.getInfo();
            let n = t.shopId;
            return e && (n = Et(n)), {
                account: OptiMonkRegistry.account,
                platform: t.type,
                shopId: n,
                hostname: location.hostname,
                pluginVersion: Mt.getPluginVersion()
            }
        },
        getSiteStatus: async () => await S().getSiteStatus(),
        getKlaviyoInfo: _t,
        sendIsKlaviyoDetected() {
            const e = _t();
            Pt.post("data=" + JSON.stringify(e), OptiMonkRegistry.baseUrl + "/analytics/klaviyo")
        },
        send() {
            if (!At) throw new Error("[SiteInfo] Not initialized");
            const e = Rt.collect();
            Pt.post("data=" + JSON.stringify(e), OptiMonkRegistry.baseUrl + "/analytics/siteinfo")
        },
        async checkSiteStatus() {
            const e = await Rt.getSiteStatus();
            e && !e.error ? (e.site && setTimeout((function() {
                Rt.initialize(), Rt.send()
            }), 5e3), e.klaviyo && Rt.checkKlaviyo()) : console.error("[OM] Site status check failed")
        },
        checkKlaviyo() {
            let e, t = 10;
            setTimeout((function() {
                const n = setInterval((function() {
                    e = Rt.getKlaviyoInfo().isKlaviyoDetected, t--, (e || t < 1) && (Rt.sendIsKlaviyoDetected(), clearInterval(n))
                }), 1e3)
            }), 5e3)
        }
    },
    Tt = {
        type: "shopify",
        isShop: () => void 0 !== window.ShopifyAnalytics && void 0 !== window.Shopify,
        isProductPage: () => "product" === window.ShopifyAnalytics.meta.page.pageType,
        getProductId: () => window.ShopifyAnalytics.meta.product.id,
        getVariantId: () => window.ShopifyAnalytics.meta.selectedVariantId,
        getProductName() {
            var e, t, n, i, o;
            const r = null == (e = window.ShopifyAnalytics) || null == (t = e.meta) || null == (n = t.product) || null == (i = n.variants) || null == (o = i[0]) ? void 0 : o.name,
                a = r.indexOf("-");
            return -1 === a ? r : r.substring(0, a).trim()
        },
        getProductPageData() {
            return {
                product_id: this.getProductId()
            }
        },
        getCustomerId: () => Tt.isShop() ? ye(window.ShopifyAnalytics, "meta.page.customerId") : null,
        isCollectionPage: () => "collection" === window.ShopifyAnalytics.meta.page.pageType,
        isCheckoutPage() {
            var e, t;
            return "show" === (null == (e = window.Shopify) || null == (t = e.Checkout) ? void 0 : t.page)
        },
        getResourceId: () => window.ShopifyAnalytics.meta.page.resourceId,
        getResourceType: () => window.ShopifyAnalytics.meta.page.resourceType,
        getShopName: () => window.Shopify.shop || window.Shopify.Checkout.apiHost,
        getShopCurrency: () => window.ShopifyAnalytics.meta.currency,
        getRootURL: () => window.Shopify.routes.root,
        applyCheckoutDiscountCode: e => new Promise((t => {
            const n = document.querySelector('[data-discount-field], [name="reductions"]');
            n && (n.value = e, n.dispatchEvent(new Event("input", {
                bubbles: !0
            })), n.form) ? setTimeout((() => {
                n.form.dispatchEvent(new Event("submit", {
                    bubbles: !0
                })), t(!0)
            }), 0) : t(!1)
        }))
    };

function xt() {
    const e = Mt.getInfo();
    let t = e.type,
        n = pt(e.shopId || window.location.host);
    const i = m();
    return 58417 === i ? (n = "blendjet.myshopify.com", t = "shopify") : 88202 === i && (n = "rugby-is-life.myshopify.com", t = "shopify"), n = Et(n), {
        provider: t,
        providerServiceId: n
    }
}

function Dt() {
    let e;
    return Tt.isShop() ? e = Tt.getCustomerId() : window.ShopRenter && (e = ye(window.ShopRenter, "customer.userId")), e ? "" + e : void 0
}

function Nt() {
    const e = "mobile";
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.navigator.userAgentData && window.navigator.userAgentData.mobile || window.matchMedia("(max-width: 767px)").matches ? e : "desktop"
}

function Lt() {
    var e, t;
    const n = (null == (e = window.document) || null == e.querySelector || null == (t = e.querySelector('link[rel="canonical"]')) ? void 0 : t.getAttribute("href")) || window.location.href;
    if (!n) return null;
    return n.split("?")[0]
}
const Ut = () => {
        const e = rt(),
            t = Nt();
        Rt.initialize();
        const n = Rt.collect(!0),
            i = {
                accountId: OptiMonkRegistry.account,
                deviceId: OptiMonkRegistry.clientId,
                siteType: n.platform,
                siteId: n.shopId || n.hostname,
                shopifyY: W.local.getItem("_shopify_y"),
                userAgent: navigator.userAgent,
                url: location.href,
                canonicalUrl: Lt(),
                visitorInExperiment: e,
                deviceType: t
            };
        return window.btoa(unescape(encodeURIComponent(JSON.stringify(i))))
    },
    Vt = "showed",
    Ft = "showed",
    jt = "filled",
    Bt = "rejected";
let qt = W.local.setItem,
    Ht = W.local.getItem,
    Jt = W.local.getItemSlices,
    Gt = W.local.removeItem,
    Wt = W.local.hasItem,
    zt = W.session.setItem,
    Kt = W.session.getItem,
    Xt = W.session.getItemSlices,
    $t = W.session.removeItem,
    Yt = W.session.hasItem;
"object" == typeof localStorage && (qt = function(e, t) {
    localStorage.setItem(e, A(t))
}, Ht = function(e) {
    return R(localStorage.getItem(e), T)
}, Jt = function(e) {
    return R(localStorage.getItemSlices(e), T)
}, Gt = function(e) {
    return localStorage.removeItem(e), !0
}, Wt = function(e) {
    return null !== Ht(e)
}, zt = function(e, t) {
    sessionStorage.setItem(e, A(t))
}, Kt = function(e) {
    return R(sessionStorage.getItem(e), T)
}, Xt = function(e) {
    return R(sessionStorage.getItemSlices(e), T)
}, $t = function(e) {
    return sessionStorage.removeItem(e), !0
}, Yt = function(e) {
    return null !== Kt(e)
});
const Zt = {
        getItem: e => Ht(e),
        setItem(e, t) {
            qt(e, t)
        },
        getItemSlices: e => Jt(e),
        removeItem: e => Gt(e),
        hasItem: e => Wt(e)
    },
    Qt = {
        local: Zt,
        session: {
            getItem: e => Kt(e),
            setItem(e, t) {
                zt(e, t)
            },
            getItemSlices: e => Xt(e),
            removeItem: e => $t(e),
            hasItem: e => Yt(e)
        },
        getPreviouslyViewedPages: () => Zt.getItem("OptiMonkPreviouslyViewedPages") || {},
        setPreviouslyViewedPages: e => {
            Zt.setItem("OptiMonkPreviouslyViewedPages", e)
        },
        deletePreviouslyViewedPages: () => {
            Zt.removeItem("OptiMonkPreviouslyViewedPages")
        }
    },
    en = "embedded_placement",
    tn = "dynamic_content_preview";
var nn = new class {
    setup() {
        this._setupDCPreview(), this._setupPopupPreview(), this._setupEmbeddedPreview(), this._setupPreviewSession(), this._setupShopifyDesignModePreview()
    }
    _setupPreviewSession() {
        const e = new URLSearchParams(window.location.search),
            t = e.get("om-preview-session");
        t && (Qt.session.setItem("om-preview-session", t), e.delete("om-preview-session"), window.history.replaceState(null, null, "?" + e.toString()))
    }
    _setupDCPreview() {
        const e = new URLSearchParams(window.location.search).get("om-preview-v3-id");
        e && Qt.session.setItem("om-preview-v3-id", e);
        Qt.session.getItem("om-preview-v3-id") && (this._setIsPreview(tn), N("body", (() => {
            this.hideBody()
        })))
    }
    _setupEmbeddedPreview() {
        const e = new URLSearchParams(window.location.search);
        if (e.get("om-preview-id")) return;
        const t = e.get("om-embedded-preview-id"),
            n = JSON.parse(Qt.session.getItem("om-web-selector-settings") || "{}"),
            i = Qt.session.getItem("om-embedded-preview-id"),
            o = !!Qt.session.getItem("om-web-selector-settings");
        n.variantId && Qt.session.setItem("om-embedded-preview-id", n.variantId), t && Qt.session.setItem("om-embedded-preview-id", t), !i || t || o || (e.set("om-embedded-preview-id", i), window.history.replaceState(null, null, "?" + e.toString())), (t || n.variantId) && (this._setIsPreview(en), t ? console.log("Not hiding body for shareable preview") : N("body", (() => {
            this.hideBody()
        })))
    }
    _setupPopupPreview() {
        const e = new URLSearchParams(window.location.search).get("om-preview-id");
        e && Qt.session.setItem("om-preview-id", e), this.getPopupPreviewVariantId() && this._setIsPopupPreview()
    }
    hideBody() {
        document.body.style.display = "none"
    }
    showBody() {
        document.body.style.display = ""
    }
    _setIsPreview(e) {
        void 0 === e && (e = tn), window.OptiMonkRegistry.isPreview = !0, window.OptiMonkRegistry.previewType = e
    }
    _setIsPopupPreview() {
        window.OptiMonkRegistry.isPopupPreview = !0
    }
    getPreviewVariantId() {
        return Qt.session.getItem("om-embedded-preview-id") || Qt.session.getItem("om-preview-v3-id")
    }
    getPopupPreviewVariantId() {
        return Qt.session.getItem("om-preview-id")
    }
    isPreview() {
        return !!window.OptiMonkRegistry.isPreview
    }
    isPopupPreview() {
        return !!window.OptiMonkRegistry.isPopupPreview
    }
    isShareablePreview() {
        const e = new URLSearchParams(window.location.search).has("om-embedded-preview-id"),
            t = !!Qt.session.getItem("om-web-selector-settings");
        return e && !t
    }
    _setupShopifyDesignModePreview() {
        window.Shopify && window.Shopify.designMode && (window.OptiMonkRegistry.isShopifyDesignMode = !0, window.OM_SHOPIFY_LIVE_DOMAIN && (window.OptiMonkRegistry.shopifyLiveDomain = window.OM_SHOPIFY_LIVE_DOMAIN))
    }
    isShopifyDesignMode() {
        return !!window.OptiMonkRegistry.isShopifyDesignMode
    }
    getShopifyLiveDomain() {
        return window.OptiMonkRegistry.shopifyLiveDomain || null
    }
    handleError(e) {
        alert(e)
    }
    exitPreview() {
        Qt.session.removeItem("om-preview-v3-id"), history.replaceState(null, null, window.location.pathname), window.location.reload()
    }
};
const on = e => {
        const t = e.split("-");
        return t.forEach((function(e, n) {
            n && (t[n] = (e => e.charAt(0).toUpperCase() + e.slice(1))(t[n]))
        })), t.join("")
    },
    rn = e => {
        var t;
        return e ? null != (t = e.dataset) ? t : (e => {
            const t = {};
            if (e.hasAttributes())
                for (let n = 0, i = e.attributes.length; n < i; n += 1) {
                    const i = e.attributes[n];
                    i && 0 === i.name.indexOf("data-") && (t[on(i.name.slice(5))] = i.value)
                }
            return t
        })(e) : {}
    };
let an = null;
class sn {
    static getInstance() {
        return an || (an = new sn(S())), an
    }
    constructor(e) {
        this.campaigns = {}, this.requestService = e, an = this
    }
    isCampaignInStatus(e, t) {
        return void 0 === t && (t = []), t.includes(this.campaigns[e])
    }
    setCampaignInnerStatus(e, t) {
        this.campaigns[e] = t
    }
    reportConversion(e, t) {
        const n = {
                id: e.id,
                class: e.class,
                data: rn(e),
                snapshotElementData: rn(e.closest(".OM-conversion-snapshotList"))
            },
            i = t.getId();
        Ee(i, n), !1 !== this.isCampaignInStatus(i, [Ft]) && (this.setCampaignInnerStatus(i, jt), nt.report(nt.OPERATION_FILLED, t))
    }
    reportRejected(e) {
        const t = e.getId();
        !1 !== this.isCampaignInStatus(t, [Ft]) && (this.setCampaignInnerStatus(t, Bt), nt.report(nt.OPERATION_NO, e))
    }
    reportCampaignShow(e) {
        if (nn.isPreview()) return;
        const t = e.getId();
        this.isCampaignInStatus(t, [Ft]) || (this.setCampaignInnerStatus(t, Ft), this._reportActivity(e, Vt), OptiMonkRegistry.analyticsEvents.push({
            eventName: nt.OPERATION_SHOWED,
            campaign: e
        }))
    }
    resetCampaignStates() {
        this.campaigns = {}
    }
    _reportActivity(e, t) {
        var n, i, o, r, a, s, c;
        const l = e.getId(),
            d = Ut(),
            u = e.getVariantId();
        let p = (null == (n = e.campaignData) ? void 0 : n.currentExperimentId) || (null == (i = e.campaign) ? void 0 : i.currentExperimentId);
        const m = (null == (o = e.campaignData) ? void 0 : o.isControlVariant) || (null == (r = e.campaign) ? void 0 : r.isControlVariant);
        p = null == (a = p) ? void 0 : a.toString();
        const g = ot(p);
        this.requestService.reportActivity(l, u, t, d, g, m), null == (s = window.OptiMonkEmbedded) || null == (c = s.experimentalDebug) || null == c.log || c.log({
            action: "reportEOI",
            data: {
                campaignId: l,
                variantId: u,
                reportAction: t
            }
        })
    }
}
var cn = Object.freeze({
    __proto__: null,
    ReportManager: sn
});
const ln = {
        NONE: "none",
        REJECTED: "rejected",
        CONVERSION: "conversion"
    },
    dn = {
        CLOSE: "closePopup",
        JUMP_TO_PAGE: "jumpToPage",
        REDIRECT: "redirect",
        NEXT_POPUP: "nextPopup",
        COUPON_REDEEM: "couponRedeem",
        BASED_ON_FEEDBACK: "basedOnFeedback",
        DIAL: "dial",
        COPY_COUPON: "copyCoupon"
    };
class un {
    static getAttributesFromWrapper(e) {
        return {
            campaignId: e.getAttribute("data-campaign-id"),
            instanceNum: e.getAttribute("data-instance")
        }
    }
    static collectSettings(e, t) {
        void 0 === t && (t = "data-event-settings");
        const n = JSON.parse(e.getAttribute(t));
        if (j()) {
            const e = null != n.campaignConversion;
            n.isConversion = e ? n.campaignConversion : n.isFilled
        } else n.isConversion = n.isFilled;
        return n
    }
    static getCampaignData(e) {
        const {
            campaignId: t,
            instanceNum: n
        } = this.getAttributesFromWrapper(e);
        return OptiMonkEmbedded.CampaignRegistry.get(t, n)
    }
    static getProductId(e) {
        return parseInt(e.closest(".om-product-holder").getAttribute("data-product-id"), 10)
    }
    static getProductUrl(e) {
        return e.closest(".om-product-holder").getAttribute("data-product-url")
    }
    static getIndexOf(e) {
        return parseInt(e.closest(".om-product-holder").getAttribute("data-product-no"), 10)
    }
    static getProductComponentId(e) {
        return e.closest(".om-product").id
    }
}
class pn {
    constructor(e, t, n, i) {
        void 0 === i && (i = !1), this.input = e, this.element = this.input.closest(".om-element"), this.input.OMTooltip = this, this.message = this.input.getAttribute("data-error-text") || this.input.getAttribute("data-tooltip-text"), this.showImmediately = t, this.position = n, this.showAlways = i, this.onMouseOut = () => {
            this.element.removeAttribute("data-balloon"), this.element.removeAttribute("data-balloon-visible")
        }, this.onMouseOver = () => {
            this.element.setAttribute("data-balloon", this.message)
        }, this.onFocus = () => {
            this.onMouseOut()
        }, this.init()
    }
    init() {
        this.message = this.input.getAttribute("data-error-text") || this.input.getAttribute("data-tooltip-text"), this.showImmediately && this.element.setAttribute("data-balloon-visible", "1"), this.showAlways ? this.element.setAttribute("data-balloon", this.message) : (this.element.setAttribute("data-balloon", this.message), this.element.setAttribute("data-balloon-pos", this.position), _(this.element, "mouseover", this.onMouseOver), _(this.element, "mouseout", this.onMouseOut), _(this.input, "focus", this.onFocus))
    }
    show() {
        this.element.setAttribute("data-balloon-visible", "1")
    }
    hide() {
        this.element.removeAttribute("data-balloon-visible")
    }
    destroy() {
        this.element.removeAttribute("data-balloon"), this.element.removeAttribute("data-balloon-pos"), this.element.removeAttribute("data-balloon-visible"), P(this.element, "mouseover", this.onMouseOver), P(this.element, "mouseout", this.onMouseOut), P(this.input, "focus", this.onFocus)
    }
}
const mn = function() {
        const e = document.createElement("div");
        return function(t) {
            return t && "string" == typeof t && (t = (t = t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, ""), e.innerHTML = t, t = e.textContent, e.textContent = ""), t
        }
    }(),
    gn = e => "true" === e || "false" !== e && void 0,
    hn = (e, t, n) => {
        "string" == typeof e && (e = e.replace(".", ""));
        const i = /\{\{\s*(\w+)\s*\}\}/,
            o = mn(t) || "{{amount}}";

        function r(e, t) {
            return void 0 === e ? t : e
        }

        function a(e, t, i, o) {
            if (t = r(t, 2), i = r(i, ","), o = r(o, "."), window.ShopRenter && (i = ".", o = ","), isNaN(e) || null == e) return 0;
            if (!0 === n) e = (e / 100).toFixed(0);
            else if (!1 === n) e = (e / 100).toFixed(8).replace(/(\.[0-9]*?)0+$/, "$1").replace(/\.$/, "");
            else {
                let n = t;
                window.ShopRenter && (n = "HUF" === window.ShopRenter.shop.currency.code ? 0 : t), e = (e / 100).toFixed(n)
            }
            const a = e.split(".");
            return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (a[1] ? o + a[1] : "")
        }
        let s = "";
        switch (o.match(i)[1]) {
            case "amount":
                s = a(e, 2);
                break;
            case "amount_no_decimals":
                s = a(e, 0);
                break;
            case "amount_with_comma_separator":
                s = a(e, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                s = a(e, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                s = a(e, 0, " ", ",")
        }
        return o.replace(i, s)
    },
    fn = () => !!(() => {
        if (!window.OptiMonkRegistry || !window.OptiMonkRegistry.unifiedDataDomains) return null;
        const e = window.location.hostname,
            t = e.replace("www.", "");
        return window.OptiMonkRegistry.unifiedDataDomains[e] || window.OptiMonkRegistry.unifiedDataDomains[t] || null
    })(),
    wn = e => {
        let t = e;
        for (; t.hasChildNodes();) t = t.firstChild;
        return t
    },
    vn = e => new URL(e).pathname.toLowerCase().trim().replace(/(^\w+:|^)\/\//, "").replace(/[^a-z0-9 -]/g, "-").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/(?<=.)-$/, ""),
    yn = () => {
        var e;
        const t = (null == (e = document.querySelector('link[rel="canonical"]')) ? void 0 : e.href) || window.location.href;
        return vn(t)
    },
    In = () => {
        var e, t, n, i, o, r, a, s, c, l, d, u, p, m, g, h, f, w, v;
        return (null == (e = window) || null == (t = e.ShopRenter) || null == (n = t.product) ? void 0 : n.id) || (null == (i = window) || null == (o = i.ShopifyAnalytics) || null == (r = o.meta) || null == (a = r.product) ? void 0 : a.id) || (fn() ? null == (s = window.UNAS) || null == (c = s.shop) ? void 0 : c.product_id : null) || (fn() ? null == (l = window.WooDataForOM) || null == (d = l.product) || null == (u = d.id) ? void 0 : u.toString() : null) || (fn() ? null == (p = window.$) || null == (m = p.Gomag) || null == (g = m.environment) ? void 0 : g.Product : null) || (window.mpro && window.dataLayer ? null == (h = window.dataLayer.find((e => "view_item" === e.event))) || null == (f = h.ecommerce) || null == (w = f.items) || null == (v = w[0]) ? void 0 : v.item_id : null)
    };
var bn = {
    StopNavigationDecorator: class {
        static async decorate(e) {
            let {
                handler: t,
                campaign: n,
                buttonSettings: i,
                targetElement: o,
                logger: r,
                cookieManager: a
            } = e;
            r.debug("StopNavigationDecorator decorate"), ((e, t) => {
                const n = e,
                    i = wn(n);
                if (void 0 !== i.classList) return;
                const o = i ? i.parentNode : n,
                    r = o.innerHTML;
                o.innerHTML = "<span class='fa " + t + "' style='font-family:OmCustom'></span>&nbsp;" + r
            })(o, "om-animate-spin fa-spinner");
            const s = await t.handle({
                handler: t,
                campaign: n,
                buttonSettings: i,
                logger: r,
                cookieManager: a
            });
            return new Promise((e => {
                if (!1 === s) {
                    (e => {
                        const t = e,
                            n = t.children[0].innerText,
                            i = wn(t);
                        (i ? i.parentNode : t).innerHTML = n
                    })(o);
                    const t = n.getCurrentStepInputs();
                    Array.from(t).filter((e => e.name === n.getInputTypes().EMAIL)).forEach((e => {
                        e.setAttribute("data-error-text", "You are already subscribed with your email address."), new pn(e, !0, "up")
                    })), e(!1)
                }
                e(!0)
            }))
        }
    }
};
class Cn {
    static addRecartProperties() {
        var e;
        if (null != (e = window._recart) && e.isReady()) return {
            sessionId: window._recart.getSessionId(),
            shopperId: window._recart.getShopperId(),
            siteId: window._recart.getSiteId()
        }
    }
    static getMetaData(e, t) {
        const n = !0 === w().STOP_ON_INTEGRATION_ERROR,
            i = Qt.local.getItem("OptiMonkVisitorAttributes"),
            o = {
                page: e.getCurrentStepIndex(),
                converted: e.isConverted() || !1,
                language: navigator.language,
                country: i._country_en
            };
        t.action && (o.action = t.action), t.reportAs && (o.report = t.reportAs), t.isConversion && (o.filled = t.isConversion), t.syncToIntegration && (o.syncToIntegration = t.syncToIntegration), n && (o.needsSyncResponse = !0);
        const r = this.getNextPageNumber(e, t);
        return o.allInputFilled = !e.hasInputOn(r) && !e.hasButtonOnStepForMetadata(r), o.recartProperties = this.addRecartProperties(), JSON.stringify(o)
    }
    static getNextPageNumber(e, t) {
        return t.action === dn.NEXT_POPUP ? e.getCurrentStepIndex() + 1 : t.action === dn.JUMP_TO_PAGE ? t.jumpTo - 1 : null
    }
    static canHandle() {
        throw new Error("Not implemented: " + this.name)
    }
}
const kn = {};
class Sn {
    static setCampaignDataState(e, t, n, o) {
        let {
            variantId: r,
            pageUserId: a
        } = t;
        this.setBaseConversionData(e, r, a, o), kn[e] = i({}, kn[e], n)
    }
    static getCampaignDataStateByUid(e) {
        return kn[e] || null
    }
    static setBaseConversionData(e, t, n, i) {
        const o = ot(i.campaignData.currentExperimentId),
            r = rt();
        Rt.initialize(), kn[e] = {
            final: !1,
            needSetConverted: !1,
            converted: i.isConverted() || !1,
            "visitor[url]": encodeURIComponent(window.location.href),
            "visitor[canonicalUrl]": encodeURIComponent(Lt()),
            deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop",
            creative: t,
            clientId: OptiMonkRegistry.clientId,
            siteInfo: JSON.stringify(Rt.collect()),
            pageUserId: n,
            experimentGroupId: o,
            visitorInExperiment: r
        }
    }
    static getCampaignBase(e) {
        return {
            variantId: e.getVariantId(),
            pageUserId: e.getPageUserId()
        }
    }
    static collectDataForProduct(e, t) {
        const n = e.getUid(),
            i = this.getCampaignBase(e),
            o = t.getPayload(e);
        return this.setCampaignDataState(n, i, o, e), this.getCampaignDataStateByUid(n)
    }
    static getMetaDataForProduct() {
        return JSON.stringify({
            allInputFilled: !0
        })
    }
    static collectDataForButton(e) {
        const t = e.getUid(),
            n = this.getCampaignBase(e);
        return this.setCampaignDataState(t, n, null, e), this.getCampaignDataStateByUid(t)
    }
}
class On {
    constructor() {
        this.observers = []
    }
    attach(e) {
        this.observers.push(e)
    }
    detach(e) {
        this.observers = this.observers.filter((function(t) {
            if (t !== e) return t
        }))
    }
    notify(e, t) {
        e = e || window, d(this.observers, (function(n, i) {
            i.call(e, t)
        }))
    }
}
const Mn = {
    call(e, t) {
        switch (t.event) {
            case "construct":
                Mn.load(t);
                break;
            case "removeItem":
            case "set":
                Mn.save(t)
        }
    },
    load(e) {
        d(Qt.local.getItem("OptiMonkVisitorAttributes") || {}, (function(t, n) {
            e.params[t] = n
        }))
    },
    save(e) {
        const t = this.escapeObjectValues(e.params);
        Qt.local.setItem("OptiMonkVisitorAttributes", t)
    },
    escapeObjectValues(e) {
        const t = {};
        for (const n in e) e.hasOwnProperty(n) && (t[n] = encodeURIComponent(e[n]));
        return t
    }
};
class _n {
    constructor(e, t) {
        void 0 === t && (t = []), this.data = e, this.tags = t
    }
}
const Pn = {
        elements: new Ze,
        get: e => Pn.elements.has(e) ? Pn.elements.get(e).data : void 0,
        set(e, t, n) {
            void 0 === n && (n = []), Pn.elements.set(e, new _n(t, n))
        },
        clear(e) {
            Pn.elements.remove(e)
        },
        clearByTag(e) {
            Pn.elements.forAll((function(t, n) {
                n.tags.indexOf(e) > -1 && Pn.clear(t)
            }))
        },
        apply(e, t, n, i) {
            void 0 === i && (i = []);
            const o = Pn.get(n);
            if (void 0 !== o) return o;
            const r = e.apply(e, t);
            return Pn.set(n, r, i), r
        }
    },
    En = {
        call(e, t) {
            switch (t.event) {
                case "construct":
                case "addItem":
                case "removeItem":
                case "clear":
                    En.clear()
            }
        },
        clear() {
            Pn.clearByTag("Tag.OptiMonk.Visitor.Cart")
        }
    },
    An = {
        call(e, t) {
            switch (t.event) {
                case "construct":
                    An.load(t);
                    break;
                case "addItem":
                case "removeItem":
                case "clear":
                    An.save(t)
            }
        },
        load(e) {
            d(Qt.session.getItem("OptiMonkVisitorCart") || {}, (function(t, n) {
                e.items[t] = n
            }))
        },
        save(e) {
            Qt.session.setItem("OptiMonkVisitorCart", e.items)
        }
    },
    Rn = ["remove", "set", "clear"],
    Tn = ["construct"],
    xn = {
        call(e, t) {
            Rn.includes(t.event) ? xn.save(t) : Tn.includes(t.event) && xn.load(t)
        },
        load(e) {
            d(Qt.local.getItem("OptiMonkShopAttributes") || {}, (function(t, n) {
                e.params[t] = n
            }))
        },
        save(e) {
            const t = this.escapeObjectValues(e.params);
            Qt.local.setItem("OptiMonkShopAttributes", t)
        },
        escapeObjectValues(e) {
            const t = {};
            for (const n in e) e.hasOwnProperty(n) && (t[n] = encodeURIComponent(e[n]));
            return t
        }
    },
    Dn = {
        AttributesStorageHandler: Mn,
        CartCacheClearer: En,
        CartStorageHandler: An,
        ShopAttributesStorageHandler: xn
    },
    Nn = () => Qt.local.getItem("OptiMonkVisitorAttributes") || {},
    Ln = new On;
Ln.attach(Dn.AttributesStorageHandler);
const Un = {
    get: e => Nn()[e],
    has: e => Nn().hasOwnProperty(e),
    set(e, t) {
        const n = Nn();
        n[e] = t, Ln.notify(Un, {
            name: e,
            value: encodeURIComponent(t),
            event: "set",
            params: n
        })
    },
    all: () => Nn(),
    attach(e) {
        Ln.attach(e)
    },
    remove(e) {
        const t = Nn();
        delete t[e], Ln.notify(Un, {
            name: e,
            event: "removeItem",
            params: t
        })
    }
};
Ln.notify(Un, {
    event: "construct",
    params: Nn()
});
class Vn {
    static collectValues(e, t) {
        const n = e.getInputs(),
            i = {};
        return n.forEach((e => {
            const {
                type: n,
                name: o,
                value: r,
                checked: a
            } = e;
            if ("checkbox" === n && a) i[o] = Array.isArray(i[o]) ? i[o] : [], i[o].push(r);
            else if (t.hasClass(e, "om-phone-input") && !i[o]) {
                const t = window.OptiMonkEmbedded.intlTelInput.getInstance(e);
                i[o] = t ? t.getNumber() : r
            } else "radio" === n && a ? i[o] = r : ["checkbox", "radio"].includes(n) || !r || i[o] || (i[o] = r)
        })), Vn.storeFormData(i), i
    }
    static storeFormData(e) {
        Object.entries(e).forEach((e => {
            let [t, n] = e;
            if (t.includes("custom_fields") || "visitor[email]" === t || "visitor[firstname]" === t || "visitor[lastname]" === t) {
                const e = t.match(/\[([^\]\[]*)\]/)[1];
                Un.set(e, n)
            }
        }))
    }
}
const Fn = ".om-countdown",
    jn = "om-embedded-campaign-v2";
class Bn {
    static getSelectionRange() {
        return document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0)
    }
    static setSelectionRange(e, t, n) {
        e.setSelectionRange(t, n)
    }
    static getSelection() {
        return document.getSelection()
    }
    static select(e) {
        e.select()
    }
    static selectNodeContents(e, t) {
        e.selectNodeContents(t)
    }
    static createRange() {
        return document.createRange()
    }
    static removeAllRanges() {
        this.getSelection().removeAllRanges()
    }
    static addRange(e) {
        this.getSelection().addRange(e)
    }
}
class qn {
    static getAllElement(e) {
        return document.querySelectorAll(e)
    }
    static hideElement(e) {
        e && (e.style.display = "none")
    }
    static getElement(e) {
        return document.querySelector(e)
    }
    static getChildElement(e, t) {
        return e.querySelector(this.getContainerSelector() + " " + t)
    }
    static createElement(e) {
        return document.createElement(e)
    }
    static getParentElement(e) {
        return e.parentElement
    }
    static getElementClassList(e) {
        return e.classList
    }
    static appendChild(e, t) {
        e.appendChild(t)
    }
    static insertBefore(e, t, n) {
        e.insertBefore(t, n)
    }
    static setInnerHTML(e, t) {
        e.innerHTML = t
    }
    static getInnerHTML(e) {
        return e.innerHTML
    }
    static getAttribute(e, t) {
        return e.getAttribute(t)
    }
    static setAttribute(e, t, n) {
        e.setAttribute(t, n)
    }
    static removeAttribute(e, t) {
        e.removeAttribute(t)
    }
    static getInnerText(e) {
        return e.innerText
    }
    static setStyle(e, t, n) {
        e.style[t] = n
    }
    static setValue(e, t) {
        e.value = t
    }
    static getNavigatorLanguage() {
        return navigator.language || navigator.userLanguage
    }
    static getDocumentBody() {
        return document.body
    }
    static getDocument() {
        return document
    }
    static userAgentMatch(e) {
        return navigator.userAgent.match(e)
    }
    static execCommand(e) {
        document.execCommand(e)
    }
    static addEventListener(e, t, n) {
        e.addEventListener(t, n)
    }
}
const Hn = e => [...e].find((e => "" !== e.value));
class Jn {
    constructor(e, t, n) {
        this.campaignId = e, this.variantId = t, this.elementId = n
    }
    _getCouponSelector() {
        return '.om-embedded-campaign-v2[data-campaign-id="' + this.campaignId + '"] #' + this.elementId
    }
    _getCouponWrapperSelector() {
        return '.om-embedded-campaign-v2[data-campaign-id="' + this.campaignId + '"] #' + this.elementId + "_wrapper"
    }
    _getCampaignEmailInputSelector() {
        return '.om-embedded-campaign-v2[data-campaign-id="' + this.campaignId + '"] input[name="visitor[email]"]'
    }
    _getCouponTextSelector() {
        return this._getCouponSelector() + " .om-coupon-text"
    }
    getCouponHTML() {
        var e;
        return null == (e = qn.getElement(this._getCouponTextSelector())) ? void 0 : e.innerHTML
    }
    replace(e) {
        qn.getAllElement(this._getCouponTextSelector()).forEach((t => {
            qn.setInnerHTML(t, e)
        }))
    }
    getPage() {
        const e = qn.getElement(this._getCouponSelector()),
            t = null == e ? void 0 : e.closest("[data-om-step]");
        if (!t) throw new Error("No page for coupon");
        return Number(t.getAttribute("data-om-step"))
    }
    getCampaignFilledEmailInput() {
        const e = qn.getAllElement(this._getCampaignEmailInputSelector());
        return Hn(e) || null
    }
    getCouponCopiedMessage() {
        return {
            hu: "Kimásolva",
            en: "Copied"
        }
    }
    getCopiedMessage(e) {
        const t = qn.getAttribute(e, "data-custom-copy-text");
        if (t.length > 0) return t;
        const n = qn.getNavigatorLanguage(),
            i = this.getCouponCopiedMessage();
        return n.includes("hu") ? i.hu : i.en
    }
    async copyToClipboard(e, t) {
        void 0 === t && (t = !0);
        const n = qn.getElement(this._getCouponSelector());
        let i = !1;
        if (navigator.clipboard && navigator.clipboard.writeText) try {
            await navigator.clipboard.writeText(e), i = !0
        } catch (t) {
            i = this._legacyCopyToClipboard(e)
        } else i = this._legacyCopyToClipboard(e);
        if (t) {
            const e = this.getCopiedMessage(qn.getElement(this._getCouponWrapperSelector()));
            qn.setAttribute(n, "data-tooltip-text", e), new pn(n, !0, "up")
        }
        return nt.reportCustomEvent("discount-code-copy"), i
    }
    _legacyCopyToClipboard(e) {
        const t = qn.createElement("textarea");
        qn.setStyle(t, "cssText", "position: absolute; left: -99999em"), qn.setAttribute(t, "readonly", !0), qn.setValue(t, e), qn.appendChild(qn.getDocumentBody(), t);
        const n = Bn.getSelectionRange();
        if (qn.userAgentMatch(new RegExp(/ipad|ipod|iphone/, "i"))) {
            qn.setAttribute(t, "contentEditable", !0);
            const e = Bn.createRange();
            Bn.selectNodeContents(e, t), Bn.removeAllRanges(), Bn.addRange(e), Bn.setSelectionRange(t, 0, 999999)
        } else Bn.select(t);
        try {
            const e = qn.execCommand("copy");
            return n && (Bn.removeAllRanges(), Bn.addRange(n)), e
        } catch (e) {
            return console.error(e), !1
        } finally {
            t.remove()
        }
    }
    removeSettingsData() {
        qn.getAllElement(this._getCouponWrapperSelector()).forEach((e => {
            qn.removeAttribute(e, "data-settings")
        }))
    }
    addLoading() {
        const e = qn.getElement(this._getCouponTextSelector()),
            t = '<span class="' + ["fa", "om-animate-spin", "fa-spinner"].join(" ") + '" style="font-family:OmCustom"></span>';
        qn.setInnerHTML(e, t)
    }
}
class Gn {
    constructor(e, t) {
        this.coupon = t, this.visitorAdapter = e
    }
    _getCouponData(e) {
        void 0 === e && (e = null);
        let t = {
            type: this.coupon.getType(),
            shownAt: (new Date).getTime()
        };
        return e && (t = i({}, t, e)), t
    }
    async store(e) {
        void 0 === e && (e = null);
        const t = "coupon_code_" + this.coupon.getCampaignId() + "_" + this.coupon.getCouponId(),
            n = t + "_data",
            i = this.visitorAdapter.createAdapter();
        i.attr(t, await this.coupon.getCode()), i.attr(n, JSON.stringify(this._getCouponData(e)))
    }
}
class Wn {
    constructor() {
        this.requestService = S(), this.visitorAdapter = O()
    }
    init(e, t, n, i) {
        void 0 === i && (i = {}), this.campaignId = e, this.variantId = t, this.elementId = n, this.settings = i, this.storage = new Gn(this.visitorAdapter, this), this.loggedImpression = !1, this.code = null, this.couponDOM = new Jn(e, t, n)
    }
    getCampaignId() {
        return this.campaignId
    }
    getVariantId() {
        return this.variantId
    }
    getElementId() {
        return this.elementId
    }
    getCouponId() {
        return this.getElementId().replace("ele_", "")
    }
    getType() {
        throw new Error("Not implemented")
    }
    async hasCode() {
        return !0
    }
    getCode() {
        return this.code
    }
    getPage() {
        return this.couponDOM.getPage()
    }
    lock() {
        return !0
    }
    async unlock() {
        return !0
    }
    getFallback() {
        return null
    }
    removeSettingsData() {
        this.couponDOM.removeSettingsData()
    }
    async showCoupon(e, t) {
        if (e !== this.campaignId) return !1;
        if (this.couponDOM.getPage() !== t) return !1;
        throw new Error("Show coupon not implemented")
    }
    async copyCouponToClipboard() {
        return this.couponDOM.copyToClipboard(await this.getCode())
    }
    handleAutoRedeem() {
        !1 != !!this.settings.autoRedeem && !1 !== Tt.isShop() && this.redeem()
    }
    async redeem() {
        const e = await this.getCode();
        Tt.isCheckoutPage() ? Tt.applyCheckoutDiscountCode(e).then((e => {
            e || console.warn("Failed to apply discount code on checkout page")
        })) : await this.requestService.autoRedeem(e)
    }
}
const zn = "fixed",
    Kn = "unique",
    Xn = "shopify_automatic",
    $n = "followup",
    Yn = "shopify_followup",
    Zn = "gamification";
class Qn extends Wn {
    getType() {
        return zn
    }
    getCode() {
        return null === this.code && (this.code = this.couponDOM.getCouponHTML()), this.code
    }
    async showCoupon(e, t) {
        return e === this.campaignId && (this.couponDOM.getPage() === t && (this.storage.store(), this))
    }
}
class ei extends Wn {
    getType() {
        return Kn
    }
    async lock() {
        const e = g(),
            t = await this.requestService.lockCoupon({
                clientId: e,
                campaign: this.campaignId,
                creative: this.variantId
            });
        return null == t ? void 0 : t.success
    }
    async hasCode() {
        return !!this.hasFallback() || this.lock()
    }
    async unlock() {
        const e = g(),
            t = await this.requestService.unlockCoupon({
                clientId: e,
                campaign: this.campaignId,
                creative: this.variantId
            });
        return null == t ? void 0 : t.success
    }
    async showCoupon(e, t) {
        if (e !== this.campaignId) return !1;
        if (this.couponDOM.getPage() !== t) return !1;
        const n = await this.getCode();
        return await this.storage.store(), this.couponDOM.replace(n), this
    }
    getFallback() {
        return this.settings.fallback
    }
    hasFallback() {
        return !!this.settings.fallback
    }
    async getCode() {
        if (y() && (this.code = "YOUR COUPON"), this.code) return this.code;
        try {
            const e = g(),
                t = await this.requestService.getUniqueCouponCode({
                    clientId: e,
                    campaign: this.campaignId,
                    creative: this.variantId
                });
            return t.success ? (this.code = t.code, this.code) : (this.code = this.getFallback(), this.code)
        } catch (e) {
            if (console.error("Cannot get coupon code", e.message), this.hasFallback()) return this.code = this.getFallback(), this.code;
            throw new Error("Failed to get coupon code")
        }
    }
}
class ti extends Wn {
    constructor() {
        super(), this.couponConfig = null, this.pendingReq = null
    }
    getType() {
        return Xn
    }
    async hasCode() {
        return !0
    }
    async showCoupon(e, t) {
        return e === this.campaignId && (this.couponDOM.getPage() === t && (this.couponDOM.addLoading(), this.getCode().then((() => {
            this.storage.store(this._getDataToStore()), this.couponDOM.replace(this.code)
        })), this))
    }
    _getDataToStore() {
        return {
            type: "automatic",
            generatedAt: new Date(this.couponConfig.generatedAt).getTime(),
            validUntil: this.couponConfig.validUntil ? new Date(this.couponConfig.validUntil).getTime() : null
        }
    }
    async getCode() {
        if (y()) return this.code = "YOUR COUPON", this.code;
        if (this.code) return this.code;
        try {
            const e = Nt(),
                t = {
                    shopName: Tt.getShopName(),
                    databaseId: m(),
                    variantId: this.variantId,
                    elementId: this.getCouponId(),
                    deviceType: e
                },
                n = this.couponDOM.getCampaignFilledEmailInput();
            return n && (t.email = encodeURIComponent(n.value)), this.code = new Promise((e => {
                this.requestService.generateShopifyCoupon(t).then((t => {
                    this.couponConfig = t, this.code = t.code, e(t.code)
                }))
            })), this.code
        } catch (e) {
            throw console.error("Cannot generate Shopify coupon code", e.message), new Error("Failed to generate Shopify coupon code")
        }
    }
}
const ni = new class {
    constructor() {
        this.couponsByCampMap = {}, this.couponInstancesByCamp = {}, this.couponLocksByCamp = {}, this.loggedImpressions = {}, this.addCouponCopyListener()
    }
    add(e) {
        e.forEach((e => {
            this.couponsByCampMap[e.campaignId] || (this.couponsByCampMap[e.campaignId] = []), this.couponInstancesByCamp[e.campaignId] || (this.couponInstancesByCamp[e.campaignId] = []);
            const t = class {
                static create(e) {
                    switch (e) {
                        case zn:
                        case $n:
                        case Yn:
                        case Zn:
                            return new Qn;
                        case Kn:
                            return new ei;
                        case Xn:
                            return new ti
                    }
                }
            }.create(e.type);
            t.init(e.campaignId, e.variantId, e.uid, e.settings), this.couponInstancesByCamp[e.campaignId].push(t), this.couponsByCampMap[e.campaignId].push(e)
        }))
    }
    async validateFor(e) {
        return !1 === this.couponInstancesByCamp[e] || this.lockCouponsForCampaign(e)
    }
    async lockCouponsForCampaign(e) {
        if (!this.couponInstancesByCamp[e]) return console.warn("No coupons for campaign " + e), !1;
        const t = await (async (e, t) => {
            const n = await Promise.all(e.map(t));
            return e.filter(((e, t) => n[t]))
        })(this.couponInstancesByCamp[e], (async e => e.hasCode()));
        return t.length && this.startLockCouponsForCampaign(e), t.length
    }
    startLockCouponsForCampaign(e) {
        this.clearLockForCampaign(e), this.couponLocksByCamp[e] && (this.couponLocksByCamp[e] = {}), this.couponInstancesByCamp[e].forEach((t => {
            this.couponLocksByCamp[e] = setInterval((() => {
                t.lock()
            }), 1e4)
        }))
    }
    clearLockForCampaign(e) {
        this.couponLocksByCamp[e] && clearInterval(this.couponLocksByCamp[e])
    }
    async showCoupon(e, t) {
        var n;
        if (!this.couponInstancesByCamp[e]) return null;
        const i = null == (n = this.couponInstancesByCamp[e]) ? void 0 : n.filter((e => e.getPage() === t));
        return await Promise.all(i.map((async n => {
            await n.showCoupon(e, t), n.handleAutoRedeem(), clearInterval(this.couponLocksByCamp[e])
        }))), this.logImpression(i), i
    }
    getCouponsOnPage(e, t) {
        var n;
        return this.couponInstancesByCamp[e] ? null == (n = this.couponInstancesByCamp[e]) ? void 0 : n.filter((e => e.getPage() === t)) : null
    }
    hasCouponOnPage(e, t) {
        if (!this.couponInstancesByCamp[e]) return !1;
        return !!this.couponInstancesByCamp[e].filter((e => e.getPage() === t)).length
    }
    logImpression(e) {
        e.forEach((e => {
            if (e.getType() === zn) return;
            const t = e.getCampaignId() + "-" + e.getElementId();
            if (!this.loggedImpressions[t] && e.code !== e.getFallback()) try {
                Ve("couponImpression", {
                    code: e.code,
                    couponType: e.getType(),
                    campaignId: e.getCampaignId(),
                    variantId: e.getVariantId(),
                    domain: window.location.hostname,
                    deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
                }), window.JFClientSDK.v2.go(), this.loggedImpressions[t] = !0
            } catch (e) {
                console.warn("[OM-Coupon] Unable to log coupon impression:", e.message)
            }
        }))
    }
    addCouponCopyListener() {
        const e = this;
        qn.addEventListener(qn.getDocument(), "click", (function(t) {
            const n = t.target,
                i = n.closest(".om-workspace-content");
            if (!i) return;
            const o = i.id.replace("om-campaign-", "");
            if (!e.couponsByCampMap[o]) return;
            const r = n.closest(".om-coupon");
            if (!r) return;
            const a = e.couponInstancesByCamp[o].find((e => r.id === e.getElementId() + "_wrapper"));
            a && a.copyCouponToClipboard()
        }))
    }
    clearSettingsData(e) {
        this.couponInstancesByCamp[e] && this.couponInstancesByCamp[e].forEach((e => {
            e.removeSettingsData()
        }))
    }
};
var ii = Object.freeze({
    __proto__: null,
    default: ni
});
class oi {
    constructor(e, t, n) {
        this.productComponent = e, this.productComponentHolderId = t, this.targetProductIndex = n
    }
    getPayload(e) {
        let t = {};
        if (this.productComponent.isStatic()) {
            const e = this.productComponent.getProductByIndex(this.targetProductIndex);
            t.url = e.getUrl()
        } else t = this.productComponent.productIdentifiers[this.targetProductIndex];
        const n = i({}, Vn.collectValues(e, e.dom), {
                final: !0,
                ["custom_fields[product_" + this.productComponentHolderId + "]"]: JSON.stringify(t)
            }),
            o = ni.couponInstancesByCamp[e.getId()];
        return null != o && o.length && (n["custom_fields[coupon_code]"] = o[0].getCode()), n
    }
}
class ri {
    constructor() {
        if (this instanceof ri) throw Error("A static class cannot be instantiated.")
    }
    static convertProductClick(e, t, n, i) {
        const o = Sn.collectDataForProduct(e, new oi(t, n, i));
        o.__META__ = Sn.getMetaDataForProduct(), e.sendConversion(o), e.sendFeedback()
    }
    static async convertClick(e, t, n) {
        const o = void 0 === t.needSetConverted || t.needSetConverted,
            r = Sn.collectDataForButton(e);
        n.debug("conversionData", i({}, r, t, {
            setConverted: o
        })), e.sendConversion(i({}, r, t), o), e.sendFeedback()
    }
}
const ai = (e, t, n) => {
    const i = document.createElement("script");
    i.text = t, i.id = "om-campaign-script-" + e + "-" + n, document.querySelector("head").appendChild(i)
};
class si {
    static runPageLoad(e) {
        var t;
        null != (t = e.customJS) && t.pageLoad && ai(e.id, e.customJS.pageLoad, "pageLoad")
    }
    static runShow(e) {
        var t;
        null != (t = e.customJS) && t.show && ai(e.id, e.customJS.show, "show")
    }
    static runFill(e) {
        var t;
        null != (t = e.getCustomJSes()) && t.fill && ai(e.getId(), e.getCustomJSes().fill, "fill")
    }
}
class ci extends Cn {
    static async convertAfterCoupon(e) {
        let {
            campaign: t,
            buttonSettings: n,
            coupons: o,
            logger: r,
            cookieManager: a
        } = e;
        const s = Vn.collectValues(t, t.dom),
            c = await ri.convertClick(t, i({}, n.isConversion ? {
                final: !0
            } : {
                final: !1,
                needSetConverted: !1
            }, s, {
                "custom_fields[coupon_code]": await o[0].getCode(),
                __META__: this.getMetaData(t, n)
            }), r),
            l = !(c && !1 === c.success);
        return n.isConversion && l && (a.setFilled(t.getId()), si.runFill(t)), Promise.resolve(l)
    }
}
const li = (e, t) => {
    setTimeout((() => {
        if ("string" == typeof e.code) return t();
        li(e, t)
    }), 100)
};
var di = {
    NoInputNoConversionHandler: class extends Cn {
        static async handle() {
            return Promise.resolve(!0)
        }
        static canHandle(e) {
            let {
                campaign: t,
                logger: n,
                buttonSettings: i
            } = e;
            if (t.isConverted()) {
                const e = t.getPageInputs().length > 0,
                    o = this.getNextPageNumber(t, i),
                    r = t.hasCoupon(o);
                if (!e && !r) return n.debug("canHandle: true"), !0
            }
            return !1
        }
    },
    CouponNextPageHandler: class extends ci {
        static async handle(e) {
            let {
                campaign: t,
                buttonSettings: n,
                logger: i,
                cookieManager: o
            } = e;
            const r = this.getNextPageNumber(t, n),
                a = await ni.showCoupon(t.getId(), r),
                s = a.find((e => e.getType() === Xn));
            return s ? new Promise((e => {
                li(s, (() => {
                    this.convertAfterCoupon({
                        campaign: t,
                        buttonSettings: n,
                        coupons: a,
                        logger: i,
                        cookieManager: o
                    })
                })), e(!0)
            })) : this.convertAfterCoupon({
                campaign: t,
                buttonSettings: n,
                coupons: a,
                logger: i,
                cookieManager: o
            })
        }
        static canHandle(e) {
            let {
                campaign: t,
                buttonSettings: n,
                logger: i
            } = e;
            const o = this.getNextPageNumber(t, n);
            return !!t.hasCoupon(o) && (i.debug("canHandle: true"), !0)
        }
    },
    CouponFirstPageHandler: class extends ci {
        static async handle(e) {
            let {
                campaign: t,
                buttonSettings: n,
                logger: i,
                cookieManager: o
            } = e;
            const r = ni.getCouponsOnPage(t.getId(), t.getCurrentStepIndex());
            i.debug("campaign has coupon in first page", {
                campaign: t,
                buttonSettings: n
            });
            const a = r.find((e => e.getType() === Xn));
            return a ? new Promise((e => {
                li(a, (() => {
                    this.convertAfterCoupon({
                        campaign: t,
                        buttonSettings: n,
                        coupons: r,
                        logger: i,
                        cookieManager: o
                    })
                })), e(!0)
            })) : this.convertAfterCoupon({
                campaign: t,
                buttonSettings: n,
                coupons: r,
                logger: i,
                cookieManager: o
            })
        }
        static canHandle(e) {
            let {
                campaign: t,
                logger: n
            } = e;
            const i = t.getCurrentStepIndex(),
                o = ni.hasCouponOnPage(t.getId(), t.getCurrentStepIndex());
            return !(0 !== i || !o) && (n.debug("canHandle: true"), !0)
        }
    },
    ConversionHandler: class extends Cn {
        static async handle(e) {
            let t, {
                campaign: n,
                buttonSettings: o,
                logger: r,
                cookieManager: a
            } = e;
            const s = Vn.collectValues(n, n.dom);
            return t = o.isConversion ? {
                final: !0,
                __META__: this.getMetaData(n, o)
            } : {
                needSetConverted: !1,
                final: !1,
                __META__: this.getMetaData(n, o)
            }, await ri.convertClick(n, i({}, s, t), r), o.isConversion && (a.setFilled(n.getId()), r.debug("setFilled"), si.runFill(n)), Promise.resolve(!0)
        }
        static canHandle(e) {
            let {
                logger: t
            } = e;
            return t.debug("canHandle: true"), !0
        }
    }
};
class ui {
    constructor(e) {
        let {
            service: t,
            handlerName: n
        } = e;
        this.service = t, this.handlerName = n, this.onlyDebug = OptiMonkRegistry.isDebug
    }
    debug(e, t) {
        this.onlyDebug && console.info("[" + this.service + "]-[" + this.handlerName + "]: " + e, t || null)
    }
}
const pi = [di.NoInputNoConversionHandler, di.CouponNextPageHandler, di.CouponFirstPageHandler, di.ConversionHandler];
class mi {
    static async handle(e, t, n) {
        const i = un.collectSettings(t),
            o = v();
        this.setCTAAttribute(i, t);
        const r = un.getCampaignData(n);
        if (!this.needValidation(i)) {
            const t = o.isFilled(r.getId());
            return t || mi.reportByButtonSettings(i, e, r), r.doAction(i.action, i, e), void(i.action === dn.COPY_COUPON && i.isConversion && !t && await mi.convertOnCopyCoupon(r, i, o))
        }
        if (!await r.validate()) return !1;
        const a = w();
        await class {
            static async handle(e, t, n, i, o) {
                let r;
                const a = pi.find((e => {
                        const i = this.createLogger(e.name);
                        return e.canHandle({
                            campaign: t,
                            buttonSettings: n,
                            logger: i
                        })
                    })),
                    s = this.createLogger(a.name);
                return r = null != e && e.STOP_ON_INTEGRATION_ERROR ? await bn.StopNavigationDecorator.decorate({
                    handler: a,
                    campaign: t,
                    buttonSettings: n,
                    targetElement: i,
                    logger: s,
                    cookieManager: o
                }) : await a.handle({
                    campaign: t,
                    buttonSettings: n,
                    features: e,
                    logger: s,
                    cookieManager: o
                }), s.debug("result: ", r), r
            }
            static createLogger(e) {
                return new ui({
                    service: "ButtonHandler",
                    handlerName: e
                })
            }
        }.handle(a, r, i, e, o) && (r.doAction(i.action, i, e), mi.reportByButtonSettings(i, e, r))
    }
    static needValidation(e) {
        const t = e.action === dn.CLOSE,
            n = e.action === dn.REDIRECT;
        return !(e.action === dn.COPY_COUPON) && !(!e.isConversion && (t || n))
    }
    static setCTAAttribute(e, t) {
        (-1 !== "redirect|jumpToPage|nextPopup|dial|copyCoupon".indexOf(e.action) || e.action === dn.CLOSE && e.isConversion) && t.setAttribute("data-cta", "1")
    }
    static reportByButtonSettings(e, t, n) {
        if (j()) e.isConversion && sn.getInstance().reportConversion(t, n);
        else switch (e.reportAs) {
            case ln.CONVERSION:
                return sn.getInstance().reportConversion(t, n);
            case ln.REJECTED:
                return sn.getInstance().reportRejected(n)
        }
    }
    static async convertOnCopyCoupon(e, t, n) {
        const o = new ui({
                service: "ButtonAction",
                handlerName: "CopyCouponConversion"
            }),
            r = e.couponManager.getCouponsOnPage(e.getId(), e.getCurrentStepIndex());
        if (!r || !r.length) return;
        const a = await r[0].getCode();
        if (!a) return;
        const s = Vn.collectValues(e, e.dom),
            c = await ri.convertClick(e, i({
                final: !0
            }, s, {
                "custom_fields[coupon_code]": a,
                __META__: Cn.getMetaData(e, t)
            }), o);
        !(c && !1 === c.success) && (n.setFilled(e.getId()), o.debug("setFilled"), si.runFill(e))
    }
}
class gi {
    static handle(e, t, n) {
        const o = e.closest(".om-image-redirect");
        if (!o) return;
        n.preventDefault();
        const r = un.collectSettings(o, "data-om-settings"),
            a = {
                reportAs: gi.getReportType(r),
                keepQueryParams: !(null == r || !r.keepQueryParams),
                isConversion: j() ? !(null == r || !r.isConversion) : !(null == r || !r.goalReached),
                newTab: "_blank" === o.getAttribute("target"),
                url: o.href
            },
            s = un.getCampaignData(t),
            c = Vn.collectValues(s, s.dom);
        gi.sendReporting(a.reportAs, s), Rt.initialize(), s.sendConversion(i({}, Sn.collectDataForButton(s), c, {
            final: a.isConversion
        })), a.isConversion && (v().setFilled(s.getId()), si.runFill(s)), s.doAction(dn.REDIRECT, a)
    }
    static sendReporting(e, t) {
        if (e === ln.NONE) return;
        let n = nt.OPERATION_FILLED;
        e === ln.REJECTED && (n = nt.OPERATION_NO), OptiMonkRegistry.analyticsEvents.push({
            eventName: n,
            campaign: t
        })
    }
    static getReportType(e) {
        return j() ? e.isConversion ? ln.CONVERSION : ln.NONE : (null == e ? void 0 : e.reportAs) || "conversion"
    }
}
const hi = {
        equals(e, t) {
            return this.isSet(e) && e == t
        },
        notEquals(e, t) {
            return this.isSet(e) && e != t
        },
        contains(e, t) {
            return this.isSet(e) && b(e).indexOf(t) > -1
        },
        notContains(e, t) {
            return this.isSet(e) && !this.contains(e, t)
        },
        startsWith(e, t) {
            return this.isSet(e) && 0 === b(e).indexOf(t)
        },
        notStartsWith(e, t) {
            return this.isSet(e) && !this.startsWith(e, t)
        },
        endsWith(e, t) {
            const n = e.length,
                i = t.length;
            return this.isSet(e) && t === b(e).substr(n - i, n)
        },
        notEndsWith(e, t) {
            return this.isSet(e) && !this.endsWith(e, t)
        },
        greaterThan(e, t) {
            return this.isSet(e) && I(e) > I(t)
        },
        lessThan(e, t) {
            return this.isSet(e) && I(e) < I(t)
        },
        greaterThanEquals(e, t) {
            return this.isSet(e) && I(e) >= I(t)
        },
        lessThanEquals(e, t) {
            return this.isSet(e) && I(e) <= I(t)
        },
        isSet: e => null != e,
        notSet(e) {
            return !this.isSet(e)
        },
        interval(e, t) {
            return t = t.split("-"), this.isSet(e) && I(e) >= t[0] && I(e) <= t[1]
        },
        between(e, t) {
            return this.isSet(e) && parseFloat(e) >= parseFloat(t[0]) && parseFloat(e) <= parseFloat(t[1])
        },
        matchRegex(e, t) {
            const n = new RegExp(t);
            return this.isSet(e) && n.test(e)
        },
        notMatchRegex(e, t) {
            const n = new RegExp(t);
            return this.isSet(e) && !n.test(e)
        },
        is(e, t) {
            return this.equals(e, t)
        },
        isNot(e, t) {
            return this.notEquals(e, t)
        },
        dateIsInLast: (e, t) => new Date(e).getTime() >= Date.now() - t[0],
        dateIsAtLeast: (e, t) => new Date(e).getTime() <= Date.now() - t[0],
        dateIsBetween(e, t) {
            const n = new Date(e).getTime();
            return n <= Date.now() - t[0] && n >= Date.now() - t[1]
        },
        dateIsBefore: (e, t) => new Date(e).getTime() < t[0],
        dateIsAfter: (e, t) => new Date(e).getTime() > t[0],
        dateIsBetweenDates(e, t) {
            const n = new Date(e).getTime();
            return n >= t[0] && n <= t[1]
        }
    },
    fi = "pageViewerType",
    wi = "maximumPopupDisplay",
    vi = "minimumPageVisit",
    yi = "notViewedPageRecent",
    Ii = "previouslyViewedPage",
    bi = "viewedPage",
    Ci = "timeBasedSession",
    ki = "source",
    Si = "subscribers",
    Oi = "loggedIn",
    Mi = "klaviyoSegment",
    _i = "campaignProgressState",
    Pi = "cookie",
    Ei = "country",
    Ai = "ipBlock",
    Ri = "visitorAttribute";
class Ti {
    static getPageViewerType(e) {
        return e.rules[fi]
    }
    static getMaximumPopupDisplay(e) {
        return e.rules[wi]
    }
    static getMinimumPageVisit(e) {
        return e.rules[vi]
    }
    static getNotViewedPageRecent(e) {
        return e.rules[yi]
    }
    static getPreviouslyViewedPage(e) {
        return e.rules[Ii]
    }
    static getSubscribers(e) {
        return e.rules[Si]
    }
    static getViewedPage(e) {
        return e.rules[bi]
    }
    static getTimeBasedSession(e) {
        return e.rules[Ci]
    }
    static getSource(e) {
        return e.rules[ki]
    }
    static getKlaviyoSegment(e) {
        return e.rules[Mi]
    }
    static getLoggedIn(e) {
        return e.rules[Oi]
    }
    static getCampaignProgressState(e) {
        return e.rules[_i]
    }
    static getCookie(e) {
        return e.rules[Pi]
    }
    static getCountry(e) {
        return e.rules[Ei]
    }
    static getIPs(e) {
        return e.rules[Ai] || []
    }
    static getVisitorAttribute(e) {
        return e.rules[Ri]
    }
}
class xi {
    static get type() {
        throw Error("No type defined")
    }
    static validator(e) {
        throw Error("Implement validator")
    }
}
const Di = {
    HashGenerator: {
        generate: e => (e => {
            let t, n, i, o = 0;
            if (0 === e.length) return o;
            for (t = 0, i = e.length; t < i; t += 1) n = e.charCodeAt(t), o = (o << 5) - o + n, o |= 0;
            return o
        })(e.operator + e.value)
    }
};
class Ni extends xi {
    static get type() {
        return "previouslyViewedPage"
    }
    static async validate(e) {
        const t = Ti.getPreviouslyViewedPage(e);
        if (!t) return !0;
        let n, i = !1;
        return !t || 0 === Object.keys(t).length || !Ui.isEmpty() && (d(t, (function(e, t) {
            n = !0, d(t, (function(e, t) {
                n = n && Ui.hasRule(t)
            })), i = i || n
        })), i)
    }
}
let Li = null;
const Ui = {
        currentPath: void 0,
        getStoredRules: () => (null === Li && (Li = Qt.getPreviouslyViewedPages()), Li),
        setStoredRule(e) {
            this.getStoredRules(), Li[e] = 1, Qt.setPreviouslyViewedPages(Li)
        },
        storeRule(e) {
            const t = Di.HashGenerator.generate(e);
            this.setStoredRule(t)
        },
        reset() {
            Qt.deletePreviouslyViewedPages(), Li = null
        },
        isEmpty() {
            const e = this.getStoredRules();
            return 0 === Object.keys(e).length
        },
        hasRule(e) {
            const t = Di.HashGenerator.generate(e);
            return this.getStoredRules().hasOwnProperty(t)
        },
        handle(e, t) {
            let n;
            try {
                n = decodeURIComponent(e)
            } catch (t) {
                n = e
            }
            Ui.currentPath = n, d(t, (function(e, t) {
                Ui.handleGroups(t.rules.previouslyViewedPage)
            }))
        },
        handleGroups(e) {
            d(e, (function(e, t) {
                Ui.handleRules(t)
            }))
        },
        handleRules(e) {
            d(e, (function(e, t) {
                try {
                    t.value = decodeURIComponent(t.value)
                } catch (e) {}
                Ui.validateOne(t) && Ui.storeRule(t)
            }))
        },
        validateOne: e => hi[e.operator](Ui.currentPath, e.value)
    },
    Vi = (e, t) => e.includes(t),
    Fi = (e, t) => e.startsWith(t),
    ji = (e, t) => e.endsWith(t),
    Bi = (e, t) => {
        const n = new RegExp(t);
        return e.match(n)
    };
var qi = Object.freeze({
    __proto__: null,
    containsOperator: Vi,
    notContainsOperator: (e, t) => !Vi(e, t),
    equalsOperator: (e, t) => e === t,
    notEqualsOperator: (e, t) => e !== t,
    startsWithOperator: Fi,
    notStartsWithOperator: (e, t) => !Fi(e, t),
    endsWithOperator: ji,
    notEndsWithOperator: (e, t) => !ji(e, t),
    matchRegexOperator: Bi,
    notMatchRegexOperator: (e, t) => !Bi(e, t)
});
const Hi = {
        currentPath: void 0,
        handle(e, t, n) {
            let i;
            try {
                i = decodeURIComponent(e)
            } catch (t) {
                i = e
            }
            Hi.currentPath = i, d(t, (function(e, t) {
                const i = n.getCampaignCookie(t.id);
                Hi.handleGroups(Ti.getNotViewedPageRecent(t), i)
            }))
        },
        handleGroups(e, t) {
            d(e, (function(e, n) {
                Hi.handleRules(n, t)
            }))
        },
        handleRules(e, t) {
            d(e, (function(e, n) {
                try {
                    n.value = decodeURIComponent(n.value)
                } catch (e) {}
                Hi.handleOne(n, t)
            }))
        },
        storeRule(e, t) {
            e.timeUntilAvailable = t, window.OptiMonkEmbedded && window.OptiMonkEmbedded.CookieManager.saveCampaignCookie(e)
        },
        handleOne(e, t) {
            let n;
            try {
                n = decodeURIComponent(e.value)
            } catch (t) {
                n = e.value
            }
            const i = k() + e.secondsToBlock;
            if (!1 === qi[e.operator + "Operator"](Hi.currentPath, n)) return !1;
            0 === e.secondsToBlock ? Hi.storeRule(t, 99999999999) : (99999999999 === t.timeUntilAvailable || (t.timeUntilAvailable || 0) < i) && Hi.storeRule(t, i)
        }
    },
    Ji = function() {
        return "object" == typeof window.console && "function" == typeof window.console.error && "function" == typeof window.console.log && "function" == typeof window.console.info
    },
    Gi = {
        log(e) {
            !1 !== Ji() && window.console.log(e)
        },
        error(e, t) {
            !1 !== Ji() && (t = t || {}, window.console.error(e, t))
        },
        info(e) {
            !1 !== Ji() && window.console.info(e)
        }
    },
    Wi = new On;
let zi = {};
Wi.attach(Dn.CartStorageHandler), Wi.attach(Dn.CartCacheClearer);
const Ki = {
    addItem(e, t) {
        var n;
        ! function(e, t) {
            return void 0 !== e && void 0 !== t && t.hasOwnProperty("quantity") && t.hasOwnProperty("price")
        }(e, t) ? (n = "Invalid cart item. You need to specify the id, quantity and price of it.", Gi.error(n)) : (void 0 === t.id && (t.id = e), zi[e] = t, Wi.notify(Ki, {
            id: e,
            data: t,
            event: "addItem",
            items: zi
        }))
    },
    addItems(e) {
        d(e, (function(e, t) {
            Ki.addItem(t.id, t)
        }))
    },
    hasItem: e => zi.hasOwnProperty(e),
    getItem(e) {
        if (Ki.hasItem(e)) return zi[e]
    },
    getItems: () => zi,
    removeItem(e) {
        Ki.hasItem(e) && (delete zi[e], Wi.notify(Ki, {
            id: e,
            event: "removeItem",
            items: zi
        }))
    },
    clear() {
        zi = {}, Wi.notify(Ki, {
            event: "clear",
            items: zi
        })
    },
    total: () => (new ft).check() ? Ki.unasTotal() : Ki.defaultTotal(),
    defaultTotal() {
        let e = 0;
        return d(zi, (function(t, n) {
            e += parseFloat(n.quantity) * parseFloat(n.price)
        })), e
    },
    unasTotal() {
        let e = 0;
        return d(zi, (function(t, n) {
            e += parseInt(n.price, 10) * parseInt(n.quantity, 10)
        })), e
    },
    totalLinePrice() {
        let e = 0;
        return d(zi, (function(t, n) {
            e += parseFloat(n.line_price)
        })), e
    },
    totalItems() {
        let e = 0;
        return d(zi, (function(t, n) {
            e += parseFloat(n.quantity)
        })), e
    },
    attach(e) {
        Wi.attach(e)
    }
};
Wi.notify(Ki, {
    event: "construct",
    items: zi
});
const Xi = new On;
let $i = {};
Xi.attach(Dn.ShopAttributesStorageHandler);
const Yi = {
    get: e => $i[e],
    has: e => $i.hasOwnProperty(e),
    set(e, t) {
        $i[e] = t, Xi.notify(Yi, {
            name: e,
            value: encodeURIComponent(t),
            event: "set",
            params: $i
        })
    },
    all: () => $i,
    attach(e) {
        Xi.attach(e)
    },
    remove(e) {
        delete $i[e], Xi.notify(Yi, {
            name: e,
            event: "remove",
            params: $i
        })
    },
    clear() {
        $i = {}, Xi.notify(Yi, {
            event: "clear",
            params: $i
        })
    }
};

function Zi() {
    return {
        attr: (e, t) => void 0 !== t ? Un.set(e, t) : void 0 !== e ? Un.get(e) : Un.all(),
        removeAttr(e) {
            Un.remove(e)
        },
        shop: (e, t) => void 0 !== t ? Yi.set(e, t) : void 0 !== e ? Yi.get(e) : Yi.all(),
        removeShop(e) {
            Yi.remove(e)
        },
        clearShop() {
            Yi.clear()
        },
        Cart: {
            add(e, t) {
                e.constructor === Array ? Ki.addItems(e) : Ki.addItem(e, t)
            },
            get: e => void 0 === e ? Ki.getItems() : Ki.getItem(e),
            remove: Ki.removeItem,
            clear: Ki.clear
        }
    }
}
Xi.notify(Yi, {
    event: "construct",
    params: $i
});
const Qi = {
        OM_BUTTON: ".om-button",
        OM_PRODUCT: ".om-product",
        OM_FEEDBACK: ".om-feedback-button",
        OM_IMAGE_LINK: ".om-image-redirect",
        OM_SOCIAL: ".om-social"
    },
    eo = () => Math.trunc((new Date).getTime() / 1e3),
    to = () => ({
        ca: {},
        fv: eo(),
        lv: eo(),
        nopv: 0
    }),
    no = e => ({
        act: 0,
        app: 0,
        cr: e,
        nod: 0
    });
class io {
    constructor(e, t) {
        this.campaignId = t, this.campaignCookie = (e => (e && 0 !== Object.keys(e).length || (e = no(null)), e))(e)
    }
    getId() {
        return this.campaignId
    }
    getVariantId() {
        return this.campaignCookie.cr
    }
    get numberOfDisplays() {
        return this.campaignCookie.nod
    }
    get timeUntilAvailable() {
        return this.campaignCookie.tua
    }
    set timeUntilAvailable(e) {
        this.campaignCookie.tua = e
    }
    addImpression() {
        this.campaignCookie.nod++, this.campaignCookie.app = Math.trunc((new Date).getTime() / 1e3), this.campaignCookie.s = "showed"
    }
    setFilled() {
        this.campaignCookie.s = "filled"
    }
    setClosed() {
        this.campaignCookie.s = "closed"
    }
    isFilled() {
        return "filled" === this.campaignCookie.s
    }
    isClosed() {
        return "closed" === this.campaignCookie.s
    }
    isInitialized() {
        return !this.campaignCookie.s || "init" === this.campaignCookie.s
    }
    getAsString() {
        return this.campaignCookie
    }
    getCampaignId() {
        return this.getId()
    }
    getCreativeId() {
        return this.getVariantId()
    }
    getAppearance() {
        return this.campaignCookie.app
    }
    getState() {
        return this.campaignCookie.s
    }
}
class oo {
    constructor(e) {
        this.accountCookie = null != e ? e : {
            ca: {}
        }
    }
    get firstPageVisit() {
        return this.accountCookie.fv
    }
    get lastPageVisit() {
        return this.accountCookie.lv
    }
    get numberOfPageViews() {
        return this.accountCookie.nopv
    }
    get campaigns() {
        return this.accountCookie.ca
    }
    getCampaignCookie(e) {
        const t = this.accountCookie.ca,
            n = (null == t ? void 0 : t[e]) || {};
        return new io(n, e)
    }
    getAccountCookieObject() {
        return this.accountCookie
    }
}
const ro = e => e.map((e => ({
    id: e.id,
    variantId: e.variantId
})));
class ao {
    constructor(e) {
        let {
            accountId: t,
            miniScriptLoaded: n = !1,
            campaignsData: i = []
        } = e;
        this.accountId = t, this.campaignIdList = ro(i) || [], this.originalCookies = null, this.miniScriptLoaded = n, this.init(i)
    }
    getOriginalCookies() {
        return this.originalCookies
    }
    addCampaigns(e) {
        this.campaignIdList.push(...ro(e))
    }
    getCookies() {
        return p()
    }
    init() {
        this.originalCookies = p();
        const e = this.createAccountCookie(this.accountId, JSON.parse(JSON.stringify(this.originalCookies)));
        this.updateAccountData(e), this.saveCookie(e)
    }
    createAccountCookie(e, t) {
        return t[e].ca || (t[e] = to()), t
    }
    hasCampaignCookie(e, t, n) {
        var i;
        void 0 === t && (t = this.accountId), void 0 === n && (n = this.getCookies());
        const o = Number(e).toString(10);
        return Object.keys((null == (i = n[t]) ? void 0 : i.ca) || {}).includes(o)
    }
    updateAccountData(e) {
        e[this.accountId].lv = (new Date).getTime() / 1e3, this.miniScriptLoaded || (e[this.accountId].nopv += 1)
    }
    saveCookie(e) {
        be(this.accountId, e), window.OptiMonkRegistry.Cookie = e[this.accountId]
    }
    getCampaignCookie(e) {
        var t, n;
        if (!1 === this.hasCampaignCookie(e)) {
            const t = this.campaignIdList.find((t => t.id === e));
            if (t) return new io(no(t.variantId), e)
        }
        const i = this.getCookies();
        return new io(null == (t = i[this.accountId]) || null == (n = t.ca) ? void 0 : n[e], e)
    }
    addImpression(e) {
        const t = this.getCampaignCookie(e);
        t.addImpression(), this.saveCampaignCookie(t)
    }
    setFilled(e) {
        const t = this.getCampaignCookie(e);
        t.setFilled(), this.saveCampaignCookie(t)
    }
    setClosed(e) {
        const t = this.getCampaignCookie(e);
        t.setClosed(), this.saveCampaignCookie(t)
    }
    isFilled(e) {
        return this.getCampaignCookie(e).isFilled()
    }
    saveCampaignCookie(e) {
        const t = this.getCookies();
        t[this.accountId].ca[e.getId()] = e.getAsString(), this.saveCookie(t)
    }
    getCampaignCookies() {
        var e;
        const t = this.getCookies();
        return Object.keys((null == (e = t[this.accountId]) ? void 0 : e.ca) || {}).map((e => this.getCampaignCookie(e)))
    }
    getAccountCookie() {
        const e = this.getCookies()[this.accountId] || to();
        return new oo(e)
    }
    isClosed(e) {
        return this.getCampaignCookie(e).isClosed()
    }
    resetPreviewCampaign(e) {
        if (!this.hasCampaignCookie(e)) return;
        const t = this.getCampaignCookie(e);
        t.campaignCookie.s = "showed", this.saveCampaignCookie(t)
    }
}
class so extends ao {
    saveCookie(e) {
        console.log("experience cannot save cookie in validation stage", e)
    }
    getCookies() {
        return this.originalCookies
    }
    init(e) {
        this.originalCookies = p();
        const t = this.createNewCampaignCookies(e, JSON.parse(JSON.stringify(this.originalCookies)));
        this.updateAccountData(t)
    }
    createNewCampaignCookies(e, t) {
        var n;
        return null != (n = t[this.accountId]) && n.ca || (t[this.accountId] = to()), e.forEach((e => {
            this.hasCampaignCookie(e, this.accountId, t) || (t[this.accountId].ca[e] = no(this.creativeId))
        })), t
    }
    setCreative(e, t) {
        this.variantId = t, !1 === this.hasCampaignCookie(e, this.accountId, this.originalCookies) ? this.originalCookies[this.accountId].ca[e] = no(t) : this.originalCookies[this.accountId].ca[e].cr = t
    }
    getCampaignCookie(e) {
        if (!this.hasCampaignCookie(e)) return null;
        const t = this.getCookies();
        return new io(t[this.accountId].ca[e], e)
    }
}
class co extends ao {
    getCookies() {
        try {
            const e = localStorage.getItem("optiMonkClient_designMode"),
                t = e ? JSON.parse(e) : {};
            return t[this.accountId] || (t[this.accountId] = to()), t[this.accountId].ca || (t[this.accountId].ca = {}), t
        } catch (e) {
            return {
                [this.accountId]: to()
            }
        }
    }
    saveCookie(e) {
        try {
            localStorage.setItem("optiMonkClient_designMode", JSON.stringify(e))
        } catch (e) {}
        window.OptiMonkRegistry.Cookie = e[this.accountId]
    }
    init() {
        this.originalCookies = this.getCookies();
        const e = this.createAccountCookie(this.accountId, JSON.parse(JSON.stringify(this.originalCookies)));
        this.updateAccountData(e), this.saveCookie(e)
    }
}
const lo = () => {
        OptiMonkRegistry.isMobile = (() => {
            let e = !1;
            var t;
            return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
        })();
        const e = Zi();
        e.attr("is_mobile", OptiMonkRegistry.isMobile), e.attr("is_mobile_text", OptiMonkRegistry.isMobile ? "true" : "false")
    },
    uo = () => OptiMonkRegistry.isMobile ? "mobile" : "desktop",
    po = () => OptiMonkRegistry.isMobile,
    mo =
    import (OptiMonkRegistry.esmAssetPath + "/botd.esm-d1d2d008.js").catch((() => null));
class go {
    constructor(e, t, n) {
        this.clientId = e, this.requestService = t, this.OptiMonkEmbedded = n, this.increaseUsageCounters = !0, this.accountCookie = null, this.noCampaignCaseType = null, this.isPreview = nn.isPopupPreview(), this._isNewVisitor = null
    }
    getPublicIF() {
        return {
            isNewVisitor: () => (null === this._isNewVisitor && console.log("isNewVisitor value has been read before got it from backend"), this._isNewVisitor),
            hasUsageUpdateHandled: () => this.increaseUsageCounters
        }
    }
    unsetIncreaseUsageCounters() {
        this.increaseUsageCounters = !1
    }
    setAccountCookie(e) {
        this.accountCookie = e
    }
    setNoCampaignCaseType(e) {
        this.noCampaignCaseType = e
    }
    async request() {
        var e;
        Object.keys(null == (e = this.OptiMonkEmbedded) ? void 0 : e.campaigns).length || window.OptiMonk.campaigns.length || this.unsetIncreaseUsageCounters();
        const t = this.accountCookie[OptiMonkRegistry.account],
            n = await (async () => {
                try {
                    const e = await mo;
                    return e ? (await e.load()).detect() : null
                } catch (e) {
                    return null
                }
            })(),
            i = {
                accountCookie: this.accountCookie,
                fv: t.fv,
                lv: t.lv,
                increaseUsageCounters: this.increaseUsageCounters,
                clientId: this.clientId,
                noCampaignCaseType: this.noCampaignCaseType,
                referrer: window.location.href,
                isPreview: this.isPreview,
                botd: n
            },
            o = $.compressToBase64(JSON.stringify(i)),
            r = this.requestService.getBackendRequestUrl(),
            a = await this.requestService.sendPostRequest(r, {
                data: o
            }),
            s = $.decompressFromBase64(a);
        if (!s) return;
        const c = JSON.parse(s);
        this.handleResponse(c)
    }
    handleResponse(e) {
        e && (this._isNewVisitor = e.isNewVisitor)
    }
}
class ho {
    constructor(e, t) {
        let {
            type: n
        } = void 0 === t ? {} : t;
        this.campaigns = e, this.variantList = {}, this.variantListInCookies = {}, this.raffledVariantList = {}, this.campaignIdKey = "inline" === n ? "campaignId" : "id", this.variantIdKey = "inline" === n ? "creativeId" : "variantId", this.init()
    }
    isActiveVariant(e, t) {
        return this.raffledVariantList[this.getVariantCookieKey(e, t)] === t
    }
    init() {
        const {
            variantList: e,
            experienceList: t
        } = this.getLists();
        this.variantList = e, this.experienceList = t, this.variantListInCookies = this.getVariantsFromCookies(), this.raffledVariantList = this.createFinalVariantList()
    }
    createFinalVariantList() {
        const e = {};
        return Object.entries(this.variantList).forEach((t => {
            var n;
            let [i, o] = t;
            const r = this.getVariantCookieKey(i, o[0]);
            if (1 === o.length) return e[r] = o[0], void(this.hasVariantInCookies(i, o[0]) && this.removeCookie(i));
            if (this.hasActiveVariantInCookies(i, o[0])) return void(e[r] = this.getVariantFromCookie(i, o[0]));
            const a = this.raffleVariantId(o);
            this.hasVariantInCookies(i, a) && this.removeCookie(i), this.saveCookie(i, a), e[r] = a, Ve("abTestVariantAssigned", {
                campaignId: i,
                variantId: a,
                experienceId: null != (n = this.experienceList[a]) ? n : null
            })
        })), e
    }
    getLists() {
        const e = {},
            t = {};
        return this.campaigns.forEach((n => {
            var i;
            const o = n[this.variantIdKey],
                r = n[this.campaignIdKey];
            e[r] || (e[r] = []), e[r].push(o);
            const a = null == n || null == (i = n.experiences) || null == i.find ? void 0 : i.find((e => e.variants.includes(o)));
            t[o] = null == a ? void 0 : a._id
        })), {
            variantList: e,
            experienceList: t
        }
    }
    getVariantsFromCookies() {
        const e = {};
        return Object.keys(this.variantList).forEach((t => {
            this.variantList[t].forEach((n => {
                const i = this.getCookieKey(t, n);
                if (!1 === W.local.hasItem(i)) return;
                const o = this.getVariantCookieKey(t, n);
                e[o] = W.local.getItem(i)
            }))
        })), e
    }
    getExperienceCookieKeyPart(e) {
        const t = this.experienceList[e];
        return t ? "_" + t : ""
    }
    getVariantCookieKey(e, t) {
        return "" + e + this.getExperienceCookieKeyPart(t)
    }
    raffleVariantId(e) {
        return e[Math.trunc(Math.random() * e.length)]
    }
    getVariantFromCookie(e, t) {
        return this.variantListInCookies[this.getVariantCookieKey(e, t)]
    }
    hasVariantInCookies(e, t) {
        return !!this.variantListInCookies[this.getVariantCookieKey(e, t)]
    }
    hasActiveVariantInCookies(e, t) {
        return !!this.hasVariantInCookies(e, t) && this.hasVariant(e, this.getVariantFromCookie(e, t))
    }
    hasVariant(e, t) {
        return this.variantList[e].includes(t)
    }
    removeCookie(e, t) {
        W.local.removeItem(this.getCookieKey(e, t))
    }
    saveCookie(e, t) {
        W.local.setItem(this.getCookieKey(e, t), t)
    }
    getCookieKey(e, t) {
        return "omAbTest" + this.getVariantCookieKey(e, t)
    }
}
const fo = e => "smartAbTest_" + e,
    wo = "shop",
    vo = {
        BasicInput: {
            replace: e => {
                const t = e.querySelector("input"),
                    n = e.querySelector("textarea");
                if (!t && !n) return;
                const i = t || n,
                    o = i.getAttribute("data-error-text");
                if (o) {
                    const e = Oo.replaceText(o);
                    o !== e && i.setAttribute("data-error-text", e)
                }
                const r = i.getAttribute("placeholder");
                if (r) {
                    const e = Oo.replaceText(r);
                    r !== e && i.setAttribute("placeholder", e)
                }
            }
        },
        Dropdown: {
            replace: e => {
                const t = e.querySelector("select");
                if (!t) return;
                const n = t.getAttribute("data-error-text");
                if (n) {
                    const e = Oo.replaceText(n);
                    n !== e && t.setAttribute("data-error-text", e)
                }
                const i = t.querySelectorAll("option");
                for (let e = 0; e < i.length; e += 1) {
                    const t = i[e],
                        n = t.innerHTML,
                        o = Oo.replaceText(n);
                    n !== o && (t.innerHTML = o);
                    const {
                        value: r
                    } = t, a = Oo.replaceText(r);
                    r !== a && (t.value = a)
                }
            }
        },
        Picker: {
            replace: e => {
                const t = e.querySelector(".om-picker-group");
                if (!t) return;
                const n = t.getAttribute("data-error-text");
                if (n) {
                    const e = Oo.replaceText(n);
                    n !== e && t.setAttribute("data-error-text", e)
                }
                const i = t.querySelectorAll(".om-input-picker");
                for (let e = 0; e < i.length; e += 1) {
                    const t = i[e],
                        n = t.querySelector("label");
                    if (n) {
                        const e = n.querySelector("a");
                        if (e) {
                            const {
                                href: t
                            } = e, n = Oo.replaceText(t, !0);
                            t !== n && (e.href = n);
                            const i = e.innerHTML,
                                o = Oo.replaceText(i, !0);
                            i !== o && (e.innerHTML = o)
                        } else {
                            const e = n.innerHTML,
                                t = Oo.replaceText(e);
                            e !== t && (n.innerHTML = t)
                        }
                    }
                    const o = t.querySelector("span");
                    if (o) {
                        const e = o.innerHTML,
                            t = Oo.replaceText(e);
                        e !== t && (o.innerHTML = t)
                    }
                    const r = t.querySelector("input");
                    if (r) {
                        const {
                            value: e
                        } = r, t = Oo.replaceText(e);
                        e !== t && (r.value = t)
                    }
                }
            }
        },
        Product: {
            replace: e => {
                ["name", "sku", "old-price", "price", "cta"].forEach((t => {
                    ((e, t) => {
                        const n = e.querySelector(t);
                        if (n) {
                            const e = n.innerHTML,
                                t = Oo.replaceText(n.innerHTML);
                            e !== t && (n.innerHTML = t)
                        }
                    })(e, ".om-product-" + t)
                }))
            }
        },
        Social: {
            replace: e => {
                const t = e.querySelectorAll(".om-social-icon");
                for (let e = 0; e < t.length; e += 1) {
                    const n = t[e],
                        i = n.querySelector(".link-text"),
                        o = n.querySelector("a");
                    if (i) {
                        const e = i.innerHTML,
                            t = Oo.replaceText(e);
                        e !== t && (i.innerHTML = t)
                    }
                    if (o) {
                        const {
                            href: e
                        } = o, t = Oo.replaceText(e, !0);
                        e !== t && (o.href = t)
                    }
                }
            }
        },
        Text: {
            replace: e => {
                const t = e.querySelectorAll(".om-dtr-content");
                if (t.length)
                    for (let e = 0; e < t.length; e += 1) {
                        const n = t[e];
                        [...n.querySelectorAll(".smart-tag")].map((e => Oo.replaceSmartTag(e)));
                        const i = n.innerHTML,
                            o = Oo.replaceText(i);
                        i !== o && (n.innerHTML = o)
                    }
            }
        }
    };
var yo = Object.freeze({
    __proto__: null,
    DTR: vo
});
const Io = {
        Attributes: Un,
        Cart: Ki,
        Observable: On,
        Observer: Dn,
        createAdapter: Zi,
        ShopAttributes: Yi
    },
    bo = [60747, 201540, 206839],
    Co = {
        AI_EXPERIMENT: "aiExperiment",
        PPO: "sppo"
    };

function ko(e) {
    return new Promise((t => setTimeout(t, e)))
}
async function So() {
    try {
        if (!0 !== (null == (e = OptiMonkRegistry) || null == (t = e.features) ? void 0 : t.SMART_PRODUCT_TAG)) return Promise.resolve();
        console.log("OM - PPO enabled");
        const n = Zi(),
            i = n.attr(),
            o = Co.AI_EXPERIMENT,
            r = Co.PPO;
        Object.keys(i).filter((e => e.startsWith(o) || e.startsWith(r))).forEach((e => {
            n.removeAttr(e)
        })), n.removeAttr("aiGeneratedImages");
        const a = await async function() {
            const e = m();
            let t = In();
            if (!bo.includes(e)) return null == t ? (t = yn(), console.log("OM - PPO using canonical URL slug: " + t)) : console.log("OM - PPO product id " + t), Promise.resolve(t);
            let n = 0;
            for (; null == t && n < 10;) await ko(100), t = In(), n++;
            return null == t ? (t = yn(), console.log("OM - PPO using canonical URL slug: " + t + " after " + n + " tries")) : console.log("OM - PPO product id " + t + " after " + n + " tries"), Promise.resolve(t)
        }();
        if (null == a) return Promise.resolve();
        console.log("OM - PPO loading product", a);
        const s = await OptiMonkEmbedded.RequestService.loadProductSmartTags(a),
            c = {};
        Object.keys(s).forEach((e => {
            const t = s[e];
            if (function(e) {
                    if ("string" != typeof e) return !1;
                    const t = e.toLowerCase(),
                        n = [".png", ".jpg", ".jpeg", ".gif", ".webp"].some((e => t.endsWith(e))),
                        i = /\d+\/\d+\/[a-f0-9]+\/\d+\.(png|jpg|jpeg)$/i.test(e);
                    return n || i
                }(t)) {
                c[e] = t;
                const n = function(e) {
                    const t = e.match(/\d+\/[^/]+\/([a-f0-9]+)\/\d+\.(png|jpg|jpeg)$/i);
                    return t ? t[1] : null
                }(t);
                n && (c[n] = t)
            } else {
                let i = "" + Co.PPO + e;
                0 === e.indexOf(Co.AI_EXPERIMENT) && (i = e), n.attr(i, t)
            }
        })), Object.keys(c).length > 0 && n.attr("aiGeneratedImages", JSON.stringify(c))
    } catch (e) {
        console.error(e.message)
    }
    var e, t
}
const Oo = {
    visitorAdapter: Io.createAdapter(),
    patterns: {
        attribute: /\[\[(attribute)\:([\w\-.+=]+)(\|([^\]]+))?\]\]/gim,
        static: /\[\[(static)\:(current_url|[\w-.]+)(\|([^\]]+))?\]\]/gim,
        cart: /\[\[(cart)\:(total|number_of_items|number_of_item_kinds)\]\]/gim,
        shop: /\[\[(shop)\:([\w-.]+)(\|([^\]]+))?\]\]/gim,
        smart_product_tag: /\[\[(smart_product_tag):([\w-]+:\d+|[\w-]+)\]\]/gim
    },
    hasContentToReplace(e, t) {
        const n = Oo.patterns[t];
        if (!n) return !1;
        const i = n.exec(e);
        return n.lastIndex = 0, !!i
    },
    init(e) {
        e.length > 0 ? e.forEach((e => {
            this.replace(e)
        })) : void 0 === e.length && this.replace(e)
    },
    replace(e) {
        const t = e.getAttribute("type");
        if (t) {
            const n = Oo.determineSubModule(t.substr(2));
            n && n.replace(e)
        }
    },
    replaceSmartTag(e) {
        parseInt(e.getAttribute("replaced"), 10) || (e.innerHTML = e.getAttribute("data-smart-tag"))
    },
    replaceText(e, t, n) {
        if (void 0 === t && (t = !1), void 0 === n && (n = !1), !e) return e;
        let i;
        try {
            i = t ? decodeURIComponent(e) : e
        } catch (t) {
            i = e
        }
        return Object.values(Oo.patterns).forEach((e => {
            let t;
            for (; null !== (t = e.exec(i));) {
                let n;
                e.lastIndex = 0;
                const o = "[[" + t[1] + ":" + t[2] + (t[4] ? "|" + t[4] : "") + "]]",
                    r = t[1].toLowerCase();
                n = "attribute" === r ? Oo.getAttributeValue(t[2]) || t[4] || "" : "cart" === r ? Oo.getCartValue(t[2]) : "shop" === r ? Oo.getShopAttributeValue(t[2], t[4] || "") : "smart_product_tag" === r ? Oo.getSPPOValue(t[2]) : Oo.getStaticValue(t[2], t[4] || ""), i = i.replace(o, n.replace(/\$/g, "&#36;"))
            }
        })), n ? encodeURIComponent(i) : i
    },
    getAttributeValue(e) {
        const t = Qt.local.getItem("OptiMonkVisitorAttributes");
        return (null == t ? void 0 : t[e]) || (null == t ? void 0 : t["" + Co.PPO + e]) || null
    },
    getCartValue: e => "total" === e ? "" + Io.Cart.total() : "number_of_items" === e ? "" + Io.Cart.totalItems() : "number_of_item_kinds" === e ? "" + Object.keys(Io.Cart.getItems()).length : "",
    cleanseVariableName(e) {
        const t = e.indexOf(":");
        return -1 === t ? e : e.substring(0, t)
    },
    getShopAttributeValue: (e, t) => Oo.visitorAdapter.shop(e) || t,
    getSPPOValue(e) {
        const t = Oo.cleanseVariableName(e);
        return Oo.visitorAdapter.attr("" + Co.PPO + t) || Oo.visitorAdapter.attr(t)
    },
    getStaticValue: (e, t) => "current_url" === e ? window.location.href : t,
    determineSubModule(e) {
        switch (e) {
            case "Input":
            case "Inputs":
            case "Textarea":
                return vo.BasicInput;
            case "Social":
                return vo.Social;
            case "Dropdown":
                return vo.Dropdown;
            case "Input-picker":
                return vo.Picker;
            case "Product":
                return vo.Product;
            default:
                return vo.Text
        }
    }
};

function Mo(e) {
    const t = document.createElement("script");
    OptiMonkRegistry.nonce && t.setAttribute("nonce", OptiMonkRegistry.nonce), t.text = e.innerHTML;
    let n = -1;
    const i = e.attributes;
    let o;
    for (; ++n < i.length;) t.setAttribute((o = i[n]).name, o.value);
    return t
}
const _o = e => "sp_" + e,
    Po = "inline",
    Eo = "shadow",
    Ao = "embedded",
    Ro = "dynamic_content",
    To = "control-variant",
    xo = "popup",
    Do = "sidebar",
    No = "nanobar",
    Lo = "embedded",
    Uo = ["popup", "sidebar", "nanobar"],
    Vo = "optimonk#campaign-show",
    Fo = "optimonk#embedded-campaign-show",
    jo = "optimonk#campaign-popup-show",
    Bo = "optimonk#embedded-campaign-page-show",
    qo = "om",
    Ho = {
        APPEARANCE: "appearance",
        HTML: "html",
        TEXT: "text",
        INSERT_TEXT: "insert-text",
        INSERT_HTML: "insert-html",
        SMART_PRODUCT_TAG: "smart-product-tag",
        SMART_AB_TEST: "smart-ab-test",
        SMART_PERSONALIZATION: "smart-personalization",
        EDIT_STYLE: "edit-style"
    };
class Jo {
    constructor(e) {
        this.campaign = e, this.type = "dynamic_content"
    }
    getId() {
        return this.campaign.id
    }
    getVariantId() {
        return this.campaign.variantId
    }
    getName() {
        return this.campaign.name
    }
    getCreativeName() {
        return this.campaign.variantName
    }
    getChanges() {
        return this.campaign.changes || []
    }
    getAnalytics() {
        return {
            status: this.campaign.analytics ? 1 : 0
        }
    }
    async applyChanges() {
        const e = this.getChanges().map((async e => {
            if (!e.selector) return console.log("[OM-DEBUG] No selector for change", e), !1;
            try {
                return !0 === await N(e.selector, (t => this.applyDOMChanges(e, t)), e.alternativeSelectors)
            } catch (e) {
                return console.error("[OM-DEBUG] Error applying change:", e), !1
            }
        }));
        return await Promise.all(e)
    }
    async canApplyChanges() {
        const e = this.getChanges().map((async e => {
            if (!e.selector) return console.log("[OM-DEBUG] No selector for change", e), !1;
            try {
                return !0 === await N(e.selector, (t => this.canApplyDOMChanges(e, t)), e.alternativeSelectors)
            } catch (e) {
                return console.error("[OM-DEBUG] Error checking dynamic content change:", e), !1
            }
        }));
        return Promise.all(e)
    }
    _hasAlreadyChanged(e) {
        const t = e.getAttribute("om-dc");
        return !!(t && Number(t) >= this.campaign.createdAt)
    }
    _replaceAppearance(e) {
        return !this._hasAlreadyChanged(e) && (e.style.display = "none", e.setAttribute("om-dc", this.campaign.createdAt), !0)
    }
    _replaceHtml(e, t) {
        if (this._hasAlreadyChanged(e)) return !1;
        const n = document.createElement("div");
        n.innerHTML = Oo.replaceText(t);
        const i = n.getElementsByTagName("script");
        if (i.length > 0)
            for (let e = 0; e < i.length; e++) {
                const t = document.createElement("script");
                t.type = i[e].type || "text/javascript", i[e].hasAttribute("src") ? t.src = i[e].src : t.textContent = i[e].textContent, document.body.appendChild(t)
            }
        return e.outerHTML = n.innerHTML.replace(/<script>([\s\S]*?)<\/script>/g, ""), e.setAttribute("om-dc", this.campaign.createdAt), !0
    }
    _createStyleTag(e, t) {
        const n = document.createElement("style");
        n.setAttribute("data-om-dc-id", e), n.type = "text/css", n.textContent = t, document.head.appendChild(n)
    }
    _insertHTML(e, t, n, i, o) {
        if (this._hasAlreadyChanged(e)) return !1;
        if (document.querySelector('[data-insert-id="' + o + '"]')) return !1;
        const r = document.createElement("div");
        r.innerHTML = Oo.replaceText(n), r.querySelectorAll("*").forEach(((e, t) => {
            0 === t && (e.id = o), e.dataset.insertId = o
        }));
        const a = r.innerHTML;
        return e.insertAdjacentHTML(t, a), document.querySelectorAll('script[data-insert-id="' + o + '"]').forEach((e => {
            e.parentNode.replaceChild(Mo(e), e)
        })), i && this._createStyleTag(o, i), !0
    }
    _replaceText(e, t) {
        return OptiMonkRegistry.isDebug && console.log("hasAlreadyChanged", this._hasAlreadyChanged(e)), !this._hasAlreadyChanged(e) && (e.innerHTML = Oo.replaceText(t), e.setAttribute("om-dc", this.campaign.createdAt), !0)
    }
    _replaceTextSetId(e, t, n) {
        const i = this._replaceText(e, t);
        return i && e.setAttribute("data-om-dc-id", n), i
    }
    _replaceSmartAbTest(e, t) {
        if (nn.isPreview()) return !1;
        const n = (e => "[[attribute:" + fo(e) + "]]")(t);
        return this._replaceTextSetId(e, n, t)
    }
    _replaceSmartPersonalization(e, t) {
        if (nn.isPreview()) return !1;
        if (!Zi().attr(_o(t))) return !1;
        const n = (e => "[[attribute:" + _o(e) + "]]")(t);
        return this._replaceTextSetId(e, n, t)
    }
    _handleEditStyle(e, t, n) {
        return !this._hasAlreadyChanged(e) && (!document.querySelector('[data-insert-id="' + t + '"]') && (e.setAttribute("data-om-dc-id", t), n && this._createStyleTag(t, n), !0))
    }
    canApplyDOMChanges(e, t) {
        const {
            type: n,
            id: i
        } = e;
        if (this._hasAlreadyChanged(t)) return !1;
        switch (n) {
            case Ho.INSERT_TEXT:
            case Ho.INSERT_HTML:
            case Ho.SMART_PRODUCT_TAG:
            case Ho.EDIT_STYLE:
                return !document.querySelector('[data-insert-id="' + i + '"]');
            case Ho.SMART_AB_TEST:
                return !nn.isPreview();
            case Ho.SMART_PERSONALIZATION:
                if (nn.isPreview()) return !1;
                return !!Zi().attr(_o(i));
            case Ho.HTML:
            case Ho.APPEARANCE:
            case Ho.TEXT:
            default:
                return !0
        }
    }
    applyDOMChanges(e, t) {
        const {
            type: n,
            replaceTo: i,
            content: o,
            position: r,
            css: a,
            id: s
        } = e;
        switch (n) {
            case Ho.HTML:
                return this._replaceHtml(t, i);
            case Ho.APPEARANCE:
                return this._replaceAppearance(t);
            case Ho.INSERT_TEXT:
            case Ho.INSERT_HTML:
            case Ho.SMART_PRODUCT_TAG:
                return this._insertHTML(t, r, o, a, s);
            case Ho.SMART_AB_TEST:
                return this._replaceSmartAbTest(t, s);
            case Ho.SMART_PERSONALIZATION:
                return this._replaceSmartPersonalization(t, s);
            case Ho.EDIT_STYLE:
                return this._handleEditStyle(t, s, a);
            case Ho.TEXT:
            default:
                return this._replaceText(t, i)
        }
    }
}
class Go {
    constructor(e) {
        this.campaign = e
    }
    getId() {
        return this.campaign.id
    }
    getVariantId() {
        return this.campaign.variantId
    }
    getName() {
        return this.campaign.name
    }
    getCreativeName() {
        return this.campaign.variantName
    }
    getAnalytics() {
        return {
            status: this.campaign.analytics ? 1 : 0
        }
    }
}
const Wo = async function(e, t) {
    return void 0 === t && (t = 200), Promise.race([e(), (n = t, new Promise(((e, t) => {
        setTimeout((() => {
            t(Error("timeout"))
        }), n)
    })))]);
    var n
};

function zo() {
    OptiMonkRegistry.isDebug && console.log("%c[OM:DEBUG]", "color: #ed5a29", ...arguments)
}

function Ko(e) {
    if (!e || 0 === e.length) return;
    window.omdebug || (window.omdebug = {});
    const t = e[0].campaign || e[0].campaignId;
    window.omdebug[t] = e
}

function Xo() {
    if (OptiMonkRegistry.isDebug) {
        const e = arguments[0];
        Array.isArray(e) && Ko(e)
    }
}

function $o() {
    console.log("%c[OM:ERROR]", "color: red", ...arguments)
}
const Yo = {
        type: "shoprenter",
        isShop: () => void 0 !== window.ShopRenter,
        getResourceType() {
            var e, t, n, i, o;
            return void 0 !== (null == (e = window) || null == (t = e.ShopRenter) || null == (n = t.page) ? void 0 : n.categoryName) ? "category" : void 0 !== (null == (i = window) || null == (o = i.ShopRenter) ? void 0 : o.product) ? "product" : null
        },
        getProductName() {
            var e, t, n;
            return null == (e = window) || null == (t = e.ShopRenter) || null == (n = t.product) ? void 0 : n.name
        },
        getCategoryName() {
            var e, t, n;
            return null == (e = window) || null == (t = e.ShopRenter) || null == (n = t.page) ? void 0 : n.categoryName
        }
    },
    Zo = {
        shopify: {
            product: Tt.getProductName
        },
        shoprenter: {
            product: Yo.getProductName,
            category: Yo.getCategoryName
        }
    },
    Qo = [Tt, Yo],
    er = e => {
        const t = Qo.find((e => e.isShop()));
        if (!t) return;
        const n = t.getResourceType();
        Object.keys(Zo[t.type]).includes(n) && ((e, t) => {
            let {
                type: n,
                resourceType: i
            } = t;
            const o = Zo[n][i]();
            e.shop(i + "_name", o)
        })(e, {
            type: t.type,
            resourceType: n
        })
    };

function tr(e) {
    if (nn.isPreview()) return;
    const t = {};
    try {
        e.forEach((e => {
            const {
                id: n,
                changes: o
            } = e, {
                cookieName: r,
                cookieParts: a
            } = (e => {
                const t = "optiMonkSmartAbTest_" + e,
                    n = W.local.getItem(t);
                let o = {};
                var r;
                return n && (o = null == (r = n.split("_")) ? void 0 : r.reduce(((e, t) => i({}, e, {
                    [t]: !0
                })), {})), {
                    cookieName: t,
                    cookieParts: o
                }
            })(n), s = [], c = [];
            let l = !1;
            o.forEach((e => {
                if ("smart-ab-test" !== e.type) return;
                l = !0, c.push(e);
                const t = ((e, t) => e.running.find((e => t[e])) || e.running[Math.floor(Math.random() * e.running.length)])(e, a);
                s.push(t), ((e, t) => {
                    const n = ((e, t) => e.tests.find((e => e.id === t)))(e, t);
                    OptiMonkEmbedded.Visitor.createAdapter().attr(fo(e.id), n.value)
                })(e, t)
            })), l && (t[n] = ((e, t, n, i, o) => {
                const r = i.join("_");
                return e.cookie = r, W.local.setItem(n, r), ((e, t, n) => ({
                    campaign: e,
                    cookie: t,
                    changes: n.map((e => [{
                        tests: e.tests,
                        phased_out: e.phased_out,
                        current_pair_start: e.current_pair_start,
                        running: e.running
                    }]))
                }))(t, r, o)
            })(e, n, r, s, c))
        }))
    } catch (e) {
        console.log("smartAbTest could not load", e)
    }
    OptiMonkRegistry.smartAbTests = t
}
const nr = window.OptiMonkRegistry.aiPPOCdnUrl;

function ir(e, t) {
    if (e.startsWith("http://") || e.startsWith("https://")) return t ? e + "?v=" + t : e;
    const n = nr.endsWith("/") || e.startsWith("/") ? "" : "/",
        i = nr + n + e;
    return t ? i + "?v=" + t : i
}
async function or(e) {
    try {
        const t = function() {
            try {
                var e, t, n, i;
                const o = null == (e = window.OptiMonkEmbedded) || null == (t = e.Visitor) || null == (n = t.createAdapter()) || null == (i = n.attr()) ? void 0 : i.aiGeneratedImages;
                return o ? JSON.parse(o) : null
            } catch (e) {
                return console.warn("[AI Images] Error parsing aiGeneratedImages:", e), null
            }
        }();
        if (!t) return;
        const n = e.querySelectorAll("img[data-ai-tag]"),
            i = e.querySelectorAll("[data-ai-tag]:not(img)");
        if (0 === n.length && 0 === i.length) return;
        const o = function() {
            try {
                var e, t, n, i;
                const {
                    providerServiceId: o
                } = xt();
                return null == (e = window.OptiMonkRegistry) || null == (t = e.cacheVersions) || null == (n = t.ai) || null == (i = n[o]) ? void 0 : i.llm
            } catch (e) {
                return
            }
        }();
        await Promise.all([...Array.from(n).map((async e => {
            const n = e.getAttribute("data-ai-tag");
            if (n) try {
                const i = t[n];
                if (!i) return;
                const r = ir(i, o);
                if (r) {
                    e.src = r;
                    const t = e.closest("picture");
                    if (t) {
                        t.querySelectorAll("source").forEach((e => {
                            e.srcset = r
                        }))
                    }
                }
            } catch (e) {
                console.warn("[AI Images] Failed to replace image for tag " + n + ":", e)
            }
        })), ...Array.from(i).map((async e => {
            const n = e.getAttribute("data-ai-tag");
            if (n) try {
                const i = t[n];
                if (!i) return;
                const r = ir(i, o);
                if ("SOURCE" === e.tagName) return void(e.srcset = r);
                const a = e.style.backgroundImage,
                    s = a && "none" !== a;
                e.style.backgroundImage = "url('" + r + "')", s || (e.style.backgroundSize = "cover", e.style.backgroundPosition = "center")
            } catch (e) {
                console.warn("[AI Images] Failed to replace background image for tag " + n + ":", e)
            }
        }))])
    } catch (e) {
        console.warn("[AI Images] Error replacing AI generated images:", e)
    }
}
async function rr() {
    try {
        if (!0 !== (null == (e = OptiMonkRegistry) || null == (t = e.features) ? void 0 : t.SMART_PAGE_TAG)) return Promise.resolve();
        console.log("OM - Page Optimizer enabled");
        const n = Zi(),
            i = n.attr();
        Object.keys(i).filter((e => e.startsWith("sppo"))).forEach((e => {
            n.removeAttr(e)
        }));
        const o = yn();
        console.log("OM - Page Optimizer using page slug", o);
        const r = await OptiMonkEmbedded.RequestService.loadPageSmartTags(o);
        Object.keys(r).forEach((e => {
            const t = "sppo" + e;
            n.attr(t, r[e])
        }))
    } catch (e) {
        console.error(e.message)
    }
    var e, t
}
class ar extends xi {
    static get type() {
        return "domain"
    }
    static validate(e) {
        var t, n;
        if (!e.domain) return console.warn("[OM] No domain for campaign: " + e.campaignId), !1;
        const i = pt(e.domain),
            o = null != (t = window.OptiMonkRegistry) && t.isShopifyDesignMode && null != (n = window.OptiMonkRegistry) && n.shopifyLiveDomain ? pt(window.OptiMonkRegistry.shopifyLiveDomain) : pt(window.location.host);
        return "*" === i || i === o || ((e, t) => {
            if ("*" !== e[0]) return !1;
            const n = e.substring(e.indexOf(".") + 1);
            return t === n || -1 !== t.indexOf(".") && n === t.substring(t.indexOf(".") + 1)
        })(i, o)
    }
}
class sr {
    constructor() {
        this.requestService = S(), this.adapter = Zi()
    }
    static getInstance() {
        return this.instance || (this.instance = new sr), this.instance
    }
    setSmartPersonalizationParameter(e) {
        const {
            trackParams: t
        } = e;
        this.trySetFromParams(t), this.paramValue || this.tryLoadFromStorage()
    }
    trySetFromParams(e) {
        const t = Object.keys(e).find((e => ar.validate({
            domain: e
        })));
        if (!t) return;
        OptiMonkRegistry.trackParams = e[t];
        const {
            params: n,
            domainId: i
        } = e[t];
        if (this.domainId = i, null == n || !n.length) return;
        const o = new URLSearchParams(window.location.search);
        for (const e of n) {
            const t = o.get(e);
            if (t) return this.adapter.attr("om_track_param", e + "=" + t), this.paramValue = t, void(this.paramName = e)
        }
    }
    tryLoadFromStorage() {
        const e = this.adapter.attr("om_track_param");
        if (!e) return;
        const [t, ...n] = e.split("=");
        this.paramName = t, this.paramValue = n.join("=")
    }
    download() {
        this.content = this.requestService.loadSmartPersonalizerJson(this.paramName, this.domainId)
    }
    setup(e) {
        if (!this.paramValue) return;
        e.some((e => e.changes.some((e => "smart-personalization" === e.type)))) && (this.clearExistingParams(), this.download())
    }
    clearExistingParams() {
        const e = this.adapter.attr();
        Object.keys(e).filter((e => e.startsWith("sp_"))).forEach((e => {
            this.adapter.removeAttr(e)
        }))
    }
    async setDTRs(e) {
        if (!e.changes.some((e => "smart-personalization" === e.type))) return;
        const t = await this.content;
        null != t && t[this.paramValue] && Object.keys(t[this.paramValue]).forEach((e => {
            let n = "sp_" + e;
            0 === e.indexOf("sp_") && (n = e), this.adapter.attr(n, t[this.paramValue][e])
        }))
    }
}
class cr {
    static init() {
        setTimeout((() => {
            if (cr.getAvailableAdapters().length) return cr.processEvents(), void cr.listenEvents();
            cr.init()
        }), 100)
    }
    static send(e) {
        let {
            eventName: t,
            label: n,
            campaign: i
        } = e;
        const o = cr.getAvailableAdapters();
        OptiMonkRegistry.isDebug && (console.log("[Analytics Event Manager] sending"), console.table({
            eventName: t,
            label: n,
            campaign: i
        })), o.forEach((e => {
            nt.send(t, e, {
                campaign: i
            })
        }))
    }
    static processEvents() {
        (OptiMonkRegistry.analyticsEvents || []).forEach((e => {
            cr.send(e)
        }))
    }
    static listenEvents() {
        const e = OptiMonkRegistry.analyticsEvents.push;
        OptiMonkRegistry.analyticsEvents.push = function() {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            cr.send(...n), e.apply(OptiMonkRegistry.analyticsEvents, n)
        }
    }
    static getAvailableAdapters() {
        return tt.getAll().filter((e => e.isEnabled()))
    }
}
class lr {
    constructor(e) {
        let {
            requestService: t
        } = e;
        this.requestService = t
    }
    async getScraperInfoForSPPO(e) {
        const t = this.requestService.getScraperInfoForSPPORequestUrl(e);
        return this._getRequestWithParsedResponse(t)
    }
    async _getRequestWithParsedResponse(e) {
        const t = await this.requestService.sendGetRequest(e);
        try {
            return JSON.parse(t)
        } catch (e) {
            return console.error(e), []
        }
    }
}
class dr {
    getTextContentBySelector(e) {
        var t, n;
        return null != (t = null == (n = qn.getElement(e)) ? void 0 : n.textContent) ? t : ""
    }
    getCannonicalUrl() {
        var e, t;
        return null != (e = null == (t = qn.getElement("link[rel='canonical']")) ? void 0 : t.getAttribute("href")) ? e : ""
    }
}
class ur {
    constructor(e) {
        let {
            requestService: t,
            isMobile: n
        } = e;
        this.scraperDOM = new dr, this.requestService = t, this.isMobile = n
    }
    async setCurrentUrl(e) {
        this.currentUrl = e
    }
    async runScraper() {}
    _getScraperSelectors(e) {
        return new lr({
            requestService: this.requestService
        }).getScraperInfoForSPPO(e)
    }
    _getScrapedContent(e, t) {
        return null != e && e.length ? e.map((e => {
            const n = this.scraperDOM.getTextContentBySelector(e.selector);
            return {
                url: this.currentUrl,
                cannonicalUrl: t,
                pageIdentifier: this._getPageIdentifier(null != t ? t : this.currentUrl),
                isMobile: this.isMobile ? 1 : 0,
                selectorId: e.selectorId,
                contentType: e.contentType,
                content: n
            }
        })).filter((e => {
            var t;
            return null == (t = e.content) ? void 0 : t.length
        })) : []
    }
    _sendScrapedContents(e) {
        null != e && e.length && e.forEach((e => {
            Ve("scrapedContentForSPPO", e)
        }))
    }
    _getPageIdentifier(e) {
        return vn(e)
    }
}
const pr = () => {
        let e;
        return [new Promise((t => {
            let n = !1;
            e = e => {
                if (n) throw new Error("Async value can only be set once");
                t(e), n = !0
            }
        })), e]
    },
    mr = ["browser_language", "browser_name", "browser_version", "first_landing_page", "first_visit_date", "os_name", "os_version", "popup_last_seen", "tz", "tz_offset", "utm_campaign", "utm_content", "utm_medium", "utm_source", "current_month_text_en"],
    gr = {
        _country_code: "country_code"
    },
    hr = function(e) {
        if (void 0 === e && (e = "en-US"), !window.Intl) {
            return (new Date).toLocaleString(e, {
                month: "long"
            })
        }
        return new Intl.DateTimeFormat(e, {
            month: "long"
        }).format()
    },
    fr = e => {
        Qt.local.setItem("OptiMonkVisitorAttributes", e)
    },
    wr = () => {
        const e = Qt.local.getItem("OptiMonkVisitorAttributes"),
            t = new Date,
            n = t.getTimezoneOffset() / 60,
            o = i({
                browser_language: window.navigator.language
            }, (() => {
                const e = [{
                        name: "Windows",
                        regex: /Windows NT (\d+\.\d+)/
                    }, {
                        name: "iOS",
                        regex: /iPhone; CPU iPhone OS (\d+[_\d]+)/
                    }, {
                        name: "iPadOS",
                        regex: /iPad; CPU OS (\d+[_\d]+)/
                    }, {
                        name: "macOS",
                        regex: /Mac OS X (\d+([_\.\d]+)?)/
                    }, {
                        name: "Android",
                        regex: /Android (\d+(\.\d+)?)/
                    }, {
                        name: "ChromeOS",
                        regex: /CrOS [a-zA-Z0-9_]+ (\d+\.\d+)/
                    }, {
                        name: "Linux",
                        regex: /Linux/
                    }],
                    t = [{
                        name: "Edge",
                        regex: /Edg\/(\d+\.\d+)/
                    }, {
                        name: "Opera",
                        regex: /OPR\/(\d+\.\d+)/
                    }, {
                        name: "Samsung Browser",
                        regex: /SamsungBrowser\/(\d+\.\d+)/
                    }, {
                        name: "UC Browser",
                        regex: /UCBrowser\/(\d+\.\d+)/
                    }, {
                        name: "Firefox",
                        regex: /Firefox\/(\d+\.\d+)/
                    }, {
                        name: "Safari",
                        regex: /Version\/(\d+\.\d+).*Safari/
                    }, {
                        name: "Chrome",
                        regex: /Chrome\/(\d+\.\d+)/
                    }, {
                        name: "IE",
                        regex: /Trident\/.*rv:(\d+\.\d+)/
                    }],
                    n = navigator.userAgent;
                return i({}, (() => {
                    if (/Macintosh;.*Mac OS X/.test(n) && navigator.maxTouchPoints > 1) return {
                        os_name: "iPadOS",
                        os_version: "No version"
                    };
                    for (const t of e) {
                        const e = n.match(t.regex);
                        if (e) {
                            const n = e[1] ? e[1].replace(/_/g, ".") : "No version";
                            return {
                                os_name: t.name,
                                os_version: n
                            }
                        }
                    }
                    return {
                        os_name: "Unknown",
                        os_version: "Unknown"
                    }
                })(), (() => {
                    for (const e of t) {
                        const t = n.match(e.regex);
                        if (t) return {
                            browser_name: e.name,
                            browser_version: t[1]
                        }
                    }
                    return {
                        browser_name: "Unknown",
                        browser_version: "Unknown"
                    }
                })())
            })(), (e => {
                const t = ["utm_medium", "utm_source", "utm_campaign", "utm_content"],
                    n = window.location.search.substring(1),
                    i = new URLSearchParams(n),
                    o = Object.fromEntries(t.map((t => {
                        var n;
                        return [t, null != (n = null == e ? void 0 : e[t]) ? n : ""]
                    })));
                for (const n of i.keys()) {
                    const r = void 0 === (null == e ? void 0 : e[n]) || "" === (null == e ? void 0 : e[n]);
                    t.includes(n) && r && (o[n] = i.get(n))
                }
                return o
            })(e), {
                current_month_text_en: hr(),
                current_month_text_hu: hr("hu-HU"),
                tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
                tz_offset: n < 0 ? "UTC" + n : "UTC+" + n
            }, (!e || void 0 === e.first_landing_page) && {
                first_landing_page: window.location.href
            }, (!e || void 0 === e.first_visit_date) && {
                first_visit_date: t.toISOString()
            });
        fr(i({}, e, o))
    },
    vr = () => {
        const e = Qt.local.getItem("OptiMonkVisitorAttributes") || {};
        fr(i({}, e, {
            popup_last_seen: (new Date).toISOString()
        }))
    },
    yr = ["thank_you", "checkout_one_thank_you"],
    Ir = () => window.Shopify && window.Shopify.Checkout && yr.includes(window.Shopify.Checkout.page);
class br {
    track() {
        const e = Ne();
        if (!e) return;
        const t = this.getFromCookie(),
            n = [e, ...t.filter((t => t.productId !== e.productId || t.variantId !== e.variantId))].slice(0, 10);
        W.local.setItem("optiMonkViewedProducts", JSON.stringify(n))
    }
    getFromCookie() {
        const e = W.local.getItem("optiMonkViewedProducts");
        try {
            return e ? JSON.parse(e) : []
        } catch (e) {
            return []
        }
    }
    getViewedProducts(e) {
        let {
            filterCurrent: t = !0,
            limit: n = 10
        } = e, i = this.getFromCookie();
        if (t) {
            const e = Ne();
            e && (i = i.filter((t => t.productId !== e.productId || t.variantId !== e.variantId)))
        }
        return i.slice(0, n)
    }
}
let Cr;
const kr = () => (Cr || (Cr = new br), Cr);
let [Sr, Or] = pr();
const Mr = () => {
        var e;
        return null == (e = window) ? void 0 : e.JFClientSDK
    },
    _r = () => {
        const e = Mr();
        try {
            e && Or(!0)
        } catch (t) {
            Sr = Promise.resolve(!!e)
        }
    },
    Pr = async () => (Mr() || await Sr, Mr()),
    Er = e => Promise.race([Pr(), new Promise((t => setTimeout((() => t()), e)))]);

function Ar(e) {
    const t = Ne();
    return t && (window.JFClientSDK.v2.registerProductView(t), e) ? window.JFClientSDK.v2.go().catch((function(e) {
        console.log("An error occurred during JFClientSDK.v2.go():", e.message), console.log(e)
    })) : null
}

function Rr() {
    if (!window.woocommerce_params) return !1;
    const e = Qt.local.getItem("OptiMonkVisitorAttributes"),
        t = null == e ? void 0 : e["wp_order.order_id"];
    if (!t) return !1;
    const n = null == e ? void 0 : e.woo_last_order_id;
    return !(n && n === t)
}

function Tr() {
    const e = Qt.local.getItem("OptiMonkVisitorAttributes"),
        t = e["wp_order.order_id"];
    Ve("eoo", {
        orderId: t,
        total: parseFloat(e["wp_order.total"]) || 0,
        itemCount: parseInt(e["wp_order.item_count"] || 0, 10),
        currency: e["wp_order.currency"],
        platform: "woocommerce",
        deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
    }), e.woo_last_order_id = t, Qt.local.setItem("OptiMonkVisitorAttributes", e)
}
Mr() && _r();
const xr = () => {
        if (OptiMonkRegistry.ga4EventListenerRegistered) return;
        const e = Nt();
        (e => {
            window.dataLayer = window.dataLayer || [];
            const t = window.dataLayer.push;
            window.dataLayer.push = function() {
                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                try {
                    i.forEach((t => {
                        e(t)
                    }))
                } catch (e) {
                    $o(e)
                }
                return t.apply(window.dataLayer, i)
            }, window.dataLayer.forEach((t => e(t)))
        })((t => {
            if (!("purchase" === (null == t ? void 0 : t.event) || "event" === (null == t ? void 0 : t[0]) && "purchase" === (null == t ? void 0 : t[1]))) return;
            const n = t.ecommerce || t[2],
                {
                    transaction_id: i,
                    items: o,
                    value: r,
                    currency: a,
                    coupon: s
                } = n;
            if (!i || isNaN(parseFloat(r)) || !a) return void Ve("ga4:nonstandard-purchase", {
                data: JSON.stringify(n)
            });
            const {
                totalDiscount: c,
                itemCount: l
            } = (o || []).reduce(((e, t) => {
                var n;
                let {
                    totalDiscount: i,
                    itemCount: o
                } = e;
                return {
                    totalDiscount: i + (t.discount ? parseFloat(t.discount) : 0),
                    itemCount: o + (null != (n = t.quantity) ? n : 1)
                }
            }), {
                totalDiscount: 0,
                itemCount: 0
            });
            Ve("ga4:purchase", {
                orderId: i,
                total: parseFloat(r),
                itemCount: l,
                currency: a,
                platform: OptiMonkEmbedded.Engine.getInfo().type,
                deviceType: e,
                total_discount: c,
                discount_code: s || void 0
            })
        })), OptiMonkRegistry.ga4EventListenerRegistered = !0
    },
    Dr = () => {
        var e, t, n, o, r;
        xr(), Ar(), kr().track(),
            function() {
                var e;
                let t = (null == (e = document.querySelector("link[rel='canonical']")) ? void 0 : e.getAttribute("href")) || null;
                t && (t = t.split("?")[0]);
                try {
                    Ve("pageView", {
                        title: document.title,
                        referrer: document.referrer,
                        userAgent: navigator.userAgent,
                        url: window.location.href,
                        host: window.location.host,
                        path: window.location.pathname,
                        query: window.location.search,
                        hash: window.location.hash,
                        viewportWidth: document.documentElement.clientWidth,
                        viewportHeight: document.documentElement.clientHeight,
                        canonicalUrl: t
                    })
                } catch (e) {
                    console.log("unable to log page view:", e.message)
                }
            }(),
            function() {
                const e = Qt.local.getItem("OptiMonkVisitorAttributes"),
                    t = {};
                mr.forEach((n => {
                    e && void 0 !== e[n] && (t[n] = e[n])
                })), Object.entries(gr).forEach((n => {
                    let [i, o] = n;
                    e && void 0 !== e[i] && (t[o] = e[i])
                })), Ve("visitorData", t)
            }(), Ir() && function() {
                if (window.Shopify.checkout) {
                    var e;
                    const t = window.Shopify.checkout.line_items.reduce(((e, t) => e + t.quantity), 0),
                        n = Nt();
                    Ve("eoo", i({
                        orderId: window.Shopify.checkout.order_id.toString(),
                        total: parseFloat(window.Shopify.checkout.total_price_set.shop_money.amount),
                        itemCount: t,
                        currency: window.Shopify.checkout.total_price_set.shop_money.currency_code,
                        shopifyCurrency: window.Shopify.currency.active,
                        platform: "shopify",
                        deviceType: n
                    }, window.Shopify.checkout.discount && {
                        total_discount: parseFloat(window.Shopify.checkout.discount.amount)
                    }, (null == (e = window.Shopify.checkout.discount) ? void 0 : e.code) && {
                        discount_code: window.Shopify.checkout.discount.code
                    }))
                }
            }(), window.ShopRenter && window.ShopRenter.page && "checkout/success" === window.ShopRenter.page.route && function() {
                if (window.ShopRenter.lastOrder) {
                    const e = window.ShopRenter.lastOrder.products.reduce(((e, t) => e + parseInt(t.quantity, 10)), 0);
                    Ve("eoo", {
                        orderId: window.ShopRenter.lastOrder.id,
                        total: window.ShopRenter.lastOrder.total,
                        itemCount: e,
                        currency: window.ShopRenter.lastOrder.currency,
                        platform: "shoprenter",
                        deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
                    })
                }
            }(), window.UNAS && "order_send" === (null == (e = window.UNAS) || null == (t = e.design) ? void 0 : t.page) && function() {
                var e, t, n, i, o, r;
                if (null == (e = window.UNAS) || !e.getOrder) return;
                const a = null != (t = null == (n = window.UNAS) || null == (i = n.shop) ? void 0 : i.last_order_key) ? t : null;
                if (!a) return;
                let s = Qt.local.getItem("OptiMonkVisitorAttributes");
                const c = null != (o = null == (r = s) ? void 0 : r.unas_last_order_key) ? o : null;
                c && c === a || window.UNAS.getOrder((e => {
                    var t;
                    if (null == e || !e.id || null == (t = e.items) || !t.item) return;
                    const n = (Array.isArray(e.items.item) ? e.items.item : [e.items.item]).reduce(((e, t) => e + parseInt((null == t ? void 0 : t.quantity) || 0, 10)), 0);
                    Ve("eoo", {
                        orderId: e.id,
                        secondaryOrderId: e.key,
                        total: parseFloat(e.sum_price_gross) || 0,
                        itemCount: n,
                        currency: e.currency,
                        platform: "unas",
                        deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
                    }), s = Qt.local.getItem("OptiMonkVisitorAttributes"), s.unas_last_order_key = a, Qt.local.setItem("OptiMonkVisitorAttributes", s)
                }))
            }(), Rr() && Tr(), (null == (n = window.$) || null == (o = n.Gomag) || null == (r = o.environment) ? void 0 : r.hasOwnProperty("Page/OrderComplete")) && window.$.Gomag.environment["Page/OrderComplete"] && function() {
                const e = document.querySelector('[href*="order"]') || document.querySelector('[href*="comenzi?c="]');
                let t;
                var n;
                t = e ? e.href.includes("comenzi?c=") ? e.href.split("c=")[1] : e.href.split("=").pop() : "1", Ki.totalItems() > 0 && (Ve("eoo", {
                    orderId: t,
                    platform: "gomag",
                    total: Ki.total(),
                    itemCount: Ki.totalItems(),
                    currency: (null == (n = window.cart) ? void 0 : n.currency) || "Lei",
                    deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
                }), Ki.clear())
            }(), window.mpro && window.location.href.includes("checkout=done") && function() {
                var e, t, n, i;
                const o = (() => {
                        try {
                            return new URL(window.location.href).searchParams.get("id")
                        } catch (e) {
                            return window.location.href.includes("id=") ? window.location.href.split("id=")[1].split("&")[0] : null
                        }
                    })(),
                    r = (null == (e = window.mpro) || null == (t = e.config) || null == (n = t.env) || null == (i = n.currency) ? void 0 : i.iso_code) || "RON";
                Ki.totalItems() > 0 && (Ve("eoo", {
                    orderId: o,
                    total: Ki.total(),
                    itemCount: Ki.totalItems(),
                    currency: r,
                    platform: "merchantpro",
                    deviceType: OptiMonkRegistry.isMobile ? "mobile" : "desktop"
                }), Ki.clear())
            }(), Fe(), window.JFClientSDK.v2.go().catch((function(e) {
                console.error("An error occurred during initial JFClientSDK request:", e.message), console.error(e)
            })),
            function(e) {
                if (OptiMonkRegistry.productChangeInterval && clearInterval(OptiMonkRegistry.productChangeInterval), !(e = e || Ne())) return;
                const t = {
                    productId: e.productId,
                    variantId: e.variantId
                };
                window.ShopifyAnalytics && (OptiMonkRegistry.productChangeInterval = setInterval((function() {
                    const e = Ne();
                    e && e.variantId && t.variantId !== e.variantId && (t.productId = e.productId, t.variantId = e.variantId, console.log("Detected Shopify variant change."), Ar(!0))
                }), 1e3))
            }(), document.querySelector("html").addEventListener("optimonk#wc-attributes-updated", (() => {
                var e;
                const t = Qt.local.getItem("OptiMonkVisitorAttributes"),
                    n = null != (e = null == t ? void 0 : t["wp_current_product.id"]) ? e : null;
                n && window.JFClientSDK.v2.registerProductView({
                    productId: n,
                    variantId: n
                }), Rr() && Tr(), window.JFClientSDK.v2.go().catch((function(e) {
                    console.error("An error occurred during initial JFClientSDK request:", e.message), console.error(e)
                }))
            }))
    },
    Nr = {},
    Lr = OptiMonkRegistry.baseUrl + "/error/log";

function Ur(e) {
    Pt.post("message=" + encodeURIComponent(JSON.stringify(e)), Lr)
}

function Vr(e) {
    return !!Nr[e.message]
}

function Fr(e) {
    Nr[e.message] = 1
}
const jr = {
        sendException(e) {
            if (Vr(e)) return;
            Fr(e);
            Ur(function(e) {
                var t, n, i;
                return {
                    message: e.message,
                    stack: e.stack,
                    userAgent: navigator.userAgent,
                    url: window.location.href,
                    name: e.name,
                    line: e.lineNumber || e.number,
                    timezone: null == (t = window.Intl) || null == t.DateTimeFormat || null == (n = (i = t.DateTimeFormat()).resolvedOptions) ? void 0 : n.call(i).timeZone
                }
            }(e))
        },
        sendEventError(e) {
            if (Vr(e)) return;
            Fr(e);
            var t;
            Ur({
                message: (t = e).message,
                stack: t.error ? t.error.stack : "",
                userAgent: navigator.userAgent,
                url: window.location.href,
                errorEvent: t,
                file: t.filename
            })
        }
    },
    Br = () => {
        let e = new URLSearchParams(window.location.search).get("_kx");
        const t = W.local.getItem("__kla_id");
        try {
            var n;
            if (t) {
                var i;
                const n = JSON.parse(window.atob(t));
                e = null != (i = e) ? i : n.$exchange_id
            }
            if (!e) return;
            const o = (null == (n = window._learnq) || null == n.account ? void 0 : n.account()) || e.split(".").pop();
            o || console.error("OptiMonk: unable to acquire Klaviyo account id"), window.JFClientSDK.v2.registerCustomerAddress({
                provider: "klaviyo",
                providerServiceId: o,
                addressType: "customerId",
                customerAddress: e
            }), window.JFClientSDK.v2.addClientStateProperty("klaviyoExchangeId", e)
        } catch (e) {
            jr.sendException(e)
        }
    };
class qr {
    static init() {
        (qr.isWebSelectorEnabled() || nn.isPreview()) && (nn.isShareablePreview() || nn.isPopupPreview() || document.getElementById("om-pnc-script") || (D("webSelector", OptiMonkRegistry.pncJsScriptUrl + "?t=" + (new Date).getTime(), null, "om-pnc-script"), document.addEventListener("webSelectorLoaded", qr.handleWebSelectorLoaded)))
    }
    static isWebSelectorEnabled() {
        const e = sessionStorage,
            t = performance.getEntriesByType("resource").filter((e => "script" === e.initiatorType)).some((e => e.startTime > performance.timeOrigin)),
            n = "x-om-web-selector-restore-token",
            i = "x-om-web-selector-token",
            o = e.getItem(n);
        o && e.setItem(i, o), t && e.removeItem(n);
        const r = new URLSearchParams(location.search).get(i),
            a = e.getItem(i) || e.getItem(n);
        return r || a
    }
    static removeListener() {
        document.removeEventListener("webSelectorLoaded", qr.handleWebSelectorLoaded)
    }
    static async handleWebSelectorLoaded() {
        try {
            qr.removeListener();
            const e = await S().loadPNCConfig();
            window.PNC.initPNC(e)
        } catch (e) {
            console.error("Failed to initialize WebSelector:", e.message), console.error(e)
        }
    }
}
const Hr = async e => {
    var t, n, i, o;
    let {
        limitData: r,
        campaignsData: a,
        cookieManager: s
    } = e;
    window.OptiMonk = window.OptiMonk || {}, window.OptiMonk.campaigns = [];
    const l = document.querySelector("html");
    if (u(l, "optimonk#popup-init"), u(l, "optimonk#preload-initialized"), window.OMReloading = !1, (qr.isWebSelectorEnabled() || nn.isPreview()) && qr.init(), document.addEventListener("jetfabricLoaded", (function e() {
            try {
                var t, n, i, o, r, a;
                if (document.removeEventListener("jetfabricLoaded", e), !OptiMonkRegistry.account || !window.JFClientSDK) return;
                const {
                    provider: s,
                    providerServiceId: c
                } = xt(), l = Dt(), d = rt(), u = (null == (t = OptiMonkRegistry) || null == (n = t.crossDomainParams) ? void 0 : n.optiMonkClientId) || OptiMonkRegistry.clientId || null, p = (null == (i = OptiMonkRegistry) || null == (o = i.crossDomainParams) ? void 0 : o.provider) || s || null, m = (null == (r = OptiMonkRegistry) || null == (a = r.crossDomainParams) ? void 0 : a.providerServiceId) || c;
                if (window.JFClientSDK.v2.setAppId("optimonk").registerCustomerAddress({
                        provider: "optimonk",
                        providerServiceId: "" + OptiMonkRegistry.account,
                        customerAddress: u,
                        addressType: "deviceId"
                    }).registerCustomerAddress({
                        provider: p,
                        providerServiceId: m,
                        customerAddress: l || null,
                        addressType: "customerId"
                    }).setUserSessionSate({
                        visitorInExperiment: d
                    }), "shopify" === s) {
                    const e = W.local.getItem("_shopify_y");
                    e && window.JFClientSDK.v2.registerCustomerAddress({
                        provider: "shopify",
                        providerServiceId: c,
                        customerAddress: e,
                        addressType: "deviceId"
                    })
                }
                Br(), _r(), Dr()
            } catch (e) {
                console.error("Failed to initialize JF:", e.message), console.error(e)
            }
        })), window.JFClientSDK ? Dr() : D("jetfabric", OptiMonkRegistry.jfJsScriptUrl), null != (t = window.OptiMonk.diagnosticTool) && t.isEmbeddedDiag()) return window.OptiMonk.campaigns = [], void u(l, "optimonk#campaigns-before-load", {
        type: "popup"
    });
    if (null != (n = window.OptiMonk.diagnosticTool) && n.isPopupDiag() && (window.OptiMonk.diagnosticTool.setCampaignsMeta(a.campaigns), window.OptiMonk.diagnosticTool.saveSession(), a.campaigns = window.OptiMonk.diagnosticTool.getCampaignsMeta()), nn.isPopupPreview()) return window.OptiMonk.campaigns = await S().getVariantDataForPreview(nn.getPopupPreviewVariantId()), u(l, "optimonk#campaigns-before-load", {
        type: "popup"
    }), s.resetPreviewCampaign(window.OptiMonk.campaigns[0].campaignId), void window.OptiMonkEmbedded.loadPopups();
    if (nn.isPreview()) return void u(l, "optimonk#campaigns-before-load", {
        type: "popup"
    });
    if (!r.remaining) {
        if (!window.OptiMonk.diagnosticTool) return void u(l, "optimonk#campaigns-before-load", {
            type: "popup"
        });
        window.OptiMonk.diagnosticTool.handleInitIssue({
            type: c.LIMIT_REACHED
        })
    }
    if (null == a || !a.campaigns.length) {
        if (!window.OptiMonk.diagnosticTool) return void u(l, "optimonk#campaigns-before-load", {
            type: "popup"
        });
        window.OptiMonk.diagnosticTool.handleInitIssue({
            type: c.MISSING_META
        })
    }
    window.OptiMonkRegistry.variantsTypeByCampaign = a.typeByCampaign;
    const {
        Validators: d
    } = await
    import (OptiMonkRegistry.esmAssetPath + "/index-b57bb11d.js");
    let p = await d.beforeInit.validate(a.campaigns, {
        cookieManager: s
    });
    p.length || window.OptiMonk.diagnosticTool ? (window.OptiMonk.diagnosticTool && (window.OptiMonk.diagnosticTool.reCreateCampaignsMetaAfterBeforeInit(p), p = window.OptiMonk.diagnosticTool.getCampaignsMeta()), window.OptiMonk.campaigns = p, s.addCampaigns(p.map((e => e.campaignId))), null == (i = window.OptiMonkEmbedded) || null == (o = i.experimentalDebug) || null == o.log || o.log({
        action: "initPopupCampaigns",
        data: {
            popupCampaignIds: p.map((e => e.campaignId)).join(", ")
        }
    }), u(l, "optimonk#campaigns-before-load", {
        type: "popup"
    }), window.OptiMonkEmbedded.loadPopups()) : u(l, "optimonk#campaigns-before-load", {
        type: "popup"
    })
};

function Jr(e, t) {
    let {
        maxAge: n,
        cache: i = new Map,
        cacheId: o,
        cacheRejectedPromise: r = !1,
        cacheFromContext: a
    } = void 0 === t ? {} : t;
    const s = "function" == typeof i ? i() : i,
        c = function() {
            var t;
            const i = null !== (t = null == a ? void 0 : a.call(this)) && void 0 !== t ? t : s;
            for (var c = arguments.length, l = new Array(c), d = 0; d < c; d++) l[d] = arguments[d];
            const u = o ? o(...l) : l[0];
            if (i.has(u)) {
                const e = i.get(u);
                if (!("number" == typeof n && "number" == typeof(null == e ? void 0 : e.timestamp) && (0 === n || Date.now() - e.timestamp > n))) return null == e ? void 0 : e.value
            }
            const p = e.apply(this, l);
            return i.set(u, {
                value: p,
                timestamp: Date.now()
            }), p instanceof Promise ? p.catch((e => {
                throw r || i.delete(u), e
            })) : p
        };
    return Object.defineProperty(c, "name", {
        value: e.name
    }), c
}
const Gr = {
    maxAge: 30,
    cache: {
        set(e, t) {
            null != t && t.value && (t.value.then ? t.value.then((n => {
                t.value = n, Qt.local.setItem(e, t)
            })) : Qt.local.setItem(e, t))
        },
        get: e => Qt.local.getItem(e),
        has: e => Qt.local.hasItem(e),
        delete: e => Qt.local.removeItem(e)
    }
};
class Wr {
    static async get(e, t) {
        let {
            cacheId: n,
            maxAge: o
        } = t;
        const r = {
            maxAge: 1e3 * o
        };
        n && (r.cacheId = n);
        return Jr(e, i({}, Gr, r))()
    }
    static async set(e, t) {
        let {
            cacheId: n
        } = t, o = {};
        n && (o = {
            cacheId: n
        });
        const r = i({}, Gr.cache);
        r.has = () => !1;
        return Jr(e, i({}, Gr, {
            cache: r
        }, o))()
    }
}
const zr = new class {
        constructor() {
            this.cache = Wr
        }
        async get(e, t) {
            let {
                keyPrefix: n = "om",
                key: i,
                ttl: o = 30,
                timeout: r
            } = t;
            const a = () => n + "-" + i;
            return Wo((async () => this.cache.get(e, {
                cacheId: a,
                maxAge: o
            })), r)
        }
        async set(e, t) {
            let {
                keyPrefix: n = "om",
                key: i
            } = t;
            return await this.cache.set(e, {
                cacheId: () => n + "-" + i
            }), !0
        }
    },
    Kr = () => "om-country";
class Xr {
    static save(e) {
        zr.set((() => e), {
            key: "country"
        })
    }
    static async get() {
        return Wr.get((() => {}), {
            cacheId: Kr,
            maxAge: 0
        })
    }
}
const $r = () => "om-ip_block";
class Yr {
    static save(e) {
        zr.set((() => e), {
            key: "ip_block"
        })
    }
    static async get() {
        return Wr.get((() => {}), {
            cacheId: $r,
            maxAge: 0
        })
    }
}
const Zr = "campaign-show",
    Qr = "campaign-conversion",
    ea = "campaign-rejected",
    ta = (e, t, n) => {
        switch (OptiMonkRegistry.isDebug && (console.log("[Report Manager] sending"), console.table(i({
            eventType: t
        }, n))), t) {
            case Qr:
                e.getInstance().reportConversion(n.element, n.campaign);
                break;
            case Zr:
                e.getInstance().reportCampaignShow(n.campaign);
                break;
            case ea:
                e.getInstance().reportRejected(n.campaign);
                break;
            default:
                console.error("[OM:DEBUG] Event not handled: " + t)
        }
    },
    na = async () => {
        const {
            ReportManager: e
        } = await Promise.resolve().then((function() {
            return cn
        }));
        let t;
        for (; t = OptiMonkRegistry.ReportEvents.shift();) {
            if (!Array.isArray(t) || "string" != typeof t[0]) return void console.warn("invalid pre-registered event: must be a tuple: [eventType, props]");
            const [n, i = {}] = t;
            ta(e, n, i)
        }
        await (async () => {
            if (OptiMonkRegistry.ReportEvents.push !== Array.prototype.push) return;
            const {
                ReportManager: e
            } = await Promise.resolve().then((function() {
                return cn
            }));
            OptiMonkRegistry.ReportEvents.push = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                n.forEach((t => {
                    if (!Array.isArray(t) || "string" != typeof t[0]) return void console.warn("invalid invocation: must be called with a tuple: [eventType, props]");
                    const [n, i = {}] = t;
                    ta(e, n, i)
                }))
            }
        })()
    },
    ia = e => e ? e.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "").toLowerCase() : "",
    oa = e => {
        const t = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
        return new RegExp("^" + t + "$")
    },
    ra = e => {
        let t;
        try {
            t = decodeURIComponent(e)
        } catch (n) {
            t = e
        }
        return t
    },
    aa = e => {
        const t = pt(window.location.hostname),
            n = e.filter((e => pt(e.domain) === t));
        if (!n.length) return null;
        const o = (e => {
            const t = window.location.pathname + window.location.search + window.location.hash,
                n = ra(t),
                i = new URLSearchParams(window.location.search);
            for (const t of e)
                if (oa(ra(t.controlVariant.url)).test(n) && !i.has("splitTestRedirect") && !t.excludeURLs.some((e => oa(ra(e)).test(n)))) return t;
            return null
        })(n.sort(((e, t) => t.createdAt - e.createdAt)).map((e => i({}, e, {
            controlVariant: e.urlVariants.find((e => !0 === e.isControl))
        }))));
        return o || null
    },
    sa = (e, t) => {
        var n;
        let i = (() => {
            const e = W.local.getItem("optiMonkSplitUrlTests");
            return e ? JSON.parse(e) : null
        })();
        i && (i = ((e, t) => {
            const n = JSON.parse(JSON.stringify(e));
            return e.forEach(((e, i) => {
                const o = e.split("_")[3];
                t.some((e => e._id === o)) || n.splice(i, 1)
            })), W.local.setItem("optiMonkSplitUrlTests", n), n
        })(i, e));
        const o = null == (n = i) ? void 0 : n.find((e => e.includes(t._id)));
        if (o) {
            const e = o.split("_")[5];
            return t.urlVariants.find((t => "" + t._id === e))
        }
        const r = (e => {
            const t = Math.floor(1e3 * Math.random() * e.length) + 1;
            let n = 0;
            for (const i of e)
                if (n += 1e3 * i.trafficShare, t <= n) return i;
            return null
        })(t.urlVariants);
        return ((e, t, n) => {
            const i = [];
            if (i.push("split_url_test_" + n + "_variant_" + t), i.length) {
                const t = [...e || [], ...i];
                W.local.setItem("optiMonkSplitUrlTests", t)
            }
        })(i, r._id, t._id), r
    },
    ca = (e, t) => {
        try {
            new Function(t)(), console.log("[frontend] JS snippet run for split URL A/B test:", e)
        } catch (t) {
            console.error("[frontend] Split URL A/B test JS snippet error.", e, t)
        }
    },
    la = (e, t) => {
        const n = ra(e),
            i = ra(t),
            o = ((e, t) => {
                var n;
                const i = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "(.*)"),
                    o = e.match(new RegExp("^" + i + "$"));
                return null != (n = null == o ? void 0 : o.slice(1)) ? n : []
            })(ra(window.location.pathname + window.location.search), n);
        let r = i;
        return r = r.replace(/\*/g, (() => o.shift() || "")), r = r.replace(/\?\?/g, "?").replace(/\&\&/g, "&").replace(/\?/g, ((e, t) => t === r.indexOf("?") ? "?" : "&")), window.location.hash && (r += window.location.hash), new URL(r, window.location.origin)
    },
    da = () => {
        window.OptiMonkEmbedded.getCrossDomainTrackingParams = function() {
            const e = OptiMonkRegistry.clientId,
                t = W.local.getItem("optiMonkExperiments") || "[]",
                n = xt(),
                i = Lt() || "" + window.location.origin + window.location.pathname,
                o = {
                    optiMonkClientId: e,
                    providerServiceId: n.providerServiceId,
                    provider: n.provider,
                    url: i,
                    visitorInExperiment: t
                },
                r = Object.entries(o).map((e => {
                    let [t, n] = e;
                    return encodeURIComponent(t) + "=" + encodeURIComponent(n)
                })).join("&");
            return function(e, t) {
                const n = window.location.hostname.split(".").slice(-2).join("."),
                    i = new Date("9999-12-31T23:59:59.999Z");
                document.cookie = e + "=" + t + "; Domain=." + n + "; path=/; expires=" + i.toUTCString()
            }("optiMonkCrossPlatformParamsCookie", JSON.stringify(o)), r
        }
    },
    ua = {
        SHOPIFY: "shopify",
        SHOPRENTER: "shoprenter",
        UNAS: "unas",
        WOOCOMMERCE: "woocommerce",
        GOMAG: "gomag",
        WORDPRESS: "wordpress",
        MERCHANTPRO: "merchantpro"
    };
class pa {
    constructor() {
        this.isDebug = !1, this.databaseId = null, this.uid = null, this.uuid = null, this.initTimestamp = null
    }
    init(e) {
        let {
            databaseId: t,
            features: n
        } = e;
        this._shouldLog(n) && (window.omEvents = window.omEvents || [], this.isDebug = !0, this.databaseId = t, this.uid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), this.uuid = W.local.getItem("optiMonkClientId"), this.initTimestamp = Date.now(), this.log({
            action: "init"
        }))
    }
    log(e) {
        let {
            action: t,
            data: n = {}
        } = e;
        if (!this.isDebug) return;
        const o = this._findTargetingAttribute(),
            r = this.initTimestamp ? Date.now() - this.initTimestamp : 0,
            a = ["runAbTestJsSnippet", "reportEOI"].includes(t);
        window.omEvents.push(["experimentalDebug", i({
            action: t,
            databaseId: this.databaseId,
            uuid: this.uuid,
            uid: this.uid,
            targetAttribute: o,
            sppoAttributes: this._findSppoAttributes().join(", "),
            url: window.location.href,
            initTimeDiff: r
        }, n), a]), console.log("[EXPERIMENTAL_DEBUG] " + t + " (+" + r + "ms)", i({
            targetAttribute: o
        }, n))
    }
    _shouldLog(e) {
        return !!Object.keys(e || {}).includes("EXPERIMENTAL_DEBUG")
    }
    _findTargetingAttribute() {
        const e = window.OptiMonkEmbedded.Visitor.createAdapter().attr();
        return Object.keys(e).find((e => e.startsWith("ai-image-"))) || null
    }
    _findSppoAttributes() {
        const e = window.OptiMonkEmbedded.Visitor.createAdapter().attr();
        return Object.keys(e).filter((e => e.startsWith("sppo")))
    }
}
class ma extends xi {
    static get type() {
        return "device"
    }
    static validate(e) {
        return "desktop_and_mobile" === e.device || e.device === uo()
    }
}
const ga = () => {
        Y.isSPA && (Y.isSPAReloadLocked = !0);
        const e = window.history.state;
        "mobile-exit-trigger-fake" !== (null == e ? void 0 : e.omName) && (window.history.replaceState({
            omName: "mobile-exit-trigger"
        }, ""), window.history.pushState({
            omName: "mobile-exit-trigger-fake"
        }, ""), Y.isSPA && setTimeout((() => {
            Y.isSPAReloadLocked = !1
        }), 500))
    },
    ha = {
        exitIntent: "exitIntent",
        timed: "timed",
        scrollDown: "scrollDown",
        click: "click",
        inactivity: "inactivity",
        load: "load",
        javascriptEvent: "javascriptEvent",
        immediateInvoke: "immediateInvoke",
        followupCouponInvoke: "followupCouponInvoke",
        restore: "restore",
        teaser: "teaserShow"
    };

function fa(e, t) {
    const n = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1) + "Handler"
        }(e),
        i = new ya[n](t);
    return i.type = e,
        function(e) {
            return i.handle(e)
        }
}
class wa {
    constructor(e) {
        this.removed = !1, this.campaign = e, this.campaign.initiatedEvents.push(this)
    }
    handle(e) {}
    removeHandlers() {}
    hasEventForDevice(e) {
        return this.filterForDevice(e).length > 0
    }
    filterForDevice(e) {
        return e.options.filter((e => e.device === uo() || "desktop_and_mobile" === e.device))
    }
    async validateDisplay() {
        var e, t;
        if (this.campaign.isDiagnostic && this.campaign.isDiagnostic() && "click" !== this.type && (null == (e = Y.diagnosticTool) || e.handleTriggeredEvent(this.type), null != (t = Y.diagnosticTool) && t.hasInitIssue())) return !1;
        return this.campaign.isValidOnEvent({
            type: this.type
        })
    }
    displayCampaign() {
        var e;
        this.removed || (Y.onDisplayCampaign(this.campaign.campaignId, {
            type: this.type
        }), null == (e = Y.diagnosticTool) || e.handleDisplayCampaign(this.campaign.campaignId, this.type))
    }
    async setTimeOutCallback(e) {
        await e.validateDisplay() ? (e.displayCampaign(), void 0 !== e.interval && clearInterval(this.interval)) : void 0 === e.interval && (e.interval = Y.Util.setInterval((function() {
            e.setTimeOutCallback(e)
        }), 1e3))
    }
    addTimeout(e) {
        const t = this;
        this.timeout = Y.Util.setTimeout((function() {
            t.setTimeOutCallback(t)
        }), e)
    }
}
class va extends wa {
    constructor() {
        super(...arguments), this.documentHeight = Math.max(va.documentGet("scrollHeight"), va.documentGet("offsetHeight"), va.documentGet("clientHeight"))
    }
    static documentGet(e) {
        return document.body[e] || document.documentElement[e]
    }
    getThreshold() {
        const e = this.campaign.events;
        return Y.parseInt(e.scrollDown.options[0].percentage) / 100 * this.documentHeight
    }
    async scrollCB() {
        this.getThreshold() <= va.documentGet("scrollTop") + window.innerHeight && await this.validateDisplay() && this.displayCampaign()
    }
    handle(e) {
        this.hasEventForDevice(e) && Y.addListener(document, "scroll", this.scrollCB.bind(this))
    }
    removeHandlers() {
        Y.removeListener(document, "scroll", this.scrollCB)
    }
}
const ya = {
    TYPES: ha,
    createHandler: fa,
    EventHandler: wa,
    ExitIntentHandler: class extends wa {
        async mobileExitCB() {
            await this.validateDisplay() && this.displayCampaign()
        }
        mouseOutCB(e) {
            var t, n;
            if ("select" === (null == e || null == (t = e.target) || null == (n = t.tagName) ? void 0 : n.toLowerCase())) return;
            e.relatedTarget || e.toElement || this.onMouseOut(e)
        }
        handle(e) {
            var t;
            if (this.hasEventForDevice(e)) {
                if (OptiMonkRegistry.isMobile && -1 !== (null == (t = e.options[0].device) ? void 0 : t.indexOf("mobile"))) {
                    Qt.session.hasItem("omMobileExit") || (Qt.session.setItem("omMobileExit", 1), window.addEventListener("touchmove", ga), window.addEventListener("touchend", ga), window.addEventListener("touchstart", ga));
                    const e = () => {
                        window.OMMobileExitHandler || (!window.OMMobileExitHandler && this.validateDisplay() ? (window.OMMobileExitHandler = 1,
                            import (OptiMonkRegistry.esmAssetPath + "/MobileExitHandler-73b7626d.js").then((e => {
                                let {
                                    MobileExitHandler: t
                                } = e;
                                new t
                            }))) : setTimeout(e, 50))
                    };
                    return e(), void Y.addListener(document.querySelector("html"), "optimonk#mobile-exit", this.mobileExitCB.bind(this))
                }
                Y.addListener(document, "mouseout", this.mouseOutCB.bind(this))
            }
        }
        removeHandlers() {
            Y.removeListener(document.querySelector("html"), "optimonk#mobile-exit", this.mobileExitCB), Y.removeListener(document, "mouseout", this.mouseOutCB)
        }
        async onMouseOut(e) {
            e.clientY < 10 && await this.validateDisplay() && this.displayCampaign()
        }
    },
    TimedHandler: class extends wa {
        handle(e) {
            this.hasEventForDevice(e) && this.addTimeout(1e3 * e.options[0].delay)
        }
        removeHandlers() {
            this.interval && clearInterval(this.interval), this.timeout && clearTimeout(this.timeout)
        }
    },
    ScrollDownHandler: va,
    ClickHandler: class extends wa {
        getEvents() {
            const e = this.campaign.events.click;
            return this.filterForDevice(e)
        }
        async clickCB(e) {
            if (!await this.validateDisplay()) return !0;
            const t = e.target;
            let n = !0;
            const i = this;
            return Y.each(this.getEvents(), (function(o, r) {
                if (!0 === n && (Y.inArray(t, document.querySelectorAll(r.selector)) >= 0 || t.closest(r.selector))) {
                    var a, s;
                    if (i.campaign.isDiagnostic && i.campaign.isDiagnostic())
                        if (null == (a = Y.diagnosticTool) || a.handleTriggeredEvent(i.type), null != (s = Y.diagnosticTool) && s.hasInitIssue()) return;
                    e.preventDefault(), i.displayCampaign(), t.blur(), n = !1
                }
            })), n
        }
        handle(e) {
            this.hasEventForDevice(e) && Y.addListener(document, "click", this.clickCB.bind(this))
        }
        removeHandlers() {
            Y.removeListener(document, "click", this.clickCB)
        }
    },
    InactivityHandler: class extends wa {
        handle(e) {
            const t = this;
            this.hasEventForDevice(e) && this.onInactive(1e3 * e.options[0].delay, (function() {
                t.removed || t.setTimeOutCallback(t)
            }))
        }
        removeHandlers() {
            this.removed = !0
        }
        onInactive(e, t) {
            const n = this;
            let i = Y.Util.setTimeout(t, e);

            function o() {
                clearTimeout(i), n.removed || (i = Y.Util.setTimeout(t, e))
            }
            Y.addListener(document, "mousemove", o), Y.addListener(document, "mousedown", o), Y.addListener(document, "mouseup", o), Y.addListener(document, "load", o), Y.addListener(document, "keyup", o), Y.addListener(document, "focus", o), Y.addListener(document, "scroll", o), Y.addListener(document, "tap", o), Y.addListener(document, "swipe", o), Y.addListener(document, "swipeleft", o), Y.addListener(document, "swiperight", o), Y.addListener(document, "taphold", o), Y.addListener(document, "scrollstart", o), Y.addListener(document, "scrollstop", o), Y.addListener(document, "vmousemove", o), Y.addListener(document, "vmousedown", o), Y.addListener(document, "vmouseup", o)
        }
    },
    ImmediateInvokeHandler: class extends wa {
        async handle(e) {
            !this.removed && await this.validateDisplay() && this.campaign.displayOnEvent({
                type: this.type
            })
        }
        removeHandlers() {
            this.removed = !0
        }
    },
    FollowupCouponInvokeHandler: class extends wa {
        constructor() {
            super(...arguments), this.handleNewFollowupCouponCode = async () => {
                !this.removed && await this.validateDisplay() && (this.campaign.isActivated() && this.removeHandlers(), this.displayCampaign())
            }
        }
        handle() {
            Y.addListener(document.querySelector("html"), "optimonk#followup-coupon-ready", this.handleNewFollowupCouponCode)
        }
        removeHandlers() {
            Y.removeListener(document.querySelector("html"), "optimonk#followup-coupon-ready", this.handleNewFollowupCouponCode), this.removed = !0
        }
    },
    LoadHandler: class extends wa {
        async handle(e) {
            !this.removed && await this.validateDisplay() && this.displayCampaign()
        }
        removeHandlers() {
            this.removed = !0
        }
    },
    RestoreHandler: class extends wa {
        async campaignCloseCB() {
            !this.removed && await this.validateDisplay() && this.campaign.displayOnEvent({
                type: this.type
            })
        }
        handle(e) {
            Y.addListener(document.querySelector("html"), "optimonk#campaign-close", this.campaignCloseCB.bind(this))
        }
        removeHandlers() {
            Y.addListener(document.querySelector("html"), "optimonk#campaign-close", this.campaignCloseCB)
        }
    },
    JavascriptEventHandler: class extends wa {
        constructor() {
            super(...arguments), this.options = []
        }
        async eventCB() {
            return !await this.validateDisplay() || (this.displayCampaign(), !1)
        }
        handle(e) {
            if (!this.hasEventForDevice(e)) return;
            this.options = this.filterForDevice(e);
            const t = this;
            Y.each(this.options, (function(e, n) {
                Y.addListener(document, n.eventName, t.eventCB.bind(t)), document.querySelector("html").addEventListener(n.eventName, t.eventCB.bind(t))
            }))
        }
        removeHandlers() {
            const e = this;
            Y.each(this.options, (function(t, n) {
                Y.removeListener(document, n.eventName, e.eventCB.bind(e)), document.removeEventListener && document.removeEventListener(n.eventName, e.eventCB.bind(e))
            }))
        }
        static async eventListener(e) {
            return !await e.validateDisplay() || (e.displayCampaign(), !1)
        }
    }
};
class Ia extends xi {
    static get type() {
        return "frequency stopusing"
    }
    static validate(e, t) {
        var n, i, o, r;
        let {
            cookieManager: a,
            event: s
        } = t;
        if (void 0 === s && null != (n = e.events) && n[ha.click]) return !0;
        if ((null == s ? void 0 : s.type) === ha.click) return !0;
        const c = a.getAccountCookie(),
            l = null != (i = e.id) ? i : e.campaignId,
            d = c.getCampaignCookie(l),
            u = null == (o = e.frequency) ? void 0 : o.stopAfterConverted,
            p = null == (r = e.frequency) ? void 0 : r.stopAfterClosed,
            m = "boolean" == typeof u,
            g = d.isFilled(),
            h = d.isClosed();
        return m ? (!0 !== u || !0 !== g) && (!0 !== p || !0 !== h) : !1 === g
    }
}
const ba = () => new Date,
    Ca = e => {
        if ("visitor-based" === e) return {
            offsetInHours: 0 - (new Date).getTimezoneOffset() / 60
        };
        const t = ba(),
            n = new Intl.DateTimeFormat("en-US", {
                timeZone: e,
                hourCycle: "h23",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }).format(t),
            i = t.getTimezoneOffset() / 60,
            o = new Date(n).getTime() - 60 * i * 60 * 1e3,
            r = Math.round((o - t.getTime()) / 36e5);
        return {
            offsetInHours: r,
            utcOffsetInHours: r,
            localeOffsetInHours: r + i
        }
    },
    ka = (e, t) => new Date(e.getTime() + 60 * t.offsetInHours * 60 * 1e3),
    Sa = (e, t) => (e.setUTCHours(t.hour, t.minute, 0), e),
    Oa = (e, t) => {
        const n = new Date(e);
        return Sa(n, t)
    },
    Ma = (e, t) => {
        const n = new Date(e);
        return n.setDate(n.getDate() - 1), Sa(n, t)
    },
    _a = (e, t) => {
        const n = new Date(e);
        return n.setDate(n.getDate() + 1), Sa(n, t)
    },
    Pa = (e, t, n) => {
        const i = null != e ? e : n,
            o = null != t ? t : n;
        return n.getTime() >= i.getTime() && n.getTime() <= o.getTime()
    },
    Ea = function(e, t, n) {
        return void 0 === t && (t = null), void 0 === n && (n = null), e ? {
            hour: e.split(":")[0],
            minute: e.split(":")[1]
        } : {
            hour: t,
            minute: n
        }
    },
    Aa = e => {
        const {
            daysOfWeek: t,
            fromTime: n,
            toTime: i,
            tz: o
        } = {
            daysOfWeek: null != (a = (r = e).daysOfWeek) ? a : null,
            fromTime: Ea(r.fromTime, 0, 0),
            toTime: Ea(r.toTime, 23, 59),
            tz: null != (s = r.tz) ? s : "visitor-based"
        };
        var r, a, s;
        let c = null;
        try {
            c = Ca(o)
        } catch (e) {
            return !1
        }
        const l = ka(ba(), c);
        if (!((e, t) => null == t ? void 0 : t.includes(e.getUTCDay()))(l, t)) return !1;
        let d = {
            from: Oa(l, n),
            to: Oa(l, i)
        };
        return Oa(l, n).getTime() > Oa(l, i).getTime() && (d = l.getTime() > Oa(l, n).getTime() ? {
            from: Oa(l, n),
            to: _a(l, i)
        } : {
            from: Ma(l, n),
            to: Oa(l, i)
        }), Pa(d.from, d.to, l)
    };
class Ra extends xi {
    static get type() {
        return "schedule"
    }
    static validate(e) {
        var t, n, i;
        const o = null != (t = null == (n = e.rules) ? void 0 : n.schedule) ? t : e.schedule;
        if (null == o || !o.from) return !0;
        if (!(e => {
                const t = "visitor-based" === e.tz ? "visitor-based" : "UTC";
                let n = null;
                try {
                    n = Ca(t)
                } catch (e) {
                    return !1
                }
                const i = ka(ba(), n),
                    o = e.from ? new Date(e.from) : null,
                    r = e.to ? new Date(e.to) : null;
                return Pa(o, r, i)
            })(o)) return !1;
        const r = null == (i = o.repeatsOn) ? void 0 : i[0];
        return !r || !!Aa(r)
    }
}
const Ta = e => {
    const t = e.split(".").map(Number);
    return (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3]
};
class xa extends xi {
    static get type() {
        return "ipBlock"
    }
    static validateOne(e, t) {
        if ("specific" === t.type) return t.value === e;
        const [n, i] = t.value.split("|");
        return ((e, t, n) => {
            const i = Ta(e),
                o = Ta(t),
                r = Ta(n);
            return i >= o && i <= r
        })(e, n, i)
    }
    static async validate(e) {
        const t = Ti.getIPs(e);
        if (!t.length) return !0;
        const n = await Yr.get();
        return t.every((e => !xa.validateOne(n, e)))
    }
}
var Da = Object.freeze({
    __proto__: null,
    IPBlockValidator: xa
});
const Na = (e, t) => {
        OptiMonkRegistry.isDebug && (console.groupCollapsed("Campaign " + e + " validation result"), t.forEach((e => {
            console.log("Type: " + e.type + " > " + e.result)
        })), console.groupEnd())
    },
    La = {
        beforeInit: {
            async validate(e, t) {
                let {
                    cookieManager: n
                } = t;
                const i = [],
                    o = [ar, ma, Ra, Ia, xa];
                for (const t of e) {
                    let e = !0;
                    for (const i of o)
                        if (e = await i.validate(t, {
                                cookieManager: n
                            }), !e) {
                            zo("[DC beforeInit] Validator failed: " + (null == i ? void 0 : i.type));
                            break
                        }
                    e && i.push(t)
                }
                return i
            }
        },
        dynamicContent: {
            async validate(e, t) {
                void 0 === t && (t = null);
                const {
                    Shared: n
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/shared-813ae180.js"), {
                    DynamicContent: i
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/dynamicContent-a9c2c3c9.js"), o = [i.SmartPPOVariableValidator, i.SppoInsertHtmlValidator, n.ExperimentValidator, n.CountryValidator, i.ViewedPageValidator, i.MaximumPopupDisplayValidator, n.MinimumPageVisitValidator, n.NotViewedPageRecentValidator, n.PreviouslyViewedPageValidator, n.TimeBasedSessionValidator, i.JFRuleSubscribersValidator, i.JFRuleKlaviyoSegmentsOrListValidator, n.SourceValidator, n.LoggedInValidator, n.CookieValidator, n.VisitorAttributeValidator, n.VisitorCartV3Validator, i.CampaignProgressStateValidator, n.PageViewerTypeValidator], r = t || OptiMonkEmbedded.campaigns[e];
                if (!r) return !1;
                const a = v() || null,
                    s = [];
                let c = !0;
                for (let t = 0, n = o.length; t < n; t++) {
                    if (!c) return Na(e, s), !1;
                    const n = o[t];
                    c = await n.validate(r, {
                        cookieManager: a
                    }), OptiMonkRegistry.isDebug && !c && s.push({
                        type: n.type,
                        result: c
                    })
                }
                return c || Na(e, s), c
            }
        }
    },
    Ua = e => i({}, e),
    Va = e => La.dynamicContent.validate(e.id, e),
    Fa = e => {
        const t = (e => [...new Map(Object.values(e || {}).flat().map((e => [e.variantId, e]))).values()])(e);
        t.length && (tr(t), sr.getInstance().setup(t))
    },
    ja = async function(e, t, n) {
        void 0 === t && (t = {}), void 0 === n && (n = Va);
        const o = t[e.variantId] || [];
        if (!o.length) return !0;
        return (await Promise.all(o.map((async e => {
            const t = (e => i({}, e, {
                changes: (e.changes || []).map(Ua)
            }))(e);
            if (!await n(t)) return !1;
            await sr.getInstance().setDTRs(t);
            const o = new Jo(t);
            return (e => e.some(Boolean))(await o.canApplyChanges())
        })))).some(Boolean)
    };
let Ba = {};
const qa =
    import (OptiMonkRegistry.esmAssetPath + "/JFRuleService-0c83414a.js").then((e => e.default)).catch((() => null)),
    Ha = e => {
        const t = e.target;
        Object.entries(Qi).forEach((n => {
            let [o, r] = n;
            const a = t.closest(r),
                s = t.closest(".om-embedded-campaign-v2");
            if (a && s) return class {
                static async handle(e) {
                    let {
                        targetElement: t,
                        actionComponent: n,
                        campaignWrapper: o,
                        component: r,
                        event: a
                    } = e;
                    switch (r) {
                        case "OM_PRODUCT":
                            await class {
                                static async handle(e, t) {
                                    const n = un.getCampaignData(t),
                                        i = un.getProductComponentId(e),
                                        o = n.getProductComponentById(i);
                                    let r;
                                    if (o.isStatic()) {
                                        const t = un.getIndexOf(e);
                                        r = o.getProductByIndex(t)
                                    } else {
                                        const t = un.getProductId(e);
                                        if (r = o.getProductByProductId(t), !r) {
                                            const t = un.getProductUrl(e);
                                            r = o.getProductByUrl(t)
                                        }
                                    }
                                    r.handleClick(), r.isConverted() || this.handleProductConvert(n, o, i, r), Re("productClick", {
                                        type: o.getType(),
                                        mode: o.getMode(),
                                        filterType: o.getProductFilterType(),
                                        hasButton: !!r.getCTABtn(),
                                        action: r.getClickAction(),
                                        campaign: n.getId()
                                    })
                                }
                                static handleProductConvert(e, t, n, i) {
                                    i.setConverted();
                                    const o = i.getProductNo();
                                    ri.convertProductClick(e, t, n, o), j() && (v().setFilled(e.getId()), si.runFill(e))
                                }
                            }.handle(t, o);
                            break;
                        case "OM_IMAGE_LINK":
                            gi.handle(t, o, a);
                            break;
                        case "OM_SOCIAL":
                            (class {
                                static handle(e) {
                                    const t = un.getCampaignData(e);
                                    Rt.initialize(), t.sendConversion(i({}, Sn.collectDataForButton(t), {
                                        final: !0
                                    }))
                                }
                            }).handle(o);
                            break;
                        default:
                            await mi.handle(t, n, o)
                    }
                }
            }.handle({
                targetElement: t,
                actionComponent: a,
                campaignWrapper: s,
                component: o,
                event: e
            })
        }))
    },
    Ja = async (e, t, n, i, o) => {
        let r = 0;
        return new Promise((a => {
            import (OptiMonkRegistry.esmAssetPath + "/EmbeddedCampaignDOMHtml-f6f6fa1c.js").then((s => {
                let {
                    EmbeddedCampaignDOMHtml: c
                } = s;
                const l = setInterval((function() {
                    if (r < 5) {
                        let s = o.length || 0;
                        const d = document.querySelectorAll(n);
                        if (null != d && d.length) {
                            console.log("embedded:debug", "inserting embedded", n);
                            const r = "above" === i ? "beforebegin" : "afterend";
                            d.forEach((i => {
                                if (((e, t) => {
                                        const n = document.querySelectorAll(t + ' ~ .om-embedded-campaign[data-campaign-id="' + e + '"]');
                                        let i = document.querySelector(t).previousSibling,
                                            o = !1;
                                        for (; i;) {
                                            var r;
                                            if (1 === i.nodeType && (null == (r = i.dataset) ? void 0 : r.campaignId) === e.toString()) {
                                                o = !0;
                                                break
                                            }
                                            i = i.previousSibling
                                        }
                                        return n.length > 0 || o
                                    })(e, n)) return;
                                const a = new c(e, t, s);
                                a.insertWithWrapper(i, r), o.push(a), s++
                            })), clearInterval(l), a()
                        } else r++
                    }
                    5 === r && (console.log("embedded:debug", "wait timeout reached no element found", n), clearInterval(l), a())
                }), 10)
            }))
        }))
    },
    Ga = async (e, t) => {
        let {
            id: n,
            positions: i
        } = e;
        const o = [];
        return await (async (e, t, n) => new Promise((i => {
            import (OptiMonkRegistry.esmAssetPath + "/EmbeddedCampaignDOMHtml-f6f6fa1c.js").then((o => {
                let {
                    EmbeddedCampaignDOMHtml: r
                } = o, a = 0;
                document.querySelectorAll('.om-embedded-campaign[data-campaign-id="' + e + '"]').forEach((i => {
                    const o = new r(e, t, a);
                    o.insertDirectly(i), n.push(o), a++
                })), i()
            }))
        })))(n, t, o), null != i && i.length && await ((e, t, n, i) => {
            const {
                selector: o,
                position: r
            } = e[0];
            return Ja(t, n, o, r, i)
        })(i, n, t, o), o
    },
    Wa = async () => {
        try {
            var e, t, n;
            const {
                response: i,
                headers: o
            } = await OptiMonkEmbedded.RequestService.loadAccountInfo();
            (e => {
                const t = null == e ? void 0 : e[OptiMonkRegistry.countryHeaderName];
                if (Xr.save(t), "function" != typeof Intl.DisplayNames || !t) return;
                const n = new Intl.DisplayNames(["en"], {
                        type: "region"
                    }),
                    i = new Intl.DisplayNames(["hu"], {
                        type: "region"
                    }),
                    o = new Intl.DisplayNames(["de"], {
                        type: "region"
                    }),
                    r = Zi();
                r.attr("_country_code", t), r.attr("_country_en", n.of(t)), r.attr("_country_hu", i.of(t)), r.attr("_country_de", o.of(t))
            })(o), (e => {
                const t = null == e ? void 0 : e[OptiMonkRegistry.ipBlockHeaderName];
                Yr.save(t)
            })(o);
            const r = pt(window.location.hostname),
                a = i.settings.experiments.filter((e => pt(e.domain) === r)),
                s = i.settings.spaDomains || [];
            return {
                features: i.settings.features,
                embeddedCampaigns: i.embeddedCampaigns,
                dynamicContentCampaigns: i.dynamicContentCampaigns || [],
                experiments: a,
                campaignMetaData: i.embeddedCampaigns,
                brand: i.settings.brand,
                trackParams: i.settings.trackParams || {},
                experimentalSettings: i.settings.experimentalSettings,
                spaDomain: s.find((e => e === r)),
                poweredBy: i.settings.poweredBy || {},
                crossDomainTrackingRoles: (null == i || null == (e = i.settings) ? void 0 : e.crossDomainTrackingRoles) || {},
                providerServiceIdOverrides: (null == i || null == (t = i.settings) ? void 0 : t.providerServiceIdOverrides) || {},
                unifiedDataDomains: (null == i || null == (n = i.settings) ? void 0 : n.unifiedDataDomains) || {},
                splitUrlABTests: i.splitUrlABTests || []
            }
        } catch (e) {
            return console.error(e.message), {
                features: [],
                embeddedCampaigns: [],
                dynamicContentCampaigns: [],
                experiments: {},
                campaignMetaData: [],
                brand: "OptiMonk",
                trackParams: {},
                experimentalSettings: {},
                spaDomain: null,
                poweredBy: {},
                crossDomainTrackingRoles: {},
                providerServiceIdOverrides: {},
                unifiedDataDomains: {},
                splitUrlABTests: []
            }
        }
    },
    za = async () => {
        try {
            const {
                response: e
            } = await S().loadCampaignsJson();
            return e.campaigns = e.campaigns.map((e => i({}, e, {
                id: e.campaignId
            }))), e
        } catch (e) {
            return console.error(e.message), {
                campaigns: []
            }
        }
    },
    Ka = async () => {
        var e, t, n;
        (() => {
            let e = W.local.getItem("optiMonkClientId");
            e || (e = Ae(), W.local.setItem("optiMonkClientId", e)), OptiMonkRegistry.clientId = e
        })(), lo(), wr(), (() => {
            const e = Zi(),
                {
                    referrer: t
                } = document;
            if ("" === t) e.attr("_source_referrer", "direct"), e.attr("_source_url", document.URL);
            else {
                const n = t.replace(/https?:\/\/|\/.*/g, "");
                location.host !== n && (e.attr("_source_referrer", t), e.attr("_source_url", document.URL))
            }
        })(), (async () => {
            var e;
            const t = OptiMonkEmbedded.RequestService,
                n = window.location.href,
                i = !(null == (e = OptiMonkRegistry) || !e.isMobile),
                o = new ur({
                    requestService: t,
                    isMobile: i
                });
            o.setCurrentUrl(n), o.runScraper()
        })(), sn.getInstance().resetCampaignStates(), await na();
        const o = OptiMonkEmbedded.RequestService;
        OptiMonkEmbedded.campaigns = [];
        const r = Zi();
        r.clearShop(), er(r);
        const a = nn.isShopifyDesignMode() ? co : ao,
            s = window.OptiMonkEmbedded.CookieManager || new a({
                accountId: m(),
                miniScriptLoaded: OptiMonkEmbedded.mini
            });
        OptiMonkEmbedded.CookieManager = s, ((e, t) => {
            window.OptiMonkRegistry.beforeLoadCampaigns = {
                script: !1,
                popup: !1
            };
            const n = new go(g(), e, OptiMonkEmbedded);
            OptiMonkEmbedded.BackendRequestAfterPreInit = n.getPublicIF(), _(document.querySelector("html"), "optimonk#campaigns-before-load", (e => {
                window.OptiMonkRegistry.beforeLoadCampaigns[e.parameters.type] = !0;
                const {
                    script: i,
                    popup: o
                } = window.OptiMonkRegistry.beforeLoadCampaigns;
                !0 === i && !0 === o && (n.setAccountCookie(t.getOriginalCookies()), n.request())
            }))
        })(o, s);
        const [c, l, d] = await Promise.all([Wa(), o.getLimitData(), za()]), {
            type: p
        } = OptiMonkEmbedded.Engine.getInfo(), h = Object.values(ua), {
            CartIntegration: f
        } = h.includes(p) ? await
        import (OptiMonkRegistry.esmAssetPath + "/CartIntegration-35123c64.js"): {
            CartIntegration: null
        };
        if ((e => {
                var t, n;
                const i = window.location.search;
                if (i.includes("om-preview")) return;
                if (i.includes("x-om-web-selector")) return;
                if (nn.isPreview()) return;
                if (qr.isWebSelectorEnabled()) return;
                if (null != (t = navigator.userAgent) && null != (n = t.toLowerCase()) && n.includes("googlebot")) return;
                const o = new URLSearchParams(i).get("splitTestRedirect");
                if (o) {
                    const t = ((e, t) => {
                        var n;
                        return null == t || null == (n = t.flatMap((e => e.urlVariants))) ? void 0 : n.find((t => t._id === e))
                    })(o, e);
                    if (!t) return;
                    if (Ve("splitURLTest", {
                            isControl: t.isControl ? "1" : "0",
                            variantId: o
                        }), t.jsSnippet) {
                        const {
                            _id: e,
                            jsSnippet: n
                        } = t;
                        ca(e, n)
                    }
                } else if (null != e && e.length) {
                    const t = aa(e);
                    if (!t) return null;
                    const n = sa(e, t);
                    if (n) {
                        const {
                            isControl: e,
                            _id: i,
                            jsSnippet: o
                        } = n;
                        if (!e) {
                            var r;
                            const e = null == (r = t.urlVariants) ? void 0 : r.find((e => e.isControl));
                            if (n.isControl || !e) return;
                            const i = la(e.url, n.url);
                            return i.searchParams.set("splitTestRedirect", n._id), window.location.replace(i), !0
                        } {
                            const e = new URL(window.location.href);
                            e.searchParams.set("splitTestRedirect", i), window.history.replaceState({}, "", e), Ve("splitURLTest", {
                                isControl: "1",
                                variantId: i
                            }), o && ca(i, o)
                        }
                    }
                }
            })(c.splitUrlABTests)) return;
        if (OptiMonkRegistry.features = c.features, OptiMonkRegistry.experiments = c.experiments, OptiMonkRegistry.brand = c.brand, OptiMonkRegistry.poweredBy = c.poweredBy, OptiMonkRegistry.experimentalSettings = c.experimentalSettings, OptiMonkRegistry.crossDomainTrackingRoles = c.crossDomainTrackingRoles, OptiMonkRegistry.providerServiceIdOverrides = c.providerServiceIdOverrides, OptiMonkRegistry.unifiedDataDomains = c.unifiedDataDomains, window.OptiMonkEmbedded.experimentalDebug = new pa, null == (e = window.OptiMonkEmbedded) || null == (t = e.experimentalDebug) || null == t.init || t.init({
                databaseId: m(),
                features: OptiMonkRegistry.features
            }), null != (w = OptiMonkRegistry.features) && w.BLOCK_LINUX_VISITORS && (null == (v = Qt.local.getItem("OptiMonkVisitorAttributes").os_name) ? void 0 : v.includes("Linux"))) return;
        var w, v, y, I, b;
        if (f)
            if ((fn() || null != (y = window) && null != (I = y.WooDataForOM) && null != (b = I.shop) && b.pluginVersion || "woocommerce" !== p) && (window.OptiMonkEmbedded.CartIntegration = new f(p)), "shopify" === p) import (OptiMonkRegistry.esmAssetPath + "/shopify-245785c1.js").then((e => {
                let {
                    initShopify: t
                } = e;
                t(document, window.jQuery)
            }));
            else if ("shoprenter" === p) import (OptiMonkRegistry.esmAssetPath + "/shoprenter-5e9f17a2.js").then((e => {
            let {
                initShoprenter: t
            } = e;
            t()
        }));
        else if ("unas" === p) import (OptiMonkRegistry.esmAssetPath + "/unas-a73e02cd.js").then((e => {
            let {
                initUnas: t
            } = e;
            t()
        }));
        else if ("woocommerce" === p) {
            var C, k, S;
            (fn() || null != (C = window) && null != (k = C.WooDataForOM) && null != (S = k.shop) && S.pluginVersion) &&
            import (OptiMonkRegistry.esmAssetPath + "/woocommerce-0f6cf26a.js").then((e => {
                let {
                    initWooCommerce: t
                } = e;
                t()
            }))
        } else "gomag" === p ?
            import (OptiMonkRegistry.esmAssetPath + "/gomag-676119a1.js").then((e => {
                let {
                    initGomag: t
                } = e;
                t()
            })) : "merchantpro" === p &&
            import (OptiMonkRegistry.esmAssetPath + "/merchantPro-6ed2971e.js").then((e => {
                let {
                    initMerchantPro: t
                } = e;
                t()
            }));
        "bigcommerce" === p &&
            import (OptiMonkRegistry.esmAssetPath + "/bigcommerce-1c82082a.js").then((e => {
                let {
                    initBigCommerce: t
                } = e;
                t(document, window.jQuery)
            })), it.initSafe(), qa.then((e => null == e ? void 0 : e.addScript())), (() => {
                if (da(), OptiMonkRegistry.crossDomainTrackingRoles) {
                    const e = window.location.hostname,
                        t = pt(e),
                        n = OptiMonkRegistry.crossDomainTrackingRoles[t] || OptiMonkRegistry.crossDomainTrackingRoles[e];
                    if ("publisher" === n && window.OptiMonkEmbedded.getCrossDomainTrackingParams(), "receiver" === n) {
                        const e = W.local.getItem("optiMonkCrossPlatformParamsCookie");
                        if (e) try {
                            const t = JSON.parse(e);
                            t.optiMonkClientId && t.providerServiceId && t.provider && (OptiMonkRegistry.crossDomainParams = {
                                optiMonkClientId: t.optiMonkClientId,
                                providerServiceId: t.providerServiceId,
                                provider: t.provider
                            })
                        } catch (e) {
                            console.error("Error parsing cross-domain cookie:", e)
                        }
                    }
                }
            })(), await Promise.all([So(), rr()]), null != c && c.experimentalSettings && (e => {
                try {
                    const t = null == e ? void 0 : e.GlobalScripts;
                    if (!t || !t.scripts) return void console.log("[OM GlobalScripts Early] No scripts configured");
                    const n = t.scripts;
                    if (!Array.isArray(n) || 0 === n.length) return void console.log("[OM GlobalScripts Early] Scripts array is empty");
                    const i = ia(window.location.hostname);
                    console.log("[OM GlobalScripts Early] Looking for scripts for domain:", i), console.log("[OM GlobalScripts Early] Available scripts:", n.length);
                    const o = n.find((e => {
                        if (!e.enabled) return console.log("[OM GlobalScripts Early] Skipping disabled script for:", e.domainName), !1;
                        if (!e.jsCode) return console.log("[OM GlobalScripts Early] Skipping script with no code for:", e.domainName), !1;
                        const t = ia(e.domainName || "") === i;
                        return t && console.log("[OM GlobalScripts Early] Found matching script for domain:", i), t
                    }));
                    if (!o) return void console.log("[OM GlobalScripts Early] No matching script found for domain:", i);
                    console.log("[OM GlobalScripts Early] Executing script for domain:", i);
                    try {
                        new Function("domainName", o.jsCode)(i), console.log("[OM GlobalScripts Early] ✅ Script executed successfully")
                    } catch (e) {
                        console.error("[OM GlobalScripts Early] ❌ Script execution error:", e), console.error("[OM GlobalScripts Early] Script code:", o.jsCode)
                    }
                } catch (e) {
                    console.error("[OM GlobalScripts Early] ❌ Initialization error:", e)
                }
            })(c.experimentalSettings);
        try {
            Hr({
                limitData: l,
                campaignsData: d,
                cookieManager: s
            })
        } catch (e) {
            console.error({
                message: "Error loading popups",
                e: e
            })
        }
        if (c.spaDomain && (
                import (OptiMonkRegistry.esmAssetPath + "/preload-spa-62fbeafb.js").then((e => {
                    let {
                        initSPA: t
                    } = e;
                    t()
                })), window.OptiMonk.isSPA = !0, !window.OMHistoryOverriddenForEmbedded)) {
            const e = () => {
                window.OMCreateAntiFlicker && window.OMCreateAntiFlicker(), window.OptiMonkEmbedded.loadEmbedded()
            };
            window.history.onpushstateEmbedded = e, window.addEventListener("popstate", e), window.OMHistoryOverriddenForEmbedded = !0, OptiMonkEmbedded.mini = !1
        }
        sr.getInstance().setSmartPersonalizationParameter(c);
        let O = [...c.embeddedCampaigns, ...c.dynamicContentCampaigns];
        if (Ba = {}, nn.isShareablePreview()) {
            O = [];
            try {
                const {
                    response: {
                        success: e,
                        campaign: t
                    }
                } = await o.getEmbeddedPreview(nn.getPreviewVariantId());
                if (e) return O.push(t), OptiMonkEmbedded.campaigns = B(O), s.resetPreviewCampaign(O.id), O
            } catch (e) {
                console.error(e)
            }
            return []
        }
        if (nn.isPreview()) {
            O = [];
            const {
                response: {
                    success: e,
                    campaign: t
                }
            } = await o.getPreview(nn.getPreviewVariantId());
            return e ? (O.push(t), OptiMonkEmbedded.campaigns = B(O), s.resetPreviewCampaign(O.id), O) : []
        }
        const M = document.querySelector("html");
        if (nn.isPopupPreview()) return u(M, "optimonk#campaigns-before-load", {
            type: "script"
        }), [];
        if (!l.remaining) return u(M, "optimonk#campaigns-before-load", {
            type: "script"
        }), [];
        if (null == (n = O) || !n.length) return u(M, "optimonk#campaigns-before-load", {
            type: "script"
        }), [];
        const {
            Validators: P
        } = await
        import (OptiMonkRegistry.esmAssetPath + "/index-b57bb11d.js");
        if (O = await P.beforeInit.validate(O, {
                cookieManager: s
            }), !O.length) return void u(M, "optimonk#campaigns-before-load", {
            type: "script"
        });
        OptiMonkEmbedded.campaigns = B(O), s.addCampaigns(O);
        const E = await qa;
        if (E && (O.forEach((e => {
                E.addCampaign(e)
            })), zo("Has JF rule", E.hasJFRule()), E.hasJFRule())) try {
            await Wo(E.collectData, 300)
        } catch (e) {
            zo("Cannot load JF data", e.message)
        }
        if (zo("Campaigns before experience validation", O), O = await (async e => {
                const t = e.map((e => e.id)),
                    n = [...new Set(t)],
                    i = B(e),
                    o = [];
                for (const t of n) {
                    var r;
                    const s = i[t];
                    if (null != s && null != (r = s.experiences) && r.length) {
                        var a;
                        const {
                            ExperienceManager: t
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/ExperienceManager-41ffb200.js"), i = await t.findValidExperience(s, n);
                        null == i || null == (a = i.variants) || a.forEach((t => {
                            const n = e.find((e => e.variantId === t));
                            n && o.push(n)
                        }))
                    } else {
                        const n = e.filter((e => e.id === t));
                        o.push(...n)
                    }
                }
                return o
            })(O), zo("Campaigns after experience validation", O), !O.length) return OptiMonkEmbedded.campaigns = [], u(M, "optimonk#campaigns-before-load", {
            type: "script"
        }), [];
        Ba = (e => {
            const t = e.reduce(((e, t) => t.isControlVariant || "dynamic_content" !== t.type ? e : i({}, e, {
                [t.id]: [...e[t.id] || [], t]
            })), {});
            return e.reduce(((e, n) => {
                if (!n.isControlVariant || "dynamic_content" !== n.type) return e;
                const o = (t[n.id] || []).filter((e => e.type === n.type));
                return o.length ? i({}, e, {
                    [n.variantId]: o
                }) : e
            }), {})
        })(O);
        var A;
        return O = ((e, t) => e.filter((e => t.isActiveVariant(e.id, e.variantId))))(O, new ho(O, {
            type: "embedded"
        })), A = O, Ui.handle(window.location.pathname + window.location.search + window.location.hash, A), ((e, t) => {
            Hi.handle(window.location.pathname + window.location.search + window.location.hash, e, t.getAccountCookie())
        })(O, s), OptiMonkEmbedded.campaigns = B(O), u(M, "optimonk#embedded-campaigns-init", O), u(M, "optimonk#campaigns-before-load", {
            type: "script"
        }), O
    },
    Xa = e => {
        var t, n;
        null == (t = window.OptiMonkEmbedded) || null == (n = t.experimentalDebug) || null == n.log || n.log({
            action: "startInitEmbeddedCampaigns"
        });
        let i = !1;
        if (e.length) return (async () => {
            const {
                EmbeddedCampaign: t
            } = await
            import (OptiMonkRegistry.esmAssetPath + "/EmbeddedCampaign-3168cba9.js"), {
                default: n
            } = await Promise.resolve().then((function() {
                return ii
            })), o = e.map((async e => {
                const o = e.id;
                if (si.runPageLoad(e), e.coupons && n.add(e.coupons), !nn.isPreview()) {
                    const {
                        Validators: e
                    } = await
                    import (OptiMonkRegistry.esmAssetPath + "/index-b57bb11d.js");
                    if (!await e.embedded.validate(o)) return Promise.resolve(!1)
                }
                return i || (OptiMonkEmbedded.AssetManager.loadAsset(OptiMonkRegistry.getAssetUrlFor("/assets/css/om.base.css"), "css", (() => {})), document.querySelector("html").addEventListener("click", Ha, !1), i = !0), OptiMonkEmbedded.RequestService.loadVariant(e.variantId, e.ts, nn.isPreview()).then((async i => {
                    const r = navigator.language || navigator.userLanguage;
                    if (!nn.isPreview()) {
                        const {
                            Validators: e
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/index-b57bb11d.js");
                        if (!await e.embedded.postValidate(o, i)) return Promise.resolve(!1)
                    }
                    const a = await Ga(e, i);
                    n.clearSettingsData(o), si.runShow(e);
                    const s = a.map((async i => {
                        var o, a;
                        const s = new t({
                            campaignData: e,
                            requestService: OptiMonkEmbedded.RequestService,
                            assetManager: OptiMonkEmbedded.AssetManager,
                            cookieManager: OptiMonkEmbedded.CookieManager,
                            couponManager: n,
                            locale: r,
                            instanceNum: i.getInstanceNumber(),
                            embeddedCampaignDom: i
                        });
                        return OptiMonkEmbedded.CampaignRegistry.add(s), s.init(), null == (o = window.OptiMonkEmbedded) || null == (a = o.experimentalDebug) || null == a.log || a.log({
                            action: "initEmbeddedCampaign",
                            data: {
                                campaignId: s.getId(),
                                variantId: s.getVariantId()
                            }
                        }), OptiMonkEmbedded.CookieManager.addImpression(s.getId()), sn.getInstance().reportCampaignShow(s), Promise.resolve(s)
                    }));
                    return Promise.all(s)
                }))
            }));
            return Promise.all(o).catch(console.error)
        })()
    },
    $a = async e => {
        var t, n;
        const i = [],
            o = [],
            r = [];
        e.forEach((e => {
            e.isControlVariant ? r.push(e) : "dynamic_content" === e.type ? i.push(e) : "embedded" === e.type && o.push(e)
        })), OptiMonkRegistry.isDebug && zo("Campaigns to load", {
            dynamicContentCampaigns: i,
            embeddedCampaigns: o,
            controlVariantCampaigns: r
        }), null == (t = window.OptiMonkEmbedded) || null == (n = t.experimentalDebug) || null == n.log || n.log({
            action: "initCampaigns",
            data: {
                emeddedVariantIds: o.map((e => e.variantId)).join(", "),
                controlVariantIds: r.map((e => e.variantId)).join(", "),
                embeddedCount: o.length,
                controlVariantCount: r.length
            }
        }), (async e => {
            tr(e), sr.getInstance().setup(e);
            const t = e.map((async e => {
                const {
                    Validators: t
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/index-b57bb11d.js");
                if (!await t.embedded.validate(e.id)) return;
                await sr.getInstance().setDTRs(e);
                const n = new Jo(e),
                    i = await n.applyChanges();
                await or(document), (await Promise.all(i.map((async e => e)))).find(Boolean) && (OptiMonkEmbedded.CookieManager.addImpression(n.getId()), sn.getInstance().reportCampaignShow(n))
            }));
            await Promise.all(t), window.OMCustomAntiFlicker && window.OMCustomAntiFlicker.show()
        })(i), Xa(o), (async (e, t) => {
            var n, i;
            null == (n = window.OptiMonkEmbedded) || null == (i = n.experimentalDebug) || null == i.log || i.log({
                action: "startInitControlVariantCampaigns"
            }), Fa(t);
            const o = e.map((async e => {
                var n, i;
                const {
                    Validators: o
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/index-b57bb11d.js");
                var r, a, s, c;
                if (!await o.embedded.validate(e.id)) return void(null == (r = window.OptiMonkEmbedded) || null == (a = r.experimentalDebug) || null == a.log || a.log({
                    action: "skipInitControlVariantCampaign",
                    data: {
                        campaignId: e.id,
                        variantId: e.variantId
                    }
                }));
                if (!await ja(e, t, (e => o.embedded.validate(e.id, e)))) return void(null == (s = window.OptiMonkEmbedded) || null == (c = s.experimentalDebug) || null == c.log || c.log({
                    action: "skipControlVariantNotShowable",
                    data: {
                        campaignId: e.id,
                        variantId: e.variantId
                    }
                }));
                null == (n = window.OptiMonkEmbedded) || null == (i = n.experimentalDebug) || null == i.log || i.log({
                    action: "initControlVariantCampaign",
                    data: {
                        campaignId: e.id,
                        variantId: e.variantId
                    }
                });
                const l = new Go(e);
                OptiMonkEmbedded.CookieManager.addImpression(l.getId()), sn.getInstance().reportCampaignShow(l)
            }));
            await Promise.all(o)
        })(r, Ba)
    };
class Ya {
    constructor() {
        this.campaigns = {}
    }
    add(e) {
        this.campaigns[e.getId() + "-" + e.getInstanceNum()] = e
    }
    get(e, t) {
        return this.campaigns[e + "-" + t] || null
    }
    getList() {
        return this.campaigns
    }
}
class Za {
    constructor(e) {
        let {
            accountId: t,
            baseUrl: n,
            embeddedContentUrl: i,
            cdnUrl: o,
            aiCdnUrl: r,
            aiPPOCdnUrl: a,
            aiPPOCdnUrlV2025: s,
            accountDataUrl: c,
            limitUrl: l
        } = e;
        this.accountId = t, this.baseUrl = n, this.embeddedContentUrl = i, this.cdnUrl = o, this.aiCdnUrl = r, this.aiPPOCdnUrl = a, this.aiPPOCdnUrlV2025 = s, this.accountDataUrl = c, this.limitUrl = l
    }
    _getCacheVersion(e) {
        var t, n;
        return null == (t = window.OptiMonkRegistry) || null == (n = t.cacheVersions) ? void 0 : n[e]
    }
    _getAiCacheVersion(e, t, n) {
        var i, o, r;
        const a = null == (i = window.OptiMonkRegistry) || null == (o = i.cacheVersions) || null == (r = o.ai) ? void 0 : r[e];
        if (a) {
            if ("recommendations" === t && n && a.recommendationsById) {
                const e = a.recommendationsById[n];
                if (e) return e
            }
            return a[t]
        }
    }
    _appendVersionParam(e, t) {
        if (!t) return e;
        const n = e.includes("?") ? "&" : "?";
        return "" + e + n + "v=" + t
    }
    baseUrlPath() {
        return this.baseUrl + "/public/" + this.accountId
    }
    baseVariantPath(e) {
        return this.baseUrlPath() + "/creative/" + e
    }
    getNotExistsEmailValidatorUrl() {
        return this.baseUrlPath() + "/validate/email/notexist"
    }
    getSpamEmailValidatorUrl() {
        return this.baseUrlPath() + "/validate/email/spam"
    }
    getBackendRequestUrl() {
        return this.baseUrlPath() + "/embedded/after-pre-init"
    }
    getScraperInfoForSPPORequestUrl(e) {
        return this.baseUrlPath() + "/embedded/scraper-info-for-sppo?url=" + encodeURIComponent(e)
    }
    _getConversionUrl(e) {
        return this.baseVariantPath(e) + "/conversionExtended"
    }
    _getFeedbackUrl(e) {
        return this.baseVariantPath(e) + "/feedback"
    }
    _getSendSavedSubscriberUrl(e) {
        return this.baseVariantPath(e) + "/send-saved-subscriber"
    }
    _getAccountInfoUrl() {
        const e = this.cdnUrl + "/" + this.accountId + "/accountInfo.json";
        return this._appendVersionParam(e, this._getCacheVersion("accountInfo"))
    }
    _getCampaignsJSONUrl() {
        const e = this.accountDataUrl + "/" + this.accountId + "/campaigns.json";
        return this._appendVersionParam(e, this._getCacheVersion("campaigns"))
    }
    _getLimitUrl() {
        return this.limitUrl + "/" + this.accountId + "/limit.json"
    }
    _getPNCConfigUrl() {
        return this.baseUrl + "/config/pnc"
    }
    _getPreviewUrl(e) {
        const t = this._getPreviewSessionHash(),
            n = t ? "?previewSession=" + t : "";
        return this.baseUrl + "/preview-v3/" + this.accountId + "/" + e + n
    }
    _getPreviewSessionHash() {
        return "undefined" != typeof window && window.sessionStorage ? window.sessionStorage.getItem("om-preview-session") : null
    }
    _getPageSmartTagsUrl(e) {
        var t;
        const {
            providerServiceId: n
        } = xt();
        let i;
        return i = null != (t = OptiMonkRegistry.features) && t.AI_STAGE3 ? this.aiPPOCdnUrlV2025 + "/llm-result/" + this.accountId + "/" + n + "/" + e + ".json" : this.aiPPOCdnUrl + "/" + this.accountId + "/" + n + "/" + e + ".json", this._appendVersionParam(i, this._getAiCacheVersion(n, "llm"))
    }
    _getProductSmartTagsUrl(e) {
        var t, n;
        if (null != (t = OptiMonkRegistry.features) && t.SPPO_RESEARCH_CDN) return this.aiCdnUrl + "/" + this.accountId + "/" + e + ".json";
        const {
            providerServiceId: i,
            provider: o
        } = xt();
        let r;
        r = null != (n = OptiMonkRegistry.features) && n.AI_STAGE3 ? this.aiPPOCdnUrlV2025 + "/llm-result/" + this.accountId + "/" + i + "/" + e + ".json" : this.aiPPOCdnUrl + "/" + this.accountId + "/" + i + "/" + e + ".json", o && (r += "?platform=" + encodeURIComponent(o));
        const a = this._getAiCacheVersion(i, "llm");
        return a && (r += (r.includes("?") ? "&" : "?") + "v=" + a), r
    }
    _getSmartPersonalizerJsonUrl(e, t) {
        return this.cdnUrl + "/" + this.accountId + "/" + t + "/sp/" + e + ".json"
    }
    _getVariantsTypeByCampaign() {
        return this.baseUrlPath() + "/variants-by-type"
    }
    _getLoadVariantUrl(e, t, n) {
        const i = t ? "&v=" + t : "",
            o = n ? "&preview=1" : "";
        return this.embeddedContentUrl + "/" + this.accountId + "/" + e + ".html?domain=" + window.location.hostname + i + o
    }
    _getVariantDataForPreviewUrl(e) {
        const t = this._getPreviewSessionHash(),
            n = t ? "&previewSession=" + t : "";
        return this.baseUrl + "/preview-data/" + this.accountId + "/" + e + "?domain=" + window.location.hostname + "&v=" + (new Date).getTime() + n
    }
    _getEmbeddedPreviewDataUrl(e) {
        return this.baseUrl + "/preview-embedded-data/" + this.accountId + "/" + e + "?domain=" + window.location.hostname + "&v=" + (new Date).getTime()
    }
    _getProductDetailsUrl() {
        return this.baseUrl + "/product/details"
    }
    _getReportActivityUrl(e) {
        return this.baseVariantPath(e) + "/report"
    }
    _shopifyAppStatusReportUrl() {
        return this.baseUrl + "/shopify/appStatus"
    }
    _getUniqueCouponUrl(e) {
        return void 0 === e && (e = ""), this.baseUrl + "/public/" + this.accountId + "/coupon/" + e
    }
    getUniqueCouponCode(e) {
        const t = this._getUniqueCouponUrl(),
            n = "coupon=" + encodeURIComponent(JSON.stringify(e));
        return new Promise((e => {
            Pt.post(n, t, (t => {
                e(JSON.parse(t))
            }))
        }))
    }
    lockCoupon(e) {
        const t = this._getUniqueCouponUrl("lock"),
            n = "coupon=" + encodeURIComponent(JSON.stringify(e));
        return new Promise((e => {
            Pt.post(n, t, (t => {
                e(JSON.parse(t))
            }))
        }))
    }
    unlockCoupon(e) {
        const t = this._getUniqueCouponUrl("unlock"),
            n = "coupon=" + encodeURIComponent(JSON.stringify(e));
        return new Promise((e => {
            Pt.post(n, t, (t => {
                e(JSON.parse(t))
            }))
        }))
    }
    sendSavedSubscriber(e, t) {
        navigator.sendBeacon(this._getSendSavedSubscriberUrl(e), new URLSearchParams(re(t)))
    }
    sendAppEmbedStatus(e) {
        return new Promise((t => {
            const n = "shop=" + encodeURIComponent(e) + "&databaseId=" + this.accountId;
            Pt.post(n, this._shopifyAppStatusReportUrl(), (e => {
                t(e)
            }))
        }))
    }
    sendPostRequest(e, t) {
        return t = re(t), new Promise((n => {
            Pt.post(t, e, (e => {
                n(e)
            }))
        }))
    }
    postJSON(e, t) {
        return new Promise((n => {
            Pt.postJSON(JSON.stringify(t), e, (e => {
                n(e)
            }))
        }))
    }
    loadAccountInfo() {
        return new Promise(((e, t) => {
            Pt.get(this._getAccountInfoUrl(), ((n, i) => {
                try {
                    const t = JSON.parse(n);
                    e({
                        response: t,
                        headers: i
                    })
                } catch (e) {
                    t(e)
                }
            }))
        }))
    }
    loadCampaignsJson() {
        return new Promise(((e, t) => {
            Pt.get(this._getCampaignsJSONUrl(), ((n, i) => {
                try {
                    const t = JSON.parse(n);
                    e({
                        response: t,
                        headers: i
                    })
                } catch (e) {
                    t(e)
                }
            }))
        }))
    }
    loadPNCConfig() {
        return new Promise(((e, t) => {
            Pt.get(this._getPNCConfigUrl(), (n => {
                try {
                    e(JSON.parse(n))
                } catch (e) {
                    t(e)
                }
            }))
        }))
    }
    getPreview(e) {
        return new Promise(((t, n) => {
            Pt.get(this._getPreviewUrl(e), (e => {
                try {
                    const n = JSON.parse(e);
                    t({
                        response: n
                    })
                } catch (e) {
                    n(e)
                }
            }))
        }))
    }
    getEmbeddedPreview(e) {
        return new Promise(((t, n) => {
            Pt.get(this._getEmbeddedPreviewDataUrl(e), (e => {
                try {
                    const n = JSON.parse(e);
                    n && n.length > 0 ? t({
                        response: {
                            success: !0,
                            campaign: n[0]
                        }
                    }) : t({
                        response: {
                            success: !1
                        }
                    })
                } catch (e) {
                    n(e)
                }
            }))
        }))
    }
    getLimitData() {
        return new Promise(((e, t) => {
            Pt.get(this._getLimitUrl(), (n => {
                try {
                    e(JSON.parse(n))
                } catch (e) {
                    t(e)
                }
            }))
        }))
    }
    loadPageSmartTags(e) {
        return new Promise((t => {
            Pt.get(this._getPageSmartTagsUrl(e), (e => {
                try {
                    t(JSON.parse(e))
                } catch (e) {
                    t([])
                }
            }))
        }))
    }
    loadProductSmartTags(e) {
        return new Promise((t => {
            Pt.get(this._getProductSmartTagsUrl(e), (e => {
                try {
                    t(JSON.parse(e))
                } catch (e) {
                    t([])
                }
            }))
        }))
    }
    loadOptimonkRecommenderProducts(e) {
        return new Promise((t => {
            var n;
            const i = null == e || null == (n = e.campaign) ? void 0 : n.campaignId,
                o = window["om_reco_prefix_" + i],
                r = o ? o + "/" : "",
                a = In() || yn(),
                {
                    providerServiceId: s
                } = xt();
            let c = this.aiPPOCdnUrl + "/" + this.accountId + "/" + s + "/recommender/" + r + a + ".json";
            const l = this._getAiCacheVersion(s, "recommendations", o);
            c = this._appendVersionParam(c, l), Pt.get(c, (e => {
                try {
                    t(JSON.parse(e))
                } catch (e) {
                    t([])
                }
            }))
        }))
    }
    loadAiRecommenderProducts(e, t) {
        return new Promise((e => {
            const n = In() || yn(),
                {
                    providerServiceId: i,
                    provider: o
                } = xt();
            let r = this.aiPPOCdnUrlV2025 + "/ai-recommendations/" + this.accountId + "/" + i + "/" + n + ".json?id=" + t;
            o && (r += "&platform=" + encodeURIComponent(o));
            const a = this._getAiCacheVersion(i, "recommendations", t);
            r = this._appendVersionParam(r, a), Pt.get(r, (t => {
                try {
                    e(JSON.parse(t))
                } catch (t) {
                    e({
                        recommendations: []
                    })
                }
            }))
        }))
    }
    loadSmartPersonalizerJson(e, t) {
        return new Promise((n => {
            Pt.get(this._getSmartPersonalizerJsonUrl(e, t), (e => {
                try {
                    n(JSON.parse(e))
                } catch (e) {
                    n({})
                }
            }))
        }))
    }
    loadVariant(e, t, n) {
        return new Promise((i => {
            Pt.get(this._getLoadVariantUrl(e, t, n), (e => {
                i(e)
            }))
        }))
    }
    getVariantDataForPreview(e) {
        return new Promise((t => {
            Pt.get(this._getVariantDataForPreviewUrl(e), (e => {
                t(JSON.parse(e))
            }))
        }))
    }
    getVariantsTypeByCampaign() {
        return new Promise((e => {
            Pt.get(this._getVariantsTypeByCampaign(), (t => {
                e(t)
            }))
        }))
    }
    sendConversion(e, t) {
        return this.sendPostRequest(this._getConversionUrl(e), t)
    }
    getProductData(e) {
        return this.postJSON(this._getProductDetailsUrl(), e)
    }
    getSiteStatus() {
        return new Promise((e => {
            Pt.get(this.baseUrl + "/analytics/siteinfo/" + this.accountId, (t => {
                e(JSON.parse(t))
            }))
        }))
    }
    reportActivity(e, t, n, i, o, r) {
        return new Promise((a => {
            var s, c, l;
            const d = this._getReportActivityUrl(t),
                u = new URL(d),
                p = (new Date).getTime() / 1e3;
            u.searchParams.set("action", n), u.searchParams.set("campaign_id", e), u.searchParams.set("time", p.toString()), u.searchParams.set("uuid", h()), u.searchParams.set("puid", f(t)), o && u.searchParams.set("experimentGroupId", o), r && u.searchParams.set("isControlVariant", Number(!!r)), i && u.searchParams.set("ctx", i);
            const m = null == (s = OptiMonkRegistry) || null == (c = s.smartAbTests) || null == (l = c[e]) ? void 0 : l.cookie;
            m && u.searchParams.set("smartAbTest", m), Pt.get(u.toString(), (e => {
                a(e)
            }))
        }))
    }
    async sendFeedback(e, t) {
        if (e.length) return new Promise((n => {
            Pt.post("feedback=" + encodeURIComponent(JSON.stringify(e)), this._getFeedbackUrl(t), (e => {
                n(e)
            }))
        }))
    }
    getLogRocketProject() {
        return this.sendGetRequest(this.baseUrl + "/lrkt/project")
    }
    sendGetRequest(e) {
        return new Promise((t => {
            Pt.get(e, (e => {
                t(e)
            }))
        }))
    }
    _getShopifyCouponRedeemUrl(e) {
        return "//" + window.location.hostname + "/discount/" + e
    }
    _getShopifyGenerateCouponUrl() {
        return this.baseUrl + "/generateShopifyCoupon"
    }
    autoRedeem(e) {
        const t = this._getShopifyCouponRedeemUrl(e);
        return this.sendGetRequest(t)
    }
    async generateShopifyCoupon(e) {
        const t = this._getShopifyGenerateCouponUrl(),
            n = await this.postJSON(t, e);
        return JSON.parse(n)
    }
}
class Qa {
    constructor() {
        this._assets = {}
    }
    loadAsset(e, t, n) {
        const i = t => {
            let n;
            for (; n = this._assets[e].cbs.shift();) n && n(t)
        };
        if (this._assets[e]) return this._assets[e].loaded ? void n() : void this._assets[e].cbs.push(n);
        this._assets[e] = {
            loaded: !1,
            cbs: []
        }, this._assets[e].cbs.push(n);
        try {
            let n = null,
                o = null;
            if ("js" === t ? (n = document.createElement("script"), n.src = e, o = document.body) : "css" === t && (n = document.createElement("link"), n.href = e, n.rel = "stylesheet", n.type = "text/css", o = document.getElementsByTagName("head")[0]), n && o) {
                let r;
                "js" === t && "function" == typeof window.define && window.define.amd && (r = window.define, window.define = void 0), n.onload = () => {
                    r && (window.define = r), this._assets[e].loaded = !0, i()
                }, n.onerror = e => {
                    r && (window.define = r), i(e)
                }, o.appendChild(n)
            }
        } catch (e) {
            i(e)
        }
    }
    loadScript(e, t) {
        "/" !== e.charAt(0) && (e = "/" + e), this.loadAsset(OptiMonkRegistry.getAssetUrlFor(e), "js", t)
    }
    loadCss(e, t) {
        "/" !== e.charAt(0) && (e = "/" + e), this.loadAsset(OptiMonkRegistry.getAssetUrlFor(e), "css", t)
    }
}
const es = () => window.JFClientSDK || null,
    ts = (e, t) => {
        e ? console.warn("[CUSTOM-EVENT-ERROR] " + t + " (event: " + e + ")") : console.warn("[CUSTOM-EVENT-ERROR] " + t)
    },
    ns = () => window.omEvents || null,
    is = e => e.match(/^[a-zA-Z0-9_]*$/) ? !(e.length > 64) || (ts(e, "Invalid length of event!"), !1) : (ts(e, "Invalid event name format!"), !1),
    os = (e, t) => {
        if ("object" != typeof t) return ts(e, "Invalid property object!"), !1;
        if (!t || 0 === Object.keys(t).length) return !0;
        return Object.entries(t).map((t => {
            let [n, i] = t, o = 0;
            return n.match(/^[a-zA-Z0-9_]*$/) || (ts(e, "Invalid property format! [property: " + n + "]"), o++), n.length > 128 && (ts(e, "Invalid length of property! [property: " + n + "]"), o++), (null == i ? void 0 : i.length) > 256 && (ts(e, "Invalid value length of property! [property: " + n + "]"), o++), 0 === o
        })).every((e => !!e))
    },
    rs = function(e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        const i = es();
        return !!((e, t) => e && "string" == typeof e ? [is(e), os(e, t)].every((e => !!e)) : (ts(null, "Invalid input format!"), !1))(e, t) && (i.v2.registerCustomEvent("custom:" + e, t || {}), n && i.v2.go(), !0)
    },
    as = function e(t) {
        void 0 === t && (t = 1);
        const n = () => ns() && Array.isArray(ns()) && (() => {
            const e = es();
            return e && e.v2 && "function" == typeof e.v2.go && "function" == typeof e.v2.registerCustomEvent
        })();
        if (!n()) return void(t <= 30 && setTimeout((() => {
            e(t + 1)
        }), 100 * t));
        let i;
        const o = setInterval((() => {
            try {
                if (!n()) return clearInterval(o), void e(1);
                for (ns().length && (i = (e => {
                        const t = es();
                        return e && clearTimeout(e), setTimeout((() => {
                            t.v2.go()
                        }), 200)
                    })(i)); ns().length;) {
                    const [e, t, n] = ns().shift();
                    rs(e, t, n), n && !ns().length && clearTimeout(i)
                }
            } catch (e) {
                ts(null, "Something went wrong! - " + e.message), clearInterval(o)
            }
        }), 100)
    };
if ("object" != typeof window.OptiMonkEmbedded.CampaignRegistry) {
    o.EmbeddedCampaign || ae(o, {
        prepare: Ka,
        start: function(e) {
            qr.isWebSelectorEnabled() || (W.session.getItem("optiMonkSession") || W.session.setItem("optiMonkSession", k()), N("body", (() => {
                cr.init(), $a(e)
            })))
        },
        CampaignRegistry: Ya,
        RequestService: Za,
        AssetManager: Qa,
        ViewedPageStorageHandler: Ui,
        NotViewedPageRecentStorageHandler: Hi,
        Engine: Mt,
        native: de,
        Visitor: Io,
        Replacer: Oo,
        initWebfontLoader: r
    }), void 0 === window.OptiMonkEmbedded && (window.OptiMonkEmbedded = o), window.OptiMonkEmbedded = i({}, window.OptiMonkEmbedded, {
        CampaignRegistry: new o.CampaignRegistry,
        RequestService: new o.RequestService({
            accountId: OptiMonkRegistry.account,
            baseUrl: OptiMonkRegistry.baseUrl,
            embeddedContentUrl: OptiMonkRegistry.embeddedContentUrl,
            cdnUrl: OptiMonkRegistry.cdnUrl,
            aiCdnUrl: OptiMonkRegistry.aiCdnUrl,
            aiPPOCdnUrl: OptiMonkRegistry.aiPPOCdnUrl,
            aiPPOCdnUrlV2025: OptiMonkRegistry.aiPPOCdnUrlV2025,
            accountDataUrl: OptiMonkRegistry.accountDataUrl,
            limitUrl: OptiMonkRegistry.limitUrl
        }),
        PreviewService: nn,
        AssetManager: new o.AssetManager,
        replaceAIGeneratedImages: or,
        setProductSmartTags: So,
        setPageSmartTags: rr,
        loadEmbedded: () => o.prepare().then((e => (e && o.start(e), Promise.resolve()))).catch((e => (console.error(e), Promise.resolve()))),
        async loadPopups() {
            const {
                init: e
            } = await
            import (OptiMonkRegistry.esmAssetPath + "/popup-a1c27e5c.js").then((function(e) {
                return e.p
            }));
            e()
        }
    });
    const e = async () => {
            if (window.Shopify && null !== document.querySelector('script[src*="/script.js?account=' + OptiMonkRegistry.account + '&origin=shopify-app-embed-block"]')) return S().sendAppEmbedStatus(window.Shopify.shop)
        },
        t = () => new Promise((e => {
            const {
                trackJsApiKey: t,
                account: n
            } = window.OptiMonkRegistry;
            if (!OptiMonkRegistry.features.TRACK_JS || !t) return e(1);
            const i = document.getElementsByTagName("head")[0],
                o = document.createElement("script");
            o.type = "text/javascript", o.charset = "utf-8", o.src = "https://cdn.trackjs.com/agent/v3/latest/t.js", i.appendChild(o);
            let r = 0;
            const a = () => r >= 10 ? e(1) : window.TrackJS ? (window.TrackJS.install({
                token: t
            }), window.TrackJS.addMetadata("account", n), e(1)) : (r++, void setTimeout(a, 50));
            a()
        }));
    window.OptiMonkRegistry.Cookie = p()[m()], qr.isWebSelectorEnabled() && qr.init(), nn.setup();
    try {
        e()
    } catch (e) {
        console.error("[OM] App embed status report error", e.message)
    }
    try {
        Rt.checkSiteStatus()
    } catch (e) {
        console.error("[OM] Site status check error", e.message)
    }("object" == typeof localStorage && sessionStorage.getItem("om-diag") || window.location.search.match(/om-.*[a-z]-diag-id\=.*[1-9]/) ?
        import (OptiMonkRegistry.esmAssetPath + "/index-c936c315.js").then((function(e) {
            return e.i
        })).then((e => {
            let {
                DiagnosticToolService: t
            } = e;
            window.OptiMonk = window.OptiMonk || {}, window.OptiMonk.diagnosticTool = new t
        })) : Promise.resolve()).then((() => window.OptiMonkEmbedded.loadEmbedded())).then((() => {
        as(), t()
    }))
}
export {
    Lt as $, tt as A, m as B, W as C, qo as D, jr as E, Ue as F, or as G, F as H, Po as I, qe as J, se as K, Gi as L, Hn as M, vr as N, Y as O, nn as P, Oo as Q, nt as R, Qt as S, ha as T, Ke as U, Io as V, wo as W, ot as X, rt as Y, Nt as Z, i as _, Mt as a, jn as a$, Do as a0, No as a1, xo as a2, Ao as a3, To as a4, Eo as a5, Se as a6, Ui as a7, Hi as a8, v as a9, Oe as aA, p as aB, po as aC, pr as aD, Ia as aE, Ra as aF, xa as aG, zo as aH, $o as aI, Xo as aJ, Na as aK, ar as aL, ma as aM, e as aN, n as aO, t as aP, a as aQ, l as aR, s as aS, c as aT, xt as aU, Dt as aV, g as aW, Br as aX, D as aY, zr as aZ, Wr as a_, ho as aa, Lo as ab, Uo as ac, qn as ad, fa as ae, Un as af, Ki as ag, h as ah, f as ai, Ut as aj, yo as ak, qr as al, Pe as am, er as an, hi as ao, Pn as ap, ya as aq, Ze as ar, r as as, it as at, ye as au, Ir as av, ke as aw, _ as ax, Vo as ay, Bo as az, Rt as b, o as b0, Fn as b1, P as b2, pn as b3, ua as b4, O as b5, Yi as b6, E as b7, x as b8, Za as b9, gn as ba, hn as bb, Re as bc, so as bd, xi as be, Ti as bf, Xr as bg, k as bh, C as bi, Ni as bj, Di as bk, d as bl, Ro as bm, Ho as bn, Zi as bo, Co as bp, Er as bq, Yo as br, kr as bs, ni as bt, Da as bu, Pt as c, $ as d, Tt as e, Fo as f, V as g, Le as h, U as i, We as j, Xe as k, Je as l, ae as m, de as n, Ge as o, He as p, jo as q, Ve as r, Mo as s, no as t, le as u, j as v, dn as w, ln as x, oe as y, u as z
};