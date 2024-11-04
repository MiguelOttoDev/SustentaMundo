import styles from './buy-smc-card.module.css';
import plusIcon from '../../../imgs/plus.png';
import { useSmc } from '../../../context/smcContext';
import { useNavigate } from 'react-router-dom';

const BuySmcCard = () => {
  const { smc, setSmc } = useSmc(); 

  const navigate = useNavigate(); 
  return (
    <div className={styles.content}>
      <p>{smc} SMC</p>
      <div className={styles.plus} onClick={() => navigate('/smc')}>
        <img src={plusIcon} alt="plus button" />
      </div>
    </div>
  );
};

export default BuySmcCard;
