import { Suspense, use } from 'react'
import { fetcherCategorias } from '../src/api'
import ProdutoFormulario from './ProdutoFormulario'

const defaultValues = { descricao: '', valor: '', categoria: null }

function Conteudo({ categoriasPromise }) {
  const options = use(categoriasPromise)
  return <ProdutoFormulario defaultValues={defaultValues} options={options} />
}

export default function ProdutoNovo() {
  const categoriasPromise = fetcherCategorias()
  return (
    <div>
      <div>Componente ProdutoNovo</div>
      <Suspense fallback={<div>carregando categorias...</div>}>
        <Conteudo categoriasPromise={categoriasPromise} />
      </Suspense>
    </div>
  )
}
