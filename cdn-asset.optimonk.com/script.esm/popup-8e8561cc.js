import {
    T as e,
    O as t,
    _ as a,
    r as i,
    z as n,
    S as o,
    bp as r,
    aH as l
} from "./embedded.25b1c29f.js";
import {
    C as s
} from "./CampaignProgressState-c8f73300.js";
import {
    V as d
} from "./Validator-a4a35a68.js";
import {
    r as p
} from "./ReportUserAlert-40bb33b3.js";
import {
    ExperienceRuleValidator as c
} from "./ExperienceRuleValidator-e39a9182.js";
import {
    FollowupCouponValidator as u
} from "./FollowupCouponValidator-ccf53beb.js";
import {
    J as g
} from "./JFRuleEvaluator-9644a583.js";
import {
    g as m
} from "./TimeUntilNextAppearanceSharedParts-cd1df360.js";
import {
    V as v
} from "./ViewedPageValidator-b5c3a44e.js";
import "./shared-813ae180.js";
import "./IndexedDataSetValidator-39cb7bf9.js";
import "./Cart-f4cc4a37.js";
import "./index-b57bb11d.js";
import "./FollowupCouponManager-d685455a.js";
const h = {
        validate(t, a) {
            switch (a.type) {
                case e.click:
                    return !0;
                case e.restore:
                    return t.isActivated();
                case e.immediateInvoke:
                    return this.isNanobarInValidStatus(t);
                case e.followupCouponInvoke:
                    return t.getState() !== s.STATE_CLOSED;
                default:
                    return this.pageDoesNotHaveActivatedCampaignWithSameType(t.getFrontendType())
            }
        },
        pageDoesNotHaveActivatedCampaignWithSameType(e) {
            const a = this;
            let i = !0;
            const n = t.campaigns;
            for (const t in n)
                if (n.hasOwnProperty(t)) {
                    const o = n[t];
                    if (i = !1 === a.hasActivatedCampaignByType(o, e), !i) return !1
                }
            return i
        },
        hasActivatedCampaignByType: (e, t) => e.getFrontendType() === t && e.isActivated(),
        isNanobarInValidStatus: e => e.getState() === s.STATE_CLOSED || e.getState() === s.STATE_SHOWED
    },
    y = {
        validate: e => !e.rules.aBlock || "enabled" === e.rules.aBlock === window.OptiMonkRegistry.externalValidators.aBlock
    },
    w = {
        validate(e) {
            if (!window.OptiMonk.campaigns.hasOwnProperty(e)) return !1;
            const t = window.OptiMonk.campaigns[e];
            return !t.isInline() || !!t.isAllAssetsLoaded()
        }
    },
    T = {
        resolveCurrentCampaign: (e, t) => t.map((t => t.map((t => "CURRENT_CAMPAIGN" === t.campaign ? a({}, t, {
            campaign: e
        }) : t)))),
        validate(e, a) {
            if (!a.campaignProgressState) return !0;
            const i = this.resolveCurrentCampaign(e, a.campaignProgressState);
            let n, o = !1;
            return t.each(i, (function(a, i) {
                n = !0, t.each(i, (function(t, a) {
                    n = n && d.validate(e, a)
                })), o = o || n
            })), o
        }
    },
    S = {
        type: "campaignProgressState",
        validate: e => T.validate(e.getId(), e.rules)
    },
    f = {
        isReported: !1,
        isExpired: e => !!e && new Date(e) < new Date,
        validate(e) {
            var t;
            const a = null != (t = e.countdowns) ? t : [];
            return !a.map((e => {
                let {
                    initData: {
                        date: t
                    }
                } = e;
                return this.isExpired(t)
            })).some(Boolean) || (this.isReported || (p({
                type: "CountdownInThePast",
                links: {
                    campaign: e
                },
                context: {
                    countdowns: a.map((e => e.initData))
                }
            }), this.isReported = !0), !1)
        }
    },
    C = {
        validate: e => !e.hasCoupon() || e.lockCoupons()
    },
    b = {
        validate(e) {
            const t = e.getFrontendType(),
                a = window.OptiMonk.ActivatedCampaignManager.hasActiveType(t),
                i = window.OptiMonk.campaigns[a],
                n = !!a && (i.isTeaserShowing && i.isTeaserShowing());
            return !(!a || !n) || (!1 === a || a === e.getId())
        }
    },
    k = "nanobar",
    V = "embedded",
    A = "sidebar",
    P = "popup",
    I = "dynamic_content",
    O = {
        debug: !1,
        isLinked(e) {
            if (this.log("check campaign (" + e.getId() + ") is linked"), !e.rules.campaignProgressState) return this.log("campaign (" + e.getId() + ") is not linked: ", "campaignProgressState rules not present"), !1;
            const t = S.validate(e);
            return this.log("is campaign (" + e.getId() + ") linked: ", t), t
        },
        hasOnlyFollowupCoupons(e) {
            this.log("check campaign (" + e.getId() + ") is coupon followup");
            const t = e.hasCoupon() && e.coupons.every((e => e.isFollowup && e.isFollowup()));
            return this.log("is campaign (" + e.getId() + ") a coupon followup:", t), t
        },
        isFollowup(e) {
            return this.hasOnlyFollowupCoupons(e)
        },
        convertSettingToTimestamp(e) {
            let {
                inTime: t,
                timeUnit: a
            } = e;
            const i = t * ("hours" === a ? 60 : 1) * 60 * 1e3;
            return Date.now() - i
        },
        isCampaignAppearedSince(e, t) {
            const a = t.app && 1e3 * t.app;
            return this.log("ts", a, e), a && a > e
        },
        getCampaignIdsFrom: e => e && e.ca ? Object.keys(e.ca) : [],
        isIrrelevantType(e, t) {
            var a, i;
            const n = null == (a = OptiMonkRegistry.variantsTypeByCampaign) || null == (i = a[e]) ? void 0 : i[t];
            return n === k || n === V || n === I
        },
        filterAppearedCampaings(e, t) {
            if (!t) return [];
            const a = this.getCampaignIdsFrom(t),
                i = [];
            for (let n = 0; n < a.length; n++) {
                const o = a[n],
                    r = t.ca[o];
                this.isCampaignAppearedSince(e, r) && !this.isIrrelevantType(o, r.cr) && i.push(o)
            }
            return i
        },
        getQueuedCampaigns() {
            const e = [];
            return [A, P].forEach((t => {
                const a = OptiMonkRegistry.queuedCampaigns[t];
                a && e.push(a.getId())
            })), e
        },
        collectRelevantCampaigns(e) {
            const a = t.getCookie(),
                i = !!a && a[OptiMonkRegistry.account];
            return [...this.filterAppearedCampaings(e, i), ...this.getQueuedCampaigns()]
        },
        validate(e) {
            if (!e) return this.log("no setting"), !0;
            const {
                count: t
            } = e, a = this.convertSettingToTimestamp(e);
            this.log("check campaigns appearance rate from '" + new Date(a) + "' with " + t + " count");
            const i = this.collectRelevantCampaigns(a);
            this.log(i.length + " campaigns appeared since '" + new Date(a) + "'");
            const n = i.length < t;
            return this.log("is campaigns' appearance rate below " + t + " in " + e.inTime + " " + e.timeUnit + ":", n), n
        },
        log() {
            if (this.debug) {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                console.log("[VALIDATOR:GFC]", ...t)
            }
        }
    },
    E = {
        validate(t, a) {
            var i, n, o, r;
            if (a.type === e.click) return !0;
            const l = null != (i = null == t || null == (n = t.frequency) ? void 0 : n.maximumTime) ? i : null == t || null == (o = t.rules) || null == (r = o.maximumPopupDisplay) ? void 0 : r.value,
                s = parseInt(null != l ? l : 0, 10);
            if (0 === s) return !0;
            return t.cookie.getNumberOfDisplays() < s
        }
    },
    F = s,
    D = {
        validate(t, a) {
            const i = this.isFilled(t);
            switch (a.type) {
                case e.click:
                    return !0;
                default:
                    return !1 === i
            }
        },
        isFilled(e) {
            const t = e.getState();
            return t === F.STATE_CLOSED || t === F.STATE_FILLED
        }
    },
    R = {
        validate(e) {
            const t = e.getProducts();
            if (!e.getId()) return !1;
            const a = t.every((e => e.isReadyToDisplay()));
            return a || n(document.querySelector("html"), "optimonk#campaign-product-validator-failed", {
                campaign: e
            }), a
        }
    },
    x = {
        validate(e) {
            const t = e.getFrontendType();
            return !1 === OptiMonkRegistry.queuedCampaigns[t]
        }
    },
    j = {
        validate: e => e.getShowable()
    },
    M = {
        _getSPPOVariables(e) {
            const t = [];
            return e.forEach((e => {
                const a = e.slice(0, -2).slice(2).split(":");
                2 === a.length && (a.shift(), t.push(a.join(""))), a.shift(), a.pop(), a.length > 0 && t.push(a.join(""))
            })), t
        },
        _hasSPPOValues(e) {
            const t = o.local.getItem("OptiMonkVisitorAttributes");
            return e.every((e => {
                const a = t["" + r.PPO + e] || t[e];
                return a || l("SmartProductTagValidator - not valid: SPPO attribute: " + e + " missing value"), a
            }))
        },
        validate(e) {
            const t = e.getSmartProductTags();
            if (!t.length) return !0;
            const a = this._getSPPOVariables(t);
            return !!this._hasSPPOValues(a)
        }
    },
    B = {
        validate: e => !e.hasCampaignSubscriberRule() || g.getResult("subscribers", parseInt(e.getId(), 10))
    },
    U = {
        validate(e) {
            var a;
            const i = null == e || null == (a = e.rules) ? void 0 : a.timeBasedActualPage;
            if (!i) return !0;
            const n = t.getCookie()[window.OptiMonkRegistry.account].lv;
            return t.getTime() >= n + i
        }
    },
    L = {
        validate(e) {
            if (void 0 === e.cookie.getTimeUntilAvailable() || null === e.cookie.getTimeUntilAvailable()) return !0;
            return e.cookie.getTimeUntilAvailable() < t.getTime()
        }
    },
    N = {
        validate(a, i) {
            if (void 0 === a.cookie.getAppearance() || !a.cookie.getNumberOfDisplays()) return !0;
            if (i.type === e.click) return !0;
            if ((null == a.isPermanentTeaser || !a.isPermanentTeaser()) && !0 === (null == a.isTeaserShowing ? void 0 : a.isTeaserShowing())) return !0;
            const {
                displayValue: n,
                displayDelay: o
            } = m(a);
            return a.cookie.getAppearance() + (1 === n ? 0 : o) <= t.getTime()
        }
    },
    _ = {
        ActivatedValidator: {
            type: "activated",
            validate(e, t) {
                let {
                    event: a
                } = t;
                return h.validate(e, a)
            }
        },
        ABlockValidator: {
            type: "aBlock",
            validate: e => y.validate(e)
        },
        AssetsLoadedValidator: {
            type: "assetsLoaded",
            validate: e => w.validate(e.getId())
        },
        CampaignProgressStateValidator: S,
        CountdownValidator: {
            type: "countdown",
            validate: e => f.validate(e)
        },
        CouponExpiryValidator: {
            type: "couponExpiryValidator",
            validate(e) {
                var t;
                const a = null == (t = e.coupons) ? void 0 : t.filter((e => (e => e.settings.absoluteExpiryTime && Date.now() / 1e3 > e.settings.absoluteExpiryTime)(e)));
                return !(null != a && a.length)
            }
        },
        CouponValidator: {
            type: "coupon",
            validate: e => C.validate(e)
        },
        CurrentlyActiveValidator: {
            type: "currentlyActive",
            validate: e => b.validate(e)
        },
        ExperienceRuleValidator: c,
        FollowupCouponValidator: u,
        GlobalFrequencyCapValidator: {
            type: "globalFrequencyCap",
            validator: O,
            jfBlockEventSent: [],
            canShowWithoutValidation(t, a, i) {
                var n;
                const o = a.type === e.click,
                    r = null == t.isTeaserShowing ? void 0 : t.isTeaserShowing(),
                    l = null == i || null == (n = i.limitlessCampaignIds) ? void 0 : n.includes(t.getId()),
                    s = t.frontendType === k,
                    d = t.type === V;
                return l || o || r || s || d
            },
            validate(e, t) {
                let {
                    event: a
                } = t;
                const n = window.OptiMonk.getExperimentalSetting("GlobalFrequencyCap");
                this.validator.debug = window.location.search.includes("OMDebug") && window.location.search.includes("GFC");
                const o = this.canShowWithoutValidation(e, a, n) || this.validator.isFollowup(e) || this.validator.validate(n);
                if (!o) {
                    const t = e.getId();
                    this.jfBlockEventSent.includes(t) || (i("UEPBlocked", {
                        campaignId: t,
                        accountId: OptiMonkRegistry.account,
                        url: window.location.href
                    }), this.jfBlockEventSent.push(t))
                }
                return o
            }
        },
        MaximumPopupDisplayValidator: {
            type: "maximumPopupDisplay",
            validate(e, t) {
                let {
                    event: a
                } = t;
                return E.validate(e, a)
            }
        },
        NanobarFilledValidator: {
            type: "nanobarFilled",
            validate(e, t) {
                let {
                    event: a
                } = t;
                return D.validate(e, a)
            }
        },
        ProductValidator: {
            type: "product",
            validate: e => !e.isProductsConnectedToShop() || R.validate(e)
        },
        QueuedCampaignTypeValidator: {
            type: "queuedCampaignType",
            validate: e => x.validate(e)
        },
        ShowableValidator: {
            type: "showable",
            validate: e => j.validate(e)
        },
        SmartProductTagValidator: {
            type: "smartProductTagValidator",
            validate: e => M.validate(e)
        },
        SubscriberValidator: {
            type: "subscribers",
            validate: e => B.validate(e)
        },
        TimeBasedActualPageValidator: {
            type: "timeBasedActualPage",
            validate: e => U.validate(e)
        },
        TimeUntilAvailableValidator: {
            type: "timeUntilAvailable",
            validate: e => L.validate(e)
        },
        TimeUntilNextAppearanceValidator: {
            type: "timeUntilNextAppearance",
            validate(e, t) {
                let {
                    event: a
                } = t;
                return N.validate(e, a)
            }
        },
        ViewedPageValidator: v,
        VisitorInKlaviyoSegmentsOrListsValidator: {
            type: "visitorInKlaviyoSegmentsOrLists",
            validate: e => !e.rules.klaviyoSegment || g.getResult("klaviyoSegment", parseInt(e.getId(), 10))
        }
    };
export {
    _ as Popup
};