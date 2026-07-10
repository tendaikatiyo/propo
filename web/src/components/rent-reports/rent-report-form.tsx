"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ContributionFormSelect,
  contributionFieldClassName,
} from "@/components/rent-reports/contribution-form-fields";
import { MonthPickerField } from "@/components/rent-reports/month-picker-field";
import { Label } from "@/components/ui/label";
import { useCities, useMarketMetrics } from "@/hooks/use-market-data";
import { sortCitiesByMarketSize, sortMarketsByActivity } from "@/lib/geo";
import { formatLocationLabel } from "@/lib/format";
import {
  RENT_REPORT_MAX_USD,
  RENT_REPORT_MIN_USD,
  RENT_REPORT_PROPERTY_TYPES,
  type RentReportPropertyType,
} from "@/lib/rent-reports";
import { matchesSlug } from "@/lib/slug";

export function RentReportForm({
  initialCitySlug,
  initialSuburbSlug,
}: {
  initialCitySlug?: string;
  initialSuburbSlug?: string;
}) {
  const { data: markets = [], isLoading: marketsLoading } = useMarketMetrics();
  const { data: cityMetrics = [], isLoading: citiesLoading } = useCities();
  const isLoading = marketsLoading || citiesLoading;

  const cities = useMemo(
    () => sortCitiesByMarketSize(cityMetrics, "rent").map((item) => item.city),
    [cityMetrics]
  );

  const [city, setCity] = useState<string | null>(null);
  const [suburb, setSuburb] = useState<string | null>(null);
  const [propertyType, setPropertyType] = useState<RentReportPropertyType | null>(null);
  const [bedrooms, setBedrooms] = useState("2");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [isCurrentLease, setIsCurrentLease] = useState(true);
  const [leaseStartedAt, setLeaseStartedAt] = useState("");
  const [furnished, setFurnished] = useState<"" | "yes" | "no">("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [prefilled, setPrefilled] = useState(false);

  const cityOptions = useMemo(
    () =>
      cities.map((item) => ({
        value: item,
        label: formatLocationLabel(item),
      })),
    [cities]
  );

  const suburbs = useMemo(() => {
    if (!city) return [];
    return sortMarketsByActivity(
      markets.filter((market) => market.city === city),
      "rent"
    ).map((market) => market.suburb);
  }, [city, markets]);

  const suburbOptions = useMemo(
    () =>
      suburbs.map((item) => ({
        value: item,
        label: formatLocationLabel(item),
      })),
    [suburbs]
  );

  const propertyTypeOptions = useMemo(
    () =>
      RENT_REPORT_PROPERTY_TYPES.map((item) => ({
        value: item.value,
        label: item.label,
      })),
    []
  );

  const bedroomOptions = useMemo(
    () => [
      { value: "0", label: "0 (bachelor)" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4+" },
    ],
    []
  );

  const furnishedOptions = useMemo(
    () => [
      { value: "unspecified", label: "Not specified" },
      { value: "yes", label: "Furnished" },
      { value: "no", label: "Unfurnished" },
    ],
    []
  );

  useEffect(() => {
    if (prefilled || !markets.length) return;
    if (!initialCitySlug) return;

    const cityMatch = cities.find((item) => matchesSlug(item, initialCitySlug));
    if (!cityMatch) return;
    setCity(cityMatch);

    if (initialSuburbSlug) {
      const suburbMatch = markets.find(
        (market) =>
          matchesSlug(market.city, initialCitySlug) &&
          matchesSlug(market.suburb, initialSuburbSlug)
      );
      if (suburbMatch) {
        setSuburb(suburbMatch.suburb);
      }
    }
    setPrefilled(true);
  }, [cities, initialCitySlug, initialSuburbSlug, markets, prefilled]);

  useEffect(() => {
    if (propertyType === "room") {
      setBedrooms("1");
    }
  }, [propertyType]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!city || !suburb || !propertyType) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/rent-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          suburb,
          propertyType,
          bedrooms: Number(bedrooms),
          monthlyRent: Number(monthlyRent),
          isCurrentLease,
          leaseStartedAt: leaseStartedAt || undefined,
          furnished: furnished === "yes" ? true : furnished === "no" ? false : undefined,
          consent,
          website,
        }),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        "Thanks — we review every submission. Approved reports may appear as a community rent range on this suburb."
      );
      setMonthlyRent("");
      setLeaseStartedAt("");
      setFurnished("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("Could not reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <Card>
        <CardContent className="space-y-3 pt-6 text-[15px] leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">{message}</p>
          <p>
            Explore suburb medians and trends while you wait, or read how we combine portal data
            with community reports on the{" "}
            <Link href="/methodology" className="text-foreground underline-offset-4 hover:underline">
              methodology page
            </Link>
            .
          </p>
          <Button type="button" variant="outline" onClick={() => setStatus("idle")}>
            Submit another report
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share your current rent</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContributionFormSelect
              id="city"
              label="City"
              value={city}
              onValueChange={(next) => {
                setCity(next);
                setSuburb(null);
              }}
              placeholder={isLoading ? "Loading cities…" : "Select city"}
              disabled={isLoading}
              required
              options={cityOptions}
            />

            <ContributionFormSelect
              id="suburb"
              label="Suburb"
              value={suburb}
              onValueChange={setSuburb}
              placeholder={!city ? "Select a city first" : "Select suburb"}
              disabled={!city || isLoading}
              required
              searchable
              searchPlaceholder="Search suburbs…"
              options={suburbOptions}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContributionFormSelect
              id="propertyType"
              label="Property type"
              value={propertyType}
              onValueChange={(next) => setPropertyType(next as RentReportPropertyType | null)}
              placeholder="Select type"
              required
              options={propertyTypeOptions}
            />

            <ContributionFormSelect
              id="bedrooms"
              label="Bedrooms"
              value={bedrooms}
              onValueChange={(next) => setBedrooms(next ?? "2")}
              placeholder="Select bedrooms"
              disabled={propertyType === "room"}
              required
              options={bedroomOptions}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyRent">Monthly rent (USD)</Label>
            <Input
              id="monthlyRent"
              name="monthlyRent"
              type="number"
              inputMode="numeric"
              min={RENT_REPORT_MIN_USD}
              max={RENT_REPORT_MAX_USD}
              step={10}
              required
              value={monthlyRent}
              onChange={(event) => setMonthlyRent(event.target.value)}
              placeholder="e.g. 800"
              className={contributionFieldClassName}
            />
            <p className="text-xs text-muted-foreground">
              What you actually pay each month — not the advertised asking price.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MonthPickerField
              id="leaseStartedAt"
              label="Lease started (optional)"
              value={leaseStartedAt}
              onChange={setLeaseStartedAt}
              placeholder="Pick a month"
            />

            <ContributionFormSelect
              id="furnished"
              label="Furnished (optional)"
              value={furnished || "unspecified"}
              onValueChange={(next) =>
                setFurnished(next === "yes" || next === "no" ? next : "")
              }
              placeholder="Not specified"
              options={furnishedOptions}
            />
          </div>

          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-foreground"
              checked={isCurrentLease}
              onChange={(event) => setIsCurrentLease(event.target.checked)}
            />
            <span>This is my current lease (not a past place or an offer I saw).</span>
          </label>

          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-foreground"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
            />
            <span>
              I confirm this is accurate and agree to anonymous use in Propo&apos;s community rent
              data. We never publish your name or address. See our{" "}
              <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {status === "error" && message ? (
            <p className="text-sm text-destructive" role="alert">
              {message}
            </p>
          ) : null}

          <Button type="submit" disabled={status === "loading" || isLoading} className="w-full sm:w-auto">
            {status === "loading" ? "Submitting…" : "Submit rent report"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
