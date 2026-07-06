"use client";

import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { useGlobalLens } from "@/components/providers/lens-provider";
import { cn } from "@/lib/utils";
export function GlobalLensSwitcher({
  showLabel = true,
  compact = false,
  comfortable = false,
  /** Geist Sans heading for sheet/drawer; default is caption label */
  labelVariant = "caption",
  className,
}: {
  showLabel?: boolean;
  /** Shorter helper for mobile sheets */
  compact?: boolean;
  /** Larger segmented control for mobile sheets */
  comfortable?: boolean;
  labelVariant?: "caption" | "display";
  className?: string;
}) {
  const { lens, setLens } = useGlobalLens();

  return (
    <div className={cn("space-y-3", comfortable && "space-y-4", className)}>
      {showLabel ? (
        <p
          className={cn(
            labelVariant === "display"
              ? "font-heading text-xl font-medium tracking-[-0.02em] text-foreground"
              : "caption-label"
          )}
        >
          Focus
        </p>
      ) : null}
      <ExploreModeToggle
        variant="segmented"
        comfortable={comfortable}
        value={lens}
        onChange={(mode) => setLens(mode, { source: "global" })}
      />
      <p
        className={cn(
          "text-xs leading-relaxed text-muted-foreground",
          comfortable && "text-sm"
        )}
      >
        {compact
          ? "Rent, buy, land, and invest views share this setting."
          : "Applies across explore, cities, compare, and rankings."}
      </p>
    </div>
  );
}
