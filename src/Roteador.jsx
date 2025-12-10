import { Link, BrowserRouter, Routes, Route } from 'react-router'
import Relatorio from './Relatorio'
import Indice from './Indice'
import { VendaContainer } from './venda'
import { BoxGraficoBarra, BoxGraficoRosca } from './graficos'
import { BoxHome } from './home'
import Itens from './Itens'
import Sandbox from './Sandbox'
import { ProdutoNovoContainer, ProdutoAtualizarContainer } from './produto'
import { ProdutosContainer } from './produtos'
import { TimelineContainer } from './timeline'

function Navbar() {
  return (
    <div className="mb-2 text-orange-800">
      <div className="flex gap-x-3 flex-wrap">
        <Link to="/">home</Link>
        <Link to="/indice">indice</Link>
        <Link to="/relatorio">relatorio</Link>
        <Link to="/produtos">produtos</Link>
        <Link to="/itens">itens</Link>
        <Link to="/grafico1">grafico1</Link>
        <Link to="/grafico2">grafico2</Link>
        <Link to="/timeline">timeline</Link>
        <Link to="/sandbox">sandbox</Link>
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
        <Route
          path="produto/:produtoId"
          element={<ProdutoAtualizarContainer />}
        />
        <Route path="novo_produto" element={<ProdutoNovoContainer />} />
        <Route path="venda/:vendaId" element={<VendaContainer />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio" element={<Relatorio />} />
        <Route path="grafico1" element={<BoxGraficoBarra />} />
        <Route path="grafico2" element={<BoxGraficoRosca />} />
        <Route path="timeline" element={<TimelineContainer />} />
        <Route path="itens" element={<Itens />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  )
}
