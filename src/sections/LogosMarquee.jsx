import { LOGOS } from "../data/site.js";
import Icon from "../components/Icon.jsx";

// map each brand to a simple glyph
const GLYPHS = {
  Cloud: "cloud",
  Rise: "bars",
  Trace: "spark",
  Volume: "campaign",
  Clues: "grid",
  Nova: "bolt",
  Pulse: "analytics",
};

function Row() {
  return (
    <>
      {LOGOS.map((name) => (
        <span className="marquee__item" key={name}>
          <Icon name={GLYPHS[name] || "spark"} size={26} stroke={1.6} />
          {name}
        </span>
      ))}
    </>
  );
}

export default function LogosMarquee() {
  return (
    <section className="logos section">
      <p className="logos__title">Join 4,000+ companies already growing</p>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
