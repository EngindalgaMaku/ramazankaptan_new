"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import BookingForm from "src/components/BookingForm";

const heroImages = [
  "/images/IMG-20260625-WA0006.jpg", // Sazak Koyu ve Teknemiz (the boat photo from screenshot)
  "/images/IMG-20260625-WA0002.jpg", // Suluada Maldivler Plajı
  "/images/IMG-20260625-WA0010.jpg", // Suluada kıyısı
];

const tourHighlights = [
  {
    id: "suluada",
    title: "Suluada Tekne Turu",
    tagline: "🏆 Ramazan Kaptan'ın En Popüler Turu",
    description: "Suluada'nın bembeyaz tropikal kumsalları ve cam gibi berrak turkuaz sularında yüzün. Aşk Mağarası, Amerikan Koyu ve Fener Koyu'nu tecrübeli kaptanımız eşliğinde keşfedin.",
    image: "/images/IMG-20260625-WA0003.jpg",
    price: "900 TL",
    features: ["Öne Çıkan Tur", "Öğle Yemeği Dahil", "Meyve & Çay İkramı", "Suluada Plajları", "Aşk Mağarası"],
    isFeatured: true,
  },
  {
    id: "koylar",
    title: "Adrasan Koylar Turu",
    tagline: "Yeşille Mavinin Saklı Buluşması",
    description: "Sazak Koyu, Ceneviz Koyu, Akseki Koyu ve Korsan Koyu gibi kara yolu ulaşımı olmayan doğa harikalarında sakin ve huzur dolu bir gün geçirin.",
    image: "/images/IMG-20260625-WA0007.jpg",
    price: "900 TL",
    features: ["Ev Yapımı Yemekler", "Çay & Meyve İkramı", "Sazak & Ceneviz Koyu", "Snorkel Aktivitesi"],
    isFeatured: false,
  },
];

const features = [
  {
    icon: "⚓",
    title: "15+ Yıllık Kaptanlık",
    description: "Bölgenin tüm koylarını, akıntılarını ve en özel saatlerini bilen deneyimli kaptan.",
  },
  {
    icon: "🐟",
    title: "Lezzetli Öğle Yemeği",
    description: "Taze ızgara balık (veya tavuk), makarna, salata ve gün boyu çay/meyve ikramları.",
  },
  {
    icon: "🛡️",
    title: "Güvenli ve Temiz Tekne",
    description: "Her tur sonrası dezenfekte edilen, can yelekleri ve güvenlik ekipmanları tam tekne.",
  },
  {
    icon: "❤️",
    title: "Samimi Aile İşletmesi",
    description: "Kendinizi evinizde hissettirecek güler yüzlü hizmet ve samimi sohbetler.",
  },
];

const faqs = [
  {
    question: "Tur saatleri kaç ile kaç arasındadır?",
    answer: "Turlarımız sabah saat 10:00'da Adrasan Limanı'ndan kalkış yapar ve akşam 17:00 - 17:30 civarında limana geri döner.",
  },
  {
    question: "Fiyata öğle yemeği ve ikramlar dahil mi?",
    answer: "Evet, günlük turlarımıza öğle yemeği (ızgara balık veya tavuk seçenekli, makarna, salata) ile öğleden sonra taze meyve tabağı ve Türk çayı ikramlarımız dahildir.",
  },
  {
    question: "Teknede içecek satışı var mı yoksa kendimiz getirebilir miyiz?",
    answer: "Teknemizde yerli ve yabancı içecekler, soğuk meşrubatlar satılmaktadır. Dilerseniz kendi özel içeceklerinizi de yanınızda getirebilirsiniz.",
  },
  {
    question: "Çocuklar için indirim var mı?",
    answer: "Evet, 0-3 yaş arası çocuklarımız ücretsiz, 3-6 yaş arası çocuklarımız ise %50 indirimlidir.",
  },
  {
    question: "Rezervasyon ne kadar önceden yapılmalı?",
    answer: "Özellikle Temmuz - Ağustos ayları ile hafta sonlarında yoğunluk yaşanmaktadır. Planladığınız tarihten en az 2-3 gün önce rezervasyon yaptırmanızı tavsiye ederiz.",
  },
];

