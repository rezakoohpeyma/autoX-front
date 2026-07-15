import { cn } from "@/lib/utils";
import { ComponentProps, useId } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { useFormStyleContext } from "../hooks/use-form-style-context";


type FormSelectProps<TForm> = ComponentProps<"select"> & {
  nameId: Path<TForm>;
  dataArray: DataArrayType[];
  transformValue?: (value: string) => unknown;
}

interface DataArrayType {
    id: number,
    value: string,
    content: string,
}

export function FormSelect<TForm extends FieldValues>({
  dataArray,
  nameId,
  required = false,
  className = "",
  transformValue,
  children,
} : FormSelectProps<TForm>) {
  const selectId = useId();

  const {
    register 
  } = useFormContext<TForm>()
  
  const { 
    inputFieldClasses, 
    inputBoxClasses, 
    requiredMessage 
  } = useFormStyleContext();

  return (
    <div className={inputFieldClasses}>
      {children && <label htmlFor={selectId} className="block">{children}</label>}
      <select
        id={selectId}
        className={cn(`outline-0 border-0 w-full h-full cursor-pointer ${inputBoxClasses}`, className)}
        {...register?.(
            nameId,
            {
              required: required && requiredMessage,
              setValueAs: transformValue
            },
          )}
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
