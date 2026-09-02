import { Link } from "react-router-dom";
import profilePhoto from "../assets/profile/sahil-vakte.jpg";
import { contact, mailtoHref, siteConfig } from "../data/config";
import ResumeMenu from "../components/ResumeMenu";
import WhatsAppButton from "../components/WhatsAppButton";
import { IconGithub, IconLinkedin } from "../components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[var(--color-border)]">
      {/* subtle background grid + glow, decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, #5eead4, transparent 70%)" }}
      />

      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div className="reveal">
          {siteConfig.availability.open && (
            <span className="chip mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              {siteConfig.availability.label}
            </span>
          )}

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Software Engineer building
            <span className="text-[var(--color-accent)]"> production-grade</span> web, mobile &amp; AI-powered
            products.
          </h1>

          <p className="mt-5 font-mono text-sm text-[var(--color-text-dim)] sm:text-base">
            React.js • React Native • JavaScript • Django • Node.js • Product Engineering
          </p>

          <p className="mt-5 max-w-xl text-[var(--color-text-dim)]">
            {siteConfig.yearsExperience} years turning business requirements into production applications — across
            Healthcare, AI, EdTech, SaaS, restaurant technology, service platforms and e-commerce. I take products
            from requirements through architecture, build and deployment, not just the tickets in between.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/work" className="btn btn-primary">
              View My Work
            </Link>
            <ResumeMenu variant="secondary" />
            <a href={mailtoHref("Let's Connect")} className="btn btn-ghost">
              Let's Connect
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <WhatsAppButton className="btn btn-whatsapp !py-2 !text-[13px]" />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !py-2 !text-[13px]"
              aria-label="LinkedIn profile"
            >
              <IconLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !py-2 !text-[13px]"
              aria-label="GitHub profile"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="reveal mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm" style={{ animationDelay: "0.1s" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-bg-raised)]">
            <img
              src={profilePhoto}
              alt={`${siteConfig.name}, ${siteConfig.role}`}
              className="h-full w-full object-cover object-top"
              loading="eager"
              width={480}
              height={600}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3">
            <div>
              <p className="text-sm font-medium">{siteConfig.name}</p>
              <p className="text-xs text-[var(--color-text-faint)]">{siteConfig.location}</p>
            </div>
            <span className="chip">{siteConfig.yearsExperience} yrs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
