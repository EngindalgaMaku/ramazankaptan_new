import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import BookingForm from "src/components/BookingForm";

export const metadata: Metadata = {
  title: "Adrasan Tekne Turları | Suluada ve Koy Turları | Ramazan Kaptan",
  description:
    "Suluada Tekne Turu (Maldivler rotası) ve Adrasan Koylar Turu (Sazak - Ceneviz rotası) detayları, fiyatlar ve özel tekne kiralama seçeneklerini inceleyin.",
  alternates: {
    canonical: "https://www.ramazankaptan.com/tekneturlari/",
  },
};

const tours = [
  {
    id: "suluada-turu",
    title: "Suluada Tekne Turu",
    badge: "⭐ Ramazan Kaptan'ın Önerisi",
    description: "Akdeniz'in en berrak sularına ve beyaz kumsallarına ev sahipliği yapan Suluada, son yıllarda 'Türkiye'nin Maldivleri' olarak ün kazanmıştır. Adrasan Limanı'ndan kalkan teknemizle Suluada'nın büyüleyici koylarını ve şifalı kaynak sularını keşfedeceksiniz. Bu turumuz işletmemizin öncelikli ve en çok tercih edilen turudur.",
    image: "/images/IMG-20260625-WA0010.jpg",
    duration: "10:00 - 17:00",
    lunch: "Izgara Balık (Çupra/Levrek) veya Tavuk, Soslu Makarna, Mevsim Salata",
    stops: [
      { name: "Suluada Ön Plaj", desc: "Tropikal adaları aratmayan bembeyaz kum ve turkuaz yüzme molası." },
      { name: "Suluada Arka Plaj (Maldivler)", desc: "Adanın arka tarafında yer alan devasa kayalıklar ve muhteşem deniz." },
      { name: "Aşk Mağarası (Mavi Mağara)", desc: "Tekneyle içerisine kadar girdiğimiz, serin suyuyla ünlü doğal tünel." },
      { name: "Fener Koyu & Amerikan Koyu", desc: "Dönüş yolunda sakin sularda dinlendirici yüzme ve çay molası." },
    ],
  },
  {
    id: "koylar-turu",
    title: "Adrasan Koylar Turu",
    badge: "Doğa & Huzur Rotası",
    description: "Çam ormanlarının denize sıfır indiği, el değmemiş, kara yolu ulaşımı olmayan saklı koyları ziyaret ediyoruz. Kalabalıktan uzak, doğayla baş başa kalmak isteyen misafirlerimiz için en ideal seçenektir.",
    image: "/images/IMG-20260625-WA0007.jpg",
    duration: "10:00 - 17:00",
    lunch: "Izgara Tavuk veya Balık, Ev Yapımı Makarna, Mevsim Salata, Mezeler",
    stops: [
      { name: "Akseki Koyu (Fenerli Koy)", desc: "Dev kayalıkların gölgesinde, akvaryum berraklığında ilk yüzme durağı." },
      { name: "Sazak Koyu", desc: "Geniş kumsalı ve arkasındaki çam ağaçlarıyla rüzgara kapalı cennet bir liman." },
      { name: "Ceneviz Koyu (Porto Ceneviz)", desc: "Tarihi kalıntıları barındıran, çamur banyosu yapabileceğiniz eşsiz koy." },
      { name: "Korsan Koyu (Fosforlu Mağara)", desc: "Mağaranın içindeki fosforlu renk yansımaları eşliğinde son yüzme molası." },
    ],
  },
  {
    id: "ozel-tur",
    title: "Özel Tekne Kiralama & Mehtap Turu",
    badge: "Size Özel Hizmet",
    description: "Kalabalık gruplardan bağımsız, sadece aileniz veya arkadaş grubunuzla baş başa bir gün geçirmek isterseniz teknemizi özel olarak kiralayabilirsiniz. Ayrıca akşam gün batımında mehtap turlarımız da mevcuttur.",
    image: "/images/IMG-20260625-WA0012.jpg",
    duration: "Esnek (Gündüz veya Akşam)",
    lunch: "İsteğe göre şekillendirilen özel menüler (Balık, Tavuk, Izgara köfte veya Deniz mahsulleri)",
    stops: [
      { name: "Kişiye Özel Rota", desc: "Dilediğiniz koyda dilediğiniz kadar kalma ve yüzme özgürlüğü." },
      { name: "Özel Gün Kutlamaları", desc: "Doğum günü, evlilik teklifi, yıldönümü gibi organizasyonlar için süsleme imkanı." },
      { name: "Akşam Mehtap Turu", desc: "18:30 - 22:00 saatleri arasında ay ışığında yüzme ve yıldızlar altında akşam yemeği." },
    ],
  },
];

