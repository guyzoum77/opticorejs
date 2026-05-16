import { useEffect } from "react";


export function useCmdK(onOpen: () => void): void {
    useEffect((): () => void => {
        const handler: (e: KeyboardEvent) => void = (e: KeyboardEvent): void => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                onOpen();
            }
        };
        window.addEventListener("keydown", handler);
        return (): void => window.removeEventListener("keydown", handler);
    }, [onOpen]);
}
