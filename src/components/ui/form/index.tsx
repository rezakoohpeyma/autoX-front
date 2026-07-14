"use client";

import { FormType } from "./types";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormStyleContext } from "./context/form-style-context";

export default function Form<T extends FieldValues>({
  children,
  onSubmit,
  className,
  inputClasses,
  inputBoxClasses,
  inputFieldClasses,
  inputErrorClasses,
  requiredMessage = "This field is required",
  formOpt = {},
}: FormType<T>) {
  const methods = useForm<T>({
     ...(formOpt || {}) 
  });
  return (
    <FormProvider {...methods}>
      <FormStyleContext.Provider
        value={{
          inputClasses,
          inputBoxClasses,
          inputFieldClasses: cn("mb-5.5", inputFieldClasses || ''),
          inputErrorClasses,
          requiredMessage,
        }}
      >
        <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormStyleContext.Provider>
    </FormProvider>
  );
}
