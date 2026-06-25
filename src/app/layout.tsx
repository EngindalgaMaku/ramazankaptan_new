import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";

// Load fonts with subsets
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adrasan Tekne Turu | Ramazan Kaptan | Suluada Turları",
  description:
    "Tecrübeli kaptanımız Ramazan Kaptan sizi Adrasan'ın el değmemiş sahillerinde adrasan tekne turu ve suluada tekne turuna çıkartır. Rezervasyon için hemen arayın veya WhatsApp'tan yazın. Tel: 0539 360 19 97",
  keywords: [
    "Adrasan tekne turu",
    "Suluada tekne turu",
    "Adrasan tekne turları",
    "Adrasan tekne turu fiyatları",
    "Adrasan mehtap turu",
    "Adrasan özel tekne turu",
    "ramazan kaptan",
    "05393601997",
    "Suluada",
    "Adrasan",
  ],
  authors: [{ name: "Adrasan Tekne Turu" }],
  alternates: {
    canonical: "https://www.ramazankaptan.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
