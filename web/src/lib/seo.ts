import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/hero";

/** Public site URL — set in production via NEXT_PUBLIC_SITE_URL (e.g. https://propo.fyi). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://propo.fyi";

/** Open Graph share image — Harare skyline illustration (same asset as the home hero). */
export const OG_IMAGE_PATH = HERO_IMAGES.harare.src;
export const OG_IMAGE_ALT = `${SITE_NAME} — ${HERO_IMAGES.harare.alt}`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Site favicon — `web/public/propo logo.svg` */
export const FAVICON_PATH = "/propo logo.svg";

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
      icon: [{ url: FAVICON_PATH, type: "image/svg+xml" }],
      shortcut: FAVICON_PATH,
    },
  };
}
