import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { NAV } from "../data/site.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import LangToggle from "./LangToggle.jsx";
import Icon from "./Icon.jsx";

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

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
        <div className="nav__inner container">
          <Logo onClick={close} />

          {/* desktop links */}
          <nav className="nav__links">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              >
                {t.nav[l.key]}
              </NavLink>
            ))}
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

      {/* Mobile menu — rendered into <body> so it can never be trapped by an
          ancestor's containing block (e.g. the navbar's backdrop-filter). */}
      {createPortal(
        <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
          <div className="mobile-menu__top container">
            <Logo onClick={close} />
            <button
              className="mobile-menu__close"
              onClick={close}
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
            >
              <Icon name="close" size={24} />
            </button>
          </div>
          <nav className="mobile-menu__links">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `mobile-menu__link ${isActive ? "is-active" : ""}`}
                onClick={close}
                tabIndex={open ? 0 : -1}
              >
                {t.nav[l.key]}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu__extra">
            <LangToggle onChange={close} />
            <Button to="/contact" variant="primary" arrow onClick={close}>
              {t.common.bookDemo}
            </Button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
