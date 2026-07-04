import { cn } from "@/lib/utils";

export function BetaBadge({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.08em] uppercase",
        onDark
          ? "border-white/35 bg-white/15 text-white"
          : "border-border/80 bg-muted/70 text-muted-foreground",
        className
      )}
    >
      Beta
    </span>
  );
}
