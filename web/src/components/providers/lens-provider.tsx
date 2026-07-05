"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  Suspense,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { trackLensChange } from "@/lib/analytics/track";
import type { LensChangePayload } from "@/lib/analytics/types";
import { LENS_STORAGE_KEY } from "@/lib/lens";
import { parseExploreMode } from "@/lib/mode";
import type { ExploreMode } from "@/lib/types";

const LENS_STORAGE_EVENT = "propo-lens-storage";

function readStoredLens(): ExploreMode | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(LENS_STORAGE_KEY);
  if (!stored) return null;
  return parseExploreMode(stored);
}

function writeStoredLens(mode: ExploreMode) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LENS_STORAGE_KEY, mode);
  window.dispatchEvent(new Event(LENS_STORAGE_EVENT));
}

function subscribeToLensStorage(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(LENS_STORAGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(LENS_STORAGE_EVENT, handler);
  };
}

type LensContextValue = {
  lens: ExploreMode;
  setLens: (
    next: ExploreMode,
    options?: { source?: LensChangePayload["source"] }
  ) => void;
};

const LensContext = createContext<LensContextValue | null>(null);

function replaceLensInUrl(
  pathname: string,
  searchParams: URLSearchParams,
  next: ExploreMode
): string {
  const params = new URLSearchParams(searchParams.toString());
  if (next === "rent") {
    params.delete("mode");
  } else {
    params.set("mode", next);
  }
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

function LensProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const storedLens = useSyncExternalStore(
    subscribeToLensStorage,
    readStoredLens,
    () => null
  );
  const lensRef = useRef<ExploreMode>("rent");
  const syncedStoredLens = useRef(false);

  const lens = useMemo(() => {
    const fromUrl = searchParams.get("mode");
    if (fromUrl) return parseExploreMode(fromUrl);
    return storedLens ?? "rent";
  }, [searchParams, storedLens]);

  useEffect(() => {
    lensRef.current = lens;
  }, [lens]);

  useEffect(() => {
    writeStoredLens(lens);
  }, [lens]);

  useEffect(() => {
    if (syncedStoredLens.current) return;
    if (searchParams.get("mode")) return;
    if (storedLens === "rent" || storedLens == null) return;

    syncedStoredLens.current = true;
    router.replace(
      replaceLensInUrl(pathname, searchParams, storedLens),
      { scroll: false }
    );
  }, [pathname, router, searchParams, storedLens]);

  const setLens = useCallback(
    (next: ExploreMode, options?: { source?: LensChangePayload["source"] }) => {
      const previous = lensRef.current;
      const source = options?.source ?? "global";
      if (previous !== next) {
        trackLensChange({ lens: next, previousLens: previous, source });
      }
      writeStoredLens(next);
      router.replace(replaceLensInUrl(pathname, searchParams, next), {
        scroll: false,
      });
    },
    [pathname, router, searchParams]
  );

  const value = useMemo(() => ({ lens, setLens }), [lens, setLens]);

  return <LensContext.Provider value={value}>{children}</LensContext.Provider>;
}

const FALLBACK_LENS: LensContextValue = {
  lens: "rent",
  setLens: () => {},
};

export function LensProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LensContext.Provider value={FALLBACK_LENS}>{children}</LensContext.Provider>}>
      <LensProviderInner>{children}</LensProviderInner>
    </Suspense>
  );
}

export function useGlobalLens(): LensContextValue {
  const ctx = useContext(LensContext);
  if (!ctx) {
    throw new Error("useGlobalLens must be used within LensProvider");
  }
  return ctx;
}

/** @deprecated Use useGlobalLens */
export function useLens(
  _defaultLens: ExploreMode = "rent",
  _options?: { analyticsSource?: LensChangePayload["source"] }
): LensContextValue {
  return useGlobalLens();
}

/** Read stored lens without URL — prefer useGlobalLens in app shell. */
export function useStoredLens(defaultLens: ExploreMode = "rent"): ExploreMode {
  const storedLens = useSyncExternalStore(
    subscribeToLensStorage,
    readStoredLens,
    () => null
  );
  return storedLens ?? defaultLens;
}

export function readLensFromStorage(): ExploreMode {
  return readStoredLens() ?? "rent";
}
