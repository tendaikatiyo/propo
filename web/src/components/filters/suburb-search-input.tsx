"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SuburbSearchInput({
  value,
  onChange,
  className,
  placeholder = "Search suburbs…",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search suburbs"
        className="h-11 rounded-xl border-0 bg-muted/50 pl-10 text-[15px] shadow-none focus-visible:ring-1"
      />
    </div>
  );
}

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
