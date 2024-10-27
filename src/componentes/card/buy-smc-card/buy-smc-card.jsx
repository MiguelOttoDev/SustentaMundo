import styles from './buy-smc-card.module.css';
import plusIcon from '../../../imgs/plus.png';
import { useState } from 'react';
import { useEffect } from 'react';


const BuySmcCard = () => {
  const [smc, setSmc] = useState(() => {
    try{
      const smc = localStorage.getItem('smc')
      return smc ? parseFloat(smc) : 0
    }catch(error){
      return 0
    }
  })

  const atributeValueOnSmc = (value) => {
    const actualSmcQuantity = parseFloat(localStorage.getItem('smc'))
    setSmc(actualSmcQuantity + value)
  }

  useEffect(() => {
    localStorage.setItem('smc', smc);
  }, [smc]);
  

  return (
    <div className={styles.content}>
      <p>
        {smc} SMC
      </p>
      <div className={styles.plus} onClick={() => atributeValueOnSmc(500)}>
        <img src={plusIcon} alt="plus button" />
      </div>
    </div>
  );
};

export default BuySmcCard;
