import ErrorMessage from "./error-message";
import { ComponentProps, useId, useState } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useFormStyleContext } from "../hooks/use-form-style-context";
import { cn } from "@/lib/utils";

type FormTextareaProps<TForm> = ComponentProps<"textarea"> & {
  nameId: Path<TForm>;
  iconElement: React.ReactNode;
}

export function FormTextarea<TForm extends FieldValues>({
  nameId,
  placeholder,
  children,
  required = false,
  defaultValue,
  disabled,
  iconElement,
  rows = 4,
  ...other
} : FormTextareaProps<TForm>) {
  const inputID = useId();
  const [showError, setShowError] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext<TForm>();

  const {
    inputClasses,
    inputBoxClasses,
    inputFieldClasses,
    inputErrorClasses,
    requiredMessage,
  } = useFormStyleContext();

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
