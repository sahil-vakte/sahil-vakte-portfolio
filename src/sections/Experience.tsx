import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page">
        <p className="section-eyebrow">Experience</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Where this was built</h2>

        <ol className="mt-10 space-y-8 border-l border-[var(--color-border-strong)] pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={job.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] sm:-left-[calc(2rem+5px)]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{job.company}</h3>
                <span className="font-mono text-xs text-[var(--color-text-faint)]">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-[var(--color-accent)]">{job.title}</p>
              <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-dim)]">{job.summary}</p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-[var(--color-text-dim)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
