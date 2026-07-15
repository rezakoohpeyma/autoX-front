import { useContext } from "react";
import { FormStyleContext } from "../context/form-style-context";
import { FormStyleContextType } from "../types";

export function useFormStyleContext() {
  const context = useContext(FormStyleContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context as FormStyleContextType;
}
