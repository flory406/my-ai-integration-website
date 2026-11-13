import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { PRICING } from "../data/site.js";

const FAQ = [
  { q: "Can I change plans later?", a: "Yes — upgrade or downgrade anytime. Changes are prorated automatically." },
  { q: "Is there a free trial?", a: "Every paid plan includes a 14-day trial. No credit card required to start." },
  { q: "What counts as a session?", a: "A session is a single user's visit within a 30-minute active window." },
  { q: "Do you offer discounts?", a: "Yes — annual billing saves 20%, and we have special pricing for nonprofits." },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple pricing that <span className="grad-text">scales with you</span>
          </>
        }
        subtitle="Start free. Upgrade when you're ready. No hidden fees, cancel anytime."
      >
        <div className="billing">
          <span className={!annual ? "is-active" : ""}>Monthly</span>
          <button
            className={`billing__toggle ${annual ? "on" : ""}`}
            onClick={() => setAnnual((v) => !v)}
            aria-label="Toggle billing period"
          >
            <span />
          </button>
          <span className={annual ? "is-active" : ""}>
            Annual <em>−20%</em>
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="plans">
            {PRICING.map((p, i) => {
              const numeric = !isNaN(Number(p.price));
              const shown =
                numeric && annual ? Math.round(Number(p.price) * 0.8) : p.price;
              return (
                <Reveal
                  key={p.name}
                  delay={i * 0.08}
                  className={`plan card ${p.featured ? "plan--featured" : ""}`}
                >
                  {p.featured && <span className="plan__ribbon">Most popular</span>}
                  <h3 className="plan__name">{p.name}</h3>
                  <p className="plan__tagline">{p.tagline}</p>
                  <div className="plan__price">
                    {numeric && <span className="plan__cur">$</span>}
                    <strong>{shown}</strong>
                    <span className="plan__period">{p.period}</span>
                  </div>
                  <Button
                    to="/contact"
                    variant={p.featured ? "primary" : "soft"}
                    full
                    arrow={p.featured}
                  >
                    {p.cta}
                  </Button>
                  <ul className="plan__features">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Icon name="check" size={16} /> {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="sec-head faq-head">
            <h2>Frequently asked questions</h2>
          </Reveal>
          <div className="faq">
            {FAQ.map((item, i) => (
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
