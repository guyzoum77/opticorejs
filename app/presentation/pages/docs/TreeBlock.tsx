import { Fragment, useState, type JSX } from "react";
import { Icon } from "~/presentation/components/shared/Icon";

interface TreeBlockProps {
    tabs: string[];
    trees: string[];
}

type Seg = { cls: string; text: string };

function compact(line: string): string {
    return line
        .replace(/│   /g, "│ ")
        .replace(/    /g, "  ")
        .replace(/├── /g, "├─ ")
        .replace(/└── /g, "└─ ");
}

function tokenizeName(name: string): Seg[] {
    const segs: Seg[] = [];
    const hasTrailingSlash = name.endsWith("/");
    const clean = hasTrailingSlash ? name.slice(0, -1) : name;
    const parts = clean.split("/");

    parts.forEach((part, pi) => {
        if (pi > 0) segs.push({ cls: "tk-mu", text: "/" });
        if (!part) return;

        const isFile = pi === parts.length - 1 && !hasTrailingSlash;
        const tokens = part.split(/(<[^>]+>)/);

        for (const tok of tokens) {
            if (!tok) continue;
            if (tok.startsWith("<")) {
                segs.push({ cls: "tk-str", text: tok });
            } else if (!isFile) {
                segs.push({ cls: "tk-cls", text: tok });
            } else if (tok.startsWith(".")) {
                segs.push({ cls: "tk-com", text: tok });
            } else {
                const dot = tok.lastIndexOf(".");
                if (dot > 0) {
                    segs.push({ cls: "tk-fn", text: tok.slice(0, dot) });
                    segs.push({ cls: "tk-com", text: tok.slice(dot) });
                } else {
                    segs.push({ cls: "tk-fn", text: tok });
                }
            }
        }
    });

    if (hasTrailingSlash) segs.push({ cls: "tk-mu", text: "/" });
    return segs;
}

function tokenizeLine(raw: string): Seg[] {
    const line = compact(raw);

    if (!line.trim()) return [{ cls: "", text: "" }];

    // Section header: no tree chars, starts with uppercase letter
    if (!line.match(/[│├└─]/) && /^[A-Z]/.test(line.trim())) {
        return [{ cls: "tk-key", text: line }];
    }

    const segs: Seg[] = [];

    // Extract leading tree-drawing prefix
    const prefixMatch = line.match(/^([│├└─ ]+)/);
    let rest = line;

    if (prefixMatch) {
        segs.push({ cls: "tk-mu", text: prefixMatch[1] });
        rest = line.slice(prefixMatch[1].length);
    }

    // Extract trailing arrow comment (← ...)
    const arrowIdx = rest.indexOf("←");
    let comment = "";
    if (arrowIdx >= 0) {
        comment = rest.slice(arrowIdx);
        rest = rest.slice(0, arrowIdx).trimEnd();
    }

    if (rest) segs.push(...tokenizeName(rest));
    if (comment) segs.push({ cls: "tk-com", text: "  " + comment });

    return segs;
}

export function TreeBlock({ tabs, trees }: TreeBlockProps): JSX.Element {
    const [active, setActive] = useState(0);
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard?.writeText(trees[active]);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
    };

    const lines = trees[active].split("\n");

    return (
        <div className="codeblock">
            <div className="codeblock-head">
                <div className="codeblock-tabs">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab}
                            className={i === active ? "active" : ""}
                            onClick={() => setActive(i)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <button className={"codeblock-copy" + (copied ? " copied" : "")} onClick={copy}>
                    <Icon name={copied ? "check" : "copy"} size={12} />
                    {copied ? "copied" : "copy"}
                </button>
            </div>
            <pre>
                {lines.map((line, li) => (
                    <Fragment key={li}>
                        {tokenizeLine(line).map((seg, si) => (
                            <span key={si} className={seg.cls}>
                                {seg.text}
                            </span>
                        ))}
                        {li < lines.length - 1 && "\n"}
                    </Fragment>
                ))}
            </pre>
        </div>
    );
}
