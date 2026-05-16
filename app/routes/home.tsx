import { Landing } from "~/presentation/pages/landing/Landing";

export function meta() {
    return [
        { title: "OptiCoreJS — A robust framework for Clean Architecture" },
        {
            name: "description",
            content: "TypeScript framework for backends built around Clean Architecture.",
        },
    ];
}

export default function Home() {
    return <Landing />;
}
