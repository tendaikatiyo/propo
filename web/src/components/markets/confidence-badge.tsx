"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

function confidenceStyle(score: number): string {
  if (score >= 60) {
    return "border-[#bbf7d0] bg-[#dcfce7] text-[#166534]";
  }
  if (score >= 40) {
    return "border-[#fef08a] bg-[#fef9c3] text-[#854d0e]";
  }
  if (score >= 20) {
    return "border-[#fed7aa] bg-[#ffedd5] text-[#9a3412]";
  }
  return "border-[#fecaca] bg-[#fee2e2] text-[#991b1b]";
}

export function ConfidenceBadge({
  score,
  sampleCount,
  sampleMode,
}: {
  score: number;
  sampleCount?: number;
  sampleMode?: "rent" | "buy";
}) {
  const tooltipParts = [
    "Based on rental and sale listing volume in this suburb. Green = strong coverage; red = thin data.",
  ];
  if (sampleCount != null) {
    const modeLabel = sampleMode === "buy" ? "sale" : "rental";
    tooltipParts.push(`This suburb has ${sampleCount} active ${modeLabel} listing${sampleCount === 1 ? "" : "s"} in the latest scrape.`);
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge
          variant="outline"
          className={cn(
            "normal-case tracking-normal",
            confidenceStyle(score)
          )}
        >
          {formatNumber(score)}% conf
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs font-sans text-sm normal-case tracking-normal">
        {tooltipParts.join(" ")}
      </TooltipContent>
    </Tooltip>
  );
}
