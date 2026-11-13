// ============================================================
// FlorySite — central content/data. Edit here to re-content.
// ============================================================

export const BRAND = "FlorySite";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const LOGOS = ["Cloud", "Rise", "Trace", "Volume", "Clues", "Nova", "Pulse"];

export const STATS = [
  { label: "Total Users", value: "72,350", delta: "6.9%", up: true },
  { label: "Sessions", value: "29.4%", delta: "12.5%", up: false },
  { label: "Avg. Click Rate", value: "56.8%", delta: "19.3%", up: true },
  { label: "Pageviews", value: "92,913", delta: "12.5%", up: false },
];

export const IMPORTERS = [
  { name: "Huse", type: "Users", color: "#8b5cf6" },
  { name: "Penta", type: "Users", color: "#3b82f6" },
  { name: "Border", type: "Users", color: "#2563eb" },
];

export const FEATURE_LIST = [
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
];

export const BIG_FEATURES = [
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
];

export const PRICING = [
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
];

export const POSTS = [
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
];

export const SOCIALS = ["Instagram", "Facebook", "Linkedin", "Twitter"];

export const FOOTER_LINKS = {
  "Main Pages": [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Features", to: "/features" },
    { label: "Blog", to: "/blog" },
  ],
  "Resources": [
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
    { label: "Blog Post", to: "/blog" },
    { label: "Changelog", to: "/features" },
  ],
};
