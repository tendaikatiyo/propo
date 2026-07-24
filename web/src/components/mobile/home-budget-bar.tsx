"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

import { ROOM_BEDROOM_COUNT } from "@/lib/constants";
import { formatCurrency, formatPricePerSqm } from "@/lib/format";
import { liquidGlassPillClass } from "@/lib/liquid-glass";
import { motionPress } from "@/lib/motion";
import { isLandMode, modeLabel, modeSearchParam } from "@/lib/mode";
import { MODE_ACCENT } from "@/lib/mode-accent";
import { mobileDockBottom } from "@/lib/mobile-dock";
import type { ExploreMode, PropertyType } from "@/lib/types";
import { cn } from "@/lib/utils";

function buildExploreHref(
  mode: ExploreMode,
  budget: number,
  propertyType: PropertyType | null
): string {
  const params = new URLSearchParams();
  const modeParam = modeSearchParam(mode);
  if (modeParam) params.set("mode", modeParam);
  params.set("budget", String(budget));
  params.set("city", "all");
  if (propertyType && !isLandMode(mode)) {
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
  const land = isLandMode(mode);

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
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
      style={{ bottom: mobileDockBottom() }}
    >
      <Link
        href={buildExploreHref(mode, budget, propertyType)}
        className={cn(
          motionPress,
          "pointer-events-auto inline-flex max-w-full items-center gap-2.5 px-4 py-2.5",
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
          {modeLabel(mode)}
        </span>
        <span className="truncate font-stat text-sm font-semibold tabular-nums">
          {land ? formatPricePerSqm(budget) : formatCurrency(budget)}
        </span>
        <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-foreground/80">
          <Compass className="size-3.5" />
          Explore
        </span>
      </Link>
    </div>
  );
}
