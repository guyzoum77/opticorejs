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
import { TreeBlock } from "./TreeBlock";

const scaffoldCmd = `npx create-feature-module`;

const cartPresenterInterface = `import { CartResponseDto } from "../../dtos/cart.dto";

export interface ICartPresenter {
    presentOne(data: CartResponseDto): unknown;
    presentMany(data: CartResponseDto[]): unknown;
    presentNotFound(id?: string): unknown;
}`;

const cartRepositoryInterface = `import { CartEntity } from "../../../domain/entities/cart.entity";

export interface ICartRepository {
    findAll(): Promise<CartEntity[]>;
    findById(id: string): Promise<CartEntity | null>;
    create(entity: CartEntity): Promise<CartEntity>;
    update(entity: CartEntity): Promise<CartEntity | null>;
    delete(id: string): Promise<boolean>;
}`;

const cartServiceInterface = `import { CartResponseDto } from "../../dtos/cart.dto";

export interface ICartService {
    handleCreate(data: Record<string, unknown>): Promise<CartResponseDto>;
    handleUpdate(id: string, data: Record<string, unknown>): Promise<CartResponseDto | null>;
    handleDelete(id: string): Promise<boolean>;
    sendWelcomeNotification(id: string): Promise<void>;
    exportToCsv(filters: Record<string, unknown>): Promise<Buffer>;
}`;

const cartDto = `import { CartEntity } from "../../domain/entities/cart.entity";

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
}`;

const cartUseCase = `import { ICartRepository } from "../ports/repositories/cart.repository.interface";
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
}`;

const structureCleanFull = `src/features/<featureName>/
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
        └── <featureName>.router.ts`;

const structureCleanStep = `Domain
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
└── infrastructure/routes/<n>.router.ts`;

const structureSimple = `<featureName>/
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
    └── <featureName>.service.ts`;

const structureCustom = `src/features/login/
├── app/
├── core/
│   ├── middlewares/
│   └── handler/
├── shared/
│   ├── utils/
│   ├── errors/
│   └── constants/
└── login.router.ts`;

const mainTs = `import { LocalLanguageLoader, loggerConfig, YamlParsing } from "opticore-webapp-core";
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
app.onRequestOnServerEvent(server!);`;

const devtoolsCli = `# Scaffold a brand-new OpticoreJS project from a starter template
npx opticore-installer

# Generate a feature module inside an existing project
npx create-feature-module

# Run & monitor long-lived processes with a live dashboard (http://localhost:3000)
npx app-manager`;

const hotReloadExample = `import { createServer } from "http";
import { HotReloadWatcher } from "opticore-watcher";

const server = createServer(app);

const hotReload = new HotReloadWatcher({
    rootDir: process.cwd(),
    watchExtensions: [".ts", ".json", ".env"],
    hotReloadExtensions: [".json", ".env"], // reloaded in-process, no restart
    debounceMs: 300,
});

await hotReload.attach(server);
server.listen(3000);`;

const loggerExample = `import { LoggerCore } from "opticore-logger";
import { loggerConfig } from "opticore-webapp-core";

const logger = new LoggerCore(loggerConfig(envPath));

logger.info({ title: "Server started", message: "Listening on port 3000" });
logger.warn({ title: "Deprecated route", message: "GET /v1/users is deprecated" });
logger.error({ title: "Unhandled exception", message: err.message, stackTrace: err.stack });`;

const envExample = `import { getEnvironmentValue, IEnvVariables } from "opticore-env-access";
import { envPath } from "opticore-webapp";

const env: IEnvVariables = getEnvironmentValue(envPath);

console.log(env.appPort);       // typed: string
console.log(env.defaultLocal);  // typed: string`;

const validationExample = `import { Validator, ValidationResultInterface } from "opticore-validator";
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
}`;

const TWEAK_DEFAULTS = { accent: "#f59042", theme: "dark", density: "comfortable" };

