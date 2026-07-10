"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
  LAND_REPORT_MAX_USD,
  LAND_REPORT_MIN_USD,
  LAND_REPORT_SIZE_UNITS,
  type LandReportSizeUnit,
} from "@/lib/land-reports";

export function LandReportForm({
  initialCitySlug,
  initialSuburbSlug,
}: {
  initialCitySlug?: string;
  initialSuburbSlug?: string;
}) {
  const { city, setCity, suburb, setSuburb, cityOptions, suburbOptions, isLoading } =
    useContributionLocation(initialCitySlug, initialSuburbSlug, "land");

  const [landSize, setLandSize] = useState("");
  const [landSizeUnit, setLandSizeUnit] = useState<LandReportSizeUnit>("sqm");
  const [totalPrice, setTotalPrice] = useState("");
  const [isServiced, setIsServiced] = useState<"" | "yes" | "no">("");
  const [isCompletedPurchase, setIsCompletedPurchase] = useState(true);
  const [purchaseDate, setPurchaseDate] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const servicedOptions = useMemo(
    () => [
      { value: "unspecified", label: "Not specified" },
      { value: "yes", label: "Serviced stand" },
      { value: "no", label: "Unserviced" },
    ],
    []
  );

  const sizeUnitOptions = useMemo(
    () =>
      LAND_REPORT_SIZE_UNITS.map((item) => ({
        value: item.value,
        label: item.label,
      })),
    []
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!city || !suburb) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/land-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          suburb,
          landSize: landSize ? Number(landSize) : undefined,
          landSizeUnit: landSize ? landSizeUnit : undefined,
          totalPrice: Number(totalPrice),
          isServiced: isServiced === "yes" ? true : isServiced === "no" ? false : undefined,
          isCompletedPurchase,
          purchaseDate: purchaseDate || undefined,
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
        "Thanks — we review every submission. Approved reports with stand size may appear as a community $/sqm range."
      );
      setLandSize("");
      setTotalPrice("");
      setPurchaseDate("");
      setIsServiced("");
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
        <CardTitle className="text-xl sm:text-2xl">Share a land price</CardTitle>
      </CardHeader>
      <CardContent className={contributionCardContentClassName}>
        <form className={contributionFormClassName} onSubmit={handleSubmit} noValidate>
          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
            <label htmlFor="land-website">Website</label>
            <input
              id="land-website"
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
            <div className="space-y-2">
              <Label htmlFor="landSize">Stand size</Label>
              <Input
                id="landSize"
                name="landSize"
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={landSize}
                onChange={(event) => setLandSize(event.target.value)}
                placeholder={
                  landSizeUnit === "sqm"
                    ? "e.g. 300"
                    : landSizeUnit === "acres"
                      ? "e.g. 0.5"
                      : "e.g. 0.2"
                }
                className={contributionFieldClassName}
              />
            </div>

            <ContributionFormSelect
              id="landSizeUnit"
              label="Size unit"
              value={landSizeUnit}
              onValueChange={(next) =>
                setLandSizeUnit((next as LandReportSizeUnit | null) ?? "sqm")
              }
              placeholder="Select unit"
              options={sizeUnitOptions}
            />
          </div>

          <p className="-mt-2 text-xs text-muted-foreground">
            Optional but helps us show $/sqm ranges. Acres and hectares are converted to sqm
            automatically.
          </p>

          <div className="space-y-2">
            <Label htmlFor="totalPrice">Total price (USD)</Label>
            <Input
              id="totalPrice"
              name="totalPrice"
              type="number"
              inputMode="numeric"
              min={LAND_REPORT_MIN_USD}
              max={LAND_REPORT_MAX_USD}
              step={100}
              required
              value={totalPrice}
              onChange={(event) => setTotalPrice(event.target.value)}
              placeholder="e.g. 15000"
              className={contributionFieldClassName}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContributionFormSelect
              id="isServiced"
              label="Serviced (optional)"
              value={isServiced || "unspecified"}
              onValueChange={(next) =>
                setIsServiced(next === "yes" || next === "no" ? next : "")
              }
              placeholder="Not specified"
              options={servicedOptions}
            />

            <MonthPickerField
              id="purchaseDate"
              label="Purchase month (optional)"
              value={purchaseDate}
              onChange={setPurchaseDate}
              placeholder="Pick a month"
            />
          </div>

          <label className={contributionCheckboxLabelClassName}>
            <input
              type="checkbox"
              className={contributionCheckboxClassName}
              checked={isCompletedPurchase}
              onChange={(event) => setIsCompletedPurchase(event.target.checked)}
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
              I confirm this is accurate and agree to anonymous use in Propo&apos;s community land
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
              {status === "loading" ? "Submitting…" : "Submit land report"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
