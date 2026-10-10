import type { Metadata } from "next";
import { Big_Shoulders, Instrument_Serif, Archivo } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bigShoulders.variable} ${instrumentSerif.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
