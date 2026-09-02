import SEO from "../components/SEO";
import About from "../sections/About";
import Contact from "../sections/Contact";
import FeaturedWork from "../sections/FeaturedWork";
import { siteConfig } from "../data/config";

type SectionName = "about" | "work" | "contact";

const pageMeta: Record<SectionName, { title: string; description: string; heading: string; intro: string }> = {
  about: {
    title: "About Sahil Vakte | Software Engineer & Product Engineer",
    description: "Meet Sahil Vishnu Vakte, a Software Engineer in Pune with 4+ years of experience in React.js, React Native, Django, Node.js, frontend architecture and product delivery.",
    heading: "Software Engineer, frontend specialist and product builder",
    intro: "I build production web and mobile applications across healthcare, AI, EdTech and SaaS, combining frontend architecture with full-stack product delivery.",
  },
  work: {
    title: "Sahil Vakte | Software Engineering Projects & Case Studies",
    description: "Explore Sahil Vakte's software engineering case studies across healthcare EMR, AI computer vision, EdTech, SaaS, home services and delivery platforms.",
    heading: "Software engineering projects and case studies",
    intro: "Detailed product work covering the problem, role, engineering scope, technologies, integrations and architecture behind each application.",
  },
  contact: {
    title: "Contact Sahil Vakte | Software Engineer in Pune",
    description: "Contact Sahil Vishnu Vakte, a Software Engineer and React developer in Pune, Maharashtra, for frontend, full-stack and product engineering opportunities.",
    heading: "Contact Sahil Vakte",
    intro: "Let's discuss software engineering, React, React Native, full-stack or product development opportunities.",
  },
};

export default function SectionPage({ section }: { section: SectionName }) {
  const meta = pageMeta[section];
  const pageUrl = `${siteConfig.siteUrl}/${section}`;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: pageUrl,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.siteUrl },
  };

  return (
    <>
      <SEO title={meta.title} description={meta.description} path={`/${section}`} structuredData={webPageSchema} />
      <header className="border-b border-[var(--color-border)] py-14 sm:py-16">
        <div className="container-page">
          <p className="section-eyebrow">{section}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{meta.heading}</h1>
          <p className="mt-4 max-w-2xl text-[var(--color-text-dim)]">{meta.intro}</p>
        </div>
      </header>
      {section === "about" && <About />}
      {section === "work" && <FeaturedWork />}
      {section === "contact" && <Contact />}
    </>
  );
}
