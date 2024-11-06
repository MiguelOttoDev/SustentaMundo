import Compromisso from '../../componentes/Sobre/Compromisso'
import JunteSeNos from '../../componentes/Sobre/JunteSeNos'
import Missao from '../../componentes/Sobre/Missao'
import OQueFazemos from '../../componentes/Sobre/OQueFazemos'
import Somos from '../../componentes/Sobre/Somos'
import Sustentabilidade from '../../componentes/Sobre/Sustentabilidade'
import style from './Sobre.module.css'
export default function Sobre(){
    return(
        <div className={style.text}>
        <h1>Sobre</h1>
            <Missao/>
            <Somos/>
            <OQueFazemos/>
            <Sustentabilidade/>
            <Compromisso/>
            <JunteSeNos/>
        </div>
    )

}