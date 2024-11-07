// TopDistribuidores/index.js
import React from 'react';
import Distribuidores from '../Distribuidores';
import './TopDistribuidores.css';

const TopDistribuidores = ({ distribuidores }) => {

  return (
    <div>
      <h1>Top Distribuidores</h1>
      <div className="top-distribuidores">
        {distribuidores.length > 0 ? ( 
          distribuidores.map((distribuidor, index) => (
            <div className="distribuidores-wrapper" key={index}>
              <Distribuidores nome={distribuidor.nome} estado={distribuidor.estado} />
            </div>
          ))
        ) : (
          <p>Nenhum distribuidor encontrado. Clique em uma região para mostrar os distribuidores</p>
        )}
      </div>
    </div>
  );
};

export default TopDistribuidores;

