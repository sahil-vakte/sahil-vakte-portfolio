import { experience, education } from "../data/experience";

export default function Experience() {
  return <section id="experience" className="journey-section border-b border-[var(--color-border)] py-20 sm:py-24">
    <div className="container-page">
      <p className="section-eyebrow">03 / The journey</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Experience. Built over time.</h2>
      <ol className="cinematic-timeline">
        {experience.map((job, index) => <li key={job.id} className="timeline-entry">
          <span className="timeline-node" aria-hidden="true" />
          <article className="card timeline-card">
            <div className="timeline-meta"><span>EXPERIENCE / 0{index + 1}</span><span>{job.start} – {job.end}</span></div>
            <h3 className="mt-5 text-xl font-semibold">{job.company}</h3>
            <p className="mt-2 text-sm text-[var(--color-accent)]">{job.title}</p>
            <p className="mt-4 text-sm text-[var(--color-text-dim)]">{job.summary}</p>
            <ul className="timeline-highlights">{job.highlights.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="mt-5 flex flex-wrap gap-1.5">{job.stack.map(item => <span className="chip" key={item}>{item}</span>)}</div>
          </article>
        </li>)}
        {education.map((item, index) => <li id={index === 0 ? "education" : undefined} key={item.id} className="timeline-entry">
          <span className="timeline-node" aria-hidden="true" />
          <article className="card timeline-card">
            <div className="timeline-meta"><span>EDUCATION / 0{index + 1}</span><span>{item.start} – {item.end}</span></div>
            <h3 className="mt-5 text-xl font-semibold">{item.degree}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-dim)]">{item.institution}</p>
            {item.detail && <p className="mt-3 font-mono text-xs text-[var(--color-accent)]">{item.detail}</p>}
          </article>
        </li>)}
      </ol>
    </div>
  </section>;
}
