import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";

const INFO = [
  { icon: "mail", label: "Email", value: "hello@florysite.com" },
  { icon: "phone", label: "Phone", value: "+1 (555) 014-2920" },
  { icon: "pin", label: "Office", value: "Remote-first · 40+ countries" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email";
    if (form.message.trim().length < 10) err.message = "Tell us a bit more (10+ chars)";
    return err;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's <span className="grad-text">talk</span>
          </>
        }
        subtitle="Book a demo, ask a question, or just say hi. We usually reply within a day."
      />

      <section className="section">
        <div className="container">
          <div className="contact">
            <Reveal className="contact__info">
              {INFO.map((item) => (
                <div className="contact__info-item card" key={item.label}>
                  <span className="contact__info-icon">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
              <div className="contact__promise card">
                <h3>What happens next?</h3>
                <ul>
                  <li>
                    <Icon name="check" size={16} /> We review your message
                  </li>
                  <li>
                    <Icon name="check" size={16} /> A real human replies within 24h
                  </li>
                  <li>
                    <Icon name="check" size={16} /> We book a time that suits you
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="contact__form card" delay={0.1}>
              {sent ? (
                <div className="contact__success">
                  <span className="contact__success-icon">
                    <Icon name="check" size={34} />
                  </span>
                  <h3>Message sent!</h3>
                  <p>Thanks, {form.name.split(" ")[0] || "there"}. We'll be in touch shortly.</p>
                  <Button
                    variant="soft"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", company: "", message: "" });
                    }}
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="field">
                    <label>Name</label>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Doe"
                      className={errors.name ? "has-error" : ""}
                    />
                    {errors.name && <span className="field__err">{errors.name}</span>}
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@company.com"
                        className={errors.email ? "has-error" : ""}
                      />
                      {errors.email && <span className="field__err">{errors.email}</span>}
                    </div>
                    <div className="field">
                      <label>Company <em>(optional)</em></label>
                      <input
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us what you're looking for…"
                      className={errors.message ? "has-error" : ""}
                    />
                    {errors.message && <span className="field__err">{errors.message}</span>}
                  </div>
                  <Button type="submit" variant="primary" full arrow>
                    Send message
                  </Button>
                  <p className="contact__fineprint">
                    This is a portfolio demo — the form validates but doesn't send real email.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
