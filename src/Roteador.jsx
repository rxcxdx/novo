import { Link, BrowserRouter, Routes, Route } from 'react-router'
import Relatorio from './Relatorio'
import Indice from './Indice'
import { VendaContainer } from './venda'
import { BoxGrafico } from './grafico'
import { BoxHome } from './home'
import Itens from './Itens'
import ProdutoAtualizar from './ProdutoAtualizar'
import { ProdutosContainer } from './produtos'
import { Timeline } from './timeline'
import ProdutoNovo from './ProdutoNovo'
import Sandbox from './Sandbox'

const matrix = [
  { path: '/', label: 'home' },
  { path: '/indice', label: 'indice' },
  { path: '/relatorio', label: 'relatorio' },
  { path: '/itens', label: 'itens' },
  { path: '/grafico', label: 'grafico' },
  { path: '/produtos', label: 'produtos' },
  { path: '/timeline', label: 'timeline' },
  { path: '/sandbox', label: 'sandbox' }
]

function Navbar() {
  return (
    <div className="font-monospace my-1 border border-secondary">
      <div className="row gx-3 gy-1 justify-content-center">
        {matrix.map((o, i) => (
          <div key={i} className="col-auto">
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
        <Route path="timeline" element={<Timeline />} />
        <Route path="itens" element={<Itens />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  )
}
