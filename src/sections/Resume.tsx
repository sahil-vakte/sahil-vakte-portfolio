import { Link } from "react-router-dom";
import { contact, primaryResumePath } from "../data/config";
import WhatsAppButton from "../components/WhatsAppButton";
import { IconDownload, IconLinkedin } from "../components/Icons";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-[var(--color-border)] py-20 sm:py-24">
      <div className="container-page">
        <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-raised)] to-[var(--color-bg)] p-8 sm:p-12">
          <p className="section-eyebrow">Resume</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something meaningful.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-text-dim)]">
            Open to opportunities where I can contribute across frontend engineering, product development,
            architecture and end-to-end delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/work" className="btn btn-secondary">
              View My Work
            </Link>
            <a href={primaryResumePath} download="Sahil_Vakte_Resume.pdf" className="btn btn-primary">
              <IconDownload className="h-4 w-4" />
              Download Resume
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <IconLinkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <WhatsAppButton />
          </div>

        </div>
      </div>
    </section>
  );
}
