import { useTransition } from 'react'
import { mutateApagarVenda } from './api'

const ESTILO_PENDING = 'border text-red-500 disabled:text-gray-300'

export default function BtnVendaApagar({ _id }) {
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    await mutateApagarVenda(_id)
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
