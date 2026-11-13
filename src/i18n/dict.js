// ============================================================
// FlorySite — i18n dictionary (English + Ukrainian)
// Every user-facing string lives here. Components read via useLang().
// Brand names (FlorySite, Huse, Penta, Border, logo names) stay the same.
// ============================================================

export const LANGS = ["en", "uk"];

const en = {
  brandTagline: "Transform Your Work with FlorySite",

  common: {
    bookDemo: "Book a Demo",
    readMore: "Read More",
    getStarted: "Get Started",
    cart: "Cart ()",
    launchImporter: "Launch importer",
    inviteUsers: "Invite users",
    contactSales: "Contact Sales",
    viewPricing: "View Pricing",
    getInTouch: "Get in touch",
    sendMessage: "Send message",
    sendAnother: "Send another",
    backToBlog: "Back to Blog",
    keepReading: "Keep reading",
    seeDoc: "See Doc",
    read: "read",
    emailPlaceholder: "Enter email here",
  },

  nav: {
    home: "Home",
    features: "Features",
    about: "About",
    pricing: "Pricing",
    blog: "Blog",
    contact: "Contact",
  },

  hero: {
    badgeTag: "Whats New",
    badgeText: "Ease Update v0.1",
    title1: "Intelligent Solutions",
    title2: "Powered by AI.",
    subtitle1: "Gain clarity and harness the power of your data with FlorySite.",
    subtitle2: "Our intuitive dashboard provides real-time analytics.",
  },

  logos: { title: "Join 4,000+ companies already growing" },

  showcase: {
    balanceTitle: "Balance",
    balanceText: "Keep tasks, budgets and priorities in balance with a single live view.",
    usersTitle: "Users",
    usersText: "Watch your audience grow in real time and understand what moves the needle.",
    task1: "Making testing very design sy…",
    task2: "Create a working prototype",
    totalUsers: "Total Users",
  },

  powerful: {
    title: "Powerful Features",
    subtitle:
      "Explore the frontier of analytics evolution with FlorySite Unleashed. Our latest features redefine the boundaries of what's possible.",
    bigTitlePre: "Top Management, to help you ",
    bigTitleAccent: "see the bigger picture",
    bigText1:
      "Bring every metric into one calm, intelligent dashboard. Spot trends, forecast demand, and act with confidence.",
    bigText2: "Built for teams who'd rather decide than dig.",
    features: [
      {
        icon: "grid",
        title: "Sessions",
        text: "Track every visitor journey in real time and spot drop-offs before they cost you.",
      },
      {
        icon: "chat",
        title: "Live Chat",
        text: "Talk to users and leads the moment they land — no plugins, no friction.",
      },
      {
        icon: "bars",
        title: "Service",
        text: "Automate routine support and route the hard cases to the right people.",
      },
      {
        icon: "shield",
        title: "Security",
        text: "Enterprise-grade encryption and granular roles keep your data locked down.",
      },
    ],
  },

  transform: {
    titlePre: "Transform Your Work",
    titleWith: "with ",
    subtitle: "Embark on a transformative journey of data excellence with FlorySite.",
  },

  cta: {
    titlePre: "Ready to harness the ",
    titleAccent: "power of your data?",
    subtitle: "Join 4,000+ teams already growing with FlorySite. No credit card required.",
  },

  dashboard: {
    title: "Dashboard",
    menu: {
      analytics: "Analytics",
      products: "Products",
      customers: "Customers",
      campaigns: "Campaigns",
      settings: "Settings",
    },
    stats: [
      { label: "Total Users", value: "72,350", delta: "6.9%", up: true },
      { label: "Sessions", value: "29.4%", delta: "12.5%", up: false },
      { label: "Avg. Click Rate", value: "56.8%", delta: "19.3%", up: true },
      { label: "Pageviews", value: "92,913", delta: "12.5%", up: false },
    ],
    importTitle: "Import data into Front Dashboard",
    importSub: "See and talk to your users and leads immediately",
    monthly: "Monthly expenses",
    usersLabel: "Users",
  },

  footer: {
    headline1: "Transform Your Work",
    headline2: "with FlorySite",
    blurb:
      "Intelligent analytics and automation for teams that want clarity, not clutter. Built to scale from your first user to your millionth.",
    colMain: "Main Pages",
    colResources: "Resources",
    colSocial: "Social Media",
    rights: "All rights reserved.",
    made: "Crafted with care · Portfolio demo",
    links: {
      home: "Home",
      about: "About",
      features: "Features",
      blog: "Blog",
      pricing: "Pricing",
      contact: "Contact",
      blogPost: "Blog Post",
      changelog: "Changelog",
    },
  },

  features: {
    eyebrow: "Features",
    titlePre: "Everything you need, ",
    titleAccent: "nothing you don't",
    subtitle:
      "Explore the frontier of analytics evolution with FlorySite. Our latest features redefine the boundaries of what's possible.",
    big: [
      {
        icon: "layers",
        title: "Top Management, to help you see the bigger picture",
        text: "Bring every metric into one calm, intelligent dashboard. Spot trends, forecast demand, and act with confidence.",
        bullets: ["Unified analytics", "AI-assisted forecasts", "Role-based access"],
      },
      {
        icon: "bolt",
        title: "Automation that works while you sleep",
        text: "Build flows that react to your data in real time — no code, no waiting on engineering.",
        bullets: ["Visual flow builder", "200+ integrations", "Instant triggers"],
      },
    ],
    ctaPre: "See it in ",
    ctaAccent: "action",
    ctaText: "Book a demo and we'll walk you through your own data in 20 minutes.",
  },

  about: {
    eyebrow: "About",
    titlePre: "We help teams ",
    titleAccent: "see clearly",
    subtitle:
      "FlorySite started with a simple frustration: analytics that buried the answer under a hundred charts. So we built the opposite.",
    metrics: [
      { value: "4,000+", label: "Teams growing" },
      { value: "72M", label: "Events / day" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "40+", label: "Countries" },
    ],
    storyPre: "Our ",
    storyAccent: "story",
    story1:
      "We're a small team of engineers and designers who got tired of dashboards that demand a PhD. FlorySite is our answer: intelligent, warm, and fast.",
    story2:
      "Today thousands of teams rely on us to understand their users and move with confidence — and we're just getting started.",
    values: [
      { icon: "spark", title: "Clarity over clutter", text: "We remove noise so the signal leads every decision." },
      { icon: "bolt", title: "Speed as a feature", text: "Real-time isn't a bonus — it's the baseline we build on." },
      { icon: "shield", title: "Trust by default", text: "Your data is yours. Encrypted, auditable, never sold." },
      { icon: "layers", title: "Built to scale", text: "From your first user to your millionth, the experience holds." },
    ],
    teamHead: "The people behind it",
    teamSub: "A compact team that ships fast and sweats the details.",
    team: [
      { name: "Alex Rivera", role: "Co-founder, CEO" },
      { name: "Mila Novak", role: "Co-founder, CPO" },
      { name: "Dan Oke", role: "Head of Engineering" },
      { name: "Sara Lind", role: "Head of Design" },
    ],
    ctaPre: "Want to ",
    ctaAccent: "join us?",
    ctaText: "We're always looking for curious people. Say hello.",
  },

  pricing: {
    eyebrow: "Pricing",
    titlePre: "Simple pricing that ",
    titleAccent: "scales with you",
    subtitle: "Start free. Upgrade when you're ready. No hidden fees, cancel anytime.",
    monthly: "Monthly",
    annual: "Annual",
    save: "−20%",
    popular: "Most popular",
    perMo: "/mo",
    custom: "Custom",
    plans: [
      {
        name: "Starter",
        price: "0",
        period: "/mo",
        tagline: "For solo makers testing the waters.",
        features: ["1 project", "Up to 1k sessions", "Basic analytics", "Community support"],
        cta: "Get Started",
        featured: false,
      },
      {
        name: "Growth",
        price: "29",
        period: "/mo",
        tagline: "For teams ready to scale fast.",
        features: [
          "Unlimited projects",
          "Up to 100k sessions",
          "Real-time dashboard",
          "Live chat + automation",
          "Priority support",
        ],
        cta: "Book a Demo",
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        tagline: "For organizations with serious volume.",
        features: ["Unlimited everything", "SSO & audit logs", "Dedicated manager", "99.99% SLA", "Custom integrations"],
        cta: "Contact Sales",
        featured: false,
      },
    ],
    faqHead: "Frequently asked questions",
    faq: [
      { q: "Can I change plans later?", a: "Yes — upgrade or downgrade anytime. Changes are prorated automatically." },
      { q: "Is there a free trial?", a: "Every paid plan includes a 14-day trial. No credit card required to start." },
      { q: "What counts as a session?", a: "A session is a single user's visit within a 30-minute active window." },
      { q: "Do you offer discounts?", a: "Yes — annual billing saves 20%, and we have special pricing for nonprofits." },
    ],
  },

  blog: {
    eyebrow: "Blog",
    titlePre: "Ideas on ",
    titleAccent: "data, design & growth",
    subtitle:
      "Thoughts from the team building FlorySite — on analytics, product and the craft of clear interfaces.",
    posts: [
      {
        slug: "designing-for-clarity",
        title: "Designing dashboards for clarity, not clutter",
        excerpt: "The best analytics tools disappear. Here's how we strip noise until only the signal remains.",
        category: "Design",
        date: "Nov 2, 2026",
        read: "6 min",
      },
      {
        slug: "ai-powered-forecasting",
        title: "How AI-powered forecasting changes planning",
        excerpt: "Move from reacting to predicting. A practical look at forecasting models inside FlorySite.",
        category: "Product",
        date: "Oct 24, 2026",
        read: "8 min",
      },
      {
        slug: "scaling-to-4000-teams",
        title: "Scaling to 4,000+ teams without breaking",
        excerpt: "Lessons from growing an analytics platform and keeping it fast at every tier.",
        category: "Engineering",
        date: "Oct 11, 2026",
        read: "5 min",
      },
      {
        slug: "real-time-everything",
        title: "Why real-time is the new baseline",
        excerpt: "Yesterday's data makes today's decisions worse. Real-time is no longer a premium feature.",
        category: "Insights",
        date: "Sep 29, 2026",
        read: "4 min",
      },
      {
        slug: "the-redsun-aesthetic",
        title: "Dark, warm, intentional: our design language",
        excerpt: "A breakdown of the palette, glow and motion that make the interface feel alive.",
        category: "Design",
        date: "Sep 15, 2026",
        read: "7 min",
      },
      {
        slug: "automations-that-save-hours",
        title: "Five automations that save teams hours a week",
        excerpt: "Small flows, big compounding returns. Copy these straight into your workspace.",
        category: "Product",
        date: "Sep 1, 2026",
        read: "6 min",
      },
    ],
  },

  post: {
    notFoundTitle: "Post not found",
    notFoundSub: "The article you're looking for doesn't exist (yet).",
    lead: null, // uses excerpt
    body: [
      "Analytics should answer a question, not raise ten more. The hardest part of building a dashboard isn't adding charts — it's deciding what to leave out.",
      "The best analytics tools disappear. They surface the answer and get out of the way, so the team spends its energy deciding, not digging.",
    ],
    sub1: "Why it matters",
    body2:
      "Every extra chart is a small tax on attention. Strip the interface down to the signal and people trust it — and act on it — faster.",
    quote: "Clarity is a design decision. Everything else is noise you chose to keep.",
    body3:
      "We obsess over the small things: spacing, color, motion. Together they turn a wall of numbers into something you can read at a glance.",
    sub2: "What comes next",
    body4: "We'll keep sharing what we learn as FlorySite grows — follow along.",
    ctaPre: "Enjoyed this? ",
    ctaAccent: "Try FlorySite.",
  },

  contact: {
    eyebrow: "Contact",
    titlePre: "Let's ",
    titleAccent: "talk",
    subtitle: "Book a demo, ask a question, or just say hi. We usually reply within a day.",
    info: [
      { icon: "mail", label: "Email", value: "hello@florysite.com" },
      { icon: "phone", label: "Phone", value: "+1 (555) 014-2920" },
      { icon: "pin", label: "Office", value: "Remote-first · 40+ countries" },
    ],
    promiseTitle: "What happens next?",
    promise: ["We review your message", "A real human replies within 24h", "We book a time that suits you"],
    fName: "Name",
    fEmail: "Email",
    fCompany: "Company",
    fCompanyOpt: "(optional)",
    fMessage: "Message",
    phName: "Jane Doe",
    phEmail: "jane@company.com",
    phCompany: "Acme Inc.",
    phMessage: "Tell us what you're looking for…",
    errName: "Please enter your name",
    errEmail: "Enter a valid email",
    errMessage: "Tell us a bit more (10+ chars)",
    successTitle: "Message sent!",
    successText: "Thanks, {name}. We'll be in touch shortly.",
    fineprint: "This is a portfolio demo — the form validates but doesn't send real email.",
    thereName: "there",
  },
};

