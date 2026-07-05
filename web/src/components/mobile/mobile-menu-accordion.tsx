"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { motionRow } from "@/lib/motion";

export function MobileMenuAccordion({
  title,
  description,
  defaultOpen = false,
  children,
}: {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl bg-muted/50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          motionRow,
          "flex w-full min-h-[44px] items-center justify-between gap-3 px-4 py-3.5 text-left active:bg-muted/80"
        )}
        aria-expanded={open}
      >
        <span className="min-w-0 flex-1">
          <span className="block font-heading text-[15px] font-medium">{title}</span>
          {description ? (
            <span className="mt-0.5 block text-[12px] text-muted-foreground">
              {description}
            </span>
          ) : null}
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open ? (
        <div className="border-t border-border/60 px-4 pb-4 pt-2">{children}</div>
      ) : null}
    </div>
  );
}
