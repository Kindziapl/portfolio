import type { Metadata } from "next";
import { Geist, Geist_Mono, Lugrasimo, Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lugarismo = Lugrasimo({
  weight: "400",
});

const inknutAntiqua = Inknut_Antiqua({
  weight: "300",
});

export const metadata: Metadata = {
  title: "Kindziapl Workshop",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lugarismo} `}>{children}</body>
    </html>
  );
}
