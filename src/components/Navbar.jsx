import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../data/site.js";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <Logo onClick={() => setOpen(false)} />

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="nav__mobile-cta">
            <Button to="/contact" variant="primary" arrow>
              Book a Demo
            </Button>
          </div>
        </nav>

        <div className="nav__right">
          <span className="nav__cart">Cart ()</span>
          <div className="nav__desktop-cta">
            <Button to="/contact" variant="primary" arrow>
              Book a Demo
            </Button>
          </div>
          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
