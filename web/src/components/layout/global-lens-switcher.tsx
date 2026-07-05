"use client";

import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { useGlobalLens } from "@/components/providers/lens-provider";
export function GlobalLensSwitcher({
  showLabel = true,
  compact = false,
  className,
}: {
  showLabel?: boolean;
  /** Shorter helper for mobile sheets */
  compact?: boolean;
  className?: string;
}) {
  const { lens, setLens } = useGlobalLens();

  return (
    <div className={className}>
      {showLabel ? <p className="caption-label mb-2">Focus</p> : null}
      <ExploreModeToggle
        variant="segmented"
        value={lens}
        onChange={(mode) => setLens(mode, { source: "global" })}
      />
      <p className="mt-2 text-xs text-muted-foreground">
        {compact
          ? "Rent, buy, land, and invest views share this setting."
          : "Applies across explore, cities, compare, and rankings."}
      </p>
    </div>
  );
}
