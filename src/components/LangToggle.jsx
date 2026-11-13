import { useLang } from "../i18n/LanguageContext.jsx";

/**
 * Compact EN / UA language switch.
 */
export default function LangToggle({ onChange }) {
  const { lang, setLang } = useLang();

  const pick = (l) => {
    setLang(l);
    onChange?.();
  };

  return (
    <div className="langtoggle" role="group" aria-label="Language">
      <button
        className={`langtoggle__btn ${lang === "en" ? "is-active" : ""}`}
        onClick={() => pick("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="langtoggle__sep" />
      <button
        className={`langtoggle__btn ${lang === "uk" ? "is-active" : ""}`}
        onClick={() => pick("uk")}
        aria-pressed={lang === "uk"}
      >
        UA
      </button>
    </div>
  );
}
