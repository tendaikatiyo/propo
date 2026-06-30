"use client";

import { PinButton } from "@/components/markets/pin-button";
import { liquidGlassPillClass } from "@/lib/liquid-glass";
import type { MarketMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SuburbActionBar({ market }: { market: MarketMetric }) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-30 flex justify-center px-4 print:hidden lg:hidden"
      style={{ bottom: "calc(4.75rem + env(safe-area-inset-bottom))" }}
    >
      <div
        className={cn(
          "pointer-events-auto inline-flex max-w-full items-center gap-2 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
          liquidGlassPillClass
        )}
      >
        <button
          type="button"
          className="min-h-9 flex-1 rounded-full px-3 text-sm font-medium text-foreground transition-colors hover:bg-white/20 active:bg-white/30"
          onClick={() => {
            document.getElementById("suburb-listings")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          View listings
        </button>
        <PinButton market={market} size="icon-sm" />
      </div>
    </div>
  );
}
