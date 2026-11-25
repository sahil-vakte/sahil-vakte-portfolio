import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../data/config";
import { IconMenu, IconX } from "./Icons";

const links = [
  { label: "Home", id: "home" }, { label: "About", id: "about" },
  { label: "Skills", id: "skills" }, { label: "Experience", id: "experience" },
  { label: "Projects", id: "work" }, { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => {
      if (location.pathname !== "/") { setActive(location.pathname.split("/")[1]); return; }
      // DOM order differs from navigation order: choose the latest crossed section.
      const crossed = links.map(item => ({ id: item.id, top: document.getElementById(item.id)?.getBoundingClientRect().top ?? Infinity })).filter(item => item.top <= innerHeight * 0.4).sort((a, b) => b.top - a.top);
      setActive(crossed[0]?.id ?? "home");
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [location.pathname]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false); };
    document.addEventListener("keydown", key); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("pointerdown", outside); };
  }, []);
  return <header className="floating-header" ref={header}>
    <nav className="floating-nav" aria-label="Primary">
      <Link to="/#home" onClick={() => setOpen(false)} className="nav-brand" aria-label={`${siteConfig.shortName} home`}>sv<span>.</span></Link>
      <ul className="desktop-links">{links.map(item => <li key={item.id}><Link to={`/#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.label}</Link></li>)}</ul>
      <Link to="/#contact" className="nav-connect">Let's talk <span aria-hidden="true">↗</span></Link>
      <button ref={toggle} className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}</button>
    </nav>
    {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile">{links.map(item => <Link key={item.id} to={`/#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>}
  </header>;
}
