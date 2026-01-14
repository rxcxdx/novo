import { useDispatch, useSelector } from 'react-redux'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { mutateBuy } from '../api'

const ESTILO_PENDING = 'text-green-700 disabled:text-red-300'

export default function Comprar({ cart }) {
  const [isPending, startTransition] = useTransition()
  const username = useSelector((store) => store.username)
  const obs = useSelector((store) => store.obs)
  const dispatch = useDispatch()
  const action = async () => {
    try {
      const dto = { cart, username, obs }
      const o = await mutateBuy(dto)
      toast.success(
        <div>
          <div>{o._id}</div>
          <div>{o.dt}</div>
        </div>
      )
      dispatch({ type: 'CLEAR' })
    } catch (e) {
      toast.error(e.message, { icon: null })
    }
  }
  return (
    <div>
      <button
      disabled={isPending}
        className={ESTILO_PENDING}
        onClick={() => startTransition(action)}
      >
        COMPRAR
      </button>
    </div>
  )
}
