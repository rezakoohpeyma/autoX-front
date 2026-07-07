"use client";
import { ComponentProps, useId, useState } from "react";
import { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "./use-form-context";
import { IconContext } from "react-icons";
import {
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlineEyeSlash,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";
import ErrorMessage from "./error-message";

export function Input<T extends FieldValues>({
  type = "text",
  nameId,
  placeholder,
  children,
  iconElement = "",
  required = false,
  defaultValue,
  disabled,
  ...other
}: ComponentProps<"input"> & {
  nameId: Path<T>;
  iconElement?: React.ReactNode;
}) {
  const inputID = useId();
  const [showError, setShowError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const {
    inputClasses,
    inputFieldClasses,
    inputBoxClasses,
    inputErrorClasses,
    register,
    errors,
    requiredMessage,
  } = useFormContext<T>();

  const error = nameId ? errors?.[nameId]?.message : "";
  return (
    <div className={inputFieldClasses}>
      {children && <label htmlFor={inputID}>{children}</label>}
      <div
        className={cn(
          `relative flex justify-between items-center px-2`,
          inputBoxClasses || "",
          error && inputErrorClasses ? inputErrorClasses : ""
        )}
      >
        {!children && iconElement && (
          <label className="cursor-pointer" htmlFor={inputID}>
            {iconElement}
          </label>
        )}
        <input
          className={cn(
            "outline-0 border-0 w-full h-full",
            disabled ? "cursor-not-allowed" : "",
            inputClasses || "",
          )}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          {...register?.(nameId, { required: required && requiredMessage })}
          {...other}
          id={inputID}
          disabled={disabled}
          defaultValue={defaultValue}
        />
        <div className="absolute top-0 bottom-0 my-auto right-3 flex justify-center items-center gap-2">
          <IconContext.Provider value={{ className:"text-[1.8em] cursor-pointer" }}>
            {type === "password" && showPassword && (
              <HiOutlineEyeSlash
                onClick={() => setShowPassword((show) => !show)}
              />
            )}
            {type === "password" && !showPassword && (
              <HiOutlineEye
                onClick={() => setShowPassword((show) => !show)}
              />
            )}
            {error && (
              <p
                onClick={() => setShowError((show) => !show)}
                className="flex gap-1"
              >
                <HiOutlineExclamationTriangle className="text-red-500" />
              </p>
            )}
          </IconContext.Provider>
        </div>
      </div>
      {showError && typeof error === "string" && 
        <ErrorMessage>
          {error}
        </ErrorMessage>}
    </div>
  );
}
