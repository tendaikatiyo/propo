/** Shared liquid-glass surface tokens (mobile pills, buttons, etc.) */

export const liquidGlassPillClass =
  "rounded-full border border-white/40 bg-white/25 backdrop-blur-xl backdrop-saturate-150";

export const liquidGlassPillShadow = "shadow-[0_8px_32px_rgba(0,0,0,0.12)]";

/** Larger frosted panels — keep bg-opacity low so photos show through. */
export const liquidGlassPanelClass = [
  "rounded-3xl border border-white/45",
  "bg-white/18 backdrop-blur-2xl backdrop-saturate-150",
  "shadow-[0_8px_40px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.55)]",
].join(" ");

/** Hero filter panel — milky frost so dark text stays readable over photos. */
export const liquidGlassHeroPanelClass = [
  "rounded-3xl border border-white/70",
  "bg-white/58 backdrop-blur-2xl backdrop-saturate-150",
  "shadow-[0_12px_48px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.85)]",
  "ring-1 ring-white/40",
].join(" ");

export const liquidGlassPanelSoftClass = [
  "rounded-2xl border border-white/35",
  "bg-white/12 backdrop-blur-xl backdrop-saturate-150",
  "shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.4)]",
].join(" ");

/** Inset highlight + soft drop shadow for interactive glass controls */
export const liquidGlassButtonShadow =
  "shadow-[0_4px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.45)]";

export const liquidGlassButtonBase =
  "border backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-200";

export const liquidGlassButtonDefault = [
  liquidGlassButtonBase,
  liquidGlassButtonShadow,
  "border-white/15 bg-primary/80 text-primary-foreground",
  "hover:border-white/25 hover:bg-primary/88",
  "active:shadow-[0_2px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]",
].join(" ");

export const liquidGlassButtonOutline = [
  liquidGlassButtonBase,
  liquidGlassButtonShadow,
  "border-white/55 bg-white/30 text-foreground",
  "hover:border-white/70 hover:bg-white/45",
  "active:bg-white/38",
].join(" ");

export const liquidGlassButtonSecondary = [
  liquidGlassButtonBase,
  liquidGlassButtonShadow,
  "border-white/45 bg-white/22 text-secondary-foreground",
  "hover:border-white/60 hover:bg-white/38",
  "active:bg-white/30",
].join(" ");

export const liquidGlassButtonGhost = [
  "border border-transparent backdrop-blur-md",
  "hover:border-white/40 hover:bg-white/28 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.35)]",
].join(" ");

export const liquidGlassButtonDestructive = [
  liquidGlassButtonBase,
  "border-red-200/60 bg-red-500/12 text-destructive shadow-[0_4px_16px_rgba(220,38,38,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]",
  "hover:border-red-200/80 hover:bg-red-500/18",
].join(" ");
