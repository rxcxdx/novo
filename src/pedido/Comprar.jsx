import { useTransition } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { mutateBuy } from '../api'
import { toastError } from '../toast'

const ESTILO_PENDING = 'border text-green-700 disabled:text-gray-300'

export default function Comprar() {
  const dispatch = useDispatch()
  const store = useStore()
  const [isPending, startTransition] = useTransition()
  const cartClear = () => {
    dispatch({ type: 'CART_CLEAR' })
  }
  const action = async () => {
    try {
      const ATUAL = store.getState()
      const dto = {
        cart: ATUAL.cart,
        username: ATUAL.username,
        obs: ''
      }
      await mutateBuy(dto)
      cartClear()
    } catch (e) {
      toastError(e.message)
    }
  }
  return (
    <div>
      <button
        disabled={isPending}
        className={ESTILO_PENDING}
        onClick={() => startTransition(action)}
      >
        Comprar
      </button>
      &nbsp;&nbsp;&nbsp;
      <button className="border" onClick={cartClear}>
        Clear
      </button>
    </div>
  )
}
