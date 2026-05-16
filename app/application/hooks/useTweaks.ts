import { useCallback, useState } from "react";

export type TweakValues = Record<string, unknown>;

export function useTweaks<T extends TweakValues>(
    defaults: T
): [T, (keyOrEdits: string | Partial<T>, val?: unknown) => void] {
    const [values, setValues] = useState<T>(defaults);

    const setTweak = useCallback((keyOrEdits: string | Partial<T>, val?: unknown) => {
        const edits: Partial<T> =
            typeof keyOrEdits === "object" && keyOrEdits !== null
                ? (keyOrEdits as Partial<T>)
                : ({ [keyOrEdits as string]: val } as Partial<T>);
        setValues((prev) => ({ ...prev, ...edits }));
        if (typeof window !== "undefined") {
            window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
            window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
        }
    }, []);

    return [values, setTweak];
}
