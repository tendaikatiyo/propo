"use client";

import { useCallback, useEffect, useState } from "react";

export const ONBOARDING_COMPLETE_KEY = "propo:onboardingComplete";

export function useOnboarding() {
  const [hydrated, setHydrated] = useState(false);
  const [isComplete, setIsComplete] = useState(true);

  useEffect(() => {
    const complete = localStorage.getItem(ONBOARDING_COMPLETE_KEY) === "1";
    setIsComplete(complete);
    setHydrated(true);
  }, []);

  const complete = useCallback(() => {
    localStorage.setItem(ONBOARDING_COMPLETE_KEY, "1");
    setIsComplete(true);
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(ONBOARDING_COMPLETE_KEY);
    setIsComplete(false);
  }, []);

  const shouldShow = hydrated && !isComplete;

  return { shouldShow, isComplete, complete, reset, hydrated };
}
