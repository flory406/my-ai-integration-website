import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <Reveal className="cta__box card">
          <span className="cta__glow" />
          <h2>
            Ready to harness the <span className="grad-text">power of your data?</span>
          </h2>
          <p>Join 4,000+ teams already growing with FlorySite. No credit card required.</p>
          <div className="cta__actions">
            <Button to="/pricing" variant="ghost" arrow>
              View Pricing
            </Button>
            <Button to="/contact" variant="primary" arrow>
              Book a Demo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
