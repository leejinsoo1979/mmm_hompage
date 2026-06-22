import {
    be as t,
    bf as e,
    ao as r,
    C as a,
    bg as i,
    at as n,
    bh as s,
    S as o,
    bi as c,
    _ as u,
    bj as l,
    bk as d
} from "./embedded.25b1c29f.js";
import {
    I as m
} from "./IndexedDataSetValidator-39cb7bf9.js";
import {
    C as p
} from "./Cart-f4cc4a37.js";
class g extends t {
    static get type() {
        return "cookie"
    }
    static async validate(t) {
        const r = e.getCookie(t);
        if (!r) return !0;
        let a, i = !1;
        return r.forEach((t => {
            a = !0, t.forEach((t => {
                a = a && g.validateOne(t)
            })), i = i || a
        })), i
    }
    static validateOne(t) {
        return r[t.operator](a.local.getItem(t.cookieName), t.value)
    }
}
const v = "ShopRenter",
    y = "Shopify",
    f = () => !!window[y],
    V = () => !!window.mpro,
    b = () => f() || !!window[v] || V(),
    I = t => {
        if (b()) {
            if ("id" === t) return f() || V() ? "product_id" : "id";
            if ("name" === t) return f() ? "title" : "name"
        }
        return t
    },
    w = (t, e, r) => "interval" === r ? e : "string" === t ? "" + e : parseInt(e, 10),
    x = t => {
        var e;
        let {
            cartItems: a,
            attributeName: i,
            attributeOperator: n,
            type: s,
            value: o,
            meta: c
        } = t;
        const l = I(i);
        var d;
        return null != (d = window.dataLayer_content) && d.cartContent && "id" === i && null != c && null != (e = c.products) && e.length && (a = a.map((t => {
            var e, r;
            const a = (null == (e = c.products) || null == (r = e.find((e => e.sku === t.sku))) ? void 0 : r.id) || t.id;
            return u({}, t, {
                id: a
            })
        }))), a.some((t => r[n](w(s, t[l], n), w(s, o, n))))
    },
    C = function(t, e) {
        let {
            cartItems: a
        } = void 0 === e ? {} : e;
        const {
            type: i,
            operator: n,
            attributeOperator: s,
            attributeName: o,
            value: c,
            compareTo: u,
            meta: l
        } = t;
        let d = (Array.isArray(c) ? c : [c]).map((t => w(i, t, s))).some((e => "productsInCart" === t.for ? x({
            cartItems: a,
            attributeOperator: s,
            attributeName: o,
            type: i,
            value: e,
            meta: l
        }) : r[s](w(i, u, s), w(i, e, s))));
        return "exclude" === n && (d = !d), d
    },
    h = {
        cartValue: t => C(u({}, t, {
            compareTo: p.total()
        })),
        totalNumberOfProducts: t => C(u({}, t, {
            compareTo: p.totalItems()
        })),
        productsInCart: (t, e) => {
            let {
                cartItems: r
            } = e;
            return !!r.length && C(t, {
                cartItems: r
            })
        }
    };
