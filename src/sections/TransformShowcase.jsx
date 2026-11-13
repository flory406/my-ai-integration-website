import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import DashboardMock from "../components/DashboardMock.jsx";

export default function TransformShowcase() {
  return (
    <section className="transform section">
      <div className="container">
        <div className="transform__grid">
          <Reveal className="transform__text">
            <h2>
              Transform Your Work <br /> with <span className="grad-text">FlorySite</span>
            </h2>
            <p>Embark on a transformative journey of data excellence with FlorySite.</p>
            <form className="transform__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter email here" aria-label="Email" />
              <Button type="submit" variant="primary">
                Get Started
              </Button>
            </form>
          </Reveal>

          <motion.div
            className="transform__visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMock />
            <span className="transform__underglow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
