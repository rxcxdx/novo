import { useRef, useState, useTransition } from 'react'
import axios from 'axios'
import { LinkVenda } from './links'
import ModalVenda from './ModalVenda'
import { diaAtual } from './ajuda'
import delay from 'delay'
import dayjs from 'dayjs'

function Horario({ payload }) {
  const v = dayjs(payload).format('DD/MM/YYYY HH:mm:ss')
  return <span>{v}</span>
}

export default function Indice() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState([])
  const ref = useRef()
  const action = async () => {
    await delay(600)
    const response = await axios('/ws/indice', {
      params: { dia: ref.current.value }
    })
    setState(response.data)
  }
  const tabela = state.map((o) => (
    <div key={o._id}>
      <div className="hstack gap-3">
      <ModalVenda vendaId={o._id} />
        <LinkVenda vendaId={o._id} />
        <Horario payload={o.dt} />
        <small>{o.username}</small>
      </div>
    </div>
  ))
  return (
    <div>
      <div>devolve arr</div>
      <div className="hstack gap-3">
        <input type="date" ref={ref} defaultValue={diaAtual} />
        <button
          disabled={isPending}
          className="btn btn-primary"
          onClick={() => startTransition(action)}
        >
          Pesquisar
        </button>
      </div>
      <div>linhas: {state.length}</div>
      {tabela}
    </div>
  )
}