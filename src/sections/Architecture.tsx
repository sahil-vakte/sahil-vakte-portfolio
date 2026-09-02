import ArchitectureDiagram from "../components/ArchitectureDiagram";
import { getProjectBySlug } from "../data/projects";

const flow = ["Understand", "Plan", "Architect", "Build", "Integrate", "Test", "Deploy", "Improve"];

const genericArchitecture = {
  layers: ["React / React Native", "API Layer", "Django / Node.js", "Database"],
  externalServices: ["Third-Party Integrations"],
};

export default function Architecture() {
  const openemr = getProjectBySlug("openemr-healthcare-platform")!;

  return (
    <section id="architecture" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page">
        <p className="section-eyebrow">How I Build Products</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Understand → Plan → Architect → Build → Integrate → Test → Deploy → Improve
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-text-dim)]">
          Not "code → submit ticket." Every product on this site went through the same discipline: requirements
          first, architecture before code, integrations treated as first-class design decisions.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="chip">{step}</span>
              {i < flow.length - 1 && <span className="text-[var(--color-text-faint)]">→</span>}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--color-text-dim)]">General product pattern</h3>
            <ArchitectureDiagram architecture={genericArchitecture} />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--color-text-dim)]">
              OpenEMR Healthcare Platform
            </h3>
            <ArchitectureDiagram architecture={openemr.architecture} />
          </div>
        </div>
      </div>
    </section>
  );
}
