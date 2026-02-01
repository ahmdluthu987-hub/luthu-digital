import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Luthu | AI-First Digital Marketing Expert in Kannur, Kerala",
  description: "Ahmad Luthu is an AI-first digital marketing specialist based in Kannur, Kerala. Helping local businesses grow through data-driven SEO, SMM, Google Ads, and AI automation.",
  keywords: [
    "AI first digital marketing expert in Kannur",
    "Digital marketing expert in Kannur",
    "SEO expert in Kannur",
    "SMM SEM services Kerala",
    "AI digital marketing Kerala",
    "Kannur digital marketing consultant"
  ],
  authors: [{ name: "Ahmad Luthu" }],
  openGraph: {
    title: "Ahmad Luthu | AI-First Digital Marketing Expert in Kannur",
    description: "Expert AI-powered digital marketing services for businesses in Kerala.",
    type: "website",
    locale: "en_IN",
    url: "https://ahmdluthu.com",
    siteName: "Ahmad Luthu Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-accent/30 selection:text-accent`}>
        {children}
      </body>
    </html>
  );
}
