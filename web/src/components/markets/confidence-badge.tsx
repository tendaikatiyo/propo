import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatNumber } from "@/lib/format";

export function ConfidenceBadge({ score }: { score: number }) {
  const variant = score >= 60 ? "default" : score >= 20 ? "secondary" : "outline";

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant={variant} className="normal-case tracking-normal">
          {formatNumber(score)}% conf
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        Based on rental and sale listing volume in this suburb.
      </TooltipContent>
    </Tooltip>
  );
}
