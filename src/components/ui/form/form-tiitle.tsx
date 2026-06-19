import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
export function FormTitle({ children, className, ...other }: ComponentProps<"h2">) {
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
