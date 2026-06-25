"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Building2, Compass, HelpCircle } from "lucide-react";

import { PinTray } from "@/components/layout/pin-tray";
import { buttonVariants } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/cities", label: "Cities", icon: Building2 },
  { href: "/rankings", label: "Rankings", icon: BarChart3 },
  { href: "/methodology", label: "Methodology", icon: HelpCircle },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl flex-col justify-center gap-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl font-medium tracking-[-0.02em] text-foreground"
          >
            {SITE_NAME.toLowerCase()}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={buttonVariants({
                    variant: active ? "secondary" : "ghost",
                    size: "sm",
                  })}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <PinTray />
          </div>
        </div>

        <div className="md:hidden">
          <PinTray />
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  const items = [
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/cities", label: "Cities", icon: Building2 },
    { href: "/compare", label: "Compare", icon: BarChart3 },
    { href: "/rankings", label: "Rankings", icon: BarChart3 },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-2 py-3 text-[11px] font-medium tracking-[0.12px]",
                active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
