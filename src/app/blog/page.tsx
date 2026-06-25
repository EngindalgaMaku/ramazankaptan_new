import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Adrasan Gezi Rehberi & Suluada Blog | Ramazan Kaptan",
  description:
    "Adrasan tekne turları, Suluada gezi rehberi, koylar hakkında bilgiler ve tekne turuna çıkarken yanınıza almanız gerekenlere dair yararlı blog yazıları.",
  alternates: {
    canonical: "https://www.ramazankaptan.com/blog/",
  },
};

const blogPosts = [
  {
    id: 1,
    slug: "suluada-gezi-rehberi",
    title: "Suluada Tekne Turu Rehberi: Türkiye'nin Maldivleri'ne Yolculuk",
    summary: "Suluada'ya gitmeden önce mutlaka bilmeniz gerekenler: Ulaşım yolları, en popüler plajlar, Aşk Mağarası, en ideal ziyaret saatleri ve tur ipuçları.",
    date: "20 Haziran 2026",
    readTime: "5 Dakika Okuma",
    tag: "Gezi Rehberi",
    image: "/images/suluada_beach.png",
  },
  {
    id: 2,
    slug: "adrasan-en-guzel-koylari",
    title: "Adrasan'ın Keşfedilmeyi Bekleyen Saklı Cennetleri: Sazak ve Ceneviz",
    summary: "Yalnızca deniz yoluyla ulaşılabilen, çam ormanlarının kumsalla birleştiği bakir koylar Sazak ve Porto Ceneviz hakkında detaylı inceleme.",
    date: "12 Haziran 2026",
    readTime: "4 Dakika Okuma",
    tag: "Koylar",
    image: "/images/sazak_bay.png",
  },
  {
    id: 3,
    slug: "tekne-turu-yaniniza-almaniz-gerekenler",
    title: "Tekne Turuna Çıkarken Yanınıza Almanız Gerekenler: Kontrol Listesi",
    summary: "Güzel ve konforlu bir tekne turu geçirmek için çantanızda bulunması gerekenler: Koruyucu malzemeler, snorkel, havlu ve diğer gerekli ekipmanlar.",
    date: "05 Haziran 2026",
    readTime: "3 Dakika Okuma",
    tag: "Tavsiyeler",
    image: "/images/boat_lunch.png",
  },
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.headerBanner} id="blog-header">
        <div className={styles.bannerOverlay}></div>
        <div className={`${styles.bannerContent} container`}>
          <span className={styles.bannerBadge}>Blog & Rehber</span>
          <h1 className={styles.bannerTitle}>Adrasan Gezi Rehberi</h1>
          <p className={styles.bannerSubtitle}>
            Adrasan, Suluada ve tekne turları hakkında bilmek istediğiniz her şey bu gezi rehberinde.
          </p>
        </div>
      </section>

      {/* Blog Post List Grid */}
      <section className="container section-padding" id="blog-posts">
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.card} id={`blog-post-${post.id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.postImg}
                />
                <span className={styles.tag}>{post.tag}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span className={styles.dot}>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`} id={`blog-link-${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className={styles.postSummary}>{post.summary}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn} id={`blog-readmore-${post.id}`}>
                  Devamını Oku ➔
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Reservation Banner */}
      <section className={styles.ctaSection} id="blog-cta">
        <div className={`${styles.ctaContent} container`}>
          <h2>Akdeniz'in Maviliklerine Yelken Açın</h2>
          <p>Yaz sezonunda yoğunluk yaşamamak için şimdiden yerinizi WhatsApp üzerinden ayırtabilirsiniz.</p>
          <a href="https://wa.me/905393601997?text=Merhaba%2C%20blog%20yaz%C4%B1lar%C4%B1n%C4%B1z%C4%B1%20okudum%20ve%20tekne%20turu%20i%C3%A7in%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Hemen Rezervasyon Yap
          </a>
        </div>
      </section>
    </div>
  );
}
