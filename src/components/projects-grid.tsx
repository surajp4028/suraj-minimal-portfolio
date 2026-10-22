"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-1 pt-6">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-md px-2.5 py-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100",
                filter === f && "text-neutral-900 dark:text-neutral-100",
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-md shadow-[var(--shadow-aceternity)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">
                {f} <span className="text-xs text-neutral-400">{count}</span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={`${filter}-${project.slug}`} project={project} index={i % 3} />
        ))}
      </div>
    </>
  );
}
