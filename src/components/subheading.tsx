"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Subheading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
    >
      <h2 className={cn("text-secondary max-w-lg px-4 pt-4 text-sm md:text-base", className)}>
        {children}
      </h2>
    </motion.div>
  );
}
