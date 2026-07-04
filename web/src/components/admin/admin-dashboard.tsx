"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminDashboardStats } from "@/lib/admin-stats";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

function formatDateTime(value: string | null | undefined): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-ZW", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function formatIngestRuntimeMinutes(
  startedAt: string,
  completedAt: string | null
): string {
  if (!completedAt) return "—";
  const startMs = new Date(startedAt).getTime();
  const endMs = new Date(completedAt).getTime();
  if (Number.isNaN(startMs) || Number.isNaN(endMs) || endMs < startMs) return "—";
  const minutes = (endMs - startMs) / 60_000;
  if (minutes < 1) return "<1 min";
  return `${minutes.toFixed(1)} min`;
}

function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-ZW", { dateStyle: "medium" }).format(date);
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-border/50 py-2.5 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:border-0 sm:py-0">
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase sm:normal-case sm:font-normal sm:tracking-normal">
        {label}
      </span>
      <span className="break-words sm:max-w-[60%] sm:text-right">{value}</span>
    </div>
  );
}

function MobileDataCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("rounded-xl border border-border/80 bg-card px-4 py-3 text-sm", className)}
    >
      {children}
    </div>
  );
}

function DesktopTable({ children }: { children: React.ReactNode }) {
  return <div className="hidden md:block">{children}</div>;
}

function StatCard({
  label,
  value,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "default" | "warn" | "success";
}) {
  const toneClass =
    tone === "warn"
      ? "text-destructive"
      : tone === "success"
        ? "text-[#166534]"
        : "text-foreground";

  return (
    <Card size="sm">
      <CardHeader className="pb-0">
        <CardDescription className="text-xs sm:text-sm">{label}</CardDescription>
        <CardTitle className={cn("text-lg sm:text-2xl", toneClass)}>{value}</CardTitle>
      </CardHeader>
      {hint ? (
        <CardContent className="pt-0 text-xs text-muted-foreground">{hint}</CardContent>
      ) : null}
    </Card>
  );
}

function StatusBadge({ ok, label }: { ok: boolean; label: string }) {
  return <Badge variant={ok ? "success" : "destructive"}>{label}</Badge>;
}

