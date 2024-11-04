// Distribuidores.js
import './Distribuidores.css';

const Distribuidores = ({ nome, estado }) => { // Aceitando nome e estado como props
    return (
        <div className='distribuidor'>
            <div className='cabecalho'> 
                <img src="/img/pessoa.png" alt="Distribuidor" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4> {/* Usando a prop nome */}
                <h5>{estado}</h5> {/* Usando a prop estado */}
            </div>
        </div>
    );
}

export default Distribuidores;
