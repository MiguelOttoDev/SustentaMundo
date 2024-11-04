// Home/index.js
import React, { useState } from 'react';
import Main from '../../componentes/Main'; // Ajuste o caminho conforme necessário
import TopDistribuidores from '../../componentes/TopDistribuidores';

const Home = () => {
  const [distribuidores, setDistribuidores] = useState([]); // Estado para gerenciar distribuidores

  return (
    <div>
      <Main setDistribuidores={setDistribuidores} /> {/* Passando a função para atualizar distribuidores */}
      <TopDistribuidores distribuidores={distribuidores} /> {/* Passando distribuidores para o TopDistribuidores */}
    </div>
  );
};

export default Home;
