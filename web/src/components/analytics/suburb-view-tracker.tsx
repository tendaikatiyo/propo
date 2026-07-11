"use client";

import { useEffect, useRef } from "react";

import { trackSuburbView } from "@/lib/analytics/track";
import { useRecentlyViewedMarkets } from "@/hooks/use-recently-viewed-markets";
import type { ExploreMode } from "@/lib/types";

export function SuburbViewTracker({
  marketId,
  city,
  suburb,
  lens,
}: {
  marketId: string;
  city: string;
  suburb: string;
  lens: ExploreMode;
}) {
  const tracked = useRef(false);
  const recordView = useRecentlyViewedMarkets((state) => state.recordView);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    recordView(
      { market_id: marketId, city, suburb },
      { fromMode: lens }
    );
    trackSuburbView({ marketId, city, suburb, lens });
  }, [marketId, city, suburb, lens, recordView]);

  return null;
}
