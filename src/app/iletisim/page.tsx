import type { Metadata } from "next";
import styles from "./page.module.css";
import BookingForm from "src/components/BookingForm";

export const metadata: Metadata = {
  title: "İletişim | Ramazan Kaptan | Adrasan Tekne Turu Rezervasyon",
  description:
    "Ramazan Kaptan ile iletişime geçin. Adrasan Limanı adresi, telefon numarası, WhatsApp rezervasyon hattı ve harita bilgileri.",
  alternates: {
    canonical: "https://www.ramazankaptan.com/iletisim/",
  },
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.headerBanner} id="contact-header">
        <div className={styles.bannerOverlay}></div>
        <div className={`${styles.bannerContent} container`}>
          <span className={styles.bannerBadge}>İletişim</span>
          <h1 className={styles.bannerTitle}>Bize Ulaşın</h1>
          <p className={styles.bannerSubtitle}>
            Rezervasyon, özel tur kiralama talepleri ve sorularınız için bizimle doğrudan iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container section-padding" id="contact-content">
        <div className={styles.grid}>
          {/* Contact Information */}
          <div className={styles.infoSection}>
            <span className={styles.sectionBadge}>Rezervasyon & Adres</span>
            <h2 className={styles.sectionTitle}>İletişim Bilgileri</h2>
            <p className={styles.paragraph}>
              Teknemiz Adrasan Limanı'nda (Kumluca / Antalya) bağlıdır. Turlarımız her sabah bu limandan hareket etmektedir.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h3>Telefon Numarası</h3>
                  <p><a href="tel:+905393601997" id="contact-phone-call">0539 360 19 97</a></p>
                  <p className={styles.subtext}>Arama veya SMS ile ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>💬</span>
                <div>
                  <h3>WhatsApp Rezervasyon</h3>
                  <p><a href="https://wa.me/905393601997?text=Merhaba%2C%20tekne%20turu%20rezervasyon%20talebi%20g%C3%B6ndermek%20istiyorum." target="_blank" rel="noopener noreferrer" id="contact-whatsapp">Hemen Mesaj Gönder</a></p>
                  <p className={styles.subtext}>7/24 hızlı rezervasyon ve bilgi hattı.</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h3>Liman Adresi</h3>
                  <p>Adrasan Limanı, Kumluca / Antalya, Türkiye</p>
                  <p className={styles.subtext}>Liman girişinde teknemizi kolayca bulabilirsiniz.</p>
                </div>
              </div>


            </div>

            {/* Google Maps Embed or Instructions */}
            <div className={styles.mapContainer}>
              <h3 className={styles.mapTitle}>📍 Liman Konumu (Harita)</h3>
              <div className={styles.mapWrapper}>
                {/* Embed modern Google Map showing Adrasan Harbor */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.716911292027!2d30.461994975764024!3d36.30713709503028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1eb231bf3efd9%3A0xe54e60ea9b007c08!2sAdrasan%20Sahili%20Tekne%20Turlar%C4%B1%20Kalk%C4%B1%C5%9F%20Noktas%C4%B1!5e0!3m2!1str!2str!4v1719299479901!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ramazan Kaptan Adrasan Liman Konumu"
                  id="google-maps-iframe"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Reservation Form */}
          <div className={styles.formSection}>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
