import { useState } from 'react';
import styles from './community-card.module.css';

const CommunityCard = ({ community }) => {

  return (
    <div className={styles.card}>
      <img src={community.image} alt="community image" />
      <div className={styles.descriptionCard}>
        <p className={styles.title}>{community.name}</p>
        <p className={styles.description}>{community.description}</p>
      </div>
    </div>
  );
}

export default CommunityCard;
