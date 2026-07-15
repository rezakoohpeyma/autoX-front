"use client";

import ErrorMessage from "./error-message";
import { ComponentProps, useId } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useFormStyleContext } from "../hooks/use-form-style-context";

export type FormCheckboxProps<T extends FieldValues> = ComponentProps<"input"> & {
  nameId: Path<T>;
  required?: boolean; 
  defaultValue?: boolean; 
  disabled?: boolean; 
  checkboxContainerClasses?: string;
  labelClasses?: string; 
  inputClasses?: string; 
};

export function FormCheckbox<TForm extends FieldValues>({
  nameId,
  children,
  required = false,
  defaultValue,
  disabled,
  checkboxContainerClasses,
  labelClasses,
  inputClasses,
  ...other
}: FormCheckboxProps<TForm>) {

  const inputId = useId();

  const {
    register,
    formState:  { errors },   
  } = useFormContext<TForm>();

  const {
    inputErrorClasses,
    requiredMessage,
  } = useFormStyleContext();

  const error = nameId ? errors?.[nameId]?.message : "";
  const { ref, ...fieldProps } = register?.(nameId, {
    required: required && requiredMessage,
  }) ?? { ref: null, onChange: undefined, onBlur: undefined, name: nameId, value: defaultValue };

  return (
    // div والد کلی
    <div className={checkboxContainerClasses}>
      <div className="flex justify-start items-center">
        <div
        className={cn(
          `flex items-center gap-2 px-2`, 
          error && inputErrorClasses ? inputErrorClasses : ""
        )}
      >
        {/* Input checkbox */}
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn(
            `h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer`,
            inputClasses || "",
            error ? `border-red-500 focus:ring-red-300` : ''
          )}
          disabled={disabled}
          {...fieldProps} 
          {...other}
        />
      </div>
        {children && (
            <label
                htmlFor={inputId}
                className={cn(
                    `cursor-pointer text-sm text-primary`,
                    labelClasses || ''
                )}
            >
            {children}
          </label>
        )}
      </div>

      {error && typeof error === "string" && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
    </div>
  );
}
