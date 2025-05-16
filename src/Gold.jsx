import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Sandbox from "./Sandbox";
import TabelaProdutos from "./TabelaProdutos";
import Cvendas from "./Cvendas";
import RelatorioVendas from "./RelatorioVendas";
import Indice from "./Indice";
import RelatorioBeans from "./RelatorioBeans";
import Venda from "./Venda";
import Pedido from "./Pedido";
import BoxGraficoMes from "./BoxGraficoMes";
import Produto from "./Produto";
import CriarDespesa from "./CriarDespesa";
import Userclient from "./Userclient";
import TabelaUserclients from "./TabelaUserclients";

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
        <Route path="tabela_userclients" element={<TabelaUserclients   />} />

        <Route path="c_vendas" element={<Cvendas />} />
        <Route path="produto/:productId" element={<Produto />} />
        <Route path="venda/:vendaId" element={<Venda />} />
        <Route path="userclient/:userclientId" element={<Userclient />} />
        <Route path="indice" element={<Indice />} />
        <Route path="relatorio_vendas" element={<RelatorioVendas />} />
        <Route path="pedido" element={<Pedido />} />    
        <Route path="grafico_mes" element={<BoxGraficoMes />} />
        <Route path="relatorio_beans" element={<RelatorioBeans />} />
        <Route path="criar_despesa" element={<CriarDespesa />} /> 
        <Route path="sucesso" element={elementoSucesso} />
      </Routes>
    </BrowserRouter>
  );
}
