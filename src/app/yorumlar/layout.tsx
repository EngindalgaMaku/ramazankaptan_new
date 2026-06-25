import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Müşteri Yorumları & Ziyaretçi Defteri | Ramazan Kaptan",
  description:
    "Adrasan Suluada tekne turlarımıza katılan değerli misafirlerimizin yorumlarını ve görüşlerini okuyun, siz de kendi deneyiminizi paylaşın.",
  alternates: {
    canonical: "https://www.ramazankaptan.com/yorumlar/",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
