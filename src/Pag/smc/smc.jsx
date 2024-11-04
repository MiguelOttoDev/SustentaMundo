import { useEffect, useState } from "react";
import CompraCard from "../../componentes/card/compra-card/compra-card.jsx";
import FilterCard from "../../componentes/card/filter-card/filter-card.jsx";
import ProductCard from "../../componentes/card/product-card/product-card.jsx";
import styles from './produtos.module.css';
import mockSmcPack from "../../mocks/smc/mock-smc-pack.js";
import SmcPackCard from "../../componentes/card/smc-pack-card/smc-pack-card.jsx";
import PaySmcCard from "../../componentes/card/pay-smc-card/pay-smc-card.jsx";


const SmcScreen = () => {
  const [exhibitionSmcPack, setExhibitionSmcPack] = useState(mockSmcPack)


  
  return (
    <div className={styles.global}>
      <div className={styles.smcTitle}>
        <h1>Sustenta Mundo Coins - SMC</h1>
      </div>

      <div className={styles.smcMain}>
        <div className={styles.cardsArea}>
          {
            exhibitionSmcPack.map((smc) => (
              <SmcPackCard
               key={smc.id} 
               smcPack={smc}
              />
          ))}
        </div>
        
        <div className={styles.interactionCardsArea}>
           <PaySmcCard/>
        </div>
      </div>
    </div>
  );
}

export default SmcScreen;
