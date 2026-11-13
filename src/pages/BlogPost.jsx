import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import PostCover from "../components/PostCover.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const { t } = useLang();
  const post = t.blog.posts.find((p) => p.slug === slug);
  const pc = t.post;

  if (!post) {
    return (
      <PageHero eyebrow="404" title={pc.notFoundTitle} subtitle={pc.notFoundSub}>
        <div style={{ marginTop: "24px" }}>
          <Button to="/blog" variant="ghost" arrow>
            {t.common.backToBlog}
          </Button>
        </div>
      </PageHero>
    );
  }

  const related = t.blog.posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="article">
        <div className="phero__glow" />
        <div className="container article__inner">
          <Reveal>
            <Link to="/blog" className="article__back">
              <Icon name="arrow" size={16} style={{ transform: "rotate(180deg)" }} /> {t.common.backToBlog}
            </Link>
            <span className="post__cat">{post.category}</span>
            <h1 className="article__title">{post.title}</h1>
            <span className="post__meta">
              {post.date} · {post.read} {t.common.read}
            </span>
          </Reveal>

          <Reveal className="article__cover" delay={0.1}>
            <PostCover slug={post.slug} size="feature" />
          </Reveal>

          <Reveal className="article__body" delay={0.15}>
            <p className="article__lead">{post.excerpt}</p>
            <p>{pc.body[0]}</p>
            <p>{pc.body[1]}</p>
            <h2>{pc.sub1}</h2>
            <p>{pc.body2}</p>
            <blockquote>{pc.quote}</blockquote>
            <p>{pc.body3}</p>
            <h2>{pc.sub2}</h2>
            <p>{pc.body4}</p>
          </Reveal>

          <Reveal className="article__cta card" delay={0.1}>
            <h3>
              {pc.ctaPre}
              <span className="grad-text">{pc.ctaAccent}</span>
            </h3>
            <Button to="/contact" variant="primary" arrow>
              {t.common.bookDemo}
            </Button>
          </Reveal>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <h2>{t.common.keepReading}</h2>
          </Reveal>
          <div className="posts">
            {related.map((p, i) => (
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
