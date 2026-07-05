"use client";

import { useEffect, useState } from "react";

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
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchMeta()
      .then((data) => {
        if (cancelled || !data.updatedAt) return;
        setLabel(formatDataFreshness(data.updatedAt));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!label) return null;

  return (
    <span className={cn("text-xs text-muted-foreground", className)}>
      {prefix ? `${prefix} · ` : null}
      {label}
    </span>
  );
}
