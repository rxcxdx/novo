import { Suspense, use } from 'react'
import { LinkProduto } from './links'
import { fetchProdutos } from './api'


function Conteudo({ produtosPromise }) {
  const docs = use(produtosPromise)
  return (
    <div>
      <div className="hstack gap-3">
        {docs.map((o) => (
          <LinkProduto key={o.id} id={o.id} descricao={o.descricao} />
        ))}
      </div>

    </div>
  )
}

export default function TabelaProdutos() {
  const produtosPromise = fetchProdutos()
  return (
    <Suspense fallback={<div>carregando produtos...</div>}>
      <Conteudo produtosPromise={produtosPromise} />
    </Suspense>
  )
}