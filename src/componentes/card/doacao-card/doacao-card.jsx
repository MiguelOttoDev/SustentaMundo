import { useEffect, useState } from 'react';
import styles from './doacao-card.module.css';
import { useSmc } from '../../../context/smcContext';
import Swal from 'sweetalert2';

const DoacaoCard = ({community, setSelectedCommunity}) => {
  const [value, setValue] = useState(0)
  const {setSmc} = useSmc()
  
  
  const topUpSmcWallet = (smcWallet) => {
    setSmc(smcWallet - value)
  }
  
  const doar = () => {
    const actualSmcWaller = Number(localStorage.getItem('smc'))
    if(value === 0 || !value){
      Swal.fire({
        icon: 'error',
        title: 'Valor inválido',
        text: 'O valor inserido é invalido para doação!',
        confirmButtonText: 'OK'
      });
    }else{
      if(actualSmcWaller >= value){
        topUpSmcWallet(actualSmcWaller)
        setSelectedCommunity(null)
        Swal.fire({
          icon: 'success',
          title: 'Doação efetuada com sucesso!',
          text: 'A sua doação foi enviada com sucesso, o movimento agradece!',
          confirmButtonText: 'OK'
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Saldo Insuficiente',
          text: 'Infelizmente você não possui saldo para doar esta quantia!',
          confirmButtonText: 'OK'
        });
      }
    }
  }

  useEffect(() => {
    if(!community && value > 0){
      setValue(0)
    }

  }, [community])


  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>DOAR</p>
      </div>
      <div className={styles.content}>
        <div className={styles.communityName}>
          <p>{community ? community.name : ''}</p>
        </div>
        <div className={styles.value}>
          <p>VALOR:</p>
          <div>
            <input 
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value === "" ? "" : Number(e.target.value))}
            disabled={community ? false : true}
            maxLength={10}
            />
          </div>
        </div>
        <button className={community ? styles.buttonSelected : styles.button}
         onClick={() => {
          if(community){
            doar()
          }
        }}>
          <p>DOAR</p>
        </button>
      </div>
    </div>
  );
}

export default DoacaoCard;
