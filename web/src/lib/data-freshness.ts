export function formatDataUpdatedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Unknown";

  return new Intl.DateTimeFormat("en-ZW", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function formatDataFreshness(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Unknown";

  const when = formatDataUpdatedAt(iso);
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return `Updated today · ${when}`;
  if (diffDays === 1) return `Updated yesterday · ${when}`;
  if (diffDays < 7) return `Updated ${diffDays}d ago · ${when}`;
  if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)}w ago · ${when}`;

  return `Updated · ${when}`;
}
