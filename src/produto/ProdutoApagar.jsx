import { toast } from 'sonner'
import { mutateApagarProduto } from '../api'

export default function ProdutoApagar({id}) {
  const apagar = async () => {
    try {
      await mutateApagarProduto(id)
      toast.success('sucesso apagar')
    } catch (e) {
      toast.error(e.message)
    }
  }
  return (
    <div>
      <button className="text-red-500" onClick={apagar}>apagar_produto</button>
    </div>
  )
}
