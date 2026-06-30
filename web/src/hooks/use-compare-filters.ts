"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { normalizeCompareFilters, normalizePropertyType } from "@/lib/constants";
import type { CompareFilters, ExploreMode, PropertyType } from "@/lib/types";

const DEFAULT_COMPARE_FILTERS: CompareFilters = {
  mode: "rent",
  propertyType: null,
  bedroom: null,
};

function parseMode(value: string | null): ExploreMode {
  return value === "buy" ? "buy" : "rent";
}

function parsePropertyType(value: string | null): PropertyType | null {
  if (!value) return null;
  return normalizePropertyType(value);
}

export function useCompareFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo<CompareFilters>(() => {
    return normalizeCompareFilters({
      mode: parseMode(searchParams.get("mode")),
      propertyType: parsePropertyType(searchParams.get("type")),
      bedroom: searchParams.has("bedroom") ? Number(searchParams.get("bedroom")) : null,
    });
  }, [searchParams]);

  const setFilters = useCallback(
    (patch: Partial<CompareFilters>) => {
      const next = normalizeCompareFilters({ ...filters, ...patch });
      const params = new URLSearchParams();

      if (next.mode !== "rent") params.set("mode", next.mode);
      if (next.propertyType) params.set("type", next.propertyType);
      if (next.bedroom != null) params.set("bedroom", String(next.bedroom));

      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [filters, pathname, router]
  );

  const resetFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  return { filters, setFilters, resetFilters, defaultFilters: DEFAULT_COMPARE_FILTERS };
}
