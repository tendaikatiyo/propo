"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Building2, Compass, Home } from "lucide-react";

import { cn } from "@/lib/utils";

const TAB_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/cities", label: "Cities", icon: Building2 },
  { href: "/rankings", label: "Rankings", icon: BarChart3 },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/80 backdrop-blur-xl backdrop-saturate-150 pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-4">
        {TAB_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex min-h-[52px] flex-col items-center justify-center gap-1 px-2 py-2 text-[10px] font-medium transition-transform active:scale-95",
                active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {active ? (
                <span className="absolute top-0 h-0.5 w-8 rounded-full bg-foreground" />
              ) : null}
              <Icon className={cn("size-5", active && "stroke-[2.5px]")} />
              <span className={cn(active && "font-semibold")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
