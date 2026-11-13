# FlorySite

Темний лендінг-шаблон у стилі RedSun (портфоліо-кейс). React + Vite + Framer Motion.
Перший із серії сайтів — побудований так, щоб легко перефарбовувати й переносити блоки.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # збірка у dist/
npm run preview  # перегляд збірки
```

## Структура

```
src/
  main.jsx          роутер + підключення стилів
  App.jsx           layout (Navbar + Outlet + Footer)
  data/site.js      весь контент (навігація, фічі, тарифи, пости…)
  styles/
    theme.css       дизайн-токени (кольори, шрифти, відступи) ← міняй тут
    globals.css     reset + базові примітиви (card, badge, button-text)
    buttons.css     кнопки
    layout.css      navbar + footer + logo
    home.css        секції головної + дашборд-мокап
    pages.css       внутрішні сторінки
  components/        Button, Icon, Navbar, Footer, Logo, Reveal,
                     DashboardMock, Sparkline, PageHero
  sections/         Hero, LogosMarquee, ShowcaseCards,
                     PowerfulFeatures, TransformShowcase, CTA
  pages/            Home, Features, About, Pricing, Blog, BlogPost, Contact
```

## Як зробити новий сайт із цього шаблону

1. Зміни палітру й шрифти у `src/styles/theme.css` (змінні `--accent`, `--font-display`…).
2. Зміни назву та контент у `src/data/site.js` і `BRAND`.
3. За потреби — заміни/прибери секції у відповідній сторінці.

## Нотатки

- Шрифти: **Space Grotesk** (заголовки) + **Inter** (текст), підключені в `index.html`.
- Hero-візуал — CSS-арка (`.hero__arc` у `home.css`). Щоб поставити власну картинку,
  заміни блок `.hero__visual` у `src/sections/Hero.jsx` на `<img>`.
- Форма Contact валідує поля, але нічого реально не надсилає (демо).
```
```
