import { useContext } from "react";
import { FieldValues } from "react-hook-form";
import { FormContext } from "./form";
import { FormContextType } from "./types";

export function useFormContext<T extends FieldValues>() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context as FormContextType<T>;
}
