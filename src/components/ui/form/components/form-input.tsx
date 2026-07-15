"use client";

import ErrorMessage from "./error-message";
import { ComponentProps, useId, useState } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { useFormStyleContext } from "../hooks/use-form-style-context";
import { IconContext } from "react-icons";
import {
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlineEyeSlash,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";

type FormInputProps<TForm extends FieldValues> = ComponentProps<"input"> & {
  nameId: Path<TForm>;
  iconElement?: React.ReactNode;
}

export function FormInput<TForm extends FieldValues>({
  type = "text",
  nameId,
  placeholder,
  children,
  iconElement = "",
  required = false,
  defaultValue,
  disabled,
  ...other
}: FormInputProps<TForm>) {

  const inputId = useId();
  const [showError, setShowError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext<TForm>()

  const {
    inputClasses,
    inputFieldClasses,
    inputBoxClasses,
    inputErrorClasses,
    requiredMessage,
  } = useFormStyleContext();

  const error = nameId ? errors?.[nameId]?.message : "";
  
  return (
    <div className={inputFieldClasses}>
      {children && <label htmlFor={inputId}>{children}</label>}
      <div
        className={cn(
          `relative flex justify-between items-center px-2`,
          inputBoxClasses || "",
          error && inputErrorClasses ? inputErrorClasses : ""
        )}
      >
        {!children && iconElement && (
          <label className="cursor-pointer" htmlFor={inputId}>
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
          id={inputId}
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
