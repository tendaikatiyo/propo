"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  sampleSizeLabel,
  sampleSizeTooltip,
  segmentLimitedDataTooltip,
} from "@/lib/metric-tooltips";
import { dataScopeLabel } from "@/lib/segments";
import type { PropertyType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SampleSizeBadge({
  count,
  mode,
  limited = false,
  className,
}: {
  count: number;
  mode: "rent" | "buy";
  limited?: boolean;
  className?: string;
}) {
  const label = sampleSizeLabel(count, mode);

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          "inline-flex max-w-full cursor-default flex-wrap items-center gap-2 text-left text-sm text-muted-foreground",
          className
        )}
      >
        <span>{label}</span>
        {limited ? (
          <Badge variant="outline" className="normal-case tracking-normal">
            Limited data (n={count})
          </Badge>
        ) : null}
      </TooltipTrigger>
      <TooltipContent className="max-w-xs font-sans text-sm normal-case tracking-normal">
        {limited ? segmentLimitedDataTooltip(count) : sampleSizeTooltip(mode)}
      </TooltipContent>
    </Tooltip>
  );
}

export function ScopeLabel({
  propertyType,
  bedroom,
  className,
}: {
  propertyType: PropertyType | null;
  bedroom: number | null;
  className?: string;
}) {
  const label = dataScopeLabel(propertyType, bedroom);

  return (
    <span className={cn("text-sm text-muted-foreground", className)}>
      Scope: <span className="font-medium text-foreground">{label}</span>
    </span>
  );
}
