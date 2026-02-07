import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import ClientEffects from "@/components/layout/ClientEffects";
import SchemaRegistry from "@/components/seo/SchemaRegistry";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmdluthukannur.in"),
  title: {
    default: "Best Freelance Digital Marketer in Kannur | Ahmed Luthu Kannur",
    template: "%s | Ahmed Luthu Kannur"
  },
  description: "Ahmed Luthu Kannur is an AI first digital marketing expert in Kannur, helping businesses grow through data-driven SEO, performance marketing, and ROI-focused strategies.",
  keywords: [
    "AI first digital marketing expert in Kannur",
    "Digital marketing expert in Kannur",
    "SEO expert in Kannur",
    "SMM SEM services Kerala",
    "AI digital marketing Kerala",
    "Kannur digital marketing consultant",
    "Ahmed Luthu Kannur",
    "Digital Marketing Agency Kannur"
  ],
  authors: [{ name: "Ahmed Luthu Kannur", url: "https://ahmdluthu.com" }],
  creator: "Ahmed Luthu Kannur",
  publisher: "Ahmed Luthu Kannur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/icon', rel: 'icon', type: 'image/png', sizes: '48x48' },
      { url: '/favicon.ico', rel: 'icon', sizes: 'any' },
    ],
    apple: '/icon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Best Freelance Digital Marketer in Kannur | Ahmed Luthu Kannur",
    description: "Ahmed Luthu Kannur is an AI first digital marketing expert in Kannur, helping businesses grow through data-driven SEO, performance marketing, and ROI-focused strategies.",
    url: "https://ahmdluthukannur.in",
    siteName: "Ahmed Luthu Kannur Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: '/refined_hero.webp', // Uses existing high-quality hero asset
        width: 1200,
        height: 630,
        alt: 'Ahmed Luthu Kannur - Digital Marketing Expert',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ahmed Luthu Kannur | AI-First Digital Marketing Expert",
    description: "Expert AI-powered digital marketing services for businesses in Kerala.",
    creator: "@ahmdluthu", // Replace with actual handle if available
    images: ['/refined_hero.webp'], // Uses existing asset
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-accent/30 selection:text-accent`}>
        <div id="top-progress-bar" />
        <ClientEffects />
        <SchemaRegistry />
        {children}
      </body>
    </html>
  );
}
