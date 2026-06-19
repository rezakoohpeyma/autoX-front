"use client";
import { createContext } from "react";
import { FormContextType, FormType } from "./types";
import { FieldValues, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

export const FormContext = createContext<FormContextType<any> | null>(null);

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
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<T>({ ...(formOpt || {}) });
  return (
    <FormContext.Provider
      value={{
        inputClasses,
        inputBoxClasses,
        inputFieldClasses: cn("mb-5.5", inputFieldClasses || ''),
        inputErrorClasses,
        register,
        resetForm: reset,
        errors,
        requiredMessage,
      }}
    >
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
