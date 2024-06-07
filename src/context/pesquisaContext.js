import { createContext, useState, useContext } from "react";
import { ProdutoContext } from "./produtoContext";
import { List } from "../components/produtosLista/list";
export const PesquisaContext = createContext()
export const PesquisaProvider=({children})=>{
    const {objetoElemento, handleClick} = useContext(ProdutoContext)
    const [coincidente, setConincidente] = useState()
    const [mostrarSujestao, setMostrarSujestao] = useState(false)
    const listLimpa = List.map(item=>{
        item.info.toLocaleLowerCase()
        item.img = item.img
        item.preco = item.preco
    })
    const changeItem=(event)=>{
        let input = event.currentTarget.value
        setConincidente(List.filter(item=> item.info.includes(input)))
        //setConincidente(listLimpa.filter(item=> item.info.includes(input)))
        setMostrarSujestao(true)
        console.log(coincidente)
    }
    const tirarSujestao=()=>{
        setMostrarSujestao(false)
    }

    return <PesquisaContext.Provider value={{coincidente, changeItem, mostrarSujestao, tirarSujestao}}>{children}</PesquisaContext.Provider>
}