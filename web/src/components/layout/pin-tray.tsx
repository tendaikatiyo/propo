"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { MAX_PINNED_MARKETS } from "@/lib/constants";
import { sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";

export function PinTray() {
  const { pins, removePin } = usePinnedMarkets();

  return (
    <div className="flex flex-wrap items-center gap-2">
      {pins.length === 0 ? (
        <span className="hidden text-xs text-muted-foreground md:inline">
          Pin up to {MAX_PINNED_MARKETS} suburbs to compare
        </span>
      ) : (
        pins.map((pin) => (
          <Badge key={pin.market_id} variant="secondary" className="gap-1 pr-1 normal-case tracking-normal">
            <Link href={suburbPath(pin.city, pin.suburb)} className="hover:underline">
              {sanitizeLabel(pin.suburb)}
            </Link>
            <button
              type="button"
              onClick={() => removePin(pin.market_id)}
              className="rounded-sm p-0.5 hover:bg-muted"
              aria-label={`Remove ${pin.suburb}`}
            >
              <X className="size-3" />
            </button>
          </Badge>
        ))
      )}
      <Link
        href="/compare"
        aria-disabled={pins.length < 2}
        className={buttonVariants({
          size: "sm",
          variant: pins.length ? "default" : "outline",
          className: pins.length < 2 ? "pointer-events-none opacity-50" : "",
        })}
      >
        Compare{pins.length ? ` (${pins.length})` : ""}
      </Link>
    </div>
  );
}
