"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useGlobalLens } from "@/components/providers/lens-provider";
import {
  normalizeExploreFilters,
  normalizePropertyType,
} from "@/lib/constants";
import { trackExploreFilterChange } from "@/lib/analytics/track";
import { budgetForMode } from "@/lib/explore";
import {
  DEFAULT_LENS,
  defaultBudgetForMode,
  isLandMode,
  modeSearchParam,
  parseExploreMode,
} from "@/lib/mode";
import type { ExploreFilters, PropertyType } from "@/lib/types";

/** Filters off by default: all cities, all confidence, no land budget gate. */
const DEFAULT_FILTERS: ExploreFilters = {
  mode: DEFAULT_LENS,
  budget: defaultBudgetForMode(DEFAULT_LENS),
  budgetFilterActive: false,
  city: null,
  propertyType: null,
  bedroom: null,
  includeLowConfidence: true,
  hideSuburbMedianFallback: true,
};

function parsePropertyType(value: string | null): PropertyType | null {
  if (!value) return null;
  return normalizePropertyType(value);
}

export function useExploreFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { lens: globalLens } = useGlobalLens();

  const filters = useMemo<ExploreFilters>(() => {
    const fromUrl = searchParams.get("mode");
    const mode = fromUrl ? parseExploreMode(fromUrl) : globalLens;
    const budgetParam = Number(searchParams.get("budget"));
    const defaultBudget = defaultBudgetForMode(mode);
    const cityParam = searchParams.get("city");
    const hasBudgetParam = searchParams.has("budget");
    const rawBudget =
      Number.isFinite(budgetParam) && budgetParam > 0 ? budgetParam : defaultBudget;
    const lowconf = searchParams.get("lowconf");

    return normalizeExploreFilters({
      mode,
      budget: budgetForMode(mode, rawBudget),
      // Land: budget only applies when explicitly set in the URL.
      budgetFilterActive: isLandMode(mode) && hasBudgetParam,
      // Missing city → all cities (discovery). Explicit `city=Harare` still scopes.
      city: cityParam === "all" || !cityParam ? null : cityParam,
      propertyType: parsePropertyType(searchParams.get("type")),
      bedroom: searchParams.has("bedroom") ? Number(searchParams.get("bedroom")) : null,
      // Default on (show thin markets). `lowconf=0` turns confidence filtering on.
      includeLowConfidence: lowconf !== "0",
      hideSuburbMedianFallback: searchParams.get("showfallback") !== "1",
    });
  }, [searchParams, globalLens]);

  const setFilters = useCallback(
    (patch: Partial<ExploreFilters>, options?: { targetPath?: string }) => {
      const target = options?.targetPath ?? pathname;
      const next = normalizeExploreFilters({ ...filters, ...patch });
      if (patch.mode !== undefined && patch.mode !== filters.mode && patch.budget === undefined) {
        next.budget = budgetForMode(patch.mode, filters.budget);
      }
      if (patch.budget !== undefined && isLandMode(next.mode) && patch.budgetFilterActive === undefined) {
        next.budgetFilterActive = true;
      }
      const params = new URLSearchParams();

      const modeParam = modeSearchParam(next.mode);
      if (modeParam) params.set("mode", modeParam);
      if (isLandMode(next.mode) && next.budgetFilterActive) {
        params.set("budget", String(next.budget));
      }
      if (next.city) {
        params.set("city", next.city);
      } else {
        params.set("city", "all");
      }
      if (next.propertyType) params.set("type", next.propertyType);
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));
      if (!next.includeLowConfidence) params.set("lowconf", "0");
      if (!next.hideSuburbMedianFallback) params.set("showfallback", "1");

      const qs = params.toString();
      router.replace(qs ? `${target}?${qs}` : target, { scroll: false });
      if (target === "/explore" || target.endsWith("/explore")) {
        trackExploreFilterChange(next);
      }
    },
    [filters, pathname, router]
  );

  const resetFilters = useCallback(
    (options?: { targetPath?: string }) => {
      const target = options?.targetPath ?? pathname;
      const mode = filters.mode;
      const next = normalizeExploreFilters({
        ...DEFAULT_FILTERS,
        mode,
        budget: defaultBudgetForMode(mode),
        budgetFilterActive: false,
      });
      const params = new URLSearchParams();
      const modeParam = modeSearchParam(next.mode);
      if (modeParam) params.set("mode", modeParam);
      params.set("city", "all");
      const qs = params.toString();
      router.replace(qs ? `${target}?${qs}` : `${target}?city=all`, { scroll: false });
      if (target === "/explore" || target.endsWith("/explore")) {
        trackExploreFilterChange(next);
      }
    },
    [filters.mode, pathname, router]
  );

  const exploreHref = useCallback(
    (patch?: Partial<ExploreFilters>) => {
      const next = normalizeExploreFilters({ ...DEFAULT_FILTERS, ...filters, ...patch });
      const params = new URLSearchParams();
      const modeParam = modeSearchParam(next.mode);
      if (modeParam) params.set("mode", modeParam);
      if (isLandMode(next.mode) && next.budgetFilterActive) {
        params.set("budget", String(next.budget));
      }
      params.set("city", next.city ?? "all");
      if (next.propertyType) params.set("type", next.propertyType);
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));
      if (!next.includeLowConfidence) params.set("lowconf", "0");
      if (!next.hideSuburbMedianFallback) params.set("showfallback", "1");
      return `/explore?${params.toString()}`;
    },
    [filters]
  );

  return { filters, setFilters, resetFilters, exploreHref };
}
