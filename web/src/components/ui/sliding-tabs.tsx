"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export type SlidingTabOption<T extends string> = {
  value: T;
  label: ReactNode;
};

type SlidingTabsProps<T extends string> = {
  value: T;
  options: readonly SlidingTabOption<T>[];
  onChange: (value: T) => void;
  "aria-label": string;
  className?: string;
  /** Hex/CSS color for the sliding pill. When set, active label uses white text. */
  pillColor?: string;
};

export function SlidingTabs<T extends string>({
  value,
  options,
  onChange,
  "aria-label": ariaLabel,
  className,
  pillColor,
}: SlidingTabsProps<T>) {
  const barRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<Map<T, HTMLButtonElement>>(new Map());
  const readyRef = useRef(false);

  const movePill = useCallback(() => {
    const pill = pillRef.current;
    const tab = tabRefs.current.get(value);
    if (!pill || !tab) return;

    const animate = readyRef.current;
    if (!animate) {
      const prev = pill.style.transition;
      pill.style.transition = "none";
      pill.style.transform = `translateX(${tab.offsetLeft}px)`;
      pill.style.width = `${tab.offsetWidth}px`;
      void pill.offsetWidth;
      pill.style.transition = prev;
      return;
    }

    pill.style.transform = `translateX(${tab.offsetLeft}px)`;
    pill.style.width = `${tab.offsetWidth}px`;
  }, [value]);

  useLayoutEffect(() => {
    movePill();
    readyRef.current = true;
  }, [movePill, options.length, pillColor]);

  useEffect(() => {
    const onResize = () => {
      readyRef.current = false;
      movePill();
      readyRef.current = true;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [movePill]);

  const barStyle = {
    ...(pillColor
      ? {
          "--tabs-pill-bg": pillColor,
          "--tabs-text-active": "#ffffff",
        }
      : {}),
  } as CSSProperties;

  return (
    <div
      ref={barRef}
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "t-tabs",
        options.length === 2 && "grid-cols-2",
        options.length === 3 && "grid-cols-3",
        options.length === 4 && "grid-cols-4",
        className
      )}
      style={barStyle}
    >
      <span ref={pillRef} className="t-tabs-pill" aria-hidden />
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(node) => {
              if (node) tabRefs.current.set(option.value, node);
              else tabRefs.current.delete(option.value);
            }}
            type="button"
            role="tab"
            aria-selected={selected}
            className="t-tab"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
