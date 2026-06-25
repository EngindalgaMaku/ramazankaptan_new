"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const categories = [
  { id: "all", name: "Tümü" },
  { id: "suluada", name: "Suluada" },
  { id: "koylar", name: "Koylar & Plajlar" },
  { id: "yemekler", name: "Teknede Yemek" },
  { id: "tekne", name: "Teknemiz" },
  { id: "videolar", name: "Videolar" },
];

const galleryItems = [
  { id: 1, type: "image", category: "suluada", title: "Suluada Maldivler Kumsalı", path: "/images/IMG-20260625-WA0002.jpg" },
  { id: 2, type: "image", category: "suluada", title: "Suluada Turkuaz Yüzme Noktası", path: "/images/IMG-20260625-WA0003.jpg" },
  { id: 3, type: "image", category: "yemekler", title: "Teknede Balık Izgara Menüsü", path: "/images/IMG-20260625-WA0004.jpg" },
  { id: 4, type: "image", category: "tekne", title: "Ramazan Kaptan Teknemiz", path: "/images/IMG-20260625-WA0005.jpg" },
  { id: 5, type: "image", category: "koylar", title: "Sazak Koyu ve Teknemiz", path: "/images/IMG-20260625-WA0006.jpg" },
  { id: 6, type: "image", category: "koylar", title: "Adrasan Koyları Eşsiz Doğa", path: "/images/IMG-20260625-WA0007.jpg" },
  { id: 7, type: "image", category: "suluada", title: "Suluada Aşk Mağarası Geçişi", path: "/images/IMG-20260625-WA0008.jpg" },
  { id: 8, type: "image", category: "yemekler", title: "Meyve Tabağı Servisimiz", path: "/images/IMG-20260625-WA0009.jpg" },
  { id: 9, type: "image", category: "suluada", title: "Suluada Doğa Harikası Kıyılar", path: "/images/IMG-20260625-WA0010.jpg" },
  { id: 10, type: "image", category: "koylar", title: "Adrasan Fenerli Koy Yüzme Durağı", path: "/images/IMG-20260625-WA0011.jpg" },
  { id: 11, type: "image", category: "tekne", title: "Güneşlenme Alanı Keyfi", path: "/images/IMG-20260625-WA0012.jpg" },
  
  // Videos
  { id: 12, type: "video", category: "videolar", title: "Suluada Tekne Turu Yolculuğu", path: "/images/VID-20260625-WA0018.mp4" },
  { id: 13, type: "video", category: "videolar", title: "Turkuaz Suluada Plajı Dalgaları", path: "/images/VID-20260625-WA0019.mp4" },
  { id: 14, type: "video", category: "videolar", title: "Tekneden Suluada Manzarası", path: "/images/VID-20260625-WA0020.mp4" },
  { id: 15, type: "video", category: "videolar", title: "Berrak Deniz ve Yüzme Molası", path: "/images/VID-20260625-WA0021.mp4" },
  { id: 16, type: "video", category: "videolar", title: "Koyda Keyifli Yüzme Anları", path: "/images/VID-20260625-WA0022.mp4" },
  { id: 17, type: "video", category: "videolar", title: "Tekneden Balıkları İzleme", path: "/images/VID-20260625-WA0023.mp4" },
  { id: 18, type: "video", category: "videolar", title: "Adrasan'ın Eşsiz Sahili", path: "/images/VID-20260625-WA0024.mp4" },
  { id: 19, type: "video", category: "videolar", title: "Suluada'ya Yaklaşırken", path: "/images/VID-20260625-WA0025.mp4" },
  { id: 20, type: "video", category: "videolar", title: "Keyifli Tekne Müzik ve Eğlence", path: "/images/VID-20260625-WA0026.mp4" },
  { id: 21, type: "video", category: "videolar", title: "Aşk Mağarası Dalışı ve Akıntı", path: "/images/VID-20260625-WA0027.mp4" },
  { id: 22, type: "video", category: "videolar", title: "Teknede Sunset / Gün Batımı", path: "/images/VID-20260625-WA0028.mp4" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.headerBanner} id="gallery-header">
        <div className={styles.bannerOverlay}></div>
        <div className={`${styles.bannerContent} container`}>
          <span className={styles.bannerBadge}>Galeri</span>
          <h1 className={styles.bannerTitle}>Mavi Cennetten Kareler</h1>
          <p className={styles.bannerSubtitle}>
            Turlarımızdan, Suluada'dan, koylarımızdan ve teknemizden en güzel anları içeren fotoğraf ve video albümümüz.
          </p>
        </div>
      </section>

      {/* Filterable Gallery Grid */}
      <section className="container section-padding" id="gallery-grid">
        {/* Category Filters */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${filter === cat.id ? styles.activeFilter : ""}`}
              onClick={() => setFilter(cat.id)}
              id={`gallery-filter-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={styles.gridItem}
              onClick={() => setLightboxIndex(idx)}
              id={`gallery-item-${item.id}`}
            >
              <div className={styles.imageWrapper}>
                {item.type === "image" ? (
                  <Image
                    src={item.path}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className={styles.galleryImg}
                  />
                ) : (
                  <video
                    src={item.path}
                    muted
                    loop
                    playsInline
                    className={styles.galleryImg}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                )}
                <div className={styles.hoverOverlay}>
                  <span className={styles.zoomIcon}>{item.type === "image" ? "🔍" : "▶️"}</span>
                  <h3 className={styles.hoverTitle}>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)} id="gallery-lightbox">
          <button
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Kapat"
          >
            ×
          </button>
          
          <button
            className={styles.prevBtn}
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Önceki"
          >
            ❮
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxMediaWrapper}>
              {filteredItems[lightboxIndex].type === "image" ? (
                <Image
                  src={filteredItems[lightboxIndex].path}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <video
                  src={filteredItems[lightboxIndex].path}
                  controls
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "100%", maxHeight: "80vh", borderRadius: "8px" }}
                  id="lightbox-video-player"
                />
              )}
            </div>
            <p className={styles.lightboxCaption}>
              {filteredItems[lightboxIndex].title} ({lightboxIndex + 1} / {filteredItems.length})
            </p>
          </div>

          <button
            className={styles.nextBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Sonraki"
          >
            ❯
          </button>
        </div>
      )}

      {/* CTA Reservation Banner */}
      <section className={styles.ctaSection} id="gallery-cta">
        <div className={`${styles.ctaContent} container`}>
          <h2>Fotoğraflarda Gördüğünüz Güzellikleri Canlı Keşfedin</h2>
          <p>Rezervasyonunuzu oluşturmak veya aklınızdaki soruları sormak için hemen bizimle WhatsApp üzerinden iletişime geçin.</p>
          <a href="https://wa.me/905393601997?text=Merhaba%2C%20galerinizdeki%20resimleri%20ve%20videolar%C4%B1%20g%C3%B6rd%C3%BCm%20ve%20tekne%20turu%20rezervasyon%20hakk%C4%B1nda%20konu%C5%9Fmak%20istiyorum." target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Rezervasyon & Bilgi Al
          </a>
        </div>
      </section>
    </div>
  );
}
