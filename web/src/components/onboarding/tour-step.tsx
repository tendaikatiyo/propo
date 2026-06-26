"use client";

import { useEffect, useState, type CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TourStepConfig = {
  target?: string;
  title: string;
  body: string;
  placement?: "top" | "bottom" | "left" | "right" | "center";
};

type Rect = { top: number; left: number; width: number; height: number };

/** Prefer the visible anchor when multiple elements share the same data-tour id. */
function getTargetRect(selector: string): Rect | null {
  const els = document.querySelectorAll(`[data-tour="${selector}"]`);
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    }
  }
  return null;
}

function computeCardStyle(
  step: TourStepConfig,
  spotlight: Rect
): CSSProperties {
  const margin = 16;
  const cardWidth = Math.min(320, window.innerWidth - 32);
  const vh = window.innerHeight;
  const targetNearBottom = spotlight.top + spotlight.height > vh * 0.55;

  // Bottom tab bar / pin tray: keep the card in the comfortable middle zone
  if (targetNearBottom && step.placement !== "center") {
    return {
      top: "38%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: cardWidth,
    };
  }

  if (step.placement === "top") {
    const top = Math.max(margin, spotlight.top - margin);
    return {
      top,
      left: "50%",
      transform: "translate(-50%, -100%)",
      width: cardWidth,
      maxHeight: `${spotlight.top - margin * 2}px`,
      overflow: "auto",
    };
  }

  if (step.placement === "right") {
    return {
      top: Math.min(
        Math.max(margin, spotlight.top + spotlight.height / 2),
        vh - 200
      ),
      left: Math.min(
        spotlight.left + spotlight.width + margin,
        window.innerWidth - cardWidth - margin
      ),
      transform: "translateY(-50%)",
      width: cardWidth,
    };
  }

  if (step.placement === "left") {
    return {
      top: spotlight.top + spotlight.height / 2,
      left: Math.max(margin, spotlight.left - margin),
      transform: "translate(-100%, -50%)",
      width: cardWidth,
    };
  }

  // below target (default / bottom)
  const top = spotlight.top + spotlight.height + margin;
  return {
    top: Math.min(top, vh - 220),
    left: Math.min(
      Math.max(margin, spotlight.left + spotlight.width / 2 - cardWidth / 2),
      window.innerWidth - cardWidth - margin
    ),
    width: cardWidth,
  };
}

export function TourStep({
  step,
  stepIndex,
  totalSteps,
  onNext,
  onBack,
  onSkip,
}: {
  step: TourStepConfig;
  stepIndex: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  const [rect, setRect] = useState<Rect | null>(null);
  const isCenter = !step.target || step.placement === "center";

  useEffect(() => {
    if (!step.target) {
      setRect(null);
      return;
    }

    const update = () => setRect(getTargetRect(step.target!));
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [step.target]);

  const pad = 8;
  const spotlight = rect
    ? {
        top: rect.top - pad,
        left: rect.left - pad,
        width: rect.width + pad * 2,
        height: rect.height + pad * 2,
      }
    : null;

  const cardStyle = (): CSSProperties => {
    if (isCenter || !spotlight) {
      return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(340px, calc(100vw - 32px))",
      };
    }
    return computeCardStyle(step, spotlight);
  };

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      {/* Dim layer — does not steal clicks from the card */}
      <div className="pointer-events-none absolute inset-0 bg-black/40 backdrop-blur-[2px]" aria-hidden />

      {spotlight ? (
        <div
          className="pointer-events-none absolute z-[101] rounded-2xl ring-2 ring-white/90"
          style={{
            top: spotlight.top,
            left: spotlight.left,
            width: spotlight.width,
            height: spotlight.height,
            boxShadow: "0 0 0 9999px rgba(0,0,0,0.5)",
          }}
        />
      ) : null}

      <div
        className={cn(
          "pointer-events-auto absolute z-[102] rounded-2xl border border-border/80 bg-card p-5 shadow-2xl",
          isCenter && "text-center"
        )}
        style={cardStyle()}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="caption-label mb-1">
          {stepIndex + 1} of {totalSteps}
        </p>
        <h2 className="font-heading text-lg font-semibold tracking-tight">{step.title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
        <div className="mt-5 flex items-center gap-2">
          {stepIndex > 0 ? (
            <Button type="button" variant="ghost" size="sm" onClick={onBack} className="mr-auto">
              Back
            </Button>
          ) : (
            <span className="mr-auto" />
          )}
          <Button type="button" variant="ghost" size="sm" onClick={onSkip}>
            Skip tour
          </Button>
          <Button type="button" size="sm" onClick={onNext}>
            {stepIndex + 1 === totalSteps ? "Done" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
