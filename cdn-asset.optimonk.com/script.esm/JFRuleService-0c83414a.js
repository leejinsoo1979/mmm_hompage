import {
    B as e,
    aU as r,
    aV as s,
    Y as t,
    Z as a,
    aW as i,
    C as n,
    aX as d,
    _ as o,
    aY as c,
    aH as l,
    aZ as u,
    a_ as p
} from "./embedded.25b1c29f.js";
import {
    J as m
} from "./JFRuleEvaluator-9644a583.js";
import "./IndexedDataSetValidator-39cb7bf9.js";
const f = () => {
        var o, c, l, u, p, m;
        if (document.removeEventListener("jetfabricLoaded", f), !e() || !window.JFClientSDK) return;
        const {
            provider: v,
            providerServiceId: y
        } = r(), g = s(), C = t(), x = a(), w = (null == (o = OptiMonkRegistry) || null == (c = o.crossDomainParams) ? void 0 : c.optiMonkClientId) || i() || null, I = (null == (l = OptiMonkRegistry) || null == (u = l.crossDomainParams) ? void 0 : u.provider) || v || null, S = (null == (p = OptiMonkRegistry) || null == (m = p.crossDomainParams) ? void 0 : m.providerServiceId) || y;
        if (window.JFClientSDK.v2.setAppId("optimonk").registerCustomerAddress({
                provider: "optimonk",
                providerServiceId: "" + e(),
                customerAddress: w,
                addressType: "deviceId"
            }).registerCustomerAddress({
                provider: I,
                providerServiceId: S,
                customerAddress: g || null,
                addressType: "customerId"
            }).setUserSessionSate({
                visitorInExperiment: C,
                deviceType: x
            }), "shopify" === v) {
            const e = n.local.getItem("_shopify_y");
            e && window.JFClientSDK.v2.registerCustomerAddress({
                provider: "shopify",
                providerServiceId: y,
                customerAddress: e,
                addressType: "deviceId"
            })
        }
        d()
    },
    v = e => {
        if ("boolean" == typeof e) return e;
        if ("string" == typeof e) {
            if ("true" === e.toLowerCase()) return !0;
            if ("false" === e.toLowerCase()) return !1
        }
        if ("object" == typeof e && null !== e) {
            if (Array.isArray(e)) return e.map((e => v(e)));
            const r = {};
            for (const [s, t] of Object.entries(e)) r[s] = v(t);
            return r
        }
        return e
    },
    y = "jfrule-result",
    g = "jfrule-experiences-result";
class C {
    static addCampaign(e) {
        const r = e.id;
        m.addCampaignRules(o({
            campaignId: r
        }, e)), e.experiences.length && m.addCampaignExperiencesRules(r, e.experiences)
    }
    static hasJFRule() {
        return m.hasRules() || m.hasExperienceRules()
    }
    static addScript() {
        return new Promise((e => {
            if (window.JFClientSDK) return e();
            c("jetfabric", OptiMonkRegistry.jfJsScriptUrl), document.addEventListener("jetfabricLoaded", (function() {
                f(), e()
            }))
        }))
    }
    static async collectData() {
        l("JF rule collect data started"), await C.addScript(), l("JF SDK loaded");
        const e = [];
        return m.hasRules() && (l("Has campaign rules"), e.push(u.set((async () => {
            const e = await m.run();
            return l("Embedded/DC results", e), e
        }), {
            key: "jfrule-result"
        }))), m.hasExperienceRules() && (l("Has experience rules"), e.push(u.set((async () => {
            const e = await m.runExperiences();
            return l("Embedded/DC experience results", e), e
        }), {
            key: "jfrule-experiences-result"
        }))), Promise.all(e)
    }
    static async getCachedData() {
        let e = await p.get((() => {}), {
            cacheId: () => "om-jfrule-result",
            maxAge: 0
        });
        return e = v(e), e
    }
    static async getCachedExperienceData() {
        let e = await p.get((() => {}), {
            cacheId: () => "om-jfrule-experiences-result",
            maxAge: 0
        });
        return e = v(e), e
    }
    static evaluateRule(e) {
        return m.evaluateAndGo(e)
    }
}
export {
    y as CACHE_KEY, g as EXPERIENCES_CACHE_KEY, C as
    default
};