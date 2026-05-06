import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Mickoll Marin | Remote Operations & Data Automation",
  description:
    "Interactive CV and portfolio for Mickoll Marin, focused on remote operations, data automation, SaaS implementation, RevOps, product operations, and BI/data roles.",
  metadataBase: new URL("https://mickoll-interactive-cv.vercel.app"),
  openGraph: {
    title: "Mickoll Marin | Remote Operations & Data Automation",
    description:
      "Interactive command-center CV with case studies in workflow automation, dashboards, pricing intelligence, and QA/QC data systems.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
