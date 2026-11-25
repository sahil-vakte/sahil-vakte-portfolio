import { Link } from "react-router-dom";
import { contact, siteConfig } from "../data/config";
import ResumeMenu from "../components/ResumeMenu";
import CinematicVideo from "../components/CinematicVideo";

export default function Hero() {
  return (
    <section id="home" className="cinematic-hero">
      <CinematicVideo />
      <div className="hero-watermark" aria-hidden="true">SAHIL VAKTE</div>
      <div className="container-page hero-content">
        <div className="hero-topline"><span className="section-eyebrow">{siteConfig.role} / Product engineering</span><span className="hero-location">PUNE, INDIA · WEB + MOBILE</span></div>
        <div className="hero-main reveal">
          <p className="hero-name">{siteConfig.name}</p>
          <h1>BUILDING IDEAS<br /><span>INTO EXPERIENCES.</span></h1>
          <div className="hero-intro">
            <span className="hero-rule" aria-hidden="true" />
            <p>Software Engineer building production-grade web, mobile &amp; AI-powered products. From the first requirement to what ships.</p>
          </div>
          <div className="hero-actions"><Link to="/#work" className="btn btn-primary">Explore work <span aria-hidden="true">↗</span></Link><ResumeMenu variant="secondary" /></div>
        </div>
        <div className="hero-bottom">
          <div className="hero-status">{siteConfig.availability.open && <span><i />{siteConfig.availability.label}</span>}<p>{siteConfig.yearsExperience} YEARS EXPERIENCE <b>/</b> {siteConfig.tagline}</p></div>
          <div className="hero-socials"><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link to="/#about" className="hero-scroll" aria-label="Scroll to About">↓</Link></div>
        </div>
      </div>
    </section>
  );
}
