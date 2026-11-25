import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { allProjects, legacySlugs } from "./data/catalog";
import { siteConfig } from "./data/config";
export const routes = ["/", "/about", "/work", "/contact", ...allProjects.map(p => "/work/" + p.slug)];
export const aliases = legacySlugs;
export const origin = siteConfig.siteUrl;
export const projectChecks = allProjects.map(p=>({slug:p.slug,title:p.title,healthcare:!!p.healthcare,automation:p.automation.length>0}));
export function render(url: string) {
  return renderToString(<HelmetProvider><StaticRouter location={url}><App /></StaticRouter></HelmetProvider>);
}

export { filterProjects } from "./data/catalog";
