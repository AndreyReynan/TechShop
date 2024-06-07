import "../app.css"
import { Header } from "../components/header/header";
import { useContext } from "react";
import { ProdutoContext } from "../context/produtoContext";
import { CarrinhoContext } from "../context/carrinhoContext";
import { Notificacao } from "../components/notificacao/notificacao";
export const Produto=()=>{
    const {objetoElemento, handleClick} = useContext(ProdutoContext)
    const {carrinho, addCarrinho, mostrarNotificacao} = useContext(CarrinhoContext)
    return(
        <>
        <Header/>
        <section className="conteiner">
        <div className="img">
            <img src={objetoElemento.url} alt=""/>
        </div>
        <div className="infos">
            <div className="info">
                <p>{objetoElemento.info}</p>
            </div>
            <div className="preco">
                <p>R${objetoElemento.preco}</p>
            </div>
            <div className="botoes">
                <button className="comprar">Comprar</button>
                <button className="add" onClick={addCarrinho}>Adionar ao carrinho</button>
            </div>
        </div>
        </section>
        {mostrarNotificacao && <Notificacao/>}
        </>
    )
}