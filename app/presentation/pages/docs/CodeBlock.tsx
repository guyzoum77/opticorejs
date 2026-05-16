import {type JSX, useState} from "react";
import { Icon } from "~/presentation/components/shared/Icon";

interface CodeBlockProps {
    tabs?: string[];
    children: React.ReactElement | React.ReactElement[];
    copyText?: string;
}

export function CodeBlock({ tabs, children, copyText }: CodeBlockProps): JSX.Element {
    const [active, setActive] = useState(0);
    const [copied, setCopied] = useState(false);

    const childArray: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>[] = Array.isArray(children) ? children : [children];

    type DataProps = Record<string, string>;

    const copy = () => {
        const child = childArray[active];
        const props = (child?.props ?? {}) as DataProps;
        const text = copyText || props["data-raw"] || "";
        navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
    };

    const content = childArray[active];
    const firstProps = (childArray[0]?.props ?? {}) as DataProps;

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
                        <button className="active">{firstProps["data-name"] || "code"}</button>
                    )}
                </div>
                <button className={"codeblock-copy" + (copied ? " copied" : "")} onClick={copy}>
                    <Icon name={copied ? "check" : "copy"} size={12} />
                    {copied ? "copied" : "copy"}
                </button>
            </div>
            <pre>{content}</pre>
        </div>
    );
}
