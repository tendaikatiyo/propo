"use client";

import { PROPERTY_TYPES } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";
import { propertyMixTotal } from "@/lib/explore";
import type { MarketMetric } from "@/lib/types";

const TYPE_KEYS: Record<string, keyof MarketMetric> = {
  house: "house_count",
  flat: "flat_count",
  room: "room_count",
  townhouse: "townhouse_count",
};

const COLORS = [
  "bg-[#a7e5d3]",
  "bg-[#a8c8e8]",
  "bg-[#f4c5a8]",
  "bg-[#e8b8c4]",
];

function mixCount(market: MarketMetric, type: string): number {
  if (type === "flat") return market.flat_count + market.apartment_count;
  const key = TYPE_KEYS[type];
  return key ? (market[key] as number) : 0;
}

export function PropertyMixBar({ market }: { market: MarketMetric }) {
  const total = propertyMixTotal(market);
  if (!total) {
    return <p className="text-sm text-muted-foreground">No property mix data</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex h-3 overflow-hidden rounded-full bg-muted">
        {PROPERTY_TYPES.map((type, index) => {
          const count = mixCount(market, type);
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
          const count = mixCount(market, type);
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
