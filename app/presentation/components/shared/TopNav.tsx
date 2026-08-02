import { Link } from "react-router";
import { useLang } from "~/application/hooks/useLang";
import { useTheme } from "~/application/hooks/useTheme";
import { Icon } from "./Icon";
import { LangSwitch } from "./LangSwitch";
import { VersionSwitch } from "./VersionSwitch";

interface TopNavProps {
    active: "home" | "docs";
    onSearch: () => void;
}

export function TopNav({ active, onSearch }: TopNavProps) {
    const [theme, setTheme] = useTheme();
    const [, , t] = useLang();

    return (
        <header className="nav">
            <div className="nav-inner">
                <div className="brand">
                    <Link to="/" viewTransition className="brand-link">
                        <img src="/assets/opticorejs-logo.png" alt="" className="brand-logo" />
                        <span className="brand-name">
                            OptiCore<b>JS</b>
                        </span>
                    </Link>
                    <VersionSwitch />
                </div>

                <nav className="nav-links">
                    <Link
                        to="/"
                        viewTransition
                        className={"nav-link" + (active === "home" ? " active" : "")}
                    >
                        {t.nav_overview}
                    </Link>
                    <Link
                        to="/docs"
                        viewTransition
                        className={"nav-link" + (active === "docs" ? " active" : "")}
                    >
                        {t.nav_docs}
                    </Link>
                    <a href="/docs#api" className="nav-link">
                        {t.nav_api}
                    </a>
                    <a href="#" className="nav-link">
                        {t.nav_recipes}
                    </a>
                    <a href="#" className="nav-link">
                        {t.nav_tutorial}
                    </a>
                    <a href="#" className="nav-link">
                        {t.nav_blog}
                    </a>
                </nav>

                <div className="nav-spacer" />

                <div className="nav-actions">
                    <button className="search-trigger" onClick={onSearch}>
                        <Icon name="search" size={14} />
                        <span className="label">{t.nav_search}</span>
                        <span className="kbd">⌘K</span>
                    </button>
                    <LangSwitch />
                    <button
                        className="icon-btn"
                        onClick={(): void => setTheme(theme === "dark" ? "light" : "dark")}
                        title="Toggle theme"
                    >
                        <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
                    </button>
                    <a className="icon-btn" href="https://github.com/guyzoum77/opticorejs.git" title="GitHub">
                        <Icon name="github" size={16} />
                    </a>
                </div>
            </div>
        </header>
    );
}
