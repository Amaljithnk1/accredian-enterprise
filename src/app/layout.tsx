import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Accredian Enterprise offers tailored corporate training programs in AI, Data Science, Leadership, and more.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "upskilling",
    "AI training",
    "data science courses",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
    description:
      "Cultivate high-performance teams through expert learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
