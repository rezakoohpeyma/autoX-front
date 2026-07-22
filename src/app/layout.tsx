import "./globals.css";
import Providers from "./providers";
import { JSX } from "react/jsx-runtime";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn, getBaseUrl } from "@/lib/utils";
import { APP_NAME } from "@/constants/metadata";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "AutoX",
    template: `%s | ${APP_NAME}`
  },
  metadataBase: new URL(getBaseUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) : JSX.Element {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} >
      <body>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
