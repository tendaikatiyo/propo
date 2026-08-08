"use client";

import Link from "next/link";
import { Printer } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { trackReportExport } from "@/lib/analytics/track";
import type { ReportScope } from "@/lib/types";

export function SuburbReportActions({
  profilePath,
  investProfilePath,
  scope,
  marketId,
  city,
  suburb,
}: {
  profilePath: string;
  investProfilePath?: string;
  scope: ReportScope;
  marketId: string;
  city: string;
  suburb: string;
}) {
  function handlePrint() {
    trackReportExport({
      marketId,
      city,
      suburb,
      scope,
      lens: scope === "rent" ? "rent" : "invest",
    });
    window.print();
  }

  return (
    <div className="space-y-3 print:hidden">
      {scope === "full" && investProfilePath ? (
        <p className="text-sm text-muted-foreground">
          Full market brief — shareable and printable. For live yield, opportunity, and listing
          metrics,{" "}
          <Link href={investProfilePath} className="font-medium text-foreground hover:underline">
            open the suburb profile
          </Link>
          .
        </p>
      ) : null}
      {scope === "rent" ? (
        <p className="text-sm text-muted-foreground">
          Rental market summary for tenants. For sale, yield, and land data, open the full suburb
          profile.
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        <Button type="button" onClick={handlePrint}>
          <Printer className="size-4" />
          Print / Save PDF
        </Button>
        <Link href={profilePath} className={buttonVariants({ variant: "outline" })}>
          Back to suburb profile
        </Link>
      </div>
    </div>
  );
}
