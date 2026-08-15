import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigation } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1, useCallback, useEffect, useMemo, useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "icon",
		href: "/assets/opticorejs-logo.png"
	},
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		"data-theme": "dark",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	const navigation = useNavigation();
	const location = useLocation();
	return /* @__PURE__ */ jsxs(Fragment, { children: [navigation.state !== "idle" && /* @__PURE__ */ jsx("div", { className: "nav-progress" }), /* @__PURE__ */ jsx("div", {
		className: "page-wrapper",
		children: /* @__PURE__ */ jsx(Outlet, {})
	}, location.pathname)] });
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		style: {
			paddingTop: 64,
			padding: 16,
			maxWidth: 720,
			margin: "0 auto"
		},
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/application/hooks/useCmdK.ts
function useCmdK(onOpen) {
	useEffect(() => {
		const handler = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				onOpen();
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onOpen]);
}
var TRANSLATIONS = {
	en: {
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
		hero_lede: "OptiCoreJS is a TypeScript framework for building backends where the business logic outlives the database, the HTTP layer, and the framework itself. Robust by structure  not by convention.",
		hero_cta_docs: "Read the docs",
		hero_cta_github: "Star on GitHub",
		trust_label: "Trusted in production by teams at",
		pillars_eyebrow: "Why OptiCore",
		pillars_title_a: "A framework that ",
		pillars_title_em: "respects",
		pillars_title_b: " your domain.",
		pillars_intro: "Most frameworks invite the database and the HTTP layer right into your business logic. OptiCore draws lines you can lean on  and gives you the tools to keep them clean for years.",
		pillar_1_title: "Layered by design",
		pillar_1_body: "Entities, use cases, adapters, frameworks  kept honest by the compiler. Cross-layer leaks fail at build time.",
		pillar_2_title: "Pluggable adapters",
		pillar_2_body: "Swap Postgres for Mongo, REST for gRPC, in-memory for production  without touching a single use case.",
		pillar_3_title: "Testable by default",
		pillar_3_body: "Pure use cases. Pure entities. No global state. Run 10,000 tests in two seconds with zero mocking ceremony.",
		pillar_4_title: "Production grade",
		pillar_4_body: "Tracing, metrics, structured logs, graceful shutdown and 12-factor config wired in. Boring in the best way.",
		arch_eyebrow: "Architecture",
		arch_title_a: "Four layers. ",
		arch_title_em: "One direction.",
		arch_title_b: "",
		arch_intro: "Dependencies always point inward. Entities know nothing about use cases. Use cases know nothing about adapters. Adapters know nothing about the framework. The compiler enforces it.",
		arch_layer_1: "Entities",
		arch_layer_1_desc: "The deepest core  pure business rules and invariants. No I/O, no framework, no surprises.",
		arch_layer_2: "Use cases",
		arch_layer_2_desc: "Application-specific orchestration. Composes entities through ports  never reaches outside.",
		arch_layer_3: "Adapters",
		arch_layer_3_desc: "Translators for the outside world. HTTP, queues, databases  all behind tidy ports.",
		arch_layer_4: "Frameworks & drivers",
		arch_layer_4_desc: "Express, Fastify, Prisma, Redis  replaceable scaffolding around a stable core.",
		arch_ring_4: "Frameworks",
		arch_ring_3: "Adapters",
		arch_ring_2: "Use cases",
		arch_ring_1: "Entities",
		dx_eyebrow: "Developer experience",
		dx_title: "Decorators that mean what they say.",
		dx_intro_post: ". Three decorators, predictable wiring, zero magic. Read the source and the static analyzer will tell you whether your dependencies are pointing the right way.",
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
		cta_lede: "Open the docs, scaffold a project, and write your first use case in under five minutes.",
		cta_get_started: "Get started",
		cta_concepts: "Read the concepts",
		foot_brand_desc: "A robust TypeScript framework for backends built around Clean Architecture. MIT licensed, open source forever.",
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
		docs_lede: "A robust, fully typed Node.js framework built on Express  designed to keep your business logic clean, testable, and independent from the infrastructure around it.",
		intro_what: "What is OptiCoreJS?",
		intro_p1: "OptiCoreJS is a robust framework for building powerful and scalable Node.js server applications. Built on Express.js's routing engine, it delivers a fully typed environment through TypeScript. It seamlessly blends object-oriented (OOP) and functional (FP) programming paradigms, drawing inspiration from modern software architecture best practices.",
		intro_express: "Express compatibility",
		intro_p2: "While it offers a higher level of abstraction than Express, OptiCoreJS directly exposes its native APIs. You therefore have complete access to the entire Express ecosystem, without ever compromising your application's structure.",
		intro_modules: "Feature Modules & Dependency Injection",
		intro_p3: "OptiCoreJS integrates its own dependency injection container and organizes features into feature modules, making modularity a first-class concern. Each module encapsulates its entities, use cases, ports, and adapter bindings around a single bounded context.",
		intro_db: "Database Orchestrator",
		intro_p4: "Equipped with a database orchestrator, it lets you freely choose your preferred database from a curated list. The orchestrator installs it, configures it, and  via your chosen ORM  helps you generate models from the command line, whether simple or complex, with full relationship support.",
		intro_devex: "Hot Reload & Logging",
		intro_p5: "OptiCoreJS ships with built-in hot reload and records all your application events through a fully configurable logger  control levels, transports, and formats to suit any environment.",
		intro_open: "Open Architecture",
		intro_p6_a: "Despite this structured philosophy, OptiCoreJS remains completely open: you are free to define your own architecture, dependency injection container, or logging system without ever feeling locked in or frustrated.",
		intro_p6_b: "Its architecture naturally isolates each business domain, ensuring testable and reusable code across your entire application.",
		intro_callout_b: "You're always in control.",
		intro_callout: " OptiCoreJS never forces a single way of doing things. Architecture, DI, logging  all replaceable. You decide, the framework adapts.",
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
		docs_callout_1: " If you already think in modules, services, and controllers, the conceptual jump is small. The big shift: business logic lives in pure use cases, not services bound to HTTP.",
		docs_install: "Installation",
		docs_install_p: "Scaffold a new project with the official starter. The CLI sets up TypeScript, the runtime, sample adapters and a passing test suite out of the box.",
		docs_install_after_a: "The starter ships with a sample ",
		docs_install_after_b: " demonstrating the four layers  feel free to delete it once you're comfortable.",
		docs_first_module: "Your first module",
		docs_first_module_p: "An OptiCore module bundles entities, use cases, ports and adapter bindings around one bounded context. Create a new file:",
		docs_use_case_p: "Now write the use case. Use cases are pure orchestration  they receive a DTO, talk to entities and ports, and return a result. They never touch HTTP, the database, or the clock directly.",
		docs_use_case_after_a: "The ",
		docs_use_case_after_b: " is intentionally an interface  in production you'll bind it to a system-clock adapter, in tests to a frozen one. The use case never has to care.",
		docs_presenter_p: "The presenter port defines how use-case output is shaped before it reaches the consumer. Because the use case depends only on the interface, it stays completely decoupled from HTTP or serialization concerns  the concrete presenter is wired at the infrastructure level.",
		docs_repo_p: "The repository port is the boundary between your application logic and the database. The use case talks to this interface only  the actual SQL, ORM, or in-memory store lives behind it in the infrastructure layer.",
		docs_service_p: "The service port captures cross-cutting operations that go beyond simple CRUD  notifications, exports, orchestration across aggregates. Declaring it as an interface keeps the use case testable and the concrete implementation swappable.",
		docs_dto_p: "DTOs define the data contract between your HTTP layer and your use cases. They keep the domain model private  the outside world only ever sees the fields you explicitly expose.",
		docs_structure: "Project structure",
		docs_structure_p: "OptiCoreJS supports 4 project structures depending on your needs  from a full Clean Architecture to a lightweight flat layout. Pick the one that matches your context:",
		docs_callout_2_b: "Full scaffold in one shot.",
		docs_callout_2_a: " Run ",
		docs_callout_2_c: " and pick “Full CLEAN Architecture” to generate all 13 files  entity, use case, ports, DTO, controller and routes  pre-wired and ready to edit.",
		docs_running: "Running the app",
		docs_running_p: "Boot the app from a single composition root. This is the only file in your codebase that knows about both your business logic and the framework that runs it.",
		docs_running_after_a: "Hit ",
		docs_running_after_b: " and you should see your greeting come back, courtesy of the auto-mounted Fastify adapter.",
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
		cc_lede: "OptiCoreJS has no decorator-based module system  the Clean Architecture layers below are achieved with plain TypeScript classes, factory functions, and a handful of dedicated packages: opticore-router for routing, opticore-dependency-inject for wiring, and the feature-clean-module scaffolder for generating the rest.",
		cc_entities_h: "Entities",
		cc_entities_p: "Entities are plain TypeScript classes generated under domain/entities by the feature-clean-module scaffolder. They carry your business rules and invariants  private fields, explicit validation in the constructor, no ORM decorators, no framework imports.",
		cc_uc_h: "Use Cases",
		cc_uc_p: "A use case orchestrates one user intention. It receives data, talks to a repository port, and returns a mapped DTO. It never imports Express, a database driver, or opticore-router directly  those live in the infrastructure layer.",
		cc_ports_h: "Ports & Adapters",
		cc_ports_p: "Ports are the interfaces declared under application/ports  repositories, presenters, services. Adapters implement them in the infrastructure layer, for example a Postgres repository built on the fluent QueryBuilder from opticore-postgres.",
		cc_routing_h: "Routing & Controllers",
		cc_routing_p: "opticore-router turns a plain route-config array into an Express router without ever calling app.get()/app.post() by hand. Each handler receives a single ICustomContext instead of (req, res, next), and OpticoreRegisterRouter aggregates every feature router before the app boots.",
		cc_di_h: "Dependency Injection",
		cc_di_p: "opticore-dependency-inject ships SContainer, a minimal container with singleton/transient scopes. Register factories once, then resolve fully-wired instances anywhere in your app  the container builds the graph so your use cases never call new on their own dependencies.",
		cc_legacy_b: "Looking for an @opticore/core package? ",
		cc_legacy: "There isn't one, on purpose. An early opticore-core-module package still exists but is superseded by the combination shown on this page and should not be used in new projects.",
		feat_title: "Features",
		feat_devtools_h: "Developer tooling",
		feat_devtools_p: "Three CLIs cover the project lifecycle: opticore-installer scaffolds a brand-new project from a starter template, create-feature-module (from feature-clean-module) generates feature modules inside it, and app-manager (opticore-process-manager) runs and monitors long-lived processes from a live dashboard.",
		feat_devtools_p2: "In development, opticore-watcher restarts your server on code changes and hot-reloads .env/.json files in place  no restart needed for config-only edits.",
		feat_logger_h: "Logger",
		feat_logger_p: "opticore-logger provides LoggerCore, a leveled logger (success/info/warn/error/debug) with pluggable console, rotating-file and remote transports. Its configuration is built by loggerConfig() from opticore-webapp-core, which reads the log-related fields off opticore-env-access.",
		feat_env_h: "Environment",
		feat_env_p: "opticore-env-access centralizes .env loading. getEnvironmentValue() validates the file exists, loads it, and returns a fully-typed IEnvVariables object  every other package reads its configuration through this same function.",
		feat_validation_h: "Validation",
		feat_validation_p: "opticore-validator is schema-based, not decorator-based: describe each field as an array of rule objects, then call validate() to get back a map of field to error messages, ready to hand to ResponseHandler.error().",
		helpers_title: "Helpers",
		helpers_http_h: "HTTP Responses",
		helpers_http_p: "opticore-http-response standardizes every JSON response: ResponseHandler.success()/error() for the envelope, HttpExceptionService for typed HTTP errors, and an exhaustive HttpStatusCode enum used across the whole ecosystem.",
		helpers_postgres_h: "Databases",
		helpers_postgres_p: "Three sibling drivers cover the major databases  opticore-postgres and opticore-mongodb each ship a fluent QueryBuilder, while opticore-mysqldb exposes repository-style methods (insert/update/delete/find) directly on the driver. Pick one; they don't share an abstraction, so swapping requires touching your repository adapters.",
		helpers_orm_p: "Prefer working through an ORM instead? opticore-orm-orchestrator is a separate CLI that scaffolds native Prisma, TypeORM, Drizzle, MikroORM or Sequelize models  it doesn't wrap the drivers above, it generates the schema files each ORM expects.",
		helpers_redis_h: "HTTP Cache",
		helpers_redis_p: "opticore-cache is a self-contained HTTP response cache  not a Redis client. HttpCacheFactory.create() gives you getWithCache()/postWithCache() backed by memory, disk, or a hybrid store, with per-call TTL and pattern-based invalidation.",
		helpers_queue_h: "API Gateway",
		helpers_queue_p: "opticore-api-gateway is a reverse proxy with dynamic routing, four load-balancing strategies, per-route circuit breakers and health-checked service registries. Run it standalone, or feed gateway.getOpticoreRoutes() into WebServer.onStartServer() to mount it inside an existing app.",
		helpers_security_p: "opticore-asymmetric-cryption wraps RSA sign/verify/encrypt/decrypt behind two directional services (public-key-first and private-key-first). Generate a key pair once with npx opticore-gen-keys, then read the PEM files at runtime.",
		config_title: "Configuration",
		config_service_h: "Config Service",
		config_service_p: "getEnvironmentValue() from opticore-env-access is the single entry point every package uses to read configuration. It resolves the .env path, validates it exists, loads it, and returns a typed object  no scattered process.env reads.",
		config_env_h: "Env Variables",
		config_env_p: "The typed IEnvVariables shape covers app host/port, database credentials, locale, logging (per-transport enable flags and levels), hot-reload tuning, and the profiler toolbar  a representative slice below, mapped to their real env var names.",
		config_yaml_h: "YAML",
		config_yaml_p: "opticore-webapp-core's YamlParsing loads structured files  CORS options, feature flags  relative to the project root. It's a lightweight, framework-specific parser, not a full YAML-spec implementation.",
		config_i18n_h: "Translations (i18n)",
		config_i18n_p: "Two layers handle localized messages: opticore-translator is the low-level engine that merges message.translation.<locale>.json files and interpolates {params}, while opticore-loader-translation resolves an installed package's own bundled translations by name so every package can localize its own errors and logs.",
		comp_title: "Components",
		comp_middlewares_h: "Middlewares",
		comp_middlewares_p: "Middlewares plug into the request pipeline with a standard Express-style (req, res, next) signature. opticore-api-gateway ships ready-made ones (Auth, RateLimit, Logging, Validation) plus a BaseMiddleware class to extend, and opticore-webapp-core adds a raw-body-buffering parser (MBodyParser) for the framework's core server.",
		comp_interceptors_h: "Interceptors",
		comp_interceptors_p: "opticore-request-call-event hooks the underlying HTTP server's request event to log every request/response cycle  method, status, timing, colorized output  independently of your route handlers. It's what powers the console output you see when the framework's own WebServer boots.",
		comp_guards_h: "Guards",
		comp_guards_p: "Route-level authentication is a third argument, not a decorator: pass a Passport-compatible TAuthenticatorFunction to OpticoreRoutingFactory.routes(), and opticore-router runs it before any handler in that collection.",
		comp_exceptions_h: "Exception Handling",
		comp_exceptions_p: "opticore-catch-exception-error is the framework's process-wide safety net. StackTraceError is the typed, HTTP-aware error class used across every package; ServerListenEventError wires it to Node's uncaughtException, unhandledRejection and shutdown signals so nothing crashes silently.",
		philo_title: "Philosophy",
		philo_p1: "In recent years, Node.js has turned JavaScript into a universal language, powering both frontend and backend. Projects like Angular, React, and Vue have revolutionized frontend productivity. But on the server side, despite a wealth of powerful libraries and tools, the real problem of architecture too often remains unsolved.",
		philo_p2: "OptiCoreJS directly addresses this gap. It provides a ready-to-use application architecture inspired by Clean Architecture: controllers, use cases, entities, and interfaces are strictly decoupled. This separation delivers exceptional testability and maintainability that holds up as your codebase grows.",
		philo_p3: "We drew inspiration from the best the ecosystem has to offer: the modular elegance of NestJS, the convention-over-configuration philosophy of AdonisJS, and the architectural clarity of FoalTS. The result is a unique hybrid  all the freedom of Express, the structural power of an enterprise framework, and the constant ability to integrate your own architectural vision.",
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
		toc_next: "Next steps"
	},
	fr: {
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
		hero_lede: "OptiCoreJS est un framework TypeScript pour bâtir des backends où la logique métier survit à la base de données, à la couche HTTP et au framework lui-même. Robuste par construction  pas par convention.",
		hero_cta_docs: "Lire la documentation",
		hero_cta_github: "Star sur GitHub",
		trust_label: "Utilisé en production par les équipes de",
		pillars_eyebrow: "Pourquoi OptiCore",
		pillars_title_a: "Un framework qui ",
		pillars_title_em: "respecte",
		pillars_title_b: " votre domaine.",
		pillars_intro: "La plupart des frameworks invitent la base de données et la couche HTTP au cœur de votre logique métier. OptiCore trace des lignes sur lesquelles vous pouvez compter  et vous donne les outils pour les garder propres des années durant.",
		pillar_1_title: "Architecture en couches",
		pillar_1_body: "Entités, cas d'usage, adapters, frameworks  tenus en respect par le compilateur. Toute fuite entre couches échoue au build.",
		pillar_2_title: "Adapters interchangeables",
		pillar_2_body: "Remplacez Postgres par Mongo, REST par gRPC, in-memory en production  sans toucher à un seul cas d'usage.",
		pillar_3_title: "Testable par défaut",
		pillar_3_body: "Cas d'usage purs. Entités pures. Aucun état global. Lancez 10 000 tests en deux secondes, sans cérémonie de mocking.",
		pillar_4_title: "Niveau production",
		pillar_4_body: "Tracing, métriques, logs structurés, arrêt gracieux et configuration 12-factor déjà câblés. Ennuyeux dans le bon sens.",
		app_version: "1.0",
		arch_eyebrow: "Architecture",
		arch_title_a: "Quatre couches. ",
		arch_title_em: "Un seul sens.",
		arch_title_b: "",
		arch_intro: "Les dépendances pointent toujours vers l'intérieur. Les entités ne savent rien des cas d'usage. Les cas d'usage ne savent rien des adapters. Les adapters ne savent rien du framework. Le compilateur l'impose.",
		arch_layer_1: "Entités",
		arch_layer_1_desc: "Le cœur le plus profond  règles métier et invariants purs. Pas d'I/O, pas de framework, pas de surprise.",
		arch_layer_2: "Cas d'usage",
		arch_layer_2_desc: "Orchestration applicative. Compose les entités via des ports  sans jamais sortir du domaine.",
		arch_layer_3: "Adapters",
		arch_layer_3_desc: "Traducteurs vers le monde extérieur. HTTP, queues, bases  tous derrière des ports propres.",
		arch_layer_4: "Frameworks & drivers",
		arch_layer_4_desc: "Express, Fastify, Prisma, Redis  un échafaudage remplaçable autour d'un noyau stable.",
		arch_ring_4: "Frameworks",
		arch_ring_3: "Adapters",
		arch_ring_2: "Cas d'usage",
		arch_ring_1: "Entités",
		dx_eyebrow: "Expérience développeur",
		dx_title: "Des décorateurs qui disent ce qu'ils font.",
		dx_intro_post: ". Trois décorateurs, un câblage prévisible, zéro magie. Lisez le code, et l'analyseur statique vous dira si vos dépendances pointent dans le bon sens.",
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
		cta_lede: "Ouvrez la doc, échafaudez un projet, et écrivez votre premier cas d'usage en moins de cinq minutes.",
		cta_get_started: "Commencer",
		cta_concepts: "Lire les concepts",
		foot_brand_desc: "Un framework TypeScript robuste pour des backends construits autour de la Clean Architecture. Sous licence MIT, open source pour toujours.",
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
		docs_lede: "Un framework Node.js robuste et entièrement typé, construit sur Express dans l'optique de garder votre logique métier propre, testable et indépendante de l'infrastructure qui l'entoure.",
		intro_what: "Qu'est-ce qu'OptiCoreJS ?",
		intro_p1: "OptiCoreJS est un framework robuste pour la création d'applications serveur Node.js à la fois performantes et évolutives. Construit sur le moteur de routage d'Express.js, il propose un environnement entièrement typé grâce à TypeScript. Il mêle avec souplesse les paradigmes de la programmation orientée objet (POO) et fonctionnelle (PF), tout en s'inspirant des meilleures pratiques modernes en matière d'architecture logicielle.",
		intro_express: "Compatibilité Express",
		intro_p2: "Bien qu'il offre un niveau d'abstraction supérieur à celui d'Express, OptiCoreJS expose directement ses API natives. Vous bénéficiez ainsi d'un accès complet à tout l'écosystème Express, sans jamais compromettre la structure de votre application.",
		intro_modules: "Feature Modules & Injection de dépendances",
		intro_p3: "OptiCoreJS intègre son propre conteneur d'injection de dépendances et organise les fonctionnalités en feature modules, faisant de la modularité une priorité de premier ordre. Chaque module encapsule ses entités, cas d'usage, ports et bindings d'adapters autour d'un contexte borné unique.",
		intro_db: "Orchestrateur de base de données",
		intro_p4: "Doté d'un orchestrateur de bases de données, il vous permet de choisir librement la base de données souhaitée parmi une liste proposée. L'orchestrateur l'installe, la configure et, via l'ORM de votre choix, vous aide à générer en ligne de commande des modèles, qu'ils soient simples ou complexes, avec prise en charge complète des relations.",
		intro_devex: "Hot Reload & Journalisation",
		intro_p5: "OptiCoreJS propose un hot reload intégré et enregistre toutes vos actions applicatives grâce à un logger entièrement configurable  contrôlez les niveaux, les transports et les formats selon votre environnement.",
		intro_open: "Architecture ouverte",
		intro_p6_a: "Malgré cette philosophie structurée, OptiCoreJS reste totalement ouvert : vous pouvez librement définir votre propre architecture, votre conteneur d'injection ou votre système de journalisation, sans jamais vous sentir enfermé ni frustré.",
		intro_p6_b: "Son architecture isole naturellement chaque domaine métier, garantissant ainsi un code testable et réutilisable dans toute votre application.",
		intro_callout_b: "Vous gardez toujours le contrôle.",
		intro_callout: " OptiCoreJS n'impose jamais une seule façon de faire. Architecture, DI, journalisation  tout est remplaçable. Vous décidez, le framework s'adapte.",
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
		docs_callout_1: " Si vous pensez déjà en modules, services et contrôleurs, le saut conceptuel est minime. Le grand changement : la logique métier vit dans des cas d'usage purs, pas dans des services liés à HTTP.",
		docs_install: "Installation",
		docs_install_p: "Échafaudez un nouveau projet avec le starter officiel. La CLI met en place TypeScript, le runtime, des adapters d'exemple et une suite de tests qui passe  clé en main.",
		docs_install_after_a: "Le starter livre un module ",
		docs_install_after_b: " d'exemple qui démontre les quatre couches  supprimez-le quand vous serez à l'aise.",
		docs_first_module: "Votre premier module",
		docs_first_module_p: "Un module OptiCore regroupe entités, cas d'usage, ports et bindings d'adapters autour d'un seul contexte borné. Créez un nouveau fichier :",
		docs_use_case_p: "Écrivez maintenant le cas d'usage. Les cas d'usage sont de la pure orchestration  ils reçoivent un DTO, parlent aux entités et aux ports, et renvoient un résultat. Ils ne touchent jamais directement HTTP, la base de données, ou l'horloge.",
		docs_use_case_after_a: "Le ",
		docs_use_case_after_b: " est volontairement une interface  en production vous le liez à un adapter d'horloge système, en tests à une horloge figée. Le cas d'usage n'a pas à le savoir.",
		docs_presenter_p: "Le port présentateur définit la forme que prend la sortie du cas d'usage avant d'atteindre le consommateur. Parce que le cas d'usage ne dépend que de l'interface, il reste totalement découplé des préoccupations HTTP ou de sérialisation  le présentateur concret est câblé au niveau de l'infrastructure.",
		docs_repo_p: "Le port repository est la frontière entre votre logique applicative et la base de données. Le cas d'usage ne parle qu'à cette interface  le SQL, l'ORM ou le store in-memory se trouve derrière, dans la couche infrastructure.",
		docs_service_p: "Le port service regroupe les opérations transverses qui dépassent le simple CRUD  notifications, exports, orchestration entre agrégats. Le déclarer comme interface garde le cas d'usage testable et l'implémentation concrète interchangeable.",
		docs_dto_p: "Les DTOs définissent le contrat de données entre la couche HTTP et vos cas d'usage. Ils gardent le modèle de domaine privé  le monde extérieur ne voit jamais que les champs que vous exposez explicitement.",
		docs_structure: "Structure du projet",
		docs_structure_p: "OptiCoreJS supporte 4 structures de projet selon vos besoins  de la Clean Architecture complète à une organisation légère à plat. Choisissez celle qui correspond à votre contexte :",
		docs_callout_2_b: "Tout l'arbre en une commande.",
		docs_callout_2_a: " Lancez ",
		docs_callout_2_c: " et choisissez « Full CLEAN Architecture » pour générer les 13 fichiers  entité, cas d'usage, ports, DTO, contrôleur et routes  déjà câblés et prêts à modifier.",
		docs_running: "Lancer l'application",
		docs_running_p: "Démarrez l'app depuis une racine de composition unique. C'est le seul fichier de votre codebase qui connaît à la fois votre logique métier et le framework qui l'exécute.",
		docs_running_after_a: "Allez sur ",
		docs_running_after_b: " et vous devriez voir votre salutation revenir, gracieusement servie par l'adapter Fastify auto-monté.",
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
		cc_lede: "OptiCoreJS n'a pas de système de modules à base de décorateurs  les couches Clean Architecture ci-dessous s'obtiennent avec de simples classes TypeScript, des fonctions factory et une poignée de packages dédiés : opticore-router pour le routage, opticore-dependency-inject pour le câblage, et le générateur feature-clean-module pour le reste.",
		cc_entities_h: "Entités",
		cc_entities_p: "Les entités sont de simples classes TypeScript générées sous domain/entities par le générateur feature-clean-module. Elles portent vos règles métier et invariants  champs privés, validation explicite dans le constructeur, aucun décorateur ORM, aucun import du framework.",
		cc_uc_h: "Cas d'usage",
		cc_uc_p: "Un cas d'usage orchestre une seule intention utilisateur. Il reçoit des données, parle à un port repository, et renvoie un DTO mappé. Il n'importe jamais Express, un driver de base de données, ou opticore-router directement  cela vit dans la couche infrastructure.",
		cc_ports_h: "Ports & Adapters",
		cc_ports_p: "Les ports sont les interfaces déclarées sous application/ports  repositories, presenters, services. Les adapters les implémentent dans la couche infrastructure, par exemple un repository Postgres construit sur le QueryBuilder fluide d'opticore-postgres.",
		cc_routing_h: "Routing & Contrôleurs",
		cc_routing_p: "opticore-router transforme un simple tableau de configuration de routes en routeur Express, sans jamais appeler app.get()/app.post() à la main. Chaque handler reçoit un unique ICustomContext au lieu de (req, res, next), et OpticoreRegisterRouter agrège tous les routeurs de features avant le démarrage de l'app.",
		cc_di_h: "Injection de dépendances",
		cc_di_p: "opticore-dependency-inject embarque SContainer, un conteneur minimal avec des portées singleton/transient. Enregistrez vos factories une fois, puis résolvez des instances entièrement câblées n'importe où dans votre app  le conteneur construit le graphe pour que vos cas d'usage n'aient jamais à faire new eux-mêmes.",
		cc_legacy_b: "Vous cherchez un package @opticore/core ? ",
		cc_legacy: "Il n'y en a pas, volontairement. Un ancien package opticore-core-module existe encore mais est remplacé par la combinaison présentée sur cette page, à ne pas utiliser dans un nouveau projet.",
		feat_title: "Fonctionnalités",
		feat_devtools_h: "Outils développeur",
		feat_devtools_p: "Trois CLI couvrent le cycle de vie du projet : opticore-installer échafaude un nouveau projet depuis un template de départ, create-feature-module (de feature-clean-module) génère des modules de fonctionnalité à l'intérieur, et app-manager (opticore-process-manager) exécute et surveille des processus longue durée depuis un tableau de bord en direct.",
		feat_devtools_p2: "En développement, opticore-watcher redémarre votre serveur à chaque changement de code et recharge à chaud les fichiers .env/.json  aucun redémarrage nécessaire pour les modifications de configuration seules.",
		feat_logger_h: "Logger",
		feat_logger_p: "opticore-logger fournit LoggerCore, un logger à niveaux (success/info/warn/error/debug) avec des transports console, fichier rotatif et distant enfichables. Sa configuration est construite par loggerConfig() d'opticore-webapp-core, qui lit les champs liés aux logs depuis opticore-env-access.",
		feat_env_h: "Environnement",
		feat_env_p: "opticore-env-access centralise le chargement du .env. getEnvironmentValue() valide que le fichier existe, le charge, et renvoie un objet IEnvVariables entièrement typé  tous les autres packages lisent leur configuration via cette même fonction.",
		feat_validation_h: "Validation",
		feat_validation_p: "opticore-validator fonctionne par schéma, pas par décorateurs : décrivez chaque champ comme un tableau d'objets règles, puis appelez validate() pour récupérer une correspondance champ → messages d'erreur, prête à transmettre à ResponseHandler.error().",
		helpers_title: "Helpers",
		helpers_http_h: "Réponses HTTP",
		helpers_http_p: "opticore-http-response standardise chaque réponse JSON : ResponseHandler.success()/error() pour l'enveloppe, HttpExceptionService pour les erreurs HTTP typées, et une enum HttpStatusCode exhaustive utilisée dans tout l'écosystème.",
		helpers_postgres_h: "Bases de données",
		helpers_postgres_p: "Trois drivers frères couvrent les bases de données majeures  opticore-postgres et opticore-mongodb embarquent chacun un QueryBuilder fluide, tandis qu'opticore-mysqldb expose des méthodes de type repository (insert/update/delete/find) directement sur le driver. Choisissez-en un : ils ne partagent pas d'abstraction commune, changer de base implique de retoucher vos adapters repository.",
		helpers_orm_p: "Vous préférez passer par un ORM ? opticore-orm-orchestrator est une CLI séparée qui échafaude des modèles natifs Prisma, TypeORM, Drizzle, MikroORM ou Sequelize  elle n'encapsule pas les drivers ci-dessus, elle génère les fichiers de schéma attendus par chaque ORM.",
		helpers_redis_h: "Cache HTTP",
		helpers_redis_p: "opticore-cache est un cache de réponses HTTP autonome  pas un client Redis. HttpCacheFactory.create() vous donne getWithCache()/postWithCache() adossés à un stockage mémoire, disque, ou hybride, avec un TTL par appel et une invalidation par motif.",
		helpers_queue_h: "API Gateway",
		helpers_queue_p: "opticore-api-gateway est un reverse proxy avec routage dynamique, quatre stratégies de répartition de charge, des circuit breakers par route et des registres de services avec health checks. Lancez-le en autonome, ou passez gateway.getOpticoreRoutes() à WebServer.onStartServer() pour le monter dans une app existante.",
		helpers_security_p: "opticore-asymmetric-cryption encapsule signature/vérification/chiffrement/déchiffrement RSA derrière deux services directionnels (clé publique d'abord, ou clé privée d'abord). Générez une paire de clés une fois avec npx opticore-gen-keys, puis lisez les fichiers PEM à l'exécution.",
		config_title: "Configuration",
		config_service_h: "Service de configuration",
		config_service_p: "getEnvironmentValue() d'opticore-env-access est le point d'entrée unique que tous les packages utilisent pour lire la configuration. Il résout le chemin du .env, valide qu'il existe, le charge, et renvoie un objet typé  fini les lectures éparpillées de process.env.",
		config_env_h: "Variables d'environnement",
		config_env_p: "La forme typée IEnvVariables couvre l'hôte/port de l'app, les identifiants de base de données, la locale, la journalisation (indicateurs d'activation et niveaux par transport), le réglage du hot-reload, et la barre d'outils profiler  un échantillon représentatif ci-dessous, avec le nom réel de chaque variable d'env.",
		config_yaml_h: "YAML",
		config_yaml_p: "YamlParsing d'opticore-webapp-core charge des fichiers structurés  options CORS, feature flags  relatifs à la racine du projet. C'est un parseur léger et propre au framework, pas une implémentation complète de la spec YAML.",
		config_i18n_h: "Traductions (i18n)",
		config_i18n_p: "Deux couches gèrent les messages localisés : opticore-translator est le moteur bas niveau qui fusionne les fichiers message.translation.<locale>.json et interpole les {params}, tandis qu'opticore-loader-translation résout les traductions embarquées d'un package installé par son nom, pour que chaque package puisse localiser ses propres erreurs et logs.",
		comp_title: "Composants",
		comp_middlewares_h: "Middlewares",
		comp_middlewares_p: "Les middlewares se branchent sur le pipeline de requêtes avec une signature standard façon Express (req, res, next). opticore-api-gateway en fournit des prêts à l'emploi (Auth, RateLimit, Logging, Validation) ainsi qu'une classe BaseMiddleware à étendre, et opticore-webapp-core ajoute un parseur à tampon de corps brut (MBodyParser) pour le serveur cœur du framework.",
		comp_interceptors_h: "Intercepteurs",
		comp_interceptors_p: "opticore-request-call-event s'accroche à l'événement request du serveur HTTP sous-jacent pour journaliser chaque cycle requête/réponse  méthode, statut, timing, sortie colorée  indépendamment de vos handlers de route. C'est ce qui alimente la sortie console que vous voyez au démarrage du WebServer du framework.",
		comp_guards_h: "Guards",
		comp_guards_p: "L'authentification au niveau des routes est un troisième argument, pas un décorateur : passez une TAuthenticatorFunction compatible Passport à OpticoreRoutingFactory.routes(), et opticore-router l'exécute avant tout handler de cette collection.",
		comp_exceptions_h: "Gestion des exceptions",
		comp_exceptions_p: "opticore-catch-exception-error est le filet de sécurité du framework à l'échelle du processus. StackTraceError est la classe d'erreur typée et compatible HTTP utilisée dans tous les packages ; ServerListenEventError la relie aux événements uncaughtException, unhandledRejection et aux signaux d'arrêt de Node, pour qu'aucun crash ne passe inaperçu.",
		philo_title: "Philosophie",
		philo_p1: "Ces dernières années, Node.js a fait de JavaScript un langage universel, aussi bien côté frontend que backend. Des projets comme Angular, React ou Vue ont révolutionné la productivité frontend. Mais côté serveur, malgré une multitude de bibliothèques et d'outils performants, le véritable problème de l'architecture reste trop souvent non résolu.",
		philo_p2: "OptiCoreJS répond précisément à ce vide. Il propose une architecture applicative prête à l'emploi, inspirée de la Clean Architecture : contrôleurs, usecase, entités et interfaces sont strictement découplés. Cette séparation offre une testabilité hors pair et une maintenabilité qui résiste à la croissance du code.",
		philo_p3: "Nous nous sommes nourris de ce qui se fait de mieux dans l'écosystème : l'élégance modulaire de NestJS, la philosophie « convention plutôt que configuration » d'AdonisJS, et la clarté architecturale de FoalTS. Le résultat est un hybride unique, toute la liberté d'Express, la puissance structurelle d'un framework entreprise, et la possibilité constante d'y intégrer votre propre vision architecturale.",
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
		toc_next: "Étapes suivantes"
	}
};
//#endregion
//#region app/infrastructure/persistence/localStorage.ts
function getItem(key) {
	if (typeof localStorage === "undefined") return null;
	return localStorage.getItem(key);
}
function setItem(key, value) {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem(key, value);
}
//#endregion
//#region app/application/hooks/useLang.ts
function useLang() {
	const [lang, setLangState] = useState(() => {
		return getItem("opticore-lang") === "fr" ? "fr" : "en";
	});
	useEffect(() => {
		setItem("opticore-lang", lang);
		if (typeof document !== "undefined") document.documentElement.lang = lang;
		window.dispatchEvent(new CustomEvent("opticore-lang", { detail: lang }));
	}, [lang]);
	useEffect(() => {
		const handler = (e) => {
			const lang = e.detail;
			setLangState(lang);
		};
		window.addEventListener("opticore-lang", handler);
		return () => window.removeEventListener("opticore-lang", handler);
	}, []);
	return [
		lang,
		setLangState,
		TRANSLATIONS[lang] ?? TRANSLATIONS.en
	];
}
//#endregion
//#region app/application/hooks/useTweaks.ts
function useTweaks(defaults) {
	const [values, setValues] = useState(defaults);
	return [values, useCallback((keyOrEdits, val) => {
		const edits = typeof keyOrEdits === "object" && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits]: val };
		setValues((prev) => ({
			...prev,
			...edits
		}));
		if (typeof window !== "undefined") {
			window.parent.postMessage({
				type: "__edit_mode_set_keys",
				edits
			}, "*");
			window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
		}
	}, [])];
}
//#endregion
//#region app/presentation/components/shared/Icon.tsx
function Icon({ name, size = 18, ...rest }) {
	const paths = {
		arrow: /* @__PURE__ */ jsx("path", {
			d: "M5 12h14M13 6l6 6-6 6",
			stroke: "currentColor",
			strokeWidth: "2",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		search: /* @__PURE__ */ jsxs("g", {
			stroke: "currentColor",
			strokeWidth: "2",
			fill: "none",
			strokeLinecap: "round",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "11",
				cy: "11",
				r: "7"
			}), /* @__PURE__ */ jsx("path", { d: "M21 21l-4.3-4.3" })]
		}),
		sun: /* @__PURE__ */ jsxs("g", {
			stroke: "currentColor",
			strokeWidth: "2",
			fill: "none",
			strokeLinecap: "round",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}), /* @__PURE__ */ jsx("path", { d: "M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" })]
		}),
		moon: /* @__PURE__ */ jsx("path", {
			d: "M21 13a9 9 0 11-9-9c0 5 4 9 9 9z",
			stroke: "currentColor",
			strokeWidth: "2",
			fill: "none",
			strokeLinejoin: "round"
		}),
		github: /* @__PURE__ */ jsx("path", {
			d: "M12 1.5a10.5 10.5 0 00-3.32 20.46c.53.1.72-.23.72-.5v-1.84c-2.93.64-3.55-1.4-3.55-1.4-.48-1.21-1.17-1.53-1.17-1.53-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.79 0 0 .89-.28 2.9 1.08a10.04 10.04 0 015.27 0c2.01-1.36 2.9-1.08 2.9-1.08.57 1.45.21 2.52.1 2.79.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.92-4.81 5.18.38.33.71.97.71 1.96v2.91c0 .28.19.61.73.5A10.5 10.5 0 0012 1.5z",
			fill: "currentColor"
		}),
		book: /* @__PURE__ */ jsx("path", {
			d: "M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5zm2 14h12M8 7h6M8 11h6",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		cube: /* @__PURE__ */ jsx("path", {
			d: "M12 2L3 7v10l9 5 9-5V7l-9-5zM3 7l9 5 9-5M12 12v10",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round"
		}),
		layers: /* @__PURE__ */ jsx("path", {
			d: "M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round"
		}),
		bolt: /* @__PURE__ */ jsx("path", {
			d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round"
		}),
		shield: /* @__PURE__ */ jsx("path", {
			d: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round"
		}),
		test: /* @__PURE__ */ jsx("path", {
			d: "M9 2v6L4 18a2 2 0 002 3h12a2 2 0 002-3l-5-10V2M9 2h6M8 14h8",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		plug: /* @__PURE__ */ jsx("path", {
			d: "M9 2v6M15 2v6M6 8h12v4a6 6 0 01-12 0V8zM12 18v4",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		copy: /* @__PURE__ */ jsxs("g", {
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ jsx("rect", {
				x: "9",
				y: "9",
				width: "11",
				height: "11",
				rx: "2"
			}), /* @__PURE__ */ jsx("path", { d: "M5 15V5a2 2 0 012-2h10" })]
		}),
		check: /* @__PURE__ */ jsx("path", {
			d: "M5 12l5 5L20 7",
			stroke: "currentColor",
			strokeWidth: "2.5",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		info: /* @__PURE__ */ jsxs("g", {
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "9"
			}), /* @__PURE__ */ jsx("path", {
				d: "M12 8v.01M12 11v5",
				strokeLinecap: "round"
			})]
		}),
		chevron: /* @__PURE__ */ jsx("path", {
			d: "M9 6l6 6-6 6",
			stroke: "currentColor",
			strokeWidth: "2",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		docs: /* @__PURE__ */ jsx("path", {
			d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round"
		}),
		spark: /* @__PURE__ */ jsx("path", {
			d: "M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z",
			stroke: "currentColor",
			strokeWidth: "1.7",
			fill: "none",
			strokeLinejoin: "round"
		})
	};
	return /* @__PURE__ */ jsx("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		...rest,
		children: paths[name]
	});
}
//#endregion
//#region app/adapters/search/searchCorpus.ts
var SEARCH_CORPUS = [
	{
		group: "Getting Started",
		title: "Introduction",
		crumb: "docs › intro",
		href: "/docs#introduction"
	},
	{
		group: "Getting Started",
		title: "Installation",
		crumb: "docs › install",
		href: "/docs#installation"
	},
	{
		group: "Getting Started",
		title: "Your first module",
		crumb: "docs › first-module",
		href: "/docs#first-module"
	},
	{
		group: "Getting Started",
		title: "Project structure",
		crumb: "docs › structure",
		href: "/docs#structure"
	},
	{
		group: "Concepts",
		title: "Entities & Use Cases",
		crumb: "docs › concepts",
		href: "/docs#entities"
	},
	{
		group: "Concepts",
		title: "Adapters & Ports",
		crumb: "docs › concepts",
		href: "/docs#adapters"
	},
	{
		group: "Concepts",
		title: "Dependency injection",
		crumb: "docs › concepts",
		href: "/docs#di"
	},
	{
		group: "API",
		title: "@UseCase()",
		crumb: "api › decorators",
		href: "/docs#decorators"
	},
	{
		group: "API",
		title: "@Adapter()",
		crumb: "api › decorators",
		href: "/docs#decorators"
	},
	{
		group: "API",
		title: "createApp()",
		crumb: "api › runtime",
		href: "/docs#runtime"
	},
	{
		group: "Recipes",
		title: "Testing use cases",
		crumb: "recipes › testing",
		href: "/docs#testing"
	},
	{
		group: "Recipes",
		title: "PostgreSQL adapter",
		crumb: "recipes › data",
		href: "/docs#postgres"
	}
];
//#endregion
//#region app/presentation/components/shared/SearchDialog.tsx
function SearchDialog({ open, onClose }) {
	const [q, setQ] = useState("");
	const [focused, setFocused] = useState(0);
	const [, , t] = useLang();
	const inputRef = useRef(null);
	useEffect(() => {
		if (open) {
			setQ("");
			setFocused(0);
			setTimeout(() => inputRef.current?.focus(), 30);
		}
	}, [open]);
	const filtered = useMemo(() => {
		if (!q.trim()) return SEARCH_CORPUS.slice(0, 8);
		const lower = q.toLowerCase();
		return SEARCH_CORPUS.filter((r) => r.title.toLowerCase().includes(lower) || r.group.toLowerCase().includes(lower));
	}, [q]);
	const grouped = useMemo(() => {
		const out = {};
		filtered.forEach((r) => {
			out[r.group] = out[r.group] || [];
			out[r.group].push(r);
		});
		return out;
	}, [filtered]);
	useEffect(() => {
		if (!open) return;
		const handler = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setFocused((f) => Math.min(f + 1, filtered.length - 1));
			}
			if (e.key === "ArrowUp") {
				e.preventDefault();
				setFocused((f) => Math.max(f - 1, 0));
			}
			if (e.key === "Enter") {
				const r = filtered[focused];
				if (r) {
					onClose();
					window.location.href = r.href;
				}
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [
		open,
		filtered,
		focused,
		onClose
	]);
	if (!open) return null;
	let i = -1;
	return /* @__PURE__ */ jsx("div", {
		className: "search-overlay",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("div", {
			className: "search-dialog",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "search-input-wrap",
				children: [
					/* @__PURE__ */ jsx(Icon, {
						name: "search",
						size: 18,
						style: { color: "var(--fg-muted)" }
					}),
					/* @__PURE__ */ jsx("input", {
						ref: inputRef,
						value: q,
						onChange: (e) => {
							setQ(e.target.value);
							setFocused(0);
						},
						placeholder: t.search_placeholder
					}),
					/* @__PURE__ */ jsx("kbd", { children: "esc" })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "search-results",
				children: [Object.entries(grouped).map(([group, items]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "search-group-title",
					children: group
				}), items.map((r) => {
					i++;
					const idx = i;
					return /* @__PURE__ */ jsxs("div", {
						className: "search-result" + (idx === focused ? " focused" : ""),
						onMouseEnter: () => setFocused(idx),
						onClick: () => {
							onClose();
							window.location.href = r.href;
						},
						children: [
							/* @__PURE__ */ jsx(Icon, {
								name: "docs",
								size: 16
							}),
							/* @__PURE__ */ jsx("div", {
								className: "ttl",
								children: r.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "crumb",
								children: r.crumb
							}),
							/* @__PURE__ */ jsx(Icon, {
								name: "arrow",
								size: 14,
								className: "arrow"
							})
						]
					}, r.title);
				})] }, group)), filtered.length === 0 && /* @__PURE__ */ jsxs("div", {
					style: {
						padding: 32,
						textAlign: "center",
						color: "var(--fg-dim)",
						fontSize: 14
					},
					children: [
						t.search_empty,
						" \"",
						q,
						"\""
					]
				})]
			})]
		})
	});
}
//#endregion
//#region app/application/hooks/useTheme.ts
function useTheme() {
	const [theme, setThemeState] = useState("dark");
	useEffect(() => {
		if (document.documentElement.dataset.theme === "light") setThemeState("light");
	}, []);
	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);
	return [theme, setThemeState];
}
//#endregion
//#region app/presentation/components/shared/LangSwitch.tsx
function LangSwitch() {
	const [lang, setLang] = useLang();
	return /* @__PURE__ */ jsx("div", {
		style: {
			display: "inline-flex",
			gap: 0,
			border: "1px solid var(--line)",
			background: "var(--bg-elev)",
			borderRadius: 8,
			padding: 2,
			marginRight: 4
		},
		children: ["en", "fr"].map((l) => /* @__PURE__ */ jsx("button", {
			onClick: () => setLang(l),
			"aria-label": "Switch to " + l.toUpperCase(),
			style: {
				border: 0,
				background: lang === l ? "var(--bg)" : "transparent",
				color: lang === l ? "var(--fg)" : "var(--fg-muted)",
				fontFamily: "var(--font-mono)",
				fontSize: 11,
				letterSpacing: "0.06em",
				textTransform: "uppercase",
				padding: "5px 10px",
				borderRadius: 6,
				transition: "color .15s, background .15s",
				cursor: "pointer"
			},
			children: l
		}, l))
	});
}
//#endregion
//#region app/core/entities/version.ts
var APP_VERSIONS = ["1.0"];
var DEFAULT_APP_VERSION = APP_VERSIONS[0];
//#endregion
//#region app/application/hooks/useVersion.ts
function useVersion() {
	const [version, setVersionState] = useState(() => {
		const stored = getItem("opticore-version");
		return APP_VERSIONS.includes(stored ?? "") ? stored : DEFAULT_APP_VERSION;
	});
	useEffect(() => {
		setItem("opticore-version", version);
		window.dispatchEvent(new CustomEvent("opticore-version", { detail: version }));
	}, [version]);
	useEffect(() => {
		const handler = (e) => {
			const version = e.detail;
			setVersionState(version);
		};
		window.addEventListener("opticore-version", handler);
		return () => window.removeEventListener("opticore-version", handler);
	}, []);
	return [version, setVersionState];
}
//#endregion
//#region app/presentation/components/shared/VersionSwitch.tsx
function VersionSwitch() {
	const [version, setVersion] = useVersion();
	return /* @__PURE__ */ jsxs("span", {
		className: "brand-version",
		children: [/* @__PURE__ */ jsx("select", {
			className: "brand-version-select",
			value: version,
			"aria-label": "Select version",
			onChange: (e) => setVersion(e.target.value),
			children: APP_VERSIONS.map((v) => /* @__PURE__ */ jsxs("option", {
				value: v,
				children: ["v", v]
			}, v))
		}), /* @__PURE__ */ jsx(Icon, {
			name: "chevron",
			size: 10,
			className: "brand-version-chevron"
		})]
	});
}
//#endregion
//#region app/presentation/components/shared/TopNav.tsx
function TopNav({ active, onSearch }) {
	const [theme, setTheme] = useTheme();
	const [, , t] = useLang();
	return /* @__PURE__ */ jsx("header", {
		className: "nav",
		children: /* @__PURE__ */ jsxs("div", {
			className: "nav-inner",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "brand",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/",
						viewTransition: true,
						className: "brand-link",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/assets/opticorejs-logo.png",
							alt: "",
							className: "brand-logo"
						}), /* @__PURE__ */ jsxs("span", {
							className: "brand-name",
							children: ["OptiCore", /* @__PURE__ */ jsx("b", { children: "JS" })]
						})]
					}), /* @__PURE__ */ jsx(VersionSwitch, {})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "nav-links",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							viewTransition: true,
							className: "nav-link" + (active === "home" ? " active" : ""),
							children: t.nav_overview
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/docs",
							viewTransition: true,
							className: "nav-link" + (active === "docs" ? " active" : ""),
							children: t.nav_docs
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/docs#api",
							className: "nav-link",
							children: t.nav_api
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "nav-link",
							children: t.nav_recipes
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "nav-link",
							children: t.nav_tutorial
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "nav-link",
							children: t.nav_blog
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "nav-spacer" }),
				/* @__PURE__ */ jsxs("div", {
					className: "nav-actions",
					children: [
						/* @__PURE__ */ jsxs("button", {
							className: "search-trigger",
							onClick: onSearch,
							children: [
								/* @__PURE__ */ jsx(Icon, {
									name: "search",
									size: 14
								}),
								/* @__PURE__ */ jsx("span", {
									className: "label",
									children: t.nav_search
								}),
								/* @__PURE__ */ jsx("span", {
									className: "kbd",
									children: "⌘K"
								})
							]
						}),
						/* @__PURE__ */ jsx(LangSwitch, {}),
						/* @__PURE__ */ jsx("button", {
							className: "icon-btn",
							onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
							title: "Toggle theme",
							children: /* @__PURE__ */ jsx(Icon, {
								name: theme === "dark" ? "sun" : "moon",
								size: 16
							})
						}),
						/* @__PURE__ */ jsx("a", {
							className: "icon-btn",
							href: "https://github.com/guyzoum77/opticorejs.git",
							title: "GitHub",
							children: /* @__PURE__ */ jsx(Icon, {
								name: "github",
								size: 16
							})
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region app/presentation/components/tweaks/TweaksPanel.tsx
var TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;overflow-wrap:anywhere}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function twkIsLight(hex) {
	const h = String(hex).replace("#", "");
	const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, "0");
	const n = parseInt(x.slice(0, 6), 16);
	if (Number.isNaN(n)) return true;
	const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
	return r * 299 + g * 587 + b * 114 > 148e3;
}
function TwkCheck({ light }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 14 14",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M3 7.2 5.8 10 11 4.2",
			fill: "none",
			strokeWidth: "2.2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			stroke: light ? "rgba(0,0,0,.78)" : "#fff"
		})
	});
}
function TweaksPanel({ title = "Tweaks", noDeckControls = false, children }) {
	const [open, setOpen] = useState(false);
	const dragRef = useRef(null);
	const hasDeckStage = useMemo(() => typeof document !== "undefined" && !!document.querySelector("deck-stage"), []);
	const [railVisible, setRailVisible] = useState(() => {
		try {
			return typeof localStorage !== "undefined" && localStorage.getItem("deck-stage.railVisible") !== "0";
		} catch {
			return true;
		}
	});
	const toggleRail = (on) => {
		setRailVisible(on);
		window.postMessage({
			type: "__deck_rail_visible",
			on
		}, "*");
	};
	const offsetRef = useRef({
		x: 16,
		y: 16
	});
	const PAD = 16;
	const clampToViewport = useCallback(() => {
		const panel = dragRef.current;
		if (!panel) return;
		const w = panel.offsetWidth, h = panel.offsetHeight;
		const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
		const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
		offsetRef.current = {
			x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
			y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
		};
		panel.style.right = offsetRef.current.x + "px";
		panel.style.bottom = offsetRef.current.y + "px";
	}, []);
	useEffect(() => {
		if (!open) return;
		clampToViewport();
		if (typeof ResizeObserver === "undefined") {
			window.addEventListener("resize", clampToViewport);
			return () => window.removeEventListener("resize", clampToViewport);
		}
		const ro = new ResizeObserver(clampToViewport);
		ro.observe(document.documentElement);
		return () => ro.disconnect();
	}, [open, clampToViewport]);
	useEffect(() => {
		const onMsg = (e) => {
			const type = e?.data?.type;
			if (type === "__activate_edit_mode") setOpen(true);
			else if (type === "__deactivate_edit_mode") setOpen(false);
		};
		window.addEventListener("message", onMsg);
		window.parent.postMessage({ type: "__edit_mode_available" }, "*");
		return () => window.removeEventListener("message", onMsg);
	}, []);
	const dismiss = () => {
		setOpen(false);
		window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
	};
	const onDragStart = (e) => {
		const panel = dragRef.current;
		if (!panel) return;
		const r = panel.getBoundingClientRect();
		const sx = e.clientX, sy = e.clientY;
		const startRight = window.innerWidth - r.right;
		const startBottom = window.innerHeight - r.bottom;
		const move = (ev) => {
			offsetRef.current = {
				x: startRight - (ev.clientX - sx),
				y: startBottom - (ev.clientY - sy)
			};
			clampToViewport();
		};
		const up = () => {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseup", up);
		};
		window.addEventListener("mousemove", move);
		window.addEventListener("mouseup", up);
	};
	if (!open) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("style", { children: TWEAKS_STYLE }), /* @__PURE__ */ jsxs("div", {
		ref: dragRef,
		className: "twk-panel",
		"data-noncommentable": "",
		style: {
			right: offsetRef.current.x,
			bottom: offsetRef.current.y
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "twk-hd",
			onMouseDown: onDragStart,
			children: [/* @__PURE__ */ jsx("b", { children: title }), /* @__PURE__ */ jsx("button", {
				className: "twk-x",
				"aria-label": "Close tweaks",
				onMouseDown: (e) => e.stopPropagation(),
				onClick: dismiss,
				children: "✕"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "twk-body",
			children: [hasDeckStage && !noDeckControls && /* @__PURE__ */ jsx(TweakSection, {
				label: "Deck",
				children: /* @__PURE__ */ jsx(TweakToggle, {
					label: "Thumbnail rail",
					value: railVisible,
					onChange: toggleRail
				})
			}), children]
		})]
	})] });
}
function TweakSection({ label, children }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "twk-sect",
		children: label
	}), children] });
}
function TweakRow({ label, value, children, inline = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: inline ? "twk-row twk-row-h" : "twk-row",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "twk-lbl",
			children: [/* @__PURE__ */ jsx("span", { children: label }), value != null && /* @__PURE__ */ jsx("span", {
				className: "twk-val",
				children: value
			})]
		}), children]
	});
}
function TweakToggle({ label, value, onChange }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "twk-row twk-row-h",
		children: [/* @__PURE__ */ jsx("div", {
			className: "twk-lbl",
			children: /* @__PURE__ */ jsx("span", { children: label })
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "twk-toggle",
			"data-on": value ? "1" : "0",
			role: "switch",
			"aria-checked": value,
			onClick: () => onChange(!value),
			children: /* @__PURE__ */ jsx("i", {})
		})]
	});
}
function TweakRadio({ label, value, options, onChange }) {
	const trackRef = useRef(null);
	const [dragging, setDragging] = useState(false);
	const valueRef = useRef(value);
	valueRef.current = value;
	const labelLen = (o) => String(typeof o === "object" ? o.label : o).length;
	if (!(options.reduce((m, o) => Math.max(m, labelLen(o)), 0) <= ({
		2: 16,
		3: 10
	}[options.length] ?? 0))) return /* @__PURE__ */ jsx(TweakSelect, {
		label,
		value,
		options,
		onChange
	});
	const opts = options.map((o) => typeof o === "object" ? o : {
		value: o,
		label: o
	});
	const idx = Math.max(0, opts.findIndex((o) => o.value === value));
	const n = opts.length;
	const segAt = (clientX) => {
		if (!trackRef.current) return value;
		const r = trackRef.current.getBoundingClientRect();
		const inner = r.width - 4;
		const i = Math.floor((clientX - r.left - 2) / inner * n);
		return opts[Math.max(0, Math.min(n - 1, i))].value;
	};
	const onPointerDown = (e) => {
		setDragging(true);
		const v0 = segAt(e.clientX);
		if (v0 !== valueRef.current) onChange(v0);
		const move = (ev) => {
			if (!trackRef.current) return;
			const v = segAt(ev.clientX);
			if (v !== valueRef.current) onChange(v);
		};
		const up = () => {
			setDragging(false);
			window.removeEventListener("pointermove", move);
			window.removeEventListener("pointerup", up);
		};
		window.addEventListener("pointermove", move);
		window.addEventListener("pointerup", up);
	};
	return /* @__PURE__ */ jsx(TweakRow, {
		label,
		children: /* @__PURE__ */ jsxs("div", {
			ref: trackRef,
			role: "radiogroup",
			onPointerDown,
			className: dragging ? "twk-seg dragging" : "twk-seg",
			children: [/* @__PURE__ */ jsx("div", {
				className: "twk-seg-thumb",
				style: {
					left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
					width: `calc((100% - 4px) / ${n})`
				}
			}), opts.map((o) => /* @__PURE__ */ jsx("button", {
				type: "button",
				role: "radio",
				"aria-checked": o.value === value,
				children: o.label
			}, o.value))]
		})
	});
}
function TweakSelect({ label, value, options, onChange }) {
	return /* @__PURE__ */ jsx(TweakRow, {
		label,
		children: /* @__PURE__ */ jsx("select", {
			className: "twk-field",
			value,
			onChange: (e) => onChange(e.target.value),
			children: options.map((o) => {
				const v = typeof o === "object" ? o.value : o;
				return /* @__PURE__ */ jsx("option", {
					value: v,
					children: typeof o === "object" ? o.label : o
				}, v);
			})
		})
	});
}
function TweakColor({ label, value, options, onChange }) {
	if (!options || !options.length) return /* @__PURE__ */ jsxs("div", {
		className: "twk-row twk-row-h",
		children: [/* @__PURE__ */ jsx("div", {
			className: "twk-lbl",
			children: /* @__PURE__ */ jsx("span", { children: label })
		}), /* @__PURE__ */ jsx("input", {
			type: "color",
			className: "twk-swatch",
			value: Array.isArray(value) ? value[0] : value,
			onChange: (e) => onChange(e.target.value)
		})]
	});
	const key = (o) => String(JSON.stringify(o)).toLowerCase();
	const cur = key(value);
	return /* @__PURE__ */ jsx(TweakRow, {
		label,
		children: /* @__PURE__ */ jsx("div", {
			className: "twk-chips",
			role: "radiogroup",
			children: options.map((o, i) => {
				const colors = Array.isArray(o) ? o : [o];
				const [hero, ...rest] = colors;
				const sup = rest.slice(0, 4);
				const on = key(o) === cur;
				return /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "twk-chip",
					role: "radio",
					"aria-checked": on,
					"data-on": on ? "1" : "0",
					"aria-label": colors.join(", "),
					title: colors.join(" · "),
					style: { background: hero },
					onClick: () => onChange(o),
					children: [sup.length > 0 && /* @__PURE__ */ jsx("span", { children: sup.map((c, j) => /* @__PURE__ */ jsx("i", { style: { background: c } }, j)) }), on && /* @__PURE__ */ jsx(TwkCheck, { light: twkIsLight(hero) })]
				}, i);
			})
		})
	});
}
//#endregion
//#region app/presentation/pages/landing/CodeLines.tsx
var CLS$1 = {
	com: "tk-com",
	key: "tk-key",
	cls: "tk-cls",
	fn: "tk-fn",
	str: "tk-str",
	dec: "tk-dec",
	num: "tk-num",
	mu: "tk-mu",
	t: "tk"
};
function CodeLines({ lines }) {
	return /* @__PURE__ */ jsx("div", {
		className: "terminal-body",
		children: lines.map((line, i) => {
			if (line[0] === "mix") {
				const tokens = line[1];
				return /* @__PURE__ */ jsx("div", { children: tokens.map((s, j) => /* @__PURE__ */ jsx("span", {
					className: CLS$1[s[0]],
					children: s[1]
				}, j)) }, i);
			}
			return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", {
				className: CLS$1[line[0]],
				children: line[1]
			}) }, i);
		})
	});
}
//#endregion
//#region app/presentation/pages/landing/Landing.tsx
var HERO_CODE_LINES = [
	["com", "// app/use-cases/create-order.use-case.ts"],
	["mix", [
		["key", "import"],
		["t", " { "],
		["cls", "UseCase"],
		["t", ", "],
		["cls", "Inject"],
		["t", " } "],
		["key", "from"],
		["t", " "],
		["str", "\"@opticore/core\""],
		["t", ";"]
	]],
	["t", "\xA0"],
	["mix", [["dec", "@UseCase"], ["t", "()"]]],
	["mix", [
		["key", "export class"],
		["t", " "],
		["cls", "CreateOrder"],
		["t", " {"]
	]],
	["mix", [
		["t", "  "],
		["key", "constructor"],
		["t", "("]
	]],
	["mix", [
		["t", "    "],
		["dec", "@Inject"],
		["t", "("],
		["str", "\"OrderRepo\""],
		["t", ") "],
		["key", "private"],
		["t", " repo: "],
		["cls", "OrderPort"],
		["t", ","]
	]],
	["mix", [
		["t", "    "],
		["dec", "@Inject"],
		["t", "("],
		["str", "\"Payment\""],
		["t", ") "],
		["key", "private"],
		["t", " pay: "],
		["cls", "PaymentPort"],
		["t", ","]
	]],
	["t", "  ) {}"],
	["t", "\xA0"],
	["mix", [
		["t", "  "],
		["key", "async"],
		["t", " "],
		["fn", "execute"],
		["t", "(input: "],
		["cls", "CreateOrderDTO"],
		["t", ") {"]
	]],
	["mix", [
		["t", "    "],
		["key", "const"],
		["t", " order = "],
		["cls", "Order"],
		["t", "."],
		["fn", "draft"],
		["t", "(input);"]
	]],
	["mix", [
		["t", "    "],
		["key", "await"],
		["t", " "],
		["key", "this"],
		["t", ".pay."],
		["fn", "capture"],
		["t", "(order.total);"]
	]],
	["mix", [
		["t", "    "],
		["key", "return"],
		["t", " "],
		["key", "this"],
		["t", ".repo."],
		["fn", "save"],
		["t", "(order."],
		["fn", "confirm"],
		["t", "());"]
	]],
	["t", "  }"],
	["t", "}"]
];
var MAIN_CODE_LINES = [
	["mix", [
		["key", "import"],
		["t", " { "],
		["fn", "createApp"],
		["t", " } "],
		["key", "from"],
		["t", " "],
		["str", "\"@opticore/core\""],
		["t", ";"]
	]],
	["mix", [
		["key", "import"],
		["t", " { "],
		["cls", "PostgresAdapter"],
		["t", " } "],
		["key", "from"],
		["t", " "],
		["str", "\"@opticore/postgres\""],
		["t", ";"]
	]],
	["mix", [
		["key", "import"],
		["t", " { "],
		["cls", "FastifyAdapter"],
		["t", " } "],
		["key", "from"],
		["t", " "],
		["str", "\"@opticore/fastify\""],
		["t", ";"]
	]],
	["mix", [
		["key", "import"],
		["t", " { "],
		["cls", "OrderModule"],
		["t", " } "],
		["key", "from"],
		["t", " "],
		["str", "\"./modules/order\""],
		["t", ";"]
	]],
	["t", "\xA0"],
	["mix", [
		["key", "const"],
		["t", " app = "],
		["key", "await"],
		["t", " "],
		["fn", "createApp"],
		["t", "({"]
	]],
	["mix", [
		["t", "  modules: ["],
		["cls", "OrderModule"],
		["t", "],"]
	]],
	["t", "  adapters: ["],
	["mix", [
		["t", "    "],
		["cls", "PostgresAdapter"],
		["t", "(process.env."],
		["cls", "DATABASE_URL"],
		["t", "),"]
	]],
	["mix", [
		["t", "    "],
		["cls", "FastifyAdapter"],
		["t", "({ port: "],
		["num", "3000"],
		["t", " }),"]
	]],
	["t", "  ],"],
	["t", "});"],
	["t", "\xA0"],
	["mix", [
		["key", "await"],
		["t", " app."],
		["fn", "listen"],
		["t", "();"]
	]],
	["com", "// → ✓ 12 use cases · 4 adapters · ready in 184ms"]
];
var TWEAK_DEFAULTS$6 = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function Landing() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [pkg, setPkg] = useState("npm");
	const [installCopied, setInstallCopied] = useState(false);
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const installCmd = {
		npm: "npm create opticore@latest my-app",
		pnpm: "pnpm create opticore my-app",
		yarn: "yarn create opticore my-app",
		bun: "bun create opticore my-app"
	};
	const copyInstall = () => {
		navigator.clipboard?.writeText(installCmd[pkg]);
		setInstallCopied(true);
		setTimeout(() => setInstallCopied(false), 1400);
	};
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS$6);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "home",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsx("section", {
			className: "hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "hero-inner",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "eyebrow",
						children: [
							/* @__PURE__ */ jsx("span", { className: "dot" }),
							" ",
							t.hero_eyebrow
						]
					}),
					/* @__PURE__ */ jsxs("h1", { children: [
						t.hero_title_a,
						/* @__PURE__ */ jsx("em", { children: t.hero_title_em }),
						t.hero_title_b
					] }),
					/* @__PURE__ */ jsx("p", {
						className: "lede",
						children: t.hero_lede
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "cta-row",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/docs",
							className: "btn btn-primary",
							children: [
								t.hero_cta_docs,
								" ",
								/* @__PURE__ */ jsx(Icon, {
									name: "arrow",
									size: 14,
									className: "arrow"
								})
							]
						}), /* @__PURE__ */ jsxs("a", {
							href: "https://github.com/guyzoum77/opticorejs.git",
							className: "btn btn-ghost",
							children: [
								/* @__PURE__ */ jsx(Icon, {
									name: "github",
									size: 14
								}),
								" ",
								t.hero_cta_github
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "code-tabs",
						style: { marginTop: 32 },
						children: [
							"npm",
							"pnpm",
							"yarn",
							"bun"
						].map((p) => /* @__PURE__ */ jsx("button", {
							className: pkg === p ? "active" : "",
							onClick: () => setPkg(p),
							children: p
						}, p))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "install-line",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "prompt",
								children: "$"
							}),
							/* @__PURE__ */ jsx("span", {
								style: { color: "var(--fg)" },
								children: installCmd[pkg]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: copyInstall,
								title: "Copy",
								children: /* @__PURE__ */ jsx(Icon, {
									name: installCopied ? "check" : "copy",
									size: 14
								})
							})
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "terminal",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "terminal-bar",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "dots",
								children: [
									/* @__PURE__ */ jsx("span", { className: "dot" }),
									/* @__PURE__ */ jsx("span", { className: "dot" }),
									/* @__PURE__ */ jsx("span", { className: "dot" })
								]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "filename",
								children: "create-order.use-case.ts"
							}),
							/* @__PURE__ */ jsx("div", { style: { width: 36 } })
						]
					}), /* @__PURE__ */ jsx(CodeLines, { lines: HERO_CODE_LINES })]
				})]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "trust",
			children: /* @__PURE__ */ jsxs("div", {
				className: "trust-inner",
				children: [/* @__PURE__ */ jsx("span", {
					className: "label",
					children: t.trust_label
				}), /* @__PURE__ */ jsx("div", { className: "marks" })]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "section-inner",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-head",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "section-eyebrow",
						children: t.pillars_eyebrow
					}), /* @__PURE__ */ jsxs("h2", { children: [
						t.pillars_title_a,
						/* @__PURE__ */ jsx("em", { children: t.pillars_title_em }),
						t.pillars_title_b
					] })] }), /* @__PURE__ */ jsx("p", { children: t.pillars_intro })]
				}), /* @__PURE__ */ jsx("div", {
					className: "pillars",
					children: [
						{
							num: "01",
							icon: "layers",
							title: t.pillar_1_title,
							body: t.pillar_1_body
						},
						{
							num: "02",
							icon: "plug",
							title: t.pillar_2_title,
							body: t.pillar_2_body
						},
						{
							num: "03",
							icon: "test",
							title: t.pillar_3_title,
							body: t.pillar_3_body
						},
						{
							num: "04",
							icon: "bolt",
							title: t.pillar_4_title,
							body: t.pillar_4_body
						}
					].map((p) => /* @__PURE__ */ jsxs("div", {
						className: "pillar",
						children: [/* @__PURE__ */ jsx("div", {
							className: "pillar-num",
							children: p.num
						}), /* @__PURE__ */ jsxs("div", {
							style: { marginTop: "auto" },
							children: [
								/* @__PURE__ */ jsx(Icon, {
									name: p.icon,
									size: 26,
									className: "pillar-icon"
								}),
								/* @__PURE__ */ jsx("h3", { children: p.title }),
								/* @__PURE__ */ jsx("p", { children: p.body })
							]
						})]
					}, p.num))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			style: { paddingTop: 0 },
			children: /* @__PURE__ */ jsxs("div", {
				className: "section-inner",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-head",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "section-eyebrow",
						children: t.arch_eyebrow
					}), /* @__PURE__ */ jsxs("h2", { children: [
						t.arch_title_a,
						/* @__PURE__ */ jsx("em", { children: t.arch_title_em }),
						t.arch_title_b
					] })] }), /* @__PURE__ */ jsx("p", { children: t.arch_intro })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "arch",
					children: [/* @__PURE__ */ jsx("div", {
						className: "arch-text",
						children: /* @__PURE__ */ jsxs("ul", {
							className: "item-list",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { className: "ring" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: t.arch_layer_1 }), /* @__PURE__ */ jsx("span", {
									className: "desc",
									children: t.arch_layer_1_desc
								})] })] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "ring",
									style: {
										background: "#ffb273",
										boxShadow: "0 0 0 4px rgba(255,178,115,0.18)"
									}
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: t.arch_layer_2 }), /* @__PURE__ */ jsx("span", {
									className: "desc",
									children: t.arch_layer_2_desc
								})] })] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "ring",
									style: {
										background: "#a4abc0",
										boxShadow: "0 0 0 4px rgba(164,171,192,0.18)"
									}
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: t.arch_layer_3 }), /* @__PURE__ */ jsx("span", {
									className: "desc",
									children: t.arch_layer_3_desc
								})] })] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "ring",
									style: {
										background: "#6b7290",
										boxShadow: "0 0 0 4px rgba(107,114,144,0.18)"
									}
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: t.arch_layer_4 }), /* @__PURE__ */ jsx("span", {
									className: "desc",
									children: t.arch_layer_4_desc
								})] })] })
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "arch-diagram",
						children: /* @__PURE__ */ jsxs("div", {
							className: "ring-stack",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "ring-layer l1",
									children: /* @__PURE__ */ jsx("span", {
										className: "label",
										children: t.arch_ring_4
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "ring-layer l2",
									children: /* @__PURE__ */ jsx("span", {
										className: "label",
										children: t.arch_ring_3
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "ring-layer l3",
									children: /* @__PURE__ */ jsx("span", {
										className: "label",
										children: t.arch_ring_2
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "ring-layer l4",
									children: t.arch_ring_1
								})
							]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			style: { paddingTop: 40 },
			children: /* @__PURE__ */ jsx("div", {
				className: "section-inner",
				children: /* @__PURE__ */ jsxs("div", {
					className: "code-show",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "desc-side",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "section-eyebrow",
								children: t.dx_eyebrow
							}),
							/* @__PURE__ */ jsx("h3", { children: t.dx_title }),
							/* @__PURE__ */ jsxs("p", { children: [
								/* @__PURE__ */ jsx("code", {
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--accent)"
									},
									children: "@UseCase()"
								}),
								",\xA0",
								/* @__PURE__ */ jsx("code", {
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--accent)"
									},
									children: "@Adapter()"
								}),
								",\xA0",
								/* @__PURE__ */ jsx("code", {
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--accent)"
									},
									children: "@Entity()"
								}),
								t.dx_intro_post
							] }),
							/* @__PURE__ */ jsxs("ul", {
								className: "feature-list",
								children: [
									/* @__PURE__ */ jsxs("li", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "check",
											children: "✓"
										}),
										" ",
										t.dx_feat_1
									] }),
									/* @__PURE__ */ jsxs("li", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "check",
											children: "✓"
										}),
										" ",
										t.dx_feat_2
									] }),
									/* @__PURE__ */ jsxs("li", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "check",
											children: "✓"
										}),
										" ",
										t.dx_feat_3
									] }),
									/* @__PURE__ */ jsxs("li", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "check",
											children: "✓"
										}),
										" ",
										t.dx_feat_4
									] })
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "terminal",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "terminal-bar",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "dots",
									children: [
										/* @__PURE__ */ jsx("span", { className: "dot" }),
										/* @__PURE__ */ jsx("span", { className: "dot" }),
										/* @__PURE__ */ jsx("span", { className: "dot" })
									]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "filename",
									children: "app/main.ts"
								}),
								/* @__PURE__ */ jsx("div", { style: { width: 36 } })
							]
						}), /* @__PURE__ */ jsx(CodeLines, { lines: MAIN_CODE_LINES })]
					})]
				})
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "stats",
			children: /* @__PURE__ */ jsxs("div", {
				className: "stats-inner",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "stat",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "num",
							children: ["74", /* @__PURE__ */ jsx("em", { children: "ms" })]
						}), /* @__PURE__ */ jsx("div", {
							className: "lbl",
							children: t.stat_1
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "stat",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "num",
							children: ["~28", /* @__PURE__ */ jsx("em", { children: "kb" })]
						}), /* @__PURE__ */ jsx("div", {
							className: "lbl",
							children: t.stat_2
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "stat",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "num",
							children: ["99.4", /* @__PURE__ */ jsx("em", { children: "%" })]
						}), /* @__PURE__ */ jsx("div", {
							className: "lbl",
							children: t.stat_3
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "stat",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "num",
							children: ["12", /* @__PURE__ */ jsx("em", { children: "k" })]
						}), /* @__PURE__ */ jsx("div", {
							className: "lbl",
							children: t.stat_4
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "cta-band",
			children: /* @__PURE__ */ jsxs("div", {
				className: "cta-band-inner",
				children: [
					/* @__PURE__ */ jsxs("h2", { children: [
						t.cta_title_a,
						/* @__PURE__ */ jsx("em", { children: t.cta_title_em }),
						t.cta_title_b
					] }),
					/* @__PURE__ */ jsx("p", { children: t.cta_lede }),
					/* @__PURE__ */ jsxs("div", {
						className: "cta-row center",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/docs",
							className: "btn btn-primary",
							children: [
								t.cta_get_started,
								" ",
								/* @__PURE__ */ jsx(Icon, {
									name: "arrow",
									size: 14,
									className: "arrow"
								})
							]
						}), /* @__PURE__ */ jsx("a", {
							href: "/docs#concepts",
							className: "btn btn-ghost",
							children: t.cta_concepts
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("footer", {
			className: "footer",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "footer-inner",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "footer-brand",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "brand",
							children: [/* @__PURE__ */ jsx("img", {
								src: "/assets/opticorejs-logo.png",
								alt: "",
								className: "brand-logo"
							}), /* @__PURE__ */ jsxs("span", {
								className: "brand-name",
								children: ["OptiCore", /* @__PURE__ */ jsx("b", { children: "JS" })]
							})]
						}), /* @__PURE__ */ jsx("p", { children: t.foot_brand_desc })]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: t.foot_docs }), /* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/docs#introduction",
							children: t.foot_intro
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/docs#installation",
							children: t.foot_install
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/docs#first-module",
							children: t.foot_first_module
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/docs#concepts",
							children: t.foot_concepts
						}) })
					] })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: t.foot_api }), /* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "@UseCase"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "@Adapter"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "@Entity"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "createApp"
						}) })
					] })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: t.foot_community }), /* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "GitHub"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "Discord"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "Stack Overflow"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: "RFCs"
						}) })
					] })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: t.foot_about }), /* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: t.foot_roadmap
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: t.foot_changelog
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: t.foot_sponsors
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							children: t.foot_brand
						}) })
					] })] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ jsx("span", { children: t.foot_copy }), /* @__PURE__ */ jsx("span", { children: t.foot_build })]
			})]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$6
});
function meta$6() {
	return [{ title: "OptiCoreJS — A robust framework for Clean Architecture" }, {
		name: "description",
		content: "TypeScript framework for backends built around Clean Architecture."
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(Landing, {});
});
//#endregion
//#region app/presentation/pages/docs/DocsSidebar.tsx
function DocsSidebar({ activeId, onScrollTo }) {
	const [, , t] = useLang();
	const { pathname } = useLocation();
	const SIDEBAR = [
		{
			group: t.sb_started,
			path: "/docs",
			items: [{
				id: "introduction",
				label: t.sb_intro
			}, {
				id: "installation",
				label: t.sb_install
			}]
		},
		{
			group: t.sb_concepts,
			path: "/docs/core-concepts",
			items: [
				{
					id: "entities",
					label: t.sb_entities
				},
				{
					id: "use-cases",
					label: t.sb_uc
				},
				{
					id: "ports",
					label: t.sb_ports
				},
				{
					id: "routing",
					label: t.sb_routing
				},
				{
					id: "di",
					label: t.sb_di
				}
			]
		},
		{
			group: t.sb_features,
			path: "/docs/features",
			items: [
				{
					id: "first-module",
					label: t.sb_first,
					badge: t.sb_5min
				},
				{
					id: "structure",
					label: t.sb_struct
				},
				{
					id: "running",
					label: t.sb_running
				},
				{
					id: "devtools",
					label: t.sb_devtools
				},
				{
					id: "logger",
					label: t.sb_logger
				},
				{
					id: "environment",
					label: t.sb_environment
				},
				{
					id: "validation",
					label: t.sb_validation
				}
			]
		},
		{
			group: t.sb_helpers,
			path: "/docs/helpers",
			items: [
				{
					id: "http",
					label: t.sb_http
				},
				{
					id: "databases",
					label: t.sb_databases
				},
				{
					id: "cache",
					label: t.sb_cache
				},
				{
					id: "gateway",
					label: t.sb_gateway
				},
				{
					id: "security",
					label: t.sb_security
				}
			]
		},
		{
			group: t.sb_config,
			path: "/docs/config",
			items: [
				{
					id: "config-service",
					label: t.sb_config_service
				},
				{
					id: "env-vars",
					label: t.sb_env_vars
				},
				{
					id: "yaml",
					label: t.sb_yaml
				},
				{
					id: "i18n",
					label: t.sb_i18n
				}
			]
		},
		{
			group: t.sb_components,
			path: "/docs/components",
			items: [
				{
					id: "middlewares",
					label: t.sb_middlewares
				},
				{
					id: "interceptors",
					label: t.sb_interceptors
				},
				{
					id: "guards",
					label: t.sb_guards
				},
				{
					id: "exceptions",
					label: t.sb_exceptions
				}
			]
		}
	];
	const normPath = pathname.replace(/\/$/, "") || "/";
	return /* @__PURE__ */ jsx("aside", {
		className: "docs-side",
		children: SIDEBAR.map((group) => {
			const isCurrent = normPath === group.path.replace(/\/$/, "");
			return /* @__PURE__ */ jsxs("div", {
				className: "side-group",
				children: [/* @__PURE__ */ jsx(Link, {
					to: group.path,
					viewTransition: true,
					className: "title" + (isCurrent ? " active" : ""),
					children: group.group
				}), group.items.map((item) => isCurrent ? /* @__PURE__ */ jsxs("a", {
					href: "#" + item.id,
					onClick: onScrollTo(item.id),
					className: "side-link" + (activeId === item.id ? " active" : ""),
					children: [item.label, item.badge && /* @__PURE__ */ jsx("span", {
						className: "badge",
						children: item.badge
					})]
				}, item.id) : /* @__PURE__ */ jsxs(Link, {
					to: group.path + "#" + item.id,
					viewTransition: true,
					className: "side-link",
					children: [item.label, item.badge && /* @__PURE__ */ jsx("span", {
						className: "badge",
						children: item.badge
					})]
				}, item.id))]
			}, group.path);
		})
	});
}
//#endregion
//#region app/presentation/pages/docs/SyntaxCodeBlock.tsx
var CLS = {
	key: "tk-key",
	cls: "tk-cls",
	fn: "tk-fn",
	str: "tk-str",
	com: "tk-com",
	dec: "tk-dec",
	num: "tk-num",
	mu: "tk-mu",
	t: "tk"
};
var TS_KW = new Set([
	"import",
	"export",
	"from",
	"const",
	"let",
	"var",
	"class",
	"new",
	"async",
	"await",
	"return",
	"if",
	"else",
	"type",
	"interface",
	"extends",
	"implements",
	"public",
	"private",
	"protected",
	"readonly",
	"static",
	"abstract",
	"override",
	"as",
	"of",
	"in",
	"for",
	"while",
	"do",
	"switch",
	"case",
	"break",
	"continue",
	"throw",
	"try",
	"catch",
	"finally",
	"void",
	"null",
	"undefined",
	"true",
	"false",
	"function",
	"typeof",
	"instanceof",
	"default",
	"delete",
	"this",
	"super",
	"yield",
	"enum"
]);
var SH_KW = new Set([
	"cd",
	"run",
	"create",
	"dev",
	"install",
	"add",
	"init",
	"build",
	"start"
]);
function tokenizeTS(code) {
	const lines = code.split("\n");
	const result = [];
	let inBlock = false;
	for (const raw of lines) {
		const spans = [];
		let i = 0;
		while (i < raw.length) {
			if (inBlock) {
				const end = raw.indexOf("*/", i);
				if (end === -1) {
					spans.push({
						t: "com",
						s: raw.slice(i)
					});
					i = raw.length;
				} else {
					spans.push({
						t: "com",
						s: raw.slice(i, end + 2)
					});
					i = end + 2;
					inBlock = false;
				}
				continue;
			}
			if (raw[i] === "/" && raw[i + 1] === "/") {
				spans.push({
					t: "com",
					s: raw.slice(i)
				});
				break;
			}
			if (raw[i] === "/" && raw[i + 1] === "*") {
				const end = raw.indexOf("*/", i + 2);
				if (end === -1) {
					spans.push({
						t: "com",
						s: raw.slice(i)
					});
					inBlock = true;
					break;
				}
				spans.push({
					t: "com",
					s: raw.slice(i, end + 2)
				});
				i = end + 2;
				continue;
			}
			const q = raw[i];
			if (q === "\"" || q === "'" || q === "`") {
				let j = i + 1;
				while (j < raw.length && raw[j] !== q) {
					if (raw[j] === "\\") j++;
					j++;
				}
				spans.push({
					t: "str",
					s: raw.slice(i, j + 1)
				});
				i = j + 1;
				continue;
			}
			if (raw[i] === "@" && /[A-Za-z_]/.test(raw[i + 1] ?? "")) {
				let j = i + 1;
				while (j < raw.length && /[A-Za-z0-9_]/.test(raw[j])) j++;
				spans.push({
					t: "dec",
					s: raw.slice(i, j)
				});
				i = j;
				continue;
			}
			if (/[A-Za-z_$]/.test(raw[i])) {
				let j = i;
				while (j < raw.length && /[A-Za-z0-9_$]/.test(raw[j])) j++;
				const word = raw.slice(i, j);
				const type = TS_KW.has(word) ? "key" : /^[A-Z]/.test(word) ? "cls" : raw[j] === "(" ? "fn" : "t";
				spans.push({
					t: type,
					s: word
				});
				i = j;
				continue;
			}
			if (/[0-9]/.test(raw[i])) {
				let j = i;
				while (j < raw.length && /[0-9._xXa-fA-F]/.test(raw[j])) j++;
				spans.push({
					t: "num",
					s: raw.slice(i, j)
				});
				i = j;
				continue;
			}
			if (raw[i] === " " || raw[i] === "	") {
				let j = i;
				while (j < raw.length && (raw[j] === " " || raw[j] === "	")) j++;
				spans.push({
					t: "t",
					s: raw.slice(i, j)
				});
				i = j;
				continue;
			}
			spans.push({
				t: "mu",
				s: raw[i]
			});
			i++;
		}
		result.push(spans);
	}
	return result;
}
function tokenizeSH(code) {
	return code.split("\n").map((line) => {
		if (!line.trim()) return [{
			t: "t",
			s: ""
		}];
		const spans = [];
		let first = true;
		let i = 0;
		while (i < line.length) {
			if (line[i] === " ") {
				spans.push({
					t: "t",
					s: " "
				});
				i++;
				continue;
			}
			const q = line[i];
			if (q === "\"" || q === "'") {
				let j = i + 1;
				while (j < line.length && line[j] !== q) j++;
				spans.push({
					t: "str",
					s: line.slice(i, j + 1)
				});
				i = j + 1;
				continue;
			}
			let j = i;
			while (j < line.length && line[j] !== " " && line[j] !== "\"" && line[j] !== "'") j++;
			const word = line.slice(i, j);
			let type = first ? "fn" : word.startsWith("-") ? "key" : /@/.test(word) ? "str" : "t";
			if (SH_KW.has(word)) type = "key";
			spans.push({
				t: type,
				s: word
			});
			i = j;
			first = false;
		}
		return spans;
	});
}
function SyntaxCodeBlock({ tabs, codes, lang = "ts" }) {
	const [active, setActive] = useState(0);
	const [copied, setCopied] = useState(false);
	const copy = () => {
		navigator.clipboard?.writeText(codes[active]);
		setCopied(true);
		setTimeout(() => setCopied(false), 1400);
	};
	const lines = lang === "sh" ? tokenizeSH(codes[active]) : tokenizeTS(codes[active]);
	return /* @__PURE__ */ jsxs("div", {
		className: "codeblock",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "codeblock-head",
			children: [/* @__PURE__ */ jsx("div", {
				className: "codeblock-tabs",
				children: tabs ? tabs.map((tab, i) => /* @__PURE__ */ jsx("button", {
					className: i === active ? "active" : "",
					onClick: () => setActive(i),
					children: tab
				}, tab)) : /* @__PURE__ */ jsx("button", {
					className: "active",
					children: "code"
				})
			}), /* @__PURE__ */ jsxs("button", {
				className: "codeblock-copy" + (copied ? " copied" : ""),
				onClick: copy,
				children: [/* @__PURE__ */ jsx(Icon, {
					name: copied ? "check" : "copy",
					size: 12
				}), copied ? "copied" : "copy"]
			})]
		}), /* @__PURE__ */ jsx("pre", { children: lines.map((line, li) => /* @__PURE__ */ jsxs(Fragment$1, { children: [line.map((span, si) => /* @__PURE__ */ jsx("span", {
			className: CLS[span.t],
			children: span.s
		}, si)), li < lines.length - 1 && "\n"] }, li)) })]
	});
}
//#endregion
//#region app/presentation/pages/docs/Docs.tsx
var installNpm = `npm create opticore@latest my-app\ncd my-app\nnpm run dev`;
var installPnpm = `pnpm create opticore my-app\ncd my-app\npnpm dev`;
var installYarn = `yarn create opticore my-app\ncd my-app\nyarn dev`;
var TWEAK_DEFAULTS$5 = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function Docs() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [activeId, setActiveId] = useState("introduction");
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const TOC = [
		{
			id: "introduction",
			label: t.toc_intro
		},
		{
			id: "what",
			label: t.toc_what,
			indent: true
		},
		{
			id: "express",
			label: t.toc_express,
			indent: true
		},
		{
			id: "modules",
			label: t.toc_modules,
			indent: true
		},
		{
			id: "orchestrator",
			label: t.toc_db,
			indent: true
		},
		{
			id: "devex",
			label: t.toc_devex,
			indent: true
		},
		{
			id: "open",
			label: t.toc_open,
			indent: true
		},
		{
			id: "philosophy",
			label: t.toc_philo
		},
		{
			id: "prerequisites",
			label: t.toc_prereq
		},
		{
			id: "installation",
			label: t.toc_install
		},
		{
			id: "next",
			label: t.toc_next
		}
	];
	useEffect(() => {
		const ids = [
			"introduction",
			"what",
			"express",
			"modules",
			"orchestrator",
			"devex",
			"open",
			"philosophy",
			"prerequisites",
			"installation",
			"next"
		];
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-80px 0px -70% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS$5);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	const scrollTo = (id) => (e) => {
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
			setActiveId(id);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "docs",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "docs-shell",
			children: [
				/* @__PURE__ */ jsx(DocsSidebar, {
					activeId,
					onScrollTo: scrollTo
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "docs-body",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "crumb",
							children: [
								t.crumb,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.crumb_started,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.crumb_quick
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							id: "introduction",
							children: t.docs_title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "lede",
							children: t.docs_lede
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "what",
							children: t.intro_what
						}),
						/* @__PURE__ */ jsx("p", { children: t.intro_p1 }),
						/* @__PURE__ */ jsx("h2", {
							id: "express",
							children: t.intro_express
						}),
						/* @__PURE__ */ jsx("p", { children: t.intro_p2 }),
						/* @__PURE__ */ jsx("h2", {
							id: "modules",
							children: t.intro_modules
						}),
						/* @__PURE__ */ jsx("p", { children: t.intro_p3 }),
						/* @__PURE__ */ jsx("h2", {
							id: "orchestrator",
							children: t.intro_db
						}),
						/* @__PURE__ */ jsx("p", { children: t.intro_p4 }),
						/* @__PURE__ */ jsx("h2", {
							id: "devex",
							children: t.intro_devex
						}),
						/* @__PURE__ */ jsx("p", { children: t.intro_p5 }),
						/* @__PURE__ */ jsx("h2", {
							id: "open",
							children: t.intro_open
						}),
						/* @__PURE__ */ jsx("p", { children: t.intro_p6_a }),
						/* @__PURE__ */ jsx("p", { children: t.intro_p6_b }),
						/* @__PURE__ */ jsxs("div", {
							className: "callout",
							children: [/* @__PURE__ */ jsx(Icon, {
								name: "info",
								size: 20,
								className: "icon"
							}), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: t.intro_callout_b }), t.intro_callout] })]
						}),
						/* @__PURE__ */ jsx("h1", {
							id: "philosophy",
							style: { marginTop: "80px" },
							children: t.philo_title
						}),
						/* @__PURE__ */ jsx("p", { children: t.philo_p1 }),
						/* @__PURE__ */ jsx("p", { children: t.philo_p2 }),
						/* @__PURE__ */ jsx("p", { children: t.philo_p3 }),
						/* @__PURE__ */ jsx("h3", {
							id: "prerequisites",
							children: t.docs_prereq
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_prereq_intro }),
						/* @__PURE__ */ jsxs("ul", { children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: t.docs_prereq_1_a }), t.docs_prereq_1_b] }),
							/* @__PURE__ */ jsxs("li", { children: [
								t.docs_prereq_2_a,
								/* @__PURE__ */ jsx("code", { children: "npm" }),
								t.docs_prereq_2_b,
								/* @__PURE__ */ jsx("code", { children: "pnpm" }),
								t.docs_prereq_2_c,
								/* @__PURE__ */ jsx("code", { children: "yarn" }),
								t.docs_prereq_2_d,
								/* @__PURE__ */ jsx("code", { children: "bun" }),
								t.docs_prereq_2_e
							] }),
							/* @__PURE__ */ jsxs("li", { children: [
								t.docs_prereq_3_a,
								/* @__PURE__ */ jsx("strong", { children: t.docs_prereq_3_b }),
								t.docs_prereq_3_c
							] })
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "callout",
							children: [/* @__PURE__ */ jsx(Icon, {
								name: "info",
								size: 20,
								className: "icon"
							}), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: t.docs_callout_1_b }), t.docs_callout_1] })]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "installation",
							className: "major",
							children: t.docs_install
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_install_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: [
								"npm",
								"pnpm",
								"yarn"
							],
							codes: [
								installNpm,
								installPnpm,
								installYarn
							],
							lang: "sh"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							t.docs_install_after_a,
							/* @__PURE__ */ jsx("code", { children: "OrderModule" }),
							t.docs_install_after_b
						] }),
						/* @__PURE__ */ jsx("h2", {
							id: "next",
							children: t.docs_next
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_next_p }),
						/* @__PURE__ */ jsxs("ul", { children: [
							/* @__PURE__ */ jsxs("li", { children: [
								t.docs_next_1_a,
								/* @__PURE__ */ jsx("a", {
									href: "/docs/core-concepts",
									style: { color: "var(--accent)" },
									children: t.docs_next_1_b
								}),
								t.docs_next_1_c
							] }),
							/* @__PURE__ */ jsxs("li", { children: [
								t.docs_next_2_a,
								/* @__PURE__ */ jsx("a", {
									href: "/docs/features",
									style: { color: "var(--accent)" },
									children: t.docs_next_2_b
								}),
								t.docs_next_2_c
							] }),
							/* @__PURE__ */ jsxs("li", { children: [
								t.docs_next_3_a,
								/* @__PURE__ */ jsx("a", {
									href: "/docs/components",
									style: { color: "var(--accent)" },
									children: t.docs_next_3_b
								}),
								t.docs_next_3_c
							] })
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "page-foot",
							children: [/* @__PURE__ */ jsx("span", {}), /* @__PURE__ */ jsxs("a", {
								href: "/docs/core-concepts",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_next_link
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_concepts
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "docs-toc",
					children: [/* @__PURE__ */ jsx("h5", { children: t.docs_toc_label }), TOC.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#" + item.id,
						onClick: scrollTo(item.id),
						className: (activeId === item.id ? "active" : "") + (item.indent ? " indent" : ""),
						children: item.label
					}, item.id))]
				})
			]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/docs.tsx
