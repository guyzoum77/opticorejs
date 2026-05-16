export type Lang = "en" | "fr";

export type Translations = Record<string, string>;

export interface I18nPort {
    getTranslations(lang: Lang): Translations;
}
