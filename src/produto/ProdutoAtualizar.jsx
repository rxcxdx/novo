import { useLoaderData } from 'react-router'
import ProdutoFormulario from './ProdutoFormulario'
import ProdutoApagar from './ProdutoApagar'

export default function ProdutoAtualizar() {
  const doc = useLoaderData();
  return (
    <div>
      <div>ProdutoAtualizar</div>
      <div className="mb-1"><ProdutoApagar id={doc.id} /></div>
      {doc.categoria && <div className="text-xs">{JSON.stringify(doc.categoria)}</div>}
      <ProdutoFormulario defaultValues={doc} />
    </div>
  )
}
