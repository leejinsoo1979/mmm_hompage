const l = l => {
    var u, e, n;
    const a = null == (u = l.frequency) ? void 0 : u.maximumTime,
        i = null == (e = l.frequency) ? void 0 : e.delayInSec,
        d = null == l || null == (n = l.rules) ? void 0 : n.maximumPopupDisplay,
        r = null == d ? void 0 : d.value,
        s = null == d ? void 0 : d.delay;
    if (null == a && null == r) return {
        displayValue: 1,
        displayDelay: 0
    };
    return {
        displayValue: parseInt(null != a ? a : r, 10),
        displayDelay: parseInt(null != i ? i : s, 10)
    }
};
export {
    l as g
};