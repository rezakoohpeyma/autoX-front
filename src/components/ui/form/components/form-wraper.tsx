import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type FormWraperProps = ComponentProps<"div">;

export function FormWraper({
  children,
  className,
} : FormWraperProps) {
  return (
    <div className={cn("w-full", className || '')}>
        {children}
    </div>
  );
}
