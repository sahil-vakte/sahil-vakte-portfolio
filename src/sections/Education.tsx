import { education } from "../data/experience";

export default function Education() {
  return (
    <section id="education" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page">
        <p className="section-eyebrow">Education</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Academic background</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.id} className="card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{e.degree}</h3>
                <span className="font-mono text-xs text-[var(--color-text-faint)]">
                  {e.start} – {e.end}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-[var(--color-text-dim)]">{e.institution}</p>
              {e.detail && <p className="mt-1 text-xs text-[var(--color-text-faint)]">{e.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
