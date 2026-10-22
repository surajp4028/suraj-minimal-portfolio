import type { Metadata } from "next";
import Image from "next/image";
import { IconDownload } from "@tabler/icons-react";
import { ButtonLink } from "@/components/button";
import { Collage } from "@/components/collage";
import { Heading } from "@/components/heading";
import { PageShell } from "@/components/page-shell";
import { InsetSection } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { education, profile } from "@/data/profile";
import { about, timeline } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <PageShell>
      <Heading>About Me</Heading>
      <Subheading>{about.intro}</Subheading>

      <Collage />

      <InsetSection className="my-6">
        <SectionHeading>The story so far</SectionHeading>
        <div className="flex flex-col gap-6 pt-6 md:flex-row md:items-start">
          <Image
            src={profile.photoFull}
            alt={profile.name}
            width={320}
            height={400}
            className="w-40 shrink-0 rounded-xl object-cover shadow-[var(--shadow-aceternity)] md:w-48"
          />
          <div className="flex flex-col gap-4">
            {about.story.map((p) => (
              <p key={p} className="text-secondary text-sm leading-relaxed md:text-base">
                {p}
              </p>
            ))}
            <div className="pt-2">
              <ButtonLink href={profile.cv} download="Suraj-Pandey-CV.pdf" variant="shimmer">
                <IconDownload className="size-4" />
                Download Resume
              </ButtonLink>
            </div>
          </div>
        </div>
      </InsetSection>

      <Timeline data={timeline} />

      <div className="px-4 py-6">
        <SectionHeading className="mb-6">Education</SectionHeading>
        <div className="flex flex-col gap-6">
          {education.map((e) => (
            <div key={e.title} className="flex flex-col justify-between gap-1 md:flex-row md:items-start">
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{e.title}</h3>
                <p className="pt-1 text-sm text-neutral-500">{e.school}</p>
              </div>
              <div className="text-sm text-neutral-500 md:text-right">
                <p>{e.period}</p>
                <p className="text-neutral-400 dark:text-neutral-500">{e.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InsetSection className="my-6">
        <SectionHeading className="mb-4">What I bring to the table</SectionHeading>
        <SkillsMarquee />
      </InsetSection>
    </PageShell>
  );
}
