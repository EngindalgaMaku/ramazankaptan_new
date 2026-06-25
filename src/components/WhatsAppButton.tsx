"use client";

import { useEffect, useState } from "react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="https://wa.me/905393601997?text=Merhaba%2C%20Adrasan%2FSuluada%20tekne%20turu%20i%C3%A7in%20rezervasyon%20veya%20bilgi%20almak%20istiyorum."
      className={`${styles.floatButton} ${isVisible ? styles.visible : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden Rezervasyon Yapın"
      id="floating-whatsapp-btn"
    >
      <div className={styles.pulse}></div>
      {/* WhatsApp SVG Icon */}
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.277.002 9.57-4.285 9.573-9.563.002-2.556-.992-4.959-2.798-6.766C16.342 2.468 13.948 1.472 11.39 1.472c-5.273 0-9.563 4.287-9.566 9.566-.001 1.637.454 3.238 1.319 4.667l-.989 3.61 3.712-.977zm11.233-5.263c-.29-.145-1.72-.849-1.987-.946-.266-.097-.46-.145-.654.145-.193.291-.749.946-.918 1.14-.169.193-.339.217-.629.072-2.92-1.453-4.817-3.003-5.69-4.512-.232-.4-.016-.617.18-.813.176-.176.386-.452.579-.677.193-.226.258-.387.387-.645.129-.258.064-.485-.032-.677-.097-.194-.749-1.808-1.026-2.476-.27-.649-.545-.56-.749-.57l-.638-.01c-.22 0-.58.082-.883.412-.303.33-1.16 1.133-1.16 2.76 0 1.628 1.184 3.199 1.346 3.415.162.217 2.33 3.559 5.644 4.991.788.341 1.403.545 1.884.698.792.251 1.512.216 2.081.13.635-.096 1.72-.703 1.962-1.383.242-.68.242-1.262.17-1.38-.073-.119-.266-.213-.556-.358z"/>
      </svg>
      <span className={styles.label}>Rezervasyon Yap</span>
    </a>
  );
}
