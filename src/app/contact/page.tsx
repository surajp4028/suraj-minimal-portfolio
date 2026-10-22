import type { Metadata } from "next";
import { IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";
import { ContactForm } from "@/components/contact-form";
import { Heading } from "@/components/heading";
import { PageShell } from "@/components/page-shell";
import { Subheading } from "@/components/subheading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Suraj Pandey for freelance projects or full-time roles.",
};

const channels = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: IconMail },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: IconPhone },
  { label: "WhatsApp", href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`, icon: IconBrandWhatsapp },
  { label: "LinkedIn", href: profile.linkedin, icon: IconBrandLinkedin },
];

export default function ContactPage() {
  return (
    <PageShell>
      <Heading>Contact Me</Heading>
      <Subheading>
        I&apos;m open to freelance projects and full-time roles. Reach out to talk about your
        product, your store or your next dashboard.
      </Subheading>
      <div className="flex flex-wrap gap-2 px-4 pt-6">
        {channels.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-neutral-600 shadow-[var(--shadow-aceternity)] transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <Icon className="size-4" />
            {label}
          </a>
        ))}
      </div>
      <ContactForm />
    </PageShell>
  );
}
