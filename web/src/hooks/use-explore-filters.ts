"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_RENT_BUDGET,
  PROPERTY_TYPES,
} from "@/lib/constants";
import type { ExploreFilters, ExploreMode, PropertyType } from "@/lib/types";

const DEFAULT_FILTERS: ExploreFilters = {
  mode: "rent",
  budget: DEFAULT_RENT_BUDGET,
  city: null,
  propertyTypes: [],
  bedroom: null,
  includeLowConfidence: false,
};

function parsePropertyTypes(value: string | null): PropertyType[] {
  if (!value) return [];
  return value
    .split(",")
    .filter((t): t is PropertyType => PROPERTY_TYPES.includes(t as PropertyType));
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

    return {
      mode,
      budget: Number.isFinite(budgetParam) && budgetParam > 0 ? budgetParam : defaultBudget,
      city: searchParams.get("city") || null,
      propertyTypes: parsePropertyTypes(searchParams.get("types")),
      bedroom: searchParams.has("bedroom") ? Number(searchParams.get("bedroom")) : null,
      includeLowConfidence: searchParams.get("lowconf") === "1",
    };
  }, [searchParams]);

  const setFilters = useCallback(
    (patch: Partial<ExploreFilters>) => {
      const next = { ...filters, ...patch };
      const params = new URLSearchParams();

      if (next.mode !== "rent") params.set("mode", next.mode);
      if (next.budget !== (next.mode === "rent" ? DEFAULT_RENT_BUDGET : DEFAULT_BUY_BUDGET)) {
        params.set("budget", String(next.budget));
      }
      if (next.city) params.set("city", next.city);
      if (next.propertyTypes.length) params.set("types", next.propertyTypes.join(","));
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));
      if (next.includeLowConfidence) params.set("lowconf", "1");

      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [filters, pathname, router]
  );

  const resetFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const exploreHref = useCallback(
    (patch?: Partial<ExploreFilters>) => {
      const next = { ...DEFAULT_FILTERS, ...filters, ...patch };
      const params = new URLSearchParams();
      params.set("mode", next.mode);
      params.set("budget", String(next.budget));
      if (next.city) params.set("city", next.city);
      if (next.propertyTypes.length) params.set("types", next.propertyTypes.join(","));
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));
      if (next.includeLowConfidence) params.set("lowconf", "1");
      return `/explore?${params.toString()}`;
    },
    [filters]
  );

  return { filters, setFilters, resetFilters, exploreHref };
}
