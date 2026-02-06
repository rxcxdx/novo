import { Suspense, use } from 'react'
import { fetcherProdutos } from './api'
import { Link } from 'react-router'

function Produtos({ promise }) {
  const docs = use(promise)
  const lista = docs.map((o) => (
    <div key={o.id}>
      <Link to={'/produto/' + o.id}>{o.descricao}</Link>
    </div>
  ))
  return lista
}

export function ProdutosContainer() {
  const promise = fetcherProdutos()
  return (
    <div>
      <Suspense fallback={<div>carregando...</div>}>
        <Produtos promise={promise} />
      </Suspense>
    </div>
  )
}
