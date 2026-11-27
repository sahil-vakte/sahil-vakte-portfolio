from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from xml.sax.saxutils import escape
ROOT=Path(__file__).resolve().parents[1]
out=ROOT/'src/assets/resume/Sahil_Vakte_Resume.pdf'
styles={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=21,leading=25,spaceAfter=5),
 'title':ParagraphStyle('title',fontName='Helvetica-Bold',fontSize=11.5,leading=15,spaceAfter=6),
 'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=9,leading=12,spaceAfter=3),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=11,leading=14,textColor=colors.HexColor('#244b7a'),spaceBefore=12,spaceAfter=6,keepWithNext=True),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=10,leading=13.4,spaceAfter=5),
 'job':ParagraphStyle('job',fontName='Helvetica-Bold',fontSize=10.2,leading=13.4,spaceBefore=6,spaceAfter=3,keepWithNext=True),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=10,leading=13.4,leftIndent=10,firstLineIndent=-8,spaceAfter=4),
}
story=[]
def p(text,style='body'):story.append(Paragraph(text,styles[style]))
def section(t):p(t,'section')
def bullet(t):p('- '+t,'bullet')
def job(t):p(t,'job')
def link(url,label=None):return '<link href="'+url+'" color="#244b7a">'+escape(label or url.replace('https://',''))+'</link>'
p('SAHIL VISHNU VAKTE','name')
p('Product Engineer &amp; Full-Stack Developer','title')
p('Pune, India | Remote roles &amp; freelance engagements','contact')
p('+91 94051 99411 | '+link('mailto:sahilvaktepatil123@gmail.com','sahilvaktepatil123@gmail.com')+' | '+link('https://sahilvakte.dev'),'contact')
p(link('https://www.linkedin.com/in/sahil-vakte-3915a5225/','linkedin.com/in/sahil-vakte-3915a5225')+' | '+link('https://github.com/sahil-vakte'),'contact')
section('PROFESSIONAL SUMMARY')
p('Product engineer and full-stack developer with 4+ years of experience across healthcare, SaaS, AI automation and mobile products. Combine product planning, system architecture, technical project management and team coordination with hands-on development. Own requirements gathering, scope, implementation, integration, testing and delivery using React, Next.js, Node.js, Python/Django and AWS. Experience with EMR/EHR workflows, FHIR R4 clinical documents and HIPAA-aware engineering.')
section('CORE SKILLS')
p('<b>Product &amp; leadership:</b> Requirements gathering, stakeholder communication, product planning, prioritization, system architecture, team management, task breakdown, dependency coordination, delivery planning.')
p('<b>Web &amp; mobile:</b> React, Next.js, TypeScript, JavaScript, Redux, HTML5, CSS3, React Native, Expo.')
p('<b>Backend &amp; data:</b> Node.js, Express.js, Python, Django, Django REST Framework, REST APIs, PostgreSQL, MySQL, MongoDB, SQLite, Drizzle ORM.')
p('<b>Cloud &amp; automation:</b> AWS (EC2, S3, SES), Git, CI/CD, background workers, webhooks, Model Context Protocol (MCP), OpenAI API, Retell, Stripe, CRM and marketing automation.')
p('<b>Healthcare:</b> EMR/EHR, OpenEMR, HL7 FHIR R4, clinical documentation, HIPAA compliance handling, role-based access control (RBAC), auditability and protected health information (PHI) workflows.')
section('PROFESSIONAL EXPERIENCE')
job('Software Engineer (Full Stack) | Rite Clinic Private Limited | Jun 2023 - Present')
bullet('Translate clinical and business requirements into user journeys, product scope, data models, API contracts and delivery plans across web and mobile applications.')
bullet('Coordinate team tasks, dependencies and release priorities while contributing hands-on React, React Native, Django/DRF and Node.js development.')
bullet('Build patient, provider and administrative workflows covering records, appointments, clinical forms, telehealth, prescriptions and billing; integrate OpenEMR, payments and communications.')
bullet('Apply HIPAA-aware access controls, audit context and careful PHI handling; support integration testing, AWS deployments, troubleshooting and ongoing production improvements.')
job('Frontend React.js Developer | Intemize | Oct 2022 - Jun 2023')
bullet('Developed responsive React applications for pharmaceutical and supply-chain workflows using Redux, reusable components and Django REST APIs.')
bullet('Worked with backend, QA and design teams on API integration, debugging, accessibility and cross-browser behavior.')
job('MERN Stack Intern | Shopisthan India Private Limited | Jun 2022 - Oct 2022')
bullet('Built product, cart and checkout interfaces using React; contributed Node.js/Express APIs, MongoDB data integration and frontend/backend debugging.')
story.append(PageBreak())
p('SAHIL VISHNU VAKTE | SELECTED PRODUCT ENGINEERING','title')
p('Portfolio: '+link('https://sahilvakte.dev/work')+' | Product planning, architecture, implementation and delivery','contact')
section('SELECTED PROJECTS')
p('Descriptive project titles preserve client confidentiality. Detailed architecture, contribution and implementation status are available in the linked case studies.')
projects=[
('Marketing Automation & MCP Platform','growth-crm-platform','Built a multi-tenant website, CRM and automation platform with permission-scoped MCP tools, schema validation and audited changes. Scheduled workers recheck consent, replies and execution limits.','Next.js, TypeScript, PostgreSQL, Drizzle ORM, MCP'),
('Clinical Documentation & FHIR Interoperability','clinical-documentation-fhir','Implemented FHIR R4 document Bundles linking Composition, Patient, Encounter, Practitioner and Organization resources, with LOINC-coded notes and clinician review. Added traceable audit context and cleanup workflows.','React, Django REST Framework, FHIR R4, OpenEMR'),
('Conversational AI & Business Operations','business-voice-ai','Connected business-specific calls to appointment booking, human handoff, consent-aware campaigns and billing. Implemented durable background processing, webhook handling and reconciliation for uncertain provider outcomes.','React, Python, Django REST Framework, PostgreSQL, Retell, Stripe'),
('Healthcare EMR & Patient Workflows','healthcare-emr-platform','Developed patient, provider and administrative experiences over OpenEMR, connecting clinical records, appointments and care workflows through role-specific OAuth/API access and application boundaries.','React, Django, OpenEMR, REST APIs'),
('Dental Scheduling, AI Scribe & Patient Intake','dental-operations-platform','Built a practice-scoped evaluation system with guarded scheduling writes, durable jobs, reviewed draft notes and versioned consent. Integrated provider clients for Open Dental, Retell and AWS HealthScribe; production acceptance remains a separate gate.','Next.js, TypeScript, SQLite, AWS integrations'),
('Geospatial Property & Aerial Imagery Intelligence','property-roof-intelligence','Built property and parcel research workflows with comparison of up to three imagery captures, synchronized pan/zoom/rotation and provider availability checks. Source release with provider-dependent imagery coverage.','React, OpenLayers, Python, Django REST Framework'),
]
for title,slug,body,stack in projects:
 job(escape(title)+' | '+link('https://sahilvakte.dev/work/'+slug,'Case study'))
 p(escape(body))
 p('<b>Technology:</b> '+escape(stack))
