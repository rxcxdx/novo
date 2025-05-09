import { BrowserRouter, Routes, Route, useParams } from "react-router";
import Navbar from "./Navbar";
import Sandbox from "./Sandbox";
import TabelaProdutos from "./TabelaProdutos";
import Cvendas from "./Cvendas";
import RelatorioVendas from "./RelatorioVendas";
import Indice from "./Indice";
import RelatorioBeans from "./RelatorioBeans";
import Venda from "./Venda";
import Pedido from "./Pedido";
import BoxGraficoDias from "./BoxGraficoDias";
import BoxProdutoUpsert from "./BoxProdutoUpsert";
import CriarDespesa from "./CriarDespesa";
import Produtos from "./Produtos";

function DesvioProdutoUpsert() {
  const routerParams = useParams();
  return <BoxProdutoUpsert productId={routerParams.productId} />;
}

function DesvioVenda() {
  const routerParams = useParams();
  return <Venda vendaId={routerParams.vendaId} />;
}

const elementoHome = <div>Home</div>;

const elementoSucesso = <div className="text-success">Sucesso</div>;

export default function Gold() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={elementoHome} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="tabela_produtos" element={<TabelaProdutos />} />
        <Route path="criar_despesa" element={<CriarDespesa />} />
        <Route path="c_vendas" element={<Cvendas />} />
        <Route path="novo_produto" element={<BoxProdutoUpsert />} />
        <Route path="produto/:productId" element={<DesvioProdutoUpsert />} />
        <Route path="indice" element={<Indice />} />
        <Route path="venda/:vendaId" element={<DesvioVenda />} />
        <Route path="relatorio_vendas" element={<RelatorioVendas />} />
        <Route path="pedido" element={<Pedido />} />        
        <Route path="grafico_dias" element={<BoxGraficoDias />} />
        <Route path="relatorio_beans" element={<RelatorioBeans />} />
        <Route path="produtos" element={<Produtos />} />
        

        <Route path="sucesso" element={elementoSucesso} />
      </Routes>
    </BrowserRouter>
  );
}
