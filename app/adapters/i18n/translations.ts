import type { Lang, Translations } from "~/core/ports/I18nPort";

const en: Translations = {
    nav_overview: "Overview",
    nav_docs: "Docs",
    nav_api: "API",
    nav_tutorial: "Tutorial",
    nav_recipes: "Recipes",
    nav_blog: "Blog",
    nav_search: "Search the docs…",
    app_version: "1.0",
    hero_eyebrow: "v1.0 · LTS released April 2026",
    hero_title_a: "The framework that takes ",
    hero_title_em: "Clean Architecture",
    hero_title_b: " seriously.",
    hero_lede: "OptiCoreJS is a TypeScript framework for building backends where the business logic outlives the database, " +
        "the HTTP layer, and the framework itself. Robust by structure  not by convention.",
    hero_cta_docs: "Read the docs",
    hero_cta_github: "Star on GitHub",

    trust_label: "Trusted in production by teams at",

    pillars_eyebrow: "Why OptiCore",
    pillars_title_a: "A framework that ",
    pillars_title_em: "respects",
    pillars_title_b: " your domain.",
    pillars_intro:
        "Most frameworks invite the database and the HTTP layer right into your business logic. OptiCore draws lines you can lean on  and gives you the tools to keep them clean for years.",
    pillar_1_title: "Layered by design",
    pillar_1_body:
        "Entities, use cases, adapters, frameworks  kept honest by the compiler. Cross-layer leaks fail at build time.",
    pillar_2_title: "Pluggable adapters",
    pillar_2_body:
        "Swap Postgres for Mongo, REST for gRPC, in-memory for production  without touching a single use case.",
    pillar_3_title: "Testable by default",
    pillar_3_body:
        "Pure use cases. Pure entities. No global state. Run 10,000 tests in two seconds with zero mocking ceremony.",
    pillar_4_title: "Production grade",
    pillar_4_body:
        "Tracing, metrics, structured logs, graceful shutdown and 12-factor config wired in. Boring in the best way.",

    arch_eyebrow: "Architecture",
    arch_title_a: "Four layers. ",
    arch_title_em: "One direction.",
    arch_title_b: "",
    arch_intro:
        "Dependencies always point inward. Entities know nothing about use cases. Use cases know nothing about adapters. Adapters know nothing about the framework. The compiler enforces it.",
    arch_layer_1: "Entities",
    arch_layer_1_desc:
        "The deepest core  pure business rules and invariants. No I/O, no framework, no surprises.",
    arch_layer_2: "Use cases",
    arch_layer_2_desc:
        "Application-specific orchestration. Composes entities through ports  never reaches outside.",
    arch_layer_3: "Adapters",
    arch_layer_3_desc:
        "Translators for the outside world. HTTP, queues, databases  all behind tidy ports.",
    arch_layer_4: "Frameworks & drivers",
    arch_layer_4_desc:
        "Express, Fastify, Prisma, Redis  replaceable scaffolding around a stable core.",
    arch_ring_4: "Frameworks",
    arch_ring_3: "Adapters",
    arch_ring_2: "Use cases",
    arch_ring_1: "Entities",

    dx_eyebrow: "Developer experience",
    dx_title: "Decorators that mean what they say.",
    dx_intro_post:
        ". Three decorators, predictable wiring, zero magic. Read the source and the static analyzer will tell you whether your dependencies are pointing the right way.",
    dx_feat_1: "Compile-time architecture validation",
    dx_feat_2: "Hot reload that respects boundaries",
    dx_feat_3: "Generated OpenAPI from your ports",
    dx_feat_4: "First-class fixtures and contract tests",

    stat_1: "cold boot, average app",
    stat_2: "core runtime, gzipped",
    stat_3: "type coverage, monorepo",
    stat_4: "stars on GitHub",

    cta_title_a: "Ship a backend you can ",
    cta_title_em: "still understand",
    cta_title_b: " in 2030.",
    cta_lede:
        "Open the docs, scaffold a project, and write your first use case in under five minutes.",
    cta_get_started: "Get started",
    cta_concepts: "Read the concepts",

    foot_brand_desc:
        "A robust TypeScript framework for backends built around Clean Architecture. MIT licensed, open source forever.",
    foot_docs: "Docs",
    foot_intro: "Introduction",
    foot_install: "Installation",
    foot_first_module: "First module",
    foot_concepts: "Concepts",
    foot_api: "API",
    foot_community: "Community",
    foot_about: "About",
    foot_roadmap: "Roadmap",
    foot_changelog: "Changelog",
    foot_sponsors: "Sponsors",
    foot_brand: "Brand",
    foot_copy: "MIT © 2026 OptiCore Contributors",
    foot_build: "v1.0 · built on a Tuesday",

    tw_accent: "Accent",
    tw_color: "Color",
    tw_appearance: "Appearance",
    tw_theme: "Theme",
    tw_dark: "Dark",
    tw_light: "Light",
    tw_density: "Density",
    tw_comfortable: "Comfortable",
    tw_compact: "Compact",
    tw_language: "Language",

    search_placeholder: "Search the docs… try “use case” or “adapter”",
    search_empty: "No matches for",

    crumb: "Docs",
    crumb_started: "Getting Started",
    crumb_quick: "Introduction",
    docs_title: "Introduction",
    docs_lede:
        "A robust, fully typed Node.js framework built on Express  designed to keep your business logic clean, testable, and independent from the infrastructure around it.",

    intro_what: "What is OptiCoreJS?",
    intro_p1:
        "OptiCoreJS is a robust framework for building powerful and scalable Node.js server applications. " +
        "Built on Express.js's routing engine, it delivers a fully typed environment through TypeScript. " +
        "It seamlessly blends object-oriented (OOP) and functional (FP) programming paradigms, " +
        "drawing inspiration from modern software architecture best practices.",
    intro_express: "Express compatibility",
    intro_p2:
        "While it offers a higher level of abstraction than Express, OptiCoreJS directly exposes its native APIs. " +
        "You therefore have complete access to the entire Express ecosystem, without ever compromising your application's structure.",
    intro_modules: "Feature Modules & Dependency Injection",
    intro_p3:
        "OptiCoreJS integrates its own dependency injection container and organizes features into feature modules, making modularity a first-class concern. Each module encapsulates its entities, use cases, ports, and adapter bindings around a single bounded context.",
    intro_db: "Database Orchestrator",
    intro_p4:
        "Equipped with a database orchestrator, it lets you freely choose your preferred database from a curated list. The orchestrator installs it, configures it, and  via your chosen ORM  helps you generate models from the command line, whether simple or complex, with full relationship support.",
    intro_devex: "Hot Reload & Logging",
    intro_p5:
        "OptiCoreJS ships with built-in hot reload and records all your application events through a fully configurable logger  control levels, transports, and formats to suit any environment.",
    intro_open: "Open Architecture",
    intro_p6_a:
        "Despite this structured philosophy, OptiCoreJS remains completely open: you are free to define your own architecture, dependency injection container, or logging system without ever feeling locked in or frustrated.",
    intro_p6_b:
        "Its architecture naturally isolates each business domain, ensuring testable and reusable code across your entire application.",
    intro_callout_b: "You're always in control.",
    intro_callout:
        " OptiCoreJS never forces a single way of doing things. Architecture, DI, logging  all replaceable. You decide, the framework adapts.",
    docs_prereq: "Prerequisites",
    docs_prereq_intro: "Before you begin, make sure you have:",
    docs_prereq_1_a: "Node.js",
    docs_prereq_1_b: " ≥ 20.10  required for native ESM and decorators support.",
    docs_prereq_2_a: "A package manager: ",
    docs_prereq_2_b: ", ",
    docs_prereq_2_c: ", ",
    docs_prereq_2_d: " or ",
    docs_prereq_2_e: ".",
    docs_prereq_3_a: "A text editor with ",
    docs_prereq_3_b: "TypeScript",
    docs_prereq_3_c: " support  VS Code is recommended.",
    docs_callout_1_b: "Coming from another framework?",
    docs_callout_1:
        " If you already think in modules, services, and controllers, the conceptual jump is small. " +
        "The big shift: business logic lives in pure use cases, not services bound to HTTP.",
    docs_install: "Installation",
    docs_install_p:
        "Scaffold a new project with the official starter. The CLI sets up TypeScript, the runtime, " +
        "sample adapters and a passing test suite out of the box.",
    docs_install_after_a: "The starter ships with a sample ",
    docs_install_after_b:
        " demonstrating the four layers  feel free to delete it once you're comfortable.",
    docs_first_module: "Your first module",
    docs_first_module_p:
        "An OptiCore module bundles entities, use cases, ports and adapter bindings around one bounded context." +
        " Create a new file:",
    docs_use_case_p:
        "Now write the use case. Use cases are pure orchestration  they receive a DTO, talk to entities and ports, " +
        "and return a result. They never touch HTTP, the database, or the clock directly.",
    docs_use_case_after_a: "The ",
    docs_use_case_after_b:
        " is intentionally an interface  in production you'll bind it to a system-clock adapter, " +
        "in tests to a frozen one. The use case never has to care.",
    docs_presenter_p:
        "The presenter port defines how use-case output is shaped before it reaches the consumer. " +
        "Because the use case depends only on the interface, it stays completely decoupled from HTTP or serialization concerns  " +
        "the concrete presenter is wired at the infrastructure level.",
    docs_repo_p:
        "The repository port is the boundary between your application logic and the database. " +
        "The use case talks to this interface only  the actual SQL, ORM, or in-memory store lives behind it in the infrastructure layer.",
    docs_service_p:
        "The service port captures cross-cutting operations that go beyond simple CRUD  " +
        "notifications, exports, orchestration across aggregates. Declaring it as an interface keeps the use case testable " +
        "and the concrete implementation swappable.",
    docs_dto_p:
        "DTOs define the data contract between your HTTP layer and your use cases. " +
        "They keep the domain model private  the outside world only ever sees the fields you explicitly expose.",
    docs_structure: "Project structure",
    docs_structure_p:
        "OptiCoreJS supports 4 project structures depending on your needs  from a full Clean Architecture" +
        " to a lightweight flat layout. Pick the one that matches your context:",
    docs_callout_2_b: "Full scaffold in one shot.",
    docs_callout_2_a: " Run ",
    docs_callout_2_c:
        " and pick “Full CLEAN Architecture” to generate all 13 files  entity, use case, ports, DTO, " +
        "controller and routes  pre-wired and ready to edit.",
    docs_running: "Running the app",
    docs_running_p:
        "Boot the app from a single composition root. This is the only file in your codebase that knows about" +
        " both your business logic and the framework that runs it.",
    docs_running_after_a: "Hit ",
    docs_running_after_b:
        " and you should see your greeting come back, courtesy of the auto-mounted Fastify adapter.",
    docs_next: "Next steps",
    docs_next_p: "You've got a working OptiCore app. Here's where to go from here:",
    docs_next_1_a: "Read ",
    docs_next_1_b: "Core concepts",
    docs_next_1_c: " for the full mental model behind the framework.",
    docs_next_2_a: "Browse the ",
    docs_next_2_b: "Recipes",
    docs_next_2_c: " for swapping adapters, contract testing, and observability.",
    docs_next_3_a: "Skim the ",
    docs_next_3_b: "API reference",
    docs_next_3_c: " when you need exhaustive details.",
    docs_prev: "← Previous",
    docs_prev_lbl: "Introduction",
    docs_next_link: "Next →",
    docs_next_lbl: "Core concepts: Entities",
    docs_toc_label: "On this page",

    sb_started: "Getting Started",
    sb_intro: "Introduction",
    sb_install: "Installation",
    sb_first: "Your first module",
    sb_struct: "Project structure",
    sb_concepts: "Core concepts",
    sb_entities: "Entities",
    sb_uc: "Use cases",
    sb_ports: "Ports & adapters",
    sb_routing: "Routing & controllers",
    sb_di: "Dependency injection",
    sb_adapters: "Adapters",
    sb_http: "HTTP responses",
    sb_prod: "Production",
    sb_testing: "Testing",
    sb_obs: "Observability",
    sb_deploy: "Deployment",
    sb_5min: "5 min",
    sb_running: "Running the app",
    sb_devtools: "Developer tooling",
    sb_feature_module: "Feature Module",
    sb_features: "Features",
    sb_helpers: "Helpers",
    sb_config: "Configuration",
    sb_components: "Components",
    sb_logger: "Logger",
    sb_environment: "Environment",
    sb_validation: "Validation",
    sb_config_service: "Config Service",
    sb_env_vars: "Env Variables",
    sb_yaml: "YAML",
    sb_i18n: "Translations (i18n)",
    sb_databases: "Databases",
    sb_cache: "HTTP Cache",
    sb_gateway: "API Gateway",
    sb_security: "Security",
    sb_middlewares: "Middlewares",
    sb_interceptors: "Interceptors",
    sb_guards: "Guards",
    sb_exceptions: "Exception handling",

    cc_title: "Core Concepts",
    cc_lede:
        "OptiCoreJS has no decorator-based module system  the Clean Architecture layers below are achieved with plain TypeScript classes, factory functions, and a handful of dedicated packages: opticore-router for routing, opticore-dependency-inject for wiring, and the feature-clean-module scaffolder for generating the rest.",
    cc_entities_h: "Entities",
    cc_entities_p:
        "Entities are plain TypeScript classes generated under domain/entities by the feature-clean-module scaffolder. They carry your business rules and invariants  private fields, explicit validation in the constructor, no ORM decorators, no framework imports.",
    cc_uc_h: "Use Cases",
    cc_uc_p:
        "A use case orchestrates one user intention. It receives data, talks to a repository port, and returns a mapped DTO. It never imports Express, a database driver, or opticore-router directly  those live in the infrastructure layer.",
    cc_ports_h: "Ports & Adapters",
    cc_ports_p:
        "Ports are the interfaces declared under application/ports  repositories, presenters, services. Adapters implement them in the infrastructure layer, for example a Postgres repository built on the fluent QueryBuilder from opticore-postgres.",
    cc_routing_h: "Routing & Controllers",
    cc_routing_p:
        "opticore-router turns a plain route-config array into an Express router without ever calling app.get()/app.post() by hand. Each handler receives a single ICustomContext instead of (req, res, next), and OpticoreRegisterRouter aggregates every feature router before the app boots.",
    cc_di_h: "Dependency Injection",
    cc_di_p:
        "opticore-dependency-inject ships SContainer, a minimal container with singleton/transient scopes. Register factories once, then resolve fully-wired instances anywhere in your app  the container builds the graph so your use cases never call new on their own dependencies.",
    cc_legacy_b: "Looking for an @opticore/core package? ",
    cc_legacy:
        "There isn't one, on purpose. An early opticore-core-module package still exists but is superseded by the combination shown on this page and should not be used in new projects.",

    feat_title: "Features",
    feat_devtools_h: "Developer tooling",
    feat_devtools_p:
        "Three CLIs cover the project lifecycle: opticore-installer scaffolds a brand-new project from a starter template, create-feature-module (from feature-clean-module) generates feature modules inside it, and app-manager (opticore-process-manager) runs and monitors long-lived processes from a live dashboard.",
    feat_devtools_p2:
        "In development, opticore-watcher restarts your server on code changes and hot-reloads .env/.json files in place  no restart needed for config-only edits.",
    feat_logger_h: "Logger",
    feat_logger_p:
        "opticore-logger provides LoggerCore, a leveled logger (success/info/warn/error/debug) with pluggable console, rotating-file and remote transports. Its configuration is built by loggerConfig() from opticore-webapp-core, which reads the log-related fields off opticore-env-access.",
    feat_env_h: "Environment",
    feat_env_p:
        "opticore-env-access centralizes .env loading. getEnvironmentValue() validates the file exists, loads it, and returns a fully-typed IEnvVariables object  every other package reads its configuration through this same function.",
    feat_validation_h: "Validation",
    feat_validation_p:
        "opticore-validator is schema-based, not decorator-based: describe each field as an array of rule objects, then call validate() to get back a map of field to error messages, ready to hand to ResponseHandler.error().",

    helpers_title: "Helpers",
    helpers_http_h: "HTTP Responses",
    helpers_http_p:
        "opticore-http-response standardizes every JSON response: ResponseHandler.success()/error() for the envelope, HttpExceptionService for typed HTTP errors, and an exhaustive HttpStatusCode enum used across the whole ecosystem.",
    helpers_postgres_h: "Databases",
    helpers_postgres_p:
        "Three sibling drivers cover the major databases  opticore-postgres and opticore-mongodb each ship a fluent QueryBuilder, while opticore-mysqldb exposes repository-style methods (insert/update/delete/find) directly on the driver. Pick one; they don't share an abstraction, so swapping requires touching your repository adapters.",
    helpers_orm_p:
        "Prefer working through an ORM instead? opticore-orm-orchestrator is a separate CLI that scaffolds native Prisma, TypeORM, Drizzle, MikroORM or Sequelize models  it doesn't wrap the drivers above, it generates the schema files each ORM expects.",
    helpers_redis_h: "HTTP Cache",
    helpers_redis_p:
        "opticore-cache is a self-contained HTTP response cache  not a Redis client. HttpCacheFactory.create() gives you getWithCache()/postWithCache() backed by memory, disk, or a hybrid store, with per-call TTL and pattern-based invalidation.",
    helpers_queue_h: "API Gateway",
    helpers_queue_p:
        "opticore-api-gateway is a reverse proxy with dynamic routing, four load-balancing strategies, per-route circuit breakers and health-checked service registries. Run it standalone, or feed gateway.getOpticoreRoutes() into WebServer.onStartServer() to mount it inside an existing app.",
    helpers_security_p:
        "opticore-asymmetric-cryption wraps RSA sign/verify/encrypt/decrypt behind two directional services (public-key-first and private-key-first). Generate a key pair once with npx opticore-gen-keys, then read the PEM files at runtime.",

    config_title: "Configuration",
    config_service_h: "Config Service",
    config_service_p:
        "getEnvironmentValue() from opticore-env-access is the single entry point every package uses to read configuration. It resolves the .env path, validates it exists, loads it, and returns a typed object  no scattered process.env reads.",
    config_env_h: "Env Variables",
    config_env_p:
        "The typed IEnvVariables shape covers app host/port, database credentials, locale, logging (per-transport enable flags and levels), hot-reload tuning, and the profiler toolbar  a representative slice below, mapped to their real env var names.",
    config_yaml_h: "YAML",
    config_yaml_p:
        "opticore-webapp-core's YamlParsing loads structured files  CORS options, feature flags  relative to the project root. It's a lightweight, framework-specific parser, not a full YAML-spec implementation.",
    config_i18n_h: "Translations (i18n)",
    config_i18n_p:
        "Two layers handle localized messages: opticore-translator is the low-level engine that merges message.translation.<locale>.json files and interpolates {params}, while opticore-loader-translation resolves an installed package's own bundled translations by name so every package can localize its own errors and logs.",

    comp_title: "Components",
    comp_middlewares_h: "Middlewares",
    comp_middlewares_p:
        "Middlewares plug into the request pipeline with a standard Express-style (req, res, next) signature. opticore-api-gateway ships ready-made ones (Auth, RateLimit, Logging, Validation) plus a BaseMiddleware class to extend, and opticore-webapp-core adds a raw-body-buffering parser (MBodyParser) for the framework's core server.",
    comp_interceptors_h: "Interceptors",
    comp_interceptors_p:
        "opticore-request-call-event hooks the underlying HTTP server's request event to log every request/response cycle  method, status, timing, colorized output  independently of your route handlers. It's what powers the console output you see when the framework's own WebServer boots.",
    comp_guards_h: "Guards",
    comp_guards_p:
        "Route-level authentication is a third argument, not a decorator: pass a Passport-compatible TAuthenticatorFunction to OpticoreRoutingFactory.routes(), and opticore-router runs it before any handler in that collection.",
    comp_exceptions_h: "Exception Handling",
    comp_exceptions_p:
        "opticore-catch-exception-error is the framework's process-wide safety net. StackTraceError is the typed, HTTP-aware error class used across every package; ServerListenEventError wires it to Node's uncaughtException, unhandledRejection and shutdown signals so nothing crashes silently.",

    philo_title: "Philosophy",
    philo_p1:
        "In recent years, Node.js has turned JavaScript into a universal language, powering both frontend and backend. Projects like Angular, React, and Vue have revolutionized frontend productivity. But on the server side, despite a wealth of powerful libraries and tools, the real problem of architecture too often remains unsolved.",
    philo_p2:
        "OptiCoreJS directly addresses this gap. It provides a ready-to-use application architecture inspired by Clean Architecture: controllers, use cases, entities, and interfaces are strictly decoupled. This separation delivers exceptional testability and maintainability that holds up as your codebase grows.",
    philo_p3:
        "We drew inspiration from the best the ecosystem has to offer: the modular elegance of NestJS, the convention-over-configuration philosophy of AdonisJS, and the architectural clarity of FoalTS. The result is a unique hybrid  all the freedom of Express, the structural power of an enterprise framework, and the constant ability to integrate your own architectural vision.",

    toc_intro: "Introduction",
    toc_what: "What is OptiCoreJS?",
    toc_express: "Express compatibility",
    toc_modules: "Modules & DI",
    toc_db: "Database Orchestrator",
    toc_devex: "Hot Reload & Logging",
    toc_open: "Open Architecture",
    toc_philo: "Philosophy",
    toc_prereq: "Prerequisites",
    toc_install: "Installation",
    toc_first: "Your first module",
    toc_struct: "Project structure",
    toc_running: "Running the app",
    toc_next: "Next steps",
};

