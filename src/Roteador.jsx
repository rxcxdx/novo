import { Link, BrowserRouter, Routes, Route, useParams } from 'react-router'
import Sandbox from './Sandbox'
import TabelaProdutos from './TabelaProdutos'
import Relatorio from './Relatorio'
import Indice from './Indice'
import Venda from './Venda'
import Pedido from './Pedido'
import Produto from './Produto'
import CriarDespesa from './CriarDespesa'
import Userclient from './Userclient'
import BoxGrafico from './BoxGrafico'
import Timeline from './Timeline'

const elementoHome = <h1>Home</h1>

function DesvioVenda() {
  const { vendaId } = useParams()
  return <Venda vendaId={vendaId} />
}

function DesvioUserclient() {
  const { userclientId } = useParams()
  return <Userclient userclientId={userclientId} />
}

function DesvioProduto() {
  const { produtoId } = useParams()
  return <Produto produtoId={produtoId} />
}

const MATRIX = [
  { pathname: '/', label: 'home' },
  { pathname: '/pedido', label: 'pedido' },
  { pathname: '/indice', label: 'indice' },
  { pathname: '/relatorio', label: 'relatorio' },
  { pathname: '/tabela_produtos', label: 'tabela_produtos' },
  { pathname: '/grafico', label: 'grafico' },
  { pathname: '/criar_despesa', label: 'criar_despesa' },
  { pathname: '/produto/', label: 'criar_produto' },
  { pathname: '/timeline', label: 'timeline' },
  { pathname: '/sandbox', label: 'sandbox' }
]

function Navbar() {
  return (
    <div className="border border-dark p-1">
      <div className="row g-3 justify-content-center">
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
        <Route index element={elementoHome} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="tabela_produtos" element={<TabelaProdutos />} />
        <Route path="venda/:vendaId" element={<DesvioVenda />} />
        <Route path="userclient/:userclientId" element={<DesvioUserclient />} />

        <Route
          path="produto/"
          element={<Produto produtoId={undefined} />}
        />



        <Route path="produto/:produtoId" element={<DesvioProduto />} />

        
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
