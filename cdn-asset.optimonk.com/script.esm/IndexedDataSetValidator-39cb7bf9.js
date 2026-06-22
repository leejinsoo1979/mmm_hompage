const t = function(t, a) {
    this.type = "indexedData", this.andOperators = t, this.orOperators = a, this.validate = function(t, a) {
        if (0 === t.length) return !0;
        const e = this.validateDataSetByCallback(t, a, this.orOperators, !0),
            r = this.validateDataSetByCallback(t, a, this.andOperators, !1);
        return e && r
    }, this.validateDataSetByCallback = function(t, a, e, r) {
        let i, n, s, o = e.length,
            l = !1;
        for (; o--;)
            if (s = e[o], t.hasOwnProperty(s))
                for (l = !0, i = t[s], n = i.length; n--;)
                    if (r === a(s, i[n])) return r;
        return !l || !r
    }
};
export {
    t as I
};