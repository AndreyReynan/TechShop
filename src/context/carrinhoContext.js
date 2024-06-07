import { createContext, useContext, useState, useEffect } from "react";
import { ProdutoContext } from "./produtoContext";
export const CarrinhoContext = createContext()
export const CarrinhoProvider=({children})=>{
    const [carrinho, setCarrinho] = useState([])
    const {objetoElemento, handleClick} = useContext(ProdutoContext)
    const [mostrarNotificacao, setMostrarnotificacao] = useState(false)
    const notificar=()=>{
        setMostrarnotificacao(true)
    }
    useEffect(()=>{
        if(mostrarNotificacao){
            const timer = setTimeout(() => {
                setMostrarnotificacao(false)
            }, 1400);
            return ()=> clearTimeout(timer)
        }
    }, [mostrarNotificacao])
    const addCarrinho=()=>{
        carrinho.push(objetoElemento)
        //console.log(carrinho)
        notificar()
    }



    return <CarrinhoContext.Provider value={{carrinho, addCarrinho, mostrarNotificacao}}>{children}</CarrinhoContext.Provider>
}