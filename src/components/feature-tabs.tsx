"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { FeatureGroup } from "@/data/projects";
import { cn } from "@/lib/utils";

// Grouped feature deep-dive: a pill tab per area, items fade in below.
export function FeatureTabs({ groups }: { groups: FeatureGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {groups.map((g, i) => (
          <button
            key={g.title}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative rounded-md px-2.5 py-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100",
              active === i && "text-neutral-900 dark:text-neutral-100",
            )}
          >
            {active === i && (
              <motion.span
                layoutId="feature-tab"
                className="absolute inset-0 rounded-md shadow-[var(--shadow-aceternity)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative">
              {g.title} <span className="text-xs text-neutral-400">{g.items.length}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={group.title}
          initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(6px)", y: -8 }}
          transition={{ duration: 0.25 }}
          className="pt-6"
        >
          <p className="text-secondary text-sm">{group.description}</p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 pt-5 md:grid-cols-2">
            {group.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="flex items-start gap-2"
              >
                <IconCircleCheckFilled className="mt-0.5 size-4 shrink-0 text-neutral-500" />
                <div>
                  <h3 className="text-primary text-sm font-medium tracking-tight">{item.title}</h3>
                  <p className="text-secondary pt-0.5 text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
