import { useTransition } from 'react'
import { mutateApagarProduto } from '../api'

const ESTILO_PENDING = 'text-red-600 border disabled:opacity-25'

export default function ProdutoApagar({ id }) {
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    await mutateApagarProduto(id)
  }
  return (
    <button
      onClick={() => startTransition(action)}
      className={ESTILO_PENDING}
      disabled={isPending}
    >
      apagar
    </button>
  )
}
