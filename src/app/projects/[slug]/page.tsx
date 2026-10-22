import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { ButtonLink } from "@/components/button";
import { Heading } from "@/components/heading";
import { PageShell } from "@/components/page-shell";
import { ProjectCover } from "@/components/project-card";
import { InsetSection } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Stack } from "@/components/stack-item";
import { Subheading } from "@/components/subheading";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";

// Every slug is prerendered, so navigations block briefly on the page payload
// instead of streaming a fallback shell.
export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: project.cover ? [project.cover] : undefined },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  const meta = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Category", value: project.category },
  ].filter((m) => m.value);

  return (
    <PageShell>
      <div className="px-4 pb-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <IconArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
      </div>
      <Heading>{project.title}</Heading>
      <Subheading>{project.tagline}</Subheading>

      <div className="px-4 pt-6">
        <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-aceternity)]">
          <ProjectCover project={project} className="aspect-[16/9] rounded-2xl" />
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-4 px-4 pt-6 md:grid-cols-4">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="text-xs text-neutral-400">{m.label}</dt>
            <dd className="pt-1 text-sm text-neutral-700 dark:text-neutral-300">{m.value}</dd>
          </div>
        ))}
      </dl>

      <InsetSection className="my-8">
        <SectionHeading>Overview</SectionHeading>
        <div className="flex flex-col gap-4 pt-4">
          {project.overview.map((p) => (
            <p key={p} className="text-secondary max-w-2xl text-sm leading-relaxed md:text-base">
              {p}
            </p>
          ))}
        </div>
        {project.href && (
          <div className="pt-6">
            <ButtonLink href={project.href} external variant="shimmer">
              Visit live site
              <IconArrowUpRight className="size-4" />
            </ButtonLink>
          </div>
        )}
      </InsetSection>

      <div className="px-4 py-6">
        <SectionHeading className="mb-6">Highlights</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.highlights.map((h) => (
            <div key={h.title} className="rounded-xl p-4 shadow-[var(--shadow-aceternity)]">
              <h3 className="text-primary font-medium tracking-tight">{h.title}</h3>
              <p className="text-secondary pt-1 text-sm">{h.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        <SectionHeading className="mb-4">Built with</SectionHeading>
        <Stack items={project.tools} />
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <InsetSection className="my-6">
          <SectionHeading className="mb-6">Gallery</SectionHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.gallery.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} screenshot`}
                width={800}
                height={520}
                className="aspect-[16/10] w-full rounded-xl object-cover object-top shadow-[var(--shadow-aceternity)]"
              />
            ))}
          </div>
        </InsetSection>
      )}

      <nav className="grid grid-cols-2 gap-4 px-4 pt-6">
        <Link href={`/projects/${prev.slug}`} className="group rounded-xl p-4 shadow-[var(--shadow-aceternity)]">
          <span className="flex items-center gap-1 text-xs text-neutral-400">
            <IconArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="text-primary block pt-1 text-sm font-medium">{prev.title}</span>
        </Link>
        <Link href={`/projects/${next.slug}`} className="group rounded-xl p-4 text-right shadow-[var(--shadow-aceternity)]">
          <span className="flex items-center justify-end gap-1 text-xs text-neutral-400">
            Next
            <IconArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="text-primary block pt-1 text-sm font-medium">{next.title}</span>
        </Link>
      </nav>
    </PageShell>
  );
}
