import { Suspense, use } from 'react'
import { fetcherProdutos } from './api'
import { Link } from 'react-router'

function Produtos({ produtosPromise }) {
  const docs = use(produtosPromise)
  const lista = docs.map((o) => (
    <div key={o.id}>
      <Link to={'/produto/' + o.id}>{o.descricao}</Link>
    </div>
  ))
  return (
    <div className='d-flex gap-3 flex-wrap'>
      {lista}
    </div>
  )
}

export function ProdutosContainer() {
  const produtosPromise = fetcherProdutos()
  return (
    <div>
      <Suspense fallback={<div>carregando produtos...</div>}>
        <Produtos produtosPromise={produtosPromise} />
      </Suspense>
    </div>
  )
}
