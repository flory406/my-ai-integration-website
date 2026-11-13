import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { FEATURE_LIST, BIG_FEATURES } from "../data/site.js";

export default function Features() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={
          <>
            Everything you need, <span className="grad-text">nothing you don't</span>
          </>
        }
        subtitle="Explore the frontier of analytics evolution with FlorySite. Our latest features redefine the boundaries of what's possible."
      />

      <section className="section">
        <div className="container">
          <div className="fgrid">
            {FEATURE_LIST.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07} className="fgrid__card card">
                <span className="fgrid__icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>

          {BIG_FEATURES.map((bf, i) => (
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
              See it in <span className="grad-text">action</span>
            </h2>
            <p>Book a demo and we'll walk you through your own data in 20 minutes.</p>
            <Button to="/contact" variant="primary" arrow>
              Book a Demo
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