export function AdminDashboard() {
  const [authState, setAuthState] = useState<"loading" | "guest" | "authed">("loading");
  const [secret, setSecret] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [stats, setStats] = useState<AdminDashboardStats | null>(null);
  const [statsError, setStatsError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadAuth = useCallback(async () => {
    const response = await fetch("/api/admin/auth", { cache: "no-store" });
    const data = (await response.json()) as { configured?: boolean; authenticated?: boolean };
    if (!data.configured) {
      setAuthState("guest");
      setAuthError("Admin is not configured. Set ADMIN_SECRET in your web environment.");
      return;
    }
    setAuthState(data.authenticated ? "authed" : "guest");
  }, []);

  const loadStats = useCallback(async () => {
    setRefreshing(true);
    setStatsError(null);
    try {
      const response = await fetch("/api/admin/stats", { cache: "no-store" });
      const data = (await response.json()) as AdminDashboardStats & { error?: string };
      if (!response.ok) {
        if (response.status === 401) {
          setAuthState("guest");
          setStats(null);
          return;
        }
        throw new Error(data.error ?? "Failed to load admin stats.");
      }
      setStats(data);
      setAuthState("authed");
    } catch (error) {
      setStatsError(error instanceof Error ? error.message : "Failed to load admin stats.");
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadAuth().then(() => loadStats());
  }, [loadAuth, loadStats]);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setAuthError(null);
    const response = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret }),
    });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setAuthError(data.error ?? "Login failed.");
      return;
    }
    setSecret("");
    setAuthState("authed");
    await loadStats();
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthState("guest");
    setStats(null);
  }

  if (authState === "loading") {
    return (
      <div className="space-y-6 pb-6">
        <PageHeader title="Admin ops" description="Loading pipeline health…" />
      </div>
    );
  }

  if (authState === "guest") {
    return (
      <div className="mx-auto w-full max-w-md space-y-6 pb-6">
        <PageHeader
          title="Admin ops"
          description="Private pipeline and data health dashboard. Not indexed or linked from the public site."
        />
        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Enter the ADMIN_SECRET configured for this deployment.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleLogin}>
              <Input
                type="password"
                autoComplete="current-password"
                placeholder="Admin secret"
                value={secret}
                onChange={(event) => setSecret(event.target.value)}
              />
              {authError ? <p className="text-sm text-destructive">{authError}</p> : null}
              <Button type="submit" className="w-full">
                Unlock dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const marketIdPct =
    stats && stats.listings.active > 0
      ? Math.round((stats.listings.withMarketId / stats.listings.active) * 100)
      : 0;
  const imageUrlPct =
    stats && stats.listings.active > 0
      ? Math.round((stats.listings.withImageUrl / stats.listings.active) * 100)
      : 0;

  return (
    <div className="space-y-6 pb-6 sm:space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <PageHeader
          title="Admin ops"
          description="Pipeline health, listing inventory, and sync status. Internal use only."
          className="min-w-0"
        />
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={refreshing}
            onClick={() => void loadStats()}
            className="w-full sm:w-auto"
          >
            <RefreshCw className={refreshing ? "animate-spin" : ""} />
            Refresh
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => void handleLogout()}
            className="w-full sm:w-auto"
          >
            Sign out
          </Button>
        </div>
      </div>

      {statsError ? (
        <Card className="border-destructive/30">
          <CardContent className="pt-6 text-sm text-destructive">{statsError}</CardContent>
        </Card>
      ) : null}

      {stats?.error ? (
        <Card className="border-destructive/30">
          <CardContent className="pt-6 text-sm text-destructive">{stats.error}</CardContent>
        </Card>
      ) : null}

      {stats ? (
        <>
          <div className="flex flex-wrap gap-2">
            <StatusBadge ok={stats.supabaseAdminConfigured} label="Service role" />
            <StatusBadge ok={stats.rpcAvailable} label="RPC stats" />
            <StatusBadge
              ok={stats.rankings.present && stats.marketMetrics.count > 0}
              label="Dashboard sync"
            />
          </div>

          <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            <StatCard
              label="Active listings"
              value={formatNumber(stats.listings.active)}
              hint={`${formatNumber(stats.listings.inactive)} inactive · ${formatNumber(stats.listings.total)} total`}
            />
            <StatCard
              label="Snapshot dates"
              value={formatNumber(stats.marketSnapshotsDaily.distinctDates)}
              hint={
                stats.marketSnapshotsDaily.minDate && stats.marketSnapshotsDaily.maxDate
                  ? `${formatDate(stats.marketSnapshotsDaily.minDate)} → ${formatDate(stats.marketSnapshotsDaily.maxDate)}`
                  : `${formatNumber(stats.marketSnapshotsDaily.totalRows)} daily rows`
              }
            />
            <StatCard
              label="Suburbs (market_metrics)"
              value={formatNumber(stats.marketMetrics.count)}
              hint={`${formatNumber(stats.marketMetrics.lowConfidence)} below confidence 20`}
              tone={stats.marketMetrics.lowConfidence > 0 ? "warn" : "default"}
            />
            <StatCard
              label="Cities"
              value={formatNumber(stats.cities.count)}
              hint={`Metrics updated ${formatDateTime(stats.cities.updatedAtMax)}`}
            />
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Data freshness</CardTitle>
                <CardDescription>When listings and snapshots were last seen.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-0 text-sm sm:space-y-3">
                <DetailRow
                  label="First seen range"
                  value={
                    <>
                      {formatDate(stats.listings.dateRange.firstSeenEarliest)} →{" "}
                      {formatDate(stats.listings.dateRange.firstSeenLatest)}
                    </>
                  }
                />
                <DetailRow
                  label="Last seen range"
                  value={
                    <>
                      {formatDate(stats.listings.dateRange.lastSeenEarliest)} →{" "}
                      {formatDateTime(stats.listings.dateRange.lastSeenLatest)}
                    </>
                  }
                />
                <DetailRow
                  label="Daily snapshots"
                  value={
                    <>
                      {formatDate(stats.marketSnapshotsDaily.minDate)} →{" "}
                      {formatDate(stats.marketSnapshotsDaily.maxDate)}
                    </>
                  }
                />
                <DetailRow
                  label="Listing snapshots scraped"
                  value={
                    <>
                      {formatDateTime(stats.listingSnapshots.earliest)} →{" "}
                      {formatDateTime(stats.listingSnapshots.latest)}
                    </>
                  }
                />
                <DetailRow
                  label="Local JSON bundle"
                  value={formatDateTime(stats.localDataUpdatedAt)}
                />
                <DetailRow
                  label="Rankings payload"
                  value={
                    stats.rankings.present
                      ? formatDateTime(stats.rankings.updatedAt)
                      : "Missing"
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data quality</CardTitle>
                <CardDescription>Coverage and sanity checks on active inventory.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-0 text-sm sm:space-y-3">
                <DetailRow
                  label="market_id coverage"
                  value={
                    <>
                      {formatNumber(stats.listings.withMarketId)} ({marketIdPct}%)
                    </>
                  }
                />
                <DetailRow
                  label="image_url coverage"
                  value={
                    <>
                      {formatNumber(stats.listings.withImageUrl)} ({imageUrlPct}%)
                    </>
                  }
                />
                <DetailRow
                  label="Suspect rent > $6k"
                  value={
                    <span className={stats.listings.suspectRentOver6k > 0 ? "text-destructive" : ""}>
                      {formatNumber(stats.listings.suspectRentOver6k)}
                    </span>
                  }
                />
                <DetailRow
                  label="Days on market (active)"
                  value={
                    <>
                      min {formatNumber(stats.listings.daysOnMarket.min)} · avg{" "}
                      {formatNumber(stats.listings.daysOnMarket.avg)} · max{" "}
                      {formatNumber(stats.listings.daysOnMarket.max)}
                    </>
                  }
                />
                <DetailRow
                  label="Listing snapshots"
                  value={
                    <>
                      {formatNumber(stats.listingSnapshots.total)} rows ·{" "}
                      {formatNumber(stats.listingSnapshots.uniqueListings)} listings
                    </>
                  }
                />
                <DetailRow
                  label="Snapshot table rows"
                  value={formatNumber(stats.marketSnapshotsDaily.totalRows)}
                />
              </CardContent>
            </Card>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Listings by source</CardTitle>
              <CardDescription>Active and inactive counts per source and listing type.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 md:hidden">
                {stats.listings.breakdown.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No listing rows returned.</p>
                ) : (
                  stats.listings.breakdown.map((row) => (
                    <MobileDataCard key={`${row.listingType}-${row.source}-${row.isActive ? "active" : "inactive"}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-medium">{row.listingType}</p>
                          <p className="truncate text-muted-foreground">{row.source}</p>
                        </div>
                        <Badge variant={row.isActive ? "success" : "secondary"}>
                          {row.isActive ? "active" : "inactive"}
                        </Badge>
                      </div>
                      <p className="mt-2 font-mono text-base font-medium">
                        {formatNumber(row.count)}
                      </p>
                    </MobileDataCard>
                  ))
                )}
              </div>
              <DesktopTable>
                <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.listings.breakdown.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-muted-foreground">
                        No listing rows returned.
                      </TableCell>
                    </TableRow>
                  ) : (
                    stats.listings.breakdown.map((row) => (
                      <TableRow
                        key={`${row.listingType}-${row.source}-${row.isActive ? "active" : "inactive"}`}
                      >
                        <TableCell>{row.listingType}</TableCell>
                        <TableCell>{row.source}</TableCell>
                        <TableCell>
                          <Badge variant={row.isActive ? "success" : "secondary"}>
                            {row.isActive ? "active" : "inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          {formatNumber(row.count)}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
              </DesktopTable>
            </CardContent>
          </Card>

          <section className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top cities (active)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 md:hidden">
                  {stats.listings.topCities.map((row) => (
                    <MobileDataCard key={row.city}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="min-w-0 truncate font-medium">{row.city}</span>
                        <span className="shrink-0 font-mono text-base font-medium">
                          {formatNumber(row.count)}
                        </span>
                      </div>
                    </MobileDataCard>
                  ))}
                </div>
                <DesktopTable>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>City</TableHead>
                      <TableHead className="text-right">Listings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stats.listings.topCities.map((row) => (
                      <TableRow key={row.city}>
                        <TableCell>{row.city}</TableCell>
                        <TableCell className="text-right font-mono">
                          {formatNumber(row.count)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </DesktopTable>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent ingest runs</CardTitle>
                <CardDescription>Last 10 pipeline ingests mirrored to Supabase.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 md:hidden">
                  {stats.ingestRuns.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No ingest runs recorded.</p>
                  ) : (
                    stats.ingestRuns.map((run) => (
                      <MobileDataCard key={run.id}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-medium">Run #{run.id}</p>
                            <p className="text-muted-foreground">{formatDateTime(run.startedAt)}</p>
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                          <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                            <p className="text-muted-foreground">Processed</p>
                            <p className="mt-0.5 font-mono text-sm font-medium">
                              {formatNumber(run.listingsProcessed)}
                            </p>
                          </div>
                          <div className="rounded-lg bg-muted/50 px-2.5 py-2">
                            <p className="text-muted-foreground">Deactivated</p>
                            <p className="mt-0.5 font-mono text-sm font-medium">
                              {formatNumber(run.listingsDeactivated)}
                            </p>
                          </div>
                          <div className="col-span-2 rounded-lg bg-muted/50 px-2.5 py-2">
                            <p className="text-muted-foreground">Runtime</p>
                            <p className="mt-0.5 font-mono text-sm font-medium">
                              {formatIngestRuntimeMinutes(run.startedAt, run.completedAt)}
                            </p>
                          </div>
                        </div>
                      </MobileDataCard>
                    ))
                  )}
                </div>
                <DesktopTable>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Run</TableHead>
                      <TableHead>Started</TableHead>
                      <TableHead className="text-right">Runtime</TableHead>
                      <TableHead className="text-right">Processed</TableHead>
                      <TableHead className="text-right">Deactivated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stats.ingestRuns.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-muted-foreground">
                          No ingest runs recorded.
                        </TableCell>
                      </TableRow>
                    ) : (
                      stats.ingestRuns.map((run) => (
                        <TableRow key={run.id}>
                          <TableCell>#{run.id}</TableCell>
                          <TableCell>{formatDateTime(run.startedAt)}</TableCell>
                          <TableCell className="text-right font-mono">
                            {formatIngestRuntimeMinutes(run.startedAt, run.completedAt)}
                          </TableCell>
                          <TableCell className="text-right font-mono">
                            {formatNumber(run.listingsProcessed)}
                          </TableCell>
                          <TableCell className="text-right font-mono">
                            {formatNumber(run.listingsDeactivated)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
                </DesktopTable>
              </CardContent>
            </Card>
          </section>

          <p className="break-words text-xs text-muted-foreground">
            Generated {formatDateTime(stats.generatedAt)} · apply migration{" "}
            <code className="rounded bg-muted px-1 py-0.5">009_admin_dashboard.sql</code> on Supabase
            if RPC stats are missing.
          </p>
        </>
      ) : null}
    </div>
  );
}
