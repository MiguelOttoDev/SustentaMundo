import { useState } from 'react';
import styles from './filter-card.module.css';

const FilterCard = ({exhibitions, setExhibitions }) => {
  const [countryState, setCountryState] = useState(null)
  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)

  const filter = () => {
    let filteredArray = exhibitions

    if(city){
      filteredArray = filteredArray.filter((field) => 
        field.location.city.toUpperCase() === city
      )
    }

    if(country){
      filteredArray = filteredArray.filter((field) => 
        field.location.country.toUpperCase() === country
      )
    }

    if(countryState){
      filteredArray = filteredArray.filter((field) => 
        field.location.state.toUpperCase() === countryState
      )
    }

    setExhibitions(filteredArray)
  }


  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>BUSCAR</p>
      </div>
      <div className={styles.content}>
        <div className={styles.country}>
          <p>PAIS:</p>
          <div>
          <input 
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value.toUpperCase())}
            maxLength={2}
            />
          </div>
        </div>
        <div className={styles.state}>
          <p>ESTADO:</p>
          <div>
          <input 
            type="text"
            value={countryState}
            onChange={(e) => setCountryState(e.target.value.toUpperCase())}
            maxLength={2}
            />
          </div>
        </div>
        <div className={styles.city}>
          <p>CIDADE:</p>
          <div>
          <input 
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value.toUpperCase())}
            maxLength={20}
            />
          </div>
        </div>
        <button className={styles.button} onClick={() => filter()}>
          <p>FILTRAR</p>
        </button>
      </div>
    </div>
  );
}

export default FilterCard;
