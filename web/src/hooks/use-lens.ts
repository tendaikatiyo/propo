"use client";

import { useCallback, useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { trackLensChange } from "@/lib/analytics/track";
import type { LensChangePayload } from "@/lib/analytics/types";
import { LENS_STORAGE_KEY } from "@/lib/lens";
import { parseExploreMode } from "@/lib/mode";
import type { ExploreMode } from "@/lib/types";

function readStoredLens(): ExploreMode | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(LENS_STORAGE_KEY);
  if (!stored) return null;
  return parseExploreMode(stored);
}

function subscribeToLensStorage(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (event: StorageEvent) => {
    if (event.key === LENS_STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

/** Lens from localStorage only — safe in layout without Suspense. */
export function useStoredLens(defaultLens: ExploreMode = "rent") {
  const storedLens = useSyncExternalStore(
    subscribeToLensStorage,
    readStoredLens,
    () => null
  );
  return storedLens ?? defaultLens;
}

export function useLens(
  defaultLens: ExploreMode = "rent",
  options?: { analyticsSource?: LensChangePayload["source"] }
) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const storedLens = useSyncExternalStore(
    subscribeToLensStorage,
    readStoredLens,
    () => null
  );
  const analyticsSource = options?.analyticsSource;
  const lensRef = useRef<ExploreMode>(defaultLens);

  const lens = useMemo(() => {
    const fromUrl = searchParams.get("mode");
    if (fromUrl) return parseExploreMode(fromUrl);
    return storedLens ?? defaultLens;
  }, [searchParams, storedLens, defaultLens]);

  useEffect(() => {
    lensRef.current = lens;
  }, [lens]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LENS_STORAGE_KEY, lens);
  }, [lens]);

  const setLens = useCallback(
    (next: ExploreMode, setOptions?: { path?: string }) => {
      const previous = lensRef.current;
      if (previous !== next && analyticsSource) {
        trackLensChange({ lens: next, previousLens: previous, source: analyticsSource });
      }
      if (typeof window !== "undefined") {
        window.localStorage.setItem(LENS_STORAGE_KEY, next);
      }
      const target = setOptions?.path ?? pathname;
      const params = new URLSearchParams(searchParams.toString());
      if (next === "rent") {
        params.delete("mode");
      } else {
        params.set("mode", next);
      }
      const qs = params.toString();
      router.replace(qs ? `${target}?${qs}` : target, { scroll: false });
    },
    [analyticsSource, pathname, router, searchParams]
  );

  return { lens, setLens };
}

/** Read stored lens without subscribing (e.g. pin tray). */
export function readLensFromStorage(): ExploreMode {
  return readStoredLens() ?? "rent";
}
