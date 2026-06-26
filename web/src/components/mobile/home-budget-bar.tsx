"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { DEFAULT_CITY } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";
import type { ExploreMode, PropertyType } from "@/lib/types";

function buildExploreHref(
  mode: ExploreMode,
  budget: number,
  propertyType: PropertyType | null
): string {
  const params = new URLSearchParams();
  params.set("mode", mode);
  params.set("budget", String(budget));
  params.set("city", DEFAULT_CITY);
  if (propertyType) params.set("type", propertyType);
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

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 z-30 border-t border-border/80 bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden"
      style={{ bottom: "calc(4.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted-foreground">
            {mode === "rent" ? "Rent budget" : "Buy budget"}
          </p>
          <p className="truncate font-stat text-base font-medium">
            {formatCurrency(budget)}
          </p>
        </div>
        <Link
          href={buildExploreHref(mode, budget, propertyType)}
          className={buttonVariants({ size: "sm" })}
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
