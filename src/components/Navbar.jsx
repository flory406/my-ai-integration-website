import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV } from "../data/site.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import LangToggle from "./LangToggle.jsx";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner container">
        <Logo onClick={() => setOpen(false)} />

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
          <div className="nav__mobile-extra">
            <LangToggle onChange={() => setOpen(false)} />
            <Button to="/contact" variant="primary" arrow onClick={() => setOpen(false)}>
              {t.common.bookDemo}
            </Button>
          </div>
        </nav>

        <div className="nav__right">
          <span className="nav__cart">{t.common.cart}</span>
          <div className="nav__desktop-cta">
            <LangToggle />
            <Button to="/contact" variant="primary" arrow>
              {t.common.bookDemo}
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
