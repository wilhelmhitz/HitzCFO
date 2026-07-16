import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wilhelmhitz.com"),

  title: {
    default: "Wilhelm Hitz | Managing Director",
    template: "%s | Wilhelm Hitz",
  },

  description:
    "Managing Director and Business Transformation Executive with more than 30 years of international leadership experience creating sustainable value through strategy, people, operational excellence and digital transformation.",

  keywords: [
    "Wilhelm Hitz",
    "Managing Director",
    "CEO",
    "Business Transformation",
    "Business Turnaround",
    "Operational Excellence",
    "Digital Transformation",
    "General Management",
    "Value Creation",
    "Board Advisor",
    "Executive",
    "Transformation Executive",
    "Leadership",
  ],

  authors: [
    {
      name: "Wilhelm Hitz",
      url: "https://www.wilhelmhitz.com",
    },
  ],

  creator: "Wilhelm Hitz",

  publisher: "Wilhelm Hitz",

  applicationName: "Wilhelm Hitz",

  category: "Business",

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.wilhelmhitz.com",

    siteName: "Wilhelm Hitz",

    title: "Wilhelm Hitz | Managing Director",

    description:
      "Business Transformation Executive focused on sustainable value creation, operational excellence and people-first leadership.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wilhelm Hitz",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Wilhelm Hitz | Managing Director",

    description:
      "Business Transformation Executive focused on sustainable value creation.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Wilhelm Hitz",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="bg-white text-slate-900 antialiased">

        <ScrollProgress />

        <CustomCursor />

        <Navbar />

        <main className="min-h-screen">

          {children}

        </main>

        <Footer />

      </body>
    </html>
  );
}