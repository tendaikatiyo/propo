"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ContributionFormSelect,
  contributionFieldClassName,
} from "@/components/rent-reports/contribution-form-fields";
import {
  ContributionFormError,
  ContributionFormSuccess,
  contributionCardContentClassName,
  contributionCardHeaderClassName,
  contributionCheckboxClassName,
  contributionCheckboxLabelClassName,
  contributionFormClassName,
  contributionSubmitClassName,
} from "@/components/rent-reports/contribution-form-feedback";
import { MonthPickerField } from "@/components/rent-reports/month-picker-field";
import { useContributionLocation } from "@/hooks/use-contribution-location";
import {
  SALE_REPORT_MAX_USD,
  SALE_REPORT_MIN_USD,
  SALE_REPORT_PROPERTY_TYPES,
  type SaleReportPropertyType,
} from "@/lib/sale-reports";

export function SaleReportForm({
  initialCitySlug,
  initialSuburbSlug,
}: {
  initialCitySlug?: string;
  initialSuburbSlug?: string;
}) {
  const { city, setCity, suburb, setSuburb, cityOptions, suburbOptions, isLoading } =
    useContributionLocation(initialCitySlug, initialSuburbSlug, "buy");

  const [propertyType, setPropertyType] = useState<SaleReportPropertyType | null>(null);
  const [bedrooms, setBedrooms] = useState("2");
  const [salePrice, setSalePrice] = useState("");
  const [isCompletedSale, setIsCompletedSale] = useState(true);
  const [saleDate, setSaleDate] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const propertyTypeOptions = useMemo(
    () => SALE_REPORT_PROPERTY_TYPES.map((item) => ({ value: item.value, label: item.label })),
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
      const response = await fetch("/api/sale-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          suburb,
          propertyType,
          bedrooms: Number(bedrooms),
          salePrice: Number(salePrice),
          isCompletedSale,
          saleDate: saleDate || undefined,
          consent,
          website,
        }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        "Thanks — we review every submission. Approved reports may appear as a community sale range on this suburb."
      );
      setSalePrice("");
      setSaleDate("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("Could not reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <ContributionFormSuccess message={message} onReset={() => setStatus("idle")} />
    );
  }

  return (
    <Card>
      <CardHeader className={contributionCardHeaderClassName}>
        <CardTitle className="text-xl sm:text-2xl">Share a sale price</CardTitle>
      </CardHeader>
      <CardContent className={contributionCardContentClassName}>
        <form className={contributionFormClassName} onSubmit={handleSubmit} noValidate>
          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
            <label htmlFor="sale-website">Website</label>
            <input
              id="sale-website"
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
              onValueChange={(next) => setPropertyType(next as SaleReportPropertyType | null)}
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
            <Label htmlFor="salePrice">Sale price (USD)</Label>
            <Input
              id="salePrice"
              name="salePrice"
              type="number"
              inputMode="numeric"
              min={SALE_REPORT_MIN_USD}
              max={SALE_REPORT_MAX_USD}
              step={500}
              required
              value={salePrice}
              onChange={(event) => setSalePrice(event.target.value)}
              placeholder="e.g. 85000"
              className={contributionFieldClassName}
            />
            <p className="text-xs text-muted-foreground">
              What you paid or agreed — not an asking price you saw online.
            </p>
          </div>

          <MonthPickerField
            id="saleDate"
            label="Sale month (optional)"
            value={saleDate}
            onChange={setSaleDate}
            placeholder="Pick a month"
          />

          <label className={contributionCheckboxLabelClassName}>
            <input
              type="checkbox"
              className={contributionCheckboxClassName}
              checked={isCompletedSale}
              onChange={(event) => setIsCompletedSale(event.target.checked)}
            />
            <span>This was a completed purchase (not just an offer or listing I saw).</span>
          </label>

          <label className={contributionCheckboxLabelClassName}>
            <input
              type="checkbox"
              className={contributionCheckboxClassName}
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
            />
            <span>
              I confirm this is accurate and agree to anonymous use in Propo&apos;s community sale
              data. See our{" "}
              <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {status === "error" ? <ContributionFormError message={message} /> : null}

          <div className="sticky bottom-0 -mx-4 border-t border-border/60 bg-card/95 px-4 pt-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-sm sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <Button
              type="submit"
              disabled={status === "loading" || isLoading}
              className={contributionSubmitClassName}
            >
              {status === "loading" ? "Submitting…" : "Submit sale report"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
