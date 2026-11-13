import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function CTA() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section className="cta section">
      <div className="container">
        <Reveal className="cta__box card">
          <span className="cta__glow" />
          <h2>
            {c.titlePre}
            <span className="grad-text">{c.titleAccent}</span>
          </h2>
          <p>{c.subtitle}</p>
          <div className="cta__actions">
            <Button to="/pricing" variant="ghost" arrow>
              {t.common.viewPricing}
            </Button>
            <Button to="/contact" variant="primary" arrow>
              {t.common.bookDemo}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
