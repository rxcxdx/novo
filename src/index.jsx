import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import {
  fetcherTimelineItens,
  fetcherProdutos,
  fetcherTimelineVendas,
  fetcherProduto,
  fetcherVenda
} from './api'
import Root from './Root'
import { ErrorBoundary } from './fallbacks'
import { BoxHome } from './home'
import { Itens } from './itens'
import Venda from './Venda'
import TimelineVendas from './TimelineVendas'
import TimelineItens from './TimelineItens'
import ProdutoAtualizar from './produto/ProdutoAtualizar'
import ProdutoFormulario from './produto/ProdutoFormulario'
import Produtos from './Produtos'
import Pedido from './pedido/Pedido'
import { Grafico } from './grafico'
import { Indice } from './indice'
import { Relatorio } from './relatorio'
import Sandbox from './Sandbox'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true, Component: BoxHome },
      { path: '/itens', Component: Itens },
      { path: '/grafico', Component: Grafico },
      { path: '/pedido', Component: Pedido },
      { path: '/relatorio', Component: Relatorio },
      { path: '/indice', Component: Indice },
      { path: '/produtos', Component: Produtos, loader: fetcherProdutos },
      {
        path: '/novo_produto',
        element: <ProdutoFormulario defaultValues={{ descricao: '', valor: null }} />
      },
      {
        path: '/produto/:id',
        Component: ProdutoAtualizar,
        loader: fetcherProduto
      },
      { path: '/venda/:_id', Component: Venda, loader: fetcherVenda },
      {
        path: '/timeline_vendas',
        Component: TimelineVendas,
        loader: fetcherTimelineVendas
      },
      {
        path: '/timeline_itens',
        Component: TimelineItens,
        loader: fetcherTimelineItens
      },
      { path: '/sandbox', Component: Sandbox }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
