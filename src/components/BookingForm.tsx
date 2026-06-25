"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    people: "1",
    tourType: "Suluada Tekne Turu",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const whatsappNumber = "905393601997";
    const formattedText = `Merhaba Ramazan Kaptan,

Tekne turu için rezervasyon yaptırmak istiyorum:

👤 Ad Soyad: ${formData.name}
📅 Tarih: ${formData.date}
👥 Kişi Sayısı: ${formData.people} Kişi
🛥️ Tur Tipi: ${formData.tourType}
💬 Not: ${formData.message || "Yok"}

Müsaitlik durumunu öğrenebilir miyim?`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in new window
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} id="booking-request-form">
      <h3 className={styles.formTitle}>Rezervasyon Talebi Oluştur</h3>
      <p className={styles.formSubtitle}>
        Formu doldurun, talebiniz WhatsApp mesajı olarak hazırlansın ve tek tıkla Ramazan Kaptan'a gönderilsin!
      </p>

      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Adınız Soyadınız *</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Örn: Ahmet Yılmaz"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.label}>Tur Tarihi *</label>
          <input
            type="date"
            id="date"
            name="date"
            className={styles.input}
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="people" className={styles.label}>Kişi Sayısı *</label>
          <select
            id="people"
            name="people"
            className={styles.select}
            value={formData.people}
            onChange={handleChange}
          >
            {[...Array(20)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Kişi
              </option>
            ))}
            <option value="20+">20+ Kişi (Grup)</option>
          </select>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="tourType" className={styles.label}>Tur Seçeneği *</label>
        <select
          id="tourType"
          name="tourType"
          className={styles.select}
          value={formData.tourType}
          onChange={handleChange}
        >
          <option value="Suluada Tekne Turu">Suluada Tekne Turu (Maldivler Rotası)</option>
          <option value="Adrasan Koylar Turu">Adrasan Koylar Turu (Sazak-Ceneviz Rotası)</option>
          <option value="Özel Tekne Kiralama">Kişiye Özel Tekne Turu (Grup / Aile)</option>
          <option value="Mehtap / Sunset Turu">Akşam Mehtap / Gün Batımı Turu</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Mesajınız / Özel Talepleriniz</label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Beslenme tercihleriniz (örn: balık yerine tavuk), doğum günü kutlaması vb. notlarınızı yazabilirsiniz."
          rows={3}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitBtn} id="booking-submit-whatsapp-btn">
        <svg
          className={styles.whatsappIcon}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.277.002 9.57-4.285 9.573-9.563.002-2.556-.992-4.959-2.798-6.766C16.342 2.468 13.948 1.472 11.39 1.472c-5.273 0-9.563 4.287-9.566 9.566-.001 1.637.454 3.238 1.319 4.667l-.989 3.61 3.712-.977zm11.233-5.263c-.29-.145-1.72-.849-1.987-.946-.266-.097-.46-.145-.654.145-.193.291-.749.946-.918 1.14-.169.193-.339.217-.629.072-2.92-1.453-4.817-3.003-5.69-4.512-.232-.4-.016-.617.18-.813.176-.176.386-.452.579-.677.193-.226.258-.387.387-.645.129-.258.064-.485-.032-.677-.097-.194-.749-1.808-1.026-2.476-.27-.649-.545-.56-.749-.57l-.638-.01c-.22 0-.58.082-.883.412-.303.33-1.16 1.133-1.16 2.76 0 1.628 1.184 3.199 1.346 3.415.162.217 2.33 3.559 5.644 4.991.788.341 1.403.545 1.884.698.792.251 1.512.216 2.081.13.635-.096 1.72-.703 1.962-1.383.242-.68.242-1.262.17-1.38-.073-.119-.266-.213-.556-.358z"/>
        </svg>
        WhatsApp ile Rezervasyon Yap
      </button>
    </form>
  );
}
