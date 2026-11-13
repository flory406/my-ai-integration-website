import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { FEATURE_LIST } from "../data/site.js";

export default function PowerfulFeatures() {
  return (
    <section className="pfeat section">
      <div className="container">
        <Reveal className="sec-head">
          <h2>Powerful Features</h2>
          <p>
            Explore the frontier of coding evolution with FlorySite Unleashed. Our latest
            features redefine the boundaries of what's possible in analytics tools.
          </p>
        </Reveal>

        <div className="pfeat__grid">
          <Reveal className="pfeat__text">
            <h3>
              Top Management, to help you <span className="grad-text">see the bigger picture</span>
            </h3>
            <p>
              Bring every metric into one calm, intelligent dashboard. Spot trends, forecast
              demand, and act with confidence.
            </p>
            <p>Built for teams who'd rather decide than dig.</p>
            <a className="pfeat__link" href="/features">
              See Doc <Icon name="arrow" size={16} />
            </a>
          </Reveal>

          <div className="pfeat__list">
            {FEATURE_LIST.map((f, i) => (
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
