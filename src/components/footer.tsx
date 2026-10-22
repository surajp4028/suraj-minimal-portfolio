import { IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconWorld } from "@tabler/icons-react";
import { Container } from "@/components/container";
import { profile } from "@/data/profile";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: IconBrandLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: IconMail },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    icon: IconBrandWhatsapp,
  },
  { label: "Vishnu IT Solutions", href: profile.website, icon: IconWorld },
];

export function Footer() {
  return (
    <Container
      scales={false}
      className="flex items-center justify-between border-t border-neutral-100 px-10 py-3 print:hidden dark:border-neutral-800"
    >
      <p className="text-xs text-neutral-500">
        Built with love by {profile.name}
      </p>
      <div className="flex items-center justify-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    </Container>
  );
}
