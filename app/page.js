'use client';

import { useState } from 'react';
import styles from "./page.module.css";

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
        <div className={styles.logo}>*Name/logo*</div>
        <div style={{ width: '2rem' }}></div>
      </header>
      
      <section id="about" className={styles.content}>
        <h2>About Me</h2>
        <p>This is the about me section. You can add your skills and other information here.</p>
      </section>

      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <p>This is where your projects will be listed.</p>
      </section>
      
      <section id="contact" className={styles.section}>
        <h2>Contact Me</h2>
        <p>You can add your contact information or a contact form here.</p>
      </section>
    </main>
  );
}
