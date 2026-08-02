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

const middlewaresExample = `import { APIGateway, BaseMiddleware, LoggingMiddleware, RateLimitMiddleware } from "opticore-api-gateway";

class RequestIdMiddleware extends BaseMiddleware {
    handle() {
        return (req, res, next) => {
            req.headers["x-request-id"] ??= crypto.randomUUID();
            next();
        };
    }
}

const gateway = new APIGateway({ port: 3000, services: [], routes: [] });

gateway.addMiddleware(new LoggingMiddleware("info").handle());
gateway.addMiddleware(new RateLimitMiddleware(100, 60000).handle());
gateway.addMiddleware(new RequestIdMiddleware().handle());`;

const interceptorsExample = `import http from "node:http";
import { requestCallsEvent } from "opticore-request-call-event";

const server = http.createServer(app);

server.on("request", (req, res) => {
    requestCallsEvent(req, res, "localhost", 3000, Date.now(), envPath, "en");
});`;

const guardsExample = `import { OpticoreRoutingFactory, ICustomContext, TAuthenticatorFunction } from "opticore-router";
import passport from "passport";

const jwtAuthenticator: TAuthenticatorFunction<ICustomContext> =
    passport.authenticate("jwt", { session: false });

export const InvoiceRouter = OpticoreRoutingFactory.routes(
    InvoiceController,
    [
        {
            path: "/invoices",
            method: "post",
            middlewares: [],
            handler: (ctx: ICustomContext) => InvoiceController.create(ctx.req, ctx.res),
        },
    ],
    jwtAuthenticator
);`;

const exceptionsExample = `import process from "node:process";
import { StackTraceError, ServerListenEventError, CEvent as event } from "opticore-catch-exception-error";
import { HttpStatusCode } from "opticore-http-response";

// 1. Typed, HTTP-aware errors thrown anywhere in your infrastructure layer
throw new StackTraceError(
    "Could not connect to the database",
    "DatabaseConnectionError",
    HttpStatusCode.UNAUTHORIZED,
    true
);

// 2. Process-wide safety net, wired once at boot
const serverListenEvent = new ServerListenEventError("en");

process.on(event.uncaughtException, (error) => serverListenEvent.uncaughtException(error));
process.on(event.unhandledRejection, (reason, promise) =>
    serverListenEvent.unhandledRejection(reason, promise)
);`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Components() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("middlewares");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "middlewares", label: t.sb_middlewares },
        { id: "interceptors", label: t.sb_interceptors },
        { id: "guards", label: t.sb_guards },
        { id: "exceptions", label: t.sb_exceptions },
    ];

    useEffect(() => {
        const ids = ["middlewares", "interceptors", "guards", "exceptions"];
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
                        {t.crumb} <span>›</span> {t.sb_components}
                    </p>
                    <h1 style={{ color: "var(--accent)" }}>{t.comp_title}</h1>

                    <h2 id="middlewares" className="major">
                        {t.comp_middlewares_h}
                    </h2>
                    <p>{t.comp_middlewares_p}</p>
                    <SyntaxCodeBlock tabs={["middlewares.ts"]} codes={[middlewaresExample]} />

                    <h2 id="interceptors" className="major">
                        {t.comp_interceptors_h}
                    </h2>
                    <p>{t.comp_interceptors_p}</p>
                    <SyntaxCodeBlock
                        tabs={["requestCallsEvent.ts"]}
                        codes={[interceptorsExample]}
                    />

                    <h2 id="guards" className="major">
                        {t.comp_guards_h}
                    </h2>
                    <p>{t.comp_guards_p}</p>
                    <SyntaxCodeBlock tabs={["invoice.router.ts"]} codes={[guardsExample]} />

                    <h2 id="exceptions" className="major">
                        {t.comp_exceptions_h}
                    </h2>
                    <p>{t.comp_exceptions_p}</p>
                    <SyntaxCodeBlock tabs={["errors.ts"]} codes={[exceptionsExample]} />

                    <div className="page-foot">
                        <a href="/docs/config" style={{ textAlign: "left" }}>
                            <span className="dir">{t.docs_prev}</span>
                            <span className="lbl">{t.sb_config}</span>
                        </a>
                        <a href="/docs">
                            <span className="dir">{t.docs_next_link}</span>
                            <span className="lbl">{t.sb_started}</span>
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
