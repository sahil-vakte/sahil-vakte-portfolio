import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { render, routes, aliases, origin, projectChecks, filterProjects } from "../.prerender/prerender.js";

const source = await readFile("dist/index.html", "utf8");
const escapeHtml = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const template = source
 .replace(/<title[^>]*>[\s\S]*?<\/title>/g, "")
 .replace(/<meta\b[^>]*(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/g, "")
 .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, "");

async function page(route, output) {
 let markup = render(route);
 // React 19 emits native document metadata and image preloads at the front of SSR output.
 const head = [];
 markup = markup.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g, tag => { head.push(tag); return ""; });
 if (!head.some(tag => tag.startsWith("<title"))) throw new Error("Missing SSR title: " + route);
 if (!markup.includes("<h1")) throw new Error("Missing rendered content: " + route);
 const html = template.replace("</head>", head.join("\n") + "\n</head>").replace('<div id="root"></div>', '<div id="root">' + markup + "</div>");
 await mkdir(dirname(output), { recursive: true });
 await writeFile(output, html);
 return html;
}
for (const route of routes) {
 const output = route === "/" ? "dist/index.html" : join("dist", route.slice(1), "index.html");
 await page(route, output);
}
await page("/404", "dist/404.html");
for (const [oldSlug,newSlug] of Object.entries(aliases)) {
 const target = "/work/" + newSlug;
 const file = join("dist","work",oldSlug,"index.html");
 await mkdir(dirname(file), {recursive:true});
 await writeFile(file, '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=' + target + '"><link rel="canonical" href="' + origin + target + '"><title>Case study moved</title></head><body><a href="' + target + '">Continue to case study</a></body></html>');
}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => '  <url><loc>' + escapeHtml(origin + route) + '</loc></url>').join("\n") + "\n</urlset>\n";
await writeFile("public/sitemap.xml",sitemap);
await writeFile("dist/sitemap.xml",sitemap);
await writeFile("dist/robots.txt","User-agent: *\nAllow: /\n\nSitemap: "+origin+"/sitemap.xml\n");
const report = [];
for (const project of projectChecks) {
 const html = await readFile(join("dist","work",project.slug,"index.html"),"utf8");
 if (!html.includes(escapeHtml(project.title))) throw new Error("Missing project content: "+project.slug);
 if (!html.includes("Automation &amp; workflow engineering")) throw new Error("Missing automation: "+project.slug);
 if (project.healthcare && !html.includes("FHIR &amp; HIPAA engineering context")) throw new Error("Missing healthcare context: "+project.slug);
 const canonicals = html.match(/rel="canonical"/g) ?? [];
 const titles = html.match(/<title\b/g) ?? [];
 if (canonicals.length!==1 || titles.length!==1) throw new Error("Duplicate metadata: "+project.slug);
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
 report.push({slug:project.slug,prerendered:true,automation:project.automation,healthcareContext:project.healthcare});
}
await writeFile(".prerender/verification.json",JSON.stringify({routes:routes.length,projects:report},null,2));
console.log("Prerendered "+routes.length+" complete pages, verified "+report.length+" case studies and generated "+Object.keys(aliases).length+" legacy redirects.");

if (!filterProjects("mcp").some(p=>p.slug==="growth-crm-platform")) throw new Error("MCP search failed");
if (!filterProjects("voice retell","AI & Voice").some(p=>p.slug==="business-voice-ai")) throw new Error("Combined voice search failed");
if (filterProjects("unlikely-no-match-7391").length) throw new Error("Empty search state failed");
if (filterProjects("","Healthcare").length!==7) throw new Error("Healthcare filtering failed");
if (filterProjects("","All").length!==26) throw new Error("Complete project archive failed");
console.log("Project search and domain-filter checks passed.");

// Verify public metadata and key positioning in the actual rendered HTML.
const home = await readFile("dist/index.html", "utf8");
for (const term of ["Team management", "Node.js", "AWS", "HIPAA", "Geospatial", "Coordinate the team"]) {
 if (!home.includes(term)) throw new Error("Missing homepage positioning: " + term);
}
if ((home.match(/class="project-card"/g) ?? []).length !== 9) throw new Error("Expected nine selected projects");
if (!filterProjects("geospatial").some(p=>p.slug==="property-roof-intelligence")) throw new Error("Geospatial search failed");
for (const route of routes) {
 const file = route === "/" ? "dist/index.html" : join("dist", route.slice(1), "index.html");
 const html = await readFile(file, "utf8");
 for (const [label, pattern] of [["title", /<title\b/g], ["canonical", /rel="canonical"/g], ["description", /name="description"/g], ["h1", /<h1\b/g]]) {
  if ((html.match(pattern) ?? []).length !== 1) throw new Error("Expected one " + label + ": " + route);
 }
 if (!html.includes("og-product-engineering.png")) throw new Error("Missing social preview: " + route);
 for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
console.log("Verified positioning, nine featured projects, geospatial search and metadata across every route.");
