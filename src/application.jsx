import { Link, BrowserRouter } from 'react-router'
import Roteamento from './Roteamento'

const rotas = [
  { path: '/', label: 'home' },
  { path: '/indice', label: 'indice' },
  { path: '/relatorio', label: 'relatorio' },
  { path: '/itens', label: 'itens' },
  { path: '/grafico', label: 'grafico' },
  { path: '/produtos', label: 'produtos' },
  { path: '/pedido', label: 'pedido' }
]

function Navbar() {
  return (
    <div className="border mb-3 bg-yellow-100">
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

export function Application() {
  /*
  useEffect(() => {
    console.log('montou Application')
    return () => {
      console.log('desmontou Application')
    }
  }, [])
  */

  return (
    <BrowserRouter>
      <Navbar />
      <Roteamento />
    </BrowserRouter>
  )
}
