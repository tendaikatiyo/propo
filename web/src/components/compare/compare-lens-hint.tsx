"use client";

import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { isInvestMode } from "@/lib/mode";
import type { CompareFilters, ExploreMode } from "@/lib/types";

export function pinsPinnedFromOtherLens(
  pins: { pinnedFromMode?: ExploreMode }[],
  activeLens: ExploreMode
): boolean {
  return pins.some(
    (pin) => pin.pinnedFromMode != null && pin.pinnedFromMode !== activeLens
  );
}

export function compareLensHint(
  filters: CompareFilters,
  pins: { pinnedFromMode?: ExploreMode }[]
): string | null {
  if (isInvestMode(filters.mode)) return null;
  if (!pinsPinnedFromOtherLens(pins, filters.mode)) return null;

  if (filters.mode === "rent") {
    return "Some pinned suburbs were saved from another view. Yield and sale metrics follow the full suburb profile.";
  }
  if (filters.mode === "buy") {
    return "Some pinned suburbs were saved from another view. Yield and rent metrics follow the full suburb profile.";
  }
  return "Pinned suburbs may have been saved from another view — metrics follow the full suburb profile.";
}

export function CompareLensHint({ filters }: { filters: CompareFilters }) {
  const { pins } = usePinnedMarkets();
  const message = compareLensHint(filters, pins);
  if (!message) return null;

  return (
    <p className="rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
      {message}
    </p>
  );
}
