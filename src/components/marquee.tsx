import { cn } from "@/lib/utils";

// CSS-only infinite marquee: the content is rendered twice and the track
// slides by half its width. Pauses on hover.
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <div
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        className={cn(
          "flex w-max animate-marquee py-4 group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0">{children}</div>
        <div aria-hidden className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
