import { useRef, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { IconArrowRight, IconLock } from "./Icons";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const card = useRef<HTMLElement>(null);
  function tilt(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
    event.currentTarget.style.setProperty("--spot-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y * 100}%`);
  }
  function reset() { card.current?.style.setProperty("--tilt-x", "0deg"); card.current?.style.setProperty("--tilt-y", "0deg"); }
  return <article ref={card} className="project-card card" onPointerMove={tilt} onPointerLeave={reset} onPointerCancel={reset}>
    <Link to={`/work/${project.slug}`} className="project-preview" aria-label={`Explore ${project.shortTitle}`}>
      <div className="project-preview-top"><span>{project.categories[0]}</span><span>0{index + 1} / ↗</span></div>
      <div className="project-blueprint" aria-hidden="true"><span className="blueprint-orbit" /><span className="blueprint-code">{project.shortTitle.split(" ")[0]}<span> / SYSTEM</span></span><div>{project.architecture.layers.slice(0, 3).map(layer => <span key={layer}>{layer}</span>)}</div></div>
      <span className="project-preview-caption">APPLICATION ARCHITECTURE</span>
    </Link>
    <div className="project-copy">
      <h3><Link to={`/work/${project.slug}`}>{project.shortTitle}</Link></h3>
      <p>{project.tagline}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">{project.technologies.map(technology => <span key={technology} className="chip">{technology}</span>)}</div>
      <div className="project-card-footer"><span><IconLock className="h-3 w-3" />{project.links.find(link => !link.href)?.label}</span><Link to={`/work/${project.slug}`} aria-label={`Read ${project.shortTitle} case study`}><IconArrowRight className="h-5 w-5" /></Link></div>
      {project.links.filter(link => link.href).map(link => <a key={link.href} className="btn btn-secondary mt-3" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}
    </div>
  </article>;
}
