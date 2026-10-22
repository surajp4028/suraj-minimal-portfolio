"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Rotates through `words` in a small shadowed badge, morphing its width.
export function Flipper({
  words,
  interval = 2500,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <motion.div
      layout
      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
      className={cn(
        "text-secondary relative flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 text-sm shadow-[var(--shadow-aceternity)]",
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          layout
          initial={{ y: -20, filter: "blur(10px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          exit={{ y: 20, filter: "blur(10px)", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
