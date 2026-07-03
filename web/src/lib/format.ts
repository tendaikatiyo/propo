export function formatCurrency(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPricePerSqm(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return `${new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: value < 10 ? 2 : 0,
  }).format(value)}/sqm`;
}

export function formatLandSize(
  landSizeSqm: number | null | undefined,
  landSize?: number | null,
  landSizeUnit?: string | null
): string | null {
  if (landSizeSqm != null && landSizeSqm > 0) {
    return `${new Intl.NumberFormat("en-ZW", { maximumFractionDigits: 0 }).format(landSizeSqm)} sqm`;
  }
  if (landSize != null && landSize > 0 && landSizeUnit) {
    const unit = String(landSizeUnit).toLowerCase();
    const label = unit === "ha" ? "ha" : unit.startsWith("acre") ? "acres" : unit;
    return `${new Intl.NumberFormat("en-ZW", { maximumFractionDigits: unit === "ha" ? 2 : 0 }).format(landSize)} ${label}`;
  }
  return null;
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
