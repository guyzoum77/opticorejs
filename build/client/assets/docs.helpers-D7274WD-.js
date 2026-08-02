import{A as e,M as t,P as n,t as r}from"./jsx-runtime-DcGadwfq.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,t as d,u as f}from"./TweaksPanel-D7BLbKnh.js";import{n as p,t as m}from"./SyntaxCodeBlock-CSqx52yS.js";var h=n(t(),1),g=r(),_=`import { Request, Response } from "express";
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
}`,v=`import { PostgresCore, QueryBuilder } from "opticore-postgres";

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
    .execute(sql);`,y=`import { OptiCoreMySQLDriver } from "opticore-mysqldb";

const db = new OptiCoreMySQLDriver(
    { DB_HOST: "localhost", DB_USER: "root", DB_PASSWORD: "password", DB_NAME: "app" },
    "en"
);

db.connect();

const { results } = await db.query({ sql: "SELECT * FROM users WHERE id = ?", values: [1] });
await db.insert("users", { name: "Alice", email: "alice@example.com" });`,b=`import { MongoClient } from "mongodb";
import { QueryBuilder } from "opticore-mongodb";

const client = await MongoClient.connect(connectionUri);
const database = client.db("myDatabase");

const activeAdults = await new QueryBuilder("users")
    .where("status", "active")
    .where("age", "gte", 18)
    .sort({ createdAt: -1 })
    .limit(20)
    .execute(database);`,x=`npx orm-orchestrator init         # pick Prisma / TypeORM / Drizzle / MikroORM / Sequelize
npx orm-orchestrator make:model   # interactive model + relations wizard
npx orm-orchestrator list         # list every model defined for the active ORM`,S=`import { HttpCacheFactory, IHttpCacheService } from "opticore-cache";

const httpCache: IHttpCacheService = HttpCacheFactory.create("external-api", {
    storageType: "disk",   // "memory" | "disk" | "hybrid"
    diskDir: "src/core/cache",
    defaultTTL: 60000,
    maxSize: 500,
});

