import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { POSTS } from "../data/site.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageHero
        eyebrow="404"
        title="Post not found"
        subtitle="The article you're looking for doesn't exist (yet)."
      >
        <div style={{ marginTop: "24px" }}>
          <Button to="/blog" variant="ghost" arrow>
            Back to Blog
          </Button>
        </div>
      </PageHero>
    );
  }

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="article">
        <div className="phero__glow" />
        <div className="container article__inner">
          <Reveal>
            <Link to="/blog" className="article__back">
              <Icon name="arrow" size={16} style={{ transform: "rotate(180deg)" }} /> Back to Blog
            </Link>
            <span className="post__cat">{post.category}</span>
            <h1 className="article__title">{post.title}</h1>
            <span className="post__meta">
              {post.date} · {post.read} read
            </span>
          </Reveal>

          <Reveal className="article__cover card" delay={0.1}>
            <span className="post-feature__glow" />
            <Icon name="spark" size={80} stroke={1.1} />
          </Reveal>

          <Reveal className="article__body" delay={0.15}>
            <p className="article__lead">{post.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa massa, id
              arcu blandit dignissim. Vulputate enim ante egestas commodo in. Phasellus eget
              adipiscing elit, mauris id nunc odio.
            </p>
            <h2>Why it matters</h2>
            <p>
              Aliquam et tellus urna. Phasellus eget adipiscing elit. Mauris id nunc odio. The best
              analytics tools disappear — they surface the answer and get out of the way.
            </p>
            <blockquote>
              "Clarity is a design decision. Everything else is noise you chose to keep."
            </blockquote>
            <p>
              Molestie lorem arcu, consectetur adipiscing elit. Maecenas massa massa id arcu
              blandit dignissim contum volutpat dolor fermentum, justo tempor.
            </p>
            <h2>What comes next</h2>
            <p>
              Vulputate enim ante egestas commodo in. We'll keep sharing what we learn as FlorySite
              grows — follow along.
            </p>
          </Reveal>

          <Reveal className="article__cta card" delay={0.1}>
            <h3>
              Enjoyed this? <span className="grad-text">Try FlorySite.</span>
            </h3>
            <Button to="/contact" variant="primary" arrow>
              Book a Demo
            </Button>
          </Reveal>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <h2>Keep reading</h2>
          </Reveal>
          <div className="posts">
            {related.map((p, i) => (
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
