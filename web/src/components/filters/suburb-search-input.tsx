"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { sanitizeLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

export type SuburbSearchSuggestion = {
  market_id: string;
  city: string;
  suburb: string;
};

export function filterMarketsBySuburbQuery<
  T extends { suburb: string; city: string },
>(markets: T[], query: string): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return markets;

  return markets.filter(
    (market) =>
      market.suburb.toLowerCase().includes(normalized) ||
      market.city.toLowerCase().includes(normalized)
  );
}

/** Rank Google-style suggestions: prefix matches first, then suburb contains, then city. */
export function rankSuburbSuggestions<T extends SuburbSearchSuggestion>(
  markets: T[],
  query: string,
  limit = 8
): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const scored: { market: T; score: number }[] = [];
  for (const market of markets) {
    const suburb = market.suburb.toLowerCase();
    const city = market.city.toLowerCase();
    let score = -1;
    if (suburb.startsWith(normalized)) score = 300 - suburb.length;
    else if (suburb.includes(normalized)) score = 200 - suburb.indexOf(normalized);
    else if (city.startsWith(normalized)) score = 100 - city.length;
    else if (city.includes(normalized)) score = 50 - city.indexOf(normalized);
    if (score >= 0) scored.push({ market, score });
  }

  scored.sort((a, b) => b.score - a.score || a.market.suburb.localeCompare(b.market.suburb));
  return scored.slice(0, limit).map((item) => item.market);
}

function highlightMatch(text: string, query: string): ReactNode {
  const normalized = query.trim();
  if (!normalized) return text;
  const lower = text.toLowerCase();
  const index = lower.indexOf(normalized.toLowerCase());
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="font-medium text-foreground">
        {text.slice(index, index + normalized.length)}
      </span>
      {text.slice(index + normalized.length)}
    </>
  );
}

export function SuburbSearchInput({
  value,
  onChange,
  className,
  placeholder = "Search suburbs or cities…",
  suggestions,
  /** Desktop-only suggestion panel (default when suggestions are passed). */
  suggestionsDesktopOnly = true,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  suggestions?: SuburbSearchSuggestion[];
  suggestionsDesktopOnly?: boolean;
}) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const ranked = useMemo(
    () => (suggestions ? rankSuburbSuggestions(suggestions, value) : []),
    [suggestions, value]
  );

  const showPanel = open && ranked.length > 0 && value.trim().length > 0;

  useEffect(() => {
    setActiveIndex(-1);
  }, [value]);

  useEffect(() => {
    if (!showPanel) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [showPanel]);

  function selectSuggestion(market: SuburbSearchSuggestion) {
    onChange(market.suburb);
    setOpen(false);
    setActiveIndex(-1);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!ranked.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (index + 1) % ranked.length);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (index <= 0 ? ranked.length - 1 : index - 1));
      return;
    }
    if (event.key === "Enter" && activeIndex >= 0 && ranked[activeIndex]) {
      event.preventDefault();
      selectSuggestion(ranked[activeIndex]);
      return;
    }
    if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        aria-label="Search suburbs"
        aria-autocomplete="list"
        aria-controls={showPanel ? listId : undefined}
        aria-expanded={showPanel}
        aria-activedescendant={
          activeIndex >= 0 && ranked[activeIndex]
            ? `${listId}-${ranked[activeIndex].market_id}`
            : undefined
        }
        role="combobox"
        autoComplete="off"
        className="h-11 rounded-xl border-0 bg-muted/50 pr-3 pl-9 text-left text-[15px] shadow-none focus-visible:ring-1"
      />

      {showPanel ? (
        <ul
          id={listId}
          role="listbox"
          className={cn(
            "absolute top-full z-50 mt-1 max-h-72 w-full overflow-auto rounded-xl border border-border/80 bg-popover py-1 text-left shadow-lg",
            suggestionsDesktopOnly && "hidden lg:block"
          )}
        >
          {ranked.map((market, index) => {
            const suburbLabel = sanitizeLabel(market.suburb);
            const active = index === activeIndex;
            return (
              <li key={market.market_id} role="presentation">
                <button
                  type="button"
                  id={`${listId}-${market.market_id}`}
                  role="option"
                  aria-selected={active}
                  className={cn(
                    "flex w-full items-baseline gap-2 px-3 py-2.5 text-left text-[15px] transition-colors",
                    active ? "bg-muted" : "hover:bg-muted/70"
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => {
                    // Prevent input blur before click registers.
                    event.preventDefault();
                    selectSuggestion(market);
                  }}
                >
                  <span className="min-w-0 flex-1 truncate text-foreground">
                    {highlightMatch(suburbLabel, value)}
                  </span>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {market.city}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