export default function ToursPage() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.headerBanner} id="tours-header">
        <div className={styles.bannerOverlay}></div>
        <div className={`${styles.bannerContent} container`}>
          <span className={styles.bannerBadge}>Tur Seçeneklerimiz</span>
          <h1 className={styles.bannerTitle}>Adrasan & Suluada Rotaları</h1>
          <p className={styles.bannerSubtitle}>
            En popüler turlarımızı inceleyin, size en uygun rotayı seçip yerinizi ayırtın.
          </p>
        </div>
      </section>

      {/* Tour List Section */}
      <section className={`${styles.toursSection} container section-padding`} id="tours-list">
        <div className={styles.toursContainer}>
          {tours.map((tour, idx) => (
            <div key={tour.id} className={`${styles.tourItem} ${idx % 2 === 1 ? styles.tourReverse : ""} ${tour.id === "suluada-turu" ? styles.tourFeaturedItem : ""}`} id={tour.id}>
              <div className={styles.tourImageWrapper}>
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={550}
                  height={380}
                  className={styles.tourImg}
                />
                <span className={styles.badge}>{tour.badge}</span>
              </div>
              <div className={styles.tourInfo}>
                <h2 className={styles.tourTitle}>{tour.title}</h2>
                <p className={styles.tourDesc}>{tour.description}</p>
                
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <strong>⏰ Saatler:</strong>
                    <span>{tour.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <strong>🍽️ Yemek Menüsü:</strong>
                    <span>{tour.lunch}</span>
                  </div>
                </div>

                <div className={styles.stopsSection}>
                  <h3>Duraklar ve Önemli Noktalar</h3>
                  <div className={styles.stopsGrid}>
                    {tour.stops.map((stop, i) => (
                      <div key={i} className={styles.stopCard}>
                        <h4>{i + 1}. {stop.name}</h4>
                        <p>{stop.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.actions}>
                  <a
                    href={`https://wa.me/905393601997?text=Merhaba%2C%20${encodeURIComponent(tour.title)}%20hakk%C4%B1nda%20bilgi%20ve%20rezervasyon%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookBtn}
                    id={`tours-book-whatsapp-${tour.id}`}
                  >
                    WhatsApp ile Rezervasyon Yap
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inclusions / Exclusions Section */}
      <section className={styles.inclusionsSection} id="tours-details">
        <div className="container section-padding">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Tura Dahil Olanlar</span>
            <h2>Fiyata Dahil Olan & Olmayan Hizmetler</h2>
          </div>

          <div className={styles.inclusionsGrid}>
            <div className={styles.inclusionCard}>
              <h3 className={styles.incTitle}>✓ Fiyata Dahil Olanlar</h3>
              <ul className={styles.list}>
                <li>Tekne gezisi ve tüm koy durakları</li>
                <li>Öğle yemeği (Izgara balık/tavuk, makarna, salata)</li>
                <li>Öğleden sonra taze mevsim meyveleri ikramı</li>
                <li>Beş çayı ikramı ve bisküvi/kek servisi</li>
                <li>Can yelekleri ve temel güvenlik ekipmanları</li>
                <li>Teknedeki gölgelik alanlar ve şezlonglar</li>
              </ul>
            </div>
            <div className={styles.exclusionCard}>
              <h3 className={styles.excTitle}>✗ Fiyata Dahil Olmayanlar</h3>
              <ul className={styles.list}>
                <li>Teknede satılan kutu kola, fanta, bira vb. soğuk içecekler</li>
                <li>Adrasan Limanı'na ulaşım / Otel transferleri</li>
                <li>Kişisel harcamalar ve bahşişler</li>
                <li>Kişisel havlu, güneş kremi ve deniz gözlüğü</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className={styles.bookingSection} id="tours-booking">
        <div className="container section-padding">
          <div className={styles.bookingGrid}>
            <div className={styles.bookingText}>
              <h2>Hayalinizdeki Tur İçin Rezervasyon Talebi</h2>
              <p>
                Hemen aşağıdaki rezervasyon talep formunu doldurarak gitmek istediğiniz tarihi ve kişi sayısını bize iletebilirsiniz. Ramazan Kaptan en kısa sürede size dönüş sağlayacaktır.
              </p>
            </div>
            <div className={styles.formContainer}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
