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

const httpExample = `import { Request, Response } from "express";
import { ResponseHandler, HttpStatusCode } from "opticore-http-response";

export class InvoiceController {
    static async findById(req: Request, res: Response) {
        try {
            const result = await invoiceUseCase.findById(req.params.id);
            if (!result) {
                return ResponseHandler.error(\`Not found: \${req.params.id}\`, HttpStatusCode.NOT_FOUND);
            }
            return ResponseHandler.success(result, "success", HttpStatusCode.OK);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Internal server error";
            return ResponseHandler.error(message, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    }
}`;

const postgresExample = `import { PostgresCore, QueryBuilder } from "opticore-postgres";

const db = new PostgresCore(
    process.env.DATA_BASE_USER!,
    process.env.DATA_BASE_PASSWORD!,
    process.env.DATA_BASE_HOST!,
    Number(process.env.DATA_BASE_PORT),
    "en",
    process.env.DATA_BASE_NAME!
);

db.connection();
const sql = db.getConnection();

const activeAdults = await new QueryBuilder("users")
    .where("status", "active")
    .where("age", ">=", 18)
    .orderBy("createdAt", "DESC")
    .limit(20)
    .execute(sql);`;

const mysqlExample = `import { OptiCoreMySQLDriver } from "opticore-mysqldb";

const db = new OptiCoreMySQLDriver(
    { DB_HOST: "localhost", DB_USER: "root", DB_PASSWORD: "password", DB_NAME: "app" },
    "en"
);

db.connect();

const { results } = await db.query({ sql: "SELECT * FROM users WHERE id = ?", values: [1] });
await db.insert("users", { name: "Alice", email: "alice@example.com" });`;

const mongoExample = `import { MongoClient } from "mongodb";
import { QueryBuilder } from "opticore-mongodb";

const client = await MongoClient.connect(connectionUri);
const database = client.db("myDatabase");

const activeAdults = await new QueryBuilder("users")
    .where("status", "active")
    .where("age", "gte", 18)
    .sort({ createdAt: -1 })
    .limit(20)
    .execute(database);`;

const ormOrchestratorExample = `npx orm-orchestrator init         # pick Prisma / TypeORM / Drizzle / MikroORM / Sequelize
npx orm-orchestrator make:model   # interactive model + relations wizard
npx orm-orchestrator list         # list every model defined for the active ORM`;

const cacheExample = `import { HttpCacheFactory, IHttpCacheService } from "opticore-cache";

const httpCache: IHttpCacheService = HttpCacheFactory.create("external-api", {
    storageType: "disk",   // "memory" | "disk" | "hybrid"
    diskDir: "src/core/cache",
    defaultTTL: 60000,
    maxSize: 500,
});

const post = await httpCache.getWithCache(\`https://api.example.com/posts/\${id}\`);
console.log(post._metadata.source); // "cache" | "api"

await httpCache.invalidateCache("/posts/*");`;

const gatewayExample = `import { APIGateway, AuthMiddleware } from "opticore-api-gateway";

const gateway = new APIGateway({
    port: 3000,
    loadBalancer: "round-robin",
    services: [
        { name: "user-service", url: "http://localhost:4001", healthCheck: "/health" },
    ],
    routes: [
        {
            path: "/users",
            method: "get",
            target: "http://localhost:4001",
            serviceName: "user-service",
            middlewares: [new AuthMiddleware(["my-secret-key"])],
            circuitBreaker: { failureThreshold: 5, resetTimeout: 30000, halfOpenMaxAttempts: 2 },
        },
    ],
});

await gateway.start();`;

