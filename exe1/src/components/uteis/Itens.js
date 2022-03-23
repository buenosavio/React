const Itens = ({texto, img, detalhe}) => {
    return(
        <>
        <ul>
            <li>
                <p>{texto}</p>
                <img src={img} alt="imagem do item" />
                <p>{detalhe}</p>
            </li>
        </ul>
        </>
    )
}

export default Itens