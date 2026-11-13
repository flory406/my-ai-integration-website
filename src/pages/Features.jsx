import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function Features() {
  const { t } = useLang();
  const f = t.features;

  return (
    <>
      <PageHero
        eyebrow={f.eyebrow}
        title={
          <>
            {f.titlePre}
            <span className="grad-text">{f.titleAccent}</span>
          </>
        }
        subtitle={f.subtitle}
      />

      <section className="section">
        <div className="container">
          <div className="fgrid">
            {t.powerful.features.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} className="fgrid__card card">
                <span className="fgrid__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          {f.big.map((bf, i) => (
            <Reveal key={bf.title} className={`bigfeat ${i % 2 ? "bigfeat--rev" : ""}`}>
              <div className="bigfeat__text">
                <span className="bigfeat__icon">
                  <Icon name={bf.icon} size={26} />
                </span>
                <h2>{bf.title}</h2>
                <p>{bf.text}</p>
                <ul className="bigfeat__bullets">
                  {bf.bullets.map((b) => (
                    <li key={b}>
                      <Icon name="check" size={16} /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bigfeat__visual card">
                <span className="bigfeat__orb" />
                <Icon name={bf.icon} size={90} stroke={1.2} className="bigfeat__ghost" />
              </div>
            </Reveal>
          ))}

          <Reveal className="fcta card">
            <h2>
              {f.ctaPre}
              <span className="grad-text">{f.ctaAccent}</span>
            </h2>
            <p>{f.ctaText}</p>
            <Button to="/contact" variant="primary" arrow>
              {t.common.bookDemo}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
