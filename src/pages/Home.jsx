import HomeBackground from "../components/HomeBackground.jsx";
import Hero from "../sections/Hero.jsx";
import LogosMarquee from "../sections/LogosMarquee.jsx";
import ShowcaseCards from "../sections/ShowcaseCards.jsx";
import PowerfulFeatures from "../sections/PowerfulFeatures.jsx";
import TransformShowcase from "../sections/TransformShowcase.jsx";
import CTA from "../sections/CTA.jsx";

export default function Home() {
  return (
    <div className="home">
      <HomeBackground />
      <div className="home__content">
        <Hero />
        <LogosMarquee />
        <ShowcaseCards />
        <PowerfulFeatures />
        <TransformShowcase />
        <CTA />
      </div>
    </div>
  );
}
