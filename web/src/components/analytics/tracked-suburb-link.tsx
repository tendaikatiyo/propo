"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { trackSuburbClick } from "@/lib/analytics/track";
import type { SuburbClickPayload } from "@/lib/analytics/types";

type TrackedSuburbLinkProps = ComponentProps<typeof Link> & {
  tracking: Omit<SuburbClickPayload, "marketId" | "city" | "suburb"> & {
    marketId: string;
    city: string;
    suburb: string;
  };
};

export function TrackedSuburbLink({
  tracking,
  onClick,
  ...props
}: TrackedSuburbLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackSuburbClick({
          marketId: tracking.marketId,
          city: tracking.city,
          suburb: tracking.suburb,
          source: tracking.source,
          mode: tracking.mode,
        });
        onClick?.(event);
      }}
    />
  );
}
