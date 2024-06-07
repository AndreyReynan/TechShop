export const ProdutoCarrinho=({img, info, preco})=>{
    return(
        <>
        <div className="produto-carrinho">
            <div className="img-carrinho">
                <img src={img} alt=""/>
            </div>
            <div className="conteiner-infos">
                <div className="desc-carrinho">
                    <p>{info}</p>
                </div>
                <div className="preco-carrinho">
                    <p>R${preco}</p>
                </div>
                <div className="quantidade">
                    <div className="somar">+</div><p>1</p><div className="subtrair">-</div>
                </div>
                <div className="excluir">Excluir</div>
            </div>
        </div>
        </>
    )
}