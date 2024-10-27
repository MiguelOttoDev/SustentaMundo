import { useEffect, useState } from "react";
import CompraCard from "../../componentes/card/compra-card/compra-card.jsx";
import FilterCard from "../../componentes/card/filter-card/filter-card.jsx";
import ProductCard from "../../componentes/card/product-card/product-card.jsx";
import mockSales from "../../mocks/product/mock-products.js";
import styles from './produtos.module.css';

const Produtos = () => {
  const [exhibitionSales, setExhibitionSales] = useState(mockSales)

  const [selectedSale, setSelectedSale] = useState(null)

  const selectSale = (sale) => {
    if(sale !== selectedSale){
       setSelectedSale(sale)
    }else {
      setSelectedSale(null)
    }
  }
 
  return (
    <div className={styles.global}>
      <div className={styles.productsTitle}>
        <h1>Produtos</h1>
      </div>

      <div className={styles.productsMain}>
        <div className={styles.cardsArea}>
          {
            exhibitionSales.map((sale) => (
              <ProductCard key={sale.id} 
              sale={sale}
              callBack={() => selectSale(sale)}
              isSelected={sale === selectedSale}
              />
          ))}
        </div>
        
        <div className={styles.interactionCardsArea}>
          <CompraCard
           sale={selectedSale}
           exhibitionSales={mockSales}
           setExhibitionSales={setExhibitionSales}
           setSelectedSale={setSelectedSale}
          />

          <FilterCard
           exhibitions={mockSales}
           setExhibitions={setExhibitionSales}
           />
        </div>
      </div>
    </div>
  );
}

export default Produtos;
