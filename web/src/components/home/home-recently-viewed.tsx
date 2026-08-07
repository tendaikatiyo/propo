"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRecentlyViewedMarkets } from "@/hooks/use-recently-viewed-markets";
import { sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";

export function HomeRecentlyViewed() {
  const { recent, clearRecent } = useRecentlyViewedMarkets();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready || recent.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Recently viewed
          </h2>
          <p className="mt-1 text-[15px] tracking-[0.15px] text-muted-foreground">
            Suburbs you've opened on this device.
          </p>
        </div>
        <button
          type="button"
          onClick={() => clearRecent()}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Clear
        </button>
      </div>

      <Card>
        <CardContent className="space-y-1 pt-6">
          {recent.map((item) => (
            <Link
              key={item.market_id}
              href={suburbPath(item.city, item.suburb)}
              className="flex items-center justify-between rounded-xl px-2 py-2 text-sm hover:bg-muted/50"
            >
              <span>
                <span className="font-medium">{sanitizeLabel(item.suburb)}</span>
                <span className="text-muted-foreground"> · {item.city}</span>
              </span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
