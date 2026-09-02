import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { IconArrowRight, IconLock } from "./Icons";

const accentGradient: Record<Project["accent"], string> = {
  teal: "linear-gradient(135deg, #0f3d38, #0a0d12 70%)",
  blue: "linear-gradient(135deg, #0e2a3a, #0a0d12 70%)",
  amber: "linear-gradient(135deg, #3a2a10, #0a0d12 70%)",
  rose: "linear-gradient(135deg, #3a1518, #0a0d12 70%)",
};

const accentText: Record<Project["accent"], string> = {
  teal: "text-[var(--color-accent)]",
  blue: "text-[var(--color-blue)]",
  amber: "text-[var(--color-amber)]",
  rose: "text-[var(--color-rose)]",
};

export default function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group card reveal flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
      style={index !== undefined ? { animationDelay: `${Math.min(index, 6) * 0.06}s` } : undefined}
    >
      <div
        className="relative flex h-40 items-end justify-between overflow-hidden p-5"
        style={{ background: accentGradient[project.accent] }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span className={`relative font-mono text-xs font-semibold tracking-wide ${accentText[project.accent]}`}>
          {project.categories[0].toUpperCase()}
        </span>
        <IconArrowRight className="relative h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-[var(--color-text)]">{project.shortTitle}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-[var(--color-text-dim)]">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1.5 border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-text-faint)]">
          <IconLock className="h-3.5 w-3.5" />
          {project.links[0]?.label ?? "Private / Company Project"}
        </div>
      </div>
    </Link>
  );
}
