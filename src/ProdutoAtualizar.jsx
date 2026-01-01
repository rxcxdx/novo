import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherProduto } from '../src/api'
import ProdutoFormulario from './ProdutoFormulario'

function Conteudo({ promise }) {
  const doc = use(promise)
  return <ProdutoFormulario defaultValues={doc} />
}

export default function ProdutoAtualizar() {
  const { produtoId } = useParams()
  const promise = fetcherProduto(produtoId)
  return (
    <div>
      <div>Componente ProdutoAtualizar</div>
      <Suspense fallback={<div>carregando...</div>}>
        <Conteudo promise={promise} />
      </Suspense>
    </div>
  )
}
