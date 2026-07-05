"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  Compass,
  GitCompare,
  HelpCircle,
  Home,
  // TrendingUp,
} from "lucide-react";

import { GlobalLensSwitcher } from "@/components/layout/global-lens-switcher";
import { PinTray } from "@/components/layout/pin-tray";
import { DataFreshnessPill } from "@/components/layout/data-freshness-pill";
import { PropoLogomark } from "@/components/brand/propo-logomark";
import { BetaBadge } from "@/components/brand/beta-badge";
import { SITE_NAME } from "@/lib/constants";
import { motionNav } from "@/lib/motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/cities", label: "Cities", icon: Building2 },
  { href: "/compare", label: "Compare", icon: GitCompare },
  // { href: "/?mode=invest", label: "Invest", icon: TrendingUp, investLens: true as const },
  { href: "/rankings", label: "Rankings", icon: BarChart3 },
  { href: "/methodology", label: "Methodology", icon: HelpCircle },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-border/80 bg-card lg:flex">
      <div className="flex h-16 items-center border-b border-border/80 px-5">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-medium tracking-[-0.02em]"
        >
          <PropoLogomark size={32} />
          <span>{SITE_NAME.toLowerCase()}</span>
          <BetaBadge />
        </Link>
      </div>

      <AppSidebarNav />

      {!isHome ? (
        <div className="border-t border-border/80 px-4 py-4">
          <GlobalLensSwitcher />
        </div>
      ) : null}

      <div className="border-t border-border/80 p-4 space-y-3">
        <DataFreshnessPill className="w-full text-center text-[10px]" />
        <PinTray />
      </div>
    </aside>
  );
}

function AppSidebarNav() {
  const pathname = usePathname();

  return (
    <nav data-tour="nav-sidebar" className="flex-1 space-y-1 p-3">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              motionNav,
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
              active
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            )}
          >
            <Icon className="size-4 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