const fr: Translations = {
    nav_overview: "Présentation",
    nav_docs: "Documentation",
    nav_api: "API",
    nav_tutorial: "Tutoriel",
    nav_recipes: "Recettes",
    nav_blog: "Blog",
    nav_search: "Rechercher dans la doc…",

    hero_eyebrow: "v1.0· LTS publiée en avril 2026",
    hero_title_a: "Le framework qui prend la ",
    hero_title_em: "Clean Architecture",
    hero_title_b: " au sérieux.",
    hero_lede:
        "OptiCoreJS est un framework TypeScript pour bâtir des backends où la logique métier survit à la base de " +
        "données, à la couche HTTP et au framework lui-même. Robuste par construction  pas par convention.",
    hero_cta_docs: "Lire la documentation",
    hero_cta_github: "Star sur GitHub",

    trust_label: "Utilisé en production par les équipes de",

    pillars_eyebrow: "Pourquoi OptiCore",
    pillars_title_a: "Un framework qui ",
    pillars_title_em: "respecte",
    pillars_title_b: " votre domaine.",
    pillars_intro:
        "La plupart des frameworks invitent la base de données et la couche HTTP au cœur de votre logique métier. OptiCore trace des lignes sur lesquelles vous pouvez compter  et vous donne les outils pour les garder propres des années durant.",
    pillar_1_title: "Architecture en couches",
    pillar_1_body:
        "Entités, cas d'usage, adapters, frameworks  tenus en respect par le compilateur. Toute fuite entre couches échoue au build.",
    pillar_2_title: "Adapters interchangeables",
    pillar_2_body:
        "Remplacez Postgres par Mongo, REST par gRPC, in-memory en production  sans toucher à un seul cas d'usage.",
    pillar_3_title: "Testable par défaut",
    pillar_3_body:
        "Cas d'usage purs. Entités pures. Aucun état global. Lancez 10 000 tests en deux secondes, sans cérémonie de mocking.",
    pillar_4_title: "Niveau production",
    pillar_4_body:
        "Tracing, métriques, logs structurés, arrêt gracieux et configuration 12-factor déjà câblés. " +
        "Ennuyeux dans le bon sens.",

    app_version: "1.0",
    arch_eyebrow: "Architecture",
    arch_title_a: "Quatre couches. ",
    arch_title_em: "Un seul sens.",
    arch_title_b: "",
    arch_intro:
        "Les dépendances pointent toujours vers l'intérieur. Les entités ne savent rien des cas d'usage. Les cas d'usage ne savent rien des adapters. Les adapters ne savent rien du framework. Le compilateur l'impose.",
    arch_layer_1: "Entités",
    arch_layer_1_desc:
        "Le cœur le plus profond  règles métier et invariants purs. Pas d'I/O, pas de framework, pas de surprise.",
    arch_layer_2: "Cas d'usage",
    arch_layer_2_desc:
        "Orchestration applicative. Compose les entités via des ports  sans jamais sortir du domaine.",
    arch_layer_3: "Adapters",
    arch_layer_3_desc:
        "Traducteurs vers le monde extérieur. HTTP, queues, bases  tous derrière des ports propres.",
    arch_layer_4: "Frameworks & drivers",
    arch_layer_4_desc:
        "Express, Fastify, Prisma, Redis  un échafaudage remplaçable autour d'un noyau stable.",
    arch_ring_4: "Frameworks",
    arch_ring_3: "Adapters",
    arch_ring_2: "Cas d'usage",
    arch_ring_1: "Entités",

    dx_eyebrow: "Expérience développeur",
    dx_title: "Des décorateurs qui disent ce qu'ils font.",
    dx_intro_post:
        ". Trois décorateurs, un câblage prévisible, zéro magie. Lisez le code, et l'analyseur statique vous dira si vos dépendances pointent dans le bon sens.",
    dx_feat_1: "Validation de l'architecture à la compilation",
    dx_feat_2: "Hot reload qui respecte les frontières",
    dx_feat_3: "OpenAPI généré depuis vos ports",
    dx_feat_4: "Fixtures et contract tests de première classe",

    stat_1: "boot à froid, app moyenne",
    stat_2: "runtime, gzippé",
    stat_3: "couverture de types, monorepo",
    stat_4: "stars sur GitHub",

    cta_title_a: "Livrez un backend que vous ",
    cta_title_em: "comprendrez encore",
    cta_title_b: " en 2030.",
    cta_lede:
        "Ouvrez la doc, échafaudez un projet, et écrivez votre premier cas d'usage en moins de cinq minutes.",
    cta_get_started: "Commencer",
    cta_concepts: "Lire les concepts",

    foot_brand_desc:
        "Un framework TypeScript robuste pour des backends construits autour de la Clean Architecture. Sous licence MIT, open source pour toujours.",
    foot_docs: "Documentation",
    foot_intro: "Introduction",
    foot_install: "Installation",
    foot_first_module: "Premier module",
    foot_concepts: "Concepts",
    foot_api: "API",
    foot_community: "Communauté",
    foot_about: "À propos",
    foot_roadmap: "Roadmap",
    foot_changelog: "Changelog",
    foot_sponsors: "Sponsors",
    foot_brand: "Marque",
    foot_copy: "MIT © 2026 Contributeurs OptiCore",
    foot_build: "v1.0 · publié mardi",

    tw_accent: "Accent",
    tw_color: "Couleur",
    tw_appearance: "Apparence",
    tw_theme: "Thème",
    tw_dark: "Sombre",
    tw_light: "Clair",
    tw_density: "Densité",
    tw_comfortable: "Confortable",
    tw_compact: "Compacte",
    tw_language: "Langue",

    search_placeholder: "Rechercher… essayez « cas d'usage » ou « adapter »",
    search_empty: "Aucun résultat pour",

    crumb: "Docs",
    crumb_started: "Premiers pas",
    crumb_quick: "Introduction",
    docs_title: "Introduction",
    docs_lede:
        "Un framework Node.js robuste et entièrement typé, construit sur Express dans l'optique de garder votre logique métier propre, testable et indépendante de l'infrastructure qui l'entoure.",

    intro_what: "Qu'est-ce qu'OptiCoreJS ?",
    intro_p1:
        "OptiCoreJS est un framework robuste pour la création d'applications serveur Node.js à la fois performantes et évolutives. Construit sur le moteur de routage d'Express.js, il propose un environnement entièrement typé grâce à TypeScript. Il mêle avec souplesse les paradigmes de la programmation orientée objet (POO) et fonctionnelle (PF), tout en s'inspirant des meilleures pratiques modernes en matière d'architecture logicielle.",
    intro_express: "Compatibilité Express",
    intro_p2:
        "Bien qu'il offre un niveau d'abstraction supérieur à celui d'Express, OptiCoreJS expose directement ses API natives. Vous bénéficiez ainsi d'un accès complet à tout l'écosystème Express, sans jamais compromettre la structure de votre application.",
    intro_modules: "Feature Modules & Injection de dépendances",
    intro_p3:
        "OptiCoreJS intègre son propre conteneur d'injection de dépendances et organise les fonctionnalités en feature modules, faisant de la modularité une priorité de premier ordre. Chaque module encapsule ses entités, cas d'usage, ports et bindings d'adapters autour d'un contexte borné unique.",
    intro_db: "Orchestrateur de base de données",
    intro_p4:
        "Doté d'un orchestrateur de bases de données, il vous permet de choisir librement la base de données souhaitée parmi une liste proposée. L'orchestrateur l'installe, la configure et, via l'ORM de votre choix, vous aide à générer en ligne de commande des modèles, qu'ils soient simples ou complexes, avec prise en charge complète des relations.",
    intro_devex: "Hot Reload & Journalisation",
    intro_p5:
        "OptiCoreJS propose un hot reload intégré et enregistre toutes vos actions applicatives grâce à un logger entièrement configurable  contrôlez les niveaux, les transports et les formats selon votre environnement.",
    intro_open: "Architecture ouverte",
    intro_p6_a:
        "Malgré cette philosophie structurée, OptiCoreJS reste totalement ouvert : vous pouvez librement définir votre propre architecture, votre conteneur d'injection ou votre système de journalisation, sans jamais vous sentir enfermé ni frustré.",
    intro_p6_b:
        "Son architecture isole naturellement chaque domaine métier, garantissant ainsi un code testable et réutilisable dans toute votre application.",
    intro_callout_b: "Vous gardez toujours le contrôle.",
    intro_callout:
        " OptiCoreJS n'impose jamais une seule façon de faire. Architecture, DI, journalisation  tout est remplaçable. Vous décidez, le framework s'adapte.",
    docs_prereq: "Prérequis",
    docs_prereq_intro: "Avant de commencer, assurez-vous d'avoir :",
    docs_prereq_1_a: "Node.js",
    docs_prereq_1_b: " ≥ 20.10  requis pour le support natif d'ESM et des décorateurs.",
    docs_prereq_2_a: "Un gestionnaire de paquets : ",
    docs_prereq_2_b: ", ",
    docs_prereq_2_c: ", ",
    docs_prereq_2_d: " ou ",
    docs_prereq_2_e: ".",
    docs_prereq_3_a: "Un éditeur avec support ",
    docs_prereq_3_b: "TypeScript",
    docs_prereq_3_c: "  VS Code est recommandé.",
    docs_callout_1_b: "Vous venez d'un autre framework ?",
    docs_callout_1:
        " Si vous pensez déjà en modules, services et contrôleurs, le saut conceptuel est minime. Le grand changement : la logique métier vit dans des cas d'usage purs, pas dans des services liés à HTTP.",
    docs_install: "Installation",
    docs_install_p:
        "Échafaudez un nouveau projet avec le starter officiel. La CLI met en place TypeScript, le runtime, des adapters d'exemple et une suite de tests qui passe  clé en main.",
    docs_install_after_a: "Le starter livre un module ",
    docs_install_after_b:
        " d'exemple qui démontre les quatre couches  supprimez-le quand vous serez à l'aise.",
    docs_first_module: "Votre premier module",
    docs_first_module_p:
        "Un module OptiCore regroupe entités, cas d'usage, ports et bindings d'adapters autour d'un seul contexte borné. Créez un nouveau fichier :",
    docs_use_case_p:
        "Écrivez maintenant le cas d'usage. Les cas d'usage sont de la pure orchestration  ils reçoivent un DTO, parlent aux entités et aux ports, et renvoient un résultat. Ils ne touchent jamais directement HTTP, la base de données, ou l'horloge.",
    docs_use_case_after_a: "Le ",
    docs_use_case_after_b:
        " est volontairement une interface  en production vous le liez à un adapter d'horloge système, en tests à une horloge figée. Le cas d'usage n'a pas à le savoir.",
    docs_presenter_p:
        "Le port présentateur définit la forme que prend la sortie du cas d'usage avant d'atteindre le consommateur. " +
        "Parce que le cas d'usage ne dépend que de l'interface, il reste totalement découplé des préoccupations HTTP ou de sérialisation  " +
        "le présentateur concret est câblé au niveau de l'infrastructure.",
    docs_repo_p:
        "Le port repository est la frontière entre votre logique applicative et la base de données. " +
        "Le cas d'usage ne parle qu'à cette interface  le SQL, l'ORM ou le store in-memory se trouve derrière, dans la couche infrastructure.",
    docs_service_p:
        "Le port service regroupe les opérations transverses qui dépassent le simple CRUD  " +
        "notifications, exports, orchestration entre agrégats. Le déclarer comme interface garde le cas d'usage testable " +
        "et l'implémentation concrète interchangeable.",
    docs_dto_p:
        "Les DTOs définissent le contrat de données entre la couche HTTP et vos cas d'usage. " +
        "Ils gardent le modèle de domaine privé  le monde extérieur ne voit jamais que les champs que vous exposez explicitement.",
    docs_structure: "Structure du projet",
    docs_structure_p:
        "OptiCoreJS supporte 4 structures de projet selon vos besoins  de la Clean Architecture complète à une organisation légère à plat. Choisissez celle qui correspond à votre contexte :",
    docs_callout_2_b: "Tout l'arbre en une commande.",
    docs_callout_2_a: " Lancez ",
    docs_callout_2_c:
        " et choisissez « Full CLEAN Architecture » pour générer les 13 fichiers  entité, cas d'usage, ports, " +
        "DTO, contrôleur et routes  déjà câblés et prêts à modifier.",
    docs_running: "Lancer l'application",
    docs_running_p:
        "Démarrez l'app depuis une racine de composition unique. C'est le seul fichier de votre codebase qui connaît à la fois votre logique métier et le framework qui l'exécute.",
    docs_running_after_a: "Allez sur ",
    docs_running_after_b:
        " et vous devriez voir votre salutation revenir, gracieusement servie par l'adapter Fastify auto-monté.",
    docs_next: "Étapes suivantes",
    docs_next_p: "Vous avez une app OptiCore qui tourne. Voici où aller ensuite :",
    docs_next_1_a: "Lisez les ",
    docs_next_1_b: "Concepts fondamentaux",
    docs_next_1_c: " pour le modèle mental complet derrière le framework.",
    docs_next_2_a: "Parcourez les ",
    docs_next_2_b: "Recettes",
    docs_next_2_c: " pour échanger des adapters, faire du contract testing, et de l'observabilité.",
    docs_next_3_a: "Survolez la ",
    docs_next_3_b: "référence d'API",
    docs_next_3_c: " quand vous aurez besoin de détails exhaustifs.",
    docs_prev: "← Précédent",
    docs_prev_lbl: "Introduction",
    docs_next_link: "Suivant →",
    docs_next_lbl: "Concepts fondamentaux : Entités",
    docs_toc_label: "Sur cette page",

    sb_started: "Premiers pas",
    sb_intro: "Introduction",
    sb_install: "Installation",
    sb_first: "Votre premier module",
    sb_struct: "Structure du projet",
    sb_concepts: "Concepts fondamentaux",
    sb_entities: "Entités",
    sb_uc: "Cas d'usage",
    sb_ports: "Ports & adapters",
    sb_routing: "Routing & contrôleurs",
    sb_di: "Injection de dépendances",
    sb_adapters: "Adapters",
    sb_http: "Réponses HTTP",
    sb_prod: "Production",
    sb_testing: "Tests",
    sb_obs: "Observabilité",
    sb_deploy: "Déploiement",
    sb_5min: "5 min",
    sb_running: "Lancer l'application",
    sb_devtools: "Outils développeur",
    sb_feature_module: "Feature Module",
    sb_features: "Fonctionnalités",
    sb_helpers: "Helpers",
    sb_config: "Configuration",
    sb_components: "Composants",
    sb_logger: "Logger",
    sb_environment: "Environnement",
    sb_validation: "Validation",
    sb_config_service: "Service de config",
    sb_env_vars: "Variables d'env",
    sb_yaml: "YAML",
    sb_i18n: "Traductions (i18n)",
    sb_databases: "Bases de données",
    sb_cache: "Cache HTTP",
    sb_gateway: "API Gateway",
    sb_security: "Sécurité",
    sb_middlewares: "Middlewares",
    sb_interceptors: "Intercepteurs",
    sb_guards: "Guards",
    sb_exceptions: "Gestion des exceptions",

    cc_title: "Concepts fondamentaux",
    cc_lede:
        "OptiCoreJS n'a pas de système de modules à base de décorateurs  les couches Clean Architecture ci-dessous s'obtiennent avec de simples classes TypeScript, des fonctions factory et une poignée de packages dédiés : opticore-router pour le routage, opticore-dependency-inject pour le câblage, et le générateur feature-clean-module pour le reste.",
    cc_entities_h: "Entités",
    cc_entities_p:
        "Les entités sont de simples classes TypeScript générées sous domain/entities par le générateur feature-clean-module. Elles portent vos règles métier et invariants  champs privés, validation explicite dans le constructeur, aucun décorateur ORM, aucun import du framework.",
    cc_uc_h: "Cas d'usage",
    cc_uc_p:
        "Un cas d'usage orchestre une seule intention utilisateur. Il reçoit des données, parle à un port repository, et renvoie un DTO mappé. Il n'importe jamais Express, un driver de base de données, ou opticore-router directement  cela vit dans la couche infrastructure.",
    cc_ports_h: "Ports & Adapters",
    cc_ports_p:
        "Les ports sont les interfaces déclarées sous application/ports  repositories, presenters, services. Les adapters les implémentent dans la couche infrastructure, par exemple un repository Postgres construit sur le QueryBuilder fluide d'opticore-postgres.",
    cc_routing_h: "Routing & Contrôleurs",
    cc_routing_p:
        "opticore-router transforme un simple tableau de configuration de routes en routeur Express, sans jamais appeler app.get()/app.post() à la main. Chaque handler reçoit un unique ICustomContext au lieu de (req, res, next), et OpticoreRegisterRouter agrège tous les routeurs de features avant le démarrage de l'app.",
    cc_di_h: "Injection de dépendances",
    cc_di_p:
        "opticore-dependency-inject embarque SContainer, un conteneur minimal avec des portées singleton/transient. Enregistrez vos factories une fois, puis résolvez des instances entièrement câblées n'importe où dans votre app  le conteneur construit le graphe pour que vos cas d'usage n'aient jamais à faire new eux-mêmes.",
    cc_legacy_b: "Vous cherchez un package @opticore/core ? ",
    cc_legacy:
        "Il n'y en a pas, volontairement. Un ancien package opticore-core-module existe encore mais est remplacé par la combinaison présentée sur cette page, à ne pas utiliser dans un nouveau projet.",

    feat_title: "Fonctionnalités",
    feat_devtools_h: "Outils développeur",
    feat_devtools_p:
        "Trois CLI couvrent le cycle de vie du projet : opticore-installer échafaude un nouveau projet depuis un template de départ, create-feature-module (de feature-clean-module) génère des modules de fonctionnalité à l'intérieur, et app-manager (opticore-process-manager) exécute et surveille des processus longue durée depuis un tableau de bord en direct.",
    feat_devtools_p2:
        "En développement, opticore-watcher redémarre votre serveur à chaque changement de code et recharge à chaud les fichiers .env/.json  aucun redémarrage nécessaire pour les modifications de configuration seules.",
    feat_logger_h: "Logger",
    feat_logger_p:
        "opticore-logger fournit LoggerCore, un logger à niveaux (success/info/warn/error/debug) avec des transports console, fichier rotatif et distant enfichables. Sa configuration est construite par loggerConfig() d'opticore-webapp-core, qui lit les champs liés aux logs depuis opticore-env-access.",
    feat_env_h: "Environnement",
    feat_env_p:
        "opticore-env-access centralise le chargement du .env. getEnvironmentValue() valide que le fichier existe, le charge, et renvoie un objet IEnvVariables entièrement typé  tous les autres packages lisent leur configuration via cette même fonction.",
    feat_validation_h: "Validation",
    feat_validation_p:
        "opticore-validator fonctionne par schéma, pas par décorateurs : décrivez chaque champ comme un tableau d'objets règles, puis appelez validate() pour récupérer une correspondance champ → messages d'erreur, prête à transmettre à ResponseHandler.error().",

    helpers_title: "Helpers",
    helpers_http_h: "Réponses HTTP",
    helpers_http_p:
        "opticore-http-response standardise chaque réponse JSON : ResponseHandler.success()/error() pour l'enveloppe, HttpExceptionService pour les erreurs HTTP typées, et une enum HttpStatusCode exhaustive utilisée dans tout l'écosystème.",
    helpers_postgres_h: "Bases de données",
    helpers_postgres_p:
        "Trois drivers frères couvrent les bases de données majeures  opticore-postgres et opticore-mongodb embarquent chacun un QueryBuilder fluide, tandis qu'opticore-mysqldb expose des méthodes de type repository (insert/update/delete/find) directement sur le driver. Choisissez-en un : ils ne partagent pas d'abstraction commune, changer de base implique de retoucher vos adapters repository.",
    helpers_orm_p:
        "Vous préférez passer par un ORM ? opticore-orm-orchestrator est une CLI séparée qui échafaude des modèles natifs Prisma, TypeORM, Drizzle, MikroORM ou Sequelize  elle n'encapsule pas les drivers ci-dessus, elle génère les fichiers de schéma attendus par chaque ORM.",
    helpers_redis_h: "Cache HTTP",
    helpers_redis_p:
        "opticore-cache est un cache de réponses HTTP autonome  pas un client Redis. HttpCacheFactory.create() vous donne getWithCache()/postWithCache() adossés à un stockage mémoire, disque, ou hybride, avec un TTL par appel et une invalidation par motif.",
    helpers_queue_h: "API Gateway",
    helpers_queue_p:
        "opticore-api-gateway est un reverse proxy avec routage dynamique, quatre stratégies de répartition de charge, des circuit breakers par route et des registres de services avec health checks. Lancez-le en autonome, ou passez gateway.getOpticoreRoutes() à WebServer.onStartServer() pour le monter dans une app existante.",
    helpers_security_p:
        "opticore-asymmetric-cryption encapsule signature/vérification/chiffrement/déchiffrement RSA derrière deux services directionnels (clé publique d'abord, ou clé privée d'abord). Générez une paire de clés une fois avec npx opticore-gen-keys, puis lisez les fichiers PEM à l'exécution.",

    config_title: "Configuration",
    config_service_h: "Service de configuration",
    config_service_p:
        "getEnvironmentValue() d'opticore-env-access est le point d'entrée unique que tous les packages utilisent pour lire la configuration. Il résout le chemin du .env, valide qu'il existe, le charge, et renvoie un objet typé  fini les lectures éparpillées de process.env.",
    config_env_h: "Variables d'environnement",
    config_env_p:
        "La forme typée IEnvVariables couvre l'hôte/port de l'app, les identifiants de base de données, la locale, la journalisation (indicateurs d'activation et niveaux par transport), le réglage du hot-reload, et la barre d'outils profiler  un échantillon représentatif ci-dessous, avec le nom réel de chaque variable d'env.",
    config_yaml_h: "YAML",
    config_yaml_p:
        "YamlParsing d'opticore-webapp-core charge des fichiers structurés  options CORS, feature flags  relatifs à la racine du projet. C'est un parseur léger et propre au framework, pas une implémentation complète de la spec YAML.",
    config_i18n_h: "Traductions (i18n)",
    config_i18n_p: "Deux couches gèrent les messages localisés : opticore-translator est le moteur bas niveau qui fusionne les fichiers message.translation.<locale>.json et interpole les {params}, tandis qu'opticore-loader-translation résout les traductions embarquées d'un package installé par son nom, pour que chaque package puisse localiser ses propres erreurs et logs.",
    comp_title: "Composants",
    comp_middlewares_h: "Middlewares",
    comp_middlewares_p:
        "Les middlewares se branchent sur le pipeline de requêtes avec une signature standard façon Express (req, res, next). opticore-api-gateway en fournit des prêts à l'emploi (Auth, RateLimit, Logging, Validation) ainsi qu'une classe BaseMiddleware à étendre, et opticore-webapp-core ajoute un parseur à tampon de corps brut (MBodyParser) pour le serveur cœur du framework.",
    comp_interceptors_h: "Intercepteurs",
    comp_interceptors_p:
        "opticore-request-call-event s'accroche à l'événement request du serveur HTTP sous-jacent pour journaliser chaque cycle requête/réponse  méthode, statut, timing, sortie colorée  indépendamment de vos handlers de route. C'est ce qui alimente la sortie console que vous voyez au démarrage du WebServer du framework.",
    comp_guards_h: "Guards",
    comp_guards_p:
        "L'authentification au niveau des routes est un troisième argument, pas un décorateur : passez une TAuthenticatorFunction compatible Passport à OpticoreRoutingFactory.routes(), et opticore-router l'exécute avant tout handler de cette collection.",
    comp_exceptions_h: "Gestion des exceptions",
    comp_exceptions_p:
        "opticore-catch-exception-error est le filet de sécurité du framework à l'échelle du processus. StackTraceError est la classe d'erreur typée et compatible HTTP utilisée dans tous les packages ; ServerListenEventError la relie aux événements uncaughtException, unhandledRejection et aux signaux d'arrêt de Node, pour qu'aucun crash ne passe inaperçu.",

    philo_title: "Philosophie",
    philo_p1:
        "Ces dernières années, Node.js a fait de JavaScript un langage universel, aussi bien côté frontend que backend. Des projets comme Angular, React ou Vue ont révolutionné la productivité frontend. Mais côté serveur, malgré une multitude de bibliothèques et d'outils performants, le véritable problème de l'architecture reste trop souvent non résolu.",
    philo_p2:
        "OptiCoreJS répond précisément à ce vide. Il propose une architecture applicative prête à l'emploi, inspirée de la Clean Architecture : contrôleurs, usecase, entités et interfaces sont strictement découplés. Cette séparation offre une testabilité hors pair et une maintenabilité qui résiste à la croissance du code.",
    philo_p3:
        "Nous nous sommes nourris de ce qui se fait de mieux dans l'écosystème : l'élégance modulaire de NestJS, la philosophie « convention plutôt que configuration » d'AdonisJS, et la clarté architecturale de FoalTS. Le résultat est un hybride unique, toute la liberté d'Express, la puissance structurelle d'un framework entreprise, et la possibilité constante d'y intégrer votre propre vision architecturale.",

    toc_intro: "Introduction",
    toc_what: "Qu'est-ce qu'OptiCoreJS ?",
    toc_express: "Compatibilité Express",
    toc_modules: "Modules & DI",
    toc_db: "Orchestrateur BD",
    toc_devex: "Hot Reload & Logs",
    toc_open: "Architecture ouverte",
    toc_philo: "Philosophie",
    toc_prereq: "Prérequis",
    toc_install: "Installation",
    toc_first: "Votre premier module",
    toc_struct: "Structure du projet",
    toc_running: "Lancer l'application",
    toc_next: "Étapes suivantes",
};

export const TRANSLATIONS: Record<Lang, Translations> = { en, fr };
