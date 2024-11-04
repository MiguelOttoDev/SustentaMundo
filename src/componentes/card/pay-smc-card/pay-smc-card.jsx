import { useEffect, useState } from 'react';
import styles from './pay-smc-card.module.css';
import { useSmc } from '../../../context/smcContext';
import Swal from 'sweetalert2';

const PaySmcCard = ({}) => {

  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const {setSmc} = useSmc()
  

  const topUpSmcWallet = (smcWallet) => {
    setSmc(smcWallet - price)
  }
  


  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>COMPRAR</p>
      </div>
      <div className={styles.content}>
        <div className={styles.productName}>
          <p>Sustenta Mundo Coins</p>
        </div>
        <div className={styles.quantity}>
          <p>SMC:</p>
          <div>
            <input 
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 2) {
                setQuantity(value === "" ? "" : Number(value));
              }
            }}
            disabled={true}
            />
          </div>
        </div>
        <div className={styles.price}>
          <p>PREÇO:</p>
          <div>
            <p>{price} SMC</p>
          </div>
        </div>
        <button className={styles.button}
         onClick={() => {
        }}>
          <p>COMPRAR</p>
        </button>
      </div>
    </div>
  );
}

export default PaySmcCard;
