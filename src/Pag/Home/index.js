import Main from '../../componentes/Main';
import TopDistribuidores from '../../componentes/TopDistribuidores';
import { useState } from 'react';

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
