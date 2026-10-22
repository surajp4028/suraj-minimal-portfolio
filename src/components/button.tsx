import Link from "next/link";
import { cn } from "@/lib/utils";

// The template's pressed-in neutral button, usable as a link or a download.
export const buttonClass =
  "inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-700";

// Dark pill with a light sweeping across it (Aceternity "shimmer" button).
export const shimmerClass =
  "inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#0a0a0a,45%,#3f3f46,55%,#0a0a0a)] bg-[length:200%_100%] px-4 py-1.5 text-sm font-medium text-neutral-100 animate-shimmer transition-transform hover:scale-[1.02] dark:border-neutral-600 dark:bg-[linear-gradient(110deg,#f5f5f5,45%,#ffffff,55%,#f5f5f5)] dark:text-neutral-900";

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  download,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "shimmer";
  download?: string | boolean;
  external?: boolean;
}) {
  const cls = cn(variant === "shimmer" ? shimmerClass : buttonClass, className);
  if (download || external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
