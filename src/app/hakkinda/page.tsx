import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ramazan Kaptan Kimdir? | Adrasan Tekne Turu",
  description:
    "15 yıllık denizcilik tecrübesiyle Ramazan Kaptan ve ailesi, Adrasan ve Suluada tekne turlarında sizlere eşlik ediyor. Teknemiz, ekibimiz ve hizmetlerimiz hakkında detaylı bilgi alın.",
  alternates: {
    canonical: "https://www.ramazankaptan.com/hakkinda/",
  },
};

const boatFeatures = [
  { label: "Uzunluk", value: "12 Metre" },
  { label: "Kapasite", value: "18 Kişi" },
  { label: "Güneşlenme Alanı", value: "Üst ve Ön Güverte" },
  { label: "Yemek Alanı", value: "Gölgelikli Arka Güverte" },
  { label: "Donanım", value: "Mutfak, WC, Duş, Soyunma Kabini" },
  { label: "Güvenlik", value: "Can Yelekleri, İlkyardım, Yangın Söndürücüler" },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.headerBanner} id="about-header">
        <div className={styles.bannerOverlay}></div>
        <div className={`${styles.bannerContent} container`}>
          <span className={styles.bannerBadge}>Hakkımızda</span>
          <h1 className={styles.bannerTitle}>Denize Adanmış Bir Ömür</h1>
          <p className={styles.bannerSubtitle}>
            15 yılı aşkın süredir Adrasan limanında dalgalara eşlik ediyor, misafirlerimize Akdeniz'in en güzel koylarını tanıtıyoruz.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className={`${styles.profileSection} container section-padding`} id="about-profile">
        <div className={styles.profileGrid}>
          <div className={styles.profileText}>
            <span className={styles.sectionBadge}>Kaptanımızın Hikayesi</span>
            <h2 className={styles.sectionTitle}>Ramazan Kaptan ile Tanışın</h2>
            <p className={styles.paragraph}>
              Antalya'nın Kumluca ilçesine bağlı cennet köşesi Adrasan'da doğup büyüyen Ramazan Kaptan, denize olan tutkusunu mesleğe dönüştürmüş, bölgenin en tecrübeli kaptanlarından biridir.
            </p>
            <p className={styles.paragraph}>
              15 yılı aşkın süredir dümen sallayan Ramazan Kaptan, denizciliği sadece bir meslek olarak değil, bir yaşam tarzı olarak görür. Suluada'nın rüzgarını, Adrasan koylarının akıntılarını ve en özel yüzme noktalarını onun kadar iyi bilen az kişi vardır.
            </p>
            <p className={styles.paragraph}>
              Turlarımızda en büyük önceliğimiz, misafirlerimizin güvenli, huzurlu ve keyifli bir gün geçirmesidir. Aile işletmesi sıcaklığıyla karşılandığınız teknemizde, gün sonunda birer müşteri değil, birer dost olarak ayrılmanızı hedefliyoruz.
            </p>
          </div>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/IMG-20260625-WA0005.jpg"
              alt="Ramazan Kaptan Teknesi"
              width={500}
              height={450}
              className={styles.profileImg}
            />
          </div>
        </div>
      </section>

      {/* Boat Section */}
      <section className={styles.boatSection} id="about-boat">
        <div className="container section-padding">
          <div className={styles.boatGrid}>
            <div className={styles.boatImageWrapper}>
              <Image
                src="/images/IMG-20260625-WA0006.jpg"
                alt="Teknemiz Adrasan Sazak Koyu'nda"
                width={550}
                height={400}
                className={styles.boatImg}
              />
            </div>
            <div className={styles.boatText}>
              <span className={styles.sectionBadge}>Konfor ve Güvenlik</span>
              <h2 className={styles.sectionTitle}>Teknemizin Özellikleri</h2>
              <p className={styles.paragraph}>
                Maviliklerin tadını en konforlu şekilde çıkarabilmeniz için tasarlanan teknemiz, günübirlik turlar ve özel kiralamalar için tüm imkanlara sahiptir.
              </p>

              <div className={styles.specsGrid}>
                {boatFeatures.map((spec, i) => (
                  <div key={i} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Section */}
      <section className={`${styles.mealSection} container section-padding`} id="about-meals">
        <div className={styles.mealGrid}>
          <div className={styles.mealText}>
            <span className={styles.sectionBadge}>Lezzet Durakları</span>
            <h2 className={styles.sectionTitle}>Teknede Ev Yapımı Menüler</h2>
            <p className={styles.paragraph}>
              Deniz havası acıktırır! Turlarımızın en çok övgü alan kısımlarından biri de kendi mutfağımızda hazırladığımız taze ve lezzetli öğle yemekleridir.
            </p>
            <p className={styles.paragraph}>
              Izgarada pişirdiğimiz taze çupra veya levrek balığının yanında, kaptanımızın özel tarifi olan lezzetli makarna ve taze Akdeniz yeşilliklerinden oluşan salatamız eşlik eder. Balık tercih etmeyen misafirlerimiz için önceden bilgi verilmesi halinde tavuk seçeneğimiz de mevcuttur.
            </p>
            <p className={styles.paragraph}>
              Öğleden sonra ise taze demlenmiş Türk çayımız eşliğinde özenle hazırlanmış mevsim meyveleri tabağımız servis edilir.
            </p>
            <div className={styles.mealTags}>
              <span>🐟 Taze Balık Izgara</span>
              <span>🍗 Tavuk Alternatifi</span>
              <span>🥗 Günlük Taze Salata</span>
              <span>🍉 Mevsim Meyveleri</span>
              <span>☕ Taze Türk Çayı</span>
            </div>
          </div>
          <div className={styles.mealImageWrapper}>
            <Image
              src="/images/IMG-20260625-WA0004.jpg"
              alt="Tekne Öğle Yemeği Servisi"
              width={500}
              height={400}
              className={styles.mealImg}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="about-cta">
        <div className={`${styles.ctaContent} container`}>
          <h2>Bizimle Eşsiz Bir Gün Geçirmeye Hazır mısınız?</h2>
          <p>Hemen rezervasyon yapın, Suluada'nın ve Adrasan koylarının büyüleyici manzarasında yerinizi ayırtın.</p>
          <div className={styles.ctaActions}>
            <a href="https://wa.me/905393601997?text=Merhaba%2C%20hakk%C4%B1n%C4%B1zdaki%20bilgileri%20okudum%20ve%20rezervasyon%20yapt%C4%B1rmak%20istiyorum." target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsapp}>
              WhatsApp ile İletişime Geç
            </a>
            <Link href="/tekneturlari" className={styles.ctaTours}>
              Turlarımızı İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
