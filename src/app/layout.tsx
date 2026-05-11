import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider, LanguageToggle } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mickoll Marin | SaaS Implementation & Operations Automation",
  description:
    "Recruiter-facing CV and portfolio for Mickoll Marin, focused on SaaS implementation, operations automation, product operations, RevOps, pricing, and BI/data roles.",
  metadataBase: new URL("https://mickoll-interactive-cv.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/?lang=es",
    },
  },
  openGraph: {
    title: "Mickoll Marin | SaaS Implementation & Operations Automation",
    description:
      "Portfolio and ATS CV with case studies in SaaS implementation, reporting tools, pricing intelligence, dashboards, and QA/QC automation.",
    type: "website",
    url: "https://mickoll-interactive-cv.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mickoll Marin | SaaS Implementation & Operations Automation",
    description:
      "Recruiter-facing portfolio for SaaS implementation, operations automation, product operations, RevOps, pricing, and BI/data roles.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07131f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
