import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  display = false,
  className,
}: {
  title: string;
  description?: string;
  display?: boolean;
  className?: string;
}) {
  return (
    <header className={cn("space-y-3", className)}>
      <h1
        className={cn(
          display
            ? "font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl"
            : "font-heading text-2xl font-medium tracking-[-0.01em] sm:text-3xl"
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
