import { Link, Navigate, useParams } from "react-router-dom";
import { getAdjacentProjects, getProjectBySlug } from "../data/projects";
import { projectVisuals } from "../projects/visuals";
import SEO from "../components/SEO";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import { IconArrowRight, IconLock } from "../components/Icons";
import { siteConfig } from "../data/config";

const projectSeo: Record<string, { title: string; description: string }> = {
  "openemr-healthcare-platform": {
    title: "OpenEMR Healthcare EMR Platform | Sahil Vakte",
    description: "A healthcare EMR case study by Sahil Vakte: a React and Django REST Framework application integrated with OpenEMR for clinical workflows, telehealth, billing and healthcare services.",
  },
  "rite-clinic": {
    title: "Rite Clinic | React Native Healthcare Platform — Sahil Vakte",
    description: "A React Native healthcare and wellness platform for appointments, clinical forms, exercise, nutrition and secure API-driven patient experiences.",
  },
  "ai-exercise-tracker": {
    title: "AI Exercise Tracker | Computer Vision Project — Sahil Vakte",
    description: "A real-time exercise tracking project built with React, TensorFlow.js, MoveNet and MediaPipe for browser pose estimation, rep counting and form analysis.",
  },
  "rite-tutor": {
    title: "Rite Tutor | EdTech & Virtual Classroom Platform — Sahil Vakte",
    description: "An EdTech platform built with React and REST APIs for virtual classrooms, learning management, assessments, educational content and Zoom live sessions.",
  },
  "rite-restaurant": {
    title: "Restaurant Operations & Marketing Platform — Sahil Vakte",
    description: "A React SaaS platform for restaurant menu, order, multi-location operations and marketing workflows with Stripe, delivery and messaging integrations.",
  },
  homepros: {
    title: "HomePros | B2B2C Home Services Platform — Sahil Vakte",
    description: "A React B2B2C home-services platform combining service management, CRM, lead management and role-based workflows for businesses, employees and customers.",
  },
  "instant-delivery": {
    title: "Instant Delivery Platform | React + Stripe + Uber Direct — Sahil Vakte",
    description: "A reusable React ordering and delivery platform with configurable storefronts, checkout, Stripe payments, Uber Direct integration and REST APIs.",
  },
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/404" replace />;

  const { prev, next } = getAdjacentProjects(project.slug);
  const Visual = projectVisuals[project.visualKey];
  const seo = projectSeo[project.slug] ?? { title: `${project.title} | Sahil Vakte`, description: project.tagline };
  const projectUrl = `${siteConfig.siteUrl}/work/${project.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.tagline,
    url: projectUrl,
    creator: { "@type": "Person", name: siteConfig.name, url: siteConfig.siteUrl },
    keywords: [...project.categories, ...project.technologies].join(", "),
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.siteUrl}/work` },
      { "@type": "ListItem", position: 3, name: project.shortTitle, item: projectUrl },
    ],
  };

  return (
    <article>
      <SEO
        title={seo.title}
        description={seo.description}
        path={`/work/${project.slug}`}
        type="article"
        structuredData={[structuredData, breadcrumbData]}
      />

      {/* Header */}
      <header className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-dim)]">
              <li><Link to="/" className="hover:text-[var(--color-text)]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/work" className="hover:text-[var(--color-text)]">Work</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[var(--color-text)]">{project.shortTitle}</li>
            </ol>
          </nav>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-dim)]">{project.tagline}</p>

          <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium text-[var(--color-text-faint)]">Role</dt>
              <dd className="mt-1 text-sm text-[var(--color-text)]">Software Engineer</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--color-text-faint)]">Users</dt>
              <dd className="mt-1 text-sm text-[var(--color-text)]">{project.users.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--color-text-faint)]">Access</dt>
              <dd className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-text)]">
                <IconLock className="h-3.5 w-3.5" />
                {project.links[0]?.label ?? "Private / Company Project"}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Visual */}
      <section className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page">
          <p className="section-eyebrow mb-6">Product Preview</p>
          {Visual && <Visual />}
          <p className="mt-4 text-xs text-[var(--color-text-faint)]">
            Illustrative UI concept built to represent this product's functionality — not a production screenshot.
            All names, patients, clinics and figures shown are fictional demo data.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Problem</h2>
            <p className="mt-3 text-[var(--color-text-dim)]">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">My Role</h2>
            <p className="mt-3 text-[var(--color-text-dim)]">{project.role}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Product Scope</h2>
            <p className="mt-3 text-[var(--color-text-dim)]">{project.scope}</p>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page">
          <p className="section-eyebrow">What I Built</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Capability breakdown</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.capabilities.map((group) => (
              <div key={group.title} className="card p-5">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{group.title}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-[var(--color-text-dim)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech + Integrations */}
      <section className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page grid gap-10 sm:grid-cols-2">
          <div>
            <p className="section-eyebrow">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="section-eyebrow">Integrations</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.integrations.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page">
          <p className="section-eyebrow">Architecture</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">How it's built</h2>
          <div className="mt-8 max-w-2xl">
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        </div>
      </section>

      {/* Challenges + Built + Learnings */}
      <section className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Engineering Challenges</h2>
            <ul className="mt-4 space-y-3">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-[var(--color-text-dim)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">What I Owned</h2>
            <ul className="mt-4 space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-[var(--color-text-dim)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
              {project.outcome ? "Outcome" : "Lessons & Decisions"}
            </h2>
            {project.outcome && <p className="mt-4 text-sm text-[var(--color-text-dim)]">{project.outcome}</p>}
            <ul className="mt-4 space-y-3">
              {project.learnings.map((l) => (
                <li key={l} className="flex gap-2.5 text-sm text-[var(--color-text-dim)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <nav className="py-14 sm:py-16" aria-label="Case study navigation">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          <Link
            to={`/work/${prev.slug}`}
            className="card group flex items-center justify-between p-5 transition-colors hover:border-[var(--color-border-strong)]"
          >
            <div>
              <p className="text-xs text-[var(--color-text-faint)]">← Previous</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{prev.shortTitle}</p>
            </div>
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="card group flex items-center justify-between p-5 text-right transition-colors hover:border-[var(--color-border-strong)]"
          >
            <div className="ml-auto">
              <p className="text-xs text-[var(--color-text-faint)]">Next →</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{next.shortTitle}</p>
            </div>
          </Link>
        </div>
        <div className="container-page mt-6">
          <Link to="/work" className="btn btn-ghost">
            All Work
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </article>
  );
}
