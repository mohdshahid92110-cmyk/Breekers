import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { Background } from "@/components/background";
import "./globals.css";

const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Breekers: Think Beyond. Create Anything.",
  description: "Chat, code, create and automate. One AI workspace for turning ideas into reality.",
};

export const viewport: Viewport = { themeColor: "#09090F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} dark`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Background />
        {children}
      </body>
    </html>
  );
}
