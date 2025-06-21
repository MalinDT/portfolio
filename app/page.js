'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import VinylCard from './components/VinylCard';
import ContactCard from './components/ContactCard';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.menuContainer}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            ☰
          </div>
          {isMenuOpen && (
            <nav className={styles.collapsibleMenu}>
              <a href="#about" onClick={handleLinkClick}>About me (skills)</a>
              <a href="#projects" onClick={handleLinkClick}>Projects</a>
              <a href="#contact" onClick={handleLinkClick}>Contact me</a>
            </nav>
          )}
        </div>
        <div style={{ width: '2rem' }}></div>
      </header>
      
      <section id="about" className={styles.section}>
        <div className={styles.aboutContainer}>
          <div className={`${styles.aboutCorner} ${styles.tl}`}></div>
          <div className={`${styles.aboutCorner} ${styles.tr}`}></div>
          <div className={`${styles.aboutCorner} ${styles.bl}`}></div>
          <div className={`${styles.aboutCorner} ${styles.br}`}></div>
          <div className={`${styles.aboutLatch} ${styles.latch1}`}></div>
          <div className={`${styles.aboutLatch} ${styles.latch2}`}></div>
          <h2>About me section</h2>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <VinylCard title="Project One" description="Description" />
          <VinylCard title="Project Two" description="Description" />
          <VinylCard title="Project Three" description="Description" />
          <VinylCard title="Project Four" description="Description" />
          <VinylCard title="Project Five" description="Description" />
          <VinylCard title="Project Six" description="Description" />
        </div>
      </section>
      
      <section id="contact" className={styles.section}>
        <ContactCard />
      </section>
    </main>
  );
}
