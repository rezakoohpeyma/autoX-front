import { cn } from "@/lib/utils";
import { ComponentProps, JSX } from "react";

type LoadingProps = {
  text?: string;
  size?: "sm" | "md" | "lg";
  spinnerClasses?: string
} & ComponentProps<"div">;

const spinnerSizes = {
  sm: "size-4 border-2",
  md: "size-8 border-3",
  lg: "size-10 border-4",
};

export default function Loading({
  text,
  size = "lg",
  className,
  spinnerClasses,
  ...props
}: LoadingProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-primary border-b-transparent",
          spinnerSizes[size],
          spinnerClasses
        )}
      />

      {text && (
        <p className="text-sm text-primary">
          {text}
        </p>
      )}
    </div>
  );
}