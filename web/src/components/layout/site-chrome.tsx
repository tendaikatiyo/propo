import Image from "next/image";
import Link from "next/link";

import { FooterOrbs } from "@/components/ui/footer-orbs";
import { SITE_NAME } from "@/lib/constants";

export function AppFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/80 bg-card">
      <FooterOrbs />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-lg font-medium">{SITE_NAME.toLowerCase()}</p>
          <p className="text-sm text-muted-foreground">
            Property data index for Zimbabwe
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/explore" className="hover:text-foreground">
            Explore
          </Link>
          <Link href="/cities" className="hover:text-foreground">
            Cities
          </Link>
          <Link href="/methodology" className="hover:text-foreground">
            Methodology
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function SiteHero({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "relative h-32 w-full overflow-hidden border-b border-border/80 sm:h-40"
          : "relative h-52 w-full overflow-hidden border-b border-border/80 sm:h-72 md:h-96"
      }
    >
      <Image
        src="/harare_skyline_bg2.png"
        alt="Harare skyline illustration"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
      {!compact ? (
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/35 bg-white/25 px-4 py-1.5 text-[11px] font-medium tracking-[0.14em] text-foreground uppercase shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150">
            Zimbabwe property index
          </span>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl">
            Where can you afford in Zimbabwe?
          </h1>
        </div>
      ) : null}
    </div>
  );
}