const securityExample = `import fs from "fs";
import {
    loaderTranslationFile,
    SAsymmetricCryptionDataWithPublicRSAKey,
} from "opticore-asymmetric-cryption";

loaderTranslationFile("en");

const privateKey = fs.readFileSync("keys/private.pem", "utf8");
const publicKey = fs.readFileSync("keys/public.pem", "utf8");

const crypto = new SAsymmetricCryptionDataWithPublicRSAKey("en", ".env");
const signature = crypto.verifyPublicRSAKey(privateKey, publicKey, "payload to sign");`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Helpers() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("http");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "http", label: t.sb_http },
        { id: "databases", label: t.sb_databases },
        { id: "cache", label: t.sb_cache },
        { id: "gateway", label: t.sb_gateway },
        { id: "security", label: t.sb_security },
    ];

    useEffect(() => {
        const ids = ["http", "databases", "cache", "gateway", "security"];
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
                    <SyntaxCodeBlock tabs={["invoice.controller.ts"]} codes={[httpExample]} />
                    <ul>
                        <li>
                            <code>ResponseHandler.success / .error</code> — {t.helpers_ex_http_rh}
                        </li>
                        <li>
                            <code>HttpStatusCode.NOT_FOUND / .OK / ...</code> —{" "}
                            {t.helpers_ex_http_status}
                        </li>
                        <li>
                            <code>try / catch</code> — {t.helpers_ex_http_catch}
                        </li>
                    </ul>

                    <h2 id="databases" className="major">
                        {t.sb_databases}
                    </h2>
                    <p>{t.helpers_postgres_p}</p>
                    <SyntaxCodeBlock
                        tabs={["opticore-postgres", "opticore-mysqldb", "opticore-mongodb"]}
                        codes={[postgresExample, mysqlExample, mongoExample]}
                    />
                    <ul>
                        <li>
                            <code>new PostgresCore(user, pass, host, port, "en", db)</code> —{" "}
                            {t.helpers_ex_pg_ctor}
                        </li>
                        <li>
                            <code>db.connection() / db.getConnection()</code> —{" "}
                            {t.helpers_ex_pg_conn}
                        </li>
                        <li>
                            <code>QueryBuilder("users").where(...).execute(sql)</code> —{" "}
                            {t.helpers_ex_pg_query}
                        </li>
                        <li>
                            <code>db.query({"{"} sql, values {"}"})</code> — {t.helpers_ex_mysql_query}
                        </li>
                        <li>
                            <code>where("age", "gte", 18) / .sort({"{"} ... {"}"})</code> —{" "}
                            {t.helpers_ex_mongo_ops}
                        </li>
                    </ul>
                    <p>{t.helpers_orm_p}</p>
                    <SyntaxCodeBlock tabs={["shell"]} codes={[ormOrchestratorExample]} lang="sh" />
                    <ul>
                        <li>
                            <code>init</code> — {t.helpers_ex_orm_init}
                        </li>
                        <li>
                            <code>make:model</code> — {t.helpers_ex_orm_make}
                        </li>
                        <li>
                            <code>list</code> — {t.helpers_ex_orm_list}
                        </li>
                    </ul>

                    <h2 id="cache" className="major">
                        {t.sb_cache}
                    </h2>
                    <p>{t.helpers_redis_p}</p>
                    <SyntaxCodeBlock tabs={["cache.ts"]} codes={[cacheExample]} />
                    <ul>
                        <li>
                            <code>storageType: "memory" | "disk" | "hybrid"</code> —{" "}
                            {t.helpers_ex_cache_storage}
                        </li>
                        <li>
                            <code>defaultTTL / maxSize</code> — {t.helpers_ex_cache_ttl}
                        </li>
                        <li>
                            <code>getWithCache(url)</code> — {t.helpers_ex_cache_get}
                        </li>
                        <li>
                            <code>_metadata.source</code> — {t.helpers_ex_cache_meta}
                        </li>
                        <li>
                            <code>invalidateCache("/posts/*")</code> — {t.helpers_ex_cache_invalidate}
                        </li>
                    </ul>

                    <h2 id="gateway" className="major">
                        {t.sb_gateway}
                    </h2>
                    <p>{t.helpers_queue_p}</p>
                    <SyntaxCodeBlock tabs={["gateway.ts"]} codes={[gatewayExample]} />
                    <ul>
                        <li>
                            <code>loadBalancer: "round-robin"</code> — {t.helpers_ex_gw_lb}
                        </li>
                        <li>
                            <code>services: [{"{"} name, url, healthCheck {"}"}]</code> —{" "}
                            {t.helpers_ex_gw_services}
                        </li>
                        <li>
                            <code>routes[].middlewares</code> — {t.helpers_ex_gw_middlewares}
                        </li>
                        <li>
                            <code>circuitBreaker: {"{"} failureThreshold, resetTimeout {"}"}</code>{" "}
                            — {t.helpers_ex_gw_breaker}
                        </li>
                    </ul>

                    <h2 id="security" className="major">
                        {t.sb_security}
                    </h2>
                    <p>{t.helpers_security_p}</p>
                    <SyntaxCodeBlock tabs={["sign.ts"]} codes={[securityExample]} />
                    <ul>
                        <li>
                            <code>loaderTranslationFile("en")</code> — {t.helpers_ex_sec_loader}
                        </li>
                        <li>
                            <code>new SAsymmetricCryptionDataWithPublicRSAKey("en", ".env")</code>{" "}
                            — {t.helpers_ex_sec_ctor}
                        </li>
                        <li>
                            <code>verifyPublicRSAKey(privateKey, publicKey, payload)</code> —{" "}
                            {t.helpers_ex_sec_verify}
                        </li>
                    </ul>

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
