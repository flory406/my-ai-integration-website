import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";

const METRICS = [
  { value: "4,000+", label: "Teams growing" },
  { value: "72M", label: "Events / day" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "40+", label: "Countries" },
];

const VALUES = [
  { icon: "spark", title: "Clarity over clutter", text: "We remove noise so the signal leads every decision." },
  { icon: "bolt", title: "Speed as a feature", text: "Real-time isn't a bonus — it's the baseline we build on." },
  { icon: "shield", title: "Trust by default", text: "Your data is yours. Encrypted, auditable, never sold." },
  { icon: "layers", title: "Built to scale", text: "From your first user to your millionth, the experience holds." },
];

const TEAM = [
  { name: "Alex Rivera", role: "Co-founder, CEO", grad: "linear-gradient(135deg,#fb923c,#ea580c)" },
  { name: "Mila Novak", role: "Co-founder, CPO", grad: "linear-gradient(135deg,#a78bfa,#6d28d9)" },
  { name: "Dan Oke", role: "Head of Engineering", grad: "linear-gradient(135deg,#38bdf8,#2563eb)" },
  { name: "Sara Lind", role: "Head of Design", grad: "linear-gradient(135deg,#f472b6,#be185d)" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            We help teams <span className="grad-text">see clearly</span>
          </>
        }
        subtitle="FlorySite started with a simple frustration: analytics that buried the answer under a hundred charts. So we built the opposite."
      />

      <section className="section">
        <div className="container">
          <div className="metrics">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="metrics__item card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </Reveal>
            ))}
          </div>

          <div className="about-split">
            <Reveal className="about-split__text">
              <h2>
                Our <span className="grad-text">story</span>
              </h2>
              <p>
                We're a small team of engineers and designers who got tired of dashboards that
                demand a PhD. FlorySite is our answer: intelligent, warm, and fast.
              </p>
              <p>
                Today thousands of teams rely on us to understand their users and move with
                confidence — and we're just getting started.
              </p>
            </Reveal>
            <Reveal className="about-split__visual card" delay={0.1}>
              <span className="about-split__glow" />
              <Icon name="analytics" size={110} stroke={1.1} className="about-split__ghost" />
            </Reveal>
          </div>

          <div className="values">
            {VALUES.map((v, i) => (
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
            <h2>The people behind it</h2>
            <p>A compact team that ships fast and sweats the details.</p>
          </Reveal>
          <div className="team">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06} className="team__card card">
                <span className="team__avatar" style={{ background: t.grad }} />
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="fcta card">
            <h2>
              Want to <span className="grad-text">join us?</span>
            </h2>
            <p>We're always looking for curious people. Say hello.</p>
            <Button to="/contact" variant="primary" arrow>
              Get in touch
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
