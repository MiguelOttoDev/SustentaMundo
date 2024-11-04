// Main/index.js
import React, { useState } from 'react';
import './Main.css';
import MapaInterativo from '../Mapa'; // Ajuste o caminho conforme necessário

const Main = ({ setDistribuidores }) => { // Certifique-se de que a prop está sendo recebida corretamente
  const [titulo, setTitulo] = useState("Mundo");

  const distribuidoresPorEstado = {
    "Acre": [{ nome: "Distribuidor A", estado: "Acre" }],
    "Alagoas": [{ nome: "Distribuidor B", estado: "Alagoas" }],
    // Adicione outros estados conforme necessário...
  };

  const handleRegionClick = (estado) => {
    setDistribuidores(distribuidoresPorEstado[estado] || []); // Certifique-se de que a função é chamada corretamente
  };

  return (
    <div className='main'>
      <div style={{ textAlign: 'center' }}>
        <h1>{titulo}</h1>
        <MapaInterativo setTitulo={setTitulo} onRegionClick={handleRegionClick} setDistribuidores={setDistribuidores} /> {/* Passando a função corretamente */}
      </div>
      <div>
        <h1>SustentaMundo</h1>
        <p>Descubra a agricultura sustentável pelo mundo. Conecte-se com regiões líderes, conheça agricultores comprometidos e apoie diretamente quem cultiva um futuro mais verde.</p>
        <p>Ao clicar em cada local, você encontrará histórias inspiradoras de sustentabilidade, produtos frescos, e oportunidades para apoiar diretamente aqueles que fazem a diferença. Junte-se a nós e faça parte desse movimento global!</p>
      </div>
    </div>
  );
};

export default Main;
