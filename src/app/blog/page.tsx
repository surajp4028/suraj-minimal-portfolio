import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";
import { Heading } from "@/components/heading";
import { PageShell } from "@/components/page-shell";
import { InsetSection } from "@/components/section";
import { Subheading } from "@/components/subheading";
import { sortedPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on payments, Next.js, WordPress and UI design by Suraj Pandey.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <Heading>All blogs</Heading>
      <Subheading>
        Notes from building payment-gateway products, client websites and dashboards — what
        worked, what broke and what I&apos;d do again.
      </Subheading>
      <InsetSection className="py-6">
        <BlogList posts={sortedPosts()} />
      </InsetSection>
    </PageShell>
  );
}
