import "./produto.css"
import { useContext } from "react"
import { ProdutoContext } from "../../context/produtoContext"
import { Link } from "react-router-dom"
export const Produto=({img, info, preco})=>{
    const {objetoElemento, handleClick} = useContext(ProdutoContext)
    return(
        <>
        <Link className="produto-card" onClick={handleClick} to="produto">
            <div className="img-card">
                <img src={img} alt=""/>
            </div>
            <div className="info-card">
                <p>{info}</p> 
            </div>
            <div className="preco-card">
                <p>R$<label>{preco}</label></p>
            </div>
        </Link>
        </>
    )
}