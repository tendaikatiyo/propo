"use client";

import { PROPERTY_TYPES } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";
import { propertyMixTotal } from "@/lib/explore";
import type { MarketMetric } from "@/lib/types";

const TYPE_KEYS: Record<string, keyof MarketMetric> = {
  house: "house_count",
  apartment: "apartment_count",
  flat: "flat_count",
  room: "room_count",
  townhouse: "townhouse_count",
  commercial: "commercial_count",
};

const COLORS = [
  "bg-sky-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-slate-500",
];

export function PropertyMixBar({ market }: { market: MarketMetric }) {
  const total = propertyMixTotal(market);
  if (!total) {
    return <p className="text-sm text-muted-foreground">No property mix data</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex h-3 overflow-hidden rounded-full bg-muted">
        {PROPERTY_TYPES.map((type, index) => {
          const count = market[TYPE_KEYS[type]] as number;
          if (!count) return null;
          const width = (count / total) * 100;
          return (
            <div
              key={type}
              className={COLORS[index % COLORS.length]}
              style={{ width: `${width}%` }}
              title={`${propertyTypeLabel(type)}: ${count}`}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {PROPERTY_TYPES.map((type, index) => {
          const count = market[TYPE_KEYS[type]] as number;
          if (!count) return null;
          return (
            <span key={type} className="inline-flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${COLORS[index % COLORS.length]}`} />
              {propertyTypeLabel(type)} {count}
            </span>
          );
        })}
      </div>
    </div>
  );
}
