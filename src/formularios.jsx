import dayjs from 'dayjs'
import { useState, useTransition } from 'react'

const DIA_ATUAL = dayjs().format('YYYY-MM-DD')
const MES_ATUAL = dayjs().format('YYYY-MM')
const ESTILO_INPUT = "border border-secondary bg-white rounded-0"
const ESTILO_BTN = "border border-light bg-info"

export function FormularioDia({ fetcher, onSuccess }) {
  const [state, setState] = useState(DIA_ATUAL)
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const rs = await fetcher(state)
    onSuccess(rs)
  }
  return (
    <div>
      <div className="mb-1">
        <input
          className={ESTILO_INPUT}
          style={{ width: '200px' }}
          type="date"
          value={state}
          onChange={(evt) => setState(evt.target.value)}
        />
      </div>
      <div className="mb-1">
        <button
          onClick={() => startTransition(action)}
          disabled={isPending}
          className={ESTILO_BTN}
        >
          Pesquisar
        </button>
      </div>
    </div>
  )
}

export function FormularioMes({ fetcher, onSuccess }) {
  const [state, setState] = useState(MES_ATUAL)
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const rs = await fetcher(state)
    onSuccess(rs)
  }
  return (
    <div>
      <div className="mb-1">
        <input
          className={ESTILO_INPUT}
          style={{ width: '200px' }}
          type="month"
          value={state}
          onChange={(evt) => setState(evt.target.value)}
        />
      </div>
      <div className="mb-1">
        <button
          onClick={() => startTransition(action)}
          disabled={isPending}
          className={ESTILO_BTN}
        >
          Pesquisar
        </button>
      </div>
    </div>
  )
}

export function FormularioRange({ fetcher, onSuccess }) {
  const [a, setA] = useState(DIA_ATUAL)
  const [b, setB] = useState(DIA_ATUAL)
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const rs = await fetcher(a, b)
    onSuccess(rs)
  }
  return (
    <div>
      <div className="mb-1">
        <input
          className={ESTILO_INPUT}
          style={{ width: '200px' }}
          type="date"
          value={a}
          onChange={(evt) => setA(evt.target.value)}
        />
      </div>

      <div className="mb-1">
        <input
          className={ESTILO_INPUT}
          style={{ width: '200px' }}
          type="date"
          value={b}
          onChange={(evt) => setB(evt.target.value)}
        />
      </div>

      <div className="mb-1">
        <button
          onClick={() => startTransition(action)}
          disabled={isPending}
          className={ESTILO_BTN}
        >
          Pesquisar
        </button>
      </div>
    </div>
  )
}
