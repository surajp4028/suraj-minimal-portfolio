import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { BlogList } from "@/components/blog-list";
import { Experience } from "@/components/experience";
import { GetInTouch } from "@/components/get-in-touch";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { InsetSection } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsMarquee } from "@/components/skills-marquee";
import { sortedPosts } from "@/data/blog";
import { experience } from "@/data/profile";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured).slice(0, 6);

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
    >
      {children}
      <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <InsetSection className="mt-10">
        <SectionHeading>I love building things</SectionHeading>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <MoreLink href="/projects">View all {projects.length} projects</MoreLink>
      </InsetSection>

      <div className="px-4 py-6">
        <SectionHeading className="mb-4">Sharing knowledge as I learn</SectionHeading>
        <BlogList posts={sortedPosts().slice(0, 3)} truncateAt={120} />
        <div className="pt-6">
          <MoreLink href="/blog">Read all posts</MoreLink>
        </div>
      </div>

      <InsetSection className="my-10">
        <SectionHeading>Worked at reputed firms</SectionHeading>
        <Experience jobs={experience} />
      </InsetSection>

      <div className="my-4 px-4 py-4">
        <SectionHeading className="mb-4">What I bring to the table</SectionHeading>
        <SkillsMarquee />
      </div>

      <GetInTouch />
    </PageShell>
  );
}
