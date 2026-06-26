"use client";

import { PinButton } from "@/components/markets/pin-button";
import { Button } from "@/components/ui/button";
import type { MarketMetric } from "@/lib/types";

export function SuburbActionBar({ market }: { market: MarketMetric }) {
  return (
    <div
      className="fixed inset-x-0 z-30 border-t border-border/80 bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden"
      style={{ bottom: "calc(4.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <Button
          type="button"
          variant="outline"
          className="min-h-11 flex-1"
          onClick={() => {
            document.getElementById("suburb-listings")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          View listings
        </Button>
        <PinButton market={market} />
      </div>
    </div>
  );
}
