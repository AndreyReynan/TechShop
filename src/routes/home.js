import "../app.css"
import promoImg from "../imgs/rtx 4090.png"
import { Header } from "../components/header/header";
import { Produto } from "../components/produto/produto";
import { List } from "../components/produtosLista/list";
import { SujestoesPesquisa } from "../components/sujestoesPesquisa/sujestoesPesquisa";
function Home() {
  return (
    <div className="Home">
      <Header/>
      <section className="promos">
        <h3>GEFORCE RTX 4090</h3>
        <h5>40% DE DESCONTO COM O CUPOM</h5>
        <h4>GARANTA JÁ A SUA!!!!! </h4>
        <img src={promoImg} alt=""/>
        <p className="esquerda">E</p>
        <p className="direita">D</p>
    </section>
    <section className="produtos">
      {List.map((pro)=>(
        <Produto key={pro.code} img={pro.img} info={pro.info} preco={pro.preco}/>
      ))}
    </section>
    <SujestoesPesquisa/>
    </div>
  );
}

export default Home;
