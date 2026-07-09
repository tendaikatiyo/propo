"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const contributionFieldClassName =
  "h-10 rounded-xl border-border/80 bg-background px-3 text-sm shadow-none";

export const contributionSelectTriggerClassName = cn(
  contributionFieldClassName,
  "w-full border data-placeholder:text-muted-foreground"
);

export function ContributionFormSelect({
  id,
  label,
  value,
  onValueChange,
  placeholder,
  disabled,
  required,
  options,
}: {
  id: string;
  label: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={value}
        onValueChange={(next) => onValueChange(next)}
        disabled={disabled}
        required={required}
        items={options.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
      >
        <SelectTrigger id={id} className={contributionSelectTriggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-72">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
