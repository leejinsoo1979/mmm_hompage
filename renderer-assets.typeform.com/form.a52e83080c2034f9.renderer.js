/*! Build: 2026-06-19T15:24:47.714Z | Commit: fd209cf369e2c606f0595729d5dc45accd1e46b3 | Branch: main | App: renderer | Environment: production */
"use strict";
(self.rspackChunk_typeform_renderer = self.rspackChunk_typeform_renderer || []).push([
    [7350], {
        59649(e, t, r) {
            var n = r(29340),
                i = (0, n.AH)(["position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0 0 0 0);clip-path:inset(100%);overflow:hidden;"]),
                o = n.Ay.span.withConfig({
                    displayName: "A11yVisuallyHidden",
                    componentId: "sc-__sc-nyquty-0"
                })(["", ""], i);
            o.displayName = "A11yVisuallyHidden", r.d(t, {
                a: () => i
            }, {
                A: o
            })
        },
        16977(e, t, r) {
            var n = r(1660),
                i = r(39850);
            r(14041);
            var o = r(29340),
                l = r(31085),
                a = ["color", "animationDelay"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var s = (0, o.i7)(["0%{opacity:0;transform:translate(250px,250px) scale(0);}40%{opacity:1;transform:translate(250px,250px) scale(7.28077);}86.667%{opacity:1;transform:translate(250px,250px) scale(6.54);}100%{opacity:1;transform:translate(250px,250px) scale(6.54);}"]),
                d = (0, o.i7)(["0%{stroke-dashoffset:-30;}100%{stroke-dashoffset:0;}"]),
                f = o.Ay.g.withConfig({
                    displayName: "Wrapper",
                    componentId: "sc-__sc-voa59v-0"
                })(["transform:scale(0);animation:1000ms cubic-bezier(0.333,0,0.667,1) ", "ms forwards ", ";"], e => e.animationDelay, s),
                p = o.Ay.path.withConfig({
                    displayName: "Checkmark",
                    componentId: "sc-__sc-voa59v-1"
                })(["stroke-dasharray:30;animation:500ms cubic-bezier(0.333,0,0.667,1) ", "ms forwards ", ";"], e => e.animationDelay, d);
            r.d(t, {}, {
                A: e => {
                    var t = e.color,
                        r = void 0 === t ? "#000" : t,
                        n = e.animationDelay,
                        o = void 0 === n ? 0 : n,
                        c = (0, i.A)(e, a);
                    return (0, l.jsx)("svg", u(u({
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        preserveAspectRatio: "xMidYMid meet",
                        "data-qa": "animated-check-circle",
                        width: 500,
                        height: 500,
                        viewBox: "0 0 500 500"
                    }, c), {}, {
                        children: (0, l.jsxs)(f, {
                            animationDelay: o,
                            children: [(0, l.jsx)("path", {
                                stroke: r,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "none",
                                strokeWidth: 2.2,
                                strokeOpacity: 1,
                                d: " M0 20 C11.05,20 20,11.05 20,0 C20,-11.05 11.05,-20 0,-20 C-11.05,-20 -20,-11.05 -20,0 C-20,11.05 -11.05,20 0,20z "
                            }), (0, l.jsx)(p, {
                                stroke: r,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "none",
                                strokeWidth: 2,
                                strokeOpacity: 1,
                                d: " M9 -7 C9,-7 -3,7 -3,7 C-3,7 -9,1 -9,1 ",
                                animationDelay: o
                            })]
                        })
                    }))
                }
            })
        },
        65645(e, t, r) {
            var n = r(1660),
                i = r(39850);
            r(14041);
            var o = r(42988),
                l = r(31085),
                a = ["errorMessageRef", "dataQa"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            r.d(t, {}, {
                A: e => {
                    var t = e.errorMessageRef,
                        r = e.dataQa,
                        u = (0, i.A)(e, a);
                    return (0, l.jsx)(o.A, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(r), !0).forEach(function(t) {
                                (0, n.A)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({
                        type: o.M.error,
                        ref: t,
                        dataQa: r,
                        "data-qa": "".concat(r, "-error-wrapper")
                    }, u))
                }
            })
        },
        42988(e, t, r) {
            r.d(t, {
                M: () => E,
                A: () => T
            });
            var n, i = r(1660),
                o = r(39850);
            r(14041);
            var l = r(29340),
                a = r(87149),
                c = r(98361),
                u = r(38729),
                s = r(86989),
                d = r(43392),
                f = r(31085);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach(function(t) {
                        (0, i.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach(function(t) {
                        (0, i.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var m = r(93540),
                g = ["dataQa", "ref", "id", "message", "role", "visible", "type", "textProps", "iconProps", "minWidth"];

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach(function(t) {
                        (0, i.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var O = l.Ay.div.withConfig({
                    displayName: "FeedbackWrapper",
                    componentId: "sc-__sc-15n0ilv-0"
                })(["background-color:", ";border-radius:3px;", " color:#fff;display:inline-flex;gap:8px;align-items:center;", ";min-height:", ";outline:0;padding-block-start:var(--spacing-50);padding-block-end:var(--spacing-50);padding-inline-start:var(--spacing-100);padding-inline-end:var(--spacing-150);"], e => e.backgroundColor, e => {
                    var t = e.minWidth,
                        r = void 0 === t ? 0 : t;
                    return "number" == typeof r ? "min-width: ".concat(r, "px;") : "min-width: ".concat(r, ";")
                }, e => e.isVisible ? "" : "visibility: hidden", e => "sm" === e.breakpoint ? "32px" : "28px"),
                j = l.Ay.div.withConfig({
                    displayName: "IconWrapper",
                    componentId: "sc-__sc-15n0ilv-1"
                })(["align-self:flex-start;"]),
                P = l.Ay.div.withConfig({
                    displayName: "TextWrapper",
                    componentId: "sc-__sc-15n0ilv-2"
                })(["flex:1;"]),
                E = ((n = {}).error = "error", n.warning = "warning", n.correct = "correct", n.incorrect = "incorrect", n),
                A = {
                    [E.error]: {
                        iconSvg: d.A,
                        foregroundColor: m.Tj.error_red,
                        backgroundColor: "#F7E6E6"
                    },
                    [E.warning]: {
                        iconSvg: d.A,
                        foregroundColor: m.Tj.warning,
                        backgroundColor: "#FFFAEB"
                    },
                    [E.correct]: {
                        iconSvg: e => (0, f.jsx)("svg", v(v({
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), {}, {
                            children: (0, f.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm4.058 6.455a.75.75 0 1 0-1.12-.998L7.21 9.637 5.28 7.708a.75.75 0 1 0-1.06 1.06l2.49 2.49a.75.75 0 0 0 1.09-.03l4.258-4.773Z"
                            })
                        })),
                        foregroundColor: m.Tj.success_green,
                        backgroundColor: "#E3E8D4"
                    },
                    [E.incorrect]: {
                        iconSvg: e => (0, f.jsx)("svg", y(y({
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), {}, {
                            children: (0, f.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM6.03 4.97a.75.75 0 0 0-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 1 0 1.06 1.06L8 9.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L9.06 8l1.97-1.97a.75.75 0 1 0-1.06-1.06L8 6.94 6.03 4.97Z"
                            })
                        })),
                        foregroundColor: m.Tj.error_red,
                        backgroundColor: "#F7E6E6"
                    }
                };
            let T = e => {
                var t, r, n, i, l, d = e.dataQa,
                    p = e.ref,
                    y = e.id,
                    b = e.message,
                    v = e.role,
                    m = e.visible,
                    h = e.type,
                    T = void 0 === h ? E.error : h,
                    _ = e.textProps,
                    k = e.iconProps,
                    S = e.minWidth,
                    x = (0, o.A)(e, g),
                    C = (0, u.dv)(),
                    L = (0, s.$E)(),
                    R = null == (t = A[T]) ? void 0 : t.iconSvg;
                return (0, f.jsxs)(O, w(w({
                    backgroundColor: null == (r = A[T]) ? void 0 : r.backgroundColor,
                    breakpoint: C,
                    "data-qa": "".concat(d, "-feedback-wrapper"),
                    isVisible: void 0 !== m && m,
                    minWidth: void 0 === S ? 0 : S,
                    ref: p,
                    tabIndex: L ? 0 : void 0
                }, x), {}, {
                    children: [R && (0, f.jsx)(j, {
                        children: (0, f.jsx)(c.A, w({
                            color: null == (n = A[T]) ? void 0 : n.foregroundColor,
                            svg: null == (i = A[T]) ? void 0 : i.iconSvg,
                            boundarySize: 3
                        }, k))
                    }), (0, f.jsx)(P, {
                        children: (0, f.jsx)(a.Ay, w(w({
                            color: null == (l = A[T]) ? void 0 : l.foregroundColor,
                            dataQa: d,
                            id: y,
                            responsive: !1,
                            role: void 0 === v ? "alert" : v,
                            size: "sizeN1",
                            useDefaultFont: !0
                        }, _), {}, {
                            children: void 0 === b ? "" : b
                        }))
                    })]
                }))
            }
        },
        91374(e, t, r) {
            r.d(t, {
                A: () => m
            });
            var n = r(1660),
                i = r(39850);
            r(14041);
            var o = r(93540),
                l = r(87149),
                a = r(38729),
                c = r(29340),
                u = r(44137),
                s = r(15803),
                d = (0, c.AH)(["", ";"], e => {
                    var t = e.$size;
                    return t ? o.yM[t] : null
                }),
                f = c.Ay.input.withConfig({
                    displayName: "InputField",
                    componentId: "sc-__sc-26uh88-0"
                })(["display:block;width:100%;font-family:inherit;color:", ";", ";border:none;outline:none;border-radius:0;appearance:none;background:none;transform:translateZ(0);-webkit-transform:translateZ(0);", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:unset;&::-ms-clear{display:none;width:0;height:0;}-webkit-text-fill-color:", ";background-color:transparent !important;animation:native-autofill-in 1ms;-webkit-animation:native-autofill-in 1ms;transition:background-color 100000000s,box-shadow ", " ", ";box-shadow:", ";&:focus{box-shadow:", ";}&:read-only{caret-color:transparent;&:focus{box-shadow:", ";}}&::placeholder{font-family:inherit;font-weight:400;opacity:1;color:", ";line-height:normal;}[dir='rtl'] &[id^='number']::placeholder{direction:rtl;text-align:right;}&:-webkit-autofill,&:-webkit-autofill-selected,&:-webkit-autofill:focus,&:-webkit-autofill:hover,&:-webkit-autofill:active{", ";background-color:transparent;-webkit-text-fill-color:", ";-webkit-tap-highlight-color:transparent;}&:-webkit-autofill::first-line{", ";-webkit-text-fill-color:", ";}"], e => e.$color, e => e.$usedInDropdown ? "\n   padding-block-start: 0;\n   padding-block-end: var(--spacing-100);\n   padding-inline-start: 0;\n   padding-inline-end: var(--spacing-400);\n  " : "\n   padding-block-start: 0;\n   padding-block-end: var(--spacing-100);\n   padding-inline-start: 0;\n   padding-inline-end: 0;\n  ", d, e => {
                    var t = e.value,
                        r = e.$color,
                        n = e.backgroundColor;
                    return t ? r : (0, s.jh)(r, n, .7)
                }, o.qk, o.u3, e => {
                    var t = e.$showBorder,
                        r = e.$color;
                    return t ? "0 1px ".concat((0, s.VI)(r)) : "none"
                }, e => {
                    var t = e.$showBorder,
                        r = e.$color;
                    return t ? "0 2px ".concat(r) : "none"
                }, e => {
                    var t = e.$showBorder,
                        r = e.$color;
                    return t ? "0 1px ".concat((0, s.VI)(r)) : "none"
                }, e => {
                    var t = e.$color,
                        r = e.backgroundColor;
                    return (0, s.jh)(t, r, .7)
                }, d, e => e.$color, d, e => e.$color),
                p = c.Ay.div.withConfig({
                    displayName: "InputWrapper",
                    componentId: "sc-__sc-26uh88-1"
                })(["width:100%;position:relative;"]),
                y = r(31085),
                b = ["color", "dataQa", "getRef", "inputId", "showBorder", "size", "type", "usedInDropdown", "isReadOnly", "fontSizeType"];

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            let m = e => {
                var t = (0, c.DP)(),
                    r = e.color,
                    s = e.dataQa,
                    d = e.getRef,
                    m = e.inputId,
                    g = e.showBorder,
                    h = void 0 === g || g,
                    w = e.size,
                    O = e.type,
                    j = void 0 === O ? "text" : O,
                    P = e.usedInDropdown,
                    E = void 0 !== P && P,
                    A = e.isReadOnly,
                    T = void 0 !== A && A,
                    _ = e.fontSizeType,
                    k = void 0 === _ ? o.go.inputText : _,
                    S = (0, i.A)(e, b);
                return (0, y.jsx)(a.J9, {
                    children: e => {
                        var i, o, a = e.breakpoint,
                            c = w ? (0, l.Vu)(w, a) : (0, u.$v)(k, a, null == t || null == (i = t.fields) ? void 0 : i.fontSize);
                        return (0, y.jsx)(p, {
                            children: (0, y.jsx)(f, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                                        (0, n.A)(e, t, r[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({
                                "data-qa": s,
                                id: m,
                                readOnly: T,
                                ref: d,
                                type: j,
                                $color: r,
                                $showBorder: h,
                                $size: c,
                                backgroundColor: null == t || null == (o = t.colors) ? void 0 : o.background,
                                $usedInDropdown: E
                            }, S))
                        })
                    }
                })
            }
        },
        42972(e, t, r) {
            r.d(t, {
                A: () => A
            });
            var n = r(14041),
                i = r(77610),
                o = r(29340),
                l = r(49880),
                a = r(38729),
                c = r(93540),
                u = r(44137),
                s = r(19305),
                d = r(31085),
                f = (0, o.i7)(["from{opacity:1;}to{opacity:0;display:none;}"]),
                p = o.Ay.div.withConfig({
                    displayName: "Wrapper",
                    componentId: "sc-__sc-1x0xizo-0"
                })(["background:linear-gradient( 180deg,rgba(0,0,0,0.5) 40%,rgba(0,0,0,0.15) 75%,rgba(0,0,0,0) 100% );position:absolute;top:0;width:100%;z-index:", ";", " ", ""], c.mh.level2, e => {
                    var t = e.$paddingTop;
                    return (0, o.AH)(["padding:", "px ", "px 32px ", "px;"], t, 16, 16)
                }, e => {
                    var t = e.$isHidden,
                        r = e.$fadeOutAnimationDuration;
                    return t && (0, o.AH)(["animation:", " ", "ms ease-out forwards;"], f, r)
                }),
                y = (0, o.Ay)(u.Ay).withConfig({
                    displayName: "CustomContent",
                    componentId: "sc-__sc-1x0xizo-1"
                })(["display:block;max-width:calc(100% - ", "px);"], 32);
            let b = e => {
                var t = e.children,
                    r = e.disableAnimations,
                    n = e.isLogoVisible,
                    i = e.isTitleHidden,
                    o = e.logoSize,
                    l = void 0 === o ? s.gp : o,
                    u = (0, a.dv)(),
                    f = void 0 !== n && n ? (0, s.$b)(l, u).maxHeight + 16 : 16;
                return (0, d.jsx)(p, {
                    "aria-hidden": i,
                    "data-qa": "media-title",
                    $fadeOutAnimationDuration: 200 * !r,
                    $isHidden: i,
                    $paddingTop: f,
                    children: (0, d.jsx)(y, {
                        htmlTag: "span",
                        type: c.go.blockTitle,
                        forceFontSizeVariant: c.NB.medium,
                        color: "#fff",
                        children: t
                    })
                })
            };
            var v = r(98361),
                m = r(43392),
                g = r(95405),
                h = o.Ay.div.withConfig({
                    displayName: "Wrapper",
                    componentId: "sc-__sc-nmrefb-0"
                })(["height:100%;background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;width:100%;"], "#fffffff0");
            let w = () => {
                var e = (0, g.fN)().t;
                return (0, d.jsxs)(h, {
                    children: [(0, d.jsx)(v.A, {
                        svg: (0, d.jsx)(m.A, {
                            width: 48,
                            height: 48
                        }),
                        color: c.Tj.error_red
                    }), (0, d.jsx)(u.UC, {
                        htmlTag: "span",
                        type: c.go.blockDescription,
                        children: e("video.error-status.title")
                    }), (0, d.jsx)(u.UC, {
                        htmlTag: "span",
                        type: c.go.blockDescription,
                        children: e("video.error-status.description")
                    })]
                })
            };

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return j(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var P = n.lazy(() => Promise.all([r.e(1818), r.e(2437)]).then(r.bind(r, 75954))),
                E = o.Ay.div.withConfig({
                    displayName: "PlaceholderWrapper",
                    componentId: "sc-__sc-1lcsybf-0"
                })(["height:100%;width:100%;display:flex;pointer-events:auto;"]);
            let A = n.forwardRef((e, t) => {
                var r, o = e.disableAnimations,
                    u = e.forceShowTitle,
                    s = e.href,
                    f = e.infoMessageOverlay,
                    p = e.isCollapsed,
                    y = e.isLogoVisible,
                    v = e.isVisible,
                    m = void 0 !== v && v,
                    g = e.logoSize,
                    h = e.mediaPlaceholder,
                    j = e.metadata,
                    A = e.onPlay,
                    T = e.onEnded,
                    _ = e.onTimeUpdate,
                    k = e.onAutoplayFailed,
                    S = e.onLoadedMetadata,
                    x = e.properties,
                    C = e.shouldMuteAutoplay,
                    L = e.title,
                    R = O((0, n.useState)(!1), 2),
                    I = R[0],
                    D = R[1],
                    M = O((0, n.useState)(!1), 2),
                    N = M[0],
                    B = M[1],
                    H = (0, a.dv)() === c.LO.SMALL,
                    F = null != x ? x : {},
                    z = F.fit,
                    V = F.isCaptionsControlHidden,
                    G = F.thumbnailTime,
                    U = F.isAutoplay,
                    q = (() => {
                        if (U && m) return C ? "muted" : "unmuted"
                    })();
                if (h) return (0, d.jsx)(E, {
                    children: h
                });
                if (!s) return (0, d.jsx)(w, {});
                var J = (0, i.getVideoProvider)(s),
                    Z = null != (r = (0, i.getVideoId)(s)) ? r : "";
                return J && Z ? I ? (0, d.jsx)(w, {}) : (0, d.jsxs)(d.Fragment, {
                    children: [L && H && (0, d.jsx)(b, {
                        disableAnimations: void 0 !== o && o,
                        isLogoVisible: void 0 !== y && y,
                        isTitleHidden: !(void 0 !== u && u) && (void 0 !== p && p || N),
                        logoSize: g,
                        children: L
                    }), (0, d.jsx)(n.Suspense, {
                        fallback: null,
                        children: (0, d.jsx)(P, {
                            autoplay: q,
                            service: J,
                            id: Z,
                            cover: !z,
                            hideCaptionsControl: V,
                            infoMessageOverlay: f,
                            thumbnailTime: G,
                            isVisible: m,
                            isVideoCentered: !0,
                            onHideAction: "stop",
                            height: l.gh,
                            onError: () => {
                                D(!0)
                            },
                            onPlay: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                B(!e || t), null == A || A(e, t)
                            },
                            onAutoplayFailed: () => {
                                null == k || k()
                            },
                            onEnded: T,
                            onLoadedMetadata: S,
                            onTimeUpdate: _,
                            playerMetadata: j,
                            ref: t
                        })
                    })]
                }) : (0, d.jsx)(w, {})
            })
        },
        68132(e, t, r) {
            var n = r(1660);
            r(14041);
            var i = r(31085);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            r.d(t, {}, {
                A: e => (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.293 8.293a1 1 0 0 1 1.414 0L12 15.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 17a2 2 0 0 1-2.828 0L3.293 9.707a1 1 0 0 1 0-1.414Z"
                    })
                }))
            })
        },
        34129(e, t, r) {
            var n = r(1660);
            r(14041);
            var i = r(31085);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            r.d(t, {}, {
                A: e => (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.586 7a2 2 0 0 1 2.828 0l7.293 7.293a1 1 0 0 1-1.414 1.414L12 8.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 7Z"
                    })
                }))
            })
        },
        9799(e, t, r) {
            var n = e => "".concat(e, "-error-message"),
                i = e => "".concat(e, "-input-instructions"),
                o = e => "".concat(e, "-description"),
                l = e => "".concat(e, "-title"),
                a = e => {
                    var t = e.uniqueId,
                        r = e.isErrorMessageVisible,
                        l = e.hasDescription,
                        a = e.hasInputInstructions,
                        c = e.additionalIds;
                    if (!r && !l && !a && !c) return null;
                    var u = o(t),
                        s = n(t),
                        d = i(t);
                    return [l ? u : "", a ? d : "", c, r ? s : ""].filter(Boolean).join(" ")
                };
            r.d(t, {
                Jv: () => n,
                _7: () => l,
                gt: () => a,
                un: () => o,
                xo: () => i
            })
        },
        74123(e, t, r) {
            var n = r(14041);

            function i(e, t) {
                var r = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    var t;
                    return r.current ? t = e() : r.current = !0, t
                }, t)
            }
            r.d(t, {
                A: () => i
            })
        },
        83996(e, t, r) {
            var n = r(7991),
                i = () => ({
                    type: n.HH
                }),
                o = () => ({
                    type: n.Oc
                });
            r.d(t, {
                A: () => i,
                o: () => o
            })
        },
        59020(e, t, r) {
            var n = r(7991);

            function i(e, t) {
                return {
                    type: n.oV,
                    payload: {
                        blockRef: e,
                        show: t
                    }
                }
            }
            r.d(t, {
                O: () => i
            })
        },
        73426(e, t, r) {
            var n = r(7991);

            function i(e) {
                return {
                    type: n.qb,
                    payload: {
                        isScrollNearTop: !e
                    }
                }
            }
            r.d(t, {
                q: () => i
            })
        },
        58381(e, t, r) {
            r.r(t);
            var n, i = r(10791),
                o = r(75647),
                l = r(20633),
                a = r(89614),
                c = r(64813),
                u = r(59857),
                s = r(42616),
                d = r(54804);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function y(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function b(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            y(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            y(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    })
                }
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return m(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var g = {
                [a.vH]: "date",
                [a.a0]: "text",
                [a.vp]: "file_name",
                [a.YA]: "boolean",
                [a.VF]: "text",
                [a.zl]: "choices",
                [a.QR]: "number",
                [a.DX]: "choices",
                [a.mx]: "boolean",
                [a.F_]: "payment",
                [a.nz]: "choices"
            };

            function h() {
                return (h = b(function*(e, t, r, n) {
                    var i, o, l, u, d, f, y, b, m = e.block,
                        h = e.answer,
                        w = void 0 !== h ? h[0] : "",
                        O = g[m.type],
                        j = (0, c.t)(m.definition, h, {
                            featureFlags: n,
                            getOriginalLanguageChoiceLabel: (e, t) => {
                                if (e && t) return s.A.getOriginalLanguageChoiceLabelById(e, t)
                            },
                            payment: {
                                price: t
                            }
                        });
                    if (j) return j;
                    switch (m.type) {
                        case a.a0:
                            i = v(h, 1)[0], o = m.properties.choices.find(e => {
                                var t = s.A.getOriginalLanguageChoiceLabelById(m.id, e.id);
                                return e.ref === i || t === i || e.label === i
                            }), w = null != (l = s.A.getOriginalLanguageChoiceLabelById(m.id, o.id)) ? l : o.label;
                            break;
                        case a.vH:
                            d = (u = v(w.split("-"), 3))[0], f = u[1], y = u[2], w = new Date("".concat(d.padStart(4, "0"), "-").concat(f.padStart(2, "0"), "-").concat(y.padStart(2, "0"))).toISOString();
                            break;
                        case a.vp:
                            w = w.s3Filename;
                            break;
                        case a.F_:
                            w = p({
                                amount: t,
                                currency: m.currency,
                                name: w.cardholdersName,
                                receipt_email: w.receiptEmail
                            }, r)
                    }
                    return b = m.id, {
                        field: {
                            id: b,
                            type: m.type
                        },
                        type: O,
                        [O]: w
                    }
                })).apply(this, arguments)
            }
            var w = e => (null == e ? void 0 : e.type) !== void 0,
                O = (n = b(function*(e, t, r, n) {
                    var o = yield Promise.all(e.map(e => (function(e, t, r, n) {
                        return h.apply(this, arguments)
                    })(e, t, r, n)));
                    return (0, i.A)(o).filter(w)
                }), function(e, t, r, i) {
                    return n.apply(this, arguments)
                });

            function j(e) {
                return Object.keys(e).map(t => ({
                    key: t,
                    value: e[t]
                }))
            }

            function P(e, t) {
                var r = e[t.variable],
                    n = t.choices.find(e => e.ref === r);
                if (!n) throw new u.A("MISSING_WINNING_OUTCOME", "Could not find matching winning outcome", "winningOutcomeRef:  ".concat(e[t.variable]));
                return n
            }

            function E(e, t) {
                return Object.keys((0, o.A)(["price"], e)).map(r => {
                    if (t && r === t.variable) return {
                        key: r,
                        type: "outcome_id",
                        outcome_id: P(e, t).id
                    };
                    var n = e[r],
                        i = "string" == typeof n ? "text" : "number";
                    return {
                        key: r,
                        type: i,
                        [i]: n
                    }
                })
            }

            function A() {
                var e = l.A.get("hubspotutk") || null;
                return null === e ? null : {
                    hubspot: {
                        utk: e,
                        page_name: document.title,
                        page_url: window.location.href
                    }
                }
            }

            function T(e, t, r) {
                var n = r.find(t => t.key === e);
                n && (n.value = t)
            }

            function _() {
                return (_ = b(function*(e) {
                    var t = e.formId,
                        r = e.landingAt,
                        n = e.landingId,
                        i = e.payment,
                        o = e.values,
                        l = void 0 === o ? {} : o,
                        a = l.answers,
                        c = l.hidden,
                        u = l.variables,
                        s = void 0 === u ? {} : u,
                        f = e.outcome,
                        y = e.featureFlags,
                        b = e.thankYouScreenRef,
                        m = e.respondentValidationPayload,
                        g = e.enrichmentMetadata,
                        h = e.taxonomyScopes,
                        w = e.consentAnswer,
                        _ = e.submissionId,
                        k = e.lastStagedAt,
                        S = j(void 0 === c ? {} : c),
                        x = E(s, f),
                        C = function(e, t) {
                            if (!t) return null;
                            var r = P(e, t);
                            return {
                                id: r.id,
                                title: r.title
                            }
                        }(s, f),
                        L = yield O(void 0 === a ? [] : a, s.price, i, y), R = A();
                    null != R && R.hubspot && (T("hubspot_utk", R.hubspot.utk, S), T("hubspot_page_name", R.hubspot.page_name, S), T("hubspot_page_url", R.hubspot.page_url, S));
                    var I = [...null != h && h.form ? [h.form] : [], ...null != h && h.form_spam ? [h.form_spam] : [], ...null != h && h.account_submission ? [h.account_submission] : [], ...null != h && h.theme ? [h.theme] : []],
                        D = function(e) {
                            var t = [],
                                r = new Set,
                                n = new URLSearchParams(window.location.search),
                                i = Object.values(d.fX).map(e => e.key);
                            for (var o of n.entries()) {
                                var l = v(o, 2),
                                    a = l[0],
                                    c = l[1];
                                if (c && i.includes(a)) {
                                    var u = "".concat(e, "_").concat(a, "=").concat(c);
                                    if (r.has(u)) continue;
                                    r.add(u), t.push({
                                        type: "form_query",
                                        id: u
                                    })
                                }
                            }
                            return t
                        }(t);
                    return D.length > 0 && I.push(...D), p(p(p(p(p(p(p(p(p(p(p({
                        signature: n,
                        form_id: t,
                        landed_at: parseInt(void 0 === r ? "" : r)
                    }, S.length ? {
                        hidden: S
                    } : null), x.length ? {
                        variables: x
                    } : null), L.length ? {
                        answers: L
                    } : null), R ? {
                        integrations_metadata: R
                    } : null), C ? {
                        outcome: C
                    } : null), {}, {
                        thankyou_screen_ref: void 0 === b ? "default_tys" : b
                    }, null != m ? m : null), null != g ? g : null), I.length ? {
                        taxonomy_scopes: I
                    } : null), w ? {
                        consent_answer: w
                    } : null), _ ? {
                        submission_id: _
                    } : null), k ? {
                        last_staged_at: k
                    } : null)
                })).apply(this, arguments)
            }
            r.d(t, {
                buildAnswersPayload: () => O,
                getHiddenValues: () => j,
                getIntegrationsMetadata: () => A,
                getVariables: () => E,
                replaceHiddenValue: () => T
            }, {
                default: function(e) {
                    return _.apply(this, arguments)
                }
            })
        },
        80864(e, t, r) {
            r.d(t, {
                A: () => eN
            });
            var n, i, o, l, a, c, u, s, d, f = r(70288),
                p = r(59020),
                y = r(55709),
                b = r(58769),
                v = r(37360),
                m = r(14792),
                g = r(5482),
                h = r(16849),
                w = r(66576),
                O = r(48854),
                j = r(28105),
                P = r(16583),
                E = r(23012),
                A = r(35328),
                T = r(32059),
                _ = r(86937),
                k = r(74609),
                S = r(10014),
                x = r(28319),
                C = r(14041),
                L = r(52174),
                R = r(2172),
                I = r(91762),
                D = r(48172),
                M = r(29340),
                N = r(94657),
                B = r(24009),
                H = r(57754),
                F = r(88515),
                z = r(15803),
                V = r(38729),
                G = r(63355),
                U = r(93540),
                q = r(88400),
                J = r(74123),
                Z = r(41682),
                Y = r(39302),
                W = r(43710),
                K = r(99921),
                $ = r(20631),
                Q = r(72236),
                X = r(82444),
                ee = r(39067),
                et = r.n(ee),
                er = r(87149),
                en = r(28362),
                ei = r(59649),
                eo = ["label.retrySubmit.first", "label.retrySubmit.second", "label.retrySubmit.third", "label.retrySubmit.fourth"],
                el = e => {
                    var t, r = e.count,
                        n = e.timeout,
                        i = e.t;
                    return 0 === n ? C.createElement("div", null, i("label.retryLink.retrying")) : C.createElement(C.Fragment, null, C.createElement("div", {
                        "data-qa": "retry-count",
                        "aria-hidden": "true"
                    }, i(r > (t = eo.length) ? eo[t - 1] : eo[r - W.F], {
                        timeout: n
                    })), 3 === n ? C.createElement(ei.A, {
                        "aria-live": "assertive"
                    }, i("label.retryLink.counter", {
                        timeout: n
                    })) : null)
                };
            el.propTypes = {
                count: et().number,
                timeout: et().number,
                t: et().func
            }, el.defaultProps = {
                t: e => e
            };
            let ea = (0, en.A)(el);
            var ec = e => {
                var t = e.centered,
                    r = e.color,
                    n = e.count,
                    i = e.messageKey,
                    o = e.t,
                    l = e.timeout;
                return C.createElement(er.Ay, {
                    role: "timer",
                    "aria-live": "assertive",
                    size: "sizeN1",
                    color: r,
                    useDefaultFont: !0,
                    align: t ? "center" : "left"
                }, (0, X.A)(o(i)), C.createElement(ea, {
                    count: n,
                    timeout: l
                }))
            };
            ec.propTypes = {
                centered: et().bool,
                color: et().string,
                count: et().number,
                messageKey: et().string,
                t: et().func,
                timeout: et().number
            }, ec.defaultProps = {
                messageKey: "label.warning.slowSubmission",
                t: e => e
            };
            let eu = (0, en.A)(ec);
            var es = r(91235),
                ed = r(86989);
            let ef = e => {
                var t = e.ariaDescribedBy,
                    r = e.backgroundColor,
                    n = void 0 === r ? z.gB : r,
                    i = e.buttonColor,
                    o = void 0 === i ? z.gB : i,
                    l = e.buttonContentColor,
                    a = e.centered,
                    c = e.disabled,
                    u = e.helperColor,
                    s = void 0 === u ? z.gB : u,
                    d = e.helperText,
                    f = e.label,
                    p = e.onClick,
                    y = e.isVisible,
                    b = void 0 !== y && y,
                    v = e.variant,
                    m = e.buttonRef,
                    g = e.t,
                    h = void 0 === g ? e => e : g,
                    w = e.hideHelperText,
                    O = e.isSpinning,
                    j = (0, ed.$E)(),
                    P = b ? "-visible" : "",
                    E = (0, X.A)(h(void 0 === f ? "label.button.ok" : f));
                return C.createElement(es.A, {
                    variant: v,
                    ariaDescribedBy: t,
                    ariaLabel: "".concat(E, " ").concat(h("a11y.label.commit-button")),
                    centered: a,
                    color: o,
                    contentColor: l,
                    content: E,
                    contextBackgroundColor: n,
                    dataQa: "ok-button".concat(P, " deep-purple-ok-button").concat(P),
                    disabled: c,
                    helperColor: s,
                    helperText: j ? null : (0, X.A)(h(void 0 === d ? "label.buttonHint.default" : d)),
                    onClick: p,
                    size: "medium",
                    tabIndex: b ? 0 : -1,
                    buttonRef: m,
                    hideHelperText: void 0 !== w && w,
                    isSpinning: void 0 !== O && O
                })
            };
            var ep = r(52146),
                ey = r(59562),
                eb = r(6644),
                ev = M.Ay.span(a || (n = ["\n  display: ", ";\n  border-radius: 3px;\n  ", "\n  padding-block-start: var(--spacing-50);\n  padding-block-end: var(--spacing-50);\n  padding-inline-start: var(--spacing-100);\n  padding-inline-end: var(--spacing-150);\n"], i || (i = n.slice(0)), a = Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(i)
                    }
                }))), e => e.displayAsBlock ? "block" : "inline", e => {
                    var t = e.backgroundColor;
                    return t ? "background-color: ".concat(t, ";") : ""
                }),
                em = e => {
                    var t, r, n = e.theme,
                        i = e.center,
                        o = (0, ey.G)(eb.Ev),
                        l = (0, Y.mR)().t,
                        a = (0, V.dv)();
                    return o ? C.createElement(F.A, {
                        top: 2,
                        "data-qa": "captcha-disclaimer"
                    }, C.createElement(B.Ay, {
                        position: i ? "center" : "start"
                    }, C.createElement(er.Ay, {
                        color: null == n || null == (t = n.colors) ? void 0 : t.primary,
                        size: "sizeN1",
                        useDefaultFont: !0,
                        dimmed: !0
                    }, C.createElement(ev, {
                        displayAsBlock: "sm" === a || "md" === a,
                        backgroundColor: (0, z.rF)(null == n || null == (r = n.colors) ? void 0 : r.background, .6),
                        dangerouslySetInnerHTML: {
                            __html: l("recaptcha.disclaimer.text")
                        }
                    })))) : null
                },
                eg = r(65645),
                eh = M.Ay.div(c || (o = ["\n  ", ";\n  ", ";\n  ", "\n"], l || (l = o.slice(0)), c = Object.freeze(Object.defineProperties(o, {
                    raw: {
                        value: Object.freeze(l)
                    }
                }))), e => e.isFullWidth && "width: 100%;", e => e.centered && "text-align: center", e => e.isErrorIgnorable && "\n    position: static;\n    margin-block-end: ".concat(2 * U.zA, "px;\n  "));
            let ew = e => {
                var t = e.centered,
                    r = e.errorMessageRef,
                    n = e.id,
                    i = e.message,
                    o = e.visible,
                    l = e.isErrorIgnorable,
                    a = e.isFullWidth,
                    c = e.prefersReducedMotion;
                return void 0 !== o && o ? C.createElement(N.Ay, {
                    isVisible: !0,
                    type: void 0 !== c && c ? "fadeIn" : "slideUp"
                }, C.createElement(eh, {
                    centered: t,
                    isErrorIgnorable: l,
                    isFullWidth: void 0 === a || a
                }, C.createElement(eg.A, {
                    dataQa: "error-message-visible",
                    id: n,
                    message: i,
                    errorMessageRef: r,
                    role: "alert",
                    visible: !0
                }))) : null
            };
            var eO = r(95581);
            let ej = e => {
                var t = e.ariaDescribedBy,
                    r = e.buttonRef,
                    n = e.centered,
                    i = void 0 !== n && n,
                    o = e.disabled,
                    l = e.fullWidth,
                    a = e.hasMarginBottom,
                    c = e.helperText,
                    u = e.hideHelperText,
                    s = e.variant,
                    d = e.isSpinning,
                    f = e.isVisible,
                    p = e.label,
                    y = e.onClick,
                    b = e.size,
                    v = e.t,
                    m = void 0 === v ? e => e : v,
                    g = e.theme,
                    h = void 0 === g ? {
                        colors: {
                            backgroundColor: z.gB,
                            button: z.gB,
                            primary: z.gB
                        },
                        hasTransparentButton: !1
                    } : g,
                    w = (0, ed.$E)(),
                    O = h.colors.button;
                return C.createElement(es.A, {
                    ariaDescribedBy: void 0 === t ? "" : t,
                    buttonRef: r,
                    centered: i,
                    color: O,
                    contentColor: h.colors.buttonContent,
                    content: (0, X.A)(m(void 0 === p ? "label.button.ok" : p)),
                    contextBackgroundColor: h.colors.background,
                    dataQa: "partial-submission-button",
                    disabled: o,
                    fullWidth: void 0 !== l && l,
                    hasMarginBottom: void 0 !== a && a,
                    helperColor: h.colors.primary,
                    helperText: w || i ? "" : (0, X.A)(m(void 0 === c ? "label.buttonHint.default" : c)),
                    isTransparent: h.hasTransparentButton,
                    onClick: y,
                    size: void 0 === b ? "large" : b,
                    tabIndex: f ? 0 : -1,
                    hideHelperText: void 0 !== u && u,
                    isSpinning: d,
                    variant: s
                })
            };
            var eP = r(51708),
                eE = r(31255);
            let eA = e => {
                var t = e.color,
                    r = e.warningText,
                    n = e.actionText;
                return C.createElement(er.Ay, {
                    color: t,
                    size: "sizeN1",
                    useDefaultFont: !0,
                    dimmed: !0,
                    "data-qa": "phishing-warning-message"
                }, r, " - ", C.createElement("a", {
                    href: "https://www.typeform.com/help/a/report-abuse-360034113252/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, n))
            };

            function eT() {
                return (eT = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function e_(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ek(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e_(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e_(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function eS(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ex(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var eC = M.Ay.div(u || (u = ex(["\n  position: relative;\n"]))),
                eL = M.Ay.div(s || (s = ex(["\n  ", ";\n"])), e => {
                    var t = e.minHeight;
                    return t ? "min-height: ".concat(t, "px;") : ""
                }),
                eR = M.Ay.div(d || (d = ex(["\n  width: 100%;\n"]))),
                eI = "MacIntel" === navigator.platform ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
                eD = e => {
                    var t, r, n, i, o, l, a, c, u, s, d, p = e.answer,
                        y = e.application,
                        b = e.ariaDescribedBy,
                        v = e.blockError,
                        m = e.blockRef,
                        g = e.buttonText,
                        h = e.buttonVariant,
                        w = e.errorMessageId,
                        O = void 0 === w ? "" : w,
                        j = e.errorMessageRef,
                        P = e.hasFormFooter,
                        E = e.hideHelperText,
                        T = e.isActive,
                        _ = e.isAnimated,
                        S = e.isButtonFullWidth,
                        x = e.isButtonTypeSubmit,
                        M = e.isButtonTypePartialSubmit,
                        ee = e.isButtonVisible,
                        et = e.isErrorMessageVisible,
                        er = e.isLivePreview,
                        en = e.isPaymentBlockAnswered,
                        ei = e.isFaqBlock,
                        eo = e.isSubmitButtonVisibilityForced,
                        el = e.layout,
                        ea = e.layoutItemsSize,
                        ec = e.onClick,
                        es = e.onFocusLost,
                        ed = e.onRequireStickyFooter,
                        eb = e.price,
                        ev = e.showPhishingMessage,
                        eg = e.submit,
                        eh = e.submitErrorMessageId,
                        eT = e.submitErrorMessageKey,
                        e_ = e.submitForm,
                        ex = e.submitPartialForm,
                        eD = e.theme,
                        eM = e.trackInlineSubmit,
                        eN = e.trackInlinePartialSubmit,
                        eB = e.isErrorIgnorable,
                        eH = e.minHeight,
                        eF = (0, C.useRef)(null),
                        ez = (0, C.useContext)(K.A),
                        eV = (0, $.Mq)(m),
                        eG = (0, Z.j)(),
                        eU = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, C.useState)(!1)) || function(e) {
                            var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != t) {
                                var r, n, i, o, l = [],
                                    a = !0,
                                    c = !1;
                                try {
                                    i = (t = t.call(e)).next, !1;
                                    for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 2 !== l.length); a = !0);
                                } catch (e) {
                                    c = !0, n = e
                                } finally {
                                    try {
                                        if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                                    } finally {
                                        if (c) throw n
                                    }
                                }
                                return l
                            }
                        }(t) || function(e) {
                            if (e) {
                                if ("string" == typeof e) return eS(e, 2);
                                var t = ({}).toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? eS(e, 2) : void 0
                            }
                        }(t) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        eq = eU[0],
                        eJ = eU[1],
                        eZ = (0, Y.mR)().t,
                        eY = (0, eE.m)(),
                        eW = (0, V.dv)(),
                        eK = (0, G.d)(),
                        e$ = eY ? eK : eW,
                        eQ = (0, eO.A)(e$, el),
                        eX = (0, f.d4)(A.ew),
                        e0 = (0, f.d4)(A.Dd),
                        e1 = (0, f.d4)(A.SL),
                        e2 = (0, q.sY)(null == eD || null == (r = eD.fields) ? void 0 : r.alignment, null == eQ ? void 0 : eQ.type) === q.Fm.CENTER,
                        e4 = S || e2,
                        e3 = "sm" === e$,
                        e5 = (0, C.useCallback)(() => {
                            if (eF.current) {
                                var e = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            r = t.boundingClientRect,
                                            n = void 0 === r ? {} : r,
                                            i = t.onlyTop,
                                            o = t.offsetTop,
                                            l = t.offsetBottom;
                                        if (!e || "function" != typeof e.getBoundingClientRect) return !1;
                                        var a = e.getBoundingClientRect(),
                                            c = {
                                                height: (0, Q.A)() ? document.documentElement.clientHeight : n.height || window.innerHeight || document.documentElement.clientHeight,
                                                top: n.top || 0
                                            },
                                            u = a.top >= c.top + (void 0 === o ? 0 : o),
                                            s = a.bottom <= c.height - (void 0 === l ? 0 : l);
                                        return void 0 !== i && i ? u : u && s
                                    }(eF.current, ek(ek({}, ea), {}, {
                                        offsetBottom: P ? 0 : -eF.current.offsetHeight
                                    })),
                                    t = !ez && ee && T && !e && (!y || "sm" === e$ && !!y && !!(null != p && p.length));
                                ed && ed(m, !!t)
                            }
                        }, [p, y, e$, ez, ee, T, m, eF, ea, ed]);
                    (0, C.useEffect)(() => {
                        var e, t = () => {
                            e = setTimeout(e5, 200)
                        };
                        return window.addEventListener("resize", t), () => {
                            clearTimeout(e), window.removeEventListener("resize", t)
                        }
                    }, [e5]), (0, J.A)(() => {
                        e5()
                    }, [e5, eV]), (0, C.useEffect)(() => {
                        var e = setTimeout(() => e5(), 1500);
                        return () => clearTimeout(e)
                    }, []), (0, C.useEffect)(() => {
                        var e;
                        return ee ? e = setTimeout(() => {
                            eJ(x)
                        }, 200) : eJ(!1), () => clearTimeout(e)
                    }, [x, ee]);
                    var e8 = ee && M;
                    (0, C.useEffect)(() => {
                        T && ee && x ? null == eM || eM(m) : M && T && (null == eN || eN(m))
                    }, [T, ee, x, e8]);
                    var e9 = ee && x && !M,
                        e6 = ee && !x && !M,
                        e7 = (0, C.useRef)(null),
                        te = (0, C.useRef)(null),
                        tt = e8 && !!e0 && !e1,
                        tr = e9 && !e8 && (!eX || !e1);
                    (0, C.useEffect)(() => {
                        var e = null;
                        return eo && (0, z.CI)() && e9 && (e = setTimeout(() => {
                            var e;
                            return null == te || null == (e = te.current) ? void 0 : e.focus()
                        }, W.Es + 100)), () => clearTimeout(e)
                    }, [eo, e9]);
                    var tn = (0, C.useRef)(e9),
                        ti = (0, C.useRef)(e6),
                        to = te.current === document.activeElement,
                        tl = e7.current === document.activeElement,
                        ta = tn.current && !e9 && to,
                        tc = ti.current && !e6 && tl;
                    !ez && (ta || tc) && es && es(), tn.current = e9, ti.current = e6;
                    var tu = null != (n = null == v ? void 0 : v.getPipingValues()) ? n : {},
                        ts = e => {
                            null == ex || ex(e)
                        },
                        td = (0, ey.G)(eP.U),
                        tf = (0, ey.G)(k.tW);
                    (0, C.useEffect)(() => {
                        if (et) {
                            var e, t;
                            null == j || null == (e = j.current) || null == (t = e.scrollIntoView) || t.call(e, !0)
                        }
                    }, [et]);
                    var tp = (0, X.A)(eZ(g || "label.button.ok"));
                    return eY ? C.createElement(L.vN.Actions, {
                        "data-qa-button-visible": !!ee
                    }, et && C.createElement(R.E, {
                        id: O
                    }, (0, X.A)(null == eZ ? void 0 : eZ(null == v ? void 0 : v.label, tu))), e8 && !e3 && C.createElement(C.Fragment, null, C.createElement(I.$, {
                        kind: h,
                        "aria-describedby": b,
                        ref: te,
                        disabled: td,
                        fullWidth: S,
                        isLoading: td,
                        onClick: ts,
                        size: "large",
                        "aria-label": "".concat(tp, " ").concat(eZ("a11y.label.commit-button"))
                    }, tp), tt && C.createElement(em, {
                        theme: eD,
                        center: e4
                    })), e9 && C.createElement(D.s, {
                        gap: 8,
                        flexDirection: "column"
                    }, !e3 && C.createElement(D.s, null, C.createElement(ep.A, {
                        variant: h,
                        ariaDescribedBy: b,
                        centered: e4,
                        fullWidth: S,
                        helperText: eI,
                        isComplete: null == eg ? void 0 : eg.isComplete,
                        disabled: !T || !e9,
                        isLivePreview: er,
                        isFaqBlock: ei,
                        isPaymentBlockAnswered: en,
                        isSubmitting: (null == eg ? void 0 : eg.isSubmitting) || td,
                        isVisible: ee,
                        onClick: e_,
                        price: eb,
                        size: "medium",
                        t: eZ,
                        theme: eD,
                        buttonRef: te,
                        hideHelperText: E
                    })), tr && C.createElement(em, {
                        theme: eD,
                        center: e4
                    }), eq && ev && !(null != eg && eg.retry.showMessage) && !eT && eZ && C.createElement(D.s, {
                        alignContent: e4 ? "center" : "start"
                    }, C.createElement(eA, {
                        color: null == eD || null == (s = eD.colors) ? void 0 : s.primary,
                        warningText: eZ("label.warning.phishing", tu),
                        actionText: eZ("label.action.phishing", tu)
                    })), (null == eg ? void 0 : eg.retry.showMessage) && C.createElement(eu, {
                        centered: e2,
                        color: null == eD || null == (d = eD.colors) ? void 0 : d.primary,
                        count: (null == eg ? void 0 : eg.retry.count) - 1,
                        timeout: null == eg ? void 0 : eg.retry.timeout
                    }), !!eT && eZ && C.createElement(ew, {
                        centered: e2,
                        errorMessageRef: j,
                        id: eh,
                        prefersReducedMotion: eG,
                        message: (0, X.A)(eZ(eT, tu)),
                        visible: !!eT
                    })), e6 && !e3 && C.createElement(I.$, {
                        kind: h,
                        "data-qa": "ok-button".concat(ee ? "-visible" : "", " deep-purple-ok-button").concat(ee ? "-visible" : ""),
                        "aria-describedby": b,
                        disabled: !e6 || td,
                        onClick: ec,
                        ref: e7,
                        isLoading: td || tf,
                        size: "large",
                        "aria-label": "".concat(tp, " ").concat(eZ("a11y.label.commit-button"))
                    }, tp)) : C.createElement(eC, null, C.createElement(H.A, {
                        top: U.LG.topBlockFooter
                    }, et && C.createElement(ew, {
                        centered: e2,
                        errorMessageRef: j,
                        id: O,
                        isErrorIgnorable: eB,
                        message: (0, X.A)(null == eZ ? void 0 : eZ(null == v ? void 0 : v.label, tu)),
                        prefersReducedMotion: eG,
                        visible: et
                    }), C.createElement(eL, {
                        ref: eF,
                        "data-qa-button-visible": !!ee,
                        minHeight: eH
                    }, e8 && !e3 && C.createElement(N.Ay, {
                        type: "slideUp",
                        isVisible: e8,
                        delay: ee && eq ? W.Es : 0,
                        duration: _ ? W.Es : 0
                    }, C.createElement(C.Fragment, null, C.createElement(ej, {
                        variant: h,
                        ariaDescribedBy: b,
                        buttonRef: te,
                        centered: e4,
                        disabled: td,
                        fullWidth: S,
                        helperText: eI,
                        hideHelperText: E,
                        isLivePreview: er,
                        isSpinning: td,
                        isVisible: ee,
                        label: g,
                        onClick: ts,
                        size: "medium",
                        t: eZ,
                        theme: eD
                    }), tt && C.createElement(em, {
                        theme: eD,
                        center: e4
                    }))), e9 && C.createElement(eR, null, C.createElement(N.Ay, {
                        type: "slideUp",
                        isVisible: e9,
                        delay: ee && !eq ? W.Es : 0,
                        duration: _ ? W.Es : 0
                    }, C.createElement(C.Fragment, null, !e3 && C.createElement(B.Ay, {
                        position: e4 ? "center" : "start"
                    }, C.createElement(ep.A, {
                        variant: h,
                        ariaDescribedBy: b,
                        centered: e4,
                        fullWidth: S,
                        helperText: eI,
                        isComplete: null == eg ? void 0 : eg.isComplete,
                        disabled: !T || !e9,
                        isLivePreview: er,
                        isFaqBlock: ei,
                        isPaymentBlockAnswered: en,
                        isSubmitting: (null == eg ? void 0 : eg.isSubmitting) || td,
                        isVisible: ee,
                        onClick: e_,
                        price: eb,
                        size: "medium",
                        t: eZ,
                        theme: eD,
                        buttonRef: te,
                        hideHelperText: E
                    })), tr && C.createElement(em, {
                        theme: eD,
                        center: e4
                    }), C.createElement(F.A, {
                        top: 2
                    }, eq && ev && !(null != eg && eg.retry.showMessage) && !eT && eZ && C.createElement(B.Ay, {
                        position: e4 ? "center" : "start"
                    }, C.createElement(eA, {
                        color: null == eD || null == (i = eD.colors) ? void 0 : i.primary,
                        warningText: eZ("label.warning.phishing", tu),
                        actionText: eZ("label.action.phishing", tu)
                    })), (null == eg ? void 0 : eg.retry.showMessage) && C.createElement(eu, {
                        centered: e2,
                        color: null == eD || null == (o = eD.colors) ? void 0 : o.primary,
                        count: (null == eg ? void 0 : eg.retry.count) - 1,
                        timeout: null == eg ? void 0 : eg.retry.timeout
                    }), !!eT && eZ && C.createElement(ew, {
                        centered: e2,
                        errorMessageRef: j,
                        id: eh,
                        prefersReducedMotion: eG,
                        message: (0, X.A)(eZ(eT, tu)),
                        visible: !!eT
                    }))))), e6 && !e3 && C.createElement(N.Ay, {
                        type: "slideUp",
                        isVisible: e6,
                        delay: ee && eq ? W.Es : 0,
                        duration: _ ? W.Es : 0
                    }, C.createElement(ef, {
                        variant: h,
                        ariaDescribedBy: b,
                        backgroundColor: null == eD || null == (l = eD.colors) ? void 0 : l.background,
                        buttonColor: null == eD || null == (a = eD.colors) ? void 0 : a.button,
                        buttonContentColor: null == eD || null == (c = eD.colors) ? void 0 : c.buttonContent,
                        centered: e2,
                        helperColor: null == eD || null == (u = eD.colors) ? void 0 : u.primary,
                        helperText: "label.buttonHint.default",
                        disabled: !e6 || td,
                        isVisible: ee,
                        label: g,
                        onClick: ec,
                        t: eZ,
                        buttonRef: e7,
                        hideHelperText: E,
                        isSpinning: td || tf
                    })))))
                },
                eM = {
                    onRequireStickyFooter: p.O,
                    trackInlineSubmit: y.Db,
                    trackInlinePartialSubmit: y.mj,
                    submitPartialForm: b.td
                };
            let eN = (0, f.Ng)((e, t) => {
                var r = t.blockRef,
                    n = t.errorMessageId,
                    i = t.errorMessageRef,
                    o = t.hideHelperText,
                    l = t.isErrorMessageVisible,
                    a = t.isErrorIgnorable,
                    c = t.hideButton,
                    u = (0, v.GH)(e, r),
                    s = (0, w.QV)(e, r),
                    d = (0, g.Hk)(e),
                    f = s || (0, g.nC)(e, r),
                    p = (0, A.Dd)(e),
                    y = (0, k.gQ)(e, r),
                    b = (0, m.h)(e, null == u ? void 0 : u.ref),
                    C = b && (0, _.am)(e, b),
                    L = (0, v.pe)(e, r),
                    R = L && (0, v.wc)(L),
                    I = (0, S.d)(e) && (0, S.c8)(u) && !R,
                    D = (0, T.T)(u, p) && !C && !y && !I,
                    M = (0, g.oJ)(e, r) && !y && !I;
                return {
                    errorMessageId: n,
                    errorMessageRef: i,
                    hideHelperText: null != o ? o : (0, E.Hn)(u),
                    isActive: (0, v.ke)(e, r),
                    isButtonTypeSubmit: M,
                    isButtonTypePartialSubmit: D,
                    isErrorMessageVisible: l,
                    isLivePreview: (0, g.jq)(e),
                    isSubmitButtonVisibilityForced: (0, g.aY)(e),
                    isPaymentBlockAnswered: (0, h.tG)(e),
                    isFaqBlock: (0, x.Wh)(e, r),
                    isButtonVisible: (!l || a) && !c && !d && f,
                    price: (null == u ? void 0 : u.type) === "payment" ? (0, v.Dl)(e) : (0, v.VV)(e),
                    showPhishingMessage: (0, j.yJ)(e),
                    submit: (0, O.NX)(e),
                    submitErrorMessageId: "".concat(r, "-submission-error-message"),
                    submitErrorMessageKey: (0, O.jg)(e),
                    buttonVariant: (0, x.As)(e, r),
                    theme: (0, P.O4)(e)
                }
            }, eM)(e => C.createElement(V.J9, null, t => {
                var r = t.width < U.D9.md && !e.isLivePreview;
                return C.createElement(eD, eT({
                    isButtonFullWidth: r
                }, e))
            }))
        },
        6686(e, t, r) {
            r.d(t, {
                A: () => tT
            });
            var n, i, o, l, a, c, u, s, d, f, p, y, b, v, m, g, h, w, O, j = r(14041),
                P = r(38729),
                E = r(63355),
                A = r(29340),
                T = r(94657),
                _ = r(88515),
                k = r(57754),
                S = r(12671),
                x = r(39959),
                C = r(59649),
                L = r(95405),
                R = r(88400),
                I = r(93540),
                D = r(64537),
                M = r(42972),
                N = r(84479),
                B = r(31085),
                H = A.Ay.div.withConfig({
                    displayName: "AttachmentWrapper",
                    componentId: "sc-__sc-1ks3v0d-0"
                })(["box-sizing:border-box;width:100%;height:100%;display:flex;flex-direction:column;line-height:0;"]),
                F = (0, A.AH)(["height:", ";"], e => {
                    var t = e.hasFixedSize,
                        r = e.isCollapsed,
                        n = e.isLivePreview;
                    return t ? "".concat(720, "px") : r ? n ? "".concat(256, "px") : "40dvh" : n ? "".concat(560, "px") : "calc(100dvh - ".concat(112, "px)")
                }),
                z = A.Ay.div.withConfig({
                    displayName: "SplitMobileMediaWrapper",
                    componentId: "sc-__sc-1ks3v0d-1"
                })(["overflow:hidden;&,.mux-player-wrapper{", " transition:", ";", " ", "}"], F, e => {
                    var t = e.enableAnimation;
                    return "height ".concat(500 * !!t, "ms ease-in-out")
                }, e => {
                    var t = e.isLivePreview,
                        r = e.hasFixedSize;
                    return !t && !r && (0, A.AH)(["@media (min-width:", "px){height:80dvh;}"], I.D9.sm)
                }, e => {
                    var t = e.isCollapsed,
                        r = e.hasFixedSize,
                        n = e.isMobile,
                        i = e.isLivePreview;
                    return !t && n && (0, A.AH)(["margin-block-end:", ";", ""], r ? "calc(100dvh - ".concat(720, "px)") : "".concat(112, "px"), !i && (0, A.AH)(["@media (min-width:", "px){margin-block-end:0;}"], I.D9.sm))
                }),
                V = A.Ay.div.withConfig({
                    displayName: "SplitMobileAttachmentWrapper",
                    componentId: "sc-__sc-1ks3v0d-2"
                })(["height:", "px;"], e => e.height),
                G = A.Ay.div.withConfig({
                    displayName: "Root",
                    componentId: "sc-__sc-1ks3v0d-3"
                })(["", ";"], e => e.hasApplication || "top" !== (0, S.xP)(e.breakpoint, e.layoutType) ? "" : "flex: 1"),
                U = A.Ay.div.withConfig({
                    displayName: "StyledDivWrapper",
                    componentId: "sc-__sc-1ks3v0d-4"
                })(["", ""], e => {
                    var t = e.hasApplication,
                        r = e.isMobile;
                    return t && r && (0, A.AH)(["display:flex;flex-direction:column;"])
                }),
                q = A.Ay.div.withConfig({
                    displayName: "ContentWrapper",
                    componentId: "sc-__sc-1ks3v0d-5"
                })(["", ";text-align:", ";"], e => e.hasHorizontalPadding && (0, S.mX)(e.layoutType, e.layoutPlacement, e.breakpoint), e => (0, D.b)(e.textAlign)),
                J = A.Ay.fieldset.withConfig({
                    displayName: "Fieldset",
                    componentId: "sc-__sc-1ks3v0d-6"
                })(["border:0;padding-block-start:0.01em;padding-block-end:0;padding-inline-start:0;padding-inline-end:0;margin:0;min-width:0;"]);
            J.displayName = "fieldset";
            var Z = j.forwardRef((e, t) => {
                var r = e.hasApplication,
                    n = e.attachmentAlt,
                    i = e.attachmentBrightness,
                    o = void 0 === i ? R.wZ : i,
                    l = e.attachmentControls,
                    a = e.attachmentFocalPoint,
                    c = void 0 === a ? R.VG : a,
                    u = e.attachmentHref,
                    s = e.attachmentScale,
                    d = e.attachmentType,
                    f = e.blockContentRef,
                    p = e.breakpoint,
                    y = e.children,
                    b = e.counterContent,
                    v = e.description,
                    m = e.editingMediaContext,
                    g = e.enableAnimation,
                    h = void 0 !== g && g,
                    w = e.hasAttachmentFixedHeight,
                    O = e.hasBranding,
                    P = e.hasHorizontalPadding,
                    E = e.hasNavigationArrows,
                    A = e.hasProgress,
                    D = e.isActive,
                    F = void 0 !== D && D,
                    Z = e.isFieldset,
                    Y = e.isTitleHidden,
                    W = e.isVideoPlaying,
                    K = void 0 !== W && W,
                    $ = e.layoutPlacement,
                    Q = void 0 === $ ? R.GE.RIGHT : $,
                    X = e.layoutType,
                    ee = void 0 === X ? R.$1.STACK : X,
                    et = e.shouldMuteAutoplay,
                    er = e.onVideoClick,
                    en = e.onPlay,
                    ei = e.onAutoplayFailed,
                    eo = e.onMediaEnded,
                    el = e.onMediaTimeUpdate,
                    ea = e.outerHeight,
                    ec = e.pexelsApiKey,
                    eu = e.removeTopBottonMargins,
                    es = e.required,
                    ed = void 0 !== es && es,
                    ef = e.rootRef,
                    ep = e.setEditorCanvasElement,
                    ey = e.textAlign,
                    eb = void 0 === ey ? R.Fm.LEFT : ey,
                    ev = e.title,
                    em = e.media,
                    eg = e.mediaPlaceholder,
                    eh = e.isLivePreview,
                    ew = e.delayInteractionText,
                    eO = (0, L.fN)().t,
                    ej = (0, j.useRef)(null),
                    eP = (0, j.useRef)(null),
                    eE = (0, R.Tw)(ee, p),
                    eA = eE === R.nk.STACK.DESKTOP || eE === R.nk.STACK.MOBILE,
                    eT = "sm" === p,
                    e_ = (0, S.uv)(p, ee),
                    ek = eT ? 14 : 8,
                    eS = (0, S.Ji)(p, ee, eE, ea, w),
                    ex = Z ? J : U,
                    eC = 500 * !!h,
                    eL = "fade";
                return (0, B.jsxs)(G, {
                    breakpoint: p,
                    layoutType: ee,
                    hasApplication: r,
                    ref: ef,
                    children: [eE === R.nk.SPLIT.MOBILE && !r && (0, B.jsx)(T.Ay, {
                        isVisible: F,
                        duration: eC,
                        delay: 300 * !!h,
                        type: eL,
                        children: null != em && em.enabled ? (0, B.jsx)(z, {
                            "data-qa": "split-mobile-media-wrapper",
                            enableAnimation: h,
                            isCollapsed: null == em ? void 0 : em.isCollapsed,
                            isLivePreview: void 0 !== eh && eh,
                            hasFixedSize: w,
                            isMobile: eT,
                            children: (0, B.jsx)(M.A, {
                                disableAnimations: !h,
                                forceShowTitle: em.forceShowTitle,
                                href: null == em ? void 0 : em.href,
                                infoMessageOverlay: null == em ? void 0 : em.infoMessageOverlay,
                                isCollapsed: em.isCollapsed,
                                isLogoVisible: em.isLogoVisible,
                                isVisible: F,
                                logoSize: null == em ? void 0 : em.logoSize,
                                mediaPlaceholder: eg,
                                metadata: null == em ? void 0 : em.metadata,
                                onEnded: eo,
                                onLoadedMetadata: em.onLoadedMetadata,
                                onPlay: en,
                                onAutoplayFailed: ei,
                                onTimeUpdate: el,
                                properties: null == em ? void 0 : em.properties,
                                shouldMuteAutoplay: void 0 !== et && et,
                                title: em.title,
                                ref: t
                            })
                        }) : (0, B.jsx)(B.Fragment, {
                            children: !!u && (0, B.jsx)(V, {
                                height: eS,
                                children: (0, B.jsx)(N.FilterWrapper, {
                                    brightness: o,
                                    cover: !0,
                                    children: (0, B.jsx)(x.A, {
                                        alt: n,
                                        cover: !0,
                                        focalPoint: c,
                                        href: u,
                                        isVisible: F,
                                        pexelsApiKey: ec,
                                        type: d,
                                        isVideoPlaying: K,
                                        onVideoClick: er,
                                        controls: l,
                                        editingMediaContext: m,
                                        setEditorCanvasElement: ep
                                    })
                                })
                            })
                        })
                    }), (0, B.jsx)(q, {
                        breakpoint: p,
                        hasHorizontalPadding: void 0 === P || P,
                        layoutPlacement: Q,
                        layoutType: ee,
                        textAlign: eb,
                        ref: f,
                        children: (0, B.jsx)(S.Ay, {
                            noPadding: !0,
                            children: (0, B.jsx)(_.A, {
                                bottom: eu ? 0 : e_ + ek,
                                top: eu ? 0 : e_,
                                children: (0, B.jsxs)(ex, {
                                    isMobile: eT,
                                    hasApplication: r,
                                    "data-qa": "question-wrapper",
                                    children: [Z && (0, B.jsxs)(C.A, {
                                        as: "legend",
                                        children: [b && "".concat(eO("a11y.label.question", {
                                            number: b
                                        }), " "), ed && (0, B.jsxs)("span", {
                                            children: [" ", eO("a11y.label.required")]
                                        })]
                                    }), eE === R.nk.FLOAT.MOBILE && (0, B.jsx)(T.Ay, {
                                        isVisible: F,
                                        duration: eC,
                                        delay: 200 * !!h,
                                        type: eL,
                                        children: (0, B.jsx)(_.A, {
                                            bottom: (0, S.Tm)(p, ee),
                                            children: (0, B.jsx)(N.FilterWrapper, {
                                                brightness: o,
                                                cover: !0,
                                                children: (0, B.jsx)(x.A, {
                                                    alt: n,
                                                    focalPoint: c,
                                                    href: u,
                                                    isVisible: F,
                                                    maxHeight: eS,
                                                    pexelsApiKey: ec,
                                                    type: d,
                                                    isVideoPlaying: K,
                                                    onVideoClick: er,
                                                    controls: l,
                                                    editingMediaContext: m,
                                                    setEditorCanvasElement: ep
                                                })
                                            })
                                        })
                                    }), (0, B.jsxs)("div", {
                                        ref: eP,
                                        children: [!Z && b && (0, B.jsxs)(C.A, {
                                            children: [eO("a11y.label.question", {
                                                number: b
                                            }), void 0 !== Y && Y && ed && (0, B.jsx)("span", {
                                                children: eO("a11y.label.required")
                                            })]
                                        }), ev, ew, v && (0, B.jsx)(k.A, {
                                            top: I.LG.topBlockDescription,
                                            hasFormFooter: void 0 !== O && O || void 0 !== E && E || void 0 !== A && A,
                                            children: v
                                        })]
                                    }), eA && (0, B.jsx)(T.Ay, {
                                        isVisible: F,
                                        duration: eC,
                                        delay: 300 * !!h,
                                        type: eL,
                                        children: (0, B.jsx)(H, {
                                            children: (0, B.jsx)(_.A, {
                                                top: (0, S.XA)(p, ee),
                                                children: (0, B.jsx)(N.FilterWrapper, {
                                                    brightness: o,
                                                    cover: !0,
                                                    children: (0, B.jsx)(x.A, {
                                                        alt: n,
                                                        isCentered: eb === R.Fm.CENTER,
                                                        focalPoint: c,
                                                        href: u,
                                                        isVisible: F,
                                                        maxHeight: eS,
                                                        pexelsApiKey: ec,
                                                        scale: void 0 === s ? 1 : s,
                                                        type: d,
                                                        isVideoPlaying: K,
                                                        onVideoClick: er,
                                                        controls: l,
                                                        editingMediaContext: m,
                                                        setEditorCanvasElement: ep
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, B.jsx)(k.A, {
                                        ref: ej,
                                        hasApplication: r,
                                        top: I.LG.topBlockContent,
                                        children: y
                                    })]
                                })
                            })
                        })
                    })]
                })
            });
            R.nk.SPLIT.DESKTOP, R.nk.FLOAT.DESKTOP, R.nk.WALLPAPER.DESKTOP, R.nk.WALLPAPER.MOBILE;
            var Y = (0, A.i7)(["20%{transform:translateX(3px);}80%{transform:translateX(-3px);}"]),
                W = (0, A.AH)(["animation:", " 0.15s cubic-bezier(0.36,0.07,0.19,0.97) both infinite;@media (prefers-reduced-motion:reduce){animation:none;}"], Y),
                K = A.Ay.section.withConfig({
                    displayName: "LayoutWrapper",
                    componentId: "sc-__sc-i7ahj-0"
                })(["height:100%;display:flex;[dir='rtl'] &&{justify-content:flex-end;}", ""], e => e.isLeftAligned && "\n    justify-content: flex-end;\n\n    [dir='rtl'] && {\n      justify-content: flex-start;\n    }\n  "),
                $ = A.Ay.div.withConfig({
                    displayName: "Section",
                    componentId: "sc-__sc-i7ahj-1"
                })(["position:relative;height:100%;width:", ";", ";display:flex;justify-content:", ";flex-direction:column;", ";visibility:visible;", ";"], e => e.isHalfWidth ? "50%" : "100%", e => e.isShaking && W, e => e.isCentered ? "center" : "flex-start", e => e.hasTransition ? "transition: all 600ms ease;" : "", e => e.isVisible ? "" : "opacity: 0; visibility: hidden;"),
                Q = j.forwardRef((e, t) => {
                    var r = e.breakpoint,
                        n = e.children,
                        i = e.dataQa,
                        o = e.hasTransition,
                        l = e.id,
                        a = e.isActive,
                        c = void 0 !== a && a,
                        u = e.isShaking,
                        s = e.isVisible,
                        d = e.layoutType,
                        f = void 0 === d ? R.$1.STACK : d,
                        p = e.layoutPlacement,
                        y = void 0 === p ? R.GE.RIGHT : p,
                        b = e.onMouseEnterHandler,
                        v = e.onMouseLeaveHandler,
                        m = (0, R.Tw)(f, r),
                        g = m === R.nk.FLOAT.DESKTOP || m === R.nk.SPLIT.DESKTOP,
                        h = m !== R.nk.SPLIT.MOBILE;
                    return (0, B.jsx)(K, {
                        isLeftAligned: y === R.GE.LEFT,
                        onMouseEnter: b,
                        onMouseLeave: v,
                        children: (0, B.jsx)($, {
                            "data-qa": i,
                            "data-qa-block": !0,
                            "data-qa-blockref": l,
                            hasTransition: void 0 !== o && o,
                            id: l ? "block-".concat(l) : void 0,
                            isCentered: h,
                            isHalfWidth: g,
                            isShaking: u,
                            isVisible: void 0 !== s && s,
                            ref: t,
                            "data-qa-focused": c,
                            "aria-hidden": !c,
                            children: n
                        })
                    })
                }),
                X = r(52174),
                ee = r(94222),
                et = r(77610),
                er = r(86067),
                en = r(10108);

            function ei(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var eo = (0, A.i7)(o || (o = ei(["\n  from { opacity: 1; }\n  to   { opacity: 0; display: none; }\n"]))),
                el = A.Ay.div(l || (l = ei(["\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.5) 40%,\n    rgba(0, 0, 0, 0.15) 75%,\n    rgba(0, 0, 0, 0) 100%\n  );\n  position: absolute;\n  /* stylelint-disable liberty/use-logical-spec */\n  top: 0;\n  /* stylelint-enable liberty/use-logical-spec */\n  width: 100%;\n  z-index: ", ";\n\n  ", "\n\n  ", "\n"])), en.fw.level2, e => {
                    var t = e.$paddingTop;
                    return (0, A.AH)(a || (a = ei(["\n    padding: ", "px ", "px 32px\n      ", "px;\n  "])), t, 16, 16)
                }, e => {
                    var t = e.$isHidden,
                        r = e.$fadeOutAnimationDuration;
                    return t && (0, A.AH)(c || (c = ei(["\n      animation: ", " ", "ms ease-out forwards;\n    "])), eo, r)
                }),
                ea = A.Ay.span(u || (u = ei(["\n  display: block;\n  max-width: calc(100% - ", "px);\n  font-size: 18px;\n  color: #fff;\n"])), 32);
            let ec = e => {
                var t = e.children,
                    r = e.disableAnimations,
                    n = e.isLogoVisible,
                    i = e.isTitleHidden,
                    o = e.logoSize,
                    l = void 0 === o ? "medium" : o;
                return (0, B.jsx)(el, {
                    "aria-hidden": i,
                    "data-qa": "media-title",
                    $fadeOutAnimationDuration: 200 * !r,
                    $isHidden: i,
                    $paddingTop: void 0 !== n && n ? ("small" === l ? 36 : "large" === l ? 64 : 48) + 16 : 16,
                    children: (0, B.jsx)(ea, {
                        children: t
                    })
                })
            };
            var eu = r(48172),
                es = r(26055),
                ed = r(97476),
                ef = r(24506),
                ep = e => {
                    var t = e.errorTitle,
                        r = e.errorDescription,
                        n = (0, ef.D)().rendererTokens;
                    return (0, B.jsxs)(eu.s, {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        width: "100%",
                        height: "100%",
                        children: [(0, B.jsx)(es.i, {
                            size: "24",
                            color: n.color.red[800]
                        }), (0, B.jsx)(ed.b, {
                            children: t
                        }), (0, B.jsx)(ed.b, {
                            children: r
                        })]
                    })
                };

            function ey(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return eb(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? eb(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eb(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ev = j.lazy(() => Promise.all([r.e(1818), r.e(2437)]).then(r.bind(r, 29806))),
                em = A.Ay.div(s || (n = ["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  pointer-events: auto;\n"], i || (i = n.slice(0)), s = Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(i)
                    }
                })))),
                eg = j.forwardRef((e, t) => {
                    var r, n = e.disableAnimations,
                        i = e.forceShowTitle,
                        o = e.href,
                        l = e.infoMessageOverlay,
                        a = e.isCollapsed,
                        c = e.isLogoVisible,
                        u = e.isVisible,
                        s = void 0 !== u && u,
                        d = e.logoSize,
                        f = e.mediaPlaceholder,
                        p = e.metadata,
                        y = e.onPlay,
                        b = e.onEnded,
                        v = e.onTimeUpdate,
                        m = e.onAutoplayFailed,
                        g = e.onLoadedMetadata,
                        h = e.properties,
                        w = e.shouldMuteAutoplay,
                        O = e.title,
                        P = e.errorTitle,
                        A = void 0 === P ? "There was an error loading this media" : P,
                        T = e.errorDescription,
                        _ = void 0 === T ? "Please try again later" : T,
                        k = ey((0, j.useState)(!1), 2),
                        S = k[0],
                        x = k[1],
                        C = ey((0, j.useState)(!1), 2),
                        L = C[0],
                        R = C[1],
                        I = "sm" === (0, E.d)(),
                        D = null != h ? h : {},
                        M = D.fit,
                        N = D.isCaptionsControlHidden,
                        H = D.thumbnailTime,
                        F = D.isAutoplay,
                        z = (() => {
                            if (F && s) return w ? "muted" : "unmuted"
                        })();
                    if (f) return (0, B.jsx)(em, {
                        children: f
                    });
                    if (!o) return (0, B.jsx)(ep, {
                        errorTitle: A,
                        errorDescription: _
                    });
                    var V = (0, et.getVideoProvider)(o),
                        G = null != (r = (0, et.getVideoId)(o)) ? r : "";
                    return V && G ? S ? (0, B.jsx)(ep, {
                        errorTitle: A,
                        errorDescription: _
                    }) : (0, B.jsxs)(B.Fragment, {
                        children: [O && I && (0, B.jsx)(ec, {
                            disableAnimations: void 0 !== n && n,
                            isLogoVisible: void 0 !== c && c,
                            isTitleHidden: !(void 0 !== i && i) && (void 0 !== a && a || L),
                            logoSize: d,
                            children: O
                        }), (0, B.jsx)(j.Suspense, {
                            fallback: null,
                            children: (0, B.jsx)(ev, {
                                autoplay: z,
                                service: V,
                                id: G,
                                cover: !M,
                                hideCaptionsControl: N,
                                infoMessageOverlay: l,
                                thumbnailTime: H,
                                isVisible: s,
                                isVideoCentered: !0,
                                onHideAction: "stop",
                                height: er.gh,
                                onError: () => {
                                    x(!0)
                                },
                                onPlay: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    R(!e || t), null == y || y(e, t)
                                },
                                onAutoplayFailed: () => {
                                    null == m || m()
                                },
                                onEnded: b,
                                onLoadedMetadata: g,
                                onTimeUpdate: v,
                                playerMetadata: p,
                                ref: t
                            })
                        })]
                    }) : (0, B.jsx)(ep, {
                        errorTitle: A,
                        errorDescription: _
                    })
                }),
                eh = r(65892),
                ew = r(66299),
                eO = r(15437),
                ej = r(44137),
                eP = r(44213),
                eE = r(23130),
                eA = r(15803),
                eT = r(9799),
                e_ = r(85930),
                ek = r(25078),
                eS = r(97784),
                ex = r(59562),
                eC = r(88976),
                eL = r(99921),
                eR = r(66576),
                eI = r(68014),
                eD = r(51767),
                eM = (0, eI.Mz)(e => e.portal || eD.ue, e => e.isActive),
                eN = r(19819),
                eB = r(42742),
                eH = r(72236),
                eF = r(16583),
                ez = r(5482),
                eV = r(37360);

            function eG() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return e => {
                    t.forEach(t => {
                        if (t) {
                            if ("function" == typeof t) return void t(e);
                            t.current = e
                        }
                    })
                }
            }
            var eU = r(10801),
                eq = {
                    colors: {
                        primary: "#000000",
                        secondary: "#0445AF",
                        button: "#0445AF",
                        buttonContent: "#FFFFFF",
                        background: "#FFFFFF"
                    },
                    hasTransparentButton: !1,
                    font: "System font",
                    fields: {
                        alignment: "left",
                        fontSize: "medium"
                    },
                    screens: {
                        alignment: "center",
                        fontSize: "medium"
                    },
                    roundedCorners: "small"
                },
                eJ = r(95581);

            function eZ(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var eY = (e, t) => {
                    if ("function" == typeof ResizeObserver) {
                        var r = new ResizeObserver(e => {
                            var r, n, i = (function(e) {
                                if (Array.isArray(e)) return e
                            }(e) || function(e) {
                                var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != t) {
                                    var r, n, i, o, l = [],
                                        a = !0,
                                        c = !1;
                                    try {
                                        i = (t = t.call(e)).next, !1;
                                        for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 1 !== l.length); a = !0);
                                    } catch (e) {
                                        c = !0, n = e
                                    } finally {
                                        try {
                                            if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                                        } finally {
                                            if (c) throw n
                                        }
                                    }
                                    return l
                                }
                            }(e) || function(e) {
                                if (e) {
                                    if ("string" == typeof e) return eZ(e, 1);
                                    var t = ({}).toString.call(e).slice(8, -1);
                                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? eZ(e, 1) : void 0
                                }
                            }(e) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[0];
                            t(null != (r = null == (n = i.borderBoxSize) || null == (n = n[0]) ? void 0 : n.blockSize) ? r : i.contentRect.height)
                        });
                        return r.observe(e), () => {
                            r.disconnect()
                        }
                    }
                    var n, i = -1,
                        o = () => {
                            var r = e.clientHeight;
                            r !== i && (i = r, t(r)), n = setTimeout(o, 250)
                        };
                    return o(), () => {
                        clearTimeout(n)
                    }
                },
                eW = r(41609),
                eK = r(62240),
                e$ = r(540),
                eQ = r(95726),
                eX = r(41682),
                e0 = r(12286),
                e1 = r(93830),
                e2 = r(11180),
                e4 = ["withTopSeparation", "children", "show", "disableAnimations"];

            function e3() {
                return (e3 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function e5(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return e8(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e8(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function e8(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function e9(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var e6 = (0, A.AH)(d || (d = e9(["\n  opacity: 0.16;\n  pointer-events: none;\n"]))),
                e7 = (0, A.AH)(f || (f = e9(["\n  opacity: 1;\n"]))),
                te = A.Ay.div.attrs(e => {
                    var t = e.isDisabled;
                    return {
                        "data-qa": "delay-interaction-disabled-wrapper",
                        role: "group",
                        "aria-disabled": t ? "true" : "false",
                        inert: t ? "" : void 0
                    }
                })(p || (p = e9(["\n  ", "\n  ", "\n"])), e => !e.disableAnimations && (0, A.AH)(y || (y = e9(["\n      transition: opacity 0.2s ease-in-out;\n    "]))), e => e.isDisabled ? e6 : e7),
                tt = (0, A.i7)(b || (b = e9(["\n  from {\n    height: 32px;\n  }\n  to {\n    height: 0;\n  }\n"]))),
                tr = (0, A.Ay)(ej.Ay)(v || (v = e9(["\n  line-height: 32px;\n\n  ", "\n\n  ", "\n"])), e => e.withTopSeparation && (0, A.AH)(m || (m = e9(["\n      margin-block: 16px -16px;\n    "]))), e => e.isExiting && (0, A.AH)(g || (g = e9(["\n      opacity: 0;\n      animation: ", " 0.2s ease-out forwards;\n    "])), tt)),
                tn = e => {
                    var t = e.withTopSeparation,
                        r = e.children,
                        n = e.show,
                        i = void 0 === n || n,
                        o = e.disableAnimations,
                        l = void 0 !== o && o,
                        a = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (({}).hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                            }
                            return i
                        }(e, e4),
                        c = e5((0, j.useState)(i), 2),
                        u = c[0],
                        s = c[1],
                        d = e5((0, j.useState)(!1), 2),
                        f = d[0],
                        p = d[1];
                    return ((0, j.useEffect)(() => {
                        if (i) s(!0), p(!1);
                        else if (l) s(!1);
                        else {
                            p(!0);
                            var e = setTimeout(() => {
                                s(!1)
                            }, 200);
                            return () => clearTimeout(e)
                        }
                    }, [i, l]), u) ? j.createElement(tr, e3({
                        withTopSeparation: t,
                        isExiting: f
                    }, a), r) : null
                },
                ti = r(49427),
                to = r(31255),
                tl = r(73426),
                ta = r(85018),
                tc = r(20631);

            function tu(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ts(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ts(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ts(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function td(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var tf = A.Ay.div(h || (h = td(["\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: ", ";\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n"])), () => (0, eH.A)() && (0, eN.c)() && window.location.search.includes("typeform-embed-no-scrollbars=true") ? "hidden" : "auto", e => e.isScrollbarHidden && (0, A.AH)(w || (w = td(["\n      /* Hide scrollbar for Chrome, Safari and Opera */\n      ::-webkit-scrollbar {\n        display: none;\n      }\n\n      /* Hide scrollbar for IE, Edge and Firefox */\n      -ms-overflow-style: none; /* IE and Edge */\n      scrollbar-width: none; /* Firefox */\n    "])))),
                tp = A.Ay.div(O || (O = td(["\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),
                ty = e => !!e && e.scrollTop + 30 >= e.scrollHeight - e.clientHeight,
                tb = e => !!e && e.scrollTop - 30 <= 0;
            let tv = e => {
                var t, r, n = e.autoFocusableRef,
                    i = e.blockContentRef,
                    o = e.blockRef,
                    l = e.canAutoFocus,
                    a = e.canScrollAndSwipe,
                    c = void 0 === a || a,
                    u = e.children,
                    s = e.counterContent,
                    d = e.delayFocus,
                    f = e.descriptionText,
                    p = e.endAutoScroll,
                    y = void 0 === p ? eU.A : p,
                    b = e.focusOnContainer,
                    v = e.isActive,
                    m = e.isFieldset,
                    g = e.isScrollNearTop,
                    h = e.isScrollTop,
                    w = e.layoutType,
                    O = e.onChangeCanSwipe,
                    E = void 0 === O ? eU.A : O,
                    A = e.onKeyDown,
                    T = void 0 === A ? eU.A : A,
                    _ = e.onRequireStickyHeader,
                    k = e.onScroll,
                    x = void 0 === k ? eU.A : k,
                    L = e.required,
                    R = e.scrolling,
                    D = e.t,
                    M = e.titleText,
                    N = e.uniqueId,
                    B = (0, P.dv)(),
                    H = (0, ex.j)(),
                    F = (t = j.useRef(), j.useEffect(() => {
                        t.current = v
                    }, [v]), t.current),
                    z = tu((0, j.useState)(void 0), 2),
                    V = z[0],
                    G = z[1],
                    U = (0, j.useRef)(null),
                    q = (0, j.useRef)(null),
                    J = (0, ex.G)(eC.TE),
                    Z = (0, j.useContext)(eL.A),
                    Y = (0, tc.w9)(o),
                    W = (0, ex.G)(e => (0, ez.jq)(e)),
                    K = (0, ex.G)(eM),
                    $ = (0, ex.G)(e => (0, eR.E7)(e, o)),
                    Q = (0, ex.G)(e => (0, eR.m_)(e, o)),
                    X = (0, ex.G)(e => (0, eK.q4)(e, o)),
                    ee = tu((0, ex.G)(e => (0, eR.Us)(e, o)) || [], 1)[0],
                    et = (0, ex.G)(eN.c),
                    er = () => {
                        !tb(U.current) && U.current && (U.current.scrollTop = 0)
                    };
                (0, j.useEffect)(() => {
                    h && er()
                }, [h]), (0, j.useEffect)(() => {
                    v || Z || er()
                }, [Z, v]), (0, j.useEffect)(() => {
                    setTimeout(() => {
                        U.current && v && c && E({
                            next: ty(U.current),
                            previous: tb(U.current)
                        })
                    }, 500 * !!X)
                }, [v, X]), (0, j.useEffect)(() => {
                    if (v && R && R.scrollType === ew.T1 && R.anchor === eh._N && U.current) {
                        if ((0, e_.mO)($)) {
                            var e, t, r = null == (t = document.activeElement) ? void 0 : t.getBoundingClientRect();
                            e = null == r ? void 0 : r.top
                        } else e = U.current.scrollHeight - U.current.clientHeight;
                        (0, ta.Ay)(U.current, "scrollTop", e, 200, "easeOutCubic", y)
                    }
                }, [R]);
                var en = null == i || null == (r = i.current) ? void 0 : r.clientHeight,
                    ei = "sm" === B,
                    eo = ei && (0, eA.CI)();
                return (0, j.useEffect)(() => {
                    if (eo ? !F && v : v) {
                        if (G(void 0), U.current && en && v && (!J || !Q) && l && !K) {
                            var e, t, r = en + (w ? (0, S.uv)(B, w) * I.zA : 0) > U.current.clientHeight,
                                i = (null == n || null == (e = n.current) || null == (e = e.getBoundingClientRect()) ? void 0 : e.top) && (null == n || null == (t = n.current) || null == (t = t.getBoundingClientRect()) ? void 0 : t.top) > U.current.clientHeight,
                                o = null != n && n.current ? i : !!r,
                                a = !(0, eB.kA)(U.current) && v && (b || eo || o),
                                c = !Z && !(0, eB.kA)(U.current);
                            if (a || c) {
                                if (a) {
                                    G(0), (0, eH.A)() && et ? U.current.scrollIntoView() : (0, eB.pW)(U.current, d, (0, eH.A)());
                                    return
                                }
                                if (null != n && n.current) {
                                    G(0), (0, eB.pW)(null == n ? void 0 : n.current, d);
                                    return
                                }(0, eB.Ay)(U.current, d)
                            }
                        }
                    }
                }, [n, l, en, d, v, Z, J, K, V]), j.createElement(tf, {
                    key: "block-scroller-".concat(o),
                    "data-qa": "block-scroller",
                    isScrollbarHidden: W && ei,
                    onScroll: () => {
                        if (U.current && c) {
                            v && (E({
                                next: ty(U.current),
                                previous: tb(U.current)
                            }), x(), null != ee && ee.enabled && !X && H((0, e$.wU)({
                                ref: o,
                                itemType: "scroll"
                            })));
                            var e = U.current.scrollTop;
                            Y(e), e > 32 && g ? _(!0) : e <= 32 && !g && _(!1)
                        }
                    },
                    onKeyDown: T,
                    ref: U,
                    tabIndex: V,
                    "aria-labelledby": m ? (0, eT._7)(N) : void 0
                }, m && j.createElement(C.A, {
                    id: (0, eT._7)(N)
                }, j.createElement("p", null, s && D("a11y.label.question", {
                    number: s
                }), M, L && D("a11y.label.required")), j.createElement("p", null, f)), j.createElement(tp, {
                    ref: q
                }, u))
            };
            var tm = r(39067),
                tg = r.n(tm),
                th = e => {
                    var t = e.announceTitle,
                        r = e.children,
                        n = e.htmlFor,
                        i = e.htmlTag,
                        o = e.id,
                        l = e.required,
                        a = e.t,
                        c = ["div", "span", "legend"].includes(i),
                        u = l && j.createElement(C.A, null, a("a11y.label.required"));
                    return j.createElement(ej.Ay, {
                        "aria-live": t ? "polite" : "off",
                        type: I.go.blockTitle,
                        htmlTag: "legend" === i ? "span" : i,
                        htmlFor: "label" === i ? n : null,
                        "data-qa": "block-title deep-purple-block-title",
                        role: c ? "heading" : null,
                        "aria-level": c ? 2 : null,
                        id: o
                    }, r, u)
                };

            function tw() {
                return (tw = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function tO(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tj(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tO(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tO(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function tP(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return tE(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tE(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tE(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            th.defaultProps = {
                htmlTag: "span",
                required: !1,
                ariaLive: "off"
            }, th.propTypes = {
                children: tg().any,
                htmlFor: tg().string,
                htmlTag: tg().string,
                id: tg().string,
                announceTitle: tg().bool,
                required: tg().bool,
                t: tg().func.isRequired
            };
            var tA = j.forwardRef((e, t) => {
                var r = e.application,
                    n = e.attachment,
                    i = e.isBlockListVisible,
                    o = e.blockRef,
                    l = e.blockHeightChanging,
                    a = void 0 === l ? eU.A : l,
                    c = e.children,
                    u = e.description,
                    s = e.endAutoScroll,
                    d = e.hasBranding,
                    f = e.hasNavigationArrows,
                    p = e.hasProgress,
                    y = e.isActive,
                    b = void 0 !== y && y,
                    v = e.isScrollNearTop,
                    m = e.isScrollTop,
                    g = e.isShaking,
                    h = e.canAutoFocus,
                    w = e.delayFocus,
                    O = void 0 === w ? 0 : w,
                    A = e.layout,
                    T = e.listIndexText,
                    k = e.onChangeCanSwipe,
                    S = e.onKeyDown,
                    x = void 0 === S ? eU.A : S,
                    C = e.onRequireStickyHeader,
                    L = void 0 === C ? eU.A : C,
                    D = e.onScroll,
                    M = void 0 === D ? eU.A : D,
                    N = e.scrolling,
                    B = e.suspended,
                    H = e.t,
                    F = void 0 === H ? e => e : H,
                    z = e.theme,
                    V = void 0 === z ? eq : z,
                    G = e.titleLabelId,
                    U = e.titleFor,
                    q = e.titleTag,
                    J = e.titleText,
                    Y = e.titleCounterIcon,
                    W = void 0 === Y ? eO.c.ARROW : Y,
                    K = e.type,
                    $ = e.uniqueId,
                    et = e.validations,
                    er = void 0 === et ? {} : et,
                    en = e.isVideoPlaying,
                    ei = e.onVideoClick,
                    eo = e.focusOnContainer,
                    el = void 0 !== eo && eo,
                    ea = e.autoFocusableRef,
                    ec = e.blockHeight,
                    eu = e.footer,
                    es = e.questionPosition,
                    ed = e.effectiveHideRequiredIndicator,
                    ef = void 0 !== ed && ed,
                    ep = (0, ex.j)(),
                    ey = (0, j.useRef)(null),
                    eb = (0, j.useRef)(null),
                    ev = (0, j.useRef)(null),
                    em = (0, j.useRef)(null),
                    eI = tP((0, j.useState)(0), 2),
                    eD = eI[0],
                    eZ = eI[1],
                    e4 = (0, P.dv)(),
                    e3 = (0, E.d)(),
                    e5 = (0, ex.G)(eF.A),
                    e8 = (0, ex.G)(eV.tT),
                    e9 = (0, ex.G)(ez.b6),
                    e6 = (0, ex.G)(ek.UL),
                    e7 = (0, eX.j)(),
                    tt = (0, e0.n)(o),
                    tr = (0, e1.$)(),
                    ta = tr.trackMediaPlay,
                    tc = tr.trackAutoplayFailed,
                    tu = (0, j.useRef)(null),
                    ts = (0, j.useRef)(null),
                    td = tP((0, j.useState)(!1), 2),
                    tf = td[0],
                    tp = td[1],
                    ty = !e7,
                    tb = (0, to.m)(),
                    tm = tb ? e3 : e4,
                    tg = (0, eJ.A)(tm, A),
                    tO = (0, ex.G)(eK.pE),
                    tE = (0, eN.c)(),
                    tA = (0, ex.G)(eV.BH),
                    tT = (0, e2.f)(),
                    t_ = tT.startCountdown,
                    tk = tT.waitForInteraction,
                    tS = tT.currentBlockHasDelayInteraction;
                (0, j.useEffect)(() => {
                    var e = e => {
                        o === e.detail.blockRef && (tp(!0), setTimeout(() => {
                            var e, t;
                            null == (e = tu.current) || null == (e = e.player) || e.play(), null == (t = ts.current) || null == (t = t.player) || t.play()
                        }, 500))
                    };
                    return ti.z.addEventListener("play-video", e),
                        function() {
                            ti.z.removeEventListener("play-video", e)
                        }
                }, []);
                var tx = 0 === tk,
                    tC = "number" == typeof tk,
                    tL = (0, ex.G)(eK.r8),
                    tR = (0, eS.V)({
                        brandLogo: null == V ? void 0 : V.logo
                    }).shouldRenderBrandWithPulseSurvey,
                    tI = (0, j.useMemo)(() => "sm" === tm, [tm]),
                    tD = "legend" === q,
                    tM = null == tg ? void 0 : tg.type,
                    tN = null == tg ? void 0 : tg.placement,
                    tB = {
                        scrolling: N,
                        canAutoFocus: h,
                        canScrollAndSwipe: !window.location.search.match(/typeform-embed-disable-scroll=true/i)
                    },
                    tH = (0, ex.G)(e => (0, ez.jq)(e)),
                    tF = tP((0, ex.G)(e => (0, eR.Us)(e, o)) || [], 1)[0],
                    tz = (0, ex.G)(e => (0, eK.q4)(e, o)),
                    tV = () => ep((0, e$.wU)({
                        ref: o,
                        itemType: "triggered_by_tf_system"
                    })),
                    tG = tj(tj({}, tF), {}, {
                        metadata: tt,
                        isCollapsed: tz || (0, eH.A)(),
                        properties: tj(tj({}, null == tF ? void 0 : tF.properties), {}, {
                            isAutoplay: tL && !tf && !e7
                        })
                    }),
                    tU = null != (t1 = null == A ? void 0 : A.attachment) ? t1 : n,
                    tq = !!(null != tF && tF.enabled);
                tq && (tB = {
                    scrolling: {
                        scrollType: ew.T1,
                        anchor: eh.wv
                    },
                    canAutoFocus: tz,
                    canScrollAndSwipe: tB.canScrollAndSwipe
                }, tM = eW.O, tN = R.GE.LEFT), r && (tM = R.$1.SPLIT, tN = R.GE.RIGHT, tI && (tM = tb ? R.$1.STACK : R.$1.WALLPAPER));
                var tJ = null != (t2 = null == tU || null == (t4 = tU.properties) ? void 0 : t4.focalPoint) ? t2 : R.VG,
                    tZ = null != (t3 = null == tU || null == (t5 = tU.properties) ? void 0 : t5.brightness) ? t3 : R.wZ,
                    tY = (0, R.sY)(null == (t8 = V.fields) ? void 0 : t8.alignment, tM),
                    tW = null != (t9 = null == tg ? void 0 : tg.type) ? t9 : R.$1.WALLPAPER,
                    tK = (0, R.Tw)(tW, e3),
                    t$ = tK === R.nk.SPLIT.DESKTOP || tK === R.nk.WALLPAPER.DESKTOP || tK === R.nk.WALLPAPER.MOBILE,
                    tQ = (0, j.useMemo)(() => e5 && (tM !== R.$1.SPLIT || "sm" !== tm), [tM, e5, tm]),
                    tX = (0, ex.G)(e => (0, eR.E7)(e, o)),
                    t0 = !1;
                if (tq) {
                    var t1, t2, t4, t3, t5, t8, t9, t6, t7, re, rt, rr, rn, ri, ro, rl, ra = "string" == typeof J ? J : null == (ro = J[0]) ? void 0 : ro.props.children,
                        rc = !(null != ra && ra.length),
                        ru = "(Video question)" === ra;
                    t0 = rc || ru, tG = tj(tj({}, tG), {}, {
                        isLogoVisible: tR,
                        logoSize: null == V || null == (rl = V.logo) ? void 0 : rl.size
                    }, !t0 && {
                        title: J
                    })
                }(0, j.useEffect)(() => {
                    if (ev.current) {
                        eZ(ev.current.clientHeight);
                        var e = () => {
                            ev.current && eZ(ev.current.clientHeight)
                        };
                        return window.addEventListener("resize", e, !0), () => window.removeEventListener("resize", e, !0)
                    }
                }, [null == (t6 = ev.current) ? void 0 : t6.clientHeight]);
                var rs = "header-counter-".concat(o),
                    rd = i && (b || !(0, eA.CI)()),
                    rf = (0, eE.BL)(e8, o) && !!T,
                    rp = rf ? "".concat(T, ".") : T,
                    ry = {
                        counterId: rs,
                        counterIcon: rf ? null : W,
                        counterColor: null == V || null == (t7 = V.colors) ? void 0 : t7.secondary,
                        counterContent: rp
                    },
                    rb = tC ? "".concat(F("video-question.delay-interaction.instruction-ready.text"), " ").concat(tk) : F("video-question.delay-interaction.instruction-watch.text"),
                    rv = tS && !tx,
                    rm = (0, j.useMemo)(() => {
                        var e, t;
                        return null != (e = V.logo) && e.size ? (0, eP.I)(null == (t = V.logo) ? void 0 : t.size, tm) : 0
                    }, [null == (re = V.logo) ? void 0 : re.size, tm]),
                    rg = tQ ? 8 * rm : 0;
                (0, j.useEffect)(() => {
                    if (b && null != em && em.current && !tb) return eY(em.current, e => {
                        void 0 !== ec && ec > 0 ? a(ec) : a(e + rg)
                    })
                }, [b, em, ec, r, e4, tb]), (0, j.useEffect)(() => {
                    if (b && null != ey && ey.current && tb) return eY(ey.current, e => {
                        void 0 !== ec && ec > 0 ? a(ec) : a(e)
                    })
                }, [b, ey, ec, r, e4, tb]);
                var rh = !tO,
                    rw = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        ta(o, e, t), (!e || t) && (e || ep((0, e$.FO)()), tS && !tC && t_())
                    },
                    rO = () => {
                        tc(o)
                    },
                    rj = (0, j.useCallback)(e => {
                        tb && (e && v ? ep((0, tl.q)(!0)) : e || v || ep((0, tl.q)(!1)))
                    }, [ep, v, tb]),
                    rP = (0, eQ.Z)().setCurrentMediaProgress,
                    rE = (rT = (rA = {
                        blockContentRef: ey,
                        blockRef: o,
                        canAutoFocus: h,
                        delayFocus: O,
                        isActive: b,
                        questionPosition: es,
                        autoFocusableRef: ea,
                        focusOnContainer: el
                    }).blockContentRef, r_ = rA.blockRef, rk = rA.canAutoFocus, rx = void 0 === (rS = rA.delayFocus) ? 0 : rS, rC = rA.isActive, rL = rA.questionPosition, rR = rA.autoFocusableRef, rD = void 0 !== (rI = rA.focusOnContainer) && rI, rM = (0, P.dv)(), rN = (0, j.useRef)(), (0, j.useEffect)(() => {
                        rN.current = rC
                    }, [rC]), rB = rN.current, rH = "sm" === rM, rF = (0, ex.G)(eC.TE), rz = (0, ex.G)(eM), rV = (0, j.useContext)(eL.A), rG = (0, ex.G)(e => (0, eR.m_)(e, r_)), rU = (0, ex.G)(eN.c), rq = (0, j.useCallback)(e => {
                        (0, eH.A)() && rU ? e.scrollIntoView({
                            block: "nearest",
                            behavior: "smooth"
                        }) : (0, eB.pW)(e, rx, (0, eH.A)())
                    }, [rx, rU]), (0, j.useCallback)(() => {
                        var e = rT.current || (r_ ? document.getElementById(r_) : null),
                            t = rH && (0, eA.CI)();
                        !e || "current" !== rL || rF && rG || !rk || rz || rV || (0, eB.kA)(e) || (t ? !rB && rC : rC) && (null != rR && rR.current ? rR.current.getBoundingClientRect().top > window.innerHeight && e ? rq(e) : rq(rR.current) : rD || t ? rq(e) : (0, eB.Ay)(e, rx))
                    }, [rT, r_, rL, rH, rF, rG, rk, rz, rV, rB, rC, rR, rD, rq, rx]));
                if ((0, j.useEffect)(() => {
                        tb && h && "current" === es && rE()
                    }, [tb, h, es, rE]), tb) {
                    var rA, rT, r_, rk, rS, rx, rC, rL, rR, rI, rD, rM, rN, rB, rH, rF, rz, rV, rG, rU, rq, rJ, rZ, rY, rW, rK, r$, rQ, rX, r0, r1 = !!r && ("md" === tm || "lg" === tm);
                    return j.createElement(X.vN, {
                        mediaHasFixedSize: tE,
                        isMediaCollapsed: !tq || tG.isCollapsed,
                        isLivePreview: tH,
                        "data-qa": B ? "loading-block-skeleton" : "blocktype-".concat(K, " deep-purple-blocktype-").concat(K),
                        blockRef: o,
                        layoutType: tM,
                        layoutPlacement: tN,
                        contentAlignment: tY,
                        fieldsetRef: eG(t, ey),
                        isFieldset: tD,
                        containerRef: t,
                        position: es,
                        onAnimationComplete: rE,
                        onKeyDown: x,
                        onChangeCanSwipe: k,
                        canScrollAndSwipe: tB.canScrollAndSwipe,
                        mediaType: null == tU ? void 0 : tU.type,
                        media: r1 ? void 0 : r ? c : tU && !tq ? j.createElement(ee.o3, {
                            isVisible: b,
                            brightness: null == tU || null == (rJ = tU.properties) ? void 0 : rJ.brightness,
                            focalPoint: null == tU || null == (rZ = tU.properties) ? void 0 : rZ.focalPoint,
                            alt: null == tU || null == (rY = tU.properties) ? void 0 : rY.description,
                            cover: (null == tg ? void 0 : tg.type) !== "stack" && (null == tg ? void 0 : tg.type) !== "float",
                            isCentered: "center" === tY,
                            isHighDefinition: t$,
                            pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                            href: null == tU ? void 0 : tU.href,
                            scale: null == tU ? void 0 : tU.scale,
                            type: null == tU ? void 0 : tU.type,
                            isVideoPlaying: en,
                            onVideoClick: ei
                        }) : tq ? j.createElement(eg, {
                            ref: ts,
                            disableAnimations: !ty,
                            forceShowTitle: tG.forceShowTitle,
                            href: null == (rW = tG) ? void 0 : rW.href,
                            infoMessageOverlay: null == (rK = tG) ? void 0 : rK.infoMessageOverlay,
                            isCollapsed: tG.isCollapsed,
                            isLogoVisible: tG.isLogoVisible,
                            isVisible: b,
                            logoSize: null == (r$ = tG) ? void 0 : r$.logoSize,
                            metadata: null == (rQ = tG) ? void 0 : rQ.metadata,
                            onEnded: tV,
                            onLoadedMetadata: tG.onLoadedMetadata,
                            onPlay: rw,
                            onAutoplayFailed: rO,
                            onTimeUpdate: rP,
                            properties: null == (rX = tG) ? void 0 : rX.properties,
                            shouldMuteAutoplay: rh,
                            title: tG.title
                        }) : void 0
                    }, j.createElement(X.vN.Header, {
                        onScrollThreshold: rj
                    }, j.createElement(X.vN.Title, tw({
                        labels: {
                            requiredLabel: F("a11y.label.required"),
                            questionPrefixLabel: F("a11y.label.question", {
                                number: rp,
                                totalNumber: tA
                            })
                        },
                        "data-qa": "block-title deep-purple-block-title",
                        isRequired: (null == er ? void 0 : er.required) && !ef
                    }, "label" === q ? {
                        forwardedAs: "label",
                        htmlFor: U
                    } : {}, e9 ? {
                        prefixContent: rp,
                        prefixKind: ({
                            quote: "quotation",
                            arrow: "number"
                        })[ry.counterIcon] || "letter"
                    } : {}), J), !u || tq ? void 0 : j.createElement(X.vN.Description, {
                        "data-qa": "block-description"
                    }, u), j.createElement(tn, {
                        withTopSeparation: !t0,
                        color: null == (r0 = V.colors) ? void 0 : r0.secondary,
                        show: tS && !tx,
                        disableAnimations: !ty
                    }, rb)), (!r || r1) && c && j.createElement(X.vN.Answer, {
                        disableInteraction: rv
                    }, c), eu && j.createElement(X.vN.Actions, {
                        disableInteraction: rv
                    }, eu))
                }
                return j.createElement(Q, {
                    layoutType: tM,
                    breakpoint: e4,
                    dataQa: B ? "loading-block-skeleton" : "blocktype-".concat(K, " deep-purple-blocktype-").concat(K),
                    hasTransition: !0,
                    id: o,
                    isActive: b,
                    isShaking: b && g,
                    isVisible: rd,
                    ref: eG(t, ev),
                    layoutPlacement: tN
                }, j.createElement(tv, tw({
                    blockRef: o,
                    endAutoScroll: s,
                    isActive: b,
                    onChangeCanSwipe: k,
                    onRequireStickyHeader: L,
                    onScroll: M,
                    onKeyDown: x,
                    isFieldset: tD,
                    isScrollNearTop: v,
                    isScrollTop: m,
                    focusOnContainer: el,
                    required: null == er ? void 0 : er.required,
                    t: F,
                    titleText: J,
                    descriptionText: u,
                    uniqueId: $
                }, e9 ? {
                    counterContent: rp
                } : {}, {
                    blockContentRef: eb,
                    delayFocus: O,
                    autoFocusableRef: ea,
                    layoutType: tM
                }, tB), tQ && j.createElement(_.A, {
                    top: rm
                }), j.createElement(Z, tw({
                    hasApplication: !!r,
                    attachmentBrightness: tZ,
                    attachmentFocalPoint: tJ,
                    attachmentHref: null == tU ? void 0 : tU.href,
                    attachmentType: null == tU ? void 0 : tU.type,
                    attachmentScale: null == tU ? void 0 : tU.scale,
                    attachmentAlt: null == tU || null == (rt = tU.properties) ? void 0 : rt.description,
                    isLivePreview: tH,
                    media: tG,
                    onAutoplayFailed: rO,
                    shouldMuteAutoplay: rh,
                    hasAttachmentFixedHeight: tE,
                    breakpoint: e4,
                    description: !u || tq ? void 0 : j.createElement(ej.Ay, {
                        id: (0, eT.un)($),
                        align: tY,
                        type: I.go.blockDescription,
                        color: null == V || null == (rr = V.colors) ? void 0 : rr.primary,
                        htmlTag: "p",
                        dataQa: "block-description",
                        breakText: !0
                    }, u),
                    enableAnimation: ty,
                    hasBranding: d,
                    hasNavigationArrows: f,
                    hasProgress: p,
                    isActive: b,
                    isFieldset: tD,
                    layoutType: tM,
                    pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                    outerHeight: eD,
                    removeTopBottonMargins: e6,
                    required: null == er ? void 0 : er.required,
                    textAlign: (0, e_.mO)(tX) ? R.Fm.LEFT : tY,
                    title: j.createElement(eO.A, tw({
                        title: j.createElement(th, {
                            required: null == er ? void 0 : er.required,
                            t: F,
                            id: G,
                            htmlFor: U,
                            htmlTag: q
                        }, J),
                        color: null == V || null == (rn = V.colors) ? void 0 : rn.primary,
                        required: !t0 && (null == er ? void 0 : er.required) && !ef,
                        textAlign: tY,
                        isTitleHidden: t0
                    }, e9 ? ry : {})),
                    delayInteractionText: j.createElement(tn, {
                        withTopSeparation: !t0,
                        color: null == (ri = V.colors) ? void 0 : ri.secondary,
                        show: tS && !tx,
                        disableAnimations: !ty
                    }, rb),
                    isVideoPlaying: en,
                    onVideoClick: ei,
                    onPlay: rw,
                    onMediaEnded: tV
                }, e9 && rp ? {
                    counterContent: rp
                } : {}, {
                    onMediaTimeUpdate: rP,
                    blockContentRef: eb,
                    rootRef: em,
                    isTitleHidden: t0,
                    ref: tu
                }), j.createElement(te, {
                    isDisabled: rv,
                    disableAnimations: !ty
                }, c)), tQ && j.createElement(_.A, {
                    top: rm
                })))
            });
            tA.displayName = "BlockWrapper";
            let tT = tA
        },
        52146(e, t, r) {
            var n = r(14041),
                i = r(48172),
                o = r(91762),
                l = r(97476),
                a = r(39067),
                c = r.n(a),
                u = r(91235),
                s = r(15803),
                d = r(86989),
                f = r(28362),
                p = r(82444),
                y = r(31255),
                b = r(59562),
                v = r(39613),
                m = e => {
                    var t = e.ariaDescribedBy,
                        r = e.ariaLabel,
                        a = e.centered,
                        c = e.disabled,
                        s = e.fullWidth,
                        f = e.hasMarginBottom,
                        m = e.helperText,
                        g = e.isComplete,
                        h = e.isLivePreview,
                        w = e.isPaymentBlockAnswered,
                        O = e.isFaqBlock,
                        j = e.variant,
                        P = e.isSubmitting,
                        E = e.isVisible,
                        A = e.onClick,
                        T = e.price,
                        _ = e.size,
                        k = e.t,
                        S = e.theme,
                        x = e.buttonRef,
                        C = e.hideHelperText,
                        L = (0, d.$E)(),
                        R = (0, y.m)(),
                        I = (0, b.G)(v.vT),
                        D = k("label.button.submit");
                    I ? D = k("label.button.continue") : w ? D = k("label.button.submitAndPay", {
                        price: T
                    }) : O && (D = k("label.button.skip-and-submit"));
                    var M = S.colors.button,
                        N = "submit-button deep-purple-submit-button";
                    if (R) {
                        var B = !C && !L && !a && !!m;
                        return n.createElement(i.s, {
                            gap: 12,
                            alignItems: "center",
                            justifyContent: a ? "center" : "flex-start",
                            width: s || a ? "100%" : "fit-content"
                        }, n.createElement(o.$, {
                            size: "large",
                            kind: j,
                            "aria-label": r || "".concat(k("a11y.label.submit-button")),
                            "aria-describedby": t,
                            ref: x,
                            "data-qa": N,
                            disabled: c || !h && (P || g),
                            fullWidth: s,
                            isLoading: !h && P,
                            onClick: A
                        }, D), B && n.createElement(l.b, {
                            id: t
                        }, (0, p.A)(k(m))))
                    }
                    return n.createElement(u.A, {
                        variant: j,
                        ariaDescribedBy: t,
                        ariaLabel: r,
                        buttonRef: x,
                        centered: a,
                        color: M,
                        contentColor: S.colors.buttonContent,
                        content: D,
                        contextBackgroundColor: S.colors.background,
                        dataQa: N,
                        disabled: c || !h && (P || g),
                        fullWidth: s,
                        hasMarginBottom: f,
                        helperColor: S.colors.primary,
                        helperText: L || a ? "" : (0, p.A)(k(m)),
                        isSpinning: !h && P,
                        isTransparent: S.hasTransparentButton,
                        onClick: A,
                        size: _,
                        tabIndex: E ? 0 : -1,
                        hideHelperText: C
                    })
                };
            m.defaultProps = {
                centered: !1,
                helperText: "label.buttonHint.default",
                size: "large",
                theme: {
                    colors: {
                        backgroundColor: s.gB,
                        button: s.gB,
                        primary: s.gB
                    },
                    hasTransparentButton: !1
                },
                t: e => e
            }, m.propTypes = {
                ariaDescribedBy: c().string,
                ariaLabel: c().string,
                buttonRef: c().object,
                variant: c().string,
                centered: c().bool,
                disabled: c().bool,
                fullWidth: c().bool,
                hasMarginBottom: c().bool,
                helperText: c().string,
                isComplete: c().bool,
                isLivePreview: c().bool,
                isPaymentBlockAnswered: c().bool,
                isFaqBlock: c().bool,
                isSubmitting: c().bool,
                isVisible: c().bool,
                onClick: c().func,
                price: c().string,
                size: c().string,
                t: c().func,
                theme: c().object,
                hideHelperText: c().bool
            };
            let g = (0, f.A)(m);
            r.d(t, {
                z: () => m
            }, {
                A: g
            })
        },
        15477(e, t, r) {
            r.r(t), r.d(t, {
                default: () => eL,
                getCustomRedirectUrl: () => eC
            });
            var n, i = r(70288),
                o = r(73350),
                l = r(38729),
                a = r(25078),
                c = r(70854),
                u = r(56284),
                s = r(28362),
                d = r(86937),
                f = r(37360),
                p = r(5482),
                y = r(16583),
                b = r(28105),
                v = r(95305),
                m = r(99087),
                g = r(68014),
                h = r(48854),
                w = r(16849),
                O = r(66576),
                j = (0, g.Mz)(h.NX, w.WV, O.G4, f.oo, (e, t, r, n) => {
                    if (!r || !(e.isComplete && e.isSuccess)) return !1;
                    if (t) {
                        if (t.stripeElementState) {
                            var i = t.stripeElementState,
                                o = i.complete,
                                l = void 0 !== o && o,
                                a = i.empty,
                                c = i.error;
                            return "card" === i.value.type ? l && !(void 0 === a || a) && !c : l && !c
                        }
                        return !1
                    }
                    return n && n.length, !1
                }),
                P = ((n = {}).RELOAD = "reload", n.REDIRECT = "redirect", n.REDIRECT_DEFAULT = "default_redirect", n),
                E = r(14041),
                A = r(15797),
                T = r(63355),
                _ = r(89711),
                k = r(52174),
                S = r(94222),
                x = r(66896),
                C = r(97476),
                L = r(48172),
                R = r(91762),
                I = r(15575),
                D = r(44137),
                M = r(39302),
                N = r(94657),
                B = r(15803),
                H = r(10537),
                F = r(93540),
                z = r(40155),
                V = r(41682),
                G = r(16977),
                U = r(21153),
                q = r(43710),
                J = r(31085),
                Z = [{
                    name: "Facebook",
                    icon: E.createElement(() => (0, J.jsxs)("svg", {
                        height: "32",
                        version: "1",
                        width: "32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, J.jsxs)("g", {
                            clipPath: "url(#clip0_2968_21729)",
                            children: [(0, J.jsx)("rect", {
                                width: "32",
                                height: "31.9986",
                                rx: "4",
                                fill: "#0866FF"
                            }), (0, J.jsx)("path", {
                                d: "M22.2667 20.8891L23.1645 15.9997H17.9384V14.2706C17.9384 11.6868 18.9521 10.693 21.5756 10.693C22.3905 10.693 23.0464 10.7129 23.4241 10.7526V6.32036C22.7085 6.12157 20.9595 5.92285 19.9458 5.92285C14.5993 5.92285 12.1348 8.44701 12.1348 13.8929V15.9997H8.83545V20.8891H12.1348V31.9998C14 31.9998 16 31.9998 17.9384 31.9998V20.8891H22.2667Z",
                                fill: "white"
                            })]
                        }), (0, J.jsx)("defs", {
                            children: (0, J.jsx)("clipPath", {
                                id: "clip0_2968_21729",
                                children: (0, J.jsx)("rect", {
                                    width: "32",
                                    height: "31.9986",
                                    rx: "4",
                                    fill: "white"
                                })
                            })
                        })]
                    }), null),
                    linkTemplate: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
                    utmSource: "facebook"
                }, {
                    name: "X",
                    icon: E.createElement(() => (0, J.jsx)("svg", {
                        height: "32",
                        version: "1",
                        width: "32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, J.jsxs)("g", {
                            fill: "none",
                            children: [(0, J.jsx)("rect", {
                                width: "32",
                                height: "31.9986",
                                rx: "4",
                                fill: "black"
                            }), (0, J.jsx)("path", {
                                d: "M17.9047 14.4696L25.3513 6H23.5873L17.1187 13.3525L11.956 6H6L13.8087 17.1194L6 25.9999H7.764L14.5907 18.2338L20.044 25.9999H26M8.40067 7.30158H11.1107L23.586 24.7623H20.8753",
                                fill: "white"
                            })]
                        })
                    }), null),
                    linkTemplate: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
                    utmSource: "x"
                }, {
                    name: "LinkedIn",
                    icon: E.createElement(() => (0, J.jsxs)("svg", {
                        height: "32",
                        version: "1",
                        width: "32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, J.jsx)("rect", {
                            width: "32",
                            height: "31.9986",
                            rx: "4",
                            fill: "#0A66C2"
                        }), (0, J.jsx)("path", {
                            d: "M27.2731 27.2727H22.4628V18.9258C22.4628 16.4634 21.4157 15.7037 20.065 15.7037C18.6381 15.7037 17.2381 16.7773 17.2381 18.9869V27.2727H12.4279V11.9906H17.0541V14.1073H17.1159C17.5811 13.1664 19.206 11.5608 21.6886 11.5608C24.3726 11.5608 27.2731 13.1523 27.2731 17.821V27.2727ZM7.13299 9.86094C5.60042 9.86094 4.3595 8.69566 4.3595 7.09999C4.3595 5.50486 5.60042 4.33691 7.13299 4.33691C8.66487 4.33691 9.9058 5.50486 9.9058 7.09999C9.9058 8.69566 8.66487 9.86094 7.13299 9.86094ZM9.53774 27.2608H4.72753V11.9782H9.53774V27.2608Z",
                            fill: "white"
                        })]
                    }), null),
                    linkTemplate: "https://www.linkedin.com/shareArticle?url={{url}}",
                    utmSource: "linkedin"
                }],
                Y = r(75399),
                W = r(82444),
                K = r(71192),
                $ = r(57947),
                Q = r(72236),
                X = r(42807),
                ee = r(19819),
                et = r(21175),
                er = r(95581),
                en = r(2395),
                ei = r(41338),
                eo = r(91235),
                el = r(88400),
                ea = r(99869),
                ec = r(24009),
                eu = r(88515),
                es = r(31255),
                ed = r(6585),
                ef = r(19691),
                ep = r(39067),
                ey = r.n(ep),
                eb = r(29340),
                ev = r(95405),
                em = r(98361);
            let eg = e => {
                var t, r = e.layoutType,
                    n = e.onClick,
                    i = void 0 === n ? B.lQ : n,
                    o = e.providers,
                    l = e.textAlign,
                    a = (0, ev.fN)().t,
                    c = (0, eb.DP)(),
                    u = l || (0, el.sY)(null == c || null == (t = c.screens) ? void 0 : t.alignment, r),
                    s = ec.xH.center,
                    d = ec.xH.start;
                return (0, J.jsx)(ec.Ay, {
                    position: u === el.Fm.CENTER ? s : d,
                    space: 1,
                    children: (void 0 === o ? [] : o).map((e, t) => {
                        var r = e.icon,
                            n = e.link,
                            o = e.name,
                            l = a("thankyou-screen.social-icon.title", {
                                name: o
                            });
                        return (0, J.jsx)("a", {
                            "aria-label": l,
                            href: n,
                            onClick: () => i(o),
                            rel: "noopener noreferrer",
                            target: "_blank",
                            title: l,
                            children: (0, J.jsx)(em.A, {
                                "aria-hidden": "true",
                                svg: r
                            })
                        }, "social-icons-".concat(t))
                    })
                })
            };
            var eh = r(48163),
                ew = ["linkTemplate", "utmSource"];

            function eO(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ej(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eO(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eP = e => {
                var t, r, n, i, o, l = e.providers,
                    a = e.thankYouScreenRef,
                    c = e.appendUtmSourceParam,
                    u = e.layoutType,
                    s = e.onClick,
                    d = (r = (t = {
                        providers: l,
                        thankYouScreenRef: a,
                        appendUtmSourceParam: c,
                        shareText: e.shareText
                    }).providers, n = t.thankYouScreenRef, i = t.appendUtmSourceParam, o = t.shareText, r.map(e => {
                        let t;
                        var r = e.linkTemplate,
                            l = e.utmSource,
                            a = function(e, t) {
                                if (null == e) return {};
                                var r, n, i = function(e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if (({}).hasOwnProperty.call(e, n)) {
                                            if (-1 !== t.indexOf(n)) continue;
                                            r[n] = e[n]
                                        }
                                    return r
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                }
                                return i
                            }(e, ew),
                            c = encodeURIComponent("".concat(((e, t, r) => {
                                if (!(0, eh.l)()) return "";
                                var n, i, o = "".concat(window.location.origin).concat(window.location.pathname);
                                return e && (o = "".concat(o, "?").concat("typeform-ty-screen-ref", "=").concat(e)), t && (i = (n = o).indexOf("?") > 0 ? "&" : "?", o = "".concat(n).concat(i, "utm_source=").concat(r, "&utm_content=typeform_social")), o
                            })(n, i, l))),
                            u = encodeURIComponent(o);
                        return ej(ej({}, a), {}, {
                            link: (t = {
                                url: c,
                                text: u
                            }, r.replace(/{{(url|text)}}/g, (e, r) => t[r]))
                        })
                    }));
                return E.createElement(eg, {
                    layoutType: u,
                    onClick: s,
                    providers: d
                })
            };

            function eE() {
                return (eE = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function eA(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return eT(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? eT(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eT(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            eP.propTypes = {
                appendUtmSourceParam: ey().bool,
                layoutType: ey().string,
                onClick: ey().func,
                position: ey().oneOf(["center", "start"]),
                providers: ey().arrayOf(ey().shape({
                    icon: ey().node,
                    linkTemplate: ey().string,
                    name: ey().string
                })),
                shareText: ey().string,
                thankYouScreenRef: ey().string
            }, eP.defaultProps = {
                providers: []
            };
            var e_ = {
                    button: B.gB,
                    background: B.gB,
                    primary: B.gB,
                    secondary: B.gB,
                    buttonContent: B.gB
                },
                ek = e => {
                    var t, r, n, i, o, l = e.layoutType,
                        a = e.screenDetails,
                        c = e.theme,
                        u = e.buttonLabel,
                        s = e.handleRedirect,
                        d = (0, M.mR)().t,
                        f = (0, V.j)(),
                        p = eA((0, E.useState)(!1), 2),
                        y = p[0],
                        b = p[1],
                        v = (0, el.sY)(null == c || null == (t = c.screens) ? void 0 : t.alignment, l) || "center",
                        m = f ? 0 : null != a && a.title && null != a && a.description && null != a && a.shareIcons ? q.Im + q.w_ + q.w_ + q.w_ : null != a && a.title && null != a && a.description ? q.Im + q.w_ + q.w_ : null != a && a.title ? q.Im + q.w_ : q.Im;
                    return ((0, ea.Z)(() => {
                        b(!0)
                    }, m), y) ? E.createElement(eo.A, {
                        color: null == (r = c.colors) ? void 0 : r.button,
                        centered: v === el.Fm.CENTER,
                        content: u,
                        contentColor: null == (n = c.colors) ? void 0 : n.buttonContent,
                        dataQa: "thank-you-button",
                        contextBackgroundColor: null == (i = c.colors) ? void 0 : i.background,
                        helperColor: null == (o = c.colors) ? void 0 : o.primary,
                        helperText: (0, W.A)(d("label.buttonHint.default")),
                        onClick: s,
                        size: "large",
                        revealAnimation: !0
                    }) : E.createElement(E.Fragment, null)
                };

            function eS(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ex(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eS(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eS(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eC = (e, t) => (0, p.jq)(e) ? null : (0, b.dH)(e)(v.Bc, t);
            let eL = (0, s.A)((0, i.Ng)((e, t) => {
                var r, n = (0, d.r4)(e),
                    i = eC(e, n ? ei.Xz : ei.TN),
                    o = null != (r = (0, d.fF)(e)) ? r : {},
                    l = o.redirectUrl,
                    c = o.ref,
                    u = o.buttonLabel,
                    s = void 0 === u ? t.t(ei.y9) : u,
                    b = o.buttonMode,
                    v = (0, p.ve)(e) && (b !== P.REDIRECT_DEFAULT || s !== t.t(ei.y9));
                return {
                    isDefaultThankyouScreen: n,
                    isRedirectEnabled: !(0, p.jq)(e),
                    isWinningOutcome: !!e.form.outcome,
                    showBranding: v,
                    screenDetails: ex(ex({}, o), {}, {
                        buttonLabel: s,
                        redirectUrl: (() => {
                            switch (b) {
                                case P.RELOAD:
                                    return null;
                                case P.REDIRECT:
                                    return l;
                                case P.REDIRECT_DEFAULT:
                                default:
                                    return eC(e, c === d.pi ? ei.G5 : ei.EK)
                            }
                        })()
                    }),
                    showScreen: (0, f.Tt)(e),
                    theme: (0, y.O4)(e),
                    isFocusable: (0, f.aw)(e),
                    isPulseSurveyVariant: (0, a.Rn)(e),
                    brandingUrl: i,
                    hasUtmSource: e.form.hidden && Object.keys(e.form.hidden).includes("utm_source"),
                    brandLogo: (0, y.LO)(e),
                    formId: (0, p.eM)(e),
                    isRedirectEndingScreenFeatureEnabled: (0, m.n4)(e),
                    hasPaymentSuccess: j(e)
                }
            }, e => ex({}, (0, o.zH)({
                trackBrandingCtaClick: e => {
                    var t;
                    return t = e === d.pi ? ei.Xz : ei.TN, (0, c.Pr)(t)
                },
                trackButtonClick: (e, t, r, n) => ((e, t, r, n) => {
                    if (e === d.pi) return (0, c.Pr)(ei.G5);
                    switch (t) {
                        case P.RELOAD:
                            return (0, c.R9)(ei.Tz, n);
                        case P.REDIRECT:
                            return (0, c.R9)(ei.LQ, n, r);
                        case P.REDIRECT_DEFAULT:
                            return (0, c.Pr)(ei.zr)
                    }
                })(e, t, r, n),
                trackSocialIconClick: c.gM,
                blockHeightChanging: u.Wj
            }, e)))((0, s.A)((0, l.Wj)(e => {
                var t, r, n, i, o, a, c = e.brandingUrl,
                    u = e.brandLogo,
                    s = e.hasUtmSource,
                    d = void 0 !== s && s,
                    f = e.isFocusable,
                    p = e.isPulseSurveyVariant,
                    y = e.isRedirectEnabled,
                    b = void 0 === y || y,
                    m = e.isWinningOutcome,
                    g = void 0 !== m && m,
                    h = e.screenDetails,
                    w = e.showBranding,
                    O = e.showScreen,
                    j = e.t,
                    P = void 0 === j ? e => e : j,
                    M = e.theme,
                    B = e.trackBrandingCtaClick,
                    J = e.trackButtonClick,
                    eo = e.trackSocialIconClick,
                    ea = e.blockHeightChanging,
                    ep = e.formId,
                    ey = e.isRedirectEndingScreenFeatureEnabled,
                    eb = e.isDefaultThankyouScreen,
                    ev = e.hasPaymentSuccess,
                    em = (0, E.useRef)(null),
                    eg = (0, E.useRef)(null),
                    eh = (0, E.useRef)(null),
                    ew = (0, E.useRef)(),
                    eO = (0, V.j)(),
                    ej = eA((0, E.useState)(!eO), 2),
                    eT = ej[0],
                    eS = ej[1],
                    ex = (0, l.dv)(),
                    eC = (0, T.d)(),
                    eL = (0, es.m)(),
                    eR = (0, ee.c)(),
                    eI = eL ? eC : ex,
                    eD = (0, X.M)(),
                    eM = "sm" === eI,
                    eN = M.colors,
                    eB = void 0 === eN ? e_ : eN,
                    eH = M.logo,
                    eF = w && eM && (null == eH ? void 0 : eH.href),
                    ez = (0, E.useCallback)(() => {
                        B(null == h ? void 0 : h.ref)
                    }, [B, h]);
                if ((0, E.useLayoutEffect)(() => {
                        if (eg.current && f && O) {
                            var e = setTimeout(() => {
                                var e;
                                null == (e = eg.current) || e.focus()
                            }, N.$);
                            return () => clearTimeout(e)
                        }
                    }, [f, O]), (0, A.A)({
                        ref: em,
                        box: "border-box",
                        onResize: e => {
                            var t = e.height;
                            null != em && em.current && eL && ea(void 0 === t ? 0 : t)
                        }
                    }), (0, E.useEffect)(() => {
                        eO && eS(!1)
                    }, [eO]), !h || !Object.keys(h).length) return null;
                var eV = h.layout,
                    eG = h.shareIcons,
                    eU = h.showButton,
                    eq = h.description,
                    eJ = h.title,
                    eZ = h.buttonLabel,
                    eY = void 0 === eZ ? "" : eZ,
                    eW = (0, er.A)(eI, eV),
                    eK = (null == eV ? void 0 : eV.attachment) || h.attachment,
                    e$ = (null == eW ? void 0 : eW.type) || (0, H.g)(eK),
                    eQ = null == eW ? void 0 : eW.placement,
                    eX = (0, el.sY)(null == M || null == (t = M.screens) ? void 0 : t.alignment, e$) || "center",
                    e0 = (0, el.Tw)(e$, eC),
                    e1 = e0 === el.nk.SPLIT.DESKTOP || e0 === el.nk.WALLPAPER.DESKTOP || e0 === el.nk.WALLPAPER.MOBILE,
                    e2 = () => {
                        eO || (null == eK ? void 0 : eK.type) !== z.r.video || eS(!eT)
                    },
                    e4 = e => {
                        if (b) {
                            var t = h.ref,
                                r = h.redirectUrl,
                                n = h.buttonMode,
                                i = h.buttonLabel,
                                o = (0, K.K)(e);
                            ew.current || J(t, n, i, o), ew.current = setTimeout(() => {
                                if ((0, Q.A)() && window.location.search.match(/typeform-embed-handle-ending-button-click=true/i)) {
                                    var e;
                                    Y.OZ(ey ? {
                                        formId: ep,
                                        ref: t
                                    } : {
                                        formId: ep
                                    })
                                } else(e = null != r ? r : "") ? (0, v.eJ)(e, ep) : window.location.reload()
                            }, q.l6)
                        }
                    },
                    e3 = e => {
                        eo(e.toLowerCase())
                    },
                    e5 = () => p ? (0, W.A)("*We appreciate your feedback!*\n We'll use it to make Typeform better.") : eb ? (0, W.A)(P(ei.al)) : h.title,
                    e8 = () => p || !eb ? (0, W.A)(P(eY)) : (0, W.A)(P(ei.y9)),
                    e9 = () => {
                        if (O && eU && eM) return eL ? E.createElement(_.P.Footer, null, E.createElement(en.A, {
                            ref: eh,
                            onClickButtonHandler: e4,
                            onClickBrandingHandler: ez,
                            useBranding: w,
                            label: e8(),
                            mainButtonDataQa: "persistent-thank-you-button",
                            animationDelay: q.Im
                        })) : E.createElement(en.A, {
                            ref: eh,
                            onClickButtonHandler: e4,
                            onClickBrandingHandler: ez,
                            useBranding: w,
                            label: e8(),
                            mainButtonDataQa: "persistent-thank-you-button",
                            animationDelay: q.Im
                        })
                    };
                return eL && O ? E.createElement(E.Fragment, null, E.createElement(_.P.Content, null, E.createElement(k.vN, {
                    blockRef: h.ref,
                    kind: "welcomeEndings",
                    "data-qa": "thank-you-screen".concat(O ? "-visible" : "", " deep-purple-thank-you-screen").concat(O ? "-visible" : ""),
                    layoutType: null == eW ? void 0 : eW.type,
                    layoutPlacement: null == eW ? void 0 : eW.placement,
                    contentAlignment: eX,
                    fieldsetRef: em,
                    mediaHasFixedSize: eR,
                    mediaType: null == eK ? void 0 : eK.type,
                    media: eK && !eb ? E.createElement(S.o3, {
                        isVisible: !0,
                        brightness: null == eK || null == (n = eK.properties) ? void 0 : n.brightness,
                        focalPoint: null == eK || null == (i = eK.properties) ? void 0 : i.focalPoint,
                        alt: null == eK || null == (o = eK.properties) ? void 0 : o.description,
                        cover: (null == eW ? void 0 : eW.type) !== "stack" && (null == eW ? void 0 : eW.type) !== "float",
                        isCentered: "center" === eX,
                        isHighDefinition: e1,
                        pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                        href: null == eK ? void 0 : eK.href,
                        scale: null == eK ? void 0 : eK.scale,
                        type: null == eK ? void 0 : eK.type,
                        isVideoPlaying: eT,
                        onVideoClick: e2
                    }) : void 0
                }, E.createElement(k.vN.Header, null, eb && O && E.createElement(G.A, {
                    width: 100,
                    height: 100,
                    color: eB.button,
                    viewBox: "100 100 300 300",
                    animationDelay: 1e3 * x.p0.slow
                }), ev && E.createElement(C.b, {
                    size: "lg",
                    as: "p"
                }, P("block.payment.success.message")), E.createElement(k.vN.Title, {
                    forwardedAs: (0, et.h)()
                }, e5()), eq && E.createElement(k.vN.Description, null, eq)), eG && E.createElement(k.vN.Answer, null, E.createElement(eP, {
                    appendUtmSourceParam: d,
                    layoutType: e$,
                    onClick: e3,
                    providers: Z,
                    shareText: P("label.action.share"),
                    thankYouScreenRef: g ? h.ref : null
                })), eU && E.createElement(k.vN.Actions, null, E.createElement(L.s, {
                    gap: 8,
                    flexDirection: "column",
                    display: eM ? "none" : "flex"
                }, E.createElement(R.$, {
                    "data-qa": "thank-you-button",
                    size: "large",
                    onClick: e4
                }, e8()))))), w && !eF && E.createElement(ed.A, {
                    breakpoint: eI,
                    buttonColor: eB.button,
                    buttonContentColor: eB.buttonContent,
                    buttonText: (0, W.A)(P("label.branding.create")),
                    color: eB.primary,
                    contextBackgroundColor: eB.background,
                    isTopPositioned: !1,
                    motto: (0, W.A)(P("label.branding.motto")),
                    onBtnClick: ez,
                    url: c,
                    layoutHasBrandLogo: !!(null != (a = M.logo) && a.href),
                    transparentBackground: eD
                }), e9()) : E.createElement(N.Ay, {
                    isVisible: O,
                    duration: q.Im
                }, E.createElement(ef.s, {
                    "data-qa": "thank-you-screen-wrapper",
                    isVisible: O,
                    ref: eg,
                    onKeyDown: e => {
                        O && ((0, $.nx)(e.nativeEvent) && e2(), eU && e.key === U.A.ENTER && (e.stopPropagation(), e4(e)))
                    },
                    tabIndex: -1
                }, E.createElement(I.A, eE({
                    attachment: eb ? void 0 : eK,
                    brandingMotto: (0, W.A)(P("label.branding.motto")),
                    brandingText: (0, W.A)(P("label.branding.create")),
                    brandingUrl: c
                }, p ? null : {
                    brandLogo: u
                }, {
                    buttonColor: eB.button,
                    buttonContent: e8(),
                    buttonContentColor: eB.buttonContent,
                    buttonDataQa: "thank-you-button",
                    buttonEnabled: !!eU,
                    screenContentRefCallback: e => {
                        if (O) {
                            var t, r = (null == eh || null == (t = eh.current) ? void 0 : t.clientHeight) || 0;
                            ea(((null == e ? void 0 : e.scrollHeight) || 0) + r)
                        }
                    },
                    contextBackgroundColor: eB.background,
                    dataQa: "thank-you-screen".concat(O ? "-visible" : "", " deep-purple-thank-you-screen").concat(O ? "-visible" : ""),
                    hasAttachmentFixedHeight: eR,
                    helperColor: eB.primary,
                    helperText: (0, W.A)(P("label.buttonHint.default")),
                    isBrandingEnabled: w && !eF,
                    isVideoPlaying: eT,
                    key: h.ref,
                    layoutPlacement: eQ,
                    layoutType: e$,
                    onBrandingBtnClick: ez,
                    onButtonClick: e4,
                    onVideoClick: e2,
                    pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                    secondaryColor: null == eB ? void 0 : eB.secondary,
                    showScreen: O,
                    stickyFooterRef: eh,
                    buttonComponent: O && eU ? E.createElement(ek, {
                        layoutType: e$,
                        screenDetails: h,
                        theme: M,
                        buttonLabel: e8(),
                        handleRedirect: e4
                    }) : E.createElement(E.Fragment, null),
                    footerComponent: e9(),
                    transparentFooter: eD
                }), O && E.createElement(E.Fragment, null, eb && E.createElement(ec.Ay, {
                    position: (null == M || null == (r = M.screens) ? void 0 : r.alignment) === el.Fm.CENTER ? "center" : "start"
                }, E.createElement(G.A, {
                    width: 100,
                    height: 100,
                    color: eB.button,
                    viewBox: "100 100 300 300"
                })), ev && E.createElement(N.Ay, {
                    type: "slideUp",
                    delay: q.Im,
                    duration: q.lj,
                    curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                }, E.createElement(eu.A, {
                    bottom: 2
                }, E.createElement(D.Ay, {
                    color: eB.primary,
                    htmlTag: "p",
                    type: F.go.screenDescription,
                    breakText: !0
                }, P("block.payment.success.message")))), eJ && E.createElement(N.Ay, {
                    type: "slideUp",
                    delay: q.Im,
                    duration: q.lj,
                    curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                }, E.createElement(eu.A, {
                    bottom: 2
                }, E.createElement(D.Ay, {
                    color: eB.primary,
                    htmlTag: (0, et.h)(),
                    type: F.go.screenTitle,
                    breakText: !0
                }, e5()))), eq && E.createElement(N.Ay, {
                    type: "slideUp",
                    delay: q.Im + q.w_,
                    duration: q.lj,
                    curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                }, E.createElement(eu.A, {
                    bottom: 2
                }, E.createElement(D.Ay, {
                    color: eB.primary,
                    htmlTag: "p",
                    type: F.go.screenDescription,
                    breakText: !0
                }, eq))), eG && E.createElement(N.Ay, {
                    type: "slideUp",
                    delay: q.Im + q.w_ + q.w_,
                    duration: q.lj,
                    curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                }, E.createElement(eP, {
                    appendUtmSourceParam: d,
                    layoutType: e$,
                    onClick: e3,
                    providers: Z,
                    shareText: P("label.action.share"),
                    thankYouScreenRef: g ? h.ref : null
                }))))))
            }))))
        },
        41338(e, t, r) {
            r.d(t, {
                EK: () => "typeform-endscreenbutton",
                G5: () => "typeform-thankyoubutton",
                LQ: () => "custom-endscreenbutton",
                TN: () => "typeform-endscreen",
                Tz: () => "default_link",
                Xz: () => "typeform-thankyou",
                al: () => "branded-ty-description",
                y9: () => "branded-ty-button",
                zr: () => "typeform-endscreenbutton"
            })
        },
        30581(e, t, r) {
            r.r(t);
            var n, i, o, l = r(14041),
                a = r(39067),
                c = r.n(a),
                u = r(29340),
                s = r(15803),
                d = r(52936),
                f = r(98361),
                p = r(60460),
                y = r(23557);

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return v(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var m = u.Ay.div(o || (n = ["\n  position: fixed;\n  inset-block-start: 8px;\n  inset-inline-end: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  color: ", ";\n  border-radius: 3px;\n  height: 32px;\n  width: 32px;\n"], i || (i = n.slice(0)), o = Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(i)
                }
            }))), e => e.backgroundColor, e => e.contentColor);

            function g(e) {
                var t = e.theme,
                    r = b((0, l.useState)(window.navigator.onLine), 2),
                    n = r[0],
                    i = r[1],
                    o = b((0, l.useState)((0, y.FP)().length), 2),
                    a = o[0],
                    c = o[1];
                return ((0, l.useEffect)(() => {
                    var e = () => {
                        i(window.navigator.onLine)
                    };
                    return window.addEventListener("online", e), window.addEventListener("offline", e), () => {
                        window.removeEventListener("online", e), window.removeEventListener("offline", e)
                    }
                }, []), (0, l.useEffect)(() => {
                    var e = setInterval(() => {
                        c((0, y.FP)().length)
                    }, 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, []), window.navigator.serviceWorker.controller) ? 0 === a ? l.createElement(m, {
                    backgroundColor: t.colors.button,
                    contentColor: (0, s.v2)(t.colors.button)
                }, l.createElement(f.A, {
                    svg: d.A,
                    color: (0, s.v2)(t.colors.button)
                })) : n && a > 0 ? l.createElement(m, {
                    backgroundColor: t.colors.button,
                    contentColor: (0, s.v2)(t.colors.button)
                }, l.createElement(p.A, {
                    color: (0, s.v2)(t.colors.button)
                })) : l.createElement(m, {
                    backgroundColor: t.colors.button,
                    contentColor: (0, s.v2)(t.colors.button)
                }, a) : null
            }
            g.propTypes = {
                theme: c().object
            }, r.d(t, {
                default: () => g
            })
        },
        33321(e, t, r) {
            r.d(t, {
                c: () => "sticky_footer"
            })
        },
        41609(e, t, r) {
            var n = r(88400).$1.SPLIT;
            r.d(t, {
                O: () => n
            })
        },
        65892(e, t, r) {
            r.d(t, {
                _N: () => "bottom",
                wv: () => "top"
            })
        },
        66299(e, t, r) {
            r.d(t, {
                K1: () => "choice",
                T1: () => "recenter"
            })
        },
        99921(e, t, r) {
            var n = r(14041).createContext(!1);
            n.Consumer, r.d(t, {}, {
                A: n
            })
        },
        15937(e, t, r) {
            var n = r(14041),
                i = r(39067),
                o = r.n(i),
                l = r(10801);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var c = ["INPUT", "TEXTAREA", "LI", "SELECT", "BUTTON"],
                u = ["radio", "checkbox"],
                s = n.createContext();
            s.displayName = "GlobalEventListenerContext";
            var d = e => {
                var t = e.areGlobalListenersDisabled,
                    r = e.children,
                    i = e.commonHandleKeydown,
                    o = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    if (t) return l.A;
                    var e = e => {
                        var t = e.target.nodeName,
                            r = (null == (a = e.target.attributes) ? void 0 : a.getNamedItem("role")) && e.target.attributes.getNamedItem("role").value,
                            n = e.target.hasAttribute("aria-haspopup"),
                            l = c.includes(t) || u.includes(r) || n;
                        if (!l) {
                            var a, s, d = null == (s = o.current) ? void 0 : s.onGlobalKeyDown;
                            null == d || d(e)
                        }
                        i(e, l)
                    };
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [t, i]), n.createElement(s.Provider, {
                    value: e => {
                        t || (o.current = {
                            onGlobalKeyDown: e
                        })
                    }
                }, r)
            };
            d.propTypes = {
                areGlobalListenersDisabled: o().bool,
                children: o().node,
                commonHandleKeydown: o().func
            };
            var f = (e, t) => {
                    var r = (0, n.useContext)(s);
                    (0, n.useEffect)(() => {
                        e && r(t)
                    }, [e, t])
                },
                p = s.Consumer,
                y = e => function(t) {
                    return t.isLivePreview ? n.createElement(e, t) : n.createElement(p, null, r => n.createElement(e, a({}, t, {
                        updateGlobalEventListenerRef: r
                    })))
                };
            r.d(t, {
                Wj: () => y,
                fE: () => d,
                l6: () => f
            })
        },
        79783(e, t, r) {
            r.d(t, {
                A: () => c
            });
            var n = r(87744),
                i = r(7991),
                o = r(5482),
                l = r(32397);

            function* a() {
                yield(0, n.s)(i.ZF);
                var e = yield(0, n.Lt)(o.eM);
                yield(0, n.T1)(l.i, e)
            }

            function* c() {
                yield(0, n.Zy)(a)
            }
        },
        4656(e, t, r) {
            r.d(t, {
                Y7: () => m,
                hy: () => g
            });
            var n, i, o = r(87744),
                l = r(12750),
                a = r(37360),
                c = r(6644),
                u = r(29653);

            function s(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }
            var d = e => e ? {
                    respondent_validation: {
                        recaptcha_v3: e
                    }
                } : null,
                f = (e, t) => ((e, t) => {
                    if (e) {
                        var r = document.createElement("style");
                        r.innerHTML = ".grecaptcha-badge {display: none !important;} .rc-anchor-normal-footer {display: none !important;}", document.body.append(r);
                        var n = "grecaptchaOnloadCallback_".concat(Date.now());
                        window[n] = () => {
                            window.grecaptcha && "function" == typeof window.grecaptcha.ready && (window.__realGrecaptcha = window.grecaptcha), delete window[n]
                        }, (0, u.f8)({
                            id: "recaptcha-v3-".concat(e),
                            url: "https://www.recaptcha.net/recaptcha/api.js?render=".concat(e, "&onload=").concat(n),
                            async: !0,
                            defer: !0,
                            nonce: t
                        })
                    }
                })(e, t),
                p = e => new Promise(t => {
                    var r = window.__realGrecaptcha || window.grecaptcha;
                    if (r && "function" == typeof r.execute)
                        if ("function" == typeof r.ready) r.ready(() => {
                            r.execute(e).then(e => {
                                t(e)
                            }).catch(() => {
                                t("")
                            })
                        });
                        else try {
                            r.execute(e).then(e => {
                                t(e)
                            }).catch(() => {
                                t("")
                            })
                        } catch (e) {
                            t("")
                        }
                }),
                y = (e, t) => {
                    var r = {
                        respondent_validation: {}
                    };
                    return e && (r.respondent_validation.recaptcha_v3 = e), t && (r.respondent_validation.hcaptcha = t), r
                },
                b = (e, t, r) => {
                    e && f(e, r), t && setTimeout(() => {
                        if (t) {
                            var e = "hcaptchaOnloadCallback_".concat(Date.now());
                            window[e] = () => {
                                delete window[e]
                            }, (0, u.f8)({
                                id: "hcaptcha-".concat(t),
                                url: "https://js.hcaptcha.com/1/api.js?onload=".concat(e, "&render=explicit"),
                                async: !0,
                                defer: !0,
                                nonce: r,
                                onerror: () => {
                                    delete window[e]
                                }
                            })
                        }
                    }, 200)
                },
                v = (n = function*(e, t) {
                    var r, n;
                    if (e) try {
                        r = yield p(e)
                    } catch (e) {
                        r = void 0
                    }
                    if (t) try {
                        n = yield new Promise(e => {
                            if (!t) return void e("hCaptcha siteKey is missing or empty");
                            if (window.hcaptcha && "function" == typeof window.hcaptcha.execute) try {
                                var r = document.getElementById("hcaptcha-container");
                                r ? r.innerHTML = "" : ((r = document.createElement("div")).id = "hcaptcha-container", r.style.display = "none", document.body.appendChild(r));
                                var n = window.hcaptcha.render(r, {
                                    sitekey: t,
                                    size: "invisible",
                                    callback: t => {
                                        t && "" !== t.trim() ? e(t) : e("hCaptcha callback received empty or null token")
                                    },
                                    "error-callback": t => {
                                        e("hCaptcha error callback. Error: ".concat(t || "unknown"))
                                    }
                                });
                                setTimeout(() => {
                                    try {
                                        if (null == n) return void e("hCaptcha widget failed to render - no valid widget ID");
                                        window.hcaptcha.execute(n)
                                    } catch (t) {
                                        e("hCaptcha execute failed: ".concat(t))
                                    }
                                }, 300)
                            } catch (t) {
                                var i = t.message;
                                e("hCaptcha initialization error: ".concat(i))
                            } else window.hcaptcha ? e("hCaptcha execute function not available") : e("hCaptcha library not loaded")
                        })
                    } catch (e) {
                        n = void 0
                    }
                    return {
                        recaptchaResponse: r,
                        hCaptchaResponse: n
                    }
                }, i = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, i) {
                        var o = n.apply(e, t);

                        function l(e) {
                            s(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            s(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    })
                }, function(e, t) {
                    return i.apply(this, arguments)
                });

            function* m() {
                if (yield(0, o.Lt)(c.Ev)) {
                    var e = yield(0, o.Lt)(c.$8), t = yield(0, o.Lt)(c.$B);
                    if (yield(0, o.Lt)(l.Vg)) {
                        var r = yield(0, o.T1)(v, e, t), n = r.recaptchaResponse, i = r.hCaptchaResponse;
                        return yield(0, o.T1)(y, n, i)
                    }
                    var a = yield(0, o.T1)(p, e);
                    return yield(0, o.T1)(d, a)
                }
            }

            function* g() {
                var e = yield(0, o.Lt)(c.Ev);
                if (e) {
                    var t = yield(0, o.Lt)(a.ST), r = yield(0, o.Lt)(c.o8), n = yield(0, o.Lt)(l.Vg);
                    if (e && n && r) {
                        var i = yield(0, o.Lt)(c.$8), u = yield(0, o.Lt)(c.$B);
                        yield(0, o.T1)(b, i, u, t)
                    } else if (e) {
                        var s = yield(0, o.Lt)(c.$8);
                        yield(0, o.T1)(f, s, t)
                    }
                }
            }
        },
        6644(e, t, r) {
            var n = r(68014),
                i = r(37360),
                o = e => e.captcha || {},
                l = (0, n.Mz)(o, i.mt, (e, t) => {
                    var r = e.siteKeyV3,
                        n = t.spamIdentification;
                    return r && !!n
                }),
                a = (0, n.Mz)(o, e => e.siteKeyV3 || void 0),
                c = (0, n.Mz)(o, e => e.hCaptchaSiteKey || void 0),
                u = (0, n.Mz)(c, i.mt, (e, t) => {
                    var r = t.spamIdentification;
                    return !!e && !!r
                });
            r.d(t, {
                $8: () => a,
                $B: () => c,
                Ev: () => l,
                o8: () => u
            })
        },
        8050(e, t, r) {
            r.d(t, {
                Kb: () => P,
                kO: () => T
            });
            var n, i, o = r(7991),
                l = r(87744),
                a = r(45448),
                c = r(20633);

            function u(e) {
                return "tf-response-".concat(e)
            }

            function s(e) {
                try {
                    var t = localStorage.getItem(u(e));
                    if (t) return JSON.parse(t);
                    return []
                } catch (e) {
                    return []
                }
            }

            function d(e) {
                var t = s(e);
                t.push(Date.now()), localStorage.setItem(u(e), JSON.stringify(t))
            }

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }
            var y = (n = function*(e, t, r) {
                var n = "".concat(a.K.apiHost, "/").concat(a.K.endpoints.forms).concat(e, "/").concat(t),
                    i = yield fetch(n, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(r), !0).forEach(function(t) {
                                var n, i, o;
                                n = e, i = t, o = r[t], (i = function(e) {
                                    var t = function(e, t) {
                                        if ("object" != typeof e || !e) return e;
                                        var r = e[Symbol.toPrimitive];
                                        if (void 0 !== r) {
                                            var n = r.call(e, t || "default");
                                            if ("object" != typeof n) return n;
                                            throw TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return ("string" === t ? String : Number)(e)
                                    }(e, "string");
                                    return "symbol" == typeof t ? t : t + ""
                                }(i)) in n ? Object.defineProperty(n, i, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[i] = o
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({
                        method: "POST"
                    }, r && {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(r)
                    }));
                return 200 !== i.status && 409 === i.status
            }, i = function() {
                var e = this,
                    t = arguments;
                return new Promise(function(r, i) {
                    var o = n.apply(e, t);

                    function l(e) {
                        p(o, r, i, l, a, "next", e)
                    }

                    function a(e) {
                        p(o, r, i, l, a, "throw", e)
                    }
                    l(void 0)
                })
            }, function(e, t, r) {
                return i.apply(this, arguments)
            });

            function* b(e) {
                var t = yield(0, l.T1)(v, e);
                return 0 !== t.length && (yield(0, l.T1)(y, e, a.K.endpoints.verifyDuplicateSubmission, {
                    timestamps: t
                }))
            }

            function v(e) {
                var t = s(e);
                if (0 === t.length) {
                    var r, n = null === (r = parseInt(c.A.get("form-submitted-".concat(e)) || "") || null) || isNaN(r) ? null : r;
                    t = n ? [n] : []
                }
                return t
            }
            var m = r(37360),
                g = r(11640),
                h = {
                    cookie: b,
                    cookie_ip: function*(e) {
                        return !!(yield(0, l.T1)(b, e)) || (yield(0, l.T1)(y, e, a.K.endpoints.verifyDuplicateSubmission))
                    },
                    url_param: function*(e) {
                        var t = yield(0, l.Lt)(m.CD);
                        return yield(0, l.T1)(y, e, a.K.endpoints.verifyDuplicateSubmission, {
                            hidden: (0, g.uI)(null != t ? t : {})
                        })
                    }
                },
                w = r(42626),
                O = r(87754),
                j = r(5482);

            function* P() {
                yield(0, l.T1)(E), yield(0, l.yJ)({
                    type: O.d6
                })
            }

            function* E() {
                var e = yield(0, l.Lt)(w.C);
                if (e) {
                    var t = h[e.type];
                    if (t) {
                        var r = yield(0, l.Lt)(j.eM);
                        (yield(0, l.T1)(t, r)) && (yield(0, l.yJ)((0, O.St)())), yield(0, l.cH)(A, r)
                    }
                }
            }

            function* A(e) {
                yield(0, l.s)(o.ZF), yield(0, l.T1)(d, e)
            }

            function* T() {
                var e = yield(0, l.Lt)(j.eM);
                yield(0, l.yJ)((0, O.St)()), yield(0, l.T1)(d, e)
            }
        },
        28319(e, t, r) {
            var n = r(66576),
                i = r(37360),
                o = r(81126),
                l = r(89614),
                a = (e, t) => {
                    var r, n = (0, i.pe)(e, t),
                        l = null == (r = (0, o.YK)(n)) ? void 0 : r[0],
                        a = (null == l ? void 0 : l.raw) || [],
                        c = null == l ? void 0 : l.pendingAnswer,
                        u = a.filter(e => {
                            var t;
                            return null == (t = e.user) ? void 0 : t.trim()
                        }).length,
                        s = void 0 !== c,
                        d = Math.max(1, u + +!!s);
                    return {
                        transcript: a,
                        answeredQuestions: u,
                        hasPendingAnswer: s,
                        totalFields: d
                    }
                },
                c = (e, t) => (0, n.E7)(e, t) === l.Tw,
                u = (e, t) => ((e, t) => {
                    if (!c(e, t)) return !1;
                    var r = 0 !== (0, i.pe)(e, t).value.length;
                    return a(e, t).hasPendingAnswer || !r
                })(e, t) ? "secondary" : "primary",
                s = (e, t) => c(e, t) ? {
                    total_extra_fields: a(e, t).totalFields
                } : {},
                d = (e, t) => {
                    if (!c(e, t)) return {};
                    var r = a(e, t),
                        n = r.answeredQuestions,
                        i = r.totalFields;
                    return {
                        extra_fields_answered: "".concat(n, "/").concat(i)
                    }
                };
            r.d(t, {
                As: () => u,
                TA: () => s,
                Wh: () => c,
                uE: () => d
            })
        },
        77376(e, t, r) {
            r.d(t, {
                R: () => a
            });
            var n = r(87744),
                i = r(5482),
                o = r(51708),
                l = e => ({
                    enrichment_metadata: {
                        enriched_in_renderer: e
                    }
                });

            function* a() {
                var e = yield(0, n.Lt)(i.IU), t = e.toggle, r = e.active;
                if (t && r) {
                    var a = yield(0, n.Lt)(o.m$);
                    return yield(0, n.T1)(l, a)
                }
            }
        },
        62240(e, t, r) {
            var n = r(66576),
                i = r(49653),
                o = r(63142),
                l = r(66319);

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var u = (e, t) => {
                    var r, n = null == (r = e.media) ? void 0 : r.ui;
                    return n && n[t]
                },
                s = (e, t) => {
                    var r = a((0, n.Us)(e, t) || [], 1)[0],
                        i = u(e, t);
                    return !!(null != r && r.enabled) && !!(null != i && i.collapsed)
                },
                d = (e, t) => {
                    var r = a((0, n.Us)(e, t) || [], 1)[0];
                    return !!(null != r && r.enabled)
                },
                f = e => e.media.tracking.mediaProgress,
                p = (e, t) => {
                    var r = u(e, t);
                    return null == r ? void 0 : r.waitForInteraction
                },
                y = e => e.media.hasVideoQuestionBeenPlayed,
                b = e => (0, l.n)(e, i.Ad) === o.Gt;
            r.d(t, {
                Cw: () => d,
                dJ: () => f,
                pE: () => y,
                pH: () => p,
                q4: () => s,
                r8: () => b
            })
        },
        540(e, t, r) {
            var n = r(74058),
                i = r(7991);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var a = (0, n.Z0)({
                    name: "media",
                    initialState: {
                        ui: {},
                        hasVideoQuestionBeenPlayed: !1,
                        tracking: {
                            mediaProgress: 0
                        }
                    },
                    reducers: {
                        setMediaCollapsed: (e, t) => {
                            var r = t.payload.ref;
                            e.ui[r] = l(l({}, e.ui[r]), {}, {
                                collapsed: !0
                            })
                        },
                        setMediaProgress: (e, t) => {
                            var r = t.payload.mediaProgress;
                            e.tracking.mediaProgress = r || 0
                        },
                        setWaitForInteraction: (e, t) => {
                            var r = t.payload,
                                n = r.ref,
                                i = r.waitForInteraction;
                            e.ui[n] = l(l({}, e.ui[n]), {}, {
                                waitForInteraction: i
                            })
                        },
                        setHasVideoQuestionBeenPlayed: e => {
                            e.hasVideoQuestionBeenPlayed = !0
                        }
                    }
                }),
                c = a.actions,
                u = c.setMediaCollapsed,
                s = c.setMediaProgress,
                d = c.setWaitForInteraction,
                f = c.setHasVideoQuestionBeenPlayed;

            function p(e) {
                return {
                    type: i.EZ,
                    payload: {
                        ref: e
                    }
                }
            }

            function y(e, t, r) {
                return {
                    type: i.jQ,
                    payload: {
                        ref: e,
                        isSuccess: t,
                        withAudio: r
                    }
                }
            }
            let b = a.reducer;
            r.d(t, {
                FO: () => f,
                II: () => y,
                T1: () => p,
                gc: () => s,
                wU: () => u,
                zI: () => d
            }, {
                Ay: b
            })
        },
        49427(e, t, r) {
            var n = new EventTarget;
            r.d(t, {
                z: () => n
            })
        },
        11180(e, t, r) {
            var n = r(62240),
                i = r(540),
                o = r(59562),
                l = r(66576),
                a = r(37360),
                c = r(14041);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var s = () => {
                var e, t = (0, o.j)(),
                    r = (0, c.useRef)({}),
                    s = (0, o.G)(a.DZ),
                    d = (0, o.G)(l.Gq),
                    f = (0, o.G)(l.Il),
                    p = (0, o.G)(e => (0, a.lh)(e, s)),
                    y = (function(e) {
                        if (Array.isArray(e)) return e
                    }(e = (0, o.G)(e => (0, l.Us)(e, s)) || []) || function(e) {
                        var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, n, i, o, l = [],
                                a = !0,
                                c = !1;
                            try {
                                i = (t = t.call(e)).next, !1;
                                for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 1 !== l.length); a = !0);
                            } catch (e) {
                                c = !0, n = e
                            } finally {
                                try {
                                    if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                                } finally {
                                    if (c) throw n
                                }
                            }
                            return l
                        }
                    }(e) || function(e) {
                        if (e) {
                            if ("string" == typeof e) return u(e, 1);
                            var t = ({}).toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? u(e, 1) : void 0
                        }
                    }(e) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())[0],
                    b = ((null == y ? void 0 : y.properties) || {}).interactionDelay,
                    v = void 0 !== b && !p,
                    m = (0, o.G)(e => (0, n.pH)(e, s)),
                    g = (0, c.useRef)({});
                (0, c.useEffect)(() => {
                    var e = w(d),
                        t = w(f);
                    "number" == typeof e && 0 !== e && d && O({
                        reset: !0,
                        blockRef: d
                    }), "number" == typeof t && 0 !== t && f && O({
                        reset: !0,
                        blockRef: f
                    })
                }, [d, f]), (0, c.useEffect)(() => {
                    g.current[s] = m
                }, [m]);
                var h = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.value,
                            n = e.blockRef,
                            o = void 0 === n ? s : n;
                        t((0, i.zI)({
                            ref: o,
                            waitForInteraction: r
                        }))
                    },
                    w = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                        return g.current[e]
                    },
                    O = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.reset,
                            n = e.blockRef,
                            i = void 0 === n ? s : n;
                        clearInterval(r.current[i]), r.current[i] = null, void 0 !== t && t && (h({
                            value: void 0,
                            blockRef: i
                        }), g.current[i] = void 0)
                    };
                return {
                    startCountdown: () => {
                        var e = !!r.current[s],
                            t = 0 === g.current[s];
                        !v || e || t || (h({
                            value: b
                        }), r.current[s] = setInterval(() => {
                            if (0 === g.current[s]) return O();
                            h({
                                value: g.current[s] - 1
                            })
                        }, 1e3))
                    },
                    stopCountdown: O,
                    getWaitForInteractionRefValueByBlockRef: w,
                    waitForInteraction: m,
                    currentBlockHasDelayInteraction: v
                }
            };
            r.d(t, {
                f: () => s
            })
        },
        12286(e, t, r) {
            var n = r(59562),
                i = r(5482),
                o = r(37360),
                l = e => {
                    var t = (0, n.G)(i.jq),
                        r = (0, n.G)(i.eM),
                        l = (0, n.G)(t => (0, o.GH)(t, e)),
                        a = null == l ? void 0 : l.id;
                    return {
                        custom_1: r,
                        player_name: t ? "renderer_video_question_live_preview" : "renderer_video_question",
                        video_title: "".concat(r, "_").concat(a)
                    }
                };
            r.d(t, {
                n: () => l
            })
        },
        93830(e, t, r) {
            var n = r(70288),
                i = r(540),
                o = () => {
                    var e = (0, n.wA)();
                    return {
                        trackMediaPlay: function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            r ? e((0, i.II)(t, !0, n)) : e((0, i.T1)(t))
                        },
                        trackAutoplayFailed: t => {
                            e((0, i.II)(t, !1, !1))
                        }
                    }
                };
            r.d(t, {
                $: () => o
            })
        },
        95726(e, t, r) {
            var n = r(70288),
                i = r(540),
                o = () => {
                    var e = (0, n.wA)();
                    return {
                        setCurrentMediaProgress: t => {
                            var r = t.currentTime,
                                n = t.videoDuration,
                                o = r ? parseInt((100 * r / n).toFixed(0)) : 0;
                            e((0, i.gc)({
                                mediaProgress: o
                            }))
                        }
                    }
                };
            r.d(t, {
                Z: () => o
            })
        },
        99894(e, t, r) {
            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var i = (0, r(74058).Z0)({
                    name: "pulseSurvey",
                    initialState: {
                        parentFormId: "",
                        showAfterSubmission: !1,
                        isActive: !1,
                        submit: {}
                    },
                    reducers: {
                        setShowAfterSubmission: (e, t) => {
                            e.showAfterSubmission = t.payload
                        },
                        activate: e => {
                            e.isActive = !0
                        },
                        deactivate: e => {
                            e.isActive = !1
                        },
                        setSubmitProperties: (e, t) => {
                            e.submit = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                                        var n, i, o;
                                        n = e, i = t, o = r[t], (i = function(e) {
                                            var t = function(e, t) {
                                                if ("object" != typeof e || !e) return e;
                                                var r = e[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(e, t || "default");
                                                    if ("object" != typeof n) return n;
                                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                                }
                                                return ("string" === t ? String : Number)(e)
                                            }(e, "string");
                                            return "symbol" == typeof t ? t : t + ""
                                        }(i)) in n ? Object.defineProperty(n, i, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : n[i] = o
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({}, t.payload)
                        }
                    }
                }),
                o = i.actions,
                l = o.setShowAfterSubmission,
                a = o.activate,
                c = o.deactivate,
                u = o.setSubmitProperties;
            let s = i.reducer;
            r.d(t, {
                Gy: () => l,
                LU: () => c,
                Yf: () => a,
                qD: () => u
            }, {
                Ay: s
            })
        },
        44774(e, t, r) {
            var n = (0, r(74058).Z0)({
                    name: "signatureTracking",
                    initialState: {},
                    reducers: {
                        trackSignatureModeClicked: (e, t) => e,
                        trackSignatureCaptured: (e, t) => e,
                        trackSignatureConsentScreenShown: (e, t) => e,
                        trackSignatureConsentToggled: (e, t) => e
                    }
                }),
                i = n.actions,
                o = i.trackSignatureModeClicked,
                l = i.trackSignatureCaptured,
                a = i.trackSignatureConsentScreenShown,
                c = i.trackSignatureConsentToggled;
            n.reducer, r.d(t, {
                Az: () => l,
                Mh: () => c,
                uT: () => o,
                v1: () => a
            })
        },
        83340(e, t, r) {
            var n = r(87744),
                i = r(20503),
                o = r(5482),
                l = r(19180);

            function* a() {
                yield(0, n.jP)(l.mk, function*(e) {
                    var t = e.payload.ref,
                        r = yield(0, n.Lt)(o.eM), l = [...(0, i.Go)(r), t];
                    (0, i.Mt)(r, l)
                }), yield(0, n.jP)(l.R5, function*(e) {
                    var t = e.payload.ref,
                        r = yield(0, n.Lt)(o.eM);
                    (0, i.Dv)(r, t)
                })
            }
            r.d(t, {
                w: () => a
            })
        },
        42742(e, t, r) {
            r.d(t, {
                Ay: () => l,
                pW: () => i,
                kA: () => o
            });
            var n = ['area[href]:not([tabindex^="-"])', 'input:not([type="hidden"]):not([disabled]):not([tabindex^="-"])', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', 'a[href]:not([tabindex^="-"])', 'iframe:not([tabindex^="-"])', 'audio[controls]:not([tabindex^="-"])', 'video[controls]:not([tabindex^="-"])', '[contenteditable]:not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])'],
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (e) {
                        var n = () => null == e ? void 0 : e.focus({
                            preventScroll: r
                        });
                        if (0 === t) return void n();
                        setTimeout(n, t)
                    }
                },
                o = e => !!e && !!e.querySelectorAll(":focus").length;
            let l = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (e) {
                    var i = () => {
                        var t = ((e, t) => {
                            if (!(!("u" < typeof window) && !("u" < typeof document) && "function" == typeof e.contains && (e === document.activeElement || e.contains(document.activeElement)))) {
                                var r, i = (r = n.join(","), e.matches(r) ? e : t ? Array.from(e.querySelectorAll(r)).find(e => !e.hasAttribute("href")) : e.querySelector(r));
                                return null != i ? i : document.body
                            }
                        })(e, r);
                        null == t || t.focus()
                    };
                    if (0 === t) return void i();
                    setTimeout(i, t)
                }
            }
        },
        39895(e, t, r) {
            var n = r(14041);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            r.d(t, {}, {
                A: e => {
                    var t, r = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, n.useState)(!1)) || function(e) {
                            var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != t) {
                                var r, n, i, o, l = [],
                                    a = !0,
                                    c = !1;
                                try {
                                    i = (t = t.call(e)).next, !1;
                                    for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 2 !== l.length); a = !0);
                                } catch (e) {
                                    c = !0, n = e
                                } finally {
                                    try {
                                        if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                                    } finally {
                                        if (c) throw n
                                    }
                                }
                                return l
                            }
                        }(t) || function(e) {
                            if (e) {
                                if ("string" == typeof e) return i(e, 2);
                                var t = ({}).toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, 2) : void 0
                            }
                        }(t) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        o = r[0],
                        l = r[1],
                        a = (0, n.useRef)();

                    function c() {
                        clearTimeout(a.current)
                    }
                    return [o, function(t) {
                        l(t), c(), t && (a.current = setTimeout(() => l(!1), e))
                    }, c]
                }
            })
        },
        28362(e, t, r) {
            let n = r(20226).A;
            r.d(t, {}, {
                A: n
            })
        },
        24007(e, t, r) {
            var n = (0, r(74058).Z0)({
                    name: "layout",
                    initialState: {
                        showBrandHeader: !0
                    },
                    reducers: {
                        showBrandHeader: e => {
                            e.showBrandHeader = !0
                        },
                        hideBrandHeader: e => {
                            e.showBrandHeader = !1
                        }
                    }
                }),
                i = n.actions,
                o = i.showBrandHeader,
                l = i.hideBrandHeader;
            let a = n.reducer;
            r.d(t, {
                _K: () => o,
                tx: () => l
            }, {
                Ay: a
            })
        },
        51767(e, t, r) {
            var n = r(74058),
                i = {
                    isActive: !1
                },
                o = (0, n.Z0)({
                    name: "portalState",
                    initialState: i,
                    reducers: {
                        setIsPortalActive: (e, t) => {
                            e.isActive = t.payload
                        }
                    }
                }),
                l = o.actions.setIsPortalActive;
            let a = o.reducer;
            r.d(t, {
                bM: () => l,
                ue: () => i
            }, {
                Ay: a
            })
        },
        72114(e, t, r) {
            r.d(t, {
                j: () => S,
                p: () => x
            });
            var n = r(87744),
                i = r(25078),
                o = r(99894),
                l = r(7991);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var c = r(83996),
                u = r(55709),
                s = r(11640),
                d = r(5482),
                f = r(37360),
                p = r(48854),
                y = r(54478),
                b = r(86937),
                v = r(92826),
                m = r(89841),
                g = r(28105),
                h = r(75399),
                w = r(4656),
                O = r(77376),
                j = r(8050),
                P = r(39613),
                E = r(41699),
                A = r(38),
                T = e => 1e3 * e,
                _ = e => Math.floor(Math.pow(1.8, e)),
                k = e => {
                    var t = e.code,
                        r = e.details;
                    return "VALIDATION_ERROR" === t && (null == r ? void 0 : r.length) && "DUPLICATE_ERROR" === r[0].code
                };

            function* S() {
                for (var e, t = 0, r = yield(0, n.Lt)(d.eM), y = yield(0, n.Lt)(g.u0), b = yield(0, n.Lt)(i.UL), v = yield(0, n.Lt)(f.CD), m = (0, s.uI)(null != v ? v : {}); !e;) try {
                    e = yield(0, n.T1)(s.OV, r, y, m);
                    var w, O, P, E, S = (0, A.AN)(e);
                    if (b) return void(yield(0, n.yJ)((0, o.qD)({
                        landingId: S.token,
                        landingAt: S.landed_at,
                        responseId: S.response_id
                    })));
                    yield(0, n.yJ)((w = S.token, O = S.landed_at, P = S.response_id, E = S.submission_id, {
                        type: l.eb,
                        payload: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? a(Object(r), !0).forEach(function(t) {
                                    var n, i, o;
                                    n = e, i = t, o = r[t], (i = function(e) {
                                        var t = function(e, t) {
                                            if ("object" != typeof e || !e) return e;
                                            var r = e[Symbol.toPrimitive];
                                            if (void 0 !== r) {
                                                var n = r.call(e, t || "default");
                                                if ("object" != typeof n) return n;
                                                throw TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return ("string" === t ? String : Number)(e)
                                        }(e, "string");
                                        return "symbol" == typeof t ? t : t + ""
                                    }(i)) in n ? Object.defineProperty(n, i, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : n[i] = o
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            responseId: P,
                            landingId: w,
                            landingAt: O
                        }, void 0 !== E && {
                            submissionId: E
                        })
                    })), h.A4({
                        formId: r,
                        responseId: S.response_id
                    })
                } catch (e) {
                    if ((0, A.nz)(e)) {
                        var x = (yield(0, n.Lt)(p.OH)) ? c.o : c.A;
                        yield(0, n.yJ)(x());
                        return
                    }
                    if (k(e)) return void(yield(0, n.T1)(j.kO));
                    b ? yield(0, n.yJ)((0, o.qD)({})): yield(0, n.yJ)((0, u.Bc)()), yield(0, n.cb)(T(_(t % 6))), t++
                }
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return function*(t, r) {
                    var o, l, a = yield(0, n.T1)(O.R), c = yield(0, n.T1)(w.Y7), u = yield(0, n.Lt)(p.oR), g = yield(0, n.Lt)(d.eM), h = yield(0, n.Lt)(f.EN), j = yield(0, n.Lt)(v.r), A = yield(0, n.Lt)(m.T), T = null == (t = yield(0, n.Lt)(b.fF)) ? void 0 : t.ref, _ = yield(0, n.Lt)(i.UL), k = yield(0, n.Lt)(P.X$), S = null != (r = (0, E.Z)(k)) ? r : void 0, x = yield(0, n.Lt)(y.mr), C = yield(0, n.Lt)(y.W0);
                    return _ ? (o = yield(0, n.Lt)(i.CO), l = yield(0, n.Lt)(i.iA)) : (o = yield(0, n.Lt)(p.lX), l = yield(0, n.Lt)(p.D6)), yield(0, n.T1)(s.pt, {
                        formId: g,
                        landingId: o,
                        landingAt: l,
                        values: u,
                        payment: e,
                        outcome: h,
                        featureFlags: j,
                        taxonomyScopes: A,
                        thankYouScreenRef: T,
                        respondentValidationPayload: c,
                        enrichmentMetadata: a,
                        consentAnswer: S,
                        submissionId: x,
                        lastStagedAt: C
                    })
                }()
            }
        },
        38(e, t, r) {
            r.d(t, {
                vY: () => H,
                AN: () => R,
                nz: () => L,
                Ig: () => F
            });
            var n = r(87744),
                i = r(25078),
                o = r(99894),
                l = r(47657),
                a = r(55709),
                c = r(69043),
                u = r(7991);

            function s(e) {
                return {
                    type: u.jK,
                    payload: e
                }
            }

            function d(e) {
                return {
                    type: u.yw,
                    payload: e
                }
            }
            var f = r(56284),
                p = r(83996),
                y = r(50592);
            let b = {
                    PAYMENT_ERROR_APPROVE_WITH_ID: "label.paymentError.unauthorized",
                    PAYMENT_ERROR_NOT_PERMITTED: "label.paymentError.unauthorized",
                    PAYMENT_ERROR_CARD_DECLINED: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_CALL_ISSUER: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_DO_NOT_HONOR: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_DO_NOT_TRY_AGAIN: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_GENERIC_DECLINE: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_LOST_CARD: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_MERCHANT_BLACKLIST: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_NO_ACTION_TAKEN: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_REVOCATION_OF_ALL_AUTHORIZATIONS: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_REVOCATION_OF_AUTHORIZATION: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_SECURITY_VIOLATION: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_SERVICE_NOT_ALLOWED: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_STOLEN_CARD: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_STOP_PAYMENT_ORDER: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_TRANSACTION_NOT_ALLOWED: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_FRAUDULENT: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_PICKUP_CARD: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_RESTRICTED_CARD: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_TRY_AGAIN_LATER: "label.paymentError.declinedCard",
                    PAYMENT_ERROR_CARD_VELOCITY_EXCEEDED: "label.paymentError.exceededBalance",
                    PAYMENT_ERROR_WITHDRAWAL_COUNT_LIMIT_EXCEEDED: "label.paymentError.exceededBalance",
                    PAYMENT_ERROR_CURRENCY_NOT_SUPPORTED: "label.paymentError.unsupportedCurrency",
                    PAYMENT_ERROR_DUPLICATE_TRANSACTION: "label.paymentError.duplicateTransaction",
                    PAYMENT_ERROR_EXPIRED_CARD: "label.paymentError.expiredCard",
                    PAYMENT_ERROR_INCORRECT_NUMBER: "label.paymentError.invalidCardNumber",
                    PAYMENT_ERROR_INVALID_NUMBER: "label.paymentError.invalidCardNumber",
                    PAYMENT_ERROR_INCORRECT_CVC: "label.paymentError.invalidCvc",
                    PAYMENT_ERROR_INVALID_CVC: "label.paymentError.invalidCvc",
                    PAYMENT_ERROR_INCORRECT_ZIP: "label.paymentError.invalidZip",
                    PAYMENT_ERROR_INVALID_EXPIRY_YEAR: "label.paymentError.invalidExpiryYear",
                    PAYMENT_ERROR_INVALID_EXPIRY_YEAR_PAST: "label.paymentError.pastExpiryYear",
                    PAYMENT_ERROR_INVALID_EXPIRY_MONTH_PAST: "label.paymentError.pastExpiryMonth",
                    PAYMENT_ERROR_INSUFFICIENT_FUNDS: "label.paymentError.insufficientFunds",
                    PAYMENT_ERROR_INVALID_ACCOUNT: "label.paymentError.invalidAccount",
                    PAYMENT_ERROR_NEW_ACCOUNT_INFORMATION_AVAILABLE: "label.paymentError.invalidAccount",
                    PAYMENT_ERROR_ISSUER_NOT_AVAILABLE: "label.paymentError.unavailableIssuer",
                    PAYMENT_ERROR_PROCESSING_ERROR: "label.paymentError.cardProcessingError",
                    PAYMENT_ERROR_REENTER_TRANSACTION: "label.paymentError.issuerProcessingError",
                    PAYMENT_ERROR_TESTMODE_DECLINE: "label.paymentError.declinedTestMode",
                    PAYMENT_ERROR_CARD_NOT_SUPPORTED: "label.paymentError.unsupportedCard",
                    PAYMENT_ERROR_LIVE_MODE_TEST_CARD: "label.paymentError.stripeNotConnected",
                    PAYMENT_ERROR_TEST_MODE_LIVE_CARD: "label.paymentError.stripeNotConnected",
                    PAYMENT_ERROR_TESTMODE_CHARGES_ONLY: "label.paymentError.stripeNotConnected",
                    PAYMENT_ERROR_INVALID_AMOUNT: "label.paymentError.invalidAmount",
                    PAYMENT_ERROR_INCOMPLETE_NUMBER: "label.paymentError.cardNumberIncomplete",
                    PAYMENT_ERROR_INCOMPLETE_CVC: "label.paymentError.cardCvcIncomplete",
                    PAYMENT_ERROR_INCOMPLETE_EXPIRY: "label.paymentError.cardExpiryIncomplete",
                    PAYMENT_ERROR_API_CONNECTION_ERROR: "stripe_connection_error",
                    PAYMENT_ERROR_PAYMENT_METHOD_UNACTIVATED: "label.paymentError.cardProcessingError",
                    PAYMENT_ERROR_PAYMENT_METHOD_UNEXPECTED_STATE: "label.paymentError.cardProcessingError",
                    PAYMENT_ERROR_PAYMENT_INTENT_AUTHENTICATION_FAILURE: "label.paymentError.authenticationFailure",
                    PAYMENT_ERROR_PAYMENT_INTENT_INCOMPATIBLE_PAYMENT_METHOD: "label.paymentError.cardProcessingError",
                    PAYMENT_ERROR_PAYMENT_INTENT_INVALID_PARAMETER: "label.paymentError.cardProcessingError",
                    PAYMENT_ERROR_PAYMENT_INTENT_PAYMENT_ATTEMPT_FAILED: "label.paymentError.cardProcessingError",
                    PAYMENT_ERROR_PAYMENT_INTENT_UNEXPECTED_STATE: "label.paymentError.cardProcessingError"
                },
                v = {
                    PAYPAL_ORDER_NOT_FOUND: "label.paymentError.declinedCard",
                    PAYPAL_CAPTURE_ERROR: "label.paymentError.paypalCaptureError",
                    INVALID_PRICE: "label.paymentError.invalidAmount",
                    PAYPAL_PERMISSION_DENIED: "label.paymentError.unauthorized",
                    PAYPAL_UNPROCESSABLE: "label.paymentError.cardProcessingError",
                    PAYMENT_DECLINED: "label.paymentError.declinedCard",
                    PAYER_ACTION_REQUIRED: "label.paymentError.cardProcessingError",
                    PAYPAL_SERVICE_ERROR: "label.paymentError.cardProcessingError"
                };
            var m = r(43710),
                g = r(5482),
                h = r(48854),
                w = r(86937),
                O = r(16849),
                j = r(93091),
                P = r(50973),
                E = r(59857),
                A = r(95305),
                T = r(72114),
                _ = "VALIDATION_ERROR",
                k = "FILE_NOT_UPLOADED",
                S = "stripe",
                x = "paypal",
                C = [5, 10, 15, 30],
                L = e => {
                    var t = e.code,
                        r = e.details;
                    return t === _ && r && r.length && "RULE_MATCHED" === r[0].code
                },
                R = e => e.hasOwnProperty("token") ? e : {
                    response_id: e.submission.response_id,
                    token: e.signature,
                    landed_at: e.submission.landed_at
                };

            function* I(e, t) {
                yield(0, n.cb)(500), yield(0, n.yJ)((0, c.AH)(e, t)), yield* function*() {
                    for (; yield(0, n.Lt)(h.ep);) yield(0, n.cb)(1e3), yield(0, n.yJ)((0, a.kH)())
                }(), yield* F()
            }

            function* D() {
                yield(0, n.yJ)(s(null)), yield(0, n.yJ)(d(null))
            }

            function* M(e, t) {
                var r = e.details;
                yield(0, n.Q7)(r.map(e => (0, n.yJ)((0, y.Z_)(e.field)))), yield(0, n.yJ)((0, f.wQ)()), yield(0, n.yJ)((0, f.cr)()), yield(0, n.yJ)((0, c.yf)(null, t, null, null))
            }

            function* N(e, t) {
                var r, i, o, l, a, u = ("PAYMENT_ERROR" === (r = e && e.code) && e.details && e.details.length && (r = e.details[0].code), i = e.code, o = e.details, i === _ && (null == o ? void 0 : o.length) && o[0].code === k && (r = e.details[0].code), l = e.code, a = e.details, l === _ && (null == a ? void 0 : a.length) && "DUPLICATE_ERROR" === a[0].code && (r = e.details[0].code), r);
                if (!u) return yield(0, n.T1)(I, t, "connection_error");
                if (u === k) return void(yield(0, n.T1)(M, e, u));
                var s = ((e, t) => b[t] || null || v[t] || (L(e) ? "label.error.ruleMatched" : "FORM_CHANGED" === e.code ? "label.error.formChanged" : "label.error.generic"))(e, u),
                    d = e && e.description,
                    f = e && e.details;
                yield(0, n.T1)(D), yield(0, n.yJ)((0, c.yf)(s, u, d, f)), L(e) && (yield(0, n.yJ)((0, p.o)()))
            }

            function* B(e) {
                var t = e.decline_code || e.code || e.type;
                return yield(0, n.T1)(D), yield(0, n.yJ)((0, c.yf)(b[t] || "label.error.generic", t))
            }

            function* H() {
                var e, t = yield(0, n.Lt)(w.fF), r = yield(0, n.Lt)(i.fD), a = yield(0, n.Lt)(i.UL);
                if (null != t && t.autoRedirect) {
                    if (!t.redirectUrl) {
                        var c = yield(0, n.Lt)(w.LK);
                        return r ? yield(0, n.yJ)((0, o.Gy)(!1)): (a && (yield(0, n.yJ)((0, o.LU)()), yield(0, n.yJ)({
                            type: l.IU
                        })), yield(0, n.yJ)((0, f.IH)(c)))
                    }
                    e = t.redirectUrl
                }
                var u = yield(0, n.Lt)(g.C_), s = e || u;
                if (s) yield(0, n.cb)(m.l6), (0, A.Zg)(s);
                else {
                    if (r) return yield(0, n.yJ)((0, o.Gy)(!1));
                    a && (yield(0, n.yJ)((0, o.LU)()), yield(0, n.yJ)({
                        type: l.IU
                    })), yield(0, n.yJ)((0, f.IH)(t.ref))
                }
            }

            function* F() {
                yield(0, n.yJ)((0, c.uz)());
                var e, t, r, i = (r = (e = yield(0, n.Lt)(h.Gt)) > (t = C.length) ? C[t - 1] : C[e - m.F], e ? r : 1);
                if (yield(0, n.Lt)(P.ys)) return yield(0, n.yJ)((0, p.o)());
                if (!(yield(0, n.Lt)(h._7))) return yield* I(i, "no_landing");
                try {
                    var o = yield(0, n.Lt)(O.WV);
                    if (o) return yield* function*(e, t) {
                        return "orderId" in e ? yield* function*(e, t) {
                            try {
                                if (!e.orderId) throw new E.A("missing_order_id", "label.error.generic");
                                yield(0, n.T1)(T.p, {
                                    provider: x,
                                    [x]: {
                                        order_id: e.orderId
                                    }
                                }), yield(0, n.yJ)((0, c.L3)())
                            } catch (e) {
                                return yield(0, n.T1)(N, e, t)
                            }
                            yield(0, n.T1)(H)
                        }(e, t): yield* function*(e, t) {
                            try {
                                var r = yield(0, n.Lt)(j.Qd);
                                if (!r) throw new E.A("missing_stripe_account", "label.error.generic");
                                var i = yield(0, n.Lt)(j.zU), o = yield(0, n.Lt)(j.oT);
                                if (i && !o) return yield* z(i, r, t);
                                if (o) return yield* V(o, i, r, t);
                                var l = yield(0, n.Lt)(j.X1), a = yield(0, n.T1)(l.createPaymentMethod, e);
                                if (a.error) return yield(0, n.T1)(B, a.error);
                                return i = a.paymentMethod && a.paymentMethod.id, yield(0, n.yJ)(s(i)), yield* z(i, r, t)
                            } catch (e) {
                                return yield(0, n.T1)(N, e, t)
                            }
                        }(e, t)
                    }(o, i);
                    yield(0, n.T1)(T.p), yield(0, n.yJ)((0, c.L3)())
                } catch (e) {
                    return yield(0, n.T1)(N, e, i)
                }
                yield(0, n.T1)(H)
            }

            function* z(e, t, r) {
                try {
                    var i = yield(0, n.T1)(T.p, {
                        provider: S,
                        [S]: {
                            payment_method: e,
                            account_id: t
                        }
                    });
                    if (i.provider === S) {
                        var o = yield(0, n.Lt)(j.X1), l = yield(0, n.T1)(o.handleCardAction, i[S].client_secret);
                        if (l.error) return yield(0, n.T1)(B, l.error);
                        var a = l.paymentIntent.id;
                        return yield(0, n.yJ)(d(a)), yield* V(a, e, t, r)
                    }
                    yield(0, n.yJ)((0, c.L3)())
                } catch (e) {
                    return yield(0, n.T1)(N, e, r)
                }
                yield(0, n.T1)(H)
            }

            function* V(e, t, r, i) {
                try {
                    yield(0, n.T1)(T.p, {
                        provider: S,
                        [S]: {
                            payment_method: t,
                            account_id: r
                        },
                        ref: e
                    }), yield(0, n.yJ)((0, c.L3)())
                } catch (e) {
                    return yield(0, n.T1)(N, e, i)
                }
                yield(0, n.T1)(H)
            }
        },
        96788(e, t, r) {
            var n = r(87754),
                i = r(87744),
                o = r(25078),
                l = r(7991),
                a = r(37360),
                c = r(48854),
                u = r(5482),
                s = r(75399),
                d = r(19180),
                f = r(12016);

            function* p() {
                yield(0, i.Zy)(y), yield(0, i.Zy)(b), yield(0, i.Zy)(m), yield(0, i.Zy)(h), yield(0, i.Zy)(w)
            }

            function* y() {
                yield(0, i.s)(l.HG);
                var e = yield(0, i.Lt)(u.eM);
                s.dx(e)
            }

            function* b() {
                if (yield(0, i.s)(l.ZF), !(yield(0, i.Lt)(o.UL))) {
                    for (var e = yield(0, i.Lt)(f.CQ); e;) yield(0, i.s)(d.R5), e = yield(0, i.Lt)(f.CQ);
                    var t = yield(0, i.Lt)(u.$c), r = yield(0, i.Lt)(u.tI), n = t || r ? void 0 : yield(0, i.Lt)(c.TL), a = yield(0, i.Lt)(u.eM);
                    s.tA({
                        responseId: n,
                        formId: a
                    })
                }
            }

            function* v() {
                if (!(yield(0, i.Lt)(o.UL))) {
                    var e = yield(0, i.Lt)(a.DZ), t = yield(0, i.Lt)(u.eM);
                    s.PM({
                        ref: e,
                        formId: t
                    })
                }
            }

            function* m() {
                yield(0, i.jP)([l.Sl], v)
            }

            function g(e) {
                var t = e.payload;
                return function*() {
                    if (!(yield(0, i.Lt)(o.UL))) {
                        var e = yield(0, i.Lt)(a.DZ), r = yield(0, i.Lt)(u.eM);
                        s.KL({
                            height: t,
                            ref: e,
                            formId: r
                        })
                    }
                }()
            }

            function* h() {
                yield(0, i.jP)([l.vQ], g)
            }

            function* w() {
                yield(0, i.s)(n.St.type);
                var e = yield(0, i.Lt)(u.eM);
                s.WK({
                    formId: e
                })
            }
            r.d(t, {
                Ay: () => p
            })
        },
        14481(e, t, r) {
            var n = r(87744),
                i = r(47354),
                o = "FORM_LOADED_ACTION";

            function* l() {
                for (var e = (0, i.Od)(e => (null != document.fonts ? document.fonts.ready.then(() => e(!0)).then(() => e(i.Kp)) : e(!0), () => {})), t = arguments.length, r = Array(t), l = 0; l < t; l++) r[l] = arguments[l];
                yield(0, n.Q7)([(0, n.s)(e), ...r.map(e => (0, n.s)(e))]), yield(0, n.yJ)({
                    type: o
                })
            }
            r.d(t, {
                U: () => o,
                r: () => l
            })
        },
        23557(e, t, r) {
            r.d(t, {
                Ay: () => P,
                FP: () => g
            });
            var n = r(87744),
                i = r(69043),
                o = r(11640),
                l = r(7991),
                a = r(5482),
                c = r(37360),
                u = r(48854),
                s = r(28105),
                d = () => window.navigator.onLine,
                f = r(79783),
                p = r(14481),
                y = r(38),
                b = r(96788);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var g = () => JSON.parse(window.localStorage.getItem("submissions") || "[]"),
                h = e => {
                    window.localStorage.setItem("submissions", JSON.stringify(e))
                },
                w = () => {
                    var e = g(),
                        t = e.shift();
                    return h(e), t
                },
                O = e => h([e, ...g()]),
                j = e => h([...g(), e]);

            function P() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                return function*() {
                    yield(0, n.cH)(p.r), yield(0, n.Zy)(b.Ay), yield(0, n.Zy)(f.A), yield(0, n.Zy)(T, e), yield(0, n.Zy)(E)
                }()
            }

            function* E() {
                for (;;) {
                    yield(0, n.s)(l.xl);
                    var e = yield(0, n.Lt)(u.oR);
                    j({
                        formId: yield(0, n.Lt)(a.eM), landingId: null, landingAt: null, values: e, outcome: yield(0, n.Lt)(c.EN)
                    }), yield(0, n.yJ)((0, i.L3)()), yield(0, n.T1)(y.vY)
                }
            }
            var A = e => new Promise(t => setTimeout(t, e));

            function* T(e) {
                for (;;) {
                    if (d()) {
                        var t = w();
                        if (t) try {
                            var r = yield(0, n.Lt)(s.u0), i = yield(0, n.T1)(o.OV, t.formId, r), l = (0, y.AN)(i);
                            yield(0, n.T1)(o.pt, m(m({}, t), {}, {
                                landingId: l.token,
                                landingAt: l.landed_at
                            }));
                            continue
                        } catch (e) {
                            O(t)
                        }
                    }
                    yield A(e)
                }
            }
        },
        80301(e, t, r) {
            var n = r(37360),
                i = (e, t) => {
                    var r, i, o = e.intents;
                    if (!(null != o && o.length)) return null;
                    var l = (0, n.GH)(e, t);
                    return l && null != (r = null == (i = o.find(e => e.id === l.id)) ? void 0 : i.intent) ? r : null
                };
            r.d(t, {
                W: () => i
            })
        },
        93091(e, t, r) {
            var n = e => e.paymentProviders.stripe,
                i = e => n(e).accountId,
                o = e => n(e).stripePaymentMethodId,
                l = e => n(e).stripePaymentIntentId,
                a = e => n(e).service,
                c = e => e.paymentProviders.paypal;
            r.d(t, {
                Cv: () => n,
                Qd: () => i,
                WC: () => c,
                X1: () => a,
                oT: () => l,
                zU: () => o
            })
        },
        89841(e, t, r) {
            var n = e => {
                var t;
                return null != (t = e.taxonomyScopes) ? t : {}
            };
            r.d(t, {
                T: () => n
            })
        },
        57250(e, t, r) {
            r.d(t, {
                default: () => iT
            });
            var n, i, o, l, a, c, u = r(74058),
                s = r(47354),
                d = r(96074),
                f = r(73350),
                p = r(99894),
                y = r(47657),
                b = r(3290),
                v = r.n(b),
                m = r(88400),
                g = r(23353),
                h = JSON.parse('{"id":"Z1K27wqb","type":"quiz","title":"Respondent Pulse Survey (!don\'t delete!)","workspace":{"href":"https://api.typeform.com/workspaces/6ck7ew"},"theme":{"href":"https://api.typeform.com/themes/qHWOQ7"},"settings":{"language":"en","progress_bar":"proportion","meta":{"allow_indexing":false},"hide_navigation":true,"is_public":true,"is_trial":false,"show_progress_bar":false,"show_typeform_branding":true,"are_uploads_public":false,"show_time_to_complete":true,"show_number_of_submissions":false,"show_cookie_consent":false,"show_question_number":false,"pro_subdomain_enabled":false,"capabilities":{"e2e_encryption":{"enabled":false,"modifiable":false}}},"thankyou_screens":[{"id":"DefaultTyScreen","ref":"default_tys","title":"Thanks for completing this typeform\\nNow *create your own* — it\'s free, easy, & beautiful","type":"thankyou_screen","properties":{"show_button":true,"share_icons":false,"button_mode":"default_redirect","button_text":"Create a *typeform*"},"attachment":{"type":"image","href":"https://public-assets.typeform.com/public/admin/2dpnUBBkz2VN.gif"}}],"fields":[{"id":"YlGEHyET1K0B","title":"*Thanks for your response!*\\nHow was your experience filling out this form?","ref":"tf-pulse-survey-question-1","properties":{"start_at_one":true,"steps":5,"labels":{"left":"Very unsatisfying","center":"Neutral","right":"Very satisfying"}},"validations":{"required":true},"type":"opinion_scale"},{"id":"fX9fygruvCbA","title":"Could you tell us why you chose {{field:tf-pulse-survey-question-1}}?","ref":"tf-pulse-survey-question-2","properties":{},"validations":{"required":false},"type":"long_text"}],"hidden":["parent_form"],"_links":{"display":"https://tfproductops.typeform.com/to/Z1K27wqb"}}'),
                w = ["googleTagManager", "googleAnalytics", "facebookPixel", "proSubdomainEnabled"];

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var P = r(58924),
                E = (0, u.Z0)({
                    name: "captcha",
                    initialState: {},
                    reducers: {}
                }).reducer,
                A = r(7991),
                T = r(4543),
                _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            function k(e) {
                for (var t = "", r = 0; r < e; r++) t += _.charAt(Math.floor((0, T.A)() * _.length));
                return t
            }
            var S = r(72524),
                x = r(69991),
                C = r(99729);

            function L(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var I = r(21264);
            let D = (0, u.Z0)({
                name: "partialSubmissionsSent",
                initialState: {
                    partialSubmissionsSent: !1
                },
                extraReducers: {
                    [A.pu]: e => {
                        e.partialSubmissionsSent = !0
                    }
                },
                reducers: {}
            }).reducer;
            var M = r(540),
                N = r(19180),
                B = r(56362),
                H = r(87754),
                F = r(14481),
                z = r(14340),
                V = r(21484);

            function G(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var q = r(58632),
                J = r(16849),
                Z = r(37360);

            function Y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var K = {
                answersList: []
            };

            function $(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var X = {
                backgroundOpacity: 1,
                hideHeaders: !1,
                minimalFooter: !1,
                mode: null
            };

            function ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var er = r(66299);

            function en(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ei(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? en(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : en(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function eo(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function el(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eo(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eo(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function ea(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ec(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ea(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ea(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function eu(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function es(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eu(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function ed(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ef(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ed(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ep = r(79054);

            function ey(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ey(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ev = r(24007);

            function em(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eg(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? em(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eh = {
                    stripe: {
                        stripePaymentMethodId: null,
                        stripePaymentIntentId: null,
                        service: null
                    },
                    paypal: {
                        service: null
                    }
                },
                ew = [],
                eO = r(4494),
                ej = r(17351);

            function eP(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eE(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eP(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eP(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eA = {
                    accountUid: "",
                    cookieAccountUids: null,
                    formId: "",
                    initialized: !1,
                    isFormCreator: !1,
                    isFirstConversation: null,
                    sessionId: null,
                    planName: "",
                    blockRefTracking: {}
                },
                eT = r(86937),
                e_ = r(66576),
                ek = r(17850),
                eS = r(15104),
                ex = r(42616);

            function eC(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eL(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eC(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eC(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eR = r(96976),
                eI = r(51767);

            function eD(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eM(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eD(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eD(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eN = (0, f.HY)({
                abTests: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                accessScheduling: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case A.HH:
                            return U(U({}, e), {}, {
                                isFormMarkAsClosed: !0
                            });
                        case A.Oc:
                            return U(U({}, e), {}, {
                                isFormMarkAsClosed: !0,
                                isCloseScreenVisible: !0
                            });
                        default:
                            return e
                    }
                },
                accountFeatureFlags: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                portal: eI.Ay,
                analytics: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                csp: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                answers: function() {
                    var e, t, r, n, i, o, l, a, c, u, s, d, f, p, y, b, v, m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
                        g = arguments.length > 1 ? arguments[1] : void 0;
                    switch (g.type) {
                        case A.U6:
                            return t = (e = g.payload).validationErrors, r = e.blockRef, n = e.shouldAnswerBeFormatted, i = (0, J.fO)(m.answersList, r), o = m.answersList[i], W(W({}, m), {}, {
                                answersList: (0, q.A)(i, W(W({}, o), {}, {
                                    validationErrors: null != t ? t : [],
                                    isValid: !t || 0 === t.length,
                                    shouldAnswerBeFormatted: n
                                }), m.answersList)
                            });
                        case A.OK:
                            return l = g.payload.answer, a = (0, Z.rM)(l), c = (0, J.fO)(m.answersList, a), u = m.answersList[c], W(W({}, m), {}, {
                                answersList: (0, q.A)(c, W(W({}, l), {}, {
                                    isCommitted: !1,
                                    hasBeenInteractedWith: !0,
                                    hasBeenSuccessfullyCommitted: null == u ? void 0 : u.hasBeenSuccessfullyCommitted
                                }), m.answersList)
                            });
                        case A.rw:
                            return s = g.payload.ref, d = m.answersList.find(e => (0, Z.rM)(e) === s), p = (f = [...m.answersList]).indexOf(d), f[p] = W(W({}, d), {}, {
                                isCommitted: !0,
                                hasBeenSuccessfullyCommitted: !0
                            }), W(W({}, m), {}, {
                                answersList: f
                            });
                        case A.Gt:
                            return y = g.payload.ref, W(W({}, m), {}, {
                                answersList: m.answersList.map(e => (0, Z.rM)(e) !== y ? e : W(W({}, e), {}, {
                                    isCommitted: !0
                                }))
                            });
                        case A.ic:
                            return W(W({}, m), {}, {
                                answersList: m.answersList.map(e => W(W({}, e), {}, {
                                    isCommitted: !0
                                }))
                            });
                        case A.xO:
                            return b = g.payload.milestoneRef, v = !1, W(W({}, m), {}, {
                                answersList: m.answersList.map(e => {
                                    var t = W(W({}, e), {}, {
                                        isCommitted: !v
                                    });
                                    return e.blockRef === b && (v = !0), t
                                })
                            });
                        default:
                            return m
                    }
                },
                autoFocus: function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case A.Jb:
                            return !0;
                        case A.YZ:
                            return !1;
                        default:
                            return e
                    }
                },
                cookieConsent: P.Ay,
                disableNavigation: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case A.gk:
                            return !0;
                        case A.R2:
                            return !1;
                        default:
                            return e
                    }
                },
                disableSubmit: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                disableTracking: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                embedSettings: function() {
                    let e;
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e = t, Object.keys(X).every(t => Object.keys(e).includes(t)) || (t = Q(Q({}, X), t)), t
                },
                featureFlags: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                form: function() {
                    var e, t, r, n, i, o, l, a, c, u, s, d, f, p, y, b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        v = arguments.length > 1 ? arguments[1] : void 0;
                    switch (v.type) {
                        case A.Sl:
                            return e = v.payload.ref, et(et({}, b), {}, {
                                currentRef: e,
                                previousRef: b.currentRef,
                                requireStickyFooter: null,
                                forceSubmitButtonVisible: !1
                            });
                        case A.F4:
                            return t = v.payload, et(et({}, b), {}, {
                                isBlockChanging: t
                            });
                        case A.fw:
                            return r = v.payload, et(et({}, b), {}, {
                                forceSubmitButtonVisible: r
                            });
                        case A.lc:
                            return n = v.payload.ref, ei(ei({}, b), {}, {
                                currentScreenRef: n
                            });
                        case A.HG:
                            return ei(ei({}, b), {}, {
                                currentScreenRef: null
                            });
                        case A.EE:
                            return i = v.payload.ref, ei(ei({}, b), {}, {
                                scrolling: {
                                    ref: i,
                                    scrollType: er.K1
                                }
                            });
                        case A.f4:
                            return l = (o = v.payload).anchor, a = o.target, c = o.fast, ei(ei({}, b), {}, {
                                scrolling: {
                                    scrollType: er.T1,
                                    anchor: l,
                                    target: a,
                                    fast: c
                                }
                            });
                        case A.yG:
                            return es(es({}, b), {}, {
                                scrolling: null
                            });
                        case A.qb:
                            return u = v.payload.isScrollNearTop, el(el({}, b), {}, {
                                isScrollNearTop: u
                            });
                        case A.oV:
                            return d = (s = v.payload).blockRef, (p = void 0 !== (f = s.show) && f) || b.requireStickyFooter === d ? ec(ec({}, b), {}, {
                                requireStickyFooter: p ? d : null
                            }) : b;
                        case A.mE:
                            return y = null == b ? void 0 : b.variables, ef(ef({}, b), {}, {
                                variables: ef(ef({}, y), {}, {
                                    initialValues: ef(ef({}, null == y ? void 0 : y.initialValues), v.payload)
                                })
                            });
                        default:
                            return b
                    }
                },
                hideSubmitButton: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                hubspotIntegration: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                integrations: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e
                },
                input: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.u,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = t.type,
                        n = t.payload;
                    return r === A.HF ? eb(eb({}, e), {}, {
                        isInputFocused: n.isInputFocused
                    }) : e
                },
                intents: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e
                },
                isLimitedToParentSize: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                isLivePreview: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                isOfflineMode: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                isFormReady: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                isSandboxMode: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e
                },
                userSelectedLang: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return e
                },
                layout: ev.Ay,
                leadEnrichment: I.Ay,
                deepDive: z.Ay,
                numberOfSubmissions: eR.Ay,
                partialSubmissionsSent: D,
                paymentProviders: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = t.type,
                        n = t.payload;
                    switch (r) {
                        case A.jK:
                            return eg(eg({}, e), {}, {
                                stripe: eg(eg({}, e.stripe), {}, {
                                    stripePaymentMethodId: n
                                })
                            });
                        case A.yw:
                            return eg(eg({}, e), {}, {
                                stripe: eg(eg({}, e.stripe), {}, {
                                    stripePaymentIntentId: n
                                })
                            });
                        case A.cg:
                            return eg(eg({}, e), {}, {
                                stripe: eg(eg({}, e.stripe), {}, {
                                    service: n
                                })
                            });
                        case A.GO:
                            return eg(eg({}, e), {}, {
                                paypal: eg(eg({}, e.paypal), {}, {
                                    service: n
                                })
                            });
                        default:
                            return e
                    }
                },
                pipingAnswers: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === A.an ? t.payload : e
                },
                readingDirection: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ltr";
                    return e
                },
                reviewMode: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.u,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case A.mu:
                            return {
                                isReviewModeEnabled: !0
                            };
                        case A.fQ:
                            return {
                                isReviewModeEnabled: !1
                            };
                        default:
                            return e
                    }
                },
                submit: ej.A,
                testVariants: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                timeToComplete: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return e
                },
                tracking: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = t.type,
                        n = t.payload;
                    switch (r) {
                        case A.FL:
                            return eE(eE({}, e), {}, {
                                initialized: !0,
                                isFormCreator: null != (i = null == n || null == (o = n.cookieAccountUids) ? void 0 : o.includes(e.accountUid)) && i,
                                isFirstConversation: null == n ? void 0 : n.isFirstConversation,
                                sessionId: k(12)
                            });
                        case A.wQ:
                            return eE(eE({}, e), {}, {
                                visitCurrentCycle: n.visitCurrentCycle
                            });
                        case A.LB:
                            var i, o, l, a, c = n.responseFilled,
                                u = n.ref,
                                s = null != (l = null == (a = e.blockRefTracking) ? void 0 : a[u]) ? l : {};
                            return eE(eE({}, e), {}, {
                                blockRefTracking: eE(eE({}, e.blockRefTracking), {}, {
                                    [u]: eE(eE({}, s), {}, {
                                        responseFilled: c
                                    })
                                })
                            });
                        default:
                            return e
                    }
                },
                translationRequest: S.Ay,
                uniqueId: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k(16);
                    return e
                },
                unrecoverableError: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === A.Wm ? t.payload : e
                },
                pulseSurvey: p.Ay,
                features: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e
                },
                captcha: E,
                media: M.Ay,
                uploads: N.Ay,
                mediaServiceRespondentToken: B.Ay,
                duplicatePrevention: H.Ay,
                taxonomyScopes: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                consentScreen: V.Ay
            });
            let eB = (e, t) => {
                switch (t.type) {
                    case A.I_:
                        return function(e, t) {
                            var r, n, i = t.payload,
                                o = i.currentBlockRef,
                                l = i.resetAnswers,
                                a = (0, ek.A)(t.payload, e.isLivePreview),
                                c = (0, eS.s7)(e);
                            if (c) {
                                var u = ex.A.get(c);
                                u && (a = (0, C.dQ)(a, u, c))
                            }
                            var s = eL(eL({}, e), {}, {
                                    submit: l ? ej.u : e.submit,
                                    form: eL(eL({}, a), {}, {
                                        currentRef: e.form.currentRef,
                                        currentScreenRef: e.form.currentScreenRef,
                                        isScrollNearTop: !0
                                    })
                                }),
                                d = (0, Z.Tr)(s),
                                f = (r = (0, Z.oo)(e), n = (0, g.A)(d), l ? n : [...r.filter(e => !!d.find(t => t.ref === e.blockRef)), ...n.filter(e => !r.find(t => (0, Z.rM)(t) === (0, Z.rM)(e)))]);
                            if (s.answers = {
                                    answersList: f
                                }, s.pipingAnswers = f, null != o)
                                if ((0, eT.B6)(s, o) || (0, eT.am)(s, o)) s.form.currentScreenRef = o;
                                else {
                                    s.form.currentScreenRef = null;
                                    var p = (0, e_.Jj)(s, o) ? o : (0, e_.rJ)(s);
                                    p && (s.form.currentRef = p)
                                }
                            return s
                        }(e, t);
                    case y.IU:
                        return eM(eM({}, e), {}, {
                            form: eM(eM({}, e.form), {}, {
                                settings: eM(eM({}, e.form.settings), {}, {
                                    showTypeformBranding: !0
                                }),
                                id: e.pulseSurvey.parentFormId
                            })
                        });
                    case y.W7:
                        var r, n, i;
                        return r = v()(h), (n = e.form.settings).googleTagManager, n.googleAnalytics, n.facebookPixel, n.proSubdomainEnabled, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (({}).hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                            }
                            return i
                        }(n, w), j(j({}, e), {}, {
                            analytics: {},
                            form: j(j({}, e.form), {}, {
                                settings: j(j({}, i), {}, {
                                    capabilities: {
                                        e2e_encryption: {
                                            enabled: !1,
                                            modifiable: !1
                                        }
                                    },
                                    showProgressBar: !1,
                                    showQuestionNumber: !1,
                                    hideNavigation: !0,
                                    showTypeformBranding: !1
                                }),
                                fields: r.fields,
                                logic: [],
                                variables: {},
                                id: r.id,
                                currentRef: null,
                                currentScreenRef: null,
                                hidden: {
                                    parent_form: e.form.id
                                },
                                theme: j(j({}, e.form.theme), {}, {
                                    screens: j(j({}, e.form.theme.screens), {}, {
                                        alignment: m.Fm.CENTER
                                    }),
                                    fields: j(j({}, e.form.theme.fields), {}, {
                                        alignment: m.Fm.CENTER
                                    })
                                })
                            }),
                            answers: {
                                answersList: (0, g.A)(r.fields)
                            },
                            pipingAnswers: [],
                            submit: j(j({}, e.submit), {}, {
                                isSubmitting: !1,
                                isSuccess: !1,
                                isComplete: !1,
                                errorMessage: null,
                                retry: {
                                    showMessage: !1,
                                    timeout: 1,
                                    count: 0
                                }
                            }),
                            taxonomyScopes: {}
                        });
                    case x.r6:
                        return ((e, t) => {
                            var r = t.payload,
                                n = r.translation,
                                i = r.targetLanguage;
                            if (!n) return e;
                            var o = e;
                            try {
                                var l = (0, C.dQ)(e.form, n, i);
                                o = R(R({}, e), {}, {
                                    form: l
                                })
                            } catch (e) {
                                console.error("There was an error when mergin translations into the state: ", e)
                            }
                            return o
                        })(e, t);
                    case F.U:
                        return eM(eM({}, e), {}, {
                            isFormReady: !0
                        });
                    default:
                        return eN(e, t)
                }
            };
            var eH = r(87744),
                eF = r(25078),
                ez = r(72114),
                eV = r(56712),
                eG = r(15803),
                eU = r(38729),
                eq = r(89614),
                eJ = r(70854),
                eZ = r(33321),
                eY = r(50973),
                eW = r(80301),
                eK = r(28105),
                e$ = r(5482),
                eQ = r(81126),
                eX = r(82771),
                e0 = r(48854),
                e1 = r(20503),
                e2 = ["event"];

            function e4(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e3(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e4(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e4(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function e5(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }
            var e8 = {
                    "S3 Datalake": !0
                },
                e9 = e => {
                    (0, e1.bR)(e)
                },
                e6 = (n = function*(e) {
                    yield Promise.all(e.map(e => {
                        var t, r;
                        return {
                            data: null != (t = e.data) ? t : {},
                            options: null != (r = e.options) ? r : {}
                        }
                    }).map(e => ({
                        data: e3({}, e.data),
                        options: e3(e3({}, e.options), {}, {
                            context: {
                                ip: "0.0.0.0"
                            },
                            integrations: e.options.integrations || e8
                        })
                    })).map(e => {
                        let t;
                        var r = e.data,
                            n = r.event,
                            i = function(e, t) {
                                if (null == e) return {};
                                var r, n, i = function(e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if (({}).hasOwnProperty.call(e, n)) {
                                            if (-1 !== t.indexOf(n)) continue;
                                            r[n] = e[n]
                                        }
                                    return r
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                }
                                return i
                            }(r, e2);
                        return t = e.options, new Promise(e => {
                            eV.Ay.sendEvent(n, i, t, e)
                        })
                    }))
                }, i = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, i) {
                        var o = n.apply(e, t);

                        function l(e) {
                            e5(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            e5(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    })
                }, function(e) {
                    return i.apply(this, arguments)
                }),
                e7 = r(63130),
                te = r(95581),
                tt = r(35328),
                tr = r(2776),
                tn = r(51708),
                ti = "block_focused",
                to = "conversation_submitted",
                tl = "item_clicked",
                ta = "message_shown",
                tc = "present_conversation",
                tu = "start_conversation",
                ts = "submit_button_shown",
                td = "tmp_message_shown",
                tf = "tmp_use_feature",
                tp = "use_feature",
                ty = "standard",
                tb = "louvre",
                tv = r(47346),
                tm = r(8073);

            function tg(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function th(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tg(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tg(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tw = () => (0, eG.CI)() ? "mobile" : "desktop";

            function* tO() {
                return (yield(0, eH.Lt)(tm.DN)) ? {
                    embedding_mode: yield(0, eH.Lt)(tm.Tk), headers_displayed: !(yield(0, eH.Lt)(tm.dh)), footers_displayed: !(yield(0, eH.Lt)(tm.JD)), transparency: 100 - (yield(0, eH.Lt)(tm.o7)) * 100
                } : {
                    embedding_mode: null
                }
            }

            function* tj(e) {
                var t = yield(0, eH.Lt)(Z.GH, e);
                if (yield(0, eH.Lt)(Z.fP, e)) {
                    var r = yield(0, eH.Lt)(Z.AH, t), n = r.properties.fields.findIndex(t => t.ref === e);
                    return {
                        block_pos: r.index,
                        child_block_pos: n
                    }
                }
                return {
                    block_pos: t.index
                }
            }

            function* tP() {
                var e = yield(0, eH.Lt)(e$.eM), t = yield(0, eH.Lt)(eK.u0), r = yield(0, eH.Lt)(eK.af), n = yield(0, eH.T1)(e1.ct, e);
                return {
                    account_uid: r.accountUid,
                    attribution_user_id: tv.A.getUser(),
                    form_uid: e,
                    form_visitor_id: n,
                    typeform_view_id: t
                }
            }

            function* tE(e, t) {
                return th(th({}, (yield(0, eH.T1)(tP))), {}, {
                    event: e
                }, t)
            }

            function* tA(e) {
                var t = yield(0, eH.Lt)(eK.i0), r = yield(0, eH.Lt)(e0.lX), n = yield(0, eH.Lt)(e0.TL), i = yield(0, eH.T1)(tO);
                return th(th({
                    is_first_conversation: t,
                    landing_token: r,
                    platform: tw(),
                    response_id: n
                }, i), e)
            }

            function tT(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var t_ = e => {
                var t, r, n;
                return "number" == typeof(!!(null != (n = (function(e) {
                    if (Array.isArray(e)) return e
                }(t = (null == e ? void 0 : e.media) || []) || function(e) {
                    var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, n, i, o, l = [],
                            a = !0,
                            c = !1;
                        try {
                            i = (t = t.call(e)).next, !1;
                            for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 1 !== l.length); a = !0);
                        } catch (e) {
                            c = !0, n = e
                        } finally {
                            try {
                                if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw n
                            }
                        }
                        return l
                    }
                }(t) || function(e) {
                    if (e) {
                        if ("string" == typeof e) return tT(e, 1);
                        var t = ({}).toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? tT(e, 1) : void 0
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[0]) && n.enabled) && (null == (r = n.properties) ? void 0 : r.interactionDelay))
            };

            function tk(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tS(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tk(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tk(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function tx(e) {
                var t = e.ref,
                    r = e.hasClickedAfterAutoplay;
                return function*() {
                    var e = yield(0, eH.Lt)(Z.Tr), n = yield(0, eH.Lt)(Z.GH, t), i = e.findIndex(e => e.ref === t), o = t_(n), l = yield(0, eH.T1)(tA, {
                        item: "play_video_question",
                        item_type: "button",
                        block_index: i,
                        block_ref: t,
                        video_delay_interaction: o ? "on" : "off",
                        block_type: n.type,
                        label: r ? "preview" : "playback"
                    });
                    return tS({}, (yield(0, eH.T1)(tE, r ? "tmp_item_clicked" : tl, l)))
                }()
            }

            function* tC(e) {
                yield(0, eH.jP)(A.EZ, function*(t) {
                    var r = t.payload,
                        n = r.ref,
                        i = r.hasClickedAfterAutoplay,
                        o = yield(0, eH.T1)(tx, {
                            ref: n,
                            hasClickedAfterAutoplay: i
                        });
                    yield(0, eH.yJ)(e, {
                        data: o
                    })
                })
            }
            var tL = e => {
                var t;
                return !!(null == (t = e.media) ? void 0 : t[0].enabled)
            };

            function tR(e) {
                var t = e.ref,
                    r = e.isSuccess,
                    n = e.withAudio;
                return function*() {
                    var e = yield(0, eH.Lt)(Z.Tr), i = yield(0, eH.Lt)(Z.GH, t), o = e.filter(tL).map(e => e.ref), l = o.indexOf(t) + 1, a = {
                        block_ref: t,
                        block_type: i.type,
                        autoplay_type: n ? "playback" : "preview",
                        audio_enabled: n,
                        autoplay_video_status: r ? "success" : "error",
                        autoplay_audio_status: n ? "success" : "error",
                        video_index: "".concat(l, "/").concat(o.length)
                    };
                    return tS({}, (yield(0, eH.T1)(tE, "autoplay_video", a)))
                }()
            }

            function* tI(e) {
                yield(0, eH.jP)(A.jQ, function*(t) {
                    var r = t.payload,
                        n = r.ref,
                        i = r.isSuccess,
                        o = r.withAudio,
                        l = yield(0, eH.T1)(tR, {
                            ref: n,
                            isSuccess: i,
                            withAudio: o
                        });
                    yield(0, eH.yJ)(e, {
                        data: l
                    })
                })
            }
            var tD = r(62240),
                tM = r(42626),
                tN = () => {
                    var e, t, r, n, i, o = null == (e = window.performance) || null == (t = e.now) ? void 0 : t.call(e),
                        l = null == (r = window.performance) || null == (n = r.getEntriesByType) ? void 0 : n.call(r, "navigation"),
                        a = null == l || null == (i = l[0]) ? void 0 : i.domComplete;
                    return a ? Math.round(o - a) : 0
                };

            function tB(e) {
                var t = e.blockRef,
                    r = e.followUpIndex;
                return function*() {
                    var e = yield(0, eH.Lt)(Z.bQ), n = yield(0, eH.Lt)(e0.TL), i = tN(), o = yield(0, eH.Lt)(Z.wA, t);
                    e && (o += 1);
                    var l = {
                        block_ref: t,
                        block_type: eq.Kh,
                        block_index: o,
                        child_index: r,
                        response_id: n,
                        time_since_page_load: i
                    };
                    return yield(0, eH.T1)(tE, "block_extra_field_shown", l)
                }()
            }

            function* tH(e) {
                yield(0, eH.jP)(z.dR.type, function*(t) {
                    var r = yield(0, eH.T1)(tB, t.payload);
                    yield(0, eH.yJ)(e, {
                        data: r
                    })
                })
            }
            var tF = r(44774);

            function tz(e) {
                var t = e.blockRef,
                    r = e.mode;
                return function*() {
                    var e = yield(0, eH.Lt)(Z.bQ), n = yield(0, eH.Lt)(Z.wA, t);
                    e && (n += 1);
                    var i = yield(0, eH.T1)(tA, {
                        item: "select_signature_mode",
                        item_type: "button",
                        label: r,
                        block_type: "signature",
                        block_ref: t,
                        block_index: n
                    });
                    return yield(0, eH.T1)(tE, tl, i)
                }()
            }

            function tV(e) {
                var t = e.blockRef,
                    r = e.mode;
                return function*() {
                    return yield(0, eH.T1)(tE, tp, {
                        feature: "signature_collected",
                        label: r,
                        block_type: "signature",
                        block_ref: t
                    })
                }()
            }

            function tG(e) {
                var t = e.blockRef;
                return function*() {
                    return yield(0, eH.T1)(tE, "popup_opened", {
                        popup: "signature_consent_screen",
                        block_type: "signature",
                        block_ref: t
                    })
                }()
            }

            function tU(e) {
                var t = e.blockRef,
                    r = e.value;
                return function*() {
                    var e = yield(0, eH.T1)(tA, {
                        item: "signature_consent",
                        item_type: "checkbox",
                        value: r,
                        block_type: "signature",
                        block_ref: t
                    });
                    return yield(0, eH.T1)(tE, tl, e)
                }()
            }

            function* tq(e) {
                yield(0, eH.jP)(tF.uT.type, function*(t) {
                    var r = yield(0, eH.T1)(tz, t.payload);
                    yield(0, eH.yJ)(e, {
                        data: r
                    })
                }), yield(0, eH.jP)(tF.Az.type, function*(t) {
                    var r = yield(0, eH.T1)(tV, t.payload);
                    yield(0, eH.yJ)(e, {
                        data: r
                    })
                }), yield(0, eH.jP)(tF.v1.type, function*(t) {
                    var r = yield(0, eH.T1)(tG, t.payload);
                    yield(0, eH.yJ)(e, {
                        data: r
                    })
                }), yield(0, eH.jP)(tF.Mh.type, function*(t) {
                    var r = yield(0, eH.T1)(tU, t.payload);
                    yield(0, eH.yJ)(e, {
                        data: r
                    })
                })
            }
            var tJ = r(86831),
                tZ = r(12016),
                tY = r(49653),
                tW = r(63142),
                tK = r(66319),
                t$ = [tY.VD],
                tQ = e => !t$.includes(e);

            function* tX(e, t) {
                var r = yield(0, eH.Lt)(tK.G), n = Object.keys(r).filter(tQ);
                if (n.length) {
                    var i = yield(0, eH.Lt)(e$.eM), o = yield(0, eH.Lt)(eK.af), l = yield(0, eH.Lt)(eK.u0), a = yield(0, eH.Lt)(Z.bQ), c = yield(0, eH.Lt)(Z.j7), u = yield(0, eH.Lt)(Z.k);
                    for (var s of n) {
                        var d = r[s],
                            f = {
                                account_uid: o.accountUid,
                                attribution_user_id: tv.A.getUser(),
                                event: tW.CJ,
                                form_uid: i,
                                has_welcome_screen: a,
                                payload: {
                                    form_length: c,
                                    has_logic_jumps: u
                                },
                                test_id: s,
                                typeform_view_id: l,
                                variant_label: d
                            };
                        yield(0, eH.yJ)(e, {
                            data: f,
                            options: t
                        })
                    }
                }
            }

            function* t0(e) {
                for (;;) {
                    var t = yield(0, eH.s)([A.my, A.Sl, A.HG, A.OK, A.xl, A.Gt]), r = t.type, n = t.payload;
                    if (!(r === A.Sl && (yield(0, eH.Lt)(e_.m_, n.ref)))) {
                        if (r !== A.OK && r !== A.Sl || !n.isFromPrefilledAnswer) return yield(0, eH.T1)(e, n)
                    }
                }
            }
            var t1 = r(74609),
                t2 = r(28319);

            function t4(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function t3(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? t4(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t4(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function* t5(e, t) {
                for (;;) {
                    var r = yield(0, eH.s)(e);
                    yield(0, eH.T1)(t, r.payload)
                }
            }

            function* t8(e, t) {
                yield(0, eH.cH)(t5, e, t)
            }

            function* t9(e) {
                var t = yield(0, eH.Lt)(t1.uE, e), r = yield(0, eH.Lt)(t2.uE, e);
                return t3(t3({}, t), r)
            }

            function* t6(e) {
                var t = yield(0, eH.Lt)(t1.TA, e), r = yield(0, eH.Lt)(t2.TA, e);
                return t3(t3({}, t), r)
            }
            var t7 = ["block_pos"],
                re = ["block_pos"];

            function rt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return rr(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? rr(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function rn(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ri(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rn(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function ro(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                        if (({}).hasOwnProperty.call(e, n)) {
                            if (-1 !== t.indexOf(n)) continue;
                            r[n] = e[n]
                        }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            var rl = {
                    integrations: {
                        All: !1,
                        "S3 Datalake": !0
                    }
                },
                ra = e => null != e && e.enabled ? tr.k4.VIDEO : tr.k4.TEXT,
                rc = () => new Date().getTimezoneOffset(),
                ru = () => {
                    try {
                        return Intl.DateTimeFormat().resolvedOptions().timeZone
                    } catch (e) {
                        return null
                    }
                },
                rs = (e, t) => e && t ? "thankyou_button_and_branding" : e ? "thankyou_button" : t ? "branding" : null;

            function* rd(e) {
                var t = e.fieldRef,
                    r = yield(0, eH.Lt)(Z.GH, t), n = yield tj(t), i = n.block_pos, o = ro(n, t7);
                return ri(ri({
                    status: e.status,
                    block_ref: t,
                    block_type: r.type,
                    block_index: i
                }, o), e.reason && {
                    reason: e.reason
                })
            }

            function* rf() {
                var e = yield(0, eH.Lt)(Z.Ti);
                if (!(e && e.find(e => e.type === eq.Tm))) return !1;
                var t = yield(0, eH.Lt)(e$.IU), r = t.toggle, n = t.active;
                return r && n
            }

            function* rp() {
                var e, t = yield(0, eH.Lt)(e$.eM), r = yield(0, eH.Lt)(eK.i0), n = yield(0, eH.Lt)(e0.lX), i = yield(0, eH.Lt)(e0.TL), o = yield(0, eH.Lt)(e0.Fg), l = yield(0, eH.Lt)(J.sV), a = yield(0, eH.T1)(e1.l5, t), c = yield(0, eH.Lt)(eK.Iq), u = yield(0, eH.Lt)(e$.ve), s = yield(0, eH.Lt)(Z.Ti), d = yield(0, eH.Lt)(e$.h$), f = yield(0, eH.Lt)(e$.ID), p = yield(0, eH.Lt)(J.Aj), y = yield(0, eH.Lt)(J.Zc), b = yield(0, eH.Lt)(tM.C), v = new Date().getTime(), m = null == (e = window.performance) || null == (e = e.timing) ? void 0 : e.domComplete, g = s.some(e => {
                    var t = rt((null == e ? void 0 : e.media) || [], 1)[0];
                    return null == t ? void 0 : t.enabled
                }), h = s.some(e => e.type === eq.Ij), w = yield(0, eH.Lt)(tn.m$), O = yield(0, eH.Lt)(Z.pS), j = null == O ? void 0 : O.filter(e => "default_tys" !== e.ref), P = null == j ? void 0 : j.filter(e => !e.autoRedirect);
                return {
                    distribution_channel: ty,
                    has_been_enriched: w,
                    has_response_enrichment: yield rf(), has_multiple_thankyou_screens: (null == P ? void 0 : P.length) > 0, is_first_conversation: r, landing_token: n, local_time_offset: rc(), local_timezone: ru() || null, navigation_type: o, platform: tw(), prefilled_data: l, respondent_method: "web_renderer", response_id: i, time_to_submit: m ? Math.round((v - m) / 1e3) : -1, visit_number_current_cycle: c, visit_number: a, typeform_branding: u, has_video_question: g, has_answer_using_video: p, has_answer_using_audio: y, has_video_answer_enabled: d, has_audio_answer_enabled: f, has_duplicate_prevention: !!b, has_inline_group: h
                }
            }

            function ry() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                return function*() {
                    yield(0, eH.s)(A.iU), yield(0, eH.T1)(rb);
                    var r = yield(0, eH.T1)(s.Ix, s.u2.expanding(10));
                    if (yield(0, eH.Zy)(rv, r, e), yield(0, eH.Zy)(tX, r, rl), (yield(0, eH.Lt)(eF.Rn)) && (yield(0, eH.Zy)(rz, r, e)), yield(0, eH.Lt)(eK.Rb)) {
                        var n = yield(0, eH.T1)(rk);
                        yield(0, eH.yJ)(r, {
                            data: n,
                            options: {
                                integrations: {
                                    All: !1,
                                    "S3 Datalake": !0,
                                    Natero: !0,
                                    "Google Analytics": !0,
                                    "Facebook Pixel": !0,
                                    AdWords: !0
                                }
                            }
                        });
                        return
                    }
                    var i = yield(0, eH.T1)(rA);
                    if (yield(0, eH.yJ)(r, {
                            data: ri({}, i)
                        }), yield(0, eH.Zy)(function*() {
                            yield(0, eH.T1)(t0, function*(e) {
                                var t = yield(0, eH.Lt)(e$.eM);
                                yield(0, eH.T1)(e9, t);
                                var n = yield(0, eH.T1)(e1.QB, t);
                                yield(0, eH.yJ)((0, eJ.w9)(n));
                                var i = yield(0, eH.T1)(rP, e);
                                yield(0, eH.yJ)(r, {
                                    data: i
                                })
                            })
                        }), yield(0, eH.Zy)(function*() {
                            yield(0, eH.jP)(A.pu, function*(e) {
                                var t = yield rp(), n = yield(0, eH.T1)(tE, "partial_conversation_submitted", t), i = yield(0, eH.T1)(tO), o = (yield(0, eH.Lt)(e$.jJ)) ? {
                                    online: window.navigator.onLine
                                } : {}, l = e.payload.milestone.fieldRef, a = yield(0, eH.Lt)(Z.GH, l), c = yield tj(l), u = c.block_pos, s = ro(c, re);
                                yield(0, eH.yJ)(r, {
                                    data: ri(ri(ri(ri({}, n), i), o), {}, {
                                        block_ref: l,
                                        block_type: a.type,
                                        block_index: u
                                    }, s)
                                })
                            })
                        }), yield(0, eH.Zy)(function*() {
                            yield(0, eH.jP)(A.ZF, function*() {
                                var e = yield(0, eH.T1)(rT);
                                yield(0, eH.yJ)(r, {
                                    data: e
                                })
                            })
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                yield(0, eH.s)(A.ZF);
                                var e = yield(0, eH.Lt)(J.Aj), t = yield(0, eH.Lt)(J.Zc);
                                if (e || t) {
                                    var n = yield(0, eH.Lt)(tZ.CQ);
                                    if (n) {
                                        var i = yield(0, eH.Lt)(Z.qr), o = yield(0, eH.Lt)(Z.j7), l = yield(0, eH.Lt)(Z.k), a = yield(0, eH.Lt)(tK.n, tY.VD), c = yield(0, eH.T1)(tE, tW.CJ, {
                                            has_welcome_screen: i,
                                            payload: {
                                                form_length: o,
                                                has_logic_jumps: l
                                            },
                                            test_id: tY.VD,
                                            variant_label: a
                                        });
                                        yield(0, eH.yJ)(r, {
                                            data: c
                                        })
                                    }
                                    var u = yield(0, eH.T1)(tE, tf, {
                                        feature: "multiformat_submission",
                                        payload: {
                                            has_pending_uploads: n,
                                            device: (0, eG.CI)() ? "mobile" : "desktop"
                                        }
                                    });
                                    for (yield(0, eH.yJ)(r, {
                                            data: u
                                        });;)
                                        if (yield(0, eH.s)(N.R5), !(yield(0, eH.Lt)(tZ.CQ))) {
                                            var s = yield(0, eH.T1)(tE, tf, {
                                                feature: "multiformat_answers_uploaded_after_submission"
                                            });
                                            yield(0, eH.yJ)(r, {
                                                data: s
                                            });
                                            break
                                        }
                                }
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (var e;;) {
                                var t = yield(0, eH.s)(A.oV), n = yield(0, eH.Lt)(Z.DZ), i = t.payload.blockRef;
                                if (t.payload.show && i === n) {
                                    if (e === i) continue;
                                    e = i;
                                    var o = yield(0, eH.T1)(r_, "block_footer_visible");
                                    o && (yield(0, eH.yJ)(r, {
                                        data: o,
                                        options: rl
                                    }))
                                }
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;)
                                if ((yield(0, eH.s)(A.dv)).payload.source === eZ.c) {
                                    var e = yield(0, eH.T1)(r_, "block_footer_clicked");
                                    e && (yield(0, eH.yJ)(r, {
                                        data: e,
                                        options: rl
                                    }))
                                }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                yield(0, eH.s)(A.mu);
                                var e = {
                                        invalid_answers_amount: yield(0, eH.Lt)(J.T3)
                                    },
                                    t = yield(0, eH.T1)(tE, "review_mode_entered", e);
                                yield(0, eH.yJ)(r, {
                                    data: t,
                                    options: rl
                                })
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                var e = (yield(0, eH.s)([A.BU])).payload.ref;
                                if (yield(0, eH.Lt)(e$.nC, e)) {
                                    var t = yield(0, eH.Lt)(Z.GH, e), n = {
                                        block_ref: e,
                                        block_type: t ? t.type : null,
                                        event: ts,
                                        label: "complete_response"
                                    }, i = yield(0, eH.T1)(tE, ts, n);
                                    yield(0, eH.yJ)(r, {
                                        data: i,
                                        options: rl
                                    })
                                }
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                var e = (yield(0, eH.s)([A.bU])).payload.ref,
                                    t = yield(0, eH.Lt)(Z.GH, e), n = {
                                        block_ref: e,
                                        block_type: t ? t.type : null,
                                        event: ts,
                                        label: "partial_response"
                                    }, i = yield(0, eH.T1)(tE, ts, n);
                                yield(0, eH.yJ)(r, {
                                    data: i,
                                    options: rl
                                })
                            }
                        }), yield(0, eH.Zy)(function*() {
                            var e, n, i, o = yield(0, eH.Lt)(Z.rR), l = !!o, a = yield(0, eH.Lt)(Z.DZ);
                            if (e = (yield(0, eH.Lt)(eK.pk))(a), !(yield(0, eH.Lt)(tM.u))) {
                                if (l) {
                                    n = yield(0, eH.T1)(rg, o, ti);
                                    var c = rt((yield(0, eH.Lt)(e_.Us, o)) || [], 1)[0];
                                    n.question_type = ra(c)
                                } else {
                                    var u = yield(0, eH.Lt)(J.VM, a), s = yield(0, eH.T1)(t6, a), d = yield(0, eH.T1)(rw, a, ti, ri({
                                        prefilled_block: u,
                                        response_prefilled: e.responseFilled || null
                                    }, s)), f = yield(0, eH.T1)(rh, a), p = rt((yield(0, eH.Lt)(e_.Us, a)) || [], 1)[0];
                                    n = ri(ri(ri({}, d), f), {}, {
                                        question_type: ra(p)
                                    })
                                }
                                yield(0, eH.yJ)(r, {
                                    data: n,
                                    options: rl
                                });
                                for (var y = function*() {
                                        var n = (yield(0, eH.s)(A.Sl)).payload,
                                            o = yield(0, eH.Lt)(J.VM, n.ref), l = yield(0, eH.T1)(t6, n.ref), a = rt((yield(0, eH.Lt)(e_.Us, n.ref)) || [], 1)[0];
                                        yield(0, eH.cb)(), e = (yield(0, eH.Lt)(eK.pk))(n.ref);
                                        var c = yield(0, eH.T1)(rw, n.ref, ti, ri({
                                            navigation_type: n.navigationType,
                                            prefilled_block: o,
                                            question_type: ra(a),
                                            response_prefilled: e.responseFilled || null
                                        }, l));
                                        if (!c) return 1;
                                        var u = yield(0, eH.T1)(rh, n.ref), s = ri(ri({}, c), u);
                                        i && (yield(0, eH.ZT)(i)), i = yield(0, eH.Zy)(function*() {
                                            yield(0, eH.cb)(t), yield(0, eH.yJ)(r, {
                                                data: s,
                                                options: rl
                                            })
                                        })
                                    };;)
                                    if (yield* y()) continue
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (var e, n = function*() {
                                    var n, i, o, l, a, c = yield(0, eH.s)([A.Sl, A.xl]), u = c.type, s = c.payload, d = yield(0, eH.Lt)(Z.DZ), f = yield(0, eH.Lt)(e$.LU);
                                    if (u === A.Sl && d === f) return 0;
                                    var p = u === A.xl ? d : f,
                                        y = yield(0, eH.Lt)(Z.lh, p), b = yield(0, eH.Lt)(Z.pe, p), v = (0, eQ.YK)(b), m = !!(null != v && null != (n = v[0]) && n.video_id), g = !!(null != v && null != (i = v[0]) && i.text), h = !!(null != v && null != (o = v[0]) && o.audio_id), w = yield(0, eH.Lt)(J.un, p), O = yield(0, eH.Lt)(eK.pk), j = yield(0, eH.Lt)(Z.GH, p), P = O(p), E = rt((yield(0, eH.Lt)(e_.Us, p)) || [], 1)[0], T = !!(null != E && E.enabled), _ = yield(0, eH.Lt)(tD.dJ), k = yield(0, eH.T1)(t9, p), S = yield(0, eH.T1)(rw, p, "block_answered", ri(ri({
                                            changed_prefilled_value: w,
                                            answered: y,
                                            navigation_type: s.navigationType,
                                            response_filled: P.responseFilled || null,
                                            question_type: ra(E),
                                            percentage_media_played: T ? _ : null
                                        }, m || h || g ? {
                                            answer_type: m ? "video" : h ? "audio" : "text",
                                            answer_options: null != (l = null == j || null == (a = j.properties) ? void 0 : a.allowedAnswerTypes) ? l : tJ.Q1
                                        } : {}), k));
                                    if (!S) return 0;
                                    var x = yield(0, eH.T1)(rO, p), C = ri(ri({}, S), x);
                                    e && (yield(0, eH.ZT)(e)), e = yield(0, eH.Zy)(function*() {
                                        yield(0, eH.cb)(t), yield(0, eH.yJ)(r, {
                                            data: C,
                                            options: rl
                                        })
                                    })
                                };;)
                                if (0 === (yield* n())) continue
                        }), yield(0, eH.Zy)(tC, r), yield(0, eH.Zy)(tI, r), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                var e = (yield(0, eH.s)("media/setMediaCollapsed")).payload,
                                    t = e.itemType,
                                    n = e.ref,
                                    i = yield(0, eH.T1)(rx, {
                                        itemType: t,
                                        ref: n
                                    });
                                yield(0, eH.yJ)(r, {
                                    data: i
                                })
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                yield(0, eH.s)(A.F4);
                                var e = yield(0, eH.Lt)(Z.DZ), t = yield(0, eH.Lt)(Z.GH, e);
                                if (!t_(t)) return;
                                var n = yield(0, eH.T1)(tE, tp, {
                                    feature: "video_delay_interaction",
                                    block_type: t.type,
                                    block_ref: e
                                });
                                yield(0, eH.yJ)(r, {
                                    data: n
                                })
                            }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                var e = (yield(0, eH.s)(A.OS)).payload.label,
                                    t = yield(0, eH.T1)(rS, e);
                                yield(0, eH.yJ)(r, {
                                    data: t
                                })
                            }
                        }), yield(0, eH.Lt)(tM.u)) {
                        var o = yield(0, eH.T1)(tE, ta, {
                            message: "duplicate_submission_warning"
                        });
                        yield(0, eH.yJ)(r, {
                            data: o
                        })
                    }
                    yield(0, eH.Zy)(function*() {
                        for (;;) {
                            var e = (yield(0, eH.s)(A.lc)).payload,
                                t = yield(0, eH.Lt)(eT.fF), n = e.ref === (null == t ? void 0 : t.ref);
                            if (t && n && (null == t || !t.autoRedirect)) {
                                var i = rs(t.showButton, (yield(0, eH.Lt)(e$.ve))),
                                    o = yield(0, eH.T1)(rj, e.ref, {
                                        typeform_branding: i
                                    }), l = yield(0, eH.T1)(tE, ti, o), a = ri(ri({}, o), l);
                                yield(0, eH.yJ)(r, {
                                    data: a
                                })
                            }
                        }
                    }), yield(0, eH.Zy)(function*() {
                        for (;;) {
                            var e = (yield(0, eH.s)(A.Bj)).payload,
                                t = e.label,
                                n = e.navigationType,
                                i = e.buttonText,
                                o = yield(0, eH.T1)(rC, t, n, i);
                            yield(0, eH.yJ)(r, {
                                data: o
                            })
                        }
                    }), yield(0, eH.Zy)(function*() {
                        for (;;) {
                            var e = (yield(0, eH.s)(A.zV)).payload.label,
                                t = yield(0, eH.T1)(rL, e);
                            yield(0, eH.yJ)(r, {
                                data: t
                            })
                        }
                    });
                    var l = yield(0, eH.Lt)(e$.be), a = yield(0, eH.Lt)(eS.aW);
                    if (l && a === x.CX.SUCCESS) {
                        var c = yield(0, eH.T1)(rD);
                        yield(0, eH.yJ)(r, {
                            data: c
                        })
                    }
                    if (l && a === x.CX.ERROR) {
                        var u = yield(0, eH.T1)(rM);
                        yield(0, eH.yJ)(r, {
                            data: u
                        })
                    }
                    if (l && (yield(0, eH.Zy)(function*() {
                            for (;;) {
                                var e = (yield(0, eH.s)(S.Lx)).payload;
                                if (e === x.CX.SUCCESS) {
                                    var t = yield(0, eH.T1)(rD);
                                    yield(0, eH.yJ)(r, {
                                        data: t
                                    })
                                }
                                if (e === x.CX.ERROR) {
                                    var n = yield(0, eH.T1)(rM);
                                    yield(0, eH.yJ)(r, {
                                        data: n
                                    })
                                }
                            }
                        })), yield(0, eH.Lt)(eS.aZ)) {
                        var d = yield(0, eH.T1)(tE, td, {
                            message: "translation_languages_feature_exposed"
                        });
                        yield(0, eH.yJ)(r, {
                            data: d
                        }), yield(0, eH.Zy)(function*() {
                            for (;;)
                                if ((yield(0, eH.s)(S.Lx)).payload === x.CX.ERROR) {
                                    var e = yield(0, eH.T1)(tE, td, {
                                        message: "translation_label_error"
                                    });
                                    yield(0, eH.yJ)(r, {
                                        data: e
                                    })
                                }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;)
                                if ((yield(0, eH.s)(S.Lx)).payload === x.CX.SUCCESS) {
                                    var e = yield(0, eH.Lt)(eS.s7), t = yield(0, eH.T1)(rR, e);
                                    yield(0, eH.yJ)(r, {
                                        data: t
                                    })
                                }
                        }), yield(0, eH.Zy)(function*() {
                            for (;;) {
                                var e = (yield(0, eH.s)(S.zW)).payload;
                                if ((null == e ? void 0 : e.status) === x.E3.DISMISSED) {
                                    var t = yield(0, eH.T1)(rI, null == e ? void 0 : e.reason);
                                    yield(0, eH.yJ)(r, {
                                        data: t
                                    })
                                }
                            }
                        })
                    }
                    yield(0, eH.Zy)(tH, r), yield(0, eH.Zy)(tq, r)
                }()
            }

            function* rb() {
                var e = yield(0, eH.Lt)(eK.RT), t = yield(0, eH.T1)(tP), r = [];
                if (e) {
                    var n = yield(0, eH.Lt)(eK.Po), i = yield(0, eH.Lt)(eK.Gv), o = {
                        name: eV.Ql.RUDDERSTACK,
                        config: {
                            key: e,
                            dataPlaneUrl: n,
                            options: {
                                configUrl: i
                            }
                        }
                    };
                    r.push(o)
                }
                r.length && (yield(0, eH.T1)(eV.Ay.initRenderer, r, t))
            }

            function* rv(e, t) {
                for (;;) {
                    var r = [(yield(0, eH.s)(e)), ...yield(0, eH.bX)(e)];
                    yield(0, eH.T1)(e6, r);
                    var n = yield(0, eH.Lt)(e0.OH), i = yield(0, eH.Lt)(e0.zc);
                    n || i || (yield(0, eH.O4)({
                        delay: (0, eH.cb)(t),
                        cancel: (0, eH.s)(A.xl)
                    }))
                }
            }

            function* rm(e, t) {
                var r = yield(0, eH.Lt)(eF.UL), n = {}, i = {};
                return r ? (t.landing_token && (n = yield(0, eH.Lt)(eF.sk)), y.x_.includes(e) && (i = yield(0, eH.Lt)(eF.OD)), ri(ri({}, n), i)) : {}
            }

            function* rg(e, t, r) {
                var n, i = yield(0, eH.Lt)(Z.Dv);
                if (!i) return null;
                var o = yield(0, eH.Lt)(e0.lX), l = tN(), a = (0, eU.FK)(window.innerWidth), c = (0, te.A)(a, i.layout), u = ri({
                    attachment_type: (null == (n = i.attachment) ? void 0 : n.type) || null,
                    block_index: 0,
                    block_ref: e,
                    block_type: eq.ym,
                    landing_token: o,
                    layout_type: (null == c ? void 0 : c.type) || m.$1.STACK,
                    question_intent: null,
                    question_required: null,
                    response_id: null,
                    prefilled_block: null,
                    response_prefilled: null,
                    time_since_page_load: l
                }, r);
                return yield(0, eH.T1)(tE, t, u)
            }

            function* rh(e) {
                var t = (yield(0, eH.Lt)(Z.Tr)).find(t => t.ref === e);
                if (!t) return null;
                var r = t.properties,
                    n = {};
                if ((0, e_.BS)(t)) {
                    var i = r.fields,
                        o = i.filter(e => e.validations.required).map(e => e.subfieldKey).join(","),
                        l = i.filter(e => e.validations.required).map(e => e.ref).join(",");
                    n.fields_featured = i.map(e => e.subfieldKey).join(","), n.fields_featured_refs = i.map(e => e.ref).join(","), o && (n.fields_required = o), l && (n.fields_required_refs = l)
                }
                return n
            }

            function* rw(e, t, r) {
                var n, i, o, l = yield(0, eH.Lt)(Z.Tr), a = l.find(t => t.ref === e), c = yield(0, eH.Lt)(Z.Ti);
                if (!a || !c) return null;
                var u = yield(0, eH.Lt)(e0.lX), s = yield(0, eH.Lt)(e0.TL), d = yield(0, eH.Lt)(e_.pK, e), f = yield(0, eH.Lt)(eW.W, e), p = l.findIndex(t => t.ref === e);
                (yield(0, eH.Lt)(Z.Dv)) && p++;
                var y = tN(),
                    b = (0, eU.FK)(window.innerWidth),
                    v = (0, te.A)(b, a.layout),
                    g = c.find(t => t.ref === e),
                    h = (null == g ? void 0 : g.type) === eq.Tm,
                    w = (null == g ? void 0 : g.type) === eq.KY,
                    O = l && l.find(e => e.type === eq.Tm),
                    j = (null == O ? void 0 : O.ref) === e,
                    P = ri(ri(ri({
                        attachment_type: (null == (n = a.attachment) ? void 0 : n.type) || null,
                        block_index: p,
                        block_ref: e,
                        block_type: a.type,
                        landing_token: u,
                        layout_type: (null == v ? void 0 : v.type) || m.$1.STACK,
                        question_intent: f || null,
                        question_required: d,
                        response_id: s,
                        time_since_page_load: y
                    }, r), h && {
                        used_for_enrichment: j && (yield rf())
                    }), w && {
                        answer_options: null != (i = null == a || null == (o = a.properties) ? void 0 : o.allowedAnswerTypes) ? i : tJ.Q1
                    }),
                    E = yield(0, eH.T1)(tE, t, P), A = yield(0, eH.T1)(rm, t, E);
                return ri(ri({}, E), A)
            }

            function* rO(e) {
                var t = yield(0, eH.Lt)(Z.GH, e), r = t.properties, n = {};
                if ((0, e_.BS)(t)) {
                    var i = yield(0, eH.Lt)(Z.pe, e), o = rt((0, eQ.YK)(i), 1)[0];
                    if (o) {
                        var l = [],
                            a = [];
                        r.fields.forEach(e => {
                            var t = e.type,
                                r = o[e.ref];
                            (0, eQ.VB)(t, r) || (a.push(e.ref), l.push(e.subfieldKey))
                        }), n = {
                            fields_filled: l.join(","),
                            fields_filled_refs: a.join(","),
                            answered: !!l.length
                        }
                    }
                }
                return n
            }

            function* rj(e, t) {
                var r, n = yield(0, eH.Lt)(eT.fF), i = (yield(0, eH.Lt)(Z.Tr)).length;
                (yield(0, eH.Lt)(Z.Dv)) && i++;
                var o = yield(0, eH.Lt)(e0.lX), l = yield(0, eH.Lt)(e0.TL), a = tN(), c = e === eT.pi ? "thankyou_screen" : "ending", u = (0, eU.FK)(window.innerWidth), s = (0, te.A)(u, n.layout);
                return ri({
                    attachment_type: (null == (r = n.attachment) ? void 0 : r.type) || null,
                    block_index: i,
                    block_ref: e,
                    block_type: c,
                    landing_token: o,
                    layout_type: (null == s ? void 0 : s.type) || m.$1.STACK,
                    response_id: l,
                    time_since_page_load: a
                }, t)
            }

            function rP(e) {
                var t = e.navigationType;
                return function*() {
                    var e = yield(0, eH.Lt)(e$.eM), r = yield(0, eH.Lt)(eK.i0), n = yield(0, eH.Lt)(J.sV), i = yield(0, eH.T1)(e1.l5, e), o = yield(0, eH.Lt)(eK.Iq), l = yield(0, eH.Lt)(Z.Dv), a = yield(0, eH.Lt)(e$.ve), c = eq.ym;
                    if (!l) {
                        var u = yield(0, eH.Lt)(Z.lX, 0);
                        c = null == u ? void 0 : u.type
                    }
                    var s = {
                            distribution_channel: ty,
                            has_partial_responses: !!(yield(0, eH.Lt)(tt.Dd)),
                            has_response_enrichment: yield rf(), height: window.innerHeight, is_first_conversation: r, local_time_offset: rc(), local_timezone: ru() || null, navigation_type: t, platform: tw(), prefilled_data: n, renderer_version: tb, respondent_method: "web_renderer", visit_number: i, visit_number_current_cycle: o, width: window.innerWidth, block_type: c, typeform_branding: a
                        },
                        d = yield(0, eH.T1)(tE, tu, s), f = yield(0, eH.T1)(tO), p = yield(0, eH.T1)(rm, tu, d);
                    return ri(ri(ri({}, d), f), p)
                }()
            }

            function* rE() {
                var e = yield(0, eH.Lt)(e$.eM), t = yield(0, eH.T1)(e1.p5, e);
                return yield(0, eH.yJ)((0, eJ.w9)(t)), t
            }

            function* rA() {
                var e = yield(0, eH.Lt)(eX.em), t = yield(0, eH.Lt)(e$.vd), r = yield(0, eH.Lt)(e$.Jm), n = yield(0, eH.Lt)(eY.ty), i = yield(0, eH.Lt)(J.sV), o = yield(0, eH.Lt)(e$.eM), l = yield(0, eH.T1)(rE, o), a = yield(0, eH.T1)(e1.l5, o), c = yield(0, eH.Lt)(e$.ve), u = yield(0, eH.Lt)(Z.qr), s = yield(0, eH.Lt)(e$.r6), d = yield(0, eH.Lt)(tM.C), f = (yield(0, eH.Lt)(Z.Ti)).some(e => {
                    var t = rt((null == e ? void 0 : e.media) || [], 1)[0];
                    return null == t ? void 0 : t.enabled
                }), p = yield(0, eH.Lt)(e$.h$), y = yield(0, eH.Lt)(e$.ID), b = yield(0, eH.Lt)(tt.Dd), v = !!b, m = ri(ri({
                    distribution_channel: ty,
                    embedding_mode: null,
                    form_status: n ? "closed" : "opened",
                    has_partial_responses: v,
                    has_response_enrichment: yield rf(), local_time_offset: rc(), local_timezone: ru() || null, platform: tw(), prefilled_data: i, renderer_version: tb, respondent_method: "web_renderer", show_navigation_arrows: !r, show_number_of_submissions: s, typeform_branding: !u && c, visit_number_current_cycle: l, visit_number: a, has_video_question: f, has_video_answer_enabled: p, has_audio_answer_enabled: y
                }, v && {
                    partial_responses_milestone_setup: yield rd(b)
                }), d && {
                    duplicate_prevention_type: d.type,
                    duplicate_prevention_shown: yield(0, eH.Lt)(tM.u)
                });
                t && e && (m = ri(ri({}, m), {}, {
                    estimated_time_to_complete: e
                }));
                var g = yield(0, eH.T1)(tE, tc, m), h = yield(0, eH.T1)(tO);
                g = ri(ri(ri({}, g), h), e7.Ay.getEventsToBeTracked());
                var w = yield(0, eH.T1)(rm, tc, g);
                return ri(ri({}, g), w)
            }

            function* rT() {
                var e = yield rp(), t = yield(0, eH.T1)(tE, to, e), r = (yield(0, eH.Lt)(e$.jJ)) ? {
                    online: window.navigator.onLine
                } : {}, n = yield(0, eH.T1)(tO), i = yield(0, eH.Lt)(tt.Dd), o = !!i;
                t = ri(ri(ri(ri({
                    completed_from_partial_response: yield(0, eH.Lt)(tt.SL), has_partial_responses: o
                }, o && {
                    partial_responses_milestone_setup: yield rd(i)
                }), t), n), r);
                var l = yield(0, eH.T1)(rm, to, t);
                return ri(ri({}, t), l)
            }

            function* r_(e) {
                var t = yield(0, eH.Lt)(eK.i0), r = {
                    distribution_channel: ty,
                    height: window.innerHeight,
                    is_first_conversation: t,
                    local_time_offset: rc(),
                    local_timezone: ru() || null,
                    platform: tw(),
                    renderer_version: tb,
                    respondent_method: "web_renderer_one_question_per_screen",
                    width: window.innerWidth
                }, n = yield(0, eH.T1)(tE, e, r), i = yield(0, eH.T1)(tO);
                return ri(ri({}, n), i)
            }

            function* rk() {
                var e = yield(0, eH.Lt)(eK.af);
                return {
                    event: "typeform_previewed",
                    form_uid: yield(0, eH.Lt)(e$.eM), account_uid: e.accountUid
                }
            }

            function* rS(e) {
                var t = yield(0, eH.T1)(tA, {
                    item: "viral_branding",
                    label: e
                }), r = yield(0, eH.T1)(tE, tl, t);
                return (yield(0, eH.Lt)(eF.Rn)) && (r.form_uid = yield(0, eH.Lt)(eF.RY), r.form_visitor_id = yield(0, eH.T1)(e1.ct, r.form_uid)), ri({}, r)
            }

            function rx(e) {
                var t = e.itemType,
                    r = e.ref;
                return function*() {
                    var e = yield(0, eH.Lt)(Z.Tr), n = yield(0, eH.Lt)(Z.GH, r), i = e.findIndex(e => e.ref === r), o = t_(n), l = yield(0, eH.T1)(tA, {
                        item: "reply_video_question",
                        item_type: t,
                        block_index: i,
                        block_ref: r,
                        block_type: n.type,
                        video_delay_interaction: o ? "on" : "off"
                    });
                    return ri({}, (yield(0, eH.T1)(tE, tl, l)))
                }()
            }

            function* rC(e, t, r) {
                var n = yield(0, eH.T1)(tA, {
                    item: "endscreen_cta",
                    label: e,
                    value: r,
                    navigation_type: t
                });
                return yield(0, eH.T1)(tE, tl, n)
            }

            function* rL(e) {
                var t = yield(0, eH.T1)(tA, {
                    item: "thankyou_screen_social",
                    label: e
                });
                return yield(0, eH.T1)(tE, tl, t)
            }

            function* rR(e) {
                return yield(0, eH.T1)(tE, tf, {
                    feature: "translation_languages",
                    label: e
                })
            }

            function* rI(e) {
                return yield(0, eH.T1)(tE, tf, {
                    feature: "translation_languages_dismiss_toast",
                    label: e
                })
            }

            function* rD() {
                var e = yield(0, eH.Lt)(eS.s7);
                return yield(0, eH.T1)(tE, tp, {
                    feature: "auto_translate",
                    label: e
                })
            }

            function* rM() {
                return yield(0, eH.T1)(tE, ta, {
                    message: "auto_translate_system_error"
                })
            }

            function rN(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rN(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rN(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function* rH(e) {
                return yield(0, eH.T1)(rP, e)
            }

            function* rF() {
                var e = v()(h);
                yield(0, eH.s)(A.ZF), yield(0, eH.yJ)({
                    type: y.W7
                }), yield(0, eH.yJ)((0, p.Yf)()), yield(0, eH.yJ)({
                    type: A.Sl,
                    payload: {
                        ref: e.fields[0].ref
                    }
                }), yield(0, eH.T1)(ez.j)
            }

            function* rz(e) {
                yield(0, eH.s)(p.Yf.type);
                var t = yield(0, eH.T1)(rA);
                yield(0, eH.yJ)(e, {
                    data: rB({}, t)
                });
                var r = yield(0, eH.T1)(t0, rH);
                yield(0, eH.yJ)(e, {
                    data: rB({}, r)
                })
            }
            var rV = r(88753),
                rG = r(16828),
                rU = r(34439),
                rq = r(88976);

            function* rJ(e) {
                var t = yield(0, eH.Lt)(e$.mF), r = yield(0, eH.Lt)(rq.fl);
                if (!(yield(0, eH.Lt)(e$.jq)) && t) {
                    if ((0, rV.Jk)({
                            groups: e.type === P.r2.type ? r : rU.h_,
                            timestamp: new Date
                        }), (0, rV.Xr)() && (yield(0, eH.yJ)(eJ.g7)), !(0, rV.BN)()) {
                        yield(0, eH.T1)(rG.V5), yield(0, eH.T1)(rG.IQ);
                        return
                    }
                    yield(0, eH.yJ)(eJ.fz)
                }
            }

            function* rZ() {
                var e = yield(0, eH.Lt)(e$.mF);
                !(yield(0, eH.Lt)(e$.jq)) && e && ((0, rV.Jk)({
                    groups: [],
                    timestamp: new Date
                }), yield(0, eH.T1)(rG.V5), yield(0, eH.T1)(rG.IQ))
            }

            function* rY() {
                if (!(yield(0, eH.Lt)(e$.jq))) {
                    var e = yield(0, eH.Lt)(e$.mF), t = (0, rV.WU)();
                    if (!e && !t) return void(0, rV.Jk)({
                        groups: [...rU.h_],
                        timestamp: new Date,
                        implicitConsent: !0
                    });
                    if (e && t) {
                        if (!(0, rV.qM)()) return;
                        (0, rV.q1)()
                    }
                }
            }

            function* rW() {
                yield(0, eH.T1)(rY), yield(0, eH.p8)([P.ni.type, P.r2.type], rJ), yield(0, eH.p8)([P.S4.type], rZ)
            }
            var rK = r(79783),
                r$ = r(4656),
                rQ = r(83340),
                rX = r(8050),
                r0 = r(25541);

            function r1(e) {
                var t = e.payload;
                return function*() {
                    var e = yield(0, eH.Lt)(Z.GH, t.ref);
                    e && (0, r0.YI)(e.type) && ((yield(0, eH.Lt)(e0.lX)) || (yield(0, eH.T1)(ez.j)))
                }()
            }

            function* r2() {
                yield(0, eH.jP)(A.Sl, r1)
            }
            var r4 = r(75399),
                r3 = r(92826),
                r5 = r(89841),
                r8 = r(77376),
                r9 = r(45448),
                r6 = r(11640);

            function r7(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }
            var ne = "".concat(r9.K.apiHost, "/").concat(r9.K.endpoints.forms),
                nt = null,
                nr = (o = function*(e) {
                    var t = e.formId,
                        n = e.landingId,
                        i = e.landingAt,
                        o = e.values,
                        l = e.featureFlags,
                        a = e.respondentValidationPayload,
                        c = e.enrichmentMetadata,
                        u = e.stageBlockRef,
                        s = e.taxonomyScopes,
                        d = "".concat(ne).concat(t, "/").concat(r9.K.endpoints.partialSubmissions),
                        f = (yield r.e(2227).then(r.bind(r, 48353))).default,
                        p = yield f({
                            formId: t,
                            landingAt: i,
                            landingId: n,
                            featureFlags: l,
                            values: o,
                            respondentValidationPayload: a,
                            enrichmentMetadata: c,
                            stageBlockRef: u,
                            taxonomyScopes: s
                        });
                    if (p.answers) {
                        var y = JSON.stringify(p);
                        if (y !== nt) return nt = y, (0, r6.bE)(d, p)
                    }
                }, l = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, n) {
                        var i = o.apply(e, t);

                        function l(e) {
                            r7(i, r, n, l, a, "next", e)
                        }

                        function a(e) {
                            r7(i, r, n, l, a, "throw", e)
                        }
                        l(void 0)
                    })
                }, function(e) {
                    return l.apply(this, arguments)
                });

            function* nn() {
                yield(0, eH.p8)(A.pu, ni)
            }

            function* ni(e) {
                (yield(0, eH.Lt)(e0._7)) || (yield(0, eH.s)(A.eb));
                var t = null == e ? void 0 : e.payload.milestone,
                    r = yield(0, eH.Lt)(tt.BM, t), n = yield(0, eH.Lt)(e$.eM), i = yield(0, eH.Lt)(r3.r), o = yield(0, eH.Lt)(e0.lX), l = yield(0, eH.Lt)(e0.D6), a = yield(0, eH.T1)(r$.Y7), c = yield(0, eH.Lt)(r5.T), u = yield(0, eH.T1)(r8.R);
                return yield(0, eH.T1)(nr, {
                    formId: n,
                    landingId: o,
                    landingAt: l,
                    values: r,
                    featureFlags: i,
                    respondentValidationPayload: a,
                    enrichmentMetadata: u,
                    stageBlockRef: null == t ? void 0 : t.fieldRef,
                    taxonomyScopes: c
                })
            }
            var no = r(54478);

            function nl(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function na(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nl(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nl(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function nc(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }
            var nu = "".concat(r9.K.apiHost, "/").concat(r9.K.endpoints.forms),
                ns = null,
                nd = (a = function*(e) {
                    var t = e.formId,
                        n = e.landingId,
                        i = e.landingAt,
                        o = e.values,
                        l = e.featureFlags,
                        a = e.respondentValidationPayload,
                        c = e.enrichmentMetadata,
                        u = e.stageBlockRef,
                        s = e.taxonomyScopes,
                        d = e.submissionId,
                        f = e.lastStagedAt,
                        p = "".concat(nu).concat(t, "/").concat(r9.K.endpoints.partialSubmissions),
                        y = (yield r.e(2227).then(r.bind(r, 48353))).default,
                        b = yield y({
                            formId: t,
                            landingAt: i,
                            landingId: n,
                            featureFlags: l,
                            values: o,
                            respondentValidationPayload: a,
                            enrichmentMetadata: c,
                            stageBlockRef: u,
                            taxonomyScopes: s
                        });
                    if (b.answers) {
                        var v = na(na(na({}, b), d ? {
                                submission_id: d
                            } : null), f ? {
                                last_staged_at: f
                            } : null),
                            m = JSON.stringify(v);
                        if (m !== ns) return ns = m, (0, r6.bE)(p, v)
                    }
                }, c = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, n) {
                        var i = a.apply(e, t);

                        function o(e) {
                            nc(i, r, n, o, l, "next", e)
                        }

                        function l(e) {
                            nc(i, r, n, o, l, "throw", e)
                        }
                        o(void 0)
                    })
                }, function(e) {
                    return c.apply(this, arguments)
                });

            function nf(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function np(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nf(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nf(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function* ny() {
                yield(0, eH.p8)(A.Sl, nb)
            }

            function* nb() {
                if (yield(0, eH.Lt)(e$.Jq)) {
                    (yield(0, eH.Lt)(e0._7)) || (yield(0, eH.s)(A.eb));
                    var e = yield(0, eH.Lt)(e0.oR), t = yield(0, eH.Lt)(e$.eM), r = yield(0, eH.Lt)(r3.r), n = yield(0, eH.Lt)(e0.lX), i = yield(0, eH.Lt)(e0.D6), o = yield(0, eH.Lt)(no.mr), l = yield(0, eH.Lt)(no.W0), a = yield(0, eH.T1)(r$.Y7), c = yield(0, eH.Lt)(r5.T), u = yield(0, eH.T1)(r8.R), s = yield(0, eH.Lt)(Z.DZ);
                    try {
                        var d = yield(0, eH.T1)(nd, {
                            formId: t,
                            landingId: n,
                            landingAt: i,
                            values: e,
                            featureFlags: r,
                            respondentValidationPayload: a,
                            enrichmentMetadata: u,
                            stageBlockRef: s,
                            taxonomyScopes: c,
                            submissionId: o,
                            lastStagedAt: l
                        });
                        d && (yield(0, eH.yJ)({
                            type: A.TW,
                            payload: np(np(np(np({}, void 0 !== d.submission_id && {
                                submissionId: d.submission_id
                            }), void 0 !== d.response_id && {
                                responseId: d.response_id
                            }), void 0 !== d.signature && {
                                landingId: d.signature
                            }), void 0 !== d.staged_at && {
                                lastStagedAt: d.staged_at
                            })
                        }))
                    } catch (e) {
                        ((null == e ? void 0 : e.code) === "SESSION_EXPIRED" || (null == e ? void 0 : e.status) === 409) && (yield(0, eH.yJ)({
                            type: A.Iq
                        }))
                    }
                }
            }
            var nv = r(50592),
                nm = r(20838);

            function* ng() {
                var e, t, r = yield(0, eH.Lt)(Z.DZ);
                if (!r) return;
                var n = yield(0, eH.Lt)(e => (0, nm.EK)(e, r));
                if (null !== n) {
                    var i = yield(0, eH.Lt)(e => (0, nm.Si)(e, r)), o = yield(0, eH.Lt)(Z.pe, r), l = null != (e = null == o || null == (t = o.value) ? void 0 : t.map(e => e.value)) ? e : [];
                    if (0 !== l.length) {
                        var a = l.filter(e => !i.has(e) || n.includes(e));
                        a.length !== l.length && (yield(0, eH.yJ)((0, nv.fW)(r, a)))
                    }
                }
            }

            function* nh() {
                yield(0, eH.jP)(A.Sl, ng)
            }
            var nw = r(50479),
                nO = r(72236),
                nj = r(77106),
                nP = r(29653);

            function nE(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function nA(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nE(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nE(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var nT = (e, t) => {
                    var r = window.gtag;
                    r("js", new Date), r("config", e, nA(nA({}, t ? {
                        client_id: t
                    } : {}), {}, {
                        cookie_domain: window.location.hostname.match(/\\.typeform\\.com/) ? ".typeform.com" : window.location.hostname,
                        cookie_flags: "https:" === window.location.protocol ? "SameSite=None;Secure" : "",
                        transport_type: "beacon"
                    })), r("event", "pageview")
                },
                n_ = e => "\n  document.cookie='hubspotutk=;domain=".concat(nj.A.HUBSPOT_COOKIE_DOMAIN, ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;'\n  var _hs = document.createElement('script');\n  _hs.async = true;\n  _hs.defer = true;\n  _hs.src = '//js.hs-scripts.com/").concat(e, ".js';\n  document.head.appendChild(_hs);\n"),
                nk = (e, t) => {
                    (0, nP.f8)({
                        id: "gtm-".concat(e),
                        content: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','googleTagManager','".concat(e, "');\n"),
                        nonce: t
                    })
                },
                nS = (e, t) => {
                    var r = -1 !== window.location.search.indexOf("share-ga-instance=true") && (0, nO.A)();
                    (e => {
                        var t, r, n, i, o, l = e.googleAnalyticsTrackingId,
                            a = e.instanceSharing,
                            c = e.nonce;
                        ((0, nP.f8)({
                            id: "gtag-".concat(l),
                            url: "https://www.googletagmanager.com/gtag/js?id=".concat(l),
                            nonce: c
                        }, "head"), window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function() {
                            window.dataLayer.push(arguments)
                        }, a) ? (r = e.embedId, n = e.googleAnalyticsTrackingId, i = !1, o = e => {
                            nT(n, e), i = !0
                        }, t = setTimeout(() => {
                            o()
                        }, 5e3), window.addEventListener("message", e => {
                            if ("ga-client-id" === e.data.type) {
                                var n = e.data.data,
                                    l = n.embedId,
                                    a = n.gaClientId;
                                l !== r || i || o(a), clearTimeout(t)
                            }
                        })) : nT(l)
                    })({
                        embedId: (0, nw.N)(),
                        googleAnalyticsTrackingId: e,
                        instanceSharing: r,
                        nonce: t
                    })
                },
                nx = (e, t) => {
                    var r = " !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n    document,'script','https://connect.facebook.net/en_US/fbevents.js');\n    fbq('set', 'autoConfig', false, '".concat(e, "');\n    fbq('init', '").concat(e, "');\n    fbq('trackSingle', '").concat(e, "', 'PageView');");
                    (0, nP.f8)({
                        id: "fb-pixel-".concat(e),
                        content: r,
                        defer: !0,
                        nonce: t
                    })
                },
                nC = (e, t, r) => {
                    var n = "",
                        i = "";
                    e && e.portal_id ? (n = n_(e.portal_id), i = e.portal_id.toString()) : t && t.extra && t.extra.portal_id && (n = n_(t.extra.portal_id), i = t.extra.portal_id.toString()), n && (0, nP.f8)({
                        id: "hubspot-".concat(i),
                        content: n,
                        nonce: r
                    })
                };

            function* nL() {
                yield(0, eH.s)(A.vp), yield(0, eH.T1)(nR)
            }

            function* nR() {
                var e = yield(0, eH.Lt)(Z.mt), t = yield(0, eH.Lt)(Z.P5), r = yield(0, eH.Lt)(Z.ST), n = !(yield(0, eH.Lt)(e$.mF));
                if ((0, rV.BN)() || n) {
                    var i = t.googleTagManager || e.googleTagManager;
                    i && (yield(0, eH.T1)(nk, i, r));
                    var o = t.googleAnalytics || e.googleAnalytics;
                    o && (yield(0, eH.T1)(nS, o, r))
                }
                if ((0, rV.ku)() && (0, rV.LX)() || n) {
                    var l = t.facebookPixel || e.facebookPixel;
                    l && (yield(0, eH.T1)(nx, l, r))
                }
                if ((0, rV.LX)() || n) {
                    var a = yield(0, eH.Lt)(Z._6), c = (yield(0, eH.Lt)(Z.Yl)).find(e => "hubspot" === e.provider_id);
                    (null != a && a.portal_id || c) && (yield(0, eH.T1)(nC, a, c, r))
                }
            }
            var nI = r(38),
                nD = r(69043),
                nM = r(56284);

            function* nN(e, t) {
                var r = yield(0, eH.Lt)(e$.eM), n = yield(0, eH.Lt)(e0.oR), i = yield(0, eH.Lt)(eT.fF);
                yield(0, eH.yJ)((0, nD.L3)()), yield(0, eH.yJ)((0, nM.IH)(i.ref)), "function" == typeof e && (yield(0, eH.T1)(e, r, n))
            }
            var nB = r(43710),
                nH = r(95305);

            function* nF(e, t) {
                var r = yield(0, eH.Lt)(e$.eM), n = yield(0, eH.Lt)(e0.oR), i = yield(0, eH.Lt)(eT.fF);
                yield(0, eH.yJ)((0, nD.L3)());
                var o = null == i ? void 0 : i.autoRedirect,
                    l = null == i ? void 0 : i.redirectUrl;
                o && !l ? yield* function*() {
                    var e = yield(0, eH.Lt)(eT.LK);
                    yield(0, eH.yJ)((0, nM.IH)(e))
                }(): yield* function*(e, t, r) {
                    var n = yield(0, eH.Lt)(e$.C_), i = e || n;
                    i ? (yield(0, eH.cb)(nB.l6), yield(0, eH.T1)(nH.Zg, i, r)) : yield(0, eH.yJ)((0, nM.IH)(t))
                }(l, i.ref, r), "function" == typeof e && (yield(0, eH.T1)(e, r, n))
            }
            var nz = ["localhost", "0.0.0.0"];
            let nV = () => {
                var e, t, r;
                return nz.includes(window.location.hostname) || (t = (e = window.location.hostname.split(".")).lastIndexOf("typeform"), (r = e.slice(0, t)).length > 1 && ("tfdev" === r[r.length - 1] ? r[r.length - 2] : r[r.length - 1])) ? "tfdev" : "tfprod"
            };
            var nG = r(61875),
                nU = "renderer";

            function nq() {
                var e = window.DD_RUM;
                e && e.init({
                    applicationId: "8ef45d76-7592-4725-a010-baff27b2bb06",
                    clientToken: "pub7cc96b2757af4310c9398eee0d90d9a1",
                    service: nU,
                    env: nV(),
                    version: window.rendererReleaseVersion,
                    sampleRate: 100,
                    premiumSampleRate: 0,
                    useSecureSessionCookie: !0
                })
            }

            function nJ() {
                var e = window.DD_LOGS;
                e && e.init({
                    clientToken: "pub7cc96b2757af4310c9398eee0d90d9a1",
                    env: nV(),
                    forwardConsoleLogs: ["error"],
                    sampleRate: 100,
                    service: nU,
                    version: window.rendererReleaseVersion
                })
            }

            function* nZ() {
                yield(0, eH.T1)(nK)
            }

            function* nY() {
                (yield(0, eH.Lt)(eK.Rb)) || (yield(0, eH.s)(A.FL), yield(0, eH.T1)(nJ), yield(0, eH.T1)(nq), yield(0, eH.T1)(nW), yield(0, eH.T1)(nX), yield(0, eH.T1)(t0, nZ), yield* t8(A.ZF, n$), yield* t8(A.AL, n0), yield* t8(A.uX, n1), yield* t8(A.xl, nQ), yield* t8(nG.zC, n4), yield* t8(nG.ge, n2))
            }

            function* nW() {
                var e = window.DD_RUM,
                    t = window.DD_LOGS,
                    r = yield(0, eH.Lt)(e$.eM), n = yield(0, eH.Lt)(eK.u0), i = yield(0, eH.Lt)(eK.af), o = window.innerWidth, l = window.innerHeight, a = "".concat(o, " x ").concat(l), c = yield(0, eH.Lt)(tm.DN), u = yield(0, eH.Lt)(tm.Tk);
                null == t || t.addLoggerGlobalContext("isTouch", (0, eG.CI)()), null == t || t.addLoggerGlobalContext("formUid", r), null == t || t.addLoggerGlobalContext("sessionId", n), null == t || t.addLoggerGlobalContext("planName", null == i ? void 0 : i.planName), null == t || t.addLoggerGlobalContext("viewportSize", a), null == t || t.addLoggerGlobalContext("viewportWidth", o), null == t || t.addLoggerGlobalContext("viewportHeight", l), c && (null == t || t.addLoggerGlobalContext("embeddingMode", u)), null == e || e.setGlobalContextProperty("isTouch", (0, eG.CI)()), null == e || e.setGlobalContextProperty("formUid", r), null == e || e.setGlobalContextProperty("sessionId", n), null == e || e.setGlobalContextProperty("planName", null == i ? void 0 : i.planName), null == e || e.setGlobalContextProperty("viewportWidth", o), null == e || e.setGlobalContextProperty("viewportHeight", l), null == e || e.setGlobalContextProperty("viewportSize", a), c && (null == e || e.setGlobalContextProperty("embeddingMode", u))
            }

            function nK() {
                var e = window.DD_RUM,
                    t = window.DD_LOGS;
                null == t || t.logger.info("startConversation"), null == e || e.addAction("startConversation")
            }

            function n$() {
                var e = window.DD_RUM,
                    t = window.DD_LOGS;
                null == t || t.logger.info("conversationSubmitted"), null == e || e.addAction("conversationSubmitted")
            }

            function nQ() {
                var e = window.DD_RUM,
                    t = window.DD_LOGS;
                null == t || t.logger.info("submitRequest"), null == e || e.addAction("submitRequest")
            }

            function nX() {
                var e = window.DD_RUM,
                    t = window.DD_LOGS;
                null == t || t.logger.info("visit"), null == e || e.addAction("visit")
            }

            function n0(e) {
                var t = e.errorCode,
                    r = e.errorDescription,
                    n = e.errorDetails;
                if (!(0, nI.nz)({
                        code: t,
                        details: n
                    })) {
                    var i = window.DD_RUM,
                        o = window.DD_LOGS;
                    null == o || o.logger.error("submitFailed", {
                        errorCode: t,
                        errorDescription: r,
                        errorDetails: JSON.stringify(n)
                    }), null == i || i.addAction("submitFailed", {
                        errorCode: t,
                        errorDescription: r,
                        errorDetails: JSON.stringify(n)
                    })
                }
            }

            function n1(e) {
                var t = e.errorCode,
                    r = window.DD_RUM,
                    n = window.DD_LOGS;
                null == n || n.logger.info("submitRetry", {
                    errorCode: t
                }), null == r || r.addAction("submitRetry", {
                    errorCode: t
                })
            }

            function n2(e) {
                var t = e.error,
                    r = e.latency,
                    n = window.DD_LOGS;
                null == n || n.logger.error("leadEnrichmentError", {
                    errorName: t instanceof Error ? t.name : t,
                    errorDescription: t instanceof Error ? t.message : null,
                    latency: r
                }), null == n || n.logger.info("leadEnrichmentCall", {
                    latency: r,
                    success: !1
                })
            }

            function n4(e) {
                var t = e.latency,
                    r = window.DD_LOGS;
                null == r || r.logger.info("leadEnrichmentCall", {
                    latency: t,
                    success: !0
                })
            }
            var n3 = r(25e3);

            function* n5() {
                yield(0, eH.s)(A.FL), yield(0, eH.cH)(n8)
            }

            function* n8() {
                var e = yield(0, eH.Lt)(e$.eM), t = yield(0, eH.Lt)(eK.af), r = null == t ? void 0 : t.accountUid, n = yield(0, eH.Lt)(eK.u0), i = navigator.userAgent, o = yield(0, eH.Lt)(tK.G), l = o ? Object.keys(o).map(e => ({
                    test_id: e,
                    variant_label: o[e]
                })) : [];
                try {
                    var a = {
                            accountId: r,
                            formId: e,
                            responseId: n,
                            userAgent: i,
                            runningExperiments: JSON.stringify(l)
                        },
                        c = new n3.J(a, {
                            endpoint: "".concat(r9.K.apiHost, "/forms/").concat(e, "/").concat(r9.K.endpoints.insights)
                        });
                    yield(0, eH.jP)(A.j1, function*() {
                        yield(0, eH.T1)([c, c.onClose])
                    }), (yield(0, eH.Lt)(Z.qr)) && (yield(0, eH.T1)([c, c.onActivateBlock], {
                        id: "WelcomeScreenID"
                    }), yield(0, eH.s)(A.HG));
                    var u = yield(0, eH.Lt)(Z.DZ), s = yield(0, eH.Lt)(Z.GH, u);
                    s && (yield(0, eH.T1)([c, c.onActivateBlock], {
                        id: s.id
                    })), yield(0, eH.jP)(A.Sl, function*(e) {
                        var t = yield(0, eH.Lt)(Z.GH, e.payload.ref);
                        t && (yield(0, eH.T1)([c, c.onActivateBlock], {
                            id: t.id
                        }))
                    }), yield(0, eH.jP)(A.ZF, function*() {
                        yield(0, eH.T1)([c, c.onSubmit])
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            var n9 = r(1096),
                n6 = ["formId", "value"];

            function n7(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var ie = !0;

            function it() {
                return !!ie && (ie = !1, !0)
            }
            var ir = !0;

            function ii() {
                return !!ir && (ir = !1, !0)
            }
            var io = {
                [n9.BG]: {
                    sendEvent: (e, t) => {
                        var r, n, i = t.formId,
                            o = t.value,
                            l = function(e, t) {
                                if (null == e) return {};
                                var r, n, i = function(e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if (({}).hasOwnProperty.call(e, n)) {
                                            if (-1 !== t.indexOf(n)) continue;
                                            r[n] = e[n]
                                        }
                                    return r
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                }
                                return i
                            }(t, n6);
                        null == (r = (n = window).gtag) || r.call(n, "event", e, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? n7(Object(r), !0).forEach(function(t) {
                                    var n, i, o;
                                    n = e, i = t, o = r[t], (i = function(e) {
                                        var t = function(e, t) {
                                            if ("object" != typeof e || !e) return e;
                                            var r = e[Symbol.toPrimitive];
                                            if (void 0 !== r) {
                                                var n = r.call(e, t || "default");
                                                if ("object" != typeof n) return n;
                                                throw TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return ("string" === t ? String : Number)(e)
                                        }(e, "string");
                                        return "symbol" == typeof t ? t : t + ""
                                    }(i)) in n ? Object.defineProperty(n, i, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : n[i] = o
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n7(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            event_category: i,
                            event_label: o,
                            typeform_id: i,
                            value: o
                        }, l))
                    },
                    events: e => {
                        switch (e) {
                            case A.rw:
                                return {
                                    eventName: "TypeformQuestionPassed",
                                    mapStateToEventData: e => {
                                        var t = (0, Z.DZ)(e),
                                            r = (0, Z.GH)(e, t);
                                        return {
                                            formId: (0, e$.eM)(e),
                                            value: r.title,
                                            typeform_question_title: r.title
                                        }
                                    },
                                    shouldSendEvent: e => {
                                        var t = (0, Z.DZ)(e),
                                            r = (0, Z.GH)(e, t);
                                        return !!r && r.type !== eq.UM && r.type !== eq.zF
                                    }
                                };
                            case A.ZF:
                                return {
                                    eventName: "TypeformSubmit",
                                    mapStateToEventData: e => ({
                                        formId: (0, e$.eM)(e),
                                        value: (0, e$.$T)(e),
                                        typeform_name: (0, e$.$T)(e)
                                    })
                                };
                            default:
                                return !1
                        }
                    }
                },
                [n9.cm]: {
                    sendEvent: (e, t) => {
                        var r, n;
                        null == (r = (n = window).fbq) || r.call(n, "trackSingleCustom", t.pixelId, e)
                    },
                    events: e => {
                        switch (e) {
                            case A.Sl:
                            case A.rw:
                            case A.HG:
                                return {
                                    eventName: "TypeformFirstInteraction",
                                    mapStateToEventData: e => ({
                                        pixelId: (0, eK.e8)(e)
                                    }),
                                    shouldSendEvent: it
                                };
                            case A.ZF:
                                return {
                                    eventName: "TypeformSubmit",
                                    mapStateToEventData: e => ({
                                        pixelId: (0, eK.e8)(e)
                                    })
                                };
                            default:
                                return !1
                        }
                    }
                },
                [n9.DL]: {
                    sendEvent: e => {
                        var t;
                        null == (t = window.googleTagManager) || t.push({
                            event: e
                        })
                    },
                    events: e => {
                        switch (e) {
                            case A.Sl:
                            case A.rw:
                            case A.HG:
                                return {
                                    eventName: "TypeformFirstInteraction",
                                    shouldSendEvent: ii
                                };
                            case A.ZF:
                                return {
                                    eventName: "TypeformSubmit"
                                };
                            default:
                                return !1
                        }
                    }
                }
            };

            function* il() {
                var e = yield(0, eH.Lt)(eK.AS);
                yield(0, eH.Zy)(function*() {
                    var t = yield(0, eH.s)(A.ZF);
                    yield(0, eH.T1)(ia, t, io, e)
                }), yield(0, eH.Zy)(function*() {
                    for (;;) {
                        var t = yield(0, eH.s)(A.rw);
                        yield(0, eH.T1)(ia, t, io, e)
                    }
                }), yield(0, eH.Zy)(function*() {
                    var t = yield(0, eH.s)(A.HG);
                    yield(0, eH.T1)(ia, t, io, e)
                }), yield(0, eH.Zy)(function*() {
                    for (;;) {
                        var t = yield(0, eH.s)(A.Sl);
                        yield(0, eH.T1)(ia, t, io, e)
                    }
                })
            }

            function* ia(e, t, r) {
                if (!(yield(0, eH.Lt)(eF.UL))) {
                    var n = r.filter(r => t[r] && !!t[r].events(e.type));
                    yield(0, eH.Q7)(n.map(r => (0, eH.T1)(ic, t[r], e)))
                }
            }

            function* ic(e, t) {
                var r = e.events(t.type);
                if (!r.shouldSendEvent || (yield(0, eH.Lt)(r.shouldSendEvent))) {
                    var n = r.mapStateToEventData ? yield(0, eH.Lt)(r.mapStateToEventData): void 0;
                    yield(0, eH.T1)(e.sendEvent, r.eventName, n)
                }
            }
            var iu = r(54804);

            function* is() {
                if (yield(0, eH.Lt)(eY.ty)) {
                    var e = yield(0, eH.Lt)(eY.$r), t = e.title, r = e.description, n = e.attachment;
                    if (t || r || (null == n ? void 0 : n.href)) {
                        var i = (yield(0, eH.Lt)(eK.af)).accountUid,
                            o = yield(0, eH.Lt)(e$.eM);
                        if (i && o) {
                            var l = r9.K.apiHost || window.location.origin;
                            try {
                                var a = new iu.To(l);
                                yield(0, eH.T1)([a, "trackFeatureAdoption"], {
                                    accountID: i,
                                    features: [{
                                        feature: iu.YO.customCloseMessage.id,
                                        scopeID: o
                                    }]
                                })
                            } catch (e) {
                                console.error("Taxonomy tracking error:", e)
                            }
                        }
                    }
                }
            }

            function* id() {
                yield(0, eH.T1)(is)
            }
            var ip = r(96788),
                iy = r(23557),
                ib = r(12978),
                iv = r(34486),
                im = r(65307);

            function* ig() {
                yield(0, eH.jP)(A.F4, ih)
            }

            function* ih() {
                var e = yield(0, eH.Lt)(Z.DZ), t = yield(0, eH.Lt)(Z.ke, e), r = yield(0, eH.Lt)(Z.GH, e), n = yield(0, eH.Lt)(Z.pe, e), i = yield(0, eH.T1)(Z.gW, n);
                if (t && r && !i && (0, r0.hs)(r.type)) {
                    var o = yield(0, eH.Lt)(e_.m_, e), l = (0, ib.g)(r, window.location.hash);
                    (0, iv._)(r, l) && null != l && l.length && (yield(0, im.lv)(), yield(0, eH.yJ)((0, nv.fW)(r.ref, l, {}, {
                        isFromPrefilledAnswer: !0
                    })), o && (yield(0, im.c2)(), yield(0, eH.yJ)((0, nv.Mw)(r.ref, {}, {
                        source: "answer_url",
                        isFromPrefilledAnswer: !0
                    }))))
                }
            }

            function* iw() {
                yield(0, eH.cH)(iO)
            }

            function* iO() {
                var e = String((yield(0, eH.Lt)(e$.eM)));
                yield(0, eH.yJ)((0, eR.OS)());
                try {
                    var t = yield(0, eH.T1)(r6.y, e);
                    return yield(0, eH.yJ)((0, eR.W_)(t))
                } catch (e) {
                    yield(0, eH.yJ)((0, eR.C7)())
                }
            }
            var ij = r(48473);

            function* iP() {
                yield(0, eH.jP)([A.d], iE)
            }

            function* iE() {
                (yield(0, eH.Lt)(Z.aw)) && (yield(0, eH.yJ)((0, ij.QH)())), yield(0, eH.yJ)((0, ij.p9)())
            }

            function* iA(e) {
                var t = yield(0, eH.Lt)(e$.jq), r = yield(0, eH.Lt)(e$.$c), n = yield(0, eH.Lt)(e$.jJ), i = yield(0, eH.Lt)(e$.tI);
                (yield(0, eH.Lt)(e$.Dc)) && (yield(0, eH.cH)(rW), yield(0, eH.cH)(ry)), r || t ? yield* function*(e) {
                    yield(0, eH.cH)(F.r), yield(0, eH.Zy)(ip.Ay);
                    var t = yield(0, eH.Lt)(e$.eM);
                    yield(0, eH.Zy)(function*() {
                        yield(0, eH.T1)(t0, () => {
                            r4.A4({
                                formId: t
                            })
                        })
                    }), yield(0, eH.Zy)(r2), yield(0, eH.cH)(nh), yield(0, eH.Q7)([(0, eH.jP)(A.xl, nN, e)])
                }(e): n ? yield*(0, iy.Ay)(): i ? yield* function*(e) {
                    yield(0, eH.cH)(F.r), yield(0, eH.Zy)(ip.Ay);
                    var t = yield(0, eH.Lt)(e$.eM);
                    yield(0, eH.Zy)(function*() {
                        yield(0, eH.T1)(t0, () => {
                            r4.A4({
                                formId: t
                            })
                        })
                    }), yield(0, eH.Zy)(r2), yield(0, eH.cH)(nh), yield(0, eH.Q7)([(0, eH.jP)(A.xl, nF, e)])
                }(e): yield* function*() {
                    var e = yield(0, eH.Lt)(e$.Dc), t = yield(0, eH.Lt)(eF.fD);
                    yield(0, eH.Zy)(rX.Kb), t && (yield(0, eH.cH)(rF)), e && (yield(0, eH.cH)(il), yield(0, eH.cH)(nY), yield(0, eH.cH)(n5), yield(0, eH.cH)(id)), yield(0, eH.T1)(r$.hy), (yield(0, eH.Lt)(e$.r6)) && (yield(0, eH.cH)(iw)), yield(0, eH.cH)(F.r, H.d6), yield(0, eH.Zy)(ip.Ay), yield(0, eH.Zy)(iP), yield(0, eH.Zy)(rK.A), yield(0, eH.Zy)(rQ.w), yield(0, eH.Zy)(function*() {
                        yield(0, eH.T1)(t0, ez.j)
                    }), yield(0, eH.cH)(ig), yield(0, eH.Q7)([(0, eH.p8)(A.xl, nI.Ig)]), yield(0, eH.cH)(nL), yield(0, eH.cH)(nn), yield(0, eH.cH)(ny), yield(0, eH.cH)(nh)
                }()
            }

            function iT(e, t) {
                var r = (0, s.Ay)({
                        onError: e => {
                            setTimeout(() => {
                                throw e
                            }, 0)
                        }
                    }),
                    n = [d.A, r],
                    i = (0, u.U1)({
                        reducer: eB,
                        middleware: n,
                        preloadedState: e,
                        devTools: !1
                    });
                return r.run(iA, t), i
            }
        },
        29653(e, t, r) {
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var i = function(e) {
                var t, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body";
                if (!e.content && !e.url) return void console.warn("injectScript: No content or URL provided");
                var o = ((t = document.createElement("script")).type = e.type || "text/javascript", t.async = !1 !== e.async, t.id = e.id, e.defer && (t.defer = e.defer), e.url ? t.src = e.url : e.content && (t.innerHTML = e.content), e.nonce && t.setAttribute("nonce", e.nonce), e.onload && (t.onload = e.onload), e.onerror && (t.onerror = e.onerror), t);
                "head" === i ? ((function(e) {
                    if (Array.isArray(e)) return e
                })(r = document.getElementsByTagName("head")) || function(e) {
                    var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, n, i, o, l = [],
                            a = !0,
                            c = !1;
                        try {
                            i = (t = t.call(e)).next, !1;
                            for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 1 !== l.length); a = !0);
                        } catch (e) {
                            c = !0, n = e
                        } finally {
                            try {
                                if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw n
                            }
                        }
                        return l
                    }
                }(r) || function(e) {
                    if (e) {
                        if ("string" == typeof e) return n(e, 1);
                        var t = ({}).toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? n(e, 1) : void 0
                    }
                }(r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[0].appendChild(o) : document.body.appendChild(o)
            };
            r.d(t, {
                f8: () => i
            })
        },
        95305(e, t, r) {
            var n = r(78770),
                i = r.n(n),
                o = r(75399),
                l = r(72236),
                a = r(50479),
                c = "https://www.typeform.com/explore/",
                u = "THANK_YOU_SCREEN_REDIRECT",
                s = "AFTER_SUBMIT_REDIRECT",
                d = {
                    allowUnknownSchemes: !0
                },
                f = (e, t) => {
                    b(e, s, t)
                },
                p = (e, t) => {
                    b(e, u, t)
                },
                y = () => {
                    if (window && window.location) {
                        var e = window.location.search.match(/typeform-embed-redirect-target=(_self|_top|_blank|_parent)/i);
                        if (e && e[1]) return e[1]
                    }
                    return "_parent"
                },
                b = (e, t, r) => {
                    if (i()(e, d)) {
                        var n, f, p = e,
                            b = p.startsWith(c);
                        !b && (p.includes(".typeform.com/") || p.includes(".typeform.eu/")) && (0, l.A)() && (0, a.N)() && "_self" === y() && (n = window.location.href, f = new URL(e), new URLSearchParams(new URL(n).search).forEach((e, t) => {
                            f.searchParams.get(t) || f.searchParams.set(t, e)
                        }), p = f.toString());
                        var v = "";
                        if ((0, l.A)() ? v = y() : b && (v = "_blank"), (0, l.A)()) switch (t) {
                            case u:
                                o.eJ(r, p, v);
                                break;
                            case s:
                                o.tI(r, p, v)
                        }
                        if (!(window && window.location && window.location.search.match(/typeform-embed-handles-redirect/i))) try {
                            var m = document.createElement("a");
                            m.href = p, m.target = v, document.body.appendChild(m), m.click(), document.body.removeChild(m);
                            var g = window.location.origin + window.location.pathname;
                            p.includes(g) && setTimeout(() => window.location.reload(), 500)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                };
            r.d(t, {
                Bc: () => c,
                Zg: () => f,
                eJ: () => p
            })
        },
        34346(e, t, r) {
            r.d(t, {}, {
                A: e => e.replace(/{{[^}]+}}/g, "").replace(/<[^>]+>/g, "").replace(/[*_]/g, "").trim()
            })
        },
        59857(e, t, r) {
            class n extends Error {
                constructor(e, t, r) {
                    super("".concat(e, ": ").concat(t)), this.code = e, this.description = t, this.details = r
                }
            }
            r.d(t, {
                A: () => n
            })
        },
        28013(e, t, r) {
            r.r(t), r.d(t, {
                default: () => nP
            });
            var n, i, o, l, a, c, u, s, d, f, p, y, b, v, m, g, h, w, O, j, P, E, A, T, _, k, S, x, C, L, R = r(14041),
                I = r(29340),
                D = r(94657),
                M = r(86989),
                N = r(6585),
                B = r(39302),
                H = r(38729),
                F = r(25078),
                z = r(70854),
                V = r(70288),
                G = r(15803),
                U = r(56284),
                q = r(88790),
                J = r(69043),
                Z = r(58769),
                Y = r(37360),
                W = r(66576),
                K = r(8073),
                $ = r(5482),
                Q = r(14792),
                X = r(16583),
                ee = r(23012),
                et = r(35328),
                er = r(32059),
                en = r(39067),
                ei = r.n(en),
                eo = r(28544),
                el = r(24009),
                ea = r(42972),
                ec = r(31085),
                eu = I.Ay.div.withConfig({
                    displayName: "Wrapper",
                    componentId: "sc-__sc-1lreasu-0"
                })(["position:absolute;top:0;left:0;right:50%;bottom:0;"]),
                es = I.Ay.div.withConfig({
                    displayName: "MediaWrapper",
                    componentId: "sc-__sc-1lreasu-1"
                })(["position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]);
            let ed = e => {
                var t = e.breakpoint,
                    r = e.enableAnimation,
                    n = void 0 !== r && r,
                    i = e.infoMessageOverlay,
                    o = e.isVisible,
                    l = e.mediaHref,
                    a = e.mediaMetadata,
                    c = e.mediaPlaceholder,
                    u = e.onAutoplayFailed,
                    s = e.onEnded,
                    d = e.onLoadedMetadata,
                    f = e.onPlay,
                    p = e.onTimeUpdate,
                    y = e.properties,
                    b = e.shouldMuteAutoplay,
                    v = (0, R.useRef)(null);
                return (0, ec.jsx)(D.Ay, {
                    isVisible: o,
                    duration: 500 * !!n,
                    delay: 200 * !!n,
                    type: "fade",
                    children: (0, ec.jsx)(eu, {
                        ref: v,
                        children: (0, ec.jsx)(es, {
                            breakpoint: t,
                            children: (0, ec.jsx)(ea.A, {
                                href: l,
                                infoMessageOverlay: i,
                                isVisible: o,
                                mediaPlaceholder: c,
                                metadata: a,
                                onAutoplayFailed: u,
                                onEnded: s,
                                onLoadedMetadata: d,
                                onPlay: f,
                                onTimeUpdate: p,
                                properties: y,
                                shouldMuteAutoplay: b
                            })
                        })
                    })
                })
            };
            var ef = r(16977),
                ep = r(88400),
                ey = r(40155),
                eb = r(41682),
                ev = r(47657),
                em = r(72459),
                eg = r(63024),
                eh = r(59562),
                ew = r(62240),
                eO = r(540),
                ej = r(82515);

            function eP(e, t, r) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var eE = I.Ay.div(d || (n = ["\n  outline: none;\n  width: 100%;\n"], i || (i = n.slice(0)), d = Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(i)
                }
            }))));
            class eA extends R.Component {
                setTimeout(e) {
                    this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(e, 500)
                }
                disableSwipe(e) {
                    this.disableTimeout && clearTimeout(this.disableTimeout), this.disabledSwipe = !0, this.disableTimeout = setTimeout(() => {
                        this.disabledSwipe = !1
                    }, e)
                }
                render() {
                    return R.createElement(eE, {
                        style: this.props.customStyle,
                        onWheel: this.handleWheelScroll
                    }, this.props.children)
                }
                constructor() {
                    super(...arguments), eP(this, "Lethargy", new ej.j9), eP(this, "accumulated", 0), eP(this, "timeout", null), eP(this, "disableTimeout", null), eP(this, "disabledSwipe", !1), eP(this, "handleWheelScroll", e => {
                        var t = this.props,
                            r = t.upHandler,
                            n = t.downHandler,
                            i = this.Lethargy.check(e),
                            o = e.deltaY;
                        this.disabledSwipe || !1 === i || (this.accumulated += o, this.setTimeout(() => {
                            this.accumulated = 0
                        })), this.accumulated < -300 && (r(), this.accumulated = 0, this.disableSwipe(500)), this.accumulated > 300 && (n(), this.accumulated = 0, this.disableSwipe(500))
                    })
                }
            }

            function eT() {
                return (eT = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function e_(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ek(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e_(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e_(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            eA.propTypes = {
                children: ei().node,
                customStyle: ei().object,
                downHandler: ei().func,
                upHandler: ei().func
            };
            var eS = I.Ay.div(f || (o = ["\n  ", "\n"], l || (l = o.slice(0)), f = Object.freeze(Object.defineProperties(o, {
                raw: {
                    value: Object.freeze(l)
                }
            }))), e => e.fullHeight && "height: 100%;");
            let ex = e => {
                var t = e.canSwipeNext,
                    r = e.canSwipePrevious,
                    n = e.goToNextBlock,
                    i = e.goToPreviousBlock,
                    o = e.fullHeight,
                    l = e.children,
                    a = (0, R.useRef)(!1),
                    c = (0, R.useRef)(!1),
                    u = (0, R.useRef)(!1),
                    s = (0, V.wA)(),
                    d = (0, eh.G)(Y.DZ),
                    f = (0, eh.G)(e => (0, ew.q4)(e, d)),
                    p = (0, eh.G)(e => (0, ew.Cw)(e, d)) && !f,
                    y = {
                        delta: 10
                    };
                p && (y = ek(ek({}, y), {}, {
                    preventScrollOnSwipe: !0,
                    trackTouch: !0
                }));
                var b = (0, em.uh)(ek({
                    onSwiped: e => {
                        a.current = !1;
                        var o = 50 * !p;
                        if (!(Math.abs(e.deltaY) <= o / e.velocity)) {
                            if ("Up" === e.dir) {
                                if (p) return s((0, eO.wU)({
                                    ref: d,
                                    itemType: "scroll"
                                }));
                                if (t && !c.current) return void n({
                                    navigationType: eg.fS
                                })
                            }
                            "Down" === e.dir && r && !u.current && i({
                                navigationType: eg.ep
                            })
                        }
                    },
                    onSwiping: () => {
                        if (a.current) return !1;
                        c.current = !t, u.current = !r, a.current = !0
                    }
                }, y));
                return R.createElement(eA, {
                    customStyle: o ? {
                        height: "100%"
                    } : {},
                    downHandler: () => {
                        t && n({
                            navigationType: eg.fz
                        })
                    },
                    upHandler: () => {
                        r && i({
                            navigationType: eg.U5
                        })
                    }
                }, R.createElement(eS, eT({
                    fullHeight: o
                }, b, y), l))
            };
            var eC = r(99921),
                eL = r(15937),
                eR = r(34239),
                eI = r(85930),
                eD = null == (p = window) || null == (p = p.location) || null == (p = p.search) ? void 0 : p.includes("typeform-render-all-blocks=true"),
                eM = (e, t, r, n) => {
                    var i = r.currentRef,
                        o = r.previousRef,
                        l = r.previousActiveRef,
                        a = r.nextRef,
                        c = r.firstInvalidBlockInReviewModeRef,
                        u = e.ref === i,
                        s = e.ref === l,
                        d = e.ref === o,
                        f = e.ref === a,
                        p = (0, eI.DC)(e.type),
                        y = null == t ? void 0 : t.hasBeenInteractedWith,
                        b = e.ref === c;
                    return eD || n && (u || d || s) || u || d || f || p && y || b
                },
                eN = r(10801),
                eB = r(57947),
                eH = r(16849),
                eF = r(95581),
                ez = r(41609),
                eV = r(95726),
                eG = r(12286),
                eU = r(93830),
                eq = r(11180),
                eJ = r(31255),
                eZ = r(63355),
                eY = r(73350),
                eW = r(51716),
                eK = r(50592),
                e$ = r(59020),
                eQ = r(73426),
                eX = r(55709),
                e0 = r(7991);

            function e1() {
                return {
                    type: e0.HF,
                    payload: {
                        isInputFocused: !0
                    }
                }
            }
            var e2 = {
                    ABSTAIN: "off",
                    LOCATION_ADDRESS: "street-address",
                    USER_BIRTHDAY_DATE: "bday",
                    LOCATION_COUNTRY: "country",
                    USER_EMAIL: "email",
                    USER_FIRST_NAME: "given-name",
                    USER_LAST_NAME: "family-name",
                    USER_NAME: "name",
                    COMPANY_NAME: "organization",
                    USER_INFO_JOB_ROLE: "organization-title",
                    USER_PHONE: "tel",
                    LOCATION_ZIP_CODE: "postal-code",
                    USER_GENDER: "sex",
                    USER_WEBSITE: "off"
                },
                e4 = r(20838),
                e3 = r(80301),
                e5 = r(96968),
                e8 = r(81126),
                e9 = r(76092),
                e6 = r(28220),
                e7 = r(88753),
                te = r(27477),
                tt = r(14868),
                tr = (e, t) => {
                    if ("string" != typeof e || !e) return "";
                    var r = (0, te.r4)(e).reduce((e, r) => {
                        var n = ((e, t) => {
                            var r, n = e.answers,
                                i = e.variables,
                                o = e.hidden,
                                l = e.outcome,
                                a = t.sourceType,
                                c = t.sourceRef,
                                u = {
                                    field: void 0 === n ? {} : n,
                                    var: void 0 === i ? {} : i,
                                    hidden: void 0 === o ? {} : o,
                                    outcome: void 0 === l ? {} : l
                                }[a];
                            if (u) {
                                var s = u[c];
                                if ("" !== s) return null != (r = s && "object" == typeof s && "label" in s ? String(s.label) : void 0) ? r : s
                            }
                        })(t, r);
                        return (0, e6.mE)(e, null == n ? "" : String(n), r.sourceRef)
                    }, e);
                    return (0, tt.io)(r)
                },
                tn = r(12750),
                ti = r(92826),
                to = r(45572),
                tl = r(15104),
                ta = r(42616),
                tc = r(10014),
                tu = r(89614),
                ts = r(1409),
                td = r(9799),
                tf = r(32008),
                tp = r(49653),
                ty = r(43710),
                tb = r(80864),
                tv = r(6686),
                tm = r(65892),
                tg = r(26767),
                th = r(39895),
                tw = r(24007),
                tO = r(51767),
                tj = r(34346),
                tP = r(45448),
                tE = r(48854),
                tA = r(93091),
                tT = r(19180),
                t_ = e => e.mediaServiceRespondentToken,
                tk = r(56362),
                tS = r(12016),
                tx = r(20503),
                tC = r(11640),
                tL = r(42742),
                tR = r(97973),
                tI = r(26762),
                tD = r(44774);

            function tM() {
                return (tM = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function tN(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tN(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tN(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function tH(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return tF(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tF(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tF(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var tz = e => {
                var t = e.abTests,
                    r = e.accountFeatureFlags,
                    n = e.alternativeButtonText,
                    i = e.application,
                    o = e.applicationInfo,
                    l = e.blockIndex,
                    a = e.buttonText,
                    c = e.canAutoFocus,
                    u = e.disableNavigation,
                    s = e.enableNavigation,
                    d = e.featureFlags,
                    f = e.field,
                    p = e.hasBeenInteractedWith,
                    y = e.hasBranding,
                    b = e.hasDescription,
                    v = e.hasNavigationArrows,
                    m = e.hasProgress,
                    g = e.iframeUrl,
                    h = e.isActive,
                    w = e.isCommitted,
                    O = e.isFirstBlock,
                    j = e.isLivePreview,
                    P = e.isValid,
                    E = e.knowledgeQuizProps,
                    A = e.language,
                    T = e.layout,
                    _ = e.layoutItemsSize,
                    k = e.onBlockInteraction,
                    S = e.onCommitAnswer,
                    x = e.onInputBlur,
                    C = e.onInputFocus,
                    L = e.onLivePreviewUnsupportedError,
                    I = e.onStageAnswer,
                    D = e.readingDirection,
                    M = e.recenter,
                    N = e.submitForm,
                    B = e.t,
                    H = e.theme,
                    F = e.title,
                    z = e.uniqueId,
                    U = e.validationError,
                    q = e.value,
                    J = tH((0, th.A)(ty.tm), 3),
                    Z = J[0],
                    W = J[1],
                    K = J[2],
                    Q = (0, V.wA)(),
                    X = tH((0, th.A)(ty.Oh), 3),
                    et = X[0],
                    er = X[1],
                    en = X[2],
                    ei = tH((0, R.useState)(null), 2),
                    eo = ei[0],
                    el = ei[1],
                    ea = tH((0, R.useState)(() => (0, ee.Hn)(f)), 2),
                    ec = ea[0],
                    eu = ea[1],
                    es = tH((0, R.useState)(), 2),
                    ed = es[0],
                    ef = es[1],
                    ep = tH((0, R.useState)(!1), 2),
                    ey = ep[0],
                    eb = ep[1],
                    ev = (0, V.d4)(tE.lX),
                    em = (0, V.d4)(t_),
                    eg = (0, V.d4)(tA.Cv),
                    eh = (0, V.d4)(tA.WC),
                    ew = (0, V.d4)(e => "payment" === f.type ? (0, Y.rU)(e) : (0, Y.vf)(e)),
                    eO = (0, V.d4)(eH.j4),
                    ej = (0, V.d4)($.eM),
                    eP = !1 !== (0, V.d4)($.r2),
                    eE = (0, V.d4)($.Rh),
                    eA = (0, eJ.m)(),
                    eT = !!(eO && null === eO.code),
                    e_ = (0, R.useRef)(null),
                    ek = (0, R.useRef)(),
                    eS = (0, R.useRef)(),
                    ex = (0, R.useRef)(!1),
                    eC = (0, R.useRef)(),
                    eR = (0, eI.P4)(f) && O,
                    eD = tB(tB(tB({}, d), r), t),
                    eM = [!0, "variant"].includes(eD[tp.Qx]) && eE,
                    eB = (0, R.useMemo)(() => (0, tR.n)(300, e => {
                        var t = e.ref,
                            r = e.progress;
                        Q((0, tT.rI)({
                            ref: t,
                            progress: r
                        }))
                    }), [Q]),
                    eF = (0, R.useMemo)(() => (0, tR.s)(ty.QT, e => {
                        ex.current = !1, I(f.ref, e)
                    }), [f.ref, I]);
                (0, R.useEffect)(() => () => {
                    K(), en(), ex.current && void 0 !== eS.current ? (eF.cancel(), ex.current = !1, I(f.ref, eS.current)) : (eF.cancel(), ex.current = !1)
                }, [eF]), (0, R.useEffect)(() => {
                    if (eO) {
                        var e = ek.current;
                        null == e || e.focus()
                    }
                }, [eO, ek]), (0, eL.l6)(h, (0, R.useCallback)(eN.A, []));
                var ez = (0, R.useCallback)(e => {
                    if (ex.current && (eF.cancel(), ex.current = !1, void 0 !== eS.current)) {
                        I(f.ref, eS.current), requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                N(e)
                            })
                        });
                        return
                    }
                    N(e)
                }, [N, f.ref, I]);

                function eV(e) {
                    eu(e)
                }

                function eG(e) {
                    M(tm._N), e && (u(), Q((0, tw.tx)()))
                }

                function eU(e) {
                    Q((0, tw._K)()), e && s()
                }

                function eq() {
                    e1 && Q((0, tT.xl)({
                        ref: f.ref
                    })), k()
                }

                function eZ() {
                    C(), (0, G.CI)() && M(tm._N)
                }

                function eY(e) {
                    var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (h) {
                        if ("signature" === f.type && null != q && null != (t = q[0]) && t.stringValue) {
                            var i = {
                                typed: "type",
                                drawn: "draw",
                                uploaded: "upload"
                            }[q[0].type];
                            i && Q((0, tD.Az)({
                                blockRef: f.ref,
                                mode: i
                            }))
                        }
                        if (ex.current && (eF.cancel(), ex.current = !1, void 0 !== eS.current)) {
                            I(f.ref, eS.current), requestAnimationFrame(() => {
                                var t, r = (null == e ? void 0 : e.key) === "Enter" || (null == e || null == (t = e.nativeEvent) ? void 0 : t.key) === "Enter",
                                    i = (0, eI.P4)(f);
                                r && i ? requestAnimationFrame(() => {
                                    S(f.ref, e, n)
                                }) : S(f.ref, e, n)
                            });
                            return
                        }
                        var o = (null == e ? void 0 : e.key) === "Enter" || (null == e || null == (r = e.nativeEvent) ? void 0 : r.key) === "Enter",
                            l = (0, eI.P4)(f);
                        if (o && l) {
                            var a = () => {
                                S(f.ref, e, n)
                            };
                            requestAnimationFrame(() => {
                                requestAnimationFrame(a)
                            })
                        } else S(f.ref, e, n)
                    }
                }

                function eW(e, t, r) {
                    eS.current = e, ["short_text", "long_text", "email", "number", "website", "contact_info", "inline_group", "address"].includes(f.type) && !(null != r && r.isAutoFill) ? (ex.current = !0, eF(e)) : I(f.ref, e)
                }

                function eK(e, t) {
                    W(e), er(e), e ? el(new tg.EZ(t)) : el(null)
                }

                function e$(e) {
                    Q((0, tO.bM)(e))
                }

                function eQ(e) {
                    eb(e)
                }
                var eX = (0, td.Jv)(z),
                    e0 = (0, V.d4)((0, tS.m)(f.ref)),
                    e1 = !!e0,
                    e2 = w && !P || et || e1;
                (0, R.useEffect)(() => {
                    e2 && (0, tL.pW)(e_.current, 0)
                }, [e2, e_]);
                var e4 = tB(tB({}, f.validations), {}, {
                        required: (0, eI.gx)(f)
                    }),
                    e3 = (0, td.gt)({
                        uniqueId: z,
                        isErrorMessageVisible: e2,
                        hasDescription: b
                    }),
                    e5 = (0, td._7)(z),
                    e8 = y || v || m,
                    e9 = {
                        onUploadSuccess: e => {
                            var t = e.respondentToken;
                            (0, tx.Y4)(ej, t), Q((0, tk.V3)(t)), Q((0, tT.R5)({
                                ref: f.ref
                            })), Q((0, tT.xl)({
                                ref: f.ref
                            }))
                        },
                        onUploadError: e => {
                            Q((0, tT.R5)({
                                ref: f.ref
                            })), Q((0, tT.iN)({
                                ref: f.ref,
                                errorCode: e.code
                            })), I(f.ref, null)
                        },
                        onUploadStart: () => {
                            Q((0, tT.xl)({
                                ref: f.ref
                            })), Q((0, tT.mk)({
                                ref: f.ref
                            }))
                        },
                        onUploadProgress: e => {
                            eB({
                                ref: f.ref,
                                progress: e
                            })
                        },
                        respondentToken: em,
                        isUploadPending: (0, V.d4)((0, tS.GR)(f.ref)),
                        dataConfig: {
                            formId: ej,
                            baseUrl: tP.K.apiHost,
                            fieldId: f.id,
                            visitorId: (0, tx.ct)(ej)
                        },
                        playerMetadata: {
                            video_title: "".concat(ej, "_").concat(f.id),
                            player_name: "renderer_video_answer",
                            custom_1: ej
                        }
                    },
                    e6 = {
                        onUploadSuccess: () => {
                            Q((0, tT.R5)({
                                ref: f.ref
                            })), Q((0, tT.xl)({
                                ref: f.ref
                            }))
                        },
                        onUploadError: e => {
                            Q((0, tT.R5)({
                                ref: f.ref
                            })), Q((0, tT.iN)({
                                ref: f.ref,
                                errorCode: e.code
                            }))
                        },
                        onUploadStart: () => {
                            Q((0, tT.xl)({
                                ref: f.ref
                            })), Q((0, tT.mk)({
                                ref: f.ref
                            }))
                        },
                        onUploadProgress: e => {
                            eB({
                                ref: f.ref,
                                progress: e
                            })
                        },
                        getFileUploadCredentials: tC.iV,
                        uploadToS3: function(e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tC.ZQ;
                            return (0, tC.hl)(e, t, r, n, tI.c)
                        },
                        onModeClick: e => {
                            Q((0, tD.uT)({
                                blockRef: f.ref,
                                mode: e
                            }))
                        }
                    },
                    e7 = !e_.current,
                    te = () => e1 ? new tg.HF(e0) : et ? eo : (0, tg.CU)(U, null == f ? void 0 : f.type, null != f && f.title ? (0, tj.A)(f.title) : void 0),
                    tt = (0, eI.kh)(f),
                    tr = [tu.J_, tu.VF, tu.IY, tu.Tm, tu.uk, tu.a0];
                return eA ? R.createElement(R.Fragment, null, R.createElement(tv.A, tM({}, e, {
                    autoFocusableRef: e_,
                    blockHeight: ed,
                    delayFocus: eR ? ty.lv : 0,
                    effectiveHideRequiredIndicator: eM,
                    focusOnContainer: e7,
                    isShaking: Z,
                    ref: eC,
                    titleCounterIcon: tt,
                    titleFor: z,
                    titleLabelId: e5,
                    titleTag: tr.includes(f.type) ? "label" : "legend",
                    titleText: F,
                    validations: e4,
                    footer: R.createElement(tb.A, {
                        answer: q,
                        application: i,
                        blockError: te(),
                        hideButton: ey,
                        minHeight: ey ? 40 : void 0,
                        blockRef: f.ref,
                        buttonText: n || a,
                        errorMessageId: eX,
                        errorMessageRef: ek,
                        hasFormFooter: e8,
                        hideHelperText: ec,
                        isErrorMessageVisible: !eT && e2,
                        layout: T,
                        layoutItemsSize: _,
                        onClick: eY,
                        submitForm: ez
                    })
                }), R.createElement(ts.gp, tM({
                    type: f.type,
                    answer: q,
                    ariaDescribedBy: (0, tf.un)(f.ref),
                    ariaLabelledBy: tr.includes(f.type) ? (0, tf.fB)(f.ref) : void 0,
                    applicationInfo: o,
                    apiUrl: tP.K.apiHost,
                    blockChangeTime: ty.PH,
                    blockIndex: l,
                    canAutoFocus: c,
                    containerRef: eC,
                    featureFlags: eD,
                    field: f,
                    formId: ej,
                    focusableRef: e_,
                    getCustomMessage: B,
                    hasBeenInteractedWith: p,
                    iframeUrl: g,
                    isActive: h,
                    isLivePreview: j,
                    knowledgeQuizProps: E,
                    locale: A,
                    onBlockInteraction: eq,
                    onBlur: x,
                    onChange: eW,
                    onClose: eU,
                    onCommit: eY,
                    onError: eK,
                    onFocus: eZ,
                    onHeightChange: ef,
                    onHideHelperText: eV,
                    onHideFooterButton: eQ,
                    onLivePreviewUnsupportedError: L,
                    onOpen: eG,
                    showKeyHintOnChoices: eP,
                    signature: ev,
                    theme: H,
                    uniqueId: z,
                    validationResult: e2 ? null == U ? void 0 : U.validationResult : [],
                    hideRequiredIndicator: eM
                }, e9, "signature" === f.type ? e6 : {}, {
                    readingDirection: D,
                    stripeConfig: eg,
                    payPalConfig: eh,
                    price: ew,
                    onFullscreenDropdownChange: e$
                })))) : R.createElement(tv.A, tM({}, e, {
                    autoFocusableRef: e_,
                    blockHeight: ed,
                    delayFocus: eR ? ty.lv : 0,
                    effectiveHideRequiredIndicator: eM,
                    focusOnContainer: e7,
                    isShaking: Z,
                    ref: eC,
                    titleCounterIcon: tt,
                    titleFor: z,
                    titleLabelId: e5,
                    titleTag: "label",
                    titleText: F,
                    validations: e4
                }), R.createElement(ts.gp, tM({
                    answer: q,
                    ariaDescribedBy: e3,
                    applicationInfo: o,
                    apiUrl: tP.K.apiHost,
                    ariaLabelledBy: e5,
                    blockChangeTime: ty.PH,
                    blockIndex: l,
                    canAutoFocus: c,
                    containerRef: eC,
                    featureFlags: eD,
                    field: f,
                    formId: ej,
                    focusableRef: e_,
                    getCustomMessage: B,
                    hasBeenInteractedWith: p,
                    iframeUrl: g,
                    isActive: h,
                    isLivePreview: j,
                    knowledgeQuizProps: E,
                    locale: A,
                    onBlockInteraction: eq,
                    onBlur: x,
                    onChange: eW,
                    onClose: eU,
                    onCommit: eY,
                    onError: eK,
                    onFocus: eZ,
                    onHeightChange: ef,
                    onHideHelperText: eV,
                    onHideFooterButton: eQ,
                    onLivePreviewUnsupportedError: L,
                    onOpen: eG,
                    showKeyHintOnChoices: eP,
                    signature: ev,
                    theme: H,
                    uniqueId: z,
                    validationResult: e2 ? null == U ? void 0 : U.validationResult : [],
                    hideRequiredIndicator: eM
                }, e9, "signature" === f.type ? e6 : {}, {
                    readingDirection: D,
                    stripeConfig: eg,
                    payPalConfig: eh,
                    price: ew,
                    onFullscreenDropdownChange: e$
                })), R.createElement(tb.A, {
                    answer: q,
                    application: i,
                    blockError: te(),
                    hideButton: ey,
                    minHeight: ey ? 40 : void 0,
                    blockRef: f.ref,
                    buttonText: n || a,
                    errorMessageId: eX,
                    errorMessageRef: ek,
                    hasFormFooter: e8,
                    hideHelperText: ec,
                    isErrorMessageVisible: !eT && e2,
                    layout: T,
                    layoutItemsSize: _,
                    onClick: eY,
                    submitForm: ez
                }))
            };
            tz.defaultProps = {
                submitForm: eN.A,
                theme: {
                    colors: {
                        secondary: G.gB
                    }
                }
            }, tz.propTypes = {
                abTests: ei().object,
                accountFeatureFlags: ei().object,
                application: ei().object,
                applicationInfo: ei().object,
                blockIndex: ei().number,
                buttonText: ei().string,
                canAutoFocus: ei().bool,
                validationResult: ei().object,
                disableNavigation: ei().func,
                enableNavigation: ei().func,
                featureFlags: ei().object,
                alternativeButtonText: ei().string,
                field: ei().object,
                fields: ei().array,
                hasHideHelperText: ei().bool,
                hasBranding: ei().bool,
                hasBeenInteractedWith: ei().bool,
                hasDescription: ei().bool,
                hasNavigationArrows: ei().bool,
                hasProgress: ei().bool,
                iframeUrl: ei().string,
                inlineSubmit: ei().func,
                isActive: ei().bool,
                isCommitted: ei().bool,
                isFirstBlock: ei().bool,
                isLivePreview: ei().bool,
                isValid: ei().bool,
                knowledgeQuizProps: ei().shape({
                    useKnowledgeQuizBehaviour: ei().bool,
                    showFeedback: ei().bool
                }),
                language: ei().string,
                layout: ei().object,
                layoutItemsSize: ei().object,
                onBlockInteraction: ei().func,
                onCommitAnswer: ei().func,
                onInputBlur: ei().func,
                onInputFocus: ei().func,
                onLivePreviewUnsupportedError: ei().func,
                onStageAnswer: ei().func,
                readingDirection: ei().string,
                recenter: ei().func,
                submitForm: ei().func,
                t: ei().func,
                theme: ei().object,
                title: ei().oneOfType([ei().array, ei().string]),
                uniqueId: ei().string.isRequired,
                validationError: ei().instanceOf(tg.EZ),
                value: ei().array
            };
            var tV = r(2776),
                tG = r(28362),
                tU = r(89125),
                tq = ["uniqueId", "field"];

            function tJ() {
                return (tJ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var tZ = e => {
                    var t, r, n, i = e.uniqueId,
                        o = e.field,
                        l = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (({}).hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                            }
                            return i
                        }(e, tq),
                        a = (0, I.DP)();
                    return R.createElement(tv.A, tJ({}, l, {
                        titleText: o.title,
                        description: null == (t = o.properties) ? void 0 : t.description,
                        suspended: !0,
                        titleFor: i,
                        theme: a,
                        uniqueId: i
                    }), R.createElement(tU.A, {
                        animated: !0,
                        color: null == a || null == (r = a.colors) ? void 0 : r.button,
                        backgroundColor: null == a || null == (n = a.colors) ? void 0 : n.background,
                        dataQa: "block-loading-skeleton",
                        width: "60%",
                        height: "46px"
                    }))
                },
                tY = r(13043),
                tW = r(86937),
                tK = r(39613);
            let t$ = () => {
                var e = (0, B.mR)().t,
                    t = (0, eq.f)(),
                    r = t.waitForInteraction,
                    n = t.currentBlockHasDelayInteraction,
                    i = (0, eh.G)(eH.tG),
                    o = (0, eh.G)(Y.DZ),
                    l = (0, eh.G)(e => (0, Y.GH)(e, o)),
                    a = 0 === r,
                    c = "number" == typeof r,
                    u = (0, eh.G)(e => (0, ew.q4)(e, null == l ? void 0 : l.ref)),
                    s = (0, eh.G)(e => (0, ew.Cw)(e, null == l ? void 0 : l.ref)) && !1 === u,
                    d = (0, eh.G)(Y.VV),
                    f = (0, eh.G)(e => (0, Y.pe)(e, o)),
                    p = (0, eh.G)(tc.d) && (0, tc.c8)(l),
                    y = f && (0, Y.wc)(f),
                    b = (0, eh.G)(tK.vT),
                    v = (0, eh.G)(e => (0, Q.h)(e, null == l ? void 0 : l.ref)),
                    m = (0, eh.G)(e => !!v && (0, tW.am)(e, v)),
                    g = () => c ? "".concat(e("label.button.reply"), " (").concat(r, ")") : e("video-question.delay-interaction.button.text");
                return {
                    getCommitButtonLabel: function() {
                        var t, r, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            o = void 0;
                        return i || !n || a || u ? !i && s ? (null == l ? void 0 : l.type) === tu.UM ? e("label.button.ok") : e("label.button.reply") : (((null == l ? void 0 : l.type) === tu.F_ || (null == l ? void 0 : l.type) === tu.UM || (null == l ? void 0 : l.type) === tu.zF) && (o = (null == l || null == (r = l.properties) ? void 0 : r.buttonText) || e("label.buttonNoAnswer.default")), (null == l ? void 0 : l.type) === tu.Tw) ? e("label.button.skip") : (((null == l ? void 0 : l.type) === tu.zl || (null == l ? void 0 : l.type) === tu.mx || (null == l ? void 0 : l.type) === tu.a0 || (null == l ? void 0 : l.type) === tu.DX) && (o = p && y ? e("label.knowledgeQuiz.button.continue") : void 0), b && m) ? e("label.button.continue") : o || (null == l || null == (t = l.properties) ? void 0 : t.buttonText) || e("label.button.ok") : g()
                    },
                    getSubmitButtonLabel: () => !n || a || u ? s ? e("label.button.reply") : (null == l ? void 0 : l.type) === tu.Tw ? e("label.button.skip-and-submit") : b ? e("label.button.continue") : i ? e("label.button.submitAndPay", {
                        price: d
                    }) : e("label.button.submit") : g()
                }
            };
            var tQ = ["type", "featureFlags"];

            function tX(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function t0(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tX(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tX(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var t1 = R.lazy(() => Promise.all([r.e(7238), r.e(9104), r.e(2659), r.e(8380), r.e(6804), r.e(7994), r.e(1138)]).then(r.bind(r, 80994))),
                t2 = R.lazy(() => Promise.all([r.e(7238), r.e(9104), r.e(2659), r.e(8380), r.e(6804), r.e(7994), r.e(1138), r.e(2413)]).then(r.bind(r, 36953))),
                t4 = R.lazy(() => r.e(5128).then(r.bind(r, 40622))),
                t3 = R.lazy(() => Promise.all([r.e(2659), r.e(4294), r.e(7458)]).then(r.bind(r, 75722))),
                t5 = R.lazy(() => Promise.all([r.e(2659), r.e(4437)]).then(r.bind(r, 82143))),
                t8 = R.lazy(() => Promise.all([r.e(6185), r.e(1451), r.e(8716)]).then(r.bind(r, 17476))),
                t9 = {
                    [tu.vH]: {
                        component: (0, tG.A)(t4)
                    },
                    [tu.vp]: {
                        component: (0, tG.A)(t3)
                    },
                    [tu.zF]: {
                        component: (0, tG.A)(t5)
                    },
                    [tu.zl]: {
                        component: (0, tG.A)(t1)
                    },
                    [tu.DX]: {
                        component: (0, tG.A)(t2)
                    },
                    [tu.Kh]: {
                        component: (0, tG.A)(t8)
                    }
                },
                t6 = {
                    component: (0, tG.A)(tz)
                },
                t7 = ["title"];

            function re(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? re(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var rr = (0, eW.A)(JSON.stringify, e8.YK),
                rn = () => ((0, to.un)() && window.scrollBy(0, 0), e => {
                    setTimeout(() => {
                        e({
                            type: e0.HF,
                            payload: {
                                isInputFocused: !1
                            }
                        })
                    }, 50)
                });
            let ri = (0, V.Ng)((e, t) => {
                var r, n = t.blockRef,
                    i = t.layoutForViewport,
                    o = (0, e5._z)(n),
                    l = (0, e5.qP)(n),
                    a = (r = null, (e, t) => {
                        var n, a, c = (0, Y.GH)(e, t),
                            u = (0, eH.xG)(e).get(t),
                            s = (0, W.SJ)(e, c),
                            d = u && (0, Y.F4)(u),
                            f = u && (0, Y.wc)(u),
                            p = (0, X.O4)(e),
                            y = !(0, Y.qr)(e) && !(0, Y.Tt)(e),
                            b = e.readingDirection;
                        if (r && !s && r.isActive === s && r.theme === p && r.isCommitted === d && r.isBlockListVisible === y) return r;
                        var v = !(0, e8.yT)(c.type, u),
                            m = u && (0, Y.ZE)(u),
                            g = u && (0, Y.gW)(u),
                            h = (0, eH.Rf)(e, t),
                            w = (0, eH.wN)(e, t),
                            O = (0, e5.G7)(e),
                            j = o(e),
                            P = l(e),
                            E = O(j, {
                                allowHyperlinks: !0
                            }),
                            A = O(P, {
                                allowHyperlinks: !0
                            }),
                            T = c.application ? ((e, t) => {
                                var r, n = (0, Y.GH)(e, t);
                                if (null != (r = n.application) && r.iframeUrl) {
                                    var i = new URL(n.application.iframeUrl),
                                        o = new URLSearchParams(i.search);
                                    return (0, e5.rf)(t)(e).forEach(e => {
                                        e.value !== e6.AI && o.set(e.ref, e.value)
                                    }), (0, Y.CX)(n) && (0, e7.BN)() && o.set("hide_gdpr_banner", "1"), i.search = o, "".concat(i)
                                }
                            })(e, t) : void 0,
                            _ = (0, K.JD)(e),
                            k = (0, $.ve)(e),
                            S = !_ && !(0, $.Jm)(e),
                            x = !_ && !(0, $.AT)(e),
                            C = (0, e3.W)(e, t),
                            L = (0, G.r2)() ? "off" : e2[C],
                            R = (0, ep.sY)(null == (n = p.fields) ? void 0 : n.alignment, null == i ? void 0 : i.type),
                            I = (0, tl.ls)(e) && (0, tl.s7)(e) || (0, $.Z0)(e),
                            D = (0, e4.Hq)(e, t, ((e, t) => {
                                if ((0, eI.Vb)(e.type)) {
                                    var r;
                                    return rt(rt({}, e), {}, {
                                        properties: rt(rt({}, e.properties), {}, {
                                            fields: null == (r = e.properties) || null == (r = r.fields) ? void 0 : r.map(e => {
                                                var r = e.title;
                                                return rt(rt({}, function(e, t) {
                                                    if (null == e) return {};
                                                    var r, n, i = function(e, t) {
                                                        if (null == e) return {};
                                                        var r = {};
                                                        for (var n in e)
                                                            if (({}).hasOwnProperty.call(e, n)) {
                                                                if (-1 !== t.indexOf(n)) continue;
                                                                r[n] = e[n]
                                                            }
                                                        return r
                                                    }(e, t);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var o = Object.getOwnPropertySymbols(e);
                                                        for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                                    }
                                                    return i
                                                }(e, t7)), {}, {
                                                    title: t(r)
                                                })
                                            })
                                        })
                                    })
                                }
                                return e
                            })((0, Y.Er)(e, t), e => O(e, {
                                allowHyperlinks: !0
                            })), rr(u), (0, e9.tu)(e, t)),
                            M = D.field,
                            N = D.value,
                            B = D.autosavedAnswer,
                            H = ((e, t) => {
                                var r, n = (0, Y.GH)(e, t),
                                    i = null == n || null == (r = n.properties) ? void 0 : r.invitee;
                                if (i) {
                                    var o = (0, e5.sn)(e);
                                    return {
                                        name: tr(i.name, o),
                                        email: tr(i.email, o)
                                    }
                                }
                            })(e, t),
                            F = H ? rt(rt({}, M), {}, {
                                properties: rt(rt({}, M.properties), {}, {
                                    invitee: H
                                })
                            }) : M,
                            z = (0, tc.d)(e) && (0, tc.c8)(M);
                        z && (a = {
                            useKnowledgeQuizBehaviour: !0,
                            showFeedback: z && f
                        });
                        var V = (0, ti.r)(e),
                            U = rt(rt({}, c), {}, {
                                abTests: (0, tn.he)(e),
                                autoComplete: L,
                                autosavedAnswer: B,
                                blockIndex: (0, Y.wA)(e, t),
                                description: A,
                                featureFlags: V,
                                field: F,
                                formId: (0, $.eM)(e),
                                getOriginalLanguageChoiceLabel: (e, t) => {
                                    if (e && t) return ta.A.getOriginalLanguageChoiceLabelById(e, t)
                                },
                                hasBeenInteractedWith: g,
                                hasBranding: k,
                                hasDescription: !!(null != P && P.length),
                                hasNavigationArrows: S,
                                hasProgress: x,
                                iframeUrl: T,
                                isActive: s,
                                isAnswered: v,
                                isBlockListVisible: y,
                                isCommitted: d,
                                isFirstBlock: (0, W.m_)(e, t),
                                isLivePreview: (0, $.jq)(e),
                                isReviewModeEnabled: (0, $.V0)(e),
                                isScrollNearTop: (0, $.Jh)(e),
                                isValid: m,
                                isVisibleGroupStickyHeader: (0, Y.m1)(e),
                                knowledgeQuizProps: a,
                                language: I,
                                readingDirection: b,
                                ref: void 0,
                                scrolling: (0, $.sk)(e),
                                shouldClearInput: !v && (0, $.jq)(e),
                                showKeyHintOnChoices: (0, $.r2)(e),
                                textAlign: R,
                                theme: p,
                                title: E,
                                uniqueId: (0, W.AI)(e, t),
                                validationError: h,
                                validationErrors: w,
                                value: N
                            });
                        return r = U, U
                    });
                return e => a(e, n)
            }, (e, t) => {
                var r = t.blockRef;
                return rt({}, (0, eY.zH)({
                    blockHeightChanging: U.Wj,
                    onCommitAnswer: eK.Mw,
                    onStageAnswer: eK.fW,
                    goToBlock: U.P,
                    recenter: U.iZ,
                    scrollToChoice: U.sq,
                    endAutoScroll: U.qw,
                    onInputFocus: e1,
                    onInputBlur: rn,
                    onRequireStickyFooter: e$.O,
                    onRequireStickyHeader: eQ.q,
                    onUnrecoverableError: eX.EU,
                    setBlockTrackingData: z.zb,
                    inlineSubmit: J.gX,
                    onBlockInteraction: () => eX.TJ(r),
                    submitForm: J.rM
                }, e))
            })(e => {
                var t = e.type,
                    r = e.featureFlags,
                    n = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if (({}).hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, tQ),
                    i = t$().getCommitButtonLabel,
                    o = (0, tY.o)().onUnsupportedError,
                    l = (0, V.d4)($.eM);
                (0, R.useEffect)(() => {
                    var e = n.blockRef,
                        t = n.isActive,
                        r = n.isLivePreview,
                        i = n.onStageAnswer,
                        o = n.autosavedAnswer,
                        a = n.setBlockTrackingData,
                        c = void 0 === a ? eN.A : a,
                        u = n.value;
                    if (!r && t && o && (null == u || !u.length)) {
                        if (c(e, tV.rC, tV.f2.PARTIAL_RESPONSE), (0, tx.$3)(l, e)) return (0, tx.Dv)(l, e);
                        i(e, o, null, {
                            isFromPrefilledAnswer: !0
                        })
                    }
                }, [n.isActive]);
                var a = (0, ts.rl)(t, null != r ? r : {}) ? t6 : t9[t];
                if (!a) return null;
                var c = i(!0),
                    u = t0(t0({
                        type: t,
                        featureFlags: r,
                        onLivePreviewUnsupportedError: o
                    }, n), {}, {
                        alternativeButtonText: c
                    });
                return R.createElement(R.Suspense, {
                    fallback: R.createElement(tZ, u)
                }, R.createElement(a.component, u))
            });
            var ro = r(71192),
                rl = r(66319),
                ra = r(63142);

            function rc(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var ru = I.Ay.div(O || (O = rc(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding-block-start: ", "px;\n  pointer-events: ", ";\n  opacity: ", ";\n  ", "\n"])), e => e.topOffset, e => {
                var t = e.isVisible,
                    r = e.shouldBeBefore,
                    n = e.shouldBeAfter;
                return !t || r || n ? "none" : "auto"
            }, e => {
                var t = e.isEnhanced,
                    r = e.prefersReducedMotion,
                    n = e.shouldBeBefore,
                    i = e.shouldBeAfter;
                return t && !r ? 1 : n || i ? 0 : 1
            }, e => {
                var t = e.prefersReducedMotion,
                    r = e.shouldBeBefore,
                    n = e.shouldBeAfter,
                    i = e.isEnhanced;
                return t ? (0, I.AH)(y || (y = rc(["\n      transition: opacity ", "ms ease;\n    "])), ty.PH / 2) : i ? (0, I.AH)(b || (b = rc(["\n      transition: transform ", "ms\n        cubic-bezier(0.53, 0, 0, 1);\n      ", "\n      ", "\n    "])), ty.qI, r && (0, I.AH)(v || (v = rc(["\n        transform: translateY(-100vh);\n      "]))), n && (0, I.AH)(m || (m = rc(["\n        transform: translateY(100vh);\n      "])))) : (0, I.AH)(g || (g = rc(["\n    transition: transform ", "ms ease,\n      opacity ", "ms ease;\n    ", "\n    ", "\n  "])), ty.PH, ty.PH / 2, r && (0, I.AH)(h || (h = rc(["\n      transform: translateY(-100vh);\n    "]))), n && (0, I.AH)(w || (w = rc(["\n      transform: translateY(100vh);\n    "]))))
            });
            let rs = R.memo(e => {
                var t, r, n, i, o, l, a = e.areBlocksVisible,
                    c = e.block,
                    u = e.blockIndex,
                    s = e.component,
                    d = e.currentBlockIndex,
                    f = e.currentRef,
                    p = e.disableNavigation,
                    y = e.enableNavigation,
                    b = e.goToBlock,
                    v = e.goToNextBlock,
                    m = e.handleCanSwipeChange,
                    g = e.handleIsVideoPlayingChange,
                    h = e.isDisplayed,
                    w = e.isVideoPlaying,
                    O = e.layoutItemsSize,
                    j = e.listIndexText,
                    P = e.nextRef,
                    E = e.prefersReducedMotion,
                    A = e.previousActiveRef,
                    T = e.previousRef,
                    _ = e.topOffset,
                    k = (0, V.d4)(e => (0, eH.xG)(e).get(c.ref)),
                    S = (0, V.d4)($.V0),
                    x = (0, V.d4)(eH.s2),
                    C = null == x ? void 0 : x.ref,
                    L = c.ref === P,
                    I = c.ref === f,
                    D = c.ref === A,
                    M = a && (I || D),
                    N = (0, eh.G)(e => (0, rl.n)(e, tp.$G)) === ra.Gt,
                    B = (0, eJ.m)(),
                    F = (0, H.dv)(),
                    z = (0, eZ.d)(),
                    G = (r = (t = c.ref) === (0, eh.G)(Y.DZ), n = (0, eh.G)($.$G), i = (0, eh.G)(Y.aw), o = (0, eh.G)(Y.bQ), l = (0, eh.G)(e => (0, W.m_)(e, t)), !!r && !n && (!l || !!o || i)),
                    U = (0, eF.A)(B ? z : F, c.layout),
                    q = {
                        currentRef: f,
                        previousRef: T,
                        previousActiveRef: A,
                        nextRef: P
                    };
                S && (q.firstInvalidBlockInReviewModeRef = C);
                var J = !eM(c, k, q, a) || !eD && L && !a,
                    Z = (0, R.useCallback)(e => {
                        I || (L ? v({
                            navigationType: (0, ro.K)(e)
                        }) : b(c.ref, {
                            navigationType: (0, ro.K)(e)
                        }))
                    }, [b, I, L]);
                if (J || !h) return null;
                var K = u > d || !a,
                    Q = u < d;
                return B ? R.createElement(s, {
                    blockRef: c.ref,
                    canAutoFocus: G,
                    disableNavigation: p,
                    enableNavigation: y,
                    isVideoPlaying: w,
                    layoutItemsSize: O,
                    listIndexText: j,
                    onChangeCanSwipe: m,
                    onVideoClick: g,
                    layoutForViewport: U,
                    questionPosition: Q ? "previous" : K ? "next" : "current"
                }) : R.createElement(ru, {
                    isVisible: M,
                    key: c.ref,
                    onFocus: Z,
                    prefersReducedMotion: E,
                    shouldBeAfter: K,
                    shouldBeBefore: Q,
                    topOffset: _,
                    isEnhanced: !!N
                }, R.createElement(s, {
                    blockRef: c.ref,
                    canAutoFocus: G,
                    disableNavigation: p,
                    enableNavigation: y,
                    isVideoPlaying: w,
                    layoutItemsSize: O,
                    listIndexText: j,
                    onChangeCanSwipe: m,
                    onVideoClick: g,
                    layoutForViewport: U
                }))
            });

            function rd(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rf(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rd(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rd(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function rp(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, l, a = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!c && null != r.return && (l = r.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ry(e, t);
                        var r = ({}).toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ry(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ry(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function rb(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var rv = R.lazy(() => Promise.resolve().then(r.bind(r, 84479))),
                rm = I.Ay.div(j || (j = rb(["\n  height: 100%;\n"]))),
                rg = I.Ay.div(P || (P = rb(["\n  width: 100%;\n  height: ", ";\n"])), e => e.height),
                rh = I.Ay.div(E || (E = rb(["\n  height: 100%;\n  ", "\n"])), e => e.isPulseSurveyActive && (0, I.AH)(A || (A = rb(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n    "])))),
                rw = R.memo(function(e) {
                    var t = e.block,
                        r = e.breakpoint,
                        n = e.refs,
                        i = e.areBlocksVisible,
                        o = e.isVideoPlaying,
                        l = e.onVideoClick,
                        a = e.handlePlayBlockMedia,
                        c = e.handleAutoplayFailed,
                        u = e.onTimeUpdateBlockMedia,
                        s = e.previousAttachment,
                        d = e.mediaMetadata,
                        f = e.isAutoplay,
                        p = e.shouldMuteAutoplay;
                    return ((e, t, r, n, i, o, l, a, c, u, s, d, f, p) => {
                        var y, b, v, m, g, h, w = (0, eF.A)(r, t.layout) || {
                                type: ep.$1.STACK
                            },
                            O = w.type,
                            j = w.placement,
                            P = n.currentRef,
                            E = null != (y = null == t || null == (b = t.layout) ? void 0 : b.attachment) ? y : t.attachment,
                            A = rp((null == t ? void 0 : t.media) || [], 1)[0];
                        if (!eM(t, e, n, i)) return null;
                        var T = null == E ? void 0 : E.href,
                            _ = null == E ? void 0 : E.type,
                            k = null != (v = null == E || null == (m = E.properties) ? void 0 : m.focalPoint) ? v : ep.VG,
                            S = null == E || null == (g = E.properties) ? void 0 : g.brightness,
                            x = null == E || null == (h = E.properties) ? void 0 : h.description,
                            C = t.ref === P,
                            L = s !== T || !C,
                            I = !!(null != A && A.enabled);
                        I && (O = ez.O, j = ep.GE.LEFT);
                        var D = (0, ep.Tw)(O, r),
                            M = rf(rf({}, null == A ? void 0 : A.properties), {}, {
                                isAutoplay: f
                            });
                        return eo.zd.includes(D) && I ? R.createElement(ed, {
                            shouldMuteAutoplay: p,
                            onAutoplayFailed: c,
                            mediaHref: null == A ? void 0 : A.href,
                            breakpoint: r,
                            properties: M,
                            isVisible: C,
                            key: t.ref,
                            enableAnimation: L,
                            onPlay: a,
                            onTimeUpdate: u,
                            mediaMetadata: d
                        }) : eo.oj.includes(D) && E ? R.createElement(R.Suspense, {
                            fallback: null
                        }, R.createElement(rv, {
                            attachmentAlt: x,
                            attachmentBrightness: S,
                            attachmentFocalPoint: k,
                            attachmentHref: T,
                            attachmentType: _,
                            breakpoint: r,
                            enableAnimation: L,
                            isVideoPlaying: o && C,
                            isVisible: C,
                            key: t.ref,
                            layoutPlacement: j,
                            layoutType: O,
                            onVideoClick: l,
                            pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e"
                        })) : null
                    })((0, V.d4)(e => (0, eH.xG)(e).get(t.ref)), t, r, n, i, o, l, a, c, u, s, d, f, p)
                }),
                rO = e => {
                    var t, r, n, i, o, l, a, c = e.blockChanging,
                        u = e.blocks,
                        s = e.canShowSubmitButton,
                        d = e.component,
                        f = e.currentPath,
                        p = e.currentRef,
                        y = e.disableNavigation,
                        b = e.enableNavigation,
                        v = e.forceSubmitButtonVisible,
                        m = e.goToBlock,
                        g = e.goToNextBlock,
                        h = e.goToPreviousBlock,
                        w = e.inlineSubmit,
                        O = e.isBlockChanging,
                        j = e.isLivePreview,
                        P = e.isPartialSubmitButtonVisible,
                        E = e.isSubmitButtonVisible,
                        A = e.isVisible,
                        T = e.layoutItemsSize,
                        _ = e.nextRef,
                        k = e.originalBlocks,
                        S = e.previousActiveRef,
                        x = e.previousRef,
                        C = e.submitFormUpToMilestone,
                        L = e.theme,
                        I = e.topOffset,
                        D = (0, eR.A)(k, f),
                        M = (0, ee.WY)(u, p),
                        N = (0, V.wA)(),
                        B = (0, eJ.m)(),
                        z = (0, eb.j)(),
                        G = (0, eh.G)(F.UL),
                        U = (r = (t = {
                            submitFormUpToMilestone: C,
                            inlineSubmit: w,
                            goToNextBlock: g,
                            currentRef: p,
                            isPartialSubmitButtonVisible: P
                        }).submitFormUpToMilestone, n = t.inlineSubmit, i = t.goToNextBlock, o = t.currentRef, l = t.isPartialSubmitButtonVisible, {
                            handleCtrlEnter: (0, R.useCallback)(e => {
                                l || n(o, e)
                            }, [l, n, o]),
                            handleEnter: (0, R.useCallback)(e => {
                                l ? r(e) : i({
                                    navigationType: (0, ro.K)(e)
                                })
                            }, [l, r, i])
                        }),
                        q = U.handleCtrlEnter,
                        J = U.handleEnter,
                        Z = (0, eh.G)(ew.r8),
                        Y = !(0, eh.G)(ew.pE),
                        W = rp((0, R.useState)(!1), 2),
                        K = W[0],
                        $ = W[1],
                        Q = rp((0, R.useState)(!1), 2),
                        X = Q[0],
                        et = Q[1],
                        er = rp((0, R.useState)(!z), 2),
                        en = er[0],
                        ei = er[1],
                        ea = rp((0, R.useState)(), 2),
                        ec = ea[0],
                        eu = ea[1],
                        es = Z && !z;
                    (0, R.useEffect)(() => {
                        en || z || ei(!0)
                    }, [p, A]), (0, R.useEffect)(() => {
                        z && ei(!1)
                    }, [z]), (0, R.useEffect)(() => {
                        A && c()
                    }, [A]);
                    var ed = (0, H.dv)(),
                        em = (0, eZ.d)(),
                        eg = B ? em : ed,
                        ej = (0, ee.GH)(u, p),
                        eP = (0, eF.A)(eg, null == ej ? void 0 : ej.layout),
                        eE = (null == eP ? void 0 : eP.type) || ep.$1.STACK,
                        eA = (null == ej || null == (a = ej.layout) ? void 0 : a.attachment) || (null == ej ? void 0 : ej.attachment),
                        eT = rp((null == ej ? void 0 : ej.media) || [], 1)[0],
                        e_ = !!(null != eT && eT.enabled);
                    e_ && (eA = {
                        href: eT.href,
                        type: "video"
                    }, eE = ez.O);
                    var ek = (0, R.useCallback)(e => {
                            var t = e.next,
                                r = e.previous;
                            t !== K && $(t), r !== X && et(r)
                        }, [K, X]),
                        eS = (0, eU.$)(),
                        eI = eS.trackMediaPlay,
                        eD = eS.trackAutoplayFailed,
                        eM = (0, eq.f)(),
                        eN = eM.startCountdown,
                        eH = eM.currentBlockHasDelayInteraction,
                        eY = eM.getWaitForInteractionRefValueByBlockRef,
                        eW = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (eI(p, e, t), !e || t) {
                                e || N((0, eO.FO)());
                                var r = eY(x);
                                eH && ("number" != typeof r || 0 === r) && eN()
                            }
                        },
                        eK = () => {
                            eD(p)
                        },
                        e$ = (0, R.useCallback)(() => {
                            var e;
                            z || (null == (e = eA) ? void 0 : e.type) !== ey.r.video || ei(e => !e)
                        }, [z, eA, ei]),
                        eQ = (0, R.useCallback)((e, t) => {
                            if (!O) {
                                if ((0, eB.nx)(e) && e$(), (0, eB.vY)(e) && !(0, eB.eb)(e) && !E && !P && s && t) {
                                    if ("payment" !== ej.type && !(0, ee.F2)("block-".concat(ej.ref), e.srcElement)) return;
                                    v(!0), e.preventDefault();
                                    return
                                }
                                if ((0, eB.jd)(e)) {
                                    q(e), e.preventDefault();
                                    return
                                }!(0, eB.Ci)(e) || E || (0, eB.eb)(e) || t || (J(e), e.preventDefault())
                            }
                        }, [e$, q, J, E, P, s, v, ej, O]),
                        eX = {
                            currentRef: p,
                            previousRef: x,
                            previousActiveRef: S,
                            nextRef: _
                        };
                    (0, R.useEffect)(() => {
                        var e, t = (0, ee.GH)(u, S);
                        t && eu(null == (e = t.attachment) ? void 0 : e.href)
                    }, [ej]);
                    var e0 = (0, eV.Z)().setCurrentMediaProgress,
                        e1 = (0, eG.n)(null == ej ? void 0 : ej.ref);
                    return R.createElement(rm, null, R.createElement(eC.A.Provider, {
                        value: O
                    }, R.createElement(eL.fE, {
                        commonHandleKeydown: eQ,
                        areGlobalListenersDisabled: j
                    }, R.createElement(ex, {
                        goToPreviousBlock: h,
                        goToNextBlock: g,
                        canSwipeNext: K,
                        canSwipePrevious: X,
                        fullHeight: !0
                    }, R.createElement(rh, {
                        isPulseSurveyActive: G
                    }, G ? R.createElement(el.Ay, {
                        position: "center"
                    }, R.createElement(ef.A, {
                        width: 100,
                        height: 100,
                        color: L.colors.button,
                        viewBox: "100 100 300 300"
                    })) : null, R.createElement(rg, {
                        height: G ? ev.hQ : "100%"
                    }, R.createElement(eo.Ay, {
                        hasAttachment: !!eA,
                        backgroundColor: L.colors.background,
                        blocksAttachment: B ? [] : u.map(e => R.createElement(rw, {
                            key: e.ref,
                            block: e,
                            breakpoint: ed,
                            refs: eX,
                            areBlocksVisible: A,
                            isVideoPlaying: en,
                            onVideoClick: e$,
                            handlePlayBlockMedia: eW,
                            handleAutoplayFailed: eK,
                            onTimeUpdateBlockMedia: e0,
                            previousAttachment: ec,
                            mediaMetadata: e1,
                            isAutoplay: es,
                            shouldMuteAutoplay: Y
                        })),
                        breakpoint: eg,
                        isVisible: A,
                        isMediaEnabled: e_,
                        layoutType: eE
                    }, u.map((e, t, r) => {
                        var n = e.ref,
                            i = (0, ee.xJ)(e, f),
                            o = D[(0, ee.WY)(f, n)],
                            l = (0, ee.WY)(r, n);
                        return R.createElement(rs, {
                            areBlocksVisible: A,
                            block: e,
                            blockIndex: l,
                            component: d,
                            currentBlockIndex: M,
                            currentRef: p,
                            disableNavigation: y,
                            enableNavigation: b,
                            goToBlock: m,
                            goToNextBlock: g,
                            handleCanSwipeChange: ek,
                            handleIsVideoPlayingChange: e$,
                            isDisplayed: i,
                            isVideoPlaying: en,
                            key: n,
                            layoutItemsSize: T,
                            listIndexText: o,
                            nextRef: _,
                            previousActiveRef: S,
                            previousRef: x,
                            topOffset: I,
                            prefersReducedMotion: z || G
                        })
                    }))))))))
                };
            rO.defaultProps = {
                blocks: [],
                blockChanging: eN.A,
                component: ri,
                goToBlock: eN.A,
                theme: {
                    colors: {
                        background: G.gB
                    }
                }
            }, rO.propTypes = {
                blockChanging: ei().func,
                blocks: ei().array.isRequired,
                canShowSubmitButton: ei().bool,
                component: ei().elementType,
                currentPath: ei().array,
                currentRef: ei().string,
                disableNavigation: ei().func,
                enableNavigation: ei().func,
                forceSubmitButtonVisible: ei().func,
                goToBlock: ei().func,
                goToNextBlock: ei().func,
                goToPreviousBlock: ei().func,
                handleCanSwipeChange: ei().func,
                inlineSubmit: ei().func,
                isBlockChanging: ei().bool,
                isLivePreview: ei().bool,
                isPartialSubmitButtonVisible: ei().bool,
                isSubmitButtonVisible: ei().bool,
                isVisible: ei().bool,
                layoutItemsSize: ei().object,
                nextRef: ei().string,
                onEndAutoScroll: ei().func,
                originalBlocks: ei().array,
                previousActiveRef: ei().string,
                previousRef: ei().string,
                scrolling: ei().shape({
                    anchor: ei().string,
                    scrollType: ei().string
                }),
                submitFormUpToMilestone: ei().func,
                theme: ei().object,
                topOffset: ei().number
            };
            var rj = {
                blockChanging: U.LD,
                disableNavigation: U.VW,
                enableNavigation: U.Si,
                forceSubmitButtonVisible: U.gG,
                goToBlock: U.P,
                goToNextBlock: q.i,
                goToPreviousBlock: U.AR,
                inlineSubmit: J.gX,
                submitFormUpToMilestone: Z.td,
                onEndAutoScroll: U.qw
            };
            let rP = (0, V.Ng)(e => {
                var t = (0, Y.DZ)(e),
                    r = (0, G.CI)() && (0, $.Ms)(e),
                    n = !(0, K.dh)(e) && !r && (0, Y.m1)(e),
                    i = n ? (0, $.OW)(e) : null,
                    o = (0, ee.Jg)(i),
                    l = (0, X.A)(e),
                    a = 0;
                n && !l && (a = o ? 88 : 60);
                var c = (0, Y.GH)(e, t),
                    u = (0, et.Dd)(e),
                    s = (0, er.T)(c, u);
                return {
                    blocks: (0, Y.Tr)(e),
                    canShowSubmitButton: (0, $.UI)(e, t),
                    currentPath: (0, Y.Ti)(e),
                    currentRef: t,
                    isBlockChanging: (0, $.$G)(e),
                    isLivePreview: (0, $.jq)(e),
                    isSubmitButtonVisible: (0, $.nC)(e, t),
                    isPartialSubmitButtonVisible: s,
                    nextRef: (0, Q.h)(e, t),
                    previousActiveRef: (0, $.LU)(e),
                    previousRef: (0, W.Gq)(e),
                    scrolling: (0, $.sk)(e),
                    theme: (0, X.O4)(e),
                    topOffset: a,
                    originalBlocks: (0, Y.tT)(e)
                }
            }, rj)(rO);
            var rE = r(50425),
                rA = r(12671),
                rT = r(46111),
                r_ = r(52936),
                rk = r(93540),
                rS = r(33321),
                rx = r(52146);

            function rC(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var rL = I.Ay.div(T || (T = rC(["\n  display: flex;\n  align-items: center;\n"]))),
                rR = I.Ay.div(_ || (_ = rC(["\n  pointer-events: all;\n  width: 100%;\n  overflow: hidden;\n  z-index: ", ";\n  opacity: ", ";\n  display: ", ";\n"])), e => e.isActive ? rk.mh.level3 : rk.mh.level0, e => e.isActive ? "1" : "0", e => e.isActive ? "unset" : "none"),
                rI = I.Ay.div(k || (k = rC(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-block-start: 1px solid;\n  height: ", "px;\n  background-color: ", ";\n  border-color: ", ";\n"])), e => e.$height, e => (0, G.JO)((0, G.jh)(e.contextBackgroundColor, e.$color, .2)), e => (0, G.jh)(e.contextBackgroundColor, e.$color, .3)),
                rD = e => {
                    var t = e.blockRef,
                        r = e.show,
                        n = e.theme,
                        i = e.t,
                        o = e.breakpoint,
                        l = e.buttonText,
                        a = e.showButtonIcon,
                        c = e.isButtonTypeSubmit,
                        u = e.isLivePreview,
                        s = e.isPaymentBlockAnswered,
                        d = e.onCommitAnswer,
                        f = e.price,
                        p = e.recenter,
                        y = e.submit,
                        b = e.submitForm;
                    if (!(0, M.$E)()) return null;
                    var v = "sm" === o,
                        m = a ? r_.A : null;
                    return R.createElement(rR, {
                        "aria-hidden": !0,
                        "data-qa": "sticky-footer-placeholder",
                        isActive: r
                    }, R.createElement(D.Ay, {
                        type: "slideUp",
                        isVisible: r
                    }, R.createElement(rI, {
                        $height: 56,
                        contextBackgroundColor: n.colors.background,
                        $color: n.colors.secondary,
                        "data-qa": "sticky-footer",
                        "data-qa-visible": r
                    }, R.createElement(rA.Ay, {
                        noPadding: !1
                    }, R.createElement(rL, null, c ? R.createElement(rx.z, {
                        centered: v,
                        fullWidth: v,
                        helperText: "",
                        isComplete: y.isComplete,
                        isLivePreview: u,
                        isPaymentBlockAnswered: s,
                        isSubmitting: y.isSubmitting,
                        onClick: e => {
                            p(tm._N), b(e)
                        },
                        price: f,
                        size: "medium",
                        t: i,
                        theme: n
                    }) : R.createElement(rT.Ay, {
                        fullWidth: v,
                        onClick: e => {
                            d(t, e, {
                                source: rS.c
                            })
                        },
                        iconSvg: m,
                        size: "medium",
                        color: n.colors.button,
                        contentColor: n.colors.buttonContent,
                        contextBackgroundColor: n.colors.background,
                        transparent: n.hasTransparentButton,
                        dataQa: "sticky-footer-button"
                    }, i(l)))))))
                };
            rD.defaultProps = {
                t: e => e,
                recenter: e => e,
                buttonText: "label.button.ok",
                showButtonIcon: !0,
                theme: {
                    colors: {
                        background: G.gB,
                        button: G.gB,
                        secondary: G.gB
                    }
                },
                submit: {
                    retry: {},
                    isComplete: !1,
                    isSubmitting: !1
                }
            }, rD.propTypes = {
                show: ei().bool,
                theme: ei().object,
                blockRef: ei().string,
                breakpoint: ei().string,
                buttonText: ei().string,
                showButtonIcon: ei().bool,
                recenter: ei().func,
                onCommitAnswer: ei().func,
                price: ei().string,
                isButtonTypeSubmit: ei().bool,
                isLivePreview: ei().bool,
                isPaymentBlockAnswered: ei().bool,
                submit: ei().object,
                submitForm: ei().func,
                t: ei().func
            };
            let rM = (0, H.Wj)((0, tG.A)(rD));
            var rN = {
                onCommitAnswer: eK.Mw,
                recenter: U.iZ,
                submitForm: J.rM
            };
            let rB = (0, V.Ng)(e => {
                var t = (0, Y.DZ)(e),
                    r = (0, $.Nz)(e),
                    n = (0, Y.GH)(e, r);
                if (!n || r !== t) return {
                    show: !1,
                    theme: (0, X.O4)(e)
                };
                var i = (0, G.CI)() && (0, $.Ms)(e),
                    o = (0, $.oJ)(e, r);
                return {
                    blockRef: r,
                    buttonText: n.buttonText,
                    isButtonTypeSubmit: o,
                    isLivePreview: (0, $.jq)(e),
                    isPaymentBlockAnswered: (0, eH.tG)(e),
                    price: (0, Y.VV)(e),
                    show: !(0, K.JD)(e) && !i,
                    showButtonIcon: !(0, Y._s)(n),
                    submit: (0, tE.NX)(e),
                    theme: (0, X.O4)(e)
                }
            }, rN)(rM);
            var rH = r(15477),
                rF = r(41338),
                rz = I.Ay.div(S || (a = ["\n  position: absolute;\n  bottom: 0; /* stylelint-disable-line */\n  left: 0; /* stylelint-disable-line */\n  right: 0; /* stylelint-disable-line */\n  inset-block-end: 0;\n  inset-inline: 0;\n  z-index: 10;\n  opacity: inherit;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  -webkit-backdrop-filter: blur();\n"], c || (c = a.slice(0)), S = Object.freeze(Object.defineProperties(a, {
                    raw: {
                        value: Object.freeze(c)
                    }
                })))),
                rV = r(21484),
                rG = e => {
                    var t, r;
                    return null != (t = null == (r = e.consentScreen) ? void 0 : r.isVisible) && t
                },
                rU = r(27440),
                rq = r(28105),
                rJ = r(93501),
                rZ = r(68132),
                rY = r(34129),
                rW = r(87149),
                rK = r(95405),
                r$ = r(59649),
                rQ = r(86456),
                rX = I.Ay.div.withConfig({
                    displayName: "Root",
                    componentId: "sc-__sc-1ckh2u2-0"
                })(["background-color:", ";transition:background-color 500ms cubic-bezier(0.23,1,0.32,1);width:100%;display:flex;flex-direction:column;"], e => {
                    var t = e.backgroundColor,
                        r = e.embedBackgroundOpacity;
                    return r < 1 && t ? (0, G.ZY)(t, r) : (0, G.JO)(t)
                }),
                r0 = I.Ay.div.withConfig({
                    displayName: "FooterWrapper",
                    componentId: "sc-__sc-1ckh2u2-1"
                })(["width:100%;display:flex;justify-content:flex-start;flex-direction:row-reverse;font-family:", ";padding:", "px;pointer-events:none;", ";"], rk.dH, e => e.isVisible ? rk.zA * e.paddingSize : 0, e => e.isVisible ? "" : r$.a),
                r1 = I.Ay.div.withConfig({
                    displayName: "ButtonsWrapper",
                    componentId: "sc-__sc-1ckh2u2-2"
                })(["display:flex;flex-direction:row;justify-content:", ";width:", ";box-shadow:none;border-radius:4px;user-select:none;line-height:0;background-color:transparent;pointer-events:auto;white-space:nowrap;"], e => {
                    var t, r;
                    return t = e.breakpoint, r = e.withNavigationArrows, "sm" === t && r ? "space-between" : "flex-end"
                }, e => "sm" === e.breakpoint ? "100%" : "auto"),
                r2 = I.Ay.div.withConfig({
                    displayName: "ButtonDivider",
                    componentId: "sc-__sc-1ckh2u2-3"
                })(["background-color:", ";", ";width:1px;"], e => e.transparentButtons ? (0, G.VI)((0, G.ov)(e.contextBackgroundColor)) : (0, G.VI)((0, G.ov)(e.buttonsColor)), e => e.transparentButtons && "margin-inline-start: -1px;"),
                r4 = I.Ay.nav.withConfig({
                    displayName: "Navigation",
                    componentId: "sc-__sc-1ckh2u2-4"
                })(["display:flex;flex-direction:row-reverse;border-radius:var(--sampler-comp-radius-footer);", ";", ";background-color:", ";", ""], e => e.isVisible ? "" : r$.a, e => e.isVisible ? "" : "inset-block-start: -40px", e => e.transparentButtons ? "transparent" : e.buttonsColor, e => e.withMargin && "margin-inline-end: 8px;"),
                r3 = I.Ay.div.withConfig({
                    displayName: "LeftButtonsWrapper",
                    componentId: "sc-__sc-1ckh2u2-5"
                })(["display:flex;", ""], e => e.isFloating && (0, I.AH)(["flex-direction:row-reverse;"])),
                r5 = (0, I.Ay)(rT.Ay).withConfig({
                    displayName: "BrandButton",
                    componentId: "sc-__sc-1ckh2u2-6"
                })(["display:flex;border-radius:var(--sampler-comp-radius-footer);text-decoration:none;padding-block-start:0;padding-block-end:0;padding-inline-start:var(--sampler-comp-padding-footer);padding-inline-end:var(--sampler-comp-padding-footer);overflow:hidden;", " ", " ", ""], e => e.reducePadding && "\n    padding-inline-start: ".concat(rk.zA, "px;\n    padding-inline-end: ").concat(rk.zA, "px;\n  "), e => e.multiline && "\n    strong {\n      display: block;\n    }\n  ", e => e.textSize && rk.yM[e.textSize]),
                r8 = e => {
                    var t = e.dataQa,
                        r = e.size,
                        n = e.children;
                    return (0, ec.jsx)("span", {
                        "data-qa": "".concat(t, "-brand-button"),
                        children: (0, ec.jsx)(rW.Ay, {
                            fontWeight: "regular",
                            htmlTag: "span",
                            responsive: !1,
                            size: r,
                            children: n
                        })
                    })
                };
            let r9 = e => {
                var t = e.brandAriaLabel,
                    r = e.brandButtonHref,
                    n = e.brandButtonText,
                    i = void 0 === n ? (0, ec.jsxs)("span", {
                        children: ["Powered by ", (0, ec.jsx)("strong", {
                            children: "Typeform"
                        })]
                    }) : n,
                    o = e.buttonsColor,
                    l = e.buttonsContentColor,
                    a = e.contextBackgroundColor,
                    c = void 0 === a ? "white" : a,
                    u = e.dataQa,
                    s = void 0 === u ? "footer" : u,
                    d = e.embedBackgroundOpacity,
                    f = e.nextButtonDisabled,
                    p = e.nextButtonOnClick,
                    y = void 0 === p ? G.lQ : p,
                    b = e.onClickBrandButton,
                    v = void 0 === b ? G.lQ : b,
                    m = e.previousButtonDisabled,
                    g = e.previousButtonOnClick,
                    h = void 0 === g ? G.lQ : g,
                    w = e.progressBackgroundColor,
                    O = e.transparentButtons,
                    j = e.visible,
                    P = e.withBranding,
                    E = e.withNavigationArrows,
                    A = void 0 === E || E,
                    T = (0, rK.fN)().t,
                    _ = (0, H.dv)(),
                    k = (0, H.uc)(),
                    S = "sm" !== _ && !(0, G.CI)(),
                    x = S ? "sizeN1" : "sizeN2",
                    C = k <= rk.D9.xs,
                    L = j && (A || P),
                    R = rZ.A,
                    I = rY.A;
                return (0, ec.jsxs)(rX, {
                    backgroundColor: S ? void 0 : w,
                    embedBackgroundOpacity: void 0 === d ? 1 : d,
                    children: [(0, ec.jsx)(r0, {
                        "data-qa": s,
                        isVisible: L,
                        paddingSize: "sm" === _ ? 1 : 4,
                        children: (0, ec.jsxs)(r1, {
                            breakpoint: _,
                            buttonsColor: o,
                            transparentButtons: O,
                            withNavigationArrows: A,
                            children: [(0, ec.jsx)(r3, {
                                isFloating: S,
                                children: (0, ec.jsxs)(r4, {
                                    isVisible: A,
                                    buttonsColor: o,
                                    transparentButtons: O,
                                    withMargin: "sm" !== _ && P,
                                    children: [(0, ec.jsx)(rT.Ay, {
                                        "aria-label": T("a11y.navigation.down"),
                                        color: o,
                                        contentColor: l,
                                        contextBackgroundColor: c,
                                        "data-qa": "".concat(s, "-navigation-next"),
                                        "data-tracking": "footer_arrow_down",
                                        disabled: f,
                                        iconButton: !0,
                                        iconSvg: R,
                                        noShadow: !0,
                                        onClick: y,
                                        openBorder: "left",
                                        size: "sm" === _ ? "footerSmall" : "small",
                                        transparent: O
                                    }), (0, ec.jsx)(r2, {
                                        buttonsColor: o,
                                        contextBackgroundColor: c,
                                        transparentButtons: O
                                    }), (0, ec.jsx)(rT.Ay, {
                                        "aria-label": T("a11y.navigation.up"),
                                        color: o,
                                        contentColor: l,
                                        contextBackgroundColor: c,
                                        "data-qa": "".concat(s, "-navigation-previous"),
                                        "data-tracking": "footer_arrow_up",
                                        disabled: m,
                                        iconButton: !0,
                                        iconSvg: I,
                                        noShadow: !0,
                                        onClick: h,
                                        openBorder: "right",
                                        size: "sm" === _ ? "footerSmall" : "small",
                                        transparent: O
                                    })]
                                })
                            }), P && (0, ec.jsx)(ec.Fragment, {
                                children: (0, ec.jsx)(r5, {
                                    "aria-label": void 0 === t ? "Powered by Typeform (opens in a new tab)" : t,
                                    color: o,
                                    contentColor: l,
                                    contextBackgroundColor: c,
                                    forwardedAs: "a",
                                    href: (0, G.HO)(void 0 === r ? "" : r),
                                    onClick: v,
                                    noShadow: !0,
                                    openBorder: A ? "right" : void 0,
                                    reducePadding: C,
                                    rel: "noopener noreferrer",
                                    size: "sm" === _ ? "footerSmall" : "small",
                                    target: "_blank",
                                    transparent: O,
                                    textSize: x,
                                    children: (0, ec.jsx)(r8, {
                                        dataQa: s,
                                        size: x,
                                        children: i
                                    })
                                })
                            })]
                        })
                    }), (0, ec.jsx)(rQ.Ay, {})]
                })
            };
            var r6 = r(82444),
                r7 = "typeform-footer",
                ne = "https://www.typeform.com/explore/",
                nt = e => {
                    e.isBlockListVisible;
                    var t = (0, B.mR)().t,
                        r = (0, eh.j)(),
                        n = (0, eh.G)(rq.dH),
                        i = (0, eh.G)($.jq) ? void 0 : n(ne, r7),
                        o = (0, eh.G)(K.JD),
                        l = (0, eh.G)(X.sG),
                        a = (0, eh.G)(X.FH),
                        c = (0, eh.G)(X.gK),
                        u = (0, eh.G)(rU.Mn),
                        s = (0, eh.G)(rU.Tw),
                        d = (0, eh.G)(X.aX),
                        f = (0, eh.G)(K.o7),
                        p = (0, eh.G)($.Ms),
                        y = !(0, G.CI)() || !p,
                        b = (0, eh.G)($.ve),
                        v = (0, eh.G)($.Jm),
                        m = (0, eh.G)(rG),
                        g = (0, eJ.m)(),
                        h = !o && !v && !m,
                        w = e => {
                            r((0, q.i)({
                                navigationType: (0, ro.K)(e)
                            }))
                        },
                        O = e => {
                            r((0, rV.vn)()), r((0, U.AR)({
                                navigationType: (0, ro.K)(e)
                            }))
                        },
                        j = () => {
                            r((0, z.Pr)(r7))
                        },
                        P = {
                            brandAriaLabel: "".concat(t("label.branding.poweredby"), " ").concat(t("a11y.branding.poweredby")),
                            brandButtonHref: i,
                            brandButtonText: (0, r6.A)(t("label.branding.poweredby")),
                            buttonsColor: l,
                            buttonsContentColor: a,
                            contextBackgroundColor: c,
                            dataQa: "fixed-footer",
                            embedBackgroundOpacity: f,
                            nextButtonDisabled: !u,
                            nextButtonOnClick: w,
                            onClickBrandButton: j,
                            previousButtonDisabled: !s,
                            previousButtonOnClick: O,
                            progressBackgroundColor: c,
                            transparentButtons: d,
                            visible: y,
                            withBranding: b,
                            withNavigationArrows: h
                        };
                    return g ? R.createElement(rJ.E, {
                        kind: "desktop",
                        "data-qa": "fixed-footer"
                    }, h && R.createElement(rJ.E.ButtonGroup, null, R.createElement(rJ.E.UpButton, {
                        "aria-label": t("a11y.navigation.up"),
                        "data-qa": "fixed-footer-navigation-previous",
                        "data-tracking": "footer_arrow_up",
                        disabled: !s,
                        onClick: O
                    }), R.createElement(rJ.E.DownButton, {
                        "aria-label": t("a11y.navigation.down"),
                        "data-qa": "fixed-footer-navigation-next",
                        "data-tracking": "footer_arrow_down",
                        disabled: !u,
                        onClick: w
                    })), b && R.createElement(rJ.E.PoweredByTypeform, {
                        onClick: j,
                        href: i,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        "aria-label": "".concat(t("label.branding.poweredby"), " ").concat(t("a11y.branding.poweredby"))
                    })) : R.createElement(r9, P)
                },
                nr = r(10783),
                nn = r(2395),
                ni = r(51708),
                no = r(74609),
                nl = r(96651),
                na = r(49427);

            function nc() {
                return (nc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var nu = (e, t, r, n) => {
                if (null != n && n.length) {
                    var i = (0, nl.ee)(n);
                    i.length > 0 && t((0, eK.fW)(r, i[0], e))
                }
            };
            let ns = () => {
                var e = (0, eh.j)(),
                    t = (0, eh.G)(rq.dH),
                    r = t$(),
                    n = r.getCommitButtonLabel,
                    i = r.getSubmitButtonLabel,
                    o = (0, eh.G)($.jq),
                    l = (0, eh.G)(K.JD),
                    a = (0, eh.G)(rU.Tw),
                    c = (0, eh.G)($.Ms),
                    u = (0, eh.G)($.ve),
                    s = (0, eh.G)($.Jm),
                    d = (0, eh.G)(Y.DZ),
                    f = (0, eh.G)(et.Dd),
                    p = (0, eh.G)(tE.NX),
                    y = (0, eh.G)(e => (0, Y.GH)(e, d)),
                    b = (0, eh.G)(e => (0, Y.ke)(e, null == y ? void 0 : y.ref)),
                    v = (0, eh.G)(e => (0, no.gQ)(e, null == y ? void 0 : y.ref)),
                    m = (0, eh.G)(e => (0, Y.pe)(e, d)),
                    g = m && (0, Y.wc)(m),
                    h = (0, eh.G)(tc.d) && (0, tc.c8)(y) && !g,
                    w = (0, eh.G)(e => (0, $.oJ)(e, d)) && !v && !h,
                    O = (0, eh.G)(ni.U),
                    j = (0, eh.G)(no.tW),
                    P = (0, eh.G)(e => (0, Y.pe)(e, d)),
                    E = (0, e8.YK)(P),
                    A = (0, eh.G)(e => (0, ew.q4)(e, null == y ? void 0 : y.ref)),
                    T = (0, eh.G)(e => (0, ew.Cw)(e, null == y ? void 0 : y.ref)),
                    _ = (0, eh.G)(e => (0, Q.h)(e, null == y ? void 0 : y.ref)),
                    k = (0, eh.G)(tK.vT),
                    S = (0, eh.G)(rG),
                    x = (0, eh.G)(e => _ && (0, tW.am)(e, _)),
                    C = (0, er.T)(y, f) && !x && !v && !h,
                    L = o ? void 0 : t(ne, r7),
                    I = !(0, G.CI)() || !c,
                    D = !C && !w,
                    M = T && !1 === A,
                    N = (0, eq.f)(),
                    B = N.waitForInteraction,
                    H = N.currentBlockHasDelayInteraction,
                    F = 0 === B,
                    V = "number" == typeof B,
                    q = V && !F,
                    W = A && H && !F,
                    X = () => {
                        e((0, z.Pr)(r7))
                    },
                    ee = () => {
                        var e = new CustomEvent("play-video", {
                            detail: {
                                blockRef: null == y ? void 0 : y.ref
                            }
                        });
                        na.z.dispatchEvent(e)
                    },
                    en = t => {
                        var r = t.ref,
                            n = t.itemType;
                        e((0, eO.wU)({
                            ref: r,
                            itemType: n
                        }))
                    },
                    ei = {};
                return (C && (ei = {
                    onClickButtonHandler: t => H && !V ? ee() : M ? en({
                        ref: null == y ? void 0 : y.ref,
                        itemType: "button"
                    }) : void e((0, Z.td)(t)),
                    label: n(),
                    mainButtonDataQa: "partial-submit-button",
                    useSpinner: O || j,
                    disabled: O || j || q || W
                }), w && (ei = {
                    onClickButtonHandler: t => H && !V ? ee() : M ? en({
                        ref: null == y ? void 0 : y.ref,
                        itemType: "button"
                    }) : ((null == y ? void 0 : y.type) === tu.IY && nu(t, e, d, E), k) ? void e((0, rV.Wn)()) : void e((0, J.rM)(t)),
                    label: i(),
                    disabled: !o && (p.isSubmitting || p.isComplete) || O || j || q || W,
                    useSpinner: !o && p.isSubmitting || O || j,
                    mainButtonDataQa: "submit-button deep-purple-submit-button"
                }), D && (ei = {
                    onClickButtonHandler: t => H && !V ? ee() : M ? en({
                        ref: null == y ? void 0 : y.ref,
                        itemType: "button"
                    }) : ((null == y ? void 0 : y.type) === tu.IY && nu(t, e, d, E), k && x) ? void e((0, rV.Wn)()) : void(b && e((0, eK.Mw)(d, t))),
                    label: n(),
                    mainButtonDataQa: "ok-button-visible deep-purple-ok-button-visible",
                    useSpinner: O || j,
                    disabled: O || j || q || W
                }), S) ? R.createElement(nn.A, {
                    useBackButton: !1,
                    useBranding: I && u,
                    onClickBrandingHandler: X,
                    typeformBrandingUrl: L
                }) : R.createElement(nn.A, nc({
                    useBackButton: !l && !s && a,
                    isButtonTypeSubmit: w,
                    onClickBackButtonHandler: t => {
                        S && e((0, rV.vn)()), e((0, U.AR)({
                            navigationType: (0, ro.K)(t)
                        }))
                    },
                    useBranding: I && u,
                    onClickBrandingHandler: X,
                    typeformBrandingUrl: L
                }, ei))
            };
            var nd = r(89711),
                nf = r(48791),
                np = r(93824);

            function ny(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var nb = I.Ay.div(x || (x = ny(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  width: 100%;\n  padding: 24px;\n  box-sizing: border-box;\n"]))),
                nv = I.Ay.div(C || (C = ny(["\n  width: 100%;\n  max-width: 640px;\n"]))),
                nm = () => {
                    var e, t, r = (0, B.mR)().t,
                        n = (0, eh.j)(),
                        i = (0, eJ.m)(),
                        o = (0, eh.G)(tK.rq),
                        l = (0, eh.G)(tE.OH),
                        a = (0, eh.G)(X.O4),
                        c = (0, eh.G)(eH.tG),
                        u = (0, eh.G)(Y.VV),
                        s = (0, eh.G)($.eM),
                        d = (0, eh.G)(tK.oI),
                        f = (0, eh.G)(tK.X$),
                        p = (0, eh.G)(Y.DZ),
                        y = (0, eh.G)(tK.P2),
                        b = (0, R.useRef)(!1);
                    (0, R.useEffect)(() => {
                        b.current || (b.current = !0, n((0, tD.v1)({
                            blockRef: p
                        })))
                    }, [n, p]);
                    var v = null != (e = null == f ? void 0 : f.email) ? e : y || (null == o ? void 0 : o.email) || "",
                        m = null != (t = null == f ? void 0 : f.consent) ? t : d,
                        g = (0, R.useRef)(m),
                        h = (0, R.useCallback)((e, t) => {
                            n((0, rV.HP)({
                                email: e,
                                consent: t
                            })), g.current !== t && (g.current = t, n((0, tD.Mh)({
                                blockRef: p,
                                value: t ? "checked" : "unchecked"
                            }))), s && (0, tx.$5)(String(s), e, t)
                        }, [n, s, p]),
                        w = (0, R.useCallback)(() => {
                            n((0, rV.vn)()), n((0, rV.R9)())
                        }, [n]),
                        O = (0, R.useCallback)(e => {
                            n((0, rV.HP)({
                                email: e,
                                consent: !0
                            })), s && (0, tx.$5)(String(s), e, !0), n((0, rV.ZM)()), n((0, J.rM)())
                        }, [n, s]);
                    if (!o) return null;
                    var j = r("consent.description"),
                        P = "" !== o.message.trim() ? "".concat(j, "\n\n").concat(o.message) : j,
                        E = c ? r("label.button.submitAndPay", {
                            price: u
                        }) : r("label.button.submit");
                    return i ? R.createElement(nf.r, {
                        title: r("consent.title"),
                        description: P,
                        emailLabel: r("consent.email.label"),
                        emailPlaceholder: r("block.email.placeholder"),
                        consentLabel: r("consent.checkbox.text"),
                        submitLabel: E,
                        submittingLabel: r("label.button.submitting"),
                        emailErrorMessage: r("label.error.emailAddress"),
                        isSubmitting: l,
                        initialEmail: v,
                        initialConsent: m,
                        onSubmit: O,
                        onConsentChange: h,
                        onGoBack: w,
                        goBackLabel: r("label.button.back")
                    }) : R.createElement(nb, null, R.createElement(nv, null, R.createElement(np.j, {
                        title: r("consent.title"),
                        description: P,
                        emailLabel: r("consent.email.label"),
                        emailPlaceholder: r("block.email.placeholder"),
                        consentLabel: r("consent.checkbox.text"),
                        submitLabel: E,
                        submittingLabel: r("label.button.submitting"),
                        emailErrorMessage: r("label.error.emailAddress"),
                        isSubmitting: l,
                        initialEmail: v,
                        initialConsent: m,
                        onSubmit: O,
                        onConsentChange: h,
                        onGoBack: w,
                        goBackLabel: r("label.button.back"),
                        theme: a
                    })))
                };

            function ng() {
                return (ng = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }

            function nh(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            nm.displayName = "ConsentScreenContainer";
            var nw = I.Ay.div(L || (u = ["\n  height: 100%;\n  overflow: hidden;\n"], s || (s = u.slice(0)), L = Object.freeze(Object.defineProperties(u, {
                    raw: {
                        value: Object.freeze(s)
                    }
                })))),
                nO = "stkv-form-root",
                nj = e => {
                    var t = e.target;
                    t.id === nO && (t.scrollTop = 0)
                };
            let nP = e => {
                var t, r = e.layoutItemsSize,
                    n = void 0 === r ? {} : r,
                    i = (0, eh.G)(Y.qr),
                    o = (0, eh.G)(Y.Tt),
                    l = (0, eh.G)(K.DN),
                    a = (0, M.$E)(),
                    c = (0, eJ.m)(),
                    u = !i && !o,
                    s = (0, eh.G)(rG) && u,
                    d = function(e) {
                        if (Array.isArray(e)) return e
                    }(t = (0, R.useState)((0, to.un)())) || function(e) {
                        var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, n, i, o, l = [],
                                a = !0,
                                c = !1;
                            try {
                                i = (t = t.call(e)).next, !1;
                                for (; !(a = (r = i.call(t)).done) && (l.push(r.value), 2 !== l.length); a = !0);
                            } catch (e) {
                                c = !0, n = e
                            } finally {
                                try {
                                    if (!a && null != t.return && (o = t.return(), Object(o) !== o)) return
                                } finally {
                                    if (c) throw n
                                }
                            }
                            return l
                        }
                    }(t) || function(e) {
                        if (e) {
                            if ("string" == typeof e) return nh(e, 2);
                            var t = ({}).toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? nh(e, 2) : void 0
                        }
                    }(t) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    f = d[0],
                    p = d[1],
                    y = (0, eh.G)(F.UL),
                    b = (0, B.mR)().t,
                    v = (0, H.dv)(),
                    m = (0, eh.G)(X.O4),
                    g = (0, eh.j)(),
                    h = "sm" === v,
                    w = (0, eh.G)(e => (0, rH.getCustomRedirectUrl)(e, rF.Xz)),
                    O = (0, R.useCallback)(() => {
                        g((0, z.Pr)(rF.Xz))
                    }, [g, z.Pr]);
                return ((0, R.useEffect)(() => {
                    if (u && (0, to.un)()) {
                        var e = setTimeout(() => p(!1), ty.PH + 200);
                        return () => clearTimeout(e)
                    }
                    return eN.A
                }, [u]), l && i) ? null : c ? R.createElement(R.Fragment, null, R.createElement(nd.P.Content, null, s ? R.createElement(nm, null) : R.createElement(rP, {
                    component: ri,
                    isVisible: u,
                    layoutItemsSize: n
                })), R.createElement(nd.P.Footer, null, R.createElement(ns, null), R.createElement(nt, null))) : R.createElement(nw, {
                    "aria-hidden": o || i,
                    id: nO,
                    onScroll: nj
                }, R.createElement(rE.A, null), u && !s && R.createElement(D.Ay, {
                    type: "fade",
                    duration: ty.kz
                }, R.createElement(nr.A, null)), s ? R.createElement(nm, null) : !o && R.createElement(rP, {
                    component: ri,
                    isVisible: u,
                    layoutItemsSize: n
                }), (u || s) && R.createElement(rz, null, h ? R.createElement(ns, null) : R.createElement(D.Ay, {
                    isVisible: u || s,
                    type: "fadeIn",
                    duration: 500,
                    delay: 300
                }, R.createElement(R.Fragment, null, R.createElement("div", {
                    "aria-hidden": f
                }, !o && R.createElement(rB, null)), R.createElement(nt, {
                    isBlockListVisible: u || s
                })))), R.createElement(R.Fragment, null, y && !h && R.createElement(N.A, ng({
                    breakpoint: v,
                    buttonColor: m.colors.button,
                    buttonContentColor: m.colors.buttonContent,
                    buttonText: (0, r6.A)(b("label.branding.create")),
                    color: m.colors.primary,
                    contextBackgroundColor: m.colors.background,
                    isTopPositioned: h || a && h,
                    motto: (0, r6.A)(b("label.branding.motto")),
                    onBtnClick: O,
                    layoutHasBrandLogo: !1
                }, w ? {
                    url: w
                } : {}))))
            }
        },
        14820(e, t, r) {
            r.d(t, {
                S: () => T
            });
            var n, i, o, l, a = r(31085),
                c = r(14041),
                u = r(91129),
                s = r(62471),
                d = r(29340),
                f = r(27187),
                p = r(48172),
                y = r(17916),
                b = r(24506),
                v = r(66896),
                m = r(88950),
                g = r(96779),
                h = r(71667),
                w = ["children", "id", "asChild"];

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function P(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var E = (e, t) => "selected" === t ? (0, d.AH)(n || (n = P(["\n      background-color: ", ";\n      box-shadow: inset 0px 0px 0px 1px\n        ", ";\n    "])), (0, h.MX)(e.background.color.selected, e.background.opacity.selected), (0, h.MX)(e.outline.color.fg, e.outline.opacity.selected)) : (0, d.AH)(i || (i = P(["\n    background-color: ", ";\n    box-shadow: inset 0px 0px 0px 2px\n        ", ",\n      inset 0px 0px 0px 1px\n        ", ";\n  "])), (0, h.MX)(e.background.color[t], e.background.opacity[t]), (0, h.MX)(e.outline.color.fg, e.outline.opacity[t]), (0, h.MX)(e.outline.color.fg, e.outline.opacity.outerBorder)),
                A = (0, d.Ay)(s.P.button)(o || (o = P(["\n  ", "\n"])), e => {
                    var t = e.theme,
                        r = t.brandTheme,
                        n = t.rendererTokens.checkbox;
                    return (0, d.AH)(l || (l = P(["\n    all: unset;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    min-width: 24px;\n    min-height: 24px;\n    border-radius: ", ";\n    ", ";\n    ", ";\n\n    &:hover {\n      ", ";\n    }\n\n    &:active {\n      ", ";\n    }\n\n    &[data-state='checked'] {\n      ", ";\n    }\n  "])), n.roundness[(null == r ? void 0 : r.rounded_corners) || "small"], (0, v.Vs)(), E(n, "idle"), E(n, "hover"), E(n, "active"), E(n, "selected"))
                }),
                T = c.forwardRef((e, t) => {
                    var r = e.children,
                        n = e.id,
                        i = e.asChild,
                        o = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (({}).hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                            }
                            return i
                        }(e, w),
                        l = n || "checkbox-".concat((0, m.Y)()),
                        c = (0, b.D)(),
                        s = c.rendererTokens.checkbox,
                        d = c.shouldReduceMotion,
                        O = c.brandTheme;
                    return void 0 !== i && i ? (0, a.jsx)(u.bL, j(j({
                        id: l
                    }, o), {}, {
                        ref: t,
                        asChild: !0,
                        children: r
                    })) : (0, a.jsxs)(p.s, {
                        alignItems: "flex-start",
                        children: [(0, a.jsx)(f.v, {
                            children: (0, a.jsx)(u.bL, j(j({
                                id: l
                            }, o), {}, {
                                ref: t,
                                asChild: !0,
                                children: (0, a.jsx)(A, j(j({}, null != o && o.disabled ? {} : (0, v.Cz)(d)), {}, {
                                    children: (0, a.jsx)(u.C1, {
                                        asChild: !0,
                                        children: (0, a.jsx)(g.S, {
                                            color: (0, h.iL)(s.icon.color.selected)({
                                                theme: {
                                                    brandTheme: O
                                                }
                                            }),
                                            size: "16"
                                        })
                                    })
                                }))
                            }))
                        }), r && (0, a.jsx)(y.E, {
                            as: "label",
                            paddingLeft: 12,
                            fontScale: s.text.input.size,
                            color: (0, h.iL)(s.text.color.label)({
                                theme: {
                                    brandTheme: O
                                }
                            }),
                            htmlFor: l,
                            children: r
                        })]
                    })
                });
            T.displayName = "Checkbox"
        },
        26144(e, t, r) {
            var n, i, o, l = r(29340),
                a = r(48172),
                c = r(66896),
                u = (0, l.Ay)(a.s)(o || (n = ["\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  inset-inline-end: 0;\n  top: 0;\n  height: 100%;\n  pointer-events: none;\n  ", ";\n"], i || (i = n.slice(0)), o = Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(i)
                    }
                }))), (0, c.Vs)());
            u.displayName = "InputIcon", r.d(t, {
                m: () => u
            })
        },
        85717(e, t, r) {
            r.d(t, {
                p: () => k
            });
            var n, i, o, l = r(31085),
                a = r(14041),
                c = r(29340),
                u = r(24506),
                s = r(17916),
                d = r(48172),
                f = r(43964),
                p = r(71667),
                y = ["label", "kind", "children"];

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var m = a.forwardRef((e, t) => {
                var r, n = e.label,
                    i = e.kind,
                    o = e.children,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if (({}).hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, y),
                    c = (0, u.D)(),
                    f = c.rendererTokens.input,
                    b = c.brandTheme,
                    m = "compact" === i;
                return m && (r = "text100"), (0, l.jsxs)(d.s, v(v({
                    as: "label",
                    flexDirection: "column",
                    gap: m ? "0" : f.padding.xs,
                    justifyItems: "start"
                }, a), {}, {
                    ref: t,
                    children: [(0, l.jsx)(s.E, {
                        paddingBottom: !m && f.padding.sm,
                        fontScale: r || f.typeText.label.sm.size,
                        color: (0, p.iL)(f.typeText.color.label)({
                            theme: {
                                brandTheme: b
                            }
                        }),
                        children: n
                    }), o]
                }))
            });
            m.displayName = "InputLabel";
            var g = r(63355),
                h = r(9360),
                w = r(26144),
                O = ["label"],
                j = ["icon", "label", "forwardedAs", "addionalStyles", "kind"];

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function A(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                        if (({}).hasOwnProperty.call(e, n)) {
                            if (-1 !== t.indexOf(n)) continue;
                            r[n] = e[n]
                        }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            var T = (0, c.Ay)(s.E)(o || (n = ["\n  text-align: start;\n  width: 100%;\n  ", "\n\n  ", "\n"], i || (i = n.slice(0)), o = Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(i)
                    }
                }))), h.z, e => e.addionalStyles),
                _ = e => {
                    var t = e.label,
                        r = A(e, O);
                    return t ? (0, l.jsx)(m, E({
                        label: t
                    }, r)) : (0, l.jsx)(a.Fragment, E({}, r))
                },
                k = a.forwardRef((e, t) => {
                    var r, n = e.icon,
                        i = e.label,
                        o = e.forwardedAs,
                        a = e.addionalStyles,
                        c = e.kind,
                        s = void 0 === c ? "default" : c,
                        p = A(e, j),
                        y = (0, u.D)().rendererTokens.input,
                        b = "sm" === (0, g.d)();
                    return "compact" === s && (r = "text200"), (0, l.jsx)(_, {
                        label: i,
                        kind: s,
                        children: (0, l.jsxs)(d.s, {
                            position: "relative",
                            alignItems: "center",
                            width: "100%",
                            children: [(0, l.jsx)(T, E(E({
                                forwardedAs: void 0 === o ? "input" : o,
                                flexGrow: 1,
                                fontScale: r || y.typeText.inputText.size,
                                padding: "0",
                                paddingY: b ? y.padding.md.mobile : y.padding.md.desktop,
                                paddingRight: 24 * !!n,
                                addionalStyles: a
                            }, p), {}, {
                                ref: t
                            })), n && (0, l.jsx)(w.m, {
                                children: (0, l.jsx)(f.l, {
                                    icon: n,
                                    size: "16"
                                })
                            })]
                        })
                    })
                });
            k.displayName = "Input"
        },
        9360(e, t, r) {
            var n, i, o = r(29340),
                l = r(71667),
                a = r(26144);

            function c(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var u = (e, t) => {
                    var r = e.rendererTokens.input,
                        i = (0, l.MX)(r.typeText.color.label, r.typeText.opacity.label[t]),
                        u = (0, l.aB)(r.typeText.color.label, r.typeText.opacity.labelPlaceholder[t]);
                    return (0, o.AH)(n || (n = c(["\n    color: ", ";\n    box-shadow: ", "\n      0 ", "px;\n\n    &::placeholder {\n      color: ", ";\n    }\n    /* \n    Necessary to correctly style inputs used as combobox\n    This ensures the visual state matches either the placeholder or the selected value.\n    */\n    &:is(input, textarea):placeholder-shown {\n      color: ", ";\n    }\n    &:is(input, textarea):not(:placeholder-shown) {\n      color: ", ";\n      -webkit-text-fill-color: ", ";\n    }\n\n    &[data-selected='false'],\n    & + ", " {\n      color: ", ";\n    }\n  "])), i, (0, l.MX)(r.outline.color.default, r.outline.opacity[t]), {
                        idle: 1,
                        hover: 1,
                        active: 2
                    }[t], u, u, i, i, a.m, u)
                },
                s = e => {
                    var t = e.theme;
                    return (0, o.AH)(i || (i = c(["\n  width: 100%;\n  border-radius: 0px;\n  border: none;\n  outline: unset;\n  appearance: none !important;\n  /* needed to override autofill text color */\n  -webkit-text-fill-color: currentColor;\n  /* needed to override autofill background in Safari */\n  background-color: transparent !important;\n  /* needed to override autofill background in Chrome */\n  animation: native-autofill-in 1ms;\n  -webkit-animation: native-autofill-in 1ms;\n  /*  Use an extremely long transition so the browser autofill background highlight never becomes visible. */\n  transition: background-color 100000000s;\n\n  ", ";\n\n  &:hover {\n    ", ";\n\n    & + ", " {\n      color: ", ";\n    }\n  }\n  &:active,\n  &:focus {\n    ", ";\n\n    & + ", " {\n      color: ", ";\n    }\n  }\n\n  /* autofill styling */\n  &:-webkit-autofill,\n  &:-webkit-autofill-selected,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:active {\n    background-color: transparent;\n    background-image: none !important;\n    background-clip: padding-box;\n    -webkit-text-fill-color: currentColor;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  /* set autofill suggestion text size */\n  &:-webkit-autofill::first-line,\n  &:-internal-autofill-selected::first-line,\n  &:-internal-autofill-previewed::first-line {\n    -webkit-text-fill-color: currentColor;\n  }\n"])), u(t, "idle"), u(t, "hover"), a.m, (0, l.MX)(t.rendererTokens.input.typeText.color.label, t.rendererTokens.input.typeText.opacity.label.hover), u(t, "active"), a.m, (0, l.MX)(t.rendererTokens.input.typeText.color.label, t.rendererTokens.input.typeText.opacity.label.active))
                };
            r.d(t, {
                z: () => s
            })
        },
        2172(e, t, r) {
            r.d(t, {
                E: () => b
            });
            var n = r(31085),
                i = r(14041),
                o = r(48172),
                l = r(24506),
                a = r(96779),
                c = r(26055),
                u = r(43964),
                s = r(17916),
                d = r(71667),
                f = ["kind", "children", "icon"];

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var b = i.forwardRef((e, t) => {
                var r = e.kind,
                    i = void 0 === r ? "critical" : r,
                    p = e.children,
                    b = e.icon,
                    v = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if (({}).hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, f),
                    m = (0, l.D)(),
                    g = m.rendererTokens.notification,
                    h = m.brandTheme,
                    w = m.themeVariant,
                    O = {
                        success: a.S,
                        critical: c.i,
                        caution: c.i
                    }[i],
                    j = (0, d.E2)(g.color[i][w].bg),
                    P = (0, d.E2)(g.color[i][w].outline);
                return (0, n.jsxs)(o.s, y(y({
                    width: "fit-content",
                    borderRadius: g.roundness[(null == h ? void 0 : h.rounded_corners) || "small"],
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "rgba(".concat(P, ", ").concat(g.color.opacity.outline, ")"),
                    backgroundColor: "rgba(".concat(j, ", ").concat(g.color.opacity.bg, ")"),
                    color: g.color[i][w].text,
                    paddingX: g.padding.lg,
                    paddingY: g.padding.sm,
                    gap: g.padding.sm
                }, v), {}, {
                    ref: t,
                    children: [(0, n.jsx)(u.l, {
                        icon: b || O,
                        size: "16"
                    }), (0, n.jsx)(s.E, {
                        fontScale: g.text.size,
                        paddingX: g.padding.xxs,
                        children: p
                    })]
                }))
            })
        },
        26055(e, t, r) {
            r.d(t, {
                i: () => u
            });
            var n = r(31085),
                i = r(14041),
                o = r(24506),
                l = ["size"];

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        var n, i, o;
                        n = e, i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(i)) in n ? Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var u = i.forwardRef((e, t) => {
                var r = e.size,
                    i = void 0 === r ? "16" : r,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if (({}).hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, l),
                    u = (0, o.D)().brandTheme,
                    s = (null == u ? void 0 : u.rounded_corners) || "small";
                return "16" === i && "small" === s ? (0, n.jsxs)("svg", c(c({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M7.173 11.493a.828.828 0 1 1 1.655 0 .828.828 0 0 1-1.655 0"
                    }), (0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M6.495 1.839a1.75 1.75 0 0 1 3.01 0l6.243 10.515c.693 1.166-.148 2.643-1.505 2.643H1.757C.4 14.997-.441 13.52.252 12.354zm1.72.765a.25.25 0 0 0-.43 0L1.542 13.12a.25.25 0 0 0 .215.378h12.486a.25.25 0 0 0 .215-.378zM7.25 9V6.804a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-1.5 0"
                    })]
                })) : "16" === i && "large" === s ? (0, n.jsxs)("svg", c(c({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M7.173 11.493a.828.828 0 1 1 1.655 0 .828.828 0 0 1-1.655 0"
                    }), (0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M6.065 2.562c.872-1.468 2.998-1.468 3.87 0L15.3 11.6c.89 1.5-.19 3.398-1.935 3.398H2.635C.89 14.997-.19 13.098.7 11.599zm2.58.766a.75.75 0 0 0-1.23-.086l-.06.086-5.365 9.036a.75.75 0 0 0 .645 1.133h10.73a.75.75 0 0 0 .645-1.133zM7.25 9V6.804a.75.75 0 0 1 1.5 0V9a.75.75 0 1 1-1.5 0"
                    })]
                })) : "16" === i && "none" === s ? (0, n.jsxs)("svg", c(c({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M7.173 10.828a.828.828 0 1 1 1.655 0 .828.828 0 0 1-1.655 0M7.25 6.054h1.5v3.3h-1.5z"
                    }), (0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M15.998 13.905H.003L8 .435zm-13.36-1.5h10.724L8 3.373z"
                    })]
                })) : "24" === i && "small" === s ? (0, n.jsxs)("svg", c(c({
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M10.359 4.058c.816-1.18 2.606-1.141 3.358.118l8.24 13.799.069.126C22.69 19.41 21.742 21 20.238 21H3.762c-1.553 0-2.514-1.692-1.718-3.025l8.24-13.8zM3.761 19h16.476L12 5.201z"
                    }), (0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M11 10.5v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-2 0M12 17.752a1 1 0 0 0 .994-.898L13 16.75v-.032a1 1 0 0 0-2 .002v.032l.005.102a1 1 0 0 0 .996.897"
                    })]
                })) : "24" === i && "none" === s ? (0, n.jsxs)("svg", c(c({
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M23.762 21H.238L12 1.299zm-20-2h16.476L12 5.2z"
                    }), (0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M12.001 18.002c.69 0 1.25-.56 1.249-1.25v-.033a1.25 1.25 0 0 0-2.5.002v.032c0 .69.56 1.25 1.251 1.25M10.999 14.25h2V9.5h-2z"
                    })]
                })) : "24" === i && "large" === s ? (0, n.jsxs)("svg", c(c({
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M9.538 5.437c1.225-1.77 3.91-1.711 5.038.177l6.477 10.848c1.194 2-.248 4.538-2.576 4.538H5.523c-2.329 0-3.77-2.538-2.576-4.538L9.424 5.614zm3.32 1.202a1 1 0 0 0-1.716 0L4.665 17.487A1 1 0 0 0 5.523 19h12.954a1 1 0 0 0 .858-1.513z"
                    }), (0, n.jsx)("path", {
                        fill: "currentColor",
                        d: "M10.999 10.5v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-2 0m1.002 7.252a1 1 0 0 0 .994-.898L13 16.75v-.032a1 1 0 0 0-2 .002v.032l.005.102a1 1 0 0 0 .996.897"
                    })]
                })) : "48" === i && "small" === s ? (0, n.jsxs)("svg", c(c({
                    width: 48,
                    height: 48,
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        d: "M21.4599 8.16212C22.6362 6.29081 25.3637 6.29081 26.54 8.16212L44.9209 37.4033C46.1765 39.4011 44.7404 41.9998 42.3808 42H5.6191C3.25955 41.9998 1.82339 39.4011 3.07906 37.4033L21.4599 8.16212ZM24.8466 9.2256C24.4545 8.60221 23.5454 8.60221 23.1533 9.2256L4.77242 38.4678C4.354 39.1336 4.83273 39.9998 5.6191 40H42.3808C43.1672 39.9998 43.6459 39.1336 43.2275 38.4678L24.8466 9.2256Z",
                        fill: "currentColor"
                    }), (0, n.jsx)("path", {
                        d: "M23 20V30C23 30.5523 23.4477 31 24 31C24.5522 31 25 30.5523 25 30V20C25 19.4477 24.5522 19 24 19C23.4477 19 23 19.4477 23 20Z",
                        fill: "currentColor"
                    }), (0, n.jsx)("path", {
                        d: "M22.8 35.2C22.8 34.5373 23.3373 34 24 34C24.6628 34 25.2 34.5373 25.2 35.2C25.2 35.8628 24.6628 36.4 24 36.4C23.3373 36.4 22.8 35.8628 22.8 35.2Z",
                        fill: "currentColor"
                    })]
                })) : "48" === i && "none" === s ? (0, n.jsxs)("svg", c(c({
                    width: 48,
                    height: 48,
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        d: "M47.8096 42H0.19043L24 4.12109L47.8096 42ZM3.80957 40H44.1904L24 7.87891L3.80957 40Z",
                        fill: "currentColor"
                    }), (0, n.jsx)("path", {
                        d: "M23 20H25V31H23V20Z",
                        fill: "currentColor"
                    }), (0, n.jsx)("path", {
                        d: "M22.8 35.2C22.8 34.5373 23.3373 34 24 34C24.6628 34 25.2 34.5373 25.2 35.2C25.2 35.8627 24.6628 36.4 24 36.4C23.3373 36.4 22.8 35.8627 22.8 35.2Z",
                        fill: "currentColor"
                    })]
                })) : "48" === i && "large" === s ? (0, n.jsxs)("svg", c(c({
                    width: 48,
                    height: 48,
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a), {}, {
                    ref: t,
                    children: [(0, n.jsx)("path", {
                        d: "M20.6133 9.5088C22.1817 7.01371 25.8184 7.01371 27.3868 9.5088L43.9571 35.8711C45.6314 38.5348 43.7174 41.9997 40.5714 42H7.42878C4.28269 41.9997 2.36871 38.5348 4.04303 35.8711L20.6133 9.5088ZM25.6934 10.5732C24.9093 9.32571 23.0909 9.3257 22.3067 10.5732L5.73639 36.9356C4.89927 38.2673 5.85586 39.9997 7.42878 40H40.5714C42.1443 39.9997 43.1009 38.2673 42.2637 36.9356L25.6934 10.5732Z",
                        fill: "currentColor"
                    }), (0, n.jsx)("path", {
                        d: "M23.0001 20V30C23.0001 30.5523 23.4478 31 24.0001 31C24.5523 31 25.0001 30.5523 25.0001 30V20C25.0001 19.4477 24.5523 19 24.0001 19C23.4478 19 23.0001 19.4477 23.0001 20Z",
                        fill: "currentColor"
                    }), (0, n.jsx)("path", {
                        d: "M22.8001 35.2C22.8001 34.5373 23.3374 34 24.0001 34C24.6629 34 25.2001 34.5373 25.2001 35.2C25.2001 35.8627 24.6629 36.4 24.0001 36.4C23.3374 36.4 22.8001 35.8627 22.8001 35.2Z",
                        fill: "currentColor"
                    })]
                })) : null
            })
        },
        88950(e, t, r) {
            function n() {
                return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, e => Math.floor(16 * Math.random()).toString(16))
            }
            r.d(t, {
                Y: () => n
            })
        }
    }
]);