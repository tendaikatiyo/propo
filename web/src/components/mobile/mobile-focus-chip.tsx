"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { GlobalLensSwitcher } from "@/components/layout/global-lens-switcher";
import { useGlobalLens } from "@/components/providers/lens-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { modeLabel } from "@/lib/mode";
import { MODE_ACCENT } from "@/lib/mode-accent";
import { cn } from "@/lib/utils";

export function MobileFocusChip({ onDark = false }: { onDark?: boolean }) {
  const [open, setOpen] = useState(false);
  const { lens } = useGlobalLens();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase",
          onDark ? "bg-white/20 text-white" : MODE_ACCENT[lens].chip
        )}
        aria-label={`Focus: ${modeLabel(lens)}. Tap to change.`}
      >
        {modeLabel(lens)}
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          showCloseButton={false}
          className="gap-0 rounded-t-2xl pb-[max(2rem,env(safe-area-inset-bottom))] pt-0"
        >
          <div className="flex justify-center pt-3" aria-hidden>
            <div className="h-1 w-10 rounded-full bg-border/80" />
          </div>

          <div className="flex items-center justify-between gap-4 px-5 pb-1 pt-3">
            <SheetTitle className="font-display text-lg font-semibold tracking-[-0.02em]">
              Focus
            </SheetTitle>
            <SheetClose
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  aria-label="Close focus menu"
                />
              }
            >
              <X className="size-5" />
            </SheetClose>
          </div>

          <div className="px-5 pt-4">
            <GlobalLensSwitcher showLabel={false} compact comfortable />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
