import { Link } from 'react-router'

const rotas = [
  { path: '/', label: 'home' },
  { path: '/indice', label: 'indice' },
  { path: '/relatorio', label: 'relatorio' },
  { path: '/itens', label: 'itens' },
  { path: '/grafico', label: 'grafico' },
  { path: '/produtos', label: 'produtos' },
  { path: '/pedido', label: 'pedido' },
  { path: '/timeline_itens', label: 'timeline_itens' },
  { path: '/timeline_vendas', label: 'timeline_vendas' },
  { path: '/sandbox', label: 'sandbox' }
]

export default function Navbar() {
  return (
    <div className="mb-3 bg-yellow-100">
      <div className="flex gap-x-3 gap-y-1 flex-wrap justify-center">
        {rotas.map((o, i) => (
          <Link key={i} to={o.path}>
            {o.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
