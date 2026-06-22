const e = {
        isApple: /Apple\ Computer/.test(navigator.vendor)
    },
    r = {
        isSafari: /Safari/.test(navigator.userAgent) && e.isApple,
        isIE: window.navigator.userAgent.indexOf("MSIE ") > 0 || !!window.navigator.userAgent.match(/Trident.*rv\:11\./),
        isFirefox: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
        isChrome: navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && navigator.vendor.indexOf("Google Inc") > -1 && -1 === navigator.userAgent.indexOf("OPR") && -1 === navigator.userAgent.indexOf("SamsungBrowser") && -1 === navigator.userAgent.toLowerCase().indexOf("miui")
    },
    a = () => {
        const e = navigator.userAgent;
        let r, a = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(a[1]) ? (r = /\brv[ :]+(\d+)/g.exec(e) || [], {
            name: "IE",
            version: r[1] || ""
        }) : "Chrome" === a[1] && (r = e.match(/\bOPR|Edge\/(\d+)/), null != r) ? {
            name: "Opera",
            version: r[1]
        } : (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], r = e.match(/version\/(\d+)/i), null != r && a.splice(1, 1, r[1]), {
            name: a[0],
            version: a[1]
        })
    },
    t = {
        isIphone: /iPhone/.test(navigator.platform),
        isIpad: /iPad/.test(navigator.platform),
        isIpod: /iPod/.test(navigator.platform)
    };
var i = Object.freeze({
    __proto__: null,
    vendor: e,
    browser: r,
    browserWithVersion: a,
    platform: t
});
export {
    a as b, i as d, t as p
};