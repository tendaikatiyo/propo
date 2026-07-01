"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useOnboardingTour } from "@/components/onboarding/onboarding-tour-context";
import { TourStep, type TourStepConfig } from "@/components/onboarding/tour-step";

const MOBILE_STEPS: TourStepConfig[] = [
  {
    target: "hero",
    title: "Welcome to propo",
    body: "Set your rent or buy budget to discover suburbs across Zimbabwe that match what you can afford.",
    placement: "bottom",
  },
  {
    target: "nav-tabs",
    title: "Navigate the app",
    body: "Use the tab bar to jump between Home, Explore, and Cities.",
    placement: "top",
  },
  {
    target: "menu-button",
    title: "Compare suburbs",
    body: "Open the menu to see pinned suburbs and compare up to 3 markets side by side.",
    placement: "bottom",
  },
  {
    target: "menu-button",
    title: "Filters",
    body: "In the menu, expand Filters to set budget, city, and property type — then jump straight to Explore.",
    placement: "bottom",
  },
  {
    placement: "center",
    title: "You're all set",
    body: "Pin suburbs from Explore or city pages, compare them in the menu, and dig into listings on suburb profiles.",
  },
];

const DESKTOP_STEPS: TourStepConfig[] = [
  {
    target: "hero",
    title: "Welcome to propo",
    body: "Set your rent or buy budget to discover suburbs across Zimbabwe that match what you can afford.",
    placement: "bottom",
  },
  {
    target: "nav-sidebar",
    title: "Navigate the app",
    body: "Use the sidebar to move between Home, Explore, Cities, and more.",
    placement: "right",
  },
  {
    target: "pin-tray",
    title: "Compare suburbs",
    body: "Pin up to 3 suburbs from any table or card, then open Compare to view them side by side.",
    placement: "right",
  },
  {
    placement: "center",
    title: "Filters on Explore",
    body: "On the Explore page, use the left filter panel to narrow suburbs by budget, city, property type, and bedrooms.",
  },
  {
    placement: "center",
    title: "You're all set",
    body: "Browse cities, pin suburbs, compare markets, and check active listings on suburb profiles.",
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
