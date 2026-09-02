import { contact, mailtoHref, siteConfig } from "../data/config";
import { IconGithub, IconGitlab, IconLinkedin, IconMail, IconWhatsapp } from "./Icons";
import { whatsappHref } from "../data/config";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-[var(--color-text)]">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-[var(--color-text-faint)]">
            {siteConfig.role} — {siteConfig.tagline}
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-faint)]">{siteConfig.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a href={mailtoHref()} className="btn btn-ghost !px-3" aria-label="Email Sahil">
            <IconMail className="h-4 w-4" />
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3" aria-label="Chat on WhatsApp">
            <IconWhatsapp className="h-4 w-4" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3" aria-label="LinkedIn profile">
            <IconLinkedin className="h-4 w-4" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3" aria-label="GitHub profile">
            <IconGithub className="h-4 w-4" />
          </a>
          <a href={contact.gitlab} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3" aria-label="GitLab profile">
            <IconGitlab className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-5">
        <p className="container-page text-xs text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} {siteConfig.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
