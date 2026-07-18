import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hitzcfo.com"),

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
    "HitzCFO",
  ],

  authors: [
    {
      name: "Wilhelm Hitz",
      url: "https://hitzcfo.com",
    },
  ],

  creator: "Wilhelm Hitz",
  publisher: "HitzCFO",

  verification: {
    google: "luv0P5hhSRBhYz9WQfxQr15mJeyo62ffDHqdrb9H0N4",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Wilhelm Hitz | Managing Director",
    description:
      "Business Transformation Executive creating sustainable value through strategy, people, operational excellence and digital transformation.",
    url: "https://hitzcfo.com",
    siteName: "HitzCFO",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wilhelm Hitz | Managing Director",
    description:
      "Business Transformation Executive creating sustainable value through strategy, people, operational excellence and digital transformation.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}