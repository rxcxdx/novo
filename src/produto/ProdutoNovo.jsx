import ProdutoFormulario from './ProdutoFormulario'

const defaultValues = { descricao: '', valor: 0 }

export default function ProdutoNovo() {
  return (
    <div>
      <div>Componente ProdutoNovo</div>
      <ProdutoFormulario defaultValues={defaultValues} />
    </div>
  )
}
  