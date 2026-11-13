import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Sparkline from "../components/Sparkline.jsx";

export default function ShowcaseCards() {
  return (
    <section className="showcase section">
      <div className="container">
        <div className="showcase__grid">
          {/* Balance card */}
          <Reveal className="card showcase__card" delay={0}>
            <h3 className="showcase__title">Balance</h3>
            <p className="showcase__text">
              Keep tasks, budgets and priorities in balance with a single live view.
            </p>
            <div className="showcase__tasks">
              <div className="stask stask--active">
                <Icon name="bars" size={16} /> PER-08
                <span className="stask__dot" /> Making testing very design sy…
              </div>
              <div className="stask">
                <Icon name="bars" size={16} /> PER-07
                <span className="stask__dot" /> Create a working prototype
              </div>
            </div>
          </Reveal>

          {/* Users card */}
          <Reveal className="card showcase__card" delay={0.1}>
            <h3 className="showcase__title">Users</h3>
            <p className="showcase__text">
              Watch your audience grow in real time and understand what moves the needle.
            </p>
            <div className="showcase__stack">
              <span className="sstack sstack--back" />
              <span className="sstack sstack--mid" />
              <div className="sstack sstack--front">
                <div className="sstack__top">
                  <span>Total Users</span>
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
                <Icon name="spark" size={30} stroke={2.2} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
