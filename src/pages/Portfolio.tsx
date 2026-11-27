import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { contact, mailtoHref, primaryResumePath, siteConfig, whatsappHref } from "../data/config";
import { allProjects, domainFilters, filterProjects, legacySlugs, type PortfolioProject } from "../data/catalog";
import { experience, education } from "../data/experience";
import portrait from "../assets/profile/sahil-vakte.jpg";
import "../portfolio.css";


const description = "Sahil Vakte, product engineer and full-stack developer. React, Next.js, Node.js, Python and AWS—from product planning and architecture to team delivery.";
const tags = domainFilters;
const skills = [
 {title:"Product planning & architecture",items:["Requirements & roadmap","User journeys & domain models","Multi-tenant architecture","Permissions & data boundaries","API contracts & integrations","Delivery planning & handover"]},
 {title:"AI, voice & MCP",items:["Business Voice AI","MCP servers & scoped tools","Voice scheduling & handoff","Clinical documentation","Vision-model integrations","Human review & fallbacks"]},
 {title:"Automation & growth",items:["Event-triggered workflows","Queues & scheduled workers","CRM scoring & attribution","WhatsApp & email campaigns","Reply / consent-aware rules","Marketing measurement"]},
 {title:"Healthcare & interoperability",items:["EMR / EHR application workflows","FHIR R4 clinical documents","OpenEMR integration","Patient & provider portals","HIPAA compliance handling","Clinical consent & audit context"]},
 {title:"Web, mobile & backend",items:["React / Next.js / TypeScript","React Native / Expo","Django / REST Framework","Node.js / FastAPI","PostgreSQL / MySQL","Responsive, accessible interfaces"]},
 {title:"Team leadership & delivery",items:["Team management & coordination","Stakeholder communication","Scope & dependency tracking","Integration testing","CI/CD & deployment","Monitoring & debugging","Backups & recovery planning","Technical SEO & prerendering","Documentation & production support"]}
];

