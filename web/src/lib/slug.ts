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

export function suburbPath(city: string, suburb: string): string {
  return `/cities/${toSlug(city)}/${toSlug(suburb)}`;
}

export function cityPath(city: string): string {
  return `/cities/${toSlug(city)}`;
}

export function matchesSlug(actual: string, slug: string): boolean {
  return toSlug(actual) === slug;
}
