import {
    ad as t
} from "./embedded.25b1c29f.js";
class e {
    static hasSpellCheckError(e) {
        return Boolean(Number(t.getAttribute(e, "data-spell-check-visible")))
    }
    static setSpellCheckVisibility(e, i) {
        t.setAttribute(e, "data-spell-check-visible", i)
    }
    static resetSpellCheckVisibility(e) {
        t.setAttribute(e, "data-spell-check-visible", 0)
    }
    static appendSpellCheckValidator(e) {
        const i = t.getAttribute(e, "data-validations").concat(" ", "spellCheck");
        t.setAttribute(e, "data-validations", i)
    }
    static setErrorTextAttributes(e, i) {
        t.setAttribute(e, "data-error-text", i), t.setAttribute(e, "data-error-text-default", i)
    }
    static getErrorMessageByUserAgent(t) {
        var e, i;
        return null != (e = {
            ar: "هل تقصد " + (t = decodeURI(t)) + "؟",
            de: "Meinten Sie " + t + "?",
            es: "¿Quisiste decir " + t + "?",
            fr: "Vouliez-vous dire " + t + "?",
            hi: "क्या आप " + t + " कहना चाहते थे?",
            hu: "Nem erre gondoltál " + t + "?",
            it: "Intendevi " + t + "?",
            ja: t + " という意味ですか？",
            pt: "Você quis dizer " + t + "?",
            ru: "Вы имели в виду " + t + "?",
            zh: "您是指 " + t + " 吗？"
        }[null == (i = window.navigator.language) ? void 0 : i.slice(0, 2)]) ? e : "Did you mean " + t + "?"
    }
}
export {
    e as S
};