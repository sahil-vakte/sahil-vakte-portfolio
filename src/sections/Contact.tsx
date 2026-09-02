import { useState, type FormEvent } from "react";
import { contact, contactFormEndpoint, mailtoHref, whatsappHref } from "../data/config";
import { IconGithub, IconGitlab, IconLinkedin, IconMail, IconWhatsapp } from "../components/Icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const isConfigured = contactFormEndpoint.trim().length > 0;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isConfigured) {
      // No backend/serverless endpoint configured yet — fall back to the
      // visitor's own email client so the form still works out of the box.
      window.location.href = mailtoHref(
        form.subject || "Portfolio contact form",
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a product to build or a problem to solve?
          </h2>
          <p className="mt-3 text-[var(--color-text-dim)]">Let's talk.</p>

          <div className="mt-8 space-y-3">
            <a href={mailtoHref()} className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm hover:border-[var(--color-border-strong)]">
              <IconMail className="h-4 w-4 text-[var(--color-accent)]" />
              {contact.email}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm hover:border-[var(--color-border-strong)]"
            >
              <IconWhatsapp className="h-4 w-4 text-[var(--color-accent)]" />
              {contact.phoneDisplay} — Chat on WhatsApp
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm hover:border-[var(--color-border-strong)]"
            >
              <IconLinkedin className="h-4 w-4 text-[var(--color-accent)]" />
              linkedin.com/in/sahil-vakte
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm hover:border-[var(--color-border-strong)]"
            >
              <IconGithub className="h-4 w-4 text-[var(--color-accent)]" />
              github.com/sahil-vakte
            </a>
            <a
              href={contact.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm hover:border-[var(--color-border-strong)]"
            >
              <IconGitlab className="h-4 w-4 text-[var(--color-accent)]" />
              gitlab.com/sahil7309
            </a>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center" role="status">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
                <IconMail className="h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-medium text-[var(--color-text)]">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button type="button" className="btn btn-ghost mt-6" onClick={() => setStatus("idle")}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-text-dim)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-text-dim)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[var(--color-text-dim)]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-text-dim)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-y rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-[var(--color-rose)]" role="alert">
                  Something went wrong sending that — please email me directly at {contact.email}.
                </p>
              )}

              <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-6 w-full sm:w-auto">
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>

              {!isConfigured && (
                <p className="mt-3 text-xs text-[var(--color-text-faint)]">
                  This form currently opens your email client to send — connect a form endpoint in{" "}
                  <code className="font-mono">src/data/config.ts</code> for direct inbox delivery. See README.md.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
