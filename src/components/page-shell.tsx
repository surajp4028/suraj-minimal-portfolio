import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

// Standard page frame: full-height white column with the side rails.
export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container
        className={cn("min-h-screen px-4 pt-20 pb-10 md:px-8", className)}
      >
        {children}
      </Container>
    </div>
  );
}
