export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-03-12". */
  date: string;
  image: string;
  tags: string[];
  /** Trusted HTML written in this file (rendered with the `.prose` styles). */
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "building-a-merchant-onboarding-platform",
    title: "Building a Merchant Onboarding Platform with Next.js",
    description:
      "How I structured a multi-step KYC journey, department review queues and gateway push APIs for a payment gateway — and what I'd do the same way again.",
    date: "2026-06-18",
    image: "/images/projects/onboarding-applications.webp",
    tags: ["Next.js", "Fintech", "Architecture"],
    content: `
<p>Onboarding is the first thing a merchant sees of a payment gateway, and the last thing the risk team signs off on. At I Money Pay I build the platform that sits between those two moments. Here's how it's put together.</p>
<h2>One application, many owners</h2>
<p>A merchant fills in business details, uploads KYC documents, adds a bank account and accepts the agreement. Internally that same application moves through <strong>Maker → Checker → Approver → Risk → Operations</strong>. The trick is to model the application once and let each department see only the actions it owns.</p>
<ul>
  <li><strong>A single status machine.</strong> Every transition (submit, raise discrepancy, approve, block) is a named event, so the UI and the audit log never disagree.</li>
  <li><strong>Role-based access at the API.</strong> The front end hides buttons, but the server decides what a role is allowed to do.</li>
  <li><strong>Autosave on every step.</strong> Long KYC forms lose people; saving drafts as they type keeps them.</li>
</ul>
<h2>Pushing approved merchants downstream</h2>
<p>Once Operations approves, the merchant is pushed to the gateway to get a merchant ID and to the bank for account verification. Both calls are retried idempotently and their responses are stored next to the application, so support can answer "where is my account?" without opening a log viewer.</p>
<h2>Keeping everyone in the loop</h2>
<p>A daily digest email summarises every queue — new, pending, discrepancies, approved — alongside PG-health checks. It's a small feature, but it replaced a lot of "any update?" messages.</p>
<blockquote>Design the workflow before the screens. The screens get much simpler once the states are honest.</blockquote>
`,
  },
  {
    slug: "payment-gateway-webhooks-done-right",
    title: "Payment Gateway Webhooks, Done Right",
    description:
      "Signatures, idempotency, retries and refunds — the checklist I follow every time I build or integrate a PG plugin for an e-commerce store.",
    date: "2025-11-04",
    image: "/images/projects/onboarding-inbox.webp",
    tags: ["Payments", "Node.js", "Webhooks"],
    content: `
<p>Most payment bugs I've fixed weren't in the checkout — they were in the webhook handler. After building gateway plugins for WooCommerce and custom stores, this is the checklist I keep.</p>
<h2>1. Verify before you trust</h2>
<p>Every webhook must be verified against the gateway's signature using the raw request body. Parse JSON <em>after</em> verification, never before.</p>
<pre><code>const expected = crypto
  .createHmac("sha256", process.env.PG_WEBHOOK_SECRET)
  .update(rawBody)
  .digest("hex");

if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) {
  return new Response("Invalid signature", { status: 401 });
}</code></pre>
<h2>2. Make every event idempotent</h2>
<p>Gateways retry. Store the event ID and ignore duplicates, and make state changes conditional ("mark paid only if pending") so an out-of-order event can't undo a refund.</p>
<h2>3. Answer fast, work later</h2>
<p>Return <code>200</code> quickly and move slow work (emails, invoices, stock updates) to a queue. A slow handler looks like a failed one to the gateway.</p>
<h2>4. Treat refunds as first-class</h2>
<ul>
  <li>Support full and partial refunds from the admin.</li>
  <li>Record who refunded, how much and why.</li>
  <li>Reconcile refund webhooks against what the admin requested.</li>
</ul>
<p>None of this is glamorous, but it's the difference between a plugin merchants trust and one they're afraid to update.</p>
`,
  },
  {
    slug: "landing-pages-that-convert",
    title: "Landing Pages That Actually Convert",
    description:
      "Lessons from building WordPress landing pages for Google and Meta ad campaigns — speed, focus, forms and wiring leads straight into the CRM.",
    date: "2024-09-22",
    image: "/images/projects/perk-immigration.png",
    tags: ["WordPress", "Marketing", "CRO"],
    content: `
<p>At Absolute Immigrations every landing page had a cost-per-lead attached to it, which is a great way to learn what matters. A few patterns kept winning.</p>
<h2>One page, one promise</h2>
<p>Each ad set gets its own page that repeats the ad's promise in the headline. No navigation menu, no blog links — just the offer, the proof and the form.</p>
<h2>Speed is a conversion feature</h2>
<ul>
  <li>Compress and lazy-load every image below the fold.</li>
  <li>Drop page-builder widgets you don't need; each one ships CSS and JS.</li>
  <li>Test on a mid-range Android phone on 4G — that's who's clicking the ad.</li>
</ul>
<h2>Shorter forms, better leads</h2>
<p>Name, phone, email and one qualifying question beat a ten-field form every time. Follow up for the rest.</p>
<h2>Wire leads straight into the CRM</h2>
<p>Google Ads and Meta lead forms were connected to the CRM through their APIs, so the sales team called new leads within minutes instead of exporting CSVs at the end of the day. Speed-to-lead mattered as much as the page itself.</p>
`,
  },
  {
    slug: "designing-dark-mode-dashboards",
    title: "Designing Dark Mode Dashboards That Don't Hurt",
    description:
      "Neutral palettes, layered surfaces and subtle shadows — how I approach dark mode for data-heavy admin consoles with Tailwind CSS.",
    date: "2026-02-10",
    image: "/images/dashboard.webp",
    tags: ["UI/UX", "Tailwind CSS", "Design"],
    content: `
<p>Admin consoles are used for hours at a time, so dark mode isn't a gimmick — it's ergonomics. Here's how I approach it in Tailwind.</p>
<h2>Use surfaces, not pure black</h2>
<p>Pure <code>#000</code> with white text vibrates. I layer neutrals instead: <code>neutral-950</code> for the page, <code>neutral-900</code> for cards and <code>neutral-800</code> for hover and inputs.</p>
<h2>Borders and shadows flip</h2>
<p>Dark shadows disappear on dark backgrounds. I swap them for a 1px white-alpha ring and a faint top highlight — the same "aceternity" shadow used across this site.</p>
<pre><code>:root { --shadow: 0 2px 3px -1px #0000001a, 0 0 0 1px #191c2114; }
.dark { --shadow: 0 2px 3px -1px #ffffff1a, 0 0 0 1px #ffffff14; }</code></pre>
<h2>Keep colour for meaning</h2>
<p>Status colours — approved, pending, rejected — stay saturated; everything else stays neutral. When colour only appears where it means something, people scan faster.</p>
<h2>Respect the system</h2>
<p>Default to the visitor's system theme, remember their choice, and never flash the wrong theme on load. <code>next-themes</code> handles all three.</p>
`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
