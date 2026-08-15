import{A as e,M as t,P as n,t as r}from"./jsx-runtime-DcGadwfq.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,t as d,u as f}from"./TweaksPanel-D7BLbKnh.js";import{n as p,t as m}from"./SyntaxCodeBlock-CSqx52yS.js";var h=n(t(),1),g=r(),_=`import { APIGateway, BaseMiddleware, LoggingMiddleware, RateLimitMiddleware } from "opticore-api-gateway";

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
gateway.addMiddleware(new RequestIdMiddleware().handle());`,v=`import http from "node:http";
import { requestCallsEvent } from "opticore-request-call-event";

const server = http.createServer(app);

server.on("request", (req, res) => {
    requestCallsEvent(req, res, "localhost", 3000, Date.now(), envPath, "en");
});`,y=`import { OpticoreRoutingFactory, ICustomContext, TAuthenticatorFunction } from "opticore-router";
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
);`,b=`import process from "node:process";
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
);`,x={accent:`#f59042`,theme:`dark`,density:`comfortable`};function S(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(`middlewares`),[,,S]=s();f(()=>t(!0));let C=[{id:`middlewares`,label:S.sb_middlewares},{id:`interceptors`,label:S.sb_interceptors},{id:`guards`,label:S.sb_guards},{id:`exceptions`,label:S.sb_exceptions}];(0,h.useEffect)(()=>{let e=[`middlewares`,`interceptors`,`guards`,`exceptions`],t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t.length&&r(t[0].target.id)},{rootMargin:`-80px 0px -70% 0px`,threshold:0});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},[]);let[w,T]=a(x);(0,h.useEffect)(()=>{document.documentElement.style.setProperty(`--accent`,w.accent),document.documentElement.dataset.theme=w.theme,document.documentElement.dataset.density=w.density},[w.accent,w.theme,w.density]);let E=e=>t=>{let n=document.getElementById(e);n&&(t.preventDefault(),n.scrollIntoView({behavior:`smooth`}),r(e))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{active:`docs`,onSearch:()=>t(!0)}),(0,g.jsx)(l,{open:e,onClose:()=>t(!1)}),(0,g.jsxs)(`div`,{className:`docs-shell`,children:[(0,g.jsx)(p,{activeId:n,onScrollTo:E}),(0,g.jsxs)(`main`,{className:`docs-body`,children:[(0,g.jsxs)(`p`,{className:`crumb`,children:[S.crumb,` `,(0,g.jsx)(`span`,{children:`›`}),` `,S.sb_components]}),(0,g.jsx)(`h1`,{style:{color:`var(--accent)`},children:S.comp_title}),(0,g.jsx)(`h2`,{id:`middlewares`,className:`major`,children:S.comp_middlewares_h}),(0,g.jsx)(`p`,{children:S.comp_middlewares_p}),(0,g.jsx)(m,{tabs:[`middlewares.ts`],codes:[_]}),(0,g.jsx)(`h2`,{id:`interceptors`,className:`major`,children:S.comp_interceptors_h}),(0,g.jsx)(`p`,{children:S.comp_interceptors_p}),(0,g.jsx)(m,{tabs:[`requestCallsEvent.ts`],codes:[v]}),(0,g.jsx)(`h2`,{id:`guards`,className:`major`,children:S.comp_guards_h}),(0,g.jsx)(`p`,{children:S.comp_guards_p}),(0,g.jsx)(m,{tabs:[`invoice.router.ts`],codes:[y]}),(0,g.jsx)(`h2`,{id:`exceptions`,className:`major`,children:S.comp_exceptions_h}),(0,g.jsx)(`p`,{children:S.comp_exceptions_p}),(0,g.jsx)(m,{tabs:[`errors.ts`],codes:[b]}),(0,g.jsxs)(`div`,{className:`page-foot`,children:[(0,g.jsxs)(`a`,{href:`/docs/config`,style:{textAlign:`left`},children:[(0,g.jsx)(`span`,{className:`dir`,children:S.docs_prev}),(0,g.jsx)(`span`,{className:`lbl`,children:S.sb_config})]}),(0,g.jsxs)(`a`,{href:`/docs`,children:[(0,g.jsx)(`span`,{className:`dir`,children:S.docs_next_link}),(0,g.jsx)(`span`,{className:`lbl`,children:S.sb_started})]})]})]}),(0,g.jsxs)(`aside`,{className:`docs-toc`,children:[(0,g.jsx)(`h5`,{children:S.docs_toc_label}),C.map(e=>(0,g.jsx)(`a`,{href:`#`+e.id,onClick:E(e.id),className:n===e.id?`active`:``,children:e.label},e.id))]})]}),(0,g.jsxs)(o,{title:`Tweaks`,children:[(0,g.jsx)(u,{label:`Accent`,children:(0,g.jsx)(d,{label:`Color`,value:w.accent,onChange:e=>T(`accent`,e),options:[`#f59042`,`#2A6FDB`,`#1F8A5B`,`#c84a8a`]})}),(0,g.jsxs)(u,{label:`Appearance`,children:[(0,g.jsx)(c,{label:`Theme`,value:w.theme,onChange:e=>T(`theme`,e),options:[{value:`dark`,label:`Dark`},{value:`light`,label:`Light`}]}),(0,g.jsx)(c,{label:`Density`,value:w.density,onChange:e=>T(`density`,e),options:[{value:`comfortable`,label:`Comfortable`},{value:`compact`,label:`Compact`}]})]})]})]})}function C(){return[{title:`Components — OptiCoreJS Documentation`}]}var w=e(function(){return(0,g.jsx)(S,{})});export{w as default,C as meta};