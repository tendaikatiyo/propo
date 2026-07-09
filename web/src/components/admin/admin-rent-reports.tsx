"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { formatCurrency, formatNumber } from "@/lib/format";
import { isRentReportOutlier, type RentReportRow } from "@/lib/rent-reports";
import { cn } from "@/lib/utils";

function formatDateTime(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-ZW", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

type StatusFilter = "pending" | "approved" | "rejected" | "all";

export function AdminRentReportsPanel() {
  const { data: markets = [] } = useMarketMetrics();
  const [status, setStatus] = useState<StatusFilter>("pending");
  const [reports, setReports] = useState<RentReportRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actingId, setActingId] = useState<string | null>(null);

  const loadReports = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/rent-reports?status=${status}`, {
        cache: "no-store",
      });
      const data = (await response.json()) as { reports?: RentReportRow[]; error?: string };
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to load rent reports.");
      }
      setReports(data.reports ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load rent reports.");
      setReports([]);
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    void loadReports();
  }, [loadReports]);

  async function updateStatus(
    id: string,
    nextStatus: "approved" | "rejected",
    rejectionReason?: string
  ) {
    setActingId(id);
    try {
      const response = await fetch(`/api/admin/rent-reports/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus, rejectionReason }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error ?? "Update failed.");
      }
      await loadReports();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setActingId(null);
    }
  }

  const marketMedianById = new Map(
    markets.map((market) => [market.market_id, market.median_rent])
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["pending", "approved", "rejected", "all"] as const).map((item) => (
            <Button
              key={item}
              type="button"
              size="sm"
              variant={status === item ? "default" : "outline"}
              onClick={() => setStatus(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={loading}
          onClick={() => void loadReports()}
        >
          <RefreshCw className={loading ? "animate-spin" : ""} />
          Refresh
        </Button>
      </div>

      {error ? (
        <Card className="border-destructive/30">
          <CardContent className="pt-6 text-sm text-destructive">{error}</CardContent>
        </Card>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Rent reports</CardTitle>
          <CardDescription>
            Anonymous community rent submissions. Approve to update public community ranges on thin
            suburbs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading reports…</p>
          ) : reports.length === 0 ? (
            <p className="text-sm text-muted-foreground">No {status} reports.</p>
          ) : (
            <>
              <div className="space-y-3 md:hidden">
                {reports.map((report) => {
                  const scrapedMedian = marketMedianById.get(report.market_id);
                  const outlier = isRentReportOutlier(report.monthly_rent, scrapedMedian);
                  return (
                    <div
                      key={report.id}
                      className="rounded-xl border border-border/80 bg-card px-4 py-3 text-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium">
                            {report.suburb}, {report.city}
                          </p>
                          <p className="text-muted-foreground">
                            {report.property_type} · {report.bedrooms} bed ·{" "}
                            {formatCurrency(report.monthly_rent)}/mo
                          </p>
                        </div>
                        <Badge variant={report.status === "approved" ? "success" : report.status === "rejected" ? "destructive" : "secondary"}>
                          {report.status}
                        </Badge>
                      </div>
                      {outlier ? (
                        <p className="mt-2 text-xs text-destructive">
                          Outlier — {formatCurrency(report.monthly_rent)} is over 3× portal median{" "}
                          {scrapedMedian ? formatCurrency(scrapedMedian) : "—"}
                        </p>
                      ) : null}
                      <p className="mt-2 text-xs text-muted-foreground">
                        Submitted {formatDateTime(report.created_at)}
                      </p>
                      {report.status === "pending" ? (
                        <div className="mt-3 flex gap-2">
                          <Button
                            type="button"
                            size="sm"
                            disabled={actingId === report.id}
                            onClick={() => void updateStatus(report.id, "approved")}
                          >
                            Approve
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            disabled={actingId === report.id}
                            onClick={() => void updateStatus(report.id, "rejected")}
                          >
                            Reject
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Suburb</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Rent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report) => {
                      const scrapedMedian = marketMedianById.get(report.market_id);
                      const outlier = isRentReportOutlier(report.monthly_rent, scrapedMedian);
                      return (
                        <TableRow key={report.id}>
                          <TableCell>
                            <div className="font-medium">{report.suburb}</div>
                            <div className="text-xs text-muted-foreground">{report.city}</div>
                            {outlier ? (
                              <div className="mt-1 text-xs text-destructive">
                                Outlier vs portal median{" "}
                                {scrapedMedian ? formatCurrency(scrapedMedian) : "—"}
                              </div>
                            ) : null}
                          </TableCell>
                          <TableCell>
                            {report.property_type} · {report.bedrooms} bed
                          </TableCell>
                          <TableCell className={cn(outlier && "text-destructive")}>
                            {formatCurrency(report.monthly_rent)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                report.status === "approved"
                                  ? "success"
                                  : report.status === "rejected"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {report.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{formatDateTime(report.created_at)}</TableCell>
                          <TableCell className="text-right">
                            {report.status === "pending" ? (
                              <div className="flex justify-end gap-2">
                                <Button
                                  type="button"
                                  size="sm"
                                  disabled={actingId === report.id}
                                  onClick={() => void updateStatus(report.id, "approved")}
                                >
                                  Approve
                                </Button>
                                <Button
                                  type="button"
                                  size="sm"
                                  variant="outline"
                                  disabled={actingId === report.id}
                                  onClick={() => void updateStatus(report.id, "rejected")}
                                >
                                  Reject
                                </Button>
                              </div>
                            ) : (
                              "—"
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground">
        Apply migration <code className="rounded bg-muted px-1 py-0.5">014_rent_reports.sql</code>{" "}
        on Supabase if submissions fail. Pending: {formatNumber(reports.filter((r) => r.status === "pending").length)} shown.
      </p>
    </div>
  );
}
