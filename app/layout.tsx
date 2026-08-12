import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boxchampy",
  description: "Fight like a champion at Boxchampy.",
  icons: {
    icon: "/PHOTO-2026-08-10-03-47-50.jpg",
    shortcut: "/PHOTO-2026-08-10-03-47-50.jpg",
    apple: "/PHOTO-2026-08-10-03-47-50.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
