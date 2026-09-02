import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResumeMenu from "./ResumeMenu";
import WhatsAppButton from "./WhatsAppButton";
import { IconMenu, IconX } from "./Icons";

const links = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/#skills" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? "border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/#home" className="font-mono text-sm font-semibold tracking-tight text-[var(--color-text)]">
          <span className="text-[var(--color-accent)]">sahil</span>vakte<span className="text-[var(--color-text-faint)]">.dev</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="text-sm text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-text)]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ResumeMenu variant="ghost" />
        </div>

        <button
          type="button"
          className="btn btn-ghost !px-2.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-[var(--color-text)] hover:bg-white/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <ResumeMenu variant="secondary" />
            <WhatsAppButton className="btn btn-whatsapp w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
