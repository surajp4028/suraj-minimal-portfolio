"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Heading({
  children,
  className,
  as: Tag = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Tag
        className={cn(
          "text-primary px-4 text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
