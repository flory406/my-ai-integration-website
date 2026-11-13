import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { TEAM_GRADS } from "../data/site.js";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <PageHero
        eyebrow={a.eyebrow}
        title={
          <>
            {a.titlePre}
            <span className="grad-text">{a.titleAccent}</span>
          </>
        }
        subtitle={a.subtitle}
      />

      <section className="section">
        <div className="container">
          <div className="metrics">
            {a.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="metrics__item card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </Reveal>
            ))}
          </div>

          <div className="about-split">
            <Reveal className="about-split__text">
              <h2>
                {a.storyPre}
                <span className="grad-text">{a.storyAccent}</span>
              </h2>
              <p>{a.story1}</p>
              <p>{a.story2}</p>
            </Reveal>
            <Reveal className="about-split__visual card" delay={0.1}>
              <span className="about-split__glow" />
              <Icon name="analytics" size={110} stroke={1.1} className="about-split__ghost" />
            </Reveal>
          </div>

          <div className="values">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="values__item card">
                <span className="values__icon">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="team-head sec-head">
            <h2>{a.teamHead}</h2>
            <p>{a.teamSub}</p>
          </Reveal>
          <div className="team">
            {a.team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06} className="team__card card">
                <span className="team__avatar" style={{ background: TEAM_GRADS[i % TEAM_GRADS.length] }} />
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="fcta card">
            <h2>
              {a.ctaPre}
              <span className="grad-text">{a.ctaAccent}</span>
            </h2>
            <p>{a.ctaText}</p>
            <Button to="/contact" variant="primary" arrow>
              {t.common.getInTouch}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
