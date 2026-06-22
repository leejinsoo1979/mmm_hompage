const t = new Uint32Array(65536),
    e = ["icloud.com", "gmail.com", "hotmail.com", "yahoo.com", "ymail.com", "y7mail.com"],
    o = {
        domainThreshold: 2,
        distanceFunction: (e, o) => {
            if (e.length < o.length) {
                const t = o;
                o = e, e = t
            }
            return 0 === o.length ? e.length : e.length <= 32 ? ((e, o) => {
                const l = e.length,
                    r = o.length,
                    c = 1 << l - 1;
                let h = -1,
                    n = 0,
                    a = l,
                    d = l;
                for (; d--;) t[e.charCodeAt(d)] |= 1 << d;
                for (d = 0; d < r; d++) {
                    let e = t[o.charCodeAt(d)];
                    const l = e | n;
                    e |= (e & h) + h ^ h, n |= ~(e | h), h &= e, n & c && a++, h & c && a--, n = n << 1 | 1, h = h << 1 | ~(l | n), n &= l
                }
                for (d = l; d--;) t[e.charCodeAt(d)] = 0;
                return a
            })(e, o) : ((e, o) => {
                const l = o.length,
                    r = e.length,
                    c = [],
                    h = [],
                    n = Math.ceil(l / 32),
                    a = Math.ceil(r / 32);
                for (let t = 0; t < n; t++) h[t] = -1, c[t] = 0;
                let d = 0;
                for (; d < a - 1; d++) {
                    let n = 0,
                        a = -1;
                    const s = 32 * d,
                        i = Math.min(32, r) + s;
                    for (let o = s; o < i; o++) t[e.charCodeAt(o)] |= 1 << o;
                    for (let e = 0; e < l; e++) {
                        const l = t[o.charCodeAt(e)],
                            r = h[e / 32 | 0] >>> e & 1,
                            d = c[e / 32 | 0] >>> e & 1,
                            s = l | n,
                            i = ((l | d) & a) + a ^ a | l | d;
                        let m = n | ~(i | a),
                            f = a & i;
                        m >>> 31 ^ r && (h[e / 32 | 0] ^= 1 << e), f >>> 31 ^ d && (c[e / 32 | 0] ^= 1 << e), m = m << 1 | r, f = f << 1 | d, a = f | ~(s | m), n = m & s
                    }
                    for (let o = s; o < i; o++) t[e.charCodeAt(o)] = 0
                }
                let s = 0,
                    i = -1;
                const m = 32 * d,
                    f = Math.min(32, r - m) + m;
                for (let o = m; o < f; o++) t[e.charCodeAt(o)] |= 1 << o;
                let g = r;
                for (let e = 0; e < l; e++) {
                    const l = t[o.charCodeAt(e)],
                        n = h[e / 32 | 0] >>> e & 1,
                        a = c[e / 32 | 0] >>> e & 1,
                        d = l | s,
                        m = ((l | a) & i) + i ^ i | l | a;
                    let f = s | ~(m | i),
                        A = i & m;
                    g += f >>> r - 1 & 1, g -= A >>> r - 1 & 1, f >>> 31 ^ n && (h[e / 32 | 0] ^= 1 << e), A >>> 31 ^ a && (c[e / 32 | 0] ^= 1 << e), f = f << 1 | n, A = A << 1 | a, i = A | ~(d | f), s = f & d
                }
                for (let o = m; o < f; o++) t[e.charCodeAt(o)] = 0;
                return g
            })(e, o)
        },
        topLevelThreshold: -1,
        secondLevelThreshold: -1
    };
export {
    o as C, e as D
};