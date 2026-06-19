import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { useFormContext } from "./use-form-context";

export function FormResetBtn({
  children,
  className,
  disabled,
  ...other
}: ComponentProps<"button">) {
  const { resetForm } = useFormContext();

  return (
    <button
      type="reset"
      className={cn(className || "")}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      onClick={resetForm}
      {...other}
    >
      {children}
    </button>
  );
}
