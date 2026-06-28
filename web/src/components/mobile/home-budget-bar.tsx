"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

import { DEFAULT_CITY, ROOM_BEDROOM_COUNT } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";
import { liquidGlassPillClass } from "@/lib/liquid-glass";
import { MODE_ACCENT } from "@/lib/mode-accent";
import type { ExploreMode, PropertyType } from "@/lib/types";
import { cn } from "@/lib/utils";

function buildExploreHref(
  mode: ExploreMode,
  budget: number,
  propertyType: PropertyType | null
): string {
  const params = new URLSearchParams();
  params.set("mode", mode);
  params.set("budget", String(budget));
  params.set("city", DEFAULT_CITY);
  if (propertyType) {
    params.set("type", propertyType);
    if (propertyType === "room") params.set("bedroom", String(ROOM_BEDROOM_COUNT));
  }
  return `/explore?${params.toString()}`;
}

export function HomeBudgetBar({
  mode,
  budget,
  propertyType,
  observeRef,
}: {
  mode: ExploreMode;
  budget: number;
  propertyType: PropertyType | null;
  observeRef: React.RefObject<HTMLElement | null>;
}) {
  const [visible, setVisible] = useState(false);
  const accent = MODE_ACCENT[mode];

  useEffect(() => {
    const target = observeRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-56px 0px 0px 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [observeRef]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 z-30 flex justify-center px-4 transition-all duration-300 ease-out lg:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      )}
      style={{ bottom: "calc(4.75rem + env(safe-area-inset-bottom))" }}
    >
      <Link
        href={buildExploreHref(mode, budget, propertyType)}
        className={cn(
          "pointer-events-auto inline-flex max-w-full items-center gap-2.5 px-4 py-2.5 transition-transform active:scale-[0.97]",
          liquidGlassPillClass,
          accent.pillGlow,
          !visible && "pointer-events-none"
        )}
      >
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            accent.chip
          )}
        >
          {mode === "rent" ? "Rent" : "Buy"}
        </span>
        <span className="truncate font-stat text-sm font-semibold tabular-nums">
          {formatCurrency(budget)}
        </span>
        <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-foreground/80">
          <Compass className="size-3.5" />
          Explore
        </span>
      </Link>
    </div>
  );
}
