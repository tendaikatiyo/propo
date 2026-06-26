import type { ExploreMode } from "@/lib/types";

/** Rent = sky blue; buy = soft violet — distinct but not success/error green/red. */
export const MODE_ACCENT: Record<
  ExploreMode,
  { chip: string; pillGlow: string }
> = {
  rent: {
    chip: "bg-[#6B9FD4] text-white",
    pillGlow:
      "shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_24px_rgba(107,159,212,0.4)]",
  },
  buy: {
    chip: "bg-[#9B87C4] text-white",
    pillGlow:
      "shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_24px_rgba(155,135,196,0.4)]",
  },
};
