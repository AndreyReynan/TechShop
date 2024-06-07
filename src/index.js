import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProdutoProvider } from './context/produtoContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import { Produto } from './routes/produto';
import { Carrinho } from './routes/carrinho';
import { CarrinhoProvider } from './context/carrinhoContext';
import { PesquisaProvider } from './context/pesquisaContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "produto",
    element: <Produto/>
  },
  {
    path: "carrinho",
    element: <Carrinho/>
  }
])
root.render(
  <React.StrictMode>
    <ProdutoProvider>
      <CarrinhoProvider>
        <PesquisaProvider>
        <RouterProvider router={router}/>
        </PesquisaProvider>
      </CarrinhoProvider>
    </ProdutoProvider>
  </React.StrictMode>
);
