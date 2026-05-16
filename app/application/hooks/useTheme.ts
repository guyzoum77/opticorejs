import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme(): [Theme, (t: Theme) => void] {
    const [theme, setThemeState] = useState<Theme>("dark");

    useEffect(() => {
        const stored = document.documentElement.dataset.theme as Theme | undefined;
        if (stored === "light") setThemeState("light");
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return [theme, setThemeState];
}
