# Suraj Pandey — Minimal Portfolio

A replica of the Aceternity UI **Minimal Portfolio** template, filled with Suraj's real data and extended with extra Aceternity-style touches. Built with Next.js 16, Tailwind CSS v4 and Motion. Dark mode is the default, and light mode is supported.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | What's there |
| --- | --- |
| `/` | Hero (rotating role badge, resume download, stats), featured projects, latest posts, experience, skills marquee, get-in-touch |
| `/about` | Story, draggable photo collage, timeline of achievements, education |
| `/projects` | All projects with category filter |
| `/projects/[slug]` | Project details: cover, overview, highlights, stack, gallery, prev/next |
| `/blog`, `/blog/[slug]` | Blog list and posts |
| `/contact` | Contact form. Sends email through Resend and a WhatsApp alert through UltraMsg (`/api/contact`) |
| `/resume` | Printable resume with Print and Download PDF buttons |

## Where to edit

| What | File |
| --- | --- |
| Name, experience, education, skills, contact services | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Hero text, roles, about story, timeline, collage, nav | `src/data/site.ts` |
| Blog posts (HTML strings) | `src/data/blog.ts` |
| Tech logos | `src/components/tech-icons.tsx` |
| CV PDF | `public/Suraj-Pandey-CV.pdf` (to regenerate it, run `npm run build && npm start`, then `npm run cv:pdf`) |

The contact form reads `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` and `ULTRAMSG_*` from `.env`. Set the same variables on your host when you deploy.
