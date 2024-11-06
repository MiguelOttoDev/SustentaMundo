// Home/index.js
import React, { useState } from 'react';
import Main from '../../componentes/Main'; // Ajuste o caminho conforme necessário
import TopDistribuidores from '../../componentes/TopDistribuidores';


const Home = () => {
    const [titulo, setTitulo] = useState("Mundo");
    const [distribuidores, setDistribuidores] = useState([]);

    return (
        <div>
            <Main setTitulo={setTitulo} setDistribuidores={setDistribuidores} />
            <TopDistribuidores distribuidores={distribuidores} />
        </div>
    );
}




export default Home;
