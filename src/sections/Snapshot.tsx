const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "React.js / JavaScript", label: "Primary Stack" },
  { value: "React Native", label: "Mobile" },
  { value: "Django / Node.js", label: "Backend" },
  { value: "Web + Mobile", label: "Product Development" },
  { value: "Healthcare · AI · EdTech · SaaS", label: "Product Domains" },
  { value: "End-to-End Delivery", label: "Engineering Strength" },
  { value: "Pune, India", label: "Location" },
];

export default function Snapshot() {
  return (
    <section aria-label="Recruiter snapshot" className="border-b border-[var(--color-border)] bg-[var(--color-bg-raised)]/40 py-16">
      <div className="container-page">
        <p className="section-eyebrow">Recruiter Snapshot</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Sahil, in one scroll.</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <p className="text-lg font-semibold leading-tight text-[var(--color-accent)] sm:text-xl">{s.value}</p>
              <p className="mt-1.5 text-xs text-[var(--color-text-faint)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
