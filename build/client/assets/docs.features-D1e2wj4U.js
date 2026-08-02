import{A as e,M as t,P as n,t as r}from"./jsx-runtime-DcGadwfq.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./TweaksPanel-D7BLbKnh.js";import{n as m,t as h}from"./SyntaxCodeBlock-CSqx52yS.js";var g=n(t(),1),_=r();function v(e){return e.replace(/│   /g,`│ `).replace(/    /g,`  `).replace(/├── /g,`├─ `).replace(/└── /g,`└─ `)}function y(e){let t=[],n=e.endsWith(`/`),r=(n?e.slice(0,-1):e).split(`/`);return r.forEach((e,i)=>{if(i>0&&t.push({cls:`tk-mu`,text:`/`}),!e)return;let a=i===r.length-1&&!n,o=e.split(/(<[^>]+>)/);for(let e of o)if(e)if(e.startsWith(`<`))t.push({cls:`tk-str`,text:e});else if(!a)t.push({cls:`tk-cls`,text:e});else if(e.startsWith(`.`))t.push({cls:`tk-com`,text:e});else{let n=e.lastIndexOf(`.`);n>0?(t.push({cls:`tk-fn`,text:e.slice(0,n)}),t.push({cls:`tk-com`,text:e.slice(n)})):t.push({cls:`tk-fn`,text:e})}}),n&&t.push({cls:`tk-mu`,text:`/`}),t}function b(e){let t=v(e);if(!t.trim())return[{cls:``,text:``}];if(!t.match(/[│├└─]/)&&/^[A-Z]/.test(t.trim()))return[{cls:`tk-key`,text:t}];let n=[],r=t.match(/^([│├└─ ]+)/),i=t;r&&(n.push({cls:`tk-mu`,text:r[1]}),i=t.slice(r[1].length));let a=i.indexOf(`←`),o=``;return a>=0&&(o=i.slice(a),i=i.slice(0,a).trimEnd()),i&&n.push(...y(i)),o&&n.push({cls:`tk-com`,text:`  `+o}),n}function x({tabs:e,trees:t}){let[n,r]=(0,g.useState)(0),[i,a]=(0,g.useState)(!1),o=()=>{navigator.clipboard?.writeText(t[n]),a(!0),setTimeout(()=>a(!1),1400)},s=t[n].split(`
`);return(0,_.jsxs)(`div`,{className:`codeblock`,children:[(0,_.jsxs)(`div`,{className:`codeblock-head`,children:[(0,_.jsx)(`div`,{className:`codeblock-tabs`,children:e.map((e,t)=>(0,_.jsx)(`button`,{className:t===n?`active`:``,onClick:()=>r(t),children:e},e))}),(0,_.jsxs)(`button`,{className:`codeblock-copy`+(i?` copied`:``),onClick:o,children:[(0,_.jsx)(d,{name:i?`check`:`copy`,size:12}),i?`copied`:`copy`]})]}),(0,_.jsx)(`pre`,{children:s.map((e,t)=>(0,_.jsxs)(g.Fragment,{children:[b(e).map((e,t)=>(0,_.jsx)(`span`,{className:e.cls,children:e.text},t)),t<s.length-1&&`
`]},t))})]})}var S=`npx create-feature-module`,C=`import { CartResponseDto } from "../../dtos/cart.dto";

export interface ICartPresenter {
    presentOne(data: CartResponseDto): unknown;
    presentMany(data: CartResponseDto[]): unknown;
    presentNotFound(id?: string): unknown;
}`,w=`import { CartEntity } from "../../../domain/entities/cart.entity";

export interface ICartRepository {
    findAll(): Promise<CartEntity[]>;
    findById(id: string): Promise<CartEntity | null>;
    create(entity: CartEntity): Promise<CartEntity>;
    update(entity: CartEntity): Promise<CartEntity | null>;
    delete(id: string): Promise<boolean>;
}`,T=`import { CartResponseDto } from "../../dtos/cart.dto";

export interface ICartService {
    handleCreate(data: Record<string, unknown>): Promise<CartResponseDto>;
    handleUpdate(id: string, data: Record<string, unknown>): Promise<CartResponseDto | null>;
    handleDelete(id: string): Promise<boolean>;
    sendWelcomeNotification(id: string): Promise<void>;
    exportToCsv(filters: Record<string, unknown>): Promise<Buffer>;
}`,E=`import { CartEntity } from "../../domain/entities/cart.entity";

export interface CreateCartDto {
    name: string;
    email: string;
}

export interface UpdateCartDto {
    id: string;
    name?: string;
}

export interface CartResponseDto {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export class CartDtoMapper {
    static toResponse(entity: CartEntity): CartResponseDto {
        return {
            id: entity.id,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    static toResponseList(entities: CartEntity[]): CartResponseDto[] {
        return entities.map((entity) => this.toResponse(entity));
    }
}`,D=`import { ICartRepository } from "../ports/repositories/cart.repository.interface";
import { CartEntity } from "../../domain/entities/cart.entity";
import {
    CreateCartDto,
    UpdateCartDto,
    CartResponseDto,
    CartDtoMapper,
} from "../dtos/cart.dto";

export class CartUseCase {
    constructor(private readonly repository: ICartRepository) {}

    async findAll(): Promise<CartResponseDto[]> {
        const entities = await this.repository.findAll();
        return CartDtoMapper.toResponseList(entities);
    }

    async findById(id: string): Promise<CartResponseDto | null> {
        const entity = await this.repository.findById(id);
        if (!entity) return null;
        return CartDtoMapper.toResponse(entity);
    }

    async create(dto: CreateCartDto): Promise<CartResponseDto> {
        const id = crypto.randomUUID();
        const entity = new CartEntity(id, dto.name, dto.email, new Date(), new Date());
        const saved = await this.repository.create(entity);
        return CartDtoMapper.toResponse(saved);
    }

    async update(dto: UpdateCartDto): Promise<CartResponseDto | null> {
        const existing = await this.repository.findById(dto.id);
        if (!existing) return null;
        existing.updateName(dto.name);
        existing.touch();
        const updated = await this.repository.update(existing);
        if (!updated) return null;
        return CartDtoMapper.toResponse(updated);
    }

    async delete(id: string): Promise<boolean> {
        return this.repository.delete(id);
    }
}`,O=`src/features/<featureName>/
├── domain/
│   ├── entities/
│   │   └── <featureName>.entity.ts
│   ├── events/
│   │   └── <featureName>.event.ts
│   └── exceptions/
│       └── <featureName>.exception.ts
├── application/
│   ├── use-cases/
│   │   └── <featureName>.usecase.ts
│   ├── dtos/
│   │   └── <featureName>.dto.ts
│   └── ports/
│       ├── repositories/
│       │   └── <featureName>.repository.interface.ts
│       ├── presenters/
│       │   └── <featureName>.presenter.interface.ts
│       └── services/
│           └── <featureName>.service.ts
└── infrastructure/
    ├── adapters/
    │   ├── controllers/
    │   │   └── <featureName>.controller.ts
    │   ├── repositories/
    │   │   └── <featureName>.repository.ts
    │   └── presenters/
    │       └── <featureName>.presenter.ts
    └── routes/
        ├── <featureName>.router.handler.ts
        └── <featureName>.router.ts`,k=`Domain
├── domain/entities/<n>.entity.ts
├── domain/events/<n>.event.ts
└── domain/exceptions/<n>.exception.ts

Application
├── application/ports/repositories/<n>.repository.interface.ts
├── application/ports/presenters/<n>.presenter.interface.ts
├── application/ports/services/<n>.service.ts
├── application/dtos/<n>.dto.ts
└── application/use-cases/<n>.usecase.ts

Infrastructure
├── infrastructure/adapters/repositories/<n>.repository.ts
├── infrastructure/adapters/presenters/<n>.presenter.ts
├── infrastructure/adapters/controllers/<n>.controller.ts
├── infrastructure/routes/<n>.router.handler.ts
└── infrastructure/routes/<n>.router.ts`,A=`<featureName>/
├── controllers/
│   └── <featureName>.controller.ts
├── models/
│   └── <featureName>.model.ts
├── repositories/
│   └── <featureName>.repository.ts
├── routes/
│   ├── <featureName>.router.ts
│   └── <featureName>.router.handler.ts
└── services/
    └── <featureName>.service.ts`,j=`src/features/login/
├── app/
├── core/
│   ├── middlewares/
│   └── handler/
├── shared/
│   ├── utils/
│   ├── errors/
│   └── constants/
└── login.router.ts`,M=`import { LocalLanguageLoader, loggerConfig, YamlParsing } from "opticore-webapp-core";
import { express } from "opticore-express";
import { WebServer, envPath } from "opticore-webapp";
import { getEnvironmentValue, IEnvVariables } from "opticore-env-access";
import { OptiCoreMySQLDriver } from "opticore-mysqldb";
import { ILoggerConfig, LoggerCore } from "opticore-logger";
import { registerRouter } from "../../app/router/register.router";
import { dependenciesProvider } from "../../helpers/providers/dependencies.provider";

const environment: IEnvVariables = getEnvironmentValue(envPath);

const yamlParsing: YamlParsing = new YamlParsing(environment.defaultLocal, envPath);

new LocalLanguageLoader(environment.defaultLocal, yamlParsing.absolutPath()).load();

const app: WebServer = new WebServer({
    app: express(),
    corsOriginOptions: yamlParsing.readFile("config/cors/corsOptions.yaml"),
    environmentPath: envPath,
    localLanguage: environment.defaultLocal,
    loggerConfig: new LoggerCore(loggerConfig(envPath) as ILoggerConfig),
});

const server = app.onStartServer(
    registerRouter(),
    () => new OptiCoreMySQLDriver(environment, environment.defaultLocal),
    dependenciesProvider
);

app.onListeningOnServerEvent(server!);
app.onRequestOnServerEvent(server!);`,N=`# Scaffold a brand-new OpticoreJS project from a starter template
npx opticore-installer

# Generate a feature module inside an existing project
npx create-feature-module

# Run & monitor long-lived processes with a live dashboard (http://localhost:3000)
npx app-manager`,P=`import { createServer } from "http";
import { HotReloadWatcher } from "opticore-watcher";

const server = createServer(app);

const hotReload = new HotReloadWatcher({
    rootDir: process.cwd(),
    watchExtensions: [".ts", ".json", ".env"],
    hotReloadExtensions: [".json", ".env"], // reloaded in-process, no restart
    debounceMs: 300,
});

await hotReload.attach(server);
server.listen(3000);`,F=`import { LoggerCore } from "opticore-logger";
import { loggerConfig } from "opticore-webapp-core";

const logger = new LoggerCore(loggerConfig(envPath));

logger.info({ title: "Server started", message: "Listening on port 3000" });
logger.warn({ title: "Deprecated route", message: "GET /v1/users is deprecated" });
logger.error({ title: "Unhandled exception", message: err.message, stackTrace: err.stack });`,I=`import { getEnvironmentValue, IEnvVariables } from "opticore-env-access";
import { envPath } from "opticore-webapp";

const env: IEnvVariables = getEnvironmentValue(envPath);

console.log(env.appPort);       // typed: string
console.log(env.defaultLocal);  // typed: string`,L=`import { Validator, ValidationResultInterface } from "opticore-validator";
import { ResponseHandler, HttpStatusCode } from "opticore-http-response";

const schema = {
    email: [
        { rule: "required", message: "Email is required" },
        { rule: "email", message: "Must be a valid email address" },
    ],
    password: [
        { rule: "required" },
        { rule: "minLength", args: [8], message: "At least 8 characters" },
        { rule: "containsUppercase", message: "Add at least one uppercase letter" },
    ],
};

const errors: ValidationResultInterface = new Validator(schema).validate(req.body);

if (Object.keys(errors).length) {
    return ResponseHandler.error("Validation failed", HttpStatusCode.BAD_REQUEST, errors);
}`,R={accent:`#f59042`,theme:`dark`,density:`comfortable`};function z(){let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(`first-module`),[,,v]=s();p(()=>t(!0));let y=[{id:`first-module`,label:v.sb_first},{id:`structure`,label:v.sb_struct},{id:`running`,label:v.sb_running},{id:`devtools`,label:v.sb_devtools},{id:`logger`,label:v.sb_logger},{id:`environment`,label:v.sb_environment},{id:`validation`,label:v.sb_validation}];(0,g.useEffect)(()=>{let e=[`first-module`,`structure`,`running`,`devtools`,`logger`,`environment`,`validation`],t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t.length&&r(t[0].target.id)},{rootMargin:`-80px 0px -70% 0px`,threshold:0});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},[]);let[b,z]=a(R);(0,g.useEffect)(()=>{document.documentElement.style.setProperty(`--accent`,b.accent),document.documentElement.dataset.theme=b.theme,document.documentElement.dataset.density=b.density},[b.accent,b.theme,b.density]);let B=e=>t=>{let n=document.getElementById(e);n&&(t.preventDefault(),n.scrollIntoView({behavior:`smooth`}),r(e))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{active:`docs`,onSearch:()=>t(!0)}),(0,_.jsx)(l,{open:e,onClose:()=>t(!1)}),(0,_.jsxs)(`div`,{className:`docs-shell`,children:[(0,_.jsx)(m,{activeId:n,onScrollTo:B}),(0,_.jsxs)(`main`,{className:`docs-body`,children:[(0,_.jsxs)(`p`,{className:`crumb`,children:[v.crumb,` `,(0,_.jsx)(`span`,{children:`›`}),` `,v.sb_features]}),(0,_.jsx)(`h1`,{style:{color:`var(--accent)`},children:v.feat_title}),(0,_.jsx)(`h2`,{id:`first-module`,className:`major`,children:v.docs_first_module}),(0,_.jsx)(`p`,{children:v.docs_first_module_p}),(0,_.jsx)(h,{tabs:[`npx`],codes:[S],lang:`sh`}),(0,_.jsx)(`p`,{children:v.docs_presenter_p}),(0,_.jsx)(h,{tabs:[`cart.presenter.interface.ts`],codes:[C]}),(0,_.jsx)(`p`,{children:v.docs_repo_p}),(0,_.jsx)(h,{tabs:[`cart.repository.interface.ts`],codes:[w]}),(0,_.jsx)(`p`,{children:v.docs_service_p}),(0,_.jsx)(h,{tabs:[`cart.service.interface.ts`],codes:[T]}),(0,_.jsx)(`p`,{children:v.docs_dto_p}),(0,_.jsx)(h,{tabs:[`cart.dto.ts`],codes:[E]}),(0,_.jsx)(`p`,{children:v.docs_use_case_p}),(0,_.jsx)(h,{tabs:[`cart.use-case.ts`],codes:[D]}),(0,_.jsx)(`h2`,{id:`structure`,className:`major`,children:v.docs_structure}),(0,_.jsx)(`p`,{children:v.docs_structure_p}),(0,_.jsx)(x,{tabs:[`Clean Arch`,`Step by Step`,`Simple`,`Custom`],trees:[O,k,A,j]}),(0,_.jsxs)(`div`,{className:`callout`,children:[(0,_.jsx)(d,{name:`info`,size:20,className:`icon`}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{children:v.docs_callout_2_b}),v.docs_callout_2_a,(0,_.jsx)(`code`,{children:`create-feature-module`}),v.docs_callout_2_c]})]}),(0,_.jsx)(`h2`,{id:`running`,className:`major`,children:v.docs_running}),(0,_.jsx)(`p`,{children:v.docs_running_p}),(0,_.jsx)(h,{tabs:[`main.ts`],codes:[M],lang:`ts`}),(0,_.jsxs)(`p`,{children:[v.docs_running_after_a,(0,_.jsx)(`code`,{children:`GET /cart`}),v.docs_running_after_b]}),(0,_.jsx)(`h2`,{id:`devtools`,className:`major`,children:v.feat_devtools_h}),(0,_.jsx)(`p`,{children:v.feat_devtools_p}),(0,_.jsx)(h,{tabs:[`shell`],codes:[N],lang:`sh`}),(0,_.jsx)(`p`,{children:v.feat_devtools_p2}),(0,_.jsx)(h,{tabs:[`server.ts`],codes:[P],lang:`ts`}),(0,_.jsx)(`h2`,{id:`logger`,className:`major`,children:v.feat_logger_h}),(0,_.jsx)(`p`,{children:v.feat_logger_p}),(0,_.jsx)(h,{tabs:[`logger.ts`],codes:[F]}),(0,_.jsx)(`h2`,{id:`environment`,className:`major`,children:v.feat_env_h}),(0,_.jsx)(`p`,{children:v.feat_env_p}),(0,_.jsx)(h,{tabs:[`env.ts`],codes:[I]}),(0,_.jsx)(`h2`,{id:`validation`,className:`major`,children:v.feat_validation_h}),(0,_.jsx)(`p`,{children:v.feat_validation_p}),(0,_.jsx)(h,{tabs:[`create-order.dto.ts`],codes:[L]}),(0,_.jsxs)(`div`,{className:`page-foot`,children:[(0,_.jsxs)(`a`,{href:`/docs/core-concepts`,style:{textAlign:`left`},children:[(0,_.jsx)(`span`,{className:`dir`,children:v.docs_prev}),(0,_.jsx)(`span`,{className:`lbl`,children:v.sb_concepts})]}),(0,_.jsxs)(`a`,{href:`/docs/helpers`,children:[(0,_.jsx)(`span`,{className:`dir`,children:v.docs_next_link}),(0,_.jsx)(`span`,{className:`lbl`,children:v.sb_helpers})]})]})]}),(0,_.jsxs)(`aside`,{className:`docs-toc`,children:[(0,_.jsx)(`h5`,{children:v.docs_toc_label}),y.map(e=>(0,_.jsx)(`a`,{href:`#`+e.id,onClick:B(e.id),className:n===e.id?`active`:``,children:e.label},e.id))]})]}),(0,_.jsxs)(o,{title:`Tweaks`,children:[(0,_.jsx)(u,{label:`Accent`,children:(0,_.jsx)(f,{label:`Color`,value:b.accent,onChange:e=>z(`accent`,e),options:[`#f59042`,`#2A6FDB`,`#1F8A5B`,`#c84a8a`]})}),(0,_.jsxs)(u,{label:`Appearance`,children:[(0,_.jsx)(c,{label:`Theme`,value:b.theme,onChange:e=>z(`theme`,e),options:[{value:`dark`,label:`Dark`},{value:`light`,label:`Light`}]}),(0,_.jsx)(c,{label:`Density`,value:b.density,onChange:e=>z(`density`,e),options:[{value:`comfortable`,label:`Comfortable`},{value:`compact`,label:`Compact`}]})]})]})]})}function B(){return[{title:`Features — OptiCoreJS Documentation`}]}var V=e(function(){return(0,_.jsx)(z,{})});export{V as default,B as meta};