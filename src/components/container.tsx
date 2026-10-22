import { cn } from "@/lib/utils";
import { Scales } from "@/components/scales";

export function Container({
  children,
  className,
  scales = true,
}: {
  children: React.ReactNode;
  className?: string;
  scales?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto h-full w-full max-w-4xl bg-white dark:bg-neutral-900",
        className,
      )}
    >
      {scales && <Scales />}
      {children}
    </div>
  );
}
