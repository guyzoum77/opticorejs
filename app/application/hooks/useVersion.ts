import { useEffect, useState } from "react";
import { APP_VERSIONS, DEFAULT_APP_VERSION, type AppVersion } from "~/core/entities/version";
import { getItem, setItem } from "~/infrastructure/persistence/localStorage";

export function useVersion(): [AppVersion, (v: AppVersion) => void] {
    const [version, setVersionState] = useState<AppVersion>(() => {
        const stored = getItem("opticore-version");
        return (APP_VERSIONS as readonly string[]).includes(stored ?? "")
            ? (stored as AppVersion)
            : DEFAULT_APP_VERSION;
    });

    useEffect(() => {
        setItem("opticore-version", version);
        window.dispatchEvent(new CustomEvent("opticore-version", { detail: version }));
    }, [version]);

    useEffect(() => {
        const handler = (e: Event) => {
            const version = (e as CustomEvent<AppVersion>).detail;
            setVersionState(version);
        };
        window.addEventListener("opticore-version", handler);
        return () => window.removeEventListener("opticore-version", handler);
    }, []);

    return [version, setVersionState];
}
