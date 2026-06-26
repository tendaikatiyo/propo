"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { MAX_PINNED_MARKETS } from "@/lib/constants";
import { sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import { cn } from "@/lib/utils";

export function MobileComparePanel({ onNavigate }: { onNavigate?: () => void }) {
  const { pins, removePin } = usePinnedMarkets();
  const canCompare = pins.length >= 2;

  return (
    <section className="space-y-3">
      <div className="px-1">
        <h2 className="font-heading text-xl font-semibold tracking-tight">Compare</h2>
        <p className="mt-0.5 text-[13px] text-muted-foreground">
          Pin up to {MAX_PINNED_MARKETS} suburbs, then view side by side.
        </p>
      </div>

      {pins.length === 0 ? (
        <div className="rounded-2xl bg-muted/50 px-4 py-5 text-center">
          <p className="text-[15px] text-muted-foreground">
            No suburbs pinned yet.
          </p>
          <Link
            href="/explore"
            onClick={onNavigate}
            className="mt-2 inline-block text-[15px] font-medium text-primary"
          >
            Browse Explore
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-muted/50">
          {pins.map((pin) => (
            <div
              key={pin.market_id}
              className="flex items-center gap-2 border-b border-border/40 px-4 py-3 last:border-b-0"
            >
              <Link
                href={suburbPath(pin.city, pin.suburb)}
                className="min-w-0 flex-1"
                onClick={onNavigate}
              >
                <p className="truncate font-heading text-[15px] font-medium">
                  {sanitizeLabel(pin.suburb)}
                </p>
                <p className="truncate text-[13px] text-muted-foreground">{pin.city}</p>
              </Link>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => removePin(pin.market_id)}
                aria-label={`Remove ${pin.suburb}`}
                className="text-muted-foreground"
              >
                <X className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <Link
        href="/compare"
        onClick={onNavigate}
        aria-disabled={!canCompare}
        className={buttonVariants({
          size: "lg",
          className: cn(
            "h-12 w-full rounded-xl text-[15px] font-semibold",
            !canCompare && "pointer-events-none opacity-40"
          ),
        })}
      >
        {canCompare
          ? `Compare ${pins.length} suburb${pins.length === 1 ? "" : "s"}`
          : "Pin at least 2 suburbs"}
      </Link>
    </section>
  );
}
