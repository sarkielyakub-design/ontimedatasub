import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
// @ts-expect-error Next.js handles global CSS imports at build time.
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "ONTIME SUBDATA LTD | Everyday Digital Services",
    template: "%s | ONTIME SUBDATA LTD",
  },

  description:
    "Access airtime, mobile data, digital services and convenient wallet tools with ONTIME SUBDATA LTD.",

  applicationName: "ONTIME SUBDATA LTD",

  keywords: [
    "ONTIME SUBDATA LTD",
    "airtime",
    "mobile data",
    "digital services",
    "wallet",
    "bill payments",
    "Nigeria",
  ],

  openGraph: {
    title: "ONTIME SUBDATA LTD | Everyday Digital Services",
    description:
      "Fast, convenient digital services, airtime, data and wallet tools from ONTIME SUBDATA LTD.",
    siteName: "ONTIME SUBDATA LTD",
    type: "website",
    locale: "en_NG",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f47721",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}