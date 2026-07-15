import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

type FormResetBtnProps = ComponentProps<"button">;

export function FormResetBtn<TForm extends FieldValues>({
  children,
  className,
  disabled,
  ...other
}: FormResetBtnProps) {

  const { reset } = useFormContext<TForm>();
  function handleReset(){
    reset();
  }

  return (
    <button
      type="reset"
      className={cn(className || "")}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      onClick={handleReset}
      {...other}
    >
      {children}
    </button>
  );
}
