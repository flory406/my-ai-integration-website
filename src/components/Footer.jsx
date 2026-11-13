import { Link } from "react-router-dom";
import { FOOTER_COLS, SOCIALS } from "../data/site.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <h3 className="footer__headline">
              {f.headline1} <br /> {f.headline2}
            </h3>
            <p className="footer__blurb">{f.blurb}</p>
            <div className="footer__cta">
              <Button to="/contact" variant="primary" arrow>
                {t.common.bookDemo}
              </Button>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__col-title">{f.colMain}</span>
              <ul>
                {FOOTER_COLS.colMain.map((l) => (
                  <li key={l.key + l.to}>
                    <Link to={l.to}>{f.links[l.key]}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">{f.colResources}</span>
              <ul>
                {FOOTER_COLS.colResources.map((l) => (
                  <li key={l.key + l.to}>
                    <Link to={l.to}>{f.links[l.key]}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">{f.colSocial}</span>
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
          <span>
            © {new Date().getFullYear()} FlorySite. {f.rights}
          </span>
          <span className="footer__made">{f.made}</span>
        </div>
      </div>
    </footer>
  );
}
