export const APP_VERSIONS = ["1.0"] as const;

export type AppVersion = (typeof APP_VERSIONS)[number];

export const DEFAULT_APP_VERSION: AppVersion = APP_VERSIONS[0];
