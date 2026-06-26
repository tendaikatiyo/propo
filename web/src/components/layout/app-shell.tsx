"use client";

import { usePathname } from "next/navigation";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppFooter, SiteHero } from "@/components/layout/site-chrome";
import { HomeHero } from "@/components/layout/home-hero";
import { OnboardingTour } from "@/components/onboarding/onboarding-tour";
import { MobileTabBar } from "@/components/mobile/mobile-tab-bar";
import { MobileTopBar } from "@/components/mobile/mobile-top-bar";
import { heroForCitySlug } from "@/lib/hero";

function citySlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/cities\/([^/]+)/);
  return match?.[1] ?? null;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const citySlug = citySlugFromPath(pathname);
  const showCompactHero = citySlug != null;

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col lg:pl-60">
        <MobileTopBar />
        {isHome ? <HomeHero /> : null}
        {showCompactHero ? (
          <SiteHero compact variant={heroForCitySlug(citySlug)} />
        ) : null}
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-24 sm:px-6 lg:px-8 lg:pb-10">
          {children}
        </main>
        <AppFooter />
        <MobileTabBar />
        <OnboardingTour />
      </div>
    </div>
  );
}
