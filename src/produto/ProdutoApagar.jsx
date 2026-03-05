import { useTransition } from 'react'
import { mutateApagarProduto } from '../api'

const ESTILO_PENDING = 'border text-red-500 disabled:text-gray-300'

export default function ProdutoApagar({ id }) {
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    await mutateApagarProduto(id)
  }
  return (
    <button
      disabled={isPending}
      className={ESTILO_PENDING}
      onClick={() => startTransition(action)}
    >
      apagar
    </button>
  )
}
