"use client";

import { ExploreFilterPanel } from "@/components/filters/filter-bar";
import { MobileComparePanel } from "@/components/mobile/mobile-compare-panel";
import { MobileMenuAccordion } from "@/components/mobile/mobile-menu-accordion";
import { MobileMenuLinks } from "@/components/mobile/mobile-menu-links";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

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
        className="z-[60] w-[min(100%,340px)] gap-0 overflow-y-auto border-l-0 p-0 pl-2 pr-0 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] sm:max-w-[340px]"
      >
        <div className="flex flex-col gap-6 px-5 py-6">
          <MobileComparePanel onNavigate={close} />

          <div data-tour="filters">
            <MobileMenuAccordion title="Filters" defaultOpen={false}>
              <ExploreFilterPanel targetPath="/explore" onNavigate={close} />
            </MobileMenuAccordion>
          </div>

          <MobileMenuLinks onNavigate={close} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
