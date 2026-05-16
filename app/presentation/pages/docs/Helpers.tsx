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

const httpExample = `import { createHandler } from "@opticore/http";
import { ConfirmOrder } from "../application/use-cases/confirm-order";

export const confirmOrderHandler = createHandler(async (req, res) => {
  const useCase = req.container.resolve(ConfirmOrder);
  const result = await useCase.execute({ orderId: req.params.id });
  res.json(result);
});`;

const postgresExample = `import { OptiCoreMySQLDriver } from "opticore-mysqldb";
import { getEnvironmentValue } from "opticore-env-access";

const env = getEnvironmentValue(envPath);
const db = new OptiCoreMySQLDriver(env, env.defaultLocal);`;

const redisExample = `import { RedisAdapter } from "@opticore/redis";

const cache = new RedisAdapter({ host: "localhost", port: 6379 });

await cache.set("user:42", JSON.stringify(user), 3600);
const hit = await cache.get("user:42");`;

const queueExample = `import { QueueAdapter } from "@opticore/queue";

const queue = new QueueAdapter("email-notifications");

await queue.publish({ to: "user@example.com", template: "welcome" });
queue.subscribe(async (job) => { await sendEmail(job.data); });`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Helpers() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("http");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "http", label: t.sb_http },
        { id: "postgres", label: t.sb_postgres },
        { id: "redis", label: t.sb_redis },
        { id: "queue", label: t.sb_queue },
    ];

    useEffect(() => {
        const ids = ["http", "postgres", "redis", "queue"];
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
                        {t.crumb} <span>›</span> {t.sb_helpers}
                    </p>
                    <h1 style={{ color: "var(--accent)" }}>{t.helpers_title}</h1>

                    <h2 id="http" className="major">
                        {t.helpers_http_h}
                    </h2>
                    <p>{t.helpers_http_p}</p>
                    <SyntaxCodeBlock tabs={["confirm-order.handler.ts"]} codes={[httpExample]} />

                    <h2 id="postgres" className="major">
                        {t.helpers_postgres_h}
                    </h2>
                    <p>{t.helpers_postgres_p}</p>
                    <SyntaxCodeBlock tabs={["mysql.driver.ts"]} codes={[postgresExample]} />

                    <h2 id="redis" className="major">
                        {t.helpers_redis_h}
                    </h2>
                    <p>{t.helpers_redis_p}</p>
                    <SyntaxCodeBlock tabs={["redis.adapter.ts"]} codes={[redisExample]} />

                    <h2 id="queue" className="major">
                        {t.helpers_queue_h}
                    </h2>
                    <p>{t.helpers_queue_p}</p>
                    <SyntaxCodeBlock tabs={["queue.adapter.ts"]} codes={[queueExample]} />

                    <div className="page-foot">
                        <a href="/docs/features" style={{ textAlign: "left" }}>
                            <span className="dir">{t.docs_prev}</span>
                            <span className="lbl">{t.sb_features}</span>
                        </a>
                        <a href="/docs/config">
                            <span className="dir">{t.docs_next_link}</span>
                            <span className="lbl">{t.sb_config}</span>
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
