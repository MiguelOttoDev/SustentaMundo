import style from './OQueFazemos.module.css'
export default function OQueFazemos(){
    return(
        <>
        <h2 className={style.titulo}>O Que Fazemos</h2>
         <div className={style.container}>
            
            <div >
                <img src="/img/img-OQueFazemos.png" className={style.img} alt="Imagem" />
            </div>
            <div className={style.desc}>
                <p>
                No SustentaMundo, oferecemos uma maneira simples e segura de comprar alimentos sustentáveis e fazer doações diretamente para comunidades em necessidade. Os agricultores cadastrados em nossa plataforma passam por uma rigorosa verificação para garantir que suas práticas sejam sustentáveis e éticas. As doações, realizadas em SMC, permitem que comunidades vulneráveis adquiram os alimentos de que precisam, com total transparência e autonomia.
                </p>
            </div>
        </div>
        </>
       
    )
}