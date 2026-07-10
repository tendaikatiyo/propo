"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  Suspense,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { trackLensChange } from "@/lib/analytics/track";
import type { LensChangePayload } from "@/lib/analytics/types";
import { budgetForMode } from "@/lib/explore";
import { LENS_STORAGE_KEY } from "@/lib/lens";
import { defaultBudgetForMode, parseExploreMode } from "@/lib/mode";
import { parseContributionMode } from "@/lib/rent-reports";
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

function contributionLens(mode: ExploreMode): ExploreMode {
  return mode === "invest" ? "rent" : mode;
}

function replaceLensInUrl(
  pathname: string,
  searchParams: URLSearchParams,
  next: ExploreMode,
  previous: ExploreMode
): string {
  const resolvedNext = pathname === "/contribute" ? contributionLens(next) : next;
  const params = new URLSearchParams(searchParams.toString());
  if (resolvedNext === "rent") {
    params.delete("mode");
  } else {
    params.set("mode", resolvedNext);
  }

  if (pathname === "/explore" && resolvedNext !== previous) {
    const budgetParam = Number(params.get("budget"));
    const rawBudget =
      Number.isFinite(budgetParam) && budgetParam > 0
        ? budgetParam
        : defaultBudgetForMode(previous);
    const newBudget = budgetForMode(resolvedNext, rawBudget);
    if (newBudget !== defaultBudgetForMode(resolvedNext)) {
      params.set("budget", String(newBudget));
    } else {
      params.delete("budget");
    }
    if (resolvedNext === "land") {
      params.delete("type");
      params.delete("bedroom");
    } else if (
      (resolvedNext === "buy" || resolvedNext === "invest") &&
      (params.get("type") === "room" || params.get("type") === "cottage")
    ) {
      params.delete("type");
      params.delete("bedroom");
    }
  }

  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

type LensSearchParamsBridgeProps = {
  onSerializedChange: (serialized: string) => void;
};

/** Isolated boundary — only this suspends; shell children keep rendering. */
function LensSearchParamsBridge({ onSerializedChange }: LensSearchParamsBridgeProps) {
  const searchParams = useSearchParams();
  const serialized = searchParams.toString();

  useEffect(() => {
    onSerializedChange(serialized);
  }, [serialized, onSerializedChange]);

  return null;
}

function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

function LensProviderCore({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const mounted = useMounted();
  const [paramsSerialized, setParamsSerialized] = useState("");
  const searchParams = useMemo(
    () => new URLSearchParams(paramsSerialized),
    [paramsSerialized]
  );
  const onSerializedChange = useCallback((serialized: string) => {
    setParamsSerialized((prev) => (prev === serialized ? prev : serialized));
  }, []);
  const storedLens = useSyncExternalStore(
    subscribeToLensStorage,
    readStoredLens,
    () => null
  );
  const lensRef = useRef<ExploreMode>("rent");
  const syncedStoredLens = useRef(false);

  useEffect(() => {
    syncedStoredLens.current = false;
  }, [pathname]);

  const lens = useMemo(() => {
    if (!mounted) return "rent";
    const fromUrl = searchParams.get("mode");
    if (fromUrl) {
      const parsed = parseExploreMode(fromUrl);
      return pathname === "/contribute" ? parseContributionMode(parsed) : parsed;
    }
    const stored = storedLens ?? "rent";
    return pathname === "/contribute" ? parseContributionMode(stored) : stored;
  }, [mounted, pathname, searchParams, storedLens]);

  useEffect(() => {
    lensRef.current = lens;
  }, [lens]);

  useEffect(() => {
    if (!mounted) return;
    writeStoredLens(lens);
  }, [lens, mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (syncedStoredLens.current) return;
    if (searchParams.get("mode")) return;
    if (storedLens === "rent" || storedLens == null) return;

    syncedStoredLens.current = true;
    router.replace(
      replaceLensInUrl(pathname, searchParams, storedLens, lensRef.current),
      { scroll: false }
    );
  }, [mounted, pathname, router, searchParams, storedLens]);

  const setLens = useCallback(
    (next: ExploreMode, options?: { source?: LensChangePayload["source"] }) => {
      const resolvedNext = pathname === "/contribute" ? contributionLens(next) : next;
      const previous = lensRef.current;
      const source = options?.source ?? "global";
      if (previous !== resolvedNext) {
        trackLensChange({ lens: resolvedNext, previousLens: previous, source });
      }
      writeStoredLens(resolvedNext);
      router.replace(
        replaceLensInUrl(pathname, searchParams, resolvedNext, lensRef.current),
        { scroll: false }
      );
    },
    [pathname, router, searchParams]
  );

  const value = useMemo(() => ({ lens, setLens }), [lens, setLens]);

  return (
    <LensContext.Provider value={value}>
      <Suspense fallback={null}>
        <LensSearchParamsBridge onSerializedChange={onSerializedChange} />
      </Suspense>
      {children}
    </LensContext.Provider>
  );
}

export function LensProvider({ children }: { children: React.ReactNode }) {
  return <LensProviderCore>{children}</LensProviderCore>;
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
  const mounted = useMounted();
  const storedLens = useSyncExternalStore(
    subscribeToLensStorage,
    readStoredLens,
    () => null
  );
  if (!mounted) return defaultLens;
  return storedLens ?? defaultLens;
}

export function readLensFromStorage(): ExploreMode {
  return readStoredLens() ?? "rent";
}
