"use client";
import { IconCheck, IconLoader2 } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/button";
import { PREFILL_KEY } from "@/components/get-in-touch";
import { contactServices, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const field =
  "rounded-md bg-white px-2 py-2 text-sm text-neutral-800 shadow-[var(--shadow-aceternity)] placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-300 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder:text-neutral-600 dark:focus:ring-neutral-600";
const label = "text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400";

export function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  // Email typed into the home page's "Get in touch" box.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(PREFILL_KEY);
      if (saved && emailRef.current) {
        emailRef.current.value = saved;
        sessionStorage.removeItem(PREFILL_KEY);
      }
    } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus({ state: "error", message: json.error ?? "Something went wrong." });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: `Network error. Please email me at ${profile.email}.` });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="shadow-section-inset dark:shadow-section-inset-dark mx-auto my-6 border-y border-neutral-100 px-4 py-12 dark:border-neutral-800"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={label}>Full name</label>
            <input id="name" name="name" required minLength={2} placeholder="Your name" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={label}>Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              ref={emailRef}
              placeholder="you@company.com"
              className={field}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className={label}>Service</label>
          <select id="service" name="service" required defaultValue="" className={cn(field, "appearance-none")}>
            <option value="" disabled>
              What can I help with?
            </option>
            {contactServices.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className={label}>Subject <span className="font-normal text-neutral-400">(optional)</span></label>
          <input id="subject" name="subject" placeholder="Project brief, role, question…" className={field} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={label}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            placeholder="Tell me about your project, timeline and budget."
            className={cn(field, "resize-none py-1")}
          />
        </div>
        <button
          type="submit"
          disabled={status.state === "sending"}
          className={cn(buttonClass, "justify-center disabled:opacity-60")}
        >
          {status.state === "sending" ? (
            <>
              <IconLoader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
        <AnimatePresence mode="wait">
          {status.state === "sent" && (
            <motion.p
              key="sent"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400"
            >
              <IconCheck className="size-4" /> Thanks! Your message is on its way — I&apos;ll reply soon.
            </motion.p>
          )}
          {status.state === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-600 dark:text-red-400"
            >
              {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
