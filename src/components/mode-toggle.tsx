"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center rounded-md px-2 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {isDark ? <IconSun className="size-4" /> : <IconMoon className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
