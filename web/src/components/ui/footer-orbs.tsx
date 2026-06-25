import { cn } from "@/lib/utils";

/** Zimbabwe flag accent orbs — red, yellow, green. */
const ZW_ORB_STYLES = {
  red: "bg-[radial-gradient(circle,rgba(222,32,16,0.35)_0%,transparent_70%)]",
  yellow: "bg-[radial-gradient(circle,rgba(252,209,22,0.45)_0%,transparent_70%)]",
  green: "bg-[radial-gradient(circle,rgba(0,99,57,0.4)_0%,transparent_70%)]",
} as const;

export function FooterOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute bottom-0 left-[10%] size-[200px] rounded-full blur-3xl sm:size-[280px]",
          ZW_ORB_STYLES.green
        )}
      />
      <div
        className={cn(
          "absolute bottom-4 left-[40%] size-[160px] rounded-full blur-3xl sm:size-[220px]",
          ZW_ORB_STYLES.yellow
        )}
      />
      <div
        className={cn(
          "absolute right-[8%] bottom-0 size-[180px] rounded-full blur-3xl sm:size-[260px]",
          ZW_ORB_STYLES.red
        )}
      />
    </div>
  );
}