const k = {
    CookieValidator: g,
    CountryValidator: class extends t {
        static get type() {
            return "country"
        }
        static async validate(t) {
            const r = e.getCountry(t);
            if (!r) return !0;
            const a = await i.get(),
                n = r.countries.includes(a);
            return "appear" === r.operator ? n : !1 === n
        }
    },
    ExperimentValidator: class extends t {
        static get type() {
            return "experiment"
        }
        static async validate(t) {
            return !(t => t.currentExperimentId)(t) || !(t => t.currentExperimentId && (!OptiMonkRegistry.experiments || 0 === OptiMonkRegistry.experiments.length))(t) && (t => {
                var e, r;
                const a = n.readCookie(),
                    i = null == a ? void 0 : a.find((e => e.includes(t.currentExperimentId)));
                if (!i) return !1;
                const s = i.split("_")[1],
                    o = i.split("_")[3],
                    c = null == (e = OptiMonkRegistry.experiments.find((t => t._id === s))) ? void 0 : e.groups.find((t => t._id === o)),
                    u = t.campaignId || t.id;
                return null == c || null == (r = c.campaigns) ? void 0 : r.includes(u)
            })(t)
        }
    },
    LoggedInValidator: class extends t {
        static get type() {
            return "loggedIn"
        }
        static async validate(t) {
            var r, a, i, n;
            const s = e.getLoggedIn(t);
            if (!s) return !0;
            const o = window.ShopifyAnalytics;
            return !!o && (!("no" !== s || null != o && null != (r = o.meta) && null != (a = r.page) && a.customerId) || !("yes" !== s || null == o || null == (i = o.meta) || null == (n = i.page) || !n.customerId))
        }
    },
    MinimumPageVisitValidator: class extends t {
        static get type() {
            return "minimumPageVisit"
        }
        static async validate(t, r) {
            let {
                cookieManager: a
            } = r;
            const i = e.getMinimumPageVisit(t);
            if (!i) return !0;
            const n = a.getAccountCookie();
            let s;
            return s = i.operator && "atLeast" !== i.operator ? n.numberOfPageViews <= i.value : n.numberOfPageViews >= i.value, s
        }
    },
    NotViewedPageRecentValidator: class extends t {
        static get type() {
            return "notViewedPageRecent"
        }
        static async validate(t, e) {
            let {
                cookieManager: r
            } = e;
            const a = r.getAccountCookie().getCampaignCookie(t.id).timeUntilAvailable;
            if (null == a) return !0;
            return a < s()
        }
    },
    PageViewerTypeValidator: class extends t {
        static get type() {
            return "pageViewerType"
        }
        static async validate(t, r) {
            let {
                cookieManager: a
            } = r;
            const i = e.getPageViewerType(t);
            if (!i) return !0;
            const n = (new Date).getTime() / 1e3,
                s = a.getAccountCookie(),
                o = 1 === s.numberOfPageViews,
                c = s.firstPageVisit && n - s.firstPageVisit < 86400;
            return "both" === i || (o || c ? "firstTimeVisitor" : "recurrentVisitor") === i
        }
    },
    PreviouslyViewedPageValidator: l,
    PreviouslyViewedPage: d,
    SourceValidator: class extends t {
        static get type() {
            return "source"
        }
        static async validate(t) {
            if (!e.getSource(t)) return !0;
            const a = new m(["notEquals", "notContains", "notStartsWith", "notMatchRegex"], ["equals", "contains", "startsWith", "matchRegex"]),
                i = o.local.getItem("OptiMonkVisitorAttributes"),
                n = i._source_referrer,
                s = i._source_url;
            return a.validate(t.rules.source, (function(t, e) {
                return "referrer" === e.subject ? r[t](n, e.value) : r[t](s, e.value)
            }))
        }
    },
    TimeBasedSessionValidator: class extends t {
        static get type() {
            return "timeBasedSession"
        }
        static async validate(t) {
            const r = e.getTimeBasedSession(t);
            if (!r) return !0;
            const a = c();
            return !Number.isNaN(a) && s() >= a + r
        }
    },
    VisitorAttributeValidator: class extends t {
        static get type() {
            return "visitorAttribute"
        }
        static async validate(t) {
            const a = e.getVisitorAttribute(t);
            if (!a) return !0;
            let i, n = !1;
            return a.forEach((t => {
                i = !0, t.forEach((t => {
                    i = i && (t => {
                        var e;
                        let a = t.attributeName;
                        "device_type" === t.attributeName && (a = "is_mobile");
                        let i = null == (e = o.local.getItem("OptiMonkVisitorAttributes")) ? void 0 : e[a],
                            n = t.value;
                        if ("first_landing_page" === t.attributeName) {
                            try {
                                i = decodeURIComponent(i)
                            } catch (t) {}
                            const e = new URL(i);
                            i = e.pathname + e.search + e.hash;
                            try {
                                n = decodeURIComponent(t.value.trim())
                            } catch (e) {
                                n = t.value.trim()
                            }
                        }
                        return "device_type" === t.attributeName && (n = "desktop" === n ? "false" : "true"), r[t.operator](i, n)
                    })(t)
                })), n = n || i
            })), n
        }
    },
    VisitorCartV3Validator: class extends t {
        static get type() {
            return "visitorCartV3"
        }
        static async validate(t) {
            if (!t.rules.visitorCartV3) return !0;
            return (t => {
                const e = Object.values(p.getItems());
                return t.every((t => h[t.for](t, {
                    cartItems: e
                })))
            })(t.rules.visitorCartV3)
        }
    }
};
export {
    k as Shared
};