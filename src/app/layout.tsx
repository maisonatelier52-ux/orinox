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
    default: "Orinox Holding | Global Energy Infrastructure & Petroleum Logistics",
    template: "%s | Orinox Holding"
  },
  description: "Orinox Holding is a global leader in the strategic development and technical management of capital-intensive energy infrastructure across the US, Spain, and UAE petroleum value chains.",
  keywords: [
    "Orinox Holding", "petroleum drilling", "upstream energy", "midstream logistics",
    "US energy infrastructure", "petroleum logistics UAE", "Dubai energy operations", "Spain petroleum services",
    "upstream exploration US", "midstream operations North America", "petroleum drilling services Dubai", "energy asset management Spain",
    "drilling infrastructure Middle East", "strategic energy development Madrid"
  ],
  openGraph: {
    title: "Orinox Holding | Global Energy Infrastructure",
    description: "Strategic development and technical management of petroleum assets in the United States, Spain, UAE, and globally.",
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
    title: "Orinox Holding | Global Energy Operations",
    description: "Leading technical management of energy infrastructure across the US, Spain, and UAE petroleum value chains.",
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
