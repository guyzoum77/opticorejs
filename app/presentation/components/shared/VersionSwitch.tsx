import { useVersion } from "~/application/hooks/useVersion";
import { APP_VERSIONS, type AppVersion } from "~/core/entities/version";
import { Icon } from "./Icon";

export function VersionSwitch() {
    const [version, setVersion] = useVersion();

    return (
        <span className="brand-version">
            <select
                className="brand-version-select"
                value={version}
                aria-label="Select version"
                onChange={(e) => setVersion(e.target.value as AppVersion)}
            >
                {APP_VERSIONS.map((v) => (
                    <option key={v} value={v}>
                        v{v}
                    </option>
                ))}
            </select>
            <Icon name="chevron" size={10} className="brand-version-chevron" />
        </span>
    );
}
