import { projects, type Project, type CapabilityGroup } from "./projects";
import { additionalProjects } from "./additionalProjects";
export type HealthcareContext = { fhir: string; safeguards: string[]; boundary: string };
export type PortfolioProject = Project & { automation: CapabilityGroup[]; domains: string[]; healthcare?: HealthcareContext };
const expandedProjects: (Project & {automation: CapabilityGroup[]})[] = [
  {
    "id": "business-voice-ai",
    "slug": "business-voice-ai",
    "title": "Business Voice AI & Receptionist Platform",
    "shortTitle": "Business Voice AI & Receptionist Platform",
    "tagline": "Multi-business voice reception, bookings, follow-ups and campaign operations.",
    "categories": [
      "AI",
      "SaaS",
      "Full Stack"
    ],
    "priority": 2,
    "featured": true,
    "problem": "Service businesses need calls to turn into bookings and useful follow-ups, with each business's services, team availability, consent and budget respected.",
    "users": [
      "Business owners",
      "Bookable teams",
      "Staff",
      "Platform administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Business-focused release candidate with web, API and worker layers. Live calls, transfers, payment settlement and production concurrency require deployment-specific acceptance testing.",
    "technologies": [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "Material UI",
      "Python"
    ],
    "integrations": [
      "Retell",
      "Stripe",
      "SMTP"
    ],
    "architecture": {
      "layers": [
        "Public website + vendor / staff workspaces",
        "Tenant-scoped Django APIs + scheduling rules",
        "Durable worker + webhook processing",
        "Voice agents, phone routing & wallet ledger"
      ],
      "externalServices": [
        "Retell",
        "Stripe",
        "SMTP"
      ]
    },
    "capabilities": [
      {
        "title": "Business workspaces",
        "items": [
          "Business-specific agent and phone mapping",
          "Services, bookable team, opening hours and closures",
          "Granular staff permissions independent of bookable-team membership"
        ]
      },
      {
        "title": "Voice reception & handoff",
        "items": [
          "Customer enquiries and availability-aware bookings",
          "Call transcripts, recordings where available and AI analysis",
          "Human handoff configuration and follow-up tracking"
        ]
      },
      {
        "title": "Campaigns & commercial operations",
        "items": [
          "Audience selection, message drafts, scheduling and launch permissions",
          "Consent and opt-out records, timezone and budget checks",
          "Stripe top-ups, auditable wallet ledger and call-cost settlement"
        ]
      }
    ],
    "challenges": [
      "Separating each business's routing, data and permissions",
      "Coordinating call reservations and settlement without duplicate charging",
      "Handling consent, quiet hours and uncertain external-call outcomes"
    ],
    "built": [
      "Business workspaces workflows and interfaces",
      "Voice reception & handoff workflows and interfaces",
      "Campaigns & commercial operations workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Signed webhooks are persisted before background processing.",
          "Campaign dispatch checks consent, opt-outs, recipient timezone, available credit and budget.",
          "Reminder jobs, call synchronization and low-balance notifications run through backend workers.",
          "Uncertain outbound calls are held for reconciliation instead of blind retries."
        ]
      }
    ]
  },
  {
    "id": "recruitment-consultant-crm",
    "slug": "recruitment-consultant-crm",
    "title": "Recruitment, Consultant Care & CRM",
    "shortTitle": "Recruitment, Consultant Care & CRM",
    "tagline": "A modern recruitment platform that preserves existing business records and workflows.",
    "categories": [
      "SaaS",
      "Full Stack"
    ],
    "priority": 6,
    "featured": true,
    "problem": "Recruitment operations span candidates, placements, consultant documents, contracts, purchase orders and timesheets. Modernizing the interface must preserve existing data and access rules.",
    "users": [
      "Recruiters",
      "Consultants",
      "Company users",
      "Administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Application modernization implementation spanning recruitment, consultant care and CRM. Existing-database compatibility is a central design constraint.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "MySQL / MariaDB",
      "React"
    ],
    "integrations": [
      "SMTP",
      "Legacy relational database",
      "Document parsing"
    ],
    "architecture": {
      "layers": [
        "Role-aware web application + public careers",
        "Next.js APIs and database-driven permissions",
        "Existing MySQL / MariaDB records",
        "CV parsing + scheduled reminder services"
      ],
      "externalServices": [
        "SMTP",
        "Legacy relational database",
        "Document parsing"
      ]
    },
    "capabilities": [
      {
        "title": "Recruitment & candidate workflows",
        "items": [
          "Public careers experience and candidate records",
          "In-house CV parsing and matching utilities",
          "Search and configurable business reference data"
        ]
      },
      {
        "title": "Consultant operations",
        "items": [
          "Contracts, purchase orders, timesheets and supporting documents",
          "Access-checked legacy and new document downloads",
          "Database-driven menus, permissions and email routing"
        ]
      },
      {
        "title": "Modernization & delivery",
        "items": [
          "Next.js rebuild over the existing relational schema",
          "Compatibility with existing Laravel bcrypt passwords",
          "Migration scripts, scheduled tasks and deployment documentation"
        ]
      }
    ],
    "challenges": [
      "Preserving legacy users, files and relationships during a framework migration",
      "Keeping scheduled messages configurable by entity and workflow",
      "Applying ownership and permission checks to document access"
    ],
    "built": [
      "Recruitment & candidate workflows workflows and interfaces",
      "Consultant operations workflows and interfaces",
      "Modernization & delivery workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Scheduled reminders cover contract, purchase-order and right-to-work document expiry.",
          "Timesheet reminders and quarterly confirmation requests use configurable schedules.",
          "CV parsing reduces manual extraction while keeping review and recruitment decisions with users."
        ]
      }
    ]
  },
  {
    "id": "email-campaign-crm",
    "slug": "email-campaign-crm",
    "title": "Email Campaign Automation & CRM",
    "shortTitle": "Email Campaign Automation & CRM",
    "tagline": "Audience management, sequenced email outreach and reply-driven lead follow-up.",
    "categories": [
      "SaaS",
      "Full Stack"
    ],
    "priority": 10,
    "featured": true,
    "problem": "Marketing teams need campaign content, recipient eligibility, sending schedules and replies to remain connected instead of managing them in separate spreadsheets and inboxes.",
    "users": [
      "Marketing operators",
      "Sales teams",
      "Administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Website, CRM and campaign-engine implementation with configurable SMTP and IMAP integrations. Deliverability and live mailbox behaviour depend on provider setup and operational review.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "React"
    ],
    "integrations": [
      "SMTP",
      "IMAP"
    ],
    "architecture": {
      "layers": [
        "Website + campaign / CRM administration",
        "Audience, template and campaign services",
        "PostgreSQL-backed send queue",
        "Sender worker + IMAP reply / bounce monitor"
      ],
      "externalServices": [
        "SMTP",
        "IMAP"
      ]
    },
    "capabilities": [
      {
        "title": "Audience & CRM",
        "items": [
          "CSV, Excel and PDF contact import with mapping and validation",
          "Lists, segments, contact history and lead pipeline",
          "Suppression records and audit history"
        ]
      },
      {
        "title": "Campaign orchestration",
        "items": [
          "Merge-tag personalization, contact previews and A/B subjects",
          "Threaded follow-up sequences and recipient-local send windows",
          "Daily/hourly limits and configurable warm-up"
        ]
      },
      {
        "title": "Feedback loop",
        "items": [
          "Open and click tracking",
          "Reply and bounce monitoring via IMAP",
          "Unsubscribe controls and contact export / erasure workflows"
        ]
      }
    ],
    "challenges": [
      "Coordinating queue state with external mailbox results",
      "Preventing follow-ups after replies or unsubscribe events",
      "Applying time windows and campaign limits at send time"
    ],
    "built": [
      "Audience & CRM workflows and interfaces",
      "Campaign orchestration workflows and interfaces",
      "Feedback loop workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "The worker schedules eligible recipients and claims queued messages for sending.",
          "Reply detection creates CRM leads and stops follow-ups.",
          "A/B winner selection, campaign completion and bounce handling run in background jobs.",
          "Suppression is rechecked before sending; campaigns can pause on bounce thresholds."
        ]
      }
    ]
  },
  {
    "id": "corporate-website-platform",
    "slug": "corporate-website-platform",
    "title": "Corporate Website & Content Platform",
    "shortTitle": "Corporate Website & Content Platform",
    "tagline": "Search-ready service pages with a managed backend and repeatable delivery.",
    "categories": [
      "SaaS",
      "Full Stack"
    ],
    "priority": 18,
    "featured": true,
    "problem": "A business website needs dependable content, enquiries and publishing workflows as well as a polished public interface.",
    "users": [
      "Business owners",
      "Content administrators",
      "Prospective clients"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Full-stack business website with source-level deployment and SEO workflows. Public form behaviour depends on the configured production services.",
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "Django",
      "PostgreSQL"
    ],
    "integrations": [
      "SMTP",
      "Turnstile",
      "GitHub Actions"
    ],
    "architecture": {
      "layers": [
        "Prerendered React website",
        "Django API + administration",
        "PostgreSQL content / enquiry storage",
        "CI checks + scoped deployment workflow"
      ],
      "externalServices": [
        "SMTP",
        "Turnstile",
        "GitHub Actions"
      ]
    },
    "capabilities": [
      {
        "title": "Public experience",
        "items": [
          "Responsive service and company pages",
          "Prerendered content and technical SEO checks",
          "Accessible content structure and enquiry entry points"
        ]
      },
      {
        "title": "Content & operations",
        "items": [
          "Django-managed application backend",
          "Configured email and anti-spam boundaries for public forms",
          "Separate application processes and deployment configuration"
        ]
      },
      {
        "title": "Delivery engineering",
        "items": [
          "Content validation, type checks and build checks",
          "CI-driven deployment workflow",
          "Backup, rollback and shared-server operating documentation"
        ]
      }
    ],
    "challenges": [
      "Keeping static content and backend form behaviour consistent",
      "Deploying safely alongside another application on shared infrastructure",
      "Separating private administration from public content"
    ],
    "built": [
      "Public experience workflows and interfaces",
      "Content & operations workflows and interfaces",
      "Delivery engineering workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Build-time prerendering produces crawlable public pages.",
          "CI validates source changes before deployment through a restricted deployment account.",
          "Public form enablement is tied to configured email and anti-spam services."
        ]
      }
    ]
  },
  {
    "id": "specialist-practice-website",
    "slug": "specialist-practice-website",
    "title": "Specialist Healthcare Website & Patient Education",
    "shortTitle": "Specialist Healthcare Website & Patient Education",
    "tagline": "Condition, treatment and location content designed around the patient journey.",
    "categories": [
      "Healthcare",
      "Frontend"
    ],
    "priority": 19,
    "featured": true,
    "problem": "Patients need a clear route from symptoms and conditions to treatment information, clinic locations and consultation enquiries.",
    "users": [
      "Patients",
      "Practice administrators",
      "Referring visitors"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Patient-facing information and practice website, distinct from an EMR or a clinical-record system.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "integrations": [
      "GitHub Actions"
    ],
    "architecture": {
      "layers": [
        "Structured condition / treatment / location content",
        "Next.js public pages and navigation",
        "Generated internal links, sitemap & structured data",
        "CI deployment workflow"
      ],
      "externalServices": [
        "GitHub Actions"
      ]
    },
    "capabilities": [
      {
        "title": "Patient education",
        "items": [
          "Condition exploration with search and region filtering",
          "Treatment summaries, recovery timelines and risk information",
          "Clinic-location pages and contextual FAQs"
        ]
      },
      {
        "title": "Responsive experience",
        "items": [
          "Accessible symptom selector and content navigation",
          "Mobile consultation actions",
          "Responsive images and restrained interface motion"
        ]
      },
      {
        "title": "Publishing architecture",
        "items": [
          "Shared content models for condition and treatment pages",
          "Generated metadata, schema and sitemap entries",
          "Repeatable build and deployment workflow"
        ]
      }
    ],
    "challenges": [
      "Making detailed medical content navigable on small screens",
      "Maintaining consistent condition, treatment and location relationships",
      "Keeping informational content separate from clinical-system claims"
    ],
    "built": [
      "Patient education workflows and interfaces",
      "Responsive experience workflows and interfaces",
      "Publishing architecture workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Adding structured content generates the page, navigation links, sitemap entry and schema.",
          "Build and deployment checks support repeatable publication.",
          "This is publishing automation; the website does not automate clinical decisions."
        ]
      }
    ]
  },
  {
    "id": "property-roof-intelligence",
    "slug": "property-roof-intelligence",
    "title": "Property & Aerial Imagery Intelligence",
    "shortTitle": "Property & Aerial Imagery Intelligence",
    "tagline": "Property records and historical aerial imagery in a coordinated mapping workspace.",
    "categories": [
      "SaaS",
      "Full Stack"
    ],
    "priority": 20,
    "featured": true,
    "problem": "Property inspection needs multiple imagery sources and public parcel context to be compared without losing location, scale or capture-year context.",
    "users": [
      "Property researchers",
      "Inspection teams",
      "Operations users"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Working geospatial source release. Deployment and source-specific imagery coverage remain environment-dependent.",
    "technologies": [
      "React",
      "OpenLayers",
      "Django REST Framework",
      "Python"
    ],
    "integrations": [
      "Public GIS services",
      "Parcel datasets",
      "Aerial imagery providers"
    ],
    "architecture": {
      "layers": [
        "Property search + interactive map workspace",
        "Django provider adapters",
        "Parcel / place reference data",
        "Synchronized imagery comparison views"
      ],
      "externalServices": [
        "Public GIS services",
        "Parcel datasets",
        "Aerial imagery providers"
      ]
    },
    "capabilities": [
      {
        "title": "Imagery comparison",
        "items": [
          "Compare up to three captures and swipe between years",
          "Synchronized pan, zoom and rotation",
          "Capture detail and ground-resolution context"
        ]
      },
      {
        "title": "Property context",
        "items": [
          "Search and map-based property selection",
          "County and place navigation",
          "Available parcel and ownership records"
        ]
      },
      {
        "title": "Operational controls",
        "items": [
          "Provider availability checks and explicit data limits",
          "Optional local imagery import",
          "Inspection controls with fit, reset and overlays"
        ]
      }
    ],
    "challenges": [
      "Reconciling imagery dates and resolutions across providers",
      "Maintaining consistent map context during comparisons",
      "Explaining missing or uncertain provider data without inventing results"
    ],
    "built": [
      "Imagery comparison workflows and interfaces",
      "Property context workflows and interfaces",
      "Operational controls workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Linked map views synchronize navigation across imagery sources.",
          "Best-available-detail selection uses known ground resolution and capture recency.",
          "Provider-check commands support integration verification; the app does not claim automated roof-damage diagnosis."
        ]
      }
    ]
  },
  {
    "id": "engineering-enquiry-platform",
    "slug": "engineering-enquiry-platform",
    "title": "Engineering Services & Enquiry Operations",
    "shortTitle": "Engineering Services & Enquiry Operations",
    "tagline": "Qualified project enquiries, document intake and tracked follow-up for a design consultancy.",
    "categories": [
      "SaaS",
      "Full Stack"
    ],
    "priority": 21,
    "featured": true,
    "problem": "Engineering enquiries arrive with site context and supporting documents. The business needs reliable capture and follow-up even when notification delivery fails.",
    "users": [
      "Prospective clients",
      "Consultancy administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Full-stack consultancy website and private enquiry operations application with database-backed notification handling.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "PostgreSQL"
    ],
    "integrations": [
      "SMTP"
    ],
    "architecture": {
      "layers": [
        "Public service / enquiry pages",
        "Validated submission and upload handling",
        "Atomic enquiry + file + notification persistence",
        "Private admin workspace + retry worker"
      ],
      "externalServices": [
        "SMTP"
      ]
    },
    "capabilities": [
      {
        "title": "Project intake",
        "items": [
          "Qualification form and supporting PDF / image attachments",
          "Request deduplication",
          "Clear failure states when persistence is unavailable"
        ]
      },
      {
        "title": "Administrative workflow",
        "items": [
          "Search, filters, statuses and notes",
          "Follow-up dates and private downloads",
          "Filtered CSV export"
        ]
      },
      {
        "title": "Reliable notifications",
        "items": [
          "Owner notification and customer acknowledgement",
          "Separate delivery tracking",
          "Retry worker and admin retry controls"
        ]
      }
    ],
    "challenges": [
      "Separating saved enquiries from email delivery status",
      "Protecting uploaded project documents",
      "Handling repeated submissions and recoverable notification failures"
    ],
    "built": [
      "Project intake workflows and interfaces",
      "Administrative workflow workflows and interfaces",
      "Reliable notifications workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Enquiry, attachment and notification records are created atomically.",
          "Owner and customer messages are queued after persistence and retried independently.",
          "Request identifiers prevent duplicate submission records."
        ]
      }
    ]
  },
  {
    "id": "nonprofit-service-management",
    "slug": "nonprofit-service-management",
    "title": "Nonprofit Services & Community Operations",
    "shortTitle": "Nonprofit Services & Community Operations",
    "tagline": "Shared web and mobile tools for households, service delivery and operational reporting.",
    "categories": [
      "SaaS",
      "Full Stack",
      "Mobile"
    ],
    "priority": 22,
    "featured": true,
    "problem": "Community teams need to connect client registration, household records, service visits, referrals and reporting while preserving role boundaries.",
    "users": [
      "Staff",
      "Volunteers",
      "Administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Source-code release candidate with synthetic demonstration data. Signed mobile releases and production acceptance are separate delivery steps.",
    "technologies": [
      "Next.js",
      "React Native / Expo",
      "SQLite",
      "TypeScript"
    ],
    "integrations": [
      "SMTP"
    ],
    "architecture": {
      "layers": [
        "Public website + staff web application",
        "Shared authenticated API",
        "Encrypted relational records",
        "Expo mobile client + notification outbox"
      ],
      "externalServices": [
        "SMTP"
      ]
    },
    "capabilities": [
      {
        "title": "Community services",
        "items": [
          "Client registration, household links and duplicate review",
          "Distribution check-in, pantry visits and program appointments",
          "Referral and follow-up records"
        ]
      },
      {
        "title": "Staff & mobile work",
        "items": [
          "Role-aware staff and volunteer experiences",
          "Shared service histories across web and mobile",
          "Consent and administrative access controls"
        ]
      },
      {
        "title": "Reporting & migration",
        "items": [
          "Mapped CSV / XLSX imports with validation previews",
          "Operational reports and exports",
          "Backup and restore utilities"
        ]
      }
    ],
    "challenges": [
      "Preserving household and service-history meaning during import",
      "Restricting volunteer access to appropriate workflows",
      "Keeping reported totals consistent with operational definitions"
    ],
    "built": [
      "Community services workflows and interfaces",
      "Staff & mobile work workflows and interfaces",
      "Reporting & migration workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Imports validate, map and group household records before committed batches.",
          "Duplicate checks support check-in workflows.",
          "SMTP outbox handles requests and appointment-change notifications; backup utilities support scheduled maintenance."
        ]
      }
    ]
  },
  {
    "id": "community-housing-platform",
    "slug": "community-housing-platform",
    "title": "Community Housing & Member Operations",
    "shortTitle": "Community Housing & Member Operations",
    "tagline": "Shared web and mobile workflows for housing, meetings, finances and member support.",
    "categories": [
      "SaaS",
      "Full Stack",
      "Mobile"
    ],
    "priority": 23,
    "featured": true,
    "problem": "Member-run communities need consistent records for applications, officer responsibilities, meetings, finances and everyday tasks.",
    "users": [
      "Applicants",
      "Residents",
      "Community officers",
      "Organization administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Independent evaluation application with synthetic records, not an official service or a certified clinical system.",
    "technologies": [
      "Next.js",
      "React Native / Expo",
      "TypeScript",
      "PostgreSQL-compatible storage"
    ],
    "integrations": [
      "Shared web / mobile API"
    ],
    "architecture": {
      "layers": [
        "Web + Expo clients",
        "Membership / officer-scoped API",
        "Persistent relational demo records",
        "Rules for applications, meetings, finance and notifications"
      ],
      "externalServices": [
        "Shared web / mobile API"
      ]
    },
    "capabilities": [
      {
        "title": "Housing & governance",
        "items": [
          "Application, interview, vote and capacity-checked move-in flows",
          "Time-bounded officer roles and handover notes",
          "Meeting attendance, consent and reviewed minutes"
        ]
      },
      {
        "title": "Community operations",
        "items": [
          "Chores, maintenance, supplies and events",
          "Ride offers and capacity-aware participation",
          "Member communications and notifications"
        ]
      },
      {
        "title": "Finance & support",
        "items": [
          "Balanced journal entries and reversal records",
          "Private documents and consent-scoped support requests",
          "Authorized reports and audit history"
        ]
      }
    ],
    "challenges": [
      "Applying time-bounded roles across shared community records",
      "Keeping financial corrections traceable",
      "Handling private support access and revocation"
    ],
    "built": [
      "Housing & governance workflows and interfaces",
      "Community operations workflows and interfaces",
      "Finance & support workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Recurring meeting schedules and action tasks coordinate follow-through.",
          "Capacity checks and event waitlist promotion support membership workflows.",
          "Role expiry and consent revocation constrain continued access."
        ]
      }
    ]
  },
  {
    "id": "vision-document-tutor",
    "slug": "vision-document-tutor",
    "title": "AI Document Camera Tutor",
    "shortTitle": "AI Document Camera Tutor",
    "tagline": "Camera-based learning assistance with structured explanations and saved tutoring history.",
    "categories": [
      "AI",
      "EdTech",
      "Full Stack"
    ],
    "priority": 16,
    "featured": true,
    "problem": "Students working on physical worksheets need contextual help without manually transcribing every question into a chat interface.",
    "users": [
      "Students",
      "Tutoring users"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "React and Django tutoring MVP with a configured vision-model integration. Live inference requires provider configuration.",
    "technologies": [
      "React",
      "Django REST Framework",
      "Python",
      "SQLite"
    ],
    "integrations": [
      "OpenAI Responses API",
      "Browser MediaDevices"
    ],
    "architecture": {
      "layers": [
        "Local camera preview + explicit capture",
        "Django image / question API",
        "Vision request + structured-output validation",
        "Tutoring response + saved history"
      ],
      "externalServices": [
        "OpenAI Responses API",
        "Browser MediaDevices"
      ]
    },
    "capabilities": [
      {
        "title": "Learning interface",
        "items": [
          "Local live camera preview with on-demand still capture",
          "Question entry and structured tutoring responses",
          "History for earlier tutoring interactions"
        ]
      },
      {
        "title": "AI integration",
        "items": [
          "Server-side model invocation",
          "Strict output schema and response validation",
          "Explicit handling of invalid or failed model responses"
        ]
      }
    ],
    "challenges": [
      "Keeping camera permissions and capture behaviour understandable",
      "Validating model output before it enters saved history",
      "Handling provider failures without presenting fabricated responses"
    ],
    "built": [
      "Learning interface workflows and interfaces",
      "AI integration workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "A captured frame and question are processed into validated structured tutoring output.",
          "Tutoring history is saved after validation.",
          "Image capture is user-triggered rather than continuous background surveillance."
        ]
      }
    ]
  },
  {
    "id": "dental-operations-platform",
    "slug": "dental-operations-platform",
    "title": "Dental Scheduling, Scribe & Patient Intake",
    "shortTitle": "Dental Scheduling, Scribe & Patient Intake",
    "tagline": "A coordinated practice workspace for appointments, reviewed notes, forms and communication.",
    "categories": [
      "Healthcare",
      "AI",
      "Full Stack"
    ],
    "priority": 11,
    "featured": true,
    "problem": "Practice operations require scheduling, documentation, consent and patient communications to share patient context while respecting each EHR connector's limits.",
    "users": [
      "Practice staff",
      "Clinicians",
      "Patients",
      "Platform administrators"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Local evaluation implementation with synthetic patients and provider test practices. Production security, live connector acceptance and clinical validation remain explicit delivery gates.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "SQLite",
      "React"
    ],
    "integrations": [
      "Open Dental",
      "CRMBridge",
      "Retell",
      "AWS HealthScribe",
      "AWS messaging"
    ],
    "architecture": {
      "layers": [
        "Practice-scoped web workspace",
        "Scheduling / intake / documentation services",
        "Durable job worker + provider clients",
        "EHR, voice and communication integrations"
      ],
      "externalServices": [
        "Open Dental",
        "CRMBridge",
        "Retell",
        "AWS HealthScribe",
        "AWS messaging"
      ]
    },
    "capabilities": [
      {
        "title": "Scheduling & reception",
        "items": [
          "Patient identification and practice catalogue mappings",
          "Booking, move, cancel and callback flows",
          "Operation journals, guarded writes and schedule pulls"
        ]
      },
      {
        "title": "Clinical documentation & intake",
        "items": [
          "Audio upload, transcription jobs and draft note review",
          "Approved PDF and connector-specific document delivery",
          "Versioned consent, invitations, PINs and expiry"
        ]
      },
      {
        "title": "Practice communication",
        "items": [
          "Booking, reminder and form notification jobs",
          "Opt-in and STOP suppression paths",
          "Practice ledger and configured service-charge records"
        ]
      }
    ],
    "challenges": [
      "Maintaining patient and appointment context across connectors",
      "Journaling external scheduling writes and retries",
      "Separating draft clinical output from reviewed records"
    ],
    "built": [
      "Scheduling & reception workflows and interfaces",
      "Clinical documentation & intake workflows and interfaces",
      "Practice communication workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Durable workers process scheduling pulls, clinical jobs and notification tasks.",
          "Consent invitations, reminders and communication receipts have tracked states.",
          "Generated clinical material requires review before approved delivery."
        ]
      }
    ]
  },
  {
    "id": "connected-wellness-mobile",
    "slug": "connected-wellness-mobile",
    "title": "Connected Patient Wellness & Care",
    "shortTitle": "Connected Patient Wellness & Care",
    "tagline": "Mobile wellness tracking connected to a patient portal and device-health workflows.",
    "categories": [
      "Healthcare",
      "Mobile",
      "Full Stack"
    ],
    "priority": 15,
    "featured": true,
    "problem": "Patients need a consistent view of care tasks, meals, exercises and daily activity even when device permissions or connectivity vary.",
    "users": [
      "Patients",
      "Care teams"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Patient mobile application with device-dependent behaviour. Physical-device verification and the backend's cumulative step-upsert contract remain necessary.",
    "technologies": [
      "React Native",
      "Expo",
      "JavaScript",
      "REST APIs"
    ],
    "integrations": [
      "OpenEMR portal APIs",
      "Device pedometer",
      "Apple health integration module"
    ],
    "architecture": {
      "layers": [
        "Expo patient application",
        "Shared authenticated API client",
        "Patient portal care / wellness APIs",
        "Device readings + patient-scoped pending synchronization"
      ],
      "externalServices": [
        "OpenEMR portal APIs",
        "Device pedometer",
        "Apple health integration module"
      ]
    },
    "capabilities": [
      {
        "title": "Patient care & wellness",
        "items": [
          "Care, history and profile screens",
          "Meal, exercise and step-history views",
          "Patient-specific goals and daily summaries"
        ]
      },
      {
        "title": "Device activity",
        "items": [
          "Permission-aware step tracking",
          "Local persistence and serialized synchronization",
          "Day-boundary and app-resume handling"
        ]
      },
      {
        "title": "Reliable mobile state",
        "items": [
          "Token-refresh client",
          "Independent retry states for history feeds",
          "Patient-scoped queues and logout isolation"
        ]
      }
    ],
    "challenges": [
      "Avoiding duplicate cumulative-step totals",
      "Preventing another patient's pending data from crossing a logout boundary",
      "Explaining platform and permission limits"
    ],
    "built": [
      "Patient care & wellness workflows and interfaces",
      "Device activity workflows and interfaces",
      "Reliable mobile state workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Step uploads are serialized, throttled and retried with their original dates.",
          "App resume and local midnight refresh daily tracking state.",
          "Concurrent history feeds expose failures separately rather than replacing missing values with zero."
        ]
      }
    ]
  },
  {
    "id": "product-design-prototypes",
    "slug": "product-design-prototypes",
    "title": "B2B Website & Product Design Exploration",
    "shortTitle": "B2B Website & Product Design Exploration",
    "tagline": "Multiple design directions and reusable page systems for technology and industrial services.",
    "categories": [
      "Frontend"
    ],
    "priority": 26,
    "featured": true,
    "problem": "Early client decisions benefit from coherent alternatives that show layout, typography, content hierarchy and motion in context.",
    "users": [
      "Business stakeholders",
      "Prospective clients",
      "Design reviewers"
    ],
    "role": "End-to-end product engineering: product planning, requirements and user journeys, application architecture, implementation, integrations, testing, delivery preparation and ongoing iteration.",
    "scope": "Client-presentation design prototypes rather than completed production websites.",
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Motion"
    ],
    "integrations": [],
    "architecture": {
      "layers": [
        "Concept selection hub",
        "Reusable React page / section system",
        "Content and visual variants",
        "Static presentation build"
      ],
      "externalServices": []
    },
    "capabilities": [
      {
        "title": "Design exploration",
        "items": [
          "Multiple complete homepage directions",
          "Supporting service and company-page concepts",
          "Responsive typography and interaction patterns"
        ]
      },
      {
        "title": "Reusable implementation",
        "items": [
          "Shared components and content models",
          "Motion and layout variations",
          "Static build for client presentation"
        ]
      }
    ],
    "challenges": [
      "Making visual alternatives comparable without duplicating the entire system",
      "Keeping motion and content hierarchy usable on mobile",
      "Distinguishing presentation concepts from deployed functionality"
    ],
    "built": [
      "Design exploration workflows and interfaces",
      "Reusable implementation workflows and interfaces"
    ],
    "learnings": [
      "The product model, role boundaries and operational handoffs need to be designed together before implementation.",
      "Delivery includes clear setup, verification and operating boundaries, alongside the application itself."
    ],
    "links": [
      {
        "label": "Private project · Descriptive case study"
      }
    ],
    "visualKey": "",
    "accent": "teal",
    "automation": [
      {
        "title": "Automation & workflow engineering",
        "items": [
          "Reusable page structures propagate common content and layout changes.",
          "Build tooling packages all concepts into a static presentation.",
          "These are design prototypes; no live campaign or business-process automation is claimed."
        ]
      }
    ]
  }
];
const automation: Record<string,string[]> = {
  "healthcare-emr-platform": [
    "Availability-driven appointment flows connect patient requests with provider scheduling.",
    "Configurable clinical forms and SOAP-note workflows reduce repeated data entry.",
    "Billing totals, package redemption and payment flows connect clinical activity with administration."
  ],
  "clinical-documentation-fhir": [
    "Asynchronous workers coordinate audio processing and note-generation status.",
    "Reviewed note context is assembled into a FHIR R4 document Bundle.",
    "Patient directory, appointment-feed and encounter adapters connect the documentation workspace to clinical systems."
  ],
  "warehouse-inventory-management": [
    "Order and batch screens guide stock-inward and item-processing handoffs.",
    "QR and label-generation workflows support warehouse identification and printing.",
    "Spreadsheet and PDF tooling reduce manual preparation of operational documents."
  ],
  "dental-practice-automation": [
    "Managed voice-agent setup produces practice-specific prompts and tools.",
    "Booking rules constrain provider, chair and service selection during automated calls.",
    "Signed webhook processing routes call events to the correct practice; uncertain identity has explicit fallbacks."
  ],
  "patient-wellness-mobile": [
    "Dynamic clinical forms track completion against appointment context.",
    "Meal recognition assists image-based food logging alongside manual and barcode entry.",
    "Wellness summaries, payment-sheet flows and push handling connect daily activity with care tasks."
  ],
  "ai-exercise-tracker": [
    "Pose-landmark processing drives per-exercise movement-stage state machines.",
    "Rep counting and form rules generate live visual and voice coaching feedback.",
    "Session analytics summarize tracked activity; this is assistive feedback rather than clinical diagnosis."
  ],
  "learning-management-platform": [
    "Configurable quiz and form builders reduce repeated development for new assessments.",
    "Progress charts and achievement views summarize learning activity.",
    "Scheduled live-session integration connects classroom scheduling and participation."
  ],
  "restaurant-operations": [
    "Menu replication and CSV import/export support repeatable location setup.",
    "Email templates, scheduling and open tracking support marketing workflows.",
    "JSON-configured RCS flows and delivery/payment integrations connect communication with orders."
  ],
  "home-services-management": [
    "Role-based assignment views connect business appointments with employee work.",
    "Referral records preserve source context through the lead workflow.",
    "Reusable booking and multi-property screens reduce repeated administrative entry; autonomous dispatch is not claimed."
  ],
  "ordering-delivery-platform": [
    "Business configuration controls branding, menu and routes without separate codebase forks.",
    "Cart rules calculate discounts, coupons, gift cards, fees and taxes.",
    "Delivery quotes, checkout and order-status timelines coordinate external services."
  ],
  "retail-fulfilment-platform": [
    "A durable outbox and background worker handle opted-in reminders and campaigns.",
    "Order states connect picking, packing, loading and delivery handoffs.",
    "Receipt/refund generation and staff reports use stored operational records; financial and courier behaviours remain demo flows."
  ],
  "growth-crm-platform": [
    "Event triggers, delays, quiet hours and conditions determine scheduled WhatsApp automation.",
    "The worker rechecks opt-outs, replies, daily limits and once-per-person rules at execution time.",
    "CRM scoring, round-robin lead assignment and attribution connect capture to follow-up.",
    "MCP exposes permission-scoped page, section, CRM, blog, analytics and knowledge tools with write auditing."
  ],
  "hr-workforce-management": [
    "Configured roles, master data and entitlement settings drive consistent HR workflows.",
    "Reusable resource screens reduce duplicated administrative work.",
    "Notifications support workflow handoffs; autonomous payroll or policy decisions are not claimed."
  ]
};
const healthcare: Record<string,HealthcareContext> = {
  "healthcare-emr-platform": {
    "fhir": "OpenEMR-backed clinical integration with role-specific OAuth/API access. FHIR is part of the wider clinical interoperability context; this case study does not assert that every custom portal endpoint is a standard FHIR resource.",
    "safeguards": [
      "Role-specific patient, provider and administrator experiences",
      "Token-based API access and clinical-record boundaries"
    ],
    "boundary": "HIPAA compliance requires validated server authorization, least-privilege scopes, audit evidence, encrypted transport/storage, risk assessment and applicable BAAs in the deployed environment."
  },
  "clinical-documentation-fhir": {
    "fhir": "Implemented FHIR R4 document preparation: a Bundle containing Composition, Patient, Encounter, Practitioner and Organization, with linked references, LOINC note types and narrative XHTML.",
    "safeguards": [
      "Audit records use actor/resource/action identifiers rather than clinical text",
      "Session revocation, recording-deletion state and scheduled cleanup workflows",
      "Clinician review before clinical output is treated as final"
    ],
    "boundary": "FHIR document generation is not conformance certification. HIPAA compliance also depends on deployment controls, consent, retention, provider agreements and clinical/security validation."
  },
  "patient-wellness-mobile": {
    "fhir": "The OpenEMR authentication integration requests api:fhir and resource scopes including Patient, Encounter and Observation. The application also uses custom portal APIs; requested scopes alone do not prove that every workflow exchanges FHIR resources.",
    "safeguards": [
      "Biometric login and token-based session workflows",
      "Patient-specific clinical forms, documents and appointment context"
    ],
    "boundary": "HIPAA delivery review must verify token storage, scope minimization, backend authorization, device protection, audit trails and applicable provider agreements."
  },
  "dental-practice-automation": {
    "fhir": "Practice-specific REST integrations connect Open Dental and other scheduling services. Open Dental's ODFHIR authorization header is not evidence of standard FHIR resource exchange; FHIR mapping is a separate interoperability concern.",
    "safeguards": [
      "Caller identity checks before appointment disclosure",
      "Practice-aware routing and appointment ownership checks",
      "Audit and PHI-redaction utilities in the application services"
    ],
    "boundary": "HIPAA compliance remains a deployment and organizational responsibility covering PHI handling, access reviews, retention, risk assessment and vendor BAAs."
  },
  "dental-operations-platform": {
    "fhir": "Connector-specific EHR scheduling and document delivery are implemented. FHIR resource mapping and conformance validation are separate integration work, rather than an assumed property of those provider APIs.",
    "safeguards": [
      "Practice-scoped sessions, role and module checks",
      "Signed provider callbacks and an audit trail",
      "Versioned consent, expiring invitations and reviewed clinical output"
    ],
    "boundary": "The source explicitly reserves production HIPAA controls and acceptance gates: encrypted PHI storage/backups, managed secrets, isolation, retention, recovery, BAAs and clinical validation."
  },
  "connected-wellness-mobile": {
    "fhir": "The app connects to OpenEMR portal services through a shared authenticated client. Its wellness and device-health endpoints are custom APIs; a standard FHIR Observation mapping would require a separately validated adapter.",
    "safeguards": [
      "Patient-scoped synchronization queues",
      "Logout stops sensor activity and prevents cross-session uploads",
      "Token refresh and explicit permission/error handling"
    ],
    "boundary": "HIPAA review includes mobile storage, session scope, device permissions, server authorization and PHI retention. Device-health integration alone does not establish compliance."
  },
  "specialist-practice-website": {
    "fhir": "FHIR is relevant to a future connection with clinical records, but this informational website has no implemented FHIR or EMR exchange. Patient education and practice marketing remain separate from clinical data services.",
    "safeguards": [
      "No clinical-record workflow is represented by the public content site",
      "Patient education and enquiry entry points are kept distinct"
    ],
    "boundary": "Any future PHI intake or clinical-system connection needs a HIPAA applicability review, secure processing boundaries and appropriate agreements before activation."
  }
};
const domains: Record<string,string[]> = {
  "healthcare-emr-platform": [
    "Healthcare"
  ],
  "clinical-documentation-fhir": [
    "Healthcare",
    "AI & Voice",
    "Automation"
  ],
  "warehouse-inventory-management": [
    "Business Operations",
    "Automation"
  ],
  "dental-practice-automation": [
    "Healthcare",
    "AI & Voice",
    "Automation"
  ],
  "patient-wellness-mobile": [
    "Healthcare",
    "Mobile"
  ],
  "ai-exercise-tracker": [
    "AI & Voice",
    "Automation"
  ],
  "learning-management-platform": [
    "Education",
    "Automation"
  ],
  "restaurant-operations": [
    "Marketing",
    "Commerce",
    "Automation"
  ],
  "home-services-management": [
    "Business Operations"
  ],
  "ordering-delivery-platform": [
    "Commerce",
    "Automation"
  ],
  "retail-fulfilment-platform": [
    "Commerce",
    "Business Operations",
    "Automation"
  ],
  "growth-crm-platform": [
    "Marketing",
    "AI & Voice",
    "Automation",
    "Web Platforms"
  ],
  "hr-workforce-management": [
    "Business Operations"
  ],
  "business-voice-ai": [
    "AI & Voice",
    "Automation",
    "Business Operations"
  ],
  "recruitment-consultant-crm": [
    "Business Operations",
    "Automation"
  ],
  "email-campaign-crm": [
    "Marketing",
    "Automation"
  ],
  "corporate-website-platform": [
    "Web Platforms",
    "Marketing"
  ],
  "specialist-practice-website": [
    "Healthcare",
    "Web Platforms"
  ],
  "property-roof-intelligence": [
    "Business Operations"
  ],
  "engineering-enquiry-platform": [
    "Business Operations",
    "Web Platforms",
    "Automation"
  ],
  "nonprofit-service-management": [
    "Community",
    "Business Operations",
    "Mobile"
  ],
  "community-housing-platform": [
    "Community",
    "Mobile",
    "Automation"
  ],
  "vision-document-tutor": [
    "AI & Voice",
    "Education",
    "Automation"
  ],
  "dental-operations-platform": [
    "Healthcare",
    "AI & Voice",
    "Automation"
  ],
  "connected-wellness-mobile": [
    "Healthcare",
    "Mobile",
    "Automation"
  ],
  "product-design-prototypes": [
    "Web Platforms"
  ]
};
const overrides: Record<string,Partial<Project>> = {"growth-crm-platform":{
  "title": "Marketing Automation & MCP Platform",
  "shortTitle": "Marketing Automation & MCP",
  "priority": 1,
  "tagline": "A multi-tenant growth platform connecting websites, CRM, marketing automation and AI-assistant tools.",
  "problem": "Businesses need their website, lead capture, CRM and follow-up automation to share one model. Adding AI-assistant access creates another architectural requirement: tool actions must respect site boundaries, permissions and review controls.",
  "scope": "Multi-tenant website builder, CRM and automation platform with an HTTP JSON-RPC MCP connector. Core workflows have local verification; live provider integrations and roadmap items retain their documented acceptance boundaries.",
  "technologies": [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Drizzle",
    "MCP",
    "React"
  ],
  "integrations": [
    "WhatsApp Cloud API",
    "Meta CAPI",
    "GA4",
    "SMTP",
    "Stripe / Razorpay",
    "AI provider adapters",
    "S3-compatible storage"
  ],
  "architecture": {
    "layers": [
      "Website runtime + platform / site administration",
      "Content, forms, CRM, scoring & attribution services",
      "Site-scoped PostgreSQL + scheduler / job queue",
      "MCP tools + marketing / AI / commerce adapters"
    ],
    "externalServices": [
      "MCP clients",
      "WhatsApp",
      "Meta / Google",
      "Email",
      "Payments",
      "AI providers"
    ],
    "note": "The site identity is carried through storage, application services and assistant-tool execution. Provider mock modes allow the workflow to be reviewed before live integration activation."
  },
  "capabilities": [
    {
      "title": "Website & lead generation",
      "items": [
        "Page and section builder with reusable layouts, drafts and publishing",
        "Forms with conditions, calculations, validation and spam guards",
        "Media library, responsive image variants, blog content and SEO metadata"
      ]
    },
    {
      "title": "CRM & attribution",
      "items": [
        "Lead timelines, pipeline stages, owner assignment and round-robin routing",
        "First-touch attribution, lead scoring and segment rules",
        "Conversion signals and provider adapters for marketing measurement"
      ]
    },
    {
      "title": "Marketing automation engine",
      "items": [
        "Event-triggered actions with delays and conditions",
        "Quiet hours, send limits, opt-out checks and reply-aware skipping",
        "Campaign scheduling, pause/cancel flows and auto-reply handoff"
      ]
    },
    {
      "title": "MCP & AI-assistant integration",
      "items": [
        "JSON-RPC initialization, tools/list and tools/call over HTTP",
        "Bearer-token authentication and permission-filtered tools",
        "Pages, sections, leads, notes, stages, menus, blog, analytics and knowledge tools",
        "Schema-validated inputs, site scoping, audited writes and human approval for new knowledge"
      ]
    },
    {
      "title": "Platform architecture",
      "items": [
        "Domain-to-site tenancy and platform administration",
        "Version history and restore workflows",
        "Worker scheduling, integration mock modes and secret-handling boundaries"
      ]
    }
  ],
  "challenges": [
    "Applying the same tenant and authorization boundaries to UI, APIs and MCP tools",
    "Rechecking campaign eligibility at execution time rather than only at scheduling time",
    "Coordinating content publishing, CRM events and external integrations without losing traceability"
  ],
  "built": [
    "Multi-tenant website and form-builder workflows",
    "CRM pipeline, scoring, attribution and lead assignment",
    "Scheduled marketing automations and provider-adapter boundaries",
    "Permission-scoped MCP connector with schema validation and audit history"
  ],
  "learnings": [
    "MCP makes product capabilities usable by assistants only when its tools enforce the same business rules as the human interface.",
    "Automation needs execution-time checks: consent, replies, budgets and conditions may change after a task is scheduled."
  ]
}};
const priorities: Record<string,number> = {"growth-crm-platform":1,"business-voice-ai":5,"healthcare-emr-platform":3,"clinical-documentation-fhir":2,"warehouse-inventory-management":4,"recruitment-consultant-crm":6,"dental-practice-automation":7,"patient-wellness-mobile":8,"restaurant-operations":9,"email-campaign-crm":10,"dental-operations-platform":11,"ordering-delivery-platform":12,"retail-fulfilment-platform":13,"learning-management-platform":14,"connected-wellness-mobile":15,"vision-document-tutor":16,"ai-exercise-tracker":17,"corporate-website-platform":18,"specialist-practice-website":19,"property-roof-intelligence":20,"engineering-enquiry-platform":21,"nonprofit-service-management":22,"community-housing-platform":23,"home-services-management":24,"hr-workforce-management":25,"product-design-prototypes":26};
export const allProjects: PortfolioProject[] = [...projects,...additionalProjects,...expandedProjects].map(base=>{
 const project={...base,...overrides[base.slug]};
 const ownedRole = project.role.startsWith("End-to-end") ? project.role : "I work from product planning, requirements and user journeys through architecture, implementation, integration, testing and delivery. Implementation focus: " + project.role;
 return {...project,role:ownedRole,priority:priorities[project.slug]??project.priority,domains:domains[project.slug]??[],healthcare:healthcare[project.slug],automation:"automation" in base ? (base as Project & {automation:CapabilityGroup[]}).automation : [{title:"Automation & workflow engineering",items:automation[project.slug]??[]}]};
}).sort((a,b)=>a.priority-b.priority);
export const domainFilters = ["All","AI & Voice","Automation","Marketing","Healthcare","Business Operations","Commerce","Mobile","Education","Community","Web Platforms"];
export const legacySlugs:Record<string,string>={"openemr-healthcare-platform":"healthcare-emr-platform","rite-clinic":"patient-wellness-mobile","rite-tutor":"learning-management-platform","rite-restaurant":"restaurant-operations","homepros":"home-services-management","instant-delivery":"ordering-delivery-platform"};

export function filterProjects(query: string, domain = "All") {
 const words=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return allProjects.filter(p=>(domain==="All"||p.domains.includes(domain))&&words.every(word=>[p.title,p.tagline,...p.technologies,...p.integrations,...p.domains,...p.capabilities.flatMap(g=>[g.title,...g.items])].join(" ").toLocaleLowerCase().includes(word)));
}