const testimonials = [
  {
    name: "Selin Yılmaz",
    date: "Ağustos 2025",
    rating: 5,
    comment: "Ramazan Kaptan ve ekibine çok teşekkür ederiz. Suluada turu harikaydı, hayatımda gördüğüm en berrak denizdi. Balıklar da çok lezzetliydi!",
  },
  {
    name: "Murat Kaya",
    date: "Temmuz 2025",
    rating: 5,
    comment: "Adrasan koylar turuna katıldık. Sazak ve Ceneviz koyları cennet gibi. Tekne çok temizdi ve servis çok güler yüzlüydü. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Elif Demir",
    date: "Eylül 2025",
    rating: 5,
    comment: "Özel tekne kiraladık ailece. Ramazan Kaptan bizi en sakin koylara götürdü. İkramlar, ilgi ve alaka mükemmeldi. Seneye tekrar geleceğiz.",
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Background Image Carousel loop
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>
      {/* 1. Hero Section with Background Carousel (Optimized for performance) */}
      <section className={styles.hero} id="homepage-hero">
        <div className={styles.heroBg}>
          {heroImages.map((img, idx) => (
            <div
              key={img}
              className={`${styles.heroSlide} ${heroIndex === idx ? styles.activeSlide : ""}`}
            >
              <Image
                src={img}
                alt="Adrasan Suluada Tekne Turu"
                fill
                priority={idx === 0}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`${styles.heroContent} container`}>
          <span className={styles.heroBadge}>Antalya Adrasan Suluada</span>
          <h1 className={styles.heroTitle}>
            Ramazan Kaptan ile <br />
            <span>Suluada Tekne Turu</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Akdeniz'in Maldivleri olarak bilinen doğa harikası <strong>Suluada</strong>'yı ve Adrasan'ın eşsiz, el değmemiş koylarını deneyimli kaptanımız rehberliğinde keşfedin.
          </p>
          <div className={styles.heroActions}>
            <a href="https://wa.me/905393601997?text=Merhaba%2C%20Suluada%20tekne%20turu%20rezervasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} id="hero-btn-whatsapp">
              WhatsApp Hızlı Rezervasyon
            </a>
            <Link href="/tekneturlari" className={styles.secondaryBtn} id="hero-btn-tours">
              Rotaları İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className={`${styles.intro} container section-padding`} id="homepage-intro">
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <span className={styles.sectionBadge}>Deneyim & Güler Yüz</span>
            <h2 className={styles.sectionTitle}>Adrasan'ın En Sevilen Tekne Turu</h2>
            <p className={styles.paragraph}>
              Ramazan Kaptan olarak, 15 yılı aşkın süredir Adrasan çıkışlı Suluada ve çevre koy turları düzenliyoruz. Nisan ve Kasım ayları arasında haftanın her günü misafirlerimize unutulmaz deniz maceraları yaşatıyoruz.
            </p>
            <p className={styles.paragraph}>
              Turumuzda önceliğimiz olan **Suluada**, beyaz kumları ve turkuaz sularıyla sizi büyüleyecek. Bunun yanı sıra Adrasan'ın eşsiz yeşil koyları ve gizemli mağaraları da gün boyu keşfinizi bekliyor olacak.
            </p>
            <div className={styles.introStats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>15+</span>
                <span className={styles.statLabel}>Yıllık Tecrübe</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>10K+</span>
                <span className={styles.statLabel}>Mutlu Misafir</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5.0</span>
                <span className={styles.statLabel}>Müşteri Puanı</span>
              </div>
            </div>
          </div>
          <div className={styles.introImageWrapper}>
            <Image
              src="/images/IMG-20260625-WA0011.jpg"
              alt="Adrasan Koylarında Teknemiz"
              width={550}
              height={400}
              className={styles.introImg}
            />
          </div>
        </div>
      </section>

      {/* 3. Tour Highlights - Suluada Promoted */}
      <section className={styles.toursSection} id="homepage-tours">
        <div className="container section-padding">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Hizmetlerimiz</span>
            <h2 className={styles.sectionTitle}>Eşsiz Tekne Turu Seçenekleri</h2>
            <p className={styles.sectionSubtitle}>
              Önceliğimiz olan doğa harikası Suluada rotası ve alternatif sakin koy turları ile rüya gibi bir gün geçirin.
            </p>
          </div>

          <div className={styles.toursGrid}>
            {tourHighlights.map((tour) => (
              <div
                key={tour.id}
                className={`${styles.tourCard} ${tour.isFeatured ? styles.tourCardFeatured : ""}`}
                id={`tour-card-${tour.id}`}
              >
                {tour.isFeatured && (
                  <div className={styles.featuredRibbon}>EN ÇOK TERCİH EDİLEN ROTA</div>
                )}
                <div className={styles.tourImgWrapper}>
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className={styles.tourImg}
                  />
                  <div className={styles.tourBadge}>{tour.price}</div>
                </div>
                <div className={styles.tourContent}>
                  <span className={styles.tourTag}>{tour.tagline}</span>
                  <h3 className={styles.tourTitle}>{tour.title}</h3>
                  <p className={styles.tourDesc}>{tour.description}</p>
                  <div className={styles.tourFeatures}>
                    {tour.features.map((feat, i) => (
                      <span key={i} className={styles.featTag}>
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                  <div className={styles.tourFooter}>
                    <Link href="/tekneturlari" className={styles.tourLink} id={`tour-link-more-${tour.id}`}>
                      Detayları Gör ➔
                    </Link>
                    <a
                      href={`https://wa.me/905393601997?text=Merhaba%2C%20${encodeURIComponent(tour.title)}%20hakk%C4%B1nda%20bilgi%20ve%20rezervasyon%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.tourBookBtn}
                      id={`tour-book-btn-${tour.id}`}
                    >
                      Yer Ayırt (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className={styles.whySection} id="homepage-features">
        <div className="container section-padding">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Neden Biz?</span>
            <h2 className={styles.sectionTitle}>Farkımız ve Hizmet Kalitemiz</h2>
            <p className={styles.sectionSubtitle}>
              Ramazan Kaptan turlarında her detay misafirlerimizin konforu ve unutulmaz anılar biriktirmesi için planlanır.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feat, i) => (
              <div key={i} className={styles.featureCard} id={`feature-card-${i}`}>
                <span className={styles.featureIcon}>{feat.icon}</span>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reviews / Testimonials */}
      <section className={styles.reviewsSection} id="homepage-reviews">
        <div className="container section-padding">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Misafir Yorumları</span>
            <h2 className={styles.sectionTitle}>Bizi Katılanlardan Dinleyin</h2>
          </div>

          <div className={styles.reviewsGrid}>
            {testimonials.map((test, i) => (
              <div key={i} className={styles.reviewCard} id={`review-card-${i}`}>
                <div className={styles.reviewHeader}>
                  <div className={styles.stars}>
                    {"★".repeat(test.rating)}
                    {"☆".repeat(5 - test.rating)}
                  </div>
                  <span className={styles.reviewDate}>{test.date}</span>
                </div>
                <p className={styles.reviewComment}>"{test.comment}"</p>
                <h4 className={styles.reviewName}>{test.name}</h4>
              </div>
            ))}
          </div>
          
          <div className={styles.reviewsCta}>
            <Link href="/yorumlar" className={styles.allReviewsBtn} id="all-reviews-btn">
              Tüm Yorumları Oku & Yorum Yaz ➔
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className={`${styles.faqSection} container section-padding`} id="homepage-faq">
        <div className={styles.faqContent}>
          <span className={styles.sectionBadge}>Sıkça Sorulan Sorular</span>
          <h2 className={styles.sectionTitle}>Merak Edilenler</h2>
          <p className={styles.sectionSubtitle}>
            Turlarımız hakkında en çok sorulan soruların yanıtlarını aşağıda bulabilirsiniz.
          </p>

          <div className={styles.faqAccordion}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${activeFaq === i ? styles.faqActive : ""}`}
                onClick={() => toggleFaq(i)}
                id={`faq-item-${i}`}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.faqToggleIcon}>{activeFaq === i ? "−" : "+"}</span>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Booking Form Section */}
      <section className={styles.bookingSection} id="homepage-booking">
        <div className="container section-padding">
          <div className={styles.bookingGrid}>
            <div className={styles.bookingIntro}>
              <span className={styles.sectionBadgeLight}>Kolay Rezervasyon</span>
              <h2 className={styles.bookingTitle}>Maviliklere İlk Adımı Atın</h2>
              <p className={styles.bookingText}>
                Hayalinizdeki tekne tatili bir mesaj uzağınızda! Rezervasyon talebinizi oluşturun veya sorularınız için doğrudan Ramazan Kaptan ile iletişime geçin.
              </p>
              <div className={styles.contactBoxes}>
                <div className={styles.contactBox}>
                  <span className={styles.boxIcon}>📞</span>
                  <div>
                    <h4>Telefon ile Ara</h4>
                    <p><a href="tel:+905393601997">0539 360 19 97</a></p>
                  </div>
                </div>
                <div className={styles.contactBox}>
                  <span className={styles.boxIcon}>💬</span>
                  <div>
                    <h4>WhatsApp Destek</h4>
                    <p><a href="https://wa.me/905393601997" target="_blank" rel="noopener noreferrer">Hemen Yazın</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bookingFormContainer}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