p('<b>Additional work:</b> Warehouse inventory and dispatch; recruitment and consultant CRM; community-service web/mobile operations with encrypted records, scoped access and validated imports. See portfolio for project scope and release status.')
section('EDUCATION')
p('<b>Master of Computer Applications (MCA)</b> | Dr. D.Y. Patil University, Pune | 2022 - 2024')
p('<b>B.Sc. Computer Science</b> | Savitribai Phule Pune University | 2019 - 2022')
def footer(c,doc):
 c.setFont('Helvetica',8);c.setFillColor(colors.HexColor('#586174'));c.drawRightString(A4[0]-40,22,str(doc.page))
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=40,leftMargin=40,topMargin=33,bottomMargin=33,title='Sahil Vakte - Product Engineer and Full-Stack Developer',author='Sahil Vakte',subject='Product planning, architecture, team management and full-stack delivery')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
from pypdf import PdfReader
reader=PdfReader(str(out))
assert len(reader.pages)==2, "Resume must be exactly two pages"
text="\n".join(page.extract_text() for page in reader.pages)
assert "\ufffd" not in text, "Invalid extracted characters"
for term in ["Node.js", "AWS", "HIPAA", "team management", "FHIR", "EDUCATION"]:
    assert term.lower() in text.lower(), "Missing keyword: " + term
print(str(out) + " - verified two pages and text extraction")
