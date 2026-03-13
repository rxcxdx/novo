import { mutateApagarVenda } from './api'
import { toast } from 'sonner'
import { BoxError } from './fallbacks'

export default function BtnVendaApagar({ _id }) {
  const tarefa = async () => {
    try {
      await mutateApagarVenda(_id)
      toast.success('sucesso')
    } catch (error) {
      toast.error(<BoxError error={error} />)
    }
  }

  return (
    <button className="bg-red-300" onClick={tarefa}>
      apagar
    </button>
  )
}
