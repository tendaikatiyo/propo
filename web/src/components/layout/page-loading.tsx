import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function StaggerBlock({
  className,
  delayMs = 0,
}: {
  className?: string;
  delayMs?: number;
}) {
  return (
    <Skeleton
      className={cn("skeleton-stagger rounded-2xl", className)}
      style={{ animationDelay: `${delayMs}ms` }}
    />
  );
}

export function PageHeaderSkeleton({ delayMs = 0 }: { delayMs?: number }) {
  return (
    <div className="space-y-3">
      <StaggerBlock className="h-8 w-48" delayMs={delayMs} />
      <StaggerBlock className="h-4 w-full max-w-xl" delayMs={delayMs + 80} />
    </div>
  );
}

export function CardGridSkeleton({
  count = 4,
  columns = "sm:grid-cols-2 lg:grid-cols-4",
  delayMs = 0,
}: {
  count?: number;
  columns?: string;
  delayMs?: number;
}) {
  return (
    <div className={cn("grid gap-4", columns)}>
      {Array.from({ length: count }).map((_, i) => (
        <StaggerBlock key={i} className="h-28" delayMs={delayMs + i * 100} />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 6, delayMs = 200 }: { rows?: number; delayMs?: number }) {
  return (
    <div className="space-y-2 overflow-hidden rounded-2xl border border-border/80 p-4">
      <StaggerBlock className="h-10 w-full" delayMs={delayMs} />
      {Array.from({ length: rows }).map((_, i) => (
        <StaggerBlock key={i} className="h-12 w-full" delayMs={delayMs + 120 + i * 80} />
      ))}
    </div>
  );
}

export function SuburbPageLoading() {
  return (
    <div className="space-y-8">
      <StaggerBlock className="h-4 w-36" delayMs={0} />
      <div className="space-y-3">
        <StaggerBlock className="h-4 w-24" delayMs={60} />
        <StaggerBlock className="h-10 w-64" delayMs={120} />
      </div>
      <CardGridSkeleton count={6} columns="sm:grid-cols-2 lg:grid-cols-3" delayMs={180} />
      <StaggerBlock className="h-40 w-full" delayMs={400} />
      <StaggerBlock className="h-32 w-full" delayMs={480} />
    </div>
  );
}

export function CityPageLoading() {
  return (
    <div className="space-y-8">
      <StaggerBlock className="h-4 w-28" delayMs={0} />
      <PageHeaderSkeleton delayMs={60} />
      <CardGridSkeleton count={5} columns="sm:grid-cols-2 lg:grid-cols-5" delayMs={160} />
      <CardGridSkeleton count={2} columns="lg:grid-cols-2" delayMs={320} />
      <TableSkeleton rows={8} delayMs={420} />
    </div>
  );
}

export function ExplorePageLoading() {
  return (
    <div className="space-y-8">
      <StaggerBlock className="h-4 w-32" delayMs={0} />
      <PageHeaderSkeleton delayMs={60} />
      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <StaggerBlock className="hidden h-96 lg:block" delayMs={140} />
        <div className="space-y-6">
          <StaggerBlock className="h-10 w-full lg:hidden" delayMs={140} />
          <TableSkeleton rows={5} delayMs={220} />
        </div>
      </div>
    </div>
  );
}

export function CitiesPageLoading() {
  return (
    <div className="space-y-10">
      <StaggerBlock className="h-4 w-32" delayMs={0} />
      <PageHeaderSkeleton delayMs={60} />
      <StaggerBlock className="h-10 max-w-md" delayMs={140} />
      <CardGridSkeleton count={6} columns="sm:grid-cols-2 lg:grid-cols-3" delayMs={220} />
    </div>
  );
}

export function RankingsPageLoading() {
  return (
    <div className="space-y-10">
      <StaggerBlock className="h-4 w-32" delayMs={0} />
      <PageHeaderSkeleton delayMs={60} />
      <CardGridSkeleton count={6} columns="lg:grid-cols-2" delayMs={160} />
    </div>
  );
}
