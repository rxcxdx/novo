import { Link, BrowserRouter, Routes, Route, useParams } from 'react-router'
import Sandbox from './Sandbox'
import TabelaProdutos from './TabelaProdutos'
import Relatorio from './Relatorio'
import Indice from './Indice'
import Venda from './Venda'
import Pedido from './Pedido'
import CriarDespesa from './CriarDespesa'
import BoxGrafico from './BoxGrafico'
import Timeline from './Timeline'
import {ProdutoUpsert} from './produto3'
import Home from './Home'

function DesvioVenda() {
  const { vendaId } = useParams()
  return <Venda vendaId={vendaId} />
}

const MATRIX = [
  { pathname: '/', label: 'home' },
  { pathname: '/pedido', label: 'pedido' },
  { pathname: '/indice', label: 'indice' },
  { pathname: '/relatorio', label: 'relatorio' },
  { pathname: '/tabela_produtos', label: 'tabela_produtos' },
  { pathname: '/grafico', label: 'grafico' },
  { pathname: '/criar_despesa', label: 'criar_despesa' },
  { pathname: '/timeline', label: 'timeline' },
  { pathname: '/sandbox', label: 'sandbox' }
]

function Navbar() {
  return (
    <div style={{ border: '1px solid black', padding: '5px'}}>
      <div className="row g-1 justify-content-center">
        {MATRIX.map((o, i) => (
          <div key={i} className="col-auto">
            <Link to={o.pathname}>
              <small>{o.label}</small>
            </Link>
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
      <br />
      <Routes>
        <Route index element={<Home />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="tabela_produtos" element={<TabelaProdutos />} />
        <Route path="venda/:vendaId" element={<DesvioVenda />} />
        <Route path="produto/:produtoId" element={<ProdutoUpsert />} />        
        <Route path="criar_produto" element={<ProdutoUpsert />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio" element={<Relatorio />} />
        <Route path="pedido" element={<Pedido />} />
        <Route path="grafico" element={<BoxGrafico />} />
        <Route path="criar_despesa" element={<CriarDespesa />} />
        <Route path="timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  )
}