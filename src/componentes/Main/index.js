
import MapaInterativo from '../Mapa';
import './Main.css';

const Main = ({ setTitulo, setDistribuidores }) => {
    return (
        <div className='main'>
            <div>
                <h1>Mundo</h1>
                <MapaInterativo setTitulo={setTitulo} setDistribuidores={setDistribuidores} />
            </div>
            <div>
                <h1>SustentaMundo</h1>
                <p>Descubra a agricultura sustentável pelo mundo. Conecte-se com regiões líderes, conheça agricultores comprometidos e apoie diretamente quem cultiva um futuro mais verde.</p>
                <p>Ao clicar em cada local, você encontrará histórias inspiradoras de sustentabilidade, produtos frescos, e oportunidades para apoiar diretamente aqueles que fazem a diferença. Junte-se a nós e faça parte desse movimento global!</p>
            </div>
        </div>
    );
}

export default Main