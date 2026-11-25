import SEO from "../components/SEO";
import profilePhoto from "../assets/profile/sahil-vakte.jpg";
import { contact, siteConfig } from "../data/config";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Snapshot from "../sections/Snapshot";
import TechStack from "../sections/TechStack";
import FeaturedWork from "../sections/FeaturedWork";
import Architecture from "../sections/Architecture";
import Experience from "../sections/Experience";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${profilePhoto}`,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
  sameAs: [contact.linkedin, contact.github, contact.gitlab],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} — Software Engineer Portfolio`,
  url: siteConfig.siteUrl,
  author: { "@type": "Person", name: siteConfig.name },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Sahil Vakte | Software Engineer | React.js | Product Engineer"
        description="Sahil Vakte — Software Engineer and Frontend Engineer specializing in React.js, React Native and Product Engineering. 4+ years building production web, mobile and AI-powered products across Healthcare, AI, EdTech and SaaS, with full-stack experience in Django and Node.js."
        path="/"
        structuredData={[personJsonLd, websiteJsonLd]}
      />
      <Hero />
      <About />
      <Snapshot />
      <TechStack />
      <Experience />
      <FeaturedWork />
      <Architecture />
      <Resume />
      <Contact />
    </>
  );
}
