"use client";

import { useState } from "react";

import { GlobalLensSwitcher } from "@/components/layout/global-lens-switcher";
import { useGlobalLens } from "@/components/providers/lens-provider";
import {
  Sheet,
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
        <SheetContent side="bottom" className="rounded-t-2xl px-5 pb-8">
          <SheetTitle className="sr-only">Change focus</SheetTitle>
          <GlobalLensSwitcher compact />
        </SheetContent>
      </Sheet>
    </>
  );
}
