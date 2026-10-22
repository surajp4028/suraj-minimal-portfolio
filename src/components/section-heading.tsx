"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const Corner = ({ className }: { className: string }) => (
  <div
    className={cn(
      "absolute h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700",
      className,
    )}
  />
);

// A tag-like label: the words blur in one by one, then the tinted box with
// pulsing corner dots fades in behind them.
export function SectionHeading({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });
  const words = children.split(" ");

  return (
    <h2
      ref={ref}
      className={cn(
        "relative mt-4 w-fit max-w-lg text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-300",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + words.length * 0.1 }}
        className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 dark:bg-neutral-800"
      >
        <Corner className="-top-px -left-px" />
        <Corner className="-top-px -right-px" />
        <Corner className="-bottom-px -left-px" />
        <Corner className="-right-px -bottom-px" />
      </motion.div>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(2px)", y: 5 }}
          animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ duration: 0.2, delay: delay + i * 0.1 }}
          className="relative inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
}
