"use client";

import Link from "next/link";
import { GitCompare } from "lucide-react";

import { PinButton } from "@/components/markets/pin-button";
import { useGlobalLens } from "@/components/providers/lens-provider";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { liquidGlassPillClass } from "@/lib/liquid-glass";
import { mobileDockBottom } from "@/lib/mobile-dock";
import type { ExploreMode, MarketMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SuburbActionBar({
  market,
  lens,
}: {
  market: MarketMetric;
  lens: ExploreMode;
}) {
  const { pins } = usePinnedMarkets();
  const { lens: globalLens } = useGlobalLens();
  const canCompare = pins.length >= 2;
  const compareHref =
    globalLens === "rent"
      ? "/compare"
      : `/compare?mode=${encodeURIComponent(globalLens)}`;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-40 flex justify-center px-4 print:hidden lg:hidden"
      style={{ bottom: mobileDockBottom() }}
    >
      <div
        className={cn(
          "pointer-events-auto inline-flex max-w-full items-center gap-1.5 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
          liquidGlassPillClass
        )}
      >
        <button
          type="button"
          className="min-h-9 rounded-full px-3 text-sm font-medium text-foreground transition-colors hover:bg-white/20 active:bg-white/30"
          onClick={() => {
            document.getElementById("suburb-listings")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          View listings
        </button>
        {canCompare ? (
          <Link
            href={compareHref}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <GitCompare className="size-3.5" />
            Compare ({pins.length})
          </Link>
        ) : null}
        <PinButton market={market} size="icon-sm" fromMode={lens} />
      </div>
    </div>
  );
}
