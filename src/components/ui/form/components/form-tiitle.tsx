import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type FormTitleProps = ComponentProps<"h2">;

export function FormTitle({ children, className, ...other } : FormTitleProps) {
  return (
    <h2
      className={cn(
        "w-full mb-10 font-semibold text-3xl capitalize",
        className || '',
      )}
      {...other}
    >
      {children}
    </h2>
  );
}
