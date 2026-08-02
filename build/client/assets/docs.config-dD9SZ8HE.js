import{A as e,M as t,P as n,t as r}from"./jsx-runtime-DcGadwfq.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,t as d,u as f}from"./TweaksPanel-D7BLbKnh.js";import{n as p,t as m}from"./SyntaxCodeBlock-CSqx52yS.js";var h=n(t(),1),g=r(),_=`import { getEnvironmentValue } from "opticore-env-access";
import { envPath } from "opticore-webapp";

const env = getEnvironmentValue(envPath);

console.log(env.appHost, env.appPort, env.dataBaseName);`,v=`interface IEnvVariables {
    appHost: string;
    appPort: string;
    dataBaseHost: string;
    dataBasePort: string;
    dataBaseUser: string;
    dataBasePassword: string;
    dataBaseName: string;
    defaultLocal: string;
    apiVersion: string;
    logLevelInfo: string;
    logFileEnabled: boolean;
    hmrEnabled: boolean;
    hmrDebounceMs: number;
    profileWebToolbar: boolean;
}`,y=`import { YamlParsing } from "opticore-webapp-core";

const yaml = new YamlParsing(env.defaultLocal, envPath);

const corsOptions = yaml.readFile(environment.corsOptions);`,b=`import { translationLoaderConfig, translate } from "opticore-loader-translation";

translationLoaderConfig({
    packageName: "opticore-loader-translation",
    locationTranslationFile: ["utils", "translations"],
    localLang: "en",
});

translate({ key: "welcomeMessage", localeLanguage: "en", params: { name: "Guy" } });`,x=`import { TranslationLoader } from "opticore-translator";
import path from "path";

// Every message.translation.<locale>.json file in the directory is merged in memory
TranslationLoader.loadTranslations(path.join("src", "utils", "translations"));

const message = TranslationLoader.t("mongoServerError", "en", { dbHost: "127.0.0.1" });`,S={accent:`#f59042`,theme:`dark`,density:`comfortable`};function C(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(`config-service`),[,,C]=s();f(()=>t(!0));let w=[{id:`config-service`,label:C.sb_config_service},{id:`env-vars`,label:C.sb_env_vars},{id:`yaml`,label:C.sb_yaml},{id:`i18n`,label:C.sb_i18n}];(0,h.useEffect)(()=>{let e=[`config-service`,`env-vars`,`yaml`,`i18n`],t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t.length&&r(t[0].target.id)},{rootMargin:`-80px 0px -70% 0px`,threshold:0});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},[]);let[T,E]=a(S);(0,h.useEffect)(()=>{document.documentElement.style.setProperty(`--accent`,T.accent),document.documentElement.dataset.theme=T.theme,document.documentElement.dataset.density=T.density},[T.accent,T.theme,T.density]);let D=e=>t=>{let n=document.getElementById(e);n&&(t.preventDefault(),n.scrollIntoView({behavior:`smooth`}),r(e))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{active:`docs`,onSearch:()=>t(!0)}),(0,g.jsx)(l,{open:e,onClose:()=>t(!1)}),(0,g.jsxs)(`div`,{className:`docs-shell`,children:[(0,g.jsx)(p,{activeId:n,onScrollTo:D}),(0,g.jsxs)(`main`,{className:`docs-body`,children:[(0,g.jsxs)(`p`,{className:`crumb`,children:[C.crumb,` `,(0,g.jsx)(`span`,{children:`›`}),` `,C.sb_config]}),(0,g.jsx)(`h1`,{style:{color:`var(--accent)`},children:C.config_title}),(0,g.jsx)(`h2`,{id:`config-service`,className:`major`,children:C.config_service_h}),(0,g.jsx)(`p`,{children:C.config_service_p}),(0,g.jsx)(m,{tabs:[`config.service.ts`],codes:[_]}),(0,g.jsx)(`h2`,{id:`env-vars`,className:`major`,children:C.config_env_h}),(0,g.jsx)(`p`,{children:C.config_env_p}),(0,g.jsx)(m,{tabs:[`env.ts`],codes:[v]}),(0,g.jsx)(`h2`,{id:`yaml`,className:`major`,children:C.config_yaml_h}),(0,g.jsx)(`p`,{children:C.config_yaml_p}),(0,g.jsx)(m,{tabs:[`yaml.ts`],codes:[y]}),(0,g.jsx)(`h2`,{id:`i18n`,className:`major`,children:C.config_i18n_h}),(0,g.jsx)(`p`,{children:C.config_i18n_p}),(0,g.jsx)(m,{tabs:[`opticore-loader-translation`,`opticore-translator`],codes:[b,x]}),(0,g.jsxs)(`div`,{className:`page-foot`,children:[(0,g.jsxs)(`a`,{href:`/docs/helpers`,style:{textAlign:`left`},children:[(0,g.jsx)(`span`,{className:`dir`,children:C.docs_prev}),(0,g.jsx)(`span`,{className:`lbl`,children:C.sb_helpers})]}),(0,g.jsxs)(`a`,{href:`/docs/components`,children:[(0,g.jsx)(`span`,{className:`dir`,children:C.docs_next_link}),(0,g.jsx)(`span`,{className:`lbl`,children:C.sb_components})]})]})]}),(0,g.jsxs)(`aside`,{className:`docs-toc`,children:[(0,g.jsx)(`h5`,{children:C.docs_toc_label}),w.map(e=>(0,g.jsx)(`a`,{href:`#`+e.id,onClick:D(e.id),className:n===e.id?`active`:``,children:e.label},e.id))]})]}),(0,g.jsxs)(o,{title:`Tweaks`,children:[(0,g.jsx)(u,{label:`Accent`,children:(0,g.jsx)(d,{label:`Color`,value:T.accent,onChange:e=>E(`accent`,e),options:[`#f59042`,`#2A6FDB`,`#1F8A5B`,`#c84a8a`]})}),(0,g.jsxs)(u,{label:`Appearance`,children:[(0,g.jsx)(c,{label:`Theme`,value:T.theme,onChange:e=>E(`theme`,e),options:[{value:`dark`,label:`Dark`},{value:`light`,label:`Light`}]}),(0,g.jsx)(c,{label:`Density`,value:T.density,onChange:e=>E(`density`,e),options:[{value:`comfortable`,label:`Comfortable`},{value:`compact`,label:`Compact`}]})]})]})]})}function w(){return[{title:`Configuration — OptiCoreJS Documentation`}]}var T=e(function(){return(0,g.jsx)(C,{})});export{T as default,w as meta};