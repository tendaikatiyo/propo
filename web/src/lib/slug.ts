import { modeSearchParam } from "@/lib/mode";
import type { ExploreMode } from "@/lib/types";

export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function fromSlug(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function segmentQueryString(query?: {
  type?: string | null;
  bedroom?: number | null;
  mode?: string | null;
}): string {
  if (!query) return "";
  const modeParam =
    query.mode != null ? modeSearchParam(query.mode as ExploreMode) : null;
  if (!query.type && query.bedroom == null && !modeParam) return "";
  const params = new URLSearchParams();
  if (query.type) params.set("type", query.type);
  if (query.bedroom != null) params.set("bedroom", String(query.bedroom));
  if (modeParam) params.set("mode", modeParam);
  return params.toString();
}

export function suburbPath(
  city: string,
  suburb: string,
  query?: { type?: string | null; bedroom?: number | null; mode?: string | null }
): string {
  const base = `/cities/${toSlug(city)}/${toSlug(suburb)}`;
  const qs = segmentQueryString(query);
  return qs ? `${base}?${qs}` : base;
}

function reportQueryString(query?: {
  type?: string | null;
  bedroom?: number | null;
  scope?: string | null;
}): string {
  if (!query?.type && query?.bedroom == null && !query?.scope) return "";
  const params = new URLSearchParams();
  if (query.type) params.set("type", query.type);
  if (query.bedroom != null) params.set("bedroom", String(query.bedroom));
  if (query.scope && query.scope !== "full") params.set("scope", query.scope);
  return params.toString();
}

export function suburbReportPath(
  city: string,
  suburb: string,
  query?: {
    type?: string | null;
    bedroom?: number | null;
    scope?: "full" | "rent" | null;
  }
): string {
  const base = `/cities/${toSlug(city)}/${toSlug(suburb)}/report`;
  const qs = reportQueryString(query);
  return qs ? `${base}?${qs}` : base;
}

export function cityPath(
  city: string,
  query?: { mode?: string | null }
): string {
  const base = `/cities/${toSlug(city)}`;
  const modeParam =
    query?.mode != null ? modeSearchParam(query.mode as ExploreMode) : null;
  if (!modeParam) return base;
  return `${base}?mode=${encodeURIComponent(modeParam)}`;
}

export function matchesSlug(actual: string, slug: string): boolean {
  return toSlug(actual) === slug;
}

/** Compare index — omit `mode` when it is the product default (invest). */
export function comparePath(mode?: ExploreMode | null): string {
  const modeParam = mode != null ? modeSearchParam(mode) : null;
  return modeParam ? `/compare?mode=${encodeURIComponent(modeParam)}` : "/compare";
}

/** Cities index — omit `mode` when it is the product default (invest). */
export function citiesIndexPath(mode?: ExploreMode | null): string {
  const modeParam = mode != null ? modeSearchParam(mode) : null;
  return modeParam ? `/cities?mode=${encodeURIComponent(modeParam)}` : "/cities";
}
