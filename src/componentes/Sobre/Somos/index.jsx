import style from './Somos.module.css'

export default function Somos(){
    return(
        <>
        <h2 className={style.titulo}>Quem Somos</h2>
         <div className={style.container}>
            <div className={style.desc}>
                <p>
                Somos uma plataforma dedicada a conectar agricultores sustentáveis com consumidores conscientes, além de facilitar doações para comunidades e aldeias que precisam de alimentos e recursos. Através de nossa criptomoeda exclusiva, Sustenta Mundo Coin (SMC), criamos uma economia circular que promove o desenvolvimento sustentável e o combate à fome.
                </p>
            </div>
            <div >
                <img src="/img/img-somos.png" className={style.img} alt="Imagem" />
            </div>
        </div>
        </>
       
    )
}