import Link from "next/link";
import { BarChart3, Compass, Home, MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata({
  title: "Page not found",
  description:
    "This page doesn't exist or may have moved. Explore suburbs by budget or browse cities across Zimbabwe.",
  noIndex: true,
});

const QUICK_LINKS = [
  { href: "/cities", label: "Cities", icon: MapPin },
  { href: "/rankings", label: "Rankings", icon: BarChart3 },
] as const;

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center py-16 text-center sm:py-24">
      <p className="font-mono text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        Error 404
      </p>
      <h1 className="font-display mt-4 text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
        The link may be broken, or this suburb or page no longer exists. Try exploring
        markets in your budget instead.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          <Home aria-hidden />
          Back to home
        </Link>
        <Link href="/explore" className={buttonVariants({ variant: "outline", size: "lg" })}>
          <Compass aria-hidden />
          Explore suburbs
        </Link>
      </div>

      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {QUICK_LINKS.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
