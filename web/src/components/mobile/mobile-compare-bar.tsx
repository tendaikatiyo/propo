"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitCompare } from "lucide-react";

import { useGlobalLens } from "@/components/providers/lens-provider";
import { buttonVariants } from "@/components/ui/button";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { isSuburbProfilePath, mobileDockBottom } from "@/lib/mobile-dock";
import { comparePath } from "@/lib/slug";
import { cn } from "@/lib/utils";

export function MobileCompareBar() {
  const pathname = usePathname();
  const { pins } = usePinnedMarkets();
  const { lens } = useGlobalLens();

  if (pins.length < 2 || isSuburbProfilePath(pathname)) return null;

  const href = comparePath(lens);
  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-40 flex justify-center px-4 print:hidden lg:hidden"
      style={{ bottom: mobileDockBottom() }}
    >
      <Link
        href={href}
        className={cn(
          buttonVariants({ size: "sm" }),
          "pointer-events-auto gap-2 shadow-lg"
        )}
      >
        <GitCompare className="size-4" />
        Compare {pins.length} suburbs
      </Link>
    </div>
  );
}
