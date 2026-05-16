import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("docs", "routes/docs.tsx"),
    route("docs/core-concepts", "routes/docs.core-concepts.tsx"),
    route("docs/features", "routes/docs.features.tsx"),
    route("docs/helpers", "routes/docs.helpers.tsx"),
    route("docs/config", "routes/docs.config.tsx"),
    route("docs/components", "routes/docs.components.tsx"),
] satisfies RouteConfig;
