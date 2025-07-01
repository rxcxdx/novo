import { useRef, useState, useTransition } from 'react'
import { diaAtual } from './ajuda'
import delay from 'delay'
import axios from 'axios'

export default function Relatorio() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState({})
  const refA = useRef()
  const refB = useRef()
  const action = async () => {
    const dto = {
      gte: refA.current.value,
      lte: refB.current.value
    }
    await delay(600)
    const response = await axios('/ws/relatorio', { params: dto })
    setState(response.data)
  }
  return (
    <div>
      <div>
        <div className="row g-3">
          <div className="col-auto">
            <div>gte</div>
            <input ref={refA} type="date" defaultValue={diaAtual} />
          </div>
          <div className="col-auto">
            <div>lte</div>
            <input ref={refB} type="date" defaultValue={diaAtual} />
          </div>
          <div className="col-12">
            <button
            className="btn btn-primary"
              disabled={isPending}
              onClick={() => startTransition(action)}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
      <div className="text-success">
        <div>quantidadeDeVendas: {state.quantidadeDeVendas}</div>
        <div>itens: {state.itens}</div>
        <div>total: {state.total}</div>
      </div>
    </div>
  )
}
