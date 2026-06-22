/*! Build: 2026-06-19T15:24:47.714Z | Commit: fd209cf369e2c606f0595729d5dc45accd1e46b3 | Branch: main | App: renderer | Environment: production */
"use strict";
(self.rspackChunk_typeform_renderer = self.rspackChunk_typeform_renderer || []).push([
    [3281], {
        69295(n, r, t) {
            t.d(r, {
                $: () => B,
                A: () => P,
                B: () => x,
                C: () => j,
                D: () => h,
                E: () => m,
                F: () => D,
                G: () => J,
                H: () => i,
                I: () => q,
                J: () => H,
                L: () => G,
                M: () => nn,
                N: () => nt,
                O: () => V,
                P: () => I,
                Q: () => nu,
                R: () => M,
                S: () => R,
                T: () => _,
                W: () => W,
                Z: () => z,
                a: () => U,
                a2: () => nr,
                a4: () => ne,
                a6: () => no,
                b: () => Q,
                d: () => X,
                e: () => w,
                f: () => Y,
                g: () => F,
                h: () => K,
                i: () => g,
                j: () => C,
                k: () => a,
                l: () => T,
                m: () => A,
                n: () => N,
                o: () => s,
                p: () => f,
                q: () => y,
                r: () => v,
                s: () => O,
                t: () => c,
                u: () => l,
                v: () => b,
                y: () => S,
                z: () => E
            });
            var e = t(3068),
                o = t(89575),
                u = t(54860),
                a = function() {
                    return !0
                },
                c = function() {},
                i = function(n) {
                    return n
                },
                f = function(n, r) {
                    (0, o.A)(n, r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(r).forEach(function(t) {
                        n[t] = r[t]
                    })
                },
                l = function(n, r) {
                    var t;
                    return (t = []).concat.apply(t, r.map(n))
                };

            function v(n, r) {
                var t = n.indexOf(r);
                t >= 0 && n.splice(t, 1)
            }

            function s(n) {
                var r = !1;
                return function() {
                    r || (r = !0, n())
                }
            }
            var p = function(n) {
                    throw n
                },
                d = function(n) {
                    return {
                        value: n,
                        done: !0
                    }
                };

            function y(n, r, t) {
                void 0 === r && (r = p), void 0 === t && (t = "iterator");
                var e = {
                    meta: {
                        name: t
                    },
                    next: n,
                    throw: r,
                    return: d,
                    isSagaIterator: !0
                };
                return "u" > typeof Symbol && (e[Symbol.iterator] = function() {
                    return e
                }), e
            }

            function h(n, r) {
                var t = r.sagaStack;
                console.error(n), console.error(t)
            }
            var g = function(n) {
                    return Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + n + "\n")
                },
                A = function(n) {
                    return Array.apply(null, Array(n))
                },
                m = function(n) {
                    return function(r) {
                        return n(Object.defineProperty(r, e.q8, {
                            value: !0
                        }))
                    }
                },
                E = function(n) {
                    return n === e.a6
                },
                S = function(n) {
                    return n === e.nm
                },
                O = function(n) {
                    return E(n) || S(n)
                };

            function T(n, r) {
                var t, e = Object.keys(n),
                    o = e.length,
                    a = 0,
                    i = (0, u.YO)(n) ? A(o) : {},
                    f = {};
                return e.forEach(function(n) {
                    var e = function(e, u) {
                        t || (u || O(e) ? (r.cancel(), r(e, u)) : (i[n] = e, ++a === o && (t = !0, r(i))))
                    };
                    e.cancel = c, f[n] = e
                }), r.cancel = function() {
                    t || (t = !0, e.forEach(function(n) {
                        return f[n].cancel()
                    }))
                }, f
            }

            function C(n) {
                return {
                    name: n.name || "anonymous",
                    location: b(n)
                }
            }

            function b(n) {
                return n[e.x2]
            }

            function x() {
                for (var n = arguments.length, r = Array(n), t = 0; t < n; t++) r[t] = arguments[t];
                return 0 === r.length ? function(n) {
                    return n
                } : 1 === r.length ? r[0] : r.reduce(function(n, r) {
                    return function() {
                        return n(r.apply(void 0, arguments))
                    }
                })
            }
            var L = {
                isEmpty: a,
                put: c,
                take: c
            };

            function k(n, r) {
                void 0 === n && (n = 10);
                var t = Array(n),
                    e = 0,
                    o = 0,
                    u = 0,
                    a = function(r) {
                        t[o] = r, o = (o + 1) % n, e++
                    },
                    c = function() {
                        if (0 != e) {
                            var r = t[u];
                            return t[u] = null, e--, u = (u + 1) % n, r
                        }
                    },
                    i = function() {
                        for (var n = []; e;) n.push(c());
                        return n
                    };
                return {
                    isEmpty: function() {
                        return 0 == e
                    },
                    put: function(c) {
                        if (e < n) a(c);
                        else {
                            var f;
                            switch (r) {
                                case 1:
                                    throw Error("Channel's Buffer overflow!");
                                case 3:
                                    t[o] = c, u = o = (o + 1) % n;
                                    break;
                                case 4:
                                    f = 2 * n, e = (t = i()).length, o = t.length, u = 0, t.length = f, n = f, a(c)
                            }
                        }
                    },
                    take: c,
                    flush: i
                }
            }
            var N = function() {
                    return L
                },
                w = function(n) {
                    return k(n, 4)
                },
                q = Object.freeze({
                    __proto__: null,
                    none: N,
                    fixed: function(n) {
                        return k(n, 1)
                    },
                    dropping: function(n) {
                        return k(n, 2)
                    },
                    sliding: function(n) {
                        return k(n, 3)
                    },
                    expanding: w
                }),
                _ = "TAKE",
                I = "PUT",
                P = "ALL",
                M = "RACE",
                j = "CALL",
                U = "CPS",
                D = "FORK",
                H = "JOIN",
                Q = "CANCEL",
                R = "SELECT",
                X = "ACTION_CHANNEL",
                Y = "CANCELLED",
                F = "FLUSH",
                J = "GET_CONTEXT",
                K = "SET_CONTEXT",
                Z = function(n, r) {
                    var t;
                    return (t = {})[e.IO] = !0, t.combinator = !1, t.type = n, t.payload = r, t
                };

            function G(n, r) {
                return (void 0 === n && (n = "*"), (0, u.T1)(n)) ? ((0, u.uQ)(r) && console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"), Z(_, {
                    pattern: n
                })) : (0, u.fD)(n) && (0, u.uQ)(r) && (0, u.T1)(r) ? Z(_, {
                    channel: n,
                    pattern: r
                }) : (0, u.Ix)(n) ? ((0, u.uQ)(r) && console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."), Z(_, {
                    channel: n
                })) : void 0
            }

            function z(n, r) {
                return (0, u.vD)(r) && (r = n, n = void 0), Z(I, {
                    channel: n,
                    action: r
                })
            }

            function B(n) {
                var r = Z(P, n);
                return r.combinator = !0, r
            }

            function W(n) {
                var r = Z(M, n);
                return r.combinator = !0, r
            }

            function $(n, r) {
                var t, e = null;
                return (0, u.Pc)(n) ? t = n : ((0, u.YO)(n) ? (e = n[0], t = n[1]) : (e = n.context, t = n.fn), e && (0, u.Yj)(t) && (0, u.Pc)(e[t]) && (t = e[t])), {
                    context: e,
                    fn: t,
                    args: r
                }
            }

            function V(n) {
                for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];
                return Z(j, $(n, t))
            }

            function nn(n) {
                for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];
                return Z(D, $(n, t))
            }

            function nr(n) {
                for (var r, t = arguments.length, e = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) e[u - 1] = arguments[u];
                return r = nn.apply(void 0, [n].concat(e)), Z(D, (0, o.A)({}, r.payload, {
                    detached: !0
                }))
            }

            function nt(n) {
                return void 0 === n && (n = e.Pe), Z(Q, n)
            }

            function ne(n) {
                void 0 === n && (n = i);
                for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];
                return Z(R, {
                    selector: n,
                    args: t
                })
            }

            function no(n) {
                return Z(F, n)
            }
            var nu = V.bind(null, function(n, r) {
                void 0 === r && (r = !0);
                var t, o = new Promise(function(e) {
                    t = setTimeout(e, Math.min(0x7fffffff, n), r)
                });
                return o[e.bO] = function() {
                    clearTimeout(t)
                }, o
            })
        },
        54860(n, r, t) {
            var e = t(3068),
                o = function(n) {
                    return null == n
                },
                u = function(n) {
                    return null != n
                },
                a = function(n) {
                    return "function" == typeof n
                },
                c = function(n) {
                    return "string" == typeof n
                },
                i = Array.isArray,
                f = function(n) {
                    return n && a(n.then)
                },
                l = function(n) {
                    return n && a(n.next) && a(n.throw)
                },
                v = function n(r) {
                    return r && (c(r) || d(r) || a(r) || i(r) && r.every(n))
                },
                s = function(n) {
                    return n && a(n.take) && a(n.close)
                },
                p = function(n) {
                    return a(n) && n.hasOwnProperty("toString")
                },
                d = function(n) {
                    return !!n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype
                },
                y = function(n) {
                    return s(n) && n[e.Xl]
                };
            t.d(r, {
                HR: () => d,
                Ix: () => s,
                Pc: () => a,
                T1: () => v,
                YO: () => i,
                Yj: () => c,
                fD: () => y,
                iv: () => f,
                lJ: () => l,
                mr: () => p,
                uQ: () => u,
                vD: () => o
            })
        },
        3068(n, r, t) {
            var e = function(n) {
                    return "@@redux-saga/" + n
                },
                o = e("CANCEL_PROMISE"),
                u = e("CHANNEL_END"),
                a = e("IO"),
                c = e("MATCH"),
                i = e("MULTICAST"),
                f = e("SAGA_ACTION"),
                l = e("SELF_CANCELLATION"),
                v = e("TASK"),
                s = e("TASK_CANCEL"),
                p = e("TERMINATE"),
                d = e("LOCATION");
            t.d(r, {
                E_: () => c,
                IO: () => a,
                Pe: () => l,
                Xl: () => i,
                a6: () => p,
                bO: () => o,
                nm: () => s,
                q8: () => f,
                wn: () => v,
                x2: () => d,
                x7: () => u
            })
        },
        87744(n, r, t) {
            t.d(r, {
                Q7: () => o.$,
                T1: () => o.O,
                ZT: () => o.N,
                cb: () => o.Q,
                bX: () => o.a6,
                Zy: () => o.M,
                yJ: () => o.Z,
                O4: () => o.W,
                Lt: () => o.a4,
                cH: () => o.a2,
                s: () => o.L,
                jP: () => v,
                p8: () => s
            });
            var e = t(54860),
                o = t(69295),
                u = function(n) {
                    return {
                        done: !0,
                        value: n
                    }
                },
                a = {};

            function c(n) {
                return (0, e.Ix)(n) ? "channel" : (0, e.mr)(n) ? String(n) : (0, e.Pc)(n) ? n.name : String(n)
            }

            function i(n, r, t) {
                var e, c, i, f = r;

                function l(r, t) {
                    if (f === a) return u(r);
                    if (t && !c) throw f = a, t;
                    e && e(r);
                    var o = t ? n[c](t) : n[f]();
                    return f = o.nextState, i = o.effect, e = o.stateUpdater, c = o.errorState, f === a ? u(r) : i
                }
                return (0, o.q)(l, function(n) {
                    return l(null, n)
                }, t)
            }

            function f(n, r) {
                for (var t = arguments.length, e = Array(t > 2 ? t - 2 : 0), u = 2; u < t; u++) e[u - 2] = arguments[u];
                var a, f = {
                        done: !1,
                        value: (0, o.L)(n)
                    },
                    l = function(n) {
                        return a = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: f,
                            stateUpdater: l
                        }
                    },
                    q2: function() {
                        var n;
                        return {
                            nextState: "q1",
                            effect: (n = a, {
                                done: !1,
                                value: o.M.apply(void 0, [r].concat(e, [n]))
                            })
                        }
                    }
                }, "q1", "takeEvery(" + c(n) + ", " + r.name + ")")
            }

            function l(n, r) {
                for (var t, e, u = arguments.length, a = Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++) a[f - 2] = arguments[f];
                var l = {
                        done: !1,
                        value: (0, o.L)(n)
                    },
                    v = function(n) {
                        return {
                            done: !1,
                            value: o.M.apply(void 0, [r].concat(a, [n]))
                        }
                    },
                    s = function(n) {
                        return t = n
                    },
                    p = function(n) {
                        return e = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: l,
                            stateUpdater: p
                        }
                    },
                    q2: function() {
                        var n;
                        return t ? {
                            nextState: "q3",
                            effect: (n = t, {
                                done: !1,
                                value: (0, o.N)(n)
                            })
                        } : {
                            nextState: "q1",
                            effect: v(e),
                            stateUpdater: s
                        }
                    },
                    q3: function() {
                        return {
                            nextState: "q1",
                            effect: v(e),
                            stateUpdater: s
                        }
                    }
                }, "q1", "takeLatest(" + c(n) + ", " + r.name + ")")
            }

            function v(n, r) {
                for (var t = arguments.length, e = Array(t > 2 ? t - 2 : 0), u = 2; u < t; u++) e[u - 2] = arguments[u];
                return o.M.apply(void 0, [f, n, r].concat(e))
            }

            function s(n, r) {
                for (var t = arguments.length, e = Array(t > 2 ? t - 2 : 0), u = 2; u < t; u++) e[u - 2] = arguments[u];
                return o.M.apply(void 0, [l, n, r].concat(e))
            }
        }
    }
]);