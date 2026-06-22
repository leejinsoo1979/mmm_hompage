import {
    aD as t,
    O as e,
    ao as i
} from "./embedded.25b1c29f.js";
import {
    I as a
} from "./IndexedDataSetValidator-39cb7bf9.js";
import {
    i as s,
    c as n,
    m as l,
    J as r
} from "./JFRuleEvaluator-9644a583.js";
const o = {
        ABlockExternalValidator: class {
            constructor() {
                this.detected = !1, this.validating = !1, this.scriptTag = null, this.loaded = !1, this.initialized = !1, this.handleInit = this.handleInit.bind(this);
                const [e, i] = t();
                this.isReady = e, this.isReadyResolved = !1, this.setIsReady = i
            }
            charMap(t) {
                return t.map((t => "psjxdhtl9cy7au.f3rmzvgobqe1wi2nk".charAt(t))).join("")
            }
            handleInit(t) {
                const e = t.parameters.elementId,
                    i = this;
                if (this.loaded = !0, this.initialized = !0, e) {
                    const t = document.getElementById(e);
                    t ? this.checkElement(t) : this.checkerInterval || (this.checkerInterval = setInterval((function(t) {
                        const e = document.getElementById(t);
                        e && (i.checkElement(e), clearInterval(i.checkerInterval))
                    }), 500))
                }
            }
            checkElement(t) {
                if (t) {
                    const e = t.getBoundingClientRect();
                    !e || 1 === e.width && 1 === e.height ? this.setDetected(!1) : this.setDetected(!0), t.remove()
                } else this.setDetected(!0);
                this.cleanUp()
            }
            cleanUp() {
                clearTimeout(this.finalTimeout), clearInterval(this.checkerInterval), e.removeListener(document.querySelector("html"), "optimonk#ablock-initialized", this.handleInit), this.scriptTag && this.scriptTag.remove(), this.scriptTag = null, this.validating = !1
            }
            setDetected(t) {
                this.detected = t, OptiMonkRegistry.externalValidators.aBlock = t, !0 !== this.isReadyResolved && (this.setIsReady(!0), this.isReadyResolved = !0)
            }
            isDetected() {
                return this.detected
            }
            init() {
                if (this.validating) return;
                const t = this;
                let i;
                this.validating = !0, e.addListener(document.querySelector("html"), "optimonk#ablock-initialized", this.handleInit), this.scriptTag = document.createElement("script"), this.scriptTag.onload = function() {
                    t.loaded = !0
                }, this.scriptTag.onerror = function(e) {
                    Date.now() - i < 80 && (t.setDetected(!0), t.cleanUp())
                }, this.scriptTag.src = OptiMonkRegistry.baseUrl + "/" + this.charMap([0, 17, 25, 23, 28, 4, 14]) + OptiMonkRegistry.assetsVersion + ".js", this.loaded = !1, this.initialized = !1, document.querySelector("body").appendChild(this.scriptTag), i = Date.now(), this.finalTimeout = setTimeout((function() {
                    t.setDetected(!1), !t.scriptTag || t.loaded && t.initialized || t.setDetected(!0), t.cleanUp()
                }), 3e3)
            }
        }
    },
    d = {
        validators: {},
        init(t) {
            Object.keys(t).forEach((t => {
                d.initValidator(t)
            }))
        },
        async areValidatorsReady() {
            const t = Object.values(this.validators).map((async t => t.isReady));
            return await Promise.all(t), !0
        },
        initValidator(t) {
            if (d.validators[t]) return d.validators[t];
            let e;
            switch (t) {
                case "aBlock":
                    e = new o.ABlockExternalValidator;
                    break;
                default:
                    return null
            }
            return d.validators[t] = e, d.validators[t].init(), e
        }
    },
    c = {
        validate(t) {
            var e;
            if (!t.hasCampaignViewedPageRule()) return !0;
            const i = null == (e = t.rules) ? void 0 : e.viewedPage;
            if (!s(i) && n(i)) {
                const t = l(i);
                return h.validateRule(t)
            }
            if (!(!!i.expressions || !!i.includeExpressions || !!i.excludeExpressions)) return h.validateRule(i);
            return !1 !== r.getResult("viewedPage", t.campaignId)
        }
    },
    h = {
        type: "viewedPage",
        validate: t => c.validate(t),
        validateRule(t) {
            const e = new a(["notEquals", "notContains", "notStartsWith", "notEndsWith", "notMatchRegex"], ["equals", "contains", "startsWith", "endsWith", "matchRegex"]),
                s = window.location.pathname + window.location.search + window.location.hash;
            let n;
            try {
                n = decodeURIComponent(s)
            } catch (t) {
                n = s
            }
            return OptiMonkRegistry.isMobile && (n = n.replace("#om", "")), e.validate(t, (function(t, e) {
                let a;
                try {
                    a = decodeURIComponent(e.value.trim())
                } catch (t) {
                    a = e.value.trim()
                }
                return i[t](n, a)
            }))
        }
    };
export {
    d as E, h as V, o as a
};