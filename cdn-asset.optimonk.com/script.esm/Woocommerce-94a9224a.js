import {
    _ as t,
    i as e,
    r as a
} from "./embedded.25b1c29f.js";
var r = function(t, e) {
    if (null == t) return {};
    var a, r, n = {},
        o = Object.keys(t);
    for (r = 0; r < o.length; r++) a = o[r], e.indexOf(a) >= 0 || (n[a] = t[a]);
    return n
};
const n = "BUILD_ADD_2_CART_CONFIG",
    o = "HANDLE_ADD_2_CART_RESPONSE",
    i = "BUILD_FETCH_CART_CONFIG",
    s = "HANDLE_FETCH_CART",
    c = "CI",
    d = "info",
    l = "warn",
    u = "error",
    p = {
        info: "INFO",
        log: "LOG",
        warn: "WARN",
        error: "ERROR"
    },
    m = "cart-module-empty",
    _ = "cart-module-not-empty",
    h = "mobile-cart-empty",
    g = "mobile-cart-not-empty",
    y = {
        "cart-module-empty": "cart-module-not-empty",
        "cart-module-not-empty": "cart-module-empty",
        "mobile-cart-empty": "mobile-cart-not-empty",
        "mobile-cart-not-empty": "mobile-cart-empty"
    };
