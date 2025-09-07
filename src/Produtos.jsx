import { Suspense, use } from 'react'
import { fetcherProdutos } from './api'
import { Link } from 'react-router'

function Conteudo({ produtosPromise }) {
  const docs = use(produtosPromise)
  const lista = docs.map((o) => (
    <div key={o.id}>
      <Link to={'/produto/' + o.id}>{o.descricao}</Link>
    </div>
  ))
  return lista
}

export default function Produtos() {
  const produtosPromise = fetcherProdutos()
  return (
    <div>
      <Suspense fallback={<div>carregando...</div>}>
        <Conteudo produtosPromise={produtosPromise} />
      </Suspense>
    </div>
  )
}
