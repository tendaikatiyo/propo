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
      <div className="print:hidden">
        <AppSidebar />
      </div>
      <div className="flex min-h-screen flex-1 flex-col lg:pl-60 print:pl-0">
        <div className="print:hidden">
          <MobileTopBar />
        </div>
        {isHome ? (
          <div className="print:hidden">
            <HomeHero />
          </div>
        ) : null}
        {showCompactHero ? (
          <div className="print:hidden">
            <SiteHero compact variant={heroForCitySlug(citySlug)} />
          </div>
        ) : null}
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-24 sm:px-6 lg:px-8 lg:pb-10 print:max-w-none print:px-0 print:py-0 print:pb-0">
          {children}
        </main>
        <div className="print:hidden">
          <AppFooter />
        </div>
        <div className="print:hidden">
          <MobileTabBar />
        </div>
        <div className="print:hidden">
          <OnboardingTour />
        </div>
      </div>
    </div>
  );
}
