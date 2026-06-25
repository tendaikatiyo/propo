export function formatCurrency(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return `${value.toFixed(2)}%`;
}

export function formatNumber(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-ZW", { maximumFractionDigits: 0 }).format(value);
}

export function sanitizeLabel(value: string | null | undefined): string {
  if (value == null) return "";
  return String(value)
    .replace(/_/g, " ")
    .replace(/\b(harare|bulawayo)\b\s*/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function propertyTypeLabel(type: string): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}
