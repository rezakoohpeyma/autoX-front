import { ComponentProps } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

export type FormStyleContextType = {
  inputClasses?: string;
  inputBoxClasses?: string;
  inputFieldClasses?: string;
  inputErrorClasses?: string;
  requiredMessage?: string;
};

export type FormType<T extends FieldValues> = {
  formOpt?: FormOptions<T>;
  onSubmit: SubmitHandler<T>;

  inputClasses?: string;
  inputBoxClasses?: string;
  inputFieldClasses?: string;
  inputErrorClasses?: string;
  requiredMessage?: string;
} & Omit<ComponentProps<"form">, "onSubmit">;

export type FormOptions<T extends FieldValues> = Parameters<
  typeof useForm<T>
>[0];
