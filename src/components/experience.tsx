"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Stack } from "@/components/stack-item";
import type { Job } from "@/data/profile";
import { companyBadges } from "@/data/site";
import { cn } from "@/lib/utils";

function CompanyBadge({ company }: { company: string }) {
  const badge = companyBadges[company];
  return (
    <div
      className={cn(
        "hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-bold tracking-tighter text-white shadow-[var(--shadow-aceternity)] md:flex",
        badge?.className ?? "from-neutral-500 to-neutral-700",
      )}
    >
      {badge?.initials ?? company.slice(0, 2)}
    </div>
  );
}

export function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex flex-col gap-8 py-10">
      {jobs.map((job, i) => {
        const [, ...rest] = job.place.split("·");
        const location = job.place.split("·")[0].trim();
        const period = rest.join("·").trim();
        return (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-start"
          >
            <div className="md:max-w-[80%]">
              <div className="flex items-center gap-2">
                <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 hover:underline"
                    >
                      {job.company}
                      <IconArrowUpRight className="size-3.5 text-neutral-400" />
                    </a>
                  ) : (
                    job.company
                  )}
                </h2>
                {job.current && (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:gap-2">
                <p className="text-sm text-neutral-800 dark:text-neutral-200">{job.role}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{period}</p>
              </div>
              <p className="text-sm text-neutral-500">{job.points[0]}</p>
              <p className="pt-1 text-xs text-neutral-400 dark:text-neutral-500">{location}</p>
              <Stack items={job.tags} className="mt-4" />
            </div>
            <CompanyBadge company={job.company} />
          </motion.div>
        );
      })}
    </div>
  );
}
