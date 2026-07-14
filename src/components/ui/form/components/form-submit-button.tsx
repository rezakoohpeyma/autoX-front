import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type FormSubmitBtnProps = ComponentProps<"button">;

export function FormSubmitBtn({
  children,
  className,
  disabled,
  ...other
}: FormSubmitBtnProps) {
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
