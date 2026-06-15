import Link from "next/link";
import { ComponentProps } from "react";

export function FormLink({
  question,
  href = "",
  children,
}: ComponentProps<"link"> & {
  question?: string;
}) {
  return (
    <p className="text-gray-400 mt-10 text-sm">
      {question && (
        <>
          <span>{question}</span> &nbsp;
        </>
      )}
      <Link
        href={href}
        className="text-blue-600 font-semibold mt-4 transition hover:border-b hover:border-blue-600"
      >
        {children}
      </Link>
    </p>
  );
}
