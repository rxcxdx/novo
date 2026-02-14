import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherProduto } from '../api'
import ProdutoFormulario from './ProdutoFormulario'
import ProdutoApagar from './ProdutoApagar'

function ProdutoAtualizar({ promise }) {
  const doc = use(promise)
  return (
    <div>
      <ProdutoApagar id={doc.id} />
      <ProdutoFormulario defaultValues={doc} />
    </div>
  )
}

export default function ProdutoAtualizarContainer() {
  const { produtoId } = useParams()
  const promise = fetcherProduto(produtoId)
  return (
    <div>
            <div>Componente ProdutoAtualizarContainer</div>
      <Suspense fallback={<div>carregando produto...</div>}>
        <ProdutoAtualizar promise={promise} />
      </Suspense>
    </div>
  )
}
