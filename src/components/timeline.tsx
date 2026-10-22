"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import { InsetSection } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import type { TimelineYear } from "@/data/site";

export function Timeline({ data }: { data: TimelineYear[] }) {
  return (
    <InsetSection className="my-6">
      <SectionHeading className="mb-6">Timeline of achievements</SectionHeading>
      {data.map((year) => (
        <div key={year.year} className="mb-4">
          <motion.h2
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-neutral-900 shadow-[var(--shadow-aceternity)] dark:text-neutral-100"
          >
            {year.year}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.items.map((item, i) => (
              <div key={item.title} className="pl-4">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.15 }}
                  className="flex items-start gap-2"
                >
                  <IconCircleCheckFilled className="mt-1 size-4 shrink-0 text-neutral-500" />
                  <h3 className="text-neutral-600 dark:text-neutral-400">{item.title}</h3>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.15 }}
                  className="pt-1 pl-6 text-sm text-neutral-400 dark:text-neutral-500"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </InsetSection>
  );
}
