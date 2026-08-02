import { type MouseEvent, useEffect, useState } from "react";
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
import { DocsSidebar } from "./DocsSidebar";
import { SyntaxCodeBlock } from "./SyntaxCodeBlock";

const installNpm = `npm create opticore@latest my-app\ncd my-app\nnpm run dev`;
const installPnpm = `pnpm create opticore my-app\ncd my-app\npnpm dev`;
const installYarn = `yarn create opticore my-app\ncd my-app\nyarn dev`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Docs() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("introduction");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "introduction", label: t.toc_intro },
        { id: "what", label: t.toc_what, indent: true },
        { id: "express", label: t.toc_express, indent: true },
        { id: "modules", label: t.toc_modules, indent: true },
        { id: "orchestrator", label: t.toc_db, indent: true },
        { id: "devex", label: t.toc_devex, indent: true },
        { id: "open", label: t.toc_open, indent: true },
        { id: "philosophy", label: t.toc_philo },
        { id: "prerequisites", label: t.toc_prereq },
        { id: "installation", label: t.toc_install },
        { id: "next", label: t.toc_next },
    ];

    useEffect(() => {
        const ids = [
            "introduction",
            "what",
            "express",
            "modules",
            "orchestrator",
            "devex",
            "open",
            "philosophy",
            "prerequisites",
            "installation",
            "next",
        ];
        const obs = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length) setActiveId(visible[0].target.id);
            },
            { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
    useEffect(() => {
        document.documentElement.style.setProperty("--accent", tw.accent as string);
        document.documentElement.dataset.theme = tw.theme as string;
        document.documentElement.dataset.density = tw.density as string;
    }, [tw.accent, tw.theme, tw.density]);

    const scrollTo = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        const el = document.getElementById(id);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
            setActiveId(id);
        }
    };

    return (
        <>
            <TopNav active="docs" onSearch={() => setSearchOpen(true)} />
            <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

            <div className="docs-shell">
                <DocsSidebar activeId={activeId} onScrollTo={scrollTo} />

                {/* BODY */}
                <main className="docs-body">
                    <p className="crumb">
                        {t.crumb} <span>›</span> {t.crumb_started} <span>›</span> {t.crumb_quick}
                    </p>
                    <h1 id="introduction">{t.docs_title}</h1>
                    <p className="lede">{t.docs_lede}</p>

                    <h2 id="what">{t.intro_what}</h2>
                    <p>{t.intro_p1}</p>

                    <h2 id="express">{t.intro_express}</h2>
                    <p>{t.intro_p2}</p>

                    <h2 id="modules">{t.intro_modules}</h2>
                    <p>{t.intro_p3}</p>

                    <h2 id="orchestrator">{t.intro_db}</h2>
                    <p>{t.intro_p4}</p>

                    <h2 id="devex">{t.intro_devex}</h2>
                    <p>{t.intro_p5}</p>

                    <h2 id="open">{t.intro_open}</h2>
                    <p>{t.intro_p6_a}</p>
                    <p>{t.intro_p6_b}</p>

                    <div className="callout">
                        <Icon name="info" size={20} className="icon" />
                        <p>
                            <strong>{t.intro_callout_b}</strong>
                            {t.intro_callout}
                        </p>
                    </div>

                    <h1 id="philosophy" style={{ marginTop: "80px" }}>
                        {t.philo_title}
                    </h1>
                    <p>{t.philo_p1}</p>
                    <p>{t.philo_p2}</p>
                    <p>{t.philo_p3}</p>

                    <h3 id="prerequisites">{t.docs_prereq}</h3>
                    <p>{t.docs_prereq_intro}</p>
                    <ul>
                        <li>
                            <strong>{t.docs_prereq_1_a}</strong>
                            {t.docs_prereq_1_b}
                        </li>
                        <li>
                            {t.docs_prereq_2_a}
                            <code>npm</code>
                            {t.docs_prereq_2_b}
                            <code>pnpm</code>
                            {t.docs_prereq_2_c}
                            <code>yarn</code>
                            {t.docs_prereq_2_d}
                            <code>bun</code>
                            {t.docs_prereq_2_e}
                        </li>
                        <li>
                            {t.docs_prereq_3_a}
                            <strong>{t.docs_prereq_3_b}</strong>
                            {t.docs_prereq_3_c}
                        </li>
                    </ul>

                    <div className="callout">
                        <Icon name="info" size={20} className="icon" />
                        <p>
                            <strong>{t.docs_callout_1_b}</strong>
                            {t.docs_callout_1}
                        </p>
                    </div>

                    <h2 id="installation" className="major">
                        {t.docs_install}
                    </h2>
                    <p>{t.docs_install_p}</p>

                    <SyntaxCodeBlock
                        tabs={["npm", "pnpm", "yarn"]}
                        codes={[installNpm, installPnpm, installYarn]}
                        lang="sh"
                    />

                    <p>
                        {t.docs_install_after_a}
                        <code>OrderModule</code>
                        {t.docs_install_after_b}
                    </p>

                    <h2 id="next">{t.docs_next}</h2>
                    <p>{t.docs_next_p}</p>
                    <ul>
                        <li>
                            {t.docs_next_1_a}
                            <a href="/docs/core-concepts" style={{ color: "var(--accent)" }}>
                                {t.docs_next_1_b}
                            </a>
                            {t.docs_next_1_c}
                        </li>
                        <li>
                            {t.docs_next_2_a}
                            <a href="/docs/features" style={{ color: "var(--accent)" }}>
                                {t.docs_next_2_b}
                            </a>
                            {t.docs_next_2_c}
                        </li>
                        <li>
                            {t.docs_next_3_a}
                            <a href="/docs/components" style={{ color: "var(--accent)" }}>
                                {t.docs_next_3_b}
                            </a>
                            {t.docs_next_3_c}
                        </li>
                    </ul>

                    <div className="page-foot">
                        <span />
                        <a href="/docs/core-concepts">
                            <span className="dir">{t.docs_next_link}</span>
                            <span className="lbl">{t.sb_concepts}</span>
                        </a>
                    </div>
                </main>

                {/* TOC */}
                <aside className="docs-toc">
                    <h5>{t.docs_toc_label}</h5>
                    {TOC.map((item) => (
                        <a
                            key={item.id}
                            href={"#" + item.id}
                            onClick={scrollTo(item.id)}
                            className={
                                (activeId === item.id ? "active" : "") +
                                (item.indent ? " indent" : "")
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </aside>
            </div>

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
