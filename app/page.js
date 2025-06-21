'use client';

import { useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <a href="#">Projects</a>
              <a href="#">Contact me</a>
              <a href="#">About me (skills)</a>
            </nav>
          )}
        </div>
        <div className={styles.logo}>*Name/logo*</div>
        <div style={{ width: '2rem' }}></div>
      </header>
      <div className={styles.content}>
        {/* Main content goes here */}
      </div>
      <footer className={styles.footer}>
        <button className={styles.button}>Projects</button>
        <button className={styles.button}>Contact me</button>
        <button className={styles.button}>about me (skills)</button>
      </footer>
    </main>
  );
}
