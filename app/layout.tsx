import type { Metadata } from "next";
import { AppToaster } from "@/components/AppToaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boxchampy",
  description: "Fight like a champion at Boxchampy.",
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
