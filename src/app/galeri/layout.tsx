import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adrasan Suluada Tekne Turu Fotoğrafları & Videoları | Galeri",
  description:
    "Ramazan Kaptan ile gerçekleştirdiğimiz Suluada ve Adrasan koy turlarından en güncel fotoğraflar ve videolar. Akdeniz'in güzelliklerini keşfedin.",
  alternates: {
    canonical: "https://www.ramazankaptan.com/galeri/",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
