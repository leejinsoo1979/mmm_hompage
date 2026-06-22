import {
    bd as e,
    B as a,
    _ as i,
    a7 as t,
    aH as r,
    aJ as n
} from "./embedded.25b1c29f.js";
import {
    V as s
} from "./Validator-a4a35a68.js";
import {
    J as o
} from "./JFRuleEvaluator-9644a583.js";
import {
    E as l
} from "./ViewedPageValidator-b5c3a44e.js";
import {
    Shared as c
} from "./shared-813ae180.js";
import {
    getCheapValidators as d,
    getExperienceValidators as p
} from "./index-b57bb11d.js";
import "./CampaignProgressState-c8f73300.js";
import "./IndexedDataSetValidator-39cb7bf9.js";
import "./Cart-f4cc4a37.js";
let u;
const m = (t, r) => {
    const n = u || (u = new e({
        accountId: a(),
        campaignsData: r
    }));
    return i({}, t, {
        experiences: t.experiences || [],
        get cookie() {
            return null == n || null == n.getCampaignCookie ? void 0 : n.getCampaignCookie(t.campaignId)
        },
        hasCampaignSourceRule() {
            var e;
            const a = null == (e = this.rules) ? void 0 : e.source;
            return !!a && !a.hasOwnProperty("length")
        },
        hasCampaignViewedPageRule() {
            var e;
            const a = null == (e = this.rules) ? void 0 : e.viewedPage;
            return !!a && !a.hasOwnProperty("length")
        },
        get id() {
            return t.campaignId || ""
        },
        getId: () => t.campaignId || "",
        getCreativeId: () => t.creativeId || null,
        rules: t.rules,
        frontendType: t.frontendType,
        isFilled: () => null == n || null == n.isFilled ? void 0 : n.isFilled(t.campaignId),
        hasCoupon: () => !1,
        coupons: []
    })
};
class g {
    static async validateCheapRules(o, l) {
        if (window.OMReloading) return !1;
        const p = [],
            u = [],
            m = window.location.pathname + window.location.search;
        o.experiences && Array.isArray(o.experiences) || (o.experiences = []);
        const g = await d();
        for (let n = 0; n < o.experiences.length; n++) {
            const d = o.experiences[n];
            o.rules = i({}, d.frontendRules), c.PreviouslyViewedPageValidator.type in o.rules && t.handle(m, [o]);
            const f = new e({
                accountId: a(),
                campaignsData: l
            });
            f.setCreative(o.getId(), o.getCreativeId()), s.injectCookieManager(f);
            let x = !0;
            for (const e of Object.keys(g)) {
                if (o.rules.hasOwnProperty(e) && g[e]) {
                    const a = g[e],
                        i = await a.validate(o, {
                            cookieManager: f
                        });
                    if (p.push({
                            campaignId: o.getId(),
                            type: e,
                            experienceId: d._id,
                            experienceName: d.name,
                            result: !!i
                        }), !1 == !!i) {
                        x = !1;
                        break
                    }
                }
            }
            s.injectCookieManager(null), x || (r("[CheapRuleValidation] Remove " + d.name + " [" + d._id + "] from the campaign"), u.push(n))
        }
        return r("[CheapRuleValidation] Show results:"), n(p), o.experiences = o.experiences.filter(((e, a) => !u.includes(a))), o
    }
    static async validateExperience(e) {
        let {
            campaign: a,
            validators: i,
            JFResultMap: t,
            experience: s
        } = e, o = !0;
        const l = [];
        for (const e of Object.keys(i)) {
            var c;
            const r = a.rules.hasOwnProperty(e);
            if ("viewedPage" === e && !1 === (null == t || null == (c = t[s._id]) ? void 0 : c[e])) {
                o = !1;
                break
            }
            if (r && i[e]) {
                const t = i[e],
                    r = await t.validate(a);
                if (l.push({
                        campaignId: a.getId(),
                        type: e,
                        experienceId: s._id,
                        experienceName: s.name,
                        result: r
                    }), !r) {
                    o = !1;
                    break
                }
            } else {
                var d;
                const i = null == t || null == (d = t[s._id]) ? void 0 : d[e];
                if (!1 === i) {
                    l.push({
                        campaignId: a.getId(),
                        type: e,
                        experienceId: s._id,
                        experienceName: s.name,
                        result: i
                    }), o = !1;
                    break
                }
            }
        }
        return r("[ExperienceRuleValidator] Show results:"), n(l), o
    }
    static async findValidExperienceByRules(e, a) {
        if (window.OMReloading) return !1;
        let t = m(e, a);
        const n = !!t.experiences;
        if (t = await g.validateCheapRules(t, a), e.experiences = t.experiences, n && !t.experiences.length) return;
        const s = e.experiences.sort(((e, a) => a.priority - e.priority)).map((async e => {
                const a = await o.evaluateAndGo(e.frontendRules);
                return {
                    [e._id]: a
                }
            })),
            c = (await Promise.all(s)).reduce(((e, a) => {
                var i;
                const t = Object.keys(a)[0];
                return e[t] || (e[t] = {}), Object.assign(e[t], null != (i = a[t]) ? i : {}), e
            }), {});
        r("[JFResultMap]", c);
        const d = await p();
        for (const a of e.experiences) {
            t.rules = i({}, a.frontendRules), l.init(t.rules), await l.areValidatorsReady();
            const e = await g.validateExperience({
                campaign: t,
                validators: d,
                JFResultMap: c,
                experience: a
            });
            if (r("[ExperienceRuleValidator][" + a._id + "][" + a.name + "] Validator result for campaign", t.getId(), "is", e), e) return a
        }
    }
}
export {
    g as ExperienceRuleValidator
};