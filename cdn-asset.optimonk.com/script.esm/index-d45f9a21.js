import {
    aN as e,
    aO as t,
    aP as n
} from "./embedded.25b1c29f.js";

function o(e, t) {
    return t.forEach((function(t) {
        t && "string" != typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(n) {
            if ("default" !== n && !(n in e)) {
                var o = Object.getOwnPropertyDescriptor(t, n);
                Object.defineProperty(e, n, o.get ? o : {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            }
        }))
    })), Object.freeze(e)
}
var r = function(e, t) {
        if (!e) throw new Error(t)
    },
    a = Object.defineProperty({
        default: r
    }, "__esModule", {
        value: !0
    });
const l = (e && e.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
})(a);
var i = function(e) {
        l.default(Array.isArray(e.domains), "domains must be an array"), l.default(Array.isArray(e.topLevelDomains), "topLevelDomains must be an array"), l.default(Array.isArray(e.secondLevelDomains), "secondLevelDomains must be an array"), l.default("function" == typeof e.distanceFunction, "distanceFunction must be a function")
    },
    d = Object.defineProperty({
        default: i
    }, "__esModule", {
        value: !0
    });
var u = function(e) {
        return encodeURI(e).replace(/%20/g, " ").replace(/%25/g, "%").replace(/%5E/g, "^").replace(/%60/g, "`").replace(/%7B/g, "{").replace(/%7C/g, "|").replace(/%7D/g, "}")
    },
    s = Object.defineProperty({
        default: u
    }, "__esModule", {
        value: !0
    });
var c = function(e) {
        const {
            domain: t,
            domains: n,
            distanceFunction: o,
            threshold: r
        } = e;
        let a, l = 1 / 0,
            i = null;
        if (t && n) {
            for (let e = 0; e < n.length; e++) {
                if (t === n[e]) return t;
                a = o(t, n[e]), a < l && (l = a, i = n[e])
            }
            return l <= r && null !== i ? i : void 0
        }
    },
    f = Object.defineProperty({
        default: c
    }, "__esModule", {
        value: !0
    });
const m = /\s/;
var h = function(e) {
        return e.trim ? e.trim() : function(e) {
            if (e.trimRight) return e.trimRight();
            let t = e.length;
            for (; m.test(e.charAt(--t)););
            return e.slice(0, t + 1)
        }(function(e) {
            return e.trimLeft ? e.trimLeft() : e.replace(/^\s\s*/, "")
        }(e))
    },
    p = Object.defineProperty({
        default: h
    }, "__esModule", {
        value: !0
    });
const _ = (e && e.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
})(p);
var v = function(e) {
        const t = _.default(e).split("@");
        if (t.length < 2) return !1;
        for (let e = 0; e < t.length; e++)
            if ("" === t[e]) return !1;
        let n = "",
            o = "";
        const r = t.pop(),
            a = r.split(".");
        if (0 === a.length) return !1;
        if (1 == a.length) o = a[0];
        else {
            n = a[0];
            for (let e = 1; e < a.length; e++) o += a[e] + ".";
            o = o.substring(0, o.length - 1)
        }
        return {
            topLevelDomain: o,
            secondLevelDomain: n,
            domain: r,
            address: t.join("@")
        }
    },
    L = Object.defineProperty({
        default: v
    }, "__esModule", {
        value: !0
    }),
    g = e && e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
const D = g(s),
    O = g(f),
    A = g(L);
var P = function(e) {
        const t = D.default(e.email.toLowerCase()),
            n = A.default(t);
        if (!n) return;
        const {
            domains: o,
            domainThreshold: r,
            distanceFunction: a,
            secondLevelDomains: l,
            topLevelDomains: i
        } = e;
        if (l && i && -1 !== l.indexOf(n.secondLevelDomain) && -1 !== i.indexOf(n.topLevelDomain)) return;
        let d = O.default({
            domain: n.domain,
            domains: o,
            distanceFunction: a,
            threshold: r
        });
        if (d) return d == n.domain ? void 0 : {
            address: n.address,
            domain: d,
            full: n.address + "@" + d
        };
        const u = O.default({
                domain: n.secondLevelDomain,
                domains: l,
                distanceFunction: a,
                threshold: e.secondLevelThreshold
            }),
            s = O.default({
                domain: n.topLevelDomain,
                domains: i,
                distanceFunction: a,
                threshold: e.topLevelThreshold
            });
        if (n.domain) {
            d = n.domain;
            let e = !1;
            if (u && u != n.secondLevelDomain && (d = d.replace(n.secondLevelDomain, u), e = !0), s && s != n.topLevelDomain && "" !== n.secondLevelDomain && (d = d.replace(new RegExp(n.topLevelDomain + "$"), s), e = !0), e) return {
                address: n.address,
                domain: d,
                full: n.address + "@" + d
            }
        }
    },
    b = Object.defineProperty({
        default: P
    }, "__esModule", {
        value: !0
    });
