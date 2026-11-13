import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

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
            <span className="badge__tag">{h.badgeTag}</span>
            {h.badgeText}
            <Icon name="arrow" size={14} />
          </span>
        </motion.div>

        <motion.h1 variants={item} className="hero__title">
          <span className="grad-text">{h.title1}</span>
          <br />
          {h.title2}
        </motion.h1>

        <motion.p variants={item} className="hero__sub">
          {h.subtitle1}
          <br className="hide-mobile" /> {h.subtitle2}
        </motion.p>

        <motion.div variants={item} className="hero__actions">
          <Button to="/features" variant="ghost" arrow>
            {t.common.readMore}
          </Button>
          <Button to="/contact" variant="primary" arrow>
            {t.common.bookDemo}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
