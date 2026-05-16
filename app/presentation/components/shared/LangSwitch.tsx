import { useLang } from "~/application/hooks/useLang";
import type { Lang } from "~/core/ports/I18nPort";

export function LangSwitch() {
    const [lang, setLang] = useLang();
    return (
        <div
            style={{
                display: "inline-flex",
                gap: 0,
                border: "1px solid var(--line)",
                background: "var(--bg-elev)",
                borderRadius: 8,
                padding: 2,
                marginRight: 4,
            }}
        >
            {(["en", "fr"] as Lang[]).map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-label={"Switch to " + l.toUpperCase()}
                    style={{
                        border: 0,
                        background: lang === l ? "var(--bg)" : "transparent",
                        color: lang === l ? "var(--fg)" : "var(--fg-muted)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "5px 10px",
                        borderRadius: 6,
                        transition: "color .15s, background .15s",
                        cursor: "pointer",
                    }}
                >
                    {l}
                </button>
            ))}
        </div>
    );
}
