import { useContext } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { PesquisaContext } from "../../context/pesquisaContext"
import { SujestoesPesquisa } from "../sujestoesPesquisa/sujestoesPesquisa"
export const Header=()=>{
    const {coincidente, changeItem, mostrarSujestao, tirarSujestao} = useContext(PesquisaContext)
    document.onkeydown = tirarSujestao
    return(
        <>
        <header className="header">
        <Link className="logo" to="/">
            <h1>TECH<span>SHOP</span></h1>
        </Link>
        <div className="search" >
            <input type="text" placeholder="O que procura?" className="pesquisar-header" onChange={changeItem}/>
            <p>P</p>
        </div>
        <Link className="cart" to="carrinho">
            <p>C</p>
        </Link>
        </header>
        {mostrarSujestao && <SujestoesPesquisa/>}
        </>
    )
}