import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function FormInputWraper({
  children,
  className,
}: ComponentProps<"div">) {
  return <div className={cn("w-full", className || '')}>{children}</div>;
}
