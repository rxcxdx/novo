import { useDispatch, useStore } from 'react-redux'

import { useTransition } from 'react'
import { buy } from './api'
import { App } from 'antd';

export default function Comprar() {
  const { notification } = App.useApp();
  const store = useStore()
  const dispatch = useDispatch()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const ATUAL = store.getState()
    const o = {
      cart: ATUAL.cart,
      username: ATUAL.username
    }
    const v = await buy(o)
    
    notification.success({ message: v})
    dispatch({ type: 'RESET_CART' })
  }
  return <button
  className="btn btn-success"
  disabled={isPending}
  onClick={() => startTransition(action)}
>
  Comprar
</button>
}