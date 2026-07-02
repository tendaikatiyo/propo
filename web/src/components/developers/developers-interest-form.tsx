"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DEVELOPER_DATA_INTERESTS,
  DEVELOPER_ROLES,
  type DeveloperDataInterest,
  type DeveloperRole,
} from "@/lib/developers-interest";
import { cn } from "@/lib/utils";

const fieldClassName =
  "h-10 rounded-xl border-border/80 bg-background px-3 text-sm shadow-none";

export function DevelopersInterestForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<DeveloperRole | "">("");
  const [useCase, setUseCase] = useState("");
  const [dataInterests, setDataInterests] = useState<DeveloperDataInterest[]>([]);
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function toggleInterest(value: DeveloperDataInterest) {
    setDataInterests((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/developers/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          role,
          useCase,
          dataInterests,
          consent,
          company,
        }),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — we will email you when we have API updates.");
      setEmail("");
      setRole("");
      setUseCase("");
      setDataInterests([]);
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
            In the meantime, explore suburb medians and trends on the site, or read how we calculate
            them on the{" "}
            <Link href="/methodology" className="text-foreground underline-offset-4 hover:underline">
              methodology page
            </Link>
            .
          </p>
          <Button type="button" variant="outline" onClick={() => setStatus("idle")}>
            Submit another response
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join the API interest list</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className={fieldClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Your role</Label>
            <select
              id="role"
              name="role"
              required
              value={role}
              onChange={(event) => setRole(event.target.value as DeveloperRole | "")}
              className={cn(
                fieldClassName,
                "w-full appearance-none bg-background text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              )}
            >
              <option value="" disabled>
                Select one
              </option>
              {DEVELOPER_ROLES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium">Which data matters most?</legend>
            <p className="text-sm text-muted-foreground">Optional — pick any that apply.</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {DEVELOPER_DATA_INTERESTS.map((item) => {
                const checked = dataInterests.includes(item.value);
                return (
                  <label
                    key={item.value}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 text-sm transition-colors",
                      checked
                        ? "border-foreground/20 bg-muted/50"
                        : "border-border/80 hover:bg-muted/30"
                    )}
                  >
                    <input
                      type="checkbox"
                      className="mt-0.5 size-4 shrink-0 accent-foreground"
                      checked={checked}
                      onChange={() => toggleInterest(item.value)}
                    />
                    <span>{item.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="space-y-2">
            <Label htmlFor="useCase">What would you build?</Label>
            <Textarea
              id="useCase"
              name="useCase"
              value={useCase}
              onChange={(event) => setUseCase(event.target.value)}
              placeholder="e.g. CRM integration, valuation model, market reports for clients…"
              className="min-h-24 rounded-xl border-border/80 bg-background px-3 py-2.5 text-sm shadow-none"
            />
          </div>

          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-foreground"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
            />
            <span>
              I agree that Propo may email me about API access and related product updates. See our{" "}
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

          <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
            {status === "loading" ? "Submitting…" : "Join the list"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