var y = function(e, t) {
        if (null == e || 0 === e.length) return null == t || 0 === t.length ? 0 : t.length;
        if (null == t || 0 === t.length) return e.length;
        let n = 0,
            o = 0,
            r = 0,
            a = 0;
        for (; n + o < e.length && n + r < t.length;) {
            if (e.charAt(n + o) == t.charAt(n + r)) a++;
            else {
                o = 0, r = 0;
                for (let a = 0; a < 5; a++) {
                    if (n + a < e.length && e.charAt(n + a) == t.charAt(n)) {
                        o = a;
                        break
                    }
                    if (n + a < t.length && e.charAt(n) == t.charAt(n + a)) {
                        r = a;
                        break
                    }
                }
            }
            n++
        }
        return (e.length + t.length) / 2 - a
    },
    T = Object.defineProperty({
        default: y
    }, "__esModule", {
        value: !0
    }),
    F = t((function(t, n) {
        var o = e && e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.POPULAR_TLDS = n.POPULAR_DOMAINS = n.DEFAULT_CONFIG = void 0;
        const r = o(T),
            a = ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "qq.com", "sky.com", "icloud.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizon.net", "rocketmail.com", "optonline.net", "sbcglobal.net", "aol.com", "aim.com", "me.com", "mailw.com", "btinternet.com", "charter.net", "shaw.ca", "hey.com", "proton.me", "pm.com", "protonmail.com", "zoho.com", "yandex.com", "titan.email"];
        n.POPULAR_DOMAINS = a;
        const l = ["com", "com.au", "com.tw", "co", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu", "uk", "sk", "ar", "cf", "cl", "cn", "ga", "gq", "ir", "ml", "mx", "nu", "nz", "ph", "pl", "ro", "tk", "tw", "ua", "vg", "ws", "xn", "za", "app", "au", "ai", "biz", "br", "blog", "cloud", "club", "cc", "de", "dev", "digital", "fi", "finance", "id", "in", "io", "me", "mobi", "network", "pw", "so", "xyz", "software", "to", "tech"];
        n.POPULAR_TLDS = l;
        const i = {
            domainThreshold: 2,
            domains: a,
            secondLevelThreshold: 2,
            secondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook"],
            topLevelThreshold: 2,
            topLevelDomains: l,
            distanceFunction: r.default
        };
        n.DEFAULT_CONFIG = i
    }));
var M = function(e) {
        return {
            email: e.email,
            domains: e.domains || F.DEFAULT_CONFIG.domains,
            topLevelDomains: e.topLevelDomains || F.DEFAULT_CONFIG.topLevelDomains,
            secondLevelDomains: e.secondLevelDomains || F.DEFAULT_CONFIG.secondLevelDomains,
            distanceFunction: e.distanceFunction || F.DEFAULT_CONFIG.distanceFunction,
            domainThreshold: e.domainThreshold || F.DEFAULT_CONFIG.domainThreshold,
            secondLevelThreshold: e.secondLevelThreshold || F.DEFAULT_CONFIG.secondLevelThreshold,
            topLevelThreshold: e.topLevelThreshold || F.DEFAULT_CONFIG.topLevelThreshold,
            suggested: e.suggested || void 0,
            empty: e.suggested || void 0
        }
    },
    U = Object.defineProperty({
        default: M
    }, "__esModule", {
        value: !0
    }),
    j = e && e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
const R = j(d),
    I = j(b),
    N = j(U);
var k = function(e) {
        const t = N.default(e);
        R.default(t || {});
        const n = I.default(t);
        return !n && e.empty && e.empty(), n && e.suggested && e.suggested(n), n
    },
    w = Object.defineProperty({
        default: k
    }, "__esModule", {
        value: !0
    }),
    E = t((function(t, n) {
        var o = e && e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.POPULAR_TLDS = n.POPULAR_DOMAINS = n.run = void 0;
        const r = o(w);
        n.run = r.default, Object.defineProperty(n, "POPULAR_DOMAINS", {
            enumerable: !0,
            get: function() {
                return F.POPULAR_DOMAINS
            }
        }), Object.defineProperty(n, "POPULAR_TLDS", {
            enumerable: !0,
            get: function() {
                return F.POPULAR_TLDS
            }
        });
        const a = {
            run: r.default,
            POPULAR_DOMAINS: F.POPULAR_DOMAINS,
            POPULAR_TLDS: F.POPULAR_TLDS
        };
        n.default = a
    })),
    S = o({
        __proto__: null,
        default: n(E)
    }, [E]);
export {
    E as d, S as i
};