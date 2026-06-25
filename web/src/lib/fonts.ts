import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Inter, Stack_Sans_Notch } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const geistSans = GeistSans;

export const geistMono = GeistMono;

export const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontClassNames = [
  inter.variable,
  geistSans.variable,
  geistMono.variable,
  stackSansNotch.variable,
].join(" ");
