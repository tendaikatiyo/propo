"use client";

import { useQuery } from "@tanstack/react-query";

import { formatDataFreshness } from "@/lib/data-freshness";
import { cn } from "@/lib/utils";

async function fetchMeta(): Promise<{ updatedAt: string | null }> {
  const res = await fetch("/api/meta");
  if (!res.ok) throw new Error("Failed to fetch meta");
  return res.json();
}

export function DataFreshnessPill({ className }: { className?: string }) {
  const { data } = useQuery({
    queryKey: ["data-meta"],
    queryFn: fetchMeta,
    staleTime: 60 * 60 * 1000,
  });

  if (!data?.updatedAt) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/30 bg-white/20 px-2.5 py-1 text-[10px] font-medium tracking-wide text-muted-foreground backdrop-blur-md backdrop-saturate-150",
        "shadow-[0_0_20px_rgba(168,200,232,0.55),0_4px_16px_rgba(0,0,0,0.08)]",
        className
      )}
      title={new Date(data.updatedAt).toLocaleString()}
    >
      {formatDataFreshness(data.updatedAt)}
    </span>
  );
}
