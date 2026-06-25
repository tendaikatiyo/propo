import { cn } from "@/lib/utils";

type OrbVariant = "mint" | "peach" | "lavender" | "sky" | "rose";

const ORB_STYLES: Record<OrbVariant, string> = {
  mint: "bg-[radial-gradient(circle,rgba(167,229,211,0.55)_0%,transparent_70%)]",
  peach: "bg-[radial-gradient(circle,rgba(244,197,168,0.5)_0%,transparent_70%)]",
  lavender: "bg-[radial-gradient(circle,rgba(200,184,224,0.5)_0%,transparent_70%)]",
  sky: "bg-[radial-gradient(circle,rgba(168,200,232,0.5)_0%,transparent_70%)]",
  rose: "bg-[radial-gradient(circle,rgba(232,184,196,0.45)_0%,transparent_70%)]",
};

export function GradientOrbs({
  className,
  variants = ["mint", "lavender", "sky"],
}: {
  className?: string;
  variants?: OrbVariant[];
}) {
  const positions = [
    "left-[8%] top-[10%] size-[280px] sm:size-[360px]",
    "right-[5%] top-[20%] size-[240px] sm:size-[320px]",
    "left-[35%] bottom-[5%] size-[200px] sm:size-[280px]",
  ];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {variants.map((variant, index) => (
        <div
          key={variant}
          className={cn(
            "absolute rounded-full blur-3xl",
            ORB_STYLES[variant],
            positions[index % positions.length]
          )}
        />
      ))}
    </div>
  );
}
