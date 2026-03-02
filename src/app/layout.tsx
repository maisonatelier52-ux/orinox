import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orinox Holding - Global Technical Infrastructure",
  description: "Global leader in strategic development and technical management of capital-intensive infrastructure across the petroleum value chain.",
  openGraph: {
    title: "Orinox Holding",
    description: "Global leader in strategic development and technical management of capital-intensive infrastructure.",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Orinox Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orinox Holding",
    description: "Global leader in strategic development and technical management of capital-intensive infrastructure.",
    images: ["/images/logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
