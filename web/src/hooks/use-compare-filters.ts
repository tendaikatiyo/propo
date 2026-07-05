"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useStoredLens } from "@/hooks/use-lens";
import { normalizeCompareFilters, normalizePropertyType } from "@/lib/constants";
import { LENS_STORAGE_KEY } from "@/lib/lens";
import { parseExploreMode } from "@/lib/mode";
import type { CompareFilters, PropertyType } from "@/lib/types";

const DEFAULT_COMPARE_FILTERS: CompareFilters = {
  mode: "rent",
  propertyType: null,
  bedroom: null,
};

function parsePropertyType(value: string | null): PropertyType | null {
  if (!value) return null;
  return normalizePropertyType(value);
}

function buildCompareSearchParams(
  filters: CompareFilters,
  base?: URLSearchParams
): URLSearchParams {
  const params = new URLSearchParams(base?.toString() ?? "");
  params.delete("mode");
  params.delete("type");
  params.delete("bedroom");

  if (filters.mode !== "rent") params.set("mode", filters.mode);
  if (filters.propertyType) params.set("type", filters.propertyType);
  if (filters.bedroom != null) params.set("bedroom", String(filters.bedroom));

  return params;
}

export function useCompareFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const storedLens = useStoredLens("rent");
  const syncedStoredLens = useRef(false);

  const filters = useMemo<CompareFilters>(() => {
    const fromUrl = searchParams.get("mode");
    const mode = fromUrl ? parseExploreMode(fromUrl) : storedLens;
    return normalizeCompareFilters({
      mode,
      propertyType: parsePropertyType(searchParams.get("type")),
      bedroom: searchParams.has("bedroom") ? Number(searchParams.get("bedroom")) : null,
    });
  }, [searchParams, storedLens]);

  useEffect(() => {
    if (syncedStoredLens.current) return;
    if (searchParams.get("mode")) return;
    if (storedLens === "rent") return;

    syncedStoredLens.current = true;
    const params = buildCompareSearchParams({
      ...DEFAULT_COMPARE_FILTERS,
      mode: storedLens,
    });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams, storedLens]);

  const setFilters = useCallback(
    (patch: Partial<CompareFilters>) => {
      const next = normalizeCompareFilters({ ...filters, ...patch });
      if (typeof window !== "undefined") {
        window.localStorage.setItem(LENS_STORAGE_KEY, next.mode);
      }
      const params = buildCompareSearchParams(next);
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
