// Home/index.js
import React, { useState } from 'react';
import Main from '../../componentes/Main';
import TopDistribuidores from '../../componentes/TopDistribuidores';
import VideoPlayer from '../../componentes/Video';


const Home = () => {
    const [titulo, setTitulo] = useState("Mundo");
    const [distribuidores, setDistribuidores] = useState([]);

    return (
        <div>
            <Main setTitulo={setTitulo} setDistribuidores={setDistribuidores} />
            <TopDistribuidores distribuidores={distribuidores} />
            <VideoPlayer/>
        </div>
    );
}




export default Home;
