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

const entityExample = `export class InvoiceEntity {
  private readonly _id: string;
  private _amount: number;
  private _updatedAt: Date;

  constructor(id: string, amount: number, updatedAt: Date = new Date()) {
    this._id = id;
    this._amount = amount;
    this._updatedAt = updatedAt;
    this.validate();
  }

  get id(): string { return this._id; }
  get amount(): number { return this._amount; }

  public touch(): void {
    this._updatedAt = new Date();
  }

  private validate(): void {
    if (!this._id?.trim()) {
        throw new Error("[InvoiceEntity] id must not be empty.");
    }
    if (this._amount < 0) {
        throw new Error("[InvoiceEntity] amount must not be negative.");
    }
  }
}`;

const useCaseExample = `import { IInvoiceRepository } from "../ports/repositories/invoice.repository.interface";
import { InvoiceDtoMapper, InvoiceResponseDto } from "../dtos/invoice.dto";

export class InvoiceUseCase {
  constructor(private readonly repository: IInvoiceRepository) {}

  async findAll(): Promise<InvoiceResponseDto[]> {
    const entities = await this.repository.findAll();
    return InvoiceDtoMapper.toResponseList(entities);
  }

  async findById(id: string): Promise<InvoiceResponseDto | null> {
    const entity = await this.repository.findById(id);
    return entity ? InvoiceDtoMapper.toResponse(entity) : null;
  }
}`;

const portInterfaceExample = `export interface IInvoiceRepository {
  findAll(): Promise<InvoiceEntity[]>;
  findById(id: string): Promise<InvoiceEntity | null>;
  create(entity: InvoiceEntity): Promise<InvoiceEntity>;
}`;

const portImplExample = `import { QueryBuilder, Sql } from "opticore-postgres";
import { IInvoiceRepository } from "../ports/repositories/invoice.repository.interface";

export class InvoiceRepository implements IInvoiceRepository {
  constructor(private readonly sql: Sql) {}

  async findAll(): Promise<InvoiceEntity[]> {
    const rows = await new QueryBuilder("invoices")
      .orderBy("createdAt", "DESC")
      .execute(this.sql);
    return rows.map((r: any) => new InvoiceEntity(r.id, r.amount, r.updatedAt));
  }

  async findById(id: string): Promise<InvoiceEntity | null> {
    const row = await new QueryBuilder("invoices")
        .where("id", id)
        .first(this.sql);
    return row ? new InvoiceEntity(row.id, row.amount, row.updatedAt) : null;
  }

  async create(entity: InvoiceEntity): Promise<InvoiceEntity> {
    await new QueryBuilder("invoices").insert(entity).execute(this.sql);
    return entity;
  }
}`;

const routingExample = `
import { OpticoreRoutingFactory, ICustomContext, IMultipleRouteDefinition } from "opticore-router";
import { InvoiceController } from "../adapters/controllers/invoice.controller";

export const InvoiceHandlerRouter: () => IMultipleRouteDefinition = () =>
  OpticoreRoutingFactory.routes(InvoiceController, [
    {
        path: "/invoices",
        method: "get",
        middlewares: [],
        handler: (ctx: ICustomContext) => InvoiceController.findAll(ctx.req, ctx.res)
    },
    {
        path: "/invoices/:id",
        method: "get",
        middlewares: [],
        handler: (ctx: ICustomContext) => InvoiceController.findById(ctx.req, ctx.res)
    },
  ]);

import { TFeatureRoutes } from "opticore-router";

export const InvoiceRouter: TFeatureRoutes = {
  routes: [
     {
        path: InvoiceHandlerRouter().path,
        handler: InvoiceHandlerRouter().handler
     }
  ],
};`;

