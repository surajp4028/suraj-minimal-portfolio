"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@/components/stack-item";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt={project.title}
        width={600}
        height={400}
        className={cn("aspect-[3/2] w-full rounded-xl object-cover object-top", className)}
      />
    );
  }
  // No screenshot yet: a gradient tile with the project's initials.
  return (
    <div
      className={cn(
        "flex aspect-[3/2] w-full items-center justify-center rounded-xl bg-gradient-to-br text-3xl font-bold tracking-tighter text-white/90",
        project.accent,
        className,
      )}
    >
      {project.title
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")}
    </div>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
      className="group relative mb-4 rounded-2xl"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="overflow-hidden rounded-xl shadow-[var(--shadow-aceternity)]">
          <ProjectCover
            project={project}
            className="transition duration-200 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
          <div>
            <div className="mt-2 flex items-center gap-2">
              <h2 className="z-20 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                {project.title}
              </h2>
            </div>
            <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
              {project.summary}
            </p>
          </div>
          <Stack items={project.tools.slice(0, 6)} className="mt-3 max-w-[14rem]" />
        </div>
      </Link>
    </motion.div>
  );
}
