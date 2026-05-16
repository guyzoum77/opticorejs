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

const decoratorsExample = `import { Module, UseCase, Inject, Controller } from "@opticore/core";

@Module({ entities: [Order], useCases: [ConfirmOrder] })
export class OrderModule {}

@UseCase()
export class ConfirmOrder {
  constructor(@Inject("OrderRepository") private repo: OrderRepository) {}
}

@Controller("/orders")
export class OrderController {
  constructor(@Inject(ConfirmOrder) private confirmOrder: ConfirmOrder) {}
}`;

const interceptorsExample = `import type { Interceptor, ExecutionContext } from "@opticore/core";

export class LoggingInterceptor implements Interceptor {
  async intercept(ctx: ExecutionContext, next: () => Promise<unknown>) {
    const start = Date.now();
    const result = await next();
    console.log(\`\${ctx.handler} completed in \${Date.now() - start}ms\`);
    return result;
  }
}`;

const guardsExample = `import type { Guard, Request } from "@opticore/core";

export class AuthGuard implements Guard {
  canActivate(req: Request): boolean {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new UnauthorizedException("Missing bearer token");
    return verifyJwt(token);
  }
}`;

const pipesExample = `import type { Pipe } from "@opticore/core";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { validate } from "@opticore/validation";

export class ValidationPipe implements Pipe {
  async transform(value: unknown) {
    const dto = Object.assign(new CreateOrderDto(), value);
    const errors = await validate(dto);
    if (errors.length) throw new BadRequestException(errors);
    return dto;
  }
}`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Components() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("decorators");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "decorators", label: t.sb_decorators },
        { id: "interceptors", label: t.sb_interceptors },
        { id: "guards", label: t.sb_guards },
        { id: "pipes", label: t.sb_pipes },
    ];

    useEffect(() => {
        const ids = ["decorators", "interceptors", "guards", "pipes"];
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

                    <h2 id="decorators" className="major">
                        {t.comp_decorators_h}
                    </h2>
                    <p>{t.comp_decorators_p}</p>
                    <SyntaxCodeBlock tabs={["decorators.ts"]} codes={[decoratorsExample]} />

                    <h2 id="interceptors" className="major">
                        {t.comp_interceptors_h}
                    </h2>
                    <p>{t.comp_interceptors_p}</p>
                    <SyntaxCodeBlock
                        tabs={["logging.interceptor.ts"]}
                        codes={[interceptorsExample]}
                    />

                    <h2 id="guards" className="major">
                        {t.comp_guards_h}
                    </h2>
                    <p>{t.comp_guards_p}</p>
                    <SyntaxCodeBlock tabs={["auth.guard.ts"]} codes={[guardsExample]} />

                    <h2 id="pipes" className="major">
                        {t.comp_pipes_h}
                    </h2>
                    <p>{t.comp_pipes_p}</p>
                    <SyntaxCodeBlock tabs={["validation.pipe.ts"]} codes={[pipesExample]} />

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
