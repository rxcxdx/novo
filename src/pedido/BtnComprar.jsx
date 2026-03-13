import { useTransition } from 'react'
import { useDispatch, useStore } from 'react-redux'
// import { toast } from 'sonner'
import { mutateBuy } from '../api'
// import { BoxError } from '../fallbacks'
import { clearAction } from '../redux'
import { ESTILO_PENDING } from '../estilos'

export default function BtnComprar() {
  const dispatch = useDispatch()
  const store = useStore()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    // try {
    const ATUAL = store.getState()
    const dto = {
      cart: ATUAL.cart,
      username: ATUAL.username,
      obs: ATUAL.obs
    }
    await mutateBuy(dto)
    dispatch(clearAction())
    // } catch (error) {
    // toast.error(<BoxError error={error} />, {
    // icon: null
    // })
    // }
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
