import type { Metadata } from "next";
import { Lugrasimo, Inknut_Antiqua, Cousine } from "next/font/google";
// @ts-ignore: side-effect CSS import declaration missing in TS types
import "@/app/globals.css";

const lugarismo = Lugrasimo({
  weight: "400",
  subsets: ["latin"],
});

const inknutAntiqua = Inknut_Antiqua({
  weight: "300",
  subsets: ["latin"],
});

const cousine = Cousine({
  weight: "400",
  subsets: ["latin"],
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
      <body className={lugarismo.className}>{children}</body>
    </html>
  );
}
