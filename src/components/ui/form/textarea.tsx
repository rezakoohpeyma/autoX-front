import ErrorMessage from "./error-message";
import { ComponentProps, useId, useState } from "react";
import { FieldValues, Path } from "react-hook-form";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useFormContext } from "./use-form-context";
import { cn } from "@/lib/utils";

export function Textarea<T extends FieldValues>({
  nameId,
  placeholder,
  children,
  required = false,
  defaultValue,
  disabled,
  iconElement,
  rows = 4,
  ...other
}: ComponentProps<"textarea"> & {
  nameId: Path<T>;
  iconElement: React.ReactNode;
}) {
  const inputID = useId();
  const [showError, setShowError] = useState(false);

  const {
    inputClasses,
    inputBoxClasses,
    inputFieldClasses,
    inputErrorClasses,
    register,
    requiredMessage,
    errors,
  } = useFormContext<T>();

  const error = nameId ? errors?.[nameId]?.message : "";

  return (
    <div className={inputFieldClasses}>
      {children && <label htmlFor={inputID}>{children}</label>}

      <div className={cn(`relative ${error ? inputErrorClasses : ""}` , inputBoxClasses || '')}>
        {!children && iconElement && (
          <label className="cursor-pointer " htmlFor={inputID}>
            {iconElement}
          </label>
        )}

        <textarea
          id={inputID}
          className={cn(`outline-0 border-0 w-full h-full resize-y ${disabled ? "cursor-not-allowed" : ""}`,inputClasses || '')}
          placeholder={placeholder}
          rows={rows}
          defaultValue={defaultValue}
          disabled={disabled}
          {...register?.(nameId, { required: required && requiredMessage })}
          {...other}
        />

        {error && (
          <p
            onClick={() => setShowError((show) => !show)}
            className="flex gap-1"
          >
            <HiOutlineExclamationTriangle className="text-red-500 cursor-pointer text-[150%] absolute top-3.5 right-3" />
          </p>
        )}
      </div>
      {showError && typeof error === "string" && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
    </div>
  );
}
