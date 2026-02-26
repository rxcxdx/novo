import { Suspense, use } from 'react'
import { fetcherProdutos } from './api'
import { Link } from 'react-router'

function Produtos({ promise }) {
  const docs = use(promise)
  const lista = docs.map((o) => (
    <Link
      key={o.id}
      className="underline text-blue-600"
      to={'/produto/' + o.id}
    >
      {o.descricao}
    </Link>
  ))
  return <div className="flex flex-wrap  gap-3">{lista}</div>
}

export function ProdutosContainer() {
  const promise = fetcherProdutos()
  return (
    <div>
      <Suspense fallback={<div>carregando produtos...</div>}>
        <Produtos promise={promise} />
      </Suspense>
    </div>
  )
}
