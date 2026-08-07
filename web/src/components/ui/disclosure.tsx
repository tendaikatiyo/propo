"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/** transitions.dev accordion — height via grid 0fr↔1fr, chevron flips with scaleY. */
export function Disclosure({
  title,
  description,
  defaultOpen = false,
  className,
  children,
}: {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div
      className={cn("t-acc overflow-hidden rounded-2xl border border-border/80 bg-card", className)}
      data-open={open ? "true" : "false"}
    >
      <button
        type="button"
        className="t-acc-head flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:px-5"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="min-w-0 flex-1">
          <span className="font-heading text-lg font-medium">{title}</span>
          {description ? (
            <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
          ) : null}
        </span>
        <span className="t-acc-chevron mt-1 shrink-0 text-muted-foreground" aria-hidden>
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M4 6.5L8 10.5L12 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div id={panelId} className="t-acc-panel" role="region">
        <div className="t-acc-panel-inner">
          <div className="space-y-6 border-t border-border/60 px-4 pb-5 pt-4 sm:px-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
