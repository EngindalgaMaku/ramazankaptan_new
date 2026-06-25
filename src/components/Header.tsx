"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Anasayfa", path: "/" },
  { name: "Ramazan Kaptan", path: "/hakkinda" },
  { name: "Tekne Turları", path: "/tekneturlari" },
  { name: "Galeri", path: "/galeri" },
  { name: "Blog", path: "/blog" },
  { name: "Yorumlar", path: "/yorumlar" },
  { name: "İletişim", path: "/iletisim" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} glass`}>
      <div className={`${styles.container} container`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo} id="nav-logo">
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
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>RAMAZAN KAPTAN</span>
            <span className={styles.logoSubtitle}>Adrasan Suluada Tekne Turu</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "")}`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://wa.me/905393601997?text=Merhaba%2C%20tekne%20turu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            id="nav-cta-whatsapp"
          >
            Rezervasyon Yap
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü Aç/Kapat"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Dropdown */}
        <nav className={`${styles.mobileNav} ${isOpen ? styles.mobileNavActive : ""}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "")}`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://wa.me/905393601997?text=Merhaba%2C%20tekne%20turu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCtaButton}
            id="mobile-nav-cta-whatsapp"
          >
            Rezervasyon Yap (WhatsApp)
          </a>
        </nav>

        {/* Overlay Backdrop */}
        {isOpen && (
          <div
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
            id="mobile-menu-backdrop"
          />
        )}
      </div>
    </header>
  );
}
