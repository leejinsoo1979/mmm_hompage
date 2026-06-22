(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974, 975], {
        1053: (e, s, n) => {
            "use strict";
            n.d(s, {
                default: () => r
            });
            var a = n(2115);

            function r() {
                return (0, a.useEffect)(() => {
                    let e = document.querySelectorAll("[data-reveal]");
                    if (!("IntersectionObserver" in window)) return void e.forEach(e => e.classList.add("in"));
                    let s = new IntersectionObserver(e => {
                        e.forEach(e => {
                            e.isIntersecting && (e.target.classList.add("in"), s.unobserve(e.target))
                        })
                    }, {
                        rootMargin: "0px 0px -8% 0px",
                        threshold: .12
                    });
                    return e.forEach(e => s.observe(e)), () => s.disconnect()
                }, []), null
            }
        },
        1614: (e, s, n) => {
            "use strict";
            n.d(s, {
                default: () => l
            });
            var a = n(5155),
                r = n(2115);

            function t(e) {
                let {
                    className: s = "",
                    style: n
                } = e;
                return (0, a.jsxs)("span", {
                    className: "glyph ".concat(s).trim(),
                    style: n,
                    "aria-hidden": "true",
                    children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {})]
                })
            }

            function l(e) {
                let {
                    links: s = [],
                    back: n = !1
                } = e, [l, c] = (0, r.useState)(!1), [i, d] = (0, r.useState)(!1), [o, u] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    let e = 0,
                        s = () => {
                            let s = window.pageYOffset || document.documentElement.scrollTop;
                            d(s > 10), u(s > e && s > 320 && !l), e = s
                        };
                    return window.addEventListener("scroll", s, {
                        passive: !0
                    }), () => window.removeEventListener("scroll", s)
                }, [l]), (0, r.useEffect)(() => (document.body.classList.toggle("menu-open", l), () => document.body.classList.remove("menu-open")), [l]), (0, r.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && c(!1)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("header", {
                        className: "nav".concat(i ? " scrolled" : "").concat(o ? " hide" : ""),
                        children: (0, a.jsxs)("div", {
                            className: "nav-in",
                            children: [(0, a.jsxs)("a", {
                                className: "brandmark",
                                href: n ? "/" : "#top",
                                "aria-label": "made make material",
                                children: [(0, a.jsx)(t, {}), (0, a.jsx)("span", {
                                    className: "wm",
                                    children: "made make material"
                                })]
                            }), n ? (0, a.jsx)("a", {
                                className: "back",
                                href: "/",
                                children: "← 브랜드 사이트"
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("nav", {
                                    className: "links",
                                    children: s.map(e => (0, a.jsx)("a", {
                                        href: e.href,
                                        children: e.label
                                    }, e.href))
                                }), (0, a.jsxs)("button", {
                                    className: "burger",
                                    "aria-label": "메뉴",
                                    "aria-expanded": l,
                                    onClick: () => c(e => !e),
                                    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                                })]
                            })]
                        })
                    }), !n && (0, a.jsx)("div", {
                        className: "drawer",
                        children: s.map(e => (0, a.jsx)("a", {
                            href: e.href,
                            onClick: () => c(!1),
                            children: e.label
                        }, e.href))
                    })]
                })
            }
        },
        5129: (e, s, n) => {
            Promise.resolve().then(n.bind(n, 1614)), Promise.resolve().then(n.bind(n, 1053))
        }
    },
    e => {
        e.O(0, [441, 255, 358], () => e(e.s = 5129)), _N_E = e.O()
    }
]);