import profilePhoto from "../assets/profile/sahil-vakte.jpg";
import { siteConfig } from "../data/config";

const pillars = [
  {
    title: "Product ownership",
    body: "Works across multiple products at once — from requirements and user-flow design through to what ships in production.",
  },
  {
    title: "Frontend & application architecture",
    body: "Structures React and React Native applications so they stay maintainable as features, roles and integrations multiply.",
  },
  {
    title: "Full-stack understanding",
    body: "Integrates React frontends with Django/DRF and Node.js APIs, and reasons about the backend, not just the interface.",
  },
  {
    title: "Complex workflows & integrations",
    body: "Comfortable wiring in third-party systems — payments, telehealth, clinical data, delivery, messaging — into real product flows.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="section-eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Requirements in. Production applications out.
          </h2>
          <div className="mt-6 aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-[var(--color-border)] lg:hidden">
            <img src={profilePhoto} alt={`${siteConfig.name}, Software Engineer`} className="h-full w-full object-cover object-top" loading="lazy" width="320" height="320" />
          </div>
        </div>

        <div>
          <div className="hidden lg:float-right lg:ml-8 lg:mb-6 lg:block lg:w-56">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <img src={profilePhoto} alt={`${siteConfig.name}, Software Engineer`} className="h-full w-full object-cover object-top" loading="lazy" width="224" height="280" />
            </div>
          </div>

          <div className="space-y-4 text-[var(--color-text-dim)]">
            <p>
              Sahil is a Software Engineer with {siteConfig.yearsExperience} years of experience turning complex
              business requirements into usable, production applications — primarily in React and React Native,
              with full-stack fluency across Django/DRF and Node.js.
            </p>
            <p>
              His work spans healthcare and EMR systems, AI-driven computer-vision fitness tracking, EdTech virtual
              classrooms, restaurant and delivery SaaS, and home-service management platforms — often several of
              them running in parallel. Across each, the pattern is the same: understand the problem, design the
              user flow, architect the application, build the interface, integrate the APIs and third-party
              services it depends on, and support what ships.
            </p>
            <p>
              That combination — product thinking plus the engineering to execute it end-to-end — is what he brings
              to a team: not just a developer who implements a spec, but someone who can shape it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="card p-5">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{p.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-faint)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
