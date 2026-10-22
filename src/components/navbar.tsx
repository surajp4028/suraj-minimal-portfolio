"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { profile } from "@/data/profile";
import { siteNav } from "@/data/site";
import { cn } from "@/lib/utils";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function Avatar({ size }: { size: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/"
      aria-label="Home"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative block overflow-hidden rounded-full"
    >
      <Image
        src={profile.photo}
        alt={profile.name}
        width={size * 2}
        height={size * 2}
        priority
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
      {/* Light sweep across the avatar on hover. */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -50, rotate: 15 }}
        animate={hovered ? { opacity: 1, x: 50 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent blur-sm"
      />
    </Link>
  );
}

function DesktopNavbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block print:hidden">
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "85%" : "92%",
          borderRadius: scrolled ? "4rem" : "0rem",
          y: scrolled ? 10 : 0,
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="mx-auto flex max-w-4xl items-center justify-between bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50"
      >
        <Avatar size={40} />
        <div className="flex items-center" onMouseLeave={() => setHovered(null)}>
          <ModeToggle />
          {siteNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHovered(i)}
              className={cn(
                "relative px-2 py-1 text-sm text-neutral-700 transition-colors dark:text-neutral-300",
                isActive(pathname, item.href) && "text-neutral-950 dark:text-white",
              )}
            >
              {hovered === i && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
              {isActive(pathname, item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 z-10 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-300"
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}

function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Close the menu when the route changes (state is reset by the key below).
  return (
    <nav
      key={pathname}
      className="fixed top-0 left-0 z-50 block w-full border-b border-neutral-100 bg-white md:hidden print:hidden dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex w-full items-center justify-between px-4 py-3">
        <Avatar size={32} />
        <div className="flex items-center gap-1">
          <ModeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
          >
            {open ? <IconX className="size-5" /> : <IconMenu2 className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-neutral-100 dark:border-neutral-800"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {siteNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-2 py-2 text-sm text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
                      isActive(pathname, item.href) &&
                        "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white",
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
