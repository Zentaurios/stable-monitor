import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StructuredData } from '@/components/structured-data';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: "Treasury Digital Asset Compliance Monitor | GENIUS Act Demo",
    template: "%s | Treasury Compliance Monitor"
  },
  description: "Advanced digital asset compliance monitoring platform for the US Treasury's GENIUS Act response. Real-time AI/ML risk assessment, network analysis, and innovative detection methods for illicit cryptocurrency activity.",
  keywords: [
    "Treasury",
    "GENIUS Act",
    "digital asset compliance",
    "cryptocurrency monitoring",
    "AML compliance",
    "blockchain analysis",
    "risk assessment",
    "sanctions screening",
    "AI ML detection",
    "network analysis",
    "zero knowledge proofs",
    "KYC verification",
    "transaction monitoring",
    "illicit activity detection",
    "financial compliance",
    "OFAC screening",
    "travel rule",
    "SAR reporting"
  ],
  authors: [{ name: "Ryan", url: siteUrl }],
  creator: "Ryan",
  publisher: "Treasury Compliance Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Treasury Digital Asset Compliance Monitor - GENIUS Act Demo",
    description: "Innovative AI/ML platform demonstrating advanced methods for detecting illicit digital asset activity. Real-time monitoring, network analysis, and privacy-preserving compliance for US Treasury.",
    siteName: "Treasury Compliance Monitor",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Treasury Digital Asset Compliance Monitor - Advanced AI/ML Risk Assessment Platform",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TreasuryGov",
    creator: "@TreasuryGov",
    title: "Treasury Digital Asset Compliance Monitor | GENIUS Act Demo",
    description: "Advanced AI/ML platform for detecting illicit digital asset activity. Real-time monitoring, network analysis, and innovative compliance technologies.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes if needed
    // google: "verification-code",
    // yandex: "verification-code",
  },
  category: "Government Technology",
  classification: "Financial Compliance Technology",
  other: {
    "application-name": "Treasury Compliance Monitor",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Treasury Monitor",
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "msapplication-navbutton-color": "#1e40af",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
