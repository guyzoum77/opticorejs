import type { SearchResult } from "~/core/entities/SearchResult";

export const SEARCH_CORPUS: SearchResult[] = [
    {
        group: "Getting Started",
        title: "Introduction",
        crumb: "docs › intro",
        href: "/docs#introduction",
    },
    {
        group: "Getting Started",
        title: "Installation",
        crumb: "docs › install",
        href: "/docs#installation",
    },
    {
        group: "Getting Started",
        title: "Your first module",
        crumb: "docs › first-module",
        href: "/docs#first-module",
    },
    {
        group: "Getting Started",
        title: "Project structure",
        crumb: "docs › structure",
        href: "/docs#structure",
    },
    {
        group: "Concepts",
        title: "Entities & Use Cases",
        crumb: "docs › concepts",
        href: "/docs#entities",
    },
    {
        group: "Concepts",
        title: "Adapters & Ports",
        crumb: "docs › concepts",
        href: "/docs#adapters",
    },
    {
        group: "Concepts",
        title: "Dependency injection",
        crumb: "docs › concepts",
        href: "/docs#di",
    },
    { group: "API", title: "@UseCase()", crumb: "api › decorators", href: "/docs#decorators" },
    { group: "API", title: "@Adapter()", crumb: "api › decorators", href: "/docs#decorators" },
    { group: "API", title: "createApp()", crumb: "api › runtime", href: "/docs#runtime" },
    {
        group: "Recipes",
        title: "Testing use cases",
        crumb: "recipes › testing",
        href: "/docs#testing",
    },
    {
        group: "Recipes",
        title: "PostgreSQL adapter",
        crumb: "recipes › data",
        href: "/docs#postgres",
    },
];
