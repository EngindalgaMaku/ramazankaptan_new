import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="main-footer">
      <div className={`${styles.container} container`}>
        {/* About column */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <svg
              className={styles.logoIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4z" />
              <path d="M21 14 10 2 10 14z" />
              <path d="M10 2v12" />
            </svg>
            <span className={styles.logoText}>RAMAZAN KAPTAN</span>
          </div>
          <p className={styles.description}>
            Adrasan'ın muhteşem koylarını, gizemli mağaralarını ve Suluada'nın beyaz kumsallarını 15 yıllık tecrübemiz ve güler yüzümüzle keşfedin.
          </p>
        </div>

        {/* Links column */}
        <div className={styles.column}>
          <h4 className={styles.title}>Hızlı Menü</h4>
          <ul className={styles.linksList}>
            <li>
              <Link href="/" id="footer-link-home">Anasayfa</Link>
            </li>
            <li>
              <Link href="/hakkinda" id="footer-link-about">Ramazan Kaptan</Link>
            </li>
            <li>
              <Link href="/tekneturlari" id="footer-link-tours">Tekne Turları</Link>
            </li>
            <li>
              <Link href="/galeri" id="footer-link-gallery">Galeri</Link>
            </li>
            <li>
              <Link href="/blog" id="footer-link-blog">Blog</Link>
            </li>
            <li>
              <Link href="/yorumlar" id="footer-link-reviews">Yorumlar</Link>
            </li>
            <li>
              <Link href="/iletisim" id="footer-link-contact">İletişim</Link>
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div className={styles.column}>
          <h4 className={styles.title}>İletişim & Rezervasyon</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>Adrasan Limanı, Kumluca / Antalya</span>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:+905393601997" id="footer-phone-call">0539 360 19 97</a>
            </li>
            <li>
              <span className={styles.contactIcon}>💬</span>
              <a href="https://wa.me/905393601997" target="_blank" rel="noopener noreferrer" id="footer-whatsapp">
                WhatsApp Rezervasyon
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`${styles.bottomContainer} container`}>
          <p className={styles.copyright}>
            &copy; {currentYear} Ramazan Kaptan. Tüm Hakları Saklıdır.
          </p>
          <p className={styles.developer}>
            Designed with ❤️ for Suluada Boat Tours.
          </p>
        </div>
      </div>
    </footer>
  );
}
