import { useDispatch, useSelector, useStore } from 'react-redux'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { mutateBuy } from '../api'

const ESTILO_PENDING = 'border text-green-700 disabled:text-gray-300'

export default function Comprar() {
  const userclient = useSelector((store) => store.userclient)
  const [isPending, startTransition] = useTransition()
  const dispatch = useDispatch()
  const store = useStore()

  const cartClear = () => {
    dispatch({ type: 'CART_CLEAR' })
  }

  const action = async () => {
    try {
      const ATUAL = store.getState()
      const dto = {
        cart: ATUAL.cart,
        username: userclient.username,
        obs: ''
      }
      await mutateBuy(dto)
      cartClear()
    } catch (e) {
      toast.error(e.message, { description: e.name, icon: null })
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