var docs_exports = /* @__PURE__ */ __exportAll({
	default: () => docs_default,
	meta: () => meta$5
});
function meta$5() {
	return [{ title: "Quick Start — OptiCoreJS Documentation" }, {
		name: "description",
		content: "Get started with OptiCoreJS in under five minutes."
	}];
}
var docs_default = UNSAFE_withComponentProps(function DocsRoute() {
	return /* @__PURE__ */ jsx(Docs, {});
});
//#endregion
//#region app/presentation/pages/docs/CoreConcepts.tsx
var entityExample = `export class InvoiceEntity {
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
var useCaseExample = `import { IInvoiceRepository } from "../ports/repositories/invoice.repository.interface";
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
var portExample = `
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
}`;
var routingExample = `
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
var diExample = `import { SContainer, ContainerCore } from "opticore-dependency-inject";
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
var TWEAK_DEFAULTS$4 = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function CoreConcepts() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [activeId, setActiveId] = useState("entities");
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const TOC = [
		{
			id: "entities",
			label: t.sb_entities
		},
		{
			id: "use-cases",
			label: t.sb_uc
		},
		{
			id: "ports",
			label: t.sb_ports
		},
		{
			id: "routing",
			label: t.sb_routing
		},
		{
			id: "di",
			label: t.sb_di
		}
	];
	useEffect(() => {
		const ids = [
			"entities",
			"use-cases",
			"ports",
			"routing",
			"di"
		];
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-80px 0px -70% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS$4);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	const scrollTo = (id) => (e) => {
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
			setActiveId(id);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "docs",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "docs-shell",
			children: [
				/* @__PURE__ */ jsx(DocsSidebar, {
					activeId,
					onScrollTo: scrollTo
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "docs-body",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "crumb",
							children: [
								t.crumb,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.sb_concepts
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							style: { color: "var(--accent)" },
							children: t.cc_title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "lede",
							children: t.cc_lede
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "entities",
							className: "major",
							children: t.cc_entities_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.cc_entities_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["invoice.entity.ts"],
							codes: [entityExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "use-cases",
							className: "major",
							children: t.cc_uc_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.cc_uc_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["invoice.usecase.ts"],
							codes: [useCaseExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "ports",
							className: "major",
							children: t.cc_ports_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.cc_ports_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["invoice.repository.interface.ts", "invoice.repository.ts"],
							codes: [portExample, portExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "routing",
							className: "major",
							children: t.cc_routing_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.cc_routing_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["invoice.router.handler.ts"],
							codes: [routingExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "di",
							className: "major",
							children: t.cc_di_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.cc_di_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["container.ts"],
							codes: [diExample]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "callout",
							children: [/* @__PURE__ */ jsx(Icon, {
								name: "info",
								size: 20,
								className: "icon"
							}), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: t.cc_legacy_b }), t.cc_legacy] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "page-foot",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/docs",
								style: { textAlign: "left" },
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_prev
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_started
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/docs/features",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_next_link
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_features
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "docs-toc",
					children: [/* @__PURE__ */ jsx("h5", { children: t.docs_toc_label }), TOC.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#" + item.id,
						onClick: scrollTo(item.id),
						className: activeId === item.id ? "active" : "",
						children: item.label
					}, item.id))]
				})
			]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/docs.core-concepts.tsx
var docs_core_concepts_exports = /* @__PURE__ */ __exportAll({
	default: () => docs_core_concepts_default,
	meta: () => meta$4
});
function meta$4() {
	return [{ title: "Core Concepts — OptiCoreJS Documentation" }];
}
var docs_core_concepts_default = UNSAFE_withComponentProps(function CoreConceptsRoute() {
	return /* @__PURE__ */ jsx(CoreConcepts, {});
});
//#endregion
//#region app/presentation/pages/docs/TreeBlock.tsx
function compact(line) {
	return line.replace(/│   /g, "│ ").replace(/    /g, "  ").replace(/├── /g, "├─ ").replace(/└── /g, "└─ ");
}
function tokenizeName(name) {
	const segs = [];
	const hasTrailingSlash = name.endsWith("/");
	const parts = (hasTrailingSlash ? name.slice(0, -1) : name).split("/");
	parts.forEach((part, pi) => {
		if (pi > 0) segs.push({
			cls: "tk-mu",
			text: "/"
		});
		if (!part) return;
		const isFile = pi === parts.length - 1 && !hasTrailingSlash;
		const tokens = part.split(/(<[^>]+>)/);
		for (const tok of tokens) {
			if (!tok) continue;
			if (tok.startsWith("<")) segs.push({
				cls: "tk-str",
				text: tok
			});
			else if (!isFile) segs.push({
				cls: "tk-cls",
				text: tok
			});
			else if (tok.startsWith(".")) segs.push({
				cls: "tk-com",
				text: tok
			});
			else {
				const dot = tok.lastIndexOf(".");
				if (dot > 0) {
					segs.push({
						cls: "tk-fn",
						text: tok.slice(0, dot)
					});
					segs.push({
						cls: "tk-com",
						text: tok.slice(dot)
					});
				} else segs.push({
					cls: "tk-fn",
					text: tok
				});
			}
		}
	});
	if (hasTrailingSlash) segs.push({
		cls: "tk-mu",
		text: "/"
	});
	return segs;
}
function tokenizeLine(raw) {
	const line = compact(raw);
	if (!line.trim()) return [{
		cls: "",
		text: ""
	}];
	if (!line.match(/[│├└─]/) && /^[A-Z]/.test(line.trim())) return [{
		cls: "tk-key",
		text: line
	}];
	const segs = [];
	const prefixMatch = line.match(/^([│├└─ ]+)/);
	let rest = line;
	if (prefixMatch) {
		segs.push({
			cls: "tk-mu",
			text: prefixMatch[1]
		});
		rest = line.slice(prefixMatch[1].length);
	}
	const arrowIdx = rest.indexOf("←");
	let comment = "";
	if (arrowIdx >= 0) {
		comment = rest.slice(arrowIdx);
		rest = rest.slice(0, arrowIdx).trimEnd();
	}
	if (rest) segs.push(...tokenizeName(rest));
	if (comment) segs.push({
		cls: "tk-com",
		text: "  " + comment
	});
	return segs;
}
function TreeBlock({ tabs, trees }) {
	const [active, setActive] = useState(0);
	const [copied, setCopied] = useState(false);
	const copy = () => {
		navigator.clipboard?.writeText(trees[active]);
		setCopied(true);
		setTimeout(() => setCopied(false), 1400);
	};
	const lines = trees[active].split("\n");
	return /* @__PURE__ */ jsxs("div", {
		className: "codeblock",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "codeblock-head",
			children: [/* @__PURE__ */ jsx("div", {
				className: "codeblock-tabs",
				children: tabs.map((tab, i) => /* @__PURE__ */ jsx("button", {
					className: i === active ? "active" : "",
					onClick: () => setActive(i),
					children: tab
				}, tab))
			}), /* @__PURE__ */ jsxs("button", {
				className: "codeblock-copy" + (copied ? " copied" : ""),
				onClick: copy,
				children: [/* @__PURE__ */ jsx(Icon, {
					name: copied ? "check" : "copy",
					size: 12
				}), copied ? "copied" : "copy"]
			})]
		}), /* @__PURE__ */ jsx("pre", { children: lines.map((line, li) => /* @__PURE__ */ jsxs(Fragment$1, { children: [tokenizeLine(line).map((seg, si) => /* @__PURE__ */ jsx("span", {
			className: seg.cls,
			children: seg.text
		}, si)), li < lines.length - 1 && "\n"] }, li)) })]
	});
}
//#endregion
//#region app/presentation/pages/docs/Features.tsx
var scaffoldCmd = `npx create-feature-module`;
var cartPresenterInterface = `import { CartResponseDto } from "../../dtos/cart.dto";

export interface ICartPresenter {
    presentOne(data: CartResponseDto): unknown;
    presentMany(data: CartResponseDto[]): unknown;
    presentNotFound(id?: string): unknown;
}`;
var cartRepositoryInterface = `import { CartEntity } from "../../../domain/entities/cart.entity";

export interface ICartRepository {
    findAll(): Promise<CartEntity[]>;
    findById(id: string): Promise<CartEntity | null>;
    create(entity: CartEntity): Promise<CartEntity>;
    update(entity: CartEntity): Promise<CartEntity | null>;
    delete(id: string): Promise<boolean>;
}`;
var cartServiceInterface = `import { CartResponseDto } from "../../dtos/cart.dto";

export interface ICartService {
    handleCreate(data: Record<string, unknown>): Promise<CartResponseDto>;
    handleUpdate(id: string, data: Record<string, unknown>): Promise<CartResponseDto | null>;
    handleDelete(id: string): Promise<boolean>;
    sendWelcomeNotification(id: string): Promise<void>;
    exportToCsv(filters: Record<string, unknown>): Promise<Buffer>;
}`;
var cartDto = `import { CartEntity } from "../../domain/entities/cart.entity";

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
var cartUseCase = `import { ICartRepository } from "../ports/repositories/cart.repository.interface";
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
var structureCleanFull = `src/features/<featureName>/
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
var structureCleanStep = `Domain
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
var structureSimple = `<featureName>/
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
var structureCustom = `src/features/login/
├── app/
├── core/
│   ├── middlewares/
│   └── handler/
├── shared/
│   ├── utils/
│   ├── errors/
│   └── constants/
└── login.router.ts`;
var mainTs = `import { LocalLanguageLoader, loggerConfig, YamlParsing } from "opticore-webapp-core";
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
var devtoolsCli = `# Scaffold a brand-new OpticoreJS project from a starter template
npx opticore-installer

# Generate a feature module inside an existing project
npx create-feature-module

# Run & monitor long-lived processes with a live dashboard (http://localhost:3000)
npx app-manager`;
var hotReloadExample = `import { createServer } from "http";
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
var loggerExample = `import { LoggerCore } from "opticore-logger";
import { loggerConfig } from "opticore-webapp-core";

