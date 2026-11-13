import { LOGOS, LOGO_GLYPHS } from "../data/site.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Icon from "../components/Icon.jsx";

function Row() {
  return (
    <>
      {LOGOS.map((name) => (
        <span className="marquee__item" key={name}>
          <Icon name={LOGO_GLYPHS[name] || "spark"} size={26} stroke={1.6} />
          {name}
        </span>
      ))}
    </>
  );
}

export default function LogosMarquee() {
  const { t } = useLang();
  return (
    <section className="logos section">
      <p className="logos__title">{t.logos.title}</p>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
