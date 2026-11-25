import { skillGroups } from "../data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page">
        <p className="section-eyebrow">02 / The toolkit</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">What I build with</h2>
        <p className="mt-3 max-w-xl text-[var(--color-text-dim)]">
          Organized by where it sits in a product, not as one long keyword wall.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id} className="card p-5">
              <h3 className="text-sm font-semibold text-[var(--color-text)]">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
