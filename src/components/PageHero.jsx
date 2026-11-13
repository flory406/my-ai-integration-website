import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="phero">
      <div className="phero__glow" />
      <motion.div
        className="phero__inner container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="phero__title">{title}</h1>
        {subtitle && <p className="phero__sub">{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}
