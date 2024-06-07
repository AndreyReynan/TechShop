import "./carrinho.css"
import { Header } from "../components/header/header"
import { useContext, useState } from "react"
import { ProdutoCarrinho } from "../components/produtoCarrinho/produtoCarrinho"
import { CarrinhoContext } from "../context/carrinhoContext"
import { CuponsSList } from "../components/cupons/list"
export const Carrinho=()=>{
    const {carrinho, addCarrinho} = useContext(CarrinhoContext)
    const frete = 150
    const somar = []
    carrinho.map((item)=>{
        somar.push(item.preco)
    })
    const subtotal = somar.reduce((acumulador, item)=>{
        return acumulador + item
    })
    const totalInicial = subtotal + frete
    const [total, setTotal] = useState(totalInicial)
    const descontar=()=>{
        const cupomElement = document.querySelector(".cupons input")
        const cupom = cupomElement.value
        if(CuponsSList.includes(cupom)){
            setTotal(totalInicial)
            if(cupom === CuponsSList.find(item => item === "CPN10")) setTotal(parseFloat(totalInicial - (totalInicial*0.10)).toFixed(2))
            if(cupom === CuponsSList.find(item => item === "CPN30")) setTotal(parseFloat(totalInicial - (totalInicial*0.30)).toFixed(2))
            if(cupom === CuponsSList.find(item => item === "CPN50")) setTotal(parseFloat(totalInicial - (totalInicial*0.50)).toFixed(2))
            if(cupom === CuponsSList.find(item => item === "CPN90")) setTotal(parseFloat(totalInicial - (totalInicial*0.90)).toFixed(2))
        }
    }
    return(
        <>
        <Header/>
        <section className="conteiner">
        <div className="produtos-carrinho">
            <h1>Carrinho de compras ({carrinho.length})</h1>
            <div className="conteiner-produtos">
                {carrinho.map((a)=>(
                    <ProdutoCarrinho key={a.code} img={a.url} info={a.info} preco={a.preco}/>
                ))}
            </div>
        </div>
        <div className="somar-produtos">
            <div className="total-titulo">
                <h1>Total</h1>
            </div>
            <div className="subtotal">
                <h2>Subtotal R${subtotal}</h2>
            </div>
            <div className="frete">
                <h2>Frete: R${frete}</h2>
            </div>
            <div className="total">
                <h2>Total: R${total}</h2>
            </div>
            <div className="cupons">
                <h2>Desconto</h2>
                <input type="text" placeholder="Insira um cupon"/>
                <button onClick={descontar}>Aplicar</button>
            </div>
            <div className="forma-pagamento">
                <h2>Formas de pagamentos</h2>
            </div>
            <div className="selecionar-pagamento">
                <select>
                    <option>Selecione a forma de pagamento</option>
                    <option>Pix</option>
                    <option>Cartão de crédito</option>
                    <option>Boleto</option>
                </select>
            </div>
            <div className="conteiner-button">
                <button>Comprar</button>
            </div>
        </div>
    </section>
        </>
    )
}