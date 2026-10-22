import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "@/components/container";
import { formatDate, getPost, posts } from "@/data/blog";
import { profile } from "@/data/profile";

// Every slug is prerendered, so navigations block briefly on the page payload
// instead of streaming a fallback shell.
export const instant = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 pt-20 pb-10">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <IconArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            All posts
          </Link>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          priority
          className="mx-auto mt-6 mb-12 max-h-96 w-full max-w-2xl rounded-2xl object-cover object-top shadow-xl"
        />
        <article className="prose mx-auto">
          <div className="not-prose mb-4 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{profile.name}</span>
            {post.tags.map((t) => (
              <span key={t} className="rounded-md px-1.5 py-0.5 shadow-[var(--shadow-aceternity)]">
                {t}
              </span>
            ))}
          </div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Container>
    </div>
  );
}
