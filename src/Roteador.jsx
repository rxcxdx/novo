import { Link, BrowserRouter, Routes, Route } from 'react-router'
import Sandbox from './Sandbox'
import Produtos from './Produtos'
import Relatorio from './Relatorio'
import Indice from './Indice'
import Venda from './Venda'
import BoxGraficoBarra from './BoxGraficoBarra'
import Timeline from './Timeline'
import BoxHome from './BoxHome'
import { AtualizarProduto, Produto } from './produto'
import Itens from './Itens'
import Userclients from './Userclients'
import BoxGraficoRosca from './BoxGraficoRosca'

function Navbar() {
  return (
    <div style={{ marginBottom: '1rem', textAlign: 'center'}}>
      <Link to="/">home</Link>&nbsp;
      <Link to="/indice">indice</Link>&nbsp;
      <Link to="/relatorio">relatorio</Link>&nbsp;
      <Link to="/produtos">produtos</Link>&nbsp;
      <Link to="/itens">itens</Link>&nbsp;
      <Link to="/grafico1">grafico1</Link>&nbsp;
      <Link to="/grafico2">grafico2</Link>&nbsp;
      <Link to="/timeline">timeline</Link>&nbsp;
      <Link to="/userclients">userclients</Link>&nbsp;
      <Link to="/sandbox">sandbox</Link>
    </div>
  )
}

export default function Roteador() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<BoxHome />} />
        <Route path="produtos" element={<Produtos />} />
        <Route
          path="novo_produto"
          element={<Produto estadoInicial={{ valor: '', descricao: '' }} />}
        />
        <Route path="produto/:produtoId" element={<AtualizarProduto />} />
        <Route path="venda/:vendaId" element={<Venda />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio" element={<Relatorio />} />
        <Route path="grafico1" element={<BoxGraficoBarra />} />
        <Route path="grafico2" element={<BoxGraficoRosca />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="itens" element={<Itens />} />
        <Route path="userclients" element={<Userclients />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  )
}
