import { Link, BrowserRouter, Routes, Route } from 'react-router'
import Relatorio from './Relatorio'
import Indice from './Indice'
import { VendaContainer } from './venda'
import { BoxGrafico } from './grafico'
import BoxHome from './BoxHome'
import Itens from './Itens'
import ProdutoAtualizar from './ProdutoAtualizar'
import { ProdutosContainer } from './produtos'
import { TimelineContainer } from './timeline'
import ProdutoNovo from './ProdutoNovo'
import Sandbox from './Sandbox'

const matrix = [
  { path: '/', label: 'home' },
  { path: '/indice', label: 'indice' },
  { path: '/relatorio', label: 'relatorio' },
  { path: '/itens', label: 'itens' },
  { path: '/grafico', label: 'grafico' },
  { path: '/produtos', label: 'produtos' },
  { path: '/timeline', label: 'timeline' }
]

function Navbar() {
  return (
    <div className="border mb-3 mt-1">
      <div className="flex gap-x-5 gap-y-1 flex-wrap justify-center">
        {matrix.map((o, i) => (
          <div key={i}>
            <Link to={o.path}>{o.label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Roteador() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<BoxHome />} />
        <Route path="produtos" element={<ProdutosContainer />} />
        <Route path="produto/:produtoId" element={<ProdutoAtualizar />} />
        <Route path="novo_produto" element={<ProdutoNovo />} />
        <Route path="venda/:vendaId" element={<VendaContainer />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio" element={<Relatorio />} />
        <Route path="grafico" element={<BoxGrafico />} />
        <Route path="timeline" element={<TimelineContainer />} />
        <Route path="itens" element={<Itens />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  )
}
