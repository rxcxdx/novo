import { useDispatch, useSelector } from 'react-redux'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { mutateBuy } from '../api'

const ESTILO_PENDING = 'text-green-700 disabled:text-red-300'

export default function Comprar({ cart }) {
  const [isPending, startTransition] = useTransition()
  const userclient = useSelector((store) => store.userclient)
  const dispatch = useDispatch()
  const action = async () => {
    try {
      const dto = { cart, username: userclient.username }
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
    <div className='border w-xs p-2'>
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
