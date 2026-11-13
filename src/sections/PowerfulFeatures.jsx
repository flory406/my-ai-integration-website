import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function PowerfulFeatures() {
  const { t } = useLang();
  const p = t.powerful;

  return (
    <section className="pfeat section">
      <div className="container">
        <Reveal className="sec-head">
          <h2>{p.title}</h2>
          <p>{p.subtitle}</p>
        </Reveal>

        <div className="pfeat__grid">
          <Reveal className="pfeat__text">
            <h3>
              {p.bigTitlePre}
              <span className="grad-text">{p.bigTitleAccent}</span>
            </h3>
            <p>{p.bigText1}</p>
            <p>{p.bigText2}</p>
            <Link className="pfeat__link" to="/features">
              {t.common.seeDoc} <Icon name="arrow" size={16} />
            </Link>
          </Reveal>

          <div className="pfeat__list">
            {p.features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.08}
                className={`pfeat__item ${i === 0 ? "pfeat__item--lit" : ""}`}
              >
                <span className="pfeat__icon">
                  <Icon name={f.icon} size={22} />
                </span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
            <span className="pfeat__orb" />
          </div>
        </div>
      </div>
    </section>
  );
}
