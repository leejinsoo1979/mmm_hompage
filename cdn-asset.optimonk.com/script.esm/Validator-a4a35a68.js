import {
    C as e
} from "./CampaignProgressState-c8f73300.js";
import {
    B as t,
    O as a,
    aA as i,
    P as n,
    ao as s,
    aB as r
} from "./embedded.25b1c29f.js";

function o(s, r) {
    const o = s,
        g = JSON.parse(JSON.stringify(r)),
        l = this,
        T = t(),
        p = () => {
            i(T, o, g)
        },
        d = (e, t) => {
            if (!n.isPopupPreview()) return g[e] = t, p(), l
        },
        S = e => g[e] || null;
    return {
        getCampaignId: () => o,
        getState: () => S("s") || e.STATE_INIT,
        getActivated: () => g.act,
        isInitialized() {
            return this.getState() === e.STATE_INIT
        },
        isShowed() {
            return this.getState() === e.STATE_SHOWED
        },
        isFilled() {
            return this.getState() === e.STATE_FILLED
        },
        isClosed() {
            return this.getState() === e.STATE_CLOSED
        },
        setShowed: () => (d("s", e.STATE_SHOWED), l),
        setStateClosed: () => (d("s", e.STATE_CLOSED), l),
        setFilled: () => (d("s", e.STATE_FILLED), l),
        setActivated: () => (g.act = 1, l),
        getCreativeId: () => S("cr"),
        getTimeUntilAvailable: () => S("tua"),
        setTimeUntilAvailable: e => (d("tua", e), l),
        incrementNodAndUpdateApp() {
            const e = a.parseInt(S("nod")) || 0;
            return g.nod = e + 1, g.app = a.getTime(), p(), l
        },
        incrementNumberOfDisplays() {
            const e = a.parseInt(S("nod")) || 0;
            return d("nod", e + 1), l
        },
        getNumberOfDisplays: () => S("nod"),
        getAppearance: () => S("app"),
        setAppearance: () => (d("app", a.getTime()), l),
        setTeaserShow: () => (d("ts", e.STATE_SHOWED), l),
        setTeaserClosed: () => (d("ts", e.STATE_CLOSED), l),
        setBeforeTeaserClosed() {
            d("btc", 1)
        },
        setPermanentTeaserClosed() {
            d("ts", e.STATE_PERMANENT_TEASER_CLOSED)
        },
        getTeaserStatus: () => S("ts"),
        isBeforeTeaserClosed: () => S("btc"),
        isAfterTeaserClosed: () => S("ts") === e.STATE_PERMANENT_TEASER_CLOSED
    }
}
class g extends o {
    constructor(t) {
        t.s = e.STATE_INIT, super(0, t)
    }
}
const l = {
        closed: t => t.getState() === e.STATE_CLOSED,
        showed: t => t.getState() === e.STATE_SHOWED || t.getState() === e.STATE_CLOSED || t.getState() === e.STATE_FILLED,
        filled: t => t.getState() === e.STATE_FILLED,
        notClosed: t => t.getState() === e.STATE_INIT || t.getState() === e.STATE_SHOWED,
        notShowed: (e, t) => e.isInitialized(),
        notFilled: t => t.getState() !== e.STATE_FILLED
    },
    T = {
        VISIT_THRESHOLD_IN_SEC: 1800,
        validateFillerForm(e) {
            const t = a.Storage.local.getItem("OptiMonkVisitorAttributes"),
                i = null == t ? void 0 : t[e.fieldId],
                n = e.attributeValue.trim();
            return s[e.operator](i, n)
        },
        cookieManager: null,
        injectCookieManager(e) {
            this.cookieManager = e
        },
        getCookieManager(e) {
            return this.cookieManager || e
        },
        validate(e, t, i) {
            if (void 0 === i && (i = null), i = this.getCookieManager(i), "filledForm" === t.state) return this.validateFillerForm(t);
            if (i) {
                const a = i.getAccountCookie();
                if (t.campaign) {
                    const e = i.getCampaignCookie(t.campaign);
                    return T.validateOne(t, e, a.getAccountCookieObject())
                }
                const n = i.getCampaignCookies();
                return this.handleAllCampaignCase(e, t, n)
            }
            const n = t.campaign ? a.Cookie.CampaignCookieCollection.getByCampaignId(t.campaign) : a.Cookie.CampaignCookieCollection.getAllAsArray(),
                s = r()[OptiMonkRegistry.account];
            return Array.isArray(n) ? this.handleAllCampaignCase(e, t, n) : T.validateOne(t, n, s)
        },
        validateOne(e, t, a) {
            if (t) {
                if (!e.messageType || !e.visitType) return l[e.state](t);
                const i = (t.getAppearance() ? (new Date).getTime() / 1e3 - t.getAppearance() : 0) < T.VISIT_THRESHOLD_IN_SEC,
                    n = OptiMonkRegistry.variantsTypeByCampaign[t.getCampaignId()][t.getCreativeId()];
                if ("campaign" !== e.messageType && e.messageType !== n) return !1;
                if ("visit" === e.visitType && !i) {
                    const i = a && a.ca && a.ca[t.getCampaignId()] ? a.ca[t.getCampaignId()] : {},
                        n = new g(i);
                    return l[e.state](n)
                }
                return l[e.state](t)
            }
            return e.state.indexOf("not") > -1
        },
        handleAllCampaignCase(e, t, a) {
            const i = t.state.indexOf("not") > -1,
                n = Object.values(a).filter((e => "object" == typeof e && e.getCampaignId && e.getCampaignId())).filter((e => {
                    const a = OptiMonkRegistry.variantsTypeByCampaign[e.getCampaignId()][e.getCreativeId()];
                    return "campaign" === t.messageType || t.messageType === a
                }));
            return i ? T.validateDenialRule(e, t, n) : T.validatePermittingRule(e, t, n)
        },
        validateDenialRule(e, t, a) {
            let i = !0;
            for (let n = 0, s = a.length; n < s; n += 1) {
                const s = a[n];
                if (s.getCampaignId() !== e && (i = i && this.validateOne(t, s), !i)) return !1
            }
            return !0
        },
        validatePermittingRule(e, t, a) {
            for (let i = 0, n = a.length; i < n; i += 1) {
                const n = a[i];
                if (n.getCampaignId() !== e && this.validateOne(t, n)) return !0
            }
            return !1
        }
    };
export {
    o as C, g as I, T as V
};