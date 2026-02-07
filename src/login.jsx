import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetcherLogin } from './api'
import { toast } from 'sonner'

export function Logoff() {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch({
      type: 'LOGOFF'
    })
  }
  return (
    <div>
      <button onClick={tarefa} className="border bg-red-300">
        logoff
      </button>
    </div>
  )
}

export function Login() {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false)
  const [formulario, setFormulario] = useState({ username: '', password: '' })

  const tarefa = async () => {
    try {
      const o = await fetcherLogin(formulario)
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
          type='text'
          className="border w-40"
          value={formulario.username}
          onChange={(evt) => {
            setFormulario({ ...formulario, username: evt.target.value })
          }}
        />
      </div>
      <br />
      <div>password</div>
      <div>
        <input
          type={flag ? 'text' : 'password'}
          className="border w-40"
          value={formulario.password}
          onChange={(evt) => {
            setFormulario({ ...formulario, password: evt.target.value })
          }}
        />
      </div>
      <br />
      <div>
        <input type="checkbox" checked={flag} onChange={() => setFlag(!flag)} />{' '}
        Exibir senha
      </div>
      <br />
      <div>
        <button className="border" onClick={tarefa}>
          ENTRAR
        </button>
      </div>
    </div>
  )
}
