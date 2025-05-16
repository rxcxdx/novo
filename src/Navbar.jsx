import { Link } from "react-router";

const MATRIX = [
  { pathname: "/pedido", label: "pedido" },
  { pathname: "/indice", label: "indice" },
  { pathname: "/c_vendas", label: "c_vendas" },
  { pathname: "/relatorio_beans", label: "relatorio_beans" },
  { pathname: "/relatorio_vendas", label: "relatorio_vendas" },
  { pathname: "/tabela_produtos", label: "tabela_produtos" },
  { pathname: "/tabela_userclients", label: "tabela_userclients" },
  { pathname: "/grafico_mes", label: "grafico_mes" },
  { pathname: "/criar_despesa", label: "criar_despesa" },
  { pathname: "/sandbox", label: "sandbox" },
];

export default function Navbar() {
  return (
    <div style={{ marginBottom: "10px", backgroundColor: "#d69292" }}>
      <div className="row g-2">
        {MATRIX.map((o, i) => (
          <div key={i} className="col-auto">
            <Link
              style={{ fontSize: ".9rem", color: "black" }}
              to={o.pathname}
            >
              {o.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