const post = await httpCache.getWithCache(\`https://api.example.com/posts/\${id}\`);
console.log(post._metadata.source); // "cache" | "api"

await httpCache.invalidateCache("/posts/*");`,C=`import { APIGateway, AuthMiddleware } from "opticore-api-gateway";

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

await gateway.start();`,w=`import fs from "fs";
import {
    loaderTranslationFile,
    SAsymmetricCryptionDataWithPublicRSAKey,
} from "opticore-asymmetric-cryption";

loaderTranslationFile("en");

const privateKey = fs.readFileSync("keys/private.pem", "utf8");
const publicKey = fs.readFileSync("keys/public.pem", "utf8");

const crypto = new SAsymmetricCryptionDataWithPublicRSAKey("en", ".env");
const signature = crypto.verifyPublicRSAKey(privateKey, publicKey, "payload to sign");`,T={accent:`#f59042`,theme:`dark`,density:`comfortable`};function E(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(`http`),[,,E]=s();f(()=>t(!0));let D=[{id:`http`,label:E.sb_http},{id:`databases`,label:E.sb_databases},{id:`cache`,label:E.sb_cache},{id:`gateway`,label:E.sb_gateway},{id:`security`,label:E.sb_security}];(0,h.useEffect)(()=>{let e=[`http`,`databases`,`cache`,`gateway`,`security`],t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t.length&&r(t[0].target.id)},{rootMargin:`-80px 0px -70% 0px`,threshold:0});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},[]);let[O,k]=a(T);(0,h.useEffect)(()=>{document.documentElement.style.setProperty(`--accent`,O.accent),document.documentElement.dataset.theme=O.theme,document.documentElement.dataset.density=O.density},[O.accent,O.theme,O.density]);let A=e=>t=>{let n=document.getElementById(e);n&&(t.preventDefault(),n.scrollIntoView({behavior:`smooth`}),r(e))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{active:`docs`,onSearch:()=>t(!0)}),(0,g.jsx)(l,{open:e,onClose:()=>t(!1)}),(0,g.jsxs)(`div`,{className:`docs-shell`,children:[(0,g.jsx)(p,{activeId:n,onScrollTo:A}),(0,g.jsxs)(`main`,{className:`docs-body`,children:[(0,g.jsxs)(`p`,{className:`crumb`,children:[E.crumb,` `,(0,g.jsx)(`span`,{children:`›`}),` `,E.sb_helpers]}),(0,g.jsx)(`h1`,{style:{color:`var(--accent)`},children:E.helpers_title}),(0,g.jsx)(`h2`,{id:`http`,className:`major`,children:E.helpers_http_h}),(0,g.jsx)(`p`,{children:E.helpers_http_p}),(0,g.jsx)(m,{tabs:[`invoice.controller.ts`],codes:[_]}),(0,g.jsx)(`h2`,{id:`databases`,className:`major`,children:E.sb_databases}),(0,g.jsx)(`p`,{children:E.helpers_postgres_p}),(0,g.jsx)(m,{tabs:[`opticore-postgres`,`opticore-mysqldb`,`opticore-mongodb`],codes:[v,y,b]}),(0,g.jsx)(`p`,{children:E.helpers_orm_p}),(0,g.jsx)(m,{tabs:[`shell`],codes:[x],lang:`sh`}),(0,g.jsx)(`h2`,{id:`cache`,className:`major`,children:E.sb_cache}),(0,g.jsx)(`p`,{children:E.helpers_redis_p}),(0,g.jsx)(m,{tabs:[`cache.ts`],codes:[S]}),(0,g.jsx)(`h2`,{id:`gateway`,className:`major`,children:E.sb_gateway}),(0,g.jsx)(`p`,{children:E.helpers_queue_p}),(0,g.jsx)(m,{tabs:[`gateway.ts`],codes:[C]}),(0,g.jsx)(`h2`,{id:`security`,className:`major`,children:E.sb_security}),(0,g.jsx)(`p`,{children:E.helpers_security_p}),(0,g.jsx)(m,{tabs:[`sign.ts`],codes:[w]}),(0,g.jsxs)(`div`,{className:`page-foot`,children:[(0,g.jsxs)(`a`,{href:`/docs/features`,style:{textAlign:`left`},children:[(0,g.jsx)(`span`,{className:`dir`,children:E.docs_prev}),(0,g.jsx)(`span`,{className:`lbl`,children:E.sb_features})]}),(0,g.jsxs)(`a`,{href:`/docs/config`,children:[(0,g.jsx)(`span`,{className:`dir`,children:E.docs_next_link}),(0,g.jsx)(`span`,{className:`lbl`,children:E.sb_config})]})]})]}),(0,g.jsxs)(`aside`,{className:`docs-toc`,children:[(0,g.jsx)(`h5`,{children:E.docs_toc_label}),D.map(e=>(0,g.jsx)(`a`,{href:`#`+e.id,onClick:A(e.id),className:n===e.id?`active`:``,children:e.label},e.id))]})]}),(0,g.jsxs)(o,{title:`Tweaks`,children:[(0,g.jsx)(u,{label:`Accent`,children:(0,g.jsx)(d,{label:`Color`,value:O.accent,onChange:e=>k(`accent`,e),options:[`#f59042`,`#2A6FDB`,`#1F8A5B`,`#c84a8a`]})}),(0,g.jsxs)(u,{label:`Appearance`,children:[(0,g.jsx)(c,{label:`Theme`,value:O.theme,onChange:e=>k(`theme`,e),options:[{value:`dark`,label:`Dark`},{value:`light`,label:`Light`}]}),(0,g.jsx)(c,{label:`Density`,value:O.density,onChange:e=>k(`density`,e),options:[{value:`comfortable`,label:`Comfortable`},{value:`compact`,label:`Compact`}]})]})]})]})}function D(){return[{title:`Helpers — OptiCoreJS Documentation`}]}var O=e(function(){return(0,g.jsx)(E,{})});export{O as default,D as meta};