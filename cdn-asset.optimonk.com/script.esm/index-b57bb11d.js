import {
    aE as a,
    aF as t,
    aG as e,
    aH as i,
    aI as o,
    a9 as r,
    aJ as d,
    T as l,
    aK as s,
    aL as V,
    aM as n
} from "./embedded.25b1c29f.js";
export {
    aL as DomainValidator, aG as IPBlockValidator, aF as ScheduleValidator
}
from "./embedded.25b1c29f.js";
const p = async () => {
        const {
            Popup: a
        } = await
        import (OptiMonkRegistry.esmAssetPath + "/popup-8e8561cc.js");
        return {
            [a.ViewedPageValidator.type]: a.ViewedPageValidator,
            [a.ABlockValidator.type]: a.ABlockValidator,
            klaviyoSegment: null,
            subscribers: null
        }
    },
    u = async () => {
        const {
            Shared: a
        } = await
        import (OptiMonkRegistry.esmAssetPath + "/shared-813ae180.js"), {
            Popup: i
        } = await
        import (OptiMonkRegistry.esmAssetPath + "/popup-8e8561cc.js");
        return {
            [a.SourceValidator.type]: a.SourceValidator,
            [a.TimeBasedSessionValidator.type]: a.TimeBasedSessionValidator,
            [i.TimeUntilNextAppearanceValidator.type]: i.TimeUntilNextAppearanceValidator,
            [i.CampaignProgressStateValidator.type]: i.CampaignProgressStateValidator,
            [a.VisitorAttributeValidator.type]: a.VisitorAttributeValidator,
            [a.VisitorCartV3Validator.type]: a.VisitorCartV3Validator,
            [a.PreviouslyViewedPageValidator.type]: a.PreviouslyViewedPageValidator,
            [a.MinimumPageVisitValidator.type]: a.MinimumPageVisitValidator,
            [a.NotViewedPageRecentValidator.type]: a.NotViewedPageRecentValidator,
            [a.CookieValidator.type]: a.CookieValidator,
            [a.LoggedInValidator.type]: a.LoggedInValidator,
            [t.type]: t,
            [a.PageViewerTypeValidator.type]: a.PageViewerTypeValidator,
            [e.type]: e,
            [a.CountryValidator.type]: a.CountryValidator
        }
    },
    c = async () => {
        const {
            Shared: t
        } = await
        import (OptiMonkRegistry.esmAssetPath + "/shared-813ae180.js"), {
            Popup: e
        } = await
        import (OptiMonkRegistry.esmAssetPath + "/popup-8e8561cc.js");
        return [e.AssetsLoadedValidator, e.QueuedCampaignTypeValidator, e.CurrentlyActiveValidator, e.ActivatedValidator, e.GlobalFrequencyCapValidator, e.ShowableValidator, t.MinimumPageVisitValidator, t.NotViewedPageRecentValidator, e.ViewedPageValidator, e.SubscriberValidator, t.SourceValidator, e.CampaignProgressStateValidator, e.TimeBasedActualPageValidator, t.TimeBasedSessionValidator, e.TimeUntilAvailableValidator, t.PreviouslyViewedPageValidator, t.CookieValidator, t.VisitorAttributeValidator, t.VisitorCartV3Validator, e.ABlockValidator, a, e.MaximumPopupDisplayValidator, e.TimeUntilNextAppearanceValidator, t.LoggedInValidator, t.CountryValidator, t.PageViewerTypeValidator, e.CountdownValidator, e.ProductValidator, e.VisitorInKlaviyoSegmentsOrListsValidator, t.ExperimentValidator, e.SmartProductTagValidator, e.FollowupCouponValidator, e.CouponValidator, e.CouponExpiryValidator]
    },
    m = {
        beforeInit: {
            async validate(o, r) {
                let {
                    cookieManager: d
                } = r;
                const l = [],
                    s = [V, n, t, a, e];
                for (const a of o) {
                    let t = !0;
                    for (const e of s)
                        if (t = await e.validate(a, {
                                cookieManager: d
                            }), !t) {
                            i("[beforeInit] Validator failed: " + (null == e ? void 0 : e.type));
                            break
                        }
                    t && l.push(a)
                }
                return l
            }
        },
        popup: {
            async validate(a, t) {
                let {
                    event: e
                } = t;
                const l = await c(),
                    s = a.getId(),
                    V = window.OptiMonk.campaigns[s];
                if (OptiMonkRegistry.isDebug && (V || o("No campaign to validate. Check SPA code!", s)), i("Popup validator for campaign:", s), !V) return !1;
                let n = !0;
                const p = [],
                    u = r();
                for (const a of l) {
                    const t = await a.validate(V, {
                        event: e,
                        cookieManager: u
                    });
                    if (p.push({
                            type: a.type,
                            campaignId: s,
                            result: t
                        }), !t) return n = !1, d(p), !1
                }
                return i("Show results for campaign:", s), d(p), n
            }
        },
        teaser: {
            async validate(t) {
                const e = await (async () => {
                        const {
                            Shared: t
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/shared-813ae180.js"), {
                            Popup: e
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/popup-8e8561cc.js"), {
                            Teaser: i
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/teaser-6f6721e3.js");
                        return [e.QueuedCampaignTypeValidator, e.AssetsLoadedValidator, e.ShowableValidator, e.GlobalFrequencyCapValidator, a, i.MaximumPopupDisplayValidator, i.TimeUntilNextAppearanceValidator, t.MinimumPageVisitValidator, t.NotViewedPageRecentValidator, e.ViewedPageValidator, e.SubscriberValidator, t.SourceValidator, e.CampaignProgressStateValidator, e.TimeBasedActualPageValidator, t.TimeBasedSessionValidator, e.TimeUntilAvailableValidator, t.PreviouslyViewedPageValidator, e.CountdownValidator, t.CookieValidator, t.VisitorAttributeValidator, t.VisitorCartV3Validator, e.ABlockValidator, t.CountryValidator, t.PageViewerTypeValidator, e.SmartProductTagValidator, t.LoggedInValidator, e.ProductValidator, t.ExperimentValidator, e.VisitorInKlaviyoSegmentsOrListsValidator, e.CouponValidator, e.CouponExpiryValidator]
                    })(),
                    o = [];
                i("Teaser validator for campaign:", t);
                let s = !0;
                const V = r();
                for (const a of e) {
                    const e = await a.validate(t, {
                        event: l.teaser,
                        cookieManager: V
                    });
                    if (o.push({
                            type: a.type,
                            campaign: t.getId(),
                            valid: e
                        }), !e) return s = !1, d(o), !1
                }
                return i("[TeaserValidator] Show results:"), d(o), s
            }
        },
        embeddedOld: {
            async validate(t, e) {
                let {
                    event: o
                } = e;
                const l = await (async () => {
                        const {
                            Shared: t
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/shared-813ae180.js"), {
                            Popup: e
                        } = await
                        import (OptiMonkRegistry.esmAssetPath + "/popup-8e8561cc.js");
                        return [t.CountryValidator, t.PageViewerTypeValidator, t.MinimumPageVisitValidator, t.NotViewedPageRecentValidator, e.ABlockValidator, e.CountdownValidator, a, e.ViewedPageValidator, e.SubscriberValidator, t.SourceValidator, t.TimeBasedSessionValidator, t.PreviouslyViewedPageValidator, t.CookieValidator, t.VisitorAttributeValidator, t.VisitorCartV3Validator, e.MaximumPopupDisplayValidator, e.TimeUntilNextAppearanceValidator, e.CampaignProgressStateValidator, e.TimeBasedActualPageValidator, e.TimeUntilAvailableValidator, e.ProductValidator, e.VisitorInKlaviyoSegmentsOrListsValidator, t.ExperimentValidator, e.FollowupCouponValidator, e.CouponValidator, e.CouponExpiryValidator]
                    })(),
                    s = window.OptiMonk.campaigns[t],
                    V = [];
                i("Old Embedded validator for campaign:", s);
                let n = !0;
                const p = r();
                for (const a of l) {
                    const t = await a.validate(s, {
                        event: o,
                        cookieManager: p
                    });
                    if (V.push({
                            type: a.type,
                            campaign: s.getId(),
                            valid: t
                        }), !t) return n = !1, d(V), !1
                }
                return i("[OldEmbeddedValidator] Show results:"), d(V), n
            }
        },
        embedded: {
            async validate(a, t) {
                void 0 === t && (t = null);
                const {
                    Shared: e
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/shared-813ae180.js"), {
                    Embedded: i
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/embedded-cc1e4c57.js"), o = [i.SmartPPOVariableValidator, i.SppoInsertHtmlValidator, e.ExperimentValidator, e.CountryValidator, i.ViewedPageValidator, i.MaximumPopupDisplayValidator, e.MinimumPageVisitValidator, e.NotViewedPageRecentValidator, e.PreviouslyViewedPageValidator, e.TimeBasedSessionValidator, i.JFRuleSubscribersValidator, i.JFRuleKlaviyoSegmentsOrListValidator, e.SourceValidator, e.LoggedInValidator, e.CookieValidator, e.VisitorAttributeValidator, e.VisitorCartV3Validator, i.CampaignProgressStateValidator, e.PageViewerTypeValidator, i.CouponValidator], l = t || OptiMonkEmbedded.campaigns[a];
                if (!l) return !1;
                const V = r() || null,
                    n = [];
                let p = !0;
                for (let t = 0, e = o.length; t < e; t++) {
                    if (!p) return s(a, n), d(n), !1;
                    const e = o[t];
                    p = await e.validate(l, {
                        cookieManager: V
                    }), OptiMonkRegistry.isDebug && n.push({
                        type: e.type,
                        campaignId: a,
                        result: p
                    })
                }
                return p || s(a, n), d(n), p
            },
            async postValidate(a, t) {
                const {
                    Embedded: e
                } = await
                import (OptiMonkRegistry.esmAssetPath + "/embedded-cc1e4c57.js"), i = [e.CountdownValidator], o = [];
                let r = !0;
                for (let e = 0, d = i.length; e < d; e++) {
                    if (!r) return s(a, o), !1;
                    const d = i[e];
                    r = await d.validate(t), o.push({
                        type: d.type,
                        result: r
                    })
                }
                return s(a, o), r
            }
        }
    };
export {
    m as Validators, u as getCheapValidators, p as getExperienceValidators, c as loadPopupValidators
};