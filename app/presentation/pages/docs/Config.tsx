import { type MouseEvent, useEffect, useState } from "react";
import { useCmdK } from "~/application/hooks/useCmdK";
import { useLang } from "~/application/hooks/useLang";
import { useTweaks } from "~/application/hooks/useTweaks";
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

const configServiceExample = `import { ConfigService } from "@opticore/config";

const config = new ConfigService();

const port = config.get<number>("PORT", 3000);
const dbUrl = config.getOrThrow<string>("DATABASE_URL");`;

const envVarsExample = `import { getEnvironmentValue, IEnvVariables } from "opticore-env-access";
import { envPath } from "opticore-webapp";

// All values are validated on startup — missing required vars throw
const env: IEnvVariables = getEnvironmentValue(envPath);

// Typed access
const port: number        = env.port;
const locale: string      = env.defaultLocal;
const dbHost: string      = env.databaseHost;`;

const yamlExample = `import { YamlParsing } from "opticore-webapp-core";

const yaml = new YamlParsing(env.defaultLocal, envPath);

// Load a structured YAML file as a typed object
const corsOptions = yaml.readFile("config/cors/corsOptions.yaml");
// { origin: ["https://app.example.com"], methods: ["GET","POST"], ... }`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Config() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("config-service");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "config-service", label: t.sb_config_service },
        { id: "env-vars", label: t.sb_env_vars },
        { id: "yaml", label: t.sb_yaml },
    ];

    useEffect(() => {
        const ids = ["config-service", "env-vars", "yaml"];
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

                <main className="docs-body">
                    <p className="crumb">
                        {t.crumb} <span>›</span> {t.sb_config}
                    </p>
                    <h1 style={{ color: "var(--accent)" }}>{t.config_title}</h1>

                    <h2 id="config-service" className="major">
                        {t.config_service_h}
                    </h2>
                    <p>{t.config_service_p}</p>
                    <SyntaxCodeBlock tabs={["config.service.ts"]} codes={[configServiceExample]} />

                    <h2 id="env-vars" className="major">
                        {t.config_env_h}
                    </h2>
                    <p>{t.config_env_p}</p>
                    <SyntaxCodeBlock tabs={["env.ts"]} codes={[envVarsExample]} />

                    <h2 id="yaml" className="major">
                        {t.config_yaml_h}
                    </h2>
                    <p>{t.config_yaml_p}</p>
                    <SyntaxCodeBlock tabs={["yaml.ts"]} codes={[yamlExample]} />

                    <div className="page-foot">
                        <a href="/docs/helpers" style={{ textAlign: "left" }}>
                            <span className="dir">{t.docs_prev}</span>
                            <span className="lbl">{t.sb_helpers}</span>
                        </a>
                        <a href="/docs/components">
                            <span className="dir">{t.docs_next_link}</span>
                            <span className="lbl">{t.sb_components}</span>
                        </a>
                    </div>
                </main>

                <aside className="docs-toc">
                    <h5>{t.docs_toc_label}</h5>
                    {TOC.map((item) => (
                        <a
                            key={item.id}
                            href={"#" + item.id}
                            onClick={scrollTo(item.id)}
                            className={activeId === item.id ? "active" : ""}
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
