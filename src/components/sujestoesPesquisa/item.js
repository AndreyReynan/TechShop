export const ItemPesquisa=({img, desc, preco})=>{
    return(
        <div className="item-pesquisa">
            <div className="img-item-pesquisar">
                <img src={img} />
            </div>
            <div className="conteiner-desc-pesquisar">
                <div className="desc-item-pesquisar">
                    <p>{desc}</p>
                </div>
                <div className="preco-item-pesquisar">
                    <p>R${preco}</p>
                </div>
            </div>
        </div>
    )
}