import{A as e,M as t,P as n,t as r}from"./jsx-runtime-DcGadwfq.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./TweaksPanel-D7BLbKnh.js";import{n as m,t as h}from"./SyntaxCodeBlock-CSqx52yS.js";var g=n(t(),1),_=r(),v=`export class InvoiceEntity {
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
}`,y=`import { IInvoiceRepository } from "../ports/repositories/invoice.repository.interface";
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
}`,b=`
export interface IInvoiceRepository {
  findAll(): Promise<InvoiceEntity[]>;
  findById(id: string): Promise<InvoiceEntity | null>;
  create(entity: InvoiceEntity): Promise<InvoiceEntity>;
}

import { QueryBuilder, Sql } from "opticore-postgres";

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
}`,x=`
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
};`,S=`import { SContainer, ContainerCore } from "opticore-dependency-inject";
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
container.listDependencies();`,C={accent:`#f59042`,theme:`dark`,density:`comfortable`};function w(){let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(`entities`),[,,w]=s();p(()=>t(!0));let T=[{id:`entities`,label:w.sb_entities},{id:`use-cases`,label:w.sb_uc},{id:`ports`,label:w.sb_ports},{id:`routing`,label:w.sb_routing},{id:`di`,label:w.sb_di}];(0,g.useEffect)(()=>{let e=[`entities`,`use-cases`,`ports`,`routing`,`di`],t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t.length&&r(t[0].target.id)},{rootMargin:`-80px 0px -70% 0px`,threshold:0});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},[]);let[E,D]=a(C);(0,g.useEffect)(()=>{document.documentElement.style.setProperty(`--accent`,E.accent),document.documentElement.dataset.theme=E.theme,document.documentElement.dataset.density=E.density},[E.accent,E.theme,E.density]);let O=e=>t=>{let n=document.getElementById(e);n&&(t.preventDefault(),n.scrollIntoView({behavior:`smooth`}),r(e))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{active:`docs`,onSearch:()=>t(!0)}),(0,_.jsx)(l,{open:e,onClose:()=>t(!1)}),(0,_.jsxs)(`div`,{className:`docs-shell`,children:[(0,_.jsx)(m,{activeId:n,onScrollTo:O}),(0,_.jsxs)(`main`,{className:`docs-body`,children:[(0,_.jsxs)(`p`,{className:`crumb`,children:[w.crumb,` `,(0,_.jsx)(`span`,{children:`›`}),` `,w.sb_concepts]}),(0,_.jsx)(`h1`,{style:{color:`var(--accent)`},children:w.cc_title}),(0,_.jsx)(`p`,{className:`lede`,children:w.cc_lede}),(0,_.jsx)(`h2`,{id:`entities`,className:`major`,children:w.cc_entities_h}),(0,_.jsx)(`p`,{children:w.cc_entities_p}),(0,_.jsx)(h,{tabs:[`invoice.entity.ts`],codes:[v]}),(0,_.jsx)(`h2`,{id:`use-cases`,className:`major`,children:w.cc_uc_h}),(0,_.jsx)(`p`,{children:w.cc_uc_p}),(0,_.jsx)(h,{tabs:[`invoice.usecase.ts`],codes:[y]}),(0,_.jsx)(`h2`,{id:`ports`,className:`major`,children:w.cc_ports_h}),(0,_.jsx)(`p`,{children:w.cc_ports_p}),(0,_.jsx)(h,{tabs:[`invoice.repository.interface.ts`,`invoice.repository.ts`],codes:[b,b]}),(0,_.jsx)(`h2`,{id:`routing`,className:`major`,children:w.cc_routing_h}),(0,_.jsx)(`p`,{children:w.cc_routing_p}),(0,_.jsx)(h,{tabs:[`invoice.router.handler.ts`],codes:[x]}),(0,_.jsx)(`h2`,{id:`di`,className:`major`,children:w.cc_di_h}),(0,_.jsx)(`p`,{children:w.cc_di_p}),(0,_.jsx)(h,{tabs:[`container.ts`],codes:[S]}),(0,_.jsxs)(`div`,{className:`callout`,children:[(0,_.jsx)(d,{name:`info`,size:20,className:`icon`}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{children:w.cc_legacy_b}),w.cc_legacy]})]}),(0,_.jsxs)(`div`,{className:`page-foot`,children:[(0,_.jsxs)(`a`,{href:`/docs`,style:{textAlign:`left`},children:[(0,_.jsx)(`span`,{className:`dir`,children:w.docs_prev}),(0,_.jsx)(`span`,{className:`lbl`,children:w.sb_started})]}),(0,_.jsxs)(`a`,{href:`/docs/features`,children:[(0,_.jsx)(`span`,{className:`dir`,children:w.docs_next_link}),(0,_.jsx)(`span`,{className:`lbl`,children:w.sb_features})]})]})]}),(0,_.jsxs)(`aside`,{className:`docs-toc`,children:[(0,_.jsx)(`h5`,{children:w.docs_toc_label}),T.map(e=>(0,_.jsx)(`a`,{href:`#`+e.id,onClick:O(e.id),className:n===e.id?`active`:``,children:e.label},e.id))]})]}),(0,_.jsxs)(o,{title:`Tweaks`,children:[(0,_.jsx)(u,{label:`Accent`,children:(0,_.jsx)(f,{label:`Color`,value:E.accent,onChange:e=>D(`accent`,e),options:[`#f59042`,`#2A6FDB`,`#1F8A5B`,`#c84a8a`]})}),(0,_.jsxs)(u,{label:`Appearance`,children:[(0,_.jsx)(c,{label:`Theme`,value:E.theme,onChange:e=>D(`theme`,e),options:[{value:`dark`,label:`Dark`},{value:`light`,label:`Light`}]}),(0,_.jsx)(c,{label:`Density`,value:E.density,onChange:e=>D(`density`,e),options:[{value:`comfortable`,label:`Comfortable`},{value:`compact`,label:`Compact`}]})]})]})]})}function T(){return[{title:`Core Concepts — OptiCoreJS Documentation`}]}var E=e(function(){return(0,_.jsx)(w,{})});export{E as default,T as meta};