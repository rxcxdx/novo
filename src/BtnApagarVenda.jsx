import { useTransition } from 'react'
import { mutateApagarVenda } from './api'

const ESTILO_PENDING = 'text-red-600 border disabled:opacity-25'

export default function BtnApagarVenda({ value }) {
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    await mutateApagarVenda(value)
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
