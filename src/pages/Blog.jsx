import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import PostCover from "../components/PostCover.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function Blog() {
  const { t } = useLang();
  const b = t.blog;
  const [featured, ...rest] = b.posts;

  return (
    <>
      <PageHero
        eyebrow={b.eyebrow}
        title={
          <>
            {b.titlePre}
            <span className="grad-text">{b.titleAccent}</span>
          </>
        }
        subtitle={b.subtitle}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="post-feature card">
              <div className="post-feature__media">
                <PostCover slug={featured.slug} size="feature" />
              </div>
              <div className="post-feature__body">
                <span className="post__cat">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="post__meta">
                  {featured.date} · {featured.read} {t.common.read}
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="posts">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={`/blog/${p.slug}`} className="post card">
                  <div className="post__media">
                    <PostCover slug={p.slug} />
                  </div>
                  <div className="post__body">
                    <span className="post__cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="post__meta">
                      {p.date} · {p.read} {t.common.read}
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
