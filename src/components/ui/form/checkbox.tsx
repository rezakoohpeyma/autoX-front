"use client";
import { ComponentProps, useId } from "react";
import { FieldValues, Path } from "react-hook-form";
import { HiOutlineExclamationTriangle } from "react-icons/hi2"; // آیکون خطا
import { cn } from "@/lib/utils"; // تابع ترکیب کلاس‌ها
import { useFormContext } from "./use-form-context";
import ErrorMessage from "./error-message";

// تعریف پراپ‌های کامپوننت Checkbox
export type CheckboxProps<T extends FieldValues> = ComponentProps<"input"> & {
  nameId: Path<T>;
  required?: boolean; 
  defaultValue?: boolean; 
  disabled?: boolean; 
  checkboxContainerClasses?: string; // کلاس برای div والد کلی
  labelClasses?: string; 
  inputClasses?: string; 
};

export function Checkbox<T extends FieldValues>({
  nameId,
  children,
  required = false,
  defaultValue,
  disabled,
  checkboxContainerClasses,
  labelClasses,
  inputClasses,
  ...other
}: CheckboxProps<T>) {
  const inputID = useId();

  const {
    inputErrorClasses,
    register,
    errors,   
    requiredMessage,
  } = useFormContext<T>();

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
          id={inputID}
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
                htmlFor={inputID}
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
