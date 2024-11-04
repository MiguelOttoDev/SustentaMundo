import styles from './buy-smc-card.module.css';
import plusIcon from '../../../imgs/plus.png';
import { useSmc } from '../../../context/smcContext';

const BuySmcCard = () => {
  const { smc, setSmc } = useSmc(); 

  const atributeValueOnSmc = (value) => {
    setSmc((prevSmc) => prevSmc + value); 
  };

  return (
    <div className={styles.content}>
      <p>{smc} SMC</p>
      <div className={styles.plus} onClick={() => atributeValueOnSmc(500)}>
        <img src={plusIcon} alt="plus button" />
      </div>
    </div>
  );
};

export default BuySmcCard;
