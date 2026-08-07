"use client";

import { useExploreFilters } from "@/hooks/use-explore-filters";
import { SlidingTabs } from "@/components/ui/sliding-tabs";
import { DEFAULT_LENS, defaultBudgetForMode, isLandMode } from "@/lib/mode";
import { MODE_ACCENT } from "@/lib/mode-accent";
import type { ExploreMode } from "@/lib/types";
import { cn } from "@/lib/utils";

export type ExploreSurface = "suburbs" | "land";

export function exploreSurfaceForMode(mode: ExploreMode): ExploreSurface {
  return isLandMode(mode) ? "land" : "suburbs";
}

/** Page-level Explore switch: residential suburbs vs land stands. */
export function ExploreSurfaceTabs({ className }: { className?: string }) {
  const { filters, setFilters } = useExploreFilters();
  const surface = exploreSurfaceForMode(filters.mode);

  return (
    <SlidingTabs
      aria-label="Explore surface"
      value={surface}
      options={[
        { value: "suburbs", label: "Suburbs" },
        { value: "land", label: "Land" },
      ]}
      onChange={(next) => {
        if (next === "land") {
          setFilters({
            mode: "land",
            propertyType: null,
            bedroom: null,
            budgetFilterActive: false,
          });
          return;
        }
        if (isLandMode(filters.mode)) {
          setFilters({
            mode: DEFAULT_LENS,
            budget: defaultBudgetForMode(DEFAULT_LENS),
            budgetFilterActive: false,
            propertyType: null,
            bedroom: null,
          });
        }
      }}
      pillColor={
        surface === "land" ? MODE_ACCENT.land.color : MODE_ACCENT.invest.color
      }
      className={cn("w-full max-w-sm", className)}
    />
  );
}
