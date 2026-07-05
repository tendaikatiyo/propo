"use client";

import { useEffect, useRef } from "react";

import { trackSuburbView } from "@/lib/analytics/track";
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

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    trackSuburbView({ marketId, city, suburb, lens });
  }, [marketId, city, suburb, lens]);

  return null;
}