class C {
    constructor(t, e) {
        void 0 === e && (e = !1), this.forced = e, this.key = t, this.extraKeys = [], this.enabled = this.logEnabled()
    }
    child(t) {
        const e = new C(this.key, this.forced);
        return e.extraKeys = [...this.extraKeys, t], e
    }
    isSearchParam(t) {
        return window.location.search.includes(t)
    }
    logEnabled() {
        if (this.forced) return !0;
        const t = this.isSearchParam("OMDebug"),
            e = this.isSearchParam("FULLDEBUG");
        return !(!t || !e) || (this.key ? t && this.isSearchParam(this.key) : t)
    }
    log(t) {
        if (void 0 === t && (t = "info"), this.enabled) {
            const n = "" + [this.key, ...this.extraKeys].join("][");
            for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) a[r - 1] = arguments[r];
            return console[t]("[" + n + "] " + p[t], ...a)
        }
    }
}
class f {
    constructor(t, e) {
        void 0 === e && (e = !1), this.debug = e, this.setLogger(t)
    }
    setLogger(t, e) {
        !this.logger && t && (this.logger = t, this.logger.forced = e), this.logger || t || (this.logger = new C("CI-INT", e))
    }
    cartItemMapper() {
        throw new Error("Implement item mapper")
    }
}
class I extends f {
    tryUpdateProductCount(t) {
        const e = document.querySelectorAll(".omCartCount");
        for (let a = 0; a < e.length; a++) e[a].textContent = t
    }
    HANDLE_ADD_2_CART_RESPONSE(t) {
        let {
            result: e,
            id: a
        } = t;
        OptiMonkEmbedded.CartIntegration.updateVisitorCart(), OptiMonkEmbedded.CartIntegration.dispatch(e, a), "function" == typeof window.cart_refresh && window.cart_refresh()
    }
    BUILD_ADD_2_CART_CONFIG(e, a) {
        const r = {
                url: "/shop_ajax/ajax_cart.php",
                method: "POST"
            },
            n = new FormData;
        return n.append("get_ajax", 1), n.append("result_type", "json"), n.append("lang_master", "hu"), n.append("action", "add"), n.append("sku", e.sku), n.append("qty", 1), n.append("api_auth", window.UNAS.api_auth), a ? t({}, r, {
            body: n
        }) : (r.payload = n, r)
    }
    cartItemMapper(t) {
        return t.id ? {
            id: t.id,
            name: t.name,
            quantity: t.qty,
            price: t.prices.price_unit,
            sku: t.sku
        } : (console.warn("[UNAS CartIntegration] Item missing ID, possibly a special gift or promotion item", t), null)
    }
    dispatchProductTypeChangeEvent(t) {
        let {
            oldItems: a,
            newItems: r
        } = t;
        if (e({
                type: "unas",
                oldItems: Object.values(a),
                newItems: r
            })) {
            const t = new Event("optimonk#cart-product-types-changed");
            document.querySelector("html").dispatchEvent(t)
        }
    }
    HANDLE_FETCH_CART(t) {
        var e;
        let {
            result: r,
            getAdapter: n
        } = t;
        this.logger.log("info", "HANDLE_FETCH_CART", ...arguments);
        const {
            items: o
        } = r, i = o.filter((t => !!t.id || (console.warn("[UNAS CartIntegration] Skipping cart item without ID (likely a special gift or promotional item)", t), !1))), s = i.reduce(((t, e) => t + Number(e.qty)), 0), c = null != (e = r.sum) ? e : i.reduce(((t, e) => t + Number(e.prices.price_unit)), 0);
        n().then((t => {
            const e = t.Cart.get(),
                a = [];
            t.Cart.clear(), i.forEach((e => {
                const r = this.cartItemMapper(e);
                r && (t.Cart.add(e.id, r), a.push(r))
            })), this.dispatchProductTypeChangeEvent({
                oldItems: e,
                newItems: a
            })
        })), a("cartContent", {
            itemCount: s,
            items: JSON.stringify(i.map((t => {
                var e;
                return {
                    sku: t.sku,
                    productId: t.id,
                    quantity: t.qty,
                    price: null == t || null == (e = t.prices) ? void 0 : e.price_unit
                }
            }))),
            totalPrice: c
        }), this.tryUpdateProductCount(s)
    }
    BUILD_FETCH_CART_CONFIG(t, e) {
        this.logger.log("info", "BUILD_FETCH_CART_CONFIG", ...arguments);
        const a = {
            url: "/shop_ajax/api.php?" + new URLSearchParams({
                get_ajax: 1,
                action: "getCart",
                api_auth: window.UNAS.api_auth
            }).toString(),
            method: "GET"
        };
        return this.logger.log("info", {
            config: a
        }), a
    }
}
class E extends f {
    HANDLE_ADD_2_CART_RESPONSE() {
        "function" == typeof window.cart_refresh && console.log("Gomag: cart_refresh function found, calling it")
    }
    BUILD_ADD_2_CART_CONFIG(e) {
        var a, r;
        const n = {
                function: !0,
                payload: null,
                params: {
                    p: e.id,
                    q: 1,
                    l: "d"
                }
            },
            o = null == (a = window.$) || null == (r = a.Gomag) ? void 0 : r.addToCart;
        if (o && "function" == typeof o) return t({}, n, {
            payload: o
        })
    }
}
class A extends f {
    async cleanAndParseResponse(t, e) {
        let a;
        a = e ? await t.text() : t;
        const r = (t => {
            var e, a;
            if (null != (e = window.dataLayer_content) && e.cartContent) return (t => {
                const e = (t.items || []).map((t => ({
                        id: t.id || t.item_id,
                        sku: t.sku,
                        name: t.item_name || t.name,
                        price: t.price,
                        quantity: t.quantity
                    }))),
                    a = t.totals || {},
                    r = (a.applied_coupons || []).join(",");
                return {
                    cart: e,
                    avs: {
                        cart_total: a.total || 0,
                        cart_total_without_discounts: a.subtotal || a.total || 0,
                        number_of_item_kinds: e.length,
                        total_number_of_cart_items: e.reduce(((t, e) => t + (e.quantity || 0)), 0),
                        applied_coupons: r
                    }
                }
            })(null == (a = window.dataLayer_content) ? void 0 : a.cartContent);
            if ("string" != typeof t) return t;
            const r = t.match(/[{\[].*/);
            return r ? r[0] : t
        })(a);
        return "object" == typeof r ? r : JSON.parse(r)
    }
    tryUpdateProductCount(t) {
        const e = document.querySelectorAll(".omCartCount");
        for (let a = 0; a < e.length; a++) e[a].textContent = t
    }
    HANDLE_ADD_2_CART_RESPONSE(t) {
        var e, a, r, n;
        let {
            result: o,
            id: i
        } = t;
        if (null == (e = OptiMonkEmbedded) || null == (a = e.CartIntegration) || a.updateVisitorCart(), null == (r = OptiMonkEmbedded) || null == (n = r.CartIntegration) || n.dispatch(o, i), "undefined" != typeof jQuery) try {
            jQuery(document.body).trigger("added_to_cart")
        } catch (t) {
            console.error("Failed to trigger added_to_cart event", t)
        }
    }
    BUILD_ADD_2_CART_CONFIG(e, a) {
        const r = {
                url: "/index.php?plugin=optimonk&action=addToCart",
                method: "POST"
            },
            n = new FormData;
        if (n.append("id", e.id), n.append("quantity", 1), a) {
            return t({}, r, {
                body: n,
                headers: {}
            })
        }
        return r.payload = n, r
    }
    cartItemMapper(t) {
        return {
            id: t.id,
            name: t.name,
            quantity: t.quantity,
            price: t.price,
            sku: t.sku
        }
    }
    dispatchProductTypeChangeEvent(t) {
        let {
            oldItems: a,
            newItems: r
        } = t;
        if (e({
                type: "woocommerce",
                oldItems: Object.values(a),
                newItems: r
            })) {
            const t = new Event("optimonk#cart-product-types-changed");
            document.querySelector("html").dispatchEvent(t)
        }
    }
    HANDLE_FETCH_CART(t) {
        let {
            result: e,
            getAdapter: r
        } = t;
        this.logger.log("info", "HANDLE_FETCH_CART", ...arguments);
        const {
            cart: n,
            avs: o
        } = e;
        r().then((t => {
            const e = t.Cart.get(),
                a = [];
            t.Cart.clear(), n.forEach((e => {
                var r;
                const n = this.cartItemMapper(e);
                t.Cart.add(e.id, n), null != (r = window.dataLayer_content) && r.cartContent && t.Cart.add(e.sku, n), a.push(n)
            })), this.dispatchProductTypeChangeEvent({
                oldItems: e,
                newItems: a
            })
        })), a("cartContent", {
            itemCount: o.total_number_of_cart_items,
            items: JSON.stringify(n.map((t => ({
                sku: t.sku,
                productId: t.id,
                quantity: t.quantity,
                price: t.price
            })))),
            totalPrice: o.cart_tital
        }), this.tryUpdateProductCount(o.total_number_of_cart_items)
    }
    BUILD_FETCH_CART_CONFIG(t, e) {
        this.logger.log("info", "BUILD_FETCH_CART_CONFIG", ...arguments);
        const a = {
            url: "/index.php?plugin=optimonk&action=cartData&ts=" + Date.now(),
            method: "GET"
        };
        return this.logger.log("info", {
            config: a
        }), a
    }
}
export {
    f as B, C as D, E as G, o as H, d as L, y as S, I as U, A as W, n as a, s as b, i as c, m as d, h as e, _ as f, g, c as h, l as i, u as j, r as o
};