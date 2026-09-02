import { useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function FeaturedWork() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const sorted = useMemo(() => [...projects].sort((a, b) => a.priority - b.priority), []);
  const visible = useMemo(
    () => (filter === "All" ? sorted : sorted.filter((p) => p.categories.includes(filter as ProjectCategory))),
    [filter, sorted]
  );

  return (
    <section id="work" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page">
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Case studies, not just credits</h2>
        <p className="mt-3 max-w-2xl text-[var(--color-text-dim)]">
          Seven products across healthcare, AI, EdTech, SaaS and delivery — each with role, architecture,
          integrations and what was actually built.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                filter === cat
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  : "border-[var(--color-border)] text-[var(--color-text-dim)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-[var(--color-text-faint)]">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
