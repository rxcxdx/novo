import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherProduto } from '../api'
import ProdutoFormulario from './ProdutoFormulario'
import ProdutoApagar from './ProdutoApagar'

function ProdutoAtualizarConteudo({ promise }) {
  const doc = use(promise)
  return (
    <div>
      <div>
        <ProdutoApagar id={doc.id} />
      </div>


      <ProdutoFormulario defaultValues={doc} />
    </div>
  )
}

export default function ProdutoAtualizar() {
  const { produtoId } = useParams()
  const promise = fetcherProduto(produtoId)
  return (
    <div>
      <div>Componente ProdutoAtualizar</div>
      <Suspense fallback={<div>carregando produto...</div>}>
        <ProdutoAtualizarConteudo promise={promise} />
      </Suspense>
    </div>
  )
}
