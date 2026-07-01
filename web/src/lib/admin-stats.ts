import { getDataUpdatedAt } from "@/lib/data-freshness-server";
import { createAdminSupabaseClient, isSupabaseAdminConfigured } from "@/lib/supabase-admin";

export type ListingBreakdownRow = {
  listingType: string;
  source: string;
  isActive: boolean;
  count: number;
};

export type IngestRunRow = {
  id: number;
  startedAt: string;
  completedAt: string | null;
  sourcesIngested: string | null;
  listingsProcessed: number;
  snapshotsAdded: number;
  listingsDeactivated: number;
};

export type AdminDashboardStats = {
  generatedAt: string;
  adminConfigured: boolean;
  supabaseAdminConfigured: boolean;
  localDataUpdatedAt: string | null;
  rpcAvailable: boolean;
  error: string | null;
  listings: {
    total: number;
    active: number;
    inactive: number;
    withMarketId: number;
    withImageUrl: number;
    breakdown: ListingBreakdownRow[];
    dateRange: {
      firstSeenEarliest: string | null;
      firstSeenLatest: string | null;
      lastSeenEarliest: string | null;
      lastSeenLatest: string | null;
    };
    daysOnMarket: { min: number | null; avg: number | null; max: number | null };
    topCities: Array<{ city: string; count: number }>;
    suspectRentOver6k: number;
  };
  listingSnapshots: {
    total: number;
    uniqueListings: number;
    earliest: string | null;
    latest: string | null;
  };
  marketSnapshotsDaily: {
    totalRows: number;
    distinctDates: number;
    minDate: string | null;
    maxDate: string | null;
    daysTracked: number;
  };
  ingestRuns: IngestRunRow[];
  marketMetrics: {
    count: number;
    lowConfidence: number;
    updatedAtMax: string | null;
  };
  cities: {
    count: number;
    updatedAtMax: string | null;
  };
  rankings: {
    present: boolean;
    updatedAt: string | null;
  };
};

const EMPTY_STATS: Omit<
  AdminDashboardStats,
  "generatedAt" | "adminConfigured" | "supabaseAdminConfigured" | "localDataUpdatedAt" | "rpcAvailable" | "error"
> = {
  listings: {
    total: 0,
    active: 0,
    inactive: 0,
    withMarketId: 0,
    withImageUrl: 0,
    breakdown: [],
    dateRange: {
      firstSeenEarliest: null,
      firstSeenLatest: null,
      lastSeenEarliest: null,
      lastSeenLatest: null,
    },
    daysOnMarket: { min: null, avg: null, max: null },
    topCities: [],
    suspectRentOver6k: 0,
  },
  listingSnapshots: {
    total: 0,
    uniqueListings: 0,
    earliest: null,
    latest: null,
  },
  marketSnapshotsDaily: {
    totalRows: 0,
    distinctDates: 0,
    minDate: null,
    maxDate: null,
    daysTracked: 0,
  },
  ingestRuns: [],
  marketMetrics: { count: 0, lowConfidence: 0, updatedAtMax: null },
  cities: { count: 0, updatedAtMax: null },
  rankings: { present: false, updatedAt: null },
};

function asNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return 0;
}

