import {
    V as t,
    O as o,
    _ as e,
    B as s
} from "./embedded.25b1c29f.js";
const i = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
let n = null;
class a {
    static getInstance() {
        return n || (n = new a), n
    }
    constructor() {
        this.visitorAdapter = t.createAdapter(), this.couponCodes = [], this._showed = !1, this.loadCouponCodes(), this.validateAutoCoupons(), this.validateFixAndUploadedUniqueCoupons()
    }
    get autoCoupons() {
        return this.couponCodes.filter((t => {
            let {
                platform: o,
                type: e
            } = t;
            return "automatic" === e || "shopify" === o
        }))
    }
    get fixedCoupons() {
        return this.couponCodes.filter((t => {
            let {
                type: o
            } = t;
            return "fixed" === o || "unique" === o
        }))
    }
    showedCoupon() {
        this._showed = !0
    }
    get didShowCoupon() {
        return this._showed
    }
    async reload() {
        this.loadCouponCodes(), await Promise.all([this.validateAutoCoupons(), this.validateFixAndUploadedUniqueCoupons()]), o.triggerEvent(document.querySelector("html"), "optimonk#followup-coupons-reloaded")
    }
    loadCouponCodes() {
        const t = [];
        this.parseCouponVisitorAttributes().forEach((o => {
            const e = o.validUntil > Date.now() || !o.validUntil,
                s = o.generatedAt > Date.now() - 31536e6,
                i = o.shownAt > Date.now() - 7776e6;
            this.cleanupHTMLCoupon(o), this.isAuto(o) && e && s || ("fixed" === o.type || "unique" === o.type) && i ? t.push(o) : this._gc(o._gcAttributes)
        })), this.couponCodes = t
    }
    isShopify() {
        return !!window.Shopify
    }
    isAuto(t) {
        return "automatic" === t.type
    }
    parseCouponVisitorAttributes() {
        const t = this.visitorAdapter.attr(),
            o = {};
        return Object.entries(t).forEach((t => {
            let [s, i] = t;
            const n = s.match(/^(coupon_code_.+?)(_data)?$/);
            if (n) {
                const [, t, a] = n;
                t && i && "null" !== i && (o[t] || (o[t] = {
                    _gcAttributes: [],
                    isUsed: Promise.resolve(!1)
                }), a ? o[t] = e({}, o[t], JSON.parse(i)) : o[t].code = i, o[t]._gcAttributes.push(s))
            }
        })), Object.values(o)
    }
    async validateFixAndUploadedUniqueCoupons() {
        if (this.isShopify()) {
            const t = this.fixedCoupons.map((t => t.code)),
                o = s(),
                e = window.Shopify.shop,
                i = fetch(OptiMonkRegistry.baseUrl + "/discountCode/details", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        account: o,
                        type: "shopify",
                        discountCodes: t,
                        shopId: e
                    })
                }).then((t => t.json()));
            this.fixedCoupons.forEach((async t => {
                t.isValid = i.then((o => o[t.code]))
            })), await i
        }
    }
    async validateAutoCoupons() {
        var t;
        const o = null == (t = window.JFClientSDK) ? void 0 : t.v2,
            e = this.autoCoupons;
        if (!o) throw new Error("Unable to validate coupons: JFClientSDK is not loaded");
        e.forEach((t => {
            const e = Date.now() - t.generatedAt;
            t.isUsed = e < 1e4 ? Promise.resolve(!1) : o.evaluateConditionalExpression({
                expression: ["=", {
                    query: {
                        type: "qgql",
                        gql: "\n                query($code: String!) {\n                  shopify {\n                    couponUsed(code: $code)\n                  }\n                }\n              ",
                        values: {
                            code: t.code
                        }
                    },
                    path: "$.shopify.couponUsed"
                }, !0]
            })
        }));
        try {
            await o.go()
        } catch (t) {
            throw new Error("Failed to validate coupons: " + t.message)
        }
    }
    hasBeenFollowedUpByOtherCampaign(t, o) {
        return !(!t.followedUpBy || t.followedUpBy === o)
    }
    async getLatestCoupon(t) {
        const o = this.couponCodes.sort(((t, o) => o.shownAt - t.shownAt));
        for (let e = 0; e < o.length; e++) {
            const s = o[e];
            let i = !1,
                n = !0;
            if (this.isAuto(s) && (i = await s.isUsed), this.isShopify() && !this.isAuto(s) && (n = await s.isValid), !i && n && !this.hasBeenFollowedUpByOtherCampaign(s, t)) return s
        }
        return null
    }
    _gc(t) {
        t.length > 0 && t.forEach((t => this.visitorAdapter.removeAttr(t)))
    }
    cleanupHTMLCoupon(t) {
        if (o = t.code, i.test(o)) {
            const o = (new DOMParser).parseFromString(t.code, "text/html").body.textContent;
            this.visitorAdapter.attr(t._gcAttributes[0], o), window.JFClientSDK.v2.log({
                messageType: "CouponHtmlCleanup",
                data: {
                    originalCouponCode: t.code,
                    cleanCouponCode: o,
                    databaseId: s()
                },
                severity: 2
            }), window.JFClientSDK.v2.go(), t.code = o
        }
        var o
    }
    updateCouponWithFollowup(t, o) {
        const s = t._gcAttributes[1],
            i = JSON.parse(this.visitorAdapter.attr(s));
        this.visitorAdapter.attr(s, JSON.stringify(e({}, i, o))), this.reload()
    }
    storeCoupon(t, o) {
        let {
            campaignId: s,
            elemId: i,
            code: n
        } = t;
        const a = "coupon_code_" + s + "_" + i;
        this.visitorAdapter.attr(a, n), this.visitorAdapter.attr("coupon_code_" + s + "_" + i + "_data", JSON.stringify(e({}, o, {
            shownAt: (new Date).getTime()
        }))), this.reload()
    }
}
export {
    a as F
};