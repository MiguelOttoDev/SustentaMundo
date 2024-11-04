import { useEffect, useState } from 'react';
import styles from './compra-card.module.css';
import { useSmc } from '../../../context/smcContext';
import Swal from 'sweetalert2';

const CompraCard = ({sale, exhibitionSales, setExhibitionSales, setSelectedSale}) => {

  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)
  const {setSmc} = useSmc()
  
  const removeSaleFromTheList = () => {
    const updatedSales = exhibitionSales.filter((item) => item.id !== sale.id);
    setExhibitionSales(updatedSales)
  }
  
  const topUpSmcWallet = (smcWallet) => {
    setSmc(smcWallet - price)
  }
  
  const comprar = () => {
    const actualSmcWaller = Number(localStorage.getItem('smc'))
    if(actualSmcWaller >= price){
      topUpSmcWallet(actualSmcWaller)
      removeSaleFromTheList()
      setSelectedSale(null)
      Swal.fire({
        icon: 'success',
        title: 'Compra Efetuada!',
        text: 'Sua compra foi realizada com sucesso.',
        confirmButtonText: 'OK'
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Saldo Insuficiente',
        text: 'Você não tem saldo suficiente para completar esta compra.',
        confirmButtonText: 'OK'
      });
    }
  }

  useEffect(() => {
    if(sale){
      setPrice(sale.smcs * quantity)
    } else if(!sale && price > 0){
      setPrice(0)
      setQuantity(1)
    }

  }, [sale])


  useEffect(() => {
    if( sale && quantity > 0 && quantity < 100) {
      setPrice(Number(sale.smcs) * Number(quantity))
    }
  }, [quantity])

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>COMPRAR</p>
      </div>
      <div className={styles.content}>
        <div className={styles.productName}>
          <p>{sale ? sale.product.name : ''}</p>
        </div>
        <div className={styles.quantity}>
          <p>QUANTIDADE:</p>
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
            disabled={sale ? false : true}
            maxLength={2}
            />
          </div>
        </div>
        <div className={styles.price}>
          <p>PREÇO:</p>
          <div>
            <p>{price} SMC</p>
          </div>
        </div>
        <button className={sale ? styles.buttonSelected : styles.button}
         onClick={() => {
          if(sale){
            comprar()
          }
        }}>
          <p>COMPRAR</p>
        </button>
      </div>
    </div>
  );
}

export default CompraCard;
