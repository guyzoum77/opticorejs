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
    hero_lede:
        "OptiCoreJS is a TypeScript framework for building backends where the business logic outlives the database, " +
        "the HTTP layer, and the framework itself. Robust by structure — not by convention.",
    hero_cta_docs: "Read the docs",
    hero_cta_github: "Star on GitHub",

    trust_label: "Trusted in production by teams at",

    pillars_eyebrow: "Why OptiCore",
    pillars_title_a: "A framework that ",
    pillars_title_em: "respects",
    pillars_title_b: " your domain.",
    pillars_intro:
        "Most frameworks invite the database and the HTTP layer right into your business logic. OptiCore draws lines you can lean on — and gives you the tools to keep them clean for years.",
    pillar_1_title: "Layered by design",
    pillar_1_body:
        "Entities, use cases, adapters, frameworks — kept honest by the compiler. Cross-layer leaks fail at build time.",
    pillar_2_title: "Pluggable adapters",
    pillar_2_body:
        "Swap Postgres for Mongo, REST for gRPC, in-memory for production — without touching a single use case.",
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
        "The deepest core — pure business rules and invariants. No I/O, no framework, no surprises.",
    arch_layer_2: "Use cases",
    arch_layer_2_desc:
        "Application-specific orchestration. Composes entities through ports — never reaches outside.",
    arch_layer_3: "Adapters",
    arch_layer_3_desc:
        "Translators for the outside world. HTTP, queues, databases — all behind tidy ports.",
    arch_layer_4: "Frameworks & drivers",
    arch_layer_4_desc:
        "Express, Fastify, Prisma, Redis — replaceable scaffolding around a stable core.",
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
        "A robust, fully typed Node.js framework built on Express — designed to keep your business logic clean, testable, and independent from the infrastructure around it.",

    intro_what: "What is OptiCoreJS?",
    intro_p1:
        "OptiCoreJS is a robust framework for building powerful and scalable Node.js server applications. Built on Express.js's routing engine, it delivers a fully typed environment through TypeScript. It seamlessly blends object-oriented (OOP) and functional (FP) programming paradigms, drawing inspiration from modern software architecture best practices.",
    intro_express: "Express compatibility",
    intro_p2:
        "While it offers a higher level of abstraction than Express, OptiCoreJS directly exposes its native APIs. You therefore have complete access to the entire Express ecosystem, without ever compromising your application's structure.",
    intro_modules: "Feature Modules & Dependency Injection",
    intro_p3:
        "OptiCoreJS integrates its own dependency injection container and organizes features into feature modules, making modularity a first-class concern. Each module encapsulates its entities, use cases, ports, and adapter bindings around a single bounded context.",
    intro_db: "Database Orchestrator",
    intro_p4:
        "Equipped with a database orchestrator, it lets you freely choose your preferred database from a curated list. The orchestrator installs it, configures it, and — via your chosen ORM — helps you generate models from the command line, whether simple or complex, with full relationship support.",
    intro_devex: "Hot Reload & Logging",
    intro_p5:
        "OptiCoreJS ships with built-in hot reload and records all your application events through a fully configurable logger — control levels, transports, and formats to suit any environment.",
    intro_open: "Open Architecture",
    intro_p6_a:
        "Despite this structured philosophy, OptiCoreJS remains completely open: you are free to define your own architecture, dependency injection container, or logging system — without ever feeling locked in or frustrated.",
    intro_p6_b:
        "Its architecture naturally isolates each business domain, ensuring testable and reusable code across your entire application.",
    intro_callout_b: "You're always in control.",
    intro_callout:
        " OptiCoreJS never forces a single way of doing things. Architecture, DI, logging — all replaceable. You decide, the framework adapts.",
    docs_prereq: "Prerequisites",
    docs_prereq_intro: "Before you begin, make sure you have:",
    docs_prereq_1_a: "Node.js",
    docs_prereq_1_b: " ≥ 20.10 — required for native ESM and decorators support.",
    docs_prereq_2_a: "A package manager: ",
    docs_prereq_2_b: ", ",
    docs_prereq_2_c: ", ",
    docs_prereq_2_d: " or ",
    docs_prereq_2_e: ".",
    docs_prereq_3_a: "A text editor with ",
    docs_prereq_3_b: "TypeScript",
    docs_prereq_3_c: " support — VS Code is recommended.",
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
        " demonstrating the four layers — feel free to delete it once you're comfortable.",
    docs_first_module: "Your first module",
    docs_first_module_p:
        "An OptiCore module bundles entities, use cases, ports and adapter bindings around one bounded context." +
        " Create a new file:",
    docs_use_case_p:
        "Now write the use case. Use cases are pure orchestration — they receive a DTO, talk to entities and ports, " +
        "and return a result. They never touch HTTP, the database, or the clock directly.",
    docs_use_case_after_a: "The ",
    docs_use_case_after_b:
        " is intentionally an interface — in production you'll bind it to a system-clock adapter, " +
        "in tests to a frozen one. The use case never has to care.",
    docs_presenter_p:
        "The presenter port defines how use-case output is shaped before it reaches the consumer. " +
        "Because the use case depends only on the interface, it stays completely decoupled from HTTP or serialization concerns — " +
        "the concrete presenter is wired at the infrastructure level.",
    docs_repo_p:
        "The repository port is the boundary between your application logic and the database. " +
        "The use case talks to this interface only — the actual SQL, ORM, or in-memory store lives behind it in the infrastructure layer.",
    docs_service_p:
        "The service port captures cross-cutting operations that go beyond simple CRUD — " +
        "notifications, exports, orchestration across aggregates. Declaring it as an interface keeps the use case testable " +
        "and the concrete implementation swappable.",
    docs_dto_p:
        "DTOs define the data contract between your HTTP layer and your use cases. " +
        "They keep the domain model private — the outside world only ever sees the fields you explicitly expose.",
    docs_structure: "Project structure",
    docs_structure_p:
        "OptiCoreJS supports 4 project structures depending on your needs — from a full Clean Architecture" +
        " to a lightweight flat layout. Pick the one that matches your context:",
    docs_callout_2_b: "Architecture lint.",
    docs_callout_2_a: " The CLI's ",
    docs_callout_2_c:
        " command parses the dependency graph and fails the build if a module reaches across a boundary " +
        "it shouldn't — a use case importing an adapter, an entity importing the framework, etc.",
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
    sb_di: "Dependency injection",
    sb_adapters: "Adapters",
    sb_http: "HTTP (Fastify)",
    sb_postgres: "PostgreSQL",
    sb_redis: "Redis",
    sb_queue: "Queues",
    sb_prod: "Production",
    sb_testing: "Testing",
    sb_obs: "Observability",
    sb_deploy: "Deployment",
    sb_5min: "5 min",
    sb_running: "Running the app",
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
    sb_decorators: "Decorators",
    sb_interceptors: "Interceptors",
    sb_guards: "Guards",
    sb_pipes: "Pipes",

    cc_title: "Core Concepts",
    cc_entities_h: "Entities",
    cc_entities_p:
        "Entities are pure TypeScript classes that encode your business rules and invariants. They carry no framework dependency — no decorators, no ORM annotations, nothing that couples them to infrastructure.",
    cc_uc_h: "Use Cases",
    cc_uc_p:
        "A use case orchestrates one user intention. It receives a plain DTO, talks to entities and ports, and returns a plain result. It never touches HTTP, the database, or any framework.",
    cc_ports_h: "Ports & Adapters",
    cc_ports_p:
        "Ports are TypeScript interfaces that live in the application layer. Adapters implement them in the infrastructure layer. The use case only knows the interface — the concrete adapter is injected at startup.",
    cc_di_h: "Dependency Injection",
    cc_di_p:
        "OptiCoreJS ships its own lightweight DI container. Declare your bindings in a module, and the container wires the graph before your first request arrives.",

    feat_title: "Features",
    feat_logger_h: "Logger",
    feat_logger_p:
        "A fully configurable logger with support for multiple transports, log levels, and structured formats. Control verbosity per environment without touching your business logic.",
    feat_env_h: "Environment",
    feat_env_p:
        "First-class environment variable management with validation, typed access, and `.env` file support. Bind your config shape once — the framework validates it on startup.",
    feat_validation_h: "Validation",
    feat_validation_p:
        "Declare your DTO shapes as TypeScript classes. The validation layer checks incoming payloads at the adapter boundary, so use cases always receive well-formed data.",

    helpers_title: "Helpers",
    helpers_http_h: "HTTP",
    helpers_http_p:
        "Thin helpers for building Express-compatible handlers with typed request/response contexts. Use them inside your adapter layer to keep controllers declarative.",
    helpers_postgres_h: "PostgreSQL",
    helpers_postgres_p:
        "A ready-made PostgreSQL adapter with connection pooling, migrations, and repository base classes. Swap it out by implementing the same port interface.",
    helpers_redis_h: "Redis",
    helpers_redis_p:
        "Redis cache and pub/sub adapters. Bind them to cache or queue ports for use in your use cases.",
    helpers_queue_h: "Queues",
    helpers_queue_p:
        "A simple in-process queue adapter and an interface for dropping in BullMQ or any other queue driver.",

    config_title: "Configuration",
    config_service_h: "Config Service",
    config_service_p:
        "The central configuration service. Load, validate, and expose your application settings through a single typed interface across every layer.",
    config_env_h: "Env Variables",
    config_env_p:
        "Read environment variables with type coercion and default values. Missing required variables throw a descriptive error before the server starts.",
    config_yaml_h: "YAML",
    config_yaml_p:
        "Load structured YAML files — CORS options, database settings, feature flags — as strongly-typed JavaScript objects. No magic, just parsing.",

    comp_title: "Components",
    comp_decorators_h: "Decorators",
    comp_decorators_p:
        "A curated set of class and parameter decorators: @Module, @UseCase, @Inject, @Controller, and more. Each maps to a concrete wiring step in the container — no reflection at runtime.",
    comp_interceptors_h: "Interceptors",
    comp_interceptors_p:
        "Wrap use case execution with cross-cutting logic: logging, metrics, retry, timeout. Interceptors are plain classes that implement a single interface.",
    comp_guards_h: "Guards",
    comp_guards_p:
        "Express-compatible request guards. Return true to pass, throw to reject. Compose them declaratively on your route handlers.",
    comp_pipes_h: "Pipes",
    comp_pipes_p:
        "Transform and validate request data before it reaches your controller. Pipes run at the adapter boundary — business logic stays unaware.",

    philo_title: "Philosophy",
    philo_p1:
        "In recent years, Node.js has turned JavaScript into a universal language, powering both frontend and backend. Projects like Angular, React, and Vue have revolutionized frontend productivity. But on the server side, despite a wealth of powerful libraries and tools, the real problem of architecture too often remains unsolved.",
    philo_p2:
        "OptiCoreJS directly addresses this gap. It provides a ready-to-use application architecture inspired by Clean Architecture: controllers, use cases, entities, and interfaces are strictly decoupled. This separation delivers exceptional testability and maintainability that holds up as your codebase grows.",
    philo_p3:
        "We drew inspiration from the best the ecosystem has to offer: the modular elegance of NestJS, the convention-over-configuration philosophy of AdonisJS, and the architectural clarity of FoalTS. The result is a unique hybrid — all the freedom of Express, the structural power of an enterprise framework, and the constant ability to integrate your own architectural vision.",

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
        "données, à la couche HTTP et au framework lui-même. Robuste par construction — pas par convention.",
    hero_cta_docs: "Lire la documentation",
    hero_cta_github: "Star sur GitHub",

    trust_label: "Utilisé en production par les équipes de",

    pillars_eyebrow: "Pourquoi OptiCore",
    pillars_title_a: "Un framework qui ",
    pillars_title_em: "respecte",
    pillars_title_b: " votre domaine.",
    pillars_intro:
        "La plupart des frameworks invitent la base de données et la couche HTTP au cœur de votre logique métier. OptiCore trace des lignes sur lesquelles vous pouvez compter — et vous donne les outils pour les garder propres des années durant.",
    pillar_1_title: "Architecture en couches",
    pillar_1_body:
        "Entités, cas d'usage, adapters, frameworks — tenus en respect par le compilateur. Toute fuite entre couches échoue au build.",
    pillar_2_title: "Adapters interchangeables",
    pillar_2_body:
        "Remplacez Postgres par Mongo, REST par gRPC, in-memory en production — sans toucher à un seul cas d'usage.",
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
        "Le cœur le plus profond — règles métier et invariants purs. Pas d'I/O, pas de framework, pas de surprise.",
    arch_layer_2: "Cas d'usage",
    arch_layer_2_desc:
        "Orchestration applicative. Compose les entités via des ports — sans jamais sortir du domaine.",
    arch_layer_3: "Adapters",
    arch_layer_3_desc:
        "Traducteurs vers le monde extérieur. HTTP, queues, bases — tous derrière des ports propres.",
    arch_layer_4: "Frameworks & drivers",
    arch_layer_4_desc:
        "Express, Fastify, Prisma, Redis — un échafaudage remplaçable autour d'un noyau stable.",
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
        "Un framework Node.js robuste et entièrement typé, construit sur Express — conçu pour garder votre logique métier propre, testable et indépendante de l'infrastructure qui l'entoure.",

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
        "OptiCoreJS propose un hot reload intégré et enregistre toutes vos actions applicatives grâce à un logger entièrement configurable — contrôlez les niveaux, les transports et les formats selon votre environnement.",
    intro_open: "Architecture ouverte",
    intro_p6_a:
        "Malgré cette philosophie structurée, OptiCoreJS reste totalement ouvert : vous pouvez librement définir votre propre architecture, votre conteneur d'injection ou votre système de journalisation, sans jamais vous sentir enfermé ni frustré.",
    intro_p6_b:
        "Son architecture isole naturellement chaque domaine métier, garantissant ainsi un code testable et réutilisable dans toute votre application.",
    intro_callout_b: "Vous gardez toujours le contrôle.",
    intro_callout:
        " OptiCoreJS n'impose jamais une seule façon de faire. Architecture, DI, journalisation — tout est remplaçable. Vous décidez, le framework s'adapte.",
    docs_prereq: "Prérequis",
    docs_prereq_intro: "Avant de commencer, assurez-vous d'avoir :",
    docs_prereq_1_a: "Node.js",
    docs_prereq_1_b: " ≥ 20.10 — requis pour le support natif d'ESM et des décorateurs.",
    docs_prereq_2_a: "Un gestionnaire de paquets : ",
    docs_prereq_2_b: ", ",
    docs_prereq_2_c: ", ",
    docs_prereq_2_d: " ou ",
    docs_prereq_2_e: ".",
    docs_prereq_3_a: "Un éditeur avec support ",
    docs_prereq_3_b: "TypeScript",
    docs_prereq_3_c: " — VS Code est recommandé.",
    docs_callout_1_b: "Vous venez d'un autre framework ?",
    docs_callout_1:
        " Si vous pensez déjà en modules, services et contrôleurs, le saut conceptuel est minime. Le grand changement : la logique métier vit dans des cas d'usage purs, pas dans des services liés à HTTP.",
    docs_install: "Installation",
    docs_install_p:
        "Échafaudez un nouveau projet avec le starter officiel. La CLI met en place TypeScript, le runtime, des adapters d'exemple et une suite de tests qui passe — clé en main.",
    docs_install_after_a: "Le starter livre un module ",
    docs_install_after_b:
        " d'exemple qui démontre les quatre couches — supprimez-le quand vous serez à l'aise.",
    docs_first_module: "Votre premier module",
    docs_first_module_p:
        "Un module OptiCore regroupe entités, cas d'usage, ports et bindings d'adapters autour d'un seul contexte borné. Créez un nouveau fichier :",
    docs_use_case_p:
        "Écrivez maintenant le cas d'usage. Les cas d'usage sont de la pure orchestration — ils reçoivent un DTO, parlent aux entités et aux ports, et renvoient un résultat. Ils ne touchent jamais directement HTTP, la base de données, ou l'horloge.",
    docs_use_case_after_a: "Le ",
    docs_use_case_after_b:
        " est volontairement une interface — en production vous le liez à un adapter d'horloge système, en tests à une horloge figée. Le cas d'usage n'a pas à le savoir.",
    docs_presenter_p:
        "Le port présentateur définit la forme que prend la sortie du cas d'usage avant d'atteindre le consommateur. " +
        "Parce que le cas d'usage ne dépend que de l'interface, il reste totalement découplé des préoccupations HTTP ou de sérialisation — " +
        "le présentateur concret est câblé au niveau de l'infrastructure.",
    docs_repo_p:
        "Le port repository est la frontière entre votre logique applicative et la base de données. " +
        "Le cas d'usage ne parle qu'à cette interface — le SQL, l'ORM ou le store in-memory se trouve derrière, dans la couche infrastructure.",
    docs_service_p:
        "Le port service regroupe les opérations transverses qui dépassent le simple CRUD — " +
        "notifications, exports, orchestration entre agrégats. Le déclarer comme interface garde le cas d'usage testable " +
        "et l'implémentation concrète interchangeable.",
    docs_dto_p:
        "Les DTOs définissent le contrat de données entre la couche HTTP et vos cas d'usage. " +
        "Ils gardent le modèle de domaine privé — le monde extérieur ne voit jamais que les champs que vous exposez explicitement.",
    docs_structure: "Structure du projet",
    docs_structure_p:
        "OptiCoreJS supporte 4 structures de projet selon vos besoins — de la Clean Architecture complète à une organisation légère à plat. Choisissez celle qui correspond à votre contexte :",
    docs_callout_2_b: "Lint d'architecture.",
    docs_callout_2_a: " La commande ",
    docs_callout_2_c:
        " de la CLI parse le graphe de dépendances et fait échouer le build si un module franchit une frontière qu'il ne devrait pas — un cas d'usage important un adapter, une entité important le framework, etc.",
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
    sb_di: "Injection de dépendances",
    sb_adapters: "Adapters",
    sb_http: "HTTP (Fastify)",
    sb_postgres: "PostgreSQL",
    sb_redis: "Redis",
    sb_queue: "Queues",
    sb_prod: "Production",
    sb_testing: "Tests",
    sb_obs: "Observabilité",
    sb_deploy: "Déploiement",
    sb_5min: "5 min",
    sb_running: "Lancer l'application",
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
    sb_decorators: "Décorateurs",
    sb_interceptors: "Intercepteurs",
    sb_guards: "Guards",
    sb_pipes: "Pipes",

    cc_title: "Concepts fondamentaux",
    cc_entities_h: "Entités",
    cc_entities_p:
        "Les entités sont des classes TypeScript pures qui encodent vos règles métier et invariants. Elles ne portent aucune dépendance framework — pas de décorateurs, pas d'annotations ORM, rien qui les couple à l'infrastructure.",
    cc_uc_h: "Cas d'usage",
    cc_uc_p:
        "Un cas d'usage orchestre une seule intention utilisateur. Il reçoit un DTO simple, parle aux entités et aux ports, et renvoie un résultat plain. Il ne touche jamais HTTP, la base de données, ni le framework.",
    cc_ports_h: "Ports & Adapters",
    cc_ports_p:
        "Les ports sont des interfaces TypeScript qui vivent dans la couche applicative. Les adapters les implémentent dans la couche infrastructure. Le cas d'usage ne connaît que l'interface — l'adapter concret est injecté au démarrage.",
    cc_di_h: "Injection de dépendances",
    cc_di_p:
        "OptiCoreJS embarque son propre conteneur DI léger. Déclarez vos bindings dans un module, et le conteneur câble le graphe avant que votre première requête arrive.",

    feat_title: "Fonctionnalités",
    feat_logger_h: "Logger",
    feat_logger_p:
        "Un logger entièrement configurable avec support de multiples transports, niveaux de log et formats structurés. Contrôlez la verbosité par environnement sans toucher à votre logique métier.",
    feat_env_h: "Environnement",
    feat_env_p:
        "Gestion de premier ordre des variables d'environnement avec validation, accès typé et support des fichiers `.env`. Déclarez la forme de votre config une fois — le framework la valide au démarrage.",
    feat_validation_h: "Validation",
    feat_validation_p:
        "Déclarez la forme de vos DTOs en classes TypeScript. La couche de validation vérifie les données entrantes à la frontière de l'adapter, ainsi les cas d'usage reçoivent toujours des données bien formées.",

    helpers_title: "Helpers",
    helpers_http_h: "HTTP",
    helpers_http_p:
        "Des helpers légers pour construire des handlers Express-compatibles avec des contextes request/response typés. Utilisez-les dans votre couche adapter pour garder les contrôleurs déclaratifs.",
    helpers_postgres_h: "PostgreSQL",
    helpers_postgres_p:
        "Un adapter PostgreSQL prêt à l'emploi avec pool de connexions, migrations et classes de base pour les repositories. Remplacez-le en implémentant la même interface de port.",
    helpers_redis_h: "Redis",
    helpers_redis_p:
        "Adapters cache et pub/sub Redis. Liez-les aux ports de cache ou de file pour les utiliser dans vos cas d'usage.",
    helpers_queue_h: "Files de messages",
    helpers_queue_p:
        "Un adapter de file in-process simple et une interface pour brancher BullMQ ou tout autre driver de queue.",

    config_title: "Configuration",
    config_service_h: "Service de configuration",
    config_service_p:
        "Le service de configuration central. Chargez, validez et exposez les paramètres de votre application via une interface typée unique à travers toutes les couches.",
    config_env_h: "Variables d'environnement",
    config_env_p:
        "Lisez les variables d'environnement avec coercition de type et valeurs par défaut. Les variables requises manquantes génèrent une erreur descriptive avant le démarrage du serveur.",
    config_yaml_h: "YAML",
    config_yaml_p:
        "Chargez des fichiers YAML structurés — options CORS, paramètres de base de données, feature flags — en tant qu'objets JavaScript fortement typés. Pas de magie, juste du parsing.",

    comp_title: "Composants",
    comp_decorators_h: "Décorateurs",
    comp_decorators_p:
        "Un ensemble soigné de décorateurs de classe et de paramètre : @Module, @UseCase, @Inject, @Controller et d'autres. Chacun correspond à une étape concrète de câblage dans le conteneur — pas de réflexion à l'exécution.",
    comp_interceptors_h: "Intercepteurs",
    comp_interceptors_p:
        "Encapsulez l'exécution des cas d'usage avec une logique transverse : journalisation, métriques, retry, timeout. Les intercepteurs sont des classes simples qui implémentent une unique interface.",
    comp_guards_h: "Guards",
    comp_guards_p:
        "Guards de requête compatibles Express. Retournez true pour laisser passer, lancez une exception pour rejeter. Composez-les de façon déclarative sur vos handlers de route.",
    comp_pipes_h: "Pipes",
    comp_pipes_p:
        "Transformez et validez les données de requête avant qu'elles atteignent votre contrôleur. Les pipes s'exécutent à la frontière de l'adapter — la logique métier n'en est pas consciente.",

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
