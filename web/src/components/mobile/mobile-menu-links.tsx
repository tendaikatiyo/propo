"use client";

import Link from "next/link";
import { Building2, ChevronRight, Compass, HelpCircle } from "lucide-react";

import { HowItWorksButton } from "@/components/onboarding/how-it-works-button";
import { DataFreshnessPill } from "@/components/layout/data-freshness-pill";

const LINKS = [
  { href: "/methodology", label: "Methodology", icon: HelpCircle },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/cities", label: "Cities", icon: Building2 },
] as const;

export function MobileMenuLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <section className="space-y-2">
      <h3 className="px-1 text-[13px] font-medium uppercase tracking-wide text-muted-foreground">
        More
      </h3>
      <nav className="divide-y divide-border/60 overflow-hidden rounded-2xl bg-muted/50">
        <HowItWorksButton variant="menu" onNavigate={onNavigate} />
        {LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex min-h-[44px] items-center gap-3 px-4 py-3 active:bg-muted/80"
            >
              <Icon className="size-[18px] shrink-0 text-muted-foreground" />
              <span className="flex-1 font-heading text-[15px] font-medium">
                {item.label}
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground/60" />
            </Link>
          );
        })}
      </nav>
      <p className="px-1 pt-2 text-center text-[12px] text-muted-foreground">
        Property data index for Zimbabwe
      </p>
      <div className="flex justify-center pt-1">
        <DataFreshnessPill />
      </div>
    </section>
  );
}
