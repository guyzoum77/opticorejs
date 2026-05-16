import { Docs } from "~/presentation/pages/docs/Docs";

export function meta() {
    return [
        { title: "Quick Start — OptiCoreJS Documentation" },
        { name: "description", content: "Get started with OptiCoreJS in under five minutes." },
    ];
}

export default function DocsRoute() {
    return <Docs />;
}
