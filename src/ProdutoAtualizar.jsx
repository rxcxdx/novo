import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherProduto, fetcherCategorias } from '../src/api'
import ProdutoFormulario from './ProdutoFormulario'

function Conteudo({ piecesPromise }) {
  const [doc, options] = use(piecesPromise)
  return <ProdutoFormulario defaultValues={doc} options={options} />
}

export default function ProdutoAtualizar() {
  const { produtoId } = useParams()
  const piecesPromise = Promise.all([
    fetcherProduto(produtoId),
    fetcherCategorias()
  ])
  return (
    <div>
      <div>Componente ProdutoAtualizar</div>
      <Suspense fallback={<div>carregando pieces...</div>}>
        <Conteudo piecesPromise={piecesPromise} />
      </Suspense>
    </div>
  )
}
