import { ComponentProps } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

export type FormContextType<T extends FieldValues> = {
  inputClasses?: string;
  inputBoxClasses?: string;
  inputFieldClasses?: string;
  inputErrorClasses?: string;
  errors?: FieldErrors;
  requiredMessage?: string;
  register?: UseFormRegister<T>;
  resetForm?: UseFormReset<T>;
};

export type FormType<T extends FieldValues> = {
  formOpt?: FormOptions<T>;
  onSubmit: SubmitHandler<T>;
} & Omit<ComponentProps<"form">, "onSubmit"> &
  FormContextType<T>;

export type FormOptions<T extends FieldValues> = Parameters<
  typeof useForm<T>
>[0];
