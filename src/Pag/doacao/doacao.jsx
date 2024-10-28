import { useEffect, useState } from "react";
import FilterCard from "../../componentes/card/filter-card/filter-card.jsx";
import styles from './doacao.module.css';
import mockCommunities from "../../mocks/community/mock-community.js";
import CommunityCard from "../../componentes/card/community-card/community-card.jsx";

const Doacao = () => {
  const [exhibitionCommunities, setExhibitionCommunities] = useState(mockCommunities)

  const [selectedCommunity, setSelectedCommunity] = useState(null)

  const selectCommunity = (community) => {
    if(community !== selectedCommunity){
       setSelectedCommunity(community)
    }else {
      setSelectedCommunity(null)
    }
  }
 
  return (
    <div className={styles.global}>
      <div className={styles.productsTitle}>
        <h1>Doação</h1>
      </div>

      <div className={styles.productsMain}>
        <div className={styles.cardsArea}>
          {
            exhibitionCommunities.map((community) => (
              <CommunityCard 
                community={community}
              />
          ))}
        </div>
        
        <div className={styles.interactionCardsArea}>
          
          <FilterCard
           exhibitions={exhibitionCommunities}
           setExhibitions={setExhibitionCommunities}
           />
        </div>
      </div>
    </div>
  );
}

export default Doacao;
