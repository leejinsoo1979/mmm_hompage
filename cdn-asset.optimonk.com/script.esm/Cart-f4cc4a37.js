import {
    ag as e,
    S as t
} from "./embedded.25b1c29f.js";
const a = () => t.session.getItem("OptiMonkVisitorCart") || {},
    s = {
        clear: () => {},
        getItems: () => a(),
        totalItems: () => Object.values(a()).reduce(((e, t) => e + parseFloat(t.quantity)), 0),
        total: () => e.total(),
        totalLinePrice: () => Object.values(a()).reduce(((e, t) => e + parseFloat(t.line_price)), 0)
    };
export {
    s as C
};