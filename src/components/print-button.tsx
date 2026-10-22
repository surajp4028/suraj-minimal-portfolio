"use client";
import { IconPrinter } from "@tabler/icons-react";
import { buttonClass } from "@/components/button";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className={buttonClass}>
      <IconPrinter className="size-4" />
      Print
    </button>
  );
}
