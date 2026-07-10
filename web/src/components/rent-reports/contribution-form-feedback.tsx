"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const contributionFormClassName = "space-y-5 sm:space-y-5";

export const contributionCheckboxLabelClassName =
  "flex min-h-11 items-start gap-3 rounded-xl px-1 py-2 text-[15px] leading-relaxed text-muted-foreground -mx-1";

export const contributionCheckboxClassName =
  "mt-1 size-5 shrink-0 rounded border-border accent-foreground";

export const contributionSubmitClassName = "h-11 w-full sm:w-auto";

export const contributionCardHeaderClassName = "px-4 pt-5 sm:px-6 sm:pt-6";

export const contributionCardContentClassName = "px-4 pb-5 sm:px-6 sm:pb-6";

export function ContributionFormSuccess({
  message,
  onReset,
  resetLabel = "Submit another report",
  children,
}: {
  message: string;
  onReset: () => void;
  resetLabel?: string;
  children?: ReactNode;
}) {
  const [checkState, setCheckState] = useState<"out" | "in">("out");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setCheckState("in"));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Card>
      <CardContent
        className={cn(
          contributionCardContentClassName,
          "flex flex-col items-center gap-4 pt-8 text-center text-[15px] leading-relaxed text-muted-foreground sm:pt-10"
        )}
      >
        <span className="t-success-check" data-state={checkState} aria-hidden>
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="size-14 text-emerald-600"
            aria-hidden
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-25"
            />
            <path
              d="M14 24.5 21 31.5 34 17"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="max-w-md font-medium text-foreground">{message}</p>
        {children}
        <Button
          type="button"
          variant="outline"
          className={contributionSubmitClassName}
          onClick={onReset}
        >
          {resetLabel}
        </Button>
      </CardContent>
    </Card>
  );
}

export function ContributionFormError({ message }: { message: string }) {
  const alertRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const alert = alertRef.current;
    if (!alert || !message) return;

    alert.classList.remove("is-shaking");
    void alert.offsetWidth;
    alert.classList.add("is-shaking");

    const cs = getComputedStyle(document.documentElement);
    const ms = (name: string, fallback: number) => {
      const raw = parseFloat(cs.getPropertyValue(name));
      return Number.isFinite(raw) ? raw : fallback;
    };
    const shakeMs = ms("--shake-dur-a", 80) * 2 + ms("--shake-dur-b", 60) * 2;
    const clearShake = window.setTimeout(() => {
      alert.classList.remove("is-shaking");
    }, shakeMs + 20);

    return () => {
      window.clearTimeout(clearShake);
    };
  }, [message]);

  if (!message) return null;

  return (
    <p
      ref={alertRef}
      className="t-input rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-[15px] text-destructive"
      role="alert"
    >
      {message}
    </p>
  );
}

export function ContributionMethodologyNote() {
  return (
    <p>
      Explore suburb medians and trends while you wait, or read how we combine portal data with
      community reports on the{" "}
      <Link href="/methodology" className="text-foreground underline-offset-4 hover:underline">
        methodology page
      </Link>
      .
    </p>
  );
}
