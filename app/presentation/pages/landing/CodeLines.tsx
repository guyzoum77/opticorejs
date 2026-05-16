type TokenType = "com" | "key" | "cls" | "fn" | "str" | "dec" | "num" | "mu" | "t";
type Token = [TokenType, string];
type Line = ["mix", Token[]] | [TokenType, string];

interface CodeLinesProps {
    lines: Line[];
}

const CLS: Record<TokenType, string> = {
    com: "tk-com",
    key: "tk-key",
    cls: "tk-cls",
    fn: "tk-fn",
    str: "tk-str",
    dec: "tk-dec",
    num: "tk-num",
    mu: "tk-mu",
    t: "tk",
};

export function CodeLines({ lines }: CodeLinesProps) {
    return (
        <div className="terminal-body">
            {lines.map((line, i) => {
                if (line[0] === "mix") {
                    const tokens = line[1] as Token[];
                    return (
                        <div key={i}>
                            {tokens.map((s, j) => (
                                <span key={j} className={CLS[s[0]]}>
                                    {s[1]}
                                </span>
                            ))}
                        </div>
                    );
                }
                return (
                    <div key={i}>
                        <span className={CLS[line[0] as TokenType]}>{line[1] as string}</span>
                    </div>
                );
            })}
        </div>
    );
}
