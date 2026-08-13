import type { Metadata } from "next";
import { AppToaster } from "@/components/AppToaster";
import "./globals.css";

const siteUrl = new URL("https://www.egbeyouthboxing.com");
const siteName = "Egbe's Youth Boxing";
const siteDescription =
  "Youth boxing training in Rio Rancho, NM helping kids build discipline, confidence, fitness, focus, and character for life.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: "Egbe's Youth Boxing | Youth Boxing Training in Rio Rancho, NM",
    template: "%s | Egbe's Youth Boxing",
  },
  description: siteDescription,
  keywords: [
    "youth boxing Rio Rancho",
    "kids boxing classes Rio Rancho NM",
    "boxing training for kids",
    "youth boxing New Mexico",
    "boxing gym Rio Rancho",
    "kids fitness Rio Rancho",
    "boxing lessons near Albuquerque",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: "Egbe's Youth Boxing | Youth Boxing Training in Rio Rancho, NM",
    description: siteDescription,
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Boxer training with red gloves at Egbe's Youth Boxing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Egbe's Youth Boxing | Youth Boxing Training in Rio Rancho, NM",
    description: siteDescription,
    images: ["/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/boxing-logo.jpg",
    shortcut: "/boxing-logo.jpg",
    apple: "/boxing-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
