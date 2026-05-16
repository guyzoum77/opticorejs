import { Fragment, useState, type JSX } from "react";
import { Icon } from "~/presentation/components/shared/Icon";

type TkType = "key" | "cls" | "fn" | "str" | "com" | "dec" | "num" | "mu" | "t";

const CLS: Record<TkType, string> = {
    key: "tk-key",
    cls: "tk-cls",
    fn: "tk-fn",
    str: "tk-str",
    com: "tk-com",
    dec: "tk-dec",
    num: "tk-num",
    mu: "tk-mu",
    t: "tk",
};

const TS_KW = new Set([
    "import",
    "export",
    "from",
    "const",
    "let",
    "var",
    "class",
    "new",
    "async",
    "await",
    "return",
    "if",
    "else",
    "type",
    "interface",
    "extends",
    "implements",
    "public",
    "private",
    "protected",
    "readonly",
    "static",
    "abstract",
    "override",
    "as",
    "of",
    "in",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "throw",
    "try",
    "catch",
    "finally",
    "void",
    "null",
    "undefined",
    "true",
    "false",
    "function",
    "typeof",
    "instanceof",
    "default",
    "delete",
    "this",
    "super",
    "yield",
    "enum",
]);

const SH_KW = new Set(["cd", "run", "create", "dev", "install", "add", "init", "build", "start"]);

type Span = { t: TkType; s: string };

function tokenizeTS(code: string): Span[][] {
    const lines = code.split("\n");
    const result: Span[][] = [];
    let inBlock = false;

    for (const raw of lines) {
        const spans: Span[] = [];
        let i = 0;

        while (i < raw.length) {
            if (inBlock) {
                const end = raw.indexOf("*/", i);
                if (end === -1) {
                    spans.push({ t: "com", s: raw.slice(i) });
                    i = raw.length;
                } else {
                    spans.push({ t: "com", s: raw.slice(i, end + 2) });
                    i = end + 2;
                    inBlock = false;
                }
                continue;
            }

            if (raw[i] === "/" && raw[i + 1] === "/") {
                spans.push({ t: "com", s: raw.slice(i) });
                break;
            }

            if (raw[i] === "/" && raw[i + 1] === "*") {
                const end = raw.indexOf("*/", i + 2);
                if (end === -1) {
                    spans.push({ t: "com", s: raw.slice(i) });
                    inBlock = true;
                    break;
                }
                spans.push({ t: "com", s: raw.slice(i, end + 2) });
                i = end + 2;
                continue;
            }

            const q = raw[i];
            if (q === '"' || q === "'" || q === "`") {
                let j = i + 1;
                while (j < raw.length && raw[j] !== q) {
                    if (raw[j] === "\\") j++;
                    j++;
                }
                spans.push({ t: "str", s: raw.slice(i, j + 1) });
                i = j + 1;
                continue;
            }

            if (raw[i] === "@" && /[A-Za-z_]/.test(raw[i + 1] ?? "")) {
                let j = i + 1;
                while (j < raw.length && /[A-Za-z0-9_]/.test(raw[j])) j++;
                spans.push({ t: "dec", s: raw.slice(i, j) });
                i = j;
                continue;
            }

            if (/[A-Za-z_$]/.test(raw[i])) {
                let j = i;
                while (j < raw.length && /[A-Za-z0-9_$]/.test(raw[j])) j++;
                const word = raw.slice(i, j);
                const type: TkType = TS_KW.has(word)
                    ? "key"
                    : /^[A-Z]/.test(word)
                      ? "cls"
                      : raw[j] === "("
                        ? "fn"
                        : "t";
                spans.push({ t: type, s: word });
                i = j;
                continue;
            }

            if (/[0-9]/.test(raw[i])) {
                let j = i;
                while (j < raw.length && /[0-9._xXa-fA-F]/.test(raw[j])) j++;
                spans.push({ t: "num", s: raw.slice(i, j) });
                i = j;
                continue;
            }

            if (raw[i] === " " || raw[i] === "\t") {
                let j = i;
                while (j < raw.length && (raw[j] === " " || raw[j] === "\t")) j++;
                spans.push({ t: "t", s: raw.slice(i, j) });
                i = j;
                continue;
            }

            spans.push({ t: "mu", s: raw[i] });
            i++;
        }

        result.push(spans);
    }

    return result;
}

function tokenizeSH(code: string): Span[][] {
    return code.split("\n").map((line) => {
        if (!line.trim()) return [{ t: "t" as TkType, s: "" }];
        const spans: Span[] = [];
        let first = true;
        let i = 0;
        while (i < line.length) {
            if (line[i] === " ") {
                spans.push({ t: "t", s: " " });
                i++;
                continue;
            }
            const q = line[i];
            if (q === '"' || q === "'") {
                let j = i + 1;
                while (j < line.length && line[j] !== q) j++;
                spans.push({ t: "str", s: line.slice(i, j + 1) });
                i = j + 1;
                continue;
            }
            let j = i;
            while (j < line.length && line[j] !== " " && line[j] !== '"' && line[j] !== "'") j++;
            const word = line.slice(i, j);
            let type: TkType = first
                ? "fn"
                : word.startsWith("-")
                  ? "key"
                  : /@/.test(word)
                    ? "str"
                    : "t";
            if (SH_KW.has(word)) type = "key";
            spans.push({ t: type, s: word });
            i = j;
            first = false;
        }
        return spans;
    });
}

interface SyntaxCodeBlockProps {
    tabs?: string[];
    codes: string[];
    lang?: "ts" | "sh";
}

export function SyntaxCodeBlock({ tabs, codes, lang = "ts" }: SyntaxCodeBlockProps): JSX.Element {
    const [active, setActive] = useState(0);
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard?.writeText(codes[active]);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
    };

    const lines = lang === "sh" ? tokenizeSH(codes[active]) : tokenizeTS(codes[active]);

    return (
        <div className="codeblock">
            <div className="codeblock-head">
                <div className="codeblock-tabs">
                    {tabs ? (
                        tabs.map((tab, i) => (
                            <button
                                key={tab}
                                className={i === active ? "active" : ""}
                                onClick={() => setActive(i)}
                            >
                                {tab}
                            </button>
                        ))
                    ) : (
                        <button className="active">code</button>
                    )}
                </div>
                <button className={"codeblock-copy" + (copied ? " copied" : "")} onClick={copy}>
                    <Icon name={copied ? "check" : "copy"} size={12} />
                    {copied ? "copied" : "copy"}
                </button>
            </div>
            <pre>
                {lines.map((line, li) => (
                    <Fragment key={li}>
                        {line.map((span, si) => (
                            <span key={si} className={CLS[span.t]}>
                                {span.s}
                            </span>
                        ))}
                        {li < lines.length - 1 && "\n"}
                    </Fragment>
                ))}
            </pre>
        </div>
    );
}
