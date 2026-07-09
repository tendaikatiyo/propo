"use client";

import { useEffect, useMemo, useState } from "react";

import { useCities, useMarketMetrics } from "@/hooks/use-market-data";
import { sortCitiesByMarketSize, sortMarketsByActivity } from "@/lib/geo";
import { formatLocationLabel } from "@/lib/format";
import type { ExploreMode } from "@/lib/types";
import { matchesSlug } from "@/lib/slug";

export function useContributionLocation(
  initialCitySlug?: string,
  initialSuburbSlug?: string,
  sortMode: ExploreMode = "rent"
) {
  const { data: markets = [], isLoading: marketsLoading } = useMarketMetrics();
  const { data: cityMetrics = [], isLoading: citiesLoading } = useCities();
  const isLoading = marketsLoading || citiesLoading;

  const cities = useMemo(
    () => sortCitiesByMarketSize(cityMetrics, sortMode).map((item) => item.city),
    [cityMetrics, sortMode]
  );

  const [city, setCity] = useState<string | null>(null);
  const [suburb, setSuburb] = useState<string | null>(null);
  const [prefilled, setPrefilled] = useState(false);

  const cityOptions = useMemo(
    () =>
      cities.map((item) => ({
        value: item,
        label: formatLocationLabel(item),
      })),
    [cities]
  );

  const suburbs = useMemo(() => {
    if (!city) return [];
    return sortMarketsByActivity(
      markets.filter((market) => market.city === city),
      sortMode
    ).map((market) => market.suburb);
  }, [city, markets, sortMode]);

  const suburbOptions = useMemo(
    () =>
      suburbs.map((item) => ({
        value: item,
        label: formatLocationLabel(item),
      })),
    [suburbs]
  );

  useEffect(() => {
    if (prefilled || !markets.length) return;
    if (!initialCitySlug) return;

    const cityMatch = cities.find((item) => matchesSlug(item, initialCitySlug));
    if (!cityMatch) return;
    setCity(cityMatch);

    if (initialSuburbSlug) {
      const suburbMatch = markets.find(
        (market) =>
          matchesSlug(market.city, initialCitySlug) &&
          matchesSlug(market.suburb, initialSuburbSlug)
      );
      if (suburbMatch) {
        setSuburb(suburbMatch.suburb);
      }
    }
    setPrefilled(true);
  }, [cities, initialCitySlug, initialSuburbSlug, markets, prefilled]);

  return {
    city,
    setCity,
    suburb,
    setSuburb,
    cityOptions,
    suburbOptions,
    isLoading,
  };
}
