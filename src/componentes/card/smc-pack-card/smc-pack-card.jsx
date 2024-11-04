import styles from './smc-pack-card.module.css';
import plusIcon from '../../../imgs/plus.png';
const SmcPackCard = ({smcPack}) => {
  const convertedValue = (smcPack.price / 100).toFixed(2)
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.description}>
          <p className={styles.title}>Pacote</p>
          <p>{smcPack.quantity} Sustenta Mundo Coins</p>
        </div>
        <div className={styles.price}>
          <p className={styles.title}>Preço</p>
          <p>R${convertedValue}</p>
        </div>

      </div>
      <img src={plusIcon} alt="add icon"/>
    </div>
  );
}

export default SmcPackCard;
