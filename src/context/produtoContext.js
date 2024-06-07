import { createContext, useState } from "react";
import { List } from "../components/produtosLista/list";
export const ProdutoContext = createContext()
export const ProdutoProvider = ({children})=>{
    const [objetoElemento, setObjetoElemento] = useState(null);

    const handleClick = (event) => {
      const novoObjetoElemento = {};
      const imgElement = event.currentTarget.querySelector('.img-card img');
      const info = event.currentTarget.querySelector(".info-card p").textContent
      const precoString = event.currentTarget.querySelector(".preco-card p label").textContent
      const preco = parseFloat(precoString)
      novoObjetoElemento['url'] = imgElement.getAttribute('src');
      novoObjetoElemento["info"] = info
      novoObjetoElemento["preco"] = preco
      const codeProduto = List.find((a)=>{
        return a.info === novoObjetoElemento.info
      })
      novoObjetoElemento["code"] = codeProduto.code
      //console.log(novoObjetoElemento);
      setObjetoElemento(novoObjetoElemento);
      
    };

    return <ProdutoContext.Provider value={{objetoElemento, handleClick}}>{children}</ProdutoContext.Provider>
}