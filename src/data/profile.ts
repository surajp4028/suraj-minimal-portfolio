export const profile = {
  name: "Suraj Pandey",
  role: "Fullstack Developer",
  location: "East Delhi, India",
  email: "surajp4028@gmail.com",
  phone: "+91 79826 24533",
  linkedin: "https://www.linkedin.com/in/suraj-pandey-225459197",
  website: "https://www.vishnuit.co.in",
  cv: "/Suraj-Pandey-CV.pdf",
  photo: "/images/suraj-avatar.jpg",
  photoFull: "/images/suraj-portrait.jpg",
  // Formal headshot used on the printable resume / CV PDF.
  cvPhoto: "/images/suraj-cv.jpg",
  summary:
    "Fullstack developer with 4+ years of experience shipping fast, secure web products — merchant onboarding platforms, payment gateway integrations, trading APIs and CMS dashboards. Currently building fintech at iMoneyPay with Next.js and Node.js.",
};

export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Experience", link: "/#experience" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
];

// Options for the contact form's "Service" dropdown.
export const contactServices = [
  "Web Design / Development",
  "eCommerce Development",
  "CRM Development",
  "Content Writing",
  "Web Hosting / Maintenance",
  "Search Engine Optimization (SEO)",
  "Mobile App Development",
  "Pay Per Click (PPC)",
  "Social Media (SMO)",
  "Others",
];

export const stats = [
  { value: "4+", label: "Years experience" },
  { value: "150+", label: "Websites managed" },
  { value: "25+", label: "Tech skills" },
  { value: "4", label: "Companies" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description:
      "React, Next.js, JavaScript, Tailwind CSS, shadcn/ui and Aceternity UI — responsive, accessible, animated UIs.",
    link: "/#projects",
  },
  {
    title: "Backend & APIs",
    description:
      "Node.js, PHP and REST APIs — PG plugins, webhooks, refunds, merchant/bank push APIs, Better Auth and automated emails.",
    link: "/#projects",
  },
  {
    title: "Databases & Cloud",
    description:
      "MySQL and MongoDB, AWS S3 document storage, GitHub workflows, hosting, networking and security.",
    link: "/#projects",
  },
  {
    title: "CMS & E-commerce",
    description:
      "WordPress and Shopify — custom themes, plugins, landing pages and high-conversion store fronts.",
    link: "/#projects",
  },
  {
    title: "UI/UX & Graphic Design",
    description:
      "Figma, Adobe XD, Photoshop, Illustrator, After Effects and Premiere Pro — UI design, brand graphics, motion and social creatives.",
    link: "/#projects",
  },
  {
    title: "Testing & Delivery",
    description:
      "UAT and end-to-end API testing with Postman, JIRA sprints, merchant support, client communication and team management.",
    link: "/#contact",
  },
];

export type Job = {
  period: string;
  role: string;
  company: string;
  place: string;
  companyUrl?: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    period: "2026",
    role: "Fullstack Developer",
    company: "I Money Pay Pvt. Ltd.",
    companyUrl: "https://www.imoneypay.in/",
    current: true,
    place: "Payment gateway company · Jan 2026 – Present",
    points: [
      "Building the merchant onboarding platform in Next.js — multi-step KYC application journeys, document uploads and real-time application status tracking.",
      "Developed the admin console with Maker → Checker → Approver → Risk → Operations queues, role-based access, discrepancy handling and block/unblock workflows.",
      "Integrated backend APIs that push approved merchants to the payment gateway and bank-verification systems, with automated daily status emails.",
      "Built and integrated payment gateway (PG) plugins for e-commerce platforms — webhooks, callbacks, refunds and secure transaction handling.",
      "Handle merchant onboarding & support, UAT and end-to-end API testing with Postman, and sprint tracking in JIRA.",
      "Built and enhanced onboarding websites and dashboards with live analytics, PG health monitoring and dark mode.",
    ],
    tags: ["Next.js", "Node.js", "PG plugins", "KYC onboarding", "Postman", "JIRA"],
  },
  {
    period: "2025",
    role: "Frontend Developer",
    company: "ITSTARPAY Pvt. Ltd.",
    place: "Netaji Subhash Place, Delhi · Jan 2025 – Jan 2026",
    points: [
      "Designed and developed dynamic websites — e-commerce platforms, payout solutions and custom CMS dashboards.",
      "Built and customised payment gateway plugins (Razorpay and others) with secure transactions, webhooks, refund flows and gateway compliance.",
      "Built a Kotak Trading API platform with real-time market data, order placement, portfolio tracking and secure API auth.",
      "Shipped a secure onboarding dashboard & CMS with PDF generation, e-sign preview/download and automated admin emails.",
      "Integrated GitHub and AWS S3 for document storage plus webhook-based real-time authorisation and spam blocking.",
      "Managed and maintained 150+ websites — hosting, networking, security and confidentiality.",
      "Handled client communication, requirement gathering and team management.",
    ],
    tags: ["Next.js", "Node.js", "PHP", "Razorpay", "AWS S3", "MySQL"],
  },
  {
    period: "2024",
    role: "WordPress Developer",
    company: "Absolute Immigrations",
    place: "Nehru Place, Delhi · 2024 · 7 months",
    points: [
      "Built and customised WordPress sites including absoluteimmigrations.in and meridianprimmigrations.com.",
      "Designed and optimised landing pages for ad campaigns, driving higher conversions.",
      "Automated lead management from Google Ads and Meta Ads by integrating APIs with CRM systems.",
      "Designed and maintained real-estate websites with lead-focused layouts.",
      "Owned QA testing, client onboarding and project delivery; built pitch decks for business development.",
    ],
    tags: ["WordPress", "PHP", "Landing pages", "CRM APIs", "Meta Ads"],
  },
  {
    period: "2023",
    role: "Trial Developer",
    company: "India Document Solutions",
    place: "Noida Sector 62, U.P. · Jan 2023 – Dec 2023",
    points: [
      "Implemented web pages and templates for clinical-trial projects with proper design and validation.",
      "Developed and maintained patient databases with accuracy and data-standard compliance.",
      "Worked with EDC (Electronic Data Capture) and eSource platforms to streamline clinical data collection.",
      "Ran quality testing and validation for regulated trial applications.",
    ],
    tags: ["EDC", "eSource", "Databases", "QA"],
  },
];

export const education = [
  {
    period: "2019 – 2023",
    title: "B.Tech — Computer Science & IT",
    school: "Dronacharya Group of Institutions, Greater Noida",
    score: "7.4 CGPA",
  },
  {
    period: "2018 – 2019",
    title: "Class 12th — CBSE",
    school: "R.S.B.V Gandhi Nagar, Delhi",
    score: "66%",
  },
  {
    period: "2016 – 2017",
    title: "Class 10th — CBSE",
    school: "R.S.B.V Gandhi Nagar, Delhi",
    score: "79%",
  },
];
