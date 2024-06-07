import "./sujestoesPesquisa.css"
import { ItemPesquisa } from "./item"
import { PesquisaContext } from "../../context/pesquisaContext"
import { useContext } from "react"
export const SujestoesPesquisa=()=>{
    const {coincidente, changeItem, mostrarSujestao, tirarSujestao} = useContext(PesquisaContext)
    return(
        <div className="conteiner-sujestao">
            {
                mostrarSujestao &&
                coincidente.map((item)=>(
                    <ItemPesquisa key={item.info} img={item.img} desc={item.info} preco={item.preco}/>
                ))}
        </div>
    )
}