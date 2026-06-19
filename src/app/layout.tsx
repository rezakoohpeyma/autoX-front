import { JSX } from "react/jsx-runtime";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AutoX",
    template: '%s | AutoX'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) : JSX.Element {
  return (
    <html lang="en" >
      <body className="lg:h-screen lg:overflow-hidden">
          {children}
      </body>
    </html>
  );
}
