import type { MetadataRoute } from "next";

import { fetchCities, fetchMarketMetrics } from "@/lib/data-server";
import { absoluteUrl } from "@/lib/seo";
import { toSlug } from "@/lib/slug";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] =
  [
    { path: "/", priority: 1, changeFrequency: "daily" },
    { path: "/explore", priority: 0.9, changeFrequency: "daily" },
    { path: "/cities", priority: 0.85, changeFrequency: "weekly" },
    { path: "/rankings", priority: 0.85, changeFrequency: "daily" },
    { path: "/compare", priority: 0.6, changeFrequency: "weekly" },
    { path: "/methodology", priority: 0.5, changeFrequency: "monthly" },
    { path: "/developers", priority: 0.4, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cities, markets] = await Promise.all([fetchCities(), fetchMarketMetrics()]);
  const now = new Date();

  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  for (const city of cities) {
    const citySlug = toSlug(city.city);
    entries.push({
      url: absoluteUrl(`/cities/${citySlug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const market of markets) {
    entries.push({
      url: absoluteUrl(`/cities/${toSlug(market.city)}/${toSlug(market.suburb)}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    });
  }

  return entries;
}

export const revalidate = 3600;
