"use client";
import { IconDownload, IconFileText, IconMapPin } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ButtonLink } from "@/components/button";
import { Flipper } from "@/components/flipper";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { profile, stats } from "@/data/profile";
import { hero, roles } from "@/data/site";

export function Hero() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <Heading>{profile.name}</Heading>
        <Flipper words={roles} className="order-first mx-4 mb-2 sm:order-last sm:mx-0 sm:mb-0" />
      </div>
      <Subheading>{hero.intro}</Subheading>

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.35 }}
        className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 pt-4 text-xs text-neutral-500"
      >
        <span className="flex items-center gap-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {hero.status}
        </span>
        <span className="flex items-center gap-1">
          <IconMapPin className="size-3.5" />
          {profile.location}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
        className="flex flex-wrap items-center gap-2 px-4 pt-6"
      >
        <ButtonLink href={profile.cv} download="Suraj-Pandey-CV.pdf" variant="shimmer">
          <IconDownload className="size-4" />
          Download Resume
        </ButtonLink>
        <ButtonLink href="/resume">
          <IconFileText className="size-4" />
          View Resume
        </ButtonLink>
        <ButtonLink href="/contact">Hire me</ButtonLink>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.55 }}
        className="grid max-w-lg grid-cols-2 gap-2 px-4 pt-8 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg px-2 py-2 shadow-[var(--shadow-aceternity)]">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-primary text-lg font-bold tracking-tight md:text-xl">{s.value}</dd>
            <p className="text-secondary text-[11px] leading-tight">{s.label}</p>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
