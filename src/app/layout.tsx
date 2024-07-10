import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

const druk = localfont({
  src: [
    {
      path: "../../public/font/argent-thin.otf",
    },
  ],
  variable: "--font-druk",
});

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={"${druk.variable}"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
