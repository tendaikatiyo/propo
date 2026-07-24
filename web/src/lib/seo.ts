import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { formatCurrency, formatPricePerSqm } from "@/lib/format";
import type { LandMetric, MarketMetric } from "@/lib/types";

/** Public site URL — set in production via NEXT_PUBLIC_SITE_URL (e.g. https://propo.fyi). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://propo.fyi";

/** Open Graph / Twitter Card share image. */
export const OG_IMAGE_PATH = "/og_tag_image.webp";
export const OG_IMAGE_ALT = `${SITE_NAME} — Zimbabwe property market intelligence: yield, fair value, and suburb medians`;
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
  "Find yield and fair value in Zimbabwe — suburb market intelligence";

export const HOME_PAGE_DESCRIPTION =
  "Explore rental yield, opportunity scores, and fair-value signals across Zimbabwe suburbs. Continuously updated property market database for investors.";

export const EXPLORE_PAGE_TITLE = "Explore yield markets — compare suburbs by budget";

export const EXPLORE_PAGE_DESCRIPTION =
  "Compare Zimbabwe suburbs by purchase budget, yield, and opportunity. Filter by property type and city.";

export function suburbPageTitle(suburb: string, city: string): string {
  return `${suburb}, ${city} — house prices & affordability`;
}

export function suburbPageDescription(
  market: MarketMetric,
  suburbLabel: string,
  medianRent: number | null,
  medianSale: number | null,
  landMarket: LandMetric | null
): string {
  const landLine =
    landMarket?.median_price_per_sqm != null
      ? ` Land stands from ${formatPricePerSqm(landMarket.median_price_per_sqm)} per sqm.`
      : "";

  return (
    `Compare house prices in ${suburbLabel}, ${market.city}. ` +
    `Median rent ${formatCurrency(medianRent)}, median sale ${formatCurrency(medianSale)}.${landLine} ` +
    `Yields, price trends, and affordability signals.`
  );
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
