import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export function FormLink({
  question,
  href = "",
  className,
  linkClasses,
  children,
}: ComponentProps<"link"> & {
  question?: string;
  linkClasses: string
}) {
  return (
    <p className={cn("text-gray-400 text-sm", className || '')}>
      {question && (
        <>
          <span>{question}</span> &nbsp;
        </>
      )}
      <Link
        href={href}
        className={cn("text-blue-600 font-semibold mt-4 transition hover:border-b hover:border-blue-600", linkClasses || '')}
      >
        {children}
      </Link>
    </p>
  );
}
