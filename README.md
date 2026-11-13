<div align="center">

# FlorySite

**A dark marketing landing site for a fictional AI analytics product.**
A portfolio case in the RedSun style — clean design, smooth animations, two languages.

React · Vite · Framer Motion · React Router

📖 [Українською](./README.uk.md)

</div>

---

## About

FlorySite is a single-page application (SPA) that ships as a full multi-page marketing
site: home, features, about, pricing, blog and contact. It's the first in a series of
landing templates, built to be easy to re-skin, localize and move blocks between projects.

Visual language: near-black background, warm orange accents, glassmorphism cards, soft
glow and restrained motion. The home page features a large AI illustration that acts as a
full-page background and smoothly "sets behind the horizon" as you scroll — it darkens,
shifts color and fades out.

## ✨ Features

- **7 routes** — Home, Features, About, Pricing, Blog, a single blog post page, and Contact.
- **Two languages (EN / UA)** — instant switching with no reload; the choice persists in
  `localStorage` and defaults to the browser language.
- **Animated home background** — a full-page AI swirl with a scroll-driven "sunset" effect
  (Framer Motion `useScroll` + `useTransform`).
- **Animations** — scroll-reveal sections, an infinite logo marquee, hover effects and
  smooth transitions.
- **Generated visuals** — themed SVG cover art for blog posts (a unique color and icon per
  category) and a glassmorphism dashboard mock with sparklines and a bar chart.
- **Responsive** — desktop down to phone, with a full-screen burger menu on a solid panel.
- **Interactive** — pricing with a monthly/annual toggle and an FAQ accordion, plus a
  contact form with front-end validation (a demo — it doesn't actually send anything).
- **Design tokens** — the whole palette, fonts and spacing live in one file for fast rebrand.

## 🧰 Tech stack

| Purpose             | Technology           |
| ------------------- | -------------------- |
| UI library          | React 18             |
| Build / dev server  | Vite                 |
| Routing             | React Router         |
| Animation           | Framer Motion        |
| Styling             | Plain CSS + variables|
| Fonts               | Space Grotesk, Inter |

## 🚀 Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

Requires Node.js 18+.

## 📁 Project structure

```
src/
  main.jsx            router + language provider + style imports
  App.jsx             layout (Navbar + Outlet + Footer), scroll-to-top on route change

  i18n/
    dict.js           every string on the site, in both languages (en + uk)
    LanguageContext.jsx  language provider + useLang() hook

  data/
    site.js           language-neutral data (brand, routes, logos, colors)

  styles/
    theme.css         design tokens (colors, fonts, spacing) ← edit here
    globals.css       reset + base primitives (card, badge, grad-text)
    buttons.css       buttons
    layout.css        navbar, footer, logo, language toggle
    home.css          home sections + swirl background + dashboard mock
    pages.css         inner pages + blog covers

  components/          Button, Icon, Logo, Navbar, LangToggle, Footer, Reveal,
                       HomeBackground, DashboardMock, Sparkline, PageHero, PostCover
  sections/           Hero, LogosMarquee, ShowcaseCards,
                       PowerfulFeatures, TransformShowcase, CTA
  pages/              Home, Features, About, Pricing, Blog, BlogPost, Contact
  assets/             hero-swirl.png — the home background AI illustration
```

## 🌐 Localization

Every string lives in `src/i18n/dict.js` (the `en` and `uk` objects). Components read text
through a hook:

```jsx
import { useLang } from "./i18n/LanguageContext.jsx";

function Example() {
  const { t, lang, setLang } = useLang();
  return <h1>{t.hero.title1}</h1>;
}
```

To **add a language**, add a new object to `dict.js`, add its code to `LANGS`, and (if
needed) a button in `components/LangToggle.jsx`.

## 🎨 Re-skinning for a new site

1. **Palette & fonts** — `src/styles/theme.css` (`--accent`, `--accent-grad`,
   `--font-display`, `--bg`…).
2. **Brand name** — `BRAND` in `src/data/site.js`.
3. **Copy** — `src/i18n/dict.js` (both languages).
4. **Home illustration** — replace `src/assets/hero-swirl.png`.
5. **Sections** — add/remove blocks in the relevant `sections/` and `pages/` files.

## 📝 Notes

- Fonts are loaded in `index.html` via Google Fonts.
- `node_modules` and `dist/` are intentionally not committed — restore them with
  `npm install` and `npm run build`.
- The contact form and the home email field validate on the front end but have no backend
  (it's a demo).
- All content (company names, pricing, posts, team) is fictional, for demonstration.

## 📦 Deployment

It's a plain Vite SPA, so it deploys anywhere (Vercel, Netlify, GitHub Pages): build with
`npm run build`, serve the `dist/` folder. For SPA routing, configure a fallback of all
paths to `index.html`.

---

<div align="center">
<sub>Portfolio demo. Design inspired by the RedSun template.</sub>
</div>
