import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useCmdK } from "~/application/hooks/useCmdK";
import { useLang } from "~/application/hooks/useLang";
import { useTweaks } from "~/application/hooks/useTweaks";
import { Icon } from "~/presentation/components/shared/Icon";
import { SearchDialog } from "~/presentation/components/shared/SearchDialog";
import { TopNav } from "~/presentation/components/shared/TopNav";
import {
    TweakColor,
    TweakRadio,
    TweakSection,
    TweaksPanel,
} from "~/presentation/components/tweaks/TweaksPanel";
import { CodeLines } from "./CodeLines";

const HERO_CODE_LINES = [
    ["com", "// app/use-cases/create-order.use-case.ts"],
    [
        "mix",
        [
            ["key", "import"],
            ["t", " { "],
            ["cls", "UseCase"],
            ["t", ", "],
            ["cls", "Inject"],
            ["t", " } "],
            ["key", "from"],
            ["t", " "],
            ["str", '"@opticore/core"'],
            ["t", ";"],
        ],
    ],
    ["t", " "],
    [
        "mix",
        [
            ["dec", "@UseCase"],
            ["t", "()"],
        ],
    ],
    [
        "mix",
        [
            ["key", "export class"],
            ["t", " "],
            ["cls", "CreateOrder"],
            ["t", " {"],
        ],
    ],
    [
        "mix",
        [
            ["t", "  "],
            ["key", "constructor"],
            ["t", "("],
        ],
    ],
    [
        "mix",
        [
            ["t", "    "],
            ["dec", "@Inject"],
            ["t", "("],
            ["str", '"OrderRepo"'],
            ["t", ") "],
            ["key", "private"],
            ["t", " repo: "],
            ["cls", "OrderPort"],
            ["t", ","],
        ],
    ],
    [
        "mix",
        [
            ["t", "    "],
            ["dec", "@Inject"],
            ["t", "("],
            ["str", '"Payment"'],
            ["t", ") "],
            ["key", "private"],
            ["t", " pay: "],
            ["cls", "PaymentPort"],
            ["t", ","],
        ],
    ],
    ["t", "  ) {}"],
    ["t", " "],
    [
        "mix",
        [
            ["t", "  "],
            ["key", "async"],
            ["t", " "],
            ["fn", "execute"],
            ["t", "(input: "],
            ["cls", "CreateOrderDTO"],
            ["t", ") {"],
        ],
    ],
    [
        "mix",
        [
            ["t", "    "],
            ["key", "const"],
            ["t", " order = "],
            ["cls", "Order"],
            ["t", "."],
            ["fn", "draft"],
            ["t", "(input);"],
        ],
    ],
    [
        "mix",
        [
            ["t", "    "],
            ["key", "await"],
            ["t", " "],
            ["key", "this"],
            ["t", ".pay."],
            ["fn", "capture"],
            ["t", "(order.total);"],
        ],
    ],
    [
        "mix",
        [
            ["t", "    "],
            ["key", "return"],
            ["t", " "],
            ["key", "this"],
            ["t", ".repo."],
            ["fn", "save"],
            ["t", "(order."],
            ["fn", "confirm"],
            ["t", "());"],
        ],
    ],
    ["t", "  }"],
    ["t", "}"],
] as const;

const MAIN_CODE_LINES = [
    [
        "mix",
        [
            ["key", "import"],
            ["t", " { "],
            ["fn", "createApp"],
            ["t", " } "],
            ["key", "from"],
            ["t", " "],
            ["str", '"@opticore/core"'],
            ["t", ";"],
        ],
    ],
    [
        "mix",
        [
            ["key", "import"],
            ["t", " { "],
            ["cls", "PostgresAdapter"],
            ["t", " } "],
            ["key", "from"],
            ["t", " "],
            ["str", '"@opticore/postgres"'],
            ["t", ";"],
        ],
    ],
    [
        "mix",
        [
            ["key", "import"],
            ["t", " { "],
            ["cls", "FastifyAdapter"],
            ["t", " } "],
            ["key", "from"],
            ["t", " "],
            ["str", '"@opticore/fastify"'],
            ["t", ";"],
        ],
    ],
    [
        "mix",
        [
            ["key", "import"],
            ["t", " { "],
            ["cls", "OrderModule"],
            ["t", " } "],
            ["key", "from"],
            ["t", " "],
            ["str", '"./modules/order"'],
            ["t", ";"],
        ],
    ],
    ["t", " "],
    [
        "mix",
        [
            ["key", "const"],
            ["t", " app = "],
            ["key", "await"],
            ["t", " "],
            ["fn", "createApp"],
            ["t", "({"],
        ],
    ],
    [
        "mix",
        [
            ["t", "  modules: ["],
            ["cls", "OrderModule"],
            ["t", "],"],
        ],
    ],
    ["t", "  adapters: ["],
    [
        "mix",
        [
            ["t", "    "],
            ["cls", "PostgresAdapter"],
            ["t", "(process.env."],
            ["cls", "DATABASE_URL"],
            ["t", "),"],
        ],
    ],
    [
        "mix",
        [
            ["t", "    "],
            ["cls", "FastifyAdapter"],
            ["t", "({ port: "],
            ["num", "3000"],
            ["t", " }),"],
        ],
    ],
    ["t", "  ],"],
    ["t", "});"],
    ["t", " "],
    [
        "mix",
        [
            ["key", "await"],
            ["t", " app."],
            ["fn", "listen"],
            ["t", "();"],
        ],
    ],
    ["com", "// → ✓ 12 use cases · 4 adapters · ready in 184ms"],
] as const;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };
type PkgManager = "npm" | "pnpm" | "yarn" | "bun";

