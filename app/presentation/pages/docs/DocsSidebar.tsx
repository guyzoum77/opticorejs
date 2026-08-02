import { type MouseEvent } from "react";
import { Link, useLocation } from "react-router";
import { useLang } from "~/application/hooks/useLang";

interface DocsSidebarProps {
    activeId: string;
    onScrollTo: (id: string) => (e: MouseEvent<HTMLAnchorElement>) => void;
}

interface SideItem {
    id: string;
    label: string;
    badge?: string;
}

interface SideGroup {
    group: string;
    path: string;
    items: SideItem[];
}

export function DocsSidebar({ activeId, onScrollTo }: DocsSidebarProps) {
    const [, , t] = useLang();
    const { pathname } = useLocation();

    const SIDEBAR: SideGroup[] = [
        {
            group: t.sb_started,
            path: "/docs",
            items: [
                { id: "introduction", label: t.sb_intro },
                { id: "installation", label: t.sb_install },
            ],
        },
        {
            group: t.sb_concepts,
            path: "/docs/core-concepts",
            items: [
                { id: "entities", label: t.sb_entities },
                { id: "use-cases", label: t.sb_uc },
                { id: "ports", label: t.sb_ports },
                { id: "routing", label: t.sb_routing },
                { id: "di", label: t.sb_di },
            ],
        },
        {
            group: t.sb_features,
            path: "/docs/features",
            items: [
                { id: "first-module", label: t.sb_first, badge: t.sb_5min },
                { id: "structure", label: t.sb_struct },
                { id: "running", label: t.sb_running },
                { id: "devtools", label: t.sb_devtools },
                { id: "logger", label: t.sb_logger },
                { id: "environment", label: t.sb_environment },
                { id: "validation", label: t.sb_validation },
            ],
        },
        {
            group: t.sb_helpers,
            path: "/docs/helpers",
            items: [
                { id: "http", label: t.sb_http },
                { id: "databases", label: t.sb_databases },
                { id: "cache", label: t.sb_cache },
                { id: "gateway", label: t.sb_gateway },
                { id: "security", label: t.sb_security },
            ],
        },
        {
            group: t.sb_config,
            path: "/docs/config",
            items: [
                { id: "config-service", label: t.sb_config_service },
                { id: "env-vars", label: t.sb_env_vars },
                { id: "yaml", label: t.sb_yaml },
                { id: "i18n", label: t.sb_i18n },
            ],
        },
        {
            group: t.sb_components,
            path: "/docs/components",
            items: [
                { id: "middlewares", label: t.sb_middlewares },
                { id: "interceptors", label: t.sb_interceptors },
                { id: "guards", label: t.sb_guards },
                { id: "exceptions", label: t.sb_exceptions },
            ],
        },
    ];

    const normPath = pathname.replace(/\/$/, "") || "/";

    return (
        <aside className="docs-side">
            {SIDEBAR.map((group) => {
                const groupPath = group.path.replace(/\/$/, "");
                const isCurrent = normPath === groupPath;

                return (
                    <div className="side-group" key={group.path}>
                        <Link
                            to={group.path}
                            viewTransition
                            className={"title" + (isCurrent ? " active" : "")}
                        >
                            {group.group}
                        </Link>
                        {group.items.map((item) =>
                            isCurrent ? (
                                <a
                                    key={item.id}
                                    href={"#" + item.id}
                                    onClick={onScrollTo(item.id)}
                                    className={
                                        "side-link" + (activeId === item.id ? " active" : "")
                                    }
                                >
                                    {item.label}
                                    {item.badge && <span className="badge">{item.badge}</span>}
                                </a>
                            ) : (
                                <Link
                                    key={item.id}
                                    to={group.path + "#" + item.id}
                                    viewTransition
                                    className="side-link"
                                >
                                    {item.label}
                                    {item.badge && <span className="badge">{item.badge}</span>}
                                </Link>
                            )
                        )}
                    </div>
                );
            })}
        </aside>
    );
}
