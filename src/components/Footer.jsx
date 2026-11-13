import { Link } from "react-router-dom";
import { FOOTER_LINKS, SOCIALS } from "../data/site.js";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <h3 className="footer__headline">
              Transform Your Work <br /> with FlorySite
            </h3>
            <p className="footer__blurb">
              Intelligent analytics and automation for teams that want clarity, not clutter.
              Built to scale from your first user to your millionth.
            </p>
            <div className="footer__cta">
              <Button to="/contact" variant="primary" arrow>
                Book a Demo
              </Button>
            </div>
          </div>

          <div className="footer__cols">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div className="footer__col" key={title}>
                <span className="footer__col-title">{title}</span>
                <ul>
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer__col">
              <span className="footer__col-title">Social Media</span>
              <ul>
                {SOCIALS.map((s) => (
                  <li key={s}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} FlorySite. All rights reserved.</span>
          <span className="footer__made">
            Crafted with care · Portfolio demo
          </span>
        </div>
      </div>
    </footer>
  );
}
