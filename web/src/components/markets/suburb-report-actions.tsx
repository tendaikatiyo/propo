"use client";

import Link from "next/link";
import { Printer } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

export function SuburbReportActions({ profilePath }: { profilePath: string }) {
  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <Button type="button" onClick={() => window.print()}>
        <Printer className="size-4" />
        Print / Save PDF
      </Button>
      <Link
        href={profilePath}
        className={buttonVariants({ variant: "outline" })}
      >
        Back to suburb profile
      </Link>
    </div>
  );
}
