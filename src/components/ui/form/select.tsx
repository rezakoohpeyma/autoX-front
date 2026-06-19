import { cn } from "@/lib/utils";
import { ComponentProps, useId } from "react";
import { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "./use-form-context";

export function Select<T extends FieldValues>({
  dataArray,
  nameId,
  required = false,
  className = "",
  children,
}: ComponentProps<"select"> & {
  dataArray: T[];
  nameId: Path<T>;
}) {
  const selectID = useId();
  const { inputClasses, register, requiredMessage } = useFormContext<T>();

  return (
    <div>
      {children && <label htmlFor={selectID}>{children}</label>}
      <select
        id={selectID}
        className={cn(`outline-0 border-0 w-full h-full cursor-pointer ${inputClasses}`, className)}
        {...register?.(nameId, { required: required && requiredMessage })}
      >
        {dataArray.map((data, i) => (
          <option value={data.value} key={i}>
            {data.content}
          </option>
        ))}
      </select>
    </div>
  );
}
