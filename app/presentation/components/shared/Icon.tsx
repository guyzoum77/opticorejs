import type { SVGProps } from "react";

type IconName =
    | "arrow"
    | "search"
    | "sun"
    | "moon"
    | "github"
    | "book"
    | "cube"
    | "layers"
    | "bolt"
    | "shield"
    | "test"
    | "plug"
    | "copy"
    | "check"
    | "info"
    | "chevron"
    | "docs"
    | "spark";

interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
}

export function Icon({ name, size = 18, ...rest }: IconProps) {
    const paths: Record<IconName, React.ReactNode> = {
        arrow: (
            <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        search: (
            <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
            </g>
        ),
        sun: (
            <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
            </g>
        ),
        moon: (
            <path
                d="M21 13a9 9 0 11-9-9c0 5 4 9 9 9z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
            />
        ),
        github: (
            <path
                d="M12 1.5a10.5 10.5 0 00-3.32 20.46c.53.1.72-.23.72-.5v-1.84c-2.93.64-3.55-1.4-3.55-1.4-.48-1.21-1.17-1.53-1.17-1.53-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.79 0 0 .89-.28 2.9 1.08a10.04 10.04 0 015.27 0c2.01-1.36 2.9-1.08 2.9-1.08.57 1.45.21 2.52.1 2.79.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.92-4.81 5.18.38.33.71.97.71 1.96v2.91c0 .28.19.61.73.5A10.5 10.5 0 0012 1.5z"
                fill="currentColor"
            />
        ),
        book: (
            <path
                d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5zm2 14h12M8 7h6M8 11h6"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        cube: (
            <path
                d="M12 2L3 7v10l9 5 9-5V7l-9-5zM3 7l9 5 9-5M12 12v10"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinejoin="round"
            />
        ),
        layers: (
            <path
                d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinejoin="round"
            />
        ),
        bolt: (
            <path
                d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinejoin="round"
            />
        ),
        shield: (
            <path
                d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinejoin="round"
            />
        ),
        test: (
            <path
                d="M9 2v6L4 18a2 2 0 002 3h12a2 2 0 002-3l-5-10V2M9 2h6M8 14h8"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        plug: (
            <path
                d="M9 2v6M15 2v6M6 8h12v4a6 6 0 01-12 0V8zM12 18v4"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        copy: (
            <g stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round">
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 012-2h10" />
            </g>
        ),
        check: (
            <path
                d="M5 12l5 5L20 7"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        info: (
            <g stroke="currentColor" strokeWidth="1.7" fill="none">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v.01M12 11v5" strokeLinecap="round" />
            </g>
        ),
        chevron: (
            <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        docs: (
            <path
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinejoin="round"
            />
        ),
        spark: (
            <path
                d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z"
                stroke="currentColor"
                strokeWidth="1.7"
                fill="none"
                strokeLinejoin="round"
            />
        ),
    };

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
            {paths[name]}
        </svg>
    );
}
