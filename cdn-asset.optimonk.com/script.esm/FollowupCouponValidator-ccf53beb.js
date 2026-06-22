import {
    F as o
} from "./FollowupCouponManager-d685455a.js";
import "./embedded.25b1c29f.js";
const n = {
    type: "followupCoupon",
    hasFollowupWindowExpired: (o, n) => !!o.followUpExpiryInMilliseconds && ("automatic" === n.type ? n.generatedAt < Date.now() - o.followUpExpiryInMilliseconds : n.shownAt < Date.now() - o.followUpExpiryInMilliseconds),
    validate(n) {
        const e = n.getFollowupCoupons();
        return !(e.length > 0) || !o.getInstance().didShowCoupon && e.every((o => o.hasCoupon && !this.hasFollowupWindowExpired(o.settings, o.coupon.couponConfig)))
    }
};
export {
    n as FollowupCouponValidator
};