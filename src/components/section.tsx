import { cn } from "@/lib/utils";

// Full-bleed band with hairline borders and a soft inset shadow.
export function InsetSection({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  return (
    <Tag
      className={cn(
        "shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
