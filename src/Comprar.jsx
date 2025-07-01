import { useDispatch, useStore } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import BoxError from './BoxError'
import delay from 'delay'
import { useState } from 'react'

async function buy(o) {
  await delay(600)
  const response = await axios.post('/ws/buy', o)
  return response.data
}

export default function Comprar() {
  const store = useStore()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const tarefa = async () => {
    try {
      setLoading(true)
      const ATUAL = store.getState()
      const o = {
        cart: ATUAL.cart,
        username: ATUAL.username
      }
      const v = await buy(o)
      toast.success(v)
      dispatch({ type: 'RESET_CART' })
    } catch (error) {
      toast.error(<BoxError payload={error} />)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        className="btn btn-success"
        disabled={loading}
        onClick={() => tarefa()}
      >
        Comprar
      </button>
    </div>
  )
}
