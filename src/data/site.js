// ============================================================
// FlorySite — language-neutral data (brand, routes, assets).
// All translatable text lives in src/i18n/dict.js
// ============================================================

export const BRAND = "FlorySite";

// nav key maps to a dict label (t.nav[key]); `to` is the route
export const NAV = [
  { key: "home", to: "/" },
  { key: "features", to: "/features" },
  { key: "about", to: "/about" },
  { key: "pricing", to: "/pricing" },
  { key: "blog", to: "/blog" },
  { key: "contact", to: "/contact" },
];

export const FOOTER_COLS = {
  colMain: [
    { key: "home", to: "/" },
    { key: "about", to: "/about" },
    { key: "features", to: "/features" },
    { key: "blog", to: "/blog" },
  ],
  colResources: [
    { key: "pricing", to: "/pricing" },
    { key: "contact", to: "/contact" },
    { key: "blogPost", to: "/blog" },
    { key: "changelog", to: "/features" },
  ],
};

export const LOGOS = ["Cloud", "Rise", "Trace", "Volume", "Clues", "Nova", "Pulse"];

export const LOGO_GLYPHS = {
  Cloud: "cloud",
  Rise: "bars",
  Trace: "spark",
  Volume: "campaign",
  Clues: "grid",
  Nova: "bolt",
  Pulse: "analytics",
};

export const IMPORTERS = [
  { name: "Huse", color: "#8b5cf6" },
  { name: "Penta", color: "#3b82f6" },
  { name: "Border", color: "#2563eb" },
];

export const SOCIALS = ["Instagram", "Facebook", "Linkedin", "Twitter"];

export const TEAM_GRADS = [
  "linear-gradient(135deg,#fb923c,#ea580c)",
  "linear-gradient(135deg,#a78bfa,#6d28d9)",
  "linear-gradient(135deg,#38bdf8,#2563eb)",
  "linear-gradient(135deg,#f472b6,#be185d)",
];
