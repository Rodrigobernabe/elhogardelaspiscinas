import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Hogar de las Piscinas | Diseño e Instalación en Villa Mercedes",
  description: "Especialistas en la fabricación e instalación de piscinas de fibra de vidrio y hormigón. Calidad y durabilidad para tu hogar en Villa Mercedes, San Luis.",
  keywords: ["Piscinas", "Villa Mercedes", "San Luis", "Instalación de piscinas", "Fibra de vidrio", "Hormigón", "Mantenimiento"],
  authors: [{ name: "El Hogar de las Piscinas" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "El Hogar de las Piscinas",
    description: "Tu propio oasis sin salir de casa",
    url: "https://elhogardelaspiscinas.vercel.app",
    siteName: "El Hogar de las Piscinas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Hogar de las Piscinas",
    description: "Especialistas en piscinas en Villa Mercedes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
