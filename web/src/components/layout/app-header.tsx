"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Building2, Compass, HelpCircle, Home } from "lucide-react";

import { PinTray } from "@/components/layout/pin-tray";
import { buttonVariants } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/cities", label: "Cities", icon: Building2 },
  { href: "/rankings", label: "Rankings", icon: BarChart3 },
  { href: "/methodology", label: "Methodology", icon: HelpCircle },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
              P
            </span>
            <span>{SITE_NAME}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={buttonVariants({
                  variant: pathname === item.href ? "secondary" : "ghost",
                  size: "sm",
                })}
              >
                {item.label}
              </Link>
            ))}
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
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background md:hidden">
      <div className="grid grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-2 py-2 text-xs",
                active ? "text-primary" : "text-muted-foreground"
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
