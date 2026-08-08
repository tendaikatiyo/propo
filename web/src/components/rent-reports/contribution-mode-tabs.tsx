"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SlidingTabs } from "@/components/ui/sliding-tabs";
import { CONTRIBUTION_MODES, type ContributionMode } from "@/lib/rent-reports";
import { MODE_ACCENT } from "@/lib/mode-accent";
import { cn } from "@/lib/utils";

const CONTRIBUTE_TAB_LABEL: Record<ContributionMode, string> = {
  rent: "Rent",
  buy: "Sale",
  land: "Land",
};

export function ContributionModeTabs({
  value,
  className,
}: {
  value: ContributionMode;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <SlidingTabs
      aria-label="Contribution type"
      value={value}
      options={CONTRIBUTION_MODES.map((mode) => ({
        value: mode,
        label: CONTRIBUTE_TAB_LABEL[mode],
      }))}
      onChange={(mode) => {
        const params = new URLSearchParams(searchParams.toString());
        if (mode === "rent") {
          params.delete("mode");
        } else {
          params.set("mode", mode);
        }
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      }}
      pillColor={MODE_ACCENT[value].color}
      className={cn("w-full max-w-md", className)}
    />
  );
}
