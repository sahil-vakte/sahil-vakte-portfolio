import primaryResumePath from "../assets/resume/Sahil_Vakte_Resume.pdf?url";

/**
 * Central site configuration.
 * Update values here rather than hunting through components —
 * this file is the single source of truth for contact details,
 * resume file path, and site-wide toggles.
 */

export const siteConfig = {
  name: "Sahil Vishnu Vakte",
  shortName: "Sahil Vakte",
  role: "Full-stack Developer & Product Engineer",
  tagline: "Product Architecture · AI & MCP · Automation · Healthcare · SaaS",
  location: "Pune, Maharashtra, India",
  yearsExperience: "4+",

  // Canonical origin retained from the existing portfolio deployment configuration.
  siteUrl: "https://sahilvakte.dev",

  // --- Availability -----------------------------------------------------
  // Flip this off (or edit the label) whenever your status changes.
  // It is the single toggle that drives the "Open to Opportunities" badge.
  availability: {
    open: true,
    label: "Open to Opportunities",
  },
} as const;

export const contact = {
  email: "sahilvaktepatil123@gmail.com",
  emailSubjectDefault: "Software Engineering Opportunity",
  phoneDisplay: "+91 94051 99411",
  // WhatsApp click-to-chat requires the number in international format,
  // digits only (no +, spaces or dashes).
  whatsappNumber: "919405199411",
  whatsappDefaultMessage:
    "Hi Sahil, I came across your portfolio and would like to discuss an opportunity.",
  linkedin: "https://linkedin.com/in/sahil-vakte-3915a5225",
  github: "https://github.com/sahil-vakte",
  gitlab: "https://gitlab.com/sahil7309",
} as const;

export function whatsappHref(message: string = contact.whatsappDefaultMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(subject: string = contact.emailSubjectDefault, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${contact.email}?${params.toString()}`;
}

/** The single resume PDF linked throughout the site. */
export { primaryResumePath };

/**
 * Contact form submission endpoint.
 *
 * The form posts here via fetch(). No secrets live in this codebase —
 * Formspree-style endpoints are safe to expose client-side because they are
 * a public form ID, not a credential. See README.md "Contact form" section
 * for full setup steps (Formspree, Resend + serverless function, etc).
 *
 * Leave this empty ("") to make the form fall back to a mailto: link so the
 * site still works with zero configuration.
 */
export const contactFormEndpoint = ""; // e.g. "https://formspree.io/f/xxxxxxx"
