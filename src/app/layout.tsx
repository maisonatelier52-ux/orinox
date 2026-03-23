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
  metadataBase: new URL("https://orinoxholding.com"),
  title: {
    default: "Orinox Holding | US Energy Infrastructure & Petroleum Logistics",
    template: "%s | Orinox Holding"
  },
  description: "Orinox Holding is a global leader in the strategic development and technical management of capital-intensive energy infrastructure across the US petroleum value chain.",
  keywords: ["US energy infrastructure", "petroleum logistics USA", "upstream exploration US", "midstream operations North America", "energy asset management"],
  openGraph: {
    title: "Orinox Holding | US Energy Infrastructure",
    description: "Strategic development and technical management of petroleum assets in the United States and globally.",
    url: "https://orinoxholding.com",
    siteName: "Orinox Holding",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Orinox Holding Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orinox Holding | US Energy Operations",
    description: "Leading technical management of energy infrastructure across the US petroleum value chain.",
    images: ["/images/logo1.png"],
  },
  icons: {
    icon: "/images/favicon2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { AuthProvider } from "@/context/AuthContext";

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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
