import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const domain = "https://sahilvakte.dev";
const pages = [
  ["/about", "About Sahil Vakte | Software Engineer & Product Engineer", "Meet Sahil Vishnu Vakte, a Software Engineer in Pune with 4+ years of experience in React.js, React Native, Django, Node.js, frontend architecture and product delivery."],
  ["/work", "Sahil Vakte | Software Engineering Projects & Case Studies", "Explore Sahil Vakte's software engineering case studies across healthcare EMR, AI computer vision, EdTech, SaaS, home services and delivery platforms."],
  ["/contact", "Contact Sahil Vakte | Software Engineer in Pune", "Contact Sahil Vishnu Vakte, a Software Engineer and React developer in Pune, Maharashtra, for frontend, full-stack and product engineering opportunities."],
  ["/work/openemr-healthcare-platform", "OpenEMR Healthcare EMR Platform | Sahil Vakte", "A healthcare EMR case study by Sahil Vakte: a React and Django REST Framework application integrated with OpenEMR for clinical workflows, telehealth, billing and healthcare services."],
  ["/work/rite-clinic", "Rite Clinic | React Native Healthcare Platform — Sahil Vakte", "A React Native healthcare and wellness platform for appointments, clinical forms, exercise, nutrition and secure API-driven patient experiences."],
  ["/work/ai-exercise-tracker", "AI Exercise Tracker | Computer Vision Project — Sahil Vakte", "A real-time exercise tracking project built with React, TensorFlow.js, MoveNet and MediaPipe for browser pose estimation, rep counting and form analysis."],
  ["/work/rite-tutor", "Rite Tutor | EdTech & Virtual Classroom Platform — Sahil Vakte", "An EdTech platform built with React and REST APIs for virtual classrooms, learning management, assessments, educational content and Zoom live sessions."],
  ["/work/rite-restaurant", "Restaurant Operations & Marketing Platform — Sahil Vakte", "A React SaaS platform for restaurant menu, order, multi-location operations and marketing workflows with Stripe, delivery and messaging integrations."],
  ["/work/homepros", "HomePros | B2B2C Home Services Platform — Sahil Vakte", "A React B2B2C home-services platform combining service management, CRM, lead management and role-based workflows for businesses, employees and customers."],
  ["/work/instant-delivery", "Instant Delivery Platform | React + Stripe + Uber Direct — Sahil Vakte", "A reusable React ordering and delivery platform with configurable storefronts, checkout, Stripe payments, Uber Direct integration and REST APIs."],
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const source = await readFile(join("dist", "index.html"), "utf8");

for (const [path, title, description] of pages) {
  const url = `${domain}${path}`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  let html = source
    .replace(/<title[^>]*>.*?<\/title>/s, `<title data-rh="true">${safeTitle}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"[^>]*\/?>/s, `<meta name="description" content="${safeDescription}" data-rh="true" />`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"[^>]*\/?>/s, `<link rel="canonical" href="${url}" data-rh="true" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"[^>]*\/?>/s, `<meta property="og:title" content="${safeTitle}" data-rh="true" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"[^>]*\/?>/s, `<meta property="og:description" content="${safeDescription}" data-rh="true" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"[^>]*\/?>/s, `<meta property="og:url" content="${url}" data-rh="true" />`)
    .replace(/<meta\s+name="twitter:title"\s+content="[^"]*"[^>]*\/?>/s, `<meta name="twitter:title" content="${safeTitle}" data-rh="true" />`)
    .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"[^>]*\/?>/s, `<meta name="twitter:description" content="${safeDescription}" data-rh="true" />`);

  if (path.startsWith("/work/")) html = html.replace('property="og:type" content="website"', 'property="og:type" content="article"');
  const output = join("dist", path.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

const notFound = source
  .replace(/<title[^>]*>.*?<\/title>/s, '<title data-rh="true">Page not found | Sahil Vakte</title>')
  .replace('content="index, follow, max-image-preview:large"', 'content="noindex, follow"');
await writeFile(join("dist", "404.html"), notFound);
