import { useEffect, useMemo, useRef, useState } from "react";
import { SEARCH_CORPUS } from "~/adapters/search/searchCorpus";
import { useLang } from "~/application/hooks/useLang";
import { Icon } from "./Icon";

interface SearchDialogProps {
    open: boolean;
    onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
    const [q, setQ] = useState("");
    const [focused, setFocused] = useState(0);
    const [, , t] = useLang();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            setQ("");
            setFocused(0);
            setTimeout(() => inputRef.current?.focus(), 30);
        }
    }, [open]);

    const filtered = useMemo(() => {
        if (!q.trim()) return SEARCH_CORPUS.slice(0, 8);
        const lower = q.toLowerCase();
        return SEARCH_CORPUS.filter(
            (r) => r.title.toLowerCase().includes(lower) || r.group.toLowerCase().includes(lower)
        );
    }, [q]);

    const grouped = useMemo(() => {
        const out: Record<string, typeof SEARCH_CORPUS> = {};
        filtered.forEach((r) => {
            out[r.group] = out[r.group] || [];
            out[r.group].push(r);
        });
        return out;
    }, [filtered]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setFocused((f) => Math.min(f + 1, filtered.length - 1));
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                setFocused((f) => Math.max(f - 1, 0));
            }
            if (e.key === "Enter") {
                const r = filtered[focused];
                if (r) {
                    onClose();
                    window.location.href = r.href;
                }
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open, filtered, focused, onClose]);

    if (!open) return null;

    let i = -1;
    return (
        <div className="search-overlay" onClick={onClose}>
            <div className="search-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="search-input-wrap">
                    <Icon name="search" size={18} style={{ color: "var(--fg-muted)" }} />
                    <input
                        ref={inputRef}
                        value={q}
                        onChange={(e) => {
                            setQ(e.target.value);
                            setFocused(0);
                        }}
                        placeholder={t.search_placeholder}
                    />
                    <kbd>esc</kbd>
                </div>
                <div className="search-results">
                    {Object.entries(grouped).map(([group, items]) => (
                        <div key={group}>
                            <div className="search-group-title">{group}</div>
                            {items.map((r) => {
                                i++;
                                const idx = i;
                                return (
                                    <div
                                        key={r.title}
                                        className={
                                            "search-result" + (idx === focused ? " focused" : "")
                                        }
                                        onMouseEnter={() => setFocused(idx)}
                                        onClick={() => {
                                            onClose();
                                            window.location.href = r.href;
                                        }}
                                    >
                                        <Icon name="docs" size={16} />
                                        <div className="ttl">{r.title}</div>
                                        <p className="crumb">{r.crumb}</p>
                                        <Icon name="arrow" size={14} className="arrow" />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div
                            style={{
                                padding: 32,
                                textAlign: "center",
                                color: "var(--fg-dim)",
                                fontSize: 14,
                            }}
                        >
                            {t.search_empty} "{q}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