const logger = new LoggerCore(loggerConfig(envPath));

logger.info({ title: "Server started", message: "Listening on port 3000" });
logger.warn({ title: "Deprecated route", message: "GET /v1/users is deprecated" });
logger.error({ title: "Unhandled exception", message: err.message, stackTrace: err.stack });`;
var envExample = `import { getEnvironmentValue, IEnvVariables } from "opticore-env-access";
import { envPath } from "opticore-webapp";

const env: IEnvVariables = getEnvironmentValue(envPath);

console.log(env.appPort);       // typed: string
console.log(env.defaultLocal);  // typed: string`;
var validationExample = `import { Validator, ValidationResultInterface } from "opticore-validator";
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
var TWEAK_DEFAULTS$3 = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function Features() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [activeId, setActiveId] = useState("first-module");
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const TOC = [
		{
			id: "first-module",
			label: t.sb_first
		},
		{
			id: "structure",
			label: t.sb_struct
		},
		{
			id: "running",
			label: t.sb_running
		},
		{
			id: "devtools",
			label: t.sb_devtools
		},
		{
			id: "logger",
			label: t.sb_logger
		},
		{
			id: "environment",
			label: t.sb_environment
		},
		{
			id: "validation",
			label: t.sb_validation
		}
	];
	useEffect(() => {
		const ids = [
			"first-module",
			"structure",
			"running",
			"devtools",
			"logger",
			"environment",
			"validation"
		];
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-80px 0px -70% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS$3);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	const scrollTo = (id) => (e) => {
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
			setActiveId(id);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "docs",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "docs-shell",
			children: [
				/* @__PURE__ */ jsx(DocsSidebar, {
					activeId,
					onScrollTo: scrollTo
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "docs-body",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "crumb",
							children: [
								t.crumb,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.sb_features
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							style: { color: "var(--accent)" },
							children: t.feat_title
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "first-module",
							className: "major",
							children: t.docs_first_module
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_first_module_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["npx"],
							codes: [scaffoldCmd],
							lang: "sh"
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_presenter_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["cart.presenter.interface.ts"],
							codes: [cartPresenterInterface]
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_repo_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["cart.repository.interface.ts"],
							codes: [cartRepositoryInterface]
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_service_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["cart.service.interface.ts"],
							codes: [cartServiceInterface]
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_dto_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["cart.dto.ts"],
							codes: [cartDto]
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_use_case_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["cart.use-case.ts"],
							codes: [cartUseCase]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "structure",
							className: "major",
							children: t.docs_structure
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_structure_p }),
						/* @__PURE__ */ jsx(TreeBlock, {
							tabs: [
								"Clean Arch",
								"Step by Step",
								"Simple",
								"Custom"
							],
							trees: [
								structureCleanFull,
								structureCleanStep,
								structureSimple,
								structureCustom
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "callout",
							children: [/* @__PURE__ */ jsx(Icon, {
								name: "info",
								size: 20,
								className: "icon"
							}), /* @__PURE__ */ jsxs("p", { children: [
								/* @__PURE__ */ jsx("strong", { children: t.docs_callout_2_b }),
								t.docs_callout_2_a,
								/* @__PURE__ */ jsx("code", { children: "create-feature-module" }),
								t.docs_callout_2_c
							] })]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "running",
							className: "major",
							children: t.docs_running
						}),
						/* @__PURE__ */ jsx("p", { children: t.docs_running_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["main.ts"],
							codes: [mainTs],
							lang: "ts"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							t.docs_running_after_a,
							/* @__PURE__ */ jsx("code", { children: "GET /cart" }),
							t.docs_running_after_b
						] }),
						/* @__PURE__ */ jsx("h2", {
							id: "devtools",
							className: "major",
							children: t.feat_devtools_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.feat_devtools_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["shell"],
							codes: [devtoolsCli],
							lang: "sh"
						}),
						/* @__PURE__ */ jsx("p", { children: t.feat_devtools_p2 }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["server.ts"],
							codes: [hotReloadExample],
							lang: "ts"
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "logger",
							className: "major",
							children: t.feat_logger_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.feat_logger_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["logger.ts"],
							codes: [loggerExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "environment",
							className: "major",
							children: t.feat_env_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.feat_env_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["env.ts"],
							codes: [envExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "validation",
							className: "major",
							children: t.feat_validation_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.feat_validation_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["create-order.dto.ts"],
							codes: [validationExample]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "page-foot",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/docs/core-concepts",
								style: { textAlign: "left" },
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_prev
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_concepts
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/docs/helpers",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_next_link
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_helpers
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "docs-toc",
					children: [/* @__PURE__ */ jsx("h5", { children: t.docs_toc_label }), TOC.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#" + item.id,
						onClick: scrollTo(item.id),
						className: activeId === item.id ? "active" : "",
						children: item.label
					}, item.id))]
				})
			]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/docs.features.tsx
var docs_features_exports = /* @__PURE__ */ __exportAll({
	default: () => docs_features_default,
	meta: () => meta$3
});
function meta$3() {
	return [{ title: "Features — OptiCoreJS Documentation" }];
}
var docs_features_default = UNSAFE_withComponentProps(function FeaturesRoute() {
	return /* @__PURE__ */ jsx(Features, {});
});
//#endregion
//#region app/presentation/pages/docs/Helpers.tsx
var httpExample = `import { Request, Response } from "express";
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
}`;
var postgresExample = `import { PostgresCore, QueryBuilder } from "opticore-postgres";

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
    .execute(sql);`;
var mysqlExample = `import { OptiCoreMySQLDriver } from "opticore-mysqldb";

