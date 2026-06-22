import {
    O as e,
    aw as t,
    ar as n,
    C as a,
    ax as s,
    I as i,
    ay as o,
    f as r,
    q as c,
    az as l
} from "./embedded.25b1c29f.js";
import {
    C as m
} from "./Cart-f4cc4a37.js";
const h = e => Object.keys(e).map((function(t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
    })).join("&"),
    d = e => {
        const t = {};
        if (!e.length) return t;
        const n = e.substring(1).split("&");
        return n.length && n.forEach((e => {
            const n = e.split("=");
            t[n[0]] = n[1] || n[0]
        })), t
    };
class u {
    handle(e) {}
}
const p = {
    handlers: new n,
    get: e => p.handlers.get(e) || new u
};
p.handlers.set("resize", new class {
    handle(t) {
        const n = t.parameters,
            a = e.campaigns[n.campaignId];
        a.isCurrentlyActive() && a.resizeCampaignIFrame(n.width, n.height)
    }
}), p.handlers.set("minimize", new class {
    handle(t) {
        const n = t.parameters;
        e.campaigns[n.campaignId].minimize(n)
    }
}), p.handlers.set("restoreMinimized", new class {
    handle(t) {
        const n = t.parameters;
        e.campaigns[n.campaignId].restoreMinimized()
    }
}), p.handlers.set("close_campaign_popup", new class {
    handle(n) {
        const a = n.parameters.campaignId,
            s = e.campaigns[a];
        s.close() && t(document.querySelector("html"), "optimonk#campaign-close", {
            campaign: s,
            type: n.parameters.type
        })
    }
}), p.handlers.set("filled", new class {
    handle(n) {
        const a = n.parameters.campaignId,
            s = document.querySelector("html");
        t(s, "optimonk#campaign-before_mark_filled", {
            campaignId: a
        }), e.Cookie.CampaignCookieCollection.getByCampaignId(a).setFilled(), t(s, "optimonk#campaign-after_mark_filled", {
            campaignId: a
        })
    }
}), p.handlers.set("conversion", new class {
    handle(e) {
        const n = e.parameters;
        t(document.querySelector("html"), "optimonk#campaign-conversion", {
            campaignId: n.campaignId,
            recommend: n.recommend,
            elementDetails: n.elementDetails
        })
    }
}), p.handlers.set("redirect", new class {
    handle(e) {
        window.location.href = e.parameters.url
    }
}), p.handlers.set("analyticsReport", new class {
    handle(e) {
        const n = e.parameters.campaignId,
            a = e.parameters.type;
        t(document.querySelector("html"), "optimonk#campaign-analytics-report", {
            campaignId: n,
            type: a
        })
    }
}), p.handlers.set("event", new class {
    handle(e) {
        const n = e.parameters,
            a = n.event;
        delete n.event, t(document.getElementsByTagName("html")[0], a, n)
    }
}), p.handlers.set("ajax_request", new class {
    handle(t) {
        const n = t.parameters.config,
            a = this.createHandler(t);
        "POST" === n.method && e.ajax.post(n.query, n.url, (function(e) {
            a.handle(e)
        }))
    }
    createHandler(t) {
        return {
            message: t,
            handle(t) {
                e.send("ajax_response", {
                    request: this.message.parameters,
                    response: t
                }, this.message.parameters.campaignId)
            }
        }
    }
}), p.handlers.set("function_execution", new class {
    handle(t) {
        const n = function(n) {
            e.send("function_execution_response", {
                response: n
            }, t.parameters.campaignId)
        };
        new Function(t.parameters.functionParam, t.parameters.functionBody)(n), t.parameters.functionParam || n()
    }
}), p.handlers.set("error", new class {
    handle(t) {
        const n = t.parameters.type;
        delete t.parameters.type, "exception" === n || "closing_x" === n ? (e.ErrorReporter.sendException(n, t.parameters), hasError = !0, e.ErrorReporter.closeCampaigns()) : e.ErrorReporter.sendEventError("popup_event", t.parameters)
    }
});
const g = {
    attribute: "data-ddtr-element",
    patterns: {
        cartValueCountdown: "(cartValueCountdown):([0-9.]+)"
    },
    convertSmartTagToDDTR(e) {
        [...e.querySelectorAll(".smart-tag")].forEach((e => {
            const t = null == e ? void 0 : e.getAttribute("replaced");
            e && !t && (e.innerHTML = e.getAttribute("data-smart-tag"), e.setAttribute("replaced", 1), e.removeAttribute("data-smart-tag"))
        }))
    },
    initElement(e) {
        let t = e.innerHTML;
        Object.values(this.patterns).forEach((e => {
            const n = new RegExp("\\[\\[" + e + "]]", "gmi");
            let a;
            for (; null !== (a = n.exec(t));) {
                n.lastIndex = 0;
                const e = a[1] + ":" + a[2],
                    s = this.buildSpan("", e);
                t = t.replace(a[0], s.outerHTML)
            }
        })), e.innerHTML !== t && (e.innerHTML = t)
    },
    replaceBuilt(e, t) {
        t.querySelectorAll("span[" + this.attribute + "]").forEach((t => {
            let n = null;
            Object.values(this.patterns).forEach((a => {
                const s = new RegExp(a),
                    i = t.attributes[this.attribute].value,
                    o = s.exec(i);
                if (o) {
                    const a = o[1];
                    if (n = n || t.innerHTML, "cartValueCountdown" === a && (n = this.getCartCountDownValue(o[2]), 0 === n)) {
                        const n = t.closest("[data-om-step]"),
                            a = parseInt(n.attributes["data-om-step"].value, 10);
                        e.showStep(a + 1)
                    }
                }
            })), n && (t.innerHTML = n)
        }))
    },
    buildSpan(e, t) {
        const n = document.createElement("span");
        return n.innerHTML = e, n.setAttribute(this.attribute, t), n
    },
    getCartCountDownValue(e) {
        const t = isNaN(m.totalLinePrice()) ? m.total() : m.totalLinePrice(),
            n = parseFloat(e - t);
        if (n <= 0) return 0;
        const a = -1 !== (navigator.language || navigator.userLanguage).indexOf("hu") ? "hu" : "en";
        return "hu" === a ? Math.ceil(n).toFixed(0).toLocaleString(a) : n.toLocaleString(a)
    },
    initListener(e, t) {
        var n, a, s;
        n = document.querySelector("html"), a = "optimonk#cart-update", s = () => {
            this.replaceBuilt(e, t)
        }, n.addEventListener ? n.addEventListener(a, s, !1) : n.attachEvent ? n.attachEvent("on" + a, (function() {
            s.apply(n, new Array(window.event))
        })) : n["on" + a] = s
    },
    replace(e, t) {
        const n = t.querySelectorAll(".om-dtr-content");
        n && 0 !== n.length && n.forEach((t => {
            this.convertSmartTagToDDTR(t), this.initElement(t), this.replaceBuilt(e, t), this.initListener(e, t)
        }))
    },
    init(e, t) {
        t.length > 0 ? t.forEach((t => {
            this.replace(e, t)
        })) : void 0 === t.length && this.replace(e, t)
    }
};
class f {
    constructor(e, t) {
        this.running = !1, this.initData = {
            date: "",
            secs: 0
        }, this.unitNames = e.getUnitNames(), this.alwaysShowSeconds = e.getAlwaysShowSeconds(), this.countDownDom = e, this.campaign = t, this.init(), this.initListeners()
    }
    init() {
        this.initData.date = this.countDownDom.getDate(), this.initData.secs = this.countDownDom.getSecs();
        const e = this.readCookie();
        null !== e && (this.initData.secs = e), this.countDownDom.setInitialClasses(), this.countDownDom.removeInitialAttributes()
    }
    cookieKey() {
        return "countDownStarted_" + this.countDownDom.getAttribute("id")
    }
    readCookie() {
        const e = this.cookieKey(),
            t = e + "_remaining";
        let n = a.local.getItem(e),
            s = a.local.getItem(t);
        if (!n || !s) return null;
        n = Number(n), s = Number(s);
        const i = s - Math.round((Date.now() - n) / 1e3);
        return i <= 0 ? (a.local.removeItem(e), a.local.removeItem(t), null) : i
    }
    calculateDiff() {
        let e = new Date;
        this.initData.date ? e = new Date(this.initData.date) : this.initData.secs && e.setTime(e.getTime() + 1e3 * this.initData.secs), this.diff = Math.round((e.valueOf() - (new Date).valueOf()) / 1e3)
    }
    isOnVisibleStep() {
        const e = this.countDownDom.element.closest("[data-om-step]");
        return !e || e.classList.contains("actual")
    }
    initListeners() {
        const e = this,
            t = function() {
                e.calculateDiff(), e.templating(), e.diff > 0 ? e.start() : (e.diff = 0, e.templating(), e.stop())
            },
            n = function(n) {
                n && n.parameters.campaignId !== e.campaign.getId() || e.isOnVisibleStep() && t()
            },
            a = function(n) {
                n.parameters.campaignId === e.campaign.getId() && !e.running && e.isOnVisibleStep() && t()
            };
        s(this.countDownDom.getHTML(), o, n), s(this.countDownDom.getHTML(), r, n), s(this.countDownDom.getHTML(), c, a), s(this.countDownDom.getHTML(), l, a), "embedded" === this.campaign.type && n(!1)
    }
    templating() {
        for (; this.countDownDom.getFirstChild();) this.countDownDom.removeChild();
        f.calculateUnits(this.diff).forEach(((e, t, n) => {
            if (f.needToShowUnit(e, t, n, this.alwaysShowSeconds)) {
                const a = !!this.unitNames && this.unitNames[t];
                this.countDownDom.appendChild(this.countDownDom.buildUnitColumn(a, e, t)), t < 3 && f.needToShowUnit(n[t + 1], t + 1, n, this.alwaysShowSeconds) && this.countDownDom.appendChild(this.countDownDom.buildSeparatorColumn(!!a))
            }
        }))
    }
    static needToShowUnit(e, t, n, a) {
        return void 0 === a && (a = !1), !(0 === t && e < 1) && (!(1 === t && !e && n[0] < 1) && (!(2 === t && !e && n[0] < 1 && n[1] < 1) && !(3 === t && n[0] >= 1 && !a)))
    }
    static calculateUnits(e) {
        const t = Math.floor(e / 86400);
        e -= 86400 * t;
        const n = Math.floor(e / 3600) % 24;
        e -= 3600 * n;
        const a = Math.floor(e / 60) % 60;
        return [t, n, a, (e -= 60 * a) % 60]
    }
    countDown() {
        this.templating();
        const e = this.diff + 60;
        a.local.setItem(this.cookieKey(), Date.now(), e), a.local.setItem(this.cookieKey() + "_remaining", this.diff, e), --this.diff <= -1 && this.stop()
    }
    stop() {
        clearInterval(this.intervalId), a.local.removeItem(this.cookieKey()), a.local.removeItem(this.cookieKey() + "_remaining"), this.campaign.type === i && setTimeout((() => this.campaign.close()), 0)
    }
    start() {
        if (this.running) return;
        const e = this;
        this.running = !0, this.diff -= 1, this.intervalId = window.setInterval((function() {
            e.countDown()
        }), 999)
    }
}
var w = Object.freeze({
    __proto__: null,
    CountDown: f
});
export {
    f as C, g as D, p as M, w as a, d as q, h as u
};