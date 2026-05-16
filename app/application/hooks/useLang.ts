import { useEffect, useState } from "react";
import { TRANSLATIONS } from "~/adapters/i18n/translations";
import { getItem, setItem } from "~/infrastructure/persistence/localStorage";
import type { Lang, Translations } from "~/core/ports/I18nPort";

export function useLang(): [Lang, (l: Lang) => void, Translations] {
    const [lang, setLangState] = useState<Lang>(() => {
        const stored = getItem("opticore-lang");
        return (stored === "fr" ? "fr" : "en") as Lang;
    });

    useEffect(() => {
        setItem("opticore-lang", lang);
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
        window.dispatchEvent(new CustomEvent("opticore-lang", { detail: lang }));
    }, [lang]);

    useEffect(() => {
        const handler = (e: Event) => {
            const lang = (e as CustomEvent<Lang>).detail;
            setLangState(lang);
        };
        window.addEventListener("opticore-lang", handler);
        return () => window.removeEventListener("opticore-lang", handler);
    }, []);

    const t = TRANSLATIONS[lang] ?? TRANSLATIONS.en;
    return [lang, setLangState, t];
}
