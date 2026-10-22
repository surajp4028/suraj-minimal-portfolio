export type ProjectCategory = "Fintech" | "Website" | "E-commerce" | "Brand Design";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  client?: string;
  year?: string;
  role: string;
  /** One or two sentences for cards. */
  summary: string;
  /** Paragraphs for the detail page. */
  overview: string[];
  highlights: { title: string; text: string }[];
  /** Names are matched to logos in `toolIcon()`; unknown names render as text chips. */
  tools: string[];
  href?: string;
  cover?: string;
  gallery?: string[];
  accent: string;
  featured?: boolean;
};

const img = (file: string) => `/images/projects/${file}`;

export const projects: Project[] = [
  {
    slug: "imoneypay-merchant-onboarding",
    title: "Payment Gateway Merchant Onboarding",
    tagline: "From merchant sign-up to live payments",
    category: "Fintech",
    client: "I Money Pay Pvt. Ltd.",
    year: "2026",
    role: "Fullstack Developer",
    summary:
      "Merchant onboarding & admin console for a payment gateway — KYC journeys, maker-checker-approver-risk queues and PG & bank push.",
    overview: [
      "At I Money Pay, a payment gateway company, I build the platform that takes a merchant from sign-up to live payments. Merchants complete a multi-step application with business details, KYC documents, bank account and agreement, and can track its status in real time.",
      "Internally, applications move through department queues — Maker, Checker, Approver, Risk and Operations — with role-based access, discrepancy handling and block/unblock workflows. Approved merchants are pushed to the payment gateway and to the bank for verification, and the team gets an automated daily status email.",
    ],
    highlights: [
      { title: "Multi-step KYC journey", text: "Business details, documents, bank and agreement with autosave and live status." },
      { title: "Department queues", text: "Maker → Checker → Approver → Risk → Operations with role-based access." },
      { title: "PG & bank push APIs", text: "Approved merchants get PG merchant IDs and bank verification automatically." },
      { title: "Daily status digest", text: "Automated email with every queue's numbers, plus PG-health monitoring." },
    ],
    tools: ["Next.js", "React", "Node.js", "REST APIs", "Webhooks", "Postman", "JIRA", "Tailwind CSS"],
    href: "https://www.imoneypay.in/",
    // Screenshots have merchant names, IDs, faces and chat details blurred.
    cover: img("onboarding-admin.webp"),
    gallery: [
      img("onboarding-applications.webp"),
      img("onboarding-merchant.webp"),
      img("onboarding-inbox.webp"),
    ],
    accent: "from-sky-500 to-indigo-600",
    featured: true,
  },
  {
    slug: "suraj-dev-portfolio",
    title: "Suraj.dev — Personal Portfolio",
    tagline: "A premium, animated developer portfolio",
    category: "Website",
    client: "Personal project",
    year: "2026",
    role: "Design & Development",
    summary:
      "My previous portfolio — aurora hero, 3D globe, skills marquee, bento cards, code showcase and a contact form with email & WhatsApp alerts.",
    overview: [
      "Suraj.dev is the portfolio I designed and built to present my work as a fullstack developer. It opens with an aurora-lit hero, a sparkles underline and rotating words, then walks through who I am, the stack I ship with, my experience and selected projects.",
      "It's built with Next.js, Tailwind CSS and Aceternity UI components — an interactive 3D globe, an infinite skills marquee, bento feature cards, a syntax-highlighted code showcase and a dotted world map with animated connection arcs. Light and dark themes are fully supported.",
      "The contact form validates on the server and delivers each enquiry by email through Resend, with an instant WhatsApp alert through UltraMsg, and the downloadable CV is generated from the same data as the site.",
    ],
    highlights: [
      { title: "Aurora hero", text: "Gradient aurora, sparkles underline and flip words for the headline." },
      { title: "3D globe & world map", text: "Three.js globe and animated arcs showing where I work with clients." },
      { title: "Bento & code showcase", text: "PG-webhook cards and syntax-highlighted snippets of the patterns I use." },
      { title: "Email + WhatsApp leads", text: "Resend email and UltraMsg WhatsApp alert on every enquiry." },
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Aceternity UI", "Resend", "Three.js"],
    href: "https://surajportfolio-coral.vercel.app/",
    cover: img("suraj-portfolio-v1-hero.webp"),
    gallery: [
      img("suraj-portfolio-v1-about.webp"),
      img("suraj-portfolio-v1-skills.webp"),
      img("suraj-portfolio-v1-bento.webp"),
      img("suraj-portfolio-v1-contact.webp"),
    ],
    accent: "from-blue-500 to-fuchsia-500",
    featured: true,
  },
  {
    slug: "house-of-geet",
    title: "House of Geet",
    tagline: "Ethnic wear e-commerce",
    category: "E-commerce",
    client: "Geet",
    year: "2025",
    role: "Design & Development",
    summary:
      "A fashion-focused online store that pairs traditional ethnic wear with a modern, mobile-first shopping experience.",
    overview: [
      "House of Geet is a fashion-focused online store designed to highlight traditional ethnic wear with a modern shopping experience. The website showcases curated collections with elegant visuals, clean product layouts and smooth browsing that reflect the brand's cultural and aesthetic identity.",
      "The platform was built mobile-first and optimised for performance and conversions, with intuitive navigation, fast loading and a seamless checkout flow.",
    ],
    highlights: [
      { title: "Curated collections", text: "Category landing pages and rich product layouts for every collection." },
      { title: "Seamless checkout", text: "WooCommerce cart and checkout tuned for mobile shoppers." },
      { title: "Mobile-first", text: "Responsive layouts designed for phones first, then scaled up." },
      { title: "Ads-ready", text: "Meta Pixel tracking for campaigns and retargeting." },
    ],
    tools: ["WordPress", "WooCommerce", "Elementor", "Contact Form 7", "Meta Pixel"],
    href: "https://houseofgeet.com/",
    cover: img("house-of-geet.png"),
    accent: "from-emerald-500 to-teal-600",
    featured: true,
  },
  {
    slug: "london-school-e-learning",
    title: "London School E-learning Platform",
    tagline: "Online courses & micro-credentials",
    category: "Website",
    client: "Payal Das",
    year: "2024",
    role: "Design & Development",
    summary:
      "A modern e-learning platform with courses, micro-courses and online payments, designed for learners worldwide.",
    overview: [
      "London School E-Learning Platform is a user-focused educational website designed for seamless online learning. It presents courses, academic information and updates in a clear structure, making it easy for students to find and access learning resources.",
      "The site was built with a responsive layout, optimised performance and a clean visual identity, with special focus on clarity, accessibility and a smooth learner experience.",
    ],
    highlights: [
      { title: "Course catalogue", text: "Flagship programmes and industry-linked micro-courses." },
      { title: "LMS", text: "Tutor LMS for lessons, enrolments and learner dashboards." },
      { title: "Online payments", text: "WooCommerce checkout with Razorpay for course fees." },
      { title: "Global audience", text: "Fast, accessible pages for learners across regions." },
    ],
    tools: ["WordPress", "Tutor LMS", "WooCommerce", "Razorpay", "Elementor", "Astra"],
    href: "https://londonschoolobs.com/",
    cover: img("london-school.png"),
    accent: "from-orange-400 to-rose-500",
    featured: true,
  },
  {
    slug: "perk-immigration",
    title: "Perk Immigration, Canada",
    tagline: "Immigration consultancy",
    category: "Website",
    client: "Sapna Sharma",
    year: "2024",
    role: "Design & Development",
    summary:
      "A credible, lead-focused immigration consultancy website for Canadian visa and migration services.",
    overview: [
      "Perk Immigration is a professional immigration consultancy website that showcases global visa and migration services with clarity and credibility. It presents service details, eligibility guidance and consultation information in an easy-to-understand format.",
      "The modern, responsive layout offers smooth navigation and fast performance on every device, with a clear content hierarchy, strong calls-to-action and a trustworthy visual tone that supports lead generation.",
    ],
    highlights: [
      { title: "Programme pages", text: "Express Entry, PNP, work permits, visitor visas and more." },
      { title: "Eligibility focus", text: "67-point eligibility assessment and clear next steps." },
      { title: "Lead capture", text: "Consultation forms wired to the team's inbox." },
      { title: "Trust signals", text: "Clean hierarchy and a professional visual tone." },
    ],
    tools: ["WordPress", "Elementor", "WPForms", "Contact Form 7"],
    href: "https://perkimmigration.com/",
    cover: img("perk-immigration.png"),
    accent: "from-red-500 to-rose-600",
    featured: true,
  },
  {
    slug: "stanley-growth-consulting",
    title: "Stanley Growth Consulting",
    tagline: "Business strategy & consulting",
    category: "Website",
    client: "Mr. Guy Wabo",
    year: "2024",
    role: "Design & Development",
    summary:
      "A personal-brand-driven consulting website positioning its founder as a trusted advisor for growing businesses.",
    overview: [
      "Stanley Growth Consulting is a business strategy and consulting website designed to position Mr. Guy Wabo as a trusted advisor for entrepreneurs and growing businesses. It communicates strategic expertise, credibility and authority with a strong personal-brand identity.",
      "The site highlights services including Entity Structuring & Legal Setup, NAICS & Compliance Optimization, Personal Credit Development and Strategic Consulting & Coaching, with a clean, responsive design focused on clarity and conversion.",
    ],
    highlights: [
      { title: "Service architecture", text: "Clear pages for structuring, compliance, credit and coaching." },
      { title: "Personal brand", text: "Founder-led storytelling that builds authority." },
      { title: "Conversion flow", text: "Focused content that leads to booking a consultation." },
      { title: "Responsive", text: "Polished on desktop, tablet and mobile." },
    ],
    tools: ["UI/UX design", "Responsive layout", "On-page SEO", "Lead forms"],
    href: "https://stanleygrowthconsulting.com/",
    cover: img("stanley-consulting.png"),
    accent: "from-slate-600 to-slate-900",
    featured: true,
  },
  {
    slug: "zodaromatics",
    title: "Zodaromatics",
    tagline: "Premium perfume e-commerce",
    category: "E-commerce",
    year: "2023",
    role: "Design & Development",
    summary:
      "A luxury perfume store with a visually rich layout, detailed product pages and a smooth shopping experience.",
    overview: [
      "Zodaromatics is a premium perfume e-commerce website designed to reflect luxury, elegance and sensory appeal. It showcases a curated range of fragrances with a visually rich layout, detailed product pages and a smooth shopping experience.",
      "The build focused on responsive design, intuitive navigation and conversion-driven UI so customers can browse and buy easily on any device.",
    ],
    highlights: [
      { title: "Luxury visual identity", text: "Editorial imagery and typography that feel premium." },
      { title: "Product storytelling", text: "Detailed product pages for every fragrance." },
      { title: "Conversion UI", text: "Clear calls-to-action from collection to checkout." },
      { title: "Every device", text: "Fully responsive storefront." },
    ],
    tools: ["E-commerce", "Product catalogue", "Responsive layout", "UI/UX design"],
    cover: img("zodaromatics.webp"),
    gallery: [img("zodaromatics-2.jpg")],
    accent: "from-pink-400 to-fuchsia-500",
  },
  {
    slug: "orpheus-financial",
    title: "Orpheus Financial",
    tagline: "Offshore setup & financial advisory",
    category: "Website",
    year: "2024",
    role: "Design & Development",
    summary:
      "A modern financial-services website that communicates trust and expertise for UAE company setup and advisory.",
    overview: [
      "Orpheus Financial is a modern financial-services website designed to present core offerings with clarity and professionalism. The structure highlights services, insights and client-focused solutions to communicate trust, transparency and expertise.",
      "It features a responsive design, intuitive navigation and a refined visual style suited to the financial sector, with attention to usability, performance and clear service presentation.",
    ],
    highlights: [
      { title: "Offshore & UAE setup", text: "Service pages for corporate accounts and company formation." },
      { title: "Wealth advisory", text: "Clear presentation of advisory and management services." },
      { title: "Trust-first design", text: "Refined visuals and stats that build credibility." },
      { title: "Insights", text: "Blog and updates section for thought leadership." },
    ],
    tools: ["UI/UX design", "Responsive layout", "On-page SEO", "Lead forms"],
    cover: img("orpheus-financial.png"),
    accent: "from-amber-400 to-yellow-500",
  },
  {
    slug: "mannat-immigration",
    title: "Mannat Immigration",
    tagline: "Visa & immigration consultants, Delhi",
    category: "Website",
    client: "Rashi Manchanda (CEO)",
    year: "2023",
    role: "Design & Development",
    summary:
      "A trust-building immigration consultancy website with clear service offerings, eligibility guidance and consultation CTAs.",
    overview: [
      "Mannat Immigration is a professional immigration consultancy website designed to establish trust and credibility for global visa and migration services. It clearly presents service offerings, eligibility guidance and consultation details for potential clients.",
      "The design focuses on a clean layout, responsive structure and easy navigation, with clear calls-to-action, fast loading and a professional visual tone that supports lead generation under CEO Rashi Manchanda.",
    ],
    highlights: [
      { title: "Country pages", text: "Study, work and visit visa pathways by destination." },
      { title: "Clear CTAs", text: "Book-a-consultation prompts across the journey." },
      { title: "Fast loading", text: "Optimised images and lightweight pages." },
      { title: "Credibility", text: "Awards, partner logos and leadership up front." },
    ],
    tools: ["UI/UX design", "Responsive layout", "On-page SEO", "Lead forms"],
    cover: img("mannat-immigration.webp"),
    accent: "from-blue-500 to-sky-500",
  },
  {
    slug: "architecture-cad-institute",
    title: "Architecture CAD Institute",
    tagline: "Architecture & design services",
    category: "Website",
    client: "Nitesh",
    year: "2023",
    role: "Design & Development",
    summary:
      "A clean, modern website that presents architecture services, software training and workflows for an architecture brand.",
    overview: [
      "Architecture CAD is a professional architecture and design services website created to showcase technical expertise, project offerings and industry-focused solutions. Services, workflows and contact information are presented in a clean, structured way.",
      "The design emphasises clarity, responsiveness and a modern visual approach suited to the architecture domain, strengthening the brand's online presence and supporting lead generation.",
    ],
    highlights: [
      { title: "Software courses", text: "AutoCAD, SketchUp, 3ds Max and SolidWorks offerings." },
      { title: "Services", text: "Planning, interior, exterior, building and restoration." },
      { title: "Portfolio", text: "'Our Works' gallery of completed projects." },
      { title: "WhatsApp leads", text: "Quick enquiry path for prospective clients." },
    ],
    tools: ["UI/UX design", "Responsive layout", "On-page SEO", "WhatsApp integration"],
    cover: img("architecture-cad.webp"),
    gallery: [img("architecture-cad-2.jpg")],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    slug: "softbytes-seo-agency",
    title: "Softbytes Ltd",
    tagline: "SEO agency website",
    category: "Website",
    client: "Enume Sakah",
    year: "2022",
    role: "Design & Development",
    summary:
      "A conversion-focused SEO agency website that explains services and value clearly and turns visitors into calls.",
    overview: [
      "Softbytes Ltd is a professional SEO agency website designed to showcase digital-marketing expertise and result-driven optimisation services. It presents SEO solutions and the agency's value proposition in a clear, structured way.",
      "The site focuses on a modern, responsive design with smooth navigation and fast performance, with conversion-focused layouts that support lead generation.",
    ],
    highlights: [
      { title: "Service clarity", text: "SEO offerings explained in plain language." },
      { title: "Book-a-call funnel", text: "Prominent CTAs that drive consultations." },
      { title: "SEO built in", text: "Rank Math and Search Console from day one." },
      { title: "Tracking", text: "Google Tag Manager for analytics and ads." },
    ],
    tools: ["WordPress", "Elementor", "Rank Math", "Google Tag Manager", "Slider Revolution"],
    href: "https://softbytesltd.com/",
    cover: img("softbytes.jpg"),
    accent: "from-indigo-500 to-violet-600",
  },
  {
    slug: "mj-nails-salons",
    title: "MJ Nails Salons",
    tagline: "Beauty & nail salon website",
    category: "Website",
    client: "Enume",
    year: "2023",
    role: "Design & Development",
    summary:
      "An elegant salon website that showcases services and styles and encourages online bookings.",
    overview: [
      "MJ Nails Salons is a beauty-focused website that showcases professional nail services through a modern, elegant and visually engaging interface, highlighting services, styles and brand identity.",
      "The responsive layout, smooth navigation and strong visual presentation give clients an effortless experience and encourage enquiries and bookings.",
    ],
    highlights: [
      { title: "Online booking", text: "Booking page and clear service menu." },
      { title: "Local SEO", text: "Rank Math setup for 'near me' searches." },
      { title: "Brand visuals", text: "Elegant typography and soft colour palette." },
      { title: "Responsive", text: "Smooth on every screen size." },
    ],
    tools: ["WordPress", "Elementor", "Rank Math", "Bootstrap", "Google Tag Manager"],
    href: "https://mjnailssalons.com/",
    cover: img("mj-nails-salons.jpg"),
    accent: "from-violet-400 to-purple-500",
  },
  {
    slug: "the-detailing-hunter",
    title: "The Detailing Hunter",
    tagline: "Car detailing, PPF & wrapping",
    category: "Website",
    client: "Wazir",
    year: "2025",
    role: "Design & Development",
    summary:
      "A bold automotive-services website for car detailing, paint protection film (PPF) and vehicle wrapping.",
    overview: [
      "The Detailing Hunter is a high-impact automotive services website for car detailing, paint protection film (PPF) and vehicle wrapping. It highlights premium auto-care solutions with bold visuals and clear service segmentation, so customers quickly understand the offerings and quality standards.",
      "The site focuses on a modern, responsive design with smooth navigation and strong visual storytelling. It is optimised for performance and lead generation, strengthening the brand's presence in the automotive detailing industry.",
    ],
    highlights: [
      { title: "Service segmentation", text: "Maintenance, PPF, detailing, graphene and ceramic coating." },
      { title: "Bold visuals", text: "High-impact imagery that sells premium auto-care." },
      { title: "Book a demo", text: "Enquiry forms and clear calls-to-action." },
      { title: "Local presence", text: "Location and contact details up front for Faridabad customers." },
    ],
    tools: ["WordPress", "Elementor", "Contact Form 7", "Swiper"],
    href: "https://thedetailinghunter.com/",
    accent: "from-zinc-700 to-red-600",
  },
  {
    slug: "unexplore-travel",
    title: "Unexplore Travel",
    tagline: "Travel & tour website",
    category: "Website",
    role: "Design & Development",
    summary:
      "A travel website that showcases destinations and tour packages and turns visitors into enquiries.",
    overview: [
      "Unexplore Travel is a travel and tour website built to showcase destinations and packages with rich visuals and a clear path to enquiry.",
    ],
    highlights: [
      { title: "Destinations", text: "Visual destination and package pages." },
      { title: "Enquiry flow", text: "Simple forms to request a trip." },
      { title: "Responsive", text: "Smooth browsing on phones and desktops." },
      { title: "Fast", text: "Optimised pages for quick loading." },
    ],
    tools: ["UI/UX design", "Responsive layout", "Lead forms"],
    href: "https://unexploretravel.com/",
    accent: "from-teal-500 to-cyan-600",
  },
  {
    slug: "brand-print-design",
    title: "Brand & Print Design",
    tagline: "Business cards, hoardings & standees",
    category: "Brand Design",
    year: "2024",
    role: "Graphic Designer",
    summary:
      "Business cards, hoardings and standees that blend aesthetics with strategic messaging for strong brand visibility.",
    overview: [
      "Alongside development, I design brand and print collateral. This collection includes business cards that combine creativity with professional branding, and hoardings and standees that pair visual appeal with strategic messaging for maximum visibility.",
      "Each piece is designed to match the client's identity and campaign goals, from a graphic designer's personal card to a jewellery brand's festive sale billboard.",
    ],
    highlights: [
      { title: "Business cards", text: "Premium, on-brand cards with QR and contact details." },
      { title: "Hoardings", text: "Large-format campaign creatives for retail brands." },
      { title: "Standees", text: "In-store displays designed for footfall." },
      { title: "Brand consistency", text: "Typography and colour aligned to each identity." },
    ],
    tools: ["Photoshop", "Illustrator", "Figma"],
    cover: img("brand-business-cards.webp"),
    gallery: [img("brand-hoardings.webp")],
    accent: "from-amber-500 to-orange-600",
  },
  {
    slug: "payment-gateway-plugins",
    title: "Payment Gateway Plugins",
    tagline: "Secure PG plugins for e-commerce",
    category: "Fintech",
    client: "ITSTARPAY Pvt. Ltd.",
    year: "2025",
    role: "Frontend / Integration Developer",
    summary:
      "Custom gateway plugins with secure transaction handling, webhook integration, refund flows and gateway-specific compliance.",
    overview: [
      "At ITSTARPAY I developed and customised payment gateway plugins for e-commerce platforms, including secure transaction handling, webhook integration, refund flows and gateway-specific compliance requirements (Razorpay-style).",
      "I also integrated and troubleshot gateways for client sites, fixing bugs and optimising performance across payment journeys.",
    ],
    highlights: [
      { title: "Secure transactions", text: "Signed requests and server-side verification." },
      { title: "Webhooks", text: "Payment, refund and status events handled reliably." },
      { title: "Refund flows", text: "Full and partial refunds from the admin." },
      { title: "Compliance", text: "Gateway-specific rules built into each plugin." },
    ],
    tools: ["PHP", "WordPress", "WooCommerce", "Node.js", "Webhooks", "Razorpay"],
    accent: "from-sky-500 to-blue-600",
  },
  {
    slug: "kotak-trading-platform",
    title: "Kotak Trading Platform",
    tagline: "Trading on the Kotak Trading API",
    category: "Fintech",
    client: "ITSTARPAY Pvt. Ltd.",
    year: "2025",
    role: "Frontend Developer",
    summary:
      "Real-time market data, order placement, portfolio tracking and secure API authentication on the Kotak Trading API.",
    overview: [
      "I built and integrated a platform on the Kotak Trading API that enables real-time market data access, order placement and portfolio tracking.",
      "Secure API authentication protects every trading operation, and the UI keeps prices and positions updating live.",
    ],
    highlights: [
      { title: "Live market data", text: "Streaming quotes and watchlists." },
      { title: "Order placement", text: "Buy and sell flows with validation." },
      { title: "Portfolio tracking", text: "Holdings, positions and P&L at a glance." },
      { title: "Secure auth", text: "Token-based API authentication." },
    ],
    tools: ["Next.js", "React", "REST APIs", "JWT", "Tailwind CSS"],
    accent: "from-emerald-500 to-green-600",
  },
  {
    slug: "onboarding-dashboard-cms",
    title: "Onboarding Dashboard & CMS",
    tagline: "Secure onboarding with e-sign PDFs",
    category: "Fintech",
    client: "ITSTARPAY Pvt. Ltd.",
    year: "2025",
    role: "Frontend Developer",
    summary:
      "Users submit details and generate e-sign PDFs; admins manage updates with automated emails and S3 document storage.",
    overview: [
      "I built a secure onboarding dashboard and CMS where users submit their details, generate PDF documents with e-sign preview and download, and admins manage updates with automated email triggers.",
      "Documents are stored on AWS S3 with GitHub integration, and webhook-based real-time request authorisation blocks spam.",
    ],
    highlights: [
      { title: "PDF + e-sign", text: "Generate, preview and download signed documents." },
      { title: "Admin CMS", text: "Review and update submissions in one place." },
      { title: "Automated emails", text: "Triggers on every status change." },
      { title: "Secure storage", text: "AWS S3 with webhook-based spam blocking." },
    ],
    tools: ["React", "Node.js", "AWS S3", "GitHub", "MySQL", "Webhooks"],
    accent: "from-fuchsia-500 to-pink-600",
  },
  {
    slug: "absolute-immigrations",
    title: "Absolute Immigrations",
    tagline: "Immigration website & ad landing pages",
    category: "Website",
    client: "Absolute Immigrations",
    year: "2024",
    role: "WordPress Developer",
    summary:
      "WordPress website and campaign landing pages with CRM-integrated lead capture from Google & Meta Ads.",
    overview: [
      "As WordPress Developer at Absolute Immigrations I built and customised the company website and designed landing pages for Google and Meta ad campaigns, driving higher conversions.",
      "Leads from both ad platforms flow automatically into the CRM through API integrations, and I handled QA, client onboarding and delivery.",
    ],
    highlights: [
      { title: "Campaign landing pages", text: "Fast, focused pages for every ad set." },
      { title: "CRM automation", text: "Google & Meta leads synced via APIs." },
      { title: "QA & delivery", text: "Testing and smooth handover for each launch." },
      { title: "Conversion focus", text: "Forms and CTAs optimised for enquiries." },
    ],
    tools: ["WordPress", "PHP", "Google Ads", "Meta Ads", "CRM APIs"],
    href: "https://absoluteimmigrations.in",
    accent: "from-orange-500 to-amber-500",
  },
  {
    slug: "meridian-pr-immigrations",
    title: "Meridian PR Immigrations",
    tagline: "Immigration consultancy website",
    category: "Website",
    year: "2024",
    role: "WordPress Developer",
    summary:
      "Conversion-focused immigration consultancy website with a custom WordPress theme and lead funnels.",
    overview: [
      "A conversion-focused immigration consultancy website built on WordPress with a custom theme and lead funnels, delivered during my time at Absolute Immigrations.",
    ],
    highlights: [
      { title: "Custom theme", text: "Brand-specific WordPress theme." },
      { title: "Lead funnels", text: "Enquiry paths for each visa service." },
      { title: "Responsive", text: "Optimised for mobile visitors from ads." },
      { title: "Fast", text: "Lightweight pages for quick loading." },
    ],
    tools: ["WordPress", "PHP", "Landing pages"],
    href: "https://meridianprimmigrations.com",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    slug: "vishnu-it",
    title: "Vishnu IT Solutions",
    tagline: "My digital marketing & IT agency",
    category: "Website",
    client: "Vishnu IT Solutions (own brand)",
    year: "2025",
    role: "Founder · Design & Development",
    summary:
      "My own agency site — web development, SEO, branding, app development and digital marketing, with a Web Folio of client work.",
    overview: [
      "Vishnu IT Solutions is the digital marketing and IT solutions agency I run, helping businesses thrive online with SEO, PPC, social media and web development. Our mission is to turn ideas into powerful digital experiences.",
      "The website presents the agency's services — Web Development, SEO Optimization, Branding & UI/UX Design, App Development and Marketing & SMO — along with a Work Showcase, the Web Folio of delivered client projects, FAQs, a blog and a project-brief contact form.",
      "The agency has 4+ years of experience, a 15+ member team, clients in 2+ countries and 3+ offices, with a 4.9-star Google rating from 250+ verified customers. I'm also Google Ads Creative certified.",
    ],
    highlights: [
      { title: "Full-service agency", text: "Web, SEO, branding & UI/UX, apps and marketing under one roof." },
      { title: "Web Folio", text: "A portfolio of delivered client websites and stores." },
      { title: "4.9★ on Google", text: "Rated by 250+ verified customers." },
      { title: "Lead capture", text: "Services-based contact form, map and WhatsApp chat." },
    ],
    tools: ["WordPress", "Elementor", "Rank Math", "On-page SEO", "Google Ads"],
    href: "https://www.vishnuit.co.in",
    cover: img("vishnu-it-hero.webp"),
    gallery: [
      img("vishnu-it-services.webp"),
      img("vishnu-it-end-to-end.webp"),
      img("vishnu-it-web-dev.webp"),
      img("vishnu-it-work-showcase.webp"),
      img("vishnu-it-web-folio.webp"),
      img("vishnu-it-story-hd.webp"),
    ],
    accent: "from-violet-500 to-purple-600",
    featured: true,
  },
];

export const projectCategories: ProjectCategory[] = [
  "Fintech",
  "Website",
  "E-commerce",
  "Brand Design",
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return {
    prev: projects[(i - 1 + n) % n],
    next: projects[(i + 1) % n],
  };
}
