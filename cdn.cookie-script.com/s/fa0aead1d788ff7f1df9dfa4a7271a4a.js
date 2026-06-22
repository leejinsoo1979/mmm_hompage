/*@cc_on;document.querySelectorAll||(document.querySelectorAll=function(e){var o,t=document.createElement('style'),i=[];for(document.documentElement.firstChild.appendChild(t),document._qsa=[],t.styleSheet.cssText=e+'{x-qsa:expression(document._qsa && document._qsa.push(this))}',window.scrollBy(0,0),t.parentNode.removeChild(t);document._qsa.length;)(o=document._qsa.shift()).style.removeAttribute('x-qsa'),i.push(o);return document._qsa=null,i}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null});@*/ ! function() {
    var t = function(e) {
            return e.replace(/^\s+|\s+$/g, '')
        },
        o = function(e) {
            return new RegExp('(^|\\s+)' + e + '(\\s+|$)')
        },
        i = function(e, t, o) {
            for (var i = 0; i < e.length; i++) t.call(o, e[i])
        };

    function e(e) {
        this.element = e
    };
    e.prototype = {
        add: function() {
            i(arguments, function(e) {
                this.contains(e) || (this.element.className = t(this.element.className + ' ' + e))
            }, this)
        },
        remove: function() {
            i(arguments, function(e) {
                this.element.className = t(this.element.className.replace(o(e), ' '))
            }, this)
        },
        toggle: function(e) {
            return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0)
        },
        contains: function(e) {
            return o(e).test(this.element.className)
        },
        item: function(e) {
            return this.element.className.split(/\s+/)[e] || null
        },
        replace: function(e, t) {
            this.remove(e), this.add(t)
        }
    }, 'classList' in Element.prototype || Object.defineProperty(Element.prototype, 'classList', {
        get: function() {
            return new e(this)
        }
    }), window.DOMTokenList && !DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = e.prototype.replace)
}();
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    'use strict';
    var o;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
        n = c.length >>> 0;
    if (0 === n) return -1;
    var i = 0 | t;
    if (i >= n) return -1;
    for (o = Math.max(i >= 0 ? i : n - Math.abs(i), 0); o < n; o++)
        if (o in c && c[o] === e) return o;
    return -1
});
if (!window.CookieScriptData) {
    window.CookieScriptData = {
        enabledConsentMode: !1,
        useGoogleTemplate: !1,
        correctGoogleTemplateTrigger: !1,
        gtagRequiredCategory: null,
        gtagCorrectOrder: null,
        gtagDefaultConsent: null,
        isVerifyGoogleConsentMode: !1
    }
};
if (!(!!window.CookieScript && !!window.CookieScript.instance)) {
    window.CookieScript = function() {
        this.version = 20260210;
        this.initTime = null;
        this.saveTime = '2026-04-24 07:39:43';
        this.consentTime = 1732286730;
        this.onAcceptAll = function() {};
        this.onAccept = function() {};
        this.onReject = function() {};
        this.onClose = function() {};
        var k = {
            core: null,
            other: null
        };

        function Oo(e) {
            if (typeof e === 'function') {
                k.other = e
            } else if (typeof e === 'object') {
                if (e.core) {
                    k.core = e.fn
                }
            }
        };
        Object.defineProperties(this, {
            onChangeIABCategoryMap: {
                set: Oo,
                enumerable: !1,
                configurable: !1
            },
        });

        function ni(e) {
            if (k.core && typeof k.core === 'function') {
                k.core(e)
            };
            if (k.other && typeof k.other === 'function') {
                k.other(e)
            }
        };
        this.currentState = function() {
            var e = {
                action: s('action')
            };
            var t = s('key');
            if (t) {
                e.key = t
            };
            e.categories = O();
            return e
        };
        this.expireDays = function() {
            return lt
        };
        this.hash = function() {
            return he
        };
        this.show = function() {
            E()
        };
        this.hide = function() {
            L();
            S()
        };
        this.showDetails = function() {
            if (!Q) {
                Ce();
                Ae()
            };
            setTimeout(function() {
                gt()
            }, 450)
        };
        this.categories = function() {
            return c
        };
        this.getCookieValueForQueryArg = function() {
            var e = y(),
                t = o.get(e);
            if (t) {
                return e + '=' + encodeURIComponent(t)
            };
            return ''
        };
        this.dispatchEventNames = [];
        this.currentLang = null;
        this.iabCMP = null;
        this.tcString = undefined;
        this.googleAcString = undefined;
        this.getCMPId = function() {
            return Number(zo)
        };
        this.getIABSdkUrl = function() {
            return Lo
        };
        this.getIABVendorsIds = function() {
            return So
        };
        this.getGoogleVendorsIds = function() {
            return Ao
        };
        this.getIABLegIntPurposes = function() {
            return Fo
        };
        this.getLanguagesKeys = function() {
            var e = ['en', 'it', 'es', 'fr', 'nl'];
            e = e ? e : [];
            e.push(F);
            return e
        };
        this.iabDisabledGdprAppliesStatus = function() {
            return Boolean()
        };
        this.isCheckedIABCategoryMap = function() {
            return !1
        };
        this.IABEnableAdvertiserConsentMode = function() {
            return !1
        };
        this.IABEnabledIgnoreDecline = Boolean();
        this.getIABText = function() {
            return Go
        };
        this.getIABTextTranslations = function() {
            return Do
        };
        this.showIABSpecificTab = function(e) {
            return !1
        };
        this.setCMPCookie = function(e) {
            this.tcString = e;
            Ve('CMP', e)
        };
        this.getCMPCookie = function() {
            var e = Qe('CMP');
            if (e === undefined) {
                e = s('CMP')
            };
            this.tcString = e;
            return e
        };
        this.setGoogleACStringCookie = function(e) {
            this.googleAcString = e;
            Ve('GoogleACString', e)
        };
        this.getGoogleACStringCookie = function() {
            var e = Qe('GoogleACString');
            if (e === undefined) {
                e = s('GoogleACString')
            };
            this.googleAcString = e;
            return e
        };
        this.getGeoTargeting = function() {
            if (m.indexOf('geo.cookie-script.com') > 0) {
                var e = {};
                m = m.indexOf('//') === 0 ? 'https:' + m : m;
                var t = new URL(m);
                t.searchParams.forEach(function(t, o) {
                    e[o] = t.split('-')
                });
                return e
            };
            return null
        };
        this.isCdn = function() {
            return m.indexOf('cookie-script.com') > 0
        };
        this.forceDispatchCSLoadEvent = function() {
            a('CookieScriptLoaded')
        };
        this.applyTranslation = function(e) {
            D(e)
        };
        this.applyCurrentCookiesState = function() {
            ie()
        };
        this.applyTranslationByCode = function(e, t) {
            G(e, t)
        };
        this.acceptAllAction = function() {
            Y(!0);
            L();
            setTimeout(function() {
                mt()
            }, 100)
        };
        this.acceptAction = function(e, t) {
            var o;
            if (typeof e === 'undefined') {
                o = De();
                ee(o)
            } else {
                if (fe) {
                    e.push('strict')
                };
                o = x(e);
                if (t === 'undefined') {
                    K(o)
                }
            };
            L();
            setTimeout(function() {
                kt(o, t)
            }, 100)
        };
        this.rejectAllAction = function() {
            Y(!1);
            ee([]);
            L();
            setTimeout(function() {
                ht()
            }, 100)
        };
        this.demoLoadView = function() {
            u('Warning is real site script')
        };
        var t = this,
            m = null,
            Io = '\n    <style data-type="cookiescriptstyles">\n      #cookiescript_injected {\r\n    background-color: #ffffff;\r\n    z-index: 999997;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\r\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\r\n    color: #000000;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.cookiescript_overlay {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n}\r\n\r\n.cookiescript_checkbox_label {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:0 4px;\r\n    line-height: 1.5;\r\n    margin:0;\r\n\ttext-align: left;\r\n}\r\n.cookiescript_pre_header {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-start;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n}\r\n\/*\r\n.cookiescript_pre_header.cookiescript_with_logo {\r\n    position: initial;\r\n    width: 100%;\r\n    border-bottom: 1px solid #353535;\r\n    margin-bottom: 8px;\r\n    padding-bottom: 12px;\r\n}*\/\r\n\r\n#cookiescript_close {\r\n    font-size: 29px;\r\n    line-height: 13px;\r\n    cursor: pointer;\r\n    color: #000000;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    letter-spacing: 0;\r\n    font-family: \'Trebuchet MS\', \'Arial\', sans-serif;\r\n    font-weight: 100;\r\n    opacity: 0.85;\r\n    z-index: 999999;\r\n    position: relative;\r\n    top: -1px;\r\n}\r\n\r\n#cookiescript_buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-weight: 700;\r\n}\r\n#cookiescript_manage_wrap {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    letter-spacing: 0.4px;\r\n    font-weight: 700;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n#cookiescript_manage {\r\n    display: inline;\r\n    cursor: pointer;\r\n    color: #000000;\r\n    opacity:0.85;\r\n    margin-left:-15px;\r\n}\r\n#cookiescript_manage #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #000000;\r\n}\r\n#cookiescript_manage:hover #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #6bbe6b;\r\n}\r\n\r\nsvg#cookiescript_manageicon {\r\n    width: 15px;\r\n    height: 15px;\r\n    display: inline;\r\n    margin: 0 5px 0 0;\r\n    padding: 0;\r\n    position: relative;\r\n    top: 3px;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.cookiescript-extra-links{\r\n    margin-bottom: 10px;\r\n    padding-top: 5px;\r\n}\r\n#cookiescript_injected.hascookiereport .cookiescript-extra-links{\r\n    display:none;\r\n}\r\n.cookiescript-extra-links a{\r\n    color: #444444;\r\n    border: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    margin: 0 15px;\r\n    transition: all 100ms ease 0s;\r\n    background-color: transparent;\r\n    font-size: 13px;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: inline-block;\r\n}\r\n.cookiescript-extra-links a:hover{\r\n    color: #63af63;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n#cookiescript_header {\r\n    background-color: transparent;\r\n    z-index: 999998;\r\n    color: #000000;\r\n    font-size: 18px;\r\n    line-height: 1.3;\r\n    font-weight: 600;\r\n    letter-spacing: 0.4px;\r\n    opacity:1;\r\n}\r\n.cookiescript_checkbox {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\ninput.cookiescript_checkbox_input {\r\n}\r\nspan.cookiescript_checkbox_text {\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #000000;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n#cookiescript_save {\r\n    border: 0;\r\n    transition: all 0.25s ease 0s;\r\n    background-color: #6bbe6b;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    line-height: 3.2;\r\n    letter-spacing: 0.4px;\r\n}\r\n\/*IE 9 fixes*\/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n    .cookiescript_checkbox_label {\r\n        position: relative;\r\n        top:-10px;\r\n    }\r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save{\r\n    \tdisplay: inline-block;\r\n    }\r\n    #cookiescript_buttons{\r\n    \ttext-align:center;\r\n    }\r\n}\r\n#cookiescript_save{\r\n    display: none;\r\n}\r\n#cookiescript_reject {\r\n    border: 1px solid #999999;\r\n    text-align: center;\r\n    line-height: 3;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.4px;\r\n    color: #999999;\r\n    background: #eeeeee;\r\n}\r\n#cookiescript_accept {\r\n\ttransition: all 0.25s ease 0s;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n\tletter-spacing: 0.4px;\r\n\tborder: 0;\r\n\tbackground-color: #6bbe6b;\r\n\tcolor: #ffffff;\r\n\tline-height: 3.2;\r\n}\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    transition-duration: 100ms;\r\n    transition-timing-function: ease-in-out;\r\n    min-width: 103px;\r\n}\r\n.cookiescript_bigger {\r\n    transform: scale(1.1);\r\n}\r\n#cookiescript_link {\r\n    text-decoration: none;\r\n    color: #000000;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    opacity: 0.8;\r\n    padding: 2px;\r\n\tdisplay:inline !important;\r\n}\r\n\r\n#cookiescript_readmore,\r\n#cookiescript_reportlink,\r\n#cookiescript_cookiescriptlink {\r\n    border: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    transition: all 100ms ease 0s;\r\n    background-color: transparent;\r\n    display: inline;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n}\r\n\r\n#cookiescript_readmore,\r\n#cookiescript_description a{\r\n    color: #444444;\r\n    cursor: pointer;\r\n}\r\n#cookiescript_reportlink,\r\n#cookiescript_cookiescriptlink {\r\n    color: #000000;\r\n}\r\n\r\n\r\n#cookiescript_readmore:hover,\r\n#cookiescript_reportlink:hover,\r\n#cookiescript_cookiescriptlink:hover,\r\n#cookiescript_description a:hover{\r\n    text-decoration: underline;\r\n    color: #444444;\r\n\r\n}\r\n\r\n#cookiescript_description {\r\n    color: #000000;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n    line-height: 1.65;\r\n    font-weight: 400;\r\n}\r\n#cookiescript_checkboxs {\r\n}\r\n#cookiescript_close:hover,\r\n#cookiescript_manage:hover,\r\n#cookiescript_link:hover\r\n{\r\n    opacity: 1;\r\n}\r\n\r\n#cookiescript_reject:hover {\r\n    background-color: #dbdbdb;\r\n}\r\n\r\n#cookiescript_accept:hover{\r\n\tbackground-color: #63af63;\r\n}\r\n#cookiescript_save:hover {\r\n    background-color: #63af63;\r\n}\r\n\r\n#cookiescript_readmore:hover,\r\n#cookiescript_reportlink:hover,\r\n#cookiescript_cookiescriptlink:hover\r\n{\r\n    color: #63af63;\r\n}\r\n\r\n.cookiescript_globe {\r\n    fill:#1c1c1c;\r\n}\r\n\r\n.cookiescript_header_actions {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n@media print{\r\n    #cookiescript_injected{\r\n        display:none;\r\n    }\r\n}\r\n\r\n\r\n\r\n\n#cookiescript_injected_fsd {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(17, 17, 17, 0.5) !important;\n    z-index: 999996;\n\toverflow-y: auto;\n}\n\n#cookiescript_fsd_wrapper {\n    \/*animation: expandBox 2s forwards;*\/\n    max-width: 950px;\n\twidth: 95%;\n    margin: 0 auto 3% auto;\n\ttop: 5%;\n    line-height: 18px;\n    letter-spacing: normal;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n\tbackground-color: #f3f3f3;\n    z-index: 999997;\n    opacity: 1;\n    font-size: 14px;\n    font-weight: normal;\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\n    color: #4d4d4d;\n    align-items: center;\n    overflow: visible;\n    outline: none;\n    max-height: 90%;\n    box-sizing: border-box;\n\tcursor: default;\n\tmin-height: 500px;\n}\n@keyframes expandBox {\n    from {\n        width: 10%;\n        margin-left:0;\n        overflow: hidden;\n        top:90%;\n        height: 5%;\n    }\n    to {\n        width: 95%;\n        margin-left:auto;\n        overflow: hidden;\n        top:5%;\n        height: 90%;\n    }\n}\n\n.cookiescript_fsd_header {\n\tmin-height: 57px;\n\tborder-bottom: 1px solid #CCC;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tbackground-color: #ffffff;\n}\n.cookiescript_fsd_logo_a{\n\tmargin-left: 23px;\n    text-decoration: none;\n}\n.cookiescript_fsd_logo{\n\theight: 27px;\n\twidth: auto;\n\tdisplay: block;\n\tmax-width: 100%;\n}\n.cookiescript_fsd_powered {\n    color: #666666;\n    font-size: 11px;\n    position: relative;\n    left: 31px;\n    top: 0;\n    line-height: 1;\n    text-decoration: none;\n    display: block;\n    height: 8px;\n}\n\n.cookiescript_fsd_language_drop_down {\n    position: absolute;\n    right: 67px;\n\ttop: 19px;\n}\n\n.cookiescript_fsd_main {\n    width: 100%;\n\tbackground-color: #ffffff;\n}\n\n.cookiescript_fsd_main_info {\n    padding: 20px 53px 30px 53px;\n    }\n\n.cookiescript_fsd_title {\n    background-color: transparent;\n    z-index: 999998;\n    color: #4d4d4d;\n    font-size: 24px;\n    line-height: 1.3;\n    font-weight: 700;\n    opacity:1;\n}\n\n.cookiescript_fsd_description {\n    color: #4d4d4d;\n    font-size: 14px;\n    line-height: 1.6;\n    font-weight: 400;\n\tmargin-top: 9px;\n}\n.cookiescript_fsd_description > span{\n    opacity: 0.85;\n}\n\n#cookiescript_fsd_wrapper .cookiescript-extra-links{\n    margin-top: 10px;\n    padding-top: 0;\n    display: flex;\n    flex-direction: row;\n}\n\n#cookiescript_fsd_wrapper .cookiescript-extra-links a {\n    color: #000000;\n    font-size: 14px;\n    display: block;\n    margin: 0 20px 0 0;\n}\n\n\n#cookiescript_fsd_wrapper #cookiescript_readmore{\n\tfont-size: 14px;\n\tcolor: #000000;\n\ttext-decoration: none;\n}\n\n#cookiescript_fsd_wrapper .cookiescript_fsd_description a {\n    color: #000000;\n    cursor: pointer;\n}\n\n#cookiescript_fsd_wrapper .cookiescript_fsd_description a:hover {\n    text-decoration: underline;\n}\n\n#cookiescript_fsd_wrapper #cookiescript_readmore:hover{\n\ttext-decoration: underline;\n}\n\n.cookiescript_fsd_tabs {\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n\tflex-direction: row;\n    width: 100%;\n}\n\n.cookiescript_fsd_tabs > div {\n\tcursor: pointer;\n\twidth: 50%;\n\ttext-transform: uppercase;\n\tfont-size: 16px;\n\ttext-align: center;\n\tline-height: 1.6;\n\tfont-weight: bold;\n\tborder-top: 2px solid transparent;\n\ttransition: all 300ms ease 0s;\n\tpadding: 10px 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #ffffff;\n}\n\n.cookiescript_fsd_tabs > .cookiescript_active {\n    border-top: 2px solid #000000;\n    background-color: #f3f3f3;\n    color: #000000;\n}\n\n.cookiescript_fsd_tabs_content {\n    background-color: #f3f3f3;\n    padding: 5px 50px 10px 50px;\n    width: 100%;\n    overflow-y: auto;\n    box-sizing: border-box;\n    flex-grow: 1;\n\t--scrollbar-width: 8px;\n\t--mask-height: 35px;\n\t--mask-image-content: linear-gradient( to bottom, transparent, black var(--mask-height), black calc(100% - var(--mask-height)), transparent );\n\t--mask-size-content: calc(100% - var(--scrollbar-width)) 100%;\n\t--mask-image-scrollbar: linear-gradient(black, black);\n\t--mask-size-scrollbar: var(--scrollbar-width) 100%;\n\tmask-image: var(--mask-image-content), var(--mask-image-scrollbar);\n\tmask-size: var(--mask-size-content), var(--mask-size-scrollbar);\n\tmask-position: 0 0, 100% 0;\n\tmask-repeat: no-repeat, no-repeat;\n\t-webkit-mask-image: var(--mask-image-content), var(--mask-image-scrollbar);\n\t-webkit-mask-size: var(--mask-size-content), var(--mask-size-scrollbar);\n\t-webkit-mask-position: 0 0, 100% 0;\n\t-webkit-mask-repeat: no-repeat, no-repeat;\n}\n\n.cookiescript_fsd_tabs_content .cookiescript_hidden {\n    opacity: 0;\n    height: 0 !important;\n    overflow: hidden;\n\tpadding: 0 !important;\n\tmin-height: 0 !important;\n}\n\n.cookiescript_fsd_category {\n    border-bottom: 1px solid #e2e2e2;\n    padding-top: 23px;\n    padding-bottom: 17px;\n    display: flex;\n    flex-direction: column;\n}\n\n.cookiescript_fsd_category:last-child {\n    border-bottom: 0;\n}\n\n.cookiescript_fsd_category .cookiescript_hidden {\n    opacity: 0;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tpadding: 0 !important;\n\tmax-height: 0;\n\tmargin: 0;\n\theight: auto !important;\n\t\ttransition: max-height 300ms ease 200ms, opacity ease 200ms, margin-top 100ms ease 100ms;\n\t}\n\n.cookiescript_fsd_category_main {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    order: 1;\n}\n\n.cookiescript_fsd_category_info {\n    flex: 9;\n    padding-right: 10px;\n}\n\n.cookiescript_fsd_category_control {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}\n\n.cookiescript_fsd__category_name {\n    font-size: 16px;\n    font-weight: 700;\n\tmargin-bottom: 6px;\n}\n\n.cookiescript_category_description {\n\tfont-size: 13px;\n\tpadding-bottom: 5px;\n\tline-height: 1.6;\n}\n\n.cookiescript_fsd_cookies {\n\tborder: 1px solid #e2e2e2;\n\tborder-radius: 10px;\n\toverflow-y: auto;\n\tmargin-top: 15px;\n\tmax-height: 222px;\n    order: 2;\n\t\ttransition: max-height 300ms ease, opacity 200ms ease 300ms, margin-top 100ms ease 100ms;\n\t}\n\n.cookiescript_fsd_cookies caption {\n    font-weight: 600;\n    padding: 10px;\n    text-align: left;\n    color: #4d4d4d;\n    caption-side: top;\n}\n\n\n.cookiescript_fsd_cookies_control {\n    color: #000000;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-right: auto;\n    margin-top: 10px;\n    cursor: pointer;\n    order: 3\n}\n\n.cookiescript_fsd_cookies_control .cookiescript_hidden {\n    display: none;\n}\n\n.cookiescript_fsd_cookies_control  span{\n\tmargin-right: 7px;\n}\n\n.cookiescript_fsd_cookies_control svg {\n    width: 10px;\n    height: 10px;\n    font-size: 10px;\n}\n\n.cookiescript_fsd_cookies_control.active svg {\n    width: 10px;\n    height: 10px;\n    font-size: 10px;\n    transform: rotate(180deg);\n}\n\n.cookiescript_fsd_cookies_table {\n    width: 100%;\n}\n\n.cookiescript_fsd_cookies_table,\n.cookiescript_fsd_cookies_table tbody,\n.cookiescript_fsd_cookies_table thead,\n.cookiescript_fsd_cookies_table tr,\n.cookiescript_fsd_cookies_table th,\n.cookiescript_fsd_cookies_table td {\n    margin: 0;\n    padding: 0;\n    font: inherit;\n    vertical-align: baseline;\n    background-color: #ffffff;\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\n\n.cookiescript_fsd_cookies_table tr:last-child td{\n    border-bottom: 0;\n}\n\n.cookiescript_fsd_cookies_table td, .cookiescript_fsd_cookies_table th {\n    white-space: normal;\n    font-size: 13px;\n    text-align: left;\n    margin: 0;\n}\n.cookiescript_fsd_cookies_table th {\n\tfont-weight: 600;\n\tpadding: 8px 8px;\n\tline-height: 1.4;\n\tword-break: keep-all;\n\tvertical-align: middle;\n}\n\n.cookiescript_fsd_cookies_table td {\n\tpadding: 7px 8px;\n\tline-height: 1.6;\n\tvertical-align: top;\n\tfont-weight: 400;\n\tborder: 0;\n\tborder-top: 1px solid #e2e2e2;\n\tcolor: #4d4d4d;\n}\n\n.cookiescript_fsd_cookies_table th:last-child {\n    padding-right: 10px;\n}\n\n    .cookiescript_fsd_cookies_table td:nth-child(1), .cookiescript_fsd_cookies_table th:nth-child(1) {\n    padding-left: 15px;\n    word-break: normal;\n}\n\n.cookiescript_fsd_cookies_table td:nth-child(2) {\n    color: #000000;\n}\n\n.cookiescript_fsd_cookies_table td:nth-child(3), .cookiescript_fsd_cookies_table th:nth-child(3) {\n    text-align: center;\n}\n\n.cookiescript_fsd_cookies_table.cookiescript_fsd_storage_table td:nth-child(2) {\n     color: #4d4d4d;\n}\n\n.cookiescript_vendor_name a{\n\ttext-decoration: underline;\n\tfont-weight: bold;\n\tcolor: #000000;\n\tline-height: normal;\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tbackground: transparent;\n\tfont-size: 13px;\n}\n.cookiescript_vendor_name a:hover {\n\ttext-decoration: underline;\n\tcolor: #000000;\n}\n.cookiescript_vendor_address {\n    margin-top: 10px;\n    font-style: italic;\n}\n.cookiescript_vendor_address > span {\n    font-weight: 600;\n    font-style: normal;\n}\n\n.cookiescript_fsd_footer {\n    border-top: 1px solid #e2e2e2;\n    width: 100%;\n\tbackground-color: #ffffff;\n    position: relative;\n}\n#cookiescript_fsd_wrapper #cookiescript_declarationwrap{\n\t\ttransition: opacity 200ms ease 0ms, height 0ms ease 200ms;\n\t}\n#cookiescript_fsd_wrapper #cookiescript_aboutwrap{\n\tfont-size: 13px;\n\tpadding: 23px 0;\n\tline-height: 1.6;\n\ttext-align: left;\n\tfont-weight: normal;\n\tbox-sizing: border-box;\n\ttransition: opacity 200ms ease 0ms;\n\toverflow: auto;\n\tmin-height: 181px;\n}\n#cookiescript_fsd_wrapper #cookiescript_aboutwrap a,\n#cookiescript_fsd_wrapper #cookiescript_aboutwrap a:hover{\n    color: #000000;\n    text-decoration: underline;\n}\n\n#cookiescript_setting_advertising_wrap {\n    font-size: 12px;\n}\n.cookiescript_cross_domain{\n    margin-top:10px;\n}\n#cookiescript_iab_type {\n    display: flex;\n    justify-content: center;\n    padding: 20px 0;\n    border-bottom: 1px solid #e2e2e2;\n    flex-wrap: wrap;\n}\n\n#cookiescript_iab_type > div {\n    cursor: pointer;\n    padding: 0 9px;\n    font-size: 11px;\n    font-weight: 600;\n    background: #f5f5f5;\n    color: #4d4d4d;\n    line-height: 2;\n    margin: 3px 5px;\n    white-space: nowrap;\n}\n\n#cookiescript_iab_type .cookiescript_active {\n    background: #000000;\n    color: #FEFEFE;\n}\n\n\n.cookiescript_fsd_cookies::-webkit-scrollbar-track,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar-track {\n    background-color: #DADADA;\n}\n\n.cookiescript_fsd_cookies::-webkit-scrollbar,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n}\n\n.cookiescript_fsd_cookies::-webkit-scrollbar-thumb,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar-thumb {\n    background-color: #333333;\n}\n\n\n\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\n    #cookiescript_iab_type > div{\n        display:inline-block;\n    }\n}\n\n\/* --- OVERRIDE ----*\/\n\n#cookiescript_injected_fsd #cookiescript_close {\n \n\ttop: 20px;\n    right: 20px;\n\tfont-size: 37px;\n\tcolor: #4d4d4d;\n\theight: 18px;\n\twidth: 18px;\n    position: absolute;\n    margin:0;\n}\n\n#cookiescript_injected_fsd #cookiescript_show_all_partners_button {\n    color: #000000;\n    margin-bottom: 0;\n    margin-top: 12px;\n    display: inline-block;\n}\n\n#cookiescript_injected_fsd #cookiescript_buttons {\n    justify-content: flex-start;\n    padding: 5px 15px;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n#cookiescript_injected_fsd #cookiescript_accept, #cookiescript_injected_fsd #cookiescript_save, #cookiescript_injected_fsd #cookiescript_reject {\n\t\tflex-grow: unset;\n\t\tpadding: 0px 25px;\n\tmargin: 10px 5px;\n\tfont-size: 13px;\n\tline-height: 3;\n}\n#cookiescript_injected_fsd #cookiescript_buttons{\n\tflex-direction: row;\n}\n#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_reject {\n    margin-right: auto;\n}\n\n#cookiescript_injected_fsd .cookiescript-iab-itemContainer {\n    border: 1px solid #e2e2e2;\n\tbackground-color: #ffffff;\n\tpadding: 10px;\n}\n\n#cookiescript_injected_fsd .cookiescript-iab-header,\n#cookiescript_injected_fsd .cookiescript-iab-itemHeader,\n#cookiescript_injected_fsd .cookiescript-iab-itemHeaderAction {\n    color: #4d4d4d;\n}\n\n#cookiescript_injected_fsd .cookiescript-iab-itemHeaderAction {\n    border-color: #4d4d4d;\n}\n\n#cookiescript_injected_fsd #cookiescript_accept {\n    background-color: #ffffff;\n    color: #4d4d4d;\n    border: 1px solid #4d4d4d;\n    order: 1}\n\n#cookiescript_injected_fsd #cookiescript_accept:hover {\n    background-color: #ebebeb;\n}\n\n#cookiescript_injected_fsd #cookiescript_reject {\n    background-color: #ffffff;\n    color: #4d4d4d;\n    border: 1px solid #4d4d4d;\n    order: 2}\n\n#cookiescript_injected_fsd #cookiescript_reject:hover {\n    background-color: #ebebeb;\n}\n\n#cookiescript_injected_fsd #cookiescript_save {\n    display: inline-block;\n    background-color: #333333;\n    color: #ffffff;\n    border: 1px solid #333333;\n    order: 3}\n\n#cookiescript_injected_fsd #cookiescript_save:hover {\n    background-color: #444444;\n}\n.cookiescript_fsd_reportby{\n    position: absolute;\n    bottom: -20px;\n    right: 20px;\n    color: #FFFFFF;\n    display: inline;\n    font-size: 13px;\n}\n#cookiescript_fsd_reportlink, #cookiescript_fsd_cookiescriptlink {\n    border: 0;\n    padding: 0;\n    cursor: pointer;\n    margin: 0;\n    transition: all 100ms ease 0s;\n    background-color: transparent;\n    color: #FFFFFF;\n    display: inline;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n\n\n\n\n\n\/*Switches color reload*\/\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after {\n    background: #333333;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n    background: #3a3a3a;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n    background: #3a3a3a;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n    background: #3a3a3a;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{\n    background: #333333;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n    background: #333333;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n    background: #333333;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__track::after {\n    background: #333333;\n    opacity: 0.3;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n    background: #333333;\n    opacity: 0.3;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n    background: #333333;\n    opacity: 0.3;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled:active .mdc-switch__track::after {\n    background: #333333;\n    opacity: 0.3;\n}\n\n\n\n@media only screen and (max-width: 440px) {\n\t#cookiescript_fsd_wrapper {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmax-height: 100%;\n\t\ttop: 0;\n\t\tborder-radius: 0;\n\t\tmargin: 0;\n\t}\n\n\t.cookiescript_fsd_main_info {\n\t\tpadding: 13px 20px;\n\t\toverflow-y: auto;\n\t\tmax-height: 140px;\n\t}\n\t.cookiescript_fsd_description{\n\t\tmargin-top: 8px;\n\t}\n\t.cookiescript_fsd_tabs > div {\n\t\tpadding: 6px;\n\t\tfont-size: 12px;\n\t}\n\n\t.cookiescript_fsd_tabs_content {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.cookiescript_fsd_cookies_table thead {\n\t\tdisplay: none;\n\t}\n\n\t.cookiescript_fsd_cookies_table td {\n\t\tdisplay: flex;\n\t\tborder-bottom: 0px;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr td:last-child {\n\t\tborder-bottom: 0;\n\t}\n\n\t.cookiescript_fsd_cookies_table td {\n\t\tborder-top: 0;\n\t}\n\n\t.cookiescript_fsd_cookies_table td::before {\n\t\tcontent: attr(label);\n\t\tfont-weight: bold;\n\t\twidth: 120px;\n\t\tmin-width: 120px;\n\t\ttext-align: left;\n\t}\n\n\t.cookiescript_fsd_cookies_table td:nth-child(2):before {\n\t\tcolor: #4d4d4d;\n\t}\n\n\t.cookiescript_category_description {\n\t\ttext-align: left;\n\t}\n\n\t.cookiescript_fsd_cookies_table td:nth-child(1),\n\t.cookiescript_fsd_cookies_table th:nth-child(1) {\n\t\tpadding-left: 7px;\n\t\tfont-weight: bold;\n\t\tborder-top: 1px solid #e2e2e2;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr:nth-child(1) td:nth-child(1),\n\t.cookiescript_fsd_cookies_table tr:nth-child(1) th:nth-child(1) {\n\t\tborder-top: 0px;\n\t}\n\n\t.cookiescript_fsd_cookies_table td:last-child {\n\t\tborder-bottom: none;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr:nth-child(even) {\n\t\tbackground: #f5f5f5;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr:nth-child(even) td {\n\t\tborder-bottom: 0px solid #FFF;\n\t}\n\n\t#cookiescript_injected_fsd #cookiescript_buttons {\n\t\tmargin-bottom: 0;\n\t}\n\n\t#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_accept,\n\t#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_save,\n\t#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_reject {\n\t\tflex-grow: 1;\n\t\tmargin-left: 10px;\n\t\tmargin-right: 10px;\n\t\tmargin-top: 5px;\n\t\tmargin-bottom: 5px;\n\t\tpadding: 0 15px;\n\t}\n\n\t.cookiescript_fsd_language_drop_down {\n\t\tright: 40px;\n\t}\n\n\t#cookiescript_injected_fsd #cookiescript_close{\n\t\tright:14px;\n\t}\n    .cookiescript_fsd_reportby {\n        position: relative;\n        bottom: 0;\n        right: auto;\n        color: #4d4d4d;\n        font-size: 12px;\n        padding: 0 20px 10px 21px;\n        max-width: 100%;\n        opacity: 0.8;\n        display: none;\n    }\n    #cookiescript_fsd_reportlink, #cookiescript_fsd_cookiescriptlink{\n        color: #4d4d4d;\n        font-size: 12px;\n    }\n\n    #cookiescript_fsd_wrapper .cookiescript-extra-links{\n        flex-direction: column;\n    }\n    \n}\n\n\n\r\n\n.cookiescript_custom_select {\n    cursor: pointer;\n    color: inherit;\n    background-color: inherit;\n    text-transform: uppercase;\n    font-size: 11px;\n}\n\n.cookiescript_custom_select_selected {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0 10px;\n\tbox-sizing: border-box;\n    font-size: 14px;\n    font-weight: 700;\n}\n\n.cookiescript_custom_select_selected > svg {\n    width: 10px;\n    height: 10px;\n    margin-left: 5px;\n}\n\n.cookiescript_custom_select_items {\n    \/*display: none;*\/\n    background-color: #ffffff;\n    position: relative;\n    z-index: 9999;\n    \/*padding-top: 5px;*\/\n    box-shadow: 0 0 11px -4px #4d4d4d; \/*rgba(0, 0, 0, 0.35);*\/\n\tmax-height: 0;\n\ttransition: max-height 200ms ease;\n\toverflow: hidden;\n\tborder-radius: 7px;\n\ttop: 7px;\n}\n\n.cookiescript_custom_select_items > .cookiescript_custom_select_item:first-child{\n\tmargin-top:5px;\n}\n.cookiescript_custom_select_items > .cookiescript_custom_select_item:last-child{\n\tmargin-bottom:5px;\n}\n\n\n.cookiescript_custom_select.open .cookiescript_custom_select_selected > svg {\n    transform: rotate(180deg);\n}\n.cookiescript_custom_select.open .cookiescript_custom_select_items {\n    display: block;\n\tmax-height: 226px;\n}\n\n.cookiescript_custom_select_item {\n    display: flex;\n    padding: 7px 15px 7px 15px;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.cookiescript_custom_select_item:hover {\n    background-color: #f8f8f8;\n}\n\n.cookiescript_custom_select_item span {\n    white-space: nowrap;\n}\n\n.cookiescript_custom_select_flag {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-radius: 20px;\n\twidth: 20px;\n\theight: 20px;\n\tmargin-right: 9px;\n\toverflow: hidden;\n\tjustify-content: center;\n\tborder: 0;\n\tbox-sizing: content-box;\n\tbox-shadow: 0px 0px 2px 1px rgba(0,0,0,0.39);\n\t-webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.39);\n}\n\n.cookiescript_custom_select_flag_inner {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.cookiescript_custom_select_flag svg {\n\twidth: auto;\n\theight: 100%;\n}\r\n\n.cookiescript_small_language_drop_down .cookiescript_custom_select_items {\n    position: absolute;\n    top: 40px;\n    right: 0;\n    box-shadow: 0 0 11px -4px #000000; \/*rgba(0, 0, 0, 0.35);*\/\n    z-index: 999999;\n}\n\n.cookiescript_small_language_drop_down .cookiescript_custom_select_selected {\n    padding: 0;\n}\n\n.cookiescript_small_language_drop_down .cookiescript_custom_select_globe > svg {\n    width: 24px;\n    height: 24px;\n    margin: 0;\n}\n.cookiescript_small_language_drop_down .cookiescript_custom_select_globe {\n    display: flex;\n    align-items: center;\n    border-radius: 20px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0;\n    overflow: hidden;\n    justify-content: center;\n    border: 0;\n    box-sizing: content-box;\n    opacity: 0.85;\n}\n.cookiescript_small_language_drop_down .cookiescript_custom_select_globe:hover{\n    opacity: 1;\n}\n\n.cookiescript_small_language_drop_down .cookiescript_custom_select_items {\n    background-color: #ffffff;\n}\n\n.cookiescript_small_language_drop_down .cookiescript_custom_select_globe > svg .cookiescript_globe {\n    fill: #000000;\n}\n\n.cookiescript_small_language_drop_down .cookiescript_custom_select_item:hover {\n    background-color: #f8f8f8;\n}\r\n.cookiescript_rtl {\r\n    direction:rtl;\r\n}\r\n\r\n\/*Start Checkboxes*\/\r\n#cookiescript_injected_fsd .mdc-checkbox,\r\n#cookiescript_injected .mdc-checkbox {\r\n    box-sizing: content-box !important;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox__native-control,\r\n#cookiescript_injected .mdc-checkbox__native-control {\r\n    display: block;\r\n    z-index: 1;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, \r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, \r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before {\r\n    background-color: #FFFFFF;\r\n}\r\n#cookiescript_injected .mdc-checkbox,#cookiescript_injected_fsd .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#ffffff}@supports not (-ms-ime-align:auto){#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #ffffff)}}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:40px;height:40px}#cookiescript_injected .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:#000000;background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#ffffff;background-color:#ffffff}#cookiescript_injected .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(255,255,255,0.26);background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(255,255,255,0.26)}#cookiescript_injected .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#ffffff}#cookiescript_injected .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#ffffff}#cookiescript_injected .mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid #ffffff;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0s cubic-bezier(.4,0,.6,1),border-color 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__background .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align:auto){#cookiescript_injected .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0s cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:5px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0s cubic-bezier(0,0,.2,1),background-color 90ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}#cookiescript_injected .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__background::before{position:absolute;-webkit-transform:scale(0,0);transform:scale(0,0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{-webkit-transform:scale(1);transform:scale(1);opacity:.12;transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control,#cookiescript_injected_fsd .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}#cookiescript_injected .mdc-checkbox__native-control:disabled,#cookiescript_injected_fsd .mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);opacity:1}#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox,#cookiescript_injected_fsd .mdc-checkbox{-webkit-tap-highlight-color:transparent}}\r\n\/*updated checkboxes*\/\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control, #cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control{\r\n    width:47px;\r\n    height:47px;\r\n}\r\n#cookiescript_injected .mdc-checkbox, #cookiescript_injected_fsd .mdc-checkbox{\r\n    flex: 0 0 25px;\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__background::before, #cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background::before{\r\n    width:0;\r\n    height: 0;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background{\r\n    outline: 1px auto highlight;\r\n}\r\n\r\n\r\n#cookiescript_injected .mdc-checkbox__background{\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius:8px;\r\n}\r\n\/*End Checkboxes*\/\r\n\r\n\r\n\/*Start Toggle*\/\r\n\r\n#cookiescript_injected .mdc-elevation-overlay,#cookiescript_injected_fsd .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity 280ms cubic-bezier(.4,0,.2,1);background-color:#fff}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{align-items:center;background:0 0;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:0;overflow:visible;padding:0;position:relative}#cookiescript_injected .mdc-switch:disabled,#cookiescript_injected_fsd .mdc-switch:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-switch input[type=checkbox],#cookiescript_injected_fsd .mdc-switch input[type=checkbox]{display:none;visibility:hidden}#cookiescript_injected .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch__track{overflow:hidden;position:relative;width:100%}#cookiescript_injected .mdc-switch__track::after,#cookiescript_injected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track::before{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}#cookiescript_injected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch__track::before{transition:-webkit-transform 75ms 0s cubic-bezier(0,0,.2,1);transition:transform 75ms 0s cubic-bezier(0,0,.2,1);-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track::after{transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.6,1);transition:transform 75ms 0s cubic-bezier(.4,0,.6,1);-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch__track[dir=rtl]::after,#cookiescript_injected [dir=rtl] .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track[dir=rtl]::after,#cookiescript_injected_fsd [dir=rtl] .mdc-switch__track::after{-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track::before{transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.6,1);transition:transform 75ms 0s cubic-bezier(.4,0,.6,1);-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track[dir=rtl]::before,#cookiescript_injected [dir=rtl] .mdc-switch--selected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track[dir=rtl]::before,#cookiescript_injected_fsd [dir=rtl] .mdc-switch--selected .mdc-switch__track::before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track::after{transition:-webkit-transform 75ms 0s cubic-bezier(0,0,.2,1);transition:transform 75ms 0s cubic-bezier(0,0,.2,1);-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.2,1);transition:transform 75ms 0s cubic-bezier(.4,0,.2,1);left:0;right:auto;-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch__handle-track[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch__handle-track{left:auto;right:0}#cookiescript_injected .mdc-switch--selected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__handle-track{-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:0;right:auto}#cookiescript_injected .mdc-switch__handle[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch__handle[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch__handle{left:auto;right:0}#cookiescript_injected .mdc-switch__handle::after,#cookiescript_injected .mdc-switch__handle::before,#cookiescript_injected_fsd .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch__handle::before{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0s cubic-bezier(.4,0,.2,1),border-color 75ms 0s cubic-bezier(.4,0,.2,1);z-index:-1}#cookiescript_injected .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}#cookiescript_injected .mdc-elevation-overlay,#cookiescript_injected_fsd .mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}#cookiescript_injected .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch__ripple{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1}#cookiescript_injected .mdc-switch:disabled .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__ripple{display:none}#cookiescript_injected .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}#cookiescript_injected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0s cubic-bezier(.4,0,1,1)}#cookiescript_injected .mdc-switch--selected .mdc-switch__icon--on,#cookiescript_injected .mdc-switch--unselected .mdc-switch__icon--off,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__icon--on,#cookiescript_injected_fsd .mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{will-change:transform,opacity}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}to{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}to{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.1}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.1}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.1}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.1}to{opacity:0}}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after{z-index:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{-webkit-transform:scale(1);transform:scale(1)}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:0;left:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{top:0;left:0;width:0;height:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:0;height:0}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{width:36px}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242}#cookiescript_injected .mdc-switch .mdc-switch__handle::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle::before{background:#fff}#cookiescript_injected .mdc-switch:enabled .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__shadow{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}#cookiescript_injected .mdc-switch:disabled .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{height:20px}#cookiescript_injected .mdc-switch:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__handle::after{opacity:.38}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{border-radius:10px}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{width:20px}#cookiescript_injected .mdc-switch .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px)}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:.38}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:.38}#cookiescript_injected .mdc-switch.mdc-switch--selected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;height:18px}#cookiescript_injected .mdc-switch.mdc-switch--unselected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;height:18px}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before{opacity:.04}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:.12}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:.1}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before{opacity:.04}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:.12}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:.1}#cookiescript_injected .mdc-switch .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple{height:48px;width:48px}#cookiescript_injected .mdc-switch .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__track{height:14px}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track{opacity:.12}#cookiescript_injected .mdc-switch:enabled .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:active .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track::after{background:#424242}#cookiescript_injected .mdc-switch:enabled .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:active .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track::before{background:#424242}#cookiescript_injected .mdc-switch .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__track{border-radius:7px}@media screen and (forced-colors:active),(-ms-high-contrast:active){#cookiescript_injected .mdc-switch:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__handle::after{opacity:1}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track{opacity:1}}\r\n\/*End Toggle*\/\r\n#cookiescript_injected_wrapper {\n    background-color: rgba(17, 17, 17, 0.5) !important;\n    position: fixed;\n    padding: 0;\n    width: 100%;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 999996;\n}\r\n#cookiescript_injected {\r\n    width:90%;\r\n    margin: 0 auto;\r\n    line-height: 18px;\r\n    letter-spacing: normal;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 26px 55px 15px 55px;\r\n    text-align: left;\r\n    background-color: #ffffff;\r\n    z-index: 999997;\r\n    opacity: 1;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\r\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\r\n    color: #000000;\r\n    max-height: 80%;\r\n    overflow-y: auto;\r\n    outline: none;\r\n    max-width: 800px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    justify-content: right;\r\n}\r\n#cookiescript_copyright {\r\n    text-align: center;\r\n    line-height: 1;\r\n}\r\n.cookiescript_pre_header{\r\n    top: 17px;\r\n    right: 25px;\r\n}\r\n#cookiescript_buttons {\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin: 0 -7px 15px 0;\r\n    flex-direction: row-reverse;\r\n    align-self:end;\r\n}\r\n#cookiescript_manage_wrap {\r\n    margin: 0 auto 15px 0;\r\n    font-size: 15px;\r\n    letter-spacing: normal;\r\n    align-self: center;\r\n}\r\n#cookiescript_manage{\r\n    margin-left: 0;\r\n}\r\nsvg#cookiescript_manageicon{\r\n    top:2px;\r\n}\r\n#cookiescript_header {\r\n    padding: 0;\r\n    margin-top: 10px;\r\n    margin-bottom: 6px;\r\n    font-size: 21px;\r\n    letter-spacing: normal;\r\n    width:100%;\r\n    text-align:left;\r\n}\r\n#cookiescript_checkboxs {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    margin: 0 0 24px 0;\r\n}\r\n.cookiescript_checkbox {\r\n    margin: 0;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column-reverse;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px 8px 4px 8px;\r\n    width: 100%;\r\n    border-right: 1px solid #b3b3b3;\r\n    text-align: center;\r\n    border-bottom: 1px solid #b3b3b3;\r\n    border-top: 1px solid #b3b3b3;\r\n}\r\n.cookiescript_checkbox:last-child {\r\n    border-right: none;\r\n}\r\n.cookiescript_checkbox_text {\r\n    margin: 0 20px 0 5px;\r\n    font-size:11px;\r\n}\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    margin: 5px 7px;\r\n    flex-shrink: 1;\r\n    padding: 0 38px;\r\n    font-size: 14px;\r\n}\r\n#cookiescript_description {\r\n    margin: 0 0 15px 0;\r\n    text-align: left;\r\n    font-size:15px;\r\n    letter-spacing: normal;\r\n    width:100%;\r\n}\r\n.cookiescript-extra-links{\r\n    align-self:center;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-top:0;\r\n}\r\n.cookiescript-extra-links a{\r\n    font-size: 14px;\r\n}\r\n#cookiescript_readmore{\r\n    font-size:15px;\r\n}\r\n#cookiescript_show_all_partners_button{\r\n    font-size:15px;\r\n    margin: 0 0 24px 0;\r\n    width:100%;\r\n}\r\n.cookiescript_checkbox_label{\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\nspan.cookiescript_checkbox_text{\r\n    text-transform: none;\r\n    font-size: 15px;\r\n    letter-spacing: normal;\r\n    line-height: 1.1;\r\n}\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control, #cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control{\r\n    width:47px;\r\n    height:47px;\r\n}\r\n#cookiescript_injected .mdc-checkbox, #cookiescript_injected_fsd .mdc-checkbox{\r\n    flex: 0 0 25px;\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__background::before, #cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background::before{\r\n    width:0;\r\n    height: 0;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background{\r\n    outline: 1px auto highlight;\r\n}\r\n\r\n#cookiescript_injected .mdc-checkbox__background{\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius:8px;\r\n}\r\n#cookiescript_cookietablewrap {\r\n    width: 100%;\r\n    transition: height 300ms 0ms, min-height 300ms 0ms, max-height 300ms 0ms, opacity 200ms 300ms;\r\n}\r\n#cookiescript_cookietablewrap.cookiescript_hidden {\r\n    transition: height 300ms 0ms, min-height 300ms 0ms, max-height 300ms 0ms, opacity 200ms 0ms;\r\n}\r\n\r\n#cookiescript_tabscontent{\r\n    position: relative;\r\n    top: -1px;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    #cookiescript_checkboxs{\r\n        flex-wrap:wrap;\r\n    }\r\n    .cookiescript_checkbox:last-child{\r\n        border-right: 1px solid #b3b3b3;\r\n    }\r\n    .cookiescript_checkbox{\r\n        border: 1px solid #b3b3b3;\r\n        margin-top: -1px;\r\n        margin-left:-1px;\r\n    }\r\n}\r\n@media only screen and (max-width: 440px) {\r\n    #cookiescript_injected{\r\n        padding:20px 20px 10px 20px;\r\n        width: 95%;\r\n        font-size:14px;\r\n    }\r\n    #cookiescript_manage_wrap {\r\n        font-size: 14px;\r\n        margin: 0 auto 15px auto;\r\n    }\r\n    #cookiescript_header{\r\n        font-size: 18px;\r\n        margin: 0 0 10px 0;\r\n        text-align: left;\r\n            margin-right: 25px;\r\n        }\r\n    #cookiescript_description{\r\n        text-align: left;\r\n        font-size:14px;\r\n    }\r\n    #cookiescript_readmore{\r\n        font-size:14px;\r\n    }\r\n    #cookiescript_show_all_partners_button{\r\n        width: 100%;\r\n        text-align: left;\r\n        font-size:14px;\r\n        margin-bottom: 10px;\r\n    }\r\n    #cookiescript_description,\r\n    #cookiescript_buttons{\r\n        margin-bottom:10px;\r\n    }\r\n\r\n    #cookiescript_buttons{\r\n        flex-wrap: wrap;\r\n        align-self: end;\r\n        width: 100%;\r\n    }\r\n    #cookiescript_checkboxs{\r\n        margin: 0 auto 15px 0;\r\n        flex-direction:column;\r\n    }\r\n    .cookiescript_checkbox{\r\n        border:0;\r\n        flex-direction: row;\r\n        justify-content: flex-start;\r\n        padding: 0;\r\n        margin: 0 0 -8px -11px;\r\n    }\r\n    .cookiescript_checkbox:last-child{\r\n        border-right:0;\r\n    }\r\n    \r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n        width:100%;\r\n        font-size: 13px;\r\n    }\r\n    #cookiescript_injected {\r\n        max-height: 100%;\r\n    }\r\n    .cookiescript-extra-links{\r\n        padding-top: 0;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .cookiescript-extra-links a{\r\n        font-size:13px;\r\n        margin-top: 5px;\r\n    }\r\n}\r\n\r\n\r\n\/*IE 9 fixes*\/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n    .cookiescript_checkbox{\r\n        display: inline-block;\r\n    }\r\n}\r\n\r\n#cookiescript_header{font-family:montserrat;font-weight:700;font-size:16px;}\r\n#cookiescript_description{font-family:montserrat;font-weight:400;font-size:14px;}\r\n#cookiescript_accept{background-color:#000;border-radius:0px;font-family:montserrat;font-weight:400;}\r\n#cookiescript_accept:hover{background-color:#333333;border-radius:0px;font-family:montserrat;font-weight:400;}\r\n#cookiescript_manage #cookiescript_manageicon .cookiescript_gear{fill:#000;}\r\n#cookiescript_manage #cookiescript_manageicon .cookiescript_gear:hover{fill:#333;}\n    <\/style>\n  ',
            oi = '',
            me = '<div id="cookiescript_injected_wrapper" data-cs-id="cookiescript_injected">\n      <div id="cookiescript_injected" tabindex="0" role="dialog" aria-label="Cookie consent dialog"  data-nosnippet class="">\n        <div class="cookiescript_pre_header ">\n                    <div class="cookiescript_header_actions">\n                        <div class="cookiescript_small_language_drop_down">\n              \n<div class="cookiescript_custom_select" role="combobox" aria-controls="cookiescript_custom_select_items_small" aria-expanded="false" aria-autocomplete="none" aria-label="Language select" data-cs-custom-select="select" tabindex="0">\n  <div class="cookiescript_custom_select_selected" data-cs-custom-select="selected" data-type="small">\n          <div class="cookiescript_custom_select_globe">\n        <svg xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 20 20"><g id="cs-lang" data-name="Cs Lang"><g id="cs-lang-1" data-name="Cs Lang 1"><path class="cookiescript_globe" d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm6.9,6H14a17.83,17.83,0,0,0-1.4-3.6A8,8,0,0,1,16.9,6ZM10,2a13.43,13.43,0,0,1,1.9,4H8.1A14.7,14.7,0,0,1,10,2ZM2.3,12A6.45,6.45,0,0,1,2,10a6.45,6.45,0,0,1,.3-2H5.7a13.4,13.4,0,0,0-.1,2c0,.7.1,1.3.1,2Zm.8,2h3a15.81,15.81,0,0,0,1.4,3.6A7.92,7.92,0,0,1,3.1,14ZM6,6H3A8.43,8.43,0,0,1,7.3,2.4C6.8,3.6,6.4,4.8,6,6Zm4,12a13.43,13.43,0,0,1-1.9-4h3.8A14.7,14.7,0,0,1,10,18Zm2.3-6H7.7a13.55,13.55,0,0,1-.2-2,12.31,12.31,0,0,1,.2-2h4.7a12.31,12.31,0,0,1,.2,2A13.8,13.8,0,0,1,12.3,12Zm.3,5.6A14.19,14.19,0,0,0,14,14h2.9A8.5,8.5,0,0,1,12.6,17.6ZM14.4,12a13.4,13.4,0,0,0,.1-2c0-.7-.1-1.3-.1-2h3.4a6.45,6.45,0,0,1,.3,2,6.45,6.45,0,0,1-.3,2Z"\/><\/g><\/g><\/svg>\n      <\/div>\n      <\/div>\n  <div class="cookiescript_custom_select_items" data-cs-custom-select="items" id="cookiescript_custom_select_items_small" role="listbox">\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="def_cookie_lang" data-value="English" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-2"> <stop stop-color="#0A17A7" offset="0%"><\/stop> <stop stop-color="#030E88" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-3"> <stop stop-color="#E6273E" offset="0%"><\/stop> <stop stop-color="#CF152B" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-en-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-en-GB"> <rect id="cookiescript-en-FlagBackground" fill="url(#cookiescript-en-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-en-Mask-Copy" fill="url(#cookiescript-en-linearGradient-2)" x="-0.00188732147" y="0" width="21" height="15"><\/rect> <path d="M5.00341861,10 L-0.00188732147,10 L-0.00188732147,5 L5.00341861,5 L-2.08212503,0.220740472 L-0.96373922,-1.43733467 L7.99811268,4.60751076 L7.99811268,-1 L12.9981127,-1 L12.9981127,4.60751076 L21.9599646,-1.43733467 L23.0783504,0.220740472 L15.9928067,5 L20.9981127,5 L20.9981127,10 L15.9928067,10 L23.0783504,14.7792595 L21.9599646,16.4373347 L12.9981127,10.3924892 L12.9981127,16 L7.99811268,16 L7.99811268,10.3924892 L-0.96373922,16.4373347 L-2.08212503,14.7792595 L5.00341861,10 Z" id="cookiescript-en-Rectangle-2" fill="url(#cookiescript-en-linearGradient-1)"><\/path> <path d="M14.1364901,4.95800192 L23.6355136,-1.29114359 C23.7508618,-1.367028 23.7828535,-1.52205266 23.7069691,-1.63740087 C23.6310847,-1.75274908 23.47606,-1.78474082 23.3607118,-1.70885641 L13.8616884,4.5402891 C13.7463402,4.6161735 13.7143484,4.77119817 13.7902328,4.88654638 C13.8661172,5.00189459 14.0211419,5.03388632 14.1364901,4.95800192 Z" id="cookiescript-en-Line" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M14.8679651,10.4804377 L23.383346,16.2200617 C23.4978376,16.2972325 23.6532106,16.266978 23.7303814,16.1524864 C23.8075522,16.0379948 23.7772977,15.8826218 23.6628061,15.805451 L15.1474253,10.065827 C15.0329337,9.98865619 14.8775606,10.0189107 14.8003898,10.1334023 C14.7232191,10.2478938 14.7534735,10.4032669 14.8679651,10.4804377 Z" id="cookiescript-en-Line-Copy-2" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.14197982,4.5255348 L-2.74028336,-1.46054919 C-2.8547799,-1.53771262 -3.01015101,-1.50744816 -3.08731444,-1.39295161 C-3.16447787,-1.27845507 -3.13421341,-1.12308397 -3.01971687,-1.04592054 L5.86254632,4.94016345 C5.97704286,5.01732688 6.13241396,4.98706241 6.20957739,4.87256587 C6.28674083,4.75806933 6.25647636,4.60269823 6.14197982,4.5255348 Z" id="cookiescript-en-Line-Copy" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.82747404,9.99532456 L-3.01816805,16.5244994 C-3.13323644,16.6008074 -3.16465792,16.7559487 -3.08834987,16.8710171 C-3.01204183,16.9860854 -2.85690058,17.0175069 -2.74183218,16.9411989 L7.10380991,10.4120241 C7.2188783,10.335716 7.25029978,10.1805748 7.17399174,10.0655064 C7.09768369,9.95043799 6.94254244,9.91901651 6.82747404,9.99532456 Z" id="cookiescript-en-Line-Copy-3" fill="#DB1F35" fill-rule="nonzero"><\/path> <polygon id="cookiescript-en-Rectangle-2-Copy-3" fill="url(#cookiescript-en-linearGradient-3)" points="-0.00188732147 9 8.99811268 9 8.99811268 15 11.9981127 15 11.9981127 9 20.9981127 9 20.9981127 6 11.9981127 6 11.9981127 0 8.99811268 0 8.99811268 6 -0.00188732147 6"><\/polygon> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>English<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="en" data-value="English" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-2"> <stop stop-color="#0A17A7" offset="0%"><\/stop> <stop stop-color="#030E88" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-3"> <stop stop-color="#E6273E" offset="0%"><\/stop> <stop stop-color="#CF152B" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-en-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-en-GB"> <rect id="cookiescript-en-FlagBackground" fill="url(#cookiescript-en-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-en-Mask-Copy" fill="url(#cookiescript-en-linearGradient-2)" x="-0.00188732147" y="0" width="21" height="15"><\/rect> <path d="M5.00341861,10 L-0.00188732147,10 L-0.00188732147,5 L5.00341861,5 L-2.08212503,0.220740472 L-0.96373922,-1.43733467 L7.99811268,4.60751076 L7.99811268,-1 L12.9981127,-1 L12.9981127,4.60751076 L21.9599646,-1.43733467 L23.0783504,0.220740472 L15.9928067,5 L20.9981127,5 L20.9981127,10 L15.9928067,10 L23.0783504,14.7792595 L21.9599646,16.4373347 L12.9981127,10.3924892 L12.9981127,16 L7.99811268,16 L7.99811268,10.3924892 L-0.96373922,16.4373347 L-2.08212503,14.7792595 L5.00341861,10 Z" id="cookiescript-en-Rectangle-2" fill="url(#cookiescript-en-linearGradient-1)"><\/path> <path d="M14.1364901,4.95800192 L23.6355136,-1.29114359 C23.7508618,-1.367028 23.7828535,-1.52205266 23.7069691,-1.63740087 C23.6310847,-1.75274908 23.47606,-1.78474082 23.3607118,-1.70885641 L13.8616884,4.5402891 C13.7463402,4.6161735 13.7143484,4.77119817 13.7902328,4.88654638 C13.8661172,5.00189459 14.0211419,5.03388632 14.1364901,4.95800192 Z" id="cookiescript-en-Line" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M14.8679651,10.4804377 L23.383346,16.2200617 C23.4978376,16.2972325 23.6532106,16.266978 23.7303814,16.1524864 C23.8075522,16.0379948 23.7772977,15.8826218 23.6628061,15.805451 L15.1474253,10.065827 C15.0329337,9.98865619 14.8775606,10.0189107 14.8003898,10.1334023 C14.7232191,10.2478938 14.7534735,10.4032669 14.8679651,10.4804377 Z" id="cookiescript-en-Line-Copy-2" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.14197982,4.5255348 L-2.74028336,-1.46054919 C-2.8547799,-1.53771262 -3.01015101,-1.50744816 -3.08731444,-1.39295161 C-3.16447787,-1.27845507 -3.13421341,-1.12308397 -3.01971687,-1.04592054 L5.86254632,4.94016345 C5.97704286,5.01732688 6.13241396,4.98706241 6.20957739,4.87256587 C6.28674083,4.75806933 6.25647636,4.60269823 6.14197982,4.5255348 Z" id="cookiescript-en-Line-Copy" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.82747404,9.99532456 L-3.01816805,16.5244994 C-3.13323644,16.6008074 -3.16465792,16.7559487 -3.08834987,16.8710171 C-3.01204183,16.9860854 -2.85690058,17.0175069 -2.74183218,16.9411989 L7.10380991,10.4120241 C7.2188783,10.335716 7.25029978,10.1805748 7.17399174,10.0655064 C7.09768369,9.95043799 6.94254244,9.91901651 6.82747404,9.99532456 Z" id="cookiescript-en-Line-Copy-3" fill="#DB1F35" fill-rule="nonzero"><\/path> <polygon id="cookiescript-en-Rectangle-2-Copy-3" fill="url(#cookiescript-en-linearGradient-3)" points="-0.00188732147 9 8.99811268 9 8.99811268 15 11.9981127 15 11.9981127 9 20.9981127 9 20.9981127 6 11.9981127 6 11.9981127 0 8.99811268 0 8.99811268 6 -0.00188732147 6"><\/polygon> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>English<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="it" data-value="Italian" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-it-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-it-linearGradient-2"> <stop stop-color="#E43D4C" offset="0%"><\/stop> <stop stop-color="#CC2E3C" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-it-linearGradient-3"> <stop stop-color="#1BB65D" offset="0%"><\/stop> <stop stop-color="#139149" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-it-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-it-IT"> <rect id="cookiescript-it-FlagBackground" fill="url(#cookiescript-it-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-it-Mask" fill="url(#cookiescript-it-linearGradient-2)" x="10" y="0" width="11" height="15"><\/rect> <rect id="cookiescript-it-Rectangle-2" fill="url(#cookiescript-it-linearGradient-3)" x="0" y="0" width="7" height="15"><\/rect> <rect id="cookiescript-it-Rectangle-2-Copy" fill="url(#cookiescript-it-linearGradient-1)" x="7" y="0" width="7" height="15"><\/rect> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>Italian<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="es" data-value="Spanish" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-es-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-es-linearGradient-2"> <stop stop-color="#DD172C" offset="0%"><\/stop> <stop stop-color="#C60B1F" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-es-linearGradient-3"> <stop stop-color="#FFD133" offset="0%"><\/stop> <stop stop-color="#FFC500" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-es-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-es-ES"> <rect id="cookiescript-es-FlagBackground" fill="url(#cookiescript-es-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-es-Rectangle-2" fill="url(#cookiescript-es-linearGradient-2)" x="0" y="0" width="21" height="4"><\/rect> <rect id="cookiescript-es-Rectangle-2" fill="url(#cookiescript-es-linearGradient-2)" x="0" y="11" width="21" height="4"><\/rect> <rect id="cookiescript-es-Rectangle-2" fill="url(#cookiescript-es-linearGradient-3)" x="0" y="4" width="21" height="7"><\/rect> <polygon id="cookiescript-es-Rectangle-139-Copy" fill="#FFEDB1" points="5.5 7 6.5 7 6.5 7.5 5.5 7.5"><\/polygon> <path d="M4.9150265,8.4595207 C4.93965065,8.7550105 5.2060923,9 5.5,9 C5.79425164,9 6.06044023,8.75391994 6.0849735,8.4595207 L6.20660023,7 L4.79339977,7 L4.9150265,8.4595207 Z M4.29128242,6.99538898 C4.26848277,6.7217932 4.48071289,6.5 4.7559123,6.5 L6.2440877,6.5 C6.52349535,6.5 6.73202062,6.7157526 6.70871758,6.99538898 L6.58324638,8.50104344 C6.53727067,9.05275191 6.05613518,9.5 5.5,9.5 C4.94771525,9.5 4.46311164,9.05733967 4.41675362,8.50104344 L4.29128242,6.99538898 Z" id="cookiescript-es-Rectangle-137" fill="#A41517" fill-rule="nonzero"><\/path> <polygon id="cookiescript-es-Rectangle-139" fill="#A41517" points="4.5 7.5 6.5 7.5 6.5 8 6 8 5.5 9 5 8 4.5 8"><\/polygon> <rect id="cookiescript-es-Rectangle-135" fill="#A41517" x="3" y="6" width="1" height="3.5"><\/rect> <rect id="cookiescript-es-Rectangle-135-Copy" fill="#A41517" x="7" y="6" width="1" height="3.5"><\/rect> <path d="M4.5,5.5 C4.5,5.22385763 4.71403503,5 5.00468445,5 L5.99531555,5 C6.27404508,5 6.5,5.23193359 6.5,5.5 L6.5,5.74765778 C6.5,5.88702254 6.39247131,6 6.25476074,6 L4.74523926,6 C4.60979736,6 4.5,5.89298248 4.5,5.74765778 L4.5,5.5 Z" id="cookiescript-es-Rectangle-138" fill="#A41517"><\/path> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>Spanish<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="fr" data-value="French" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-fr-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-fr-linearGradient-2"> <stop stop-color="#F44653" offset="0%"><\/stop> <stop stop-color="#EE2A39" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-fr-linearGradient-3"> <stop stop-color="#1035BB" offset="0%"><\/stop> <stop stop-color="#042396" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-fr-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-fr-FR"> <rect id="cookiescript-fr-FlagBackground" fill="url(#cookiescript-fr-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-fr-Mask" fill="url(#cookiescript-fr-linearGradient-2)" x="10" y="0" width="11" height="15"><\/rect> <rect id="cookiescript-fr-Rectangle-2" fill="url(#cookiescript-fr-linearGradient-3)" x="0" y="0" width="7" height="15"><\/rect> <rect id="cookiescript-fr-Rectangle-2-Copy" fill="url(#cookiescript-fr-linearGradient-1)" x="7" y="0" width="7" height="15"><\/rect> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>French<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="nl" data-value="Dutch" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-nl-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-nl-linearGradient-2"> <stop stop-color="#CA2B39" offset="0%"><\/stop> <stop stop-color="#AC1F2C" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-nl-linearGradient-3"> <stop stop-color="#2C56A2" offset="0%"><\/stop> <stop stop-color="#244889" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-nl-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-nl-NL"> <rect id="cookiescript-nl-FlagBackground" fill="url(#cookiescript-nl-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-nl-Rectangle-2" fill="url(#cookiescript-nl-linearGradient-2)" x="0" y="0" width="21" height="5"><\/rect> <rect id="cookiescript-nl-Rectangle-2" fill="url(#cookiescript-nl-linearGradient-3)" x="0" y="10" width="21" height="5"><\/rect> <rect id="cookiescript-nl-Rectangle-2" fill="url(#cookiescript-nl-linearGradient-1)" x="0" y="5" width="21" height="5"><\/rect> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>Dutch<\/span>\n      <\/div>\n      <\/div>\n<\/div>            <\/div>\n                                  <\/div>\n        <\/div>\n          <div id="cookiescript_header" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies&quot;,&quot;it&quot;:&quot;Questo sito web utilizza cookie&quot;,&quot;es&quot;:&quot;Ese sitio web utiliza cookies&quot;,&quot;fr&quot;:&quot;Ce site Web utilise des cookies&quot;,&quot;nl&quot;:&quot;Deze website maakt gebruik van cookies.&quot;}">\n    This website uses cookies  <\/div>\n  <div id="cookiescript_description">\n\t    <span data-cs-desc-box="true" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.&quot;,&quot;it&quot;:&quot;Questo sito web utilizza i cookie per migliorare la tua esperienza di navigazione. Utilizzando il nostro sito web acconsenti a tutti i cookie in conformit\\u00e0 con la nostra policy per i cookie.&quot;,&quot;es&quot;:&quot;Este sitio web usa cookies para mejorar la experiencia del usuario. Al utilizar nuestro sitio web, usted acepta todas las cookies de acuerdo con nuestra Pol\\u00edtica de cookies.&quot;,&quot;fr&quot;:&quot;Notre site Web utilise des cookies pour am\\u00e9liorer l\\&quot;exp\\u00e9rience utilisateur. En utilisant notre site Web, vous acceptez tous les cookies conform\\u00e9ment \\u00e0 notre Politique relative aux cookies.&quot;,&quot;nl&quot;:&quot;Deze website gebruikt cookies om uw gebruikerservaring te verbeteren. Door onze website te gebruiken, stemt u in met alle cookies in overeenstemming met ons Cookiebeleid.&quot;}" data-cs-i18n-read="This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.">\n      This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.    <\/span>\n\n      <\/div>\n  <div id="cookiescript_buttons">\n          <div id="cookiescript_save" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Save &amp; Close&quot;,&quot;it&quot;:&quot;Salva e chiudi&quot;,&quot;es&quot;:&quot;Guardar y cerrar&quot;,&quot;fr&quot;:&quot;Sauvegarder et fermer&quot;,&quot;nl&quot;:&quot;Opslaan en sluiten&quot;}">\n        Save & Close      <\/div>\n              <div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Accept all&quot;,&quot;it&quot;:&quot;Accetta tutto&quot;,&quot;es&quot;:&quot;Aceptar todo&quot;,&quot;fr&quot;:&quot;Accepter tout&quot;,&quot;nl&quot;:&quot;Alles accepteren&quot;}">\n        Accept all      <\/div>\n          <\/div>\n\n  <div id="cookiescript_manage_wrap" tabindex="0" role="button">\n    <div id="cookiescript_manage">\n      <svg role="none" id="cookiescript_manageicon" viewBox="0 0 9.62 9.57">\n        <g id="cs-manage-btn">\n          <g id="cs-manage-btn-1-2">\n            <path class="cookiescript_gear" d="M9.46,6.06l-1.1-.78c0-.16.06-.31.06-.47a1.27,1.27,0,0,0-.06-.47L9.57,3.4l-1.15-2L7,1.93a2.74,2.74,0,0,0-.83-.47L6,0H3.61L3.35,1.46a7.14,7.14,0,0,0-.79.47L1.15,1.36,0,3.4l1.15.94c0,.16,0,.31,0,.47a1.51,1.51,0,0,0,0,.47l-1,.78A.75.75,0,0,0,0,6.17l1.15,2,1.41-.58a2.49,2.49,0,0,0,.84.47l.21,1.47H6a.53.53,0,0,1,0-.21L6.22,8.1a4,4,0,0,0,.84-.47l1.41.58,1.15-2A.75.75,0,0,0,9.46,6.06Zm-4.65.19A1.47,1.47,0,1,1,6.28,4.78,1.47,1.47,0,0,1,4.81,6.25Z"><\/path>\n          <\/g>\n        <\/g>\n      <\/svg>\n      <span data-cs-show-title="cookie-script" data-cs-i18n-text="{&quot;en&quot;:&quot;Show details&quot;,&quot;it&quot;:&quot;Mostra dettagli&quot;,&quot;es&quot;:&quot;Mostrar detalles&quot;,&quot;fr&quot;:&quot;Afficher les d\\u00e9tails&quot;,&quot;nl&quot;:&quot;Details weergeven&quot;}">\n        Show details      <\/span>\n      <span style="display: none" data-cs-hide-title="cookie-script" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide details&quot;,&quot;it&quot;:&quot;Nascondi dettagli&quot;,&quot;es&quot;:&quot;Ocultar detalles&quot;,&quot;fr&quot;:&quot;Masquer les d\\u00e9tails&quot;,&quot;nl&quot;:&quot;Details verbergen&quot;}">\n        Hide details      <\/span>\n    <\/div>\n  <\/div>\n            <div class="cookiescript_hidden" id="cookiescript_cookietablewrap">\n                          <\/div>\n        \n\n\n      <\/div>\n<\/div>\n',
            ut = '',
            V = '\n<div id="cookiescript_injected_fsd" data-nosnippet class="">\n  <div id="cookiescript_fsd_wrapper" tabindex="0" role="dialog" aria-label="Cookie consent dialog">\n    <div class="cookiescript_fsd_header ">\n                                      <div class="cookiescript_fsd_language_drop_down">\n            \n<div class="cookiescript_custom_select" role="combobox" aria-controls="cookiescript_custom_select_items_full" aria-expanded="false" aria-autocomplete="none" aria-label="Language select" data-cs-custom-select="select" tabindex="0">\n  <div class="cookiescript_custom_select_selected" data-cs-custom-select="selected" data-type="full">\n          <div class="cookiescript_custom_select_flag">\n        <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="selected-flag">\n          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-2"> <stop stop-color="#0A17A7" offset="0%"><\/stop> <stop stop-color="#030E88" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-3"> <stop stop-color="#E6273E" offset="0%"><\/stop> <stop stop-color="#CF152B" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-en-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-en-GB"> <rect id="cookiescript-en-FlagBackground" fill="url(#cookiescript-en-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-en-Mask-Copy" fill="url(#cookiescript-en-linearGradient-2)" x="-0.00188732147" y="0" width="21" height="15"><\/rect> <path d="M5.00341861,10 L-0.00188732147,10 L-0.00188732147,5 L5.00341861,5 L-2.08212503,0.220740472 L-0.96373922,-1.43733467 L7.99811268,4.60751076 L7.99811268,-1 L12.9981127,-1 L12.9981127,4.60751076 L21.9599646,-1.43733467 L23.0783504,0.220740472 L15.9928067,5 L20.9981127,5 L20.9981127,10 L15.9928067,10 L23.0783504,14.7792595 L21.9599646,16.4373347 L12.9981127,10.3924892 L12.9981127,16 L7.99811268,16 L7.99811268,10.3924892 L-0.96373922,16.4373347 L-2.08212503,14.7792595 L5.00341861,10 Z" id="cookiescript-en-Rectangle-2" fill="url(#cookiescript-en-linearGradient-1)"><\/path> <path d="M14.1364901,4.95800192 L23.6355136,-1.29114359 C23.7508618,-1.367028 23.7828535,-1.52205266 23.7069691,-1.63740087 C23.6310847,-1.75274908 23.47606,-1.78474082 23.3607118,-1.70885641 L13.8616884,4.5402891 C13.7463402,4.6161735 13.7143484,4.77119817 13.7902328,4.88654638 C13.8661172,5.00189459 14.0211419,5.03388632 14.1364901,4.95800192 Z" id="cookiescript-en-Line" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M14.8679651,10.4804377 L23.383346,16.2200617 C23.4978376,16.2972325 23.6532106,16.266978 23.7303814,16.1524864 C23.8075522,16.0379948 23.7772977,15.8826218 23.6628061,15.805451 L15.1474253,10.065827 C15.0329337,9.98865619 14.8775606,10.0189107 14.8003898,10.1334023 C14.7232191,10.2478938 14.7534735,10.4032669 14.8679651,10.4804377 Z" id="cookiescript-en-Line-Copy-2" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.14197982,4.5255348 L-2.74028336,-1.46054919 C-2.8547799,-1.53771262 -3.01015101,-1.50744816 -3.08731444,-1.39295161 C-3.16447787,-1.27845507 -3.13421341,-1.12308397 -3.01971687,-1.04592054 L5.86254632,4.94016345 C5.97704286,5.01732688 6.13241396,4.98706241 6.20957739,4.87256587 C6.28674083,4.75806933 6.25647636,4.60269823 6.14197982,4.5255348 Z" id="cookiescript-en-Line-Copy" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.82747404,9.99532456 L-3.01816805,16.5244994 C-3.13323644,16.6008074 -3.16465792,16.7559487 -3.08834987,16.8710171 C-3.01204183,16.9860854 -2.85690058,17.0175069 -2.74183218,16.9411989 L7.10380991,10.4120241 C7.2188783,10.335716 7.25029978,10.1805748 7.17399174,10.0655064 C7.09768369,9.95043799 6.94254244,9.91901651 6.82747404,9.99532456 Z" id="cookiescript-en-Line-Copy-3" fill="#DB1F35" fill-rule="nonzero"><\/path> <polygon id="cookiescript-en-Rectangle-2-Copy-3" fill="url(#cookiescript-en-linearGradient-3)" points="-0.00188732147 9 8.99811268 9 8.99811268 15 11.9981127 15 11.9981127 9 20.9981127 9 20.9981127 6 11.9981127 6 11.9981127 0 8.99811268 0 8.99811268 6 -0.00188732147 6"><\/polygon> <\/g> <\/g> <\/svg>        <\/div>\n      <\/div>\n      <span data-cs-custom-select="selected-value">\n      English    <\/span>\n      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n      <\/svg>\n      <\/div>\n  <div class="cookiescript_custom_select_items" data-cs-custom-select="items" id="cookiescript_custom_select_items_full" role="listbox">\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="def_cookie_lang" data-value="English" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-2"> <stop stop-color="#0A17A7" offset="0%"><\/stop> <stop stop-color="#030E88" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-3"> <stop stop-color="#E6273E" offset="0%"><\/stop> <stop stop-color="#CF152B" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-en-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-en-GB"> <rect id="cookiescript-en-FlagBackground" fill="url(#cookiescript-en-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-en-Mask-Copy" fill="url(#cookiescript-en-linearGradient-2)" x="-0.00188732147" y="0" width="21" height="15"><\/rect> <path d="M5.00341861,10 L-0.00188732147,10 L-0.00188732147,5 L5.00341861,5 L-2.08212503,0.220740472 L-0.96373922,-1.43733467 L7.99811268,4.60751076 L7.99811268,-1 L12.9981127,-1 L12.9981127,4.60751076 L21.9599646,-1.43733467 L23.0783504,0.220740472 L15.9928067,5 L20.9981127,5 L20.9981127,10 L15.9928067,10 L23.0783504,14.7792595 L21.9599646,16.4373347 L12.9981127,10.3924892 L12.9981127,16 L7.99811268,16 L7.99811268,10.3924892 L-0.96373922,16.4373347 L-2.08212503,14.7792595 L5.00341861,10 Z" id="cookiescript-en-Rectangle-2" fill="url(#cookiescript-en-linearGradient-1)"><\/path> <path d="M14.1364901,4.95800192 L23.6355136,-1.29114359 C23.7508618,-1.367028 23.7828535,-1.52205266 23.7069691,-1.63740087 C23.6310847,-1.75274908 23.47606,-1.78474082 23.3607118,-1.70885641 L13.8616884,4.5402891 C13.7463402,4.6161735 13.7143484,4.77119817 13.7902328,4.88654638 C13.8661172,5.00189459 14.0211419,5.03388632 14.1364901,4.95800192 Z" id="cookiescript-en-Line" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M14.8679651,10.4804377 L23.383346,16.2200617 C23.4978376,16.2972325 23.6532106,16.266978 23.7303814,16.1524864 C23.8075522,16.0379948 23.7772977,15.8826218 23.6628061,15.805451 L15.1474253,10.065827 C15.0329337,9.98865619 14.8775606,10.0189107 14.8003898,10.1334023 C14.7232191,10.2478938 14.7534735,10.4032669 14.8679651,10.4804377 Z" id="cookiescript-en-Line-Copy-2" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.14197982,4.5255348 L-2.74028336,-1.46054919 C-2.8547799,-1.53771262 -3.01015101,-1.50744816 -3.08731444,-1.39295161 C-3.16447787,-1.27845507 -3.13421341,-1.12308397 -3.01971687,-1.04592054 L5.86254632,4.94016345 C5.97704286,5.01732688 6.13241396,4.98706241 6.20957739,4.87256587 C6.28674083,4.75806933 6.25647636,4.60269823 6.14197982,4.5255348 Z" id="cookiescript-en-Line-Copy" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.82747404,9.99532456 L-3.01816805,16.5244994 C-3.13323644,16.6008074 -3.16465792,16.7559487 -3.08834987,16.8710171 C-3.01204183,16.9860854 -2.85690058,17.0175069 -2.74183218,16.9411989 L7.10380991,10.4120241 C7.2188783,10.335716 7.25029978,10.1805748 7.17399174,10.0655064 C7.09768369,9.95043799 6.94254244,9.91901651 6.82747404,9.99532456 Z" id="cookiescript-en-Line-Copy-3" fill="#DB1F35" fill-rule="nonzero"><\/path> <polygon id="cookiescript-en-Rectangle-2-Copy-3" fill="url(#cookiescript-en-linearGradient-3)" points="-0.00188732147 9 8.99811268 9 8.99811268 15 11.9981127 15 11.9981127 9 20.9981127 9 20.9981127 6 11.9981127 6 11.9981127 0 8.99811268 0 8.99811268 6 -0.00188732147 6"><\/polygon> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>English<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="en" data-value="English" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-2"> <stop stop-color="#0A17A7" offset="0%"><\/stop> <stop stop-color="#030E88" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-en-linearGradient-3"> <stop stop-color="#E6273E" offset="0%"><\/stop> <stop stop-color="#CF152B" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-en-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-en-GB"> <rect id="cookiescript-en-FlagBackground" fill="url(#cookiescript-en-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-en-Mask-Copy" fill="url(#cookiescript-en-linearGradient-2)" x="-0.00188732147" y="0" width="21" height="15"><\/rect> <path d="M5.00341861,10 L-0.00188732147,10 L-0.00188732147,5 L5.00341861,5 L-2.08212503,0.220740472 L-0.96373922,-1.43733467 L7.99811268,4.60751076 L7.99811268,-1 L12.9981127,-1 L12.9981127,4.60751076 L21.9599646,-1.43733467 L23.0783504,0.220740472 L15.9928067,5 L20.9981127,5 L20.9981127,10 L15.9928067,10 L23.0783504,14.7792595 L21.9599646,16.4373347 L12.9981127,10.3924892 L12.9981127,16 L7.99811268,16 L7.99811268,10.3924892 L-0.96373922,16.4373347 L-2.08212503,14.7792595 L5.00341861,10 Z" id="cookiescript-en-Rectangle-2" fill="url(#cookiescript-en-linearGradient-1)"><\/path> <path d="M14.1364901,4.95800192 L23.6355136,-1.29114359 C23.7508618,-1.367028 23.7828535,-1.52205266 23.7069691,-1.63740087 C23.6310847,-1.75274908 23.47606,-1.78474082 23.3607118,-1.70885641 L13.8616884,4.5402891 C13.7463402,4.6161735 13.7143484,4.77119817 13.7902328,4.88654638 C13.8661172,5.00189459 14.0211419,5.03388632 14.1364901,4.95800192 Z" id="cookiescript-en-Line" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M14.8679651,10.4804377 L23.383346,16.2200617 C23.4978376,16.2972325 23.6532106,16.266978 23.7303814,16.1524864 C23.8075522,16.0379948 23.7772977,15.8826218 23.6628061,15.805451 L15.1474253,10.065827 C15.0329337,9.98865619 14.8775606,10.0189107 14.8003898,10.1334023 C14.7232191,10.2478938 14.7534735,10.4032669 14.8679651,10.4804377 Z" id="cookiescript-en-Line-Copy-2" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.14197982,4.5255348 L-2.74028336,-1.46054919 C-2.8547799,-1.53771262 -3.01015101,-1.50744816 -3.08731444,-1.39295161 C-3.16447787,-1.27845507 -3.13421341,-1.12308397 -3.01971687,-1.04592054 L5.86254632,4.94016345 C5.97704286,5.01732688 6.13241396,4.98706241 6.20957739,4.87256587 C6.28674083,4.75806933 6.25647636,4.60269823 6.14197982,4.5255348 Z" id="cookiescript-en-Line-Copy" fill="#DB1F35" fill-rule="nonzero"><\/path> <path d="M6.82747404,9.99532456 L-3.01816805,16.5244994 C-3.13323644,16.6008074 -3.16465792,16.7559487 -3.08834987,16.8710171 C-3.01204183,16.9860854 -2.85690058,17.0175069 -2.74183218,16.9411989 L7.10380991,10.4120241 C7.2188783,10.335716 7.25029978,10.1805748 7.17399174,10.0655064 C7.09768369,9.95043799 6.94254244,9.91901651 6.82747404,9.99532456 Z" id="cookiescript-en-Line-Copy-3" fill="#DB1F35" fill-rule="nonzero"><\/path> <polygon id="cookiescript-en-Rectangle-2-Copy-3" fill="url(#cookiescript-en-linearGradient-3)" points="-0.00188732147 9 8.99811268 9 8.99811268 15 11.9981127 15 11.9981127 9 20.9981127 9 20.9981127 6 11.9981127 6 11.9981127 0 8.99811268 0 8.99811268 6 -0.00188732147 6"><\/polygon> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>English<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="it" data-value="Italian" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-it-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-it-linearGradient-2"> <stop stop-color="#E43D4C" offset="0%"><\/stop> <stop stop-color="#CC2E3C" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-it-linearGradient-3"> <stop stop-color="#1BB65D" offset="0%"><\/stop> <stop stop-color="#139149" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-it-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-it-IT"> <rect id="cookiescript-it-FlagBackground" fill="url(#cookiescript-it-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-it-Mask" fill="url(#cookiescript-it-linearGradient-2)" x="10" y="0" width="11" height="15"><\/rect> <rect id="cookiescript-it-Rectangle-2" fill="url(#cookiescript-it-linearGradient-3)" x="0" y="0" width="7" height="15"><\/rect> <rect id="cookiescript-it-Rectangle-2-Copy" fill="url(#cookiescript-it-linearGradient-1)" x="7" y="0" width="7" height="15"><\/rect> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>Italian<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="es" data-value="Spanish" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-es-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-es-linearGradient-2"> <stop stop-color="#DD172C" offset="0%"><\/stop> <stop stop-color="#C60B1F" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-es-linearGradient-3"> <stop stop-color="#FFD133" offset="0%"><\/stop> <stop stop-color="#FFC500" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-es-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-es-ES"> <rect id="cookiescript-es-FlagBackground" fill="url(#cookiescript-es-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-es-Rectangle-2" fill="url(#cookiescript-es-linearGradient-2)" x="0" y="0" width="21" height="4"><\/rect> <rect id="cookiescript-es-Rectangle-2" fill="url(#cookiescript-es-linearGradient-2)" x="0" y="11" width="21" height="4"><\/rect> <rect id="cookiescript-es-Rectangle-2" fill="url(#cookiescript-es-linearGradient-3)" x="0" y="4" width="21" height="7"><\/rect> <polygon id="cookiescript-es-Rectangle-139-Copy" fill="#FFEDB1" points="5.5 7 6.5 7 6.5 7.5 5.5 7.5"><\/polygon> <path d="M4.9150265,8.4595207 C4.93965065,8.7550105 5.2060923,9 5.5,9 C5.79425164,9 6.06044023,8.75391994 6.0849735,8.4595207 L6.20660023,7 L4.79339977,7 L4.9150265,8.4595207 Z M4.29128242,6.99538898 C4.26848277,6.7217932 4.48071289,6.5 4.7559123,6.5 L6.2440877,6.5 C6.52349535,6.5 6.73202062,6.7157526 6.70871758,6.99538898 L6.58324638,8.50104344 C6.53727067,9.05275191 6.05613518,9.5 5.5,9.5 C4.94771525,9.5 4.46311164,9.05733967 4.41675362,8.50104344 L4.29128242,6.99538898 Z" id="cookiescript-es-Rectangle-137" fill="#A41517" fill-rule="nonzero"><\/path> <polygon id="cookiescript-es-Rectangle-139" fill="#A41517" points="4.5 7.5 6.5 7.5 6.5 8 6 8 5.5 9 5 8 4.5 8"><\/polygon> <rect id="cookiescript-es-Rectangle-135" fill="#A41517" x="3" y="6" width="1" height="3.5"><\/rect> <rect id="cookiescript-es-Rectangle-135-Copy" fill="#A41517" x="7" y="6" width="1" height="3.5"><\/rect> <path d="M4.5,5.5 C4.5,5.22385763 4.71403503,5 5.00468445,5 L5.99531555,5 C6.27404508,5 6.5,5.23193359 6.5,5.5 L6.5,5.74765778 C6.5,5.88702254 6.39247131,6 6.25476074,6 L4.74523926,6 C4.60979736,6 4.5,5.89298248 4.5,5.74765778 L4.5,5.5 Z" id="cookiescript-es-Rectangle-138" fill="#A41517"><\/path> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>Spanish<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="fr" data-value="French" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-fr-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-fr-linearGradient-2"> <stop stop-color="#F44653" offset="0%"><\/stop> <stop stop-color="#EE2A39" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-fr-linearGradient-3"> <stop stop-color="#1035BB" offset="0%"><\/stop> <stop stop-color="#042396" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-fr-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-fr-FR"> <rect id="cookiescript-fr-FlagBackground" fill="url(#cookiescript-fr-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-fr-Mask" fill="url(#cookiescript-fr-linearGradient-2)" x="10" y="0" width="11" height="15"><\/rect> <rect id="cookiescript-fr-Rectangle-2" fill="url(#cookiescript-fr-linearGradient-3)" x="0" y="0" width="7" height="15"><\/rect> <rect id="cookiescript-fr-Rectangle-2-Copy" fill="url(#cookiescript-fr-linearGradient-1)" x="7" y="0" width="7" height="15"><\/rect> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>French<\/span>\n      <\/div>\n          <div class="cookiescript_custom_select_item" role="option" aria-selected="false" tabindex="-1" data-code="nl" data-value="Dutch" data-cs-custom-select="item">\n        <div class="cookiescript_custom_select_flag">\n          <div class="cookiescript_custom_select_flag_inner" data-cs-custom-select="item-flag">\n                          <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink">  <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-nl-linearGradient-1"> <stop stop-color="#FFFFFF" offset="0%"><\/stop> <stop stop-color="#F0F0F0" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-nl-linearGradient-2"> <stop stop-color="#CA2B39" offset="0%"><\/stop> <stop stop-color="#AC1F2C" offset="100%"><\/stop> <\/linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cookiescript-nl-linearGradient-3"> <stop stop-color="#2C56A2" offset="0%"><\/stop> <stop stop-color="#244889" offset="100%"><\/stop> <\/linearGradient> <\/defs> <g id="cookiescript-nl-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="cookiescript-nl-NL"> <rect id="cookiescript-nl-FlagBackground" fill="url(#cookiescript-nl-linearGradient-1)" x="0" y="0" width="21" height="15"><\/rect> <rect id="cookiescript-nl-Rectangle-2" fill="url(#cookiescript-nl-linearGradient-2)" x="0" y="0" width="21" height="5"><\/rect> <rect id="cookiescript-nl-Rectangle-2" fill="url(#cookiescript-nl-linearGradient-3)" x="0" y="10" width="21" height="5"><\/rect> <rect id="cookiescript-nl-Rectangle-2" fill="url(#cookiescript-nl-linearGradient-1)" x="0" y="5" width="21" height="5"><\/rect> <\/g> <\/g> <\/svg>                      <\/div>\n        <\/div>\n        <span>Dutch<\/span>\n      <\/div>\n      <\/div>\n<\/div>          <\/div>\n                <\/div>\n    <div class="cookiescript_fsd_main">\n      <div class="cookiescript_fsd_main_info">\n        <!-- TITLE -->\n                  <div class="cookiescript_fsd_title" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies&quot;,&quot;it&quot;:&quot;Questo sito web utilizza cookie&quot;,&quot;es&quot;:&quot;Ese sitio web utiliza cookies&quot;,&quot;fr&quot;:&quot;Ce site Web utilise des cookies&quot;,&quot;nl&quot;:&quot;Deze website maakt gebruik van cookies.&quot;}">\n            This website uses cookies          <\/div>\n                <!-- END TITLE -->\n\n        <!-- DESCRIPTION -->\n                  <div class="cookiescript_fsd_description">\n            <span data-cs-desc-box="true" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.&quot;,&quot;it&quot;:&quot;Questo sito web utilizza i cookie per migliorare la tua esperienza di navigazione. Utilizzando il nostro sito web acconsenti a tutti i cookie in conformit\\u00e0 con la nostra policy per i cookie.&quot;,&quot;es&quot;:&quot;Este sitio web usa cookies para mejorar la experiencia del usuario. Al utilizar nuestro sitio web, usted acepta todas las cookies de acuerdo con nuestra Pol\\u00edtica de cookies.&quot;,&quot;fr&quot;:&quot;Notre site Web utilise des cookies pour am\\u00e9liorer l\\&quot;exp\\u00e9rience utilisateur. En utilisant notre site Web, vous acceptez tous les cookies conform\\u00e9ment \\u00e0 notre Politique relative aux cookies.&quot;,&quot;nl&quot;:&quot;Deze website gebruikt cookies om uw gebruikerservaring te verbeteren. Door onze website te gebruiken, stemt u in met alle cookies in overeenstemming met ons Cookiebeleid.&quot;}" data-cs-i18n-read="This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.">\n              This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.            <\/span>\n\n                      <\/div>\n                \n\n\n        <!-- END DESCRIPTION -->\n        \n      <\/div>\n    <\/div>\n    <div class="cookiescript_fsd_tabs" data-cs-maintabs="cookiescript" role="tablist">\n      <div tabindex="0" role="tab" id="cookiescript_declaration" class="cookiescript_active" aria-selected="true" data-cs-maintab="declaration" data-cs-i18n-text="{&quot;en&quot;:&quot;Cookie declaration&quot;,&quot;it&quot;:&quot;Dichiarazione sui cookie&quot;,&quot;es&quot;:&quot;Declaraci\\u00f3n de cookies&quot;,&quot;fr&quot;:&quot;D\\u00e9claration relative aux cookies&quot;,&quot;nl&quot;:&quot;Cookieverklaring&quot;}">\n        Cookie declaration      <\/div>\n      <div tabindex="0" role="tab" id="cookiescript_aboutcookies" data-cs-maintab="aboutcookies" data-cs-i18n-text="{&quot;en&quot;:&quot;About cookies&quot;,&quot;it&quot;:&quot;Informazioni sui cookie&quot;,&quot;es&quot;:&quot;Sobre las cookies&quot;,&quot;fr&quot;:&quot;\\u00c0 propos des cookies&quot;,&quot;nl&quot;:&quot;Meer informatie over cookies&quot;}">\n        About cookies      <\/div>\n          <\/div>\n    <div class="cookiescript_fsd_tabs_content">\n      <div id="cookiescript_declarationwrap" data-cs-maintab-content="declaration">\n                            <div class="cookiescript_fsd_category" data-fsd-category="strict">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary&quot;,&quot;it&quot;:&quot;Strettamente necessari&quot;,&quot;es&quot;:&quot;Cookies estrictamente necesarias&quot;,&quot;fr&quot;:&quot;Strictement n\\u00e9cessaires&quot;,&quot;nl&quot;:&quot;Strikt noodzakelijk&quot;}">\n                  Strictly necessary                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.&quot;,&quot;it&quot;:&quot;I cookie strettamente necessari consentono le funzionalit\\u00e0 principali del sito web come l\\&quot;accesso dell\\&quot;utente e la gestione dell\\&quot;account. Il sito web non pu\\u00f2 essere utilizzato correttamente senza i cookie strettamente necessari.&quot;,&quot;es&quot;:&quot;Las cookies estrictamente necesarias permiten la funcionalidad principal del sitio web, como el inicio de sesi\\u00f3n de usuario y la gesti\\u00f3n de cuentas. El sitio web no se puede utilizar correctamente sin las cookies estrictamente necesarias.&quot;,&quot;fr&quot;:&quot;Les cookies strictement n\\u00e9cessaires habilitent des fonctionnalit\\u00e9s de base du site Web telles que la connexion des utilisateurs et la gestion des comptes. Le site Web ne peut pas \\u00eatre utilis\\u00e9 correctement sans les cookies strictement n\\u00e9cessaires.&quot;,&quot;nl&quot;:&quot;Strikt noodzakelijke cookies maken de kernfunctionaliteiten van de website mogelijk, zoals gebruikersaanmelding en accountbeheer. De website kan niet goed worden gebruikt zonder de strikt noodzakelijke cookies.&quot;}">\n                  Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="strict"\n                  class="mdc-switch mdc-switch--selected"\n                  disabled                  type="button"\n                  role="switch"\n                  aria-checked="true"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="strict"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="strict">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;,&quot;it&quot;:&quot;Mostra i cookie&quot;,&quot;es&quot;:&quot;Mostrar cookies&quot;,&quot;fr&quot;:&quot;Afficher les cookies&quot;,&quot;nl&quot;:&quot;Toon cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;,&quot;it&quot;:&quot;Nascondi i cookie&quot;,&quot;es&quot;:&quot;Ocultar cookies&quot;,&quot;fr&quot;:&quot;Masquer les cookies&quot;,&quot;nl&quot;:&quot;Verberg cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                        <div class="cookiescript_fsd_cookies cookiescript_hidden" inert data-cs-cookies-info="strict">\n                              <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                  <caption style="display: none;">Cookie report<\/caption>\n                  <thead>\n                  <tr>\n                    <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;,&quot;it&quot;:&quot;Nome&quot;,&quot;es&quot;:&quot;Nombre&quot;,&quot;fr&quot;:&quot;Nom&quot;,&quot;nl&quot;:&quot;Naam&quot;}">\n                      Name                    <\/th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;,&quot;it&quot;:&quot;Fornitore \\\/ Dominio&quot;,&quot;es&quot;:&quot;Proveedor \\\/ Dominio&quot;,&quot;fr&quot;:&quot;Fournisseur \\\/ Domaine&quot;,&quot;nl&quot;:&quot;Aanbieder \\\/ Domein&quot;}">\n                      <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                    <\/th>\n                    <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;,&quot;it&quot;:&quot;Scadenza&quot;,&quot;es&quot;:&quot;Vencimiento&quot;,&quot;fr&quot;:&quot;Expiration&quot;,&quot;nl&quot;:&quot;Vervaldatum&quot;}">\n                      Expiration                    <\/th>\n                    <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;,&quot;it&quot;:&quot;Descrizione&quot;,&quot;es&quot;:&quot;Descripci\\u00f3n&quot;,&quot;fr&quot;:&quot;Description&quot;,&quot;nl&quot;:&quot;Omschrijving&quot;}">\n                      Description                    <\/th>\n                  <\/tr>\n                  <\/thead>\n                  <tbody>\n                                      <tr>\n                      <td>__cf_bm<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/www.cloudflare.com\/privacypolicy\'>Cloudflare Inc.<\/a>                          <\/div>\n                                                .activehosted.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;29 minutes 56 seconds&quot;,&quot;it&quot;:&quot;29 minuti 56 secondi&quot;,&quot;es&quot;:&quot;29 minutos 56 segundos&quot;,&quot;fr&quot;:&quot;29 minutes 56 secondes&quot;,&quot;nl&quot;:&quot;29 minuten 56 seconden&quot;}">\n                        29 minutes 56 seconds                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per distinguere tra umani e bot. Ci\\u00f2 \\u00e8 vantaggioso per il sito Web, al fine di effettuare rapporti validi sull&amp;#39;utilizzo del proprio sito Web.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para distinguir entre humanos y bots. Esto es beneficioso para el sitio web, con el fin de realizar informes v\\u00e1lidos sobre el uso de su sitio web.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour faire la distinction entre les humains et les robots. Ceci est b\\u00e9n\\u00e9fique pour le site Web, afin de faire des rapports valides sur l&amp;#39;utilisation de leur site Web.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om onderscheid te maken tussen mensen en bots. Dit is gunstig voor de website, om geldige rapporten te kunnen maken over het gebruik van hun website.&quot;}">\n                          This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>prism_1000440888<\/td>\n                      <td>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;4 weeks 2 days&quot;,&quot;it&quot;:&quot;4 settimane 2 giorni&quot;,&quot;es&quot;:&quot;4 semanas 2 d\\u00edas&quot;,&quot;fr&quot;:&quot;4 semaines 2 jours&quot;,&quot;nl&quot;:&quot;4 weken 2 dagen&quot;}">\n                        4 weeks 2 days                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;&quot;}">\n                                                <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>CONCRETE<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            bubblechic.net                          <\/div>\n                                                formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;,&quot;it&quot;:&quot;Sessione&quot;,&quot;es&quot;:&quot;Sesi\\u00f3n&quot;,&quot;fr&quot;:&quot;Session&quot;,&quot;nl&quot;:&quot;Sessie&quot;}">\n                        Session                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used for maintaining user session state across page requests.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per mantenere lo stato della sessione utente attraverso le richieste di pagina.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para mantener el estado de sesi\\u00f3n de usuario a trav\\u00e9s de las solicitudes de p\\u00e1gina.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour maintenir l\'\\u00e9tat de la session utilisateur \\u00e0 travers les requ\\u00eates de page.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om de gebruikerssessiestatus op paginaverzoeken te behouden.&quot;}">\n                          This cookie is used for maintaining user session state across page requests.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>CookieScriptConsent<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/cookie-script.com\/privacy-policy.html\'>CookieScript<\/a>                          <\/div>\n                                                formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;4 weeks 2 days&quot;,&quot;it&quot;:&quot;4 settimane 2 giorni&quot;,&quot;es&quot;:&quot;4 semanas 2 d\\u00edas&quot;,&quot;fr&quot;:&quot;4 semaines 2 jours&quot;,&quot;nl&quot;:&quot;4 weken 2 dagen&quot;}">\n                        4 weeks 2 days                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used by Cookie-Script.com service to remember visitor cookie consent preferences. It is necessary for Cookie-Script.com cookie banner to work properly.&quot;}">\n                          This cookie is used by Cookie-Script.com service to remember visitor cookie consent preferences. It is necessary for Cookie-Script.com cookie banner to work properly.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>prism_1000440888<\/td>\n                      <td>\n                                                prism.app-us1.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;4 weeks 2 days&quot;,&quot;it&quot;:&quot;4 settimane 2 giorni&quot;,&quot;es&quot;:&quot;4 semanas 2 d\\u00edas&quot;,&quot;fr&quot;:&quot;4 semaines 2 jours&quot;,&quot;nl&quot;:&quot;4 weken 2 dagen&quot;}">\n                        4 weeks 2 days                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;&quot;}">\n                                                <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_pinterest_ct_ua<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policy.pinterest.com\/en\/privacy-policy\'>Pinterest Inc.<\/a>                          <\/div>\n                                                .ct.pinterest.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 4 weeks&quot;,&quot;it&quot;:&quot;11 mesi 4 settimane&quot;,&quot;es&quot;:&quot;11 meses 4 semanas&quot;,&quot;fr&quot;:&quot;11 mois 4 semaines&quot;,&quot;nl&quot;:&quot;11 maanden 4 weken&quot;}">\n                        11 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is being set in relation to Pinterest Marketing&quot;,&quot;it&quot;:&quot;Questo cookie viene impostato in relazione a Pinterest Marketing&quot;,&quot;es&quot;:&quot;Esta cookie se establece en relaci\\u00f3n con Pinterest Marketing&quot;,&quot;fr&quot;:&quot;Ce cookie est d\\u00e9fini en relation avec Pinterest Marketing&quot;,&quot;nl&quot;:&quot;Deze cookie wordt geplaatst in relatie tot Pinterest Marketing&quot;}">\n                          This cookie is being set in relation to Pinterest Marketing                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>tf_respondent_cc<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/admin.typeform.com\/to\/dwk6gt\'>Typeform<\/a>                          <\/div>\n                                                .typeform.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;6 months&quot;,&quot;it&quot;:&quot;6 mesi&quot;,&quot;es&quot;:&quot;6 meses&quot;,&quot;fr&quot;:&quot;6 mois&quot;,&quot;nl&quot;:&quot;6 maanden&quot;}">\n                        6 months                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to track users\' consent to the use of cookies on the website, ensuring that users\' preferences are respected in accordance with data protection regulations.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per monitorare il consenso degli utenti all\'utilizzo dei cookie sul sito web, garantendo che le preferenze degli utenti siano rispettate in conformit\\u00e0 alle normative sulla protezione dei dati.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para rastrear el consentimiento de los usuarios al uso de cookies en el sitio web, asegurando que las preferencias de los usuarios se respeten de acuerdo con las normas de protecci\\u00f3n de datos.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour suivre le consentement des utilisateurs \\u00e0 l\'utilisation des cookies sur le site, en veillant \\u00e0 ce que les pr\\u00e9f\\u00e9rences des utilisateurs soient respect\\u00e9es conform\\u00e9ment aux r\\u00e8gles de protection des donn\\u00e9es.&quot;,&quot;nl&quot;:&quot;Dit cookie wordt gebruikt om de toestemming van gebruikers voor het gebruik van cookies op de website bij te houden, zodat de voorkeuren van gebruikers worden gerespecteerd in overeenstemming met de voorschriften inzake gegevensbescherming.&quot;}">\n                          This cookie is used to track users\' consent to the use of cookies on the website, ensuring that users\' preferences are respected in accordance with data protection regulations.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>AWSALBTGCORS<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/aws.amazon.com\/privacy\/\'>Amazon Web Services, Inc.<\/a>                          <\/div>\n                                                form.typeform.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 week&quot;,&quot;it&quot;:&quot;1 settimana&quot;,&quot;es&quot;:&quot;1 semana&quot;,&quot;fr&quot;:&quot;1 semaine&quot;,&quot;nl&quot;:&quot;1 week&quot;}">\n                        1 week                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to support load balancing, ensuring that visitor page requests are routed to the same server in any browsing session.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per supportare il bilanciamento del carico, assicurando che le richieste della pagina dei visitatori siano indirizzate allo stesso server in qualsiasi sessione di navigazione.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para soportar el equilibrio de carga, asegurando que las solicitudes de p\\u00e1gina de visitantes se enruten al mismo servidor en cualquier sesi\\u00f3n de navegaci\\u00f3n.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour prendre en charge l\'\\u00e9quilibrage de la charge, en s\'assurant que les requ\\u00eates de page de visiteur sont achemin\\u00e9es vers le m\\u00eame serveur dans toute session de navigation.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om het laden van balanceren te ondersteunen, zodat bezoekerspaginaverzoeken in elke surfsessie naar dezelfde server worden doorgestuurd.&quot;}">\n                          This cookie is used to support load balancing, ensuring that visitor page requests are routed to the same server in any browsing session.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                    <\/tbody>\n                <\/table>\n              \n              \n            <\/div>\n          <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="performance">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Performance&quot;,&quot;it&quot;:&quot;Performance&quot;,&quot;es&quot;:&quot;Cookies de rendimiento&quot;,&quot;fr&quot;:&quot;Performance&quot;,&quot;nl&quot;:&quot;Prestatie&quot;}">\n                  Performance                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor.&quot;,&quot;it&quot;:&quot;I cookie di performance vengono utilizzati per vedere come i visitatori utilizzano il sito web, ad esempio con i cookie analitici. Questi cookie non possono essere utilizzati per identificare direttamente un determinato visitatore.&quot;,&quot;es&quot;:&quot;Las cookies de rendimiento se utilizan para ver c\\u00f3mo los visitantes utilizan el sitio web. Por ejemplo: cookies anal\\u00edticas. Este tipo de cookies no se pueden utilizar para identificar directamente a un determinado visitante.&quot;,&quot;fr&quot;:&quot;Les cookies de performance sont utilis\\u00e9s pour voir comment les visiteurs utilisent le site Web, par exemple les cookies d\\&quot;analyse. Ces cookies ne peuvent pas \\u00eatre utilis\\u00e9s pour identifier directement un visiteur sp\\u00e9cifique.&quot;,&quot;nl&quot;:&quot;Prestatiecookies worden gebruikt om te zien hoe bezoekers de website gebruiken, bijv. analytische cookies. Deze cookies kunnen niet worden gebruikt om een bepaalde bezoeker direct te identificeren.&quot;}">\n                  Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="performance"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="performance"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="performance">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;,&quot;it&quot;:&quot;Mostra i cookie&quot;,&quot;es&quot;:&quot;Mostrar cookies&quot;,&quot;fr&quot;:&quot;Afficher les cookies&quot;,&quot;nl&quot;:&quot;Toon cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;,&quot;it&quot;:&quot;Nascondi i cookie&quot;,&quot;es&quot;:&quot;Ocultar cookies&quot;,&quot;fr&quot;:&quot;Masquer les cookies&quot;,&quot;nl&quot;:&quot;Verberg cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                        <div class="cookiescript_fsd_cookies cookiescript_hidden" inert data-cs-cookies-info="performance">\n                              <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                  <caption style="display: none;">Cookie report<\/caption>\n                  <thead>\n                  <tr>\n                    <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;,&quot;it&quot;:&quot;Nome&quot;,&quot;es&quot;:&quot;Nombre&quot;,&quot;fr&quot;:&quot;Nom&quot;,&quot;nl&quot;:&quot;Naam&quot;}">\n                      Name                    <\/th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;,&quot;it&quot;:&quot;Fornitore \\\/ Dominio&quot;,&quot;es&quot;:&quot;Proveedor \\\/ Dominio&quot;,&quot;fr&quot;:&quot;Fournisseur \\\/ Domaine&quot;,&quot;nl&quot;:&quot;Aanbieder \\\/ Domein&quot;}">\n                      <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                    <\/th>\n                    <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;,&quot;it&quot;:&quot;Scadenza&quot;,&quot;es&quot;:&quot;Vencimiento&quot;,&quot;fr&quot;:&quot;Expiration&quot;,&quot;nl&quot;:&quot;Vervaldatum&quot;}">\n                      Expiration                    <\/th>\n                    <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;,&quot;it&quot;:&quot;Descrizione&quot;,&quot;es&quot;:&quot;Descripci\\u00f3n&quot;,&quot;fr&quot;:&quot;Description&quot;,&quot;nl&quot;:&quot;Omschrijving&quot;}">\n                      Description                    <\/th>\n                  <\/tr>\n                  <\/thead>\n                  <tbody>\n                                      <tr>\n                      <td>ar_debug<\/td>\n                      <td>\n                                                .pinterest.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 4 weeks&quot;,&quot;it&quot;:&quot;11 mesi 4 settimane&quot;,&quot;es&quot;:&quot;11 meses 4 semanas&quot;,&quot;fr&quot;:&quot;11 mois 4 semaines&quot;,&quot;nl&quot;:&quot;11 maanden 4 weken&quot;}">\n                        11 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used for troubleshooting and analytical purposes, intended to track errors and improve services by providing insights into how the website is functioning.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per la risoluzione dei problemi e scopi analitici, volti a monitorare gli errori e migliorare i servizi fornendo informazioni su come funziona il sito web.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para solucionar problemas y fines anal\\u00edticos, con el fin de rastrear errores y mejorar los servicios proporcionando informaci\\u00f3n sobre c\\u00f3mo funciona el sitio web.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 \\u00e0 des fins de d\\u00e9pannage et d\'analyse, afin de suivre les erreurs et d\'am\\u00e9liorer les services en fournissant des informations sur le fonctionnement du site Web.&quot;,&quot;nl&quot;:&quot;Dit cookie wordt gebruikt voor het oplossen van problemen en analytische doeleinden, bedoeld om fouten op te sporen en diensten te verbeteren door inzicht te geven in hoe de website functioneert.&quot;}">\n                          This cookie is used for troubleshooting and analytical purposes, intended to track errors and improve services by providing insights into how the website is functioning.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>pageviewCount<\/td>\n                      <td>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;,&quot;it&quot;:&quot;Sessione&quot;,&quot;es&quot;:&quot;Sesi\\u00f3n&quot;,&quot;fr&quot;:&quot;Session&quot;,&quot;nl&quot;:&quot;Sessie&quot;}">\n                        Session                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to count and track page views by a user during their visit to enhance and personalize the user experience.&quot;}">\n                          This cookie is used to count and track page views by a user during their visit to enhance and personalize the user experience.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_ga<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policies.google.com\/privacy\'>Google LLC<\/a>                          <\/div>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year 1 month&quot;,&quot;it&quot;:&quot;1 anno 1 mese&quot;,&quot;es&quot;:&quot;1 a\\u00f1o 1 mes&quot;,&quot;fr&quot;:&quot;1 an 1 mois&quot;,&quot;nl&quot;:&quot;1 jaar 1 maand&quot;}">\n                        1 year 1 month                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie name is associated with Google Universal Analytics - which is a significant update to Google\'s more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports. &quot;,&quot;it&quot;:&quot;Questo nome di cookie \\u00e8 associato a Google Universal Analytics, che \\u00e8 un aggiornamento significativo del servizio di analisi pi\\u00f9 comunemente utilizzato da Google. Questo cookie viene utilizzato per distinguere utenti unici assegnando un numero generato in modo casuale come identificatore del cliente. \\u00c8 incluso in ogni richiesta di pagina in un sito e utilizzato per calcolare i dati di visitatori, sessioni e campagne per i rapporti di analisi dei siti.&quot;,&quot;es&quot;:&quot;Este nombre de cookie est\\u00e1 asociado con Google Universal Analytics, que es una actualizaci\\u00f3n significativa del servicio de an\\u00e1lisis de Google m\\u00e1s utilizado. Esta cookie se utiliza para distinguir usuarios \\u00fanicos asignando un n\\u00famero generado aleatoriamente como identificador de cliente. Se incluye en cada solicitud de p\\u00e1gina en un sitio y se utiliza para calcular los datos de visitantes, sesiones y campa\\u00f1as para los informes de an\\u00e1lisis de sitios.&quot;,&quot;fr&quot;:&quot;Ce nom de cookie est associ\\u00e9 \\u00e0 Google Universal Analytics - qui est une mise \\u00e0 jour importante du service d&amp;#39;analyse le plus couramment utilis\\u00e9 de Google. Ce cookie est utilis\\u00e9 pour distinguer les utilisateurs uniques en attribuant un num\\u00e9ro g\\u00e9n\\u00e9r\\u00e9 al\\u00e9atoirement comme identifiant client. Il est inclus dans chaque demande de page d&amp;#39;un site et utilis\\u00e9 pour calculer les donn\\u00e9es de visiteur, de session et de campagne pour les rapports d&amp;#39;analyse du site.&quot;,&quot;nl&quot;:&quot;Deze cookienaam is gekoppeld aan Google Universal Analytics - wat een belangrijke update is van de meer algemeen gebruikte analyseservice van Google. Deze cookie wordt gebruikt om unieke gebruikers te onderscheiden door een willekeurig gegenereerd nummer toe te wijzen als klant-ID. Het is opgenomen in elk paginaverzoek op een site en wordt gebruikt om bezoekers-, sessie- en campagnegegevens te berekenen voor de analyserapporten van de site.&quot;}">\n                          This cookie name is associated with Google Universal Analytics - which is a significant update to Google\'s more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.                       <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_ga_4ZRDY5FW33<\/td>\n                      <td>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year 1 month&quot;,&quot;it&quot;:&quot;1 anno 1 mese&quot;,&quot;es&quot;:&quot;1 a\\u00f1o 1 mes&quot;,&quot;fr&quot;:&quot;1 an 1 mois&quot;,&quot;nl&quot;:&quot;1 jaar 1 maand&quot;}">\n                        1 year 1 month                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used by Google Analytics to persist session state.&quot;}">\n                          This cookie is used by Google Analytics to persist session state.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_ga_TFRMDH3NJ8<\/td>\n                      <td>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year 1 month&quot;,&quot;it&quot;:&quot;1 anno 1 mese&quot;,&quot;es&quot;:&quot;1 a\\u00f1o 1 mes&quot;,&quot;fr&quot;:&quot;1 an 1 mois&quot;,&quot;nl&quot;:&quot;1 jaar 1 maand&quot;}">\n                        1 year 1 month                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used by Google Analytics to persist session state.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato da Google Analytics per mantenere lo stato della sessione.&quot;,&quot;es&quot;:&quot;Google Analytics utiliza esta cookie para mantener el estado de la sesi\\u00f3n.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 par Google Analytics pour conserver l&amp;#39;\\u00e9tat de la session.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt door Google Analytics om de sessiestatus te behouden.&quot;}">\n                          This cookie is used by Google Analytics to persist session state.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                    <\/tbody>\n                <\/table>\n              \n              \n            <\/div>\n          <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="targeting">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting&quot;,&quot;it&quot;:&quot;Targeting&quot;,&quot;es&quot;:&quot;Cookies de preferencias&quot;,&quot;fr&quot;:&quot;Ciblage&quot;,&quot;nl&quot;:&quot;Targeting&quot;}">\n                  Targeting                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other websites.&quot;,&quot;it&quot;:&quot;I cookie di targeting vengono utilizzati per identificare i visitatori tra diversi siti web, ad esempio partner di contenuti, reti di banner. Questi cookie possono essere utilizzati dalle aziende per creare un profilo degli interessi dei visitatori o mostrare annunci pertinenti su altri siti web.&quot;,&quot;es&quot;:&quot;Las cookies de preferencias se utilizan para identificar a los visitantes entre diferentes sitios web. Por ejemplo: socios de contenido, redes de banners. Las empresas pueden utilizar esas cookies para crear un perfil de los intereses de los visitantes o mostrar anuncios relevantes en otros sitios web.&quot;,&quot;fr&quot;:&quot;Les cookies de ciblage sont utilis\\u00e9s pour identifier les visiteurs sur diff\\u00e9rents sites Web, par exemple les partenaires de contenu, les r\\u00e9seaux de banni\\u00e8res. Ces cookies peuvent \\u00eatre utilis\\u00e9s par les entreprises pour cr\\u00e9er un profil des int\\u00e9r\\u00eats des visiteurs ou afficher des publicit\\u00e9s pertinentes sur d\\&quot;autres sites Web.&quot;,&quot;nl&quot;:&quot;Targeting cookies worden gebruikt om bezoekers op verschillende websites te identificeren, bijv. websites die inhoudspartners zijn, of deel uitmaken van bannernetwerken. Deze cookies kunnen door bedrijven worden gebruikt om een profiel te cre\\u00ebren van de interesses van de bezoeker of om relevante advertenties op andere websites weer te geven.&quot;}">\n                  Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other websites.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="targeting"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="targeting"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="targeting">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;,&quot;it&quot;:&quot;Mostra i cookie&quot;,&quot;es&quot;:&quot;Mostrar cookies&quot;,&quot;fr&quot;:&quot;Afficher les cookies&quot;,&quot;nl&quot;:&quot;Toon cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;,&quot;it&quot;:&quot;Nascondi i cookie&quot;,&quot;es&quot;:&quot;Ocultar cookies&quot;,&quot;fr&quot;:&quot;Masquer les cookies&quot;,&quot;nl&quot;:&quot;Verberg cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                        <div class="cookiescript_fsd_cookies cookiescript_hidden" inert data-cs-cookies-info="targeting">\n                              <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                  <caption style="display: none;">Cookie report<\/caption>\n                  <thead>\n                  <tr>\n                    <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;,&quot;it&quot;:&quot;Nome&quot;,&quot;es&quot;:&quot;Nombre&quot;,&quot;fr&quot;:&quot;Nom&quot;,&quot;nl&quot;:&quot;Naam&quot;}">\n                      Name                    <\/th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;,&quot;it&quot;:&quot;Fornitore \\\/ Dominio&quot;,&quot;es&quot;:&quot;Proveedor \\\/ Dominio&quot;,&quot;fr&quot;:&quot;Fournisseur \\\/ Domaine&quot;,&quot;nl&quot;:&quot;Aanbieder \\\/ Domein&quot;}">\n                      <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                    <\/th>\n                    <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;,&quot;it&quot;:&quot;Scadenza&quot;,&quot;es&quot;:&quot;Vencimiento&quot;,&quot;fr&quot;:&quot;Expiration&quot;,&quot;nl&quot;:&quot;Vervaldatum&quot;}">\n                      Expiration                    <\/th>\n                    <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;,&quot;it&quot;:&quot;Descrizione&quot;,&quot;es&quot;:&quot;Descripci\\u00f3n&quot;,&quot;fr&quot;:&quot;Description&quot;,&quot;nl&quot;:&quot;Omschrijving&quot;}">\n                      Description                    <\/th>\n                  <\/tr>\n                  <\/thead>\n                  <tbody>\n                                      <tr>\n                      <td>optiMonkClient<\/td>\n                      <td>\n                                                formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 4 weeks&quot;,&quot;it&quot;:&quot;11 mesi 4 settimane&quot;,&quot;es&quot;:&quot;11 meses 4 semanas&quot;,&quot;fr&quot;:&quot;11 mois 4 semaines&quot;,&quot;nl&quot;:&quot;11 maanden 4 weken&quot;}">\n                        11 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to track user interactions and behavior on the website to provide targeted content and offers through optiMonk campaigns.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per monitorare le interazioni e i comportamenti degli utenti sul sito web per fornire contenuti e offerte mirati tramite campagne optiMonk.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para rastrear las interacciones y el comportamiento de los usuarios en el sitio web para proporcionar contenido espec\\u00edfico y ofertas a trav\\u00e9s de campa\\u00f1as de optiMonk.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour suivre les interactions et les comportements des utilisateurs sur le site Web afin de fournir des contenus et des offres cibl\\u00e9s gr\\u00e2ce aux campagnes optiMonk.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om gebruikersinteracties en gedrag op de website te volgen om gerichte inhoud en aanbiedingen te bieden via optiMonk-campagnes.&quot;}">\n                          This cookie is used to track user interactions and behavior on the website to provide targeted content and offers through optiMonk campaigns.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>FPID<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policies.google.com\/privacy\'>Google<\/a>                          <\/div>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year 1 month&quot;,&quot;it&quot;:&quot;1 anno 1 mese&quot;,&quot;es&quot;:&quot;1 a\\u00f1o 1 mes&quot;,&quot;fr&quot;:&quot;1 an 1 mois&quot;,&quot;nl&quot;:&quot;1 jaar 1 maand&quot;}">\n                        1 year 1 month                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to track user behavior and preferences to provide a more personalized experience.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per monitorare il comportamento e le preferenze dell\'utente per fornire un\'esperienza pi\\u00f9 personalizzata.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para rastrear el comportamiento del usuario y las preferencias para proporcionar una experiencia m\\u00e1s personalizada.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour suivre le comportement et les pr\\u00e9f\\u00e9rences des utilisateurs afin de fournir une exp\\u00e9rience plus personnalis\\u00e9e.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om gebruikersgedrag en voorkeuren bij te houden om een meer persoonlijke ervaring te bieden.&quot;}">\n                          This cookie is used to track user behavior and preferences to provide a more personalized experience.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>optiMonkClientId<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/www.optimonk.com\/privacy_policy\'>OptiMonk<\/a>                          <\/div>\n                                                formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 4 weeks&quot;,&quot;it&quot;:&quot;11 mesi 4 settimane&quot;,&quot;es&quot;:&quot;11 meses 4 semanas&quot;,&quot;fr&quot;:&quot;11 mois 4 semaines&quot;,&quot;nl&quot;:&quot;11 maanden 4 weken&quot;}">\n                        11 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to identify a returning user to the website, providing a personalized experience by tailoring relevant content and offers to the user\'s preferences.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per identificare un utente di ritorno al sito web, fornendo un\'esperienza personalizzata adattando i contenuti pertinenti e le offerte alle preferenze dell\'utente.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para identificar a un usuario que regresa al sitio web, proporcionando una experiencia personalizada adaptando contenido relevante y ofreciendo a las preferencias del usuario.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour identifier un utilisateur de retour sur le site, fournissant une exp\\u00e9rience personnalis\\u00e9e en adaptant le contenu pertinent et offre aux pr\\u00e9f\\u00e9rences de l\'utilisateur.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om een terugkerende gebruiker naar de website te identificeren en een persoonlijke ervaring te bieden door relevante inhoud en aanbiedingen aan te passen aan de voorkeuren van de gebruiker.&quot;}">\n                          This cookie is used to identify a returning user to the website, providing a personalized experience by tailoring relevant content and offers to the user\'s preferences.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_fbp<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/www.facebook.com\/policy.php\'>Meta Platform Inc.<\/a>                          <\/div>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 months 4 weeks&quot;,&quot;it&quot;:&quot;2 mesi 4 settimane&quot;,&quot;es&quot;:&quot;2 meses 4 semanas&quot;,&quot;fr&quot;:&quot;2 mois 4 semaines&quot;,&quot;nl&quot;:&quot;2 maanden 4 weken&quot;}">\n                        2 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;Used by Meta to deliver a series of advertisement products such as real time bidding from third party advertisers&quot;,&quot;it&quot;:&quot;Utilizzato da Facebook per fornire una serie di prodotti pubblicitari come offerte in tempo reale da inserzionisti di terze parti&quot;,&quot;es&quot;:&quot;Utilizado por Facebook para ofrecer una serie de productos publicitarios, como ofertas en tiempo real de anunciantes externos.&quot;,&quot;fr&quot;:&quot;Utilis\\u00e9 par Facebook pour fournir une s\\u00e9rie de produits publicitaires tels que les ench\\u00e8res en temps r\\u00e9el d&amp;#39;annonceurs tiers&quot;,&quot;nl&quot;:&quot;Gebruikt door Facebook om een reeks advertentieproducten te leveren, zoals realtime bieden van externe adverteerders&quot;}">\n                          Used by Meta to deliver a series of advertisement products such as real time bidding from third party advertisers                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_gcl_au<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policies.google.com\/privacy\'>Google LLC<\/a>                          <\/div>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 months 4 weeks&quot;,&quot;it&quot;:&quot;2 mesi 4 settimane&quot;,&quot;es&quot;:&quot;2 meses 4 semanas&quot;,&quot;fr&quot;:&quot;2 mois 4 semaines&quot;,&quot;nl&quot;:&quot;2 maanden 4 weken&quot;}">\n                        2 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;Used by Google AdSense for experimenting with advertisement efficiency across websites using their services&quot;,&quot;it&quot;:&quot;Questo cookie \\u00e8 impostato da Doubleclick e fornisce informazioni su come l&amp;#39;utente finale utilizza il sito Web e qualsiasi pubblicit\\u00e0 che l&amp;#39;utente finale potrebbe aver visto prima di visitare il sito Web.&quot;,&quot;es&quot;:&quot;Esta cookie es establecida por Doubleclick y lleva a cabo informaci\\u00f3n sobre c\\u00f3mo el usuario final utiliza el sitio web y cualquier publicidad que el usuario final haya visto antes de visitar dicho sitio web.&quot;,&quot;fr&quot;:&quot;Ce cookie est d\\u00e9fini par Doubleclick et fournit des informations sur la mani\\u00e8re dont l&amp;#39;utilisateur final utilise le site Web et sur toute publicit\\u00e9 que l&amp;#39;utilisateur final a pu voir avant de visiter ledit site Web.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt ingesteld door Doubleclick en voert informatie uit over hoe de eindgebruiker de website gebruikt en over eventuele advertenties die de eindgebruiker heeft gezien voordat hij de genoemde website bezocht.&quot;}">\n                          Used by Google AdSense for experimenting with advertisement efficiency across websites using their services                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>_pin_unauth<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policy.pinterest.com\/en\/privacy-policy\'>Pinterest Inc.<\/a>                          <\/div>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 4 weeks&quot;,&quot;it&quot;:&quot;11 mesi 4 settimane&quot;,&quot;es&quot;:&quot;11 meses 4 semanas&quot;,&quot;fr&quot;:&quot;11 mois 4 semaines&quot;,&quot;nl&quot;:&quot;11 maanden 4 weken&quot;}">\n                        11 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;Registers a unique ID that identifies and recognizes the user. Is used for targeted advertising.&quot;,&quot;it&quot;:&quot;Registra un ID univoco che identifica e riconosce l&amp;#39;utente. Viene utilizzato per pubblicit\\u00e0 mirata.&quot;,&quot;es&quot;:&quot;Registra una ID \\u00fanica que identifica y reconoce al usuario. Se utiliza para publicidad dirigida.&quot;,&quot;fr&quot;:&quot;Enregistre un identifiant unique qui identifie et reconna\\u00eet l&amp;#39;utilisateur. Est utilis\\u00e9 pour la publicit\\u00e9 cibl\\u00e9e.&quot;,&quot;nl&quot;:&quot;Registreert een unieke ID die de gebruiker identificeert en herkent. Wordt gebruikt voor gerichte advertenties.&quot;}">\n                          Registers a unique ID that identifies and recognizes the user. Is used for targeted advertising.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>attribution_user_id<\/td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a  tabindex=\'-1\' target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/admin.typeform.com\/to\/dwk6gt\'>Typeform<\/a>                          <\/div>\n                                                .typeform.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 4 weeks&quot;,&quot;it&quot;:&quot;11 mesi 4 settimane&quot;,&quot;es&quot;:&quot;11 meses 4 semanas&quot;,&quot;fr&quot;:&quot;11 mois 4 semaines&quot;,&quot;nl&quot;:&quot;11 maanden 4 weken&quot;}">\n                        11 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to track the ID of the user for attribution purposes to measure the effectiveness of advertising campaigns or marketing strategies.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per monitorare l\'ID dell\'utente a fini di attribuzione per misurare l\'efficacia delle campagne pubblicitarie o strategie di marketing.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para rastrear el ID del usuario con fines de atribuci\\u00f3n para medir la eficacia de las campa\\u00f1as publicitarias o estrategias de marketing.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour suivre l\'identit\\u00e9 de l\'utilisateur \\u00e0 des fins d\'attribution pour mesurer l\'efficacit\\u00e9 des campagnes publicitaires ou des strat\\u00e9gies de marketing.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om het ID van de gebruiker bij te houden om de effectiviteit van reclamecampagnes of marketingstrategie\\u00ebn te meten.&quot;}">\n                          This cookie is used to track the ID of the user for attribution purposes to measure the effectiveness of advertising campaigns or marketing strategies.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                    <\/tbody>\n                <\/table>\n              \n              \n            <\/div>\n          <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="functionality">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality&quot;,&quot;it&quot;:&quot;Funzionalit\\u00e0&quot;,&quot;es&quot;:&quot;Cookies de funcionalidad&quot;,&quot;fr&quot;:&quot;Fonctionnalit\\u00e9&quot;,&quot;nl&quot;:&quot;Functioneel&quot;}">\n                  Functionality                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality cookies are used to remember visitor information on the website, eg. language, timezone, enhanced content.&quot;,&quot;it&quot;:&quot;I cookie di funzionalit\\u00e0 vengono utilizzati per ricordare le informazioni del visitatore sul sito web, ad esempio lingua, fuso orario e contenuto avanzato.&quot;,&quot;es&quot;:&quot;Las cookies de funcionalidad se utilizan para recordar la informaci\\u00f3n de los visitantes en el sitio web. Por ejemplo: el idioma, la zona horaria, el contenido mejorado.&quot;,&quot;fr&quot;:&quot;Les cookies de fonctionnalit\\u00e9 sont utilis\\u00e9s pour m\\u00e9moriser les informations des visiteurs sur le site Web, comme. la langue, le fuseau horaire, le contenu am\\u00e9lior\\u00e9.&quot;,&quot;nl&quot;:&quot;Functionele cookies worden gebruikt om bezoekersinformatie op de website te onthouden, bijv. taal, tijdzone en verbeterde inhoud.&quot;}">\n                  Functionality cookies are used to remember visitor information on the website, eg. language, timezone, enhanced content.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="functionality"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="functionality"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="functionality">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;,&quot;it&quot;:&quot;Mostra i cookie&quot;,&quot;es&quot;:&quot;Mostrar cookies&quot;,&quot;fr&quot;:&quot;Afficher les cookies&quot;,&quot;nl&quot;:&quot;Toon cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;,&quot;it&quot;:&quot;Nascondi i cookie&quot;,&quot;es&quot;:&quot;Ocultar cookies&quot;,&quot;fr&quot;:&quot;Masquer les cookies&quot;,&quot;nl&quot;:&quot;Verberg cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                        <div class="cookiescript_fsd_cookies cookiescript_hidden" inert data-cs-cookies-info="functionality">\n                              <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                  <caption style="display: none;">Cookie report<\/caption>\n                  <thead>\n                  <tr>\n                    <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;,&quot;it&quot;:&quot;Nome&quot;,&quot;es&quot;:&quot;Nombre&quot;,&quot;fr&quot;:&quot;Nom&quot;,&quot;nl&quot;:&quot;Naam&quot;}">\n                      Name                    <\/th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;,&quot;it&quot;:&quot;Fornitore \\\/ Dominio&quot;,&quot;es&quot;:&quot;Proveedor \\\/ Dominio&quot;,&quot;fr&quot;:&quot;Fournisseur \\\/ Domaine&quot;,&quot;nl&quot;:&quot;Aanbieder \\\/ Domein&quot;}">\n                      <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                    <\/th>\n                    <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;,&quot;it&quot;:&quot;Scadenza&quot;,&quot;es&quot;:&quot;Vencimiento&quot;,&quot;fr&quot;:&quot;Expiration&quot;,&quot;nl&quot;:&quot;Vervaldatum&quot;}">\n                      Expiration                    <\/th>\n                    <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;,&quot;it&quot;:&quot;Descrizione&quot;,&quot;es&quot;:&quot;Descripci\\u00f3n&quot;,&quot;fr&quot;:&quot;Description&quot;,&quot;nl&quot;:&quot;Omschrijving&quot;}">\n                      Description                    <\/th>\n                  <\/tr>\n                  <\/thead>\n                  <tbody>\n                                      <tr>\n                      <td>FPAU<\/td>\n                      <td>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 months 4 weeks&quot;,&quot;it&quot;:&quot;2 mesi 4 settimane&quot;,&quot;es&quot;:&quot;2 meses 4 semanas&quot;,&quot;fr&quot;:&quot;2 mois 4 semaines&quot;,&quot;nl&quot;:&quot;2 maanden 4 weken&quot;}">\n                        2 months 4 weeks                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to record user-specific information on what pages users access or visit, customize web page content based on visitors\' browser type, or other information that the visitor sends.&quot;}">\n                          This cookie is used to record user-specific information on what pages users access or visit, customize web page content based on visitors\' browser type, or other information that the visitor sends.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>FPLC<\/td>\n                      <td>\n                                                .formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;20 hours&quot;,&quot;it&quot;:&quot;20 ore&quot;,&quot;es&quot;:&quot;20 horas&quot;,&quot;fr&quot;:&quot;20 heures&quot;,&quot;nl&quot;:&quot;20 uur&quot;}">\n                        20 hours                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to store and track the performance and functionality preferences of the website users to enhance their browsing experience. It may also be involved in collecting analytics data to measure how users interact with the site\'s features.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per memorizzare e monitorare le preferenze di performance e funzionalit\\u00e0 degli utenti del sito web per migliorare la loro esperienza di navigazione. Potrebbe anche essere coinvolto nella raccolta di dati di analisi per misurare come gli utenti interagiscono con le caratteristiche del sito.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para almacenar y rastrear las preferencias de rendimiento y funcionalidad de los usuarios del sitio web para mejorar su experiencia de navegaci\\u00f3n. Tambi\\u00e9n puede estar involucrado en la recopilaci\\u00f3n de datos anal\\u00edticos para medir c\\u00f3mo interact\\u00faan los usuarios con las caracter\\u00edsticas del sitio.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour stocker et suivre les pr\\u00e9f\\u00e9rences de performance et de fonctionnalit\\u00e9 des utilisateurs du site Web pour am\\u00e9liorer leur exp\\u00e9rience de navigation. Il peut \\u00e9galement \\u00eatre impliqu\\u00e9 dans la collecte de donn\\u00e9es analytiques pour mesurer comment les utilisateurs interagissent avec les fonctionnalit\\u00e9s du site.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om de prestaties en functionaliteit voorkeuren van de website-gebruikers op te slaan en te volgen om hun surfervaring te verbeteren. Het kan ook worden betrokken bij het verzamelen van analytics gegevens om te meten hoe gebruikers omgaan met de functies van de site.&quot;}">\n                          This cookie is used to store and track the performance and functionality preferences of the website users to enhance their browsing experience. It may also be involved in collecting analytics data to measure how users interact with the site\'s features.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                      <tr>\n                      <td>optiMonkSession<\/td>\n                      <td>\n                                                formani.com                      <\/td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;,&quot;it&quot;:&quot;Sessione&quot;,&quot;es&quot;:&quot;Sesi\\u00f3n&quot;,&quot;fr&quot;:&quot;Session&quot;,&quot;nl&quot;:&quot;Sessie&quot;}">\n                        Session                      <\/td>\n                      <td>\n                      <span data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to track the visitor\'s session and interaction with the website to improve user experience and for website optimization purposes.&quot;,&quot;it&quot;:&quot;Questo cookie viene utilizzato per monitorare la sessione del visitatore e l\'interazione con il sito web per migliorare l\'esperienza degli utenti e per scopi di ottimizzazione del sito web.&quot;,&quot;es&quot;:&quot;Esta cookie se utiliza para rastrear la sesi\\u00f3n del visitante y la interacci\\u00f3n con el sitio web para mejorar la experiencia del usuario y con fines de optimizaci\\u00f3n del sitio web.&quot;,&quot;fr&quot;:&quot;Ce cookie est utilis\\u00e9 pour suivre la session du visiteur et l\'interaction avec le site Web pour am\\u00e9liorer l\'exp\\u00e9rience utilisateur et \\u00e0 des fins d\'optimisation du site.&quot;,&quot;nl&quot;:&quot;Deze cookie wordt gebruikt om de sessie en interactie van de bezoeker met de website te volgen om de gebruikerservaring en voor websiteoptimalisatie doeleinden te verbeteren.&quot;}">\n                          This cookie is used to track the visitor\'s session and interaction with the website to improve user experience and for website optimization purposes.                      <\/span>\n                                              <\/td>\n                    <\/tr>\n                                    <\/tbody>\n                <\/table>\n              \n              \n            <\/div>\n          <\/div>\n              <\/div>\n      <div id="cookiescript_aboutwrap" class="cookiescript_hidden" inert data-cs-maintab-content="aboutcookies">\n        \n        <span data-cs-i18n-text="{&quot;en&quot;:&quot;Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser. &lt;br \\\/&gt;\\r\\n&lt;br \\\/&gt;\\r\\nYou can change your consent to cookie usage at any time on our Privacy Policy page.&quot;,&quot;it&quot;:&quot;I cookie sono piccoli file di testo che vengono collocati sul tuo computer dai siti web visitati. I siti web utilizzano i cookie per aiutare gli utenti a navigare in modo efficiente ed eseguire determinate funzioni. I cookie che sono necessari per il corretto funzionamento del sito web possono essere impostati senza la tua autorizzazione. Tutti gli altri cookie devono essere approvati prima di poter essere impostati nel browser.&lt;br \\\/&gt;\\n&lt;br \\\/&gt;\\nPuoi modificare il tuo consenso all\\&quot;utilizzo dei cookie in qualsiasi momento nella nostra pagina dell\\&quot;informativa sulla privacy.&quot;,&quot;es&quot;:&quot;Las cookies son peque\\u00f1os archivos de texto que los sitios web que usted visita colocan en su ordenador. Los sitios web utilizan cookies para ayudar a los usuarios a navegar de manera eficiente y a realizar ciertas funciones. Las cookies que se necesitan para que el sitio web funcione correctamente se pueden configurar sin su autorizaci\\u00f3n. Todas las dem\\u00e1s cookies deben aprobarse antes de que se puedan configurar en el navegador.&lt;br \\\/&gt;\\n&lt;br \\\/&gt;\\nPuede cambiar su consentimiento para el uso de cookies en cualquier momento en nuestra p\\u00e1gina de Pol\\u00edtica de privacidad.&quot;,&quot;fr&quot;:&quot;Les cookies sont de petits fichiers texte qui sont plac\\u00e9s sur votre ordinateur par les sites Web que vous visitez. Les sites Web utilisent des cookies pour aider les utilisateurs \\u00e0 naviguer efficacement et \\u00e0 ex\\u00e9cuter certaines fonctions. Les cookies n\\u00e9cessaires au bon fonctionnement du site Web peuvent \\u00eatre configur\\u00e9s sans votre autorisation. Tous les autres cookies doivent \\u00eatre approuv\\u00e9s avant de pouvoir \\u00eatre configur\\u00e9s dans le navigateur.&lt;br \\\/&gt;\\n&lt;br \\\/&gt;\\nVous pouvez modifier votre consentement \\u00e0 l\\&quot;utilisation des cookies \\u00e0 tout moment sur notre page Politique de confidentialit\\u00e9.&quot;,&quot;nl&quot;:&quot;Cookies zijn kleine tekstbestanden die op uw computer worden geplaatst door websites die u bezoekt. Websites gebruiken cookies om gebruikers te helpen effici\\u00ebnt te navigeren en om bepaalde functies uit te voeren. Cookies die nodig zijn om de website goed te laten functioneren, mogen zonder uw toestemming worden geplaatst. Alle andere cookies moeten worden goedgekeurd voordat ze in de browser kunnen worden ingesteld.&lt;br \\\/&gt;\\n&lt;br \\\/&gt;\\nU kunt uw toestemming voor het gebruik van cookies op elk moment wijzigen op onze pagina Privacybeleid.&quot;}">\n          Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser. <br \/>\r\n<br \/>\r\nYou can change your consent to cookie usage at any time on our Privacy Policy page.        <\/span>\n                        <div style="display: none;" data-cs-consent-key-box="cookie-script">\n          <span data-cs-i18n-text="{&quot;en&quot;:&quot;Cookies consent ID&quot;,&quot;it&quot;:&quot;Consenso per l\\&quot;ID dei cookie&quot;,&quot;es&quot;:&quot;Consentimiento de cookies&quot;,&quot;fr&quot;:&quot;ID de consentement aux cookies&quot;,&quot;nl&quot;:&quot;Toestemmings-ID voor cookies&quot;}">\n            Cookies consent ID          <\/span>:\n          <span data-cs-consent-key="cookie-script"><\/span>\n        <\/div>\n      <\/div>\n          <\/div>\n    <div class="cookiescript_fsd_footer">\n      <div id="cookiescript_buttons">\n        <div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Accept all&quot;,&quot;it&quot;:&quot;Accetta tutto&quot;,&quot;es&quot;:&quot;Aceptar todo&quot;,&quot;fr&quot;:&quot;Accepter tout&quot;,&quot;nl&quot;:&quot;Alles accepteren&quot;}">\n          Accept all        <\/div>\n        <div id="cookiescript_reject" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Decline all&quot;,&quot;it&quot;:&quot;Rifiuta tutto&quot;,&quot;es&quot;:&quot;Rechazar todo&quot;,&quot;fr&quot;:&quot;Refuser tout&quot;,&quot;nl&quot;:&quot;Alles afwijzen&quot;}">\n          Decline all        <\/div>\n        <div id="cookiescript_save" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Save &amp; Close&quot;,&quot;it&quot;:&quot;Salva e chiudi&quot;,&quot;es&quot;:&quot;Guardar y cerrar&quot;,&quot;fr&quot;:&quot;Sauvegarder et fermer&quot;,&quot;nl&quot;:&quot;Opslaan en sluiten&quot;}">\n          Save & Close        <\/div>\n      <\/div>\n              <div class="cookiescript_fsd_reportby"  role="contentinfo">\n            Cookie <a id="cookiescript_fsd_reportlink"  href="https:\/\/cookie-script.com\/cookie-report?identifier=df57c19613b261ecc5f68a56cd03e175" target="_blank" aria-label="report, opens a new window">report<\/a> created by <a href="https:\/\/cookie-script.com" id="cookiescript_fsd_cookiescriptlink" title="CookieScript Consent Management Platform" target="_blank" aria-label="CookieScript Consent Management Platform, opens a new window">CookieScript<\/a>\n        <\/div>\n          <\/div>\n  <\/div>\n  \n<\/div>\n',
            Ro = 'CookieScriptConsent',
            ke = 'CookieScriptConsentString',
            lt = 30,
            Po = window.location.href,
            he = 'fa0aead1d788ff7f1df9dfa4a7271a4a',
            ii = !1,
            Q = !1,
            No = {
                'targeting': ['optiMonkClient', 'FPID', 'optiMonkClientId', '_fbp', '_gcl_au', '_pin_unauth', 'attribution_user_id'],
                'performance': ['ar_debug', 'pageviewCount', '_ga', '_ga_4ZRDY5FW33', '_ga_TFRMDH3NJ8'],
                'strict': ['__cf_bm', 'prism_1000440888', 'CONCRETE', 'CookieScriptConsent', 'prism_1000440888', '_pinterest_ct_ua', 'tf_respondent_cc', 'AWSALBTGCORS'],
                'functionality': ['FPAU', 'FPLC', 'optiMonkSession']
            };
        var ti = {
            'targeting': [{
                'name': 'optiMonkClient',
                'domain': 'formani.com',
                'path': '\/',
                'expire': '31535992',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'N4IgHArADAjBIC5QGMCGjgF8A0IBmAbojAOwkBsATOTOTbgDZEKkXW00B0JlAzLgDsA9gAdmMTJiA==='
            }, {
                'name': 'optiMonkClientId',
                'domain': 'formani.com',
                'path': '\/',
                'expire': '31535992',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': '29611102-ea54-af34-409f-fe70cee7bafe'
            }, {
                'name': '_fbp',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '7775998',
                'same_site': 'Lax',
                'session': '0',
                'secure': '1',
                'value': 'fb.1.1776261663851.424962679896612025'
            }, {
                'name': '_gcl_au',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '7775991',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': '1.1.2057445280.1776261660'
            }, {
                'name': '_pin_unauth',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '31535997',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'dWlkPU1XWXdZakZsWVRrdFl6QmhNaTAwTlRBeExXSmhOVGt0TnpjMk1UazRaakpoTXpFeA'
            }],
            'performance': [{
                'name': 'pageviewCount',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '0',
                'same_site': null,
                'session': '1',
                'secure': '0',
                'value': '1'
            }, {
                'name': '_ga',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '34559996',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'GA1.1.545946978.1776261664'
            }, {
                'name': '_ga_4ZRDY5FW33',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '34559996',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'GS2.1.s1776261665$o1$g0$t1776261665$j60$l0$h1326796815'
            }, {
                'name': '_ga_TFRMDH3NJ8',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '34559995',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'GS2.1.s1776261664$o1$g0$t1776261664$j60$l0$h0'
            }],
            'functionality': [{
                'name': 'FPAU',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '7775992',
                'same_site': null,
                'session': '0',
                'secure': '1',
                'value': '1.1.2057445280.1776261660'
            }, {
                'name': 'FPLC',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '71998',
                'same_site': null,
                'session': '0',
                'secure': '1',
                'value': '%2Fj%2B247RNiFoysnZmJfrKvF36phGQEjHOhEzGj3k%2BWZuC1G43PqFcd7KN4H58j%2FgnE%2FuCOhuVnqZZgfIQymCFE1Ka9b6r0NYuXofbquiS29azOC5WnoXULbNZIORBlg%3D%3D'
            }, {
                'name': 'optiMonkSession',
                'domain': 'formani.com',
                'path': '\/',
                'expire': '0',
                'same_site': null,
                'session': '1',
                'secure': '0',
                'value': '1776261662'
            }],
            'strict': [{
                'name': 'prism_1000440888',
                'domain': '.formani.com',
                'path': '\/',
                'expire': '2591995',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': '836ded65-6481-4471-93d1-cb92ddef851d'
            }]
        };
        var ei = {
            'strict': {
                'local': ['tADu', 'tTE', 'tMQ', 'lastExternalReferrer', 'tTf', 't3D', 'gtmBrowserId', 'tTDe', 'tTDu', 'tnsApp', 'OptiMonkShopAttributes', 'lastExternalReferrerTime', 'om-country', 'wishListData', 'tAE', '_gcl_ls', 'OptiMonkVisitorAttributes', 'tADe', 'om-ip_block', 'tPL', 'tC'],
                'session': ['isLogedIn', 'is_eu']
            }
        };
        var Eo = ['optiMonkClient', 'ar_debug', 'FPID', 'optiMonkClientId', '_fbp', '__cf_bm', 'pageviewCount', 'FPAU', 'prism_1000440888', 'FPLC', '_gcl_au', 'optiMonkSession', '_ga', '_ga_4ZRDY5FW33', '_pin_unauth', 'attribution_user_id', 'CONCRETE', '_ga_TFRMDH3NJ8', 'CookieScriptConsent', 'prism_1000440888', '_pinterest_ct_ua', 'tf_respondent_cc', 'AWSALBTGCORS'],
            c = ['targeting', 'performance', 'strict', 'functionality'],
            fe = 1,
            To = 'formani.com',
            Ko = '',
            Mo = [],
            Bo = {};
        var Qo = [],
            ue = !1,
            tt = !1,
            ot = !1,
            it = !1,
            zo = '0',
            Lo = '',
            So = [],
            Ao = null,
            Fo = [],
            Go = null,
            Do = null,
            nt = !1,
            ct = ['_ga', '_gid', '_ga_', '_gac_gb_', '_gat', 'AMP_TOKEN', '_gac_', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv'],
            Xo = !1,
            rt = !1,
            F = 'en',
            Jo = !1,
            H = Number(0),
            st = !1,
            le = !1,
            Yo = !1,
            at = !1,
            C = null,
            pe = '',
            z = Boolean(''),
            dt = Boolean(''),
            U = {
                'enabledConsentMode': 'como_not_enabled',
                'correctGoogleTemplateTrigger': 'gtm_incorrect_trigger',
                'gtagDefaultConsent': 'gtag_no_default_consent',
                'gtagCorrectOrder': 'gtag_incorrect_order',
                'gtagRequiredCategory': 'gtag_no_required_category'
            };
        var pt = 'document',
            ft = ['complete', 'interactive'],
            mt = function() {
                var e = 'acceptall',
                    t = J(c),
                    o = p();
                r('action', 'accept');
                h();
                ee(c);
                ce(c);
                re(c);
                j(!0, c);
                r('categories', JSON.stringify(t));
                g(!0);
                f(!0);
                b(!0);
                q(!0);
                Z('accept', t.join(','));
                if (o) {
                    d(e, '')
                } else {
                    d('first' + e, '')
                };
                M(!0);
                S();
                Pt();
                se();
                ne();
                W('selectAll')
            },
            kt = function(e, t) {
                var i = p(),
                    o = J(e);
                if (e.length === c.length) {
                    h();
                    g(!0);
                    f(!0);
                    b(!0);
                    q(!0)
                } else {
                    h(e);
                    g(!0, e);
                    f(!0, e);
                    b(!0, e);
                    q(!0, e)
                };
                j(!0, e);
                ce(e);
                re(e);
                P(e);
                N(e);
                if (o.length > 0) {
                    r('action', 'accept');
                    r('categories', JSON.stringify(o));
                    Z('accept', o.join(','));
                    if (i) {
                        d('accept', o.join(','))
                    } else {
                        d('firstaccept', o.join(','))
                    }
                } else {
                    r('action', 'reject');
                    r('categories', []);
                    Z('reject', '');
                    if (i) {
                        d('reject', '')
                    } else {
                        d('firstreject', '')
                    }
                };
                if (t !== 'undefined' && t === !0) {
                    return
                };
                W('setOnlyChecked');
                M(e.length === c.length);
                S();
                Nt(e);
                se();
                ne()
            },
            ht = function() {
                var e = p();
                if (e) {
                    d('reject', '')
                } else {
                    d('firstreject', '')
                };
                r('action', 'reject');
                r('categories', JSON.stringify([]));
                Z('reject', '');
                P();
                N();
                W('rejectAll');
                M(!1);
                S();
                se();
                j(!1);
                ne();
                g(!1);
                f(!1);
                b(!1);
                q(!1);
                Ot()
            },
            gt = function() {
                var e = document.getElementById('cookiescript_manage_wrap');
                if (e) {
                    e.click();
                    return !0
                };
                return !1
            },
            ge = function(e) {
                if (typeof e !== 'undefined') {
                    K(e);
                    return
                };
                if (!p()) {
                    Y(!0);
                    return
                };
                if (Ze()) {
                    var t = O();
                    K(t)
                }
            },
            bt = function(e) {
                var t = document.querySelector('[data-cs-custom-select="item"][data-code="' + e + '"]');
                if (t) {
                    var i = t.getAttribute('data-value'),
                        n = t.querySelector('[data-cs-custom-select="item-flag"]').innerHTML,
                        o = document.querySelector('[data-cs-custom-select="selected"]');
                    o.querySelector('[data-cs-custom-select="selected-flag"]').innerHTML = n;
                    o.querySelector('[data-cs-custom-select="selected-value"]').innerText = i
                }
            },
            G = function(e, o) {
                if (o === undefined) {
                    o = {}
                };
                var i = e,
                    n = {
                        'def_cookie_lang': F,
                        'ja': 'jp',
                        'ko': 'kr',
                        'nb': 'no',
                        'nn': 'no',
                        'zh': 'cn'
                    };
                if (n[e]) {
                    i = n[e]
                };
                var r = [{
                    attr: 'data-cs-i18n-text',
                    replace: null
                }, {
                    attr: 'data-cs-i18n-url',
                    replace: 'href'
                }, {
                    attr: 'data-cs-i18n-table-label',
                    replace: 'label'
                }, {
                    attr: 'data-cs-i18n-alt',
                    replace: 'alt'
                }, ];
                var c = o['nodeScope'] ? o['nodeScope'] : window.document;
                r.forEach(function(e) {
                    var t = c.querySelectorAll('[' + e.attr + ']');
                    if (typeof t !== 'undefined') {
                        t = Array.prototype.slice.call(t);
                        t.forEach(function(t) {
                            try {
                                var n = JSON.parse(t.getAttribute(e.attr));
                                if (n) {
                                    var c = null;
                                    if (n[i] && n[i].length > 0) {
                                        c = n[i]
                                    } else if (n[F] && n[F].length > 0) {
                                        c = n[F]
                                    };
                                    if (c) {
                                        if (e.replace === null) {
                                            t.innerHTML = c.replace(/&#39;/g, '\'');
                                            if (t.getAttribute('data-cs-i18n-read')) {
                                                t.setAttribute('data-cs-i18n-read', c)
                                            }
                                        } else {
                                            t.setAttribute(e.replace, c)
                                        }
                                    }
                                }
                            } catch (o) {}
                        })
                    }
                });
                W('applyTranslations', i);
                t.currentLang = i;
                xt()
            },
            D = function(e) {
                var o = ['en', 'it', 'es', 'fr', 'nl'],
                    i;
                if (t.currentLang !== null) {
                    G(t.currentLang, {
                        nodeScope: e,
                    });
                    return
                };
                var s = function(e) {
                        var t = e.split('-');
                        if (n(o, t[0])) {
                            return t[0]
                        };
                        if (t.length > 1) {
                            if ((t[1] === 'NO') && (t[0] === 'nb' || t[0] === 'nn')) {
                                return 'no'
                            } else if (n(o, t[1].toLowerCase())) {
                                return t[1]
                            };
                            if (e[0].toLowerCase() === 'zh' && (n(o, t[1].toLowerCase()))) {
                                return t[1]
                            }
                        };
                        return t[0]
                    },
                    d = function() {
                        var t = document.querySelector('script[data-cs-lang]');
                        if (t) {
                            var e = t.getAttribute('data-cs-lang');
                            if (n(o, e)) {
                                return e
                            } else {
                                return s(e)
                            }
                        };
                        return ''
                    },
                    u = function() {
                        var e = document.documentElement.lang;
                        if (e && e.length > 0) {
                            if (n(o, e)) {
                                return e
                            } else {
                                return s(e)
                            }
                        };
                        return ''
                    },
                    l = function() {
                        for (var i = 0; i < o.length; i++) {
                            var t = o[i];
                            if (window.location.href.indexOf('/' + t + '/') !== -1 || window.location.href.indexOf('/' + t) !== -1) {
                                return t
                            }
                        };
                        var e = window.location.pathname.split('/');
                        if (e.length > 1 && e[1].length === 2) {
                            return e[1]
                        };
                        return ''
                    },
                    a = d();
                if (a.length > 0) {
                    i = a
                } else {
                    var r = u();
                    i = r.length > 0 ? r : l()
                };
                if (i.length > 0) {
                    var c = document.getElementById('cookiescript_injected');
                    if (c) {
                        if (i === 'ar' && n(o, 'ar')) {
                            c.classList.add('cookiescript_rtl')
                        } else {
                            c.classList.remove('cookiescript_rtl')
                        }
                    };
                    G(i, {
                        nodeScope: e
                    })
                } else {
                    t.currentLang = 'en'
                }
            },
            be = function() {
                var e = document.querySelectorAll('table[data-cs-table-report="cookiescript"]');
                Array.prototype.slice.call(e).forEach(function(e) {
                    var n = e.querySelectorAll('thead th'),
                        t = [],
                        o = [];
                    Array.prototype.slice.call(n).forEach(function(e) {
                        t.push(e.innerText);
                        o.push(e.getAttribute('data-cs-i18n-text'))
                    });
                    var i = e.querySelectorAll('tbody tr');
                    Array.prototype.slice.call(i).forEach(function(e) {
                        Array.prototype.slice.call(e.children).forEach(function(e, i) {
                            e.setAttribute('label', t[i]);
                            e.setAttribute('data-cs-i18n-table-label', o[i])
                        })
                    })
                })
            },
            qe = function() {
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Tab') {
                        var t = document.getElementById('cookiescript_injected');
                        if (t) {
                            e.preventDefault();
                            e.stopPropagation();
                            t.focus()
                        }
                    }
                }, {
                    once: !0
                })
            },
            Zo = function(e) {
                return !1
            },
            we = function() {
                return !1
            },
            ve = function() {
                return !1
            },
            xe = function(e) {
                var t = null;
                t = document.getElementById('cookiescript_fsd_wrapper');
                if (t) {
                    if (!t.contains(e.target)) {
                        e.preventDefault();
                        e.stopPropagation();
                        t.focus()
                    }
                }
            },
            ye = function() {
                document.addEventListener('focusin', xe)
            },
            je = function() {
                document.removeEventListener('focusin', xe)
            },
            E = function() {
                Ce();
                var e = document.querySelector('[data-cs-id="cookiescript_injected"]');
                if (e) {
                    setTimeout(function() {
                        v(e, 200, qe)
                    }, 200);
                    ye();
                    we();
                    X()
                } else {
                    setTimeout(function() {
                        Ge()
                    }, 150)
                };
                Q = !0
            },
            L = function(e) {
                var o = document.querySelector('[data-cs-id="cookiescript_injected"]'),
                    t = document.getElementById('cookiescript_injected_fsd');
                if (o) {
                    B(o, e || 200);
                    qt()
                };
                if (t) {
                    B(t, 200, function() {
                        t.parentNode.removeChild(t)
                    })
                };
                je();
                ve();
                Lt();
                Q = !1
            },
            S = function() {
                return !1
            },
            Ce = function(e) {
                return !1
            },
            Wo = function() {
                var e = document.getElementById('cookiescript_cookietablewrap');
                if (e && e.classList.contains('cookiescript_hidden')) {
                    e.classList.remove('cookiescript_hidden');
                    e.removeAttribute('inert')
                };
                var t = document.getElementById('cookiescript_injected');
                if (t) {
                    t.classList.add('hascookiereport')
                };
                ze(!0)
            },
            qt = function() {
                var e = document.getElementById('cookiescript_cookietablewrap');
                if (e && !e.classList.contains('cookiescript_hidden')) {
                    e.classList.add('cookiescript_hidden');
                    e.setAttribute('inert', '')
                };
                var t = document.getElementById('cookiescript_injected');
                if (t) {
                    t.classList.remove('hascookiereport')
                };
                ze(!1)
            },
            ze = function(e) {
                var t = document.querySelector('#cookiescript_manage_wrap span[data-cs-show-title="cookie-script"]'),
                    o = document.querySelector('#cookiescript_manage_wrap span[data-cs-hide-title="cookie-script"]');
                if (t && o) {
                    if (e) {
                        B(t, 1);
                        v(o, 1)
                    } else {
                        B(o, 1);
                        v(t, 1)
                    }
                }
            },
            T = function(t) {
                e(t, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        e.currentTarget.click()
                    }
                }, !0)
            },
            Le = function(e, t, o) {
                var u = e.target || e.srcElement,
                    a = u.getAttribute(t);
                if (a && a.length > 0) {
                    var s = document.querySelectorAll('div[' + o + ']');
                    if (s) {
                        for (var r = 0; r < s.length; r++) {
                            var i = s[r],
                                c = i.getAttribute(o),
                                d = c && c === a,
                                n = document.querySelector('div[' + t + '="' + c + '"]');
                            if (n) {
                                n.classList.remove('cookiescript_active');
                                n.setAttribute('aria-selected', 'false');
                                if (d) {
                                    n.classList.add('cookiescript_active');
                                    n.setAttribute('aria-selected', 'true')
                                }
                            };
                            i.classList.add('cookiescript_hidden');
                            i.setAttribute('inert', '');
                            if (d) {
                                i.classList.remove('cookiescript_hidden');
                                i.removeAttribute('inert')
                            }
                        }
                    }
                }
            },
            Se = function() {
                var t = document.querySelector('[data-cs-consent-key-box="cookie-script"]'),
                    o = document.querySelector('[data-cs-consent-key="cookie-script"]');
                if (t && o) {
                    var e = s('key');
                    if (e && typeof e === 'string' && e.length > 0) {
                        o.innerText = e;
                        t.style.display = ''
                    }
                }
            },
            Ae = function() {
                var e = document.querySelector('[data-cs-id="cookiescript_injected"]'),
                    t;
                if (It()) {
                    t = De()
                };
                if (e) {
                    e.parentNode.removeChild(e)
                };
                Ct(t)
            },
            wt = function() {
                var t = Bt(),
                    o = function(e) {
                        e.classList.remove('mdc-switch--unselected');
                        e.classList.add('mdc-switch--selected');
                        e.setAttribute('aria-checked', 'true')
                    },
                    i = function(e) {
                        e.classList.remove('mdc-switch--selected');
                        e.classList.add('mdc-switch--unselected');
                        e.setAttribute('aria-checked', 'false')
                    };
                e(t, 'click', function(e) {
                    var t = e.currentTarget,
                        n, r = t.getAttribute('data-cs-switch');
                    if (t.classList.contains('mdc-switch--selected')) {
                        i(t);
                        n = !1
                    } else {
                        o(t);
                        n = !0
                    };
                    var c = document.querySelector('input[data-cookiescript="checkbox-input"][value="' + r + '"]');
                    if (r === 'strict') {
                        c.checked = !0
                    } else {
                        c.checked = n
                    }
                }, !0);
                var n = A();
                e(n, 'change', function(e) {
                    var n = e.currentTarget;
                    t.forEach(function(e) {
                        if (n.value === e.getAttribute('data-cs-switch')) {
                            if (n.checked) {
                                o(e)
                            } else {
                                i(e)
                            }
                        }
                    })
                }, !0)
            },
            vt = function() {
                var t = document.querySelector('[data-cs-custom-select="select"]');
                if (!t) {
                    return
                };
                var n = t.querySelector('[data-cs-custom-select="selected"]'),
                    i = t.querySelectorAll('[data-cs-custom-select="item"]'),
                    c = 0;

                function s(e) {
                    c = e;
                    const opt = i[e];
                    if (opt) {
                        opt.focus()
                    }
                };

                function a(e) {
                    let next = c + e;
                    if (next < 0) next = i.length - 1;
                    if (next >= i.length) next = 0;
                    s(next)
                };

                function l(e) {
                    const opt = i[e];
                    if (!opt) return;
                    opt.click()
                };

                function d(e) {
                    if (!t.contains(e.target)) {
                        o(!1)
                    }
                };

                function r(e) {
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        o(!0)
                    }
                };

                function o(o) {
                    if (o) {
                        t.classList.add('open');
                        t.setAttribute('aria-expanded', 'true');
                        e(document, 'click', d);
                        Te(t, 'keydown', r);
                        s(0)
                    } else {
                        t.classList.remove('open');
                        t.setAttribute('aria-expanded', 'false');
                        Te(document, 'click', d);
                        e(t, 'keydown', r);
                        t.focus()
                    }
                };
                e(t, 'click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var i = t.classList.contains('open');
                    o(!i)
                });
                T(t);
                e(t, 'keydown', r);
                e(t, 'keydown', function(e) {
                    if (e.key === 'Escape') {
                        e.preventDefault();
                        e.stopPropagation();
                        o(!1)
                    }
                });
                var u = n.getAttribute('data-type');
                i.forEach(function(t) {
                    var i = t.getAttribute('data-code'),
                        r = t.getAttribute('data-value');
                    e(t, 'click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        G(i);
                        o(!1);
                        if (u !== 'small') {
                            var c = t.querySelector('[data-cs-custom-select="item-flag"]').innerHTML;
                            n.querySelector('[data-cs-custom-select="selected-flag"]').innerHTML = c;
                            n.querySelector('[data-cs-custom-select="selected-value"]').innerText = r
                        }
                    });
                    e(t, 'keydown', function(e) {
                        if (e.key === 'ArrowDown') {
                            e.stopPropagation();
                            e.preventDefault();
                            a(1)
                        } else if (e.key === 'ArrowUp') {
                            e.stopPropagation();
                            e.preventDefault();
                            a(-1)
                        } else if (e.key === 'Enter') {
                            e.stopPropagation();
                            e.preventDefault();
                            l(c)
                        } else if (e.key === 'Escape') {
                            e.stopPropagation();
                            e.preventDefault();
                            o(!1)
                        }
                    })
                })
            },
            Fe = function() {
                var o = document.getElementById('cookiescript_save'),
                    i = document.getElementById('cookiescript_accept'),
                    n = document.getElementById('cookiescript_reject'),
                    c = document.getElementById('cookiescript_close');
                e(o, 'click', function() {
                    t.acceptAction()
                });
                e(o, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        o.click()
                    }
                });
                e(i, 'click', function() {
                    t.acceptAllAction()
                });
                e(i, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        i.click()
                    }
                });
                e(n, 'click', function() {
                    t.rejectAllAction()
                });
                e(n, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        n.click()
                    }
                });
                e(document.getElementById('cookiescript_readmore'), 'click', function() {
                    d('readmore', '')
                });
                e(c, 'click', function() {
                    L();
                    S();
                    d('close', '');
                    Zt()
                });
                e(c, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        c.click()
                    }
                });
                var r = document.querySelectorAll('div[data-cs-maintabs="cookiescript"] > div');
                e(r, 'click', function(e) {
                    Le(e, 'data-cs-maintab', 'data-cs-maintab-content')
                }, !0);
                T(r);
                Se();
                window.addEventListener('CookieScriptConsentKeyUpdate', Se);
                vt()
            },
            xt = function() {},
            yt = function() {
                var n = A(),
                    r = function() {
                        var e = document.getElementById('cookiescript_accept'),
                            t = document.getElementById('cookiescript_save');
                        if (!e.classList.contains('cookiescript_hidden')) {
                            e.classList.add('cookiescript_hidden');
                            e.classList.add('cookiescript_bigger');
                            t.classList.add('cookiescript_bigger');
                            setTimeout(function() {
                                e.style.display = 'none';
                                t.style.display = 'inline-block';
                                t.classList.remove('cookiescript_bigger')
                            }, 100)
                        }
                    };
                for (var o = 0; o < n.length; o++) {
                    var c = n[o];
                    e(c, 'click', function(e) {
                        r()
                    })
                };
                var t = document.getElementById('cookiescript_manage_wrap');
                e(t, 'click', function() {
                    Ae()
                });
                e(t, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        t.click()
                    }
                });
                var i = document.querySelectorAll('div[data-cs-tabs="cookiescript"] > div');
                e(i, 'click', function(e) {
                    Le(e, 'data-cs-tab', 'data-cs-tab-content')
                }, !0);
                T(i);
                ye();
                we()
            },
            jt = function() {
                wt();
                var t = document.querySelectorAll('[data-cs-cookies-info-control]');
                e(t, 'click', function(e) {
                    var t = e.currentTarget,
                        i = t.getAttribute('data-cs-cookies-info-control'),
                        o = document.querySelector('[data-cs-cookies-info="' + i + '"]');
                    if (t.classList.contains('active')) {
                        o.classList.add('cookiescript_hidden');
                        o.setAttribute('inert', '');
                        t.querySelector('[data-cs-cookies-open-text]').classList.remove('cookiescript_hidden');
                        t.querySelector('[data-cs-cookies-close-text]').classList.add('cookiescript_hidden');
                        t.classList.remove('active')
                    } else {
                        o.classList.remove('cookiescript_hidden');
                        o.removeAttribute('inert');
                        t.querySelector('[data-cs-cookies-open-text]').classList.add('cookiescript_hidden');
                        t.querySelector('[data-cs-cookies-close-text]').classList.remove('cookiescript_hidden');
                        t.classList.add('active')
                    }
                }, !0);
                T(t);
                if (!rt) {
                    St();
                    rt = !0
                }
            },
            Ct = function(e) {
                I(document.body, V);
                D();
                be();
                var o = document.getElementById('cookiescript_injected_fsd');
                v(o, 200);
                Fe();
                jt();
                ge(e);
                bt(t.currentLang);
                X(!0)
            },
            Ge = function(e) {
                I(e ? e : document.body, me);
                D();
                be();
                var t = document.getElementById('cookiescript_injected');
                v(t, 200, qe);
                Fe();
                yt();
                ge();
                X();
                Q = !0
            },
            zt = function() {
                if (ut.length > 0) {
                    I(document.body, ut);
                    var t = document.getElementById('cookiescript_badge');
                    setTimeout(function() {
                        D(t);
                        v(t, 200)
                    }, 200);
                    e(t, 'click', function() {
                        E()
                    });
                    e(t, 'keydown', function(e) {
                        if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                            e.preventDefault();
                            t.click()
                        }
                    })
                }
            },
            X = function(e) {
                var o = typeof e != 'undefined' && e ? !0 : Boolean(1);
                if (o) {
                    var t = document.querySelector('body');
                    t.classList.remove('cookiescript_overlay');
                    t.classList.add('cookiescript_overlay')
                }
            },
            Lt = function() {
                var e = document.querySelector('body');
                e.classList.remove('cookiescript_overlay')
            },
            St = function() {
                return !1
            },
            At = function() {
                var e = document.querySelector('style[data-type="cookiescriptstyles"]'),
                    t = document.querySelector('[data-cs-id="cookiescript_injected"]'),
                    o = document.getElementById('cookiescript_badge'),
                    i = document.getElementById('cookiescript_injected_fsd');
                if (t) {
                    t.parentNode.removeChild(t)
                };
                if (i) {
                    i.parentNode.removeChild(i)
                };
                if (o) {
                    o.parentNode.removeChild(o)
                };
                if (e) {
                    e.parentNode.removeChild(e)
                };
                je();
                ve()
            },
            Ft = function() {
                var s = document.querySelectorAll('iframe[data-cookiescript="accepted"]'),
                    i = Array.prototype.slice.call(s);
                if (i.length > 0) {
                    for (var o = 0; o < i.length; o++) {
                        var e = i[o];
                        if (!e.getAttribute('src')) {
                            var n = e.getAttribute('alt') || '',
                                c = e.getAttribute('data-alt-img'),
                                r = n;
                            if (c) {
                                r = '<img alt="' + n + '" src="' + c + '" />'
                            };
                            var t = (e.contentWindow) ? e.contentWindow : (e.contentDocument.document) ? e.contentDocument.document : e.contentDocument;
                            t.document.open();
                            t.document.write(r);
                            t.document.close()
                        }
                    }
                }
            },
            M = function(e) {
                var t = document.getElementById('csconsentcheckbox');
                if (t) {
                    t.checked = e
                }
            },
            Gt = function() {
                var n = document.getElementById('csconsentcheckbox');
                e(n, 'change', function(e) {
                    var o = e.target || e.srcElement;
                    if (o.checked) {
                        t.acceptAllAction()
                    } else {
                        t.rejectAllAction()
                    }
                });
                var i = document.getElementById('csconsentlink');
                e(i, 'click', function() {
                    E()
                });
                var o = document.getElementsByClassName('csconsentlink');
                e(o, 'click', function() {
                    E()
                }, !0)
            },
            Dt = function() {
                return !1
            },
            Et = function() {
                return !1
            },
            Tt = function() {
                return !1
            },
            Mt = function() {
                return !1
            },
            Bt = function() {
                var e = document.querySelectorAll('[data-cs-switch]');
                if (typeof e !== 'undefined') {
                    return Array.prototype.slice.call(e)
                };
                return []
            },
            A = function() {
                var e = document.querySelectorAll('input[data-cookiescript="checkbox-input"]');
                if (typeof e !== 'undefined') {
                    return Array.prototype.slice.call(e)
                };
                return []
            },
            It = function() {
                var e = document.querySelectorAll('input[data-cookiescript="checkbox-input"]');
                if (typeof e !== 'undefined' && e.length > 0) {
                    return !0
                };
                return !1
            },
            J = function(e) {
                var o = [];
                for (var t = 0; t < e.length; t++) {
                    if (e[t] !== 'strict') {
                        o.push(e[t])
                    }
                };
                return o
            },
            Y = function(e) {
                var i = A();
                for (var o = 0; o < i.length; o++) {
                    var t = i[o];
                    if (t.value === 'strict') {
                        t.checked = !0
                    } else {
                        t.checked = e
                    };
                    te('change', t)
                }
            },
            K = function(e) {
                var i = A();
                for (var o = 0; o < i.length; o++) {
                    var t = i[o];
                    if (t.value === 'strict' || n(e, t.value)) {
                        t.checked = !0
                    } else {
                        t.checked = !1
                    };
                    te('change', t)
                }
            },
            ee = function(e) {
                if (typeof CookieScriptReport !== 'undefined' && CookieScriptReport.instance) {
                    CookieScriptReport.instance.setStateCheckboxes(e)
                }
            },
            De = function() {
                var o = [],
                    i = A();
                for (var t = 0; t < i.length; t++) {
                    var e = i[t];
                    if (e.checked || e.value === 'strict') {
                        o.push(e.value)
                    }
                };
                return x(o)
            },
            Rt = function() {
                te('DOMContentLoaded', window.document)
            },
            Pt = function() {
                t.onAcceptAll();
                a('CookieScriptAcceptAll');
                a('CookieScriptCurrentState', t.currentState());
                if (typeof c !== 'undefined' && c.length > 0) {
                    w(c);
                    for (var e = 0; e < c.length; e++) {
                        l(c[e])
                    }
                } else {
                    l('all');
                    w([])
                }
            },
            Nt = function(e) {
                var i = {
                    categories: x(e)
                };
                t.onAccept(i);
                a('CookieScriptAccept', i);
                a('CookieScriptCurrentState', t.currentState());
                w(e);
                for (var o = 0; o < e.length; o++) {
                    l(e[o])
                }
            },
            Ot = function() {
                t.onReject();
                a('CookieScriptReject');
                a('CookieScriptCurrentState', t.currentState());
                l('strict');
                w(['strict'])
            },
            Zt = function() {
                t.onClose();
                a('CookieScriptClose')
            },
            l = function(e) {
                var o = 'CookieScriptCategory-' + e;
                if (n(t.dispatchEventNames, o)) return;
                t.dispatchEventNames.push(o);
                t.dispatchEventNames = x(t.dispatchEventNames);
                a(o);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': o
                })
            },
            w = function(e) {
                var t = e.join(',');
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'CookieScriptConsentUpdated[' + t + ']'
                })
            },
            Wt = function() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'CookieScriptGoogleConsentUpdated'
                })
            },
            a = function(e, t) {
                try {
                    var i;
                    if (typeof(Event) === 'function') {
                        i = new CustomEvent(e, {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t
                        })
                    } else {
                        i = document.createEvent('CustomEvent');
                        i.initCustomEvent(e, !0, !0, t)
                    };
                    window.document.dispatchEvent(i)
                } catch (o) {
                    u('Warning: You browser not support dispatch event')
                }
            },
            te = function(e, t) {
                try {
                    var i;
                    if (typeof(Event) === 'function' && Event.prototype.hasOwnProperty('target')) {
                        i = new Event(e, {
                            bubbles: !0,
                            cancelable: !0
                        })
                    } else {
                        i = document.createEvent('Event');
                        i.initEvent(e, !0, !0)
                    };
                    t.dispatchEvent(i)
                } catch (o) {
                    u('Warning: You browser not support dispatch event')
                }
            },
            v = function(e, t, o) {
                var c = Me(e, 'opacity'),
                    r = c ? c : 1;
                e.style.opacity = 0;
                e.style.display = '';
                var n = +new Date(),
                    i = function() {
                        e.style.opacity = +e.style.opacity + (new Date() - n) / t;
                        n = +new Date();
                        if (+e.style.opacity < r) {
                            (window.requestAnimationFrame && requestAnimationFrame(i)) || setTimeout(i, 16)
                        } else {
                            e.style.opacity = '';
                            if (o !== undefined) {
                                o()
                            }
                        }
                    };
                i()
            },
            B = function(e, t, o) {
                var c = Me(e, 'opacity');
                e.style.opacity = c ? c : 1;
                var n = +new Date(),
                    i = function() {
                        e.style.opacity = +e.style.opacity - (new Date() - n) / t;
                        n = +new Date();
                        if (+e.style.opacity > 0) {
                            (window.requestAnimationFrame && requestAnimationFrame(i)) || setTimeout(i, 16)
                        } else {
                            e.style.display = 'none';
                            e.style.opacity = '';
                            if (o !== undefined) {
                                o()
                            }
                        }
                    };
                i()
            },
            n = function(e, t) {
                var o = !1,
                    i = e.indexOf(t);
                if (i >= 0) {
                    o = !0
                };
                return o
            },
            Ht = function(e, t) {
                if (e) {
                    e.insertAdjacentElement('afterend', t);
                    e.parentNode.removeChild(e)
                }
            },
            Ee = function(e, t) {
                if (e) {
                    e.insertAdjacentHTML('afterend', t);
                    e.parentNode.removeChild(e)
                }
            },
            I = function(e, t) {
                if (e) {
                    e.insertAdjacentHTML('beforeend', t)
                }
            },
            x = function(e) {
                var o = [];
                for (var t = 0; t < e.length; t++) {
                    if (o.indexOf(e[t]) === -1 && e[t] !== '') {
                        o.push(e[t])
                    }
                };
                return o
            },
            u = function(e) {
                console && ('function' == typeof console.warn ? console.warn(e) : console.log && console.log(e))
            },
            e = function(e, t, o, n) {
                var c = function(e, t, o) {
                    if (!e) return;
                    try {
                        if (e.attachEvent) {
                            e['e' + t + o] = o;
                            e[t + o] = function() {
                                e['e' + t + o](window.event)
                            };
                            e.attachEvent('on' + t, e[t + o])
                        } else {
                            e.addEventListener(t, o, !1)
                        }
                    } catch (i) {}
                };
                if (n && e && e.length > 0) {
                    for (var i = 0; i < e.length; i++) {
                        c(e[i], t, o)
                    }
                } else {
                    c(e, t, o)
                }
            },
            Te = function(e, t, o, n) {
                var c = function(e, t, o) {
                    if (!e) return;
                    if (e.detachEvent) {
                        e.detachEvent('on' + t, e[t + o]);
                        e[t + o] = null
                    } else {
                        e.removeEventListener(t, o, !1)
                    }
                };
                if (n && e && e.length > 0) {
                    for (var i = 0; i < e.length; i++) {
                        c(e[i], t, o)
                    }
                } else {
                    c(e, t, o)
                }
            },
            Me = function(e, t) {
                if (typeof getComputedStyle !== 'undefined') {
                    return getComputedStyle(e, null).getPropertyValue(t)
                } else {
                    return e.currentStyle[t]
                }
            },
            d = function(e, t) {
                if (!go()) {
                    He({
                        url: 'https://consent.cookie-script.com/analytics?action=' + e + '&time=' + (new Date).getTime() + '&script=' + he + '&category=' + t,
                        done: function() {}
                    })
                };
                oe();
                try {
                    var i = '';
                    if (t.length > 0) {
                        if (window._gaq) {
                            _gaq.push(['_trackEvent', 'Cookie-Script', e, t, {
                                'nonInteraction': 1
                            }])
                        };
                        if (window.ga) {
                            if (typeof google_tag_manager !== 'undefined' && typeof ga.getAll === 'function') {
                                if (Array.isArray(ga.getAll()) && ga.getAll().length > 0) {
                                    i = ga.getAll()[0].get('name') + '.'
                                }
                            };
                            i += 'send';
                            ga(i, 'event', 'Cookie-Script', e, t, {
                                'nonInteraction': 1
                            })
                        };
                        if (et()) {
                            if (window.gtag) {
                                gtag('event', 'select_content', {
                                    content_type: 'CookieScript ' + e,
                                    content_id: t,
                                })
                            }
                        } else {
                            window.dataLayer.push({
                                'event': 'select_content',
                                'content_type': 'CookieScript ' + e,
                                'content_id': t,
                            })
                        }
                    } else {
                        if (window._gaq) {
                            _gaq.push(['_trackEvent', 'Cookie-Script', e, {
                                'nonInteraction': 1
                            }])
                        };
                        if (window.ga) {
                            if (typeof google_tag_manager !== 'undefined' && typeof ga.getAll === 'function') {
                                if (Array.isArray(ga.getAll()) && ga.getAll().length > 0) {
                                    i = ga.getAll()[0].get('name') + '.'
                                }
                            };
                            i += 'send';
                            ga(i, 'event', 'Cookie-Script', e, {
                                'nonInteraction': 1
                            })
                        };
                        if (et()) {
                            if (window.gtag) {
                                gtag('event', 'select_content', {
                                    content_type: 'CookieScript ' + e,
                                })
                            }
                        } else {
                            window.dataLayer.push({
                                'event': 'select_content',
                                'content_type': 'CookieScript ' + e,
                            })
                        }
                    }
                } catch (o) {
                    u('Send analytics error: ' + o)
                }
            },
            y = function() {
                var e = document.querySelector('script[data-cs-cookiename]');
                if (e) {
                    return e.getAttribute('data-cs-cookiename')
                };
                return Ro
            },
            oe = function() {
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function() {
                    dataLayer.push(arguments)
                }
            },
            Ut = function() {
                return !1
            },
            R = function(e, t) {
                if (!ue) {
                    if (e) {
                        if (t) {
                            f(!0, t)
                        } else {
                            f(!0)
                        }
                    } else {
                        f(!1)
                    };
                    if (window.gtag) {
                        ue = !0
                    }
                };
                if (!ot) {
                    if (e) {
                        if (t) {
                            b(!0, t)
                        } else {
                            b(!0)
                        }
                    } else {
                        b(!1)
                    };
                    ot = !0
                };
                if (!it) {
                    if (e) {
                        if (t) {
                            q(!0, t)
                        } else {
                            q(!0)
                        }
                    } else {
                        q(!1)
                    };
                    it = !0
                };
                if (!tt && document.readyState === 'complete') {
                    if (e) {
                        if (t) {
                            g(!0, t)
                        } else {
                            g(!0)
                        }
                    } else {
                        g(!1)
                    };
                    if (window.fbq) {
                        tt = !0
                    }
                }
            },
            Vt = function() {
                var e = !1;
                if (window.CookieScriptData.useGoogleTemplate) {
                    if (window.google_tag_data && window.google_tag_data.ics) {
                        e = window.google_tag_data.ics.usedUpdate
                    }
                };
                return e
            },
            Be = function(e) {
                if (z || window.CookieScriptData.useGoogleTemplate) {
                    if (!st) {
                        var o = !1,
                            t = !1;
                        if (window.google_tag_data && window.google_tag_data.ics) {
                            o = window.google_tag_data.ics.usedDefault === !0
                        };
                        if (window.dataLayer) {
                            for (let i = 0; i < window.dataLayer.length; i++) {
                                if (window.dataLayer[i]) {
                                    if (window.dataLayer[i][0] === 'consent' && window.dataLayer[i][1] === 'default') {
                                        t = !0
                                    }
                                }
                            }
                        };
                        if (t) {
                            le = !0
                        };
                        if (o || t) {
                            return
                        };
                        f(e, undefined, 'default');
                        st = !0
                    }
                }
            },
            Ie = function(e) {
                return !1
            },
            Re = function() {
                if (z || window.CookieScriptData.useGoogleTemplate) {
                    if (window.google_tag_data && window.google_tag_data.ics && window.google_tag_data.ics.entries) {
                        var e = Object.keys(window.google_tag_data.ics.entries);
                        if (e.length > 0) {
                            return e
                        };
                        return !1
                    };
                    return !1
                };
                return !1
            },
            Qt = function() {
                if (z || window.CookieScriptData.useGoogleTemplate) {
                    oe();
                    if (window.gtag) {
                        gtag('set', 'developer_id.dMmY1Mm', !0)
                    }
                }
            },
            Xt = function() {
                de();
                if (dt || (C && C === 'shopify')) {
                    if (window.Shopify && window.Shopify.loadFeatures) {
                        window.Shopify.loadFeatures([{
                            name: 'consent-tracking-api',
                            version: '0.1'
                        }], function(e) {}, )
                    }
                }
            },
            j = function(e, t) {
                de();
                if (dt || (C && C === 'shopify')) {
                    if (window.Shopify && window.Shopify.customerPrivacy && window.Shopify.customerPrivacy.setTrackingConsent) {
                        var o = {
                            'analytics': !1,
                            'marketing': !1,
                            'preferences': !1,
                            'sale_of_data': !1
                        };
                        if (e) {
                            if (t) {
                                o = {
                                    'analytics': n(t, 'performance'),
                                    'marketing': n(t, 'targeting'),
                                    'preferences': n(t, 'functionality'),
                                    'sale_of_data': n(t, 'targeting')
                                }
                            } else {
                                o = {
                                    'analytics': !0,
                                    'marketing': !0,
                                    'preferences': !0,
                                    'sale_of_data': !0
                                }
                            }
                        };
                        window.Shopify.customerPrivacy.setTrackingConsent(o, function() {})
                    }
                }
            },
            Pe = function(e) {
                Be(!1);
                Ie(!1);
                ie(e);
                var t = H === 0 || H > 500 ? 500 : H;
                setTimeout(function() {
                    ie(e)
                }, t)
            },
            ie = function(e) {
                if (Vt()) {
                    ue = !0
                };
                var i = function(t) {
                        var o = typeof t === 'undefined' ? c : t;
                        if (o.length === c.length) {
                            h();
                            R(!0)
                        } else {
                            h(o);
                            R(!0, o)
                        };
                        j(!0, o);
                        if (!e) {
                            w(o);
                            for (var i = 0; i < o.length; i++) {
                                l(o[i])
                            }
                        };
                        P(o);
                        N(o)
                    },
                    t = function() {
                        P();
                        N();
                        j(!1);
                        if (p()) {
                            R(!1)
                        };
                        h(['strict'])
                    };
                Ut();
                if (We()) {
                    Ne();
                    return !0
                };
                if (p()) {
                    if (Ze()) {
                        var o = O();
                        i(o);
                        return !0
                    } else {
                        t();
                        if (!e) {
                            l('strict');
                            w(['strict'])
                        };
                        return !0
                    }
                } else {
                    t();
                    return !0
                }
            },
            ne = function() {
                return !1
            },
            h = function(e) {
                var t = e && e.length > 0 ? '[data-cookiescript="accepted"][data-cookiecategory]' : '[data-cookiescript="accepted"]';
                Yt(t, e);
                Kt(t, e);
                eo(t, e);
                to(t, e);
                oo(t, e);
                io(t, e);
                Jt(e)
            },
            P = function(e) {
                var s = o.get();
                for (var t in s) {
                    if (t === y() || no(t) || ro(t, e) || so(t) || co(t)) {
                        continue
                    };
                    Mo.push(t);
                    Bo[t] = s[t];
                    o.remove(t);
                    if (o.get(t) !== 'undefined') {
                        var r = window.location.hostname.split('.');
                        while (r.length > 0 && o.get(t) !== 'undefined') {
                            var n = r.join('.'),
                                c = location.pathname.split('/'),
                                i = '/';
                            o.remove(t, {
                                path: i,
                                domain: ''
                            });
                            o.remove(t, {
                                path: i,
                                domain: n
                            });
                            o.remove(t, {
                                path: i,
                                domain: '.' + n
                            });
                            while (c.length > 0 && o.get(t) !== 'undefined') {
                                i = c.join('/');
                                o.remove(t, {
                                    path: i,
                                    domain: ''
                                });
                                o.remove(t, {
                                    path: i,
                                    domain: n
                                });
                                o.remove(t, {
                                    path: i,
                                    domain: '.' + n
                                });
                                c.pop()
                            };
                            r.shift()
                        }
                    }
                }
            },
            ce = function(e) {
                return !1
            },
            N = function(e) {
                return !1
            },
            re = function(e) {
                return !1
            },
            Ne = function(e) {
                if (e === undefined) {
                    e = {
                        console: !0
                    }
                };
                var o = ['strict', 'performance', 'targeting', 'functionality', 'unclassified'];
                r('action', 'accept');
                var i = J(c);
                r('categories', JSON.stringify(i));
                h();
                ce();
                re();
                R(!0);
                j(!0, o);
                for (var t = 0; t < o.length; t++) {
                    l(o[t])
                };
                l('all');
                if (e.console) {
                    u('_forceAllow - TRUE')
                }
            },
            Jt = function(e) {
                var n = document.querySelectorAll('[data-cookienotice]');
                for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (e && e.length > 0) {
                        var t = i.getAttribute('data-cookienotice');
                        if (t) {
                            e.forEach(function(e) {
                                t = t.replace(e, '').trim()
                            });
                            if (t.length > 0) {
                                continue
                            }
                        }
                    };
                    i.style.display = 'none'
                }
            },
            Yt = function(e, t) {
                var c = document.querySelectorAll('img' + e);
                if (c) {
                    for (var n = 0; n < c.length; n++) {
                        var i = c[n];
                        if (t && t.length > 0) {
                            var o = i.getAttribute('data-cookiecategory');
                            if (o) {
                                t.forEach(function(e) {
                                    o = o.replace(e, '').trim()
                                });
                                if (o.length > 0) {
                                    continue
                                }
                            }
                        };
                        i.setAttribute('src', i.getAttribute('data-src'));
                        i.removeAttribute('data-cookiescript')
                    }
                }
            },
            Kt = function(e, t) {
                var s = !1,
                    r = document.querySelectorAll('script[type="text/plain"]' + e);
                if (r) {
                    for (var c = 0; c < r.length; c++) {
                        var i = r[c];
                        if (t && t.length > 0) {
                            var n = i.getAttribute('data-cookiecategory');
                            if (n) {
                                t.forEach(function(e) {
                                    n = n.replace(e, '').trim()
                                });
                                if (n.length > 0) {
                                    continue
                                }
                            }
                        };
                        if (i.getAttribute('data-reload') === 'true') {
                            s = !0
                        };
                        var o = document.createElement('script');
                        o.innerHTML = i.innerHTML;
                        var a = Array.prototype.slice.call(i.attributes);
                        a.forEach(function(e) {
                            o.setAttribute(e.name, e.value)
                        });
                        o.setAttribute('type', 'text/javascript');
                        o.removeAttribute('data-cookiescript');
                        Ht(i, o)
                    }
                };
                if (s) {
                    Rt()
                }
            },
            eo = function(e, t) {
                var c = document.querySelectorAll('iframe' + e);
                if (c) {
                    for (var n = 0; n < c.length; n++) {
                        var i = c[n];
                        if (t && t.length > 0) {
                            var o = i.getAttribute('data-cookiecategory');
                            if (o) {
                                t.forEach(function(e) {
                                    o = o.replace(e, '').trim()
                                });
                                if (o.length > 0) {
                                    continue
                                }
                            }
                        };
                        i.setAttribute('src', i.getAttribute('data-src'));
                        i.removeAttribute('data-cookiescript')
                    }
                }
            },
            to = function(e, t) {
                var c = document.querySelectorAll('embed' + e);
                if (c) {
                    for (var n = 0; n < c.length; n++) {
                        var o = c[n];
                        if (t && t.length > 0) {
                            var i = o.getAttribute('data-cookiecategory');
                            if (i) {
                                t.forEach(function(e) {
                                    i = i.replace(e, '').trim()
                                });
                                if (i.length > 0) {
                                    continue
                                }
                            }
                        };
                        o.setAttribute('src', o.getAttribute('data-src'));
                        o.removeAttribute('data-cookiescript');
                        var r = o.outerHTML;
                        Ee(o, r)
                    }
                }
            },
            oo = function(e, t) {
                var c = document.querySelectorAll('object' + e);
                if (c) {
                    for (var n = 0; n < c.length; n++) {
                        var o = c[n];
                        if (t && t.length > 0) {
                            var i = o.getAttribute('data-cookiecategory');
                            if (i) {
                                t.forEach(function(e) {
                                    i = i.replace(e, '').trim()
                                });
                                if (i.length > 0) {
                                    continue
                                }
                            }
                        };
                        o.setAttribute('data', o.getAttribute('data-data'));
                        o.removeAttribute('data-cookiescript');
                        var r = o.outerHTML;
                        Ee(o, r)
                    }
                }
            },
            io = function(e, t) {
                var c = document.querySelectorAll('link' + e);
                if (c) {
                    for (var n = 0; n < c.length; n++) {
                        var i = c[n];
                        if (t && t.length > 0) {
                            var o = i.getAttribute('data-cookiecategory');
                            if (o) {
                                t.forEach(function(e) {
                                    o = o.replace(e, '').trim()
                                });
                                if (o.length > 0) {
                                    continue
                                }
                            }
                        };
                        i.setAttribute('href', i.getAttribute('data-href'));
                        i.removeAttribute('data-cookiescript')
                    }
                }
            },
            no = function(e) {
                var i = [];
                for (var o = 0; o < i.length; o++) {
                    var t = i[o];
                    if (t.regexp) {
                        var n = mo(t.name);
                        if (e.match(n)) {
                            return !0
                        }
                    } else {
                        if (e === t.name) {
                            return !0
                        }
                    }
                };
                return !1
            },
            co = function(e) {
                var t = document.querySelector('script[data-cs-platform]');
                t = t ? t.getAttribute('data-cs-platform').toLowerCase() : null;
                if (t && t === 'wordpress') {
                    if (e.indexOf('wp_consent_') === 0) {
                        return !0
                    }
                };
                return !1
            },
            ro = function(e, t) {
                var o = ['strict'];
                if (typeof t !== 'undefined') {
                    o = t.slice();
                    o.push('strict');
                    o = x(o)
                };
                if (!Oe({
                        cNames: [],
                        cookieName: e,
                        onlyCheckPattern: !0
                    })) {
                    if (!n(Eo, e)) {
                        return !0
                    }
                };
                for (var c = 0; c < o.length; c++) {
                    var i = No[o[c]];
                    if (i) {
                        if (n(i, e) || Oe({
                                cNames: i,
                                cookieName: e
                            })) {
                            return !0
                        }
                    }
                };
                return !1
            },
            so = function(e) {
                for (var t = 0; t < ct.length; t++) {
                    var o = ct[t];
                    if (e.indexOf(o) === 0) {
                        return !0
                    }
                };
                return !1
            },
            Oe = function(e) {
                var r = e.cNames,
                    s = e.cookieName,
                    a = !!e.onlyCheckPattern,
                    o = [{
                        'pattern': '^[a-f0-9]{32}$',
                        'name': '[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^PrestaShop-[a-f0-9]{32}$',
                        'name': 'PrestaShop-[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^LF_session_[a-f0-9]{32}$',
                        'name': 'LF_session_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^cid_[a-f0-9]{32}$',
                        'name': 'cid_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^wp_woocommerce_session_.*$',
                        'name': 'wp_woocommerce_session_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^wc_cart_hash_.*$',
                        'name': 'wc_cart_hash_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^visa_1_[a-f0-9]{32}$',
                        'name': 'visa_1_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^yith_wcwl_session_[a-f0-9]{32}$',
                        'name': 'yith_wcwl_session_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^mp_[a-f0-9]{32}_mixpanel$',
                        'name': 'mp_[abcdef0123456789]{32}_mixpanel'
                    }, {
                        'pattern': '^ps[a-f0-9]{24}$',
                        'name': 'ps[abcdef0123456789]{24}'
                    }];
                for (var t = 0; t < o.length; t++) {
                    var i = o[t]['pattern'],
                        c = new RegExp(i, 'i');
                    if (c.test(s)) {
                        if (a) {
                            return !0
                        } else {
                            if (n(r, o[t]['name'])) {
                                return !0
                            }
                        }
                    }
                };
                return !1
            },
            Ze = function() {
                var e = s('action');
                return Boolean(e && e === 'accept')
            },
            ao = function() {
                var e = s('action'),
                    t = O();
                return Boolean(e && e === 'accept' && t.length === c.length)
            },
            p = function() {
                var e = s('action');
                return Boolean(e && (e === 'accept' || e === 'reject'))
            },
            We = function() {
                return o.get('CookieScriptScanner')
            },
            O = function() {
                var i = s('categories'),
                    t = [];
                if (fe) {
                    t = ['strict']
                };
                if (i) {
                    try {
                        var o = JSON.parse(i);
                        if (fe) {
                            o.push('strict')
                        };
                        return x(o)
                    } catch (e) {
                        return t
                    }
                };
                return t
            },
            uo = function() {
                var e = document.querySelector('span[data-cs-desc-box="true"]');
                if (e) {
                    return e.getAttribute('data-cs-i18n-read')
                };
                return ''
            },
            lo = function(e, t) {
                var n = Object.keys(e),
                    c = Object.keys(t);
                if (n.length !== c.length) {
                    return !1
                };
                for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (!Object.prototype.hasOwnProperty.call(t, o)) {
                        return !1
                    };
                    if (e[o] !== t[o]) {
                        return !1
                    }
                };
                return !0
            },
            He = function(e) {
                try {
                    var o = new XMLHttpRequest();
                    o.open('GET', e.url);
                    o.onload = function() {
                        if (o.status >= 200 && o.status <= 300) {
                            try {
                                var i = JSON.parse(o.responseText);
                                e.done(i)
                            } catch (t) {
                                e.done(o.responseText)
                            }
                        } else {
                            u('ERROR: Request failed.  Returned status for ' + e.url + ' of ' + o.status)
                        }
                    };
                    o.send()
                } catch (t) {
                    u('ERROR: Yor browser not support request')
                }
            },
            po = function() {
                var e = null;
                if (pe && pe.length > 0) {
                    e = pe
                };
                var o = document.querySelector('script[data-cs-samesite]');
                if (o) {
                    var t = o.getAttribute('data-cs-samesite');
                    if (t) {
                        e = t
                    }
                };
                return e ? e.toLowerCase() : e
            },
            r = function(e, o) {
                var n = Je();
                n[e] = o;
                if (e === 'action' && t.consentTime !== 0) {
                    n['consenttime'] = t.consentTime
                };
                try {
                    var c = Ye(JSON.stringify(n));
                    Ue(c)
                } catch (i) {
                    u('Error: Write value =>' + i)
                }
            },
            Ue = function(e) {
                var i = {
                    expires: Number(lt),
                    domain: Ke
                };
                var t = po();
                if (t) {
                    i.sameSite = t;
                    if (t === 'none') {
                        i.secure = !0
                    }
                };
                o.set(y(), e, i)
            },
            Ve = function(e, t) {
                var o = Xe();
                o[e] = t;
                fo(o)
            },
            Qe = function(e) {
                var t = Xe();
                return t[e]
            },
            fo = function(e) {
                try {
                    window.localStorage.setItem(ke, JSON.stringify(e))
                } catch (t) {}
            },
            Xe = function() {
                try {
                    if (s('action') === undefined) {
                        window.localStorage.removeItem(ke);
                        return {}
                    };
                    var t = window.localStorage.getItem(ke);
                    if (t) {
                        return JSON.parse(t)
                    };
                    return {}
                } catch (e) {
                    return {}
                }
            },
            s = function(e) {
                var t = Je();
                return t[e]
            },
            Je = function() {
                var t = o.get(y(), {
                    domain: Ke
                });
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return {}
                }
            },
            Ye = function(e) {
                return e
            },
            Ke = function() {
                return null
            }(),
            o = function() {
                /*! js-cookie v3.0.0-rc.0 | MIT */
                ;

                function e(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var o in i) {
                            e[o] = i[o]
                        }
                    };
                    return e
                };
                var t = {
                    read: function(e) {
                        return e.replace(/%3B/g, ';')
                    },
                    write: function(e) {
                        return e.replace(/;/g, '%3B')
                    }
                };

                function o(i, n) {
                    function c(o, c, r) {
                        if (typeof document === 'undefined') {
                            return
                        };
                        r = e({}, n, r);
                        if (typeof r.expires === 'number') {
                            var d = new Date();
                            d.setTime(d.getTime() + r.expires * 864e5);
                            r.expires = d
                        };
                        if (r.expires) {
                            r.expires = r.expires.toUTCString()
                        };
                        o = t.write(o).replace(/=/g, '%3D');
                        c = i.write(String(c), o);
                        var a = '';
                        for (var s in r) {
                            if (!r[s]) {
                                continue
                            };
                            a += '; ' + s;
                            if (r[s] === !0) {
                                continue
                            };
                            a += '=' + r[s].split(';')[0]
                        };
                        return (document.cookie = o + '=' + c + a)
                    };

                    function r(e) {
                        if (typeof document === 'undefined' || (arguments.length && !e)) {
                            return
                        };
                        var s = document.cookie ? document.cookie.split('; ') : [],
                            c = {};
                        for (var n = 0; n < s.length; n++) {
                            var r = s[n].split('='),
                                a = r.slice(1).join('='),
                                o = t.read(r[0]).replace(/%3D/g, '=');
                            c[o] = i.read(a, o);
                            if (e === o) {
                                break
                            }
                        };
                        return e ? c[e] : c
                    };
                    return Object.create({
                        set: c,
                        get: r,
                        remove: function(t, o) {
                            c(t, '', e({}, o, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return o(this.converter, e({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return o(e({}, this.converter, t), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(n)
                        },
                        converter: {
                            value: Object.freeze(i)
                        }
                    })
                };
                var i = window.location.protocol === 'https:';
                return o(t, {
                    path: '/',
                    secure: i
                })
            }(),
            mo = function(e) {
                if (typeof e !== 'string') {
                    return e
                };
                var t = e.match(/(\/?)(.+)\1([a-z]*)/i);
                if (t[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(t[3])) {
                    return RegExp(e)
                };
                return new RegExp(t[2], t[3])
            },
            ko = function(e, t) {
                e = e.replace(/[\[\]]/g, '\\$&');
                var i = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)'),
                    o = i.exec(t);
                if (!o) return null;
                if (!o[2]) return '';
                return decodeURIComponent(o[2].replace(/\+/g, ' '))
            },
            ho = function() {
                var o = y(),
                    t = ko(o, window.location.href);
                if (t) {
                    try {
                        t = Ye(t);
                        Ue(t)
                    } catch (e) {
                        u('Error: Write(_loadCookieValueFromUrlArgs) ' + o + 'value =>' + e)
                    }
                }
            },
            et = function() {
                var t = document.querySelectorAll('script'),
                    n = /gtag\(\s*['"]config['"]\s*,\s*['"]G-[A-Z0-9-]+['"]\s*\)/i,
                    o = !1;
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (n.test(i.innerHTML)) {
                        o = !0;
                        break
                    }
                };
                return o
            },
            go = function() {
                var e = /bot|googlebot|crawler|spider|robot|crawling/i;
                if (e.test(navigator.userAgent)) {
                    return !0
                };
                if (navigator.webdriver) {
                    return !0
                };
                if (navigator.languages.length === 0) {
                    return !0
                };
                return !1
            },
            Ho = function(e) {
                throw e
            },
            Uo = function() {
                return !0
            },
            Z = function(e, t) {
                nt = !0;
                var o = uo();
                if (o.length > 2000) {
                    o = o.slice(0, 2000) + '...'
                };
                var i = 'yes' === navigator.doNotTrack || '1' === navigator.msDoNotTrack || '1' === navigator.doNotTrack || !1 === navigator.cookieEnabled;
                He({
                    url: 'https://consent.cookie-script.com/collect?action=' + e + '&time=' + (new Date).getTime() + '&page=' + encodeURIComponent(Po) + '&dnt=' + i + '&script=' + he + '&consenttext=' + encodeURIComponent(o) + '&category=' + t,
                    done: function(e) {
                        if (e !== null && e.key) {
                            r('key', e.key);
                            a('CookieScriptConsentKeyUpdate');
                            nt = !1
                        }
                    }
                })
            },
            f = function(e, t, o) {
                if (z || window.CookieScriptData.useGoogleTemplate) {
                    oe();
                    if (typeof o === 'undefined') {
                        o = 'update'
                    };
                    if (window.gtag) {
                        var p = 'targeting',
                            f = 'performance',
                            s = 'targeting',
                            a = 'targeting',
                            d = 'functionality',
                            u = 'functionality',
                            l = 'functionality',
                            r = Re(),
                            i = function(e, o) {
                                if (e === 'strict') {
                                    return !0
                                };
                                if (o) {
                                    if (typeof t !== 'undefined') {
                                        return n(t, e)
                                    } else {
                                        return !0
                                    }
                                };
                                return !1
                            },
                            c = {
                                'ad_storage': i(p, e) ? 'granted' : 'denied',
                                'analytics_storage': i(f, e) ? 'granted' : 'denied',
                            };
                        if (r) {
                            if (n(r, 'ad_personalization')) {
                                c.ad_personalization = i(s, e) ? 'granted' : 'denied'
                            };
                            if (n(r, 'ad_user_data')) {
                                c.ad_user_data = i(a, e) ? 'granted' : 'denied'
                            }
                        } else {
                            c.ad_personalization = i(s, e) ? 'granted' : 'denied';
                            c.ad_user_data = i(a, e) ? 'granted' : 'denied'
                        };
                        if (d !== 'ignore') {
                            c.functionality_storage = i(d, e) ? 'granted' : 'denied'
                        };
                        if (u !== 'ignore') {
                            c.personalization_storage = i(u, e) ? 'granted' : 'denied'
                        };
                        if (l !== 'ignore') {
                            c.security_storage = i(l, e) ? 'granted' : 'denied'
                        };
                        gtag('consent', o, c);
                        if (o === 'update') {
                            Wt()
                        }
                    }
                }
            },
            g = function(e, t) {
                return !1
            },
            b = function(e, t, o) {
                return !1
            },
            q = function(e, t) {
                return !1
            },
            bo = function(e) {},
            W = function(e, t) {
                return !1
            },
            qo = function() {
                if (z || window.CookieScriptData.useGoogleTemplate) {
                    var n = 'targeting',
                        c = 'performance',
                        a = 'targeting',
                        d = 'targeting',
                        u = 'functionality',
                        l = 'functionality',
                        p = 'functionality',
                        e = {};
                    var o = Re();
                    if (o) {
                        for (var t = 0; t < o.length; t++) {
                            var f = o[t];
                            switch (f) {
                                case 'ad_storage':
                                    e.ad_storage = n;
                                    break;
                                case 'analytics_storage':
                                    e.analytics_storage = c;
                                    break;
                                case 'ad_personalization':
                                    e.ad_personalization = a;
                                    break;
                                case 'ad_user_data':
                                    e.ad_user_data = d;
                                    break;
                                case 'functionality_storage':
                                    e.functionality_storage = u;
                                    break;
                                case 'personalization_storage':
                                    e.personalization_storage = l;
                                    break;
                                case 'security_storage':
                                    e.security_storage = p;
                                    break
                            }
                        }
                    } else {
                        e = {
                            ad_storage: n,
                            analytics_storage: c,
                            ad_personalization: a,
                            ad_user_data: d,
                            functionality_storage: u,
                            personalization_storage: l,
                            security_storage: p
                        }
                    };
                    var i = s('googleconsentmap');
                    if (i && lo(i, e)) {
                        return
                    };
                    r('googleconsentmap', e)
                }
            },
            wo = function() {
                var a = Number(s('consenttime'));
                if (a) {
                    var e = y();
                    if (Number(t.consentTime) > a) {
                        o.remove(e);
                        var r = window.location.hostname.split('.');
                        while (r.length > 0 && o.get(e) !== 'undefined') {
                            var n = r.join('.'),
                                c = location.pathname.split('/'),
                                i = '/';
                            o.remove(e, {
                                path: i,
                                domain: ''
                            });
                            o.remove(e, {
                                path: i,
                                domain: n
                            });
                            o.remove(e, {
                                path: i,
                                domain: '.' + n
                            });
                            while (c.length > 0 && o.get(e) !== 'undefined') {
                                i = c.join('/');
                                o.remove(e, {
                                    path: i,
                                    domain: ''
                                });
                                o.remove(e, {
                                    path: i,
                                    domain: n
                                });
                                o.remove(e, {
                                    path: i,
                                    domain: '.' + n
                                });
                                c.pop()
                            };
                            r.shift()
                        }
                    }
                }
            },
            se = function() {
                return !1
            },
            vo = function() {
                var o = '';
                if (z) {
                    window.CookieScriptData.enabledConsentMode = !0;
                    if (!window.CookieScriptData.useGoogleTemplate) {
                        var t = !0,
                            e = null,
                            n = null,
                            c = null,
                            a = ['ad_storage', 'analytics_storage', 'ad_personalization', 'ad_user_data'],
                            r = [],
                            s = [];
                        if (window.dataLayer) {
                            for (let i = 0; i < window.dataLayer.length; i++) {
                                if (window.dataLayer[i]) {
                                    if (window.dataLayer[i][0] === 'consent' && window.dataLayer[i][1] === 'default') {
                                        r = Object.keys(window.dataLayer[i][2]);
                                        e = i;
                                        s.push(i)
                                    } else if (window.dataLayer[i][0] === 'config') {
                                        n = i
                                    } else if (window.dataLayer[i]['event'] && window.dataLayer[i]['event'] === 'gtm.js') {
                                        c = i
                                    }
                                }
                            }
                        };
                        if (s.length > 1) {
                            le = !0
                        };
                        const allRequiredCategory = a.every(category => r.includes(category));
                        window.CookieScriptData.gtagDefaultConsent = le && e !== null;
                        if (window.CookieScriptData.gtagDefaultConsent) {
                            window.CookieScriptData.gtagRequiredCategory = allRequiredCategory;
                            if (n !== null) {
                                window.CookieScriptData.gtagCorrectOrder = e < n
                            } else if (c !== null) {
                                window.CookieScriptData.gtagCorrectOrder = e < c
                            } else {
                                window.CookieScriptData.gtagCorrectOrder = e === 0
                            };
                            if (window.CookieScriptData.gtagRequiredCategory === !1) {
                                t = !1;
                                o = U.gtagRequiredCategory
                            } else {
                                if (window.CookieScriptData.gtagCorrectOrder === !1) {
                                    t = !1;
                                    o = U.gtagCorrectOrder
                                }
                            }
                        } else {
                            t = !1;
                            o = U.gtagDefaultConsent
                        };
                        window.CookieScriptData.isVerifyGoogleConsentMode = t
                    } else {
                        if (window.CookieScriptData.isVerifyGoogleConsentMode === !1) {
                            o = U.correctGoogleTemplateTrigger
                        }
                    }
                } else {
                    window.CookieScriptData.enabledConsentMode = !1;
                    window.CookieScriptData.isVerifyGoogleConsentMode = !1
                }
            },
            xo = function() {
                var c = Boolean(document.querySelector('script[data-cs-ignore-read-crossdomain="true"]'));
                if (c) {
                    var o = new DOMParser(),
                        i = o.parseFromString(me, 'text/html'),
                        n = i.querySelector('.cookiescript_cross_domain');
                    if (n) {
                        n.remove();
                        me = i.body.innerHTML
                    };
                    if (V.length > 0) {
                        var e = o.parseFromString(V, 'text/html'),
                            t = e.querySelector('.cookiescript_cross_domain');
                        if (t) {
                            t.remove();
                            V = e.body.innerHTML
                        }
                    }
                }
            },
            ae = function() {
                yo()
            },
            yo = function() {
                if (at) {
                    return
                };
                vo();
                Xt();
                t.initTime = new Date().toString();
                var i = document.querySelector('script[data-cs-restrict-domain="true"]');
                if (i) {
                    var o = window.location.host.replace(/^www\./, '');
                    if (o !== To) {
                        Ne({
                            console: !1
                        });
                        return
                    }
                };
                var e = function() {
                    if (!We()) {
                        Pe()
                    }
                };
                if (document.readyState === 'complete') {
                    e()
                } else {
                    window.addEventListener('load', function() {
                        e()
                    })
                };
                setTimeout(function() {
                    ho();
                    xo();
                    At();
                    I(document.body, Io);
                    if (ao()) {
                        M(!0)
                    };
                    if (p()) {
                        zt()
                    } else {
                        if (!Mt()) {
                            if (s('bannershown') !== 1) {
                                d('firstshown', '');
                                r('bannershown', 1)
                            };
                            Ge();
                            Et();
                            Tt()
                        }
                    };
                    Ft();
                    Gt();
                    Dt();
                    a('CookieScriptLoaded');
                    a('CookieScriptCurrentState', t.currentState())
                }, H);
                at = !0
            },
            jo = function() {},
            de = function() {
                if (C) {
                    return
                };
                var e = document.querySelector('script[data-cs-plugin]');
                if (e) {
                    C = e.getAttribute('data-cs-plugin')
                }
            },
            Vo = function() {
                return !1
            },
            Co = function() {
                var e = '';
                if (e.length > 0) {
                    if (!n(location.origin, e)) {
                        location.href = '//' + e
                    }
                }
            };
        (function() {
            if (window.CookieScript.instance) return;
            var e = document.currentScript;
            m = e ? e.getAttribute('src') : null;
            Co();
            jo();
            wo();
            qo();
            Qt();
            Be(!1);
            Ie(!1);
            bo(p());
            de();
            Pe(!0);
            if (n(ft, document.readyState)) {
                ae()
            } else {
                if (pt === 'document') {
                    document.addEventListener('DOMContentLoaded', ae)
                } else {
                    window.addEventListener('load', ae)
                }
            }
        }())
    };
    window.addEventListener('message', (event) => {
        try {
            if (event.data.action === 'cookieScriptGtmValidation') {
                var result = window.CookieScriptData || {};
                result.action = 'cookieScriptGtmValidationResponse';
                event.source.postMessage(result, event.origin);
                setTimeout(() => {
                    window.close()
                }, 30000)
            }
        } catch (e$) {}
    });
    window.CookieScript.init = function() {
        if (window.CookieScript.instance) {
            return CookieScript.instance
        };
        window.CookieScript.instance = new CookieScript();
        return CookieScript.instance
    };
    window.CookieScript.init()
};