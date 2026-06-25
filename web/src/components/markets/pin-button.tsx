"use client";

import { Pin, PinOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import type { MarketMetric } from "@/lib/types";

export function PinButton({
  market,
  size = "sm",
}: {
  market: Pick<MarketMetric, "market_id" | "city" | "suburb">;
  size?: "sm" | "icon-sm" | "default";
}) {
  const { isPinned, togglePin } = usePinnedMarkets();
  const pinned = isPinned(market.market_id);

  return (
    <Button
      type="button"
      variant={pinned ? "default" : "outline"}
      size={size}
      onClick={() => togglePin(market)}
      aria-label={pinned ? `Unpin ${market.suburb}` : `Pin ${market.suburb}`}
    >
      {pinned ? <PinOff className="size-4" /> : <Pin className="size-4" />}
      {size !== "icon-sm" && <span className="ml-1">{pinned ? "Pinned" : "Pin"}</span>}
    </Button>
  );
}
