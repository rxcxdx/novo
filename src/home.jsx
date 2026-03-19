import { useState } from 'react'
import { useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa'
import Vermelho from './Vermelho'

function GoVenda() {
  const navigate = useNavigate()
  const [state, setState] = useState('')
  const tarefa = () => {
    if (!state) return
    navigate('/venda/' + state)
  }
  return (
    <div className="flex gap-1">
      <input
        value={state}
        type="text"
        className="border w-48"
        onChange={(evt) => setState(evt.target.value)}
      />
      <button onClick={tarefa}>
        <FaSearch />
      </button>
    </div>
  )
}

export function BoxHome() {
  return (
    <div className="border p-1 w-xs">
      <GoVenda />
      <br />
      <Vermelho />
    </div>
  )
}
