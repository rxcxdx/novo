import { Link, Routes, Route } from 'react-router'
import Relatorio from './Relatorio'
import { Indice } from './indice'
import { VendaContainer } from './venda'
import Grafico from './Grafico'
import BoxHome from './BoxHome'
import Itens from './Itens'
import ProdutoAtualizarContainer from './produto/ProdutoAtualizarContainer'
import { ProdutosContainer } from './produtos'
import { TimelineContainer } from './timeline'
import ProdutoNovo from './produto/ProdutoNovo'
import Sandbox from './Sandbox'
import Pedido from './pedido/Pedido'

const rotas = [
  { path: '/', label: 'home' },
  { path: '/indice', label: 'indice' },
  { path: '/relatorio', label: 'relatorio' },
  { path: '/itens', label: 'itens' },
  { path: '/grafico', label: 'grafico' },
  { path: '/produtos', label: 'produtos' },
  { path: '/timeline', label: 'timeline' },
  { path: '/pedido', label: 'pedido' }
]

function Navbar() {
  return (
    <div className="border mb-3 bg-yellow-100">
      <div className="flex gap-x-3 gap-y-1 flex-wrap justify-center">
        {rotas.map((o, i) => (
          <Link key={i} to={o.path}>
            {o.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Roteador() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<BoxHome />} />
        <Route path="produtos" element={<ProdutosContainer />} />
        <Route
          path="produto/:produtoId"
          element={<ProdutoAtualizarContainer />}
        />
        <Route path="novo_produto" element={<ProdutoNovo />} />
        <Route path="venda/:_id" element={<VendaContainer />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio" element={<Relatorio />} />
        <Route path="grafico" element={<Grafico />} />
        <Route path="timeline" element={<TimelineContainer />} />
        <Route path="itens" element={<Itens />} />
        <Route path="pedido" element={<Pedido />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </div>
  )
}
