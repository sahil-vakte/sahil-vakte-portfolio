import type { Project } from "./projects";

type Entry = { slug: string; title: string; tagline: string; categories: Project["categories"]; priority: number; problem: string; users: string[]; scope: string; technologies: string[]; integrations: string[]; layers: string[]; capabilities: Project["capabilities"]; challenges: string[]; built: string[]; learnings: string[]; outcome?: string };
function entry(p: Entry): Project {
 return { ...p, id:p.slug, shortTitle:p.title, featured:true, role:"Application engineering across the interfaces, workflows and integrations described below.", architecture:{layers:p.layers, externalServices:p.integrations}, links:[{label:"Private project · descriptive case study"}], visualKey:"", accent:"teal" };
}
export const additionalProjects: Project[] = [
entry({
slug:"clinical-documentation-fhir", title:"AI Clinical Documentation & FHIR", priority:2,
tagline:"From consultation audio to clinician-reviewed notes and structured clinical documents.",
categories:["Healthcare","AI","Full Stack","Mobile"],
problem:"Clinical documentation spans audio, patient identity, encounter context and EHR records. Turning a recording into a usable note requires a review workflow and a clear link back to the correct patient and visit.",
users:["Clinicians","Hospital administrators","Care teams"],
scope:"Web and mobile clinical documentation implementation with asynchronous audio processing, note review and EHR connectivity. Development implementation; deployment and clinical validation remain environment-specific.",
technologies:["React","React Native / Expo","Django REST Framework","Celery","Python","FHIR R4"],
integrations:["AWS HealthScribe","OpenEMR"],
layers:["Web & mobile recording / upload","Django API + asynchronous processing","Clinician review + encounter association","FHIR R4 document preparation / EHR adapters"],
capabilities:[
{title:"Audio to clinical note",items:["Recording and upload workflows with asynchronous processing","Clinical note editing with Subjective, Objective, Assessment and Plan sections","Patient and encounter context carried into the review workspace"]},
{title:"FHIR R4 document engineering",items:["Document Bundle with Composition as the first resource","Patient, Practitioner, Organization and Encounter references","LOINC-coded note types and escaped narrative XHTML","Deterministic resource identifiers and document timestamps"]},
{title:"Clinical system connectivity",items:["OpenEMR connection and scope handling","Patient directory and appointment-feed integration","Encounter creation and consultation-delivery workflows"]}
],
challenges:["Maintaining patient, encounter and author references across a multi-resource clinical document","Separating generated text, clinician review and downstream delivery","Keeping queued processing and UI status understandable when external services are delayed"],
built:["Web and mobile documentation workflows","Structured SOAP-note editing and encounter association","FHIR R4 document Bundle generation","OpenEMR integration adapters and scoped access handling"],
learnings:["Interoperability needs both well-formed resources and correct clinical context. Document generation alone does not establish end-to-end conformance.","Human review belongs in the core clinical workflow, before generated notes are treated as final documentation."],
outcome:"Implemented clinical documentation and FHIR R4 document preparation. This is not a claim of FHIR certification or a clinically validated autonomous system."
}),
entry({
slug:"warehouse-inventory-management",title:"Warehouse & Inventory Management",priority:3,
tagline:"A connected workspace for stock inward, inventory, order processing and dispatch.",
categories:["SaaS","Frontend"],
problem:"Warehouse teams need visibility from incoming stock through item processing and dispatch. Disconnected product, batch and order records make handoffs harder to follow.",
users:["Warehouse administrators","Operations staff","Employees"],
scope:"React operations application with product and location management, stock batches, item-level processing and order-label workflows.",
technologies:["React","Material UI","REST APIs","ExcelJS","jsPDF","QR codes"],
integrations:["QZ Tray printing","REST APIs"],
layers:["Admin & employee workspaces","Product / batch / order workflows","REST services","Labels, QR scanning & document exports"],
capabilities:[
{title:"Inventory operations",items:["Product catalogue and colour library","Warehouse locations and employee management","Stock inward, batch records and roll-level details"]},
{title:"Order fulfilment",items:["Order booking and processing views","Item-level processing and order-batch management","Order labels, QR support and print integration"]},
{title:"Operations interface",items:["Role-specific navigation for admins and employees","Data-grid workflows and operational dashboard","Spreadsheet and PDF tooling in the application stack"]}
],
challenges:["Keeping product, batch, location and order context connected during processing","Designing dense operational screens that remain readable and actionable","Supporting printed labels alongside browser-based operations"],
built:["Inventory and stock-inward interfaces","Order-booking and item-processing screens","Admin and employee navigation","Label and print workflows"],
learnings:["Operational interfaces should make the next action obvious while preserving the stock and order context behind it."]
}),
entry({
slug:"dental-practice-automation",title:"Dental Practice & Voice Automation",priority:4,
tagline:"Practice workflows, patient intake and voice-assisted appointment management.",
categories:["Healthcare","AI","Full Stack"],
problem:"Practice teams handle scheduling, patient intake and phone enquiries across multiple systems. Voice automation must work within real booking rules and the practice's existing records.",
users:["Practice managers","Dental teams","Patients","Platform administrators"],
scope:"Next.js practice application with role-specific workspaces, intake and scribe modules, and managed voice-agent onboarding connected to dental scheduling services.",
technologies:["Next.js","React","TypeScript","PostgreSQL","AWS","REST APIs"],
integrations:["Open Dental","Retell","NexHealth","AWS Cognito"],
layers:["Patient / staff / practice workspaces","Next.js APIs + practice-specific configuration","Voice tools + identity and booking checks","Dental system integrations"],
capabilities:[
{title:"Practice experience",items:["Patient, staff, dentist and practice workspaces","Patient intake and clinical documentation modules","Practice-specific configuration and access management"]},
{title:"Voice scheduling",items:["Agent onboarding, draft synchronization and activation controls","Provider and chair selection with booking rules","Caller verification before appointment disclosure","Reception transfer and callback paths"]},
{title:"Integration reliability",items:["Signed webhook verification and practice-aware call routing","Appointment ownership checks and successful-operation tracking","Generic greetings when caller matching is ambiguous"]}
],
challenges:["Keeping voice actions within configured practice, provider and chair rules","Preserving verified caller context without disclosing another patient's appointments","Separating draft agent configuration from published telephone behaviour"],
built:["Practice-specific voice onboarding and settings","Role-based dental application workflows","Booking and patient-verification integration paths","Webhook and call-routing controls"],
learnings:["Voice agents become useful when their tools enforce the same constraints as the scheduling system.","Clear fallbacks are essential when identity matching or external integrations cannot provide a reliable answer."]
}),
entry({
slug:"retail-fulfilment-platform",title:"Retail Commerce & Fulfilment",priority:9,
tagline:"Customer ordering connected to picking, packing, loading and delivery operations.",
categories:["SaaS","Full Stack"],
problem:"Retail fulfilment requires customer orders and staff tasks to remain connected through every handoff, from browsing a catalogue to preparing a delivery.",
users:["Customers","Managers","Picking and packing teams","Drivers"],
scope:"Functional grocery-commerce reference implementation. Payment, tax and courier dispatch behaviours are demonstration flows rather than live financial or dispatch integrations.",
technologies:["React","Material UI","FastAPI","Python","SQLite"],
integrations:["SMTP email adapter","PDF receipts"],
layers:["Customer storefront + staff operations","FastAPI application services","Persistent catalogue, orders & workflow state","Email outbox + receipt generation"],
capabilities:[
{title:"Customer ordering",items:["Product photos, category browsing and cart offers","Order history and customer email preferences","Receipt and refund document downloads"]},
{title:"Fulfilment workspace",items:["Picking, packing, loading and delivery stages","Inventory and product-media management","Staff performance reporting"]},
{title:"Lifecycle messaging",items:["Durable email outbox and background worker","Opt-in abandoned-cart reminders and campaigns","Capture mode for development email verification"]}
],
challenges:["Maintaining a coherent order state across customer and staff workflows","Separating real persistence from simulated third-party services","Honouring customer preferences in lifecycle messaging"],
built:["Customer storefront and operational workspaces","End-to-end local fulfilment workflow","Media management and PDF document flows","Email outbox and opt-in reminders"],
learnings:["A convincing operational demo should be explicit about which integrations are simulated."],
outcome:"Functional development reference with persisted local workflows; live payments and courier dispatch are outside the demonstrated implementation."
}),
entry({
slug:"growth-crm-platform",title:"Website, CRM & Marketing Platform",priority:10,
tagline:"Content publishing, lead capture and marketing operations in a multi-site workspace.",
categories:["SaaS","Full Stack"],
problem:"Businesses need website content, forms and lead follow-up to share context. Separate tools often leave teams reconstructing a visitor's path before they can act.",
users:["Site owners","Marketing teams","Sales teams","Administrators"],
scope:"Development platform combining site content, form building, CRM and scheduled marketing operations. External integrations support mock and configured provider modes.",
technologies:["Next.js","TypeScript","PostgreSQL","Drizzle","React"],
integrations:["Email adapters","Marketing provider adapters","Object storage"],
layers:["Website runtime + administration","Forms, leads & publishing services","Tenant-aware PostgreSQL data","Background scheduler + provider adapters"],
capabilities:[
{title:"Content and capture",items:["Page and content-management workflows","Visual form builder with conditional rules","Media library and responsive image variants"]},
{title:"Lead operations",items:["Lead owner assignment and round-robin allocation","Kanban pipeline stages","Date, owner and score filtering with CSV export"]},
{title:"Platform foundations",items:["Tenant-aware data access","TOTP and recovery-code workflows","Scheduled jobs and integration mock modes"]}
],
challenges:["Preserving tenant context across public websites and administration","Keeping integration development testable without live provider credentials","Connecting flexible content and form models to actionable CRM records"],
built:["Website and form-management interfaces","Lead pipeline and assignment workflows","Media-library and responsive-image handling","Authentication and background-job foundations"],
learnings:["Provider adapters and explicit mock modes make integration behaviour easier to inspect before activation."]
}),
entry({
slug:"hr-workforce-management",title:"HR & Workforce Management",priority:13,
tagline:"Role-based employee, manager and administrator workflows in one application.",
categories:["SaaS","Full Stack"],
problem:"HR workflows depend on clear responsibilities, consistent reference data and appropriate access for employees, managers and administrators.",
users:["Employees","Managers","HR administrators"],
scope:"Integrated development implementation across HR module areas. It is not presented as a completed or production-approved replacement.",
technologies:["React","Django","Python","SQLite","REST APIs"],
integrations:["Email notifications"],
layers:["Employee / manager / administrator interfaces","Django APIs + permissions","Workflows + configured master data","SQLite persistence"],
capabilities:[
{title:"People and access",items:["Employee and manager experiences","Role and permission configuration","Administrative reference-data management"]},
{title:"HR workflows",items:["Leave configuration and entitlement setup","Operational resource and workflow screens","Development notifications and demonstration data"]}
],
challenges:["Separating permission rules from navigation visibility","Making reference data and entitlement configuration explicit","Keeping development-readiness claims distinct from production approval"],
built:["Role-based HR interfaces","Administrative and employee workflow modules","Permission and master-data foundations"],
learnings:["Operational HR readiness depends on the configured policies and data as well as the application code."],
outcome:"Integrated development implementation; production approval remains separate."
})
];