export function PortfolioNav() {
 const [open,setOpen]=useState(false);
 const location=useLocation();
 const navRef=useRef<HTMLElement>(null);
 const buttonRef=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false)},[location.pathname,location.hash]);
 useEffect(()=>{
  const key=(e:KeyboardEvent)=>{if(e.key==="Escape"){setOpen(false);buttonRef.current?.focus()}};
  const outside=(e:PointerEvent)=>{if(e.target instanceof Node&&!navRef.current?.contains(e.target))setOpen(false)};
  document.addEventListener("keydown",key);document.addEventListener("pointerdown",outside);
  return ()=>{document.removeEventListener("keydown",key);document.removeEventListener("pointerdown",outside)};
 },[]);
 return <header className="site-header" ref={navRef}><div className="shell navigation">
  <Link to="/" className="wordmark" aria-label="Sahil.dev — Sahil Vakte home">sahil<span>.dev</span><small>PRODUCT ENGINEERING</small></Link>
  <nav className="nav-desktop" aria-label="Primary"><Link to="/#work">Work</Link><Link to="/#stack">Tech stack</Link><Link to="/#expertise">Expertise</Link><Link to="/#experience">Experience</Link><Link to="/about">About</Link></nav>
  <Link className="button compact nav-contact" to="/#contact">Let's talk</Link>
  <button ref={buttonRef} className="menu-toggle" aria-controls="mobile-menu" aria-expanded={open} aria-label={open?"Close navigation":"Open navigation"} onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}</button>
 </div>{open&&<nav id="mobile-menu" className="shell mobile-menu" aria-label="Mobile"><Link to="/#work">Work</Link><Link to="/#stack">Tech stack</Link><Link to="/#expertise">Expertise</Link><Link to="/#experience">Experience</Link><Link to="/about">About</Link><Link to="/#contact">Contact</Link></nav>}</header>;
}
export function PortfolioFooter(){
 return <footer className="site-footer"><div className="shell footer-inner"><div><Link to="/" className="wordmark">sahil<span>.dev</span></Link><p>Thoughtful software. Practical outcomes.</p></div><div className="footer-links"><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a><a href={contact.gitlab} target="_blank" rel="noreferrer">GitLab</a></div><small>© {new Date().getFullYear()} Sahil Vakte<br/>Pune, India</small></div></footer>
}
function Hero(){
 return <section id="home" className="hero"><div className="shell hero-grid"><div className="hero-copy">
  <p className="eyebrow">Product Engineer & Full-Stack Developer</p>
  <h1>From business requirements<br/><span>to delivered products.</span></h1>
  <p className="hero-intro">I'm Sahil Vakte. I connect product planning, system architecture and team management with hands-on engineering—taking complex business requirements through development, validation and delivery.</p>
  <p className="hero-detail">React, Next.js, Node.js, Python/Django and AWS power my work across SaaS, AI/MCP automation, healthcare and mobile. I help teams decide what to build, organize the work and ship a coherent product.</p>
  <div className="actions"><Link className="button" to="/#work">Explore my work</Link><a className="button secondary" href={primaryResumePath} download>Download résumé</a></div>
  <div className="hero-proof"><div><strong>4+ years</strong><span>Software engineering</span></div><div><strong>End-to-end ownership</strong><span>Product decisions · Team execution · Release</span></div></div>
 </div><figure className="portrait"><div className="portrait-frame"><img src={portrait} alt="Sahil Vakte, product engineer and full-stack developer" width="1254" height="1254" fetchPriority="high"/><span className="portrait-label">ENGINEERING WITH CONTEXT</span></div><figcaption><div><strong>Sahil Vakte</strong><span>Pune, India · Remote roles & freelance</span></div><span className="portrait-monogram" aria-hidden="true">SV</span></figcaption></figure>
 </div><div className="domain-strip"><div className="shell"><span>Product planning & architecture</span><span>Team management & delivery</span><span>AI systems & workflow automation</span><span>Healthcare, FHIR & HIPAA</span></div></div></section>
}
function DeliveryLifecycle(){
 const phases=[
 ["Discover & define","A focused product brief: users, workflows, priorities, scope and acceptance criteria."],
 ["Architect the foundation","A system blueprint: domain models, tenancy, access rules, API contracts and data flows."],
 ["Coordinate the team","Prioritized work, clear responsibilities, dependency tracking and stakeholder communication."],
 ["Engineer the product","Hands-on web, mobile and backend development, connected integrations and resilient automation."],
 ["Validate & release","Tested user journeys, integration checks, deployment configuration and a documented handover."],
 ["Support & evolve","Release support, failure investigation and improvements informed by real product feedback."]
 ];
 return <section id="delivery" className="section delivery-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Ownership across the product lifecycle</p><h2>Product ownership.<br/>Team execution. Reliable delivery.</h2></div><p>I combine product management, technical project management and hands-on development. From stakeholder discussions to release readiness, I keep scope, architecture and team execution connected.</p></div><ol className="delivery-steps">{phases.map(([title,body],i)=><li key={title}><span className="phase-number">0{i+1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>
}

