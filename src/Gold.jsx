import { Link, BrowserRouter, Routes, Route, useParams } from "react-router";
import Sandbox from "./Sandbox";
import TabelaProdutos from "./TabelaProdutos";
import RelatorioVendas from "./RelatorioVendas";
import Indice from "./Indice";
import RelatorioBeans from "./RelatorioBeans";
import Venda from "./Venda";
import Pedido from "./Pedido";
import Produto from "./Produto5";
import CriarDespesa from "./CriarDespesa";
import Userclient from "./Userclient";
import BoxGrafico from "./BoxGrafico";
import Timeline from "./Timeline";
import Ambiente from "./Ambiente";

const elementoHome = <h1>Home</h1>;

function DesvioVenda() {
  const { vendaId } = useParams();
  return <Venda vendaId={vendaId} />;
}

function DesvioUserclient() {
  const { userclientId } = useParams();
  return <Userclient userclientId={userclientId} />;
}

function DesvioProduto() {
  const { produtoId } = useParams();
  return <Produto produtoId={produtoId} />;
}

const MATRIX = [
  { pathname: "/", label: "home" },
  { pathname: "/pedido", label: "pedido" },
  { pathname: "/indice", label: "indice" },
  { pathname: "/relatorio_beans", label: "relatorio_beans" },
  { pathname: "/relatorio_vendas", label: "relatorio_vendas" },
  { pathname: "/tabela_produtos", label: "tabela_produtos" },
  { pathname: "/grafico", label: "grafico" },
  { pathname: "/criar_despesa", label: "criar_despesa" },
  { pathname: "/criar_produto", label: "criar_produto" },
  { pathname: "/timeline", label: "timeline" },
  { pathname: "/ambiente", label: "ambiente" },
  { pathname: "/sandbox", label: "sandbox" },
];

function Navbar() {
  return (
    <div className="border border-dark p-1 mb-3">
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
  );
}

export default function Gold() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={elementoHome} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="tabela_produtos" element={<TabelaProdutos />} />
        <Route path="venda/:vendaId" element={<DesvioVenda />} />
        <Route path="userclient/:userclientId" element={<DesvioUserclient />} />
        <Route path="produto/:produtoId" element={<DesvioProduto />} />
        <Route path="criar_produto" element={<Produto produtoId={undefined} />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio_vendas" element={<RelatorioVendas />} />
        <Route path="pedido" element={<Pedido />} />
        <Route path="grafico" element={<BoxGrafico />} />
        <Route path="relatorio_beans" element={<RelatorioBeans />} />
        <Route path="criar_despesa" element={<CriarDespesa />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="ambiente" element={<Ambiente />} />
      </Routes>
    </BrowserRouter>
  );
}
