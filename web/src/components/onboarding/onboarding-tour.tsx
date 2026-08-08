"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useOnboardingTour } from "@/components/onboarding/onboarding-tour-context";
import { TourStep, type TourStepConfig } from "@/components/onboarding/tour-step";

const MOBILE_STEPS: TourStepConfig[] = [
  {
    target: "hero",
    title: "Welcome to propo",
    body: "Search any suburb to open its market profile — rent, sale, and land medians in one place.",
    placement: "bottom",
  },
  {
    target: "nav-tabs",
    title: "Navigate the app",
    body: "Use the tab bar to jump between Home, Explore, Cities, and Rankings.",
    placement: "top",
  },
  {
    placement: "center",
    title: "Explore directories",
    body: "Explore lists suburbs and land markets. Filters start off — open them when you want to narrow by city or data coverage.",
  },
  {
    target: "menu-button",
    title: "Compare suburbs",
    body: "Pin up to 3 suburbs from any table or card. With 2+ pins, use the Compare bar above the tab bar or open the menu.",
    placement: "bottom",
  },
  {
    placement: "center",
    title: "You're all set",
    body: "Look up suburbs from home, browse Explore, pin markets to compare, and dig into trends on each profile.",
  },
];

const DESKTOP_STEPS: TourStepConfig[] = [
  {
    target: "hero",
    title: "Welcome to propo",
    body: "Search any suburb to open its market profile — rent, sale, and land medians in one place.",
    placement: "bottom",
  },
  {
    target: "nav-sidebar",
    title: "Navigate the app",
    body: "Use the sidebar to move between Home, Explore, Cities, Compare, and Rankings.",
    placement: "right",
  },
  {
    placement: "center",
    title: "Explore directories",
    body: "Explore has Suburbs and Land tabs. Filters are optional and off by default — open them when you want to refine the list.",
  },
  {
    target: "pin-tray",
    title: "Compare suburbs",
    body: "Pin up to 3 suburbs from any table or card, then open Compare to view them side by side.",
    placement: "right",
  },
  {
    placement: "center",
    title: "You're all set",
    body: "Look up suburbs from home, browse Explore, pin markets to compare, and dig into trends on each profile.",
  },
];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function OnboardingTour() {
  const { isActive, endTour } = useOnboardingTour();
  const isDesktop = useIsDesktop();
  const [stepIndex, setStepIndex] = useState(0);
  const wasActive = useRef(false);

  const steps = useMemo(
    () => (isDesktop ? DESKTOP_STEPS : MOBILE_STEPS),
    [isDesktop]
  );

  useEffect(() => {
    if (isActive && !wasActive.current) {
      setStepIndex(0);
    }
    wasActive.current = isActive;
  }, [isActive]);

  const handleBack = useCallback(() => {
    setStepIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleNext = useCallback(() => {
    if (stepIndex + 1 >= steps.length) {
      endTour();
      return;
    }
    setStepIndex((i) => i + 1);
  }, [stepIndex, steps.length, endTour]);

  const handleSkip = useCallback(() => {
    endTour();
  }, [endTour]);

  if (!isActive) return null;

  return (
    <TourStep
      step={steps[stepIndex]}
      stepIndex={stepIndex}
      totalSteps={steps.length}
      onNext={handleNext}
      onBack={handleBack}
      onSkip={handleSkip}
    />
  );
}
