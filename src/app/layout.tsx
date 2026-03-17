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
  alternates: {
    canonical: "https://elhogardelaspiscinas.vercel.app",
  },
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
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "El Hogar de las Piscinas VM",
              "image": "https://elhogardelaspiscinas.vercel.app/images/hero-bg.jpg",
              "@id": "https://elhogardelaspiscinas.vercel.app",
              "url": "https://elhogardelaspiscinas.vercel.app",
              "telephone": "+5492657123456",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Principal 1234",
                "addressLocality": "Villa Mercedes",
                "addressRegion": "San Luis",
                "postalCode": "5730",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.6766,
                "longitude": -65.4624
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://facebook.com/hogarpiscinas",
                "https://instagram.com/hogarpiscinas"
              ]
            })
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