const diExample = `import { SContainer, ContainerCore } from "opticore-dependency-inject";
import { InvoiceRepository } from "./infrastructure/adapters/repositories/invoice.repository";
import { InvoiceUseCase } from "./application/use-cases/invoice.usecase";

const container = new SContainer("en", [
  { key: "InvoiceRepository", factory: () => new InvoiceRepository(sql), scope: "singleton" },
  {
    key: "InvoiceUseCase",
    factory: (c?: ContainerCore) => new InvoiceUseCase(c!.resolve("InvoiceRepository")),
    scope: "singleton",
  },
]);

const invoiceUseCase = container.getService<InvoiceUseCase>("InvoiceUseCase");
container.listDependencies();`;

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
        { id: "routing", label: t.sb_routing },
        { id: "di", label: t.sb_di },
    ];

    useEffect(() => {
        const ids = ["entities", "use-cases", "ports", "routing", "di"];
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
                    <p className="lede">{t.cc_lede}</p>

                    <h2 id="entities" className="major">
                        {t.cc_entities_h}
                    </h2>
                    <p>{t.cc_entities_p}</p>
                    <SyntaxCodeBlock tabs={["invoice.entity.ts"]} codes={[entityExample]} />
                    <ul>
                        <li>
                            <code>_id / _amount / _updatedAt</code> — {t.cc_entities_ex_fields}
                        </li>
                        <li>
                            <code>constructor(id, amount, updatedAt)</code> — {t.cc_entities_ex_ctor}
                        </li>
                        <li>
                            <code>get id() / get amount()</code> — {t.cc_entities_ex_getters}
                        </li>
                        <li>
                            <code>touch()</code> — {t.cc_entities_ex_touch}
                        </li>
                        <li>
                            <code>validate()</code> — {t.cc_entities_ex_validate}
                        </li>
                    </ul>

                    <h2 id="use-cases" className="major">
                        {t.cc_uc_h}
                    </h2>
                    <p>{t.cc_uc_p}</p>
                    <SyntaxCodeBlock tabs={["invoice.usecase.ts"]} codes={[useCaseExample]} />
                    <ul>
                        <li>
                            <code>IInvoiceRepository</code> — {t.cc_uc_ex_port}
                        </li>
                        <li>
                            <code>constructor(private readonly repository)</code> —{" "}
                            {t.cc_uc_ex_ctor}
                        </li>
                        <li>
                            <code>findAll() / findById(id)</code> — {t.cc_uc_ex_methods}
                        </li>
                        <li>
                            <code>InvoiceDtoMapper</code> — {t.cc_uc_ex_mapper}
                        </li>
                    </ul>

                    <h2 id="ports" className="major">
                        {t.cc_ports_h}
                    </h2>
                    <p>{t.cc_ports_p}</p>
                    <SyntaxCodeBlock
                        tabs={["invoice.repository.interface.ts", "invoice.repository.ts"]}
                        codes={[portInterfaceExample, portImplExample]}
                    />
                    <ul>
                        <li>
                            <code>interface IInvoiceRepository</code> — {t.cc_ports_ex_iface}
                        </li>
                        <li>
                            <code>findAll() / findById() / create()</code> —{" "}
                            {t.cc_ports_ex_methods}
                        </li>
                        <li>
                            <code>implements IInvoiceRepository</code> — {t.cc_ports_ex_impl}
                        </li>
                        <li>
                            <code>constructor(private readonly sql: Sql)</code> —{" "}
                            {t.cc_ports_ex_ctor}
                        </li>
                        <li>
                            <code>new QueryBuilder(...).execute(this.sql)</code> —{" "}
                            {t.cc_ports_ex_query}
                        </li>
                        <li>
                            <code>new InvoiceEntity(r.id, r.amount, r.updatedAt)</code> —{" "}
                            {t.cc_ports_ex_map}
                        </li>
                    </ul>

                    <h2 id="routing" className="major">
                        {t.cc_routing_h}
                    </h2>
                    <p>{t.cc_routing_p}</p>
                    <SyntaxCodeBlock
                        tabs={["invoice.router.handler.ts"]}
                        codes={[routingExample]}
                    />
                    <ul>
                        <li>
                            <code>OpticoreRoutingFactory.routes(Controller, [...])</code> —{" "}
                            {t.cc_routing_ex_factory}
                        </li>
                        <li>
                            <code>path / method / middlewares / handler</code> —{" "}
                            {t.cc_routing_ex_fields}
                        </li>
                        <li>
                            <code>(ctx: ICustomContext) =&gt; ...</code> — {t.cc_routing_ex_ctx}
                        </li>
                        <li>
                            <code>IMultipleRouteDefinition</code> — {t.cc_routing_ex_type}
                        </li>
                        <li>
                            <code>TFeatureRoutes</code> — {t.cc_routing_ex_feature}
                        </li>
                    </ul>

                    <h2 id="di" className="major">
                        {t.cc_di_h}
                    </h2>
                    <p>{t.cc_di_p}</p>
                    <SyntaxCodeBlock tabs={["container.ts"]} codes={[diExample]} />
                    <ul>
                        <li>
                            <code>new SContainer("en", [...])</code> — {t.cc_di_ex_lang}
                        </li>
                        <li>
                            <code>key</code> — {t.cc_di_ex_key}
                        </li>
                        <li>
                            <code>factory</code> — {t.cc_di_ex_factory}
                        </li>
                        <li>
                            <code>scope: "singleton"</code> — {t.cc_di_ex_scope}
                        </li>
                        <li>
                            <code>c?.resolve("InvoiceRepository")</code> — {t.cc_di_ex_resolve}
                        </li>
                        <li>
                            <code>container.getService&lt;T&gt;("Key")</code> —{" "}
                            {t.cc_di_ex_getservice}
                        </li>
                        <li>
                            <code>container.listDependencies()</code> — {t.cc_di_ex_list}
                        </li>
                    </ul>

                    <div className="callout">
                        <Icon name="info" size={20} className="icon" />
                        <p>
                            <strong>{t.cc_legacy_b}</strong>
                            {t.cc_legacy}
                        </p>
                    </div>

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