function asNullableNumber(value: unknown): number | null {
  if (value == null) return null;
  const parsed = asNumber(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function asString(value: unknown): string | null {
  return typeof value === "string" ? value : value == null ? null : String(value);
}

function parseRpcPayload(payload: unknown): Omit<AdminDashboardStats, "generatedAt" | "adminConfigured" | "supabaseAdminConfigured" | "localDataUpdatedAt" | "rpcAvailable" | "error"> {
  const data = (payload ?? {}) as Record<string, unknown>;
  const listings = (data.listings ?? {}) as Record<string, unknown>;
  const breakdown = Array.isArray(listings.breakdown)
    ? listings.breakdown.map((row) => {
        const item = row as Record<string, unknown>;
        return {
          listingType: asString(item.listingType) ?? "unknown",
          source: asString(item.source) ?? "unknown",
          isActive: Boolean(item.isActive),
          count: asNumber(item.count),
        };
      })
    : [];
  const dateRange = (listings.dateRange ?? {}) as Record<string, unknown>;
  const daysOnMarket = (listings.daysOnMarket ?? {}) as Record<string, unknown>;
  const topCities = Array.isArray(listings.topCities)
    ? listings.topCities.map((row) => {
        const item = row as Record<string, unknown>;
        return {
          city: asString(item.city) ?? "Unknown",
          count: asNumber(item.count),
        };
      })
    : [];

  const listingSnapshots = (data.listingSnapshots ?? {}) as Record<string, unknown>;
  const marketSnapshotsDaily = (data.marketSnapshotsDaily ?? {}) as Record<string, unknown>;
  const ingestRuns = Array.isArray(data.ingestRuns)
    ? data.ingestRuns.map((row) => {
        const item = row as Record<string, unknown>;
        return {
          id: asNumber(item.id),
          startedAt: asString(item.startedAt) ?? "",
          completedAt: asString(item.completedAt),
          sourcesIngested: asString(item.sourcesIngested),
          listingsProcessed: asNumber(item.listingsProcessed),
          snapshotsAdded: asNumber(item.snapshotsAdded),
          listingsDeactivated: asNumber(item.listingsDeactivated),
        };
      })
    : [];
  const marketMetrics = (data.marketMetrics ?? {}) as Record<string, unknown>;
  const cities = (data.cities ?? {}) as Record<string, unknown>;
  const rankings = (data.rankings ?? {}) as Record<string, unknown>;

  return {
    listings: {
      total: asNumber(listings.total),
      active: asNumber(listings.active),
      inactive: asNumber(listings.inactive),
      withMarketId: asNumber(listings.withMarketId),
      withImageUrl: asNumber(listings.withImageUrl),
      breakdown,
      dateRange: {
        firstSeenEarliest: asString(dateRange.firstSeenEarliest),
        firstSeenLatest: asString(dateRange.firstSeenLatest),
        lastSeenEarliest: asString(dateRange.lastSeenEarliest),
        lastSeenLatest: asString(dateRange.lastSeenLatest),
      },
      daysOnMarket: {
        min: asNullableNumber(daysOnMarket.min),
        avg: asNullableNumber(daysOnMarket.avg),
        max: asNullableNumber(daysOnMarket.max),
      },
      topCities,
      suspectRentOver6k: asNumber(listings.suspectRentOver6k),
    },
    listingSnapshots: {
      total: asNumber(listingSnapshots.total),
      uniqueListings: asNumber(listingSnapshots.uniqueListings),
      earliest: asString(listingSnapshots.earliest),
      latest: asString(listingSnapshots.latest),
    },
    marketSnapshotsDaily: {
      totalRows: asNumber(marketSnapshotsDaily.totalRows),
      distinctDates: asNumber(marketSnapshotsDaily.distinctDates),
      minDate: asString(marketSnapshotsDaily.minDate),
      maxDate: asString(marketSnapshotsDaily.maxDate),
      daysTracked: asNumber(marketSnapshotsDaily.daysTracked),
    },
    ingestRuns,
    marketMetrics: {
      count: asNumber(marketMetrics.count),
      lowConfidence: asNumber(marketMetrics.lowConfidence),
      updatedAtMax: asString(marketMetrics.updatedAtMax),
    },
    cities: {
      count: asNumber(cities.count),
      updatedAtMax: asString(cities.updatedAtMax),
    },
    rankings: {
      present: Boolean(rankings.present),
      updatedAt: asString(rankings.updatedAt),
    },
  };
}

export async function fetchAdminDashboardStats(): Promise<AdminDashboardStats> {
  const localDataUpdatedAt = await getDataUpdatedAt();
  const base = {
    generatedAt: new Date().toISOString(),
    adminConfigured: Boolean(process.env.ADMIN_SECRET?.trim()),
    supabaseAdminConfigured: isSupabaseAdminConfigured(),
    localDataUpdatedAt,
    rpcAvailable: false,
    error: null as string | null,
    ...EMPTY_STATS,
  };

  const client = createAdminSupabaseClient();
  if (!client) {
    return {
      ...base,
      error: "Supabase service role is not configured (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY).",
    };
  }

  const { data, error } = await client.rpc("admin_dashboard_stats");
  if (error) {
    return {
      ...base,
      error: error.message.includes("admin_dashboard_stats")
        ? "Migration 009_admin_dashboard.sql is not applied on Supabase yet."
        : error.message,
    };
  }

  return {
    ...base,
    rpcAvailable: true,
    ...parseRpcPayload(data),
  };
}
