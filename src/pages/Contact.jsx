import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import { useLang } from "../i18n/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = c.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = c.errEmail;
    if (form.message.trim().length < 10) err.message = c.errMessage;
    return err;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  const firstName = form.name.trim().split(" ")[0] || c.thereName;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={
          <>
            {c.titlePre}
            <span className="grad-text">{c.titleAccent}</span>
          </>
        }
        subtitle={c.subtitle}
      />

      <section className="section">
        <div className="container">
          <div className="contact">
            <Reveal className="contact__info">
              {c.info.map((item) => (
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
                <h3>{c.promiseTitle}</h3>
                <ul>
                  {c.promise.map((line) => (
                    <li key={line}>
                      <Icon name="check" size={16} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="contact__form card" delay={0.1}>
              {sent ? (
                <div className="contact__success">
                  <span className="contact__success-icon">
                    <Icon name="check" size={34} />
                  </span>
                  <h3>{c.successTitle}</h3>
                  <p>{c.successText.replace("{name}", firstName)}</p>
                  <Button
                    variant="soft"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", company: "", message: "" });
                    }}
                  >
                    {t.common.sendAnother}
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="field">
                    <label>{c.fName}</label>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      placeholder={c.phName}
                      className={errors.name ? "has-error" : ""}
                    />
                    {errors.name && <span className="field__err">{errors.name}</span>}
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>{c.fEmail}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder={c.phEmail}
                        className={errors.email ? "has-error" : ""}
                      />
                      {errors.email && <span className="field__err">{errors.email}</span>}
                    </div>
                    <div className="field">
                      <label>
                        {c.fCompany} <em>{c.fCompanyOpt}</em>
                      </label>
                      <input value={form.company} onChange={update("company")} placeholder={c.phCompany} />
                    </div>
                  </div>
                  <div className="field">
                    <label>{c.fMessage}</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder={c.phMessage}
                      className={errors.message ? "has-error" : ""}
                    />
                    {errors.message && <span className="field__err">{errors.message}</span>}
                  </div>
                  <Button type="submit" variant="primary" full arrow>
                    {t.common.sendMessage}
                  </Button>
                  <p className="contact__fineprint">{c.fineprint}</p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
