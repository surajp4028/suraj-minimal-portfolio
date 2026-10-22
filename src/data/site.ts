// Site-only copy and structure for the minimal portfolio. Shared facts (name,
// experience, education, projects) live in `profile.ts` and `projects.ts`, which
// also feed the printable resume.

export const siteNav = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Resume", href: "/resume" },
  { title: "Contact", href: "/contact" },
];

// Rotated in the hero badge next to the name.
export const roles = [
  "Fullstack Developer",
  "Next.js Engineer",
  "Payment Gateway Specialist",
  "UI / UX Designer",
];

export const hero = {
  intro:
    "I build fast, secure web products — merchant onboarding platforms, payment gateway integrations, trading APIs and CMS dashboards. Currently shipping fintech at I Money Pay with Next.js and Node.js.",
  status: "Open to freelance & full-time roles",
};

export const about = {
  intro:
    "I'm a fullstack developer from East Delhi with 4+ years of experience turning business requirements into fast, secure and beautiful web products. I care about clean code, smooth UX and shipping things that actually move numbers.",
  story: [
    "My journey started with a B.Tech in Computer Science & IT, clinical-trial web pages and EDC platforms, then WordPress sites and ad landing pages that had to convert. Today I build payment-gateway products end to end — KYC onboarding journeys, maker-checker admin consoles, PG plugins, webhooks and bank-push APIs.",
    "Alongside my day job I run Vishnu IT Solutions, a digital marketing & IT agency, and I've managed 150+ websites across hosting, security and maintenance. I also design — UI in Figma, brand and print collateral in Photoshop and Illustrator.",
  ],
};

export type Achievement = { title: string; description: string };
export type TimelineYear = { year: string; items: Achievement[] };

export const timeline: TimelineYear[] = [
  {
    year: "2026",
    items: [
      {
        title: "Joined I Money Pay as Fullstack Developer",
        description:
          "Building the merchant onboarding platform and admin console for a payment gateway company.",
      },
      {
        title: "Shipped maker → checker → approver → risk queues",
        description:
          "Role-based department workflows with PG and bank push APIs and a daily status digest.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Frontend Developer at ITSTARPAY",
        description:
          "E-commerce platforms, payout solutions, custom CMS dashboards and payment gateway plugins.",
      },
      {
        title: "Built a platform on the Kotak Trading API",
        description: "Real-time market data, order placement and portfolio tracking.",
      },
      {
        title: "Crossed 150+ websites managed",
        description: "Hosting, networking, security and confidentiality for client sites.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "WordPress Developer at Absolute Immigrations",
        description:
          "Campaign landing pages and CRM-integrated lead capture from Google & Meta Ads.",
      },
      {
        title: "Launched London School, Perk Immigration & Stanley Growth",
        description: "Three client websites designed and developed end to end.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Graduated B.Tech — Computer Science & IT",
        description: "Dronacharya Group of Institutions, Greater Noida · 7.4 CGPA.",
      },
      {
        title: "Trial Developer at India Document Solutions",
        description: "Clinical-trial web pages, patient databases and EDC / eSource platforms.",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        title: "Started my journey into programming",
        description:
          "Began a B.Tech in Computer Science and fell in love with building for the web.",
      },
    ],
  },
];

// Draggable photo cards on the About page.
export const collage = [
  { title: "Merchant onboarding", image: "/images/projects/onboarding-admin.webp", className: "absolute top-10 left-[2%] rotate-[-5deg]" },
  { title: "House of Geet", image: "/images/projects/house-of-geet.png", className: "absolute top-40 left-[18%] rotate-[-7deg]" },
  { title: "Vishnu IT Solutions", image: "/images/projects/vishnu-it-hero.webp", className: "absolute top-5 left-[45%] rotate-[8deg]" },
  { title: "London School", image: "/images/projects/london-school.png", className: "absolute top-32 left-[62%] rotate-[10deg]" },
  { title: "Zodaromatics", image: "/images/projects/zodaromatics.webp", className: "absolute top-20 right-[4%] rotate-[2deg]" },
  { title: "Brand & print", image: "/images/projects/brand-hoardings.webp", className: "absolute top-24 left-[28%] rotate-[-7deg]" },
  { title: "That's me", image: "/images/suraj-portrait.jpg", className: "absolute top-8 left-[36%] rotate-[4deg]" },
];

// Brand colours for the company monograms in the experience list.
export const companyBadges: Record<string, { initials: string; className: string }> = {
  "I Money Pay Pvt. Ltd.": { initials: "iM", className: "from-sky-500 to-indigo-600" },
  "ITSTARPAY Pvt. Ltd.": { initials: "IS", className: "from-amber-400 to-orange-600" },
  "Absolute Immigrations": { initials: "AI", className: "from-rose-500 to-red-600" },
  "India Document Solutions": { initials: "ID", className: "from-emerald-500 to-teal-600" },
};
