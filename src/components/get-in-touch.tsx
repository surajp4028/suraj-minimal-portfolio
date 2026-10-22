"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

export const PREFILL_KEY = "contact-prefill-email";

export function GetInTouch() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div className="my-4 px-4 py-6">
      <SectionHeading>Get in touch</SectionHeading>
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
        I&apos;m currently open to new opportunities and freelance projects. Whether you have a
        question or want to say hi, hit that button.
      </p>
      <form
        className="relative mt-4 max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          // Hand the email to the contact form without putting it in the URL.
          try {
            sessionStorage.setItem(PREFILL_KEY, email);
          } catch {}
          router.push("/contact");
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Your email"
          className="w-full rounded-lg bg-white px-4 py-3 pr-[130px] text-sm text-neutral-700 shadow-[var(--shadow-aceternity)] focus:ring-2 focus:ring-neutral-300 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-neutral-600"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-700"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
}
