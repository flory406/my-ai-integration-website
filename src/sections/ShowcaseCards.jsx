import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Sparkline from "../components/Sparkline.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function ShowcaseCards() {
  const { t } = useLang();
  const s = t.showcase;

  return (
    <section className="showcase section">
      <div className="container">
        <div className="showcase__grid">
          {/* Balance card */}
          <Reveal className="card showcase__card" delay={0}>
            <h3 className="showcase__title">{s.balanceTitle}</h3>
            <p className="showcase__text">{s.balanceText}</p>
            <div className="showcase__tasks">
              <div className="stask stask--active">
                <Icon name="bars" size={16} /> PER-08
                <span className="stask__dot" /> {s.task1}
              </div>
              <div className="stask">
                <Icon name="bars" size={16} /> PER-07
                <span className="stask__dot" /> {s.task2}
              </div>
            </div>
          </Reveal>

          {/* Users card */}
          <Reveal className="card showcase__card" delay={0.1}>
            <h3 className="showcase__title">{s.usersTitle}</h3>
            <p className="showcase__text">{s.usersText}</p>
            <div className="showcase__stack">
              <span className="sstack sstack--back" />
              <span className="sstack sstack--mid" />
              <div className="sstack sstack--front">
                <div className="sstack__top">
                  <span>{s.totalUsers}</span>
                  <span className="dstat__delta up">
                    <Icon name="arrow" size={12} /> 6.9%
                  </span>
                </div>
                <div className="sstack__row">
                  <strong>72,350</strong>
                  <Sparkline points={[20, 34, 26, 48, 32, 56, 40, 64]} color="#cbd5e1" width={90} height={30} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Funnel card */}
          <Reveal className="card showcase__card showcase__card--funnel" delay={0.2}>
            <div className="funnel">
              <span className="funnel__beam" />
              <span className="funnel__chip">
                <Icon name="funnel" size={34} stroke={2} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
