import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetcherLogin } from './api'
import { toast } from 'sonner'

export default function Login() {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false)
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const tarefa = async () => {
    try {
      const o = await fetcherLogin(a, b)
      dispatch({
        type: 'LOGIN',
        payload: o
      })
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className="border p-2 w-xs bg-yellow-100">
      <div>username</div>
      <div>
        <input
          type="text"
          className="border w-40"
          value={a}
          onChange={(evt) => setA(evt.target.value)}
        />
      </div>

      <div>password</div>
      <div>
        <input
          type={flag ? 'text' : 'password'}
          className="border w-40"
          value={b}
          onChange={(evt) => setB(evt.target.value)}
        />
      </div>

      <div>
        <input type="checkbox" checked={flag} onChange={() => setFlag(!flag)} />{' '}
        Exibir senha
      </div>

      <div>
        <button className="border-2" onClick={tarefa}>
          ENTRAR
        </button>
      </div>
    </div>
  )
}
