import ProductCard from "../../componentes/card/product-card/product-card.jsx";
import mockSales from "../../mocks/product/mock-products.js";
import styles from './produtos.module.css';

const Produtos = () => {
  return (
    <div className={styles.global}>
      <div className={styles.productsTitle}>
        <h1>Produtos</h1>
      </div>
      <div className={styles.productsMain}>
        <div className={styles.cardsArea}>
          {
            mockSales.map((sale) => (
              <ProductCard key={sale.id} sale={sale} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produtos;
