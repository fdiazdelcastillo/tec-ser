import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { montserrat, poppins } from "@/styles/Fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
