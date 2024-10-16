import Distribuidores from '../Distribuidores';
import './TopDistribuidores.css'

const TopDistribuidores = () => {

    return(
        <div >
            <h1>Top Distribuidores</h1>
            <div className="top-distribuidores">

            <div className="distribuidores-wrapper">
            <Distribuidores />
        </div>
        <div className="distribuidores-wrapper">
            <Distribuidores />
        </div>
        <div className="distribuidores-wrapper">
            <Distribuidores />
        </div>


            </div>

        </div>
    )


}

export default TopDistribuidores;