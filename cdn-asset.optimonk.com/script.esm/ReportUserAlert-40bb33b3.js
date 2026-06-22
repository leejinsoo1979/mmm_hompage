import {
    C as t
} from "./embedded.25b1c29f.js";
const e = async e => {
    var n;
    let {
        type: o,
        links: {
            campaign: r,
            component: i
        },
        context: a
    } = e;
    if (r && !(null != (n = null == r.getPrimaryId ? void 0 : r.getPrimaryId()) ? n : r._id)) return void console.warn("Skipping user alert report: no campaign id");
    const d = ((t, e) => {
            const n = [];
            var o, r;
            return t && (n.push({
                id: null != (o = null == t || null == t.getPrimaryId ? void 0 : t.getPrimaryId()) ? o : t._id,
                type: "Campaign"
            }), n.push({
                id: null != (r = null == t || null == t.getCreativeId ? void 0 : t.getCreativeId()) ? r : t.variantId,
                type: "Variant"
            })), e && (Array.isArray(e) ? e.forEach((t => {
                t.getComponentId && n.push({
                    id: t.getComponentId(),
                    type: "Component"
                })
            })) : e.getComponentId && n.push({
                id: e.getComponentId(),
                type: "Component"
            })), n
        })(r, i),
        p = {
            databaseId: OptiMonkRegistry.account,
            type: o,
            links: d,
            context: a,
            clientId: t.local.getItem("optiMonkClientId")
        },
        l = OptiMonkRegistry.baseUrl + "/user-alert";
    return new Promise((t => {
        window.OptiMonk.native.fetch(l, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(p)
        }).then((() => {
            t()
        })).catch((e => {
            console.error("Cannot report user alert", e), t()
        }))
    }))
};
export {
    e as r
};