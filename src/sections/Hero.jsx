import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero__inner container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="hero__badge">
          <span className="badge">
            <span className="badge__tag">Whats New</span>
            Ease Update v0.1
            <Icon name="arrow" size={14} />
          </span>
        </motion.div>

        <motion.h1 variants={item} className="hero__title">
          <span className="grad-text">Intelligent Solutions</span>
          <br />
          Powered by AI.
        </motion.h1>

        <motion.p variants={item} className="hero__sub">
          Gain clarity and harness the power of your data with FlorySite.
          <br className="hide-mobile" /> Our intuitive dashboard provides real-time analytics.
        </motion.p>

        <motion.div variants={item} className="hero__actions">
          <Button to="/features" variant="ghost" arrow>
            Read More
          </Button>
          <Button to="/contact" variant="primary" arrow>
            Book a Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
