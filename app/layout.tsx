
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean, accessible look similar to SF Pro
import "./globals.css";
import { RESUME_DATA } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.title}`,
  description: RESUME_DATA.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-white/20`} suppressHydrationWarning>
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
