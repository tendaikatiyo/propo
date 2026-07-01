"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type OnboardingTourContextValue = {
  isActive: boolean;
  startTour: () => void;
  endTour: () => void;
};

const OnboardingTourContext = createContext<OnboardingTourContextValue | null>(null);

export function OnboardingTourProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const pendingStart = useRef(false);

  const endTour = useCallback(() => {
    pendingStart.current = false;
    setIsActive(false);
  }, []);

  const startTour = useCallback(() => {
    if (pathname !== "/") {
      pendingStart.current = true;
      router.push("/");
      return;
    }
    setIsActive(true);
  }, [pathname, router]);

  useEffect(() => {
    if (!pendingStart.current || pathname !== "/") return;

    pendingStart.current = false;
    const timer = window.setTimeout(() => setIsActive(true), 400);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <OnboardingTourContext.Provider value={{ isActive, startTour, endTour }}>
      {children}
    </OnboardingTourContext.Provider>
  );
}

export function useOnboardingTour() {
  const context = useContext(OnboardingTourContext);
  if (!context) {
    throw new Error("useOnboardingTour must be used within OnboardingTourProvider");
  }
  return context;
}
