"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { formatDate, type BlogPost } from "@/data/blog";

const truncate = (s: string, n: number) => (s.length > n ? `${s.slice(0, n)}...` : s);

export function BlogList({ posts, truncateAt = 150 }: { posts: BlogPost[]; truncateAt?: number }) {
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
        >
          <Link href={`/blog/${post.slug}`} className="group block">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <h2 className="text-primary text-base font-bold tracking-tight transition-colors group-hover:text-neutral-950 dark:group-hover:text-white">
                {post.title}
              </h2>
              <p className="text-secondary text-sm md:shrink-0 md:pl-4">{formatDate(post.date)}</p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm">
              {truncate(post.description, truncateAt)}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
