"use client";

import { useEffect, useRef, useState } from "react";

import { sanitizeLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

const HOLD_MS = 2200;

/** Rolling suburb-name shutter for empty search fields (transitions.dev text-swap). */
export function RollingSuburbPlaceholder({
  names,
  visible,
  className,
}: {
  names: string[];
  visible: boolean;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter-start">("idle");
  const elRef = useRef<HTMLSpanElement>(null);

  const namesKey = names.join("\0");

  useEffect(() => {
    const list = namesKey ? namesKey.split("\0") : [];
    if (!visible || list.length < 2) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let cancelled = false;
    let holdTimer = 0;
    let swapTimer = 0;

    const readDur = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--text-swap-dur")
        .trim();
      const parsed = Number.parseFloat(raw);
      return Number.isFinite(parsed) ? parsed : 180;
    };

    const schedule = () => {
      holdTimer = window.setTimeout(() => {
        if (cancelled) return;
        setPhase("exit");
        const dur = readDur();
        swapTimer = window.setTimeout(() => {
          if (cancelled) return;
          setIndex((current) => (current + 1) % list.length);
          setPhase("enter-start");
          requestAnimationFrame(() => {
            if (cancelled) return;
            void elRef.current?.offsetHeight;
            setPhase("idle");
            schedule();
          });
        }, dur);
      }, HOLD_MS);
    };

    schedule();
    return () => {
      cancelled = true;
      window.clearTimeout(holdTimer);
      window.clearTimeout(swapTimer);
    };
  }, [visible, namesKey]);

  useEffect(() => {
    if (!visible) {
      setIndex(0);
      setPhase("idle");
    }
  }, [visible]);

  if (!visible || names.length === 0) return null;

  const label = sanitizeLabel(names[index] ?? names[0] ?? "");

  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-1/2 left-9 z-[1] max-w-[calc(100%-3rem)] -translate-y-1/2 truncate text-base text-muted-foreground",
        className
      )}
    >
      <span
        ref={elRef}
        className={cn(
          "t-text-swap",
          phase === "exit" && "is-exit",
          phase === "enter-start" && "is-enter-start"
        )}
      >
        {label}
      </span>
    </span>
  );
}
