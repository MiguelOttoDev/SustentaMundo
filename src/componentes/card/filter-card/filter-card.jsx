import styles from './filter-card.module.css';

const FilterCard = ({ country, state, city, callBack }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>BUSCAR</p>
      </div>
      <div className={styles.content}>
        <div className={styles.country}>
          <p>PAIS:</p>
          <div>
            <p>{country}</p>
          </div>
        </div>
        <div className={styles.state}>
          <p>ESTADO:</p>
          <div>
            <p>{state}</p>
          </div>
        </div>
        <div className={styles.city}>
          <p>CIDADE:</p>
          <div>
            <p>{city}</p>
          </div>
        </div>
        <button className={styles.button} onClick={callBack}>
          <p>FILTRAR</p>
        </button>
      </div>
    </div>
  );
}

export default FilterCard;
