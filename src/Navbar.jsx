import { Link } from "react-router"

const MATRIX = [
  { pathname: '/pedido', label: 'pedido' },
  { pathname: '/indice', label: 'indice' },
  { pathname: '/c_vendas', label: 'c_vendas' },
  { pathname: '/relatorio_beans', label: 'relatorio_beans' },
  { pathname: '/relatorio_vendas', label: 'relatorio_vendas' },
  { pathname: '/produtos', label: 'produtos' },
  { pathname: '/grafico_horas', label: 'grafico_horas' },
  { pathname: '/grafico_dias', label: 'grafico_dias' },
  { pathname: '/despesas', label: 'despesas' },
  { pathname: '/timeline', label: 'timeline' },
  { pathname: '/sandbox', label: 'sandbox' },
]

export default function Navbar() {
  return (
    <div style={{ marginBottom: '10px', backgroundColor: '#d69292' }}>
      <div className="row g-3">
        {MATRIX.map((o, i) => (
          <div key={i} className="col-auto">
            <Link style={{ fontSize: '1.2rem', color: 'black' }} to={o.pathname}>{o.label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}