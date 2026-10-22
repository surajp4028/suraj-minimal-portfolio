"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { toolIcon } from "@/components/tech-icons";
import { cn } from "@/lib/utils";

// A round tech chip that slides open to reveal its name on hover/focus.
export function StackItem({ name, className }: { name: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const tech = toolIcon(name);
  const Icon = tech?.icon;

  return (
    <motion.div
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className={cn(
        "relative flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 outline-none hover:z-10 focus-visible:z-10 dark:border-neutral-700 dark:bg-neutral-800",
        Icon ? "-mr-3" : "px-2",
        className,
      )}
    >
      {Icon ? (
        <>
          <span className="flex size-3.5 items-center justify-center">
            <Icon style={{ color: tech.color }} className="size-3.5" aria-hidden />
          </span>
          <motion.span
            initial={false}
            animate={{ width: open ? "auto" : 0, marginLeft: open ? 4 : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
          >
            {name}
          </motion.span>
          <span className="sr-only">{name}</span>
        </>
      ) : (
        <span className="whitespace-nowrap text-neutral-500 dark:text-neutral-300">{name}</span>
      )}
    </motion.div>
  );
}

export function Stack({ items, className }: { items: string[]; className?: string }) {
  // Icon chips overlap (-mr-3); text-only chips sit after them with normal spacing.
  const withIcon = items.filter((n) => toolIcon(n));
  const textOnly = items.filter((n) => !toolIcon(n));
  return (
    <div className={cn("flex flex-wrap items-center gap-1", className)}>
      {withIcon.length > 0 && (
        <div className="mr-3 flex flex-wrap gap-1">
          {withIcon.map((n) => (
            <StackItem key={n} name={n} />
          ))}
        </div>
      )}
      {textOnly.map((n) => (
        <StackItem key={n} name={n} />
      ))}
    </div>
  );
}
