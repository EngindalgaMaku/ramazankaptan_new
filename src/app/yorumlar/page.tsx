"use client";

import { useState } from "react";
import styles from "./page.module.css";

const initialReviews = [
  {
    id: 1,
    name: "Selin Yılmaz",
    date: "20 Ağustos 2025",
    rating: 5,
    tour: "Suluada Tekne Turu",
    comment: "Ramazan Kaptan ve güler yüzlü ekibine çok teşekkür ederiz. Suluada turu harikaydı, hayatımda gördüğüm en temiz ve berrak denizdi. Teknede servis edilen balıklar da çok lezzetli ve tazeydi. Kesinlikle tekrar geleceğiz!",
  },
  {
    id: 2,
    name: "Murat Kaya",
    date: "14 Temmuz 2025",
    rating: 5,
    tour: "Adrasan Koylar Turu",
    comment: "Adrasan koylar turuna katıldık. Sazak ve Ceneviz koyları tam anlamıyla cennet gibiydi. Tekne çok temiz, düzenli ve konforluydu. Ramazan Kaptan'ın samimi sohbeti tura ayrı bir keyif kattı. Herkese öneririm.",
  },
  {
    id: 3,
    name: "Elif & Caner Demir",
    date: "02 Eylül 2025",
    rating: 5,
    tour: "Özel Tekne Kiralama",
    comment: "Evlilik yıldönümümüz için özel tekne kiraladık. Ramazan Kaptan bize en sakin, kimsenin olmadığı koyları seçti. Yemekler, ikramlar ve müzik tam istediğimiz gibiydi. Muhteşem bir gün geçirmemizi sağladılar.",
  },
  {
    id: 4,
    name: "Ayşe Tokgöz",
    date: "28 Haziran 2025",
    rating: 5,
    tour: "Suluada Tekne Turu",
    comment: "Çocuklarımızla katıldık ve çok rahat ettik. Teknenin genişliği ve güneşlenme alanları gayet yeterliydi. Öğleden sonraki çay ve meyve servisi şahaneydi. Suluada'nın suyu zaten inanılmaz, kesinlikle görülmeli.",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    tour: "Suluada Tekne Turu",
    comment: "",
  });
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const today = new Date();
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const formattedDate = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

    const addedReview = {
      id: reviews.length + 1,
      name: newReview.name,
      date: formattedDate,
      rating: newReview.rating,
      tour: newReview.tour,
      comment: newReview.comment,
    };

    setReviews([addedReview, ...reviews]);
    setNewReview({ name: "", rating: 5, tour: "Suluada Tekne Turu", comment: "" });
    setIsSubmitted(true);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.headerBanner} id="reviews-header">
        <div className={styles.bannerOverlay}></div>
        <div className={`${styles.bannerContent} container`}>
          <span className={styles.bannerBadge}>Yorumlar</span>
          <h1 className={styles.bannerTitle}>Misafir Defterimiz</h1>
          <p className={styles.bannerSubtitle}>
            Turlarımıza katılan değerli misafirlerimizin deneyimleri ve görüşleri.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container section-padding" id="reviews-content">
        <div className={styles.grid}>
          {/* Reviews List */}
          <div className={styles.reviewsList}>
            <h2 className={styles.sectionTitle}>Sizden Gelenler ({reviews.length})</h2>
            <div className={styles.listContainer}>
              {reviews.map((rev) => (
                <div key={rev.id} className={styles.reviewCard} id={`review-item-${rev.id}`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.userInfo}>
                      <span className={styles.userAvatar}>👤</span>
                      <div>
                        <h3 className={styles.userName}>{rev.name}</h3>
                        <span className={styles.tourTag}>{rev.tour}</span>
                      </div>
                    </div>
                    <div className={styles.meta}>
                      <div className={styles.stars}>
                        {"★".repeat(rev.rating)}
                        {"☆".repeat(5 - rev.rating)}
                      </div>
                      <span className={styles.date}>{rev.date}</span>
                    </div>
                  </div>
                  <p className={styles.commentText}>"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leave a Review Form */}
          <div className={styles.formContainer}>
            <div className={styles.stickyForm}>
              <h2 className={styles.sectionTitle}>Görüşlerinizi Paylaşın</h2>
              <p className={styles.formIntro}>
                Bizimle geçirdiğiniz günü değerlendirmek ve diğer misafirlerimize rehberlik etmek için yorumunuzu bırakabilirsiniz.
              </p>

              {isSubmitted && (
                <div className={styles.successMessage} id="review-success-alert">
                  ✓ Yorumunuz başarıyla eklendi! Katkınız için teşekkür ederiz.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form} id="add-review-form">
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Mehmet Öz"
                    className={styles.input}
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Katıldığınız Tur *</label>
                  <select
                    className={styles.select}
                    value={newReview.tour}
                    onChange={(e) => setNewReview({ ...newReview, tour: e.target.value })}
                  >
                    <option value="Suluada Tekne Turu">Suluada Tekne Turu</option>
                    <option value="Adrasan Koylar Turu">Adrasan Koylar Turu</option>
                    <option value="Özel Tekne Kiralama">Özel Tekne Kiralama</option>
                    <option value="Mehtap / Sunset Turu">Mehtap / Sunset Turu</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Puanınız *</label>
                  <div className={styles.starSelection}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`${styles.starBtn} ${
                          (hoverRating !== null ? star <= hoverRating : star <= newReview.rating)
                            ? styles.starActive
                            : ""
                        }`}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        aria-label={`${star} Yıldız`}
                        id={`star-select-${star}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Yorumunuz *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Turdaki deneyiminiz, yemekler, kaptanın ilgisi hakkında neler düşünüyorsunuz?"
                    className={styles.textarea}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn} id="review-submit-btn">
                  Geri Bildirimi Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
