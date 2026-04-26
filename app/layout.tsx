import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gambitho Labs — Convertimos ideas en sistemas reales",
  description:
    "Product development studio. Construimos webs, apps y sistemas que funcionan y generan resultados.",
  metadataBase: new URL("https://www.gambitholabs.com"),
  openGraph: {
    title: "Gambitho Labs — Convertimos ideas en sistemas reales",
    description:
      "Webs, apps y soluciones digitales diseñadas para funcionar y generar resultados.",
    url: "https://www.gambitholabs.com",
    siteName: "Gambitho Labs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gambitho Labs — Convertimos ideas en sistemas reales",
    description:
      "Webs, apps y soluciones digitales diseñadas para funcionar y generar resultados.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
