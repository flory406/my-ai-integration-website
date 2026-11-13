import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { POSTS } from "../data/site.js";

export default function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Ideas on <span className="grad-text">data, design & growth</span>
          </>
        }
        subtitle="Thoughts from the team building FlorySite — on analytics, product and the craft of clear interfaces."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="post-feature card">
              <div className="post-feature__media">
                <span className="post-feature__glow" />
                <Icon name="spark" size={70} stroke={1.2} />
              </div>
              <div className="post-feature__body">
                <span className="post__cat">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="post__meta">
                  {featured.date} · {featured.read} read
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="posts">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={`/blog/${p.slug}`} className="post card">
                  <div className="post__media">
                    <span className="post__media-glow" />
                  </div>
                  <div className="post__body">
                    <span className="post__cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="post__meta">
                      {p.date} · {p.read} read
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
