import styles from './buy-smc-card.module.css';
import plusIcon from '../../../imgs/plus.png';
import { useState } from 'react';


const BuySmcCard = () => {
  const [smc, setSmc] = useState(5)

  
  return (
    <div className={styles.content}>
      <p>
        {smc} SMC
      </p>
      <div className={styles.plus}>
        <img src={plusIcon} alt="plus button" />
      </div>
    </div>
  );
};

export default BuySmcCard;