export function Features() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeId, setActiveId] = useState("first-module");
    const [, , t] = useLang();
    useCmdK(() => setSearchOpen(true));

    const TOC = [
        { id: "first-module", label: t.sb_first },
        { id: "structure", label: t.sb_struct },
        { id: "running", label: t.sb_running },
        { id: "devtools", label: t.sb_devtools },
        { id: "logger", label: t.sb_logger },
        { id: "environment", label: t.sb_environment },
        { id: "validation", label: t.sb_validation },
    ];

    useEffect(() => {
        const ids = [
            "first-module",
            "structure",
            "running",
            "devtools",
            "logger",
            "environment",
            "validation",
        ];
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
                        {t.crumb} <span>›</span> {t.sb_features}
                    </p>
                    <h1 style={{ color: "var(--accent)" }}>{t.feat_title}</h1>

                    <h2 id="first-module" className="major">
                        {t.docs_first_module}
                    </h2>
                    <p>{t.docs_first_module_p}</p>
                    <SyntaxCodeBlock tabs={["npx"]} codes={[scaffoldCmd]} lang="sh" />

                    <p>{t.docs_presenter_p}</p>
                    <SyntaxCodeBlock
                        tabs={["cart.presenter.interface.ts"]}
                        codes={[cartPresenterInterface]}
                    />

                    <p>{t.docs_repo_p}</p>
                    <SyntaxCodeBlock
                        tabs={["cart.repository.interface.ts"]}
                        codes={[cartRepositoryInterface]}
                    />

                    <p>{t.docs_service_p}</p>
                    <SyntaxCodeBlock
                        tabs={["cart.service.interface.ts"]}
                        codes={[cartServiceInterface]}
                    />

                    <p>{t.docs_dto_p}</p>
                    <SyntaxCodeBlock tabs={["cart.dto.ts"]} codes={[cartDto]} />

                    <p>{t.docs_use_case_p}</p>
                    <SyntaxCodeBlock tabs={["cart.use-case.ts"]} codes={[cartUseCase]} />

                    <h2 id="structure" className="major">
                        {t.docs_structure}
                    </h2>
                    <p>{t.docs_structure_p}</p>

                    <TreeBlock
                        tabs={["Clean Arch", "Step by Step", "Simple", "Custom"]}
                        trees={[
                            structureCleanFull,
                            structureCleanStep,
                            structureSimple,
                            structureCustom,
                        ]}
                    />

                    <div className="callout">
                        <Icon name="info" size={20} className="icon" />
                        <p>
                            <strong>{t.docs_callout_2_b}</strong>
                            {t.docs_callout_2_a}
                            <code>create-feature-module</code>
                            {t.docs_callout_2_c}
                        </p>
                    </div>

                    <h2 id="running" className="major">
                        {t.docs_running}
                    </h2>
                    <p>{t.docs_running_p}</p>
                    <SyntaxCodeBlock tabs={["main.ts"]} codes={[mainTs]} lang="ts" />
                    <p>
                        {t.docs_running_after_a}
                        <code>GET /cart</code>
                        {t.docs_running_after_b}
                    </p>

                    <h2 id="devtools" className="major">
                        {t.feat_devtools_h}
                    </h2>
                    <p>{t.feat_devtools_p}</p>
                    <SyntaxCodeBlock tabs={["shell"]} codes={[devtoolsCli]} lang="sh" />
                    <p>{t.feat_devtools_p2}</p>
                    <SyntaxCodeBlock tabs={["server.ts"]} codes={[hotReloadExample]} lang="ts" />

                    <h2 id="logger" className="major">
                        {t.feat_logger_h}
                    </h2>
                    <p>{t.feat_logger_p}</p>
                    <SyntaxCodeBlock tabs={["logger.ts"]} codes={[loggerExample]} />

                    <h2 id="environment" className="major">
                        {t.feat_env_h}
                    </h2>
                    <p>{t.feat_env_p}</p>
                    <SyntaxCodeBlock tabs={["env.ts"]} codes={[envExample]} />

                    <h2 id="validation" className="major">
                        {t.feat_validation_h}
                    </h2>
                    <p>{t.feat_validation_p}</p>
                    <SyntaxCodeBlock tabs={["create-order.dto.ts"]} codes={[validationExample]} />

                    <div className="page-foot">
                        <a href="/docs/core-concepts" style={{ textAlign: "left" }}>
                            <span className="dir">{t.docs_prev}</span>
                            <span className="lbl">{t.sb_concepts}</span>
                        </a>
                        <a href="/docs/helpers">
                            <span className="dir">{t.docs_next_link}</span>
                            <span className="lbl">{t.sb_helpers}</span>
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
