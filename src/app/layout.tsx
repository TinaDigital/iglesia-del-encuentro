import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iglesia del Encuentro",
  description: "Somos una iglesia inclusiva en [ubicación]. Únete a nuestra comunidad para crecer en fe y propósito.",
  keywords: "iglesia, comunidad, fe, [ubicación], cristianismo",
  openGraph: {
    title: "Iglesia del Encuentro",
    description: "Un lugar para encontrarte con Dios y con tu propósito",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
