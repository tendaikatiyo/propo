"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_CITY,
  DEFAULT_RENT_BUDGET,
  PROPERTY_TYPES,
} from "@/lib/constants";
import { budgetForMode } from "@/lib/explore";
import type { ExploreFilters, ExploreMode, PropertyType } from "@/lib/types";

const DEFAULT_FILTERS: ExploreFilters = {
  mode: "rent",
  budget: DEFAULT_RENT_BUDGET,
  city: DEFAULT_CITY,
  propertyType: null,
  bedroom: null,
  includeLowConfidence: false,
};

function parsePropertyType(value: string | null): PropertyType | null {
  if (!value) return null;
  return PROPERTY_TYPES.includes(value as PropertyType) ? (value as PropertyType) : null;
}

function parseMode(value: string | null): ExploreMode {
  return value === "buy" ? "buy" : "rent";
}

export function useExploreFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo<ExploreFilters>(() => {
    const mode = parseMode(searchParams.get("mode"));
    const budgetParam = Number(searchParams.get("budget"));
    const defaultBudget = mode === "rent" ? DEFAULT_RENT_BUDGET : DEFAULT_BUY_BUDGET;
    const cityParam = searchParams.get("city");
    const rawBudget =
      Number.isFinite(budgetParam) && budgetParam > 0 ? budgetParam : defaultBudget;

    return {
      mode,
      budget: budgetForMode(mode, rawBudget),
      city: cityParam === "all" ? null : cityParam || DEFAULT_CITY,
      propertyType: parsePropertyType(searchParams.get("type")),
      bedroom: searchParams.has("bedroom") ? Number(searchParams.get("bedroom")) : null,
      includeLowConfidence: searchParams.get("lowconf") === "1",
    };
  }, [searchParams]);

  const setFilters = useCallback(
    (patch: Partial<ExploreFilters>, options?: { targetPath?: string }) => {
      const target = options?.targetPath ?? pathname;
      const next = { ...filters, ...patch };
      if (patch.mode !== undefined && patch.mode !== filters.mode && patch.budget === undefined) {
        next.budget = budgetForMode(patch.mode, filters.budget);
      }
      const params = new URLSearchParams();

      if (next.mode !== "rent") params.set("mode", next.mode);
      if (next.budget !== (next.mode === "rent" ? DEFAULT_RENT_BUDGET : DEFAULT_BUY_BUDGET)) {
        params.set("budget", String(next.budget));
      }
      if (next.city) {
        params.set("city", next.city);
      } else {
        params.set("city", "all");
      }
      if (next.propertyType) params.set("type", next.propertyType);
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));
      if (next.includeLowConfidence) params.set("lowconf", "1");

      const qs = params.toString();
      router.replace(qs ? `${target}?${qs}` : target, { scroll: false });
    },
    [filters, pathname, router]
  );

  const resetFilters = useCallback(
    (options?: { targetPath?: string }) => {
      const target = options?.targetPath ?? pathname;
      router.replace(`${target}?city=${DEFAULT_CITY}`, { scroll: false });
    },
    [pathname, router]
  );

  const exploreHref = useCallback(
    (patch?: Partial<ExploreFilters>) => {
      const next = { ...DEFAULT_FILTERS, ...filters, ...patch };
      const params = new URLSearchParams();
      params.set("mode", next.mode);
      params.set("budget", String(next.budget));
      if (next.city) params.set("city", next.city);
      else params.set("city", "all");
      if (next.propertyType) params.set("type", next.propertyType);
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));
      if (next.includeLowConfidence) params.set("lowconf", "1");
      return `/explore?${params.toString()}`;
    },
    [filters]
  );

  return { filters, setFilters, resetFilters, exploreHref };
}