const db = new OptiCoreMySQLDriver(
    { DB_HOST: "localhost", DB_USER: "root", DB_PASSWORD: "password", DB_NAME: "app" },
    "en"
);

db.connect();

const { results } = await db.query({ sql: "SELECT * FROM users WHERE id = ?", values: [1] });
await db.insert("users", { name: "Alice", email: "alice@example.com" });`;
var mongoExample = `import { MongoClient } from "mongodb";
import { QueryBuilder } from "opticore-mongodb";

const client = await MongoClient.connect(connectionUri);
const database = client.db("myDatabase");

const activeAdults = await new QueryBuilder("users")
    .where("status", "active")
    .where("age", "gte", 18)
    .sort({ createdAt: -1 })
    .limit(20)
    .execute(database);`;
var ormOrchestratorExample = `npx orm-orchestrator init         # pick Prisma / TypeORM / Drizzle / MikroORM / Sequelize
npx orm-orchestrator make:model   # interactive model + relations wizard
npx orm-orchestrator list         # list every model defined for the active ORM`;
var cacheExample = `import { HttpCacheFactory, IHttpCacheService } from "opticore-cache";

const httpCache: IHttpCacheService = HttpCacheFactory.create("external-api", {
    storageType: "disk",   // "memory" | "disk" | "hybrid"
    diskDir: "src/core/cache",
    defaultTTL: 60000,
    maxSize: 500,
});

const post = await httpCache.getWithCache(\`https://api.example.com/posts/\${id}\`);
console.log(post._metadata.source); // "cache" | "api"

await httpCache.invalidateCache("/posts/*");`;
var gatewayExample = `import { APIGateway, AuthMiddleware } from "opticore-api-gateway";

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

await gateway.start();`;
var securityExample = `import fs from "fs";
import {
    loaderTranslationFile,
    SAsymmetricCryptionDataWithPublicRSAKey,
} from "opticore-asymmetric-cryption";

loaderTranslationFile("en");

const privateKey = fs.readFileSync("keys/private.pem", "utf8");
const publicKey = fs.readFileSync("keys/public.pem", "utf8");

const crypto = new SAsymmetricCryptionDataWithPublicRSAKey("en", ".env");
const signature = crypto.verifyPublicRSAKey(privateKey, publicKey, "payload to sign");`;
var TWEAK_DEFAULTS$2 = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function Helpers() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [activeId, setActiveId] = useState("http");
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const TOC = [
		{
			id: "http",
			label: t.sb_http
		},
		{
			id: "databases",
			label: t.sb_databases
		},
		{
			id: "cache",
			label: t.sb_cache
		},
		{
			id: "gateway",
			label: t.sb_gateway
		},
		{
			id: "security",
			label: t.sb_security
		}
	];
	useEffect(() => {
		const ids = [
			"http",
			"databases",
			"cache",
			"gateway",
			"security"
		];
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-80px 0px -70% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS$2);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	const scrollTo = (id) => (e) => {
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
			setActiveId(id);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "docs",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "docs-shell",
			children: [
				/* @__PURE__ */ jsx(DocsSidebar, {
					activeId,
					onScrollTo: scrollTo
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "docs-body",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "crumb",
							children: [
								t.crumb,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.sb_helpers
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							style: { color: "var(--accent)" },
							children: t.helpers_title
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "http",
							className: "major",
							children: t.helpers_http_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.helpers_http_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["invoice.controller.ts"],
							codes: [httpExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "databases",
							className: "major",
							children: t.sb_databases
						}),
						/* @__PURE__ */ jsx("p", { children: t.helpers_postgres_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: [
								"opticore-postgres",
								"opticore-mysqldb",
								"opticore-mongodb"
							],
							codes: [
								postgresExample,
								mysqlExample,
								mongoExample
							]
						}),
						/* @__PURE__ */ jsx("p", { children: t.helpers_orm_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["shell"],
							codes: [ormOrchestratorExample],
							lang: "sh"
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "cache",
							className: "major",
							children: t.sb_cache
						}),
						/* @__PURE__ */ jsx("p", { children: t.helpers_redis_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["cache.ts"],
							codes: [cacheExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "gateway",
							className: "major",
							children: t.sb_gateway
						}),
						/* @__PURE__ */ jsx("p", { children: t.helpers_queue_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["gateway.ts"],
							codes: [gatewayExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "security",
							className: "major",
							children: t.sb_security
						}),
						/* @__PURE__ */ jsx("p", { children: t.helpers_security_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["sign.ts"],
							codes: [securityExample]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "page-foot",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/docs/features",
								style: { textAlign: "left" },
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_prev
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_features
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/docs/config",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_next_link
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_config
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "docs-toc",
					children: [/* @__PURE__ */ jsx("h5", { children: t.docs_toc_label }), TOC.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#" + item.id,
						onClick: scrollTo(item.id),
						className: activeId === item.id ? "active" : "",
						children: item.label
					}, item.id))]
				})
			]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/docs.helpers.tsx
var docs_helpers_exports = /* @__PURE__ */ __exportAll({
	default: () => docs_helpers_default,
	meta: () => meta$2
});
function meta$2() {
	return [{ title: "Helpers — OptiCoreJS Documentation" }];
}
var docs_helpers_default = UNSAFE_withComponentProps(function HelpersRoute() {
	return /* @__PURE__ */ jsx(Helpers, {});
});
//#endregion
//#region app/presentation/pages/docs/Config.tsx
var configServiceExample = `import { getEnvironmentValue } from "opticore-env-access";
import { envPath } from "opticore-webapp";

const env = getEnvironmentValue(envPath);

console.log(env.appHost, env.appPort, env.dataBaseName);`;
var envVarsExample = `interface IEnvVariables {
    appHost: string;
    appPort: string;
    dataBaseHost: string;
    dataBasePort: string;
    dataBaseUser: string;
    dataBasePassword: string;
    dataBaseName: string;
    defaultLocal: string;
    apiVersion: string;
    logLevelInfo: string;
    logFileEnabled: boolean;
    hmrEnabled: boolean;
    hmrDebounceMs: number;
    profileWebToolbar: boolean;
}`;
var yamlExample = `import { YamlParsing } from "opticore-webapp-core";

const yaml = new YamlParsing(env.defaultLocal, envPath);

const corsOptions = yaml.readFile(environment.corsOptions);`;
var i18nExample = `import { translationLoaderConfig, translate } from "opticore-loader-translation";

translationLoaderConfig({
    packageName: "opticore-loader-translation",
    locationTranslationFile: ["utils", "translations"],
    localLang: "en",
});

translate({ key: "welcomeMessage", localeLanguage: "en", params: { name: "Guy" } });`;
var i18nLowLevelExample = `import { TranslationLoader } from "opticore-translator";
import path from "path";

// Every message.translation.<locale>.json file in the directory is merged in memory
TranslationLoader.loadTranslations(path.join("src", "utils", "translations"));

const message = TranslationLoader.t("mongoServerError", "en", { dbHost: "127.0.0.1" });`;
var TWEAK_DEFAULTS$1 = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function Config() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [activeId, setActiveId] = useState("config-service");
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const TOC = [
		{
			id: "config-service",
			label: t.sb_config_service
		},
		{
			id: "env-vars",
			label: t.sb_env_vars
		},
		{
			id: "yaml",
			label: t.sb_yaml
		},
		{
			id: "i18n",
			label: t.sb_i18n
		}
	];
	useEffect(() => {
		const ids = [
			"config-service",
			"env-vars",
			"yaml",
			"i18n"
		];
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-80px 0px -70% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS$1);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	const scrollTo = (id) => (e) => {
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
			setActiveId(id);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "docs",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "docs-shell",
			children: [
				/* @__PURE__ */ jsx(DocsSidebar, {
					activeId,
					onScrollTo: scrollTo
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "docs-body",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "crumb",
							children: [
								t.crumb,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.sb_config
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							style: { color: "var(--accent)" },
							children: t.config_title
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "config-service",
							className: "major",
							children: t.config_service_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.config_service_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["config.service.ts"],
							codes: [configServiceExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "env-vars",
							className: "major",
							children: t.config_env_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.config_env_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["env.ts"],
							codes: [envVarsExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "yaml",
							className: "major",
							children: t.config_yaml_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.config_yaml_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["yaml.ts"],
							codes: [yamlExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "i18n",
							className: "major",
							children: t.config_i18n_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.config_i18n_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["opticore-loader-translation", "opticore-translator"],
							codes: [i18nExample, i18nLowLevelExample]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "page-foot",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/docs/helpers",
								style: { textAlign: "left" },
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_prev
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_helpers
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/docs/components",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_next_link
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_components
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "docs-toc",
					children: [/* @__PURE__ */ jsx("h5", { children: t.docs_toc_label }), TOC.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#" + item.id,
						onClick: scrollTo(item.id),
						className: activeId === item.id ? "active" : "",
						children: item.label
					}, item.id))]
				})
			]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/docs.config.tsx
var docs_config_exports = /* @__PURE__ */ __exportAll({
	default: () => docs_config_default,
	meta: () => meta$1
});
function meta$1() {
	return [{ title: "Configuration — OptiCoreJS Documentation" }];
}
var docs_config_default = UNSAFE_withComponentProps(function ConfigRoute() {
	return /* @__PURE__ */ jsx(Config, {});
});
//#endregion
//#region app/presentation/pages/docs/Components.tsx
var middlewaresExample = `import { APIGateway, BaseMiddleware, LoggingMiddleware, RateLimitMiddleware } from "opticore-api-gateway";

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
gateway.addMiddleware(new RequestIdMiddleware().handle());`;
var interceptorsExample = `import http from "node:http";
import { requestCallsEvent } from "opticore-request-call-event";

const server = http.createServer(app);

server.on("request", (req, res) => {
    requestCallsEvent(req, res, "localhost", 3000, Date.now(), envPath, "en");
});`;
var guardsExample = `import { OpticoreRoutingFactory, ICustomContext, TAuthenticatorFunction } from "opticore-router";
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
);`;
var exceptionsExample = `import process from "node:process";
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
);`;
var TWEAK_DEFAULTS = {
	accent: "#f59042",
	theme: "dark",
	density: "comfortable"
};
function Components() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [activeId, setActiveId] = useState("middlewares");
	const [, , t] = useLang();
	useCmdK(() => setSearchOpen(true));
	const TOC = [
		{
			id: "middlewares",
			label: t.sb_middlewares
		},
		{
			id: "interceptors",
			label: t.sb_interceptors
		},
		{
			id: "guards",
			label: t.sb_guards
		},
		{
			id: "exceptions",
			label: t.sb_exceptions
		}
	];
	useEffect(() => {
		const ids = [
			"middlewares",
			"interceptors",
			"guards",
			"exceptions"
		];
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-80px 0px -70% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
	useEffect(() => {
		document.documentElement.style.setProperty("--accent", tw.accent);
		document.documentElement.dataset.theme = tw.theme;
		document.documentElement.dataset.density = tw.density;
	}, [
		tw.accent,
		tw.theme,
		tw.density
	]);
	const scrollTo = (id) => (e) => {
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: "smooth" });
			setActiveId(id);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(TopNav, {
			active: "docs",
			onSearch: () => setSearchOpen(true)
		}),
		/* @__PURE__ */ jsx(SearchDialog, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "docs-shell",
			children: [
				/* @__PURE__ */ jsx(DocsSidebar, {
					activeId,
					onScrollTo: scrollTo
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "docs-body",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "crumb",
							children: [
								t.crumb,
								" ",
								/* @__PURE__ */ jsx("span", { children: "›" }),
								" ",
								t.sb_components
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							style: { color: "var(--accent)" },
							children: t.comp_title
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "middlewares",
							className: "major",
							children: t.comp_middlewares_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.comp_middlewares_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["middlewares.ts"],
							codes: [middlewaresExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "interceptors",
							className: "major",
							children: t.comp_interceptors_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.comp_interceptors_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["requestCallsEvent.ts"],
							codes: [interceptorsExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "guards",
							className: "major",
							children: t.comp_guards_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.comp_guards_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["invoice.router.ts"],
							codes: [guardsExample]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "exceptions",
							className: "major",
							children: t.comp_exceptions_h
						}),
						/* @__PURE__ */ jsx("p", { children: t.comp_exceptions_p }),
						/* @__PURE__ */ jsx(SyntaxCodeBlock, {
							tabs: ["errors.ts"],
							codes: [exceptionsExample]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "page-foot",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/docs/config",
								style: { textAlign: "left" },
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_prev
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_config
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/docs",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dir",
									children: t.docs_next_link
								}), /* @__PURE__ */ jsx("span", {
									className: "lbl",
									children: t.sb_started
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "docs-toc",
					children: [/* @__PURE__ */ jsx("h5", { children: t.docs_toc_label }), TOC.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#" + item.id,
						onClick: scrollTo(item.id),
						className: activeId === item.id ? "active" : "",
						children: item.label
					}, item.id))]
				})
			]
		}),
		/* @__PURE__ */ jsxs(TweaksPanel, {
			title: "Tweaks",
			children: [/* @__PURE__ */ jsx(TweakSection, {
				label: "Accent",
				children: /* @__PURE__ */ jsx(TweakColor, {
					label: "Color",
					value: tw.accent,
					onChange: (v) => setTweak("accent", v),
					options: [
						"#f59042",
						"#2A6FDB",
						"#1F8A5B",
						"#c84a8a"
					]
				})
			}), /* @__PURE__ */ jsxs(TweakSection, {
				label: "Appearance",
				children: [/* @__PURE__ */ jsx(TweakRadio, {
					label: "Theme",
					value: tw.theme,
					onChange: (v) => setTweak("theme", v),
					options: [{
						value: "dark",
						label: "Dark"
					}, {
						value: "light",
						label: "Light"
					}]
				}), /* @__PURE__ */ jsx(TweakRadio, {
					label: "Density",
					value: tw.density,
					onChange: (v) => setTweak("density", v),
					options: [{
						value: "comfortable",
						label: "Comfortable"
					}, {
						value: "compact",
						label: "Compact"
					}]
				})]
			})]
		})
	] });
}
//#endregion
//#region app/routes/docs.components.tsx
var docs_components_exports = /* @__PURE__ */ __exportAll({
	default: () => docs_components_default,
	meta: () => meta
});
function meta() {
	return [{ title: "Components — OptiCoreJS Documentation" }];
}
var docs_components_default = UNSAFE_withComponentProps(function ComponentsRoute() {
	return /* @__PURE__ */ jsx(Components, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-mhMX_w3H.js",
		"imports": ["/assets/jsx-runtime-DcGadwfq.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-BPuAfn6T.js",
			"imports": ["/assets/jsx-runtime-DcGadwfq.js"],
			"css": ["/assets/root-STRFda3-.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-QfGjzfyI.js",
			"imports": ["/assets/jsx-runtime-DcGadwfq.js", "/assets/TweaksPanel-D7BLbKnh.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs": {
			"id": "routes/docs",
			"parentId": "root",
			"path": "docs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs-YC8y0vxp.js",
			"imports": [
				"/assets/jsx-runtime-DcGadwfq.js",
				"/assets/TweaksPanel-D7BLbKnh.js",
				"/assets/SyntaxCodeBlock-CSqx52yS.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs.core-concepts": {
			"id": "routes/docs.core-concepts",
			"parentId": "root",
			"path": "docs/core-concepts",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs.core-concepts-Bw9rIp8b.js",
			"imports": [
				"/assets/jsx-runtime-DcGadwfq.js",
				"/assets/TweaksPanel-D7BLbKnh.js",
				"/assets/SyntaxCodeBlock-CSqx52yS.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs.features": {
			"id": "routes/docs.features",
			"parentId": "root",
			"path": "docs/features",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs.features-D1e2wj4U.js",
			"imports": [
				"/assets/jsx-runtime-DcGadwfq.js",
				"/assets/TweaksPanel-D7BLbKnh.js",
				"/assets/SyntaxCodeBlock-CSqx52yS.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs.helpers": {
			"id": "routes/docs.helpers",
			"parentId": "root",
			"path": "docs/helpers",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs.helpers-D7274WD-.js",
			"imports": [
				"/assets/jsx-runtime-DcGadwfq.js",
				"/assets/TweaksPanel-D7BLbKnh.js",
				"/assets/SyntaxCodeBlock-CSqx52yS.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs.config": {
			"id": "routes/docs.config",
			"parentId": "root",
			"path": "docs/config",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs.config-dD9SZ8HE.js",
			"imports": [
				"/assets/jsx-runtime-DcGadwfq.js",
				"/assets/TweaksPanel-D7BLbKnh.js",
				"/assets/SyntaxCodeBlock-CSqx52yS.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs.components": {
			"id": "routes/docs.components",
			"parentId": "root",
			"path": "docs/components",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs.components-BMy2UJbN.js",
			"imports": [
				"/assets/jsx-runtime-DcGadwfq.js",
				"/assets/TweaksPanel-D7BLbKnh.js",
				"/assets/SyntaxCodeBlock-CSqx52yS.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-c1488f89.js",
	"version": "c1488f89",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/docs": {
		id: "routes/docs",
		parentId: "root",
		path: "docs",
		index: void 0,
		caseSensitive: void 0,
		module: docs_exports
	},
	"routes/docs.core-concepts": {
		id: "routes/docs.core-concepts",
		parentId: "root",
		path: "docs/core-concepts",
		index: void 0,
		caseSensitive: void 0,
		module: docs_core_concepts_exports
	},
	"routes/docs.features": {
		id: "routes/docs.features",
		parentId: "root",
		path: "docs/features",
		index: void 0,
		caseSensitive: void 0,
		module: docs_features_exports
	},
	"routes/docs.helpers": {
		id: "routes/docs.helpers",
		parentId: "root",
		path: "docs/helpers",
		index: void 0,
		caseSensitive: void 0,
		module: docs_helpers_exports
	},
	"routes/docs.config": {
		id: "routes/docs.config",
		parentId: "root",
		path: "docs/config",
		index: void 0,
		caseSensitive: void 0,
		module: docs_config_exports
	},
	"routes/docs.components": {
		id: "routes/docs.components",
		parentId: "root",
		path: "docs/components",
		index: void 0,
		caseSensitive: void 0,
		module: docs_components_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
