import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { formatCurrency, formatPercent, formatPricePerSqm } from "@/lib/format";
import type { LandMetric, MarketMetric } from "@/lib/types";

/** Public site URL — set in production via NEXT_PUBLIC_SITE_URL (e.g. https://propo.fyi). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://propo.fyi";

/** Open Graph / Twitter Card share image. */
export const OG_IMAGE_PATH = "/og_tag_image.webp";
export const OG_IMAGE_ALT = `${SITE_NAME} — Zimbabwe property market intelligence: suburb rent, sale & land medians`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Production logomark — navbar and JSON-LD. */
export const LOGOMARK_PATH = "/main_logomark.png";

/** Dev-only favicon so local tabs are visually distinct from production. */
export const LOCALHOST_LOGOMARK_PATH = "/localhost_logomark.png";

/** Favicon path — purple mark locally, yellow mark in production builds. */
export const FAVICON_PATH =
  process.env.NODE_ENV === "development" ? LOCALHOST_LOGOMARK_PATH : LOGOMARK_PATH;

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}` || SITE_URL;
}

export function ogImage(
  overrides: { path?: string; alt?: string } = {}
): { url: string; width: number; height: number; alt: string }[] {
  const path = overrides.path ?? OG_IMAGE_PATH;
  return [
    {
      url: absoluteUrl(path),
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: overrides.alt ?? OG_IMAGE_ALT,
    },
  ];
}

export interface PageSeoOptions {
  title?: string;
  description?: string;
  /** Site-relative path, e.g. `/explore` */
  path?: string;
  noIndex?: boolean;
  ogImage?: { path?: string; alt?: string };
  type?: "website" | "article";
}

/** Shared Open Graph + Twitter Card metadata for a page. */
export function buildPageMetadata(options: PageSeoOptions = {}): Metadata {
  const title = options.title ?? SITE_NAME;
  const description = options.description ?? SITE_DESCRIPTION;
  const canonical = absoluteUrl(options.path ?? "/");
  const images = ogImage(options.ogImage);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_ZW",
      type: options.type ?? "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => image.url),
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const HOME_PAGE_TITLE =
  "Look up a suburb — Zimbabwe property market intelligence";

export const HOME_PAGE_DESCRIPTION =
  "Search any Zimbabwe suburb for rent, sale, and land medians, yields, and trends. Continuously updated property market database.";

export const EXPLORE_PAGE_TITLE = "Explore suburbs & land — Zimbabwe property directory";

export const EXPLORE_PAGE_DESCRIPTION =
  "Browse Zimbabwe suburbs by city, or filter land stands by $/sqm. Open a suburb profile for rent, sale, land, and yield.";

export function suburbPageTitle(suburb: string, city: string): string {
  return `${suburb}, ${city} — rent, sale & land prices`;
}

export function suburbPageDescription(
  market: MarketMetric,
  suburbLabel: string,
  medianRent: number | null,
  medianSale: number | null,
  landMarket: LandMetric | null
): string {
  const rentLine = medianRent != null ? `Median asking rent is ${formatCurrency(medianRent)}.` : "";
  const saleLine = medianSale != null ? `Median asking sale price is ${formatCurrency(medianSale)}.` : "";
  const yieldLine =
    market.yield_percent != null && !Number.isNaN(market.yield_percent)
      ? `Estimated gross rental yield is ${formatPercent(market.yield_percent)}.`
      : "";
  const landLine =
    landMarket?.median_price_per_sqm != null
      ? `Land stands average ${formatPricePerSqm(landMarket.median_price_per_sqm)} per sqm.`
      : "";

  return [
    `Market profile for ${suburbLabel}, ${market.city}.`,
    rentLine,
    saleLine,
    yieldLine,
    landLine,
    "Figures are statistical summaries of active asking prices from major Zimbabwe property portals, refreshed from daily snapshots.",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Plain-language suburb summary for crawlers, LLMs, and accessibility (SSR on profile pages). */
export function suburbMarketSnapshotText({
  suburbLabel,
  city,
  medianRent,
  medianSale,
  yieldPercent,
  landMarket,
  rentListingCount,
  saleListingCount,
  specLabel,
}: {
  suburbLabel: string;
  city: string;
  medianRent: number | null;
  medianSale: number | null;
  yieldPercent: number | null | undefined;
  landMarket: LandMetric | null;
  rentListingCount: number;
  saleListingCount: number;
  specLabel?: string | null;
}): string {
  const parts: string[] = [
    `Market snapshot for ${suburbLabel}, ${city}, Zimbabwe from Propo (${SITE_DESCRIPTION}).`,
  ];

  if (specLabel) {
    parts.push(`Segment: ${specLabel} (portal listing filters).`);
  }

  parts.push(
    `Median asking rent is ${formatCurrency(medianRent)} (${rentListingCount} rental listing${rentListingCount === 1 ? "" : "s"} in sample). ` +
      `Median asking sale price is ${formatCurrency(medianSale)} (${saleListingCount} sale listing${saleListingCount === 1 ? "" : "s"} in sample).`
  );

  if (yieldPercent != null && !Number.isNaN(yieldPercent)) {
    parts.push(`Estimated gross rental yield is ${formatPercent(yieldPercent)}.`);
  }

  const landSqm = landMarket?.median_price_per_sqm;
  const landCount = landMarket?.land_count ?? 0;
  if (landSqm != null && landCount > 0) {
    parts.push(
      `Land stands: median ${formatPricePerSqm(landSqm)} per sqm (${landCount} land listing${landCount === 1 ? "" : "s"}).`
    );
  }

  parts.push(
    "Figures are statistical summaries of advertised asking prices on major Zimbabwe property portals—not closed transaction prices or formal valuations. See /methodology for limits and update cadence."
  );

  return parts.join(" ");
}

/** Root layout defaults — merge with `title.template` in layout.tsx. */
export function rootMetadata(): Metadata {
  return {
    ...buildPageMetadata(),
    title: {
      default: SITE_NAME,
      template: `%s · ${SITE_NAME}`,
    },
    applicationName: SITE_NAME,
    category: "real estate",
    icons: {
      icon: [{ url: FAVICON_PATH, type: "image/png" }],
      shortcut: FAVICON_PATH,
      apple: FAVICON_PATH,
    },
  };
}
