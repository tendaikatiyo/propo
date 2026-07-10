"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ContributionFormSelect,
  contributionFieldClassName,
} from "@/components/rent-reports/contribution-form-fields";
import { MonthPickerField } from "@/components/rent-reports/month-picker-field";
import { useContributionLocation } from "@/hooks/use-contribution-location";
import {
  LAND_REPORT_MAX_USD,
  LAND_REPORT_MIN_USD,
  LAND_REPORT_SIZE_UNITS,
  type LandReportSizeUnit,
} from "@/lib/land-reports";
import {
  RENT_REPORT_MAX_USD,
  RENT_REPORT_MIN_USD,
  RENT_REPORT_PROPERTY_TYPES,
} from "@/lib/rent-reports";
import {
  SALE_REPORT_MAX_USD,
  SALE_REPORT_MIN_USD,
  SALE_REPORT_PROPERTY_TYPES,
} from "@/lib/sale-reports";
import type { SightedPriceMode } from "@/lib/sighted-prices";
import type { ExploreMode } from "@/lib/types";

const MODE_OPTIONS = [
  { value: "rent", label: "Rent" },
  { value: "buy", label: "Sale" },
  { value: "land", label: "Land" },
] as const;

const BEDROOM_OPTIONS = [
  { value: "0", label: "0 (bachelor)" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4+" },
];

export function AdminSightedPriceForm() {
  const [mode, setMode] = useState<SightedPriceMode>("rent");
  const sortMode: ExploreMode = mode === "buy" ? "buy" : mode === "land" ? "land" : "rent";
  const { city, setCity, suburb, setSuburb, cityOptions, suburbOptions, isLoading } =
    useContributionLocation(undefined, undefined, sortMode);

  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [bedrooms, setBedrooms] = useState("2");
  const [price, setPrice] = useState("");
  const [landSize, setLandSize] = useState("");
  const [landSizeUnit, setLandSizeUnit] = useState<LandReportSizeUnit>("sqm");
  const [isServiced, setIsServiced] = useState<"" | "yes" | "no">("");
  const [eventMonth, setEventMonth] = useState("");
  const [listingUrl, setListingUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const propertyTypeOptions = useMemo(() => {
    const list = mode === "buy" ? SALE_REPORT_PROPERTY_TYPES : RENT_REPORT_PROPERTY_TYPES;
    return list.map((item) => ({ value: item.value, label: item.label }));
  }, [mode]);

  const sizeUnitOptions = useMemo(
    () => LAND_REPORT_SIZE_UNITS.map((item) => ({ value: item.value, label: item.label })),
    []
  );

  function resetForm() {
    setPropertyType(null);
    setBedrooms("2");
    setPrice("");
    setLandSize("");
    setLandSizeUnit("sqm");
    setIsServiced("");
    setEventMonth("");
    setListingUrl("");
    setNotes("");
  }

  useEffect(() => {
    if (propertyType === "room") {
      setBedrooms("1");
    }
  }, [propertyType]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!city || !suburb) return;

    setStatus("loading");
    setMessage("");

    const body: Record<string, unknown> = {
      mode,
      city,
      suburb,
      eventMonth: eventMonth || undefined,
      listingUrl: listingUrl || undefined,
      notes: notes || undefined,
      consent: true,
    };

    if (mode === "land") {
      body.landSize = landSize ? Number(landSize) : undefined;
      body.landSizeUnit = landSize ? landSizeUnit : undefined;
      body.totalPrice = Number(price);
      body.isServiced = isServiced === "yes" ? true : isServiced === "no" ? false : undefined;
    } else {
      body.propertyType = propertyType;
      body.bedrooms = Number(bedrooms);
      if (mode === "rent") body.monthlyRent = Number(price);
      else body.salePrice = Number(price);
    }

    try {
      const response = await fetch("/api/admin/sighted-prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Could not save sighted price.");
        return;
      }

      setStatus("success");
      setMessage(`Saved approved ${mode} sighting for ${suburb}, ${city}.`);
      resetForm();
    } catch {
      setStatus("error");
      setMessage("Could not reach the server.");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add sighted price</CardTitle>
        <CardDescription>
          Manually log a rent, sale, or land price you saw. Saved as an approved community report
          and rolled into suburb ranges immediately.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <ContributionFormSelect
            id="sighted-mode"
            label="Type"
            value={mode}
            onValueChange={(next) => {
              setMode((next as SightedPriceMode | null) ?? "rent");
              setPropertyType(null);
              setSuburb(null);
              setStatus("idle");
              setMessage("");
            }}
            placeholder="Select type"
            required
            options={[...MODE_OPTIONS]}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <ContributionFormSelect
              id="sighted-city"
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
              id="sighted-suburb"
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

          {mode !== "land" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <ContributionFormSelect
                id="sighted-property-type"
                label="Property type"
                value={propertyType}
                onValueChange={setPropertyType}
                placeholder="Select type"
                required
                options={propertyTypeOptions}
              />
              <ContributionFormSelect
                id="sighted-bedrooms"
                label="Bedrooms"
                value={bedrooms}
                onValueChange={(next) => setBedrooms(next ?? "2")}
                placeholder="Select bedrooms"
                disabled={propertyType === "room"}
                required
                options={BEDROOM_OPTIONS}
              />
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="sighted-land-size">Stand size</Label>
                <Input
                  id="sighted-land-size"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step="any"
                  value={landSize}
                  onChange={(event) => setLandSize(event.target.value)}
                  placeholder="e.g. 300"
                  className={contributionFieldClassName}
                />
              </div>
              <ContributionFormSelect
                id="sighted-land-unit"
                label="Size unit"
                value={landSizeUnit}
                onValueChange={(next) =>
                  setLandSizeUnit((next as LandReportSizeUnit | null) ?? "sqm")
                }
                placeholder="Select unit"
                options={sizeUnitOptions}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="sighted-price">
              {mode === "rent"
                ? "Monthly rent (USD)"
                : mode === "buy"
                  ? "Sale price (USD)"
                  : "Total price (USD)"}
            </Label>
            <Input
              id="sighted-price"
              type="number"
              inputMode="numeric"
              min={
                mode === "rent"
                  ? RENT_REPORT_MIN_USD
                  : mode === "buy"
                    ? SALE_REPORT_MIN_USD
                    : LAND_REPORT_MIN_USD
              }
              max={
                mode === "rent"
                  ? RENT_REPORT_MAX_USD
                  : mode === "buy"
                    ? SALE_REPORT_MAX_USD
                    : LAND_REPORT_MAX_USD
              }
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder={mode === "rent" ? "e.g. 800" : "e.g. 85000"}
              className={contributionFieldClassName}
            />
          </div>

          {mode === "land" ? (
            <ContributionFormSelect
              id="sighted-serviced"
              label="Serviced (optional)"
              value={isServiced || "unspecified"}
              onValueChange={(next) =>
                setIsServiced(next === "yes" || next === "no" ? next : "")
              }
              placeholder="Not specified"
              options={[
                { value: "unspecified", label: "Not specified" },
                { value: "yes", label: "Serviced stand" },
                { value: "no", label: "Unserviced" },
              ]}
            />
          ) : null}

          <MonthPickerField
            id="sighted-event-month"
            label={
              mode === "rent"
                ? "Lease month (optional)"
                : mode === "buy"
                  ? "Sale month (optional)"
                  : "Purchase month (optional)"
            }
            value={eventMonth}
            onChange={setEventMonth}
            placeholder="Pick a month"
          />

          <div className="space-y-2">
            <Label htmlFor="sighted-url">Listing URL (optional)</Label>
            <Input
              id="sighted-url"
              type="url"
              value={listingUrl}
              onChange={(event) => setListingUrl(event.target.value)}
              placeholder="https://…"
              className={contributionFieldClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sighted-notes">Notes (optional)</Label>
            <Input
              id="sighted-notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Where you saw it, agent, etc."
              className={contributionFieldClassName}
            />
          </div>

          {status === "error" && message ? (
            <p className="text-sm text-destructive" role="alert">
              {message}
            </p>
          ) : null}
          {status === "success" && message ? (
            <p className="text-sm text-emerald-700" role="status">
              {message}
            </p>
          ) : null}

          <Button type="submit" disabled={status === "loading" || isLoading}>
            {status === "loading" ? "Saving…" : "Save sighted price"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
