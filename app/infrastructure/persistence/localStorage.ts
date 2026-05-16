export function getItem(key: string): string | null {
    if (typeof localStorage === "undefined") return null;
    return localStorage.getItem(key);
}

export function setItem(key: string, value: string): void {
    if (typeof localStorage === "undefined") {
        return;
    }
    localStorage.setItem(key, value);
}
