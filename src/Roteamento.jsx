import { Routes, Route } from 'react-router'
import { Relatorio } from './relatorio'
import { Indice } from './indice'
import { VendaContainer } from './venda'
import { Grafico } from './grafico'
import { BoxHome } from './home'
import { Itens } from './itens'
import ProdutoAtualizar from './produto/ProdutoAtualizar'
import { ProdutosContainer } from './produtos'
import TimelineVendas from './TimelineVendas'
import ProdutoNovo from './produto/ProdutoNovo'
import Sandbox from './Sandbox'
import Pedido from './pedido/Pedido'

export default function Roteamento() {
  return (
    <Routes>
      <Route index element={<BoxHome />} />
      <Route path="produtos" element={<ProdutosContainer />} />
      <Route path="produto/:produtoId" element={<ProdutoAtualizar />} />
      <Route path="novo_produto" element={<ProdutoNovo />} />
      <Route path="venda/:_id" element={<VendaContainer />} />
      <Route path="indice" element={<Indice />} />
      <Route path="relatorio" element={<Relatorio />} />
      <Route path="grafico" element={<Grafico />} />
      <Route path="timeline_vendas" element={<TimelineVendas />} />
      <Route path="itens" element={<Itens />} />
      <Route path="pedido" element={<Pedido />} />
      <Route path="sandbox" element={<Sandbox />} />
    </Routes>
  )
}
