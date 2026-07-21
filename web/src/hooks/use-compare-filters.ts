"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useGlobalLens } from "@/components/providers/lens-provider";
import { normalizeCompareFilters, normalizePropertyType } from "@/lib/constants";
import { DEFAULT_LENS, modeSearchParam, parseExploreMode } from "@/lib/mode";
import type { CompareFilters, PropertyType } from "@/lib/types";

const DEFAULT_COMPARE_FILTERS: CompareFilters = {
  mode: DEFAULT_LENS,
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

  const modeParam = modeSearchParam(filters.mode);
  if (modeParam) params.set("mode", modeParam);
  if (filters.propertyType) params.set("type", filters.propertyType);
  if (filters.bedroom != null) params.set("bedroom", String(filters.bedroom));

  return params;
}

export function useCompareFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { lens: globalLens } = useGlobalLens();

  const filters = useMemo<CompareFilters>(() => {
    const fromUrl = searchParams.get("mode");
    const mode = fromUrl ? parseExploreMode(fromUrl) : globalLens;
    return normalizeCompareFilters({
      mode,
      propertyType: parsePropertyType(searchParams.get("type")),
      bedroom: searchParams.has("bedroom") ? Number(searchParams.get("bedroom")) : null,
    });
  }, [searchParams, globalLens]);

  const setFilters = useCallback(
    (patch: Partial<CompareFilters>) => {
      const { mode: _mode, ...rest } = patch;
      const next = normalizeCompareFilters({ ...filters, ...rest });
      const params = buildCompareSearchParams(next);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [filters, pathname, router]
  );

  const resetFilters = useCallback(() => {
    const params = buildCompareSearchParams({
      mode: filters.mode,
      propertyType: null,
      bedroom: null,
    });
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [filters.mode, pathname, router]);

  return { filters, setFilters, resetFilters, defaultFilters: DEFAULT_COMPARE_FILTERS };
}
