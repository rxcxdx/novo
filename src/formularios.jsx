import { useState, useTransition } from 'react'
import { diaAtual, mesAtual } from './utils'

const ESTILO_LOADING = 'text-green-700 disabled:text-red-700'

export function FormularioDia({ fetcher, onSuccess }) {
  const [state, setState] = useState(diaAtual)
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const rs = await fetcher(state)
    onSuccess(rs)
  }
  return (
    <div className="flex gap-3">
      <input
        className="border"
        type="date"
        value={state}
        onChange={(evt) => setState(evt.target.value)}
      />
      <button
        onClick={() => startTransition(action)}
        disabled={isPending}
        className={ESTILO_LOADING}
      >
        Pesquisar
      </button>
    </div>
  )
}

export function FormularioMes({ fetcher, onSuccess }) {
  const [state, setState] = useState(mesAtual)
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const rs = await fetcher(state)
    onSuccess(rs)
  }
  return (
    <div className="flex gap-3">
      <input
        className="border"
        type="month"
        value={state}
        onChange={(evt) => setState(evt.target.value)}
      />
      <button
        onClick={() => startTransition(action)}
        disabled={isPending}
        className={ESTILO_LOADING}
      >
        Pesquisar
      </button>
    </div>
  )
}

export function FormularioRange({ fetcher, onSuccess }) {
  const [state, setState] = useState({ gte: diaAtual, lte: diaAtual })
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const rs = await fetcher(state)
    onSuccess(rs)
  }
  return (
    <div className="flex gap-3">
      <input
        className="border"
        type="date"
        value={state.gte}
        onChange={(evt) => setState({ ...state, gte: evt.target.value })}
      />
      <input
        className="border"
        type="date"
        value={state.lte}
        onChange={(evt) => setState({ ...state, lte: evt.target.value })}
      />
      <button
        onClick={() => startTransition(action)}
        disabled={isPending}
        className={ESTILO_LOADING}
      >
        Pesquisar
      </button>
    </div>
  )
}
