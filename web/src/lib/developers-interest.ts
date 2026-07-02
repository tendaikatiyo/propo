export const DEVELOPER_ROLES = [
  { value: "estate_agent", label: "Estate agent or agency" },
  { value: "software_engineer", label: "Software engineer" },
  { value: "investor", label: "Property investor" },
  { value: "lender", label: "Lender or mortgage broker" },
  { value: "researcher", label: "Researcher or analyst" },
  { value: "developer", label: "Property developer" },
  { value: "other", label: "Other" },
] as const;

export const DEVELOPER_DATA_INTERESTS = [
  { value: "suburb_medians", label: "Suburb medians (rent & sale)" },
  { value: "price_trends", label: "Price & supply trends" },
  { value: "rental_yields", label: "Rental yields" },
  { value: "active_listings", label: "Active listings" },
  { value: "rankings", label: "Rankings & movers" },
] as const;

export type DeveloperRole = (typeof DEVELOPER_ROLES)[number]["value"];
export type DeveloperDataInterest = (typeof DEVELOPER_DATA_INTERESTS)[number]["value"];

export interface DeveloperInterestPayload {
  email: string;
  role: DeveloperRole;
  useCase?: string;
  dataInterests: DeveloperDataInterest[];
  consent: boolean;
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ROLE_VALUES = new Set<string>(DEVELOPER_ROLES.map((role) => role.value));
const DATA_INTEREST_VALUES = new Set<string>(
  DEVELOPER_DATA_INTERESTS.map((interest) => interest.value)
);

export function parseDeveloperInterestPayload(
  body: unknown
): { ok: true; data: DeveloperInterestPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const role = typeof input.role === "string" ? input.role.trim() : "";
  const useCase =
    typeof input.useCase === "string" ? input.useCase.trim().slice(0, 2000) : undefined;
  const company = typeof input.company === "string" ? input.company.trim() : "";
  const consent = input.consent === true;
  const dataInterests = Array.isArray(input.dataInterests)
    ? input.dataInterests.filter(
        (value): value is DeveloperDataInterest =>
          typeof value === "string" && DATA_INTEREST_VALUES.has(value)
      )
    : [];

  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  if (!ROLE_VALUES.has(role)) {
    return { ok: false, error: "Select your role." };
  }

  if (!consent) {
    return { ok: false, error: "Confirm we may email you about API access." };
  }

  return {
    ok: true,
    data: {
      email,
      role: role as DeveloperRole,
      useCase: useCase || undefined,
      dataInterests,
      consent,
      company: company || undefined,
    },
  };
}
