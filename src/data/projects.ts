export type ProjectCategory =
  | "Frontend"
  | "Full Stack"
  | "Healthcare"
  | "AI"
  | "EdTech"
  | "SaaS"
  | "Mobile";

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type Architecture = {
  layers: string[];
  externalServices?: string[];
  note?: string;
};

export type ProjectLink = {
  label: string;
  href?: string; // omit for private/company projects
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  categories: ProjectCategory[];
  featured: boolean;
  priority: number; // lower = shown first
  problem: string;
  users: string[];
  role: string;
  scope: string;
  technologies: string[];
  integrations: string[];
  architecture: Architecture;
  capabilities: CapabilityGroup[];
  challenges: string[];
  built: string[];
  outcome?: string; // only ever filled with verified info
  learnings: string[];
  links: ProjectLink[];
  visualKey: string;
  accent: "teal" | "blue" | "amber" | "rose";
};

export const projects: Project[] = [
  // 1 — OPENEMR HEALTHCARE PLATFORM ------------------------------------------------
  {
    id: "openemr",
    slug: "openemr-healthcare-platform",
    title: "OpenEMR-Based Healthcare & EMR Platform",
    shortTitle: "OpenEMR Healthcare Platform",
    tagline: "A custom clinical experience layered over OpenEMR for patients, providers and admins",
    categories: ["Healthcare", "Full Stack", "Frontend"],
    featured: true,
    priority: 1,
    problem:
      "Clinics needed a modern, branded patient and provider experience — appointment booking, telehealth, labs, e-prescription and billing — without abandoning OpenEMR as the underlying clinical/EMR system of record. OpenEMR's own interface wasn't built for this; the clinical data and workflows needed to stay intact while everything patients and staff touch had to be rebuilt.",
    users: ["Patients", "Clinicians / Providers", "Clinic administrators", "Billing staff"],
    role:
      "Full-stack engineer on the product: contributed to application architecture, built the React patient/provider/admin experiences, integrated the Django/DRF API layer with OpenEMR's clinical data, and wired in external healthcare services (labs, e-prescription, pharmacy, telehealth, payments).",
    scope:
      "Multi-role web application spanning patient self-service, clinical workflows for providers, and clinic/administrative operations, with OpenEMR as the underlying EMR rather than the user-facing interface.",
    technologies: ["React.js", "Django", "Django REST Framework", "OpenEMR", "REST APIs", "React Native", "MySQL"],
    integrations: ["OpenEMR", "Laboratory APIs", "E-prescription APIs", "Weno Pharmacy", "Zoom", "Stripe", "Socket.IO"],
    architecture: {
      layers: ["Custom React Application (Patient / Provider / Admin)", "Django / REST API Layer", "OpenEMR (Clinical Data & Workflows)"],
      externalServices: ["Laboratory APIs", "E-Prescription", "Weno Pharmacy", "Zoom", "Stripe", "Socket.IO"],
      note: "OpenEMR is the clinical system of record underneath the API layer — not the interface a patient or provider ever sees.",
    },
    capabilities: [
      {
        title: "Patient Experience",
        items: [
          "Registration, OTP authentication & password reset",
          "Role-based patient profile & clinical history",
          "Appointment booking with live slot availability",
          "Virtual consultations",
          "Medical records: allergies, lab reports, documents, images, prescriptions",
          "Exercise & workout plans, nutrition & food recognition",
          "Wellness tracking: hydration, steps, calories, goals",
          "Patient–provider communication",
        ],
      },
      {
        title: "Provider Experience",
        items: [
          "Provider dashboard with patient search/filter",
          "Appointment requests, approval/rejection & scheduling",
          "Clinical encounters with SOAP notes",
          "Dynamic clinical forms — intake, consent, pre/post-treatment, treatment",
          "Patient imaging, exercise assignment",
          "Prescription management via Weno Pharmacy",
          "Zoom-based consultations",
        ],
      },
      {
        title: "Admin & Clinic Operations",
        items: [
          "Doctor, clinic, service & facility management",
          "Drug catalogue & dosage templates",
          "Warehouse & inventory",
          "Exercise library, workout plans & diet questionnaire builder",
          "Membership plans, groups & benefits",
          "Enquiry management",
        ],
      },
      {
        title: "Billing",
        items: [
          "Services, products, discounts & packages with redemption tracking",
          "Tips and wallet deductions",
          "Multiple payment methods — Stripe & QR payments",
        ],
      },
    ],
    challenges: [
      "Modeling a multi-role (patient / provider / admin) authentication and RBAC system on top of OpenEMR's data model",
      "Keeping the custom React layer and OpenEMR's clinical records consistent through the Django/DRF API layer",
      "Coordinating several external healthcare integrations (labs, e-prescription, pharmacy, telehealth, payments) inside real clinical workflows",
      "Designing dynamic, configurable clinical forms (consent, intake, pre/post-treatment) that clinicians can adapt without code changes",
      "Handling medical documents, images and lab reports securely across patient and provider views",
    ],
    built: [
      "React patient, provider and admin applications",
      "Django/DRF API layer bridging the custom UI and OpenEMR",
      "Appointment, scheduling and telehealth flows",
      "Billing, packages and payment flows (Stripe, QR)",
      "Integrations with labs, e-prescription, Weno Pharmacy and Zoom",
    ],
    learnings: [
      "Building a modern product experience on top of an existing clinical system of record requires strict boundaries between the presentation layer and the data of record — the API layer became the contract that made both sides safe to change independently.",
      "Dynamic form systems (consent, intake, treatment forms) pay off quickly in a clinical setting where forms change by service line and provider.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "openemr",
    accent: "teal",
  },

  // 2 — RITE CLINIC WELLNESS APP ------------------------------------------------
  {
    id: "rite-clinic",
    slug: "rite-clinic",
    title: "Rite Clinic — Healthcare & Wellness Platform",
    shortTitle: "Rite Clinic Wellness App",
    tagline: "A React Native companion app for appointments, wellness tracking and clinical forms",
    categories: ["Healthcare", "Mobile", "Full Stack"],
    featured: true,
    priority: 2,
    problem:
      "Patients needed a single mobile app to manage appointments, complete clinical paperwork, track wellness metrics and pay for services — instead of juggling phone calls, paper forms and separate portals.",
    users: ["Patients / clinic members"],
    role:
      "Built the React Native mobile application end-to-end: authentication, wellness dashboard, appointments, clinical forms, exercise and nutrition tracking, documents, and wallet/billing — integrated against Django/REST APIs with Stripe for payments.",
    scope: "Patient-facing healthcare and wellness mobile application (React Native) backed by Django/REST APIs.",
    technologies: ["React Native", "React", "Django", "REST APIs", "Stripe"],
    integrations: ["Stripe Payment Sheet", "Push notifications", "Biometric authentication"],
    architecture: {
      layers: ["React Native (iOS / Android)", "REST API Layer", "Django Backend"],
      externalServices: ["Stripe", "Push Notifications", "Pharmacy"],
    },
    capabilities: [
      {
        title: "Authentication",
        items: [
          "Four-step registration with email/OTP verification",
          "Biometric login & persistent (token-based) authentication",
          "Wallet creation on signup, password reset, logout",
        ],
      },
      {
        title: "Wellness Dashboard",
        items: [
          "Wellness progress: calories burned/consumed, water, beverages, steps",
          "Upcoming appointments, diet plan & prescriptions at a glance",
        ],
      },
      {
        title: "Appointments",
        items: [
          "Clinic, service, date & time-slot selection with confirmation",
          "Upcoming & past appointments with full detail view",
          "Appointment forms, billing and pre/post-treatment images",
        ],
      },
      {
        title: "Clinical Forms",
        items: [
          "Dynamic consent, intake, pre-treatment, treatment & post-treatment forms",
          "Completion tracking tied to encounter data",
        ],
      },
      {
        title: "Exercise & Nutrition",
        items: [
          "Assigned exercises with GIF demonstrations, sets/reps & completion tracking",
          "Meal logging via text, image or barcode with AI food recognition",
          "Personalized diet plan from a saved diet questionnaire — days, meals, macros, recipes",
        ],
      },
      {
        title: "Documents & Financial",
        items: [
          "Device document upload with type, naming, search, download & preview",
          "Billing for services/products with taxes and tips",
          "Wallet top-up via Stripe Payment Sheet & transaction history",
        ],
      },
    ],
    challenges: [
      "Designing a four-step registration and biometric/persistent auth flow that stays secure across app restarts",
      "Coordinating clinical form completion state with real encounter data from the backend",
      "Implementing AI-assisted food recognition alongside manual and barcode meal logging in one consistent flow",
      "Building a wallet system with Stripe Payment Sheet, top-ups and a full transaction history",
    ],
    built: [
      "Full React Native application (auth, dashboard, appointments, forms, exercise, nutrition, documents, wallet)",
      "Stripe Payment Sheet integration for wallet top-ups and billing",
      "Dynamic clinical form rendering and completion tracking",
      "Push notification handling",
    ],
    learnings: [
      "A wellness app succeeds or fails on how well disparate data (vitals, appointments, diet, exercise) is unified into one dashboard a patient can actually act on daily.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "riteclinic",
    accent: "teal",
  },

  // 3 — AI EXERCISE TRACKER ------------------------------------------------
  {
    id: "ai-exercise-tracker",
    slug: "ai-exercise-tracker",
    title: "AI Exercise Tracker — Real-Time Computer Vision Fitness",
    shortTitle: "AI Exercise Tracker",
    tagline: "Real-time pose detection that counts reps and checks form, in the browser",
    categories: ["AI", "Frontend"],
    featured: true,
    priority: 3,
    problem:
      "Self-guided workouts have no feedback loop — people can't tell if a rep counted, or whether their form was safe, without a trainer watching. This project explores using real-time computer vision, in a browser, to close that loop.",
    users: ["Anyone exercising without a trainer present — a self-guided fitness use case"],
    role:
      "Built the full computer-vision pipeline and UI: pose detection integration, per-exercise movement/rep-counting logic, form analysis rules and the real-time coaching interface.",
    scope: "Browser-based real-time exercise tracker using pose detection to count reps and assess form across 8 exercises.",
    technologies: ["React", "TensorFlow.js", "MoveNet", "MediaPipe", "JavaScript", "WebGL"],
    integrations: ["TensorFlow.js + MoveNet SinglePose Lightning (browser implementation)", "MediaPipe landmarks (desktop implementation)"],
    architecture: {
      layers: ["Live Camera Feed", "Pose Detection (TensorFlow.js + MoveNet / MediaPipe)", "Joint & Angle Analysis Engine", "Rep Counting + Form Classification", "React Coaching UI"],
      note: "WebGL-accelerated, real-time pose processing runs client-side in the browser.",
    },
    capabilities: [
      {
        title: "Exercises Supported",
        items: ["Squats", "Push-ups", "Left / right bicep curls", "Left / right shoulder press", "Plank", "Jumping jacks"],
      },
      {
        title: "Pose & Movement AI",
        items: [
          "Real-time human pose tracking & joint landmark analysis",
          "Exercise-specific movement detection with exercise stages",
          "Repetition counting with good/bad classification",
          "Joint angle analysis, pose smoothing & confidence thresholds",
        ],
      },
      {
        title: "Form Analysis",
        items: [
          "Squat — chest position, knee position, depth",
          "Push-up — body alignment, hip position, depth",
          "Bicep curl — elbow position, range of motion",
          "Shoulder press — arm extension",
          "Plank — body alignment",
          "Jumping jack — arm & leg position",
        ],
      },
      {
        title: "Coaching Interface",
        items: [
          "Live camera feed with skeleton & joint overlay",
          "Rep count, good/bad reps & form status feedback",
          "Session duration, best hold, mistake analytics & session insights",
          "Voice coaching",
        ],
      },
    ],
    challenges: [
      "Turning raw pose-estimation landmarks into reliable, per-exercise rep counting instead of just tracking motion",
      "Writing form-analysis rules (joint angles, alignment) that generalize across body types and camera angles",
      "Keeping pose detection and rendering smooth in real time entirely client-side, with WebGL acceleration",
      "Balancing confidence thresholds and pose smoothing so noisy frames don't produce false reps",
    ],
    built: [
      "Real-time pose detection pipeline (TensorFlow.js/MoveNet in-browser; MediaPipe landmarks in the desktop implementation)",
      "Per-exercise rep-counting and exercise-stage state machines",
      "Form-analysis rules for 8 exercises",
      "Live coaching UI with skeleton overlay, feedback and session analytics",
      "Voice coaching feedback",
    ],
    learnings: [
      "Computer-vision UX lives or dies on latency and stability — smoothing and confidence thresholds mattered as much as the pose model itself.",
      "Per-exercise state machines (not a single generic rep counter) were necessary to get reliable results across very different movement patterns.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "aitracker",
    accent: "blue",
  },

  // 4 — RITE TUTOR ------------------------------------------------
  {
    id: "rite-tutor",
    slug: "rite-tutor",
    title: "Rite Tutor — EdTech & Virtual Classroom Platform",
    shortTitle: "Rite Tutor",
    tagline: "LMS + virtual classroom + educational CMS + assessment + gamification",
    categories: ["EdTech", "Frontend", "Full Stack"],
    featured: true,
    priority: 4,
    problem:
      "Running live classes, tracking student progress and keeping learning engaging usually means stitching together separate tools for scheduling, content, quizzes and games. This platform brings them into one product for students, teachers and admins.",
    users: ["Students", "Teachers", "Administrators"],
    role: "Built the React frontend across the student, teacher and admin experiences — live classes, content library, assessments and the gamification layer — integrated with REST APIs and Zoom.",
    scope: "Full LMS, virtual classroom and educational content platform with an assessment and gamification layer.",
    technologies: ["React", "REST APIs", "Zoom"],
    integrations: ["Zoom (live sessions)"],
    architecture: {
      layers: ["React (Student / Teacher / Admin)", "REST API Layer", "Backend Services"],
      externalServices: ["Zoom"],
    },
    capabilities: [
      {
        title: "Student Experience",
        items: [
          "Dashboard, courses, batches & live classes",
          "Study materials, exercises & educational library (image books, spelling, vocabulary, stories)",
          "Progress charts (radar charts), notes & achievement tracking",
        ],
      },
      {
        title: "Teacher Experience",
        items: [
          "Dashboard, course & batch management",
          "Lecture/session scheduling & rescheduling",
          "Quiz builder, form builder & student oversight",
        ],
      },
      {
        title: "Admin Experience",
        items: [
          "User, course & batch management",
          "Content management: reading, stories, spelling, quizzes, image books, grades",
          "Enquiries, email & demo class scheduling",
        ],
      },
      {
        title: "Gamification",
        items: [
          "20 educational games spanning vocabulary, spelling, grammar & word play",
          "Examples: Spell Bee, Word Crafter, Grammar Master, Vocabulary Wheel, Synonyms/Antonyms, Matching, World Map",
        ],
      },
    ],
    challenges: [
      "Structuring one content model that serves reading, stories, spelling and quiz modules consistently across student and admin views",
      "Building a quiz/form builder flexible enough for teachers to author assessments without developer involvement",
      "Visualizing multi-dimensional student progress (radar charts) in a way that's meaningful at a glance",
      "Integrating Zoom for scheduled and rescheduled live sessions across teacher and student calendars",
    ],
    built: [
      "Student, teacher and admin React applications",
      "Live class scheduling with Zoom integration",
      "Quiz builder and form builder",
      "Progress visualization (radar charts, achievements)",
      "20-game gamification suite for vocabulary, spelling and grammar practice",
    ],
    learnings: [
      "Gamified learning content needed its own lightweight data model, separate from the core course/lecture structure, to scale to 20 distinct game types without duplicating logic.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "ritetutor",
    accent: "amber",
  },

  // 5 — RITE RESTAURANT ------------------------------------------------
  {
    id: "rite-restaurant",
    slug: "rite-restaurant",
    title: "Restaurant Operations & Marketing Platform",
    shortTitle: "Rite Restaurant",
    tagline: "Business-critical SaaS for menu, order and marketing operations across locations",
    categories: ["SaaS", "Full Stack", "Frontend"],
    featured: true,
    priority: 5,
    problem:
      "Multi-location restaurants need one system to manage menus, orders, delivery, staff and marketing — instead of ad-hoc spreadsheets and disconnected tools per location.",
    users: ["Restaurant admins", "Restaurant/client staff", "Customers"],
    role: "Built the React frontend across the public site, admin portal and restaurant portal — menu management, order operations, analytics and the marketing/email builder — integrated with REST APIs, Stripe and Uber for delivery.",
    scope: "Public restaurant website plus admin and restaurant-facing portals covering operations and marketing.",
    technologies: ["React", "REST APIs", "Stripe", "RCS"],
    integrations: ["Stripe", "Uber (delivery)", "SMTP (email)", "RCS messaging", "Graph API (where applicable)"],
    architecture: {
      layers: ["Public Website + Restaurant/Admin Portals (React)", "REST API Layer", "Backend Services"],
      externalServices: ["Stripe", "Uber", "SMTP / Email", "RCS Messaging"],
    },
    capabilities: [
      {
        title: "Admin Portal",
        items: [
          "Client, staff, department & category management",
          "Working hours, breaks & closures",
          "Module access control & admin chatbot",
        ],
      },
      {
        title: "Restaurant Portal",
        items: [
          "Analytics: income, orders, delivery status",
          "Uber and Stripe integration for delivery & payments",
          "Location & hours management",
        ],
      },
      {
        title: "Menu Management",
        items: [
          "Multi-location menu trees with drag-and-drop ordering",
          "Items, groups, variants, availability, vegetarian tags, images, ingredients",
          "Pickup / delivery / dine-in pricing, discounts & menu replication",
          "CSV import/export",
        ],
      },
      {
        title: "Operations",
        items: ["Combos & daily specials", "Order & customer management", "Promotions & coupons"],
      },
      {
        title: "Marketing",
        items: [
          "Drag-and-drop email builder with variables, scheduling & open tracking",
          "SMTP-based email logs",
          "RCS messaging with JSON-based, customizable message flows",
        ],
      },
    ],
    challenges: [
      "Modeling menus as trees that support multi-location variation, replication and CSV import/export without data drift",
      "Building a drag-and-drop email builder with variable substitution, scheduling and open tracking",
      "Coordinating order, delivery (Uber) and payment (Stripe) status across the restaurant portal in near real time",
    ],
    built: [
      "Public restaurant website with authentication and role-based navigation",
      "Admin and restaurant portals",
      "Full menu management system with drag-and-drop, variants and CSV import/export",
      "Drag-and-drop marketing email builder and RCS messaging flows",
    ],
    learnings: [
      "Menu data is deceptively complex once multi-location pricing, variants and replication are in scope — getting the tree model right early avoided rework later.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "riterestaurant",
    accent: "amber",
  },

  // 6 — HOMEPROS ------------------------------------------------
  {
    id: "homepros",
    slug: "homepros",
    title: "HomePros — B2B2C Home Services Management Platform",
    shortTitle: "HomePros",
    tagline: "Service management + CRM + lead management for home service businesses",
    categories: ["SaaS", "Full Stack", "Frontend"],
    featured: true,
    priority: 6,
    problem:
      "Home service businesses (cleaning, HVAC, water restoration, roofing, water mitigation) need to manage appointments, multiple customer properties, employees and referral leads in one place, while customers need a simple way to book and track service.",
    users: ["Businesses", "Customers", "Employees", "Referral partners", "Platform admins"],
    role: "Built the React frontend across the public platform, admin, business, customer, employee and referral-partner experiences, integrated with REST APIs and Material UI.",
    scope: "B2B2C SaaS platform for home service businesses, covering public booking, business operations, and referral/lead management.",
    technologies: ["React", "REST APIs", "Material UI"],
    integrations: ["REST APIs"],
    architecture: {
      layers: ["React (Public / Admin / Business / Customer / Employee / Referral)", "REST API Layer", "Backend Services"],
    },
    capabilities: [
      {
        title: "Public Platform",
        items: ["Home, services, blog & membership pages", "Enquiry, login & purchase flows"],
      },
      {
        title: "Admin",
        items: ["Services, businesses & employees", "Appointments, customers & referral sources", "Lead management"],
      },
      {
        title: "Business & Employee",
        items: ["Appointment & employee management for businesses", "Assigned-appointment views for employees"],
      },
      {
        title: "Customer & Referral Partner",
        items: [
          "Book service, manage properties & profile",
          "My-services and property-detail views",
          "Referral partners can add and track referrals",
        ],
      },
    ],
    challenges: [
      "Designing role-based access across five distinct user types (admin, business, customer, employee, referral partner) sharing one data model",
      "Modeling multi-property customer accounts so a customer can book and track service across several properties",
      "Building a referral-tracking system that connects leads back to their source for the business and admin views",
    ],
    built: [
      "Public marketing and booking site",
      "Admin, business, customer, employee and referral-partner dashboards",
      "Multi-property customer management",
      "Referral tracking and lead management",
    ],
    learnings: [
      "A B2B2C product needs its permission model designed before its UI — retrofitting role-based access after the fact is far more expensive than planning it up front.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "homepros",
    accent: "blue",
  },

  // 7 — INSTANT DELIVERY ------------------------------------------------
  {
    id: "instant-delivery",
    slug: "instant-delivery",
    title: "Instant Delivery — Reusable Ordering & Delivery Platform",
    shortTitle: "Instant Delivery",
    tagline: "A configurable, embeddable ordering platform built for reuse across businesses",
    categories: ["SaaS", "Full Stack", "Frontend"],
    featured: true,
    priority: 7,
    problem:
      "Restaurants and businesses in the US needed an online ordering and delivery experience they could deploy under their own branding without building a new platform from scratch each time.",
    users: ["Customers ordering food/goods", "Restaurant/business operators"],
    role: "Built the React frontend for the ordering platform — menu browsing, cart, checkout and order tracking — and the reusable/embeddable architecture that lets it be re-themed per business.",
    scope: "Reusable, white-label-capable ordering and delivery platform, integrated with Stripe and Uber Direct.",
    technologies: ["React", "REST APIs", "Stripe", "Uber Direct"],
    integrations: ["Stripe", "Uber Direct"],
    architecture: {
      layers: ["React (Configurable per Business — Name, Logo, Theme, Routes)", "REST API Layer", "Backend Services"],
      externalServices: ["Stripe", "Uber Direct"],
      note: "Designed to be embedded via iframe and reconfigured per business (branding, default service, menu, chatbot) without a new codebase.",
    },
    capabilities: [
      {
        title: "Customer Experience",
        items: [
          "Location selection, digital menu with search & ingredient-exclusion filters",
          "Item customization — variants, notes, specials & combos",
        ],
      },
      {
        title: "Cart & Checkout",
        items: [
          "Cart with discounts, coupons, promotions, gift cards, fees & taxes",
          "Address management, delivery quote & pickup location",
          "Stripe or cash-on-delivery payment",
        ],
      },
      {
        title: "Orders",
        items: ["Order history & tracking timeline", "Item-level feedback and ratings"],
      },
      {
        title: "Reusable Architecture",
        items: [
          "Per-business configuration: name, logo, theme, routes, default service, menu & chatbot",
          "iframe-embeddable for integration into a business's own website",
        ],
      },
    ],
    challenges: [
      "Architecting the app so one codebase can be reconfigured (branding, routes, menu, default service) per business instead of forked per client",
      "Coordinating live delivery quotes and order tracking through Uber Direct",
      "Building a cart engine that correctly layers discounts, coupons, gift cards, fees and taxes",
    ],
    built: [
      "Configurable, embeddable React ordering application",
      "Cart, checkout and order-tracking flows",
      "Stripe and Uber Direct integrations",
      "Per-business theming and iframe embedding support",
    ],
    learnings: [
      "Designing for reuse from day one — configuration over forking — made it possible to onboard a new business without touching the core codebase.",
    ],
    links: [{ label: "Private / Company Project" }],
    visualKey: "instantdelivery",
    accent: "rose",
  },
];

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Frontend",
  "Full Stack",
  "Healthcare",
  "AI",
  "EdTech",
  "SaaS",
  "Mobile",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);
  const idx = sorted.findIndex((p) => p.slug === slug);
  const prev = sorted[(idx - 1 + sorted.length) % sorted.length];
  const next = sorted[(idx + 1) % sorted.length];
  return { prev, next };
}
