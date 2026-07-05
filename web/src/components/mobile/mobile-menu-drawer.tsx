"use client";

import { X } from "lucide-react";

import { GlobalLensSwitcher } from "@/components/layout/global-lens-switcher";
import { ExploreFilterPanel } from "@/components/filters/filter-bar";
import { PropoLogomark } from "@/components/brand/propo-logomark";
import { BetaBadge } from "@/components/brand/beta-badge";
import { MobileComparePanel } from "@/components/mobile/mobile-compare-panel";
import { MobileMenuAccordion } from "@/components/mobile/mobile-menu-accordion";
import { MobileMenuLinks } from "@/components/mobile/mobile-menu-links";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { SITE_NAME } from "@/lib/constants";

export function MobileMenuDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[min(100%,340px)] gap-0 overflow-y-auto border-l border-border/60 p-0 sm:max-w-[340px]"
      >
        <SheetTitle className="sr-only">Menu and filters</SheetTitle>

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-popover px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-2 font-display text-[17px] font-semibold tracking-[-0.02em]">
            <PropoLogomark size={28} />
            <span>{SITE_NAME.toLowerCase()}</span>
            <BetaBadge />
          </div>
          <SheetClose
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Close menu" />
            }
          >
            <X className="size-5" />
          </SheetClose>
        </div>

        <div className="flex flex-col gap-6 px-5 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <GlobalLensSwitcher />

          <MobileComparePanel onNavigate={close} />

          <div data-tour="filters">
            <MobileMenuAccordion title="Filters" defaultOpen={false}>
              <ExploreFilterPanel targetPath="/explore" />
            </MobileMenuAccordion>
          </div>

          <MobileMenuLinks onNavigate={close} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
