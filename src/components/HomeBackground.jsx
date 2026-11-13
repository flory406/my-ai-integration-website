import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import heroImg from "../assets/hero-swirl.png";

/**
 * Full-page background for the Home route.
 * The AI swirl sits behind all content and "sets" as you scroll:
 * it drifts down, darkens and shifts toward deep red.
 */
export default function HomeBackground() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.07]);
  const brightness = useTransform(scrollY, [0, 460], [1, 0.25]);
  const saturate = useTransform(scrollY, [0, 460], [1.05, 1.8]);
  const hue = useTransform(scrollY, [0, 460], [0, -26]);
  const filter = useMotionTemplate`brightness(${brightness}) saturate(${saturate}) hue-rotate(${hue}deg)`;

  // the swirl fades out as you leave the hero, so content sections stay clean
  const imgOpacity = useTransform(scrollY, [0, 520], [0.62, 0.05]);
  const glowOpacity = useTransform(scrollY, [0, 300, 620], [0.55, 0.8, 0]);

  return (
    <div className="home-bg" aria-hidden="true">
      <motion.img
        className="home-bg__img"
        src={heroImg}
        alt=""
        style={{ y, scale, filter, opacity: imgOpacity, transformOrigin: "50% 18%" }}
      />
      <motion.div className="home-bg__glow" style={{ opacity: glowOpacity }} />
      <div className="home-bg__veil" />
    </div>
  );
}
