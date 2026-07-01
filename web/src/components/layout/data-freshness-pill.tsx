"use client";

import { useQuery } from "@tanstack/react-query";

import { formatDataFreshness } from "@/lib/data-freshness";
import { cn } from "@/lib/utils";

async function fetchMeta(): Promise<{ updatedAt: string | null }> {
  const res = await fetch("/api/meta");
  if (!res.ok) throw new Error("Failed to fetch meta");
  return res.json();
}

export function DataFreshnessPill({
  className,
  prefix,
}: {
  className?: string;
  prefix?: string;
}) {
  const { data } = useQuery({
    queryKey: ["data-meta"],
    queryFn: fetchMeta,
    staleTime: 60 * 60 * 1000,
  });

  if (!data?.updatedAt) return null;

  const freshness = formatDataFreshness(data.updatedAt);

  return (
    <span
      className={cn("text-xs text-muted-foreground", className)}
      title={new Date(data.updatedAt).toLocaleString()}
    >
      {prefix ? `${prefix} · ` : null}
      {freshness}
    </span>
  );
}
