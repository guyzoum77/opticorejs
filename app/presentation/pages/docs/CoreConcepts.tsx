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

const entityExample = `import { Entity } from "@opticore/core";

@Entity()
export class Order {
  constructor(
    public readonly id: string,
    public readonly items: OrderItem[],
    private status: "pending" | "confirmed" | "shipped"
  ) {}

  confirm(): void {
    if (this.status !== "pending") throw new Error("Order already confirmed");
    this.status = "confirmed";
  }

  get isShippable(): boolean {
    return this.status === "confirmed" && this.items.length > 0;
  }
}`;

const useCaseExample = `import { UseCase, Inject } from "@opticore/core";
import type { OrderRepository } from "../ports/order.repository";

@UseCase()
export class ConfirmOrder {
  constructor(@Inject("OrderRepository") private repo: OrderRepository) {}

  async execute({ orderId }: { orderId: string }) {
    const order = await this.repo.findById(orderId);
    if (!order) throw new Error("Order not found");
    order.confirm();
    await this.repo.save(order);
    return { confirmed: true };
  }
}`;

const portExample = `// Port (application layer)
export interface OrderRepository {
  findById(id: string): Promise<Order | null>;
  save(order: Order): Promise<void>;
}

// Adapter (infrastructure layer)
import { PrismaClient } from "@prisma/client";

export class PrismaOrderRepository implements OrderRepository {
  constructor(private db: PrismaClient) {}

  async findById(id: string) {
    const row = await this.db.order.findUnique({ where: { id } });
    return row ? mapToDomain(row) : null;
  }

  async save(order: Order) {
    await this.db.order.upsert({ where: { id: order.id }, ...mapToRow(order) });
  }
}`;

const diExample = `import { Module } from "@opticore/core";
import { ConfirmOrder } from "./use-cases/confirm-order";
import { Order } from "./entities/order";
import { PrismaOrderRepository } from "./infra/prisma-order.repository";

@Module({
  entities: [Order],
  useCases: [ConfirmOrder],
  providers: [
    { token: "OrderRepository", useClass: PrismaOrderRepository },
  ],
  exports: [ConfirmOrder],
})
export class OrderModule {}`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function CoreConcepts() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("entities");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "entities", label: t.sb_entities },
        { id: "use-cases", label: t.sb_uc },
        { id: "ports", label: t.sb_ports },
        { id: "di", label: t.sb_di },
    ];

    useEffect(() => {
        const ids = ["entities", "use-cases", "ports", "di"];
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
                        {t.crumb} <span>›</span> {t.sb_concepts}
                    </p>
                    <h1 style={{ color: "var(--accent)" }}>{t.cc_title}</h1>

                    <h2 id="entities" className="major">
                        {t.cc_entities_h}
                    </h2>
                    <p>{t.cc_entities_p}</p>
                    <SyntaxCodeBlock tabs={["order.entity.ts"]} codes={[entityExample]} />

                    <h2 id="use-cases" className="major">
                        {t.cc_uc_h}
                    </h2>
                    <p>{t.cc_uc_p}</p>
                    <SyntaxCodeBlock
                        tabs={["confirm-order.use-case.ts"]}
                        codes={[useCaseExample]}
                    />

                    <h2 id="ports" className="major">
                        {t.cc_ports_h}
                    </h2>
                    <p>{t.cc_ports_p}</p>
                    <SyntaxCodeBlock tabs={["order.repository.ts"]} codes={[portExample]} />

                    <h2 id="di" className="major">
                        {t.cc_di_h}
                    </h2>
                    <p>{t.cc_di_p}</p>
                    <SyntaxCodeBlock tabs={["order.module.ts"]} codes={[diExample]} />

                    <div className="page-foot">
                        <a href="/docs" style={{ textAlign: "left" }}>
                            <span className="dir">{t.docs_prev}</span>
                            <span className="lbl">{t.sb_started}</span>
                        </a>
                        <a href="/docs/features">
                            <span className="dir">{t.docs_next_link}</span>
                            <span className="lbl">{t.sb_features}</span>
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
