"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Switch({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  id,
  ...props
}: Omit<React.ComponentProps<"button">, "onChange"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
  const isChecked = checked ?? internalChecked;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      id={id}
      disabled={disabled}
      data-state={isChecked ? "checked" : "unchecked"}
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "bg-primary" : "bg-input",
        className
      )}
      onClick={() => {
        const next = !isChecked;
        if (checked === undefined) setInternalChecked(next);
        onCheckedChange?.(next);
      }}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform",
          isChecked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
}

export { Switch };
