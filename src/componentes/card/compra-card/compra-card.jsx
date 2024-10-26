import styles from './compra-card.module.css';

const CompraCard = ({ quantity, price, productName, callBack }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>COMPRAR</p>
      </div>
      <div className={styles.content}>
        <div className={styles.productName}>
          <p>{productName}</p>
        </div>
        <div className={styles.quantity}>
          <p>QUANTIDADE:</p>
          <div>
            <p>{quantity}</p>
          </div>
        </div>
        <div className={styles.price}>
          <p>PREÇO:</p>
          <div>
            <p>{price}</p>
          </div>
        </div>
        <button className={styles.button} onClick={callBack}>
          <p>COMPRAR</p>
        </button>
      </div>
    </div>
  );
}

export default CompraCard;
