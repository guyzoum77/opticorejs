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

    cc_entities_ex_fields:
        "private fields  nothing outside the class can mutate them directly, so every invariant the entity enforces stays true for its whole lifetime.",
    cc_entities_ex_ctor:
        "the only way to build an instance; it runs validate() immediately, so an invalid InvoiceEntity can never exist even for a moment.",
    cc_entities_ex_getters:
        "public read-only accessors  callers can read id and amount, but there is no set id()/set amount(), so they cannot overwrite them from outside.",
    cc_entities_ex_touch:
        "the only public method allowed to mutate state. Naming it after a real business action (instead of a generic setAmount()) keeps every mutation explicit and searchable.",
    cc_entities_ex_validate:
        "a private invariant check, only ever called from the constructor. It throws immediately if id is empty or amount is negative, so the object can never be constructed in a broken state.",

    cc_uc_ex_port:
        "the port (an interface) this use case depends on, imported from application/ports  never from a concrete class, so the use case has no idea which adapter is really behind it.",
    cc_uc_ex_ctor:
        "constructor injection. The use case only knows the repository through its interface type; which concrete adapter gets passed in (Postgres, in-memory, a mock in tests) is decided elsewhere, in the DI container.",
    cc_uc_ex_methods:
        "each method fetches domain entities through the port, then immediately maps them  entities never leak past the use case boundary and reach the HTTP layer directly.",
    cc_uc_ex_mapper:
        "converts internal InvoiceEntity objects into InvoiceResponseDto, the only shape allowed to travel further out toward a controller or an HTTP response.",

    cc_ports_ex_iface:
        "the port itself: a contract with zero implementation, declared under application/ports/repositories so the application layer can depend on it without knowing about Postgres, Mongo, or anything else.",
    cc_ports_ex_methods:
        "method signatures that only ever mention domain types (InvoiceEntity), never a raw database row  the contract hides persistence details from whoever consumes it.",
    cc_ports_ex_impl:
        "marks this class as the adapter for the port above. The compiler enforces that every method of IInvoiceRepository is actually implemented here.",
    cc_ports_ex_ctor:
        "the only dependency injected into the adapter is the low-level connection (Sql), not another repository or use case  adapters sit at the outermost layer.",
    cc_ports_ex_query:
        "opticore-postgres's fluent query builder: chain conditions, then call execute()/first() against the injected connection to actually run the SQL.",
    cc_ports_ex_map:
        "raw database rows are converted back into domain entities before leaving the adapter, so the rest of the application never has to reason about a row's shape.",

    cc_routing_ex_factory:
        "builds a typed route table bound to one controller, instead of chaining app.get()/app.post() calls by hand across the codebase.",
    cc_routing_ex_fields:
        "each route is declared, not imperative: path is the URL pattern, method the HTTP verb, middlewares an array of functions to run first, and handler the function that answers the request.",
    cc_routing_ex_ctx:
        "every handler receives a single ctx object exposing .req/.res, instead of the usual Express (req, res, next) signature.",
    cc_routing_ex_type:
        "the return type of a router-factory function; it lets OpticoreRoutingFactory type-check the whole route array at compile time.",
    cc_routing_ex_feature:
        "the shape every feature router must export so OpticoreRegisterRouter can aggregate all of them into one Express router before the app boots.",

    cc_di_ex_lang:
        "the first argument to SContainer is a language code, used only to localize the container's own internal error messages (like a circular-dependency report)  it has nothing to do with your business logic.",
    cc_di_ex_key:
        "the string identifier used to register and later resolve() a dependency. It must be unique within the container; think of it as the dependency's name.",
    cc_di_ex_factory:
        "a function that builds the instance. It runs lazily  only when the dependency is first resolved  which is why it can safely close over sql or call c.resolve(...) to pull in another registered dependency.",
    cc_di_ex_scope:
        "controls the instance's lifetime. \"singleton\" means the same instance is reused for every resolve() call; a \"transient\" scope (not shown here) would build a brand-new instance each time.",
    cc_di_ex_resolve:
        "the ContainerCore instance passed into a factory, letting one factory pull in another already-registered dependency by its key.",
    cc_di_ex_getservice:
        "resolves a fully-wired instance by key from outside the container, generic-typed so you get back an InvoiceUseCase instead of unknown.",
    cc_di_ex_list:
        "a debug helper that prints every registered key and its scope, handy for checking the dependency graph without digging through the container internals.",

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

    feat_ex_scaffold:
        "runs the feature-clean-module scaffolder as a one-off through npx (no local install needed). It prompts for a feature name and generates the full folder tree shown below for it.",
    feat_ex_presenter_methods:
        "the presenter port. Its return type is unknown on purpose  the interface only promises \"something gets produced from this data\"; the concrete shape (JSON, a view model, GraphQL...) is decided by whichever adapter implements it.",
    feat_ex_repo_methods:
        "the five CRUD operations every repository port needs; each one still returns or accepts a domain CartEntity, never a raw row  same rule as the invoice repository on the Core Concepts page.",
    feat_ex_service_methods:
        "handleCreate/handleUpdate/handleDelete take a loosely-typed Record<string, unknown> because they usually receive a raw request body straight from a controller, before it has been validated into a typed DTO.",
    feat_ex_dto_input:
        "input DTOs describe exactly what a client is allowed to send in  CreateCartDto requires name and email, UpdateCartDto only needs id plus an optional name, so partial updates stay type-safe.",
    feat_ex_dto_response:
        "the output DTO: only the fields a client is allowed to see. Note there is no email field here even though CreateCartDto accepted one  the response shape is deliberately narrower than the input.",
    feat_ex_dto_mapper:
        "CartDtoMapper.toResponse() converts one entity, toResponseList() reuses it over an array  keeping the entity-to-DTO conversion in one place instead of repeating it in every use-case method.",
    feat_ex_uc_ctor:
        "same constructor-injection pattern as InvoiceUseCase: the use case depends on ICartRepository's interface, not on a concrete Postgres/Mongo implementation.",
    feat_ex_uc_uuid:
        "the use case generates the entity's id itself with Node's built-in crypto.randomUUID(), instead of letting the database assign one  so the id is already known before the repository is even called.",
    feat_ex_uc_update:
        "update() first re-fetches the existing entity, then calls its own mutation methods (updateName(), touch()) rather than constructing a brand-new entity  invariants declared on CartEntity itself stay enforced.",
    feat_ex_uc_delete:
        "returns a boolean instead of throwing, so the controller can decide how to respond (e.g. 204 vs 404) based on whether the delete actually matched a row.",
    feat_ex_tree_clean:
        "the full four-layer split (domain / application / infrastructure) shown in Core Concepts, generated for every feature the scaffolder creates.",
    feat_ex_tree_step:
        "the exact same files as Clean Arch, just grouped by layer instead of by folder nesting  useful when you want to see \"everything domain-related\" or \"everything infrastructure-related\" at a glance.",
    feat_ex_tree_simple:
        "a flatter, MVC-like layout with no ports/adapters split  controllers talk to repositories directly. Faster to start with, harder to swap a data source later.",
    feat_ex_tree_custom:
        "the scaffolder is a starting point, not a requirement: nothing stops you from organizing a feature your own way, like this app/core/shared layout, once you understand the convention it defaults to.",
    feat_ex_main_yaml:
        "YamlParsing reads config/cors/corsOptions.yaml and friends; LocalLanguageLoader loads translation strings for the app's default locale before the server starts accepting requests.",
    feat_ex_main_webserver:
        "WebServer wraps the underlying Express app instance together with CORS options, the env path, the active locale, and the logger  a single object holds everything the server needs to boot.",
    feat_ex_main_onstart:
        "onStartServer() wires the aggregated feature routes, a factory that creates the database driver connection, and the DI providers together, then returns the underlying HTTP server instance.",
    feat_ex_main_events:
        "two lifecycle hooks: onListeningOnServerEvent logs once the port is bound, onRequestOnServerEvent logs (or instruments) every incoming request.",
    feat_ex_devtools_installer:
        "scaffolds a brand-new OpticoreJS project from a starter template  the very first command you'd run on an empty folder.",
    feat_ex_devtools_feature:
        "the same scaffolder used in the \"first feature module\" section above, run again any time you need a new feature inside an existing project.",
    feat_ex_devtools_manager:
        "opticore-process-manager under the hood: starts, monitors, and restarts long-lived Node processes, with a live dashboard at http://localhost:3000 to watch them.",
    feat_ex_hotreload_watch:
        "every file extension the watcher pays attention to at all; changes outside this list are ignored entirely.",
    feat_ex_hotreload_hot:
        "a subset of watchExtensions that gets reloaded in-process (no process restart)  only safe for files like .json/.env that don't need the whole module graph re-evaluated.",
    feat_ex_hotreload_debounce:
        "waits this many milliseconds after the last detected change before actually triggering a reload, so a burst of saves (like an editor's auto-format) only reloads once.",
    feat_ex_hotreload_attach:
        "wires the watcher to the running HTTP server instance so it can coordinate a restart cleanly instead of killing the process mid-request.",
    feat_ex_logger_core:
        "loggerConfig(envPath) reads the log-related environment variables and builds the config object LoggerCore needs  you rarely construct that config by hand.",
    feat_ex_logger_levels:
        "each level takes a structured object instead of a bare string; title is a short label, message the details, and (for error) stackTrace lets the transport print or ship the full trace.",
    feat_ex_env_get:
        "validates that the .env file at envPath actually exists and loads it once; call it during bootstrap, not per-request.",
    feat_ex_env_typed:
        "every field on the returned object is already typed by IEnvVariables  no manual process.env.APP_PORT string-to-number casting scattered through the codebase.",
    feat_ex_val_schema:
        "each key names a field on the incoming payload; its value is an ordered array of rule objects  rules run in the order they're listed, and message overrides the default error text for that rule.",
    feat_ex_val_args:
        "some rules take extra parameters via args (here, the minimum length); the rule name plus args together fully describe the check being performed.",
    feat_ex_val_validate:
        "runs every field's rules against the given object and returns a map of field name to the list of messages that failed  an empty object means validation passed.",
    feat_ex_val_response:
        "ResponseHandler.error() and HttpStatusCode keep the error payload shape (status code, message, field errors) consistent across every controller in the app.",

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

    helpers_ex_http_rh:
        "the two halves of the standardized envelope  success() takes the payload, a message, and a status code; error() takes a message and a status code (plus optional field errors), so every endpoint in the app replies with the same JSON shape.",
    helpers_ex_http_status:
        "an enum of every HTTP status the ecosystem uses, so controllers never hardcode a magic number like 404  it's both type-checked and greppable.",
    helpers_ex_http_catch:
        "any exception thrown deeper in the call stack (the use case, the repository, a driver) is caught right here at the controller boundary and turned into a consistent error response instead of crashing the request.",
    helpers_ex_pg_ctor:
        "positional constructor arguments for the connection; the \"en\" argument, like SContainer's, only picks the language for the driver's own internal error messages  it isn't a database setting.",
    helpers_ex_pg_conn:
        "connection() opens the pool; getConnection() then hands you the raw sql handle that QueryBuilder.execute() and every repository adapter expect to receive.",
    helpers_ex_pg_query:
        "the same fluent QueryBuilder used by the invoice repository on the Core Concepts page  chain where()/orderBy()/limit(), then execute() against the connection to run the compiled SQL.",
    helpers_ex_mysql_query:
        "opticore-mysqldb skips the QueryBuilder and exposes repository-style calls directly: query() takes a parameterized sql string plus a values array (never string-concatenated  that's what prevents SQL injection), and insert() takes a table name and a plain object.",
    helpers_ex_mongo_ops:
        'the same fluent chain adapted to Mongo\'s vocabulary: comparison operators are passed as strings ("gte" instead of ">="), and .sort({ field: -1 }) replaces .orderBy(field, "DESC").',
    helpers_ex_orm_init:
        "an interactive prompt to pick which ORM (Prisma, TypeORM, Drizzle, MikroORM, or Sequelize) this project will use, then wires up its config files  run once, at the start of a project.",
    helpers_ex_orm_make:
        "a wizard that asks for field names, types, and relations, then generates the schema/model file in whichever format the ORM chosen in init expects.",
    helpers_ex_orm_list:
        "prints every model currently defined for the active ORM  a quick sanity check that a generated model actually registered correctly.",
    helpers_ex_cache_storage:
        "where cached responses live: \"memory\" is fastest but cleared on restart, \"disk\" survives restarts at diskDir, and \"hybrid\" keeps a hot subset in memory backed by disk for everything else.",
    helpers_ex_cache_ttl:
        "defaultTTL (in ms) is how long an entry stays valid before being treated as stale; maxSize caps how many entries this cache namespace can hold before evicting the oldest ones.",
    helpers_ex_cache_get:
        "fetches the URL only if there's no valid cached entry yet; on a cache hit it returns the stored response without making a network call at all.",
    helpers_ex_cache_meta:
        "every cached response gets a _metadata.source field so calling code (or a debug log) can tell whether a given value came from \"cache\" or a live \"api\" call.",
    helpers_ex_cache_invalidate:
        "accepts a glob-style pattern, so one call can purge every cached entry under a path prefix instead of invalidating keys one at a time.",
    helpers_ex_gw_lb:
        "the strategy used to pick which upstream instance handles the next request when a service has more than one URL registered; \"round-robin\" cycles through them evenly.",
    helpers_ex_gw_services:
        "the registry of upstream services the gateway can route to; healthCheck is the path the gateway polls to decide whether that service is currently eligible for traffic.",
    helpers_ex_gw_middlewares:
        "middleware runs per-route, before the request is proxied  here AuthMiddleware checks the request against the given key(s) and can reject it before it ever reaches user-service.",
    helpers_ex_gw_breaker:
        "after failureThreshold consecutive failures the circuit opens and stops forwarding requests to that service for resetTimeout ms, then allows halfOpenMaxAttempts trial requests through before deciding whether to fully close or re-open the circuit.",
    helpers_ex_sec_loader:
        "loads the locale-specific error strings this package raises internally (invalid key format, verification failure, etc.)  same \"en\"/\"fr\" convention as the rest of the ecosystem's i18n-aware packages.",
    helpers_ex_sec_ctor:
        "the two constructor arguments are the locale for error messages and the path to the .env file, not the keys themselves  the keys are read separately from disk, once, and passed into each method call.",
    helpers_ex_sec_verify:
        "checks that a signature over the given payload was produced by the matching private/public key pair  returns a boolean rather than throwing, so callers decide how to react to a failed verification.",

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

    config_ex_service_get:
        "resolves envPath, checks the .env file actually exists, loads it once, and returns a fully-typed object  call it once during bootstrap rather than reading process.env directly in scattered places.",
    config_ex_service_fields:
        "every property on the returned object is already typed by IEnvVariables (see below), so appPort is known to be a string and there is no manual casting needed at each call site.",
    config_ex_env_app:
        "the host/port pair the WebServer binds to when it starts listening.",
    config_ex_env_db:
        "the five fields needed to open a database connection, consumed directly by the driver constructors shown on the Helpers page (PostgresCore, OptiCoreMySQLDriver, ...).",
    config_ex_env_locale:
        "defaultLocal picks the language used by LocalLanguageLoader and every i18n-aware package at boot; apiVersion is a plain string exposed for routes or headers that need to report it.",
    config_ex_env_log:
        "logLevelInfo sets the minimum severity LoggerCore actually emits; logFileEnabled toggles the rotating-file transport on top of the console one.",
    config_ex_env_hmr:
        "hmrEnabled turns opticore-watcher's hot-reload on or off in development; hmrDebounceMs is the same debounce window shown in the HotReloadWatcher example on the Features page, read from the environment instead of hardcoded.",
    config_ex_env_toolbar:
        "a boolean flag gating the dev-only web toolbar/profiler  meant to stay false in production builds.",
    config_ex_yaml_ctor:
        "takes the active locale and the resolved env path so YamlParsing can find locale-specific YAML files relative to the project root, not an absolute path you'd have to hardcode.",
    config_ex_yaml_read:
        "reads and parses one YAML file by path, returning a plain JS object  here, the CORS options consumed directly by WebServer's constructor on the Features page's main.ts.",
    config_ex_i18n_location:
        "the folder segments (relative to the package) where its message.translation.<locale>.json files live, so opticore-loader-translation knows where to look inside an installed package.",
    config_ex_i18n_locallang:
        "the default locale used whenever a call to translate() doesn't explicitly override localeLanguage.",
    config_ex_i18n_translate:
        "looks up key in the current package's bundled translations for localeLanguage, then interpolates params (here, {name}) into the resulting string.",
    config_ex_i18n_load:
        "the lower-level entry point: eagerly merges every message.translation.<locale>.json file found under the given directory into memory, across all locales at once.",
    config_ex_i18n_t:
        "looks a key up directly against the in-memory translations loaded above for one specific locale, interpolating params  this is what translate() calls internally once a package's location has been resolved.",

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

    comp_ex_mw_base:
        "the class every custom middleware extends; it only requires implementing handle(), which must return the actual (req, res, next) function the request pipeline will call.",
    comp_ex_mw_nullish:
        "the ??= (nullish assignment) operator only sets x-request-id if it isn't already set  so an id supplied by an upstream proxy is preserved instead of overwritten, while requests without one still get a fresh crypto.randomUUID().",
    comp_ex_mw_add:
        "registers a middleware globally on the gateway; middlewares run in the order they're added, before the request reaches any per-route handler.",
    comp_ex_mw_ratelimit:
        "the two constructor arguments are the request budget and the time window in milliseconds  here, 100 requests per 60 000 ms (one minute) per client.",
    comp_ex_int_onrequest:
        "hooks Node's raw http server, one level below Express/opticore-router  it fires for literally every request, so it's the right place for cross-cutting logging that must never be skipped by a route-specific bug.",
    comp_ex_int_args:
        "positional arguments: the request/response pair to inspect, the host/port identifying which server instance is logging (useful once you run more than one), Date.now() as the timestamp to compute request duration, and envPath plus the locale (\"en\") so the printed log line itself can be localized.",
    comp_ex_guard_type:
        "the type every guard function must satisfy  a function compatible with Passport's authenticate() signature, generic over ICustomContext so it type-checks against opticore-router's handler shape.",
    comp_ex_guard_passport:
        "builds a Passport JWT strategy authenticator; session: false disables server-side sessions since a JWT already carries everything needed to identify the caller on each request.",
    comp_ex_guard_thirdarg:
        "the optional third argument to routes() is the guard: when present, opticore-router runs it before every handler in that route collection, rejecting the request before it ever reaches InvoiceController.create.",
    comp_ex_err_stacktrace:
        "four positional arguments: a human-readable message, an internal error name (useful for grouping in logs), the HttpStatusCode this error should map to in a response, and isOperational  true for expected failures (bad input, unreachable dependency) versus false for actual programming bugs.",
    comp_ex_err_listen:
        "a single instance wired once at boot, wrapping Node's global uncaughtException/unhandledRejection hooks so every package can report through the same, localized error-handling path instead of each rolling its own process.on() call.",
    comp_ex_err_event:
        "CEvent is an enum of Node process event names  using event.uncaughtException instead of the string literal \"uncaughtException\" avoids typos that would silently fail to attach the handler.",
    comp_ex_err_rejection:
        "unhandledRejection's handler receives both the rejection reason and the promise that rejected, letting serverListenEvent log which specific promise was never caught.",

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

    cc_entities_ex_fields:
        "des champs privés  rien en dehors de la classe ne peut les modifier directement, donc chaque invariant garanti par l'entité reste vrai pendant toute sa durée de vie.",
    cc_entities_ex_ctor:
        "le seul moyen de construire une instance ; il appelle validate() immédiatement, donc une InvoiceEntity invalide ne peut jamais exister, même un instant.",
    cc_entities_ex_getters:
        "des accesseurs publics en lecture seule  l'appelant peut lire id et amount, mais il n'existe pas de set id()/set amount(), donc il ne peut pas les écraser de l'extérieur.",
    cc_entities_ex_touch:
        "la seule méthode publique autorisée à modifier l'état. Lui donner le nom d'une vraie action métier (plutôt qu'un setAmount() générique) rend chaque mutation explicite et facile à retrouver.",
    cc_entities_ex_validate:
        "une vérification d'invariant privée, appelée uniquement depuis le constructeur. Elle lève une erreur immédiatement si id est vide ou amount négatif, donc l'objet ne peut jamais être construit dans un état invalide.",

    cc_uc_ex_port:
        "le port (une interface) dont dépend ce cas d'usage, importé depuis application/ports  jamais depuis une classe concrète, donc le cas d'usage ignore quel adaptateur se trouve réellement derrière.",
    cc_uc_ex_ctor:
        "l'injection par constructeur. Le cas d'usage ne connaît le repository qu'à travers son type d'interface ; quel adaptateur concret est réellement fourni (Postgres, en mémoire, un mock en test) est décidé ailleurs, dans le conteneur d'injection de dépendances.",
    cc_uc_ex_methods:
        "chaque méthode récupère des entités du domaine via le port, puis les transforme immédiatement  les entités ne fuient jamais au-delà de la frontière du cas d'usage jusqu'à la couche HTTP.",
    cc_uc_ex_mapper:
        "convertit les objets InvoiceEntity internes en InvoiceResponseDto, la seule forme autorisée à voyager plus loin vers un contrôleur ou une réponse HTTP.",

    cc_ports_ex_iface:
        "le port lui-même : un contrat sans aucune implémentation, déclaré sous application/ports/repositories afin que la couche application en dépende sans rien savoir de Postgres, Mongo, ou autre chose.",
    cc_ports_ex_methods:
        "des signatures de méthodes qui ne mentionnent que des types du domaine (InvoiceEntity), jamais une ligne brute de base de données  le contrat masque les détails de persistance à qui le consomme.",
    cc_ports_ex_impl:
        "marque cette classe comme l'adaptateur du port ci-dessus. Le compilateur vérifie que chaque méthode de IInvoiceRepository est bien implémentée ici.",
    cc_ports_ex_ctor:
        "la seule dépendance injectée dans l'adaptateur est la connexion bas niveau (Sql), pas un autre repository ni un cas d'usage  les adaptateurs se situent à la couche la plus externe.",
    cc_ports_ex_query:
        "le query builder fluide d'opticore-postgres : chaînez des conditions, puis appelez execute()/first() contre la connexion injectée pour exécuter réellement le SQL.",
    cc_ports_ex_map:
        "les lignes brutes de la base sont reconverties en entités du domaine avant de sortir de l'adaptateur, donc le reste de l'application n'a jamais à raisonner sur la forme d'une ligne.",

    cc_routing_ex_factory:
        "construit une table de routes typée, liée à un seul contrôleur, au lieu d'enchaîner des appels app.get()/app.post() à la main dans tout le code.",
    cc_routing_ex_fields:
        "chaque route est déclarative, pas impérative : path est le motif d'URL, method le verbe HTTP, middlewares un tableau de fonctions à exécuter d'abord, et handler la fonction qui répond à la requête.",
    cc_routing_ex_ctx:
        "chaque handler reçoit un unique objet ctx exposant .req/.res, au lieu de la signature Express habituelle (req, res, next).",
    cc_routing_ex_type:
        "le type de retour d'une fonction factory de router ; il permet à OpticoreRoutingFactory de vérifier le typage de tout le tableau de routes à la compilation.",
    cc_routing_ex_feature:
        "la forme que chaque router de feature doit exporter pour qu'OpticoreRegisterRouter puisse tous les agréger en un seul router Express avant le démarrage de l'app.",

    cc_di_ex_lang:
        "le premier argument de SContainer est un code de langue, utilisé uniquement pour localiser les messages d'erreur internes du conteneur (comme un rapport de dépendance circulaire)  il n'a rien à voir avec votre logique métier.",
    cc_di_ex_key:
        "l'identifiant sous forme de chaîne utilisé pour enregistrer puis résoudre (resolve()) une dépendance. Il doit être unique dans le conteneur ; voyez-le comme le nom de la dépendance.",
    cc_di_ex_factory:
        "une fonction qui construit l'instance. Elle s'exécute paresseusement  seulement quand la dépendance est résolue pour la première fois  ce qui lui permet de capturer sql en toute sécurité ou d'appeler c.resolve(...) pour récupérer une autre dépendance enregistrée.",
    cc_di_ex_scope:
        "contrôle la durée de vie de l'instance. \"singleton\" signifie que la même instance est réutilisée à chaque appel de resolve() ; une portée \"transient\" (non montrée ici) construirait une toute nouvelle instance à chaque fois.",
    cc_di_ex_resolve:
        "l'instance de ContainerCore transmise à une factory, permettant à une factory de récupérer une autre dépendance déjà enregistrée via sa clé.",
    cc_di_ex_getservice:
        "résout une instance entièrement câblée par sa clé depuis l'extérieur du conteneur, typée génériquement pour récupérer un InvoiceUseCase plutôt qu'un unknown.",
    cc_di_ex_list:
        "un utilitaire de debug qui affiche chaque clé enregistrée et sa portée, pratique pour vérifier le graphe de dépendances sans fouiller dans les internes du conteneur.",

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

    feat_ex_scaffold:
        "exécute le scaffolder feature-clean-module à la volée via npx (aucune installation locale nécessaire). Il demande un nom de fonctionnalité et génère l'arborescence complète montrée plus bas pour celle-ci.",
    feat_ex_presenter_methods:
        "le port presenter. Son type de retour est unknown volontairement  l'interface promet seulement \"quelque chose est produit à partir de ces données\" ; la forme concrète (JSON, un view model, GraphQL...) est décidée par l'adaptateur qui l'implémente.",
    feat_ex_repo_methods:
        "les cinq opérations CRUD dont tout port repository a besoin ; chacune renvoie ou accepte toujours une CartEntity du domaine, jamais une ligne brute  même règle que le repository invoice de la page Concepts fondamentaux.",
    feat_ex_service_methods:
        "handleCreate/handleUpdate/handleDelete prennent un Record<string, unknown> peu typé car ils reçoivent généralement un corps de requête brut venant directement d'un contrôleur, avant qu'il ait été validé en DTO typé.",
    feat_ex_dto_input:
        "les DTO d'entrée décrivent exactement ce qu'un client est autorisé à envoyer  CreateCartDto exige name et email, UpdateCartDto ne demande que id plus un name optionnel, donc les mises à jour partielles restent type-safe.",
    feat_ex_dto_response:
        "le DTO de sortie : uniquement les champs qu'un client est autorisé à voir. Notez l'absence du champ email ici alors que CreateCartDto l'acceptait  la forme de réponse est volontairement plus restreinte que celle d'entrée.",
    feat_ex_dto_mapper:
        "CartDtoMapper.toResponse() convertit une entité, toResponseList() le réutilise sur un tableau  la conversion entité → DTO reste centralisée au lieu d'être répétée dans chaque méthode du cas d'usage.",
    feat_ex_uc_ctor:
        "même schéma d'injection par constructeur que InvoiceUseCase : le cas d'usage dépend de l'interface ICartRepository, pas d'une implémentation concrète Postgres/Mongo.",
    feat_ex_uc_uuid:
        "le cas d'usage génère lui-même l'id de l'entité avec le crypto.randomUUID() natif de Node, plutôt que de laisser la base de données en attribuer un  l'id est donc déjà connu avant même d'appeler le repository.",
    feat_ex_uc_update:
        "update() recharge d'abord l'entité existante, puis appelle ses propres méthodes de mutation (updateName(), touch()) plutôt que de construire une entité toute neuve  les invariants déclarés sur CartEntity elle-même restent garantis.",
    feat_ex_uc_delete:
        "renvoie un booléen plutôt que de lever une erreur, pour que le contrôleur décide comment répondre (par ex. 204 vs 404) selon que la suppression ait réellement correspondu à une ligne.",
    feat_ex_tree_clean:
        "la division complète en quatre couches (domain / application / infrastructure) vue dans Concepts fondamentaux, générée pour chaque fonctionnalité créée par le scaffolder.",
    feat_ex_tree_step:
        "exactement les mêmes fichiers que Clean Arch, simplement regroupés par couche plutôt que par imbrication de dossiers  utile pour voir d'un coup d'œil \"tout ce qui touche au domaine\" ou \"tout ce qui touche à l'infrastructure\".",
    feat_ex_tree_simple:
        "une disposition plus plate, façon MVC, sans séparation ports/adaptateurs  les contrôleurs parlent directement aux repositories. Plus rapide pour démarrer, plus difficile à faire évoluer plus tard si on change de source de données.",
    feat_ex_tree_custom:
        "le scaffolder est un point de départ, pas une obligation : rien n'empêche d'organiser une fonctionnalité à sa façon, comme cette disposition app/core/shared, une fois qu'on comprend la convention par défaut.",
    feat_ex_main_yaml:
        "YamlParsing lit config/cors/corsOptions.yaml et consorts ; LocalLanguageLoader charge les chaînes de traduction de la locale par défaut de l'app avant que le serveur n'accepte des requêtes.",
    feat_ex_main_webserver:
        "WebServer enveloppe l'instance Express sous-jacente avec les options CORS, le chemin d'env, la locale active et le logger  un seul objet regroupe tout ce dont le serveur a besoin pour démarrer.",
    feat_ex_main_onstart:
        "onStartServer() assemble les routes de fonctionnalités agrégées, une factory qui crée la connexion au driver de base de données, et les providers d'injection de dépendances, puis renvoie l'instance du serveur HTTP sous-jacent.",
    feat_ex_main_events:
        "deux hooks de cycle de vie : onListeningOnServerEvent journalise une fois le port lié, onRequestOnServerEvent journalise (ou instrumente) chaque requête entrante.",
    feat_ex_devtools_installer:
        "échafaude un tout nouveau projet OpticoreJS depuis un template de départ  la toute première commande à lancer sur un dossier vide.",
    feat_ex_devtools_feature:
        "le même scaffolder utilisé dans la section \"premier module de fonctionnalité\" ci-dessus, relancé chaque fois qu'il faut une nouvelle fonctionnalité dans un projet existant.",
    feat_ex_devtools_manager:
        "opticore-process-manager en coulisses : démarre, surveille et redémarre des processus Node longue durée, avec un tableau de bord en direct sur http://localhost:3000 pour les observer.",
    feat_ex_hotreload_watch:
        "toutes les extensions de fichier surveillées par le watcher ; les changements en dehors de cette liste sont totalement ignorés.",
    feat_ex_hotreload_hot:
        "un sous-ensemble de watchExtensions rechargé directement en mémoire (sans redémarrage du processus)  fiable seulement pour des fichiers comme .json/.env qui n'exigent pas de ré-évaluer tout le graphe de modules.",
    feat_ex_hotreload_debounce:
        "attend ce nombre de millisecondes après le dernier changement détecté avant de déclencher réellement un rechargement, pour qu'une rafale d'enregistrements (comme un auto-format d'éditeur) ne recharge qu'une seule fois.",
    feat_ex_hotreload_attach:
        "relie le watcher à l'instance du serveur HTTP en cours d'exécution pour qu'il puisse coordonner un redémarrage proprement au lieu de tuer le processus en pleine requête.",
    feat_ex_logger_core:
        "loggerConfig(envPath) lit les variables d'environnement liées aux logs et construit l'objet de config dont LoggerCore a besoin  on construit rarement cette config à la main.",
    feat_ex_logger_levels:
        "chaque niveau prend un objet structuré plutôt qu'une simple chaîne ; title est un court libellé, message le détail, et (pour error) stackTrace permet au transport d'afficher ou d'envoyer la trace complète.",
    feat_ex_env_get:
        "vérifie que le fichier .env à envPath existe réellement puis le charge une seule fois ; à appeler au démarrage, pas à chaque requête.",
    feat_ex_env_typed:
        "chaque champ de l'objet retourné est déjà typé par IEnvVariables  plus de conversion manuelle process.env.APP_PORT (chaîne vers nombre) dispersée dans le code.",
    feat_ex_val_schema:
        "chaque clé nomme un champ du payload entrant ; sa valeur est un tableau ordonné d'objets règles  les règles s'exécutent dans l'ordre listé, et message remplace le texte d'erreur par défaut de cette règle.",
    feat_ex_val_args:
        "certaines règles prennent des paramètres supplémentaires via args (ici, la longueur minimale) ; le nom de la règle plus args décrivent ensemble entièrement le contrôle effectué.",
    feat_ex_val_validate:
        "exécute les règles de chaque champ contre l'objet donné et renvoie une correspondance nom de champ → liste des messages qui ont échoué  un objet vide signifie que la validation a réussi.",
    feat_ex_val_response:
        "ResponseHandler.error() et HttpStatusCode gardent la forme du payload d'erreur (code de statut, message, erreurs de champs) cohérente à travers tous les contrôleurs de l'app.",

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

    helpers_ex_http_rh:
        "les deux moitiés de l'enveloppe standardisée  success() prend le payload, un message et un code de statut ; error() prend un message et un code de statut (plus des erreurs de champ optionnelles), afin que chaque endpoint de l'app réponde avec la même forme JSON.",
    helpers_ex_http_status:
        "une enum de chaque statut HTTP utilisé dans l'écosystème, pour que les contrôleurs n'écrivent jamais un nombre magique comme 404 en dur  c'est à la fois typé et facilement recherchable.",
    helpers_ex_http_catch:
        "toute exception levée plus bas dans la pile d'appel (le cas d'usage, le repository, un driver) est interceptée ici même, à la frontière du contrôleur, et transformée en réponse d'erreur cohérente au lieu de faire planter la requête.",
    helpers_ex_pg_ctor:
        "des arguments positionnels de constructeur pour la connexion ; l'argument \"en\", comme pour SContainer, ne fait que choisir la langue des messages d'erreur internes du driver  ce n'est pas un paramètre de base de données.",
    helpers_ex_pg_conn:
        "connection() ouvre le pool ; getConnection() vous remet ensuite le handle sql brut que QueryBuilder.execute() et chaque adapter repository s'attendent à recevoir.",
    helpers_ex_pg_query:
        "le même QueryBuilder fluide que celui du repository invoice de la page Concepts fondamentaux  chaînez where()/orderBy()/limit(), puis execute() contre la connexion pour exécuter le SQL compilé.",
    helpers_ex_mysql_query:
        "opticore-mysqldb se passe du QueryBuilder et expose des appels de type repository directement : query() prend une chaîne sql paramétrée plus un tableau values (jamais de concaténation de chaînes  c'est ce qui empêche l'injection SQL), et insert() prend un nom de table et un objet simple.",
    helpers_ex_mongo_ops:
        'la même chaîne fluide adaptée au vocabulaire de Mongo : les opérateurs de comparaison sont passés sous forme de chaînes ("gte" au lieu de ">="), et .sort({ field: -1 }) remplace .orderBy(field, "DESC").',
    helpers_ex_orm_init:
        "une invite interactive pour choisir quel ORM (Prisma, TypeORM, Drizzle, MikroORM ou Sequelize) ce projet utilisera, puis met en place ses fichiers de config  à lancer une fois, au démarrage d'un projet.",
    helpers_ex_orm_make:
        "un assistant qui demande les noms de champs, types et relations, puis génère le fichier de schéma/modèle dans le format attendu par l'ORM choisi lors de init.",
    helpers_ex_orm_list:
        "affiche chaque modèle actuellement défini pour l'ORM actif  une vérification rapide qu'un modèle généré s'est bien enregistré.",
    helpers_ex_cache_storage:
        "où vivent les réponses mises en cache : \"memory\" est le plus rapide mais effacé au redémarrage, \"disk\" survit aux redémarrages dans diskDir, et \"hybrid\" garde un sous-ensemble chaud en mémoire adossé au disque pour le reste.",
    helpers_ex_cache_ttl:
        "defaultTTL (en ms) définit combien de temps une entrée reste valide avant d'être considérée comme périmée ; maxSize plafonne le nombre d'entrées que ce namespace de cache peut contenir avant d'évincer les plus anciennes.",
    helpers_ex_cache_get:
        "ne récupère l'URL que s'il n'existe pas encore d'entrée en cache valide ; en cas de hit, elle renvoie la réponse stockée sans faire le moindre appel réseau.",
    helpers_ex_cache_meta:
        "chaque réponse mise en cache reçoit un champ _metadata.source pour que le code appelant (ou un log de debug) puisse savoir si une valeur donnée vient du \"cache\" ou d'un appel \"api\" en direct.",
    helpers_ex_cache_invalidate:
        "accepte un motif de type glob, donc un seul appel peut purger toutes les entrées en cache sous un préfixe de chemin plutôt que d'invalider les clés une par une.",
    helpers_ex_gw_lb:
        "la stratégie utilisée pour choisir quelle instance amont traite la prochaine requête quand un service a plusieurs URL enregistrées ; \"round-robin\" les fait tourner équitablement.",
    helpers_ex_gw_services:
        "le registre des services amont vers lesquels la gateway peut router ; healthCheck est le chemin que la gateway interroge pour décider si ce service est actuellement éligible au trafic.",
    helpers_ex_gw_middlewares:
        "les middlewares s'exécutent par route, avant que la requête ne soit proxifiée  ici AuthMiddleware vérifie la requête contre la ou les clés fournies et peut la rejeter avant qu'elle n'atteigne user-service.",
    helpers_ex_gw_breaker:
        "après failureThreshold échecs consécutifs, le circuit s'ouvre et arrête de transmettre des requêtes à ce service pendant resetTimeout ms, puis laisse passer halfOpenMaxAttempts requêtes d'essai avant de décider de refermer complètement le circuit ou de le rouvrir.",
    helpers_ex_sec_loader:
        "charge les chaînes d'erreur spécifiques à la locale que ce package lève en interne (format de clé invalide, échec de vérification, etc.)  même convention \"en\"/\"fr\" que les autres packages i18n de l'écosystème.",
    helpers_ex_sec_ctor:
        "les deux arguments du constructeur sont la locale des messages d'erreur et le chemin du fichier .env, pas les clés elles-mêmes  les clés sont lues séparément depuis le disque, une fois, puis passées à chaque appel de méthode.",
    helpers_ex_sec_verify:
        "vérifie qu'une signature sur le payload donné a bien été produite par la paire de clés privée/publique correspondante  renvoie un booléen plutôt que de lever une erreur, pour que l'appelant décide comment réagir à un échec de vérification.",

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

    config_ex_service_get:
        "résout envPath, vérifie que le fichier .env existe réellement, le charge une seule fois, et renvoie un objet entièrement typé  à appeler une fois au démarrage plutôt que de lire process.env directement à divers endroits.",
    config_ex_service_fields:
        "chaque propriété de l'objet retourné est déjà typée par IEnvVariables (voir plus bas), donc appPort est connu comme une chaîne et aucun cast manuel n'est nécessaire à chaque appel.",
    config_ex_env_app:
        "la paire hôte/port sur laquelle WebServer se lie quand il commence à écouter.",
    config_ex_env_db:
        "les cinq champs nécessaires pour ouvrir une connexion à la base de données, consommés directement par les constructeurs de driver montrés sur la page Helpers (PostgresCore, OptiCoreMySQLDriver, ...).",
    config_ex_env_locale:
        "defaultLocal choisit la langue utilisée par LocalLanguageLoader et par tous les packages i18n au démarrage ; apiVersion est une simple chaîne exposée pour les routes ou en-têtes qui doivent la signaler.",
    config_ex_env_log:
        "logLevelInfo fixe la sévérité minimale que LoggerCore émet réellement ; logFileEnabled active le transport fichier rotatif en plus de la console.",
    config_ex_env_hmr:
        "hmrEnabled active ou désactive le rechargement à chaud d'opticore-watcher en développement ; hmrDebounceMs est la même fenêtre de debounce que celle montrée dans l'exemple HotReloadWatcher de la page Fonctionnalités, lue depuis l'environnement plutôt que codée en dur.",
    config_ex_env_toolbar:
        "un flag booléen qui contrôle la barre d'outils/profiler de développement  destiné à rester false dans les builds de production.",
    config_ex_yaml_ctor:
        "prend la locale active et le chemin d'env résolu pour que YamlParsing puisse trouver les fichiers YAML spécifiques à la locale relativement à la racine du projet, pas un chemin absolu à coder en dur.",
    config_ex_yaml_read:
        "lit et parse un fichier YAML par chemin, renvoyant un objet JS simple  ici, les options CORS consommées directement par le constructeur de WebServer dans le main.ts de la page Fonctionnalités.",
    config_ex_i18n_location:
        "les segments de dossier (relatifs au package) où vivent ses fichiers message.translation.<locale>.json, pour qu'opticore-loader-translation sache où chercher à l'intérieur d'un package installé.",
    config_ex_i18n_locallang:
        "la locale par défaut utilisée chaque fois qu'un appel à translate() ne redéfinit pas explicitement localeLanguage.",
    config_ex_i18n_translate:
        "recherche key dans les traductions embarquées du package actuel pour localeLanguage, puis interpole params (ici, {name}) dans la chaîne résultante.",
    config_ex_i18n_load:
        "le point d'entrée bas niveau : fusionne en mémoire, de façon anticipée, chaque fichier message.translation.<locale>.json trouvé sous le répertoire donné, pour toutes les locales à la fois.",
    config_ex_i18n_t:
        "recherche une clé directement dans les traductions en mémoire chargées ci-dessus pour une locale précise, en interpolant params  c'est ce que translate() appelle en interne une fois l'emplacement d'un package résolu.",

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

    comp_ex_mw_base:
        "la classe que chaque middleware personnalisé étend ; elle exige seulement d'implémenter handle(), qui doit renvoyer la véritable fonction (req, res, next) que le pipeline de requêtes appellera.",
    comp_ex_mw_nullish:
        "l'opérateur ??= (affectation nullish) ne définit x-request-id que s'il n'est pas déjà défini  un id fourni par un proxy en amont est donc préservé au lieu d'être écrasé, tandis que les requêtes qui n'en ont pas reçoivent un nouveau crypto.randomUUID().",
    comp_ex_mw_add:
        "enregistre un middleware globalement sur la gateway ; les middlewares s'exécutent dans l'ordre où ils sont ajoutés, avant que la requête n'atteigne un handler spécifique à une route.",
    comp_ex_mw_ratelimit:
        "les deux arguments du constructeur sont le budget de requêtes et la fenêtre de temps en millisecondes  ici, 100 requêtes par 60 000 ms (une minute) et par client.",
    comp_ex_int_onrequest:
        "s'accroche au serveur http brut de Node, un niveau en dessous d'Express/opticore-router  il se déclenche littéralement pour chaque requête, ce qui en fait le bon endroit pour un logging transversal qui ne doit jamais être court-circuité par un bug spécifique à une route.",
    comp_ex_int_args:
        "arguments positionnels : la paire requête/réponse à inspecter, l'hôte/port identifiant quelle instance de serveur journalise (utile dès qu'on en fait tourner plusieurs), Date.now() comme horodatage pour calculer la durée de la requête, et envPath plus la locale (\"en\") pour que la ligne de log elle-même puisse être localisée.",
    comp_ex_guard_type:
        "le type que doit satisfaire chaque fonction guard  une fonction compatible avec la signature authenticate() de Passport, générique sur ICustomContext pour être vérifiée par le typage contre la forme des handlers d'opticore-router.",
    comp_ex_guard_passport:
        "construit un authenticator de stratégie JWT Passport ; session: false désactive les sessions côté serveur puisqu'un JWT porte déjà tout ce qu'il faut pour identifier l'appelant à chaque requête.",
    comp_ex_guard_thirdarg:
        "le troisième argument optionnel de routes() est le guard : s'il est présent, opticore-router l'exécute avant chaque handler de cette collection de routes, rejetant la requête avant même qu'elle n'atteigne InvoiceController.create.",
    comp_ex_err_stacktrace:
        "quatre arguments positionnels : un message lisible, un nom d'erreur interne (utile pour regrouper dans les logs), le HttpStatusCode auquel cette erreur doit correspondre dans une réponse, et isOperational  true pour les échecs attendus (entrée invalide, dépendance injoignable) contre false pour de véritables bugs de programmation.",
    comp_ex_err_listen:
        "une instance unique câblée une fois au démarrage, enveloppant les hooks globaux uncaughtException/unhandledRejection de Node afin que chaque package puisse rapporter via le même chemin de gestion d'erreurs localisé, au lieu que chacun ait son propre appel process.on().",
    comp_ex_err_event:
        "CEvent est une enum des noms d'événements du processus Node  utiliser event.uncaughtException plutôt que le littéral \"uncaughtException\" évite les fautes de frappe qui feraient échouer silencieusement l'attachement du handler.",
    comp_ex_err_rejection:
        "le handler d'unhandledRejection reçoit à la fois la raison du rejet et la promesse rejetée, permettant à serverListenEvent de journaliser précisément quelle promesse n'a jamais été capturée.",

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
