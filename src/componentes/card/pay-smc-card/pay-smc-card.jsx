import { useEffect, useState } from 'react';
import styles from './pay-smc-card.module.css';
import { useSmc } from '../../../context/smcContext';
import Swal from 'sweetalert2';

const PaySmcCard = ({price, quantity, setPriceToPay, setSmcQuantity}) => {
  const {setSmc} = useSmc()

  const buy = () => {
    const actualSmcWaller = Number(localStorage.getItem('smc'))
    setSmc(actualSmcWaller + quantity)
    setPriceToPay(0)
    setSmcQuantity(0)
    Swal.fire({
      icon: 'success',
      title: 'Compra Efetuada!',
      text: 'Sua compra foi realizada com sucesso.',
      confirmButtonText: 'OK'
    });
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
            disabled={true}
            />
          </div>
        </div>
        <div className={styles.price}>
          <p>PREÇO:</p>
          <div>
            <p>R${price.toFixed(2)}</p>
          </div>
        </div>
        <button className={price<= 0 ? styles.button : styles.buttonSelected}
         onClick={() => buy()}
         disabled={price <= 0}
         >
          <p>COMPRAR</p>
        </button>
      </div>
    </div>
  );
}

export default PaySmcCard;
