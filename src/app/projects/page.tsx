import type { Metadata } from "next";
import { Heading } from "@/components/heading";
import { PageShell } from "@/components/page-shell";
import { ProjectsGrid } from "@/components/projects-grid";
import { InsetSection } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Fintech platforms, websites, e-commerce stores and brand design work by Suraj Pandey.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <Heading>Projects</Heading>
      <Subheading>
        Payment-gateway products, client websites, e-commerce stores and brand design. Open any
        project for the full story.
      </Subheading>
      <InsetSection>
        <SectionHeading>I love building things</SectionHeading>
        <ProjectsGrid projects={projects} />
      </InsetSection>
    </PageShell>
  );
}
