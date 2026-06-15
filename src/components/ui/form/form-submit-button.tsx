import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function FormSubmitBtn({
  children,
  className,
  disabled,
  ...other
}: ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={cn("w-full", className || "")}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      {...other}
    >
      {children}
    </button>
  );
}
