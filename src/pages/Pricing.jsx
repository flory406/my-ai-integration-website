import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function Pricing() {
  const { t } = useLang();
  const p = t.pricing;
  const [annual, setAnnual] = useState(false);
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.titlePre}
            <span className="grad-text">{p.titleAccent}</span>
          </>
        }
        subtitle={p.subtitle}
      >
        <div className="billing">
          <span className={!annual ? "is-active" : ""}>{p.monthly}</span>
          <button
            className={`billing__toggle ${annual ? "on" : ""}`}
            onClick={() => setAnnual((v) => !v)}
            aria-label="Toggle billing period"
          >
            <span />
          </button>
          <span className={annual ? "is-active" : ""}>
            {p.annual} <em>{p.save}</em>
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="plans">
            {p.plans.map((plan, i) => {
              const numeric = !isNaN(Number(plan.price));
              const shown = numeric && annual ? Math.round(Number(plan.price) * 0.8) : plan.price;
              return (
                <Reveal
                  key={plan.name}
                  delay={i * 0.08}
                  className={`plan card ${plan.featured ? "plan--featured" : ""}`}
                >
                  {plan.featured && <span className="plan__ribbon">{p.popular}</span>}
                  <h3 className="plan__name">{plan.name}</h3>
                  <p className="plan__tagline">{plan.tagline}</p>
                  <div className="plan__price">
                    {numeric && <span className="plan__cur">$</span>}
                    <strong>{shown}</strong>
                    <span className="plan__period">{plan.period}</span>
                  </div>
                  <Button
                    to="/contact"
                    variant={plan.featured ? "primary" : "soft"}
                    full
                    arrow={plan.featured}
                  >
                    {plan.cta}
                  </Button>
                  <ul className="plan__features">
                    {plan.features.map((feat) => (
                      <li key={feat}>
                        <Icon name="check" size={16} /> {feat}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="sec-head faq-head">
            <h2>{p.faqHead}</h2>
          </Reveal>
          <div className="faq">
            {p.faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <button
                  className={`faq__item card ${open === i ? "is-open" : ""}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <div className="faq__q">
                    <span>{item.q}</span>
                    <Icon name="plus" size={18} className="faq__plus" />
                  </div>
                  <div className="faq__a">
                    <p>{item.a}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
