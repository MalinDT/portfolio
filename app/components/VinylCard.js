import React from 'react';
import styles from './VinylCard.module.css';

const VinylCard = ({ title, description }) => {
  return (
    <div className={styles.vinylContainer}>
      <div className={styles.record} />
      <div className={styles.sleeve}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VinylCard; 