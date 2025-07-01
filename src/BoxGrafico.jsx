import { useRef, useState, useTransition } from 'react'
import { mesAtual } from './ajuda'
import axios from 'axios'
import delay from 'delay'
import Grafico from './Grafico'


export default function BoxGrafico() {
  const [state, setState] = useState([])
  const ref = useRef()
  const [isPending, startTransition] = useTransition()

  const action = async () => {
    await delay(600)
    const response = await axios('/ws/grafico', { params: { mes: ref.current.value } })
    setState(response.data)
  }

  return (
    <div>


      <div className="row g-3 align-items-end">
        <div className="col-auto">
          <div>
            <small>Mês</small>
          </div>
          <input
            defaultValue={mesAtual}
            ref={ref}
            type="month"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => startTransition(action)} disabled={isPending}>
            Pesquisar
          </button>
        </div>
      </div>

      <Grafico paylod={state} />

    </div>
  )
}
