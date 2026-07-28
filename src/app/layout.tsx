import type { Metadata } from "next";
import { Inter, Manrope, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";

const deployedHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deployedHost ? `https://${deployedHost}` : "http://localhost:3000");

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  variable: "--font-khmer",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heang Chheng Khoem | Software Engineer & Digital Strategist",
    template: "%s | Heang Chheng Khoem",
  },
  description:
    "Portfolio of Heang Chheng Khoem - software engineering, fintech integration, digital operations, SEO, and creative media.",
  applicationName: "Heang Chheng Khoem Portfolio",
  keywords: [
    "Heang Chheng Khoem",
    "software engineer Cambodia",
    "fintech integration",
    "KHQR",
    "Bakong API",
    "Next.js developer",
    "digital operations",
    "technical SEO",
  ],
  authors: [{ name: "Heang Chheng Khoem" }],
  creator: "Heang Chheng Khoem",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Heang Chheng Khoem | Software Engineer & Digital Strategist",
    description:
      "Digital products, connected systems, growth, and creative media built around practical business outcomes.",
    siteName: "Heang Chheng Khoem",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Heang Chheng Khoem portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heang Chheng Khoem | Software Engineer & Digital Strategist",
    description:
      "Digital products, connected systems, growth, and creative media built around practical business outcomes.",
    images: ["/images/og-portfolio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${notoSansKhmer.variable} ${inter.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