const uk = {
  brandTagline: "Трансформуй свою роботу з FlorySite",

  common: {
    bookDemo: "Замовити демо",
    readMore: "Докладніше",
    getStarted: "Почати",
    cart: "Кошик ()",
    launchImporter: "Запустити імпорт",
    inviteUsers: "Запросити людей",
    contactSales: "Зв’язатися з нами",
    viewPricing: "Переглянути ціни",
    getInTouch: "Написати нам",
    sendMessage: "Надіслати",
    sendAnother: "Надіслати ще",
    backToBlog: "Назад до блогу",
    keepReading: "Читати далі",
    seeDoc: "Документація",
    read: "читання",
    emailPlaceholder: "Введіть email",
  },

  nav: {
    home: "Головна",
    features: "Можливості",
    about: "Про нас",
    pricing: "Ціни",
    blog: "Блог",
    contact: "Контакти",
  },

  hero: {
    badgeTag: "Новинка",
    badgeText: "Оновлення Ease v0.1",
    title1: "Розумні рішення",
    title2: "на основі ШІ.",
    subtitle1: "Отримуйте ясність і розкрийте силу своїх даних разом із FlorySite.",
    subtitle2: "Наша зручна панель дає аналітику в реальному часі.",
  },

  logos: { title: "Понад 4 000 компаній уже зростають разом із нами" },

  showcase: {
    balanceTitle: "Баланс",
    balanceText: "Тримайте завдання, бюджети й пріоритети в балансі в одному живому поданні.",
    usersTitle: "Користувачі",
    usersText: "Спостерігайте, як зростає ваша аудиторія в реальному часі, і розумійте, що справді впливає.",
    task1: "Робимо тестування дуже design sy…",
    task2: "Створити робочий прототип",
    totalUsers: "Усього користувачів",
  },

  powerful: {
    title: "Потужні можливості",
    subtitle:
      "Досліджуйте передній край еволюції аналітики з FlorySite Unleashed. Наші нові функції розсувають межі можливого.",
    bigTitlePre: "Топменеджмент, щоб допомогти вам ",
    bigTitleAccent: "бачити ширшу картину",
    bigText1:
      "Зведіть кожну метрику в одну спокійну, розумну панель. Помічайте тренди, прогнозуйте попит і дійте впевнено.",
    bigText2: "Створено для команд, які радше вирішують, ніж копаються в даних.",
    features: [
      {
        icon: "grid",
        title: "Сесії",
        text: "Відстежуйте шлях кожного відвідувача в реальному часі й помічайте відтік, перш ніж він коштуватиме вам грошей.",
      },
      {
        icon: "chat",
        title: "Живий чат",
        text: "Спілкуйтеся з користувачами й лідами щойно вони завітали — без плагінів і зайвих зусиль.",
      },
      {
        icon: "bars",
        title: "Підтримка",
        text: "Автоматизуйте рутинну підтримку й спрямовуйте складні випадки до потрібних людей.",
      },
      {
        icon: "shield",
        title: "Безпека",
        text: "Шифрування корпоративного рівня й гнучкі ролі тримають ваші дані під надійним замком.",
      },
    ],
  },

  transform: {
    titlePre: "Трансформуй свою роботу",
    titleWith: "з ",
    subtitle: "Вирушайте в трансформаційну подорож досконалості даних разом із FlorySite.",
  },

  cta: {
    titlePre: "Готові розкрити ",
    titleAccent: "силу своїх даних?",
    subtitle: "Приєднуйтеся до 4 000+ команд, що вже зростають із FlorySite. Картка не потрібна.",
  },

  dashboard: {
    title: "Панель",
    menu: {
      analytics: "Аналітика",
      products: "Продукти",
      customers: "Клієнти",
      campaigns: "Кампанії",
      settings: "Налаштування",
    },
    stats: [
      { label: "Усього користувачів", value: "72 350", delta: "6.9%", up: true },
      { label: "Сесії", value: "29.4%", delta: "12.5%", up: false },
      { label: "Сер. клікабельність", value: "56.8%", delta: "19.3%", up: true },
      { label: "Перегляди", value: "92 913", delta: "12.5%", up: false },
    ],
    importTitle: "Імпорт даних у Front Dashboard",
    importSub: "Бачте й спілкуйтеся зі своїми користувачами та лідами одразу",
    monthly: "Щомісячні витрати",
    usersLabel: "Користувачі",
  },

  footer: {
    headline1: "Трансформуй свою роботу",
    headline2: "з FlorySite",
    blurb:
      "Розумна аналітика й автоматизація для команд, яким потрібна ясність, а не хаос. Масштабується від першого користувача до мільйонного.",
    colMain: "Основні сторінки",
    colResources: "Ресурси",
    colSocial: "Соцмережі",
    rights: "Усі права захищено.",
    made: "Зроблено з любов’ю · Демо для портфоліо",
    links: {
      home: "Головна",
      about: "Про нас",
      features: "Можливості",
      blog: "Блог",
      pricing: "Ціни",
      contact: "Контакти",
      blogPost: "Стаття блогу",
      changelog: "Історія змін",
    },
  },

  features: {
    eyebrow: "Можливості",
    titlePre: "Усе, що потрібно, ",
    titleAccent: "і нічого зайвого",
    subtitle:
      "Досліджуйте передній край еволюції аналітики з FlorySite. Наші нові функції розсувають межі можливого.",
    big: [
      {
        icon: "layers",
        title: "Топменеджмент, щоб бачити ширшу картину",
        text: "Зведіть кожну метрику в одну спокійну, розумну панель. Помічайте тренди, прогнозуйте попит і дійте впевнено.",
        bullets: ["Єдина аналітика", "Прогнози на базі ШІ", "Доступ за ролями"],
      },
      {
        icon: "bolt",
        title: "Автоматизація, що працює, поки ви спите",
        text: "Будуйте сценарії, що реагують на ваші дані в реальному часі — без коду й очікування на розробників.",
        bullets: ["Візуальний конструктор", "200+ інтеграцій", "Миттєві тригери"],
      },
    ],
    ctaPre: "Побачте це в ",
    ctaAccent: "дії",
    ctaText: "Замовте демо — і ми покажемо ваші власні дані за 20 хвилин.",
  },

  about: {
    eyebrow: "Про нас",
    titlePre: "Ми допомагаємо командам ",
    titleAccent: "бачити ясно",
    subtitle:
      "FlorySite почався з простого роздратування: аналітика, що ховала відповідь під сотнею графіків. Тож ми зробили протилежне.",
    metrics: [
      { value: "4 000+", label: "Команд зростають" },
      { value: "72 млн", label: "Подій / день" },
      { value: "99.99%", label: "Доступність SLA" },
      { value: "40+", label: "Країн" },
    ],
    storyPre: "Наша ",
    storyAccent: "історія",
    story1:
      "Ми — невелика команда інженерів і дизайнерів, що втомилися від панелей, які вимагають докторського ступеня. FlorySite — наша відповідь: розумно, тепло й швидко.",
    story2:
      "Сьогодні тисячі команд покладаються на нас, щоб розуміти своїх користувачів і діяти впевнено — а ми лише починаємо.",
    values: [
      { icon: "spark", title: "Ясність замість хаосу", text: "Прибираємо шум, щоб сигнал вів кожне рішення." },
      { icon: "bolt", title: "Швидкість як функція", text: "Реальний час — не бонус, а основа, на якій ми будуємо." },
      { icon: "shield", title: "Довіра за замовчуванням", text: "Ваші дані — ваші. Зашифровані, прозорі, ніколи не продаються." },
      { icon: "layers", title: "Створено масштабуватись", text: "Від першого користувача до мільйонного — досвід не ламається." },
    ],
    teamHead: "Люди за цим проєктом",
    teamSub: "Компактна команда, що швидко постачає й дбає про деталі.",
    team: [
      { name: "Alex Rivera", role: "Співзасновник, CEO" },
      { name: "Mila Novak", role: "Співзасновниця, CPO" },
      { name: "Dan Oke", role: "Керівник розробки" },
      { name: "Sara Lind", role: "Керівниця дизайну" },
    ],
    ctaPre: "Хочете ",
    ctaAccent: "до нас?",
    ctaText: "Ми завжди шукаємо допитливих людей. Напишіть нам.",
  },

  pricing: {
    eyebrow: "Ціни",
    titlePre: "Прості ціни, що ",
    titleAccent: "зростають разом із вами",
    subtitle: "Почніть безкоштовно. Оновлюйтеся, коли готові. Без прихованих платежів, скасування будь-коли.",
    monthly: "Щомісяця",
    annual: "Щороку",
    save: "−20%",
    popular: "Найпопулярніший",
    perMo: "/міс",
    custom: "Інд.",
    plans: [
      {
        name: "Starter",
        price: "0",
        period: "/міс",
        tagline: "Для соло-творців, що пробують воду.",
        features: ["1 проєкт", "До 1 тис. сесій", "Базова аналітика", "Підтримка спільноти"],
        cta: "Почати",
        featured: false,
      },
      {
        name: "Growth",
        price: "29",
        period: "/міс",
        tagline: "Для команд, готових швидко рости.",
        features: [
          "Необмежено проєктів",
          "До 100 тис. сесій",
          "Панель у реальному часі",
          "Живий чат + автоматизація",
          "Пріоритетна підтримка",
        ],
        cta: "Замовити демо",
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Інд.",
        period: "",
        tagline: "Для організацій із серйозними обсягами.",
        features: ["Необмежено все", "SSO та аудит-логи", "Персональний менеджер", "99.99% SLA", "Власні інтеграції"],
        cta: "Зв’язатися з нами",
        featured: false,
      },
    ],
    faqHead: "Часті запитання",
    faq: [
      { q: "Чи можу я змінити тариф пізніше?", a: "Так — підвищуйте або знижуйте будь-коли. Зміни перераховуються автоматично." },
      { q: "Чи є безкоштовний період?", a: "Кожен платний тариф має 14 днів пробного періоду. Картка на старті не потрібна." },
      { q: "Що вважається сесією?", a: "Сесія — це візит одного користувача в межах 30-хвилинного активного вікна." },
      { q: "Чи є знижки?", a: "Так — річна оплата економить 20%, і ми маємо особливі ціни для неприбуткових організацій." },
    ],
  },

  blog: {
    eyebrow: "Блог",
    titlePre: "Ідеї про ",
    titleAccent: "дані, дизайн і зростання",
    subtitle:
      "Думки команди, що будує FlorySite — про аналітику, продукт і майстерність зрозумілих інтерфейсів.",
    posts: [
      {
        slug: "designing-for-clarity",
        title: "Дизайн панелей заради ясності, а не хаосу",
        excerpt: "Найкращі інструменти аналітики непомітні. Ось як ми прибираємо шум, поки лишається тільки сигнал.",
        category: "Дизайн",
        date: "2 лист. 2026",
        read: "6 хв",
      },
      {
        slug: "ai-powered-forecasting",
        title: "Як прогнозування на базі ШІ змінює планування",
        excerpt: "Від реагування до передбачення. Практичний погляд на моделі прогнозування всередині FlorySite.",
        category: "Продукт",
        date: "24 жовт. 2026",
        read: "8 хв",
      },
      {
        slug: "scaling-to-4000-teams",
        title: "Масштабування до 4 000+ команд без збоїв",
        excerpt: "Уроки зростання аналітичної платформи й збереження швидкості на кожному рівні.",
        category: "Інженерія",
        date: "11 жовт. 2026",
        read: "5 хв",
      },
      {
        slug: "real-time-everything",
        title: "Чому реальний час — це нова норма",
        excerpt: "Учорашні дані роблять сьогоднішні рішення гіршими. Реальний час більше не преміум-функція.",
        category: "Інсайти",
        date: "29 вер. 2026",
        read: "4 хв",
      },
      {
        slug: "the-redsun-aesthetic",
        title: "Темно, тепло, продумано: наша мова дизайну",
        excerpt: "Розбір палітри, світіння й руху, що оживляють інтерфейс.",
        category: "Дизайн",
        date: "15 вер. 2026",
        read: "7 хв",
      },
      {
        slug: "automations-that-save-hours",
        title: "П’ять автоматизацій, що економлять команді години щотижня",
        excerpt: "Малі сценарії — великий сукупний ефект. Скопіюйте їх просто у свій простір.",
        category: "Продукт",
        date: "1 вер. 2026",
        read: "6 хв",
      },
    ],
  },

  post: {
    notFoundTitle: "Статтю не знайдено",
    notFoundSub: "Стаття, яку ви шукаєте, ще не існує.",
    lead: null,
    body: [
      "Аналітика має відповідати на питання, а не породжувати ще десять. Найважче в побудові панелі — не додати графіки, а вирішити, що лишити за кадром.",
      "Найкращі інструменти аналітики непомітні. Вони показують відповідь і відходять убік, щоб команда витрачала сили на рішення, а не на розкопки.",
    ],
    sub1: "Чому це важливо",
    body2:
      "Кожен зайвий графік — маленький податок на увагу. Зведіть інтерфейс до сигналу — і люди довірятимуть йому та діятимуть швидше.",
    quote: "Ясність — це рішення дизайну. Усе інше — шум, який ви вирішили залишити.",
    body3:
      "Ми одержимі дрібницями: відступи, колір, рух. Разом вони перетворюють стіну цифр на те, що читається з першого погляду.",
    sub2: "Що далі",
    body4: "Ми ділитимемося тим, що дізнаємося, поки FlorySite росте — стежте за нами.",
    ctaPre: "Сподобалося? ",
    ctaAccent: "Спробуйте FlorySite.",
  },

  contact: {
    eyebrow: "Контакти",
    titlePre: "Нумо ",
    titleAccent: "поспілкуємося",
    subtitle: "Замовте демо, поставте питання чи просто привітайтеся. Зазвичай відповідаємо протягом дня.",
    info: [
      { icon: "mail", label: "Email", value: "hello@florysite.com" },
      { icon: "phone", label: "Телефон", value: "+1 (555) 014-2920" },
      { icon: "pin", label: "Офіс", value: "Remote-first · 40+ країн" },
    ],
    promiseTitle: "Що буде далі?",
    promise: ["Ми переглянемо ваше повідомлення", "Жива людина відповість протягом 24 год", "Підберемо зручний для вас час"],
    fName: "Ім’я",
    fEmail: "Email",
    fCompany: "Компанія",
    fCompanyOpt: "(необов’язково)",
    fMessage: "Повідомлення",
    phName: "Іван Петренко",
    phEmail: "ivan@company.com",
    phCompany: "Acme Inc.",
    phMessage: "Розкажіть, що ви шукаєте…",
    errName: "Будь ласка, введіть ім’я",
    errEmail: "Введіть коректний email",
    errMessage: "Розкажіть трохи більше (від 10 символів)",
    successTitle: "Повідомлення надіслано!",
    successText: "Дякуємо, {name}. Скоро зв’яжемося з вами.",
    fineprint: "Це демо для портфоліо — форма перевіряється, але листи реально не надсилає.",
    thereName: "друже",
  },
};

export const DICT = { en, uk };