export function Landing() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [pkg, setPkg] = useState<PkgManager>("npm");
    const [installCopied, setInstallCopied] = useState(false);
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const installCmd: Record<PkgManager, string> = {
        npm: "npm create opticore@latest my-app",
        pnpm: "pnpm create opticore my-app",
        yarn: "yarn create opticore my-app",
        bun: "bun create opticore my-app",
    };

    const copyInstall = () => {
        navigator.clipboard?.writeText(installCmd[pkg]);
        setInstallCopied(true);
        setTimeout(() => setInstallCopied(false), 1400);
    };

    const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
    useEffect(() => {
        document.documentElement.style.setProperty("--accent", tw.accent as string);
        document.documentElement.dataset.theme = tw.theme as string;
        document.documentElement.dataset.density = tw.density as string;
    }, [tw.accent, tw.theme, tw.density]);

    return (
        <>
            <TopNav active="home" onSearch={() => setSearchOpen(true)} />
            <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div>
                        <div className="eyebrow">
                            <span className="dot" /> {t.hero_eyebrow}
                        </div>
                        <h1>
                            {t.hero_title_a}
                            <em>{t.hero_title_em}</em>
                            {t.hero_title_b}
                        </h1>
                        <p className="lede">{t.hero_lede}</p>
                        <div className="cta-row">
                            <Link to="/docs" className="btn btn-primary">
                                {t.hero_cta_docs} <Icon name="arrow" size={14} className="arrow" />
                            </Link>
                            <a href="https://github.com/guyzoum77/opticorejs.git" className="btn btn-ghost">
                                <Icon name="github" size={14} /> {t.hero_cta_github}
                            </a>
                        </div>

                        <div className="code-tabs" style={{ marginTop: 32 }}>
                            {(["npm", "pnpm", "yarn", "bun"] as PkgManager[]).map((p) => (
                                <button
                                    key={p}
                                    className={pkg === p ? "active" : ""}
                                    onClick={() => setPkg(p)}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                        <div className="install-line">
                            <span className="prompt">$</span>
                            <span style={{ color: "var(--fg)" }}>{installCmd[pkg]}</span>
                            <button onClick={copyInstall} title="Copy">
                                <Icon name={installCopied ? "check" : "copy"} size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="terminal">
                        <div className="terminal-bar">
                            <div className="dots">
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                            </div>
                            <span className="filename">create-order.use-case.ts</span>
                            <div style={{ width: 36 }} />
                        </div>
                        <CodeLines lines={HERO_CODE_LINES as unknown as Parameters<typeof CodeLines>[0]["lines"]}/>
                    </div>
                </div>
            </section>

            {/* TRUST */}
            <div className="trust">
                <div className="trust-inner">
                    <span className="label">{t.trust_label}</span>
                    <div className="marks">
                        {/*<span>SUNU DigiTech</span>*/}
                        {/*<span>Northwind</span>*/}
                        {/*<span>Voltcore</span>*/}
                        {/*<span>Helios Labs</span>*/}
                        {/*<span>Atlas Bank</span>*/}
                        {/*<span>Forge &amp; Co.</span>*/}
                    </div>
                </div>
            </div>

            {/* PILLARS */}
            <section className="section">
                <div className="section-inner">
                    <div className="section-head">
                        <div>
                            <div className="section-eyebrow">{t.pillars_eyebrow}</div>
                            <h2>
                                {t.pillars_title_a}
                                <em>{t.pillars_title_em}</em>
                                {t.pillars_title_b}
                            </h2>
                        </div>
                        <p>{t.pillars_intro}</p>
                    </div>
                    <div className="pillars">
                        {[
                            {
                                num: "01",
                                icon: "layers" as const,
                                title: t.pillar_1_title,
                                body: t.pillar_1_body,
                            },
                            {
                                num: "02",
                                icon: "plug" as const,
                                title: t.pillar_2_title,
                                body: t.pillar_2_body,
                            },
                            {
                                num: "03",
                                icon: "test" as const,
                                title: t.pillar_3_title,
                                body: t.pillar_3_body,
                            },
                            {
                                num: "04",
                                icon: "bolt" as const,
                                title: t.pillar_4_title,
                                body: t.pillar_4_body,
                            },
                        ].map((p) => (
                            <div key={p.num} className="pillar">
                                <div className="pillar-num">{p.num}</div>
                                <div style={{ marginTop: "auto" }}>
                                    <Icon name={p.icon} size={26} className="pillar-icon" />
                                    <h3>{p.title}</h3>
                                    <p>{p.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="section-inner">
                    <div className="section-head">
                        <div>
                            <div className="section-eyebrow">{t.arch_eyebrow}</div>
                            <h2>
                                {t.arch_title_a}
                                <em>{t.arch_title_em}</em>
                                {t.arch_title_b}
                            </h2>
                        </div>
                        <p>{t.arch_intro}</p>
                    </div>
                    <div className="arch">
                        <div className="arch-text">
                            <ul className="item-list">
                                <li>
                                    <span className="ring" />
                                    <div>
                                        <b>{t.arch_layer_1}</b>
                                        <span className="desc">{t.arch_layer_1_desc}</span>
                                    </div>
                                </li>
                                <li>
                                    <span
                                        className="ring"
                                        style={{
                                            background: "#ffb273",
                                            boxShadow: "0 0 0 4px rgba(255,178,115,0.18)",
                                        }}
                                    />
                                    <div>
                                        <b>{t.arch_layer_2}</b>
                                        <span className="desc">{t.arch_layer_2_desc}</span>
                                    </div>
                                </li>
                                <li>
                                    <span
                                        className="ring"
                                        style={{
                                            background: "#a4abc0",
                                            boxShadow: "0 0 0 4px rgba(164,171,192,0.18)",
                                        }}
                                    />
                                    <div>
                                        <b>{t.arch_layer_3}</b>
                                        <span className="desc">{t.arch_layer_3_desc}</span>
                                    </div>
                                </li>
                                <li>
                                    <span
                                        className="ring"
                                        style={{
                                            background: "#6b7290",
                                            boxShadow: "0 0 0 4px rgba(107,114,144,0.18)",
                                        }}
                                    />
                                    <div>
                                        <b>{t.arch_layer_4}</b>
                                        <span className="desc">{t.arch_layer_4_desc}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="arch-diagram">
                            <div className="ring-stack">
                                <div className="ring-layer l1">
                                    <span className="label">{t.arch_ring_4}</span>
                                </div>
                                <div className="ring-layer l2">
                                    <span className="label">{t.arch_ring_3}</span>
                                </div>
                                <div className="ring-layer l3">
                                    <span className="label">{t.arch_ring_2}</span>
                                </div>
                                <div className="ring-layer l4">{t.arch_ring_1}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CODE SHOWCASE */}
            <section className="section" style={{ paddingTop: 40 }}>
                <div className="section-inner">
                    <div className="code-show">
                        <div className="desc-side">
                            <div className="section-eyebrow">{t.dx_eyebrow}</div>
                            <h3>{t.dx_title}</h3>
                            <p>
                                <code
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        color: "var(--accent)",
                                    }}
                                >
                                    @UseCase()
                                </code>
                                ,&nbsp;
                                <code
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        color: "var(--accent)",
                                    }}
                                >
                                    @Adapter()
                                </code>
                                ,&nbsp;
                                <code
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        color: "var(--accent)",
                                    }}
                                >
                                    @Entity()
                                </code>
                                {t.dx_intro_post}
                            </p>
                            <ul className="feature-list">
                                <li>
                                    <span className="check">✓</span> {t.dx_feat_1}
                                </li>
                                <li>
                                    <span className="check">✓</span> {t.dx_feat_2}
                                </li>
                                <li>
                                    <span className="check">✓</span> {t.dx_feat_3}
                                </li>
                                <li>
                                    <span className="check">✓</span> {t.dx_feat_4}
                                </li>
                            </ul>
                        </div>
                        <div className="terminal">
                            <div className="terminal-bar">
                                <div className="dots">
                                    <span className="dot" />
                                    <span className="dot" />
                                    <span className="dot" />
                                </div>
                                <span className="filename">app/main.ts</span>
                                <div style={{ width: 36 }} />
                            </div>
                            <CodeLines
                                lines={
                                    MAIN_CODE_LINES as unknown as Parameters<
                                        typeof CodeLines
                                    >[0]["lines"]
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <div className="stats">
                <div className="stats-inner">
                    <div className="stat">
                        <div className="num">
                            74<em>ms</em>
                        </div>
                        <div className="lbl">{t.stat_1}</div>
                    </div>
                    <div className="stat">
                        <div className="num">
                            ~28<em>kb</em>
                        </div>
                        <div className="lbl">{t.stat_2}</div>
                    </div>
                    <div className="stat">
                        <div className="num">
                            99.4<em>%</em>
                        </div>
                        <div className="lbl">{t.stat_3}</div>
                    </div>
                    <div className="stat">
                        <div className="num">
                            12<em>k</em>
                        </div>
                        <div className="lbl">{t.stat_4}</div>
                    </div>
                </div>
            </div>

            {/* CTA BAND */}
            <section className="cta-band">
                <div className="cta-band-inner">
                    <h2>
                        {t.cta_title_a}
                        <em>{t.cta_title_em}</em>
                        {t.cta_title_b}
                    </h2>
                    <p>{t.cta_lede}</p>
                    <div className="cta-row center">
                        <Link to="/docs" className="btn btn-primary">
                            {t.cta_get_started} <Icon name="arrow" size={14} className="arrow" />
                        </Link>
                        <a href="/docs#concepts" className="btn btn-ghost">
                            {t.cta_concepts}
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <div className="brand">
                            <img src="/assets/opticorejs-logo.png" alt="" className="brand-logo" />
                            <span className="brand-name">
                                OptiCore<b>JS</b>
                            </span>
                        </div>
                        <p>{t.foot_brand_desc}</p>
                    </div>
                    <div>
                        <h4>{t.foot_docs}</h4>
                        <ul>
                            <li>
                                <a href="/docs#introduction">{t.foot_intro}</a>
                            </li>
                            <li>
                                <a href="/docs#installation">{t.foot_install}</a>
                            </li>
                            <li>
                                <a href="/docs#first-module">{t.foot_first_module}</a>
                            </li>
                            <li>
                                <a href="/docs#concepts">{t.foot_concepts}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t.foot_api}</h4>
                        <ul>
                            <li>
                                <a href="#">@UseCase</a>
                            </li>
                            <li>
                                <a href="#">@Adapter</a>
                            </li>
                            <li>
                                <a href="#">@Entity</a>
                            </li>
                            <li>
                                <a href="#">createApp</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t.foot_community}</h4>
                        <ul>
                            <li>
                                <a href="#">GitHub</a>
                            </li>
                            <li>
                                <a href="#">Discord</a>
                            </li>
                            <li>
                                <a href="#">Stack Overflow</a>
                            </li>
                            <li>
                                <a href="#">RFCs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t.foot_about}</h4>
                        <ul>
                            <li>
                                <a href="#">{t.foot_roadmap}</a>
                            </li>
                            <li>
                                <a href="#">{t.foot_changelog}</a>
                            </li>
                            <li>
                                <a href="#">{t.foot_sponsors}</a>
                            </li>
                            <li>
                                <a href="#">{t.foot_brand}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>{t.foot_copy}</span>
                    <span>{t.foot_build}</span>
                </div>
            </footer>

            <TweaksPanel title="Tweaks">
                <TweakSection label="Accent">
                    <TweakColor
                        label="Color"
                        value={tw.accent as string}
                        onChange={(v) => setTweak("accent", v)}
                        options={["#f59042", "#2A6FDB", "#1F8A5B", "#c84a8a"]}
                    />
                </TweakSection>
                <TweakSection label="Appearance">
                    <TweakRadio
                        label="Theme"
                        value={tw.theme as string}
                        onChange={(v) => setTweak("theme", v)}
                        options={[
                            { value: "dark", label: "Dark" },
                            { value: "light", label: "Light" },
                        ]}
                    />
                    <TweakRadio
                        label="Density"
                        value={tw.density as string}
                        onChange={(v) => setTweak("density", v)}
                        options={[
                            { value: "comfortable", label: "Comfortable" },
                            { value: "compact", label: "Compact" },
                        ]}
                    />
                </TweakSection>
            </TweaksPanel>
        </>
    );
}
