import ProdutoFormulario from './ProdutoFormulario'

const defaultValues = { descricao: '', valor: null }

export default function ProdutoNovo() {
  return (
    <div>
      <div>Componente ProdutoNovo</div>
      <ProdutoFormulario defaultValues={defaultValues} />
    </div>
  )
}
