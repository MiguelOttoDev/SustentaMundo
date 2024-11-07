// Distribuidores.js
import './Distribuidores.css';

const Distribuidores = ({ nome, estado }) => { // Aceitando nome e estado como props
    return (
        <div className='distribuidor'>
            <div className='cabecalho'> 
                <img src="/img/pessoa.png" alt="Distribuidor" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4> 
                <h5>{estado}</h5> 
            </div>
        </div>
    );
}

export default Distribuidores;