const proofPoints: Record<string,[string,string,string]> = {
 "growth-crm-platform":["Permission-scoped MCP","Tenant isolation · Audited tools","CRM events → rules → scheduled actions"],
 "clinical-documentation-fhir":["Clinical data interoperability","FHIR R4 · Linked clinical resources","Capture → clinician review → document bundle"],
 "healthcare-emr-platform":["Connected clinical workflows","Patient & provider access · EMR integrations","Encounter → documentation → continuity of care"],
 "warehouse-inventory-management":["Operational system design","Inventory · Processing · Dispatch","Stock movement → traceability → fulfilment"],
 "business-voice-ai":["Conversation-to-action infrastructure","Durable workers · Consent · Reconciliation","Call → booking → handoff → settlement"],
 "recruitment-consultant-crm":["Complex business workflow engineering","Legacy data · Permissions · Reminders","Candidate → placement → consultant care"],
 "dental-operations-platform":["Coordinated clinical operations","AWS integrations · Reviewed notes · Durable jobs","Schedule → consent → intake → reviewed document"],
 "property-roof-intelligence":["Geospatial comparison systems","Provider adapters · Synchronized maps","Property → parcel context → historical imagery"],
 "nonprofit-service-management":["Connected web & mobile services","Scoped access · Encrypted records · Imports","Household → service visit → referral → follow-up"]
};
function WorkflowArt({project}:{project:PortfolioProject}){
 const proof=proofPoints[project.slug]??[project.capabilities[0]?.title??"Application engineering",project.technologies.slice(0,3).join(" · "),project.capabilities.slice(0,3).map(g=>g.title).join(" → ")];
 return <div className="workflow-art engineering-art" aria-hidden="true"><div className="art-top"><span>ENGINEERING FOCUS</span><span className="art-index">{String(project.priority).padStart(2,"0")}</span></div><strong className="art-headline">{proof[0]}</strong><p className="art-constraints">{proof[1]}</p><div className="system-flow"><span className="system-dot"/>{proof[2]}</div></div>;
}
export function Work({full=false}:{full?:boolean}){
 const [filter,setFilter]=useState<string>("All");
 const [expanded,setExpanded]=useState(full);
 const [query,setQuery]=useState("");
 const filtered=filterProjects(query,filter);
 const visible=expanded||filter!=="All"||query.trim()?filtered:filtered.slice(0,9);
 return <section id="work" className="section work-section"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">Selected engineering work</p><h2>Selected for complexity.<br/>Built around real needs.</h2></div><p>Nine selected systems show how I turn complex requirements into practical products: permission-scoped MCP, clinical interoperability, durable AI workflows, geospatial intelligence and connected web/mobile operations.</p></div>
  <div className="project-search"><label htmlFor="project-search">Find a project by workflow or technology</label><input id="project-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try voice, MCP, FHIR, campaigns or React Native" /></div><div className="project-toolbar"><div className="filters" role="group" aria-label="Filter work by domain">{tags.map(tag=><button key={tag} aria-pressed={filter===tag} onClick={()=>setFilter(tag)}>{tag}</button>)}</div><p aria-live="polite">{visible.length} of {filtered.length} case studies</p></div>
  <div className="project-grid">{visible.map(p=><article className="project-card" key={p.id}><Link className="project-art-link" tabIndex={-1} aria-hidden="true" to={`/work/${p.slug}`}><WorkflowArt project={p}/></Link><div className="project-body"><p className="project-category">{p.domains.slice(0,2).join(" / ")}</p><h3><Link to={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.tagline}</p><ul className="project-points">{p.capabilities.slice(0,3).map(group=><li key={group.title}>{group.title}</li>)}</ul><p className="ownership-label">Planning · Architecture · Development · Delivery</p><div className="project-stack">{p.technologies.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><Link className="text-link" to={`/work/${p.slug}`}>Read case study<span className="sr-only">: {p.title}</span></Link></div></article>)}</div>
  {visible.length===0&&<p className="no-results" role="status">No matching case studies. Try a different term or select All.</p>}
  {!expanded&&filter==="All"&&!query.trim()&&<div className="work-more"><button className="button outline" onClick={()=>setExpanded(true)}>Explore all {allProjects.length} case studies</button><p>Explore the wider portfolio across web, mobile, AI, operations and community platforms.</p><Link className="text-link archive-link" to="/work">View the complete project archive</Link></div>}
  <p className="work-note">Project names are descriptive to respect client confidentiality. Engineering summaries are illustrative; case studies distinguish development implementations where applicable.</p>
 </div></section>
}
function TechStack(){
 const groups=[
 {name:"React & Next.js development",caseSlug:"growth-crm-platform",caseLabel:"Next.js platform case study",stack:["TypeScript","JavaScript","React","Next.js"],detail:"Component systems, responsive interfaces and application routing."},
 {name:"Node.js, Python & backend engineering",caseSlug:"business-voice-ai",caseLabel:"Django backend case study",stack:["Node.js","Express.js","Python","Django","Django REST Framework","FastAPI"],detail:"Domain logic, API contracts, background work and integrations."},
 {name:"Databases & platform engineering",caseSlug:"recruitment-consultant-crm",caseLabel:"CRM and data integration case study",stack:["PostgreSQL","MySQL","Drizzle ORM","REST APIs"],detail:"Relational models, tenant boundaries and existing-system integration."},
 {name:"React Native mobile development",caseSlug:"patient-wellness-mobile",caseLabel:"Patient mobile app case study",stack:["React Native","Expo","SQLite"],detail:"Patient, community and connected-device application workflows."},
 {name:"AI integration & healthcare FHIR",caseSlug:"clinical-documentation-fhir",caseLabel:"FHIR interoperability case study",stack:["MCP","OpenAI API","Retell","FHIR R4","OpenEMR"],detail:"Scoped tools, conversational actions and structured clinical documents."},
 {name:"AWS, cloud & delivery",caseSlug:"dental-operations-platform",caseLabel:"AWS integration case study",stack:["AWS","EC2","S3","SES","Git","CI/CD"],detail:"Cloud services, deployment configuration, release checks and maintainable handover."}
 ];
 return <section id="stack" className="section stack-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">The tools behind the work</p><h2>Full-stack development.<br/>The tools behind it.</h2></div><p>React and Next.js interfaces, Node.js and Python/Django services, React Native mobile apps and AWS integrations. Each technology connects to a case study showing the workflows, boundaries and delivery decisions behind it.</p></div><div className="tech-grid">{groups.map((g,i)=><article className="tech-card" key={g.name}><span className="tech-number">0{i+1}</span><h3>{g.name}</h3><div className="tech-pills">{g.stack.map(t=><span key={t}>{t}</span>)}</div><p>{g.detail}</p><Link className="text-link tech-evidence" to={`/work/${g.caseSlug}`}>{g.caseLabel}</Link></article>)}</div></div></section>
}

export function ScrollEffects(){
 const location=useLocation();
 useEffect(()=>{
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window))return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.08});
  document.querySelectorAll(".section-heading,.project-card,.tech-card,.delivery-steps li,.specialty,.experience-row,.case-block").forEach(el=>{el.classList.add("reveal-ready");observer.observe(el)});
  return ()=>{observer.disconnect();document.querySelectorAll(".reveal-ready").forEach(el=>el.classList.remove("reveal-ready"))};
 },[location.pathname]);
 return <div className="reading-progress" aria-hidden="true"/>;
}
function Expertise(){
 return <section id="expertise" className="section expertise-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Specialization, with range</p><h2>Product thinking.<br/>Engineering depth.</h2></div><p>I design the product and the system together: user journeys, domain models, permissions, integration contracts, automation rules and the operating model after delivery.</p></div>
 <div className="specialty"><div><span className="small-label">HEALTHCARE & EMR ENGINEERING</span><h3>From patient interaction<br/>to structured clinical data.</h3><p>Patient and provider portals, encounters, SOAP notes, clinical forms, scheduling, telehealth and billing workflows.</p><Link className="text-link" to="/work/clinical-documentation-fhir">Explore the FHIR case study</Link></div><div className="fhir-panel"><p>Hands-on FHIR R4</p><div className="resource-pills">{["Bundle","Composition","Patient","Encounter","Practitioner","Organization"].map(r=><span key={r}>{r}</span>)}</div><p>Clinical document preparation with linked resources, LOINC-coded note types and narrative sections.</p><small>HIPAA compliance handling: role-based access, auditability, PHI-conscious workflows, clinical review and deployment safeguards. Compliance is validated within the complete organizational and infrastructure environment.</small></div></div>
 <div className="automation-highlights"><article><p className="eyebrow">MCP & marketing automation</p><h3>Connect assistants to real product capabilities.</h3><p>Permission-scoped tools for content, CRM and analytics, backed by event-driven rules, scheduled workers and audited changes.</p><Link className="text-link" to="/work/growth-crm-platform">Explore the automation platform</Link></article><article><p className="eyebrow">Conversational AI infrastructure</p><h3>Connect conversations to reliable operations.</h3><p>Booking and human handoff backed by durable workers, consent checks, webhook reconciliation and billing workflows.</p><Link className="text-link" to="/work/business-voice-ai">Explore business Voice AI</Link></article></div><div className="skills-grid">{skills.map(group=><div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></div></section>
}
function Experience(){
 return <section id="experience" className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Professional experience</p><h2>Ownership beyond<br/>the interface.</h2></div><p>Requirements gathering, stakeholder communication, scope and priorities, system architecture, team coordination, hands-on development and release ownership.</p></div><div className="experience-list">{experience.map((job,i)=><article className="experience-row" key={job.id}><div className="experience-date">{job.start} — {job.end}<span>{i===0?"Current role":"Previous role"}</span></div><div><h3>{job.title}</h3><p className="company">{job.company}</p><p>{job.summary}</p><ul>{job.highlights.map(h=><li key={h}>{h}</li>)}</ul><div className="project-stack">{job.stack.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></div></section>
}
export function About(){
 return <section id="about" className="section about-section"><div className="shell about-grid"><div><p className="eyebrow">The engineer behind the work</p><h2>Shape the product.<br/>Organize the delivery. Build it.</h2></div><div><p className="large-copy">I'm a product engineer and full-stack developer based in Pune, India, with 4+ years of experience. I combine product planning, technical project management and team management with the engineering skills to deliver web, mobile and backend systems.</p><p>My work starts with people and their processes: stakeholder discussions, requirements gathering, user journeys and acceptance criteria. I translate that context into scope, architecture and a delivery plan, coordinate tasks and dependencies, and stay hands-on through development, integration, testing and handover.</p><p>Across SaaS, AI/MCP automation, healthcare, commerce and operational platforms, I focus on the decisions that make software usable and maintainable: permissions, data models, integration contracts and failure handling. Healthcare work includes FHIR clinical documents and HIPAA compliance considerations in access, auditing and PHI handling.</p><div className="education-list">{education.map(e=><div key={e.id}><strong>{e.degree}</strong><span>{e.institution}</span><small>{e.start} – {e.end}</small></div>)}</div><a className="text-link" href={primaryResumePath} download>Download my résumé</a></div></div></section>
}
export function Contact(){
 const [copied,setCopied]=useState(false);
 const [copyError,setCopyError]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText(contact.email);setCopied(true);setCopyError(false)}catch{setCopyError(true)}}
 return <section id="contact" className="section contact-section"><div className="shell contact-grid"><div><p className="eyebrow">Let's build something useful</p><h2>Your next product.<br/>My next challenge.</h2><p>Hiring a product engineer or full-stack developer, or looking for a freelance partner to take a product from requirements to release? I help with product planning, architecture, team coordination and hands-on React, Next.js, Node.js, Django and mobile development.</p><div className="actions"><a className="button" href={mailtoHref()}>Start a conversation</a><a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a></div></div><div className="contact-details"><span className="small-label">DIRECT CONTACT</span><a className="email-address" href={mailtoHref()}>{contact.email}</a><button className="copy-button" onClick={copy}>{copied?"Email copied":"Copy email address"}</button><span className="sr-only" role="status">{copied?"Email copied to clipboard":copyError?"Please select and copy the email address above.":""}</span>{copyError&&<p>Select and copy the email address above.</p>}<div className="contact-divider"/><a href={whatsappHref()} target="_blank" rel="noreferrer">{contact.phoneDisplay} · WhatsApp</a><p>Pune, Maharashtra, India</p><p className="availability">Available for remote roles & freelance product engagements</p></div></div></section>
}
export default function Portfolio(){
 const person={"@context":"https://schema.org","@type":"Person",name:siteConfig.name,alternateName:"Sahil Vakte",jobTitle:siteConfig.role,image:siteConfig.siteUrl+portrait,description,address:{"@type":"PostalAddress",addressLocality:"Pune",addressRegion:"Maharashtra",addressCountry:"IN"},url:siteConfig.siteUrl,"@id":siteConfig.siteUrl+"/#person",knowsAbout:["Product planning","Product management","Technical project management","Team management","Requirements gathering","Product delivery","HIPAA compliance handling","Software architecture","Business Voice AI","MCP","Marketing automation","Healthcare software","EMR","FHIR R4","React","Next.js","TypeScript","JavaScript","Python","Django","Django REST Framework","Node.js","FastAPI","PostgreSQL","MySQL","Drizzle ORM","React Native","Expo","SQLite","OpenAI API","Retell","OpenEMR","Git","CI/CD","AWS","Vite","Technical SEO"],sameAs:[contact.linkedin,contact.github,contact.gitlab]};
 return <><SEO title="Sahil Vakte | Product Engineer & Full-Stack Developer" description={description} path="/" structuredData={[person,{"@context":"https://schema.org","@type":"WebSite","@id":siteConfig.siteUrl+"/#website",url:siteConfig.siteUrl,name:"Sahil.dev — Sahil Vakte",alternateName:"Sahil Vakte",author:{"@id":siteConfig.siteUrl+"/#person"}}]}/><Hero/><TechStack/><Work/><DeliveryLifecycle/><Expertise/><Experience/><About/><Contact/></>
}
export function Standalone({section}:{section:"about"|"work"|"contact"}){
 const titles={about:"About Sahil Vakte",work:"Full-Stack Development Case Studies",contact:"Contact Sahil Vakte"};
 return <><SEO title={`${titles[section]} | Product Engineering`} description={section==="work"?"Explore product engineering case studies: MCP automation, FHIR, EMR, Node.js, AWS integrations, geospatial systems and web/mobile operations by Sahil Vakte.":section==="about"?"Meet Sahil Vakte: product engineer combining requirements, architecture, team management and hands-on full-stack development from planning to delivery.":"Hire Sahil Vakte for remote product engineering, full-stack development or freelance delivery. React, Next.js, Node.js, Django, AWS and healthcare integrations."} path={`/${section}`} structuredData={section==="work"?{"@context":"https://schema.org","@type":"CollectionPage",name:titles.work,url:siteConfig.siteUrl+"/work",mainEntity:{"@type":"ItemList",itemListElement:allProjects.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:siteConfig.siteUrl+"/work/"+p.slug}))}}:{"@context":"https://schema.org","@type":section==="about"?"ProfilePage":"ContactPage",url:siteConfig.siteUrl+"/"+section,mainEntity:{"@type":"Person","@id":siteConfig.siteUrl+"/#person",name:siteConfig.name,jobTitle:siteConfig.role}}}/><div className="shell standalone-heading"><p className="eyebrow">Sahil Vakte / {section}</p><h1>{titles[section]}</h1></div>{section==="work"?<Work full/>:section==="about"?<><About/><TechStack/><Expertise/></>:<Contact/>}</>
}
export function ProjectDetail(){
 const {slug=""}=useParams();
 const project=allProjects.find(p=>p.slug===slug);
 if(legacySlugs[slug])return <Navigate to={`/work/${legacySlugs[slug]}`} replace/>;
 if(!project)return <MissingPage/>;
 const next=allProjects[(allProjects.indexOf(project)+1)%allProjects.length];
 return <article className="case-study"><SEO title={`${project.title} | Sahil Vakte`} description={project.tagline} path={`/work/${project.slug}`} type="article" structuredData={[{"@context":"https://schema.org","@type":"CreativeWork",name:project.title,description:project.tagline,url:siteConfig.siteUrl+"/work/"+project.slug,keywords:[...project.domains,...project.technologies].join(", "),author:{"@type":"Person","@id":siteConfig.siteUrl+"/#person",name:siteConfig.name}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:siteConfig.siteUrl+"/"},{"@type":"ListItem",position:2,name:"Work",item:siteConfig.siteUrl+"/work"},{"@type":"ListItem",position:3,name:project.title,item:siteConfig.siteUrl+"/work/"+project.slug}]}]}/>
 <header className="case-header"><div className="shell"><nav aria-label="Breadcrumb" className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/work">Work</Link><span>/</span><span>{project.title}</span></nav><p className="eyebrow">{project.categories.join(" / ")}</p><h1>{project.title}</h1><p className="case-intro">{project.tagline}</p><dl className="case-meta"><div><dt>Ownership</dt><dd>Product planning · Architecture · Development · Delivery</dd></div><div><dt>Users</dt><dd>{project.users.join(", ")}</dd></div><div><dt>Project access</dt><dd>Private · Descriptive case study</dd></div></dl></div></header>
 <div className="shell case-content"><div className="case-summary"><div><p className="eyebrow">The context</p><h2>The problem</h2><p>{project.problem}</p></div><div><p className="eyebrow">Engineering scope</p><h2>My contribution</h2><p>{project.role}</p><p>{project.scope}</p></div></div>
 <section className="case-block"><p className="eyebrow">Inside the product</p><h2>Workflows & capabilities</h2><div className="capability-grid">{project.capabilities.map(g=><div key={g.title}><h3>{g.title}</h3><ul>{g.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></section>
 <section className="case-block automation-case"><p className="eyebrow">Automation by design</p><h2>Automation & workflow engineering</h2><div className="capability-grid">{project.automation.map(g=><div key={g.title}><h3>{g.title}</h3><ul>{g.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></section>
 {project.healthcare&&<section className="case-block healthcare-context"><p className="eyebrow">Healthcare integration & data protection</p><h2>FHIR & HIPAA engineering context</h2><div className="case-summary"><div><h3>FHIR integration boundary</h3><p>{project.healthcare.fhir}</p></div><div><h3>Implemented safeguards & workflow controls</h3><ul className="readable-list">{project.healthcare.safeguards.map(s=><li key={s}>{s}</li>)}</ul></div></div><div className="implementation-note"><h3>HIPAA compliance & delivery responsibilities</h3><p>{project.healthcare.boundary}</p></div><p className="standards-links">Technical references: <a href="https://www.hl7.org/fhir/R4/overview.html" target="_blank" rel="noreferrer">HL7 FHIR R4</a> · <a href="https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html" target="_blank" rel="noreferrer">HHS HIPAA Security Rule</a></p></section>}
 <section className="case-block architecture-block"><div><p className="eyebrow">System design</p><h2>How the pieces connect</h2><p>{project.architecture.note||"An application-level view of the main interfaces, services and data boundaries."}</p><p className="diagram-caption">Illustrative architecture · No client data shown</p></div><ol className="architecture-layers">{project.architecture.layers.map(layer=><li key={layer}>{layer}</li>)}</ol></section>
 <section className="case-block case-summary"><div><p className="eyebrow">Engineering decisions</p><h2>Challenges addressed</h2><ul className="readable-list">{project.challenges.map(x=><li key={x}>{x}</li>)}</ul></div><div><p className="eyebrow">Implementation</p><h2>What was built</h2><ul className="readable-list">{project.built.map(x=><li key={x}>{x}</li>)}</ul></div></section>
 {project.outcome&&<aside className="implementation-note"><h3>Implementation status</h3><p>{project.outcome}</p></aside>}
 <section className="case-block case-summary"><div><h2>Technology</h2><div className="project-stack">{project.technologies.map(x=><span key={x}>{x}</span>)}</div><h3 className="integration-heading">Integrations</h3><p>{project.integrations.join(" · ")}</p></div><div><h2>Engineering takeaways</h2>{project.learnings.map(x=><p key={x}>{x}</p>)}</div></section>
 <nav className="case-next" aria-label="More work"><Link className="button outline" to="/work">All case studies</Link><Link to={`/work/${next.slug}`}><span>Next case study</span><strong>{next.title}</strong></Link></nav></div><Contact/></article>
}
export function MissingPage(){return <div className="shell missing-page"><SEO title="Page not found | Sahil Vakte" description="Explore software engineering case studies by Sahil Vakte." path="/404" noIndex/><p className="eyebrow">Page not found</p><h1>Let's get you back<br/>to the work.</h1><p>The page you're looking for isn't available.</p><Link className="button" to="/work">Explore case studies</Link></div>}
