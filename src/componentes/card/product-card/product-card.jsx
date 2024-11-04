import { useState } from 'react';
import styles from './product-card.module.css';

const ProductCard = ({ sale, callBack, isSelected }) => {

  return (
    <div className={isSelected ? styles.cardProductSelected : styles.cardProduct}
     onClick={callBack}
    >
      <div className={styles.contextProduct}>
        <div className={styles.headerProduct}>
          <p>{sale.product.name} - {sale.product.weight}</p>
          <p>{sale.smcs} SMC</p>
        </div>

        <div className={styles.descriptionAreaProductCard}>
          <div className={styles.textAreaProductCard}>
            <p>{sale.product.description}</p>
          </div>

          <div className={styles.locationProductCard}>
            <p>{sale.location.city}</p>
            <p>{sale.location.state}</p>
            <p>{sale.location.country}</p>
          </div>
        </div>

      </div>
      <div className={styles.profileProductCard}>
        <img src={sale.profile.profilePicture} alt="profilePicture" />
        <div className={styles.profileDescriptionProductCard}>
          <p>{sale.profile.name}</p>
          <p>{sale.location.city}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
