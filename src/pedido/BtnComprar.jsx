import { useTransition } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { mutateBuy } from '../api'
import { clearAction } from '../redux'
import { toast } from 'sonner'
import { BoxError } from '../fallbacks'

const ESTILO_PENDING = 'border text-green-800 disabled:opacity-25'

export default function BtnComprar() {
  const dispatch = useDispatch()
  const store = useStore()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    try {
      const ATUAL = store.getState()
    const dto = {
      cart: ATUAL.cart,
      username: 'zeca',
      obs: ATUAL.obs
    }
    await mutateBuy(dto)
    dispatch(clearAction())
    } catch (error) {
      toast.error(<BoxError error={error} />, {
        icon: null
      })
    }
  }
  return (
    <button
      disabled={isPending}
      className={ESTILO_PENDING}
      onClick={() => startTransition(action)}
    >
      comprar
    </button>
  )
}
